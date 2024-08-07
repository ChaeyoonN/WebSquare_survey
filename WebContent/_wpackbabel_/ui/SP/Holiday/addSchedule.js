/*amd /ui/SP/Holiday/addSchedule.xml 6623 b94c4c7b4513d8f38c5076c9614f59fc2acf3558aa6a6deffecd91f9c9e6f4fd */
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
              id: 'dlt_addSchedule\\',
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
              scwin.onpageload = function () {
                console.log('팝업창');
                ipt_start.setValue($p.parent().ipt_start.getValue());
                ipt_end.setValue($p.parent().ipt_end.getValue());
              };
              scwin.btn_add_onclick = function (e) {
                var seq = Math.floor(Math.random() * 10001);
                var title = ipt_title.getValue();
                var start = ipt_start.getValue();
                var end = ipt_end.getValue();
                var id = seq;
                var theme = sbx_color.getValue();
                var memo = ipt_memo.getValue();
                var category = sbx_category.getValue();
                $p.parent().fullCal.addSchedule({
                  'title': title,
                  'start': start,
                  'end': end,
                  'id': id
                });
                var pFrame = com.win.getParent($p);
                var data = [{
                  'TITLE': title,
                  'ID': id,
                  'START': start,
                  'END': end,
                  'MEMO': memo,
                  'themeColumn': {
                    'color': theme
                  },
                  'CATEGORY': category
                }];
                pFrame.dlt_schedule.insertJSON(0, data);
                console.log(data);
                com.win.closePopup($p);
              };
              scwin.btn_cancel_onclick = function (e) {
                ipt_title.setValue('');
                ipt_memo.setValue('');
                sbx_category.setValue('회의');
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
            label: '일정 추가하기',
            style: 'font-size: 32px;font-weight: bold;'
          }
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            tagname: 'table',
            style: 'width:100%;',
            id: '',
            "class": 'w2tb'
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
                tagname: 'col',
                style: 'width:15.74%;'
              }
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                tagname: 'col',
                style: 'width:50.00%'
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
                tagname: 'th',
                style: '',
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
                  id: '',
                  label: '일정명',
                  style: 'display: inline-block;'
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
                tagname: 'th',
                style: '',
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
                  id: '',
                  label: '분류',
                  style: 'display: inline-block;'
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
                  id: 'sbx_category',
                  chooseOption: '',
                  style: 'width: 148px;height: 21px;',
                  submenuSize: 'auto',
                  allOption: '',
                  disabled: 'false',
                  direction: 'auto',
                  appearance: 'minimal',
                  disabledClass: 'w2selectbox_disabled',
                  ref: ''
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
                tagname: 'th',
                style: '',
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
                  id: '',
                  label: '내용',
                  style: 'display: inline-block;'
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
                tagname: 'th',
                style: '',
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
                  id: '',
                  label: '시간',
                  style: 'display: inline-block;'
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
                    id: 'ipt_start',
                    style: 'display:inline-block;width: 150px;height: 23px;',
                    calendarValueType: 'yearMonthDate'
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
                    id: 'ipt_end',
                    style: 'width: 150px;height: 23px;display:inline-block;',
                    calendarValueType: 'yearMonthDate'
                  }
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:trigger',
          A: {
            type: 'button',
            id: 'btn_add',
            style: 'width: 80px;height: 23px;',
            'ev:onclick': 'scwin.btn_add_onclick'
          },
          E: [{
            T: 1,
            N: 'xf:label',
            E: [{
              T: 4,
              cdata: '등록'
            }]
          }]
        }, {
          T: 1,
          N: 'xf:trigger',
          A: {
            type: 'button',
            id: 'btn_cancel',
            style: 'width: 80px;height: 23px;',
            'ev:onclick': 'scwin.btn_cancel_onclick'
          },
          E: [{
            T: 1,
            N: 'xf:label',
            E: [{
              T: 4,
              cdata: '취소'
            }]
          }]
        }]
      }]
    }]
  }]
});