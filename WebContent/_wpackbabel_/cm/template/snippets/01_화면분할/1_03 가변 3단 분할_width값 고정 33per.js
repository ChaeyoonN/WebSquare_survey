/*amd /cm/template/snippets/01_화면분할/1_03 가변 3단 분할_width값 고정 33per.xml 1267 d3825ae5a740433c31dc930970ae5c10927ae3ebd5222eb9046e4069886be106 */
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
          "class": 'lybox col3',
          id: '',
          style: ''
        },
        E: [{
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'ly_column',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              id: '',
              label: '가로 : 33.3%',
              style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
            }
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'ly_column',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              id: '',
              label: '가로 : 33.3%',
              style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
            }
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'ly_column',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              id: '',
              label: '가로 : 33.3%',
              style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
            }
          }]
        }]
      }]
    }]
  }]
});