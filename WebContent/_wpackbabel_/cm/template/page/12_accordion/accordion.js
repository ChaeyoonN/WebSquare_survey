/*amd /cm/template/page/12_accordion/accordion.xml 8219 9f3b49fcc4d84835a9a582c582f25eecbc13490862f950e7828fc6c635270f39 */
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
              repeatNode: 'map',
              id: 'dataList1',
              saveRemovedData: 'true'
            },
            E: [{
              T: 1,
              N: 'w2:columnInfo',
              E: [{
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col1',
                  name: 'name1',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col2',
                  name: 'name2',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col3',
                  name: 'name3',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col4',
                  name: 'name4',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col5',
                  name: 'name5',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col6',
                  name: 'name6',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col7',
                  name: 'name7',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col8',
                  name: 'name8',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col9',
                  name: 'name9',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'col10',
                  name: 'name10',
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
          id: '',
          style: '',
          "class": 'sub_contents '
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
            "class": 'aodbox',
            id: ''
          },
          E: [{
            T: 1,
            N: 'w2:accordion',
            A: {
              "class": 'wq_aod',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:panels',
              A: {
                "class": '',
                id: 'panels1',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:panelTitle',
                A: {
                  "class": '',
                  id: 'panelTitle1',
                  label: '웹스퀘어5 개발자 온라인 교육 과정',
                  style: ''
                }
              }, {
                T: 1,
                N: 'w2:panelContent',
                A: {
                  "class": '',
                  id: 'panelContent1',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'tbbox',
                    id: '',
                    style: 'margin-bottom:0'
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
                            "class": '',
                            id: '',
                            label: '10:00~10:45',
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
                            label: '11:00~11:45',
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
                            label: '13:30~14:15',
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
                            label: '14:30~15:15',
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
                            label: '15:30~16:15',
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
                            label: '16:15~16:40',
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
                    }]
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'w2:panels',
              A: {
                "class": '',
                id: 'panels2',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:panelTitle',
                A: {
                  id: 'panelTitle2',
                  label: '웹스퀘어5 퍼블리셔 교육 과정',
                  style: ''
                }
              }, {
                T: 1,
                N: 'w2:panelContent',
                A: {
                  id: 'panelContent2',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'xf:group',
                  A: {
                    "class": 'tbbox',
                    id: '',
                    style: 'margin-bottom:0'
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
                            "class": '',
                            id: '',
                            label: '10:00~10:45',
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
                            label: '11:00~11:45',
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
                            label: '13:30~14:15',
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
                            label: '14:30~15:15',
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
                            label: '15:30~16:15',
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
                            label: '16:15~16:40',
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
  }]
});