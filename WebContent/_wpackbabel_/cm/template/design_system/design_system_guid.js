/*amd /cm/template/design_system/design_system_guid.xml 5455 3ee86ba1ddc104b43385238809407bca760dd1d77944a9cf47940740f88f4f89 */
define({
  declaration: {
    A: {
      version: '1.0',
      encoding: 'UTF-8'
    }
  },
  E: [{
    T: 7,
    N: 'xml-stylesheet',
    instruction: 'href="/cm/template/design_system/design_system.css" type="text/css"'
  }, {
    T: 1,
    N: 'html',
    A: {
      xmlns: 'http://www.w3.org/1999/xhtml',
      'xmlns:ev': 'http://www.w3.org/2001/xml-events',
      'xmlns:w2': 'http://www.inswave.com/websquare',
      'xmlns:xf': 'http://www.w3.org/2002/xforms'
    },
    E: [{
      T: 1,
      N: 'head',
      E: [{
        T: 1,
        N: 'w2:type',
        E: [{
          T: 3,
          text: 'DEFAULT'
        }]
      }, {
        T: 1,
        N: 'w2:buildDate'
      }, {
        T: 1,
        N: 'xf:model',
        E: [{
          T: 1,
          N: 'w2:dataCollection',
          A: {
            baseNode: 'map'
          }
        }, {
          T: 1,
          N: 'w2:workflowCollection'
        }]
      }, {
        T: 1,
        N: 'script',
        A: {
          type: 'text/javascript',
          lazy: 'false'
        },
        E: [{
          T: 4,
          cdata: function cdata(scopeObj) {
            with (scopeObj) {
              scwin.onpageload = function () {};
              scwin.onpageunload = function () {};
            }
          }
        }]
      }]
    }, {
      T: 1,
      N: 'body',
      A: {
        'ev:onpageload': 'scwin.onpageload',
        'ev:onpageunload': 'scwin.onpageunload'
      },
      E: [{
        T: 1,
        N: 'xf:group',
        A: {
          style: '',
          id: '',
          "class": 'designSystem_layout guid'
        },
        E: [{
          T: 1,
          N: 'xf:group',
          A: {
            style: '',
            id: '',
            "class": 'designSystem_cont'
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              style: '',
              id: '',
              "class": 'designSystem_dfbox'
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                id: '',
                label: '01. Color Palette',
                style: '',
                "class": 'designSystem_df_tit'
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              style: '',
              id: '',
              "class": 'designSystem_conbox'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'designSystem_dfbox',
                id: '',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": 'designSystem_df_tit',
                  id: '',
                  label: 'Theme',
                  style: ''
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                style: '',
                id: '',
                "class": 'designSystem_itembox'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  id: '',
                  "class": 'items'
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    style: '',
                    id: '',
                    "class": 'type1'
                  }
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '#FFFFFF',
                    style: '',
                    tagname: '',
                    "class": 'df_txt'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  id: '',
                  "class": 'items'
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    style: '',
                    id: '',
                    "class": 'type2'
                  }
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": 'df_txt',
                    id: '',
                    label: '#e2e2e2',
                    style: '',
                    tagname: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  id: '',
                  "class": 'items'
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    style: '',
                    id: '',
                    "class": 'type3'
                  }
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": 'df_txt',
                    id: '',
                    label: '#5a5a5a',
                    style: '',
                    tagname: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  id: '',
                  "class": 'items'
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    style: '',
                    id: '',
                    "class": 'type4'
                  }
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": 'df_txt',
                    id: '',
                    label: '#1874ee',
                    style: '',
                    tagname: ''
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'con_txtbox',
                id: '',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:textbox',
                A: {
                  id: '',
                  label: '- 공통 색은 white, black, gray의 무채색 계열로, 레이아웃 요소에 따라 다양한 gray tone을 규정.',
                  style: '',
                  "class": 'df_txt'
                }
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  id: '',
                  label: '- Contents Area는 저채도 계열의 색상군 위주로 구성하고 강조영역을 제외하고는 최대한 컬러 사용을 자제.',
                  style: '',
                  "class": 'df_txt'
                }
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  id: '',
                  label: '- Default background color : white (R(255) G(255) B(255) #FFFFFF)',
                  style: '',
                  "class": 'df_txt'
                }
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  id: '',
                  label: '- Default Text color : black (R(0) G(0) B(0) #000000)',
                  style: '',
                  "class": 'df_txt'
                }
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  id: '',
                  label: '- Point color : blue (R(24) G(116) B(238) #1874ee)',
                  style: '',
                  "class": 'df_txt'
                }
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_dfbox',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'designSystem_df_tit',
                id: '',
                label: '02. Typography',
                style: ''
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_conbox',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'designSystem_dfbox',
                id: '',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": 'designSystem_df_tit',
                  id: '',
                  label: 'Typefaces',
                  style: ''
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'designSystem_itembox',
                id: '',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'items',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'type5',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'absol',
                      id: '',
                      label: 'Aa 가 Malgun Gothic',
                      style: '',
                      tagname: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": 'df_txt left',
                    id: '',
                    label: 'HEADING',
                    style: '',
                    tagname: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": 'df_txt left',
                    id: '',
                    label: 'Bold (600) /16px',
                    style: '',
                    tagname: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'items',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'type6',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'absol',
                      id: '',
                      label: 'Aa 가 Malgun Gothic',
                      style: '',
                      tagname: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": 'df_txt left',
                    id: '',
                    label: 'BODY',
                    style: '',
                    tagname: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": 'df_txt left',
                    id: '',
                    label: 'Normal (400) /13px',
                    style: '',
                    tagname: ''
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'con_txtbox',
                id: '',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": 'df_txt',
                  id: '',
                  label: '- Malgun Gothic 을 기본 폰트로 사용.',
                  style: ''
                }
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": 'df_txt',
                  id: '',
                  label: '- 화면에서 사용하는 컬러 지정은 RGB값으로 설정되어 있으며, 이를 표준 색상으로 사용.',
                  style: ''
                }
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": 'df_txt',
                  id: '',
                  label: '- 업무화면은 13px이상의 사용을 권장하며, 상황에 따라 13px~16px까지 사용 가능.',
                  style: ''
                }
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": 'df_txt',
                  id: '',
                  label: '- 웹접근성 지침사항에 따라 가독성 있는 서체를 사용하며, 텍스트의 크기, 컬러는 용도나 목적을 이해 할 수 있도록 적용.',
                  style: ''
                }
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_dfbox',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'designSystem_df_tit',
                id: '',
                label: '03. Spacing',
                style: ''
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_conbox',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'designSystem_dfbox',
                id: '',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": 'designSystem_df_tit',
                  id: '',
                  label: 'Typefaces',
                  style: ''
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'designSystem_itembox',
                id: '',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:image',
                A: {
                  src: '/cm/images/base/guid_spacing.png',
                  style: '',
                  id: '',
                  alt: 'Spacing'
                }
              }]
            }]
          }]
        }]
      }]
    }]
  }]
});