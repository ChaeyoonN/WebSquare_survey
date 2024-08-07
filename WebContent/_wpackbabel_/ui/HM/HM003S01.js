/*amd /ui/HM/HM003S01.xml 11956 259a9ea648bcf6102870a0e9dcae95b84aef05ca6b07cfe899c6cc20196196be */
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
            N: 'w2:aliasDataMap',
            A: {
              id: 'adm_memberBasic',
              scope: '../dma_memberBasic',
              studioSrc: '/ui/HM/HM003M01.xml'
            }
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
                var codeOptions = [{
                  code: '00004',
                  compID: 'sbx_Religion'
                }, {
                  code: '00013',
                  compID: 'sbx_SchoolCareer'
                }, {
                  code: '00022',
                  compID: 'sbx_HouseKind'
                }];
                com.data.setCommonCode($p, codeOptions);
              };
              scwin.btn_searchZipCode_onclick = function (e) {
                var rowJSON = {};
                var data = {
                  data: rowJSON,
                  callbackFn: 'scwin.searchZipCodeCallback'
                };
                var opt = {
                  id: 'H3P03',
                  popupName: '우편번호 검색',
                  width: '800',
                  height: '820'
                };
                com.win.openPopup($p, '/ui/HM/HM003P03.xml', opt, data);
              };
              scwin.searchZipCodeCallback = function (returnValue) {
                var selectedZipCode = returnValue;
                adm_memberBasic.set('ZIP_CD', selectedZipCode.ZIP_CD);
                adm_memberBasic.set('ADDRESS1', selectedZipCode.ADDRESS1);
                adm_memberBasic.set('ADDRESS2', selectedZipCode.ADDRESS2);
                ibx_address2.focus();
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
          "class": 'tbbox',
          id: 'grp_memberBasic2',
          style: ''
        },
        E: [{
          T: 1,
          N: 'xf:group',
          A: {
            adaptive: 'layout',
            adaptiveThreshold: '900',
            "class": 'w2tb tb',
            id: 'table2',
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
                style: 'width:100px;',
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
                style: 'width:80px;',
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
                style: 'width:90px;',
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
                  label: '자택전화',
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
                N: 'xf:group',
                A: {
                  "class": 'flex',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    allowChar: '0-9',
                    id: 'ibx_homePhone1',
                    maxlength: '3',
                    ref: 'data:adm_memberBasic.HOME_PHONE1',
                    style: 'width:80px;'
                  }
                }, {
                  T: 1,
                  N: 'w2:span',
                  A: {
                    id: 'span6',
                    label: '-',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:input',
                  A: {
                    allowChar: '0-9',
                    id: 'ibx_homePhone2',
                    maxlength: '4',
                    ref: 'data:adm_memberBasic.HOME_PHONE2',
                    style: 'width:80px;'
                  }
                }, {
                  T: 1,
                  N: 'w2:span',
                  A: {
                    id: 'span7',
                    label: '-',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:input',
                  A: {
                    allowChar: '0-9',
                    id: 'ibx_homePhone3',
                    maxlength: '4',
                    ref: 'data:adm_memberBasic.HOME_PHONE3',
                    style: 'width:80px;'
                  }
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
                  label: '종교',
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
                  allOption: 'false',
                  appearance: 'minimal',
                  chooseOption: 'false',
                  direction: 'auto',
                  disabled: 'false',
                  disabledClass: 'w2selectbox_disabled',
                  displayMode: 'label',
                  id: 'sbx_Religion',
                  ref: 'data:adm_memberBasic.RELIGION_CD',
                  style: '',
                  submenuSize: 'auto',
                  textAlign: 'left'
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
                  label: '주거형태',
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
                  allOption: 'false',
                  appearance: 'minimal',
                  chooseOption: 'false',
                  direction: 'auto',
                  disabled: 'false',
                  disabledClass: 'w2selectbox_disabled',
                  displayMode: 'label',
                  id: 'sbx_HouseKind',
                  ref: 'data:adm_memberBasic.HOUSE_KIND_CD',
                  style: '',
                  submenuSize: 'auto',
                  textAlign: 'left'
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
                  "class": 'req',
                  id: '',
                  label: '최종학교',
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
                  id: 'ibx_lastSchoolNm',
                  ref: 'data:adm_memberBasic.LAST_SCHOOL_NM',
                  style: 'width:100%',
                  "class": 'req',
                  mandatory: 'true'
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
                  "class": 'req',
                  id: '',
                  label: '전공',
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
                  id: 'ibx_majorNm',
                  ref: 'data:adm_memberBasic.MAJOR_NM',
                  style: 'width:100%',
                  "class": 'req',
                  mandatory: 'true'
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
                  "class": 'req',
                  id: '',
                  label: '입사학력',
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
                  allOption: 'false',
                  appearance: 'minimal',
                  chooseOption: 'false',
                  direction: 'auto',
                  disabled: 'false',
                  disabledClass: 'w2selectbox_disabled',
                  displayMode: 'label',
                  id: 'sbx_SchoolCareer',
                  ref: 'data:adm_memberBasic.SCHOOL_CAREER_CD',
                  style: '',
                  submenuSize: 'auto',
                  textAlign: 'left',
                  "class": 'req',
                  mandatory: 'true'
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
                  label: '보훈대상여부',
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
                  id: 'sbx_IsVeteranWelfare',
                  ref: 'data:adm_memberBasic.IS_VETERAN_WELFARE',
                  style: 'width:120px;',
                  submenuSize: 'auto',
                  textAlign: 'left'
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
                        cdata: '예'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:value',
                      E: [{
                        T: 4,
                        cdata: 'Y'
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
                        cdata: '아니오'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:value',
                      E: [{
                        T: 4,
                        cdata: 'N'
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
                  label: '군필여부',
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
                  id: 'sbx_IsMilitaryService',
                  ref: 'data:adm_memberBasic.IS_MILITARY_SERVICE',
                  style: 'width:120px;',
                  submenuSize: 'auto',
                  textAlign: 'left',
                  "class": ''
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
                        cdata: '예'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:value',
                      E: [{
                        T: 4,
                        cdata: 'Y'
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
                        cdata: '아니오'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:value',
                      E: [{
                        T: 4,
                        cdata: 'N'
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
                  label: '휴퇴직사휴',
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
                  id: 'ibx_retireReason',
                  ref: 'data:adm_memberBasic.RETIRE_REASON',
                  style: 'width:100%;'
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
                "class": 'w2tb_th req',
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
                  "class": 'req',
                  id: '',
                  label: '생년월일',
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
                  focusOnDateSelect: 'false',
                  footerDiv: 'false',
                  id: 'cal_birthDate',
                  mandatory: 'true',
                  minYear: '',
                  ref: 'data:adm_memberBasic.BIRTH_DATE',
                  renderDiv: 'true',
                  renderType: 'component',
                  style: 'width:120px;',
                  summary: '',
                  weekStartsOn: '0'
                }
              }, {
                T: 1,
                N: 'xf:select1',
                A: {
                  allOption: '',
                  appearance: 'minimal',
                  chooseOption: '',
                  "class": 'req',
                  direction: 'auto',
                  disabled: 'false',
                  disabledClass: 'w2selectbox_disabled',
                  displayMode: 'label',
                  id: 'sbx_IsLunar',
                  mandatory: 'true',
                  ref: 'data:adm_memberBasic.IS_LUNAR',
                  style: 'width:120px;',
                  submenuSize: 'auto',
                  textAlign: 'left'
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
                        cdata: '양'
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
                        cdata: '음'
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
                "class": 'w2tb_th req',
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
                  "class": '',
                  id: '',
                  label: '결혼여부',
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
                  "class": '',
                  direction: 'auto',
                  disabled: 'false',
                  disabledClass: 'w2selectbox_disabled',
                  displayMode: 'label',
                  id: 'sbx_IsMarriage',
                  ref: 'data:adm_memberBasic.IS_MARRIAGE',
                  style: 'width:120px;',
                  submenuSize: 'auto',
                  textAlign: 'left'
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
                        cdata: '예'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:value',
                      E: [{
                        T: 4,
                        cdata: 'Y'
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
                        cdata: '아니오'
                      }]
                    }, {
                      T: 1,
                      N: 'xf:value',
                      E: [{
                        T: 4,
                        cdata: 'N'
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
                  label: '취미',
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
                  id: 'ibx_hoppy',
                  ref: 'data:adm_memberBasic.HOPPY',
                  style: 'width:100%'
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
                  "class": '',
                  id: '',
                  label: '특기',
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
                  id: 'ibx_talent',
                  ref: 'data:adm_memberBasic.TALENT',
                  style: 'width:100%;'
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
                  "class": 'req',
                  id: '',
                  label: '주소',
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
                N: 'xf:group',
                A: {
                  "class": 'flex',
                  id: ''
                },
                E: [{
                  T: 1,
                  N: 'xf:input',
                  A: {
                    adjustMaxLength: 'false',
                    id: 'ibx_zipCd',
                    style: 'width:80px;',
                    ref: 'data:adm_memberBasic.ZIP_CD',
                    readOnly: '',
                    displayFormat: '###-###',
                    "class": 'req',
                    mandatory: 'true'
                  }
                }, {
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    "class": 'btn_cm btn_search',
                    clickEventElement: '',
                    id: 'btn_searchZipCode',
                    name: '',
                    outerDiv: 'false',
                    ref: '',
                    style: '',
                    'ev:onclick': 'scwin.btn_searchZipCode_onclick'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '검색'
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'xf:input',
                  A: {
                    id: 'ibx_address1',
                    ref: 'data:adm_memberBasic.ADDRESS1',
                    style: '',
                    readOnlyClass: '',
                    readOnly: 'false',
                    "class": 'req',
                    mandatory: 'true'
                  }
                }, {
                  T: 1,
                  N: 'xf:input',
                  A: {
                    id: 'ibx_address2',
                    ref: 'data:adm_memberBasic.ADDRESS2',
                    style: '',
                    "class": 'req',
                    mandatory: 'true'
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