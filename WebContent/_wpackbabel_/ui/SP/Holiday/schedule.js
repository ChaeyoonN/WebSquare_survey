/*amd /ui/SP/Holiday/schedule.xml 7161 16f320304eac7256bfa4d7d929adca7b9632353d46d49292eed24c430ee13630 */
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
          }
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
              scwin.onpageload = function () {
                var pFrame = com.win.getParent($p);
                var start = pFrame.ipt_start.getValue();
                var end = pFrame.ipt_end.getValue();
                ipt_start.setValue(start);
                ipt_end.setValue(end);
                var sel = pFrame.dma_select;
                console.log(sel);
                ipt_title.setValue(sel.get('TITLE'));
                ipt_memo.setValue(sel.get('MEMO'));
              };
              scwin.btn_update_onclick = function (e) {
                var sel = {
                  'TITLE': ipt_title.getValue(),
                  'START': ipt_start.getValue(),
                  'END': ipt_end.getValue(),
                  'MEMO': ipt_memo.getValue(),
                  'themeColumn': {
                    'color': sbx_color.getValue()
                  }
                };
                var pFrame = com.win.getParent($p);
                pFrame.dma_select.setJSON(sel);
                var idx;
                var arr = pFrame.dlt_schedule.getAllJSON();
                var name = pFrame.dma_select.getJSON().ID;
                for (var i = 0; i < pFrame.dlt_schedule.getRowCount(); i++) {
                  if (arr[i].ID == name) {
                    console.log(arr[i].ID);
                    console.log(i, '반복횟수');
                    idx = i;
                  }
                }
                pFrame.dlt_schedule.setRowJSON(idx, sel, true);
                pFrame.dlt_schedule.modifyRowStatus(idx, 'U');
                console.log('작업 완료');
              };
              scwin.btn_del_onclick = function (e) {
                var sel = {
                  'TITLE': ipt_title.getValue(),
                  'START': ipt_start.getValue(),
                  'END': ipt_end.getValue(),
                  'MEMO': ipt_memo.getValue(),
                  'themeColumn': {
                    'color': sbx_color.getValue()
                  }
                };
                var pFrame = com.win.getParent($p);
                pFrame.dma_select.setJSON(sel);
                var idx;
                var arr = pFrame.dlt_schedule.getAllJSON();
                var name = pFrame.dma_select.getJSON().ID;
                for (var i = 0; i < pFrame.dlt_schedule.getRowCount(); i++) {
                  if (arr[i].ID == name) {
                    console.log(arr[i].ID);
                    console.log(i, '반복횟수');
                    idx = i;
                  }
                }
                pFrame.dlt_schedule.deleteRow(idx);
                pFrame.fullCal.removeschedule(name);
                $p.closePopup();
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
          N: 'w2:textbox',
          A: {
            id: '',
            label: '일정 확인',
            style: 'font-size: 32px;font-weight: bold;'
          }
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'w2tb',
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
                style: 'width:15.74%;',
                tagname: 'col'
              }
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                style: 'width:50.00%',
                tagname: 'col'
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
                    text: 'row'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  id: '',
                  label: '일정명',
                  style: 'display: inline-block;'
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
                  id: 'ipt_title',
                  style: 'width: 144px;height: 21px;'
                }
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
                    text: 'row'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  id: '',
                  label: '분류',
                  style: 'display: inline-block;'
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
                  id: 'sbx_category',
                  ref: '',
                  style: 'width: 148px;height: 21px;',
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
                        cdata: '회의'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:value',
                      E: [{
                        T: 4,
                        cdata: '01'
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
                        cdata: '미팅'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:value',
                      E: [{
                        T: 4,
                        cdata: '02'
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
                        cdata: '업무'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:value',
                      E: [{
                        T: 4,
                        cdata: '03'
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
                        cdata: '할일'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:value',
                      E: [{
                        T: 4,
                        cdata: '04'
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
                    text: 'row'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  id: '',
                  label: '색상',
                  style: 'display: inline-block;'
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
                  id: 'sbx_color',
                  ref: '',
                  style: 'width: 148px;height: 21px;',
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
                        cdata: '빨강'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:value',
                      E: [{
                        T: 4,
                        cdata: '#FF0000'
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
                        cdata: '파랑'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:value',
                      E: [{
                        T: 4,
                        cdata: '#0000FF'
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
                        cdata: '회색'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:value',
                      E: [{
                        T: 4,
                        cdata: '#787878'
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
                    text: 'row'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  id: '',
                  label: '내용',
                  style: 'display: inline-block;'
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
                  id: 'ipt_memo',
                  style: 'width: 144px;height: 21px;'
                }
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
                    text: 'row'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  id: '',
                  label: '시간',
                  style: 'display: inline-block;'
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
                N: 'xf:group',
                A: {
                  id: '',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '시작일자',
                    style: 'display:inline-block;'
                  }
                }, {
                  T: 1,
                  N: 'w2:inputCalendar',
                  A: {
                    calendarValueType: 'yearMonthDate',
                    id: 'ipt_start',
                    style: 'display:inline-block;width: 150px;height: 23px;'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  id: '',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    id: '',
                    label: '마감일자',
                    style: 'display:inline-block;'
                  }
                }, {
                  T: 1,
                  N: 'w2:inputCalendar',
                  A: {
                    calendarValueType: 'yearMonthDate',
                    id: 'ipt_end',
                    style: 'width: 150px;height: 23px;display:inline-block;'
                  }
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:trigger',
          A: {
            id: 'btn_update',
            style: 'width: 80px;height: 23px;',
            type: 'button',
            'ev:onclick': 'scwin.btn_update_onclick'
          },
          E: [{
            T: 1,
            N: 'xf:label',
            E: [{
              T: 4,
              cdata: '수정'
            }]
          }]
        }, {
          T: 1,
          N: 'xf:trigger',
          A: {
            'ev:onclick': 'scwin.btn_cancel_onclick',
            id: 'btn_cancel',
            style: 'width: 80px;height: 23px;',
            type: 'button'
          },
          E: [{
            T: 1,
            N: 'xf:label',
            E: [{
              T: 4,
              cdata: '취소'
            }]
          }]
        }, {
          T: 1,
          N: 'xf:trigger',
          A: {
            type: 'button',
            id: 'btn_del',
            style: 'width: 80px;height: 23px;',
            'ev:onclick': 'scwin.btn_del_onclick'
          },
          E: [{
            T: 1,
            N: 'xf:label',
            E: [{
              T: 4,
              cdata: '삭제'
            }]
          }]
        }]
      }]
    }]
  }]
});