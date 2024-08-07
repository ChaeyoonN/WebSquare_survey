/*amd /cm/template/page/03_search_table_grid/search_table_grid.xml 17473 1c02182eb4b5dce6b32f46fa904fe32f1f77d51c4f8e7d8c860ee65236503f75 */
define({
  declaration: {
    A: {
      version: '1.0',
      encoding: 'UTF-8',
      standalone: 'no'
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
                  dataType: 'text',
                  id: 'col2',
                  name: 'name2'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  dataType: 'text',
                  id: 'col3',
                  name: 'name3'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  dataType: 'text',
                  id: 'col4',
                  name: 'name4'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  dataType: 'text',
                  id: 'col5',
                  name: 'name5'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  dataType: 'text',
                  id: 'col6',
                  name: 'name6'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  dataType: 'text',
                  id: 'col7',
                  name: 'name7'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  dataType: 'text',
                  id: 'col8',
                  name: 'name8'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  dataType: 'text',
                  id: 'col9',
                  name: 'name9'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  dataType: 'text',
                  id: 'col10',
                  name: 'name10'
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
                N: 'w2:row'
              }, {
                T: 1,
                N: 'w2:row'
              }, {
                T: 1,
                N: 'w2:row'
              }, {
                T: 1,
                N: 'w2:row'
              }, {
                T: 1,
                N: 'w2:row'
              }, {
                T: 1,
                N: 'w2:row'
              }, {
                T: 1,
                N: 'w2:row'
              }, {
                T: 1,
                N: 'w2:row'
              }, {
                T: 1,
                N: 'w2:row'
              }, {
                T: 1,
                N: 'w2:row'
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
                pageList1.setCount(100);
                $('.btn_fav').click(function () {
                  $('.btn_fav').toggleClass('on');
                });
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
          "class": 'sub_contents ',
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
            N: 'xf:trigger',
            A: {
              "class": 'btn_fav',
              id: '',
              style: '',
              type: 'button'
            },
            E: [{
              T: 1,
              N: 'xf:label'
            }]
          }, {
            T: 1,
            N: 'w2:textbox',
            A: {
              "class": 'pgt_tit',
              id: '',
              label: '화면타이틀',
              style: '',
              tagname: ''
            }
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'breadcrumb',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                id: '',
                style: '',
                tagname: 'ul'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'home',
                  id: '',
                  style: '',
                  tagname: 'li'
                },
                E: [{
                  T: 1,
                  N: 'w2:anchor',
                  A: {
                    id: '',
                    outerDiv: 'false',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: 'Home'
                    }]
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
                  N: 'w2:anchor',
                  A: {
                    id: '',
                    outerDiv: 'false',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '1Depth Menu'
                    }]
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
                  N: 'w2:anchor',
                  A: {
                    id: '',
                    outerDiv: 'false',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: '2Depth Menu'
                    }]
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
                  N: 'w2:span',
                  A: {
                    id: '',
                    label: '3Depth Menu',
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
            "class": 'shbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'shbox_inner',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:group',
              A: {
                adaptive: 'layout',
                adaptiveThreshold: '768',
                "class": 'w2tb tb ',
                id: '',
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
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": '',
                  id: '',
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
                      "class": 'req',
                      id: '',
                      label: '조회조건',
                      style: ''
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
                      allOption: 'true',
                      appearance: 'minimal',
                      chooseOption: '',
                      "class": 'req',
                      direction: 'auto',
                      disabled: 'false',
                      disabledClass: 'w2selectbox_disabled',
                      id: '',
                      ref: '',
                      renderType: '',
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
                            cdata: 'new row'
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
                            cdata: 'new row'
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
                            cdata: 'new row'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value'
                        }]
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:select1',
                    A: {
                      allOption: 'true',
                      appearance: 'minimal',
                      chooseOption: '',
                      "class": 'req',
                      direction: 'auto',
                      disabled: 'false',
                      disabledClass: 'w2selectbox_disabled',
                      id: '',
                      ref: '',
                      renderType: '',
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
                            cdata: 'new row'
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
                            cdata: 'new row'
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
                            cdata: 'new row'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value'
                        }]
                      }]
                    }]
                  }, {
                    T: 1,
                    N: 'xf:trigger',
                    A: {
                      "class": 'btn_cm ',
                      id: '',
                      style: '',
                      type: 'button'
                    },
                    E: [{
                      T: 1,
                      N: 'xf:label',
                      E: [{
                        T: 4,
                        cdata: '조회'
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
                    N: 'w2:textbox',
                    A: {
                      "class": '',
                      id: '',
                      label: '조회조건',
                      style: ''
                    }
                  }]
                }, {
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'w2tb_td',
                    id: '',
                    style: '',
                    tagname: 'td'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:select1',
                    A: {
                      appearance: 'full',
                      cols: '',
                      disabled: '',
                      id: '',
                      ref: '',
                      renderType: 'radiogroup',
                      rows: '',
                      selectedIndex: '1',
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
                            cdata: '항목1'
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
                            cdata: '항목2'
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
                            cdata: '항목3'
                          }]
                        }, {
                          T: 1,
                          N: 'xf:value'
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
              "class": 'btn_shbox',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm sch',
                disabled: '',
                escape: 'false',
                id: '',
                style: '',
                type: 'button'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '조회'
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
              label: '서브타이틀',
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
                id: '',
                style: '',
                type: 'button'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '행복사'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm  row_add',
                id: '',
                style: '',
                type: 'button'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '행추가'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm  row_del',
                id: '',
                style: '',
                type: 'button'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '행삭제'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm  upload',
                id: '',
                style: '',
                type: 'button'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '업로드'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm download',
                id: '',
                style: '',
                type: 'button'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '다운로드'
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
              autoFitMinWidth: '968',
              captionTitle: '',
              checkReadOnlyOnCut: '',
              "class": 'wq_gvw',
              dataList: 'data:dataList1',
              evenRowBackgroundColor: '',
              filterFocusMode: '',
              id: '',
              keepDefaultColumnWidth: 'true',
              oddRowBackgroundColor: '',
              overflowX: '',
              rowNumBackgroundColor: '',
              rowNumHeaderValue: 'No',
              rowNumVisible: 'true',
              rowNumWidth: '50',
              rowStatusHeaderValue: '상태',
              rowStatusVisible: 'true',
              rowStatusWidth: '50',
              scrollByColumn: 'false',
              scrollByColumnAdaptive: 'false',
              selectedCellColor: '',
              selectedCellOverColor: '',
              style: 'height:150px;',
              titleAuto: 'true',
              visibleRowNum: '10'
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
                    id: 'column48',
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
                    style: '',
                    value: '필수',
                    width: '90'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column13',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: 'AutoComplete',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column12',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '진행상태',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column39',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: 'Select',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column36',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: 'Calendar',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column51',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: 'Button',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    colSpan: '1',
                    displayMode: 'label',
                    id: 'column42',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    rowSpan: '',
                    style: '',
                    value: 'Search',
                    width: '50'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    colSpan: '1',
                    displayMode: 'label',
                    id: 'column57',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    rowSpan: '',
                    style: '',
                    value: 'Link',
                    width: '100'
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
                    id: 'col1',
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
                    id: 'col2',
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
                    allOption: '',
                    blockSelect: 'false',
                    chooseOption: '',
                    displayMode: 'label',
                    id: 'col5',
                    inputType: 'autoComplete',
                    ref: '',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '',
                    width: '70'
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
                          cdata: '대'
                        }]
                      }, {
                        T: 1,
                        N: 'w2:value'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:item',
                      E: [{
                        T: 1,
                        N: 'w2:label',
                        E: [{
                          T: 4,
                          cdata: '대한'
                        }]
                      }, {
                        T: 1,
                        N: 'w2:value'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:item',
                      E: [{
                        T: 1,
                        N: 'w2:label',
                        E: [{
                          T: 4,
                          cdata: '대한민'
                        }]
                      }, {
                        T: 1,
                        N: 'w2:value'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:item',
                      E: [{
                        T: 1,
                        N: 'w2:label',
                        E: [{
                          T: 4,
                          cdata: '대한민국'
                        }]
                      }, {
                        T: 1,
                        N: 'w2:value'
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    "class": 'bgGreen',
                    displayMode: 'label',
                    id: 'col6',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '진행중',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    allOption: '',
                    blockSelect: 'false',
                    chooseOption: '',
                    displayMode: 'label',
                    id: 'col7',
                    inputType: 'select',
                    ref: '',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '',
                    valueType: '',
                    viewType: 'icon',
                    width: '70'
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
                          cdata: 'new row'
                        }]
                      }, {
                        T: 1,
                        N: 'w2:value'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:item',
                      E: [{
                        T: 1,
                        N: 'w2:label',
                        E: [{
                          T: 4,
                          cdata: 'new row'
                        }]
                      }, {
                        T: 1,
                        N: 'w2:value'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:item',
                      E: [{
                        T: 1,
                        N: 'w2:label',
                        E: [{
                          T: 4,
                          cdata: 'new row'
                        }]
                      }, {
                        T: 1,
                        N: 'w2:value'
                      }]
                    }, {
                      T: 1,
                      N: 'w2:item',
                      E: [{
                        T: 1,
                        N: 'w2:label',
                        E: [{
                          T: 4,
                          cdata: 'new row'
                        }]
                      }, {
                        T: 1,
                        N: 'w2:value'
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    calendarValueType: '',
                    displayMode: 'label',
                    fixColumnWidth: '',
                    id: 'col8',
                    inputType: 'calendar',
                    removeBorderStyle: 'false',
                    style: '',
                    typeGetter: '',
                    value: '',
                    viewType: 'icon',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col9',
                    inputType: 'button',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '버튼',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    alt: '검색',
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col10',
                    imageSrc: '/cm/images/base/btn_search.png',
                    inputType: 'textImage',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '',
                    viewType: 'icon',
                    width: '50'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    alt: '링크',
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column58',
                    imageSrc: '/cm/images/base/btn_file.png',
                    inputType: 'textImage',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '',
                    viewType: 'icon'
                  }
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'w2:pageList',
            A: {
              "class": 'wq_pglist',
              displayButtonType: 'display',
              displayFormat: '#',
              id: 'pageList1',
              pageSize: '10',
              pagingType: '0',
              style: ''
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
              label: '서브타이틀',
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
                "class": 'btn_cm ',
                id: '',
                style: '',
                type: 'button'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '업무버튼'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm ',
                id: '',
                style: '',
                type: 'button'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '업무버튼'
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
              adaptive: 'layout',
              adaptiveThreshold: '600',
              "class": 'w2tb tb',
              id: '',
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
                tagname: 'colgroup'
              },
              E: [{
                T: 1,
                N: 'xf:group',
                A: {
                  style: 'width:150px;',
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
                  style: 'width:150px;',
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
                  "class": 'w2tb_th ',
                  style: '',
                  tagname: 'th'
                },
                E: [{
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": 'req',
                    id: '',
                    label: '테이블헤더',
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
                    id: '',
                    placeholder: '',
                    style: 'width:148px;'
                  }
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": 'txt_warning',
                    dataType: '',
                    id: '',
                    label: 'Warning',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th ',
                  tagname: 'th'
                },
                E: [{
                  T: 1,
                  N: 'w2:attributes'
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": '',
                    id: '',
                    label: '테이블헤더',
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
                  N: 'w2:attributes'
                }, {
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: '',
                    renderType: 'radiogroup',
                    rows: '',
                    selectedIndex: '1',
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
                          cdata: 'Atype'
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
                          cdata: 'Btype'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value'
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
                  "class": 'w2tb_th ',
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
                    label: '테이블헤더',
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
                      text: '1'
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
                    "class": '',
                    id: '',
                    placeholder: '',
                    style: 'width:148px;'
                  }
                }, {
                  T: 1,
                  N: 'xf:trigger',
                  A: {
                    "class": 'btn_cm btn_search ',
                    id: '',
                    style: '',
                    type: 'button'
                  },
                  E: [{
                    T: 1,
                    N: 'xf:label',
                    E: [{
                      T: 4,
                      cdata: 'Search'
                    }]
                  }]
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  "class": 'w2tb_th ',
                  tagname: 'th'
                },
                E: [{
                  T: 1,
                  N: 'w2:attributes'
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": '',
                    id: '',
                    label: '테이블헤더',
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
                  N: 'w2:attributes'
                }, {
                  T: 1,
                  N: 'w2:inputCalendar',
                  A: {
                    calendarValueType: 'yearMonthDate',
                    focusOnDateSelect: 'false',
                    footerDiv: 'true',
                    id: '',
                    renderDiv: 'true',
                    renderType: '',
                    rightAlign: 'false',
                    style: 'width: 120px;'
                  }
                }, {
                  T: 1,
                  N: 'w2:span',
                  A: {
                    id: '',
                    label: '~',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:inputCalendar',
                  A: {
                    calendarValueType: 'yearMonthDate',
                    focusOnDateSelect: 'false',
                    footerDiv: 'true',
                    id: '',
                    renderDiv: 'true',
                    renderType: '',
                    rightAlign: 'false',
                    style: 'width: 120px;'
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
                  "class": 'w2tb_th ',
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
                    label: '테이블헤더',
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
                  N: 'w2:attributes'
                }, {
                  T: 1,
                  N: 'xf:select',
                  A: {
                    appearance: 'full',
                    cols: '',
                    disabled: '',
                    id: '',
                    ref: '',
                    renderType: 'checkboxgroup',
                    rows: '',
                    selectedindex: '1',
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
                          cdata: 'Atype'
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
                          cdata: 'Btype'
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
                  "class": 'w2tb_th ',
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
                    label: '테이블헤더',
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
                  N: 'w2:attributes'
                }, {
                  T: 1,
                  N: 'xf:input',
                  A: {
                    "class": '',
                    id: '',
                    placeholder: '',
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
                  "class": 'w2tb_th ',
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
                    label: '테이블헤더',
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
                  N: 'xf:input',
                  A: {
                    "class": '',
                    id: '',
                    placeholder: '',
                    style: 'width:148px;'
                  }
                }, {
                  T: 1,
                  N: 'w2:span',
                  A: {
                    id: '',
                    label: '@',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'xf:input',
                  A: {
                    "class": '',
                    id: '',
                    placeholder: '',
                    style: 'width:148px;'
                  }
                }, {
                  T: 1,
                  N: 'xf:select1',
                  A: {
                    allOption: 'true',
                    appearance: 'minimal',
                    chooseOption: '',
                    "class": '',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    id: '',
                    ref: '',
                    renderType: '',
                    style: 'width: 148px;',
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
                          cdata: '직접입력'
                        }]
                      }, {
                        T: 1,
                        N: 'xf:value'
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
            "class": 'btnbox',
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
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm',
                id: '',
                style: '',
                type: 'button'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '업무버튼'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm',
                id: '',
                style: '',
                type: 'button'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '업무버튼'
                }]
              }]
            }, {
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'bar_btndiv',
                id: '',
                label: '',
                style: ''
              }
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm pt',
                id: '',
                style: '',
                type: 'button'
              },
              E: [{
                T: 1,
                N: 'xf:label',
                E: [{
                  T: 4,
                  cdata: '저장'
                }]
              }]
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm ',
                id: '',
                style: '',
                type: 'button'
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
    }]
  }]
});