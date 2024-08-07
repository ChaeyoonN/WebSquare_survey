/*amd /ui/SP/Common/Common_Code.xml 11246 f6925318e0b4496ca06b650925a0a9586555ba4a38da098cbc41eec15414e3b2 */
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
                  cdata: '\n<pre class="textNor" style="">\n<div class="etcbox">본 화면은 코드성 데이터(성별,직업 등)를 컴포넌트에 연동의 편의성을 위해 만든 com.data.setCommonCode Function의 활용 샘플이다.\n</div>\n<div class="etc_tit">동작 방식</div>\n1. 개발자가 DataList와 Submission의 생성과 컴포넌트의 itemSet을 설정하지않고 com.data.setCommonCode에 맵핑 정보를 넘겨준다.\n2. com.data.setCommonCode에서는 DataList와 Submission을 동적으로 생성하고 컴포넌트에 itemSet을 설정한다.\n<div class="expTit">호출 형식</div>\ncom.data.setCommonCode(Array, CallbackFunctionNm);\n예시 : \n	com.data.setCommonCode([\n		{"code":"04","compID":"sbx_commCodeReligion"},\n		{"code":"24","compID":"grd_commCodeSample:JOB_CD"}\n	], scwin.setCommonCodeCallback);\n<div class="expTit">첫번째 Paramter</div>\n객체 타입 : Array\n필수 여부 : Y\n설명 : JSON으로 code와 compID로 구성된 JSON 객체가 담긴 Array.\n조회할 code당 JSON을 정의하며 compID는 연동할 컴포넌트의 ID를 기입하며 다건의 컴포넌트는 ,를 이용하여 정의한다.\n예시 : {"code":"24","compID":"sbx_commCodeReligion,sbx_CommCodeEdu"}\nGridView컴포넌트의 경우 컴포넌트의 ID와 Body의 컬럼 ID가 정의되어야 하며 형식은 다음과 같다.\n정의 방식 : [컴포넌트ID]:[컬럼ID]\n예시 : {"code":"24","compID":"grd_commCodeSample:JOB_CD"}\n<div class="expTit">두번째 Paramter</div>  \n객체 타입 : String\n필수 여부 : N\n설명 : 통신 후 실행할 Function명.\n예시 ) scwin.setCommonCodeCallback\n</pre>\n						'
                }]
              }, {
                T: 1,
                N: 'test',
                E: [{
                  T: 4,
                  cdata: '\n<pre class="textNor">\n<div class="etc_tit">과정</div>\ncwin.onpageload Function에서 com.data.setCommonCode 호출.\n예시 )\n\nscwin.onpageload = function() {\n	//	공통 코드 세팅 옵션 정보 설정\n						// 공통 코드(00020)의 데이터를 Radio 컴포넌트(rad_commonCode)에 바인딩\n	var codeOptions = [ {"code":"00020","compID":"rad_commonCode"},\n						// 공통 코드(00001)의 데이터를 Selectbox 컴포넌트(sbx_commonCode), MultiSelect 컴포넌트(msb_commonCode)에 바인딩\n						{"code":"00001","compID":"sbx_commonCode, msb_commonCode"},\n						// 공통 코드(00002)의 데이터를 GridView 컴포넌트(grd_commCodeSample)의 POSITION_CD 컬럼에 바인딩\n						{"code":"00002","compID":"grd_commCodeSample:POSITION_CD"},\n						// 공통 코드(00024)의 데이터를 GridView와 여러 개의 컴포넌트에 바인딩\n						{"code":"00024","compID":"acb_commonCode, ccb_commonCode, cbx_commonCode, grd_commCodeSample:JOB_CD"} ];\n	com.data.setCommonCode(codeOptions);\n};\n\n/**\n * 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트\n * 공통 코드 로딩 후에 조회가 필요할 경우에 scwin.ondataload에서 조회를 수행하면 된다.\n */\nscwin.ondataload = function() {\n	com.sbm.execute(sbm_selectCodeList);\n};\n\n</div>\n<div class="etc_tit">결과</div>\n- 상단 검색 영역의 공통코드의 항목이 표현된다.\n- [조회] 버튼을 클릭하면 GridView의 selectbox에 공통 코드 항목이 표현된다.\n</pre>\n						'
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
                  id: 'key1',
                  name: 'name1',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'key2',
                  name: 'name2',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'key3',
                  name: 'name3',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'key4',
                  name: 'name4',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'key5',
                  name: 'name5',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'key6',
                  name: 'name6',
                  dataType: 'text'
                }
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataList',
            A: {
              id: 'dlt_mainCodeList',
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
                  id: 'EMP_NM',
                  name: '사용자',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'POSITION_CD',
                  name: '직위',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'JOB_CD',
                  name: '직책',
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
            id: 'sbm_selectCodeList',
            ref: 'data:json,dma_search',
            target: 'data:json,{"id":"dlt_mainCodeList","key":"dlt_memberBasic"}',
            action: '/member/searchMemberBasic',
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
            'ev:submitdone': '',
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
          type: 'text/javascript',
          lazy: 'false'
        },
        E: [{
          T: 4,
          cdata: function cdata(scopeObj) {
            with (scopeObj) {
              scwin.onpageload = function () {
                var codeOptions = [{
                  'code': '00020',
                  'compID': 'rad_commonCode'
                }, {
                  'code': '00001',
                  'compID': 'sbx_commonCode, msb_commonCode'
                }, {
                  'code': '00002',
                  'compID': 'grd_commCodeSample:POSITION_CD'
                }, {
                  'code': '00024',
                  'compID': 'acb_commonCode, ccb_commonCode, cbx_commonCode, grd_commCodeSample:JOB_CD'
                }];
                com.data.setCommonCode($p, codeOptions);
              };
              scwin.ondataload = function () {
                com.sbm.execute($p, sbm_selectCodeList);
              };
            }
          }
        }]
      }, {
        T: 1,
        N: 'style',
        A: {
          type: 'text/css'
        },
        E: [{
          T: 4,
          cdata: '.shbox .w2tb.w2tb_adaptive_layout .w2tb_td:before{width:110px}'
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
                "class": 'w2tb tb ',
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
                    style: 'width:150px;',
                    tagname: 'col'
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    style: '',
                    tagname: 'col'
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    style: 'width:150px;',
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
                      label: 'SelectBox',
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
                      id: 'sbx_commonCode',
                      ref: 'data:dma_search.key1',
                      style: 'width:180px;',
                      submenuSize: 'auto'
                    },
                    E: [{
                      T: 1,
                      N: 'xf:choices'
                    }]
                  }]
                }, {
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
                      label: 'AutoComplete',
                      style: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'w2tb_td',
                    id: '',
                    style: '',
                    tagname: 'td'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:autoComplete',
                    A: {
                      allOption: '',
                      chooseOption: '',
                      editType: 'select',
                      id: 'acb_commonCode',
                      ref: 'data:dma_search.key2',
                      search: 'start',
                      style: 'width:180px;',
                      submenuSize: 'auto',
                      useKeywordHighlight: 'false'
                    },
                    E: [{
                      T: 1,
                      N: 'w2:choices'
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
                      label: 'Radio',
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
                      appearance: 'full',
                      cols: '',
                      disabled: '',
                      id: 'rad_commonCode',
                      ref: 'data:dma_search.key3',
                      renderType: 'radiogroup',
                      rows: '',
                      selectedIndex: '1',
                      style: 'width : 100%;height : 100%;'
                    },
                    E: [{
                      T: 1,
                      N: 'xf:choices'
                    }]
                  }]
                }, {
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
                      label: 'CheckCombobox',
                      style: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'w2tb_td',
                    id: '',
                    style: '',
                    tagname: 'td'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:checkcombobox',
                    A: {
                      submenuSize: 'auto',
                      allOption: 'false',
                      disabled: 'false',
                      id: 'ccb_commonCode',
                      direction: 'auto',
                      displayAllOptionLabel: 'false',
                      chooseOption: 'false',
                      displayMode: 'label',
                      appearance: 'minimal',
                      style: 'width:180px;',
                      ref: 'data:dma_search.key4'
                    }
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'tr',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    tagname: 'th',
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
                      "class": '',
                      id: '',
                      label: 'MultiSelect',
                      style: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    tagname: 'td',
                    "class": 'w2tb_td'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes'
                  }, {
                    T: 1,
                    N: 'xf:select',
                    A: {
                      appearance: 'minimal',
                      style: 'width:180px;height:100px;',
                      id: 'msb_commonCode',
                      ref: 'data:dma_search.key5'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    tagname: 'th',
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
                      "class": '',
                      id: '',
                      label: 'Checbox',
                      style: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    tagname: 'td',
                    id: '',
                    "class": 'w2tb_td'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes'
                  }, {
                    T: 1,
                    N: 'xf:select',
                    A: {
                      appearance: 'full',
                      cols: '',
                      disabled: '',
                      id: 'cbx_commonCode',
                      ref: 'data:dma_search.key6',
                      renderType: 'checkboxgroup',
                      rows: '',
                      selectedindex: '1',
                      style: 'width : 100%;height : 100%;'
                    },
                    E: [{
                      T: 1,
                      N: 'xf:choices'
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
              dataList: 'data:dlt_mainCodeList',
              editModeEvent: 'onclick',
              'ev:oncellclick': '',
              fixedColumnWithHidden: 'true',
              id: 'grd_commCodeSample',
              keyMoveEditMode: 'true',
              rowNumVisible: 'ss',
              rowStatusVisible: '',
              scrollByColumn: 'false',
              style: 'height:150px;',
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
                    id: 'column1',
                    inputType: 'text',
                    style: '',
                    value: '사용자',
                    width: '200'
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
                    value: '직책',
                    width: '150'
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
                    value: '직무',
                    width: '150'
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
                    id: 'EMP_NM',
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
                    id: 'POSITION_CD',
                    inputType: 'select',
                    style: '',
                    viewType: 'icon',
                    width: '150'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:choices'
                  }]
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'JOB_CD',
                    inputType: 'select',
                    style: '',
                    textAlign: 'left',
                    viewType: 'icon',
                    width: '150'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:choices'
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