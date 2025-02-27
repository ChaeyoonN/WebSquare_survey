/*amd /cm/template/snippets/02_타이틀/2_01 페이지타이틀.xml 1558 30fd58e91e00b63ea4395104f42603d4ba395d1cb51812f6e2d6a2e111f2793d */
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
          "class": 'pgtbox',
          id: '',
          style: ''
        },
        E: [{
          T: 1,
          N: 'xf:trigger',
          A: {
            "class": 'btn_fav',
            id: '',
            style: '',
            type: 'button'
          },
          E: [{
            T: 1,
            N: 'xf:label'
          }]
        }, {
          T: 1,
          N: 'w2:textbox',
          A: {
            "class": 'pgt_tit',
            id: '',
            label: '화면타이틀',
            style: '',
            tagname: ''
          }
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'breadcrumb',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              id: '',
              style: '',
              tagname: 'ul'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'home',
                id: '',
                style: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'w2:anchor',
                A: {
                  id: '',
                  outerDiv: 'false',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'xf:label',
                  E: [{
                    T: 4,
                    cdata: 'Home'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                id: '',
                style: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'w2:anchor',
                A: {
                  id: '',
                  outerDiv: 'false',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'xf:label',
                  E: [{
                    T: 4,
                    cdata: '1Depth Menu'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                id: '',
                style: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'w2:anchor',
                A: {
                  id: '',
                  outerDiv: 'false',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'xf:label',
                  E: [{
                    T: 4,
                    cdata: '2Depth Menu'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                id: '',
                style: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'w2:span',
                A: {
                  id: '',
                  label: '3Depth Menu',
                  style: ''
                }
              }]
            }]
          }]
        }]
      }]
    }]
  }]
});