/*amd /ui/SP/Submission/Submission_static.xml 8376 1b99139d5c825e61d074fce563e2881c55e147b4650caaf458a20e80aad93195 */
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
                  cdata: '\n<pre class="textNor" style="">\n<div class="etcbox">정적 submission을 사용하는 화면이다.\n단위 개발자가 단위 화면 관리를 위한 용도로 사용한다.\n</div>\n<div class="etc_tit">정적 submission 생성 </div>\n  - 정적 submission을 등록하여 사용한다.\n  예) &lt;xf:submission id="sbm_selectTemp" ....&gt;&lt;/xf:submission&gt;\n</pre>\n						'
                }]
              }, {
                T: 1,
                N: 'test',
                E: [{
                  T: 4,
                  cdata: '\n<pre class="textNor">\n<div class="etc_tit">1. 과정</div>\n- 아래와 같이 등록한 submission을 실행한다.\n  com.sbm.execute(sbm_selectTemp);\n</div>\n<div class="etc_tit">2. 결과</div>\n- 정적 submission을 통해 실행된 결과가 gridView에 표현된다.\n</pre>\n						'
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataMap',
            A: {
              id: 'dma_search'
            },
            E: [{
              T: 1,
              N: 'w2:keyInfo',
              E: [{
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'CUST_NM',
                  name: 'CUST_NM',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SHIP_TO_SIDO',
                  name: '시도',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SHIP_TO_SIGUNGU',
                  name: 'SHIP_TO_SIGUNGU',
                  dataType: 'text'
                }
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataList',
            A: {
              id: 'dlt_temp',
              baseNode: 'list',
              saveRemovedData: 'true',
              repeatNode: 'map'
            },
            E: [{
              T: 1,
              N: 'w2:columnInfo',
              E: [{
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'id',
                  name: 'id',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SEQ',
                  name: 'SEQ',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'CUST_NM',
                  name: 'CUST_NM',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SHIP_TO_SIDO',
                  name: 'SHIP_TO_SIDO',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SHIP_TO_SIGUNGU',
                  name: 'SHIP_TO_SIGUNGU',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SHIP_TO_STREET',
                  name: 'SHIP_TO_STREET',
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
            id: 'sbm_selectTemp',
            ref: 'data:json,dma_search',
            target: 'data:json,{"id":"dlt_temp","key":"dlt_temp"}',
            action: '/sample/tempSelect',
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
            'ev:submitdone': 'scwin.sbm_selectTemp_submitdone',
            'ev:submiterror': ''
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
              scwin.onpageload = function () {
                com.win.setEnterKeyEvent($p, grp_search, scwin.btn_search_onclick);
              };
              scwin.btn_search_onclick = function () {
                if (com.data.validateGroup($p, grp_search) === false) {
                  return;
                } else {
                  com.sbm.execute($p, sbm_selectTemp);
                }
              };
              scwin.sbm_selectTemp_submitdone = function (e) {
                if (com.sbm.getResultCode($p, e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {}
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
          "class": 'sub_contents flex_gvw',
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
            "class": 'shbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'shbox_inner',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                adaptive: 'layout',
                adaptiveThreshold: '900',
                "class": 'w2tb tb',
                id: 'grp_search',
                style: '',
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
                  tagname: 'colgroup'
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    style: 'width:110px;',
                    tagname: 'col'
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    style: '',
                    tagname: 'col'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": '',
                  id: '',
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
                    N: 'w2:textbox',
                    A: {
                      "class": '',
                      id: '',
                      label: '시도',
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
                    N: 'xf:input',
                    A: {
                      id: '',
                      ref: 'data:dma_search.SHIP_TO_SIDO',
                      style: 'width:150px',
                      "class": '',
                      mandatory: 'true',
                      placeholder: '충청북도',
                      refSync: 'true'
                    }
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": '',
                  id: '',
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
                    N: 'w2:textbox',
                    A: {
                      "class": '',
                      id: '',
                      label: '기준년월',
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
                      "class": 'w2selectbox',
                      direction: 'auto',
                      disabled: 'false',
                      disabledClass: 'w2selectbox_disabled',
                      id: '',
                      ref: '',
                      style: 'width:120px;',
                      submenuSize: 'auto'
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
                            cdata: '1월'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '2월'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '3월'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '4월'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '5월'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '6월'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '7월'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '8월'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '9월'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '10월'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '11월'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:item',
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          E: [{
                            T: 4,
                            cdata: '12월'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value'
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
                    N: 'w2:textbox',
                    A: {
                      "class": '',
                      id: '',
                      label: '기준년월',
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
                      focusOnDateSelect: 'false',
                      footerDiv: 'true',
                      id: '',
                      renderDiv: 'true',
                      renderType: 'native',
                      rightAlign: 'false',
                      style: 'width: 170px;'
                    }
                  }]
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'btn_shbox',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm sch',
                disabled: '',
                id: 'btn_search',
                style: '',
                type: 'button',
                'ev:onclick': 'scwin.btn_search_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '조회'
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            adaptiveThreshold: '',
            "class": 'gvwbox wq_flx',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:gridView',
            A: {
              autoFit: 'allColumn',
              "class": 'wq_gvw',
              dataList: 'data:dlt_temp',
              editModeEvent: 'onclick',
              fixedColumnWithHidden: 'true',
              id: 'gridView1',
              keyMoveEditMode: 'true',
              readOnly: 'a',
              rowNumVisible: 'true',
              rowStatusVisible: 'false',
              style: 'height:296px;',
              useShiftKey: 'true',
              defaultCellHeight: '26',
              rowNumWidth: '50',
              rowStatusWidth: '',
              keepDefaultColumnWidth: 'true',
              autoFitMinWidth: '900',
              scrollByColumn: 'true'
            },
            E: [{
              T: 1,
              N: 'w2:header',
              A: {
                id: 'header1',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:row',
                A: {
                  id: 'row1',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column1',
                    inputType: 'text',
                    style: '',
                    value: '사용자',
                    width: '195'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column3',
                    inputType: 'text',
                    style: '',
                    value: '주소1',
                    width: '119'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column4',
                    inputType: 'text',
                    style: '',
                    value: '주소2',
                    width: '317'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column6',
                    inputType: 'text',
                    style: '',
                    value: '주소3',
                    width: '121'
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'w2:gBody',
              A: {
                id: 'gBody1',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:row',
                A: {
                  id: 'row2',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'CUST_NM',
                    inputType: 'text',
                    style: '',
                    width: '195'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'SHIP_TO_SIDO',
                    inputType: 'text',
                    style: '',
                    width: '119',
                    textAlign: 'left'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'SHIP_TO_SIGUNGU',
                    inputType: 'text',
                    style: '',
                    textAlign: 'left',
                    width: '317'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'SHIP_TO_STREET',
                    inputType: 'text',
                    style: '',
                    width: '121',
                    textAlign: 'left'
                  }
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }]
});