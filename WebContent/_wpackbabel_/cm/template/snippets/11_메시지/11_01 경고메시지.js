/*amd /cm/template/snippets/11_메시지/11_01 경고메시지.xml 681 7a5a72fe004af19dec3dd7f61ca815aa6005e3356277586233d8fb58303e22e8 */
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
          defaultIcon: 'i_textbox.png',
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
        N: 'w2:textbox',
        A: {
          "class": 'txt_warning',
          dataType: '',
          id: '',
          label: 'Warning',
          style: ''
        }
      }]
    }]
  }]
});