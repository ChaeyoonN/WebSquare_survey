/*amd /cm/template/layout/5.top_left_bottom/page.xml 1030 468f6f6b5bbc8586c8fb7dc5d9190795059d555d6c704ce45e411896f120a0d7 */
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
        N: 'w2:type',
        E: [{
          T: 3,
          text: 'LAYOUT'
        }]
      }, {
        T: 1,
        N: 'w2:buildDate'
      }, {
        T: 1,
        N: 'xf:model',
        E: [{
          T: 1,
          N: 'w2:dataCollection',
          A: {
            baseNode: 'map'
          }
        }, {
          T: 1,
          N: 'w2:workflowCollection'
        }, {
          T: 1,
          N: 'w2:mediaInfo'
        }]
      }, {
        T: 1,
        N: 'script',
        A: {
          lazy: 'false',
          type: 'text/javascript'
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
          "class": 'wrap show_menu has_foot',
          id: '',
          style: ''
        },
        E: [{
          T: 1,
          N: 'w2:wframe',
          A: {
            "class": 'header',
            id: '',
            style: ''
          }
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'container',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:wframe',
            A: {
              "class": 'contents',
              id: '',
              style: ''
            }
          }]
        }, {
          T: 1,
          N: 'w2:wframe',
          A: {
            "class": 'side',
            id: '',
            style: ''
          }
        }, {
          T: 1,
          N: 'w2:wframe',
          A: {
            style: '',
            id: '',
            "class": 'footer'
          }
        }]
      }]
    }]
  }]
});