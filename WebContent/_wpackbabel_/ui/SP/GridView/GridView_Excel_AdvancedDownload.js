/*amd /ui/SP/GridView/GridView_Excel_AdvancedDownload.xml 91022 59271e794c7b1e8d397edc39946f9f1531e5652333be3361e12987a81f9a5626 */
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
                  cdata: '\n<pre class="textNor">\n<div class="etcbox">그리드뷰의 데이터를 고급 옵션 설정을 통해 엑셀 다운로드 하는 기능을 제공한다.\n파일명을 포함하여 70여 개의 옵션을 지정할 수 있으며, 제목이나 작성자와 같이 그리드뷰 데이터 이외의 추가 정보를 설정할 수 있다. \n파일명을 제외하고 별도로 옵션 설정을 하지 않는 경우, 각 옵션의 기본 값으로 다운로드 된다.\n각 옵션 설명은 옵션명을 마우스 오버하면 툴팁으로 표현된다. \n</div> \n</pre>\n						'
                }]
              }, {
                T: 1,
                N: 'test',
                E: [{
                  T: 4,
                  cdata: '\n<pre class="textNor">\n<div class="etc_tit">과정</div>\n  1. 그리드뷰의 조회된 데이터를 확인한다.\n  2. 설정으로 이동한다.   \n  3. options(Format), options(Style), infoArr(추가 정보)에 값을 입력한다. \n  4. <font color=red>fileName은 필수 입력 사항이다.</font>\n  5. [설정코드보기] 버튼을 클릭하여 현 엑셀 다운로드에 설정된 옵션 정보를 확인한다.\n  6. [엑셀다운로드] 버튼을 클릭한다.\n  7. [복사] 버튼을 클릭하여 설정된 정보를 복사한 후에 활용한다.		\n<div class="etc_tit">결과</div>\n  ex) 코드  \n  var options = { fileName : "엑셀 샘플.xlsx" };\n  var infoArr = {};\n</pre>\n						'
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataList',
            A: {
              id: 'dlt_advancedExcel',
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
                  id: 'MENU_CD',
                  name: '메뉴코드',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'MENU_NM',
                  name: '메뉴명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'PARENT_MENU_NM',
                  name: '부모메뉴명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'MENU_LEVEL',
                  name: '메뉴레벨',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SRC_PATH',
                  name: '경로',
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
                  id: 'SORT_ORDER',
                  name: '순서',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'PARENT_MENU_CD',
                  name: '부모메뉴코드',
                  dataType: 'text'
                }
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataMap',
            A: {
              baseNode: 'map',
              id: 'dma_optionsSetting',
              firstSetSubmission: 'true'
            },
            E: [{
              T: 1,
              N: 'w2:keyInfo',
              E: [{
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'fileName',
                  name: 'name1',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'sheetName',
                  name: 'name2',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'type',
                  name: 'name3',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'removeColumns',
                  name: 'name4',
                  dataType: 'text',
                  defaultValue: '-1'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'removeHeaderRows',
                  name: 'name5',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'foldColumns',
                  name: 'name6',
                  dataType: 'text',
                  defaultValue: '-1'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'startRowIndex',
                  name: 'name7',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'startColumnIndex',
                  name: 'name8',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumVisible',
                  name: 'name9',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'showProcess',
                  name: 'name10',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'massStorage',
                  name: 'name11',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'showConfirm',
                  name: 'name12',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'dataProvider',
                  name: 'name13',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'providerRequestXml',
                  name: 'name14',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'userDataXml',
                  name: 'name15',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'bodyWordwrap',
                  name: 'name16',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'useEuroLocale',
                  name: 'name17',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'useHeader',
                  name: 'name18',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'useSubTotal',
                  name: 'name19',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'useFooter',
                  name: 'name20',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'separator',
                  name: 'name21',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'subTotalScale',
                  name: 'name22',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'subTotalRoundingMode',
                  name: 'name23',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'useStyle',
                  name: 'name24',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'freezePane',
                  name: 'name25',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'autoSizeColumn',
                  name: 'name26',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'displayGridlines',
                  name: 'name27',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'colMerge',
                  name: 'name28',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'useDataFormat',
                  name: 'name29',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'indent',
                  name: 'name30',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'columnMove',
                  name: 'name31',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'columnOrder',
                  name: 'name32',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'fitToPage',
                  name: 'name33',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'landScape',
                  name: 'name34',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'fitWidth',
                  name: 'name35',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'fitHeight',
                  name: 'name36',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'scale',
                  name: 'name37',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'pageSize',
                  name: 'name38',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'headerColor',
                  name: 'name39',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'headerFontName',
                  name: 'name40',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'headerFontSize',
                  name: 'name41',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'headerFontColor',
                  name: 'name42',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'bodyColor',
                  name: 'name43',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'bodyFontName',
                  name: 'name44',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'bodyFontSize',
                  name: 'name45',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'bodyFontColor',
                  name: 'name46',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'subTotalColor',
                  name: 'name47',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'subTotalFontName',
                  name: 'name48',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'subTotalFontSize',
                  name: 'name49',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'subTotalFontColor',
                  name: 'name50',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'footerColor',
                  name: 'name51',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'footerFontName',
                  name: 'name52',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'footerFontSize',
                  name: 'name53',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'footerFontColor',
                  name: 'name54',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'oddRowBackgroundColor',
                  name: 'name55',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'evenRowBackgroundColor',
                  name: 'name56',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumHeaderColor',
                  name: 'name57',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumHeaderFontName',
                  name: 'name58',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumHeaderFontSize',
                  name: 'name59',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumHeaderFontColor',
                  name: 'name60',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumBodyColor',
                  name: 'name61',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumBodyFontName',
                  name: 'name62',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumBodyFontSize',
                  name: 'name63',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumBodyFontColor',
                  name: 'name64',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumFooterColor',
                  name: 'name65',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumFooterFontName',
                  name: 'name66',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumFooterFontSize',
                  name: 'name67',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumFooterFontColor',
                  name: 'name68',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumSubTotalColor',
                  name: 'name69',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumSubTotalFontName',
                  name: 'name70',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumSubTotalFontSize',
                  name: 'name71',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumSubTotalFontColor',
                  name: 'name72',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowNumHeaderValue',
                  name: 'name73',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'freezePaneX',
                  name: 'name74',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'freezePaneY',
                  name: 'name75',
                  dataType: 'text'
                }
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataMap',
            A: {
              baseNode: 'map',
              id: 'dma_infoArr'
            },
            E: [{
              T: 1,
              N: 'w2:keyInfo',
              E: [{
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowIndex',
                  name: 'name1',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'colIndex',
                  name: 'name2',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'rowSpan',
                  name: 'name3',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'colSpan',
                  name: 'name4',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'text',
                  name: 'name5',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'textAlign',
                  name: 'name6',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'fontSize',
                  name: 'name7',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'fontName',
                  name: 'name8',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'color',
                  name: 'name9',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'fontWeight',
                  name: 'name10',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'drawBorder',
                  name: 'name11',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'wordWrap',
                  name: 'name12',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'bgColor',
                  name: 'name13',
                  dataType: 'text'
                }
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataList',
            A: {
              id: 'dlt_trueFalse',
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
                  id: 'key',
                  name: 'name1',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'value',
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
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: 'true'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: 'true'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: 'false'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: 'false'
                  }]
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataList',
            A: {
              id: 'dlt_getColumnId',
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
                  id: 'key',
                  name: 'name1',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'value',
                  name: 'name2',
                  dataType: 'text'
                }
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataList',
            A: {
              id: 'dlt_selectColor',
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
                  id: 'key',
                  name: 'name1',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'value',
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
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '#33CCCC(청록색)'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '#33CCCC'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '#FFFFFF(흰색)'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '#FFFFFF'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '#CCFFCC(연초록색)'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '#CCFFCC'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '#008800(진초록색)'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '#008800'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '#FF0000(붉은색)'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '#FF0000'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '#FF5E00(주황색)'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '#FF5E00'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '#FFBB00(주황색)'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '#FFBB00'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '#FFE400(노란색)'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '#FFE400'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '#1DDB16(초록색)'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '#1DDB16'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '#00D8FF(하늘색)'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '#00D8FF'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '#0054FF(파란색)'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '#0054FF'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '#5F00FF(보라색)'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '#5F00FF'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '#FF007F(핫핑크)'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '#FF007F'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '#000000(검은색)'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '#000000'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '#BDBDBD(회색)'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '#BDBDBD'
                  }]
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataList',
            A: {
              id: 'dlt_fontName',
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
                  id: 'key',
                  name: 'name1',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'value',
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
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: 'Arial'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: 'Arial'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: 'Courier New'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: 'Courier New'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: 'Tahoma'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: 'Tahoma'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '돋움'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '돋움'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '궁서'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '궁서'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '맑은 고딕'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '맑은 고딕'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'key',
                  E: [{
                    T: 4,
                    cdata: '새굴림'
                  }]
                }, {
                  T: 1,
                  N: 'value',
                  E: [{
                    T: 4,
                    cdata: '새굴림'
                  }]
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataList',
            A: {
              id: 'dlt_freezePane',
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
                  id: 'freezePaneX',
                  name: 'name1',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'freezePaneY',
                  name: 'name2',
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
            id: 'sbm_advancedExcel',
            ref: '',
            target: 'data:json,dlt_advancedExcel',
            action: '/ui/SP/JsonData/advancedExcel.json',
            method: 'get',
            mediatype: 'application/json',
            encoding: 'UTF-8',
            instance: '',
            replace: '',
            errorHandler: '',
            customHandler: '',
            mode: 'asynchronous',
            processMsg: '',
            'ev:submit': '',
            'ev:submitdone': 'scwin.sbm_advancedExcel_submitdone',
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
                com.sbm.execute($p, sbm_advancedExcel);
                var json = {};
                dma_optionsSetting.setJSON(json);
                dma_infoArr.setJSON(json);
              };
              scwin.sbm_advancedExcel_submitdone = function (e) {
                spn_excelDownloadCnt.setValue(dlt_advancedExcel.getRowCount());
                var length = dlt_advancedExcel.getColumnIndex(dlt_advancedExcel.getTotalCol());
                var arr = [];
                for (var idx = 0; idx < length; idx++) {
                  arr.push({
                    'key': dlt_advancedExcel.getColumnName(idx),
                    'value': idx
                  });
                }
                ccb_removeColumns.setValue(ccb_removeColumns.getInfo(0));
                ccb_foldColumns.setValue(ccb_foldColumns.getInfo(0));
                dlt_getColumnId.setJSON(arr);
              };
              scwin.btn_downloadData_onclick = function () {
                var option = dma_optionsSetting.getJSON();
                var info = dma_infoArr.getJSON();
                var fileName = ibx_fileName.getValue();
                if (fileName == '') {
                  com.win.alert($p, 'fileName은 필수입력 입니다,');
                } else {
                  option.fileName = fileName + '.' + rad_excelType.getValue();
                  option.removeColumns = ccb_removeColumns.getValueArray();
                  option.foldColumns = ccb_foldColumns.getValueArray();
                  option.freezePane = ibx_freezePaneX.getValue() + ',' + ibx_freezePaneY.getValue();
                  ibx_fileName.setValue(fileName);
                  com.data.downloadGridViewExcel($p, grd_advancedExcel, option, info);
                }
              };
              scwin.btn_settingCodeView_onclick = function () {
                var modifyOptions = dma_optionsSetting.getModifiedKey();
                var modifyInfoArr = dma_infoArr.getModifiedKey();
                var optionsValue = [];
                var infoArrValue = [];
                var optionsArr = [];
                var infoArr = [];
                dlt_freezePane.insertJSON(0, [{
                  'freezePaneX': ibx_freezePaneX.getValue(),
                  'freezePaneY': ibx_freezePaneY.getValue()
                }]);
                if (modifyOptions != '') {
                  for (var idx = 0; idx < modifyOptions.length; idx++) {
                    if (modifyOptions[idx] == 'fileName') {
                      optionsValue.push(ibx_fileName.getValue() + '.' + rad_excelType.getValue());
                    } else if (modifyOptions[idx] == 'removeColumns') {
                      optionsValue.push(ccb_removeColumns.getValueArray());
                    } else if (modifyOptions[idx] == 'foldColumns') {
                      optionsValue.push(ccb_foldColumns.getValueArray());
                    } else {
                      optionsValue.push(dma_optionsSetting.get(modifyOptions[idx]));
                    }
                  }
                  for (var idx = 0; idx < modifyOptions.length; idx++) {
                    if (modifyOptions[idx] == 'freezePaneX' || modifyOptions[idx] == 'freezePaneY') {
                      continue;
                    } else {
                      optionsArr.push('\n\t' + modifyOptions[idx] + ' : ' + '"' + optionsValue[idx] + '"');
                    }
                  }
                  if (modifyOptions.indexOf('freezePaneX') != -1 && modifyOptions.indexOf('freezePaneY') != -1) {
                    optionsArr.push('\n\t' + 'freezePane' + ' : ' + '"' + JSON.stringify(com.num.parseInt($p, dlt_freezePane.getRowJSON(0).freezePaneX)) + ', ' + JSON.stringify(com.num.parseInt($p, dlt_freezePane.getRowJSON(0).freezePaneY)) + '"');
                  }
                }
                if (modifyInfoArr != '') {
                  for (var idx = 0; idx < modifyInfoArr.length; idx++) {
                    infoArrValue.push(dma_infoArr.get(modifyInfoArr[idx]));
                  }
                  for (var idx = 0; idx < modifyInfoArr.length; idx++) {
                    infoArr.push('\n\t' + modifyInfoArr[idx] + ' : ' + '"' + infoArrValue[idx] + '"');
                  }
                }
                txa_copyTheCode.setValue('var options = {' + optionsArr + '\n};' + '\n\n' + 'var infoArr = {' + infoArr + '\n};');
              };
              scwin.btnSlide_onclick = function (e) {
                var btnInfo = $p.getEventTarget(this);
                var btnObj = com.util.getComponent($p, btnInfo.id);
                var grpId = btnObj.getUserData('userData1');
                var grpObj = com.util.getComponent($p, grpId);
                if (btnObj.hasClass('btn_down')) {
                  btnObj.removeClass('btn_down');
                  btnObj.addClass('btn_up');
                  if (!com.util.isEmpty($p, grpObj)) {
                    grpObj.hide();
                  }
                } else {
                  btnObj.removeClass('btn_up');
                  btnObj.addClass('btn_down');
                  if (!com.util.isEmpty($p, grpObj)) {
                    grpObj.show('');
                  }
                }
              };
              scwin.btn_ResetCheckComboBox_onclick = function () {
                var id = this.getID().split('_Reset')[1];
                var ccbId = 'ccb_' + id;
                var componentCcbId = com.util.getComponent($p, ccbId);
                componentCcbId.setValue(-1);
              };
              scwin.btn_settingCodeReset_onclick = function () {
                dma_optionsSetting.undo();
                dma_infoArr.undo();
                txa_copyTheCode.setValue('');
              };
              scwin.btn_copytheCode_onclick = function () {
                com.util.copyClipboard($p, txa_copyTheCode);
              };
              scwin.ibx_subTotalScale_onviewchange = function (info) {
                if (info.newValue.indexOf('-') == -1) {
                  this.setValue('-' + info.newValue);
                }
              };
              scwin.setInputColor = function (info) {
                document.getElementById(this.getID()).nextSibling.value = info.newValue;
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
                "class": 'sum',
                id: 'spn_excelDownloadCnt',
                label: '0',
                style: ''
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
                id: 'btn_settingCodeReset',
                "class": 'btn_cm ',
                'ev:onclick': 'scwin.btn_settingCodeReset_onclick',
                toolTip: '설정코드(options, infoArr) 값을 초기화 한다. '
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '설정코드 초기화'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm ',
                id: 'btn_settingCodeView',
                style: '',
                type: 'button',
                'ev:onclick': 'scwin.btn_settingCodeView_onclick',
                toolTip: '설정 코드 값을 텍스트로 표현한다.'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '설정코드보기'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm  download',
                id: 'btn_downloadData',
                style: '',
                type: 'button',
                'ev:onclick': 'scwin.btn_downloadData_onclick',
                toolTip: '그리드의 데이터를 엑셀로 다운로드 한다.'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '엑셀다운로드'
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
              columnMove: 'true',
              contextMenu: 'true',
              dataList: 'data:dlt_advancedExcel',
              'ev:onafteredit': '',
              'ev:onrowindexchange': '',
              fixedColumnWithHidden: 'true',
              id: 'grd_advancedExcel',
              ignoreCellClick: 'false',
              rowNumHeaderValue: '순서',
              rowNumVisible: 'true',
              rowStatusHeaderValue: '상태',
              rowStatusVisible: 'false',
              scrollByColumn: 'false',
              sortEvent: 'ondblclick',
              sortable: 'true',
              style: 'height:243px;',
              useShiftKey: 'true',
              defaultCellHeight: '26',
              rowNumWidth: '50',
              keepDefaultColumnWidth: 'true',
              autoFitMinWidth: '800'
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
                    value: '메뉴코드',
                    width: '100'
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
                    value: '메뉴명',
                    width: '140'
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
                    value: '부모메뉴명',
                    width: '100'
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
                    value: '메뉴레벨',
                    width: '60'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    id: 'column12',
                    inputType: 'text',
                    value: '경로',
                    width: '240',
                    style: ''
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
                    value: '사용여부',
                    width: '60'
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
                    id: 'MENU_CD',
                    inputType: 'text',
                    style: '',
                    textAlign: 'center',
                    width: '50'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'MENU_NM',
                    inputType: 'text',
                    style: '',
                    textAlign: 'left',
                    width: '40'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'PARENT_MENU_NM',
                    inputType: 'text',
                    style: '',
                    textAlign: 'left',
                    width: '50'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    falseValue: 'N',
                    id: 'MENU_LEVEL',
                    inputType: 'text',
                    style: '',
                    textAlign: 'center',
                    trueValue: 'Y',
                    valueType: 'other',
                    width: '50'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    id: 'SRC_PATH',
                    inputType: 'text',
                    textAlign: 'left',
                    width: '50',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'IS_USE',
                    inputType: 'text',
                    style: '',
                    textAlign: 'center',
                    width: '70'
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
              label: 'Copy the code',
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
                "class": 'btn_cm  copy',
                id: 'btn_copytheCode',
                style: '',
                type: 'button',
                toolTip: '코드 텍스트를 선택한다. ',
                'ev:onclick': 'scwin.btn_copytheCode_onclick'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '복사'
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            id: '',
            "class": 'etcbox'
          },
          E: [{
            T: 1,
            N: 'xf:textarea',
            A: {
              style: 'width:100%;height: 150px;',
              readOnly: 'true',
              id: 'txa_copyTheCode',
              "class": 'mt10'
            }
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
              label: 'options( Format )',
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
                anchorWithGroupClass: '',
                "class": 'btn_cm btn_down',
                'ev:onclick': 'scwin.btnSlide_onclick',
                id: 'btnSlide',
                style: '',
                type: 'button',
                userData1: 'tbl_optionsSetting'
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
            id: '',
            "class": 'tbbox'
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              adaptive: 'layout',
              adaptiveThreshold: '900',
              tagname: 'table',
              style: 'width : 100%;',
              id: 'tbl_optionsSetting',
              "class": 'w2tb tb'
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
                  tagname: 'col',
                  style: 'width:175.00px;'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'col',
                  style: ''
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'col',
                  style: 'width:175.00px;'
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'col',
                  style: ''
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: excel.xls] 다운로드하려는 파일의 이름으로 필수 입력 값이다.',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'fileName',
                    ref: '',
                    style: '',
                    userData2: '',
                    "class": ' req'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    displayFormatter: '',
                    ref: 'data:dma_optionsSetting.fileName',
                    style: 'width:48%;',
                    id: 'ibx_fileName',
                    title: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: 'rad_excelType',
                    ref: '',
                    renderType: 'radiogroup',
                    rows: '',
                    selectedIndex: '0',
                    style: ''
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
                          cdata: 'xlsx'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'xlsx'
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
                          cdata: 'xls'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'xls'
                        }]
                      }]
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: true] 대용량 다운로드 여부 (default는 true 이 옵션을 true로 하고 showConfirm을 false로 한 경우에 IE에서 신뢰할만한 사이트를 체크하는 옵션이 뜬다.)',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'massStorage',
                    ref: '',
                    style: '',
                    userData2: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_optionsSetting.massStorage',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '0',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: sheet] excel의 sheet의 이름',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'sheetName',
                    ref: '',
                    style: '',
                    userData2: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    ref: 'data:dma_optionsSetting.sheetName',
                    style: 'width:100%;',
                    id: '',
                    placeholder: 'sheet',
                    initValue: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: false] 다운로드 확인창을 띄울지 여부(옵션을 킨 경우 advancedExcelDownload를 호출후 사용자가 window의 버튼을 한번더 클릭해야 한다. massStorage는 자동으로 true가 된다)',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'showConfirm',
                    ref: '',
                    style: '',
                    userData2: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_optionsSetting.showConfirm',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '1',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: 0] type이 0인 경우 실제 데이터 1인 경우 눈에 보이는 데이터를  2이면 들어가 있는 data 그대로(filter무시 expression 타입의 셀은 나오지 않음)',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'type',
                    ref: '',
                    style: '',
                    userData2: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    selectedData: 'true',
                    submenuSize: 'auto',
                    chooseOption: '',
                    allOption: '',
                    displayMode: 'label',
                    ref: 'data:dma_optionsSetting.type',
                    appearance: 'minimal',
                    emptyValue: '0',
                    disabledClass: 'w2selectbox_disabled',
                    emptyItem: 'true',
                    optionOrder: 'false',
                    disabled: 'false',
                    style: 'width:100px;',
                    id: '',
                    direction: 'auto'
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
                          cdata: '0'
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
                          cdata: '1'
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
                          cdata: '2'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: '2'
                        }]
                      }]
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: 없음] 대량데이터 처리 및 사용자 데이터를 가공할 수 있는 Provider Package',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'dataProvider',
                    ref: '',
                    style: '',
                    userData2: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    ref: 'data:dma_optionsSetting.dataProvider',
                    readOnly: '',
                    style: 'width:100%;',
                    id: ''
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: 없음] 다운로드시 excel에서 삭제하려는 열의 번호(여러 개일 경우 ,로 구분)',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'removeColumns',
                    ref: '',
                    style: '',
                    userData2: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:checkcombobox',
                  A: {
                    chooseOptionLabel: '',
                    ref: 'data:dma_optionsSetting.removeColumns',
                    submenuSize: 'auto',
                    appearance: 'minimal',
                    checkboxClickSync: '',
                    chooseOption: '',
                    disabled: 'false',
                    style: 'width:50%;',
                    allOption: '',
                    id: 'ccb_removeColumns',
                    displayMode: '',
                    direction: 'auto'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_getColumnId'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'xf:trigger',
                  A: {
                    "class": 'btn_cm ',
                    id: 'btn_resetRemoveColumns',
                    style: '',
                    type: 'button',
                    'ev:onclick': 'scwin.btn_ResetCheckComboBox_onclick',
                    userData1: 'ccb_removeColumns'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '초기화'
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: 없음] Provider 내부에서 사용할 XML 문자열',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'providerRequestXml',
                    ref: '',
                    style: '',
                    userData2: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    ref: 'data:dma_optionsSetting.providerRequestXml',
                    style: 'width:100%;',
                    id: ''
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: 없음] 다운로드시 excel에서 삭제하려는 Header의 row index(여러 개일 경우 ,로 구분)',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'removeHeaderRows',
                    ref: '',
                    style: '',
                    userData2: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    ref: 'data:dma_optionsSetting.removeHeaderRows',
                    style: 'width:100px;',
                    id: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: 없음] 사용자가 서버모듈 개발 시 필요한 데이터를 전송 할 수 있는 변수',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'userDataXml',
                    ref: '',
                    style: '',
                    userData2: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    ref: 'data:dma_optionsSetting.userDataXml',
                    style: 'width:100%;',
                    id: ''
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: 없음] 다운로드시 excel에서 fold하려는 열의 번호(여러 개일 경우 ,로 구분)',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'foldColumns',
                    ref: '',
                    style: '',
                    userData2: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:checkcombobox',
                  A: {
                    chooseOptionLabel: '',
                    ref: 'data:dma_optionsSetting.foldColumns',
                    submenuSize: 'auto',
                    appearance: 'minimal',
                    checkboxClickSync: '',
                    chooseOption: '',
                    disabled: 'false',
                    style: 'width:50%;',
                    allOption: '',
                    id: 'ccb_foldColumns',
                    displayMode: 'label',
                    direction: 'auto'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_getColumnId'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'xf:trigger',
                  A: {
                    "class": 'btn_cm ',
                    id: 'btn_resetFoldColumns',
                    style: '',
                    type: 'button',
                    'ev:onclick': 'scwin.btn_ResetCheckComboBox_onclick',
                    userData1: 'ccb_foldColumns'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '초기화'
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: false] 다운로드시 바디의 줄 바꿈 기능',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'bodyWordwrap',
                    ref: '',
                    style: '',
                    userData2: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_optionsSetting.bodyWordwrap',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '1',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: 0] excel파일에서 그리드의 데이터가 시작되는 행의 번호(헤더 포함)',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'startRowIndex',
                    ref: '',
                    style: '',
                    userData2: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    ref: 'data:dma_optionsSetting.startRowIndex',
                    displayFormat: '',
                    applyFormat: '',
                    style: 'width:100px;',
                    id: 'ibx_startRowIndex',
                    placeholder: '',
                    initValue: '0'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: false] 다운로드시 유로화 처리 기능(,와 .이 반대인 경우처리)',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'useEuroLocale',
                    ref: '',
                    style: '',
                    userData2: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_optionsSetting.useEuroLocale',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '1',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: 0] excel파일에서 그리드의 데이터가 시작되는 열의 번호(헤더 포함)',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'startColumnIndex',
                    ref: '',
                    style: '',
                    userData2: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    ref: 'data:dma_optionsSetting.startColumnIndex',
                    displayFormat: '',
                    applyFormat: '',
                    style: 'width:100px;',
                    id: 'ibx_startColumnIndex',
                    placeholder: '',
                    initValue: '0'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: true] 다운로드시 Header를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'useHeader',
                    ref: '',
                    style: '',
                    userData2: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'td',
                  style: '',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_optionsSetting.useHeader',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '0',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: false] 순서출력 유무',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumVisible',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_optionsSetting.rowNumVisible',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '1',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                  toolTip: '[defalut: false] 다운로드시 SubTotal을 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력), expression을 지정한 경우 avg,sum,min,max,targetColValue,숫자를 지원 함.',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'useSubTotal',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_optionsSetting.useSubTotal',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '1',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: true] 다운로드 시 프로세스 창을 보여줄지 여부',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'showProcess',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_optionsSetting.showProcess',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '0',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                  toolTip: '[defalut: true] 다운로드시 Footer를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'useFooter',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_optionsSetting.useFooter',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '0',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: ,] 다운로드시 서버로 데이터 전송할때, 데이터를 구분짓는 구분자, default는 comma(,)',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'separator',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:input',
                  A: {
                    ref: 'data:dma_optionsSetting.separator',
                    style: 'width:100px;',
                    id: 'ibx_separator',
                    placeholder: ',',
                    initValue: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: false] 그리드 컬럼이동시 이동된 상태로 다운로드 유무 ( "true"인경우 컬럼이동 순서대로 출력 )',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'columnMove',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_optionsSetting.columnMove',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '1',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: -1] 다운로드시 subTotal 평균계산시 소수점 자리수를 지정',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'subTotalScale',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:input',
                  A: {
                    displayFormatter: '',
                    ref: 'data:dma_optionsSetting.subTotalScale',
                    'ev:onviewchange': 'scwin.ibx_subTotalScale_onviewchange',
                    displayFormat: '',
                    applyFormat: '',
                    style: 'width:100px;',
                    id: 'ibx_subTotalScale',
                    placeholder: '',
                    initValue: '-1'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: 없음] 엑셀 다운로드시 다운로드되는 컬럼 순서를 지정 할 수 있는 속성 ( ex) "0,3,2,1"로 지정시 지정한 순서로 다운로드된다 )',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'columnOrder',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:input',
                  A: {
                    ref: 'data:dma_optionsSetting.columnOrder',
                    style: 'width:100%',
                    id: ''
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: 없음] 다운로드시 subTotal 평균계산시 Round를 지정 한다. ("CEILING","FLOOR","HALF_UP")',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'subTotalRoundingMode',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:select1',
                  A: {
                    selectedData: 'true',
                    submenuSize: 'auto',
                    chooseOption: '',
                    allOption: '',
                    displayMode: 'label',
                    ref: 'data:dma_optionsSetting.subTotalRoundingMode',
                    appearance: 'minimal',
                    emptyValue: '',
                    disabledClass: 'w2selectbox_disabled',
                    emptyItem: 'true',
                    optionOrder: 'false',
                    disabled: 'false',
                    style: 'width:100px;',
                    id: '',
                    direction: 'auto'
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
                          cdata: 'CEILING'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'CEILING'
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
                          cdata: 'FLOOR'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'FLOOR'
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
                          cdata: 'HALF_UP'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'HALF_UP'
                        }]
                      }]
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: false] 엑셀 프린터 출력시 쪽맞춤 사용 유무',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'fitToPage',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_optionsSetting.fitToPage',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '1',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: false] 다운로드시 css를 제외한, style을 excel에도 적용할 지 여부 (배경색,폰트)',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'useStyle',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_optionsSetting.useStyle',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '1',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                  toolTip: '[defalut: false] 엑셀 프린터 출력시 가로 방향 출력 유무',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'landScape',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_optionsSetting.landScape',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '1',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: ""] 틀고정을 위한 좌표값 및 좌표값의 오픈셋 ( ex) freezePane="3,4" X축 3, Y축 4에서 틀고정, freezePane="0,1,0,5" X축 0, Y축 1에서 X축으로 0, Y축으로 5로 틀공정  )',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'freezePane',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:group',
                  A: {
                    "class": 'flex',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:input',
                    A: {
                      "class": '',
                      id: 'ibx_freezePaneX',
                      placeholder: 'FreezePaneX',
                      style: 'width:85px;',
                      ref: 'data:dma_optionsSetting.freezePaneX'
                    }
                  }, {
                    T: 1,
                    N: 'xf:input',
                    A: {
                      "class": '',
                      disabled: '',
                      id: 'ibx_freezePaneY',
                      placeholder: 'FreezePaneY',
                      style: 'width:85px;',
                      ref: 'data:dma_optionsSetting.freezePaneY'
                    }
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: 1] 엑셀 프린터 출력시 용지너비',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'fitWidth',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:input',
                  A: {
                    ref: 'data:dma_optionsSetting.fitWidth',
                    displayFormat: '',
                    applyFormat: '',
                    style: 'width:100px;',
                    id: 'ibx_fitWidth',
                    placeholder: '',
                    initValue: '1'
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: false] 너비자동맞춤 설정 유무',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'autoSizeColumn',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_optionsSetting.autoSizeColumn',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '0',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                  toolTip: '[defalut: 1] 엑셀 프린터 출력시 용지높이',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'fitHeight',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:input',
                  A: {
                    ref: 'data:dma_optionsSetting.fitHeight',
                    displayFormat: '',
                    applyFormat: '',
                    style: 'width:100px;',
                    id: 'ibx_fitHeight',
                    placeholder: '',
                    initValue: '1'
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: false] 엑셀 전체 셀의 눈금선 제거 유무',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'displayGridlines',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_optionsSetting.displayGridlines',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '1',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                  toolTip: '[defalut: 100] 엑셀 프린터 출력시 확대/축소 배율, scale을 사용할 경우 fitToPage는 false로 설정 해야 한다.',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'scale',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:input',
                  A: {
                    ref: 'data:dma_optionsSetting.scale',
                    displayFormat: '',
                    applyFormat: '',
                    style: 'width:100px;',
                    id: 'ibx_scale',
                    placeholder: '',
                    initValue: '100'
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: false] colMerge된 컬럼을 Merge해서 출력 할 지 여부',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'colMerge',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_optionsSetting.colMerge',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '1',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                  toolTip: '[defalut: A4] 엑셀 프린터 출력시 인쇄용지 설정 ( ex) "A3", "A4", "A5", "B4" )',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'pageSize',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'xf:select1',
                  A: {
                    selectedData: 'true',
                    submenuSize: 'auto',
                    chooseOption: '',
                    allOption: '',
                    displayMode: 'label',
                    ref: 'data:dma_optionsSetting.pageSize',
                    appearance: 'minimal',
                    emptyValue: 'A4',
                    disabledClass: 'w2selectbox_disabled',
                    emptyItem: 'true',
                    optionOrder: 'false',
                    disabled: 'false',
                    style: 'width:100px;',
                    id: '',
                    direction: 'auto',
                    "class": 'w2selectbox'
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
                          cdata: 'A3'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'A3'
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
                          cdata: 'A4'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'A4'
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
                          cdata: 'A5'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'A5'
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
                          cdata: 'B4'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'B4'
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
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: false] 그리드 dataType이 text인 경우, 엑셀의 표시형식 \'텍스트\' 출력 유무( "true"인 경우 표시형식 텍스트, "false"인 경우 표시형식 일반 출력)',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'useDataFormat',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'w2:attributes',
                  E: [{
                    T: 1,
                    N: 'w2:colspan',
                    E: [{
                      T: 3,
                      text: '3'
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
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_optionsSetting.useDataFormat',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '1',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                tagname: 'tr',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  toolTip: '[defalut: 없음] 그리드 dataType이 drilldown인 경우, indent 표시를 위한 공백 삽입 개수, default값은 0',
                  style: '',
                  "class": 'w2tb_th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'indent',
                    ref: '',
                    style: '',
                    userData2: ''
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
                  N: 'w2:attributes',
                  E: [{
                    T: 1,
                    N: 'w2:colspan',
                    E: [{
                      T: 3,
                      text: '3'
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
                  N: 'xf:input',
                  A: {
                    ref: 'data:dma_optionsSetting.indent',
                    displayFormat: '',
                    applyFormat: '',
                    style: 'width:100px;',
                    id: 'ibx_indent',
                    placeholder: '',
                    initValue: '0'
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
              label: 'options( Style )',
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
                anchorWithGroupClass: '',
                "class": 'btn_cm btn_down',
                'ev:onclick': 'scwin.btnSlide_onclick',
                id: 'trigger1',
                style: '',
                type: 'button',
                userData1: 'tbl_optionsStyle'
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
              id: 'tbl_optionsStyle',
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
                  style: 'width:185px;',
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
                  style: 'width:185.00px;',
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
                  tagname: 'th',
                  toolTip: '[defalut: #33CCCC] excel파일에서 그리드의 header부분의 색'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'headerColor',
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
                  N: 'xf:select1',
                  A: {
                    selectedData: 'true',
                    submenuSize: 'auto',
                    chooseOption: 'true',
                    allOption: '',
                    displayMode: 'label',
                    ref: 'data:dma_optionsSetting.headerColor',
                    appearance: 'minimal',
                    emptyValue: '',
                    disabledClass: 'w2selectbox_disabled',
                    emptyItem: 'true',
                    optionOrder: 'false',
                    disabled: 'false',
                    style: 'width:200px;',
                    id: '',
                    direction: 'auto',
                    escape: 'true',
                    "class": '',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    label: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    id: '',
                    tagname: 'input',
                    ref: '',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] excel파일에서 그리드의 subtotal부분의 font name'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'subTotalFontName',
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.subTotalFontName',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    chooseOptionLabel: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_fontName'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th',
                  toolTip: '[defalut: 없음] excel파일에서 그리드의 header부분의 font name'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'headerFontName',
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.headerFontName',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    chooseOptionLabel: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_fontName'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                  tagname: 'th',
                  toolTip: '[defalut: 10] excel파일에서 그리드의 subtotal부분의 font size'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'subTotalFontSize',
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
                    applyFormat: '',
                    displayFormat: 'px',
                    id: 'ibx_subTotalFontSize',
                    initValue: '10',
                    ref: 'data:dma_optionsSetting.subTotalFontSize',
                    style: 'width:100px;'
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
                  tagname: 'th',
                  toolTip: '[defalut: 10] excel파일에서 그리드의 header부분의 font size'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'headerFontSize',
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
                    applyFormat: '',
                    displayFormat: 'px',
                    id: 'ibx_headerFontSize',
                    initValue: '10',
                    ref: 'data:dma_optionsSetting.headerFontSize',
                    style: 'width:100px;'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th',
                  toolTip: '[defalut: 없음] excel파일에서 그리드의 subtotal부분의 font색'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'subTotalFontColor',
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.subTotalFontColor',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    chooseOptionLabel: '',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '',
                    ref: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    tagname: 'input',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] excel파일에서 그리드의 header부분의 font색'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'headerFontColor',
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.headerFontColor',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    chooseOptionLabel: '',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '',
                    ref: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    tagname: 'input',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
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
                  tagname: 'th',
                  toolTip: '[defalut: #008000] excel파일에서 그리드의 footer부분의 색'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'footerColor',
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.footerColor',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '',
                    ref: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    tagname: 'input',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
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
                  tagname: 'th',
                  toolTip: '[defalut: #FFFFFF] excel파일에서 그리드의 body부분의 색'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'bodyColor',
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.bodyColor',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '',
                    ref: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    tagname: 'input',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] excel파일에서 그리드의 footer부분의 font name'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'footerFontName',
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.footerFontName',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_fontName'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th',
                  toolTip: '[defalut: 없음] excel파일에서 그리드의 body부분의 font name'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'bodyFontName',
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.bodyFontName',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_fontName'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                  tagname: 'th',
                  toolTip: '[defalut: 10] excel파일에서 그리드의 footer부분의 font size'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'footerFontSize',
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
                    applyFormat: '',
                    displayFormat: 'px',
                    id: 'ibx_footerFontSize',
                    initValue: '10',
                    ref: 'data:dma_optionsSetting.footerFontSize',
                    style: 'width:100px;'
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
                  tagname: 'th',
                  toolTip: '[defalut: 10] excel파일에서 그리드의 body부분의 font size'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'bodyFontSize',
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
                    applyFormat: '',
                    displayFormat: 'px',
                    id: 'ibx_bodyFontSize',
                    initValue: '10',
                    ref: 'data:dma_optionsSetting.bodyFontSize',
                    style: 'width:100px;'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th',
                  toolTip: '[defalut: 없음] excel파일에서 그리드의 footer부분의 font색'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'footerFontColor',
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.footerFontColor',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '',
                    ref: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    tagname: 'input',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] excel파일에서 그리드의 body부분의 font색'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'bodyFontColor',
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.bodyFontColor',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '',
                    ref: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    tagname: 'input',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] excel파일에서 그리드 body의 홀수줄의 배경색'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'oddRowBackgroundColor',
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.oddRowBackgroundColor',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '',
                    ref: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    tagname: 'input',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
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
                  tagname: 'th',
                  toolTip: '[defalut: #CCFFCC] excel파일에서 그리드의 subtotal부분의 색'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'subTotalColor',
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.subTotalColor',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '',
                    ref: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    tagname: 'input',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] excel파일에서 그리드 body의 짝수줄의 배경색'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'evenRowBackgroundColor',
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.evenRowBackgroundColor',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '',
                    ref: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    tagname: 'input',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 header 영역의 배경색'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumHeaderColor',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.rowNumHeaderColor',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '',
                    ref: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    tagname: 'input',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Footer 영역의 폰트이름'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumFooterFontName',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.rowNumFooterFontName',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_fontName'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th',
                  toolTip: '[defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 header 영역의 폰트이름'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumHeaderFontName',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.rowNumHeaderFontName',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_fontName'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Footer 영역의 폰트크기'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumFooterFontSize',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    applyFormat: '',
                    displayFormat: 'px',
                    id: 'ibx_rowNumFooterFontSize',
                    initValue: '10',
                    ref: 'data:dma_optionsSetting.rowNumFooterFontSize',
                    style: 'width:100px;'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 header 영역의 폰트크기'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumHeaderFontSize',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    applyFormat: '',
                    displayFormat: 'px',
                    id: 'ibx_rowNumHeaderFontSize',
                    initValue: '10',
                    ref: 'data:dma_optionsSetting.rowNumHeaderFontSize',
                    style: 'width:100px;'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th',
                  toolTip: '[defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Footer 영역의 폰트색상'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumFooterFontColor',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.rowNumFooterFontColor',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '',
                    ref: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    tagname: 'input',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 header 영역의 폰트색상'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumHeaderFontColor',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.rowNumHeaderFontColor',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '',
                    ref: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    tagname: 'input',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Subtotal 영역의 배경색'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumSubTotalColor',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.rowNumSubTotalColor',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '',
                    ref: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    tagname: 'input',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Body 영역의 배경색'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumBodyColor',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.rowNumBodyColor',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '',
                    ref: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    tagname: 'input',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Subtotal 영역의 폰트이름'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumSubTotalFontName',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.rowNumSubTotalFontName',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_fontName'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th',
                  toolTip: '[defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Body 영역의 폰트이름'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumBodyFontName',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.rowNumBodyFontName',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_fontName'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Subtotal 영역의 폰트크기'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumSubTotalFontSize',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    applyFormat: '',
                    displayFormat: 'px',
                    id: 'ibx_rowNumSubTotalFontSize',
                    initValue: '10',
                    ref: 'data:dma_optionsSetting.rowNumSubTotalFontSize',
                    style: 'width:100px;'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Body 영역의 폰트크기'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumBodyFontSize',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    applyFormat: '',
                    displayFormat: 'px',
                    id: 'ibx_rowNumBodyFontSize',
                    initValue: '10',
                    ref: 'data:dma_optionsSetting.rowNumBodyFontSize',
                    style: 'width:100px;'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th',
                  toolTip: '[defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Subtotal 영역의 폰트색상'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumSubTotalFontColor',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.rowNumSubTotalFontColor',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '',
                    ref: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    tagname: 'input',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Body 영역의 폰트색상'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumBodyFontColor',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.rowNumBodyFontColor',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '',
                    ref: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    tagname: 'input',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Header 영역의 출력값'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumHeaderValue',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    id: '',
                    initValue: '',
                    ref: 'data:dma_optionsSetting.rowNumHeaderValue',
                    style: 'width:200px;'
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
                  tagname: 'th',
                  toolTip: '[defalut: 없음] rowNumVisible 속성이 true인 경우 순서출력 Footer 영역의 배경색'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowNumFooterColor',
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
                      text: '3'
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_optionsSetting.rowNumFooterColor',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto',
                    'ev:onviewchange': 'scwin.setInputColor'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_selectColor'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '',
                    ref: '',
                    style: 'width: 35px;vertical-align:middle;height: 25px;',
                    tagname: 'input',
                    "class": 'colorPick'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:attributes',
                    E: [{
                      T: 1,
                      N: 'w2:disabled',
                      E: [{
                        T: 3,
                        text: 'true'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:type',
                      E: [{
                        T: 3,
                        text: 'color'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:value',
                      E: [{
                        T: 3,
                        text: '#ebebeb'
                      }]
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
              label: 'infoArr( 추가 정보 )',
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
                anchorWithGroupClass: '',
                "class": 'btn_cm btn_down',
                'ev:onclick': 'scwin.btnSlide_onclick',
                id: 'trigger2',
                style: '',
                type: 'button',
                userData1: 'tbl_infoArr'
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
              id: 'tbl_infoArr',
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
                  style: 'width:175.00px;',
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
                  style: 'width:175.00px;',
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
                  tagname: 'th',
                  toolTip: '내용을 표시할 행번호'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowIndex',
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
                    dataType: 'number',
                    id: '',
                    ref: 'data:dma_infoArr.rowIndex',
                    style: ';width:100px;'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th',
                  toolTip: '표시할 내용'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'text',
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
                    dataType: '',
                    id: '',
                    ref: 'data:dma_infoArr.text',
                    style: 'width:100%;'
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
                  tagname: 'th',
                  toolTip: '내용을 표시할 열번호'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'colIndex',
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
                    dataType: 'number',
                    id: '',
                    ref: 'data:dma_infoArr.colIndex',
                    style: ';width:100px;'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th',
                  toolTip: '표시할 내용의 정렬 방법 (left, center, right)'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'textAlign',
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: '',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: 'left',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_infoArr.textAlign',
                    selectedData: 'true',
                    style: 'width:200px;',
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
                          cdata: 'left'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'left'
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
                          cdata: 'center'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'center'
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
                          cdata: 'right'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'right'
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
                  tagname: 'th',
                  toolTip: '병합할 행의 수'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'rowSpan',
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
                    dataType: 'number',
                    id: '',
                    ref: 'data:dma_infoArr.rowSpan',
                    style: ';width:100px;'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th',
                  toolTip: 'font size 설정 ( ex) "20px" )'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'fontSize',
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
                    applyFormat: '',
                    displayFormat: 'px',
                    id: 'ibx_fontSize',
                    initValue: '5',
                    ref: 'data:dma_infoArr.fontSize',
                    style: ';width:100px;'
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
                  tagname: 'th',
                  toolTip: '병합할 열의 수'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'colSpan',
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
                    dataType: 'number',
                    id: '',
                    ref: 'data:dma_infoArr.colSpan',
                    style: ';width:100px;'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th',
                  toolTip: 'font name 설정'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'fontName',
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: 'true',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: '',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_infoArr.fontName',
                    selectedData: 'true',
                    style: 'width:200px;',
                    submenuSize: 'auto'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_fontName'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th',
                  toolTip: 'font color 설정 ( ex) "red" )'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'color',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    dataType: '',
                    id: '',
                    ref: 'data:dma_infoArr.color',
                    style: 'width:200px;'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th',
                  toolTip: 'cell의 배경 color 설정 ( ex) "red" )'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'bgColor',
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
                  tagname: 'td'
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    dataType: '',
                    id: '',
                    ref: 'data:dma_infoArr.bgColor',
                    style: 'width:200px;'
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
                  tagname: 'th',
                  toolTip: 'font weight 설정 ( ex) "bold" )'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'fontWeight',
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
                      text: '3'
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: '',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    displayMode: 'label',
                    emptyItem: 'true',
                    emptyValue: 'normal',
                    id: '',
                    optionOrder: 'false',
                    ref: 'data:dma_infoArr.fontWeight',
                    selectedData: 'true',
                    style: 'width:200px;',
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
                          cdata: 'normal'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'normal'
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
                          cdata: 'bold'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'bold'
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
                          cdata: 'bolder'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'bolder'
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
                          cdata: 'lighter'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value',
                        E: [{
                          T: 4,
                          cdata: 'lighter'
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
                  tagname: 'th',
                  toolTip: 'cell의 border 지정 ( ex) true )'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'drawBorder',
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
                      text: '3'
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
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_infoArr.drawBorder',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '0',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
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
                style: '',
                tagname: 'tr'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th',
                  style: '',
                  tagname: 'th',
                  toolTip: 'cell의 줄 바꿈 기능 ( ex) "true" )'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: 'wordWrap',
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
                      text: '3'
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
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: 'data:dma_infoArr.wordWrap',
                    renderType: 'radiogroup',
                    rows: '1',
                    selectedIndex: '0',
                    style: 'width:110px;height:21px;'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:choices',
                    E: [{
                      T: 1,
                      N: 'xf:itemset',
                      A: {
                        nodeset: 'data:dlt_trueFalse'
                      },
                      E: [{
                        T: 1,
                        N: 'xf:label',
                        A: {
                          ref: 'key'
                        }
                      }, {
                        T: 1,
                        N: 'xf:value',
                        A: {
                          ref: 'value'
                        }
                      }]
                    }]
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