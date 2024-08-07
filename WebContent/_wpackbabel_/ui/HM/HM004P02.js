/*amd /ui/HM/HM004P02.xml 16953 da699bce5c53e33ab0c788ad6b183b31f74f4e880dccda004e8b822f2896cf9c */
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
            id: 'sbm_delete',
            ref: 'data:json,dma_select',
            target: '',
            action: '/schedule/delete',
            method: 'post',
            mediatype: 'application/json',
            encoding: 'UTF-8',
            instance: '',
            replace: '',
            errorHandler: '',
            customHandler: '',
            mode: 'asynchronous',
            processMsg: '일정을 삭제합니다',
            'ev:submit': '',
            'ev:submitdone': '',
            'ev:submiterror': '',
            abortTrigger: ''
          }
        }, {
          T: 1,
          N: 'xf:submission',
          A: {
            id: 'sbm_update',
            ref: 'data:json,dma_select',
            target: '',
            action: '/schedule/update',
            method: 'post',
            mediatype: 'application/json',
            encoding: 'UTF-8',
            instance: '',
            replace: '',
            errorHandler: '',
            customHandler: '',
            mode: 'asynchronous',
            processMsg: '등록된 일정을 수정합니다.',
            'ev:submit': '',
            'ev:submitdone': 'scwin.sbm_update_submitdone',
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
                ipt_title.setValue(param.data.SCHE_TITLE);
                ipt_memo.setValue(param.data.MEMO);
                sbx_code.setValue(param.data.SCHE_CODE);
                var check = JSON.parse(param.data.SCHE_THEME);
                sbx_theme.setValue(check.color);
                var sTime = param.data.SCHE_STIME;
                var fTime = param.data.SCHE_FTIME;
                sbx_stime1.setValue(sTime.substring(0, 2));
                sbx_stime2.setValue(sTime.substring(2, 2));
                sbx_ftime1.setValue(fTime.substring(0, 2));
                sbx_ftime2.setValue(fTime.substring(2, 2));
                scwin.closeCallbackFncName = param.callbackFn;
              };
              scwin.btn_cancel_onclick = function (e) {
                com.win.closePopup($p);
              };
              scwin.btn_update_onclick = function (e) {
                scwin.updateSchedule();
              };
              scwin.updateSchedule = function () {
                var sTime = sbx_stime1.getValue() + sbx_stime2.getValue();
                var fTime = sbx_ftime1.getValue() + sbx_ftime2.getValue();
                var parent = com.win.getParent($p);
                var data = {
                  'SCHE_TITLE': ipt_title.getValue(),
                  'SCHE_START': ipt_start.getValue(),
                  'SCHE_END': ipt_end.getValue(),
                  'MEMO': ipt_memo.getValue(),
                  'SCHE_CODE': sbx_code.getValue(),
                  'SCHE_STIME': sTime,
                  'SCHE_FTIME': fTime,
                  'SCHE_THEME': '{"color" : "' + sbx_theme.getValue() + '"}',
                  'SCHE_ID': parent.dma_select.getJSON().SCHE_ID
                };
                dma_select.setJSON(data);
                com.sbm.execute($p, sbm_update);
              };
              scwin.btn_delete_onclick = function (e) {
                scwin.deleteSchedule();
              };
              scwin.deleteSchedule = function () {
                var param = com.data.getParameter($p);
                var data = {
                  'SCHE_ID': param.data.SCHE_ID
                };
                dma_select.setJSON(data);
                com.sbm.execute($p, sbm_delete);
                com.win.closePopup($p, 'scwin.closeCallbackFncName');
              };
              scwin.sbm_update_submitdone = function (e) {
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
          "class": 'pop_contents',
          id: '',
          style: ''
        },
        E: [{
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'tbbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              adaptive: 'layout',
              "class": 'w2tb tb',
              id: '',
              style: 'width:100%;',
              tagname: 'table'
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
                  style: 'width:13.39%;',
                  tagname: 'col'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  style: 'width:50.00%',
                  tagname: 'col'
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
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
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    id: 'ipt_title',
                    style: 'width:100%;'
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
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
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
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
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
                    id: 'sbx_code',
                    style: 'width: 148px;',
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
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
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
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
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
                    id: 'sbx_theme',
                    style: 'width: 148px;',
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
                          cdata: '초록'
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
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
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
                  "class": 'w2tb_td',
                  style: 'height: 80px;',
                  tagname: 'td'
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
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
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
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'w2:inputCalendar',
                  A: {
                    calendarValueType: 'yearMonthDate',
                    id: 'ipt_start',
                    style: 'width: 120px;',
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
                      id: 'sbx_stime1',
                      ref: '',
                      style: 'width: 50px;',
                      submenuSize: 'auto',
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
                      ref: '',
                      style: 'width: 50px;',
                      submenuSize: 'auto',
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
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
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
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'w2:inputCalendar',
                  A: {
                    calendarValueType: 'yearMonthDate',
                    id: 'ipt_end',
                    style: 'width: 120px;',
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
                      ref: '',
                      style: 'width: 50px;',
                      submenuSize: 'auto',
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
                      ref: '',
                      style: 'width: 50px;',
                      submenuSize: 'auto',
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
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'btnbox',
            id: '',
            style: 'display: flex;justify-content: center;'
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'fr',
              id: '',
              style: 'justify-content: center;'
            },
            E: [{
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm pt',
                id: 'btn_update',
                style: '',
                type: 'button',
                'ev:onclick': 'scwin.btn_update_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '수정'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm',
                id: 'btn_cancel',
                style: '',
                type: 'button',
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
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                type: 'button',
                id: 'btn_delete',
                style: '',
                "class": 'btn_cm pt',
                'ev:onclick': 'scwin.btn_delete_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '삭제'
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }]
});