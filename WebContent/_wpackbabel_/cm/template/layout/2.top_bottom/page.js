/*amd /cm/template/layout/2.top_bottom/page.xml 988 a3001372302c99d7e10573eb9eebb7e1f8c2f57a208fc4e3e91c0ab971a2e294 */
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
          "class": 'wrap show_menu has_foot none_side',
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
            style: '',
            id: '',
            "class": 'footer'
          }
        }]
      }]
    }]
  }]
});