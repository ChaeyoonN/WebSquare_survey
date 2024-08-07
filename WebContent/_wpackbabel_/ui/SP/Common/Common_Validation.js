/*amd /ui/SP/Common/Common_Validation.xml 12641 bd12129287635531cd53290fb651fda6d100c3794112c712c658904a4074a1c8 */
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
                  cdata: '\n<pre class="textNor" style="">\n<div class="etcbox">본 화면은 테이블 형태의 항목 및 gridView의 컬럼의 유효성을 확인하는 방법을 제공한다.\n</div>\n<div class="etc_tit">1. 테이블 형태 항목의 유효성 체크</div>\n  - 주로 dataMap과 Mapping 되는 형태로 단 건의 데이터에 대한 유효성을 체크한다.\n  - 예시\n  if(com.data.validateGroup(grp_memberBasicDetailTop) === false) {\n	  return;\n  }\n<div class="etc_tit">2. gridView 컬럼의 유효성 체크</div>\n  - 그리드 뷰의 각 컬럼별 유효성을 체크할 때 사용한다.\n  - 예시\n  var valInfo = [{\n					id : "col1",\n					mandatory : true,\n					minLength : 2\n				}, {\n					id : "col2",\n					mandatory : true\n				}];\n		\n				if (com.data.validateGridView(grd_chkGrid, valInfo)) {\n					var idx = dlt_sample.getModifiedIndex();\n					com.win.confirm(idx + "건의 데이타를 반영하시겠습니까", function(res) {\n						if (res.clickValue === true) {\n							com.sbm.execute(sbm_Save);\n						}\n					});\n				}\n</pre>\n						'
                }]
              }, {
                T: 1,
                N: 'test',
                E: [{
                  T: 4,
                  cdata: '\n<pre class="textNor">						\n<div class="etc_tit">1. 과정</div>\n1. check 항목의 각 항목들을 입력 후 [확인]버튼을 클릭한다.\n2. check gridView아래의 gridView에서 각 컬럼별 값을 입력 후 [확인]버튼을 클릭한다.\n<div class="etc_tit">2. 결과</div>\n1. check 항목 중 정합성에 맞지 않는 항목이 있는 경우 경고창이 발생한다.\n2. gridView의 컬럼 중 정합성에 맞지 않는 항목이 있는 경우 경고창이 발생한다. \n</pre>\n						'
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataMap',
            A: {
              baseNode: 'map',
              id: 'dma_memberBasic'
            },
            E: [{
              T: 1,
              N: 'w2:keyInfo',
              E: [{
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'EMP_CD',
                  name: '사원코드',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'EMP_NM',
                  name: '사원명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'JOIN_DATE',
                  name: '입사일',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'RESIDENT_NO',
                  name: '주민번호',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'EMP_CN_NM',
                  name: '사원한자명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'ASSIGNED_TASK',
                  name: '담당업무',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'EMP_EN_NM',
                  name: '사원영문명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'POSITION_UPDATED_DATE',
                  name: '호칭변경일',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'LAST_APPOINT_DATE',
                  name: '최종발령일',
                  dataType: 'text'
                }
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataList',
            A: {
              id: 'dlt_sample',
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
                  id: 'col1',
                  name: '필수입력, 최소길이(2자이상)',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col2',
                  name: '필수입력, 한글입력안됨',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col3',
                  name: '필수 입력 확인1',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col4',
                  name: '필수 입력 확인2',
                  dataType: 'text'
                }
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'w2:workflowCollection'
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
                dlt_sample.insertRow();
              };
              scwin.btn_confirm_onclick = function () {
                var valInfo = [{
                  id: 'EMP_CD',
                  mandatory: true
                }, {
                  id: 'EMP_NM',
                  mandatory: true
                }, {
                  id: 'JOIN_DATE',
                  mandatory: true
                }, {
                  id: 'RESIDENT_NO',
                  mandatory: true,
                  minLength: 13
                }];
                if (com.data.validateGroup($p, grp_memberBasicDetailTop, valInfo) === false) {
                  com.win.alert($p, '데이터 입력을 성공적으로 완료했습니다.');
                }
              };
              scwin.btn_grdConfirm_onclick = function () {
                var valInfo = [{
                  id: 'col1',
                  mandatory: true,
                  minLength: 2
                }, {
                  id: 'col2',
                  mandatory: true
                }, {
                  id: 'col3',
                  mandatory: true
                }, {
                  id: 'col4',
                  mandatory: true
                }];
                if (com.data.validateGridView($p, grd_chkGrid, valInfo)) {
                  var idx = dlt_sample.getModifiedIndex();
                  com.win.alert($p, '데이터 입력을 성공적으로 완료했습니다.');
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
            style: '',
            id: '',
            "class": 'dfbox'
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              label: 'check 항목',
              style: '',
              id: '',
              "class": '',
              tagname: 'h3'
            }
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              style: '',
              id: '',
              "class": 'fr'
            },
            E: [{
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm',
                id: 'btn_confirm',
                style: '',
                type: 'button',
                'ev:onclick': 'scwin.btn_confirm_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '확인'
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
              id: 'grp_memberBasicDetailTop',
              style: 'width:100%;',
              tagname: 'table',
              adaptive: 'layout',
              adaptiveThreshold: '900'
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
                  style: 'width:120px;',
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
                  style: 'width:120px;',
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
                  style: 'width:120px;',
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
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th req',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": '',
                    id: '',
                    label: '사원코드',
                    ref: '',
                    style: '',
                    userData2: ''
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
                    "class": 'req',
                    enterBlur: '',
                    id: 'ibx_empCd',
                    mandatory: '',
                    ref: 'data:dma_memberBasic.EMP_CD',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th req',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": '',
                    id: '',
                    label: '사원명',
                    ref: '',
                    style: '',
                    userData2: ''
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
                    allowChar: '가-힣',
                    "class": 'req',
                    id: 'ibx_empNm',
                    mandatory: '',
                    placeholder: '한글만 입력가능',
                    ref: 'data:dma_memberBasic.EMP_NM',
                    style: 'he'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th req',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": '',
                    id: '',
                    label: '입사일',
                    ref: '',
                    style: '',
                    userData2: ''
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
                    "class": 'req',
                    dateValidCheck: 'true',
                    focusOnDateSelect: 'false',
                    footerDiv: 'false',
                    id: 'cal_joinDate',
                    mandatory: '',
                    ref: 'data:dma_memberBasic.JOIN_DATE',
                    renderDiv: 'true',
                    renderType: 'component',
                    rightAlign: 'false',
                    style: 'letter-spacing: 1px;text-align: left;',
                    validateRef: '',
                    validator: '',
                    weekStartsOn: '0',
                    placeholder: '____-__-__',
                    applyFormat: 'all'
                  }
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
                  "class": 'w2tb_th req',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": '',
                    id: '',
                    label: '주민번호',
                    ref: '',
                    style: '',
                    userData2: ''
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
                    allowChar: '0-9',
                    applyFormat: '',
                    "class": 'req',
                    displayFormat: '######-#######',
                    displayFormatter: '',
                    id: 'ibx_residentNo',
                    mandatory: '',
                    maxlength: '14',
                    minlength: '',
                    ref: 'data:dma_memberBasic.RESIDENT_NO',
                    style: 'letter-spacing: 1px;',
                    maskFormat: 'default',
                    maskFormatModelExcludeChar: '-',
                    dataType: 'text',
                    placeholder: '______-_______',
                    numberMask: ''
                  }
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
                    label: '사원한자명',
                    ref: '',
                    style: '',
                    userData2: ''
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
                    id: 'ibx_empCnNm',
                    mandatory: '',
                    ref: 'data:dma_memberBasic.EMP_CN_NM',
                    style: ''
                  }
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
                    label: '담당업무',
                    ref: '',
                    style: '',
                    userData2: ''
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
                    id: 'ibx_assignedTask',
                    mandatory: '',
                    ref: 'data:dma_memberBasic.ASSIGNED_TASK',
                    style: ''
                  }
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
                    label: '사원영문명',
                    ref: '',
                    style: '',
                    userData2: ''
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
                    allowChar: 'a-z A-Z',
                    id: 'ibx_empEnNm',
                    ignoreChar: '',
                    mandatory: '',
                    ref: 'data:dma_memberBasic.EMP_EN_NM',
                    style: ''
                  }
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
                    label: '호칭변경일',
                    ref: '',
                    style: '',
                    userData2: ''
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
                    "class": '',
                    dateValidCheck: 'true',
                    focusOnDateSelect: 'false',
                    footerDiv: 'false',
                    id: 'cal_postionUpdatedDate',
                    mandatory: '',
                    ref: 'data:dma_memberBasic.POSITION_UPDATED_DATE',
                    renderDiv: 'true',
                    renderType: 'component',
                    rightAlign: 'false',
                    style: '',
                    weekStartsOn: '0'
                  }
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
                    label: '최종발령일',
                    ref: '',
                    style: '',
                    userData2: ''
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
                    "class": '',
                    dateValidCheck: 'true',
                    displaymessage: '',
                    focusOnDateSelect: 'false',
                    footerDiv: 'false',
                    id: 'cal_lastAppointDate',
                    mandatory: '',
                    ref: 'data:dma_memberBasic.LAST_APPOINT_DATE',
                    renderDiv: 'true',
                    renderType: 'component',
                    rightAlign: 'false',
                    style: '',
                    weekStartsOn: '0'
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
              label: 'check gridView 항목',
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
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm',
                id: 'btn_grdConfirm',
                style: '',
                type: 'button',
                'ev:onclick': 'scwin.btn_grdConfirm_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '확인'
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
              "class": 'wq_gvw',
              dataList: 'data:dlt_sample',
              'ev:onafteredit': '',
              fixedColumnWithHidden: 'true',
              id: 'grd_chkGrid',
              ignoreCellClick: 'false',
              sortEvent: 'ondblclick',
              sortable: 'true',
              style: 'height:296px;',
              useShiftKey: 'true',
              defaultCellHeight: '26',
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
                  id: 'row2',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column11',
                    inputType: 'text',
                    style: '',
                    value: '필수입력, 최소길이(2자이상)',
                    width: '170',
                    "class": 'req'
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
                    value: '필수입력, 한글입력안됨',
                    width: '170',
                    "class": 'req'
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
                    value: '필수 입력 확인1',
                    width: '100',
                    "class": 'req'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    id: 'column12',
                    inputType: 'text',
                    style: '',
                    value: '필수 입력 확인2',
                    width: '100',
                    "class": 'req'
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'w2:gBody',
              A: {
                id: 'gBody4',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:row',
                A: {
                  id: 'row5',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    "class": 'req',
                    displayMode: 'label',
                    id: 'col1',
                    inputType: 'text',
                    style: '',
                    width: '100'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    allowChar: 'a-z A-Z',
                    blockSelect: 'false',
                    "class": 'req',
                    displayMode: 'label',
                    id: 'col2',
                    inputType: 'text',
                    style: '',
                    textAlign: 'left',
                    width: '100'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    "class": 'req',
                    defaultValue: '',
                    displayMode: '',
                    falseValue: 'N',
                    id: 'col3',
                    inputType: 'text',
                    style: '',
                    textAlign: 'left',
                    trueValue: 'Y',
                    value: '',
                    valueType: 'other',
                    width: '100'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    "class": 'req',
                    id: 'col4',
                    inputType: 'text',
                    style: '',
                    width: '100'
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