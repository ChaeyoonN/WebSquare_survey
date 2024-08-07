/*amd /ui/HM/HM004P01.xml 15575 dcef3cb986d4de964d27045c6983874bd19d286c918a9244f671c6e553ac1d90 */
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
          },
          E: [{
            T: 1,
            N: 'w2:dataMap',
            A: {
              baseNode: 'map',
              id: 'dma_select'
            },
            E: [{
              T: 1,
              N: 'w2:keyInfo',
              E: [{
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SCHE_ID',
                  name: '식별자',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SCHE_START',
                  name: '시작일자',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SCHE_END',
                  name: '마감일자',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'MEMO',
                  name: '일정내용',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SCHE_THEME',
                  name: '색상',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SCHE_TITLE',
                  name: '일정명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SCHE_CODE',
                  name: '일정구분',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SCHE_STIME',
                  name: '시작시간',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SCHE_FTIME',
                  name: '마감시간',
                  dataType: 'text'
                }
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
            id: 'sbm_save',
            ref: 'data:json,dma_select',
            target: '',
            action: '/schedule/insert',
            method: 'post',
            mediatype: 'application/json',
            encoding: 'UTF-8',
            instance: '',
            replace: '',
            errorHandler: '',
            customHandler: '',
            mode: 'asynchronous',
            processMsg: '',
            'ev:submit': '',
            'ev:submitdone': 'scwin.sbm_save_submitdone',
            'ev:submiterror': '',
            abortTrigger: ''
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
          lazy: 'false',
          type: 'text/javascript'
        },
        E: [{
          T: 4,
          cdata: function cdata(scopeObj) {
            with (scopeObj) {
              scwin.onpageload = function () {
                var param = com.data.getParameter($p);
                ipt_start.setValue(param.data.SCHE_START);
                ipt_end.setValue(param.data.SCHE_END);
                ipt_title.focus();
                scwin.closeCallbackFncName = param.callbackFn;
              };
              scwin.btn_cancel_onclick = function (e) {
                com.win.closePopup($p);
              };
              scwin.btn_add_onclick = function (e) {
                scwin.insertSchedule();
              };
              scwin.insertSchedule = function () {
                var sTime = sbx_stime1.getValue() + sbx_stime2.getValue();
                var fTime = sbx_ftime1.getValue() + sbx_ftime2.getValue();
                var data = {
                  'SCHE_TITLE': ipt_title.getValue(),
                  'SCHE_START': ipt_start.getValue(),
                  'SCHE_END': ipt_end.getValue(),
                  'MEMO': ipt_memo.getValue(),
                  'SCHE_CODE': sbx_code.getValue(),
                  'SCHE_STIME': sTime,
                  'SCHE_FTIME': fTime,
                  'SCHE_THEME': '{"color" : "' + sbx_theme.getValue() + '"}'
                };
                dma_select.setJSON(data);
                if (com.data.validateGroup($p, grp_table)) {
                  com.sbm.execute($p, sbm_save);
                }
                ;
              };
              scwin.sbm_save_submitdone = function (e) {
                com.win.closePopup($p, 'scwin.closeCallbackFncName');
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
          id: '',
          style: '',
          "class": 'pop_contents flex_gvw'
        },
        E: [{
          T: 1,
          N: 'xf:group',
          A: {
            id: 'grp_table',
            style: '',
            "class": 'tbbox'
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              adaptive: 'layout',
              tagname: 'table',
              style: 'width:100%;',
              id: '',
              "class": 'w2tb tb'
            },
            E: [{
              T: 1,
              N: 'w2:attributes',
              E: [{
                T: 1,
                N: 'w2:summary'
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'caption'
              }
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'colgroup'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'col',
                  style: 'width:13.39%;'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'col',
                  style: 'width:50.00%'
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:attributes',
                  E: [{
                    T: 1,
                    N: 'w2:scope',
                    E: [{
                      T: 3,
                      text: 'row'
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '일정명',
                    style: 'min-width: 50px;'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td',
                  id: 'grp_title'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    id: 'ipt_title',
                    style: 'width:100%;',
                    mandatory: 'true'
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:attributes',
                  E: [{
                    T: 1,
                    N: 'w2:scope',
                    E: [{
                      T: 3,
                      text: 'row'
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '분류',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    id: 'sbx_code',
                    chooseOption: '',
                    style: 'width: 148px;',
                    submenuSize: 'auto',
                    allOption: '',
                    disabled: 'false',
                    direction: 'auto',
                    appearance: 'minimal',
                    disabledClass: 'w2selectbox_disabled',
                    ref: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: '교육'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: '0'
                        }]
                      }]
                    }, {
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: '업무'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: '1'
                        }]
                      }]
                    }, {
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: '회의'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: '2'
                        }]
                      }]
                    }, {
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: '미팅'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: '3'
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
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:attributes',
                  E: [{
                    T: 1,
                    N: 'w2:scope',
                    E: [{
                      T: 3,
                      text: 'row'
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '색상',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    id: 'sbx_theme',
                    chooseOption: '',
                    style: 'width: 148px;',
                    submenuSize: 'auto',
                    allOption: '',
                    disabled: 'false',
                    direction: 'auto',
                    appearance: 'minimal',
                    disabledClass: 'w2selectbox_disabled',
                    ref: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: '검정'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'black'
                        }]
                      }]
                    }, {
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: '파랑'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'blue'
                        }]
                      }]
                    }, {
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: '녹색'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'green'
                        }]
                      }]
                    }, {
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: '빨강'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'red'
                        }]
                      }]
                    }, {
                      T: 1,
                      N: 'xf:item',
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        E: [{
                          T: 4,
                          cdata: '주황'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'orange'
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
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:attributes',
                  E: [{
                    T: 1,
                    N: 'w2:scope',
                    E: [{
                      T: 3,
                      text: 'row'
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '일정 내용',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: 'height: 80px;',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:textarea',
                  A: {
                    id: 'ipt_memo',
                    style: 'width: 100%;height: 100px;'
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:attributes',
                  E: [{
                    T: 1,
                    N: 'w2:scope',
                    E: [{
                      T: 3,
                      text: 'row'
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '시작일자',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'w2:inputCalendar',
                  A: {
                    id: 'ipt_start',
                    style: 'width: 120px;',
                    calendarValueType: 'yearMonthDate',
                    "class": 'mr5'
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    id: '',
                    style: 'display: inline-block;border: none;',
                    "class": ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:select1',
                    A: {
                      id: 'sbx_stime1',
                      chooseOption: '',
                      style: 'width: 50px;',
                      submenuSize: 'auto',
                      allOption: '',
                      disabled: 'false',
                      direction: 'auto',
                      appearance: 'minimal',
                      disabledClass: 'w2selectbox_disabled',
                      ref: '',
                      "class": 'mr5'
                    },
                    E: [{
                      T: 1,
                      N: 'xf:choices',
                      E: [{
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '00'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '00'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '01'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '01'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '02'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '02'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '03'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '03'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '04'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '04'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '05'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '05'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '06'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '06'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '07'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '07'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '08'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '08'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '09'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '09'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '10'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '10'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '11'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '11'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '12'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '12'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '13'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '13'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '14'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '14'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '15'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '15'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '16'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '16'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '17'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '17'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '18'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '18'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '19'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '19'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '20'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '20'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '21'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '21'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '22'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '22'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '23'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '23'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '24'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '24'
                          }]
                        }]
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      id: '',
                      label: '시',
                      style: 'width:28px;display:inline-block;',
                      tagname: 'h4'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": '',
                    id: '',
                    style: 'display: inline-block;border: none;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:select1',
                    A: {
                      allOption: '',
                      appearance: 'minimal',
                      chooseOption: '',
                      direction: 'auto',
                      disabled: 'false',
                      disabledClass: 'w2selectbox_disabled',
                      id: 'sbx_stime2',
                      style: 'width: 50px;',
                      submenuSize: 'auto',
                      ref: '',
                      "class": 'mr5'
                    },
                    E: [{
                      T: 1,
                      N: 'xf:choices',
                      E: [{
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '00'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '00'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '10'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '10'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '20'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '20'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '30'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '30'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '40'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '40'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '50'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '50'
                          }]
                        }]
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      id: '',
                      label: '분',
                      style: 'width:28px;display:inline-block;',
                      tagname: 'h4'
                    }
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:attributes',
                  E: [{
                    T: 1,
                    N: 'w2:scope',
                    E: [{
                      T: 3,
                      text: 'row'
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '마감일자',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'w2:inputCalendar',
                  A: {
                    id: 'ipt_end',
                    style: 'width: 120px;',
                    calendarValueType: 'yearMonthDate',
                    "class": 'mr5'
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": '',
                    id: '',
                    style: 'display: inline-block;border: none;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:select1',
                    A: {
                      allOption: '',
                      appearance: 'minimal',
                      chooseOption: '',
                      direction: 'auto',
                      disabled: 'false',
                      disabledClass: 'w2selectbox_disabled',
                      id: 'sbx_ftime1',
                      style: 'width: 50px;',
                      submenuSize: 'auto',
                      ref: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:choices',
                      E: [{
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '00'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '00'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '01'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '01'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '02'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '02'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '03'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '03'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '04'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '04'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '05'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '05'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '06'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '06'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '07'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '07'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '08'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '08'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '09'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '09'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '10'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '10'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '11'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '11'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '1'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '12'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '13'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '13'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '14'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '14'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '15'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '15'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '16'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '16'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '17'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '17'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '18'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '18'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '19'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '19'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '20'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '20'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '21'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '21'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '22'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '22'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '23'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '23'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '24'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '24'
                          }]
                        }]
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      id: '',
                      label: '시',
                      style: 'width:28px;display:inline-block;',
                      tagname: 'h4'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": '',
                    id: '',
                    style: 'display: inline-block;border: none;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:select1',
                    A: {
                      allOption: '',
                      appearance: 'minimal',
                      chooseOption: '',
                      direction: 'auto',
                      disabled: 'false',
                      disabledClass: 'w2selectbox_disabled',
                      id: 'sbx_ftime2',
                      style: 'width: 50px;',
                      submenuSize: 'auto',
                      ref: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:choices',
                      E: [{
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '00'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '00'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '10'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '10'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '20'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '20'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '30'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '30'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '40'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '40'
                          }]
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '50'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '50'
                          }]
                        }]
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      id: '',
                      label: '분',
                      style: 'width:28px;display:inline-block;',
                      tagname: 'h4'
                    }
                  }]
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            id: '',
            style: 'display: flex;justify-content: center;',
            "class": 'btnbox'
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              id: '',
              style: 'justify-content: center;',
              "class": 'fr'
            },
            E: [{
              T: 1,
              N: 'xf:trigger',
              A: {
                type: 'button',
                id: 'btn_add',
                style: '',
                "class": 'btn_cm pt',
                'ev:onclick': 'scwin.btn_add_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '등록'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                type: 'button',
                id: 'btn_cancel',
                style: '',
                "class": 'btn_cm',
                'ev:onclick': 'scwin.btn_cancel_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '취소'
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }]
});