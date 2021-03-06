import {
  css,
  customElement,
  html,
  state,
  property,
  TemplateResult,
} from 'lit-element';
import SlInput from '@shoelace-style/shoelace/dist/components/input/input';
import { until } from 'lit-html/directives/until.js';
import { classMap } from 'lit-html/directives/class-map';
import { ifDefined } from 'lit-html/directives/if-defined';
import { CodedTextElement } from './CodedTextElement';
import MbFilter from './filter';
import SlDropdown from './dropdown';
import { AxiosInstance } from 'axios';
import { watch } from '../../internal/decorators';

import './dropdown';
import '@shoelace-style/shoelace/dist/components/spinner/spinner';
import '@shoelace-style/shoelace/dist/components/menu/menu';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item';
import '@shoelace-style/shoelace/dist/components/icon/icon';
import '@shoelace-style/shoelace/dist/components/tag/tag';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button';
import { hermesPlugin, joinSnomedConstraints } from './searchFunctions';

@customElement('mb-search')
export default class MbSearch extends CodedTextElement {
  /** @ignore */
  static styles = css`
    :host,
    mb-dropdown {
      display: block;
    }

    sl-input.pointer::part(base) {
      cursor: default;
    }

    .tags {
      padding: var(--sl-spacing-xx-small) var(--sl-spacing-x-large);
    }

    .more {
      display: flex;
      justify-content: space-between;
      padding: var(--sl-spacing-xxx-small) var(--sl-spacing-small);
    }
    .tags sl-tag {
      padding: var(--sl-spacing-xx-small);
    }

    sl-tag::part(base) {
      cursor: pointer;
    }
  `;

  @property({ type: String }) searchTerm: string;

  @property({ type: Array }) _filters: MbFilter[];

  @property({ type: Array }) _cancelledFilters: string[] = [];

  @property({ type: Array }) mock: string[] = [];

  @property({ type: Object }) axios: AxiosInstance;

  @property({ type: Number }) debounceInterval = 150;

  @property({ type: Number }) hits = 10;

  @property({ type: String }) parentAxiosKey: string = 'hermes';

  @property({ type: Object }) plugin = {
    search: hermesPlugin,
    getConstraints: joinSnomedConstraints,
  };

  @state() _moreHits: number = 0;

  @state() _debouncing: boolean = false;

  @state() _debounceTimeout: number;

  get _maxHits() {
    return this.hits + this._moreHits;
  }

  @watch('searchTerm')
  _searchTermChange() {
    clearTimeout(this._debounceTimeout);
    this._debouncing = true;
    this._debounceTimeout = window.setTimeout(() => {
      this._debouncing = false;
    }, this.debounceInterval);
  }

  _handleInput(e: CustomEvent) {
    const inputElement = e.target as SlInput;
    this.searchTerm = inputElement.value;
    const dropdown = this.renderRoot.querySelector('mb-dropdown') as SlDropdown;
    dropdown.show();
  }

  get _constraint() {
    const filters = this._filters
      ?.filter(filter => !filter.disabled)
      ?.map(filter => filter.value);
    return this.plugin?.getConstraints(filters);
  }

  get _viewMore() {
    return html` <div class="more">
      <sl-button
        type="text"
        @click=${() => {
          this._moreHits += 10;
        }}
      >
        <sl-icon name="caret-down-fill" slot="prefix"></sl-icon>More</sl-button
      >
      ${this._maxHits > this.hits
        ? html`<sl-button
            type="text"
            @click=${() => {
              this._moreHits -= 10;
            }}
          >
            <sl-icon name="caret-up-fill" slot="prefix"></sl-icon
            >Less</sl-button
          >`
        : null}
    </div>`;
  }

  get _parentAxios(): AxiosInstance {
    const dependencyEvent = this._mbDependency.emit({
      detail: { key: this.parentAxiosKey },
    });
    return dependencyEvent.detail.value;
  }

  /**Function to get results from an external source */
  async getResults(): Promise<TemplateResult | TemplateResult[]> {
    if (this._debouncing) {
      return this._loadingResults;
    }

    if (this.mock.length) {
      return this.mock.map(
        r => html`<sl-menu-item value=${r} .label=${r}>${r}</sl-menu-item>`
      );
    }

    if (!this.searchTerm) {
      return [];
    }
    try {
      const axios = this.axios ? this.axios : this._parentAxios;
      const result = await this.plugin.search({
        maxHits: this._maxHits,
        searchString: this.searchTerm,
        axios,
        constraint: this._constraint,
      });
      const results = result.map(
        r =>
          html`
            <sl-menu-item
              value=${r.value}
              .label=${r.label}
              .terminology=${this.terminology}
            >
              ${r.star
                ? html`<sl-icon slot="suffix" name="star"></sl-icon>`
                : null}
              ${r.label}
            </sl-menu-item>
          `
      );
      if (results?.length === 0) {
        return html`<sl-menu-item disabled>No results</sl-menu-item>`;
      }
      return this._maxHits === results.length
        ? [...results, this._viewMore]
        : results;
    } catch (e) {
      console.error(e);
      return html`
        <sl-menu-item disabled>
          <sl-icon name="exclamation-triangle" slot="prefix"></sl-icon>
          An unexpected error occured
        </sl-menu-item>
      `;
    }
  }

  get _loadingResults(): TemplateResult {
    const skeletons = 5;
    return html`${[...Array(skeletons)].map(
      () => html` <sl-menu-item disabled class="loading">
        <sl-skeleton effect="sheen"></sl-skeleton>
      </sl-menu-item>`
    )}`;
  }

  _handleSelect(e: CustomEvent) {
    const menuItem = e.detail.item;
    this.data = {
      value: menuItem.label,
      code: menuItem.value,
      terminology: menuItem.terminology,
    };
    this._mbInput.emit();
  }

  connectedCallback() {
    super.connectedCallback();
    // Emit register event
    // Get axios instance from parent
    // If not, default or error
    const observer = new MutationObserver(() => {
      this._handleChildChange();
    });
    observer.observe(this, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  }

  _handleChildChange() {
    this._filters = [
      ...(this.querySelectorAll('mb-filter') as NodeListOf<MbFilter>),
    ];
  }

  _handleClear() {
    this.data = undefined;
    this._moreHits = 0;
    this._mbInput.emit();
  }

  get _hasValue() {
    return this?.data?.value && this?.data?.code ? true : false;
  }

  get _display() {
    return this._hasValue ? this.data?.value : undefined;
  }

  get _code() {
    return this._hasValue ? this.data?.code : undefined;
  }

  render() {
    return html`
      <mb-dropdown
        .focusKeys=${['Enter']}
        .typeToSelect=${false}
        @sl-after-hide=${() => {
          this._cancelledFilters = [];
        }}
      >
        <sl-input
          class=${classMap({ pointer: this._hasValue })}
          slot="trigger"
          .label=${this.label || ''}
          @sl-input=${this._handleInput}
          value=${ifDefined(this._display ?? this.searchTerm ?? '')}
          ?readonly=${this._hasValue}
          ?clearable=${this._hasValue}
          @sl-clear=${this._handleClear}
          placeholder="Type to search"
        >
          ${this._hasValue
            ? null
            : html`<sl-icon
                library="medblocks"
                name="search"
                slot="prefix"
              ></sl-icon>`}
        </sl-input>
        ${this._hasValue || !this.searchTerm
          ? null
          : html`
              <sl-menu
                style="min-width: 300px"
                @sl-select=${this._handleSelect}
              >
                ${until(this.getResults())}
                ${this._filters?.length > 0
                  ? html`<div class="tags">
                      ${this._filters.map(
                        f =>
                          html`<sl-tag
                            ?clearable=${!f.disabled}
                            size="medium"
                            type=${f.disabled ? 'info' : 'primary'}
                            @click=${() => {
                              f.disabled = !f.disabled;
                            }}
                            >${f.label}</sl-tag
                          >`
                      )}
                    </div>`
                  : null}
              </sl-menu>
            `}
      </mb-dropdown>
      <slot @slotchange=${this._handleChildChange}></slot>
    `;
  }
}
