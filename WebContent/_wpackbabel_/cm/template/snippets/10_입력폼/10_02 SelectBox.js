/*amd /cm/template/snippets/10_입력폼/10_02 SelectBox.xml 1021 7120065799ef358c033c5d66e3e0aaadeb32ef75a501385bf5668e24ed3ee6ed */
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
          defaultIcon: 'i_select1.png',
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
          style: 'width: 148px;',
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
          }]
        }]
      }]
    }]
  }]
});