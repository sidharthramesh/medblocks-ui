// import { ExampleComp } from './src/ExampleComp.js';
// window.customElements.define('example-comp', ExampleComp);
import { registerIcons } from './src/internal/icons';
registerIcons();

import './src/medblocks/form/form';
import './src/medblocks/form/fhirForm';

import './src/medblocks/codedtext/search';
import './src/medblocks/codedtext/select';
import './src/medblocks/codedtext/filter';
import './src/medblocks/codedtext/option';
import './src/medblocks/text/input';
import './src/medblocks/codedtext/buttons';
import './src/medblocks/quantity/quantity';
import './src/medblocks/quantity/unit';
import './src/medblocks/context/context';
import './src/medblocks/submit/submit';
import './src/medblocks/datetime/date';
import './src/medblocks/boolean/checkbox';
import './src/medblocks/proportion/percent';
import './src/medblocks/context/checkboxAny';
