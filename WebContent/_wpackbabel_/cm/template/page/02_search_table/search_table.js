/*amd /cm/template/page/02_search_table/search_table.xml 12397 a98b5438ef347a9b4f554bbe421d4ec1cada4423e46319db78a8f2bfc863664a */
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
                      "class": '',
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
                      "class": '',
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
                      "class": '',
                      id: '',
                      label: '조건',
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
                      label: '기간',
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
                    N: 'w2:inputCalendar',
                    A: {
                      alt: '',
                      calendarValueType: 'yearMonthDate',
                      "class": '',
                      focusOnDateSelect: 'false',
                      footerDiv: 'true',
                      id: '',
                      renderDiv: 'true',
                      renderType: '',
                      rightAlign: 'false',
                      style: 'width:120px;'
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
                      "class": '',
                      focusOnDateSelect: 'false',
                      footerDiv: 'true',
                      id: '',
                      renderDiv: 'true',
                      renderType: '',
                      rightAlign: 'false',
                      style: 'width:120px;'
                    }
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
            }, {
              T: 1,
              N: 'xf:trigger',
              A: {
                "class": 'btn_cm ',
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
                  cdata: '초기화'
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
                  N: 'w2:textbox',
                  A: {
                    "class": 'txt_success',
                    dataType: '',
                    id: '',
                    label: 'Success',
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
                  tagname: 'th',
                  "class": 'w2tb_th '
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
                  tagname: 'td',
                  "class": 'w2tb_td'
                },
                E: [{
                  T: 1,
                  N: 'w2:attributes'
                }, {
                  T: 1,
                  N: 'w2:autoComplete',
                  A: {
                    allOption: '',
                    chooseOption: '',
                    editType: 'select',
                    id: '',
                    ref: '',
                    search: 'start',
                    style: 'width: 148px;',
                    submenuSize: 'auto',
                    useKeywordHighlight: 'false'
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
                          cdata: 'A'
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
                          cdata: 'AB'
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
                          cdata: 'ABC'
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
                          cdata: 'ABCD'
                        }]
                      }, {
                        T: 1,
                        N: 'w2:value'
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": 'txt_info',
                    dataType: '',
                    id: '',
                    label: 'Info',
                    style: ''
                  }
                }]
              }, {
                T: 1,
                N: 'xf:group',
                A: {
                  tagname: 'th',
                  "class": 'w2tb_th '
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
                  tagname: 'td',
                  "class": 'w2tb_td'
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
                  tagname: 'th',
                  "class": 'w2tb_th '
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