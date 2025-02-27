/*amd /cm/template/snippets/08_버튼/8_05 팝업전체제어버튼.xml 1728 fe787b648868d2bc00bc77277e3b8b3812388b9b1f14573ecadb9ae795853d32 */
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
          "class": 'btnbox',
          id: '',
          style: ''
        },
        E: [{
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'fr',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:trigger',
            A: {
              "class": 'btn_cm',
              id: '',
              style: '',
              type: 'button'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: '업무버튼'
              }]
            }]
          }, {
            T: 1,
            N: 'xf:trigger',
            A: {
              "class": 'btn_cm',
              id: '',
              style: '',
              type: 'button'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: '업무버튼'
              }]
            }]
          }, {
            T: 1,
            N: 'w2:textbox',
            A: {
              "class": 'bar_btndiv',
              id: '',
              label: '',
              style: ''
            }
          }, {
            T: 1,
            N: 'xf:trigger',
            A: {
              "class": 'btn_cm pt',
              id: '',
              style: '',
              type: 'button'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: '신규'
              }]
            }]
          }, {
            T: 1,
            N: 'xf:trigger',
            A: {
              "class": 'btn_cm',
              id: '',
              style: '',
              type: 'button'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: '수정'
              }]
            }]
          }, {
            T: 1,
            N: 'xf:trigger',
            A: {
              "class": 'btn_cm pt',
              id: '',
              style: '',
              type: 'button'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: '저장'
              }]
            }]
          }, {
            T: 1,
            N: 'xf:trigger',
            A: {
              "class": 'btn_cm ',
              id: '',
              style: '',
              type: 'button'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: '삭제'
              }]
            }]
          }, {
            T: 1,
            N: 'xf:trigger',
            A: {
              "class": 'btn_cm pt',
              id: '',
              style: '',
              type: 'button'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: '확인'
              }]
            }]
          }, {
            T: 1,
            N: 'xf:trigger',
            A: {
              "class": 'btn_cm ',
              id: '',
              style: '',
              type: 'button'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: '취소'
              }]
            }]
          }]
        }]
      }]
    }]
  }]
});