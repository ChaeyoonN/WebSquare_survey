/*amd /cm/template/snippets/10_입력폼/10_04 Upload.xml 828 1b43ddc7a99e6c0eb6c6a267174e9e200f432ef8951fd5beb13c55c152a6fe75 */
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
          defaultIcon: 'i_upload.png',
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
        N: 'w2:upload',
        A: {
          "class": '',
          disabled: '',
          'ev:onInputValueChange': 'scwin.upd_singleFileUpload_onInputValueChange',
          'ev:ondone': 'scwin.upd_singleFileUpload_ondone',
          id: 'upload5',
          imageStyle: '',
          inputStyle: '',
          style: 'width: 250px;',
          type: ''
        }
      }]
    }]
  }]
});