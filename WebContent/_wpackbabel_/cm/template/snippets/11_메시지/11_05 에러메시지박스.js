/*amd /cm/template/snippets/11_메시지/11_05 에러메시지박스.xml 843 f8b68a48157bd4f63f9b30938a9407a850aa79dc7318c38f7177bc5a5532e887 */
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
          "class": 'msg_box error',
          id: '',
          style: ''
        },
        E: [{
          T: 1,
          N: 'w2:textbox',
          A: {
            "class": 'txt_msg',
            "for": '',
            id: '',
            label: '에러 메시지',
            style: '',
            tagname: ''
          }
        }, {
          T: 1,
          N: 'w2:textbox',
          A: {
            "class": 'txt_con',
            "for": '',
            id: '',
            label: '내용',
            style: '',
            tagname: ''
          }
        }]
      }]
    }]
  }]
});