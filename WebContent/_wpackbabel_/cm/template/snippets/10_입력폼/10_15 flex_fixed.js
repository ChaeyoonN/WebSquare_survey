/*amd /cm/template/snippets/10_입력폼/10_15 flex_fixed.xml 929 5e5fc5b8496467b623f57e1fabb259e45d8ec801d525264e97bd7c93dc559ca9 */
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
          N: 'xf:input',
          A: {
            "class": 'flex_no',
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
      }]
    }]
  }]
});