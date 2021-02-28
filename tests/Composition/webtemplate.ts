export const webtemplate = {
    "templateId" : "example.initialassesment.v0",
    "version" : "2.3",
    "defaultLanguage" : "en",
    "languages" : [ "en" ],
    "tree" : {
      "id" : "initial_assesment",
      "name" : "Initial Assesment",
      "localizedName" : "Initial Assesment",
      "rmType" : "COMPOSITION",
      "nodeId" : "openEHR-EHR-COMPOSITION.encounter.v1",
      "min" : 1,
      "max" : 1,
      "localizedNames" : {
        "en" : "Initial Assesment"
      },
      "localizedDescriptions" : {
        "en" : "Interaction, contact or care event between a subject of care and healthcare provider(s)."
      },
      "aqlPath" : "",
      "children" : [ {
        "id" : "context",
        "rmType" : "EVENT_CONTEXT",
        "nodeId" : "",
        "min" : 1,
        "max" : 1,
        "aqlPath" : "/context",
        "children" : [ {
          "id" : "start_time",
          "name" : "Start_time",
          "rmType" : "DV_DATE_TIME",
          "min" : 0,
          "max" : 1,
          "aqlPath" : "/context/start_time",
          "inputs" : [ {
            "type" : "DATETIME"
          } ],
          "inContext" : true
        }, {
          "id" : "setting",
          "name" : "Setting",
          "rmType" : "DV_CODED_TEXT",
          "min" : 0,
          "max" : 1,
          "aqlPath" : "/context/setting",
          "inputs" : [ {
            "suffix" : "code",
            "type" : "TEXT"
          }, {
            "suffix" : "value",
            "type" : "TEXT"
          } ],
          "inContext" : true
        } ]
      }, {
        "id" : "glasgow_coma_scale_gcs",
        "name" : "Glasgow Coma Scale (GCS)",
        "localizedName" : "Glasgow Coma Scale (GCS)",
        "rmType" : "OBSERVATION",
        "nodeId" : "openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1",
        "min" : 0,
        "max" : -1,
        "localizedNames" : {
          "en" : "Glasgow Coma Scale (GCS)"
        },
        "localizedDescriptions" : {
          "en" : "Fifteen point scale used to assess impairment of consciousness in response to defined stimuli."
        },
        "annotations" : {
          "comment" : "More correctly known as the Modified Glasgow coma scale."
        },
        "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]",
        "children" : [ {
          "id" : "best_eye_response_e",
          "name" : "Best eye response (E)",
          "localizedName" : "Best eye response (E)",
          "rmType" : "ELEMENT",
          "nodeId" : "at0009",
          "min" : 1,
          "max" : 1,
          "localizedNames" : {
            "en" : "Best eye response (E)"
          },
          "localizedDescriptions" : {
            "en" : "Best response of eyes to test stimulus."
          },
          "annotations" : {
            "comment" : "Most commonly, the score for eye response will be selected from one of the ordinal values, however if a response cannot be tested, for example if the subject of care cannot physically open their eyes due to other injuries, then the \"Not Applicable\" null flavour should be recorded."
          },
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0009]",
          "children" : [ {
            "id" : "ordinal_value",
            "localizedName" : "Best eye response (E)",
            "rmType" : "DV_ORDINAL",
            "nodeId" : "",
            "min" : 0,
            "max" : 1,
            "localizedNames" : {
              "en" : "Best eye response (E)"
            },
            "localizedDescriptions" : {
              "en" : "Best response of eyes to test stimulus."
            },
            "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0009]/value",
            "inputs" : [ {
              "type" : "CODED_TEXT",
              "list" : [ {
                "value" : "at0010",
                "label" : "None",
                "localizedLabels" : {
                  "en" : "None"
                },
                "localizedDescriptions" : {
                  "en" : "No eye opening at any time, no interfering factor. For example: eyes closed by local swelling."
                },
                "ordinal" : 1
              }, {
                "value" : "at0011",
                "label" : "To pressure",
                "localizedLabels" : {
                  "en" : "To pressure"
                },
                "localizedDescriptions" : {
                  "en" : "Eyes opening after finger tip stimulus."
                },
                "ordinal" : 2
              }, {
                "value" : "at0012",
                "label" : "To sound",
                "localizedLabels" : {
                  "en" : "To sound"
                },
                "localizedDescriptions" : {
                  "en" : "Eyes opening after spoken or shouted request. Not to be confused with wakening of a sleeping person."
                },
                "ordinal" : 3
              }, {
                "value" : "at0013",
                "label" : "Spontaneous",
                "localizedLabels" : {
                  "en" : "Spontaneous"
                },
                "localizedDescriptions" : {
                  "en" : "Eyes open before stimulus."
                },
                "ordinal" : 4
              } ]
            } ]
          }, {
            "id" : "coded_text_value",
            "localizedName" : "Best eye response (E)",
            "rmType" : "DV_CODED_TEXT",
            "nodeId" : "",
            "min" : 0,
            "max" : 1,
            "localizedNames" : {
              "en" : "Best eye response (E)"
            },
            "localizedDescriptions" : {
              "en" : "Best response of eyes to test stimulus."
            },
            "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0009]/null_flavour",
            "inputs" : [ {
              "suffix" : "code",
              "type" : "CODED_TEXT",
              "list" : [ {
                "value" : "273",
                "localizedLabels" : {
                  "en" : ""
                }
              } ],
              "terminology" : "openehr"
            } ]
          } ]
        }, {
          "id" : "best_verbal_response_v",
          "name" : "Best verbal response (V)",
          "localizedName" : "Best verbal response (V)",
          "rmType" : "ELEMENT",
          "nodeId" : "at0007",
          "min" : 1,
          "max" : 1,
          "localizedNames" : {
            "en" : "Best verbal response (V)"
          },
          "localizedDescriptions" : {
            "en" : "Best verbal response to test stimulus."
          },
          "annotations" : {
            "comment" : "Most commonly, the score for verbal response will be selected from one of the ordinal values, however if a response cannot be tested, for example if the subject of care is intubated, then the \"Not Applicable\" null flavour should be recorded."
          },
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0007]",
          "children" : [ {
            "id" : "ordinal_value",
            "localizedName" : "Best verbal response (V)",
            "rmType" : "DV_ORDINAL",
            "nodeId" : "",
            "min" : 0,
            "max" : 1,
            "localizedNames" : {
              "en" : "Best verbal response (V)"
            },
            "localizedDescriptions" : {
              "en" : "Best verbal response to test stimulus."
            },
            "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0007]/value",
            "inputs" : [ {
              "type" : "CODED_TEXT",
              "list" : [ {
                "value" : "at0014",
                "label" : "None",
                "localizedLabels" : {
                  "en" : "None"
                },
                "localizedDescriptions" : {
                  "en" : "No audible response, no interfering factor. For example: intubation; profound deafness."
                },
                "ordinal" : 1
              }, {
                "value" : "at0015",
                "label" : "Sounds",
                "localizedLabels" : {
                  "en" : "Sounds"
                },
                "localizedDescriptions" : {
                  "en" : "Only moans/groans."
                },
                "ordinal" : 2
              }, {
                "value" : "at0016",
                "label" : "Words",
                "localizedLabels" : {
                  "en" : "Words"
                },
                "localizedDescriptions" : {
                  "en" : "Intelligible single words."
                },
                "ordinal" : 3
              }, {
                "value" : "at0017",
                "label" : "Confused",
                "localizedLabels" : {
                  "en" : "Confused"
                },
                "localizedDescriptions" : {
                  "en" : "Not orientated but communicates coherently."
                },
                "ordinal" : 4
              }, {
                "value" : "at0018",
                "label" : "Orientated",
                "localizedLabels" : {
                  "en" : "Orientated"
                },
                "localizedDescriptions" : {
                  "en" : "Correctly gives name, place and date."
                },
                "ordinal" : 5
              } ]
            } ]
          }, {
            "id" : "coded_text_value",
            "localizedName" : "Best verbal response (V)",
            "rmType" : "DV_CODED_TEXT",
            "nodeId" : "",
            "min" : 0,
            "max" : 1,
            "localizedNames" : {
              "en" : "Best verbal response (V)"
            },
            "localizedDescriptions" : {
              "en" : "Best verbal response to test stimulus."
            },
            "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0007]/null_flavour",
            "inputs" : [ {
              "suffix" : "code",
              "type" : "CODED_TEXT",
              "list" : [ {
                "value" : "273",
                "localizedLabels" : {
                  "en" : ""
                }
              } ],
              "terminology" : "openehr"
            } ]
          } ]
        }, {
          "id" : "best_motor_response_m",
          "name" : "Best motor response (M)",
          "localizedName" : "Best motor response (M)",
          "rmType" : "ELEMENT",
          "nodeId" : "at0008",
          "min" : 1,
          "max" : 1,
          "localizedNames" : {
            "en" : "Best motor response (M)"
          },
          "localizedDescriptions" : {
            "en" : "Best motor response to test stimulus."
          },
          "annotations" : {
            "comment" : "Most commonly, the score for motor response will be selected from one of the ordinal values, however if a response cannot be tested, for example if the subject of care cannot move their limbs due to injury or paralysis, then the \"Not Applicable\" null flavour should be recorded."
          },
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0008]",
          "children" : [ {
            "id" : "ordinal_value",
            "localizedName" : "Best motor response (M)",
            "rmType" : "DV_ORDINAL",
            "nodeId" : "",
            "min" : 0,
            "max" : 1,
            "localizedNames" : {
              "en" : "Best motor response (M)"
            },
            "localizedDescriptions" : {
              "en" : "Best motor response to test stimulus."
            },
            "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0008]/value",
            "inputs" : [ {
              "type" : "CODED_TEXT",
              "list" : [ {
                "value" : "at0019",
                "label" : "None",
                "localizedLabels" : {
                  "en" : "None"
                },
                "localizedDescriptions" : {
                  "en" : "No movement in arms/legs, no interfering factor. For example: paralysed."
                },
                "ordinal" : 1
              }, {
                "value" : "at0020",
                "label" : "Extension",
                "localizedLabels" : {
                  "en" : "Extension"
                },
                "localizedDescriptions" : {
                  "en" : "Decerebrate extension of arms and/or legs in response to stimuli. For example: extends arm at elbow."
                },
                "ordinal" : 2
              }, {
                "value" : "at0021",
                "label" : "Abnormal flexion",
                "localizedLabels" : {
                  "en" : "Abnormal flexion"
                },
                "localizedDescriptions" : {
                  "en" : "Slow, decorticate flexion of arms and/or legs. For example: bends arm at elbow, but features predominantly abnormal."
                },
                "ordinal" : 3
              }, {
                "value" : "at0022",
                "label" : "Normal flexion",
                "localizedLabels" : {
                  "en" : "Normal flexion"
                },
                "localizedDescriptions" : {
                  "en" : "Rapid flexion in response to stimuli but features predominantly normal. For example: flexion of wrist when supra-orbital pressure applied; pulls part of body away when nailbed pinched."
                },
                "ordinal" : 4
              }, {
                "value" : "at0023",
                "label" : "Localising",
                "localizedLabels" : {
                  "en" : "Localising"
                },
                "localizedDescriptions" : {
                  "en" : "Purposeful flexion towards painful stimuli. For example: brings hand above the clavicle when supra-orbital pressure is applied."
                },
                "ordinal" : 5
              }, {
                "value" : "at0024",
                "label" : "Obeys commands",
                "localizedLabels" : {
                  "en" : "Obeys commands"
                },
                "localizedDescriptions" : {
                  "en" : "Follows verbal request for movement."
                },
                "ordinal" : 6
              } ]
            } ]
          }, {
            "id" : "coded_text_value",
            "localizedName" : "Best motor response (M)",
            "rmType" : "DV_CODED_TEXT",
            "nodeId" : "",
            "min" : 0,
            "max" : 1,
            "localizedNames" : {
              "en" : "Best motor response (M)"
            },
            "localizedDescriptions" : {
              "en" : "Best motor response to test stimulus."
            },
            "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0008]/null_flavour",
            "inputs" : [ {
              "suffix" : "code",
              "type" : "CODED_TEXT",
              "list" : [ {
                "value" : "273",
                "localizedLabels" : {
                  "en" : ""
                }
              } ],
              "terminology" : "openehr"
            } ]
          } ]
        }, {
          "id" : "total_score",
          "name" : "Total score",
          "localizedName" : "Total score",
          "rmType" : "DV_COUNT",
          "nodeId" : "at0026",
          "min" : 0,
          "max" : 1,
          "localizedNames" : {
            "en" : "Total score"
          },
          "localizedDescriptions" : {
            "en" : "The sum of the ordinal scores recorded for each of the three component responses."
          },
          "annotations" : {
            "comment" : "The Total Score may be derived as the sum of the three response data elements and, if so, should be validated by the clinical information system against the individual scores entered by the clinician to ensure there is no conflict or inconsistency. Do not report a total score when one or more components are not testable because the score will be artificially low - in this situation record the EVM profile."
          },
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0026]/value",
          "inputs" : [ {
            "type" : "INTEGER",
            "validation" : {
              "range" : {
                "minOp" : ">=",
                "min" : 3,
                "maxOp" : "<=",
                "max" : 15
              }
            }
          } ]
        }, {
          "id" : "time",
          "name" : "Time",
          "rmType" : "DV_DATE_TIME",
          "min" : 0,
          "max" : 1,
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/time",
          "inputs" : [ {
            "type" : "DATETIME"
          } ],
          "inContext" : true
        }, {
          "id" : "language",
          "name" : "Language",
          "rmType" : "CODE_PHRASE",
          "min" : 0,
          "max" : 1,
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/language",
          "inContext" : true
        }, {
          "id" : "encoding",
          "name" : "Encoding",
          "rmType" : "CODE_PHRASE",
          "min" : 0,
          "max" : 1,
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/encoding",
          "inContext" : true
        }, {
          "id" : "subject",
          "name" : "Subject",
          "rmType" : "PARTY_PROXY",
          "min" : 0,
          "max" : 1,
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/subject",
          "inContext" : true
        } ]
      }, {
        "id" : "pulse_heart_beat",
        "name" : "Pulse/Heart beat",
        "localizedName" : "Pulse/Heart beat",
        "rmType" : "OBSERVATION",
        "nodeId" : "openEHR-EHR-OBSERVATION.pulse.v2",
        "min" : 0,
        "max" : 1,
        "localizedNames" : {
          "en" : "Pulse/Heart beat"
        },
        "localizedDescriptions" : {
          "en" : "The rate and associated attributes for a pulse or heart beat."
        },
        "aqlPath" : "/content[openEHR-EHR-OBSERVATION.pulse.v2]",
        "children" : [ {
          "id" : "presence",
          "name" : "Presence",
          "localizedName" : "Presence",
          "rmType" : "DV_CODED_TEXT",
          "nodeId" : "at1005",
          "min" : 0,
          "max" : 1,
          "localizedNames" : {
            "en" : "Presence"
          },
          "localizedDescriptions" : {
            "en" : "Presence of a pulse or heart beat."
          },
          "annotations" : {
            "comment" : "It can be implied that the pulse or heart beat is present if Rate >0 /min."
          },
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.pulse.v2]/data[at0002]/events[at0003]/data[at0001]/items[at1005]/value",
          "inputs" : [ {
            "suffix" : "code",
            "type" : "CODED_TEXT",
            "list" : [ {
              "value" : "at1024",
              "label" : "Present",
              "localizedLabels" : {
                "en" : "Present"
              },
              "localizedDescriptions" : {
                "en" : "A pulse or heart beat can be detected."
              }
            }, {
              "value" : "at1025",
              "label" : "Not detected",
              "localizedLabels" : {
                "en" : "Not detected"
              },
              "localizedDescriptions" : {
                "en" : "A pulse or heart beat cannot be detected."
              }
            } ]
          } ]
        }, {
          "id" : "time",
          "name" : "Time",
          "rmType" : "DV_DATE_TIME",
          "min" : 0,
          "max" : 1,
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.pulse.v2]/data[at0002]/events[at0003]/time",
          "inputs" : [ {
            "type" : "DATETIME"
          } ],
          "inContext" : true
        }, {
          "id" : "language",
          "name" : "Language",
          "rmType" : "CODE_PHRASE",
          "min" : 0,
          "max" : 1,
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.pulse.v2]/language",
          "inContext" : true
        }, {
          "id" : "encoding",
          "name" : "Encoding",
          "rmType" : "CODE_PHRASE",
          "min" : 0,
          "max" : 1,
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.pulse.v2]/encoding",
          "inContext" : true
        }, {
          "id" : "subject",
          "name" : "Subject",
          "rmType" : "PARTY_PROXY",
          "min" : 0,
          "max" : 1,
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.pulse.v2]/subject",
          "inContext" : true
        } ]
      }, {
        "id" : "category",
        "rmType" : "DV_CODED_TEXT",
        "nodeId" : "",
        "min" : 1,
        "max" : 1,
        "aqlPath" : "/category",
        "inputs" : [ {
          "suffix" : "code",
          "type" : "CODED_TEXT",
          "list" : [ {
            "value" : "433",
            "localizedLabels" : {
              "en" : ""
            }
          } ],
          "terminology" : "openehr"
        } ],
        "inContext" : true
      }, {
        "id" : "language",
        "name" : "Language",
        "rmType" : "CODE_PHRASE",
        "min" : 0,
        "max" : 1,
        "aqlPath" : "/language",
        "inContext" : true
      }, {
        "id" : "territory",
        "name" : "Territory",
        "rmType" : "CODE_PHRASE",
        "min" : 0,
        "max" : 1,
        "aqlPath" : "/territory",
        "inContext" : true
      }, {
        "id" : "composer",
        "name" : "Composer",
        "rmType" : "PARTY_PROXY",
        "min" : 0,
        "max" : 1,
        "aqlPath" : "/composer",
        "inContext" : true
      } ]
    }
  }

export const groupMultiplePaths = {
  "templateId" : "medblocks_ui.cbc_report.v0",
  "version" : "2.3",
  "defaultLanguage" : "en",
  "languages" : [ "en" ],
  "tree" : {
    "id" : "medblocks_ui.cbc_report.v0",
    "name" : "medblocks_ui.cbc_report.v0",
    "localizedName" : "medblocks_ui.cbc_report.v0",
    "rmType" : "COMPOSITION",
    "nodeId" : "openEHR-EHR-COMPOSITION.report-result.v1",
    "min" : 1,
    "max" : 1,
    "localizedNames" : {
      "en" : "medblocks_ui.cbc_report.v0"
    },
    "localizedDescriptions" : {
      "en" : "Document to communicate information to others about the result of a test or assessment."
    },
    "aqlPath" : "",
    "children" : [ {
      "id" : "context",
      "rmType" : "EVENT_CONTEXT",
      "nodeId" : "",
      "min" : 1,
      "max" : 1,
      "aqlPath" : "/context",
      "children" : [ {
        "id" : "start_time",
        "name" : "Start_time",
        "rmType" : "DV_DATE_TIME",
        "min" : 0,
        "max" : 1,
        "aqlPath" : "/context/start_time",
        "inputs" : [ {
          "type" : "DATETIME"
        } ],
        "inContext" : true
      }, {
        "id" : "setting",
        "name" : "Setting",
        "rmType" : "DV_CODED_TEXT",
        "min" : 0,
        "max" : 1,
        "aqlPath" : "/context/setting",
        "inputs" : [ {
          "suffix" : "code",
          "type" : "TEXT"
        }, {
          "suffix" : "value",
          "type" : "TEXT"
        } ],
        "inContext" : true
      } ]
    }, {
      "id" : "laboratory_test_result",
      "name" : "Laboratory test result",
      "localizedName" : "Laboratory test result",
      "rmType" : "OBSERVATION",
      "nodeId" : "openEHR-EHR-OBSERVATION.laboratory_test_result.v1",
      "min" : 0,
      "max" : 1,
      "localizedNames" : {
        "en" : "Laboratory test result"
      },
      "localizedDescriptions" : {
        "en" : "The result, including findings and the laboratory's interpretation, of an investigation performed on specimens collected from an individual or related to that individual."
      },
      "aqlPath" : "/content[openEHR-EHR-OBSERVATION.laboratory_test_result.v1]",
      "children" : [ {
        "id" : "test_name",
        "name" : "Test name",
        "localizedName" : "Test name",
        "rmType" : "DV_CODED_TEXT",
        "nodeId" : "at0005",
        "min" : 1,
        "max" : 1,
        "localizedNames" : {
          "en" : "Test name"
        },
        "localizedDescriptions" : {
          "en" : "Name of the laboratory investigation performed on the specimen(s)."
        },
        "annotations" : {
          "comment" : "A test result may be for a single analyte, or a group of items, including panel tests. It is strongly recommended that 'Test name' be coded with a terminology, for example LOINC or SNOMED CT. For example: 'Glucose', 'Urea and Electrolytes', 'Swab', 'Cortisol (am)', 'Potassium in perspiration' or 'Melanoma histopathology'. The name may sometimes include specimen type and patient state, for example 'Fasting blood glucose' or include other information, as 'Potassium (PNA blood gas)'."
        },
        "aqlPath" : "/content[openEHR-EHR-OBSERVATION.laboratory_test_result.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0005]/value",
        "inputs" : [ {
          "suffix" : "code",
          "type" : "TEXT",
          "defaultValue" : "58410-2",
          "terminology" : "LOINC"
        }, {
          "suffix" : "value",
          "type" : "TEXT",
          "defaultValue" : "CBC panel - Blood by Automated count",
          "terminology" : "LOINC"
        } ]
      }, {
        "id" : "hb",
        "name" : "hb",
        "localizedName" : "hb",
        "rmType" : "CLUSTER",
        "nodeId" : "openEHR-EHR-CLUSTER.laboratory_test_analyte.v1",
        "min" : 0,
        "max" : 1,
        "localizedNames" : {
          "en" : "hb"
        },
        "localizedDescriptions" : {
          "en" : "The result of a laboratory test for a single analyte value."
        },
        "aqlPath" : "/content[openEHR-EHR-OBSERVATION.laboratory_test_result.v1]/data[at0001]/events[at0002]/data[at0003]/items[openEHR-EHR-CLUSTER.laboratory_test_analyte.v1,'hb']",
        "children" : [ {
          "id" : "analyte_name",
          "name" : "Analyte name",
          "localizedName" : "Analyte name",
          "rmType" : "DV_CODED_TEXT",
          "nodeId" : "at0024",
          "min" : 0,
          "max" : 1,
          "localizedNames" : {
            "en" : "Analyte name"
          },
          "localizedDescriptions" : {
            "en" : "The name of the analyte result."
          },
          "annotations" : {
            "comment" : "The value for this element is normally supplied in a specialisation, in a template or at run-time to reflect the actual analyte. For example: 'Serum sodium', 'Haemoglobin'. Coding with an external terminology is strongly recommended, such as LOINC, NPU, SNOMED CT, or local lab terminologies.",
            "hl7v2_mapping" : "OBX.3",
            "fhir_mapping" : "Observation.code"
          },
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.laboratory_test_result.v1]/data[at0001]/events[at0002]/data[at0003]/items[openEHR-EHR-CLUSTER.laboratory_test_analyte.v1,'hb']/items[at0024]/value",
          "inputs" : [ {
            "suffix" : "code",
            "type" : "TEXT",
            "defaultValue" : "718-7",
            "terminology" : "LOINC"
          }, {
            "suffix" : "value",
            "type" : "TEXT",
            "defaultValue" : "Hemoglobin [Mass/volume] in Blood",
            "terminology" : "LOINC"
          } ]
        }, {
          "id" : "analyte_result",
          "name" : "Analyte result",
          "localizedName" : "Analyte result",
          "rmType" : "DV_QUANTITY",
          "nodeId" : "at0001",
          "min" : 0,
          "max" : -1,
          "localizedNames" : {
            "en" : "Analyte result"
          },
          "localizedDescriptions" : {
            "en" : "The value of the analyte result."
          },
          "annotations" : {
            "comment" : "For example '7.3 mmol/l', 'Raised'. The 'Any' data type will need to be constrained to an appropriate data type in a specialisation, a template or at run-time to reflect the actual analyte result. The Quantity data type has reference model attributes that include flags for normal/abnormal, reference ranges and approximations - see https://specifications.openehr.org/releases/RM/latest/data_types.html#_dv_quantity_class for more details.",
            "hl7v2_mapping" : "OBX.2, OBX.5, OBX.6, OBX.7, OBX.8",
            "fhir_mapping" : "Observation.value[x]"
          },
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.laboratory_test_result.v1]/data[at0001]/events[at0002]/data[at0003]/items[openEHR-EHR-CLUSTER.laboratory_test_analyte.v1,'hb']/items[at0001]/value",
          "inputs" : [ {
            "suffix" : "magnitude",
            "type" : "DECIMAL"
          }, {
            "suffix" : "unit",
            "type" : "CODED_TEXT",
            "list" : [ {
              "value" : "g/100ml",
              "label" : "g/100ml"
            } ]
          } ]
        } ]
      }, {
        "id" : "wbc",
        "name" : "wbc",
        "localizedName" : "wbc",
        "rmType" : "CLUSTER",
        "nodeId" : "openEHR-EHR-CLUSTER.laboratory_test_analyte.v1",
        "min" : 0,
        "max" : 1,
        "localizedNames" : {
          "en" : "wbc"
        },
        "localizedDescriptions" : {
          "en" : "The result of a laboratory test for a single analyte value."
        },
        "aqlPath" : "/content[openEHR-EHR-OBSERVATION.laboratory_test_result.v1]/data[at0001]/events[at0002]/data[at0003]/items[openEHR-EHR-CLUSTER.laboratory_test_analyte.v1,'wbc']",
        "children" : [ {
          "id" : "analyte_name",
          "name" : "Analyte name",
          "localizedName" : "Analyte name",
          "rmType" : "DV_CODED_TEXT",
          "nodeId" : "at0024",
          "min" : 0,
          "max" : 1,
          "localizedNames" : {
            "en" : "Analyte name"
          },
          "localizedDescriptions" : {
            "en" : "The name of the analyte result."
          },
          "annotations" : {
            "comment" : "The value for this element is normally supplied in a specialisation, in a template or at run-time to reflect the actual analyte. For example: 'Serum sodium', 'Haemoglobin'. Coding with an external terminology is strongly recommended, such as LOINC, NPU, SNOMED CT, or local lab terminologies.",
            "hl7v2_mapping" : "OBX.3",
            "fhir_mapping" : "Observation.code"
          },
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.laboratory_test_result.v1]/data[at0001]/events[at0002]/data[at0003]/items[openEHR-EHR-CLUSTER.laboratory_test_analyte.v1,'wbc']/items[at0024]/value",
          "inputs" : [ {
            "suffix" : "code",
            "type" : "TEXT",
            "defaultValue" : "6690-2",
            "terminology" : "LOINC"
          }, {
            "suffix" : "value",
            "type" : "TEXT",
            "defaultValue" : "Leukocytes [#/volume] in Blood by Automated count",
            "terminology" : "LOINC"
          } ]
        }, {
          "id" : "analyte_result",
          "name" : "Analyte result",
          "localizedName" : "Analyte result",
          "rmType" : "DV_QUANTITY",
          "nodeId" : "at0001",
          "min" : 0,
          "max" : -1,
          "localizedNames" : {
            "en" : "Analyte result"
          },
          "localizedDescriptions" : {
            "en" : "The value of the analyte result."
          },
          "annotations" : {
            "comment" : "For example '7.3 mmol/l', 'Raised'. The 'Any' data type will need to be constrained to an appropriate data type in a specialisation, a template or at run-time to reflect the actual analyte result. The Quantity data type has reference model attributes that include flags for normal/abnormal, reference ranges and approximations - see https://specifications.openehr.org/releases/RM/latest/data_types.html#_dv_quantity_class for more details.",
            "hl7v2_mapping" : "OBX.2, OBX.5, OBX.6, OBX.7, OBX.8",
            "fhir_mapping" : "Observation.value[x]"
          },
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.laboratory_test_result.v1]/data[at0001]/events[at0002]/data[at0003]/items[openEHR-EHR-CLUSTER.laboratory_test_analyte.v1,'wbc']/items[at0001]/value",
          "inputs" : [ {
            "suffix" : "magnitude",
            "type" : "DECIMAL"
          }, {
            "suffix" : "unit",
            "type" : "CODED_TEXT",
            "list" : [ {
              "value" : "10*3/uL",
              "label" : "10*3/uL"
            } ]
          } ]
        } ]
      }, {
        "id" : "time",
        "name" : "Time",
        "rmType" : "DV_DATE_TIME",
        "min" : 0,
        "max" : 1,
        "aqlPath" : "/content[openEHR-EHR-OBSERVATION.laboratory_test_result.v1]/data[at0001]/events[at0002]/time",
        "inputs" : [ {
          "type" : "DATETIME"
        } ],
        "inContext" : true
      }, {
        "id" : "language",
        "name" : "Language",
        "rmType" : "CODE_PHRASE",
        "min" : 0,
        "max" : 1,
        "aqlPath" : "/content[openEHR-EHR-OBSERVATION.laboratory_test_result.v1]/language",
        "inContext" : true
      }, {
        "id" : "encoding",
        "name" : "Encoding",
        "rmType" : "CODE_PHRASE",
        "min" : 0,
        "max" : 1,
        "aqlPath" : "/content[openEHR-EHR-OBSERVATION.laboratory_test_result.v1]/encoding",
        "inContext" : true
      }, {
        "id" : "subject",
        "name" : "Subject",
        "rmType" : "PARTY_PROXY",
        "min" : 0,
        "max" : 1,
        "aqlPath" : "/content[openEHR-EHR-OBSERVATION.laboratory_test_result.v1]/subject",
        "inContext" : true
      } ]
    }, {
      "id" : "category",
      "rmType" : "DV_CODED_TEXT",
      "nodeId" : "",
      "min" : 1,
      "max" : 1,
      "aqlPath" : "/category",
      "inputs" : [ {
        "suffix" : "code",
        "type" : "CODED_TEXT",
        "list" : [ {
          "value" : "433",
          "localizedLabels" : {
            "en" : ""
          }
        } ],
        "terminology" : "openehr"
      } ],
      "inContext" : true
    }, {
      "id" : "language",
      "name" : "Language",
      "rmType" : "CODE_PHRASE",
      "min" : 0,
      "max" : 1,
      "aqlPath" : "/language",
      "inContext" : true
    }, {
      "id" : "territory",
      "name" : "Territory",
      "rmType" : "CODE_PHRASE",
      "min" : 0,
      "max" : 1,
      "aqlPath" : "/territory",
      "inContext" : true
    }, {
      "id" : "composer",
      "name" : "Composer",
      "rmType" : "PARTY_PROXY",
      "min" : 0,
      "max" : 1,
      "aqlPath" : "/composer",
      "inContext" : true
    } ]
  }
}

export const infiniteRepeatLoopTemplate = {
  "templateId" : "medblocks-ui.example.v0",
  "version" : "2.3",
  "defaultLanguage" : "en",
  "languages" : [ "en" ],
  "tree" : {
    "id" : "initial_assessment",
    "name" : "Initial Assessment",
    "localizedName" : "Initial Assesment",
    "rmType" : "COMPOSITION",
    "nodeId" : "openEHR-EHR-COMPOSITION.encounter.v1",
    "min" : 1,
    "max" : 1,
    "localizedNames" : {
      "en" : "Initial Assesment"
    },
    "localizedDescriptions" : {
      "en" : "Interaction, contact or care event between a subject of care and healthcare provider(s)."
    },
    "aqlPath" : "",
    "children" : [ {
      "id" : "context",
      "rmType" : "EVENT_CONTEXT",
      "nodeId" : "",
      "min" : 1,
      "max" : 1,
      "aqlPath" : "/context",
      "children" : [ {
        "id" : "start_time",
        "name" : "Start_time",
        "rmType" : "DV_DATE_TIME",
        "min" : 0,
        "max" : 1,
        "aqlPath" : "/context/start_time",
        "inputs" : [ {
          "type" : "DATETIME"
        } ],
        "inContext" : true
      }, {
        "id" : "setting",
        "name" : "Setting",
        "rmType" : "DV_CODED_TEXT",
        "min" : 0,
        "max" : 1,
        "aqlPath" : "/context/setting",
        "inputs" : [ {
          "suffix" : "code",
          "type" : "TEXT"
        }, {
          "suffix" : "value",
          "type" : "TEXT"
        } ],
        "inContext" : true
      } ]
    }, {
      "id" : "glasgow_coma_scale_gcs",
      "name" : "Glasgow Coma Scale (GCS)",
      "localizedName" : "Glasgow Coma Scale (GCS)",
      "rmType" : "OBSERVATION",
      "nodeId" : "openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1",
      "min" : 0,
      "max" : 1,
      "localizedNames" : {
        "en" : "Glasgow Coma Scale (GCS)"
      },
      "localizedDescriptions" : {
        "en" : "Fifteen point scale used to assess impairment of consciousness in response to defined stimuli."
      },
      "annotations" : {
        "comment" : "More correctly known as the Modified Glasgow coma scale."
      },
      "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]",
      "children" : [ {
        "id" : "any_event",
        "name" : "Any event",
        "localizedName" : "Any event",
        "rmType" : "EVENT",
        "nodeId" : "at0002",
        "min" : 0,
        "max" : -1,
        "cardinalities" : [ {
          "min" : 3,
          "max" : -1,
          "ids" : [ "best_eye_response_e", "best_verbal_response_v", "best_motor_response_m", "total_score" ]
        } ],
        "localizedNames" : {
          "en" : "Any event"
        },
        "localizedDescriptions" : {
          "en" : "Default, unspecified point in time or interval event which may be explicitly defined in a template or at run-time."
        },
        "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]",
        "children" : [ {
          "id" : "best_eye_response_e",
          "name" : "Best eye response (E)",
          "localizedName" : "Best eye response (E)",
          "rmType" : "ELEMENT",
          "nodeId" : "at0009",
          "min" : 1,
          "max" : 1,
          "localizedNames" : {
            "en" : "Best eye response (E)"
          },
          "localizedDescriptions" : {
            "en" : "Best response of eyes to test stimulus."
          },
          "annotations" : {
            "comment" : "Most commonly, the score for eye response will be selected from one of the ordinal values, however if a response cannot be tested, for example if the subject of care cannot physically open their eyes due to other injuries, then the \"Not Applicable\" null flavour should be recorded."
          },
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0009]",
          "children" : [ {
            "id" : "ordinal_value",
            "localizedName" : "Best eye response (E)",
            "rmType" : "DV_ORDINAL",
            "nodeId" : "",
            "min" : 0,
            "max" : 1,
            "localizedNames" : {
              "en" : "Best eye response (E)"
            },
            "localizedDescriptions" : {
              "en" : "Best response of eyes to test stimulus."
            },
            "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0009]/value",
            "inputs" : [ {
              "type" : "CODED_TEXT",
              "list" : [ {
                "value" : "at0010",
                "label" : "None",
                "localizedLabels" : {
                  "en" : "None"
                },
                "localizedDescriptions" : {
                  "en" : "No eye opening at any time, no interfering factor. For example: eyes closed by local swelling."
                },
                "ordinal" : 1
              }, {
                "value" : "at0011",
                "label" : "To pressure",
                "localizedLabels" : {
                  "en" : "To pressure"
                },
                "localizedDescriptions" : {
                  "en" : "Eyes opening after finger tip stimulus."
                },
                "ordinal" : 2
              }, {
                "value" : "at0012",
                "label" : "To sound",
                "localizedLabels" : {
                  "en" : "To sound"
                },
                "localizedDescriptions" : {
                  "en" : "Eyes opening after spoken or shouted request. Not to be confused with wakening of a sleeping person."
                },
                "ordinal" : 3
              }, {
                "value" : "at0013",
                "label" : "Spontaneous",
                "localizedLabels" : {
                  "en" : "Spontaneous"
                },
                "localizedDescriptions" : {
                  "en" : "Eyes open before stimulus."
                },
                "ordinal" : 4
              } ]
            } ]
          }, {
            "id" : "coded_text_value",
            "localizedName" : "Best eye response (E)",
            "rmType" : "DV_CODED_TEXT",
            "nodeId" : "",
            "min" : 0,
            "max" : 1,
            "localizedNames" : {
              "en" : "Best eye response (E)"
            },
            "localizedDescriptions" : {
              "en" : "Best response of eyes to test stimulus."
            },
            "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0009]/null_flavour",
            "inputs" : [ {
              "suffix" : "code",
              "type" : "CODED_TEXT",
              "list" : [ {
                "value" : "273",
                "localizedLabels" : {
                  "en" : ""
                }
              } ],
              "terminology" : "openehr"
            } ]
          } ]
        }, {
          "id" : "best_verbal_response_v",
          "name" : "Best verbal response (V)",
          "localizedName" : "Best verbal response (V)",
          "rmType" : "ELEMENT",
          "nodeId" : "at0007",
          "min" : 1,
          "max" : 1,
          "localizedNames" : {
            "en" : "Best verbal response (V)"
          },
          "localizedDescriptions" : {
            "en" : "Best verbal response to test stimulus."
          },
          "annotations" : {
            "comment" : "Most commonly, the score for verbal response will be selected from one of the ordinal values, however if a response cannot be tested, for example if the subject of care is intubated, then the \"Not Applicable\" null flavour should be recorded."
          },
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0007]",
          "children" : [ {
            "id" : "ordinal_value",
            "localizedName" : "Best verbal response (V)",
            "rmType" : "DV_ORDINAL",
            "nodeId" : "",
            "min" : 0,
            "max" : 1,
            "localizedNames" : {
              "en" : "Best verbal response (V)"
            },
            "localizedDescriptions" : {
              "en" : "Best verbal response to test stimulus."
            },
            "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0007]/value",
            "inputs" : [ {
              "type" : "CODED_TEXT",
              "list" : [ {
                "value" : "at0014",
                "label" : "None",
                "localizedLabels" : {
                  "en" : "None"
                },
                "localizedDescriptions" : {
                  "en" : "No audible response, no interfering factor. For example: intubation; profound deafness."
                },
                "ordinal" : 1
              }, {
                "value" : "at0015",
                "label" : "Sounds",
                "localizedLabels" : {
                  "en" : "Sounds"
                },
                "localizedDescriptions" : {
                  "en" : "Only moans/groans."
                },
                "ordinal" : 2
              }, {
                "value" : "at0016",
                "label" : "Words",
                "localizedLabels" : {
                  "en" : "Words"
                },
                "localizedDescriptions" : {
                  "en" : "Intelligible single words."
                },
                "ordinal" : 3
              }, {
                "value" : "at0017",
                "label" : "Confused",
                "localizedLabels" : {
                  "en" : "Confused"
                },
                "localizedDescriptions" : {
                  "en" : "Not orientated but communicates coherently."
                },
                "ordinal" : 4
              }, {
                "value" : "at0018",
                "label" : "Orientated",
                "localizedLabels" : {
                  "en" : "Orientated"
                },
                "localizedDescriptions" : {
                  "en" : "Correctly gives name, place and date."
                },
                "ordinal" : 5
              } ]
            } ]
          }, {
            "id" : "coded_text_value",
            "localizedName" : "Best verbal response (V)",
            "rmType" : "DV_CODED_TEXT",
            "nodeId" : "",
            "min" : 0,
            "max" : 1,
            "localizedNames" : {
              "en" : "Best verbal response (V)"
            },
            "localizedDescriptions" : {
              "en" : "Best verbal response to test stimulus."
            },
            "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0007]/null_flavour",
            "inputs" : [ {
              "suffix" : "code",
              "type" : "CODED_TEXT",
              "list" : [ {
                "value" : "273",
                "localizedLabels" : {
                  "en" : ""
                }
              } ],
              "terminology" : "openehr"
            } ]
          } ]
        }, {
          "id" : "best_motor_response_m",
          "name" : "Best motor response (M)",
          "localizedName" : "Best motor response (M)",
          "rmType" : "ELEMENT",
          "nodeId" : "at0008",
          "min" : 1,
          "max" : 1,
          "localizedNames" : {
            "en" : "Best motor response (M)"
          },
          "localizedDescriptions" : {
            "en" : "Best motor response to test stimulus."
          },
          "annotations" : {
            "comment" : "Most commonly, the score for motor response will be selected from one of the ordinal values, however if a response cannot be tested, for example if the subject of care cannot move their limbs due to injury or paralysis, then the \"Not Applicable\" null flavour should be recorded."
          },
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0008]",
          "children" : [ {
            "id" : "ordinal_value",
            "localizedName" : "Best motor response (M)",
            "rmType" : "DV_ORDINAL",
            "nodeId" : "",
            "min" : 0,
            "max" : 1,
            "localizedNames" : {
              "en" : "Best motor response (M)"
            },
            "localizedDescriptions" : {
              "en" : "Best motor response to test stimulus."
            },
            "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0008]/value",
            "inputs" : [ {
              "type" : "CODED_TEXT",
              "list" : [ {
                "value" : "at0019",
                "label" : "None",
                "localizedLabels" : {
                  "en" : "None"
                },
                "localizedDescriptions" : {
                  "en" : "No movement in arms/legs, no interfering factor. For example: paralysed."
                },
                "ordinal" : 1
              }, {
                "value" : "at0020",
                "label" : "Extension",
                "localizedLabels" : {
                  "en" : "Extension"
                },
                "localizedDescriptions" : {
                  "en" : "Decerebrate extension of arms and/or legs in response to stimuli. For example: extends arm at elbow."
                },
                "ordinal" : 2
              }, {
                "value" : "at0021",
                "label" : "Abnormal flexion",
                "localizedLabels" : {
                  "en" : "Abnormal flexion"
                },
                "localizedDescriptions" : {
                  "en" : "Slow, decorticate flexion of arms and/or legs. For example: bends arm at elbow, but features predominantly abnormal."
                },
                "ordinal" : 3
              }, {
                "value" : "at0022",
                "label" : "Normal flexion",
                "localizedLabels" : {
                  "en" : "Normal flexion"
                },
                "localizedDescriptions" : {
                  "en" : "Rapid flexion in response to stimuli but features predominantly normal. For example: flexion of wrist when supra-orbital pressure applied; pulls part of body away when nailbed pinched."
                },
                "ordinal" : 4
              }, {
                "value" : "at0023",
                "label" : "Localising",
                "localizedLabels" : {
                  "en" : "Localising"
                },
                "localizedDescriptions" : {
                  "en" : "Purposeful flexion towards painful stimuli. For example: brings hand above the clavicle when supra-orbital pressure is applied."
                },
                "ordinal" : 5
              }, {
                "value" : "at0024",
                "label" : "Obeys commands",
                "localizedLabels" : {
                  "en" : "Obeys commands"
                },
                "localizedDescriptions" : {
                  "en" : "Follows verbal request for movement."
                },
                "ordinal" : 6
              } ]
            } ]
          }, {
            "id" : "coded_text_value",
            "localizedName" : "Best motor response (M)",
            "rmType" : "DV_CODED_TEXT",
            "nodeId" : "",
            "min" : 0,
            "max" : 1,
            "localizedNames" : {
              "en" : "Best motor response (M)"
            },
            "localizedDescriptions" : {
              "en" : "Best motor response to test stimulus."
            },
            "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0008]/null_flavour",
            "inputs" : [ {
              "suffix" : "code",
              "type" : "CODED_TEXT",
              "list" : [ {
                "value" : "273",
                "localizedLabels" : {
                  "en" : ""
                }
              } ],
              "terminology" : "openehr"
            } ]
          } ]
        }, {
          "id" : "total_score",
          "name" : "Total score",
          "localizedName" : "Total score",
          "rmType" : "DV_COUNT",
          "nodeId" : "at0026",
          "min" : 0,
          "max" : 1,
          "localizedNames" : {
            "en" : "Total score"
          },
          "localizedDescriptions" : {
            "en" : "The sum of the ordinal scores recorded for each of the three component responses."
          },
          "annotations" : {
            "comment" : "The Total Score may be derived as the sum of the three response data elements and, if so, should be validated by the clinical information system against the individual scores entered by the clinician to ensure there is no conflict or inconsistency. Do not report a total score when one or more components are not testable because the score will be artificially low - in this situation record the EVM profile."
          },
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0026]/value",
          "inputs" : [ {
            "type" : "INTEGER",
            "validation" : {
              "range" : {
                "minOp" : ">=",
                "min" : 3,
                "maxOp" : "<=",
                "max" : 15
              }
            }
          } ]
        }, {
          "id" : "time",
          "name" : "Time",
          "rmType" : "DV_DATE_TIME",
          "min" : 0,
          "max" : 1,
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/data[at0001]/events[at0002]/time",
          "inputs" : [ {
            "type" : "DATETIME"
          } ],
          "inContext" : true
        } ]
      }, {
        "id" : "language",
        "name" : "Language",
        "rmType" : "CODE_PHRASE",
        "min" : 0,
        "max" : 1,
        "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/language",
        "inContext" : true
      }, {
        "id" : "encoding",
        "name" : "Encoding",
        "rmType" : "CODE_PHRASE",
        "min" : 0,
        "max" : 1,
        "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/encoding",
        "inContext" : true
      }, {
        "id" : "subject",
        "name" : "Subject",
        "rmType" : "PARTY_PROXY",
        "min" : 0,
        "max" : 1,
        "aqlPath" : "/content[openEHR-EHR-OBSERVATION.glasgow_coma_scale.v1]/subject",
        "inContext" : true
      } ]
    }, {
      "id" : "pulse_heart_beat",
      "name" : "Pulse/Heart beat",
      "localizedName" : "Pulse/Heart beat",
      "rmType" : "OBSERVATION",
      "nodeId" : "openEHR-EHR-OBSERVATION.pulse.v2",
      "min" : 0,
      "max" : 1,
      "localizedNames" : {
        "en" : "Pulse/Heart beat"
      },
      "localizedDescriptions" : {
        "en" : "The rate and associated attributes for a pulse or heart beat."
      },
      "aqlPath" : "/content[openEHR-EHR-OBSERVATION.pulse.v2]",
      "children" : [ {
        "id" : "any_event",
        "name" : "Any event",
        "localizedName" : "Any event",
        "rmType" : "EVENT",
        "nodeId" : "at0003",
        "min" : 0,
        "max" : -1,
        "localizedNames" : {
          "en" : "Any event"
        },
        "localizedDescriptions" : {
          "en" : "Default, unspecified point in time or interval event which may be explicitly defined in a template or at run-time."
        },
        "aqlPath" : "/content[openEHR-EHR-OBSERVATION.pulse.v2]/data[at0002]/events[at0003]",
        "children" : [ {
          "id" : "presence",
          "name" : "Presence",
          "localizedName" : "Presence",
          "rmType" : "DV_CODED_TEXT",
          "nodeId" : "at1005",
          "min" : 0,
          "max" : 1,
          "localizedNames" : {
            "en" : "Presence"
          },
          "localizedDescriptions" : {
            "en" : "Presence of a pulse or heart beat."
          },
          "annotations" : {
            "comment" : "It can be implied that the pulse or heart beat is present if Rate >0 /min."
          },
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.pulse.v2]/data[at0002]/events[at0003]/data[at0001]/items[at1005]/value",
          "inputs" : [ {
            "suffix" : "code",
            "type" : "CODED_TEXT",
            "list" : [ {
              "value" : "at1024",
              "label" : "Present",
              "localizedLabels" : {
                "en" : "Present"
              },
              "localizedDescriptions" : {
                "en" : "A pulse or heart beat can be detected."
              }
            }, {
              "value" : "at1025",
              "label" : "Not detected",
              "localizedLabels" : {
                "en" : "Not detected"
              },
              "localizedDescriptions" : {
                "en" : "A pulse or heart beat cannot be detected."
              }
            } ]
          } ]
        }, {
          "id" : "rate",
          "name" : "Rate",
          "localizedName" : "Rate",
          "rmType" : "DV_QUANTITY",
          "nodeId" : "at0004",
          "min" : 0,
          "max" : 1,
          "localizedNames" : {
            "en" : "Rate"
          },
          "localizedDescriptions" : {
            "en" : "The rate of the pulse or heart beat, measured in beats per minute."
          },
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.pulse.v2]/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value",
          "inputs" : [ {
            "suffix" : "magnitude",
            "type" : "DECIMAL",
            "validation" : {
              "range" : {
                "minOp" : ">=",
                "min" : 0.0,
                "maxOp" : "<",
                "max" : 1000.0
              },
              "precision" : {
                "minOp" : ">=",
                "min" : 0,
                "maxOp" : "<=",
                "max" : 0
              }
            }
          }, {
            "suffix" : "unit",
            "type" : "CODED_TEXT",
            "list" : [ {
              "value" : "/min",
              "label" : "/min",
              "validation" : {
                "range" : {
                  "minOp" : ">=",
                  "min" : 0.0,
                  "maxOp" : "<",
                  "max" : 1000.0
                },
                "precision" : {
                  "minOp" : ">=",
                  "min" : 0,
                  "maxOp" : "<=",
                  "max" : 0
                }
              }
            } ]
          } ]
        }, {
          "id" : "time",
          "name" : "Time",
          "rmType" : "DV_DATE_TIME",
          "min" : 0,
          "max" : 1,
          "aqlPath" : "/content[openEHR-EHR-OBSERVATION.pulse.v2]/data[at0002]/events[at0003]/time",
          "inputs" : [ {
            "type" : "DATETIME"
          } ],
          "inContext" : true
        } ]
      }, {
        "id" : "language",
        "name" : "Language",
        "rmType" : "CODE_PHRASE",
        "min" : 0,
        "max" : 1,
        "aqlPath" : "/content[openEHR-EHR-OBSERVATION.pulse.v2]/language",
        "inContext" : true
      }, {
        "id" : "encoding",
        "name" : "Encoding",
        "rmType" : "CODE_PHRASE",
        "min" : 0,
        "max" : 1,
        "aqlPath" : "/content[openEHR-EHR-OBSERVATION.pulse.v2]/encoding",
        "inContext" : true
      }, {
        "id" : "subject",
        "name" : "Subject",
        "rmType" : "PARTY_PROXY",
        "min" : 0,
        "max" : 1,
        "aqlPath" : "/content[openEHR-EHR-OBSERVATION.pulse.v2]/subject",
        "inContext" : true
      } ]
    }, {
      "id" : "category",
      "rmType" : "DV_CODED_TEXT",
      "nodeId" : "",
      "min" : 1,
      "max" : 1,
      "aqlPath" : "/category",
      "inputs" : [ {
        "suffix" : "code",
        "type" : "CODED_TEXT",
        "list" : [ {
          "value" : "433",
          "localizedLabels" : {
            "en" : ""
          }
        } ],
        "terminology" : "openehr"
      } ],
      "inContext" : true
    }, {
      "id" : "language",
      "name" : "Language",
      "rmType" : "CODE_PHRASE",
      "min" : 0,
      "max" : 1,
      "aqlPath" : "/language",
      "inContext" : true
    }, {
      "id" : "territory",
      "name" : "Territory",
      "rmType" : "CODE_PHRASE",
      "min" : 0,
      "max" : 1,
      "aqlPath" : "/territory",
      "inContext" : true
    }, {
      "id" : "composer",
      "name" : "Composer",
      "rmType" : "PARTY_PROXY",
      "min" : 0,
      "max" : 1,
      "aqlPath" : "/composer",
      "inContext" : true
    } ]
  }
}