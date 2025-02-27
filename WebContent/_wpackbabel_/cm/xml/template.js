/*amd /cm/xml/template.xml 43990 7c8701f2cb5ed7fc69f9b48768f91f875343dc93e2837ee0eaa923531f0cd2ae */
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
              scwin.onpageload = function () {};
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
              N: 'w2:textbox',
              A: {
                id: '',
                label: '가로 : 50%',
                style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
              }
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
              N: 'w2:textbox',
              A: {
                id: '',
                label: '가로 : 50%',
                style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
              }
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
              "class": 'ly_column col_3',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                id: '',
                label: '가로 : 30%',
                style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'ly_column col_4',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                id: '',
                label: '가로 : 40%',
                style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'ly_column col_3',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                id: '',
                label: '가로 : 30%',
                style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
              }
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'lybox col3',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'ly_column',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                id: '',
                label: '가로 : 33.3%',
                style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'ly_column',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                id: '',
                label: '가로 : 33.3%',
                style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'ly_column',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                id: '',
                label: '가로 : 33.3%',
                style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
              }
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'lybox col4',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'ly_column',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                id: '',
                label: '가로 : 25%',
                style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'ly_column',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                id: '',
                label: '가로 : 25%',
                style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'ly_column',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                id: '',
                label: '가로 : 25%',
                style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'ly_column',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                id: '',
                label: '가로 : 25%',
                style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
              }
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'lybox left_fix2',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              adaptiveThreshold: '',
              "class": 'ly_columnfix_left',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                id: '',
                label: '가로 : 200px',
                style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'ly_columnfix_right',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                id: '',
                label: '가로 : Auto',
                style: 'line-height:28px;height: 30px;text-align:center;border:1px solid #ccc;'
              }
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'lybox left_fix3',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              adaptiveThreshold: '',
              "class": 'ly_columnfix_left',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                id: '',
                label: '가로 : 300px',
                style: 'line-height:28px;height: 30px;text-align:center;width: 100%;border:1px solid #ccc;'
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'ly_columnfix_right',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                id: '',
                label: '가로 : Auto',
                style: 'line-height:28px;height: 30px;text-align:center;border:1px solid #ccc;'
              }
            }]
          }]
        }, {
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
              tagname: 'h4'
            }
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
                N: 'w2:textbox',
                A: {
                  id: '',
                  label: 'Content',
                  style: 'line-height:28px;height: 30px;text-align:center;width: 100%;'
                }
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
                N: 'w2:tabControl',
                A: {
                  alwaysDraw: 'false',
                  "class": 'wq_tab_sub',
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
                  N: 'w2:content',
                  A: {
                    alwaysDraw: 'false',
                    id: 'content1',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'w2:textbox',
                    A: {
                      id: '',
                      label: 'Content',
                      style: 'line-height:28px;height: 30px;text-align:center;width: 100%;'
                    }
                  }]
                }, {
                  T: 1,
                  N: 'w2:content',
                  A: {
                    alwaysDraw: 'false',
                    id: 'content2',
                    style: ''
                  }
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
              checkReadOnlyOnPasteEnable: '',
              "class": 'wq_gvw',
              dataList: 'data:dataList1',
              defaultCellHeight: '20',
              focusMode: 'row',
              id: '',
              scrollByColumn: 'false',
              scrollByColumnAdaptive: 'false',
              style: 'height: 150px;',
              visibleRowNum: 'all'
            },
            E: [{
              T: 1,
              N: 'w2:caption',
              A: {
                id: 'caption2',
                style: '',
                value: 'this is a grid caption.'
              }
            }, {
              T: 1,
              N: 'w2:header',
              A: {
                id: 'header2',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:row',
                A: {
                  id: 'row3',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column12',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:26px;',
                    value: '타이틀',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column11',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '타이틀',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column10',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '타이틀',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column9',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '타이틀',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column8',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '타이틀',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column7',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '타이틀',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column6',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '타이틀',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column5',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '타이틀',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column4',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '타이틀',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column3',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '타이틀',
                    width: '70'
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'w2:gBody',
              A: {
                id: 'gBody2',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:row',
                A: {
                  id: 'row4',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col1',
                    inputType: 'text',
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
                    style: 'height:20px',
                    value: '',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col3',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:20px',
                    value: '',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col4',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:20px',
                    value: '',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col5',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:20px',
                    value: '',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col6',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:20px',
                    value: '',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col7',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:20px',
                    value: '',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col8',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:20px',
                    value: '',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col9',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:20px',
                    value: '',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col10',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:20px',
                    value: '',
                    width: '70'
                  }
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
              checkReadOnlyOnPasteEnable: '',
              "class": 'wq_gvw',
              dataList: 'data:dataList1',
              defaultCellHeight: '20',
              focusMode: 'row',
              id: '',
              keepDefaultColumnWidth: 'true',
              rowNumHeaderValue: 'No',
              rowNumVisible: 'true',
              rowNumWidth: '50',
              rowStatusHeaderValue: '상태',
              rowStatusVisible: 'true',
              rowStatusWidth: '50',
              scrollByColumn: 'false',
              scrollByColumnAdaptive: 'false',
              style: 'height: 150px;',
              visibleRowNum: 'all'
            },
            E: [{
              T: 1,
              N: 'w2:caption',
              A: {
                id: 'caption2',
                style: '',
                value: 'this is a grid caption.'
              }
            }, {
              T: 1,
              N: 'w2:header',
              A: {
                id: 'header2',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:row',
                A: {
                  id: 'row3',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column11',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height: 26px',
                    value: '타이틀',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column10',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '타이틀',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column9',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '타이틀',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column8',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '타이틀',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column7',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '타이틀',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column6',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '타이틀',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column5',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '타이틀',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column4',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '타이틀',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column3',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '타이틀',
                    width: '70'
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'w2:gBody',
              A: {
                id: 'gBody2',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:row',
                A: {
                  id: 'row4',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col2',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height: 26px',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col3',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:20px',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col4',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:20px',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col5',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:20px',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col6',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:20px',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col7',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:20px',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col8',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:20px',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col9',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:20px',
                    width: '70'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'col10',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: 'height:20px',
                    width: '70'
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
            "class": 'tvwbox ',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:treeview',
            A: {
              "class": 'wq_tvw',
              dataType: 'listed',
              id: '',
              style: 'height:300px;',
              tooltipGroupClass: 'false'
            },
            E: [{
              T: 1,
              N: 'w2:node',
              E: [{
                T: 1,
                N: 'w2:label',
                E: [{
                  T: 4,
                  cdata: 'New'
                }]
              }, {
                T: 1,
                N: 'w2:value'
              }, {
                T: 1,
                N: 'w2:folder'
              }, {
                T: 1,
                N: 'w2:checkbox'
              }, {
                T: 1,
                N: 'w2:checkboxDisabled'
              }, {
                T: 1,
                N: 'w2:image'
              }, {
                T: 1,
                N: 'w2:iconImage'
              }, {
                T: 1,
                N: 'w2:selectedImage'
              }, {
                T: 1,
                N: 'w2:expandedImage'
              }, {
                T: 1,
                N: 'w2:leafImage'
              }, {
                T: 1,
                N: 'w2:node',
                E: [{
                  T: 1,
                  N: 'w2:label',
                  E: [{
                    T: 4,
                    cdata: 'New'
                  }]
                }, {
                  T: 1,
                  N: 'w2:value'
                }, {
                  T: 1,
                  N: 'w2:folder'
                }, {
                  T: 1,
                  N: 'w2:checkbox'
                }, {
                  T: 1,
                  N: 'w2:checkboxDisabled'
                }, {
                  T: 1,
                  N: 'w2:image'
                }, {
                  T: 1,
                  N: 'w2:iconImage'
                }, {
                  T: 1,
                  N: 'w2:selectedImage'
                }, {
                  T: 1,
                  N: 'w2:expandedImage'
                }, {
                  T: 1,
                  N: 'w2:leafImage'
                }, {
                  T: 1,
                  N: 'w2:node',
                  E: [{
                    T: 1,
                    N: 'w2:label',
                    E: [{
                      T: 4,
                      cdata: 'New'
                    }]
                  }, {
                    T: 1,
                    N: 'w2:value'
                  }, {
                    T: 1,
                    N: 'w2:folder'
                  }, {
                    T: 1,
                    N: 'w2:checkbox'
                  }, {
                    T: 1,
                    N: 'w2:checkboxDisabled'
                  }, {
                    T: 1,
                    N: 'w2:image'
                  }, {
                    T: 1,
                    N: 'w2:iconImage'
                  }, {
                    T: 1,
                    N: 'w2:selectedImage'
                  }, {
                    T: 1,
                    N: 'w2:expandedImage'
                  }, {
                    T: 1,
                    N: 'w2:leafImage'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'w2:node',
              E: [{
                T: 1,
                N: 'w2:label',
                E: [{
                  T: 4,
                  cdata: 'New'
                }]
              }, {
                T: 1,
                N: 'w2:value'
              }, {
                T: 1,
                N: 'w2:folder'
              }, {
                T: 1,
                N: 'w2:checkbox'
              }, {
                T: 1,
                N: 'w2:checkboxDisabled'
              }, {
                T: 1,
                N: 'w2:image'
              }, {
                T: 1,
                N: 'w2:iconImage'
              }, {
                T: 1,
                N: 'w2:selectedImage'
              }, {
                T: 1,
                N: 'w2:expandedImage'
              }, {
                T: 1,
                N: 'w2:leafImage'
              }, {
                T: 1,
                N: 'w2:node',
                E: [{
                  T: 1,
                  N: 'w2:label',
                  E: [{
                    T: 4,
                    cdata: 'New'
                  }]
                }, {
                  T: 1,
                  N: 'w2:value'
                }, {
                  T: 1,
                  N: 'w2:folder'
                }, {
                  T: 1,
                  N: 'w2:checkbox'
                }, {
                  T: 1,
                  N: 'w2:checkboxDisabled'
                }, {
                  T: 1,
                  N: 'w2:image'
                }, {
                  T: 1,
                  N: 'w2:iconImage'
                }, {
                  T: 1,
                  N: 'w2:selectedImage'
                }, {
                  T: 1,
                  N: 'w2:expandedImage'
                }, {
                  T: 1,
                  N: 'w2:leafImage'
                }, {
                  T: 1,
                  N: 'w2:node',
                  E: [{
                    T: 1,
                    N: 'w2:label',
                    E: [{
                      T: 4,
                      cdata: 'New'
                    }]
                  }, {
                    T: 1,
                    N: 'w2:value'
                  }, {
                    T: 1,
                    N: 'w2:folder'
                  }, {
                    T: 1,
                    N: 'w2:checkbox'
                  }, {
                    T: 1,
                    N: 'w2:checkboxDisabled'
                  }, {
                    T: 1,
                    N: 'w2:image'
                  }, {
                    T: 1,
                    N: 'w2:iconImage'
                  }, {
                    T: 1,
                    N: 'w2:selectedImage'
                  }, {
                    T: 1,
                    N: 'w2:expandedImage'
                  }, {
                    T: 1,
                    N: 'w2:leafImage'
                  }]
                }]
              }]
            }, {
              T: 1,
              N: 'w2:node',
              E: [{
                T: 1,
                N: 'w2:label',
                E: [{
                  T: 4,
                  cdata: 'New'
                }]
              }, {
                T: 1,
                N: 'w2:value'
              }, {
                T: 1,
                N: 'w2:folder'
              }, {
                T: 1,
                N: 'w2:checkbox'
              }, {
                T: 1,
                N: 'w2:checkboxDisabled'
              }, {
                T: 1,
                N: 'w2:image'
              }, {
                T: 1,
                N: 'w2:iconImage'
              }, {
                T: 1,
                N: 'w2:selectedImage'
              }, {
                T: 1,
                N: 'w2:expandedImage'
              }, {
                T: 1,
                N: 'w2:leafImage'
              }, {
                T: 1,
                N: 'w2:node',
                E: [{
                  T: 1,
                  N: 'w2:label',
                  E: [{
                    T: 4,
                    cdata: 'New'
                  }]
                }, {
                  T: 1,
                  N: 'w2:value'
                }, {
                  T: 1,
                  N: 'w2:folder'
                }, {
                  T: 1,
                  N: 'w2:checkbox'
                }, {
                  T: 1,
                  N: 'w2:checkboxDisabled'
                }, {
                  T: 1,
                  N: 'w2:image'
                }, {
                  T: 1,
                  N: 'w2:iconImage'
                }, {
                  T: 1,
                  N: 'w2:selectedImage'
                }, {
                  T: 1,
                  N: 'w2:expandedImage'
                }, {
                  T: 1,
                  N: 'w2:leafImage'
                }, {
                  T: 1,
                  N: 'w2:node',
                  E: [{
                    T: 1,
                    N: 'w2:label',
                    E: [{
                      T: 4,
                      cdata: 'New'
                    }]
                  }, {
                    T: 1,
                    N: 'w2:value'
                  }, {
                    T: 1,
                    N: 'w2:folder'
                  }, {
                    T: 1,
                    N: 'w2:checkbox'
                  }, {
                    T: 1,
                    N: 'w2:checkboxDisabled'
                  }, {
                    T: 1,
                    N: 'w2:image'
                  }, {
                    T: 1,
                    N: 'w2:iconImage'
                  }, {
                    T: 1,
                    N: 'w2:selectedImage'
                  }, {
                    T: 1,
                    N: 'w2:expandedImage'
                  }, {
                    T: 1,
                    N: 'w2:leafImage'
                  }]
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
                  N: 'w2:upload',
                  A: {
                    "class": '',
                    disabled: '',
                    'ev:onInputValueChange': 'scwin.upd_singleFileUpload_onInputValueChange',
                    'ev:ondone': 'scwin.upd_singleFileUpload_ondone',
                    id: 'upload5',
                    imageStyle: '',
                    inputStyle: '',
                    style: 'width: 250px;',
                    type: ''
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
                  N: 'xf:select1',
                  A: {
                    allOption: '',
                    appearance: 'minimal',
                    chooseOption: '',
                    "class": '',
                    direction: 'auto',
                    disabled: 'false',
                    disabledClass: 'w2selectbox_disabled',
                    id: '',
                    ref: '',
                    renderType: '',
                    style: 'width:100%;',
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
                  N: 'xf:textarea',
                  A: {
                    "class": '',
                    id: '',
                    placeholder: '',
                    style: 'width:100%;height: 82px;'
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
                    "class": 'tar',
                    dataType: 'number',
                    editType: '',
                    id: '',
                    placeholder: '',
                    style: 'width:148px;',
                    type: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:textbox',
                  A: {
                    "class": 'tit',
                    id: '',
                    label: '원',
                    style: ''
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
                  N: 'xf:group',
                  A: {
                    "class": 'flex',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:input',
                    A: {
                      "class": '',
                      id: '',
                      placeholder: '',
                      style: 'width:100%;'
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
                      style: 'width:100%;'
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
                      style: '',
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
                  N: 'xf:group',
                  A: {
                    "class": 'flex',
                    id: '',
                    style: ''
                  },
                  E: [{
                    T: 1,
                    N: 'xf:input',
                    A: {
                      "class": '',
                      id: '',
                      placeholder: '',
                      style: 'width:100%;'
                    }
                  }, {
                    T: 1,
                    N: 'xf:input',
                    A: {
                      "class": 'flex_no',
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
                  N: 'w2:span',
                  A: {
                    id: '',
                    label: '출력텍스트입니다. ',
                    style: ''
                  }
                }]
              }]
            }]
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
          }, {
            T: 1,
            N: 'w2:textbox',
            A: {
              "class": 'txt_error',
              dataType: '',
              id: '',
              label: 'Info',
              style: ''
            }
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'msg_box error',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'txt_msg',
                "for": '',
                id: '',
                label: '에러 메시지',
                style: '',
                tagname: ''
              }
            }, {
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'txt_con',
                "for": '',
                id: '',
                label: '내용',
                style: '',
                tagname: ''
              }
            }]
          }]
        }]
      }]
    }]
  }]
});