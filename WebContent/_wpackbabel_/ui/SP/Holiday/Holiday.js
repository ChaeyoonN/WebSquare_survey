/*amd /ui/SP/Holiday/Holiday.xml 12542 29099d4ea32519f407588453ffd280161b85d7087368f63ab3778ca22fd02b94 */
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
            N: 'w2:dataList',
            A: {
              baseNode: 'list',
              repeatNode: 'map',
              id: 'dlt_holiday',
              saveRemovedData: 'true'
            },
            E: [{
              T: 1,
              N: 'w2:columnInfo',
              E: [{
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'CHECK',
                  name: 'CHECK',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'REST_DATE',
                  name: '휴일날짜',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'REST_NAME',
                  name: '휴일명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'REST_CODE',
                  name: '휴일구분',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'NOTE',
                  name: '휴일설명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'REST_SEQ',
                  name: '번호',
                  dataType: 'text'
                }
              }]
            }, {
              T: 1,
              N: 'w2:data',
              A: {
                use: 'false'
              }
            }]
          }, {
            T: 1,
            N: 'w2:dataMap',
            A: {
              baseNode: 'map',
              id: 'dmt_search'
            },
            E: [{
              T: 1,
              N: 'w2:keyInfo',
              E: [{
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'REST_DATE',
                  name: '연도',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'REST_CODE',
                  name: '휴일구분',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'REST_NAME',
                  name: '휴일명',
                  dataType: 'text'
                }
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataList',
            A: {
              baseNode: 'list',
              repeatNode: 'map',
              id: 'dlt_code',
              saveRemovedData: 'true'
            },
            E: [{
              T: 1,
              N: 'w2:columnInfo',
              E: [{
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'REST_CODE',
                  name: '휴일구분코드',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'REST_CODENAME',
                  name: '휴일구분명',
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
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'REST_CODE',
                  E: [{
                    T: 4,
                    cdata: '0'
                  }]
                }, {
                  T: 1,
                  N: 'REST_CODENAME',
                  E: [{
                    T: 4,
                    cdata: '법정'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'REST_CODE',
                  E: [{
                    T: 4,
                    cdata: '1'
                  }]
                }, {
                  T: 1,
                  N: 'REST_CODENAME',
                  E: [{
                    T: 4,
                    cdata: '임시'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'REST_CODE',
                  E: [{
                    T: 4,
                    cdata: '2'
                  }]
                }, {
                  T: 1,
                  N: 'REST_CODENAME',
                  E: [{
                    T: 4,
                    cdata: '사내'
                  }]
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
            id: 'sbm_holiday',
            ref: 'data:json,dmt_search',
            target: 'data:json,dlt_holiday',
            action: '/holiday',
            method: 'post',
            mediatype: 'application/json',
            encoding: 'UTF-8',
            instance: '',
            replace: '',
            errorHandler: '',
            customHandler: '',
            mode: 'asynchronous',
            processMsg: '휴일 목록을 조회합니다.',
            'ev:submit': 'scwin.sbm_holiday_submit',
            'ev:submitdone': 'scwin.sbm_holiday_submitdone',
            'ev:submiterror': '',
            abortTrigger: ''
          }
        }, {
          T: 1,
          N: 'xf:submission',
          A: {
            id: 'sbm_search',
            ref: 'data:json,dmt_search',
            target: 'data:json,dlt_holiday',
            action: '/holiday',
            method: 'post',
            mediatype: 'application/json',
            encoding: 'UTF-8',
            instance: '',
            replace: '',
            errorHandler: '',
            customHandler: '',
            mode: 'asynchronous',
            processMsg: '조건을 반영해 검색 중 입니다.',
            'ev:submit': '',
            'ev:submitdone': '',
            'ev:submiterror': '',
            abortTrigger: ''
          }
        }, {
          T: 1,
          N: 'xf:submission',
          A: {
            id: 'sbm_save',
            ref: 'data:json,{"action":"modified","id":"dlt_holiday"}',
            target: '',
            action: '/holiday/save',
            method: 'post',
            mediatype: 'application/json',
            encoding: 'UTF-8',
            instance: '',
            replace: '',
            errorHandler: '',
            customHandler: '',
            mode: 'asynchronous',
            processMsg: '저장 중 입니다.',
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
                com.sbm.execute($p, sbm_holiday);
              };
              scwin.btn_search_onclick = function (e) {
                dmt_search.set('REST_DATE', sbx_year.getValue());
                dmt_search.set('REST_CODE', sbx_code.getValue());
                dmt_search.set('REST_NAME', ip_text.getValue());
                com.sbm.execute($p, sbm_search);
              };
              scwin.ip_text_oneditenter = function () {
                dmt_search.set('REST_DATE', sbx_year.getValue());
                dmt_search.set('REST_CODE', sbx_code.getValue());
                dmt_search.set('REST_NAME', ip_text.getValue());
                com.sbm.execute($p, sbm_holiday);
              };
              scwin.btn_cancel_onclick = function (e) {
                com.data.undoGridView($p, grd_holiday);
              };
              scwin.validateCode = function () {
                var valInfo = [{
                  id: 'REST_DATE',
                  mandatory: true
                }, {
                  id: 'REST_CODE',
                  mandatory: true
                }, {
                  id: 'REST_NAME',
                  mandatory: true
                }];
                return com.data.validateGridView($p, grd_holiday, valInfo);
              };
              scwin.saveHoliday = function (res) {
                if (scwin.validateCode()) {
                  console.log('유효성 통과');
                  if (res.clickValue === true) {
                    com.sbm.execute($p, sbm_save);
                  }
                }
              };
              scwin.btn_save_onclick = function (e) {
                if (com.data.isModified($p, dlt_holiday)) {
                  com.win.confirm($p, com.data.getMessage($p, 'MSG_CM_00031'), scwin.saveHoliday);
                } else {
                  com.win.alert($p, com.data.getMessage($p, 'MSG_CM_00032'));
                }
              };
              scwin.sbm_save_submitdone = function (e) {
                if (com.sbm.getResultCode($p, e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
                  scwin.btn_search_onclick();
                }
              };
              scwin.btn_addGrpCell_onclick = function (e) {
                var focus = grd_holiday.getFocusedRowIndex();
                com.data.insertRow($p, grd_holiday);
              };
              scwin.grd_holiday_oncellclick = function (row, col) {
                if (col == 0) {
                  var rowStatus = dlt_holiday.getRowStatus(row);
                  if (rowStatus == 'C') {
                    dlt_holiday.deleteRow(row);
                  } else {
                    var chk_val = dlt_holiday.getCellData(row, col);
                    if (chk_val == '1') {
                      dlt_holiday.modifyRowStatus(row, 'D');
                    } else {
                      dlt_holiday.undoRow(row);
                    }
                  }
                } else if (col == 1) {
                  console.log('날짜선택');
                }
              };
              scwin.sbm_holiday_submitdone = function (e) {};
              scwin.btn_excelDown_onclick = function (e) {
                var option = {};
                option.fileName = 'test.xls';
                option.useHeader = 'true';
                option.displayGridlines = 'false';
                option.printSet = {
                  'landScape': 'true',
                  'fitWidth': '5',
                  'fitHeight': '3',
                  'fitToPage': 'true'
                };
                grd_holiday.advancedExcelDownload(option);
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
          style: 'padding:16px;min-width: 1000px;'
        },
        E: [{
          T: 1,
          N: 'w2:wframe',
          A: {
            style: ';height:30px;margin-bottom:16px;',
            id: 'wfm_header',
            src: '../../cm/xml/contentHeader.xml'
          }
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            id: '',
            style: 'height:42px;position:relative;background-color:#f1f1f1;padding-right:16px;padding-left:16px;margin-bottom:30px;box-sizing: border-box;border: 1px solid #ced4da',
            "class": 'shbox'
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              id: '',
              style: 'height:100%;position:relative;vertical-align:bottom;box-sizing: border-box;'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'table',
                style: 'width:87.91%;height:100%;',
                id: '',
                "class": 'w2tb'
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
                    style: 'width:18.00%;'
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    tagname: 'col',
                    style: 'width:53.65%;'
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    tagname: 'col',
                    style: 'width:24.97%;'
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    tagname: 'col',
                    style: 'width:54.33%;'
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    tagname: 'col',
                    style: 'width:21.32%;'
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    tagname: 'col',
                    style: 'width:100.00%'
                  }
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
                    style: ';border:none;',
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
                        text: 'col'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      id: '',
                      label: '연도',
                      style: 'width:82px;height:23px;display:inline;'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    tagname: 'th',
                    "class": 'w2tb_th',
                    style: ';border:none;'
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
                    N: 'w2:inputCalendar',
                    A: {
                      id: 'sbx_year',
                      style: 'width:155px;height:20px;',
                      calendarValueType: 'year',
                      pickerType: 'dynamic',
                      cancelButtonShow: 'true'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    tagname: 'th',
                    "class": 'w2tb_th',
                    style: ';border:none;'
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
                      label: '휴일구분',
                      style: 'width:82px;height:23px;display:inline;'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    tagname: 'th',
                    "class": 'w2tb_th',
                    style: ';border:none;'
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
                    N: 'xf:select1',
                    A: {
                      allOption: 'true',
                      appearance: 'minimal',
                      chooseOption: '',
                      direction: 'auto',
                      disabled: 'false',
                      disabledClass: 'w2selectbox_disabled',
                      id: 'sbx_code',
                      style: 'width: 148px;height: 21px;text-align:center;',
                      submenuSize: 'auto',
                      ref: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:choices',
                      E: [{
                        T: 1,
                        N: 'xf:itemset',
                        A: {
                          nodeset: 'data:dlt_code'
                        },
                        E: [{
                          T: 1,
                          N: 'xf:label',
                          A: {
                            ref: 'REST_CODENAME'
                          }
                        }, {
                          T: 1,
                          N: 'xf:value',
                          A: {
                            ref: 'REST_CODE'
                          }
                        }]
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    tagname: 'th',
                    "class": 'w2tb_th',
                    style: ';border:none;'
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
                      label: '휴일명',
                      style: 'width:82px;height:23px;display:inline;'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    tagname: 'th',
                    "class": 'w2tb_th',
                    style: 'border:none;text-align: left;'
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
                    N: 'xf:input',
                    A: {
                      id: 'ip_text',
                      style: 'width:300px;height: 21px;',
                      placeholder: '휴일명을 입력해주세요.',
                      'ev:oneditenter': 'scwin.ip_text_oneditenter'
                    }
                  }]
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              id: '',
              style: 'width:75px;height:26px;padding-top:2px;',
              "class": 'btn_shbox'
            },
            E: [{
              T: 1,
              N: 'xf:trigger',
              A: {
                type: 'button',
                id: 'btn_search',
                style: '',
                'ev:onclick': 'scwin.btn_search_onclick',
                "class": 'btn_cm sch'
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
            id: '',
            style: 'height: 26px;margin-bottom: 8px;'
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              id: '',
              label: '목록',
              style: 'width:32px;height:23px;display:inline-block;',
              tagname: 'h3'
            }
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              id: '',
              style: 'display:block;float:right;'
            },
            E: [{
              T: 1,
              N: 'xf:trigger',
              A: {
                type: 'button',
                id: 'btn_excelDown',
                style: 'width: 80px;height: 23px;margin-right:5px;',
                'ev:onclick': 'scwin.btn_excelDown_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '액셀 다운로드'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm row_add',
                'ev:onclick': 'scwin.btn_addGrpCell_onclick',
                id: 'btn_addGrpCell',
                style: '',
                type: 'button'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '추가'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                type: 'button',
                id: 'btn_cancel',
                style: 'width: 42px;height: 26px;',
                'ev:onclick': 'scwin.btn_cancel_onclick',
                "class": 'btn_cm'
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
        }, {
          T: 1,
          N: 'w2:gridView',
          A: {
            checkAllType: 'false',
            id: 'grd_holiday',
            style: 'height:350px;',
            dataList: 'data:dlt_holiday',
            rowNumVisible: 'true',
            autoFit: 'lastColumn',
            rowNumWidth: '42',
            defaultCellHeight: '27',
            rowStatusVisible: 'true',
            rowStatusHeaderValue: '상태',
            'ev:oncellclick': 'scwin.grd_holiday_oncellclick',
            "class": 'wq_gvw',
            rowNumHeaderValue: '번호'
          },
          E: [{
            T: 1,
            N: 'w2:caption',
            A: {
              style: '',
              id: 'caption1',
              value: 'this is a grid caption.'
            }
          }, {
            T: 1,
            N: 'w2:header',
            A: {
              style: '',
              id: 'header1'
            },
            E: [{
              T: 1,
              N: 'w2:row',
              A: {
                style: '',
                id: 'row1'
              },
              E: [{
                T: 1,
                N: 'w2:column',
                A: {
                  width: '48',
                  inputType: 'checkbox',
                  style: '',
                  id: 'column23',
                  value: 'CHECK',
                  displayMode: 'label'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  width: '157',
                  inputType: 'text',
                  id: 'column22',
                  sortable: 'true',
                  value: '휴일날짜',
                  displayMode: 'label'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  width: '136',
                  inputType: 'text',
                  id: 'column21',
                  value: '휴일명',
                  displayMode: 'label'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  width: '89',
                  inputType: 'text',
                  minWidth: '20',
                  id: 'column20',
                  value: '휴일구분',
                  displayMode: 'label'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  width: '76',
                  inputType: 'text',
                  id: 'column19',
                  value: '휴일설명',
                  displayMode: 'label'
                }
              }]
            }]
          }, {
            T: 1,
            N: 'w2:gBody',
            A: {
              style: '',
              id: 'gBody1'
            },
            E: [{
              T: 1,
              N: 'w2:row',
              A: {
                style: '',
                id: 'row2'
              },
              E: [{
                T: 1,
                N: 'w2:column',
                A: {
                  width: '48',
                  inputType: 'checkbox',
                  style: '',
                  id: 'CHECK',
                  value: '',
                  displayMode: 'label'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  editModeEvent: 'onclick',
                  width: '157',
                  inputType: 'calendar',
                  id: 'REST_DATE',
                  displayMode: 'label',
                  "class": 'cal'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  width: '136',
                  inputType: 'text',
                  id: 'REST_NAME',
                  displayMode: 'label'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  ref: '',
                  chooseOption: '',
                  width: '89',
                  inputType: 'select',
                  id: 'REST_CODE',
                  allOption: '',
                  displayMode: 'label'
                },
                E: [{
                  T: 1,
                  N: 'w2:choices',
                  E: [{
                    T: 1,
                    N: 'w2:itemset',
                    A: {
                      nodeset: 'data:dlt_code'
                    },
                    E: [{
                      T: 1,
                      N: 'w2:label',
                      A: {
                        ref: 'REST_CODENAME'
                      }
                    }, {
                      T: 1,
                      N: 'w2:value',
                      A: {
                        ref: 'REST_CODE'
                      }
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  textAlign: 'left',
                  width: '76',
                  inputType: 'text',
                  id: 'NOTE',
                  displayMode: 'label'
                }
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            id: '',
            style: 'height:100%;margin-top:15px;'
          },
          E: [{
            T: 1,
            N: 'xf:trigger',
            A: {
              type: 'button',
              id: 'btn_save',
              style: 'background-color:#348FE2;color:white;display: block;min-width: 60px;height: 30px;float: right;',
              'ev:onclick': 'scwin.btn_save_onclick',
              "class": 'btn_cm pt'
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
      }]
    }]
  }]
});