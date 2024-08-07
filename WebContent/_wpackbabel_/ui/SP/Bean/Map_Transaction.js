/*amd /ui/SP/Bean/Map_Transaction.xml 12070 6426945d4d98a9003489fac27b7ff43b0b78065533550cbc8cdce1d3723cf78d */
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
                  cdata: '\n<pre class="textNor">\n<div class="etcbox">본 화면은 Map방식으로 통신하는 CRUD Sample 이다.\n</div>\n<div class="etc_tit">설정 내용</div>\n  1. WebSquare.xml의 아래의 태그를 추가하면 map, bean 방식을 모두 사용할 수 있다.\n  &lt;extends&gt;\n	  &lt;autoConvertServerType value="true"&gt;\n		  &lt;uri-pattern&gt;\n			  &lt;bean value="bean" /&gt;\n			  &lt;map value="map" /&gt;\n		  &lt;/uri-pattern&gt;\n	  &lt;/autoConvertServerType&gt;\n  &lt;/extends&gt;\n  \n  위와 같이 설정하면 action url에 bean 이 있으면, bean 설정이 적용되고, ( 예: /sample/bean/test)\n  map이 있으면, map 설정이 적용된다.( 예: /sample/map/test)\n  만일 action url에 위 두 pattern이 없으면 dapter의 기본 설정이 적용된다.\n  &lt;adapter&gt;\n	&lt;request&gt;\n	... 중략 ...\n	&lt;convertType <font color=red>server="map" client="json"</font> /&gt;\n	... 중략 ...\n	&lt;/request&gt;\n	&lt;response&gt;\n	&lt;convertType <font color=red>server="map" client="json"</font> /&gt;\n	... 중략 ...\n	&lt;/response&gt;\n	 ... 중략 ...\n\n  2. controller 설정\n  예: CLIENT에서 /sample/map/tempMapSelect 호출하면, Controller에서 아래처럼 Annotation을 사용\n  \n  @RequestMapping("/sample/map/tempMapSelect")  \n</pre>\n						'
                }]
              }, {
                T: 1,
                N: 'test',
                E: [{
                  T: 4,
                  cdata: '\n<pre class="textNor" style="">						\n<div class="etc_tit">1. 과정</div>\n1. [조회]를 클릭하여 조회 내용을 확인한다. 초기 조회조건 - <font color=red><B>\'test\'</B></font>\n2. [등록], [저장] 버튼을 통하여 입력, 수정, 삭제 기능을 확인한다.\n<div class="etc_tit">2. 결과</div>\n1. debugger 기능을 통하여 Map 방식으로 통신함을 확인한다. \n2. 정상적으로 입력, 수정, 삭제, 조회가 되는지 확인한다.\n</pre>\n						'
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataMap',
            A: {
              baseNode: 'map',
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
                  name: '성명',
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
                  id: 'DEL',
                  name: '삭제',
                  dataType: 'text'
                }
              }, {
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
                  name: '성명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'CUST_TEL_NO',
                  name: '전화번호',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'CUST_EMAIL',
                  name: '이메일',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'PRDT_CMPNY_NM',
                  name: '소속',
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
            action: '/sample/map/tempMapSelect',
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
        }, {
          T: 1,
          N: 'xf:submission',
          A: {
            id: 'sbm_saveTemp',
            ref: 'data:json,{"id":"dlt_temp","action":"modified"}',
            target: 'data:json,dlt_temp',
            action: '/sample/map/tempMapSave',
            method: 'post',
            mediatype: 'application/json',
            encoding: 'UTF-8',
            instance: '',
            replace: '',
            errorHandler: '',
            customHandler: '',
            mode: 'asynchronous',
            processMsg: '저장중입니다...',
            'ev:submit': '',
            'ev:submitdone': 'scwin.sbm_saveTemp_submitdone',
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
              scwin.btn_add_onclick = function () {
                var rowIndex = dlt_temp.insertRow();
              };
              scwin.btn_save_onclick = function () {
                var idx = dlt_temp.getModifiedIndex();
                com.win.confirm($p, idx + '건의 데이타를 반영하시겠습니까', function (res) {
                  if (res.clickValue === true) {
                    com.sbm.execute($p, sbm_saveTemp);
                  }
                });
              };
              scwin.sbm_saveTemp_submitdone = function (e) {
                if (com.sbm.getResultCode($p, e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
                  com.sbm.execute($p, sbm_selectTemp);
                }
              };
              scwin.grd_customer_oncellclick = function (row, col) {
                if (col == 0) {
                  var chk_val = dlt_temp.getCellData(row, col);
                  if (chk_val == '1') {
                    dlt_temp.modifyRowStatus(row, 'D');
                  } else {
                    dlt_temp.undoRow(row);
                  }
                }
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
                adaptiveThreshold: '768',
                "class": 'w2tb tb row1',
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
                      label: '성명',
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
                      id: 'ibx_custNm',
                      ref: 'data:dma_search.CUST_NM',
                      style: 'width:150px;',
                      "class": '',
                      mandatory: 'true',
                      placeholder: '',
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
            "class": 'dfbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'fr',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm  row_add',
                id: 'btn_add',
                style: '',
                type: 'button',
                'ev:onclick': 'scwin.btn_add_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '행추가'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm ',
                id: 'btn_save',
                style: '',
                type: 'button',
                'ev:onclick': 'scwin.btn_save_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '저장'
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            adaptiveThreshold: '',
            "class": 'gvwbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:gridView',
            A: {
              autoFit: 'allColumn',
              autoFitMinWidth: '800',
              "class": 'wq_gvw',
              dataList: 'data:dlt_temp',
              editModeEvent: 'onclick',
              'ev:oncellclick': 'scwin.grd_customer_oncellclick',
              fixedColumnWithHidden: 'true',
              id: 'grd_customer',
              keyMoveEditMode: 'true',
              rowNumVisible: 'true',
              rowStatusVisible: 'true',
              scrollByColumn: 'false',
              style: 'height:296px;',
              useShiftKey: 'true',
              rowNumHeaderValue: 'No',
              rowStatusHeaderValue: '상태',
              'ev:onheaderclick': 'scwin.grd_customer_onheaderclick',
              defaultCellHeight: '26',
              keepDefaultColumnWidth: 'true'
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
                    id: 'column13',
                    inputType: 'checkbox',
                    style: '',
                    value: '삭제',
                    width: '50',
                    checkboxLabel: '선택',
                    fixColumnWidth: 'true'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column11',
                    inputType: 'text',
                    style: '',
                    value: 'ID',
                    width: '50'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column9',
                    inputType: 'text',
                    style: '',
                    value: '순번',
                    width: '50'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column7',
                    inputType: 'text',
                    style: '',
                    value: '성명',
                    width: '100'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column5',
                    inputType: 'text',
                    style: '',
                    value: '전화번호',
                    width: '120'
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
                    value: '이메일',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column1',
                    inputType: 'text',
                    style: '',
                    value: '소속',
                    width: '220'
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
                    id: 'DEL',
                    inputType: 'checkbox',
                    style: '',
                    width: '70',
                    checkboxLabel: '선택'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    hidden: 'true',
                    id: 'id',
                    inputType: 'text',
                    style: '',
                    textAlign: 'center',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    hidden: 'true',
                    id: 'SEQ',
                    inputType: 'text',
                    style: '',
                    textAlign: 'center',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'CUST_NM',
                    inputType: 'text',
                    style: '',
                    textAlign: 'center',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'CUST_TEL_NO',
                    inputType: 'text',
                    style: '',
                    textAlign: 'center',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'CUST_EMAIL',
                    inputType: 'text',
                    style: '',
                    textAlign: 'left',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'PRDT_CMPNY_NM',
                    inputType: 'text',
                    style: '',
                    textAlign: 'left',
                    width: '70'
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