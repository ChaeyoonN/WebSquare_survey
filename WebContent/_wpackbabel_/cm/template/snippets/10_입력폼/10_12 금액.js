/*amd /cm/template/snippets/10_입력폼/10_12 금액.xml 777 7fe554817e4a5873e7a4056c30af517bfa0e546224794b7ef676186e0e66419e */
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
          "class": 'tar',
          dataType: 'number',
          editType: '',
          id: '',
          placeholder: '',
          style: 'width:148px;',
          type: ''
        }
      }, {
        T: 1,
        N: 'w2:textbox',
        A: {
          "class": 'tit',
          id: '',
          label: '원',
          style: ''
        }
      }]
    }]
  }]
});