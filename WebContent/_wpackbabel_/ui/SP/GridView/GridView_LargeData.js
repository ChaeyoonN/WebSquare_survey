/*amd /ui/SP/GridView/GridView_LargeData.xml 20508 49e6c07dd82fd6e4186a004824404e46ecdfacbd26100f2bb2d731d364117248 */
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
                  cdata: '\n<pre class="textNor" style="">\n<div class="etcbox">데이터의 포맷에 따른 통신 시간과 그리드뷰의 데이터 랜더링에 관한 성능을 비교할 수 있는 기능을 제공한다.\n성능은 [Array Type] > [Default Type] 순이다.\n</div>\n<div class="etc_tit">1. Default Type</div>\n  - 기본 설정으로 ModelAndView객체에서 addObject Method로 담긴 List와 Map객체를 Adapter모듈에서 JSON String으로 변환시킨다.\n  ex)\n	Map&lt;String, List&lt;String, Map&lt;String, String&gt;&gt;&gt;\n	{"dlt_zipCodeStreet":[{"SEQ_NO":"1","SIGUNGUCODE":"0001"},{"SEQ_NO":"2","SIGUNGUCODE":"0002"}]}	\n<div class="etc_tit">2. Array Type</div>\n  - Mybatis의 ResultHandler를 사용하여  KEY와 DATA로 분리한 후, 각각을 Array에 담고 Map을 반환받는다. \n  - 이후 [Default Type]과 동일한 변환 과정을 거친다.\n  - [Default Type]에 비해 데이터 크기가 50%이상 감소된다. (1000건 : Default Type= 4.2MB/ Array Type= 1.9MB) \n  ex)\n	Map&lt;String, Map&lt;String, ArrayList&gt;&gt;\n	{"dlt_zipCodeStreet":{"columnInfo":["SEQ_NO","SIGUNGUCODE"],"data":["1","0001","2","0002"]}}\n<div class="etc_tit">3. 검색조건별 평균 처리시간</div>\n  - 10,000 건 \n	<font color=red><B>[Default Type] 통신</B></font> : 2,383ms :: 화면 : 126ms	   <font color=red><B>[Array Type] 통신</B></font> : 1,212ms :: 화면 : 207ms\n  - 50,000 건\n	<font color=red><B>[Default Type] 통신</B></font> : 7,638ms :: 화면 : 770ms	   <font color=red><B>[Array Type] 통신</B></font> : 3,939ms :: 화면 : 85ms\n  - 100,000 건\n	<font color=red><B>[Default Type] 통신</B></font> : 15,900ms :: 화면 : 1,080ms	<font color=red><B>[Array Type] 통신</B></font> : 10,858ms :: 화면 : 1,132ms\n  - 200,000 건\n	<font color=red><B>[Default Type] 통신</B></font> : 33,411ms :: 화면 : 2,659ms	<font color=red><B>[Array Type] 통신</B></font> : 25,261ms :: 화면 : 292ms\n  - 300,000 건\n	<font color=red><B>[Default Type] 통신</B></font> : 45,612ms :: 화면 : 5,095ms	<font color=red><B>[Array Type] 통신</B></font> : 30,382ms :: 화면 : 1,038ms\n  - 전체(353,545건)\n	<font color=red><B>[Default Type] 통신</B></font> : 128,474ms :: 화면 : 7,948ms   <font color=red><B>[Array Type] 통신</B></font> : 39,050ms :: 화면 : 1,445ms\n</pre>\n						'
                }]
              }, {
                T: 1,
                N: 'test',
                E: [{
                  T: 4,
                  cdata: '\n<pre class="textNor">\n<div class="etc_tit">과정</div>\n  1. 왼쪽에 위치한 [조회 건수]를 선택한다.\n  2. [Default Type]버튼 또는 [Array Type]버튼을 클릭하여 소요 시간을 확인한다.\n<div class="etc_tit">결과</div>\n  조회건수 , 서버 통신 시간(millisecond) , 데이터를 그리드에 출력하는 시간(millisecond)\n  ex) 조회 건수 : 100,000 :: 통신 : 5,096ms :: 화면 : 197ms\n</pre>\n						'
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataList',
            A: {
              id: 'dlt_zipCodeStreet',
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
                  id: 'SEQ_NO',
                  name: 'SEQ_NO',
                  dataType: 'text'
                }
              }, {
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
                  id: 'SEQ_NO',
                  name: 'name1',
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
            id: 'sbm_default',
            ref: 'data:json,dma_search',
            target: '',
            action: '/sample/selectLargeDataDefault',
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
            'ev:submitdone': 'scwin.sbm_default_submitdone',
            'ev:submiterror': ''
          }
        }, {
          T: 1,
          N: 'xf:submission',
          A: {
            id: 'sbm_array',
            ref: 'data:json,dma_search',
            target: '',
            action: '/sample/selectLargeDataArray',
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
            'ev:submitdone': 'scwin.sbm_array_submitdone',
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
              scwin.onpageload = function () {};
              scwin.btn_searchDefault_onclick = function (e) {
                dlt_zipCodeStreet.removeAll();
                com.sbm.execute($p, sbm_default);
              };
              scwin.btn_searchLargeHander1_onclick = function (e) {
                dlt_zipCodeStreet.removeAll();
                com.sbm.execute($p, sbm_array);
              };
              scwin.btn_removeAll_onclick = function (e) {
                dlt_zipCodeStreet.removeAll();
              };
              scwin.sbm_default_submitdone = function (e) {
                var sTime = new Date();
                dlt_zipCodeStreet.setJSON(e.responseJSON.dlt_zipCodeStreet);
                var eTime = new Date();
                var txtObj = {
                  row: dlt_zipCodeStreet.getRowCount(),
                  serverTime: this.endTime - this.startTime,
                  clientTime: eTime - sTime
                };
                txa_resultDefault.setValue(txa_resultDefault.getValue() + scwin.makeResultText(txtObj));
              };
              scwin.sbm_array_submitdone = function (e) {
                var sTime = new Date();
                dlt_zipCodeStreet.setArray(e.responseJSON.dlt_zipCodeStreet);
                var eTime = new Date();
                var txtObj = {
                  row: dlt_zipCodeStreet.getRowCount(),
                  serverTime: this.endTime - this.startTime,
                  clientTime: eTime - sTime
                };
                txa_resultArray.setValue(txa_resultArray.getValue() + scwin.makeResultText(txtObj));
              };
              scwin.makeResultText = function (optObj) {
                var rsStr = '';
                rsStr += '조회 건수 : ';
                rsStr += WebSquare.util.setNumber(optObj.row);
                rsStr += '건 :: 통신 : ';
                rsStr += WebSquare.util.setNumber(optObj.serverTime);
                rsStr += 'ms';
                rsStr += ' :: 화면 : ';
                rsStr += WebSquare.util.setNumber(optObj.clientTime);
                rsStr += 'ms\n';
                return rsStr;
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
                id: '',
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
                      label: '조회건수',
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
                      "class": '',
                      direction: 'auto',
                      disabled: 'false',
                      disabledClass: 'w2selectbox_disabled',
                      id: 'sbx_row',
                      ref: 'data:dma_search.SEQ_NO',
                      style: 'width:100px;',
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
                            cdata: '10,000'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '10000'
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
                            cdata: '50,000'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '50000'
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
                            cdata: '100,000'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '100000'
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
                            cdata: '200,000'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '200000'
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
                            cdata: '300,000'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '300000'
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
                            cdata: '전체'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value',
                          E: [{
                            T: 4,
                            cdata: '500000'
                          }]
                        }]
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:trigger',
                    A: {
                      "class": 'btn_cm ',
                      id: 'btn_removeAll',
                      style: '',
                      type: 'button',
                      'ev:onclick': 'scwin.btn_removeAll_onclick'
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '데이터삭제'
                      }]
                    }]
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
            }
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'lybox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              adaptiveThreshold: '',
              "class": 'ly_column col_5',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'dfbox',
                id: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'fr',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'xf:trigger',
                  A: {
                    "class": 'btn_cm ',
                    id: 'btn_searchDefault',
                    style: '',
                    type: 'button',
                    'ev:onclick': 'scwin.btn_searchDefault_onclick'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: 'Default Type'
                    }]
                  }]
                }]
              }]
            }, {
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
                      style: 'width:100.00%;',
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
                          text: 'col'
                        }]
                      }]
                    }, {
                      T: 1,
                      N: 'xf:group',
                      A: {
                        id: '',
                        "class": 'tal'
                      },
                      E: [{
                        T: 1,
                        N: 'w2:span',
                        A: {
                          "class": 'th_pt',
                          id: '',
                          label: 'Submission ID ',
                          style: ''
                        }
                      }, {
                        T: 1,
                        N: 'w2:span',
                        A: {
                          "class": 'th_txt',
                          id: '',
                          label: 'sbm_default',
                          style: ''
                        }
                      }]
                    }, {
                      T: 1,
                      N: 'xf:group',
                      A: {
                        id: '',
                        "class": 'tal'
                      },
                      E: [{
                        T: 1,
                        N: 'w2:span',
                        A: {
                          "class": 'th_pt',
                          id: '',
                          label: 'URL ',
                          style: ''
                        }
                      }, {
                        T: 1,
                        N: 'w2:span',
                        A: {
                          "class": 'th_txt',
                          id: '',
                          label: '/sample/selectLargeDataDefault',
                          style: ''
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
                      "class": 'w2tb_td',
                      style: '',
                      tagname: 'td'
                    },
                    E: [{
                      T: 1,
                      N: 'xf:textarea',
                      A: {
                        "class": '',
                        id: 'txa_resultDefault',
                        style: 'width:100%;height: 82px;'
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
              "class": 'ly_column col_5',
              id: '',
              style: ''
            },
            E: [{
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
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'xf:trigger',
                  A: {
                    "class": 'btn_cm ',
                    id: 'btn_searchLargeHander1',
                    style: '',
                    type: 'button',
                    'ev:onclick': 'scwin.btn_searchLargeHander1_onclick'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: 'Array Type'
                    }]
                  }]
                }]
              }]
            }, {
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
                      style: 'width:100.00%;',
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
                          text: 'col'
                        }]
                      }]
                    }, {
                      T: 1,
                      N: 'xf:group',
                      A: {
                        id: '',
                        "class": 'tal'
                      },
                      E: [{
                        T: 1,
                        N: 'w2:span',
                        A: {
                          "class": 'th_pt',
                          id: '',
                          label: 'Submission ID ',
                          style: ''
                        }
                      }, {
                        T: 1,
                        N: 'w2:span',
                        A: {
                          "class": 'th_txt',
                          id: '',
                          label: 'sbm_default',
                          style: ''
                        }
                      }]
                    }, {
                      T: 1,
                      N: 'xf:group',
                      A: {
                        id: '',
                        "class": 'tal'
                      },
                      E: [{
                        T: 1,
                        N: 'w2:span',
                        A: {
                          "class": 'th_pt',
                          id: '',
                          label: 'URL ',
                          style: ''
                        }
                      }, {
                        T: 1,
                        N: 'w2:span',
                        A: {
                          "class": 'th_txt',
                          id: '',
                          label: '/sample/selectLargeDataDefault',
                          style: ''
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
                      "class": 'w2tb_td',
                      style: '',
                      tagname: 'td'
                    },
                    E: [{
                      T: 1,
                      N: 'xf:textarea',
                      A: {
                        "class": '',
                        id: 'txa_resultArray',
                        style: 'width:100%;height: 82px;'
                      }
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
            adaptiveThreshold: '',
            "class": 'gvwbox wq_flx',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:gridView',
            A: {
              "class": 'wq_gvw',
              dataList: 'data:dlt_zipCodeStreet',
              fixedColumnWithHidden: 'true',
              id: '',
              ignoreCellClick: 'false',
              ignoreToggleOnDisabled: 'false',
              rowNumHeaderValue: '',
              rowNumVisible: '',
              rowNumWidth: '',
              scrollByColumn: 'false',
              scrollByColumnAdaptive: 'false',
              style: 'height:243px;',
              summaryAuto: 'false',
              useShiftKey: 'true',
              defaultCellHeight: '26',
              focusMode: 'row'
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
                    value: 'SEQ_NO',
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
                    value: 'SIGUNGUCODE',
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
                    value: 'STREETNUM',
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
                    value: 'STREET',
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
                    value: 'STREETENG',
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
                    value: 'DONGSEQ',
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
                    value: 'SIDO',
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
                    value: 'SIGUNGU',
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
                    value: 'DONGTYPE',
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
                    value: 'DONGCODE',
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
                    value: 'DONG',
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
                    value: 'PARENTSTREETNUM',
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
                    value: 'PARENTSTREET',
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
                    value: 'ISUSE',
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
                    value: 'CHANGEREASON',
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
                    value: 'CHANGEHISTORY',
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
                    value: 'SIDOENG',
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
                    value: 'SIGUNGUENG',
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
                    value: 'DONGENG',
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
                    value: 'OPENDATE',
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
                    id: 'SEQ_NO',
                    inputType: 'text',
                    style: '',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'SIGUNGUCODE',
                    inputType: 'text',
                    style: '',
                    width: '70'
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
                    width: '70'
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
                    width: '70'
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
                    width: '70'
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
                    width: '70'
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
                    width: '70'
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
                    width: '70'
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
                    width: '70'
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
                    width: '70'
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
                    width: '70'
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
                    width: '70'
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
                    width: '70'
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
                    width: '70'
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
                    width: '70'
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
                    width: '70'
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
                    width: '70'
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
                    width: '70'
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
                    width: '70'
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