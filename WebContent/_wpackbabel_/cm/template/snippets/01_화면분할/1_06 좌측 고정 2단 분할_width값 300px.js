/*amd /cm/template/snippets/01_화면분할/1_06 좌측 고정 2단 분할_width값 300px.xml 1092 f1672ccf4fbf45c1b5940019ed525d5fe4bd79aa736ca63ddc062db5e190ef96 */
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
          "class": 'lybox left_fix3',
          id: '',
          style: ''
        },
        E: [{
          T: 1,
          N: 'xf:group',
          A: {
            adaptiveThreshold: '',
            "class": 'ly_columnfix_left',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              id: '',
              label: '가로 : 300px',
              style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
            }
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'ly_columnfix_right',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              id: '',
              label: '가로 : Auto',
              style: 'line-height:28px;height: 30px;text-align:center;border:1px solid #ccc;'
            }
          }]
        }]
      }]
    }]
  }]
});