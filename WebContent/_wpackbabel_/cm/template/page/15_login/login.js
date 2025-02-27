/*amd /cm/template/page/15_login/login.xml 2246 ce93761ae70ef998452ba532a4afd9cd927391238d68bfde60010cf6600e7140 */
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
        N: 'w2:MSA'
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
          "class": 'login_wrap',
          id: '',
          style: 'background: url(/cm/images/base/bg_w.png) no-repeat #2D4874;'
        },
        E: [{
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'login_container',
            id: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              id: '',
              tagname: 'h1'
            },
            E: [{
              T: 1,
              N: 'xf:image',
              A: {
                alt: '인스웨이브',
                id: '',
                src: '/cm/images/base/img_wlogo.png',
                style: ''
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'login_contents',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                id: '',
                tagname: 'ul'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  id: '',
                  tagname: 'li'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "for": 'user_id',
                    id: '',
                    label: 'ID',
                    style: '',
                    tagname: 'label'
                  }
                }, {
                  T: 1,
                  N: 'xf:input',
                  A: {
                    adjustMaxLength: 'false',
                    id: 'user_id',
                    placeholder: '아이디를 입력해주세요.',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  id: '',
                  tagname: 'li'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "for": 'user_pw',
                    id: '',
                    label: 'Password',
                    style: '',
                    tagname: 'label'
                  }
                }, {
                  T: 1,
                  N: 'xf:input',
                  A: {
                    adjustMaxLength: 'false',
                    id: 'user_pw',
                    placeholder: '비밀번호를 입력해주세요.',
                    style: '',
                    type: 'password'
                  }
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
                  N: 'xf:trigger',
                  A: {
                    "class": 'btn_login',
                    id: '',
                    style: '',
                    type: 'button'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: 'LOGIN'
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'last',
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
                      cdata: '아이디찾기'
                    }]
                  }]
                }, {
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
                      cdata: '비밀번호찾기'
                    }]
                  }]
                }, {
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
                      cdata: '회원가입'
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }]
});