/*amd /cm/template/snippets/10_입력폼/10_11 기간조회.xml 1025 28d378cba0efe523512b9e11d77ecc9850ecbdf4e980fe27f6ea96c83ee56b23 */
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
          defaultIcon: '/multi/i_inputCalendar.png',
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
        N: 'w2:inputCalendar',
        A: {
          calendarValueType: 'yearMonthDate',
          focusOnDateSelect: 'false',
          footerDiv: 'true',
          id: '',
          renderDiv: 'true',
          renderType: '',
          rightAlign: 'false',
          style: 'width: 120px;'
        }
      }, {
        T: 1,
        N: 'w2:span',
        A: {
          id: '',
          label: '~',
          style: ''
        }
      }, {
        T: 1,
        N: 'w2:inputCalendar',
        A: {
          calendarValueType: 'yearMonthDate',
          focusOnDateSelect: 'false',
          footerDiv: 'true',
          id: '',
          renderDiv: 'true',
          renderType: '',
          rightAlign: 'false',
          style: 'width: 120px;'
        }
      }]
    }]
  }]
});