/*amd /cm/template/snippets/03_조회영역/3_02 조회조건2행.xml 4482 40fecb004606d058238accf0eee62ebb1b8b4e8477e58732966d4c86a75ec78f */
define({
  declaration: {
    A: {
      version: '1.0',
      encoding: 'UTF-8',
      standalone: 'no'
    }
  },
  E: [{
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
        N: 'w2:buildDate'
      }, {
        T: 1,
        N: 'w2:userPalette',
        A: {
          defaultIcon: 'i_group.png',
          desc: ''
        }
      }, {
        T: 1,
        N: 'xf:model'
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
            }
          }
        }]
      }]
    }, {
      T: 1,
      N: 'body',
      A: {
        'ev:onpageload': 'scwin.onpageload'
      },
      E: [{
        T: 1,
        N: 'xf:group',
        A: {
          "class": 'shbox',
          id: '',
          style: ''
        },
        E: [{
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'shbox_inner',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              adaptive: 'layout',
              adaptiveThreshold: '768',
              "class": 'w2tb tb ',
              id: '',
              style: '',
              tagname: 'table'
            },
            E: [{
              T: 1,
              N: 'w2:attributes',
              E: [{
                T: 1,
                N: 'w2:summary'
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'colgroup'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  style: 'width:100px;',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: '',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: 'width:100px;',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: '',
                  tagname: 'col'
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": '',
                id: '',
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": 'req',
                    id: '',
                    label: '조회조건',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    allOption: 'true',
                    appearance: 'minimal',
                    chooseOption: '',
                    "class": '',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    id: '',
                    ref: '',
                    renderType: '',
                    style: 'width:100px;',
                    submenuSize: 'auto'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: 'new row'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: 'new row'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: 'new row'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value'
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    allOption: 'true',
                    appearance: 'minimal',
                    chooseOption: '',
                    "class": '',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    id: '',
                    ref: '',
                    renderType: '',
                    style: 'width:100px;',
                    submenuSize: 'auto'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: 'new row'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: 'new row'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: 'new row'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value'
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'xf:trigger',
                  A: {
                    "class": 'btn_cm ',
                    id: '',
                    style: '',
                    type: 'button'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '조회'
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": 'req',
                    id: '',
                    label: '조회조건',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  id: '',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: '',
                    renderType: 'radiogroup',
                    rows: '',
                    selectedIndex: '1',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: '항목1'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: '항목2'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: '항목3'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value'
                      }]
                    }]
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": '',
                id: '',
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": '',
                    id: '',
                    label: '조건',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    "class": '',
                    id: '',
                    placeholder: '',
                    style: 'width:148px;'
                  }
                }, {
                  T: 1,
                  N: 'xf:trigger',
                  A: {
                    "class": 'btn_cm btn_search ',
                    id: '',
                    style: '',
                    type: 'button'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: 'Search'
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": '',
                    id: '',
                    label: '기간',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  id: '',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'w2:inputCalendar',
                  A: {
                    alt: '',
                    calendarValueType: 'yearMonthDate',
                    "class": '',
                    focusOnDateSelect: 'false',
                    footerDiv: 'true',
                    id: '',
                    renderDiv: 'true',
                    renderType: '',
                    rightAlign: 'false',
                    style: 'width:120px;'
                  }
                }, {
                  T: 1,
                  N: 'w2:span',
                  A: {
                    id: '',
                    label: '~',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:inputCalendar',
                  A: {
                    calendarValueType: 'yearMonthDate',
                    "class": '',
                    focusOnDateSelect: 'false',
                    footerDiv: 'true',
                    id: '',
                    renderDiv: 'true',
                    renderType: '',
                    rightAlign: 'false',
                    style: 'width:120px;'
                  }
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'btn_shbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:trigger',
            A: {
              "class": 'btn_cm sch',
              disabled: '',
              escape: 'false',
              id: '',
              style: '',
              type: 'button'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: '조회'
              }]
            }]
          }]
        }]
      }]
    }]
  }]
});