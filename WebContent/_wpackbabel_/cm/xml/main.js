/*amd /cm/xml/main.xml 16671 746a86c3e53cf5018ae4695208fa5fe3d38fbe88a76c81bc9af42385697f9c2d */
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
              id: 'dma_search'
            },
            E: [{
              T: 1,
              N: 'w2:keyInfo',
              E: [{
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'START_NUM',
                  name: '시작 순번',
                  dataType: 'number',
                  defaultValue: '0'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'END_NUM',
                  name: '끝 순번',
                  dataType: 'number',
                  defaultValue: '5'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'TOTAL_YN',
                  name: '총건수 조회여부',
                  dataType: 'number',
                  defaultValue: 'N'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SORT_COLUMN',
                  name: ' 정렬 컬럼 아이디',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:key',
                A: {
                  id: 'SORT_METHOD',
                  name: '정렬 방법(ASC, DESC)',
                  dataType: 'text'
                }
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataList',
            A: {
              id: 'dlt_release',
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
                  id: 'SEQ',
                  name: '순번',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'TITLE',
                  name: '제목',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'CONTENT',
                  name: '내용',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'CREATED_DATE',
                  name: '작성일',
                  dataType: 'text'
                }
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataList',
            A: {
              baseNode: 'list',
              id: 'dataList1',
              repeatNode: 'map',
              saveRemovedData: 'true',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:columnInfo',
              E: [{
                T: 1,
                N: 'w2:column',
                A: {
                  dataType: 'text',
                  id: 'col1',
                  name: 'name1'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  dataType: 'number',
                  id: 'col2',
                  name: 'Item01'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  dataType: 'number',
                  id: 'col3',
                  name: 'Item02'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  dataType: 'number',
                  id: 'col4',
                  name: 'Item03'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col5',
                  name: 'Item04',
                  dataType: 'number'
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
                  N: 'col2',
                  E: [{
                    T: 4,
                    cdata: '65'
                  }]
                }, {
                  T: 1,
                  N: 'col3',
                  E: [{
                    T: 4,
                    cdata: '78'
                  }]
                }, {
                  T: 1,
                  N: 'col4',
                  E: [{
                    T: 4,
                    cdata: '47'
                  }]
                }, {
                  T: 1,
                  N: 'col1',
                  E: [{
                    T: 4,
                    cdata: 'Item01'
                  }]
                }, {
                  T: 1,
                  N: 'col5',
                  E: [{
                    T: 4,
                    cdata: '38'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'col2',
                  E: [{
                    T: 4,
                    cdata: '88'
                  }]
                }, {
                  T: 1,
                  N: 'col3',
                  E: [{
                    T: 4,
                    cdata: '53'
                  }]
                }, {
                  T: 1,
                  N: 'col4',
                  E: [{
                    T: 4,
                    cdata: '63'
                  }]
                }, {
                  T: 1,
                  N: 'col1',
                  E: [{
                    T: 4,
                    cdata: 'Item02'
                  }]
                }, {
                  T: 1,
                  N: 'col5',
                  E: [{
                    T: 4,
                    cdata: '24'
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:row',
                E: [{
                  T: 1,
                  N: 'col2',
                  E: [{
                    T: 4,
                    cdata: '30'
                  }]
                }, {
                  T: 1,
                  N: 'col3',
                  E: [{
                    T: 4,
                    cdata: '38'
                  }]
                }, {
                  T: 1,
                  N: 'col4',
                  E: [{
                    T: 4,
                    cdata: '71'
                  }]
                }, {
                  T: 1,
                  N: 'col1',
                  E: [{
                    T: 4,
                    cdata: 'Item03'
                  }]
                }, {
                  T: 1,
                  N: 'col5',
                  E: [{
                    T: 4,
                    cdata: '78'
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
                    cdata: 'Item04'
                  }]
                }, {
                  T: 1,
                  N: 'col2',
                  E: [{
                    T: 4,
                    cdata: '47'
                  }]
                }, {
                  T: 1,
                  N: 'col3',
                  E: [{
                    T: 4,
                    cdata: '24'
                  }]
                }, {
                  T: 1,
                  N: 'col4',
                  E: [{
                    T: 4,
                    cdata: '53'
                  }]
                }, {
                  T: 1,
                  N: 'col5',
                  E: [{
                    T: 4,
                    cdata: '18'
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
                    cdata: 'Item05'
                  }]
                }, {
                  T: 1,
                  N: 'col2',
                  E: [{
                    T: 4,
                    cdata: '58'
                  }]
                }, {
                  T: 1,
                  N: 'col3',
                  E: [{
                    T: 4,
                    cdata: '78'
                  }]
                }, {
                  T: 1,
                  N: 'col4',
                  E: [{
                    T: 4,
                    cdata: '63'
                  }]
                }, {
                  T: 1,
                  N: 'col5',
                  E: [{
                    T: 4,
                    cdata: '98'
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
                    cdata: 'Item06'
                  }]
                }, {
                  T: 1,
                  N: 'col2',
                  E: [{
                    T: 4,
                    cdata: '68'
                  }]
                }, {
                  T: 1,
                  N: 'col3',
                  E: [{
                    T: 4,
                    cdata: '18'
                  }]
                }, {
                  T: 1,
                  N: 'col4',
                  E: [{
                    T: 4,
                    cdata: '23'
                  }]
                }, {
                  T: 1,
                  N: 'col5',
                  E: [{
                    T: 4,
                    cdata: '58'
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
                    cdata: 'Item07'
                  }]
                }, {
                  T: 1,
                  N: 'col2',
                  E: [{
                    T: 4,
                    cdata: '58'
                  }]
                }, {
                  T: 1,
                  N: 'col3',
                  E: [{
                    T: 4,
                    cdata: '98'
                  }]
                }, {
                  T: 1,
                  N: 'col4',
                  E: [{
                    T: 4,
                    cdata: '33'
                  }]
                }, {
                  T: 1,
                  N: 'col5',
                  E: [{
                    T: 4,
                    cdata: '42'
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
                    cdata: 'Item08'
                  }]
                }, {
                  T: 1,
                  N: 'col2',
                  E: [{
                    T: 4,
                    cdata: '42'
                  }]
                }, {
                  T: 1,
                  N: 'col3',
                  E: [{
                    T: 4,
                    cdata: '58'
                  }]
                }, {
                  T: 1,
                  N: 'col4',
                  E: [{
                    T: 4,
                    cdata: '88'
                  }]
                }, {
                  T: 1,
                  N: 'col5',
                  E: [{
                    T: 4,
                    cdata: '30'
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
                    cdata: 'Item09'
                  }]
                }, {
                  T: 1,
                  N: 'col2',
                  E: [{
                    T: 4,
                    cdata: '30'
                  }]
                }, {
                  T: 1,
                  N: 'col3',
                  E: [{
                    T: 4,
                    cdata: '68'
                  }]
                }, {
                  T: 1,
                  N: 'col4',
                  E: [{
                    T: 4,
                    cdata: '30'
                  }]
                }, {
                  T: 1,
                  N: 'col5',
                  E: [{
                    T: 4,
                    cdata: '20'
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
                    cdata: 'Item10'
                  }]
                }, {
                  T: 1,
                  N: 'col2',
                  E: [{
                    T: 4,
                    cdata: '20'
                  }]
                }, {
                  T: 1,
                  N: 'col3',
                  E: [{
                    T: 4,
                    cdata: '58'
                  }]
                }, {
                  T: 1,
                  N: 'col4',
                  E: [{
                    T: 4,
                    cdata: '47'
                  }]
                }, {
                  T: 1,
                  N: 'col5',
                  E: [{
                    T: 4,
                    cdata: '47'
                  }]
                }]
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
            id: 'sbm_selectRelease',
            ref: 'data:json,dma_search',
            target: 'data:json,{"id":"dlt_Update","key":"data"}',
            action: '/main/selectReleaseForMain',
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
            'ev:submitdone': 'scwin.sbm_selectRelease_submitdone',
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
          lazy: 'false',
          type: 'text/javascript'
        },
        E: [{
          T: 4,
          cdata: function cdata(scopeObj) {
            with (scopeObj) {
              scwin.onpageload = function () {
                dma_search.set('TOTAL_YN', 'N');
                dma_search.set('START_NUM', 0);
                dma_search.set('END_NUM', 5);
                dma_search.set('SORT_COLUMN', 'SEQ');
                dma_search.set('SORT_METHOD', 'DESC');
                com.sbm.execute($p, sbm_selectRelease);
              };
              scwin.sbm_selectRelease_submitdone = function (e) {
                if (com.sbm.getResultCode($p, e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
                  scwin.setReleaseInfo(e.responseJSON.dlt_release);
                }
              };
              scwin.setReleaseInfo = function (rsArr) {
                if (!com.util.isEmpty($p, rsArr[0])) {
                  txt_releaseTitle1.setValue('릴리즈 노트 (' + com.date.formatDate($p, rsArr[0].CREATED_DATE, '.') + ')');
                  txt_version1.setValue(rsArr[0].TITLE.substring(rsArr[0].TITLE.indexOf('[') + 1, rsArr[0].TITLE.indexOf(']')));
                  txt_title1.setValue(rsArr[0].TITLE.substring(rsArr[0].TITLE.indexOf(']') + 1).trim());
                }
                if (!com.util.isEmpty($p, rsArr[1])) {
                  txt_releaseTitle2.setValue('릴리즈 노트 (' + com.date.formatDate($p, rsArr[1].CREATED_DATE, '.') + ')');
                  txt_version2.setValue(rsArr[1].TITLE.substring(rsArr[1].TITLE.indexOf('[') + 1, rsArr[1].TITLE.indexOf(']')));
                  txt_title2.setValue(rsArr[1].TITLE.substring(rsArr[1].TITLE.indexOf(']') + 1).trim());
                }
                var engineVersion = WebSquare.text.BASE64Decode(WebSquare.ver);
                txt_engineVersion.setValue(engineVersion);
                txt_title3.setValue('업데이트 : ' + com.date.formatDate($p, engineVersion.substr(12, 8), '.'));
              };
              scwin.txt_version1_onclick = function (e) {
                var option = {
                  isHistory: true
                };
                com.win.openMenu($p, '릴리즈관리', '/ui/BM/BM005M01.xml', 'BM005M01', null, option);
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
          "class": 'sub_contents main_contents',
          id: '',
          style: 'min-height:100%;box-sizing:border-box;'
        },
        E: [{
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'pgtbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:textbox',
            A: {
              "class": 'pgt_tit row_line',
              escape: 'false',
              id: '',
              label: 'REPORTS',
              style: '',
              tagname: 'h3'
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
              displayMode: 'label',
              id: 'selectbox1',
              optionOrder: 'false',
              ref: '',
              renderType: 'native',
              style: 'width:120px;',
              submenuSize: 'auto',
              title: '기간선택'
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
                    cdata: '02.01 ~ 03.01'
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
                    cdata: '01.01 ~ 02.01'
                  }]
                }, {
                  T: 1,
                  N: 'xf:value'
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'pgt_right',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                id: '',
                tagname: 'ul',
                style: '',
                "class": 'pgt_route'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  id: '',
                  tagname: 'li',
                  "class": 'pgt_home'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    style: '',
                    id: '',
                    label: 'Home',
                    "class": '',
                    escape: 'false'
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  id: '',
                  style: '',
                  tagname: 'li'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": '',
                    escape: 'false',
                    id: '',
                    label: '메인화면',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  id: '',
                  style: '',
                  tagname: 'li',
                  "class": 'on'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": '',
                    escape: 'false',
                    id: '',
                    label: 'REPORTS',
                    style: ''
                  }
                }]
              }]
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'mainbox top',
            id: '',
            style: '',
            tagname: 'ul'
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              id: '',
              style: '',
              "class": 'left_grp',
              tagname: 'li'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                id: '',
                tagname: 'ul'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'li',
                  style: '',
                  id: '',
                  "class": 'month_result version'
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    style: '',
                    id: '',
                    "class": 'shadowbox releasebox'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:group',
                    A: {
                      style: '',
                      id: '',
                      "class": 'pgtbox'
                    },
                    E: [{
                      T: 1,
                      N: 'w2:textbox',
                      A: {
                        tagname: 'h3',
                        style: '',
                        id: 'txt_releaseTitle1',
                        label: '릴리즈 노트',
                        "class": 'pgt_tit'
                      }
                    }]
                  }, {
                    T: 1,
                    N: 'xf:group',
                    A: {
                      style: '',
                      id: '',
                      "class": 'release_ver'
                    },
                    E: [{
                      T: 1,
                      N: 'w2:textbox',
                      A: {
                        style: '',
                        id: 'txt_version1',
                        label: '',
                        "class": 'ver_num',
                        'ev:onclick': 'scwin.txt_version1_onclick'
                      }
                    }]
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      style: '',
                      id: 'txt_title1',
                      label: '',
                      "class": 'ver_desc'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    style: '',
                    id: '',
                    "class": 'shadowbox releasebox'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:group',
                    A: {
                      style: '',
                      id: '',
                      "class": 'pgtbox'
                    },
                    E: [{
                      T: 1,
                      N: 'w2:textbox',
                      A: {
                        tagname: 'h3',
                        style: '',
                        id: 'txt_releaseTitle2',
                        label: '릴리즈 노트',
                        "class": 'pgt_tit '
                      }
                    }]
                  }, {
                    T: 1,
                    N: 'xf:group',
                    A: {
                      style: '',
                      id: '',
                      "class": 'release_ver'
                    },
                    E: [{
                      T: 1,
                      N: 'w2:textbox',
                      A: {
                        style: '',
                        id: 'txt_version2',
                        label: '',
                        "class": 'ver_num',
                        'ev:onclick': 'scwin.txt_version1_onclick'
                      }
                    }]
                  }, {
                    T: 1,
                    N: 'xf:group',
                    A: {
                      "class": '_flex',
                      id: '',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'w2:textbox',
                      A: {
                        "class": 'ver_desc',
                        id: 'txt_title2',
                        label: '',
                        style: ''
                      }
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    style: '',
                    id: '',
                    "class": 'shadowbox releasebox'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:group',
                    A: {
                      style: '',
                      id: '',
                      "class": 'pgtbox'
                    },
                    E: [{
                      T: 1,
                      N: 'w2:textbox',
                      A: {
                        tagname: 'h3',
                        style: '',
                        id: '',
                        label: '엔진 버전',
                        "class": 'pgt_tit '
                      }
                    }]
                  }, {
                    T: 1,
                    N: 'xf:group',
                    A: {
                      style: '',
                      id: '',
                      "class": 'release_ver'
                    },
                    E: [{
                      T: 1,
                      N: 'w2:textbox',
                      A: {
                        style: '',
                        id: 'txt_engineVersion',
                        label: '',
                        "class": 'ver_num fs16',
                        escape: 'false'
                      }
                    }]
                  }, {
                    T: 1,
                    N: 'xf:group',
                    A: {
                      style: '',
                      id: '',
                      "class": '_flex'
                    },
                    E: [{
                      T: 1,
                      N: 'w2:textbox',
                      A: {
                        style: '',
                        id: 'txt_title3',
                        label: '',
                        "class": 'ver_desc'
                      }
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'li',
                  style: '',
                  id: '',
                  "class": 'month_result'
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    style: '',
                    id: '',
                    "class": 'shadowbox'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:group',
                    A: {
                      style: '',
                      id: '',
                      "class": 'pgtbox'
                    },
                    E: [{
                      T: 1,
                      N: 'xf:group',
                      A: {
                        id: '',
                        "class": ''
                      },
                      E: [{
                        T: 1,
                        N: 'w2:textbox',
                        A: {
                          tagname: 'h3',
                          style: '',
                          id: '',
                          label: '당월실적조회',
                          "class": 'pgt_tit '
                        }
                      }]
                    }, {
                      T: 1,
                      N: 'xf:select1',
                      A: {
                        submenuSize: 'auto',
                        ref: '',
                        appearance: 'minimal',
                        disabledClass: 'w2selectbox_disabled',
                        chooseOption: '',
                        disabled: 'false',
                        style: 'width:120px;',
                        allOption: '',
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
                              cdata: '전월실적조회'
                            }]
                          }, {
                            T: 1,
                            N: 'xf:value'
                          }]
                        }]
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:group',
                    A: {
                      style: '',
                      id: '',
                      "class": 'chartbox'
                    },
                    E: [{
                      T: 1,
                      N: 'w2:fusionchart',
                      A: {
                        ref: 'data:dataList1',
                        accessibility: 'false',
                        seriesType: 'advanced',
                        actionURI: '',
                        dataList: '',
                        chartType: 'MSLine',
                        drawType: 'javascript',
                        runflashAt: 'IE6,IE7,IE8',
                        style: 'width:100%;height:381px;',
                        id: '',
                        plotColor: '#FF9066,#FFC844,#3BD0AE,#B16FEE'
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
              "class": 'right_grp',
              id: '',
              style: '',
              tagname: 'li'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'shadowbox calbox',
                id: '',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:calendar',
                A: {
                  footerDiv: 'false',
                  id: '',
                  style: 'width: 100%;height: 100%;'
                }
              }]
            }, {
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'shadowbox noti_news',
                id: '',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'pgtbox',
                  id: '',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": 'pgt_tit',
                    id: '',
                    label: 'Notice',
                    style: '',
                    tagname: 'h3'
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'pgt_right',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_miniround left',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '왼쪽'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_miniround right',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '오른쪽'
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'btn_miniround plus',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '더보기'
                      }]
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'noticelist',
                  id: '',
                  style: '',
                  tagname: ''
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    id: '',
                    style: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'tit ',
                      id: '',
                      label: '[인사발령]',
                      style: ''
                    }
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'cnt',
                      id: '',
                      label: '2020년 02월 조직개편 및 전배 공지',
                      style: ''
                    }
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'cnsubt',
                      id: '',
                      label: '2021.04.04',
                      style: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    id: '',
                    style: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'tit ',
                      id: '',
                      label: '[인사발령]',
                      style: ''
                    }
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'cnt',
                      id: '',
                      label: '2020년 02월 조직개편 및 전배 공지',
                      style: ''
                    }
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'cnsubt',
                      id: '',
                      label: '2021.04.04',
                      style: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    id: '',
                    style: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'tit category01',
                      id: '',
                      label: '[인사발령]',
                      style: ''
                    }
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'cnt',
                      id: '',
                      label: '2020년 02월 조직개편 및 전배 공지',
                      style: ''
                    }
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'cnsubt',
                      id: '',
                      label: '2021.04.04',
                      style: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    id: '',
                    style: '',
                    tagname: 'a'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'tit category02',
                      id: '',
                      label: '[인사발령]',
                      style: ''
                    }
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'cnt',
                      id: '',
                      label: '2020년 02월 조직개편 및 전배 공지',
                      style: ''
                    }
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'cnsubt',
                      id: '',
                      label: '2021.04.04',
                      style: ''
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
            "class": 'mainbox bottom',
            id: '',
            style: '',
            tagname: 'ul'
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'system_info',
              id: '',
              style: '',
              tagname: 'li'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'shadowbox',
                id: '',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'pgtbox',
                  id: '',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": 'pgt_tit fl',
                    id: '',
                    label: '시스템정보',
                    style: '',
                    tagname: 'h3'
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'pgt_right',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      id: '',
                      outerDiv: 'false',
                      style: '',
                      "class": 'btn_setting'
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '설정'
                      }]
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": 'system_tit',
                  id: '',
                  label: '권장 브라우저',
                  style: ''
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  id: '',
                  style: '',
                  "class": 'system_listbox'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    style: '',
                    id: '',
                    label: 'FireFox',
                    "class": ''
                  }
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": '',
                    id: '',
                    label: 'Safari',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": '',
                    id: '',
                    label: 'Opera',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": '',
                    id: '',
                    label: 'IE9이상',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": '',
                    id: '',
                    label: 'Chrome',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  id: '',
                  style: '',
                  "class": 'system_resolution'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    style: '',
                    id: '',
                    label: 'Tab View : 1024 X N/A <span>(가로 1024 미만은 적응형)</span>',
                    "class": '',
                    escape: 'false'
                  }
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'exchange_rate',
              id: '',
              style: '',
              tagname: 'li'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'shadowbox',
                id: '',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'pgtbox',
                  id: '',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": 'pgt_tit fl',
                    id: '',
                    label: '환율',
                    style: '',
                    tagname: 'h3'
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'pgt_right',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      outerDiv: 'false',
                      style: '',
                      id: '',
                      "class": 'btn_setting'
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '설정'
                      }]
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'w2:textbox',
                A: {
                  "class": 'flag_tit',
                  id: '',
                  label: '미국 USD',
                  style: ''
                }
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  id: '',
                  style: '',
                  "class": 'value_box'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    style: '',
                    id: '',
                    label: '1,225.70',
                    "class": ''
                  }
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    style: '',
                    id: '',
                    label: '1.70(0.14%)',
                    "class": ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  id: '',
                  "class": 'flagname_box',
                  tagname: 'ul'
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    style: '',
                    id: '',
                    tagname: 'li'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      style: '',
                      id: '',
                      label: '일본 JPY',
                      "class": 'flagname_txt flag02'
                    }
                  }, {
                    T: 1,
                    N: 'xf:group',
                    A: {
                      id: '',
                      style: 'display: flex;',
                      "class": 'flag_con_rbox'
                    },
                    E: [{
                      T: 1,
                      N: 'w2:textbox',
                      A: {
                        style: '',
                        id: '',
                        label: '997.19',
                        "class": ''
                      }
                    }, {
                      T: 1,
                      N: 'w2:textbox',
                      A: {
                        style: '',
                        id: '',
                        label: '5.47(-0.55%)',
                        "class": ''
                      }
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    id: '',
                    style: '',
                    tagname: 'li'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'flagname_txt',
                      id: '',
                      label: '유럽연합 EUR',
                      style: ''
                    }
                  }, {
                    T: 1,
                    N: 'xf:group',
                    A: {
                      id: '',
                      style: 'display: flex;'
                    },
                    E: [{
                      T: 1,
                      N: 'w2:textbox',
                      A: {
                        "class": '',
                        id: '',
                        label: '1,343.49',
                        style: ''
                      }
                    }, {
                      T: 1,
                      N: 'w2:textbox',
                      A: {
                        "class": '',
                        id: '',
                        label: '0.83(-0.06%)',
                        style: ''
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
              "class": 'today_weather',
              id: '',
              style: '',
              tagname: 'li'
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                "class": 'shadowbox',
                id: '',
                style: ''
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'pgtbox',
                  id: '',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": 'pgt_tit fl',
                    id: '',
                    label: '오늘의 날씨',
                    style: 'font-size: 14px;',
                    tagname: 'h3'
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'pgt_right _flex',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": 'txt_location',
                      id: '',
                      label: '서울특별시 마곡동',
                      style: ''
                    }
                  }, {
                    T: 1,
                    N: 'w2:anchor',
                    A: {
                      "class": 'map_link',
                      id: '',
                      outerDiv: 'false',
                      style: ''
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '위치'
                      }]
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  id: '',
                  style: '',
                  "class": 'cnt_box'
                },
                E: [{
                  T: 1,
                  N: 'xf:image',
                  A: {
                    src: '../../cm/images/contents/ico_weather01.png',
                    style: 'width: 55px;height: 43px;',
                    id: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    style: '',
                    id: '',
                    label: '10º',
                    "class": 'cnt_txt'
                  }
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    id: '',
                    "class": 'cnt_rbox'
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      style: '',
                      id: '',
                      label: '대체로 흐림',
                      "class": ''
                    }
                  }, {
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      "class": '',
                      id: '',
                      label: '최고 : 16º 최저 : 04º',
                      style: ''
                    }
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  id: '',
                  style: '',
                  "class": 'cnt_bbox'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    style: '',
                    id: '',
                    label: '업데이트 3/24 PM 02:09',
                    "class": ''
                  }
                }, {
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    outerDiv: 'false',
                    style: '',
                    id: '',
                    "class": 's_refresh'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '새로고침'
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