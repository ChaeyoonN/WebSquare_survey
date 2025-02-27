/*amd /cm/xml/contentDesc.xml 2470 c6ea79e52fef7c76b13e5aec3ef1607742b682d35158ad67c6ba48d6dbff8291 */
define({
  declaration: {
    A: {
      version: '1.0',
      encoding: 'UTF-8'
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
          text: 'COMPONENT'
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
          },
          E: [{
            T: 1,
            N: 'w2:aliasDataMap',
            A: {
              id: 'sdm_fileDesc',
              scope: '../dma_fileDesc',
              studio_src: '/ui/HM/HM003M01.xml'
            }
          }]
        }]
      }, {
        T: 1,
        N: 'w2:layoutInfo'
      }, {
        T: 1,
        N: 'w2:publicInfo',
        A: {
          method: ''
        }
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
              scwin.wfTitleDesc_btn_DescTitleBtn_onclick = function () {
                this.getParent().getParent().toggleClass('on');
              };
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
          "class": 'accr_wrap mt20',
          id: '',
          style: '',
          tagname: ''
        },
        E: [{
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'items accr_info',
            id: 'grp_excelBasicDescription',
            style: '',
            tagname: '',
            text: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'tit_box',
              id: '',
              style: '',
              userData1: ''
            },
            E: [{
              T: 1,
              N: 'w2:anchor',
              A: {
                id: 'btn_info',
                outerDiv: 'false',
                style: '',
                'ev:onclick': 'scwin.wfTitleDesc_btn_DescTitleBtn_onclick',
                userData1: 'grp_infoItem'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '화면설명'
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'con_box',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                escape: 'false',
                id: '',
                label: '1. Release 게시물 조회<br/> &nbsp;- 메인화면의 Release 게시물을 조회할 수 있다.<br/>2. Release 게시물 변경<br/> &nbsp;- 메인화면의 Release 게시물을 입력, 수정, 삭제 할 수 있다.',
                style: '',
                ref: 'data:sdm_fileDesc.desc',
                "class": 'accr_info'
              }
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'items',
            id: 'grp_excelBasicTest',
            style: '',
            tagname: '',
            text: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'tit_box',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:anchor',
              A: {
                id: 'btn_test',
                outerDiv: 'false',
                style: '',
                userData1: 'grp_testItem',
                'ev:onclick': 'scwin.wfTitleDesc_btn_DescTitleBtn_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '테스트방법'
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'con_box',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                escape: 'false',
                id: '',
                label: '1. Release 게시물 조회<br/> &nbsp;- 메인화면의 Release 게시물을 조회할 수 있다.<br/>2. Release 게시물 변경<br/> &nbsp;- 메인화면의 Release 게시물을 입력, 수정, 삭제 할 수 있다.',
                style: '',
                ref: 'data:sdm_fileDesc.test'
              }
            }]
          }]
        }]
      }]
    }]
  }]
});