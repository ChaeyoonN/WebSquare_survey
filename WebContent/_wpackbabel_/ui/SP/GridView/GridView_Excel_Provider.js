/*amd /ui/SP/GridView/GridView_Excel_Provider.xml 17630 b7ca5dea51ef54cfc8f71024f2dbbe91d7ea7923e984633b45f2578b55475395 */
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
                  name: '',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'test',
                  name: '',
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
                  cdata: '\n<pre class="textNor">\n<div class="etcbox">그리드뷰의 provider 기능을 이용하여 엑셀 다운로드 하는 기능을 제공한다.\n</div>\n<div class="etc_tit">1. provider 사용목적</div>\n  - 그리드에 출력된 데이터양이 많아 Client에서 데이터 처리하는데 많은 리소스를 사용 할 경우,\n	 동일한 작업을 서버에서 할 수 있도록 기능을 제공한다. \n<div class="etc_tit">2. provider 처리방법</div>\n  - dataProvider가 등록 되면 WebSquare에서 등록된 dataProvider의 getData method를 호출해 준다.\n  - 개발자는 getData를 원하는 모양으로 구현 해서 String[] 을 return 하면 옵션에 정의된\n	 형태로 excel이 다운로드 된다. \n<div class="etc_tit">3. 전체 데이터 건수 및 권장 테스트 조건</div>		\n  - 전체 컬럼 수: 20개\n  - 전체 Row 수: 353,545 건\n  - 전체 다운로드 시간 : 2분\n  - 권장 테스트 조건 : 전체 다운로드를 할 경우 시간이 많이 걸리므로 <font color=red><B>\'세종\'</B></font> 으로 검색하여 다운로드를 수행한다.   \n</pre>\n						'
                }]
              }, {
                T: 1,
                N: 'test',
                E: [{
                  T: 4,
                  cdata: '\n<pre class="textNor">\n<div class="etc_tit">1. 과정</div>\n- 화면을 조회한다.\n- [Excel Provider(전체)] 버튼을 클릭하여 전체 데이터를 엑셀 다운로드 한다.\n</div>\n<div class="etc_tit">2. 결과</div>\n- 다운로드 받은 엑셀 파일을 확인하여 전체 데이터가 로드됨을 확인한다.\n</pre>\n						'
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataList',
            A: {
              id: 'dlt_zipCode',
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
                  id: 'SIGUNGUCODE',
                  name: 'SIGUNGUCODE',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'STREETNUM',
                  name: 'STREETNUM',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'STREET',
                  name: 'STREET',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'STREETENG',
                  name: 'STREETENG',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'DONGSEQ',
                  name: 'DONGSEQ',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SIDO',
                  name: 'SIDO',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SIGUNGU',
                  name: 'SIGUNGU',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'DONGTYPE',
                  name: 'DONGTYPE',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'DONGCODE',
                  name: 'DONGCODE',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'DONG',
                  name: 'DONG',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'PARENTSTREETNUM',
                  name: 'PARENTSTREETNUM',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'PARENTSTREET',
                  name: 'PARENTSTREET',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'ISUSE',
                  name: 'ISUSE',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'CHANGEREASON',
                  name: 'CHANGEREASON',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'CHANGEHISTORY',
                  name: 'CHANGEHISTORY',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SIDOENG',
                  name: 'SIDOENG',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SIGUNGUENG',
                  name: 'SIGUNGUENG',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'DONGENG',
                  name: 'DONGENG',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'OPENDATE',
                  name: 'OPENDATE',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'CLOSEDATE',
                  name: 'CLOSEDATE',
                  dataType: 'text'
                }
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
                  id: 'STREET',
                  name: 'name1',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'START_IDX',
                  name: 'name2',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'END_IDX',
                  name: 'name3',
                  dataType: 'text'
                }
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataMap',
            A: {
              baseNode: 'map',
              id: 'dma_search_excel',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:keyInfo',
              E: [{
                T: 1,
                N: 'w2:key',
                A: {
                  dataType: 'text',
                  id: 'STREET',
                  name: 'name1'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'START_IDX',
                  name: 'name2',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'END_IDX',
                  name: 'name3',
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
            id: 'sbm_search',
            ref: 'data:json,dma_search',
            target: 'data:json,["dlt_zipCode","dma_search_excel"]',
            action: '/sample/selectZipCodeStreetListByStreet',
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
            'ev:submitdone': 'scwin.sbm_search_submitdone',
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
                dma_search.set('START_IDX', '1');
                dma_search.set('END_IDX', '100');
                com.sbm.execute($p, sbm_search);
              };
              scwin.sbm_search_submitdone = function (e) {
                grd_pagingGrid.setStartRowNumber(parseInt(dma_search_excel.get('START_IDX')) - 1);
                var idx = dma_search_excel.get('START_IDX');
                if (idx == '1') {
                  var totalCnt = e.responseJSON.dlt_zipCode_count;
                  var pageSize = Math.ceil(totalCnt / 100);
                  if (com.num.parseInt($p, e.responseJSON.dlt_zipCode_count) > 0) {
                    pgl_list.show('');
                  } else {
                    pgl_list.hide();
                  }
                  pgl_list.setCount(pageSize);
                }
              };
              scwin.btn_removeData_onclick = function () {
                dlt_zipCode.removeAll();
              };
              scwin.btn_excelProvider_onclick = function () {
                var option = {};
                var info = {};
                option.fileName = 'data.xlsx';
                option.useProvider = 'true';
                option.showProcess = 'true';
                option.providerRequestXml = scwin.setProviderData('zipCodeService', 'selectZipCodeStreetByStreet', dma_search_excel);
                com.data.downloadGridViewExcel($p, grd_pagingGrid, option, info);
              };
              scwin.setProviderData = function (service, method, paramMap) {
                var serviceXml = '<service>' + service + '</service>';
                var methodXml = '<method>' + method + '</method>';
                var paramXml = '<param>' + JSON.stringify(paramMap.getJSON()) + '</param>';
                return '<data>' + serviceXml + methodXml + paramXml + '</data>';
              };
              scwin.pgl_list_onchange = function (current, before) {
                dma_search.set('START_IDX', (current - 1) * 100 + 1 + '');
                dma_search.set('END_IDX', current * 100 + '');
                com.sbm.execute($p, sbm_search);
              };
              scwin.btn_excelSplitProvider_onclick = function () {
                option = {};
                var info = {};
                option.fileName = 'data.xlsx';
                option.useSplitProvider = 'true';
                option.showProcess = 'true';
                option.providerRequestXml = scwin.setProviderData('zipCodeService', 'selectZipCodeStreetByStreet', dma_search_excel);
                com.data.downloadGridViewExcel($p, grd_pagingGrid, option, info);
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
                    style: 'width:100px;',
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
                      label: '거리명',
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
                      "class": '',
                      id: '',
                      placeholder: '세종',
                      style: 'width:200px;',
                      ref: 'data:dma_search.STREET',
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
            style: '',
            id: '',
            "class": 'dfbox'
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              style: '',
              id: '',
              "class": 'fr'
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                style: '',
                id: 'spn_currCnt',
                label: '0',
                "class": 'sum',
                displayFormat: '#,###',
                dataType: 'number'
              }
            }, {
              T: 1,
              N: 'w2:textbox',
              A: {
                style: 'margin-right:0px;',
                id: '',
                label: '/',
                "class": ''
              }
            }, {
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'sum',
                id: 'spn_totalCnt',
                label: '0',
                style: '',
                dataType: 'number',
                displayFormat: '#,###'
              }
            }, {
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": '',
                id: '',
                label: '건',
                style: ''
              }
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                type: 'button',
                style: '',
                id: 'btn_excelSplitProvider',
                "class": 'btn_cm ',
                toolTip: '전체 데이타를 Excel로 다운로드 한다.',
                'ev:onclick': 'scwin.btn_excelSplitProvider_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: 'Excel Split Provider (최대10000건)'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm ',
                id: 'btn_excelProvider',
                style: '',
                type: 'button',
                toolTip: '전체 데이타를 Excel로 다운로드 한다.',
                'ev:onclick': 'scwin.btn_excelProvider_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: 'Excel Provider (최대10000건)'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm ',
                id: 'btn_removeData',
                style: '',
                type: 'button',
                toolTip: '현재 그리드에 업로드 되어있는 데이터를 삭제한다.',
                'ev:onclick': 'scwin.btn_removeData_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '지우기'
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
              "class": 'wq_gvw',
              dataList: 'data:dlt_zipCode',
              'ev:onafteredit': '',
              'ev:onrowindexchange': '',
              fixedColumnWithHidden: 'true',
              id: 'grd_pagingGrid',
              ignoreCellClick: 'false',
              rowNumHeaderValue: '순서',
              rowNumVisible: 'true',
              rowNumWidth: '50',
              rowStatusHeaderValue: '',
              rowStatusVisible: 'false',
              sortEvent: 'ondblclick',
              sortable: 'true',
              style: 'height:296px;',
              useShiftKey: 'true',
              autoFitMinWidth: '1280',
              defaultCellHeight: '26',
              keepDefaultColumnWidth: 'true',
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
                    id: 'column39',
                    inputType: 'text',
                    style: '',
                    value: 'SIGUNGUCODE',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column37',
                    inputType: 'text',
                    style: '',
                    value: 'STREETNUM',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column35',
                    inputType: 'text',
                    style: '',
                    value: 'STREET',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column33',
                    inputType: 'text',
                    style: '',
                    value: 'STREETENG',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column31',
                    inputType: 'text',
                    style: '',
                    value: 'DONGSEQ',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column29',
                    inputType: 'text',
                    style: '',
                    value: 'SIDO',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column27',
                    inputType: 'text',
                    style: '',
                    value: 'SIGUNGU',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column25',
                    inputType: 'text',
                    style: '',
                    value: 'DONGTYPE',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column23',
                    inputType: 'text',
                    style: '',
                    value: 'DONGCODE',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column21',
                    inputType: 'text',
                    style: '',
                    value: 'DONG',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column19',
                    inputType: 'text',
                    style: '',
                    value: 'PARENTSTREETNUM',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column17',
                    inputType: 'text',
                    style: '',
                    value: 'PARENTSTREET',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column15',
                    inputType: 'text',
                    style: '',
                    value: 'ISUSE',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column13',
                    inputType: 'text',
                    style: '',
                    value: 'CHANGEREASON',
                    width: '120'
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
                    value: 'CHANGEHISTORY',
                    width: '120'
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
                    value: 'SIDOENG',
                    width: '120'
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
                    value: 'SIGUNGUENG',
                    width: '120'
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
                    value: 'DONGENG',
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
                    value: 'OPENDATE',
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
                    value: 'CLOSEDATE',
                    width: '120'
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
                    id: 'SIGUNGUCODE',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'STREETNUM',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'STREET',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'STREETENG',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'DONGSEQ',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'SIDO',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'SIGUNGU',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'DONGTYPE',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'DONGCODE',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'DONG',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'PARENTSTREETNUM',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'PARENTSTREET',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'ISUSE',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'CHANGEREASON',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'CHANGEHISTORY',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'SIDOENG',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'SIGUNGUENG',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'DONGENG',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'OPENDATE',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'CLOSEDATE',
                    inputType: 'text',
                    style: '',
                    width: '120'
                  }
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'w2:pageList',
            A: {
              "class": 'wq_pglist',
              displayButtonType: 'display',
              displayFormat: '#',
              id: 'pgl_list',
              pageSize: '10',
              pagingType: '0',
              style: 'display:none;',
              'ev:onchange': 'scwin.pgl_list_onchange',
              buttonShowType: '3'
            }
          }]
        }]
      }]
    }]
  }]
});