/*amd /cm/template/layout/6.holy_grail/page.xml 1084 5e983465ade8419cafef16b61d9abacad673a258e073b9ee52b54c21f1352dbc */
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
          "class": 'wrap show_menu has_full',
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
            "class": 'side_r',
            id: '',
            style: ''
          }
        }, {
          T: 1,
          N: 'w2:wframe',
          A: {
            "class": 'footer',
            id: '',
            style: ''
          }
        }]
      }]
    }]
  }]
});