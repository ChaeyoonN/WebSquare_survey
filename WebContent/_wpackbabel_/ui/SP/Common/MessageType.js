/*amd /ui/SP/Common/MessageType.xml 5787 8fef5423928bcf34626936b5ab51423b0dd0350835f9f34d8f824d3d9f2083c9 */
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
      A: {},
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
            N: 'w2:dataMap',
            A: {
              baseNode: 'map',
              id: 'dma_fileDesc'
            },
            E: [{
              T: 1,
              N: 'w2:keyInfo',
              E: [{
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'desc',
                  name: '파일 설명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'test',
                  name: '파일 테스트 방법',
                  dataType: 'text'
                }
              }]
            }, {
              T: 1,
              N: 'w2:data',
              A: {
                use: 'true'
              },
              E: [{
                T: 1,
                N: 'desc',
                E: [{
                  T: 4,
                  cdata: '\n<pre class="textNor">\n<div class="etcbox">[Submission]을 이용하여 서버와 데이터 통신을 할 경우 정상/오류에 대한 공통 메세지 처리를 버튼을 클릭하여 확인할 수 있다.\n정상처리는 상세 메세지가 없으며 오류 타입만 오류 내용에 대한 상세 메세지를 출력한다.\n메세지 처리 타입은 다음과 같다.\n</div>\n<div class="etc_tit">1. 정상</div>\n  - JAVA에서 MqModel.setMsg를 통해 입력한 값이 표현되며 메서드를 호출하지 않은 경우는 메세지가 출력되지 않는다.\n<div class="etc_tit">2. JAVA 비지니스 로직 오류</div>\n   - Exception이 발생한 경우.\n	 Exception의 getMessage의 내용을 상세창에 출력한다.\n   - MqModel.setErrorMsg 또는 MqModel.setMsg 메서드를 이용하여 에러 메세지를 설정한 경우\n<div class="etc_tit">3. HTTP의 StatusCode가 300이상이거나 200미만인 경우</div>\n   StatusCode와 URI, responsBody를 상세창에 출력한다.\n<div class="etc_tit">4. Session 만료</div>\n   로그인 Session 정보가 만료된 경우.\n   Alert창을 통해 만료 사실을 전달하고 Alert창의 [확인]을 누르면 Login페이지로 이동한다.\n</pre>\n						'
                }]
              }, {
                T: 1,
                N: 'test',
                E: [{
                  T: 4,
                  cdata: '\n<pre class="textNor">\n<div class="expTit">1. 과정</div>\n- 각각의 버튼을 클릭한다.([정상], [Java Exception], [HTTP 404]) \n- 단 [Session 만료]의 경우는 아래와 같이 테스트한다.\n  1) [Log Out]버튼을 클릭한다.(Session이 삭제된다.)\n  2) [정상]버튼을 클릭한다.\n</div>\n<div class="expTit">2. 결과</div>\n- 하단의 메세지와 Alert창을 확인한다.\n</pre>\n						'
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'w2:workflowCollection'
        }, {
          T: 1,
          N: 'xf:submission',
          A: {
            id: 'sbm_normal',
            ref: '',
            target: '',
            action: '/sample/normal',
            method: 'post',
            mediatype: 'application/json',
            encoding: 'UTF-8',
            instance: '',
            replace: '',
            errorHandler: '',
            customHandler: '',
            mode: 'asynchronous',
            processMsg: '조회중입니다.',
            'ev:submit': '',
            'ev:submitdone': ''
          }
        }, {
          T: 1,
          N: 'xf:submission',
          A: {
            id: 'sbm_exception',
            ref: '',
            target: '',
            action: '/sample/exception',
            method: 'post',
            mediatype: 'application/json',
            encoding: 'UTF-8',
            instance: '',
            replace: '',
            errorHandler: '',
            customHandler: '',
            mode: 'asynchronous',
            processMsg: '조회중입니다.',
            'ev:submit': '',
            'ev:submitdone': ''
          }
        }, {
          T: 1,
          N: 'xf:submission',
          A: {
            id: 'sbm_404',
            ref: '',
            target: '',
            action: '/sample/404',
            method: 'post',
            mediatype: 'application/json',
            encoding: 'UTF-8',
            instance: '',
            replace: '',
            errorHandler: '',
            customHandler: '',
            mode: 'asynchronous',
            processMsg: '조회중입니다.',
            'ev:submit': '',
            'ev:submitdone': ''
          }
        }, {
          T: 1,
          N: 'xf:submission',
          A: {
            id: 'sbm_logOut',
            ref: '',
            target: '',
            action: '/main/logout',
            method: 'get',
            mediatype: 'application/json',
            encoding: 'UTF-8',
            instance: '',
            replace: '',
            errorHandler: '',
            customHandler: '',
            mode: 'asynchronous',
            processMsg: '조회중입니다.',
            'ev:submit': '',
            'ev:submitdone': 'scwin.sbm_logOut_submitdone'
          }
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
              scwin.btn_normal_onclick = function (e) {
                com.sbm.execute($p, sbm_normal);
              };
              scwin.btn_exception_onclick = function (e) {
                com.sbm.execute($p, sbm_exception);
              };
              scwin.btn_404_onclick = function (e) {
                com.sbm.execute($p, sbm_404);
              };
              scwin.sbm_logOut_submitdone = function (e) {};
              scwin.btn_logOut_onclick = function (e) {
                com.sbm.execute($p, sbm_logOut);
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
          "class": 'sub_contents',
          id: '',
          style: ''
        },
        E: [{
          T: 1,
          N: 'w2:wframe',
          A: {
            id: '',
            style: '',
            src: '../../cm/xml/contentHeader.xml',
            scope: ''
          }
        }, {
          T: 1,
          N: 'w2:wframe',
          A: {
            id: '',
            src: '../../cm/xml/contentDesc.xml',
            scope: ''
          }
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'dfbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:trigger',
            A: {
              "class": 'btn_cm ',
              id: 'btn_normal',
              style: '',
              type: 'button',
              'ev:onclick': 'scwin.btn_normal_onclick'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: '정상'
              }]
            }]
          }, {
            T: 1,
            N: 'xf:trigger',
            A: {
              "class": 'btn_cm',
              id: 'btn_exception',
              style: '',
              type: 'button',
              'ev:onclick': 'scwin.btn_exception_onclick'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: 'Java Exception'
              }]
            }]
          }, {
            T: 1,
            N: 'xf:trigger',
            A: {
              "class": 'btn_cm ',
              id: 'btn_404',
              style: '',
              type: 'button',
              'ev:onclick': 'scwin.btn_404_onclick'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: 'HTTP 404'
              }]
            }]
          }, {
            T: 1,
            N: 'xf:trigger',
            A: {
              "class": 'btn_cm',
              id: 'btn_logOut',
              style: '',
              type: 'button',
              'ev:onclick': 'scwin.btn_logOut_onclick'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: 'Log Out'
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            id: '',
            style: '',
            "class": 'dfbox'
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              "class": '',
              id: '',
              label: 'Message 예',
              style: '',
              tagname: 'h3'
            }
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              style: 'margin-bottom:10px;',
              id: '',
              "class": 'msg_box success'
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                tagname: '',
                style: '',
                label: '정상 처리 되었습니다.',
                id: '',
                "class": 'txt_msg'
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              style: '',
              id: '',
              "class": 'msg_box error'
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                tagname: '',
                style: '',
                label: '처리 도중 오류가 발생하였습니다.',
                id: '',
                "class": 'txt_msg'
              }
            }]
          }]
        }]
      }]
    }]
  }]
});