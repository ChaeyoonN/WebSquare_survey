/*amd /cm/template/page/14_messenger/messenger.xml 8900 05aa0fe7e566be85bc0f0c1b1cf1ead2a85d5d7536a0ef17901d89d1a66f3b58 */
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
              scwin.onpageload = function () {
                $('.btn_fav').click(function () {
                  $('.btn_fav').toggleClass('on');
                });
              };
              scwin.msgTab_onclick = function (e) {
                $('.messenger').find('.tab').find('.on').removeClass('on');
                var li = $(this)[0];
                li.addClass('on');
              };
              scwin.chatOpen_onclick = function (e) {
                $('.messenger').addClass('open');
              };
              scwin.chatClose_onclick = function (e) {
                $('.messenger').removeClass('open');
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
          N: 'xf:group',
          A: {
            "class": 'messenger',
            id: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'chat_list',
              id: ''
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'titlebox',
                id: '',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:trigger',
                A: {
                  "class": 'close',
                  id: '',
                  style: '',
                  type: 'button'
                },
                E: [{
                  T: 1,
                  N: 'xf:label',
                  E: [{
                    T: 4,
                    cdata: 'Close'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": 'title',
                  id: '',
                  label: 'Message',
                  style: '',
                  tagname: 'span'
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'tab',
                id: '',
                style: '',
                tagname: 'ul'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'on',
                  'ev:onclick': 'scwin.msgTab_onclick',
                  id: '',
                  tagname: 'li'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'All',
                    style: '',
                    tagname: 'span'
                  }
                }, {
                  T: 1,
                  N: 'w2:span',
                  A: {
                    "class": 'badge',
                    id: '',
                    label: '5',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": '',
                  'ev:onclick': 'scwin.msgTab_onclick',
                  id: '',
                  style: '',
                  tagname: 'li'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'Read',
                    style: '',
                    tagname: 'span'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": '',
                  'ev:onclick': 'scwin.msgTab_onclick',
                  id: '',
                  style: '',
                  tagname: 'li'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'Unread',
                    style: '',
                    tagname: 'span'
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'list',
                id: '',
                style: '',
                tagname: 'ul'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": '',
                  'ev:onclick': 'scwin.chatOpen_onclick',
                  id: '',
                  tagname: 'li'
                },
                E: [{
                  T: 1,
                  N: 'xf:image',
                  A: {
                    alt: '프로필사진',
                    "class": 'profile',
                    id: '',
                    src: '/cm/images/base/msg_profile1.png',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'textbox',
                    id: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'name',
                      id: '',
                      label: 'Team A',
                      style: '',
                      tagname: 'span'
                    }
                  }, {
                    T: 1,
                    N: 'w2:span',
                    A: {
                      "class": 'badge',
                      id: '',
                      label: '5',
                      style: ''
                    }
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'preview',
                      id: '',
                      label: '오늘 하루 고생하셨습니다.',
                      style: '',
                      tagname: 'div'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:span',
                  A: {
                    "class": 'time',
                    id: '',
                    label: '09:00',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": '',
                  'ev:onclick': 'scwin.chatOpen_onclick',
                  id: '',
                  style: '',
                  tagname: 'li'
                },
                E: [{
                  T: 1,
                  N: 'xf:image',
                  A: {
                    alt: '프로필사진',
                    "class": 'profile',
                    id: '',
                    src: '/cm/images/base/msg_profile1.png',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'textbox',
                    id: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'name',
                      id: '',
                      label: 'Team B',
                      style: '',
                      tagname: 'span'
                    }
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'preview',
                      id: '',
                      label: '오늘 하루 고생하셨습니다.',
                      style: '',
                      tagname: 'div'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:span',
                  A: {
                    "class": 'time',
                    id: '',
                    label: '09:00',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": '',
                  'ev:onclick': 'scwin.chatOpen_onclick',
                  id: '',
                  style: '',
                  tagname: 'li'
                },
                E: [{
                  T: 1,
                  N: 'xf:image',
                  A: {
                    alt: '프로필사진',
                    "class": 'profile',
                    id: '',
                    src: '/cm/images/base/msg_profile1.png',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'textbox',
                    id: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'name',
                      id: '',
                      label: 'Team C',
                      style: '',
                      tagname: 'span'
                    }
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'preview',
                      id: '',
                      label: '안녕하세요. 라이프레시피에서 구매하신 소중한 상품이 배송완료 처리되었습니다.',
                      style: '',
                      tagname: 'div'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:span',
                  A: {
                    "class": 'time',
                    id: '',
                    label: '09:00',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": '',
                  'ev:onclick': 'scwin.chatOpen_onclick',
                  id: '',
                  style: '',
                  tagname: 'li'
                },
                E: [{
                  T: 1,
                  N: 'xf:image',
                  A: {
                    alt: '프로필사진',
                    "class": 'profile',
                    id: '',
                    src: '/cm/images/base/msg_profile1.png',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'textbox',
                    id: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'name',
                      id: '',
                      label: 'Team D',
                      style: '',
                      tagname: 'span'
                    }
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'preview',
                      id: '',
                      label: '원격지원 합니다',
                      style: '',
                      tagname: 'div'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:span',
                  A: {
                    "class": 'time',
                    id: '',
                    label: '09:00',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": '',
                  'ev:onclick': 'scwin.chatOpen_onclick',
                  id: '',
                  style: '',
                  tagname: 'li'
                },
                E: [{
                  T: 1,
                  N: 'xf:image',
                  A: {
                    alt: '프로필사진',
                    "class": 'profile',
                    id: '',
                    src: '/cm/images/base/msg_profile1.png',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'textbox',
                    id: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'name',
                      id: '',
                      label: 'Team E',
                      style: '',
                      tagname: 'span'
                    }
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'preview',
                      id: '',
                      label: '내일 복귀합니다',
                      style: '',
                      tagname: 'div'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:span',
                  A: {
                    "class": 'time',
                    id: '',
                    label: '09:00',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": '',
                  'ev:onclick': 'scwin.chatOpen_onclick',
                  id: '',
                  style: '',
                  tagname: 'li'
                },
                E: [{
                  T: 1,
                  N: 'xf:image',
                  A: {
                    alt: '프로필사진',
                    "class": 'profile',
                    id: '',
                    src: '/cm/images/base/msg_profile1.png',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'textbox',
                    id: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'name',
                      id: '',
                      label: 'Team F',
                      style: '',
                      tagname: 'span'
                    }
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'preview',
                      id: '',
                      label: '일정 공유 바랍니다.',
                      style: '',
                      tagname: 'div'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:span',
                  A: {
                    "class": 'time',
                    id: '',
                    label: '09:00',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": '',
                  'ev:onclick': 'scwin.chatOpen_onclick',
                  id: '',
                  style: '',
                  tagname: 'li'
                },
                E: [{
                  T: 1,
                  N: 'xf:image',
                  A: {
                    alt: '프로필사진',
                    "class": 'profile',
                    id: '',
                    src: '/cm/images/base/msg_profile1.png',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'textbox',
                    id: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'name',
                      id: '',
                      label: 'Team G',
                      style: '',
                      tagname: 'span'
                    }
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'preview',
                      id: '',
                      label: '부산 출장갑니다.',
                      style: '',
                      tagname: 'div'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:span',
                  A: {
                    "class": 'time',
                    id: '',
                    label: '09:00',
                    style: ''
                  }
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'chat',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'titlebox',
                id: '',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:trigger',
                A: {
                  "class": 'close',
                  'ev:onclick': 'scwin.chatClose_onclick',
                  id: '',
                  style: '',
                  type: 'button'
                },
                E: [{
                  T: 1,
                  N: 'xf:label',
                  E: [{
                    T: 4,
                    cdata: 'Close'
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:trigger',
                A: {
                  "class": 'back',
                  'ev:onclick': 'scwin.chatClose_onclick',
                  id: '',
                  style: '',
                  type: 'button'
                },
                E: [{
                  T: 1,
                  N: 'xf:label',
                  E: [{
                    T: 4,
                    cdata: 'Back'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": 'title',
                  id: '',
                  label: '인스웨이브',
                  style: '',
                  tagname: 'span'
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'message_wrap',
                id: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'message',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'receive',
                    id: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:image',
                    A: {
                      alt: '프로필사진',
                      "class": 'profile',
                      id: '',
                      src: '/cm/images/base/msg_profile1.png',
                      style: ''
                    }
                  }, {
                    T: 1,
                    N: 'xf:group',
                    A: {
                      "class": 'msg_wrap',
                      id: '',
                      tagname: 'span'
                    },
                    E: [{
                      T: 1,
                      N: 'w2:span',
                      A: {
                        "class": 'msg',
                        id: '',
                        label: '안녕하세요',
                        style: ''
                      }
                    }, {
                      T: 1,
                      N: 'w2:span',
                      A: {
                        "class": 'time',
                        id: '',
                        label: '09:00',
                        style: ''
                      }
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'receive',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:image',
                    A: {
                      alt: '프로필사진',
                      "class": 'profile',
                      id: '',
                      src: '/cm/images/base/msg_profile1.png',
                      style: ''
                    }
                  }, {
                    T: 1,
                    N: 'xf:group',
                    A: {
                      "class": 'msg_wrap',
                      id: '',
                      tagname: 'span'
                    },
                    E: [{
                      T: 1,
                      N: 'w2:span',
                      A: {
                        "class": 'msg',
                        id: '',
                        label: 'ㅇㅇㅇ 선임님',
                        style: ''
                      }
                    }, {
                      T: 1,
                      N: 'w2:span',
                      A: {
                        "class": 'time',
                        id: '',
                        label: '09:00',
                        style: ''
                      }
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'send',
                    id: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:group',
                    A: {
                      "class": 'msg_wrap',
                      id: '',
                      tagname: 'span'
                    },
                    E: [{
                      T: 1,
                      N: 'w2:span',
                      A: {
                        "class": 'msg',
                        id: '',
                        label: '네',
                        style: ''
                      }
                    }, {
                      T: 1,
                      N: 'w2:span',
                      A: {
                        "class": 'time',
                        id: '',
                        label: '09:00',
                        style: ''
                      }
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'send',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:group',
                    A: {
                      "class": 'msg_wrap',
                      id: '',
                      tagname: 'span'
                    },
                    E: [{
                      T: 1,
                      N: 'w2:span',
                      A: {
                        "class": 'msg',
                        id: '',
                        label: '무슨 일이신가요?',
                        style: ''
                      }
                    }, {
                      T: 1,
                      N: 'w2:span',
                      A: {
                        "class": 'time',
                        id: '',
                        label: '09:00',
                        style: ''
                      }
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'receive',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:image',
                    A: {
                      alt: '프로필사진',
                      "class": 'profile',
                      id: '',
                      src: '/cm/images/base/msg_profile1.png',
                      style: ''
                    }
                  }, {
                    T: 1,
                    N: 'xf:group',
                    A: {
                      "class": 'msg_wrap',
                      id: '',
                      tagname: 'span'
                    },
                    E: [{
                      T: 1,
                      N: 'xf:group',
                      A: {
                        "class": 'msg',
                        id: '',
                        style: '',
                        tagname: 'span'
                      },
                      E: [{
                        T: 1,
                        N: 'w2:span',
                        A: {
                          "class": 'dot',
                          id: '',
                          label: '',
                          style: ''
                        }
                      }, {
                        T: 1,
                        N: 'w2:span',
                        A: {
                          "class": 'dot',
                          id: '',
                          label: '',
                          style: ''
                        }
                      }, {
                        T: 1,
                        N: 'w2:span',
                        A: {
                          "class": 'dot',
                          id: '',
                          label: '',
                          style: ''
                        }
                      }]
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'sendbox',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'text_wrap',
                    id: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:textarea',
                    A: {
                      id: '',
                      style: '',
                      title: '내용 입력'
                    }
                  }, {
                    T: 1,
                    N: 'w2:upload',
                    A: {
                      "class": 'file',
                      id: '',
                      imageStyle: 'position:absolute;vertical-align:middle;word-wrap:break-word',
                      inputStyle: 'vertical-align:middle;word-wrap:break-word',
                      style: 'width: 40px;height: 40px;',
                      title: '파일 추가'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'xf:trigger',
                  A: {
                    "class": 'btn_send',
                    id: '',
                    style: 'width: 40px;',
                    title: '전송',
                    type: 'button'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '전송'
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