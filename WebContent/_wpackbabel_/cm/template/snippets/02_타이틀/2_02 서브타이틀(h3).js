/*amd /cm/template/snippets/02_타이틀/2_02 서브타이틀(h3).xml 1678 7044ff55049daf48bc0948ccc372bd0480eaa890a370679b4869ff5e82651438 */
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
          "class": 'dfbox',
          id: '',
          style: ''
        },
        E: [{
          T: 1,
          N: 'w2:textbox',
          A: {
            "class": '',
            id: '',
            label: '서브타이틀',
            style: '',
            tagname: 'h3'
          }
        }, {
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
              "class": 'btn_cm  copy',
              id: '',
              style: '',
              type: 'button'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: '행복사'
              }]
            }]
          }, {
            T: 1,
            N: 'xf:trigger',
            A: {
              "class": 'btn_cm  row_add',
              id: '',
              style: '',
              type: 'button'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: '행추가'
              }]
            }]
          }, {
            T: 1,
            N: 'xf:trigger',
            A: {
              "class": 'btn_cm  row_del',
              id: '',
              style: '',
              type: 'button'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: '행삭제'
              }]
            }]
          }, {
            T: 1,
            N: 'xf:trigger',
            A: {
              "class": 'btn_cm  upload',
              id: '',
              style: '',
              type: 'button'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: '업로드'
              }]
            }]
          }, {
            T: 1,
            N: 'xf:trigger',
            A: {
              "class": 'btn_cm download',
              id: '',
              style: '',
              type: 'button'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: '다운로드'
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
                cdata: '업무버튼'
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
                cdata: '업무버튼'
              }]
            }]
          }]
        }]
      }]
    }]
  }]
});