/*amd /ui/SP/Holiday/Calendar.xml 5234 cd6b55043d3d53d379bd70c0474857288f5e18f63a16ddb5a852918c615fa98c */
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
              id: 'dlt_schedule',
              saveRemovedData: 'true'
            },
            E: [{
              T: 1,
              N: 'w2:columnInfo',
              E: [{
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'TITLE',
                  name: '스케쥴명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'ID',
                  name: '스케쥴ID',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'START',
                  name: '시작일자',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'END',
                  name: '종료일자',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'themeColumn',
                  name: 'themeColumn',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'MEMO',
                  name: '스케쥴내용',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'CATEGORY',
                  name: '스케쥴구분',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'COLOR',
                  name: '색상',
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
                  N: 'TITLE',
                  E: [{
                    T: 4,
                    cdata: 'WS5 교육'
                  }]
                }, {
                  T: 1,
                  N: 'ID',
                  E: [{
                    T: 4,
                    cdata: 'M_001'
                  }]
                }, {
                  T: 1,
                  N: 'START',
                  E: [{
                    T: 4,
                    cdata: '20230912'
                  }]
                }, {
                  T: 1,
                  N: 'END',
                  E: [{
                    T: 4,
                    cdata: '20230914'
                  }]
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataMap',
            A: {
              baseNode: 'map',
              id: 'dma_select'
            },
            E: [{
              T: 1,
              N: 'w2:keyInfo',
              E: [{
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'TITLE',
                  name: '스케쥴명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'ID',
                  name: '스케쥴ID',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'START',
                  name: '시작일자',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'END',
                  name: '종료일자',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'themeColumn',
                  name: 'themeColumn',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'MEMO',
                  name: '스케쥴내용',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'CATEGORY',
                  name: '스케쥴구분',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'COLOR',
                  name: '색상',
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
          lazy: 'false',
          type: 'text/javascript'
        },
        E: [{
          T: 4,
          cdata: function cdata(scopeObj) {
            with (scopeObj) {
              scwin.onpageload = function () {};
              scwin.fullCal_onaddschedule = function (rowIndex) {
                console.log('스케쥴이 추가됨');
              };
              scwin.fullCal_onclick = function (retObj) {
                var date = retObj;
                var start = com.date.formatDateTime($p, date.start);
                var end = com.date.formatDateTime($p, date.end);
                ipt_start.setValue(start);
                ipt_end.setValue(end);
                console.log(end, '종료일');
                console.log(retObj);
                if (retObj.id != null && retObj.title != null) {
                  console.log('등록된 일정입니다.');
                  console.log(retObj.id);
                  console.log(retObj.title);
                  var selevent = dlt_schedule.getMatchedJSON('ID', retObj.id);
                  console.log(selevent, '선택된 스케쥴');
                  console.log(selevent[0].ID, '아이디');
                  var sel = {
                    'ID': selevent[0].ID,
                    'TITLE': selevent[0].TITLE,
                    'START': selevent[0].START,
                    'END': selevent[0].END,
                    'MEMO': selevent[0].MEMO
                  };
                  dma_select.setJSON(sel);
                  console.log(sel);
                  var dataObject = {
                    'type': 'json',
                    'name': 'param',
                    'data': {
                      'START': start,
                      'END': end
                    }
                  };
                  var opt = {
                    id: 'pop2',
                    popupName: '상세 일정 조회',
                    modal: false,
                    width: 400,
                    height: 500,
                    type: 'wframePopup',
                    dataObject: dataObject
                  };
                  com.win.openPopup($p, '/ui/SP/Holiday/schedule.xml', opt);
                } else {
                  var opt = {
                    id: 'pop1',
                    popupName: '일정 추가 화면',
                    modal: false,
                    width: 400,
                    height: 500,
                    type: 'wframePopup'
                  };
                  $p.openPopup('/ui/SP/Holiday/addSchedule.xml', opt);
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
          id: '',
          style: '',
          "class": 'sub_contents flex_gvw'
        },
        E: [{
          T: 1,
          N: 'w2:wframe',
          A: {
            style: '',
            id: '',
            src: '../../../cm/xml/contentHeader.xml'
          }
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            id: '',
            style: '',
            "class": 'dfbox'
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              id: '',
              label: 'Calender [ FullCalendar ]',
              style: 'width:180px;height:23px;',
              tagname: 'h3'
            }
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            id: 'cal',
            style: 'display: flex;justify-content: center;margin-bottom:10px;',
            "class": 'gvwbox wq_flx'
          },
          E: [{
            T: 1,
            N: 'xf:input',
            A: {
              id: 'nameIn',
              style: 'width: 144px;height: 21px;margin-bottom:10px;'
            }
          }, {
            T: 1,
            N: 'w2:scheduleCalendar',
            A: {
              selectable: 'false',
              ioFormat: 'yyyyMMdd',
              id: 'fullCal',
              lang: '',
              defaultDate: '',
              editable: 'true',
              headerRightBtn: '',
              titleColumn: 'TITLE',
              startColumn: 'START',
              dataList: 'data:dlt_schedule',
              style: 'width:650px;height:450px;',
              headerLeftBtn: 'true',
              idColumn: 'ID',
              headerTitle: '',
              'ev:onaddschedule': 'scwin.fullCal_onaddschedule',
              endColumn: 'END',
              titleFormatter: 'scwin.titleFormatter',
              'ev:onclick': 'scwin.fullCal_onclick',
              eventLimit: 'true',
              themeColumn: 'themeColumn',
              version: '3.6'
            }
          }]
        }, {
          T: 1,
          N: 'xf:input',
          A: {
            id: 'ipt_start',
            style: 'display: none;'
          }
        }, {
          T: 1,
          N: 'xf:input',
          A: {
            id: 'ipt_end',
            style: 'display:none;'
          }
        }]
      }]
    }]
  }]
});