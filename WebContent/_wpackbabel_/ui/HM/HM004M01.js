/*amd /ui/HM/HM004M01.xml 5783 d14b7ecb39a83f986c0d862ca09384a2dca2eca22cec24635a2d727f1f881279 */
define({
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
                  id: 'SCHE_ID',
                  name: '식별자',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SCHE_START',
                  name: '시작일자',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SCHE_END',
                  name: '마감일자',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'MEMO',
                  name: '일정내용',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SCHE_THEME',
                  name: '색상',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SCHE_TITLE',
                  name: '일정명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SCHE_CODE',
                  name: '일정구분',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SCHE_STIME',
                  name: '시작시간',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'SCHE_FTIME',
                  name: '마감시간',
                  dataType: 'text'
                }
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
                  id: 'SCHE_ID',
                  name: '식별자',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SCHE_START',
                  name: '시작일자',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SCHE_END',
                  name: '마감일자',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'MEMO',
                  name: '일정내용',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SCHE_THEME',
                  name: '색상',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SCHE_TITLE',
                  name: '일정명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SCHE_CODE',
                  name: '일정구분',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SCHE_STIME',
                  name: '시작시간',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SCHE_FTIME',
                  name: '마감시간',
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
            id: 'sbm_schedule',
            ref: 'data:json,dma_select',
            target: 'data:json,dlt_schedule',
            action: '/schedule',
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
            'ev:submitdone': 'scwin.sbm_schedule_submitdone',
            'ev:submiterror': '',
            abortTrigger: ''
          }
        }, {
          T: 1,
          N: 'xf:submission',
          A: {
            id: 'sbm_save',
            ref: 'data:json,dlt_schedule',
            target: '',
            action: '/schedule/insert',
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
          lazy: 'false',
          type: 'text/javascript'
        },
        E: [{
          T: 4,
          cdata: function cdata(scopeObj) {
            with (scopeObj) {
              scwin.onpageload = function () {
                com.sbm.execute($p, sbm_schedule);
              };
              scwin.cal_onclick = function (retObj) {
                dma_select.initRowStatus();
                scwin.popUp(retObj);
              };
              scwin.popUp = function (retObj) {
                if (retObj.id != null || retObj.title != null) {
                  var selEvent = dlt_schedule.getMatchedJSON('SCHE_ID', retObj.id);
                  var sel = {
                    'SCHE_ID': selEvent[0].SCHE_ID,
                    'SCHE_TITLE': selEvent[0].SCHE_TITLE,
                    'SCHE_START': selEvent[0].SCHE_START,
                    'SCHE_END': selEvent[0].SCHE_END,
                    'SCHE_THEME': selEvent[0].SCHE_THEME,
                    'SCHE_STIME': selEvent[0].SCHE_STIME,
                    'SCHE_FTIME': selEvent[0].SCHE_FTIME,
                    'SCHE_CODE': selEvent[0].SCHE_CODE,
                    'MEMO': selEvent[0].MEMO
                  };
                  dma_select.setJSON(sel);
                  var row = dma_select.getJSON();
                  var data = {
                    data: row,
                    callbackFn: 'scwin.readSchedule'
                  };
                  var url = '/ui/HM/HM004P02.xml';
                  var opt = {
                    id: 'select',
                    popupName: '상세 일정 조회',
                    width: 450,
                    height: 430,
                    modal: true,
                    type: 'wframePopup'
                  };
                  com.win.openPopup($p, url, opt, data);
                } else {
                  var start = com.date.formatDateTime($p, retObj.start);
                  var end = com.date.formatDateTime($p, retObj.end);
                  var selInfo = {
                    'SCHE_START': start,
                    'SCHE_END': end
                  };
                  dma_select.setJSON(selInfo);
                  var data = {
                    data: dma_select.getJSON(),
                    callbackFn: 'scwin.readSchedule'
                  };
                  var url = '/ui/HM/HM004P01.xml';
                  var opt = {
                    id: 'insert',
                    popupName: '일정 등록',
                    width: 450,
                    height: 430,
                    modal: true,
                    type: 'wframePopup'
                  };
                  com.win.openPopup($p, url, opt, data);
                }
              };
              scwin.readSchedule = function () {
                com.sbm.execute($p, sbm_schedule);
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
            id: 'wfm_header',
            src: '../../cm/xml/contentHeader.xml',
            style: ';height:30px;margin-bottom:16px;'
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
              label: '일정 내역',
              style: '',
              tagname: 'h3'
            }
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              id: '',
              style: '',
              "class": 'fr'
            }
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            id: '',
            style: 'display: flex;justify-content: start;margin-top: 15px;',
            "class": ''
          },
          E: [{
            T: 1,
            N: 'w2:scheduleCalendar',
            A: {
              selectable: 'false',
              ioFormat: 'yyyyMMdd',
              id: 'cal',
              lang: '',
              defaultDate: '',
              editable: 'true',
              headerRightBtn: '',
              titleColumn: 'SCHE_TITLE',
              startColumn: 'SCHE_START',
              dataList: 'data:dlt_schedule',
              style: 'width: 100%;height: 550px;',
              headerLeftBtn: 'true',
              idColumn: 'SCHE_ID',
              headerTitle: '',
              version: '3.6',
              'ev:onclick': 'scwin.cal_onclick',
              endColumn: 'SCHE_END',
              themeColumn: 'SCHE_THEME',
              eventOrderColumn: 'SCHE_STIME'
            }
          }]
        }]
      }]
    }]
  }]
});