/*amd /ui/SP/Common/Common_multiLang_Client.xml 28536 330e4464fba6831bf38ba59df90866e66c71f19fefad42cd472e7546617b0bc4 */
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
                  cdata: '\n<pre class="textNor" style="">\n<div class="etcbox">본 화면은 WebSquare5의 다국어 설정을 위한 가이드를 제공한다.\n본 화면은 클라이언트 다국어 설정으로 적용되어 있으며, 설정내용은 아래의 설정을 확인한다.\n본 화면에서는&lt;languagePack useLanguagePack="true"&gt;\nuseLanguagePack="true" 설정하면 적용이 가능하다.\n</div>\n<div class="etc_tit">1. config.xml 확인</div>\n  &lt;languagePack useLanguagePack="true"&gt;\n	&lt;url lang="ko" value="/message/getLanguagePack/ko"/&gt;\n	&lt;url lang="en" value="/message/getLanguagePack/en"/&gt;\n  &lt;/languagePack&gt;\n  <font color=red>(클아이언트 다국어 설정이 필요없는 경우 useLanguagePack="false"설정하면 클라이언트 다국어가 적용되지 않는다.)</font>\n  \n<div class="etc_tit">2. JAVA 확인\n  - /WRM/src/com/inswave/wrm/common/controller/MessageController.java\n @RequestMapping("/message/getLanguagePack/{lang}")\npublic void getLanguagePack(@PathVariable("lang") String lang, HttpServletResponse response) {\n\n</pre>\n						'
                }]
              }, {
                T: 1,
                N: 'test',
                E: [{
                  T: 4,
                  cdata: '\n<pre class="textNor">						\n<div class="etc_tit">1. 과정</div>\n1. 오른쪽에 위치한 [언어 선택]를 선택한다.\n<div class="etc_tit">2. 결과</div>\n1. 변경된 [언어 선택]에 따른 화면의 다국어 설정을 확인한다.\n</pre>\n						'
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataMap',
            A: {
              baseNode: 'map',
              id: 'dma_sampleDesc'
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
                  id: 'desc1',
                  name: '',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'desc2',
                  name: '',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'desc3',
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
                  cdata: '\n<div class="etc_tit">1. span</div>\n  &lt;w2:span id="" label="" <font color=blue>localeRef="MSG_CM_00053" style="" useLocale="true"</font>&gt;\n  <br>\n  <font color=red>localeRef, useLocale 설정합니다.</font>\n<div class="etc_tit">2. textBox, output, table td, trigger, textBox</div>\n  <font color=red>localeRef, useLocale 설정합니다.</font>\n  <br>\n  <font color=red>tooptip설정시 tooltip, tooltipLocaleRef 설정합니다.</font>\n<div class="etc_tit">3. filptoggle</div>\n  &lt w2:fliptoggle id="" <font color=blue>offLocaleRef="MSG_CM_00055" onLocaleRef="MSG_CM_00054"</font> style="position: relative;width: 100px;height: 30px;" <font color=blue>useLocale="true"</font> &gt;\n  <br>\n  <font color=red>onLocaleRef, offLocaleRef,useLocale 설정합니다.</font>\n</pre>\n						'
                }]
              }, {
                T: 1,
                N: 'desc1',
                E: [{
                  T: 4,
                  cdata: '\n<div class="etc_tit">1. selectbox chooseOption</div>\n  &ltxf:select1 allOption="false" appearance="minimal" <font color=blue>chooseOption="true" chooseOptionLabelLocaleRef="MSG_CM_00066"</font>\n								direction="auto" disabled="false" disabledClass="w2selectbox_disabled" id="sbx_selectbox10" style="width: 148px;height: 21px;"\n								submenuSize="auto" <font color=blue>useLocale="true"</font>&gt;\n  <br>\n  <font color=red>chooseOption,chooseOptionLabelLocaleRef,useLocale 설정합니다.</font>\n<br>\n<br>\n<div class="etc_tit">2. selectbox useItemLocale</div>\n  &lt;xf:select1 allOption="true" allOptionLabelLocaleRef="allOptionText" appearance="minimal" chooseOption=""\n		direction="auto" disabled="false" disabledClass="w2selectbox_disabled" id="sbx_selectbox11" ref=""\n		style="width: 148px;height: 21px;" submenuSize="auto" <font color=blue>useItemLocale="true" useLocale="true"</font>&gt;\n		<br>\n		&nbsp;&nbsp;&lt;xf:choices&gt;\n		<font color=blue>\n		<br>\n			&nbsp;&nbsp;&nbsp;&nbsp;&lt;xf:item&gt;&lt;xf:label&gt;&lt;![CDATA[MSG_CM_00064]]&gt;&lt;/xf:label&gt;&lt;xf:value&gt;&lt;![CDATA[MSG_CM_00064]]&gt;&lt;/xf:value&gt;&lt;/xf:item&gt;\n		<br>\n			&nbsp;&nbsp;&nbsp;&nbsp;&lt;xf:item&gt;&lt;xf:label&gt;&lt;![CDATA[MSG_CM_00065]]&gt;&lt;/xf:label&gt;&lt;xf:value&gt;&lt;![CDATA[MSG_CM_00065]]&gt;&lt;/xf:value&gt;&lt;/xf:item&gt;\n		</font>\n		<br>\n		&nbsp;&nbsp;&lt;/xf:choices&gt;\n		<br>\n	&lt;/xf:select1&gt;\n  <br>\n  <font color=red> useLocale,item에 (label,value)  설정합니다.</font>\n<br>\n<br>\n<div class="etc_tit">3. autoComplete</div>\n  &lt;w2:autoComplete allOption="" <font color=blue>chooseOption="true" chooseOptionLabelLocaleRef="MSG_CM_00066"</font> editType="select"\n	id="" ref="" search="start" style="width: 148px;height: 21px;" submenuSize="auto" <font color=blue>tooltip="MSG_CM_00017"\n	tooltipLocaleRef="MSG_CM_00017" useLocale="true"</font>&gt;\n  <br>\n  <font color=red>chooseOptionLabelLocaleRef, useLocale,chooseOption 설정합니다.</font>\n  <br>\n  <font color=red>tooptip설정시 tooltip, tooltipLocaleRef 설정합니다.</font>\n<br>\n<br>\n<div class="etc_tit">4. checkcombobox</div>\n  &ltxf:checkcombobox allOption="" appearance="minimal" <font color=blue>chooseOption="true"</font> chooseOptionLabel=""\n  <font color=blue>chooseOptionLabelLocaleRef="MSG_CM_00066"</font> direction="auto" disabled="false" displayAllOptionLabel="false" displayMode="label" id=""\n  ref="" style="width: 148px;height: 21px;" submenuSize="auto" <font color=blue>useLocale="true"</font>&gt;\n  <br>\n  <font color=red>chooseOptionLabelLocaleRef, chooseOption, useLocale 설정합니다.</font>\n						'
                }]
              }, {
                T: 1,
                N: 'desc2',
                E: [{
                  T: 4,
                  cdata: '\n				&lt;w2:gridView autoFit="allColumn" class="wq_gvw" dataList="data:dlt_sample" ev:onafteredit="" fixedColumnWithHidden="true"\n					id="grd_chkGrid" ignoreCellClick="false" scrollByColumn="false" sortEvent="ondblclick" sortable="true" style="height:106px;"\n					useShiftKey="true" defaultCellHeight="26" autoFitMinWidth="800" <font color=blue>rowNumVisible="true" rowNumLocaleRef="MSG_CM_00055"</font>\n					<font color=blue>useLocale="true" rowStatusLocaleRef="MSG_CM_00053" rowStatusVisible="true"</font>&gt;\n<br>				\n&nbsp;					&lt;w2:header id="header1" style=""&gt;\n<br>				\n&nbsp;&nbsp;						&lt;w2:row id="row2" style=""&gt;\n<br>				\n&nbsp;&nbsp;&nbsp;&nbsp;							&lt;w2:column blockSelect="false" displayMode="label" id="column11" inputType="text" style="" value="" width="170"\n								<font color=blue>localeRef="MSG_CM_00062" useLocale="true"</font>&gt;&lt;/w2:column&gt;\n<br>				\n........\n				\n<br>				\n&nbsp;					&lt;w2:footer style="" id="footer1"&gt;\n<br>				\n&nbsp;&nbsp;						&lt;w2:row style="" id="row6"&gt;\n<br>				\n&nbsp;&nbsp;&nbsp;&nbsp;							&lt;w2:column width="170" inputType="text" style="" id="column16" value="" displayMode="label"\n								<font color=blue>localeRef="MSG_CM_00053" useLocale="true"&gt;</font> &lt;/w2:column&gt;\n<br>				\n.........\n					\n<br>	\n  <br>\n  <div class="etc_tit">1. girdview column 설정</div>			\n  <font color=red>localeRef, useLocale 설정합니다.</font>\n  <div class="etc_tit">2. girdview rownum 설정</div>			\n  <font color=red>rowNumVisible, rowNumLocaleRef, useLocale 설정합니다.</font>\n  <div class="etc_tit">3. gridview rowStatus 설정</div>			\n  <font color=red>rowStatusLocaleRef, rowStatusVisible, useLocale 설정합니다.</font>\n  <div class="etc_tit">4. gridview footer 설정</div>			\n  <font color=red>localeRef, useLocale 설정합니다.</font>\n						'
                }]
              }, {
                T: 1,
                N: 'desc3',
                E: [{
                  T: 4,
                  cdata: '\n  <div class="etc_tit">1. tab label 설정</div>\n	var tabObj = {.....	<font color=blue>localeRef: "MSG_CM_00056" //엔진 반영 예정</font>};\n  <br>\n	var contObj = {.......}\n  <br>\n	tac_tabControl1.addTab("a112341", tabObj, contObj);			\n  <br>\n  <font color=red>localeRef, useLocale 설정합니다.</font>\n  <br>\n  <br>\n  <div class="etc_tit">2. tab 중복 메세지 설정</div>\n  &lt;w2:tabControl <font color=blue>confirmMessageLocaleRef="MSG_CM_00056" useConfirmMessage="true"</font> alwaysDraw="false" style="position:relative;height:200px;" id="tac_tabControl1" class="wq_tab"&gt;\n  <br>\n  <font color=red>confirmMessageLocaleRef, useConfirmMessage 설정합니다.</font>\n  <br>\n  <br>\n  <div class="etc_tit">3. window 중복 메세지 설정</div>\n  &lt;w2:windowContainer <font color=blue>confirmMessageLocaleRef="MSG_CM_00055"</font> style="position:relative;height:200px;"\n						id="wdc_windowContainer1" <font color=blue>useLocale="true"</font>&gt;\n  <br>\n  <font color=red>confirmMessageLocaleRef, useLocale 설정합니다.</font>\n						\n						'
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
                  name: '기본코드',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col2',
                  name: '기본사항',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col3',
                  name: '입력사항',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col4',
                  name: '확인사항',
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
              id: 'dlt_dataList1',
              saveRemovedData: 'true'
            },
            E: [{
              T: 1,
              N: 'w2:columnInfo',
              E: [{
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col1',
                  name: 'name1',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col2',
                  name: 'name2',
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
                  N: 'col1',
                  E: [{
                    T: 4,
                    cdata: '1'
                  }]
                }, {
                  T: 1,
                  N: 'col2',
                  E: [{
                    T: 4,
                    cdata: '주주클럽'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'col1',
                  E: [{
                    T: 4,
                    cdata: '2'
                  }]
                }, {
                  T: 1,
                  N: 'col2',
                  E: [{
                    T: 4,
                    cdata: '영턱스클럽'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'col1',
                  E: [{
                    T: 4,
                    cdata: '3'
                  }]
                }, {
                  T: 1,
                  N: 'col2',
                  E: [{
                    T: 4,
                    cdata: '이오공감'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'col1',
                  E: [{
                    T: 4,
                    cdata: '4'
                  }]
                }, {
                  T: 1,
                  N: 'col2',
                  E: [{
                    T: 4,
                    cdata: '룰라'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'col1',
                  E: [{
                    T: 4,
                    cdata: '5'
                  }]
                }, {
                  T: 1,
                  N: 'col2',
                  E: [{
                    T: 4,
                    cdata: '내일은 사랑'
                  }]
                }]
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
              scwin.flag = false;
              scwin.onpageload = function () {
                var cookie_val = com.win.getLangCode($p);
                sel_multiLang.setValue(cookie_val);
                if (cookie_val != 'en') {
                  scwin.flag = true;
                }
                dlt_sample.insertRow();
              };
              scwin.sel_multiLang_onchange = function () {
                if (scwin.flag) {
                  com.win.setLangCode($p, sel_multiLang.getValue());
                  if ($p.main().scwin.getLayoutId() == 'M') {
                    $p.reinitialize();
                  } else {
                    location.reload();
                  }
                } else {
                  scwin.flag = true;
                }
              };
              scwin.wfTitleDesc_btn_DescTitleBtn_onclick = function () {
                this.getParent().getParent().toggleClass('on');
              };
              scwin.btn_trigger1_onclick = function (e) {
                var tabObj = {
                  closable: true,
                  openAction: '',
                  label: 'menuNm',
                  useLocale: true,
                  localeRef: 'MSG_CM_00056'
                };
                var contObj = {
                  frameMode: 'wframePreload',
                  scope: true,
                  src: '/ui/SP/Parameter/DataObject_ParameterSend.xml',
                  alwaysDraw: true,
                  title: 'title',
                  dataObject: {
                    type: 'json',
                    name: 'paramData',
                    data: {}
                  }
                };
                return Promise.resolve().then(function () {
                  return tac_tabControl1.addTab('sample', tabObj, contObj);
                }).then(function (tabId) {
                  tac_tabControl1.setSelectedTabIndex(tabId);
                  return tabId;
                });
              };
              scwin.btn_trigger2_onclick = function (e) {
                wdc_windowContainer1.createWindow('edu001', null, '/ui/SP/Parameter/Popup_Parameter.xml');
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
          cdata: '.lybox .tabbox>.wq_tab .w2tabcontrol_container{position:absolute;top:32px}'
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
          "class": 'sub_contents',
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
                "class": 'ett',
                id: '',
                label: '언어선택 : ',
                style: ''
              }
            }, {
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
                'ev:onchange': 'scwin.sel_multiLang_onchange',
                id: 'sel_multiLang',
                ref: '',
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
                      cdata: '한국어'
                    }]
                  }, {
                    T: 1,
                    N: 'xf:value',
                    E: [{
                      T: 4,
                      cdata: 'ko'
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
                      cdata: '영어'
                    }]
                  }, {
                    T: 1,
                    N: 'xf:value',
                    E: [{
                      T: 4,
                      cdata: 'en'
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
            "class": 'accr_wrap mt20',
            id: '',
            style: 'border: 1px solid #e5ebf2;    border-radius: 4px;',
            tagname: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'items',
              id: '',
              style: '',
              tagname: '',
              text: ''
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'tit_box',
                id: '',
                style: 'background: #fafafa;',
                userData1: ''
              },
              E: [{
                T: 1,
                N: 'w2:anchor',
                A: {
                  'ev:onclick': 'scwin.wfTitleDesc_btn_DescTitleBtn_onclick',
                  id: 'btn_info',
                  outerDiv: 'false',
                  style: 'line-height: 20px;    font-size: 11px;',
                  userData1: 'grp_infoItem'
                },
                E: [{
                  T: 1,
                  N: 'xf:label',
                  E: [{
                    T: 4,
                    cdata: '예제설명1'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'con_box',
                id: '',
                style: 'padding: 10px 30px;border-top: 1px solid #e5ebf2;background: #fff;'
              },
              E: [{
                T: 1,
                N: 'w2:textbox',
                A: {
                  id: '',
                  label: '설명글입니다.',
                  style: '',
                  ref: 'data:dma_sampleDesc.desc',
                  escape: 'false'
                }
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
              "class": 'tbbox',
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
                id: 'grp_group2',
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
                    "class": 'w2tb_th',
                    localeRef: '',
                    style: '',
                    tagname: 'th',
                    useLocale: 'true'
                  },
                  E: [{
                    T: 3,
                    text: 'span'
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
                    N: 'w2:span',
                    A: {
                      id: '',
                      label: '',
                      localeRef: 'MSG_CM_00053',
                      style: '',
                      useLocale: 'true'
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
                    T: 3,
                    text: 'textBox'
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
                    N: 'w2:textbox',
                    A: {
                      id: '',
                      label: '',
                      localeRef: 'MSG_CM_00030',
                      style: 'width: 100%;    overflow: hidden;    text-overflow: ellipsis;    white-space: nowrap;',
                      toolTip: '',
                      tooltip: '123',
                      tooltipLocaleRef: 'MSG_CM_00073',
                      useLocale: 'true',
                      userData3: ''
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
                    T: 3,
                    text: 'output'
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
                    N: 'xf:output',
                    A: {
                      id: 'opt_output2',
                      label: '',
                      localeRef: 'MSG_CM_00064',
                      style: 'width: 150px;height: 23px;',
                      tooltip: 'MSG_CM_00074',
                      tooltipLocaleRef: 'MSG_CM_00074',
                      useLocale: 'true'
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label'
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
                    T: 3,
                    text: 'table&nbsp;td'
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'w2tb_td',
                    localeRef: 'MSG_CM_00062',
                    style: '',
                    tagname: 'td',
                    tooltip: 'MSG_CM_00075',
                    tooltipLocaleRef: 'MSG_CM_00075',
                    useLocale: 'true'
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'w2tb_th',
                    style: '',
                    tagname: 'th'
                  },
                  E: [{
                    T: 3,
                    text: 'trigger'
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
                    N: 'xf:trigger',
                    A: {
                      id: 'btn_trigger4',
                      localeRef: 'MSG_CM_00060',
                      style: 'width:150px;height:23px;',
                      tooltip: 'MSG_CM_00060',
                      tooltipLocaleRef: 'MSG_CM_00060',
                      type: 'button',
                      useLocale: 'true'
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: 'trigger1'
                      }]
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
                    T: 3,
                    text: 'anchor'
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
                    N: 'w2:anchor',
                    A: {
                      id: '',
                      localeRef: 'MSG_CM_00058',
                      outerDiv: 'false',
                      style: 'width:149px;height:23px;',
                      tooltip: 'MSG_CM_00058',
                      tooltipLocaleRef: 'MSG_CM_00058',
                      useLocale: 'true'
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: 'ancher'
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
                    T: 3,
                    text: 'filptoggle'
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
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:colspan',
                      E: [{
                        T: 3,
                        text: '5'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:rowspan',
                      E: [{
                        T: 3,
                        text: '1'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:fliptoggle',
                    A: {
                      id: '',
                      offLocaleRef: 'MSG_CM_00055',
                      onLocaleRef: 'MSG_CM_00054',
                      style: 'position: relative;width: 100px;height: 30px;',
                      useLocale: 'true'
                    },
                    E: [{
                      T: 1,
                      N: 'w2:on',
                      A: {
                        label: 'On',
                        value: 'On'
                      }
                    }, {
                      T: 1,
                      N: 'w2:off',
                      A: {
                        label: 'Off',
                        value: 'Off'
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
            "class": 'accr_wrap mt20',
            id: '',
            style: 'border: 1px solid #e5ebf2;    border-radius: 4px;',
            tagname: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'items',
              id: '',
              style: '',
              tagname: '',
              text: ''
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'tit_box',
                id: '',
                style: 'background: #fafafa;',
                userData1: ''
              },
              E: [{
                T: 1,
                N: 'w2:anchor',
                A: {
                  'ev:onclick': 'scwin.wfTitleDesc_btn_DescTitleBtn_onclick',
                  id: 'btn_anchor5',
                  outerDiv: 'false',
                  style: 'line-height: 20px;    font-size: 11px;',
                  userData1: 'grp_infoItem'
                },
                E: [{
                  T: 1,
                  N: 'xf:label',
                  E: [{
                    T: 4,
                    cdata: '예제설명2'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'con_box',
                id: '',
                style: 'padding: 10px 30px;    border-top: 1px solid #e5ebf2;    background: #fff;'
              },
              E: [{
                T: 1,
                N: 'w2:textbox',
                A: {
                  id: '',
                  label: '설명글입니다.',
                  style: '',
                  ref: 'data:dma_sampleDesc.desc1',
                  escape: 'false'
                }
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
              id: 'group1',
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
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 3,
                  text: '\n							selectbox&nbsp;\n							'
                }, {
                  T: 1,
                  N: 'br'
                }, {
                  T: 3,
                  text: '\n							chooseOption\n						'
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
                    allOption: 'false',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    chooseOptionLabelLocaleRef: 'MSG_CM_00066',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    id: 'sbx_selectbox10',
                    style: 'width: 148px;height: 21px;',
                    submenuSize: 'auto',
                    useLocale: 'true'
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
                  T: 3,
                  text: '\n							selectbox&nbsp;\n							'
                }, {
                  T: 1,
                  N: 'br'
                }, {
                  T: 3,
                  text: '\n							useItemLocale\n						'
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
                    allOption: 'true',
                    allOptionLabelLocaleRef: 'allOptionText',
                    appearance: 'minimal',
                    chooseOption: '',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    id: 'sbx_selectbox11',
                    ref: '',
                    style: 'width: 148px;height: 21px;',
                    submenuSize: 'auto',
                    useItemLocale: 'true',
                    useLocale: 'true'
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
                          cdata: 'MSG_CM_00064'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'MSG_CM_00064'
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
                          cdata: 'MSG_CM_00065'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'MSG_CM_00065'
                        }]
                      }]
                    }]
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
                  T: 3,
                  text: 'autoComplete'
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
                  N: 'w2:autoComplete',
                  A: {
                    allOption: '',
                    chooseOption: 'true',
                    chooseOptionLabelLocaleRef: 'MSG_CM_00066',
                    editType: 'select',
                    id: '',
                    ref: '',
                    search: 'start',
                    style: 'width: 148px;height: 21px;',
                    submenuSize: 'auto',
                    tooltip: 'MSG_CM_00076',
                    tooltipLocaleRef: 'MSG_CM_00076',
                    useLocale: 'true'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:choices',
                    E: [{
                      T: 1,
                      N: 'w2:item',
                      E: [{
                        T: 1,
                        N: 'w2:label',
                        E: [{
                          T: 4,
                          cdata: '주주클럽'
                        }]
                      }, {
                        T: 1,
                        N: 'w2:value',
                        E: [{
                          T: 4,
                          cdata: '1'
                        }]
                      }]
                    }, {
                      T: 1,
                      N: 'w2:item',
                      E: [{
                        T: 1,
                        N: 'w2:label',
                        E: [{
                          T: 4,
                          cdata: '이오공감'
                        }]
                      }, {
                        T: 1,
                        N: 'w2:value',
                        E: [{
                          T: 4,
                          cdata: '2'
                        }]
                      }]
                    }, {
                      T: 1,
                      N: 'w2:item',
                      E: [{
                        T: 1,
                        N: 'w2:label',
                        E: [{
                          T: 4,
                          cdata: '영턱스클럽'
                        }]
                      }, {
                        T: 1,
                        N: 'w2:value',
                        E: [{
                          T: 4,
                          cdata: '3'
                        }]
                      }]
                    }, {
                      T: 1,
                      N: 'w2:item',
                      E: [{
                        T: 1,
                        N: 'w2:label',
                        E: [{
                          T: 4,
                          cdata: '룰라'
                        }]
                      }, {
                        T: 1,
                        N: 'w2:value',
                        E: [{
                          T: 4,
                          cdata: '4'
                        }]
                      }]
                    }, {
                      T: 1,
                      N: 'w2:item',
                      E: [{
                        T: 1,
                        N: 'w2:label',
                        E: [{
                          T: 4,
                          cdata: '내일은 사랑'
                        }]
                      }, {
                        T: 1,
                        N: 'w2:value',
                        E: [{
                          T: 4,
                          cdata: '5'
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
                  T: 3,
                  text: 'checkcombobox'
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
                  N: 'xf:checkcombobox',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    chooseOptionLabel: '',
                    chooseOptionLabelLocaleRef: 'MSG_CM_00066',
                    direction: 'auto',
                    disabled: 'false',
                    displayAllOptionLabel: 'false',
                    displayMode: 'label',
                    id: '',
                    ref: '',
                    style: 'width: 148px;height: 21px;',
                    submenuSize: 'auto',
                    useLocale: 'true'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_dataList1'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'col2'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'col1'
                        }
                      }]
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_td',
                  style: '',
                  tagname: 'td'
                }
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'accr_wrap mt20',
            id: '',
            style: 'border: 1px solid #e5ebf2;    border-radius: 4px;',
            tagname: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'items',
              id: '',
              style: '',
              tagname: '',
              text: ''
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'tit_box',
                id: '',
                style: 'background: #fafafa;',
                userData1: ''
              },
              E: [{
                T: 1,
                N: 'w2:anchor',
                A: {
                  'ev:onclick': 'scwin.wfTitleDesc_btn_DescTitleBtn_onclick',
                  id: 'btn_anchor6',
                  outerDiv: 'false',
                  style: 'line-height: 20px;    font-size: 11px;',
                  userData1: 'grp_infoItem'
                },
                E: [{
                  T: 1,
                  N: 'xf:label',
                  E: [{
                    T: 4,
                    cdata: '예제설명3'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'con_box',
                id: '',
                style: 'padding: 10px 30px;    border-top: 1px solid #e5ebf2;    background: #fff;'
              },
              E: [{
                T: 1,
                N: 'w2:textbox',
                A: {
                  id: '',
                  label: '설명글입니다.',
                  style: '',
                  ref: 'data:dma_sampleDesc.desc2',
                  escape: 'false'
                }
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
              scrollByColumn: 'false',
              sortEvent: 'ondblclick',
              sortable: 'true',
              style: 'height:106px;',
              useShiftKey: 'true',
              defaultCellHeight: '26',
              autoFitMinWidth: '800',
              rowNumVisible: 'true',
              rowNumLocaleRef: 'MSG_CM_00077',
              useLocale: 'true',
              rowStatusLocaleRef: 'MSG_CM_00078',
              rowStatusVisible: 'true'
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
                    value: '',
                    width: '170',
                    localeRef: 'MSG_CM_00062',
                    useLocale: 'true'
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
                    value: '',
                    width: '170',
                    localeRef: 'MSG_CM_00063',
                    useLocale: 'true'
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
                    value: '',
                    width: '100',
                    localeRef: 'MSG_CM_00064',
                    useLocale: 'true'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    id: 'column12',
                    inputType: 'text',
                    style: '',
                    value: '',
                    width: '100',
                    localeRef: 'MSG_CM_00065',
                    useLocale: 'true'
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
                    displayMode: 'label',
                    id: 'col1',
                    inputType: 'text',
                    style: '',
                    width: '170'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col2',
                    inputType: 'text',
                    style: '',
                    textAlign: 'left',
                    width: '170'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
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
                    id: 'col4',
                    inputType: 'text',
                    style: '',
                    width: '100'
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'w2:footer',
              A: {
                style: '',
                id: 'footer1'
              },
              E: [{
                T: 1,
                N: 'w2:row',
                A: {
                  style: '',
                  id: 'row6'
                },
                E: [{
                  T: 1,
                  N: 'w2:column',
                  A: {
                    width: '170',
                    inputType: 'text',
                    style: '',
                    id: 'column16',
                    value: '',
                    displayMode: 'label',
                    localeRef: 'MSG_CM_00072',
                    useLocale: 'true'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    width: '170',
                    inputType: 'text',
                    style: '',
                    id: 'column15',
                    value: '',
                    displayMode: 'label'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    width: '100',
                    inputType: 'text',
                    style: '',
                    id: 'column14',
                    value: '',
                    displayMode: 'label'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    width: '100',
                    inputType: 'text',
                    style: '',
                    id: 'column13',
                    value: '',
                    displayMode: 'label'
                  }
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'accr_wrap mt20',
            id: '',
            style: 'border: 1px solid #e5ebf2;    border-radius: 4px;',
            tagname: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'items',
              id: '',
              style: '',
              tagname: '',
              text: ''
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'tit_box',
                id: '',
                style: 'background: #fafafa;',
                userData1: ''
              },
              E: [{
                T: 1,
                N: 'w2:anchor',
                A: {
                  'ev:onclick': 'scwin.wfTitleDesc_btn_DescTitleBtn_onclick',
                  id: 'btn_anchor1',
                  outerDiv: 'false',
                  style: 'line-height: 20px;    font-size: 11px;',
                  userData1: 'grp_infoItem'
                },
                E: [{
                  T: 1,
                  N: 'xf:label',
                  E: [{
                    T: 4,
                    cdata: '예제설명4'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'con_box',
                id: '',
                style: 'padding: 10px 30px;    border-top: 1px solid #e5ebf2;    background: #fff;'
              },
              E: [{
                T: 1,
                N: 'w2:textbox',
                A: {
                  id: '',
                  label: '설명글입니다.',
                  style: '',
                  ref: 'data:dma_sampleDesc.desc3',
                  escape: 'false'
                }
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            id: '',
            "class": 'lybox'
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              id: '',
              "class": 'ly_column'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                id: '',
                "class": 'tabbox'
              },
              E: [{
                T: 1,
                N: 'w2:tabControl',
                A: {
                  confirmMessageLocaleRef: 'MSG_CM_00070',
                  useConfirmMessage: 'true',
                  alwaysDraw: 'true',
                  style: 'position:relative;height:200px;',
                  id: 'tac_tabControl1',
                  "class": 'wq_tab'
                },
                E: [{
                  T: 1,
                  N: 'w2:tabs',
                  A: {
                    localeRef: 'MSG_CM_00068',
                    disabled: 'false',
                    style: 'width:70px;height:30px;',
                    id: 'tabs1',
                    useLocale: 'true'
                  }
                }, {
                  T: 1,
                  N: 'w2:tabs',
                  A: {
                    localeRef: 'MSG_CM_00069',
                    disabled: 'false',
                    style: 'width:100px;height:30px;',
                    id: 'tabs2',
                    useLocale: 'true'
                  }
                }, {
                  T: 1,
                  N: 'w2:content',
                  A: {
                    alwaysDraw: 'true',
                    style: 'height:170px',
                    id: 'content1',
                    src: '/ui/SP/Parameter/SessionStorage_ParameterSend.xml'
                  }
                }, {
                  T: 1,
                  N: 'w2:content',
                  A: {
                    alwaysDraw: 'true',
                    style: 'height:170px',
                    id: 'content2',
                    src: '/ui/SP/Bean/Bean_Transaction.xml'
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                id: 'btn_trigger1',
                localeRef: '',
                style: 'width:150px;height:23px;',
                type: 'button',
                'ev:onclick': 'scwin.btn_trigger1_onclick',
                useLocale: 'true'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '탭추가'
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              id: '',
              "class": 'ly_column'
            },
            E: [{
              T: 1,
              N: 'w2:windowContainer',
              A: {
                confirmMessageLocaleRef: 'MSG_CM_00071',
                style: 'position:relative;height:200px;border:1px solid #2d5277;margin-bottom:16px;',
                id: 'wdc_windowContainer1',
                useLocale: 'true',
                "class": 'win_c',
                controlIconPosition: 'allright',
                toolbarPosition: 'top',
                useCloseButton: 'true',
                useNameContainer: 'true'
              },
              E: [{
                T: 1,
                N: 'w2:windowToolbar',
                E: [{
                  T: 1,
                  N: 'w2:controlIconLayer',
                  E: [{
                    T: 1,
                    N: 'w2:controlIcon'
                  }, {
                    T: 1,
                    N: 'w2:controlIcon'
                  }, {
                    T: 1,
                    N: 'w2:controlIcon'
                  }, {
                    T: 1,
                    N: 'w2:controlIcon'
                  }, {
                    T: 1,
                    N: 'w2:controlIcon'
                  }]
                }, {
                  T: 1,
                  N: 'w2:nameLayer'
                }, {
                  T: 1,
                  N: 'w2:selectedNameLayer'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                'ev:onclick': 'scwin.btn_trigger2_onclick',
                id: 'btn_trigger2',
                localeRef: '',
                style: 'width:150px;height:23px;',
                type: 'button',
                useLocale: 'true'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: 'window탭추가'
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }]
});