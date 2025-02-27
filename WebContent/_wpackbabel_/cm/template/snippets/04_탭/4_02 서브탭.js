/*amd /cm/template/snippets/04_탭/4_02 서브탭.xml 2517 083a1575612acb186b64466fa5b0a84068a6bbe7271b45ba27ac285404b0c229 */
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
          "class": 'tabbox',
          id: '',
          style: ''
        },
        E: [{
          T: 1,
          N: 'w2:tabControl',
          A: {
            alwaysDraw: 'false',
            "class": 'wq_tab',
            confirmFalseAction: 'new',
            confirmTrueAction: 'exist',
            id: '',
            style: '',
            tabScroll: '',
            useConfirmMessage: 'false',
            useMoveNextTabFocus: 'false',
            useTabKeyOnly: 'true'
          },
          E: [{
            T: 1,
            N: 'w2:tabs',
            A: {
              disabled: 'false',
              id: 'tabs1',
              label: '탭1',
              style: ''
            }
          }, {
            T: 1,
            N: 'w2:tabs',
            A: {
              disabled: 'false',
              id: 'tabs2',
              label: '탭2',
              style: ''
            }
          }, {
            T: 1,
            N: 'w2:tabs',
            A: {
              disabled: 'false',
              id: 'tabs3',
              label: '탭3',
              style: ''
            }
          }, {
            T: 1,
            N: 'w2:tabs',
            A: {
              disabled: 'false',
              id: 'tabs4',
              label: '탭4',
              style: ''
            }
          }, {
            T: 1,
            N: 'w2:tabs',
            A: {
              disabled: 'false',
              id: 'tabs5',
              label: '탭5',
              style: ''
            }
          }, {
            T: 1,
            N: 'w2:tabs',
            A: {
              disabled: 'false',
              id: 'tabs6',
              label: '탭6',
              style: ''
            }
          }, {
            T: 1,
            N: 'w2:tabs',
            A: {
              disabled: 'false',
              id: 'tabs7',
              label: '탭7',
              style: ''
            }
          }, {
            T: 1,
            N: 'w2:content',
            A: {
              alwaysDraw: 'false',
              id: 'content1',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:tabControl',
              A: {
                alwaysDraw: 'false',
                "class": 'wq_tab_sub',
                confirmFalseAction: 'new',
                confirmTrueAction: 'exist',
                id: '',
                style: '',
                tabScroll: '',
                useConfirmMessage: 'false',
                useMoveNextTabFocus: 'false',
                useTabKeyOnly: 'true'
              },
              E: [{
                T: 1,
                N: 'w2:tabs',
                A: {
                  disabled: 'false',
                  id: 'tabs1',
                  label: '탭1',
                  style: ''
                }
              }, {
                T: 1,
                N: 'w2:tabs',
                A: {
                  disabled: 'false',
                  id: 'tabs2',
                  label: '탭2',
                  style: ''
                }
              }, {
                T: 1,
                N: 'w2:content',
                A: {
                  alwaysDraw: 'false',
                  id: 'content1',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'Content',
                    style: 'line-height:28px;height: 30px;text-align:center;width: 100%;'
                  }
                }]
              }, {
                T: 1,
                N: 'w2:content',
                A: {
                  alwaysDraw: 'false',
                  id: 'content2',
                  style: ''
                }
              }]
            }]
          }, {
            T: 1,
            N: 'w2:content',
            A: {
              alwaysDraw: 'false',
              id: 'content2',
              style: ''
            }
          }, {
            T: 1,
            N: 'w2:content',
            A: {
              alwaysDraw: 'false',
              id: 'content3',
              style: 'height:0px'
            }
          }, {
            T: 1,
            N: 'w2:content',
            A: {
              alwaysDraw: 'false',
              id: 'content4',
              style: 'height:0px'
            }
          }, {
            T: 1,
            N: 'w2:content',
            A: {
              alwaysDraw: 'false',
              id: 'content5',
              style: 'height:0px'
            }
          }, {
            T: 1,
            N: 'w2:content',
            A: {
              alwaysDraw: 'false',
              id: 'content6',
              style: 'height:0px'
            }
          }, {
            T: 1,
            N: 'w2:content',
            A: {
              alwaysDraw: 'false',
              id: 'content7',
              style: 'height:0px'
            }
          }]
        }]
      }]
    }]
  }]
});