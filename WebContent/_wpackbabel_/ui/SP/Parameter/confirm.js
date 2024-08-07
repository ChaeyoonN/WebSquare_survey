/*amd /ui/SP/Parameter/confirm.xml 2976 a46ea28fa81509b20df5b0d43f217680dde2d74aeb5289402cc923246fcbd4a3 */
define({
  declaration: {
    A: {
      version: '1.0',
      encoding: 'UTF-8'
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
      A: {},
      E: [{
        T: 1,
        N: 'w2:type',
        E: [{
          T: 3,
          text: 'COMPONENT'
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
        N: 'w2:layoutInfo'
      }, {
        T: 1,
        N: 'w2:publicInfo',
        A: {
          method: ''
        }
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
              scwin.onpageload = function () {
                var type = com.data.getParameter($p, 'type');
                if (type === 'alert') {
                  btn_cancel.hide();
                } else {
                  btn_cancel.show('');
                }
                scwin.param = com.data.getParameter($p);
                ibx_confirmReceive.setValue(scwin.param.msg);
              };
              scwin.btn_confirm_onclick = function () {
                com.win.closePopup($p, ibx_confirmSend.getValue());
              };
              scwin.btn_cancel_onclick = function () {
                com.win.closePopup($p);
              };
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
          id: '',
          "class": 'pop_contents'
        },
        E: [{
          T: 1,
          N: 'xf:group',
          A: {
            style: '',
            id: '',
            "class": 'tbbox'
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              adaptive: 'layout',
              adaptiveThreshold: '1024',
              tagname: 'table',
              style: '',
              tabIndex: '',
              id: '',
              "class": 'w2tb tb'
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
                  tagname: 'col',
                  style: 'width:150px;'
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
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:attributes',
                  E: [{
                    T: 1,
                    N: 'w2:colspan',
                    E: [{
                      T: 3,
                      text: '1'
                    }]
                  }, {
                    T: 1,
                    N: 'w2:rowspan',
                    E: [{
                      T: 3,
                      text: '1'
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    ref: '',
                    style: '',
                    userData2: '',
                    id: '',
                    label: '수신 Parameter'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'w2:attributes',
                  E: [{
                    T: 1,
                    N: 'w2:colspan',
                    E: [{
                      T: 3,
                      text: '1'
                    }]
                  }, {
                    T: 1,
                    N: 'w2:rowspan',
                    E: [{
                      T: 3,
                      text: '1'
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'xf:input',
                  A: {
                    "class": '',
                    id: 'ibx_confirmReceive',
                    placeholder: '',
                    style: ''
                  }
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
                  tagname: 'th',
                  "class": 'w2tb_th'
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
                    id: '',
                    label: '전송 Parameter',
                    ref: '',
                    style: '',
                    userData2: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'w2:attributes'
                }, {
                  T: 1,
                  N: 'xf:input',
                  A: {
                    "class": '',
                    id: 'ibx_confirmSend',
                    placeholder: '',
                    style: ''
                  }
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'btnbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'fr',
              id: ''
            },
            E: [{
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm pt',
                id: 'btn_confirm',
                style: '',
                type: 'button',
                'ev:onclick': 'scwin.btn_confirm_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '확인'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm',
                id: 'btn_cancel',
                style: '',
                type: 'button',
                'ev:onclick': 'scwin.btn_cancel_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '취소'
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }]
});