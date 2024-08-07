/*amd /cm/template/snippets/05_입출력테이블/5_04 4단테이블.xml 3626 c3a35d81718371078c7dd6a554fa26250bc527cf56207c4eef2e8712b8917b33 */
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
          "class": 'tbbox',
          id: '',
          style: ''
        },
        E: [{
          T: 1,
          N: 'xf:group',
          A: {
            adaptive: 'layout',
            adaptiveThreshold: '600',
            "class": 'w2tb tb',
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
                  label: '테이블헤더',
                  ref: '',
                  style: '',
                  userData2: ''
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'w2tb_td',
                style: '',
                tagname: 'td'
              }
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'w2tb_th ',
                tagname: 'th'
              },
              E: [{
                T: 1,
                N: 'w2:attributes'
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": '',
                  id: '',
                  label: '테이블헤더',
                  ref: '',
                  style: '',
                  userData2: ''
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'w2tb_td',
                tagname: 'td'
              },
              E: [{
                T: 1,
                N: 'w2:attributes'
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'w2tb_th ',
                tagname: 'th'
              },
              E: [{
                T: 1,
                N: 'w2:attributes',
                E: [{
                  T: 1,
                  N: 'w2:scope',
                  E: [{
                    T: 3,
                    text: 'row'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": '',
                  id: '',
                  label: '테이블헤더',
                  ref: '',
                  style: '',
                  userData2: ''
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'w2tb_td',
                tagname: 'td'
              },
              E: [{
                T: 1,
                N: 'w2:attributes'
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'w2tb_th ',
                tagname: 'th'
              },
              E: [{
                T: 1,
                N: 'w2:attributes',
                E: [{
                  T: 1,
                  N: 'w2:scope',
                  E: [{
                    T: 3,
                    text: 'row'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": '',
                  id: '',
                  label: '테이블헤더',
                  ref: '',
                  style: '',
                  userData2: ''
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'w2tb_td',
                tagname: 'td'
              },
              E: [{
                T: 1,
                N: 'w2:attributes'
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              tagname: 'tr'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'w2tb_th',
                tagname: 'th'
              },
              E: [{
                T: 1,
                N: 'w2:attributes',
                E: [{
                  T: 1,
                  N: 'w2:scope',
                  E: [{
                    T: 3,
                    text: 'row'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": '',
                  id: '',
                  label: '테이블헤더',
                  ref: '',
                  style: '',
                  userData2: ''
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'w2tb_td',
                tagname: 'td'
              },
              E: [{
                T: 1,
                N: 'w2:attributes'
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'w2tb_th ',
                tagname: 'th'
              },
              E: [{
                T: 1,
                N: 'w2:attributes',
                E: [{
                  T: 1,
                  N: 'w2:scope',
                  E: [{
                    T: 3,
                    text: 'row'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": '',
                  id: '',
                  label: '테이블헤더',
                  ref: '',
                  style: '',
                  userData2: ''
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'w2tb_td',
                tagname: 'td'
              },
              E: [{
                T: 1,
                N: 'w2:attributes'
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'w2tb_th ',
                tagname: 'th'
              },
              E: [{
                T: 1,
                N: 'w2:attributes',
                E: [{
                  T: 1,
                  N: 'w2:scope',
                  E: [{
                    T: 3,
                    text: 'row'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": '',
                  id: '',
                  label: '테이블헤더',
                  ref: '',
                  style: '',
                  userData2: ''
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'w2tb_td',
                tagname: 'td'
              },
              E: [{
                T: 1,
                N: 'w2:attributes'
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'w2tb_th ',
                tagname: 'th'
              },
              E: [{
                T: 1,
                N: 'w2:attributes',
                E: [{
                  T: 1,
                  N: 'w2:scope',
                  E: [{
                    T: 3,
                    text: 'row'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": '',
                  id: '',
                  label: '테이블헤더',
                  ref: '',
                  style: '',
                  userData2: ''
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'w2tb_td',
                tagname: 'td'
              },
              E: [{
                T: 1,
                N: 'w2:attributes'
              }]
            }]
          }]
        }]
      }]
    }]
  }]
});