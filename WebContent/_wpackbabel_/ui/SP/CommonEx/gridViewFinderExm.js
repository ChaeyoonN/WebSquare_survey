/*amd /ui/SP/CommonEx/gridViewFinderExm.xml 12527 d4275ef57c23e9485d9d6f90dfadfd8df299c56e1f1624183e1a6756597854ef */
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
                  cdata: '\n<pre class="textNor">\ngridViewFinder.js 라이브러리는 GridView의 데이터 검색을 Browser의 검색 기능처럼 GridView 데이터를 검색하는 기능을 제공한다.\ngridViewFinder.js 라이브러리는 jQuery를 기반으로 개발되어 있으며, 프로젝트 요건에 따라서 꼭 필요한 경우만 사용하시기 바랍니다.\n</pre>\n						'
                }]
              }, {
                T: 1,
                N: 'test',
                E: [{
                  T: 4,
                  cdata: '\n<pre class="textNor">\n1. GridView Finder 사용 방법\n  1) GridView에 로딩될 데이터를 검색한다.\n  2) GridView의 셀을 클릭한다.\n  3) GridView 데이터 검색 단축키 (Ctrl + Shift + f)를 누른다.\n  4) 데이터 검색 창에서 검색 키워드를 입력하고 엔터키를 누른다.\n  5) 검색을 마치고 검색 창을 닫으려면 ESC 키를 누른다.\n</pre>\n						'
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataList',
            A: {
              id: 'dlt_commonGrp',
              baseNode: 'list',
              saveRemovedData: 'true',
              repeatNode: 'map',
              'ev:onbeforerowpositionchange': 'scwin.dlt_commonGrp_onbeforerowpositionchange'
            },
            E: [{
              T: 1,
              N: 'w2:columnInfo',
              E: [{
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'chk',
                  name: '선택',
                  dataType: 'text',
                  ignoreStatus: 'true'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'GRP_CD',
                  name: '그룹코드',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'GRP_NM',
                  name: '그룹명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SORT_ORDER',
                  name: '코드순서',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'IS_USE',
                  name: '사용여부',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'NOTE',
                  name: '비고',
                  dataType: 'text'
                }
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataList',
            A: {
              id: 'dlt_commonCode',
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
                  id: 'chk',
                  name: '선택',
                  dataType: 'text',
                  ignoreStatus: 'true'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'GRP_CD',
                  name: '그룹코드',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'COM_CD',
                  name: '공통코드',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'CODE_NM',
                  name: '코드명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SORT_ORDER',
                  name: '코드순서',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'IS_USE',
                  name: '사용여부',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'ATTR_VALUE1',
                  name: '속성값1',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'ATTR_VALUE2',
                  name: '속성값2',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'ATTR_VALUE3',
                  name: '속성값3',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'NOTE',
                  name: '비고',
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
            id: 'sbm_commonCode',
            ref: '',
            target: 'data:json,dlt_commonCode',
            action: '/common/selectCommonCodeList',
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
            'ev:submitdone': 'scwin.sbm_commonCode_submitdone',
            'ev:submiterror': '',
            abortTrigger: ''
          }
        }, {
          T: 1,
          N: 'xf:submission',
          A: {
            id: 'sbm_commonGroup',
            ref: 'data:json,dma_search',
            target: 'data:json,dlt_commonGrp',
            action: '/common/selectCommonGroup',
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
            'ev:submitdone': 'scwin.sbm_commonGroup_submitdone',
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
          src: '/ui/SP/CommonEx/gridViewFinder.js'
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
                ecm.gridFinderUtil.create();
              };
              scwin.ondataload = function () {
                com.sbm.execute($p, sbm_commonGroup);
              };
              scwin.dlt_commonGrp_onbeforerowpositionchange = function (info) {
                var grpCd = dlt_commonGrp.getCellData(info.newRowIndex, 'GRP_CD');
                if (grpCd) {
                  var param = {
                    dma_commonGrp: {
                      GRP_CD: grpCd
                    }
                  };
                  com.sbm.execute($p, sbm_commonCode, param);
                }
              };
              scwin.btn_search_onclick = function (e) {
                var data = {};
                var options = {
                  id: 'finder',
                  popupName: '파인더',
                  modal: true,
                  width: 800,
                  height: 824
                };
                com.win.openPopup($p, '/ui/SP/CommonEx/gridViewFinderExm_popup.xml', options, data);
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
            "class": 'dfbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              "class": '',
              id: '',
              label: '',
              style: '',
              tagname: 'h3'
            }
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'fr',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'sum',
                id: 'spn_excelUploadCnt',
                label: '',
                style: ''
              }
            }, {
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": '',
                id: '',
                label: '',
                style: ''
              }
            }, {
              T: 1,
              N: 'xf:select1',
              A: {
                appearance: 'full',
                "class": 'mr10',
                cols: '',
                disabled: '',
                id: 'rad_excelType',
                ref: '',
                renderType: 'radiogroup',
                rows: '',
                selectedIndex: '0',
                style: '',
                'ev:onviewchange': 'scwin.rad_excelType_onviewchange'
              }
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm  ',
                id: 'btn_uploadData',
                style: '',
                type: 'button',
                toolTip: '',
                'ev:onclick': 'scwin.btn_search_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '팝업'
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
              adaptive: '',
              autoFit: 'allColumn',
              captionTitle: '',
              checkReadOnlyOnCut: '',
              "class": 'wq_gvw',
              dataList: 'data:dlt_commonGrp',
              filterFocusMode: '',
              id: 'grd_commonGrp',
              keepDefaultColumnWidth: 'true',
              rowStatusHeaderValue: '상태',
              rowStatusVisible: 'true',
              rowStatusWidth: '',
              scrollByColumn: 'false',
              scrollByColumnAdaptive: 'false',
              style: 'height:296px;',
              focusMode: 'both',
              autoFitMinWidth: '800'
            },
            E: [{
              T: 1,
              N: 'w2:caption',
              A: {
                id: 'caption1',
                style: '',
                value: 'this is a grid caption.'
              }
            }, {
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
                    checkboxLabel: '선택',
                    displayMode: 'label',
                    fixColumnWidth: 'true',
                    id: 'chk',
                    inputType: 'checkbox',
                    removeBorderStyle: 'false',
                    style: 'height:26px;',
                    value: '',
                    width: '50'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    "class": 'req',
                    displayMode: 'label',
                    id: 'column18',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:26px;',
                    value: '그룹코드',
                    width: '90'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    allowChar: '',
                    blockSelect: 'false',
                    "class": 'req',
                    displayMode: 'label',
                    id: 'column17',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:26px;',
                    value: '그룹명',
                    width: '267'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    allowChar: '',
                    blockSelect: 'false',
                    "class": 'req',
                    displayMode: 'label',
                    id: 'column16',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:26px;',
                    value: '코드순서',
                    width: '100'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column15',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:26px;',
                    value: '사용여부',
                    width: '100'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column14',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:26px;',
                    value: '비고',
                    width: '382'
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
                    checkboxLabel: '선택',
                    displayMode: 'label',
                    id: 'chk',
                    inputType: 'checkbox',
                    removeBorderStyle: 'false',
                    style: 'height:26px;',
                    value: '',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'GRP_CD',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '',
                    width: '90',
                    readOnly: 'true'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'GRP_NM',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '',
                    width: '137',
                    textAlign: 'left'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'SORT_ORDER',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '',
                    width: '100'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    checkboxLabel: '선택',
                    displayMode: 'label',
                    id: 'IS_USE',
                    inputType: 'checkbox',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '',
                    width: '100',
                    valueType: 'other',
                    trueValue: 'Y',
                    escapeFormatter: '',
                    falseValue: 'N',
                    defaultValue: 'N'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'NOTE',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '',
                    width: '202',
                    textAlign: 'left'
                  }
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
            N: 'w2:textbox',
            A: {
              "class": '',
              id: '',
              label: '코드',
              style: '',
              tagname: 'H3'
            }
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'fr',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'sum',
                id: 'spn_codeCnt',
                label: '',
                style: ''
              }
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
              autoFitMinWidth: '800',
              captionTitle: '',
              checkReadOnlyOnCut: '',
              "class": 'wq_gvw',
              dataList: 'data:dlt_commonCode',
              id: 'grd_commonCode',
              rowStatusHeaderValue: '상태',
              rowStatusVisible: 'true',
              rowStatusWidth: '',
              scrollByColumn: 'false',
              scrollByColumnAdaptive: 'false',
              style: 'height: 250px;',
              keepDefaultColumnWidth: 'true',
              adaptiveThreshold: '',
              adaptive: '',
              focusMode: 'both'
            },
            E: [{
              T: 1,
              N: 'w2:caption',
              A: {
                id: 'caption1',
                style: '',
                value: 'this is a grid caption.'
              }
            }, {
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
                    checkboxLabel: '선택',
                    displayMode: 'label',
                    fixColumnWidth: 'true',
                    id: 'chk',
                    inputType: 'checkbox',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '선택',
                    width: '50',
                    hiddenClass: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    "class": 'req',
                    displayMode: 'label',
                    id: 'column18',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height: 26px',
                    value: '공통코드',
                    width: '90'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    "class": 'req',
                    displayMode: 'label',
                    id: 'column17',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '코드명',
                    width: '200'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column16',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '코드순서',
                    width: '90',
                    "class": 'req'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column15',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '사용여부',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    removeBorderStyle: 'false',
                    width: '150',
                    inputType: 'text',
                    style: '',
                    id: 'column51',
                    value: '속성값1',
                    blockSelect: 'false',
                    displayMode: 'label'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    removeBorderStyle: 'false',
                    width: '150',
                    inputType: 'text',
                    style: '',
                    id: 'column49',
                    value: '속성값2',
                    blockSelect: 'false',
                    displayMode: 'label'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column14',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '속성값3',
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
                    id: 'chk',
                    inputType: 'checkbox',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '',
                    width: '70',
                    checkboxLabel: '선택'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'COM_CD',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height: 26px',
                    value: '',
                    width: '90',
                    readOnly: 'true'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'CODE_NM',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '',
                    width: '200',
                    textAlign: 'left'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'SORT_ORDER',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '',
                    width: '90'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'IS_USE',
                    inputType: 'checkbox',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '',
                    width: '70',
                    checkboxLabel: '선택',
                    falseValue: 'N',
                    typeGetter: '',
                    trueValue: 'Y',
                    validator: '',
                    valueType: 'other'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    removeBorderStyle: 'false',
                    width: '70',
                    inputType: 'text',
                    style: '',
                    id: 'ATTR_VALUE1',
                    value: '',
                    blockSelect: 'false',
                    displayMode: 'label'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    removeBorderStyle: 'false',
                    width: '70',
                    inputType: 'text',
                    style: '',
                    id: 'ATTR_VALUE2',
                    value: '',
                    blockSelect: 'false',
                    displayMode: 'label'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'ATTR_VALUE3',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '',
                    width: '250'
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