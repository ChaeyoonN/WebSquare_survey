/*amd /cm/template/snippets/06_그리드/6_01 그리드.xml 4365 229e95e6ce37a458055f02527788a3fb8e70d5fb21900d0bca3fa48358666f88 */
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
          adaptiveThreshold: '',
          "class": 'gvwbox',
          id: '',
          style: ''
        },
        E: [{
          T: 1,
          N: 'w2:gridView',
          A: {
            autoFit: 'allColumn',
            checkReadOnlyOnPasteEnable: '',
            "class": 'wq_gvw',
            dataList: 'data:dataList1',
            defaultCellHeight: '20',
            focusMode: 'row',
            id: '',
            scrollByColumn: 'false',
            scrollByColumnAdaptive: 'false',
            style: 'height: 150px;',
            visibleRowNum: 'all'
          },
          E: [{
            T: 1,
            N: 'w2:caption',
            A: {
              id: 'caption2',
              style: '',
              value: 'this is a grid caption.'
            }
          }, {
            T: 1,
            N: 'w2:header',
            A: {
              id: 'header2',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:row',
              A: {
                id: 'row3',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'column12',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: 'height:26px;',
                  value: '타이틀',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'column11',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: '',
                  value: '타이틀',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'column10',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: '',
                  value: '타이틀',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'column9',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: '',
                  value: '타이틀',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'column8',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: '',
                  value: '타이틀',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'column7',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: '',
                  value: '타이틀',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'column6',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: '',
                  value: '타이틀',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'column5',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: '',
                  value: '타이틀',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'column4',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: '',
                  value: '타이틀',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'column3',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: '',
                  value: '타이틀',
                  width: '70'
                }
              }]
            }]
          }, {
            T: 1,
            N: 'w2:gBody',
            A: {
              id: 'gBody2',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:row',
              A: {
                id: 'row4',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'col1',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: 'height:26px;',
                  value: '',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'col2',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: 'height:20px',
                  value: '',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'col3',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: 'height:20px',
                  value: '',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'col4',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: 'height:20px',
                  value: '',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'col5',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: 'height:20px',
                  value: '',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'col6',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: 'height:20px',
                  value: '',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'col7',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: 'height:20px',
                  value: '',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'col8',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: 'height:20px',
                  value: '',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'col9',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: 'height:20px',
                  value: '',
                  width: '70'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  blockSelect: 'false',
                  displayMode: 'label',
                  id: 'col10',
                  inputType: 'text',
                  removeBorderStyle: 'false',
                  style: 'height:20px',
                  value: '',
                  width: '70'
                }
              }]
            }]
          }]
        }]
      }]
    }]
  }]
});