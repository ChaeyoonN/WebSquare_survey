/*amd /cm/template/snippets/10_입력폼/10_03 AutoComplete.xml 1127 3e200d8a99fcfa1a3facdcba4c2883c2bc5aa0a591e23c53758111a7332dc6b8 */
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
          defaultIcon: 'i_autoComplete.png',
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
        N: 'w2:autoComplete',
        A: {
          allOption: '',
          chooseOption: '',
          editType: 'select',
          id: '',
          ref: '',
          search: 'start',
          style: 'width: 148px;',
          submenuSize: 'auto',
          useKeywordHighlight: 'false'
        },
        E: [{
          T: 1,
          N: 'w2:choices',
          E: [{
            T: 1,
            N: 'w2:item',
            E: [{
              T: 1,
              N: 'w2:label',
              E: [{
                T: 4,
                cdata: 'A'
              }]
            }, {
              T: 1,
              N: 'w2:value'
            }]
          }, {
            T: 1,
            N: 'w2:item',
            E: [{
              T: 1,
              N: 'w2:label',
              E: [{
                T: 4,
                cdata: 'AB'
              }]
            }, {
              T: 1,
              N: 'w2:value'
            }]
          }, {
            T: 1,
            N: 'w2:item',
            E: [{
              T: 1,
              N: 'w2:label',
              E: [{
                T: 4,
                cdata: 'ABC'
              }]
            }, {
              T: 1,
              N: 'w2:value'
            }]
          }, {
            T: 1,
            N: 'w2:item',
            E: [{
              T: 1,
              N: 'w2:label',
              E: [{
                T: 4,
                cdata: 'ABCD'
              }]
            }, {
              T: 1,
              N: 'w2:value'
            }]
          }]
        }]
      }]
    }]
  }]
});