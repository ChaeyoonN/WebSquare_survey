/*amd /cm/template/page/06_search_table_tab/search_table_tab.xml 9851 7d271aa4024f445353c9049e6f338882dc61fd7e0bebc9fdd90994df85b163e8 */
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
            "class": 'lybox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              adaptiveThreshold: '',
              "class": 'ly_column col_5',
              id: '',
              style: ''
            },
            E: [{
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
                    }]
                  }]
                }]
              }]
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'ly_column col_5',
              id: '',
              style: ''
            },
            E: [{
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
                "class": 'tabbox',
                id: '',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:tabControl',
                A: {
                  alwaysDraw: 'false',
                  "class": 'wq_tab',
                  confirmFalseAction: 'new',
                  confirmTrueAction: 'exist',
                  id: '',
                  style: '',
                  tabScroll: '',
                  useConfirmMessage: 'false',
                  useMoveNextTabFocus: 'false',
                  useTabKeyOnly: 'true'
                },
                E: [{
                  T: 1,
                  N: 'w2:tabs',
                  A: {
                    disabled: 'false',
                    id: 'tabs1',
                    label: '탭1',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:tabs',
                  A: {
                    disabled: 'false',
                    id: 'tabs2',
                    label: '탭2',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:tabs',
                  A: {
                    disabled: 'false',
                    id: 'tabs3',
                    label: '탭3',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:tabs',
                  A: {
                    disabled: 'false',
                    id: 'tabs4',
                    label: '탭4',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:tabs',
                  A: {
                    disabled: 'false',
                    id: 'tabs5',
                    label: '탭5',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:tabs',
                  A: {
                    disabled: 'false',
                    id: 'tabs6',
                    label: '탭6',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:tabs',
                  A: {
                    disabled: 'false',
                    id: 'tabs7',
                    label: '탭7',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:content',
                  A: {
                    alwaysDraw: 'false',
                    id: 'content1',
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
                          }]
                        }]
                      }]
                    }]
                  }]
                }, {
                  T: 1,
                  N: 'w2:content',
                  A: {
                    alwaysDraw: 'false',
                    id: 'content2',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:content',
                  A: {
                    alwaysDraw: 'false',
                    id: 'content3',
                    style: 'height:0px'
                  }
                }, {
                  T: 1,
                  N: 'w2:content',
                  A: {
                    alwaysDraw: 'false',
                    id: 'content4',
                    style: 'height:0px'
                  }
                }, {
                  T: 1,
                  N: 'w2:content',
                  A: {
                    alwaysDraw: 'false',
                    id: 'content5',
                    style: 'height:0px'
                  }
                }, {
                  T: 1,
                  N: 'w2:content',
                  A: {
                    alwaysDraw: 'false',
                    id: 'content6',
                    style: 'height:0px'
                  }
                }, {
                  T: 1,
                  N: 'w2:content',
                  A: {
                    alwaysDraw: 'false',
                    id: 'content7',
                    style: 'height:0px'
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