/*amd /cm/template/design_system/design_system_wide.xml 26419 cd134cdb326d630adc42dbbea79abd4f805fd5575ad01dad8879cdeb0a03db85 */
define({
  declaration: {
    A: {
      version: '1.0',
      encoding: 'UTF-8'
    }
  },
  E: [{
    T: 7,
    N: 'xml-stylesheet',
    instruction: 'href="/cm/template/design_system/design_system.css" type="text/css"'
  }, {
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
          text: 'DEFAULT'
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
        }]
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
              scwin.onpageload = function () {
                $(window).resize(function () {
                  var win_w = $(this).width();
                  if (win_w < 400) {
                    $('.designSystem_layout').removeClass('hide_menu');
                    $('.designSystem_layout').addClass('hide_menu');
                  }
                });
                $('.btn_snippet').on('click', function () {
                  $('.designSystem_zoom_box').addClass('on');
                  $('.designSystem_dim').addClass('on');
                });
                $('.btn_zoom_close').on('click', function () {
                  $('.designSystem_zoom_box').removeClass('on');
                  $('.designSystem_dim').removeClass('on');
                });
                $('.btn_snp_favorit').on('click', function () {
                  $(this).toggleClass('on');
                });
              };
              scwin.onpageunload = function () {};
              scwin.btnDsSlide_onclick = function () {
                $('.designSystem_layout').toggleClass('hide_menu');
              };
            }
          }
        }]
      }]
    }, {
      T: 1,
      N: 'body',
      A: {
        'ev:onpageload': 'scwin.onpageload',
        'ev:onpageunload': 'scwin.onpageunload',
        style: ''
      },
      E: [{
        T: 1,
        N: 'xf:group',
        A: {
          id: 'layout',
          "class": 'designSystem_layout type2',
          style: ''
        },
        E: [{
          T: 1,
          N: 'xf:group',
          A: {
            style: '',
            id: '',
            "class": 'designSystem_search'
          },
          E: [{
            T: 1,
            N: 'w2:anchor',
            A: {
              outerDiv: 'false',
              style: '',
              id: 'btnDsSlide',
              "class": 'btn_designSystem_slide',
              'ev:onclick': 'scwin.btnDsSlide_onclick'
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: '메뉴'
              }]
            }]
          }, {
            T: 1,
            N: 'xf:input',
            A: {
              adjustMaxLength: 'false',
              id: '',
              style: '',
              placeholder: 'Search ...'
            }
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              style: '',
              id: '',
              tagname: '',
              "class": 'switchbox'
            },
            E: [{
              T: 1,
              N: 'xf:select',
              A: {
                selectedindex: '-1',
                id: 'switch1',
                appearance: 'full',
                style: '',
                cols: '',
                rows: '',
                ref: '',
                nextTabID: '',
                itemTagname: '',
                "class": 'input_switch',
                renderType: 'native',
                tooltipFormatter: '',
                useLocale: '',
                tooltipItemLabel: '',
                disabled: '',
                falseValue: ''
              },
              E: [{
                T: 1,
                N: 'xf:choices',
                E: [{
                  T: 1,
                  N: 'xf:item',
                  E: [{
                    T: 1,
                    N: 'xf:label'
                  }, {
                    T: 1,
                    N: 'xf:value'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                id: '',
                tabIndex: '',
                tooltipFormatter: '',
                tagname: 'label',
                "class": 'label_switch',
                text: '',
                userData3: '',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:attributes',
                E: [{
                  T: 1,
                  N: 'w2:for',
                  E: [{
                    T: 3,
                    text: 'mf_switch1'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:span',
                A: {
                  style: '',
                  label: '',
                  id: '',
                  ref: '',
                  "class": 'marble'
                }
              }, {
                T: 1,
                N: 'w2:span',
                A: {
                  style: '',
                  id: '',
                  label: 'On',
                  "class": 'on'
                }
              }, {
                T: 1,
                N: 'w2:span',
                A: {
                  style: '',
                  id: '',
                  label: 'Off',
                  "class": 'off'
                }
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            style: '',
            id: '',
            "class": 'designSystem_side'
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              style: '',
              id: '',
              "class": 'designSystem_menu'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                style: '',
                id: '',
                tagname: 'ul'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  id: '',
                  style: '',
                  tagname: 'li'
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    id: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:href',
                      E: [{
                        T: 3,
                        text: '#mf_layout'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:image',
                    A: {
                      id: '',
                      src: '/cm/template/snippets/00_화면시작/00_화면시작.png',
                      style: 'width:16px;height:16px;'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    "class": 'designSystem_m_tit',
                    href: '#mf_layout',
                    id: '',
                    outerDiv: 'false',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '화면시작'
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: '',
                  id: '',
                  tagname: 'li'
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    id: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:href',
                      E: [{
                        T: 3,
                        text: '#mf_title01'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:image',
                    A: {
                      src: '/cm/template/snippets/01_화면분할/01_화면분할.png',
                      style: 'width:16px;height:16px;',
                      id: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    outerDiv: 'false',
                    style: '',
                    id: '',
                    "class": 'designSystem_m_tit',
                    href: '#mf_title01'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '화면분할'
                    }]
                  }]
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
                  N: 'xf:group',
                  A: {
                    id: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:href',
                      E: [{
                        T: 3,
                        text: '#mf_title02'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:image',
                    A: {
                      src: '/cm/template/snippets/02_타이틀/02_타이틀.png',
                      style: 'width:14px;height:14px;',
                      id: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    id: '',
                    outerDiv: 'false',
                    style: '',
                    "class": 'designSystem_m_tit',
                    href: '#mf_title02'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '타이틀'
                    }]
                  }]
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
                  N: 'xf:group',
                  A: {
                    id: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:href',
                      E: [{
                        T: 3,
                        text: '#mf_title03'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:image',
                    A: {
                      src: '/cm/template/snippets/03_조회영역/03_조회영역.png',
                      style: 'width:16px;height:11px;',
                      id: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    id: '',
                    outerDiv: 'false',
                    style: '',
                    "class": 'designSystem_m_tit',
                    href: '#mf_title03'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '조회영역'
                    }]
                  }]
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
                  N: 'xf:group',
                  A: {
                    id: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:href',
                      E: [{
                        T: 3,
                        text: '#mf_title04'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:image',
                    A: {
                      src: '/cm/template/snippets/04_탭/04_탭.png',
                      style: 'width:16px;height:14px;',
                      id: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    id: '',
                    outerDiv: 'false',
                    style: '',
                    "class": 'designSystem_m_tit',
                    href: '#mf_title04'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '탭'
                    }]
                  }]
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
                  N: 'xf:group',
                  A: {
                    id: '',
                    tabIndex: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:href',
                      E: [{
                        T: 3,
                        text: '#mf_title05'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:image',
                    A: {
                      src: '/cm/template/snippets/05_입출력테이블/05_입출력테이블.png',
                      style: 'width:16px;height:14px;',
                      id: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    id: '',
                    outerDiv: 'false',
                    style: '',
                    "class": 'designSystem_m_tit',
                    href: '#mf_title05'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '입출력테이블'
                    }]
                  }]
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
                  N: 'xf:group',
                  A: {
                    id: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:href',
                      E: [{
                        T: 3,
                        text: '#mf_title06'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:image',
                    A: {
                      src: '/cm/template/snippets/06_그리드/06_그리드.png',
                      style: 'width:16px;height:14px;',
                      id: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    id: '',
                    outerDiv: 'false',
                    style: '',
                    "class": 'designSystem_m_tit',
                    href: '#mf_title06'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '그리드'
                    }]
                  }]
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
                  N: 'xf:group',
                  A: {
                    id: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:href',
                      E: [{
                        T: 3,
                        text: '#mf_title07'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:image',
                    A: {
                      src: '/cm/template/snippets/07_트리/07_트리.png',
                      style: 'width:16px;height:14px;',
                      id: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    id: '',
                    outerDiv: 'false',
                    style: '',
                    "class": 'designSystem_m_tit',
                    href: '#mf_title07'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '트리'
                    }]
                  }]
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
                  N: 'xf:group',
                  A: {
                    id: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:href',
                      E: [{
                        T: 3,
                        text: '#mf_title08'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:image',
                    A: {
                      src: '/cm/template/snippets/08_버튼/08_버튼.png',
                      style: 'width:16px;height:12px;',
                      id: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    id: '',
                    outerDiv: 'false',
                    style: '',
                    "class": 'designSystem_m_tit',
                    href: '#mf_title08'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '버튼'
                    }]
                  }]
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
                  N: 'xf:group',
                  A: {
                    id: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:href',
                      E: [{
                        T: 3,
                        text: '#mf_title09'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:image',
                    A: {
                      src: '/cm/template/snippets/09_아코디언/09_아코디언.png',
                      style: 'width:16px;height:16px;',
                      id: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    id: '',
                    outerDiv: 'false',
                    style: '',
                    "class": 'designSystem_m_tit',
                    href: '#mf_title09'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '아코디언'
                    }]
                  }]
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
                  N: 'xf:group',
                  A: {
                    id: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:href',
                      E: [{
                        T: 3,
                        text: '#mf_title10'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:image',
                    A: {
                      src: '/cm/template/snippets/10_입력폼_서식/10_입력폼_서식.png',
                      style: 'width:16px;height:16px;',
                      id: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    id: '',
                    outerDiv: 'false',
                    style: '',
                    "class": 'designSystem_m_tit',
                    href: '#mf_title10'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '입력폼_서식'
                    }]
                  }]
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
                  N: 'xf:group',
                  A: {
                    id: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:href',
                      E: [{
                        T: 3,
                        text: '#mf_title11'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:image',
                    A: {
                      src: '/cm/template/snippets/11_메시지/11_메시지.png',
                      style: 'width:15px;height:16px;',
                      id: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    id: '',
                    outerDiv: 'false',
                    style: '',
                    "class": 'designSystem_m_tit',
                    href: '#mf_title11'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '메시지'
                    }]
                  }]
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
                  N: 'xf:group',
                  A: {
                    id: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:href',
                      E: [{
                        T: 3,
                        text: '#mf_title11'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:image',
                    A: {
                      id: '',
                      src: '/cm/images/base/ico_fav.png',
                      style: 'width:15px;height:16px;'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    "class": 'designSystem_m_tit',
                    href: '#mf_title11',
                    id: '',
                    outerDiv: 'false',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '즐겨찾기'
                    }]
                  }]
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
                  N: 'xf:group',
                  A: {
                    id: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:href',
                      E: [{
                        T: 3,
                        text: '#mf_title11'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:image',
                    A: {
                      id: '',
                      src: '/cm/images/base/ico_recent.png',
                      style: 'width:15px;height:16px;'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    "class": 'designSystem_m_tit',
                    href: '#mf_title11',
                    id: '',
                    outerDiv: 'false',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '최근검색'
                    }]
                  }]
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
                  N: 'xf:group',
                  A: {
                    id: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:href',
                      E: [{
                        T: 3,
                        text: '#mf_title11'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:image',
                    A: {
                      id: '',
                      src: '/cm/images/base/ico_default.png',
                      style: 'width:14px;height:14px;'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    "class": 'designSystem_m_tit',
                    href: '#mf_title11',
                    id: '',
                    outerDiv: 'false',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '사용자'
                    }]
                  }]
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            style: '',
            id: '',
            "class": 'designSystem_cont'
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_dfbox',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'designSystem_df_tit',
                id: '',
                label: '화면시작',
                style: ''
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_list',
              id: '',
              style: '',
              tagname: 'ul'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: '',
                    scopeExternal: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                style: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_dfbox',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'designSystem_df_tit',
                id: '',
                label: '화면시작',
                style: ''
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_list',
              id: '',
              style: '',
              tagname: 'ul'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                style: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: '',
                    nextTabID: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_dfbox',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'designSystem_df_tit',
                id: '',
                label: '화면시작',
                style: ''
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_list',
              id: '',
              style: '',
              tagname: 'ul'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                style: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_dfbox',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'designSystem_df_tit',
                id: '',
                label: '화면시작',
                style: ''
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_list',
              id: '',
              style: '',
              tagname: 'ul'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                style: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_dfbox',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'designSystem_df_tit',
                id: '',
                label: '화면시작',
                style: ''
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_list',
              id: '',
              style: '',
              tagname: 'ul'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                style: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_dfbox',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'designSystem_df_tit',
                id: '',
                label: '화면시작',
                style: ''
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_list',
              id: '',
              style: '',
              tagname: 'ul'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                style: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_dfbox',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'designSystem_df_tit',
                id: '',
                label: '화면시작',
                style: ''
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_list',
              id: '',
              style: '',
              tagname: 'ul'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                style: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_dfbox',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'designSystem_df_tit',
                id: '',
                label: '화면시작',
                style: ''
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_list',
              id: '',
              style: '',
              tagname: 'ul'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                style: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_dfbox',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'designSystem_df_tit',
                id: '',
                label: '화면시작',
                style: ''
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_list',
              id: '',
              style: '',
              tagname: 'ul'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                style: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_dfbox',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'designSystem_df_tit',
                id: '',
                label: '화면시작',
                style: ''
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_list',
              id: '',
              style: '',
              tagname: 'ul'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                style: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_dfbox',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'designSystem_df_tit',
                id: '',
                label: '화면시작',
                style: ''
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'designSystem_list',
              id: '',
              style: '',
              tagname: 'ul'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'item',
                id: '',
                style: '',
                tagname: 'li'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'img_box',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:wframe',
                  A: {
                    "class": 'load_view',
                    id: '',
                    src: '',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'sc_area',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snippet',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '미리보기'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_snp_favorit',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '즐겨찾기'
                      }]
                    }]
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
                    cdata: '01_페이지시작_icon'
                  }]
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            style: '',
            id: '',
            "class": 'designSystem_zoom_box'
          },
          E: [{
            T: 1,
            N: 'w2:wframe',
            A: {
              "class": '',
              id: '',
              scopeExternal: '',
              src: '',
              style: ''
            }
          }, {
            T: 1,
            N: 'w2:anchor',
            A: {
              outerDiv: 'false',
              style: '',
              id: '',
              "class": 'btn_zoom_close',
              ref: ''
            },
            E: [{
              T: 1,
              N: 'xf:label',
              E: [{
                T: 4,
                cdata: 'Insert Text'
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            style: '',
            id: '',
            "class": 'designSystem_dim'
          }
        }]
      }]
    }]
  }]
});