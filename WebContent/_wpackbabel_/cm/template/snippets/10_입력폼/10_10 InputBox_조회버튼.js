/*amd /cm/template/snippets/10_입력폼/10_10 InputBox_조회버튼.xml 801 454121d9b8a81a90671f3e13910f0c7150bdafa549e3339468046261453058fe */
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
});