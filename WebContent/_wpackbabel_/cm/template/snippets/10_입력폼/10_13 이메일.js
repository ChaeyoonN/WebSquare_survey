/*amd /cm/template/snippets/10_입력폼/10_13 이메일.xml 1140 371cdeb87f8cf706faca6496a4afcb0efb9ad96ec6ee9f3ddf79d9293c90c8e1 */
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
          defaultIcon: '/multi/i_input.png',
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
        N: 'xf:input',
        A: {
          "class": '',
          id: '',
          placeholder: '',
          style: 'width:148px;'
        }
      }, {
        T: 1,
        N: 'w2:span',
        A: {
          id: '',
          label: '@',
          style: ''
        }
      }, {
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
                cdata: '직접입력'
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