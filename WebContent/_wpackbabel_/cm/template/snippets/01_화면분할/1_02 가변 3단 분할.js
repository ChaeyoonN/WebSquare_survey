/*amd /cm/template/snippets/01_화면분할/1_02 가변 3단 분할.xml 1274 6cfcb697de046fd88db94661fb07fe48d6a5800c36103f3c2747ec4e099743f5 */
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
          "class": 'lybox',
          id: '',
          style: ''
        },
        E: [{
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'ly_column col_3',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              id: '',
              label: '가로 : 30%',
              style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
            }
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'ly_column col_4',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              id: '',
              label: '가로 : 40%',
              style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
            }
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'ly_column col_3',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              id: '',
              label: '가로 : 30%',
              style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
            }
          }]
        }]
      }]
    }]
  }]
});