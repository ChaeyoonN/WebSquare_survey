/*amd /cm/template/snippets/10_입력폼/10_14 flex_auto.xml 1173 06dce493633abbca78fa86f0b94c2e422ae2e2eda60a350758c5d3ea3416c633 */
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
          "class": 'flex',
          id: '',
          style: ''
        },
        E: [{
          T: 1,
          N: 'xf:input',
          A: {
            "class": '',
            id: '',
            placeholder: '',
            style: 'width:100%;'
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
            style: 'width:100%;'
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
            style: '',
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
  }]
});