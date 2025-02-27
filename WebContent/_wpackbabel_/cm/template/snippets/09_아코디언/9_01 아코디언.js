/*amd /cm/template/snippets/09_아코디언/9_01 아코디언.xml 1244 fa2b40263f2b03e0428918cb944e607122f8656bb7b44bbc35d5cb7da13c1256 */
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
          "class": 'aodbox',
          id: ''
        },
        E: [{
          T: 1,
          N: 'w2:accordion',
          A: {
            "class": 'wq_aod',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:panels',
            A: {
              "class": '',
              id: 'panels1',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:panelTitle',
              A: {
                "class": '',
                id: 'panelTitle1',
                label: '타이틀',
                style: ''
              }
            }, {
              T: 1,
              N: 'w2:panelContent',
              A: {
                "class": '',
                id: 'panelContent1',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:textbox',
                A: {
                  id: '',
                  label: '내용',
                  style: '',
                  tagname: 'span'
                }
              }]
            }]
          }, {
            T: 1,
            N: 'w2:panels',
            A: {
              "class": '',
              id: 'panels2',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:panelTitle',
              A: {
                id: 'panelTitle2',
                label: '타이틀',
                style: ''
              }
            }, {
              T: 1,
              N: 'w2:panelContent',
              A: {
                id: 'panelContent2',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:textbox',
                A: {
                  id: '',
                  label: '내용',
                  style: '',
                  tagname: 'span'
                }
              }]
            }]
          }]
        }]
      }]
    }]
  }]
});