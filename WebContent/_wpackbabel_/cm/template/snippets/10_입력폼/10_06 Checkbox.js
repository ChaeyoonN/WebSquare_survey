/*amd /cm/template/snippets/10_입력폼/10_06 Checkbox.xml 926 2cd36ff07ae16519664ca22c6b8470bc97ec844b8d54da8cd921680e0e3c8adb */
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
          defaultIcon: 'i_select.png',
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
        N: 'xf:select',
        A: {
          appearance: 'full',
          cols: '',
          disabled: '',
          id: '',
          ref: '',
          renderType: 'checkboxgroup',
          rows: '',
          selectedindex: '1',
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
                cdata: 'Atype'
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
                cdata: 'Btype'
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