/*amd /cm/template/page/10_popup/popup_contents.xml 5964 ecee23b55966da978892f39799a236b19affc5572a123ea2e529487145c2d474 */
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
                wq_pglist.setCount(100);
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
          "class": 'pop_contents'
        },
        E: [{
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
              style: 'height:260px;',
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
                  cdata: '확인'
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
                  cdata: '취소'
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }]
});