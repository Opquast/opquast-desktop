var rulesets = {
  "10058": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "APPLET_WO_FILLED_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun APPLET avec ALT vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un APPLET avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA": {
      "onfalse": {
        "comment": "aucun AREA", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "AREA_WO_FILLED_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun AREA avec ALT vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un AREA avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un AREA", 
        "result": "i"
      }
    }, 
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_WO_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun IMG avec ALT vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_IMAGE_WO_FILLED_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type IMAGE sans ALT non vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type IMAGE sans ALT non vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un INPUT de type IMAGE", 
        "result": "i"
      }
    }
  }, 
  "10060": {
    "AREA": {
      "onfalse": {
        "comment": "aucun AREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type IMAGE", 
        "result": "i"
      }
    }
  }, 
  "10061": {
    "APPLET_IN_A": {
      "onfalse": {
        "comment": "aucun APPLET dans un A", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET dans un A", 
        "result": "i"
      }
    }, 
    "APPLET_IN_BUTTON": {
      "onfalse": {
        "comment": "aucun APPLET dans un BUTTON", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET dans un BUTTON", 
        "result": "i"
      }
    }, 
    "EMBED_IN_A": {
      "onfalse": {
        "comment": "aucun EMBED dans un A", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED dans un A", 
        "result": "i"
      }
    }, 
    "EMBED_IN_BUTTON": {
      "onfalse": {
        "comment": "aucun EMBED dans un BUTTON", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED dans un BUTTON", 
        "result": "i"
      }
    }, 
    "IMG_IN_A": {
      "onfalse": {
        "comment": "aucun IMG dans un A", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG dans un A", 
        "result": "i"
      }
    }, 
    "IMG_IN_BUTTON": {
      "onfalse": {
        "comment": "aucun IMG dans un BUTTON", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG dans un BUTTON", 
        "result": "i"
      }
    }, 
    "OBJECT_IN_A": {
      "onfalse": {
        "comment": "aucun OBJECT dans un A", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT dans un A", 
        "result": "i"
      }
    }, 
    "OBJECT_IN_BUTTON": {
      "onfalse": {
        "comment": "aucun OBJECT dans un BUTTON", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT dans un BUTTON", 
        "result": "i"
      }
    }
  }, 
  "10062": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "10063": {
    "APPLET_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun APPLET avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "APPLET_W_MORE_THAN_120_CHAR_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun APPLET avec ALT de plus de 120 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un APPLET avec ALT de plus de 120 caract\u00e8res", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un APPLET avec ALT non vide", 
        "result": "i"
      }
    }, 
    "AREA_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun AREA avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "AREA_W_MORE_THAN_120_CHAR_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun AREA avec ALT de plus de 120 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un AREA avec ALT de plus de 120 caract\u00e8res", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un AREA avec ALT non vide", 
        "result": "i"
      }
    }, 
    "IMG_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun IMG avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_W_MORE_THAN_120_CHAR_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun IMG avec ALT de plus de 120 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec ALT de plus de 120 caract\u00e8res", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un IMG avec ALT non vide", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_IMAGE_W_MORE_THAN_120_CHAR_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type IMAGE avec ALT de plus de 120 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type IMAGE avec ALT de plus de 120 caract\u00e8res", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type IMAG avec ALT non vide", 
        "result": "i"
      }
    }
  }, 
  "10064": {
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_WO_VALID_LONGDESC": {
            "onfalse": {
              "comment": "aucun IMG avec un attribut LONGDESC invalide", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec un attribut LONGDESC invalide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "10065": {
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "10066": {
    "IMG_W_FILLED_ALT_ATTR_OR_FILLED_LONGDESC_ATTR": {
      "onfalse": {
        "comment": "aucun IMG avec ALT ou LONGDESC non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG avec ALT ou LONGDESC non vide", 
        "result": "i"
      }
    }
  }, 
  "10067": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "10069": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "10070": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type IMAGE", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "10071": {
    "IMG_W_ISMAP_ATTR": {
      "onfalse": {
        "comment": "aucun IMG avec un attribut ISMAP", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG avec un attribut ISMAP", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE_W_ISMAP_TITLE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE avec un attribut ISMAP", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type IMAGE avec un attribut ISMAP", 
        "result": "i"
      }
    }
  }, 
  "10072": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "10073": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "10074": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "10075": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "10089": {
    "DOCTYPE_PRESENT": {
      "onfalse": {
        "comment": "le DOCTYPE est absent ou mal positionn\u00e9", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le DOCTYPE est pr\u00e9sent", 
        "result": "c"
      }
    }
  }, 
  "10090": {
    "DOCTYPE_PRESENT": {
      "onfalse": {
        "comment": "le DOCTYPE est absent ou mal positionn\u00e9", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "le DOCTYPE est pr\u00e9sent", 
        "result": "c"
      }
    }
  }, 
  "10091": {
    "DOCTYPE_PRESENT": {
      "onfalse": {
        "comment": "le DOCTYPE est absent ou mal positionn\u00e9", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "DOCTYPE_VALID": {
            "onfalse": {
              "comment": "le DOCTYPE est absent, mal \u00e9crit ou mal positionn\u00e9", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "le DOCTYPE est pr\u00e9sent", 
              "result": "c"
            }
          }
        }, 
        "comment": "le DOCTYPE est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "10092": {
    "DOCTYPE_HTML_VALID": {
      "onfalse": {
        "comment": "le code est conforme au DOCTYPE", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le code n'est pas conforme au DOCTYPE", 
        "result": "c"
      }
    }
  }, 
  "10093": {
    "ALIGN_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALIGN", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALIGN", 
        "result": "nc"
      }
    }, 
    "ALINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALINK", 
        "result": "nc"
      }
    }, 
    "BACKGROUND_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BACKGROUND", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BACKGROUND", 
        "result": "nc"
      }
    }, 
    "BASEFONT": {
      "onfalse": {
        "comment": "aucun BASEFONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BASEFONT", 
        "result": "nc"
      }
    }, 
    "BASEFONT_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BASEFONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BASEFONT", 
        "result": "nc"
      }
    }, 
    "BGCOLOR_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BGCOLOR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BGCOLOR", 
        "result": "nc"
      }
    }, 
    "BLINK": {
      "onfalse": {
        "comment": "aucun BLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BLINK", 
        "result": "nc"
      }
    }, 
    "BORDER_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BORDER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BORDER", 
        "result": "nc"
      }
    }, 
    "CENTER": {
      "onfalse": {
        "comment": "aucun CENTER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un CENTER", 
        "result": "nc"
      }
    }, 
    "COLOR_ATTR": {
      "onfalse": {
        "comment": "aucun attribut COLOR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut COLOR", 
        "result": "nc"
      }
    }, 
    "FONT": {
      "onfalse": {
        "comment": "aucun FONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FONT", 
        "result": "nc"
      }
    }, 
    "LINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut LINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut LINK", 
        "result": "nc"
      }
    }, 
    "MARQUEE": {
      "onfalse": {
        "comment": "aucun MARQUEE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un MARQUEE", 
        "result": "nc"
      }
    }, 
    "S": {
      "onfalse": {
        "comment": "aucun S", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un S", 
        "result": "nc"
      }
    }, 
    "STRIKE": {
      "onfalse": {
        "comment": "aucun STRIKE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un STRIKE", 
        "result": "nc"
      }
    }, 
    "TEXT_ATTR": {
      "onfalse": {
        "comment": "aucun attribut TEXT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut TEXT", 
        "result": "nc"
      }
    }, 
    "TT": {
      "onfalse": {
        "comment": "aucun TT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un TT", 
        "result": "nc"
      }
    }, 
    "U": {
      "onfalse": {
        "comment": "aucun U", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un U", 
        "result": "nc"
      }
    }, 
    "VLINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut VLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut VLINK", 
        "result": "nc"
      }
    }
  }, 
  "10095": {
    "H1": {
      "onfalse": {
        "comment": "aucun H1", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "au moins un H1", 
        "result": "c"
      }
    }
  }, 
  "10096": {
    "H1": {
      "onfalse": {
        "comment": "aucun H1", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H1_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H1 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H1 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H1", 
        "result": "i"
      }
    }, 
    "H2": {
      "onfalse": {
        "comment": "aucun H2", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H2_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H2 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H2 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H2", 
        "result": "i"
      }
    }, 
    "H3": {
      "onfalse": {
        "comment": "aucun H3", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H3_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H3 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H3 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H3", 
        "result": "i"
      }
    }, 
    "H4": {
      "onfalse": {
        "comment": "aucun H4", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H4_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H4 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H4 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H4", 
        "result": "i"
      }
    }, 
    "H5": {
      "onfalse": {
        "comment": "aucun H5", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H5_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H5 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H5 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H5", 
        "result": "i"
      }
    }, 
    "H6": {
      "onfalse": {
        "comment": "aucun H6", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H6_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H6 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H6 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H6", 
        "result": "i"
      }
    }
  }, 
  "10097": {
    "H1_TO_H6": {
      "onfalse": {
        "comment": "aucun H1, H2, H3, H4, H5 ni H6", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H1_TO_H6_HIERACHICAL_ERROR": {
            "onfalse": {
              "comment": "aucune interruption dans la hi\u00e9rarchie des titres", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins une interruption dans la hi\u00e9rarchie des titres", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un  H1, H2, H3, H4, H5 ou H6", 
        "result": "i"
      }
    }
  }, 
  "10099": {
    "FAKE_UNORDERED_LIST": {
      "onfalse": {
        "comment": "aucune liste simul\u00e9e", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins une liste simul\u00e9e", 
        "result": "nc"
      }
    }
  }, 
  "10100": {
    "FAKE_ORDERED_LIST": {
      "onfalse": {
        "comment": "aucune liste simul\u00e9e", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins une liste simul\u00e9e", 
        "result": "nc"
      }
    }
  }, 
  "10101": {
    "DL": {
      "onfalse": {
        "comment": "aucun DL", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "DL_WO_DT_FIRST": {
            "onfalse": {
              "comment": "aucun DL sans DT en premier", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un DL sans DT en premier", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un DL", 
        "result": "i"
      }
    }
  }, 
  "10107": {
    "ABBR_W_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun ABBR sans TITLE non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un ABBR avec TITLE non vide", 
        "result": "i"
      }
    }
  }, 
  "10108": {
    "ACRONYM_W_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun ACRONYM sans TITLE non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un ACRONYM avec un TITLE non vide", 
        "result": "i"
      }
    }
  }, 
  "10110": {
    "TABLE_FOR_DATA2": {
      "onfalse": {
        "comment": "aucun TABLE de donn\u00e9es", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_FOR_DATA2_W_TH": {
            "onfalse": {
              "chain": {
                "TABLE_W_FAKE_TH": {
                  "onfalse": {
                    "comment": "aucun TABLE avec des TH simul\u00e9s", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TABLE avec des TH simul\u00e9s", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un TABLE de donn\u00e9es sans TH", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "aucun TABLE de donn\u00e9es sans TH", 
              "result": "c"
            }
          }
        }, 
        "comment": "au moins un TABLE de donn\u00e9es", 
        "result": "i"
      }
    }
  }, 
  "10111": {
    "TABLE_W_TH": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TH_WO_FILLED_AND_UNIQUE_ID_WO_SCOPE_ATTR": {
            "onfalse": {
              "chain": {
                "TD_WO_TH_OR_W_TH_WO_SCOPE_ATTR": {
                  "onfalse": {
                    "comment": "aucun TD dont le HEADERS ne correspond \u00e0 aucun TH", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TD dont le HEADERS ne correspond \u00e0 aucun TH", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "aucun TH sans ID unique ni SCOPE", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un TH sans ID unique ni SCOPE", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "10112": {
    "TABLE_W_TH_LINE_OR_COLUMN": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TH_W_FILLED_AND_UNIQUE_ID": {
            "onfalse": {
              "chain": {
                "TD_WO_TH": {
                  "onfalse": {
                    "comment": "aucun TD dont l'attribut HEADERS ne correspond \u00e0 aucun TH", 
                    "result": "c"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TD dont l'attribut HEADERS ne correspond \u00e0 aucun TH", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "aucun TH sans ID unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un TH sans ID unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "10113": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "10114": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "10115": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_FOR_DATA": {
            "onfalse": {
              "comment": "aucun TABLE de donn\u00e9es", 
              "result": "i"
            }, 
            "ontrue": {
              "chain": {
                "TABLE_FOR_DATA_WO_CAPTION": {
                  "onfalse": {
                    "comment": "tous les TABLE ont un CAPTION", 
                    "result": "c"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TABLE sans CAPTION", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un TABLE de donn\u00e9es", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "10116": {
    "TABLE_FOR_DATA3": {
      "onfalse": {
        "comment": "aucun TABLE de donn\u00e9es", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_FOR_DATA4": {
            "onfalse": {
              "comment": "tous les TABLE ont des SUMMARY", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE sans SUMMARY", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE de donn\u00e9es", 
        "result": "i"
      }
    }
  }, 
  "10117": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "CAPTION_WO_UNIQUE_TEXT": {
            "onfalse": {
              "comment": "au moins un CAPTION sans contenu textuel unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "tous les CAPTION ont un contenu textuel unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "10118": {
    "TABLE_W_SUMMARY_ATTR": {
      "onfalse": {
        "comment": "aucun TABLE poss\u00e9dant un SUMMARY", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_W_FILLED_AND_UNIQUE_SUMMARY_ATTR": {
            "onfalse": {
              "chain": {
                "TABLE_W_SUMMARY_ATTR_EQUALS_TO_CAPTION": {
                  "onfalse": {
                    "comment": "aucun TABLE avec un SUMMARY et un CAPTION identiques", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TABLE avec un SUMMARY et un CAPTION identiques", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "aucun TABLE avec un SUMMARY vide ou non unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE avec un SUMMARY vide ou non unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE poss\u00e9dant un SUMMARY", 
        "result": "i"
      }
    }
  }, 
  "10119": {
    "CSS_BACKGROUND_IMAGE": {
      "onfalse": {
        "comment": "aucune image ajout\u00e9e par CSS", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une image ajout\u00e9e par CSS", 
        "result": "i"
      }
    }, 
    "CSS_CONTENT": {
      "onfalse": {
        "comment": "aucun contenu textuel ajout\u00e9 par CSS", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un contenu textuel ajout\u00e9 par CSS", 
        "result": "i"
      }
    }
  }, 
  "10124": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA": {
      "onfalse": {
        "comment": "aucun AREA", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un AREA", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type IMAGE", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "10125": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "10126": {
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }
  }, 
  "10129": {
    "JS_EVENT_CLICK": {
      "onfalse": {
        "comment": "aucun ONCLICK sur un \u00e9l\u00e9ment focusable", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un ONCLICK sur un \u00e9l\u00e9ment focusable", 
        "result": "i"
      }
    }
  }, 
  "10130": {
    "JS_EVENT_MOUSE_OR_KEYBOARD": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment avec onclick, onmouseover, onmouseout, onfocus ou onblur", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment avec onclick, onmouseover, onmouseout, onfocus ou onblur", 
        "result": "i"
      }
    }
  }, 
  "10131": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "10132": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "10136": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "IMG_ANIMATED": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment anim\u00e9", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment anim\u00e9", 
        "result": "i"
      }
    }, 
    "RESOURCE_MULTIMEDIA_WO_AUDIO": {
      "onfalse": {
        "comment": "aucune ressource multim\u00e9dia", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ressource multim\u00e9dia", 
        "result": "i"
      }
    }
  }, 
  "10137": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "10139": {
    "BLINK": {
      "onfalse": {
        "comment": "aucun BLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BLINK", 
        "result": "nc"
      }
    }
  }, 
  "10140": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "IMG_ANIMATED": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment anim\u00e9", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment anim\u00e9", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "10141": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "10143": {
    "MARQUEE": {
      "onfalse": {
        "comment": "aucun MARQUEE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un MARQUEE", 
        "result": "nc"
      }
    }
  }, 
  "10144": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "IMG_ANIMATED": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment anim\u00e9", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment anim\u00e9", 
        "result": "i"
      }
    }, 
    "RESOURCE_MULTIMEDIA_WO_AUDIO": {
      "onfalse": {
        "comment": "aucune ressource multim\u00e9dia", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ressource multim\u00e9dia", 
        "result": "i"
      }
    }
  }, 
  "10145": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "10147": {
    "META_REFRESH_SHORT": {
      "onfalse": {
        "comment": "aucun META REFRESH avec une dur\u00e9e courte", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "META_REFRESH_URL": {
            "onfalse": {
              "comment": "aucun META REFRESH avec une URL", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "un META REFRESH avec une URL est pr\u00e9sent", 
              "result": "c"
            }
          }
        }, 
        "comment": "un META REFRESH avec une dur\u00e9e courte est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "10148": {
    "JS_REFRESH": {
      "onfalse": {
        "comment": "", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "", 
        "result": "i"
      }
    }
  }, 
  "10149": {
    "META_REFRESH_SHORT": {
      "onfalse": {
        "comment": "aucun META REFRESH avec une dur\u00e9e courte", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "META_REFRESH_URL": {
            "onfalse": {
              "comment": "aucun META REFRESH avec une URL", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "un META REFRESH avec une URL est pr\u00e9sent", 
              "result": "nc"
            }
          }
        }, 
        "comment": "un META REFRESH avec une dur\u00e9e courte est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "10151": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "IMG_ANIMATED": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment anim\u00e9", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment anim\u00e9", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "10152": {
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "TEXTAREA": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "10153": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "10154": {
    "JS_EVENT_SPECIFIC": {
      "onfalse": {
        "comment": "aucun ONSCROLL, ONDBLCLICK ou ONCHANGE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un ONSCROLL, ONDBLCLICK ou ONCHANGE", 
        "result": "i"
      }
    }
  }, 
  "10155": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "10157": {
    "JS_EVENT_BLUR_ON_FOCUS": {
      "onfalse": {
        "comment": "aucun ONFOCUS", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un ONFOCUS", 
        "result": "i"
      }
    }
  }, 
  "10158": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "10159": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "10160": {
    "A_W_TARGET_ATTR_BLANK": {
      "onfalse": {
        "comment": "aucun A avec un TARGET blank", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A avec un TARGET blank", 
        "result": "i"
      }
    }, 
    "FORM_W_TARGET_ATTR_BLANK": {
      "onfalse": {
        "comment": "aucun FORM avec un TARGET blank", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM avec un TARGET blank", 
        "result": "i"
      }
    }
  }, 
  "10161": {
    "AREA_W_TARGET_ATTR_BLANK": {
      "onfalse": {
        "comment": "aucun AREA avec un TARGET blank", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA avec un TARGET blank", 
        "result": "i"
      }
    }, 
    "A_W_TARGET_ATTR_BLANK_W_IMG": {
      "onfalse": {
        "comment": "aucun A avec un TARGET blank", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A avec un TARGET blank", 
        "result": "i"
      }
    }
  }, 
  "10162": {
    "JS_EVENT_MOUSE_OR_KEYBOARD": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment avec onclick, onmouseover, onmouseout, onfocus ou onblur", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment avec onclick, onmouseover, onmouseout, onfocus ou onblur", 
        "result": "i"
      }
    }, 
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "10164": {
    "JS_BODY_ONLAD": {
      "onfalse": {
        "comment": "aucun \u00e9v\u00e9nement au chargement de la page", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "JS_POPUP": {
            "onfalse": {
              "comment": "aucune pop-up d\u00e9tect\u00e9e (\u00e0 v\u00e9rifier)", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "au moins une pop-up d\u00e9tect\u00e9e", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un \u00e9v\u00e9nement au chargement de la page", 
        "result": "i"
      }
    }, 
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "10165": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "10166": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "10167": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }, 
    "TEXTAREA": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "10171": {
    "LISTING": {
      "onfalse": {
        "comment": "aucun LISTING", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un LISTING", 
        "result": "nc"
      }
    }, 
    "PLAINTEXT": {
      "onfalse": {
        "comment": "aucun PLAINTEXT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un PLAINTEXT", 
        "result": "nc"
      }
    }, 
    "XMP": {
      "onfalse": {
        "comment": "aucun XMP", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un XMP", 
        "result": "nc"
      }
    }
  }, 
  "10174": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "RESSOURCE_MULTIMEDIA": {
            "onfalse": {
              "comment": "aucune ressource multim\u00e9dia", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins une ressource multim\u00e9dia", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "RESSOURCE_MULTIMEDIA": {
            "onfalse": {
              "comment": "aucune ressource multim\u00e9dia", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins une ressource multim\u00e9dia", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "10175": {
    "BGSOUND": {
      "onfalse": {
        "comment": "aucun BGSOUND", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BGSOUND", 
        "result": "nc"
      }
    }
  }, 
  "10181": {
    "FRAME": {
      "onfalse": {
        "comment": "aucun FRAME", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FRAME_WO_FILLED_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun FRAME avec un attribut TITLE absent ou vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un FRAME avec un attribut TITLE absent ou vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FRAME", 
        "result": "i"
      }
    }, 
    "IFRAME": {
      "onfalse": {
        "comment": "aucun IFRAME", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IFRAME_WO_FILLED_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun IFRAME avec un attribut TITLE absent ou vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IFRAME avec un attribut TITLE absent ou vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IFRAME", 
        "result": "i"
      }
    }
  }, 
  "10182": {
    "FRAME_W_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun FRAME avec un attribut TITLE non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FRAME_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun FRAME sans un attribut TITLE non vide et unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un FRAME avec un attribut TITLE non vide ou non unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FRAME avec un attribut TITLE", 
        "result": "i"
      }
    }, 
    "IFRAME_W_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun IFRAME avec un attribut TITLE non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IFRAME_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun IFRAME sans un attribut TITLE non vide et unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un IFRAME avec un attribut TITLE non vide ou non unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IFRAME avec un attribut TITLE", 
        "result": "i"
      }
    }
  }, 
  "10184": {
    "A_W_FILLED_HREF_ATTR_AND_WO_NEGATIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun A avec un HREF", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A avec un HREF", 
        "result": "i"
      }
    }, 
    "BUTTON_WO_NEGATIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun BUTTON", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un BUTTON", 
        "result": "i"
      }
    }, 
    "INPUT_WO_NEGATIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT", 
        "result": "i"
      }
    }, 
    "POSITIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment avec un TABINDEX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment avec un TABINDEX", 
        "result": "i"
      }
    }, 
    "SELECT_WO_NEGATIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_NEGATIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "10185": {
    "FORM_WO_FIELDSET": {
      "onfalse": {
        "comment": "aucun FORM sans FIELDSET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM sans FIELDSET", 
        "result": "i"
      }
    }
  }, 
  "10186": {
    "FIELDSET": {
      "onfalse": {
        "comment": "aucun FIELDSET", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FIELDSET_WO_LEGEND": {
            "onfalse": {
              "comment": "au moins un LEGEND", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "aucun LEGEND", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FIELDSET", 
        "result": "i"
      }
    }
  }, 
  "10187": {
    "LEGEND": {
      "onfalse": {
        "comment": "aucun LEGEND", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "LEGEND_WO_FILLED_AND_UNIQUE_TEXT": {
            "onfalse": {
              "comment": "aucun LEGEND vide ou non unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un LEGEND vide ou non unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un LEGEND", 
        "result": "i"
      }
    }
  }, 
  "10188": {
    "SELECT": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "OPTGROUP": {
            "onfalse": {
              "comment": "aucun OPTGROUP", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un OPTGROUP", 
              "result": "c"
            }
          }
        }, 
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }
  }, 
  "10189": {
    "OPTGROUP": {
      "onfalse": {
        "comment": "aucun OPTGROUP", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "OPTGROUP_WO_FILLED_LABEL_ATTR": {
            "onfalse": {
              "comment": "aucun OPTGROUP sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un OPTGROUP sans LABEL", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un OPTGROUP", 
        "result": "i"
      }
    }
  }, 
  "10190": {
    "OPTGROUP": {
      "onfalse": {
        "comment": "aucun OPTGROUP", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "OPTGROUP_WO_FILLED_AND_UNIQUE_LABEL_ATTR": {
            "onfalse": {
              "comment": "tous les OPTGROUP poss\u00e8dent un attribut LABEL unique et non vide", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un OPTGROUP ne poss\u00e8dent pas d'attribut LABEL unique et non vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un OPTGROUP", 
        "result": "i"
      }
    }
  }, 
  "10191": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_CHECKBOX_WO_FILLED_AND_UNIQUE_ID": {
            "onfalse": {
              "comment": "aucun INPUT de type CHECKBOX sans ID unique", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_CHECKBOX_WO_FILLED_TITLE_ATTR_WO_UNIQUE_ID": {
                  "onfalse": {
                    "comment": "aucun INPUT de type CHECKBOX sans TITLE rempli et sans ID unique", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins INPUT de type CHECKBOX sans TITLE rempli et sans ID unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type CHECKBOX sans ID unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_FILE_WO_FILLED_AND_UNIQUE_ID": {
            "onfalse": {
              "comment": "aucun INPUT de type FILE sans ID unique", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_FILE_WO_FILLED_TITLE_ATTR_WO_UNIQUE_ID": {
                  "onfalse": {
                    "comment": "aucun INPUT de type FILE sans TITLE rempli et sans ID unique", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type FILE sans TITLE rempli et sans ID unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type FILE sans ID unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_PASSWORD_WO_FILLED_AND_UNIQUE_ID": {
            "onfalse": {
              "comment": "aucun INPUT de type PASSWORD sans ID unique", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_PASSWORD_WO_FILLED_TITLE_ATTR_WO_UNIQUE_ID": {
                  "onfalse": {
                    "comment": "aucun INPUT de type PASSWORD sans TITLE rempli et sans ID unique", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type PASSWORD sans TITLE rempli et sans ID unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type PASSWORD sans ID unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_RADIO_WO_FILLED_AND_UNIQUE_ID": {
            "onfalse": {
              "comment": "aucun INPUT de type RADIO sans ID unique", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_RADIO_WO_FILLED_TITLE_ATTR_WO_UNIQUE_ID": {
                  "onfalse": {
                    "comment": "aucun INPUT de type RADIO sans TITLE rempli et sans ID unique", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type RADIO sans TITLE rempli et sans ID unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type RADIO sans ID unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_TEXT_WO_FILLED_AND_UNIQUE_ID": {
            "onfalse": {
              "comment": "aucun INPUT de type TEXT sans ID unique", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_TEXT_WO_FILLED_TITLE_ATTR_WO_UNIQUE_ID": {
                  "onfalse": {
                    "comment": "aucun INPUT de type TEXT sans TITLE rempli et sans ID unique", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type TEXT sans TITLE rempli et sans ID unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type TEXT sans ID unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SELECT_WO_FILLED_AND_UNIQUE_ID": {
            "onfalse": {
              "comment": "aucun SELECT sans ID unique", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "SELECT_WO_FILLED_TITLE_ATTR_WO_UNIQUE_ID": {
                  "onfalse": {
                    "comment": "aucun TEXTAREA sans TITLE rempli et sans ID unique", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TEXTAREA sans TITLE rempli et sans ID unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un SELECT sans ID unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }, 
    "TEXTAREA": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TEXTAREA_WO_FILLED_AND_UNIQUE_ID": {
            "onfalse": {
              "comment": "aucun TEXTAREA sans ID unique", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "TEXTAREA_WO_FILLED_TITLE_ATTR_WO_UNIQUE_ID": {
                  "onfalse": {
                    "comment": "aucun TEXTAREA sans TITLE rempli et sans ID unique", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TEXTAREA sans TITLE rempli et sans ID unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un TEXTAREA sans ID unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "10192": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_CHECKBOX_WO_LABEL": {
            "onfalse": {
              "comment": "aucun INPUT de type CHECKBOX sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_CHECKBOX_WO_FILLED_TITLE_ATTR_WO_LABEL": {
                  "onfalse": {
                    "comment": "aucun INPUT de type CHECKBOX sans LABEL et sans TITLE", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type CHECKBOX sans LABEL et sans TITLE", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type CHECKBOX sans LABEL", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_FILE_WO_LABEL": {
            "onfalse": {
              "comment": "aucun INPUT de type FILE sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_FILE_WO_FILLED_TITLE_ATTR_WO_LABEL": {
                  "onfalse": {
                    "comment": "aucun INPUT de type FILE sans LABEL et sans TITLE", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type FILE sans LABEL et sans TITLE", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type FILE sans LABEL", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_PASSWORD_WO_LABEL": {
            "onfalse": {
              "comment": "aucun INPUT de type PASSWORD sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_PASSWORD_WO_FILLED_TITLE_ATTR_WO_LABEL": {
                  "onfalse": {
                    "comment": "aucun INPUT de type PASSWORD sans LABEL et sans TITLE", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type PASSWORD sans LABEL et sans TITLE", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type PASSWORD sans LABEL", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_RADIO_WO_LABEL": {
            "onfalse": {
              "comment": "aucun INPUT de type RADIO sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_RADIO_WO_FILLED_TITLE_ATTR_WO_LABEL": {
                  "onfalse": {
                    "comment": "aucun INPUT de type RADIO sans LABEL et sans TITLE", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type RADIO sans LABEL et sans TITLE", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type RADIO sans LABEL", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_TEXT_WO_LABEL": {
            "onfalse": {
              "comment": "aucun INPUT de type TEXT sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_TEXT_WO_FILLED_TITLE_ATTR_WO_LABEL": {
                  "onfalse": {
                    "comment": "aucun INPUT de type TEXT sans LABEL et sans TITLE", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type TEXT sans LABEL et sans TITLE", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type TEXT sans LABEL", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SELECT_WO_LABEL": {
            "onfalse": {
              "comment": "aucun SELECT sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "SELECT_WO_FILLED_TITLE_ATTR_WO_LABEL": {
                  "onfalse": {
                    "comment": "aucun SELECT sans LABEL et sans TITLE", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un SELECT sans LABEL et sans TITLE", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un SELECT avec LABEL", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }, 
    "TEXTAREA": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TEXTAREA_WO_LABEL": {
            "onfalse": {
              "comment": "aucun TEXTAREA sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "TEXTAREA_WO_FILLED_TITLE_ATTR_WO_LABEL": {
                  "onfalse": {
                    "comment": "aucun TEXTAREA sans LABEL et sans TITLE", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TEXTAREA sans LABEL et sans TITLE", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un TEXTAREA sans LABEL", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "10196": {
    "A_NOT_ANCHOR_SELF": {
      "onfalse": {
        "comment": "aucun A autre qu'une ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "A_NOT_ANCHOR_SELF_WO_TEXT": {
            "onfalse": {
              "comment": "aucun A sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un A sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins A autre qu'une ancre", 
        "result": "i"
      }
    }
  }, 
  "10198": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "TITLE est pr\u00e9sent", 
        "result": "c"
      }
    }
  }, 
  "10199": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TITLE_W_TEXT": {
            "onfalse": {
              "comment": "TITLE est vide", 
              "result": "nc"
            }, 
            "ontrue": {
              "chain": {
                "TITLE_W_DEFAULT_VALUE": {
                  "onfalse": {
                    "comment": "TITLE est rempli", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "TITLE correspond \u00e0 une valeur par d\u00e9faut", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "TITLE est rempli", 
              "result": "i"
            }
          }
        }, 
        "comment": "TITLE est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "10222": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "10223": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "RESOURCE_MULTIMEDIA_WO_AUDIO": {
      "onfalse": {
        "comment": "aucune ressource multim\u00e9dia", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ressource multim\u00e9dia", 
        "result": "i"
      }
    }
  }, 
  "10224": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "RESOURCE_MULTIMEDIA_WO_AUDIO": {
      "onfalse": {
        "comment": "aucune ressource multim\u00e9dia", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ressource multim\u00e9dia", 
        "result": "i"
      }
    }
  }, 
  "10230": {
    "APPLET_NOT_IN_A_OR_BUTTON_WO_ANCHOR": {
      "onfalse": {
        "comment": "aucun APPLET ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "i"
      }
    }, 
    "EMBED_NOT_IN_A_OR_BUTTON_WO_ANCHOR": {
      "onfalse": {
        "comment": "aucun EMBED ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "i"
      }
    }, 
    "IMG_ANIMATED_NOT_IN_BUTTON_NOT_IN_A": {
      "onfalse": {
        "comment": "aucun IMG anim\u00e9e ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG anim\u00e9e ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "i"
      }
    }, 
    "OBJECT_NOT_IN_A_OR_BUTTON_WO_ANCHOR": {
      "onfalse": {
        "comment": "aucun OBJECT ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "i"
      }
    }
  }, 
  "10231": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "10239": {
    "CSS_FONT_SIZE_W_ABSOLUTE_VALUE_IN_FORM": {
      "onfalse": {
        "comment": "aucune police dont la taille est absolue dans les formulaires", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une police dont la taille est absolue dans les formulaires", 
        "result": "nc"
      }
    }, 
    "CSS_FONT_SIZE_W_PIXEL_VALUE_IN_FORM": {
      "onfalse": {
        "comment": "aucune police dont la taille est d\u00e9finie en pixel dans les formulaires", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une police dont la taille est d\u00e9finie en pixel dans les formulaires", 
        "result": "nc"
      }
    }
  }, 
  "10242": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "HTTP_REFRESH": {
      "onfalse": {
        "comment": "le serveur n'envoie pas de commande de rafra\u00eechissement de la page", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "le serveur envoie une commande de rafra\u00eechissement de la page", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "11289": {
    "LINK_REL_ICON": {
      "onfalse": {
        "chain": {
          "LINK_REL_SHORTCUT_ICON": {
            "onfalse": {
              "comment": "aucun LINK avec l'attribut REL ayant la valeur ICON ou SHORTCUT ICON", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "un LINK avec l'attribut REL ayant la valeur SHORTCUT ICON", 
              "result": "c"
            }
          }
        }, 
        "comment": "aucun LINK avec l'attribut REL ayant la valeur ICON", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "un LINK avec l'attribut REL ayant la valeur ICON", 
        "result": "c"
      }
    }
  }, 
  "11290": {
    "LINK_ALTERN_ATOM": {
      "onfalse": {
        "chain": {
          "LINK_ALTERN_RSS": {
            "onfalse": {
              "comment": "aucun LINK de type ATOM ou RSS", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "au moins un LINK de type RSS", 
              "result": "c"
            }
          }
        }, 
        "comment": "aucun LINK de type ATOM", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "au moins un LINK de type ATOM", 
        "result": "c"
      }
    }
  }, 
  "11292": {
    "META_DESCRIPTION_FILLED": {
      "onfalse": {
        "comment": "aucun META DESCRIPTION ou META DESCRIPTION vide", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le META DESCRIPTION est non vide", 
        "result": "c"
      }
    }, 
    "META_KEYWORDS_FILLED": {
      "onfalse": {
        "comment": "aucun META KEYWORDS ou META KEYWORDS vide", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le META KEYWORDS est non vide", 
        "result": "c"
      }
    }
  }, 
  "11293": {
    "HTML_W_LANG_ATTR_VALID": {
      "onfalse": {
        "comment": "l'attribut LANG de HTML est vide, absent ou incorrect", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "l'attribut LANG de HTML est correct", 
        "result": "i"
      }
    }
  }, 
  "11294": {
    "ROBOTS_W_VALID_SITEMAP": {
      "onfalse": {
        "comment": "absence du SITEMAP ou du robots.txt", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "pr\u00e9sence du SITEMAP", 
        "result": "c"
      }
    }
  }, 
  "11295": {
    "INLINKS": {
      "onfalse": {
        "comment": "moins de 3 liens entrants vers le domaine", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "au moins 3 liens entrants vers le domaine", 
        "result": "c"
      }
    }
  }, 
  "11298": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "nc"
      }, 
      "ontrue": {
        "chain": {
          "TITLE_W_TEXT": {
            "onfalse": {
              "comment": "TITLE est vide", 
              "result": "nc"
            }, 
            "ontrue": {
              "chain": {
                "TITLE_W_DEFAULT_VALUE": {
                  "onfalse": {
                    "comment": "TITLE est rempli", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "TITLE correspond \u00e0 une valeur par d\u00e9faut", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "TITLE est rempli", 
              "result": "i"
            }
          }
        }, 
        "comment": "TITLE est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "11306": {
    "CSS_UNDERLINE": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment autre que A soulign\u00e9", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment autre que A soulign\u00e9", 
        "result": "nc"
      }
    }
  }, 
  "11311": {
    "JS_POPUP": {
      "onfalse": {
        "comment": "aucune pop-up d\u00e9tect\u00e9e (\u00e0 v\u00e9rifier)", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins une pop-up d\u00e9tect\u00e9e", 
        "result": "nc"
      }
    }
  }, 
  "11314": {
    "404_DEFAULT": {
      "onfalse": {
        "comment": "aucune page 404 par d\u00e9faut", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins une page 404 par d\u00e9faut", 
        "result": "nc"
      }
    }
  }, 
  "11315": {
    "HTTP_CHARSET": {
      "onfalse": {
        "comment": "le serveur n'envoie pas les informations relatives au jeu de caract\u00e8res employ\u00e9", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le serveur envoie les informations relatives au jeu de caract\u00e8res employ\u00e9", 
        "result": "c"
      }
    }
  }, 
  "11316": {
    "HTTP_CONTENT_LANGUAGE": {
      "onfalse": {
        "comment": "le serveur n'envoie pas l'indication de la langue principale du contenu", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le serveur envoie l'indication de la langue principale du contenu", 
        "result": "i"
      }
    }
  }, 
  "11317": {
    "HTTP_CACHE": {
      "onfalse": {
        "comment": "le serveur envoie les informations permettant la mise en cache des contenus", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "le serveur n'envoie pas d'information permettant la mise en cache des contenus", 
        "result": "nc"
      }
    }
  }, 
  "11318": {
    "HTTP_GZIP": {
      "onfalse": {
        "comment": "le serveur envoie des contenus compress\u00e9s aux clients qui les acceptent", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "le serveur n'envoie pas de contenus compress\u00e9s aux clients qui les acceptent", 
        "result": "nc"
      }
    }
  }, 
  "11319": {
    "FRAME": {
      "onfalse": {
        "comment": "aucun FRAME", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FRAME", 
        "result": "nc"
      }
    }, 
    "FRAMESET": {
      "onfalse": {
        "comment": "aucun FRAMESET", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FRAMESET", 
        "result": "nc"
      }
    }, 
    "NOFRAMES": {
      "onfalse": {
        "comment": "aucun NOFRAMES", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un NOFRAMES", 
        "result": "nc"
      }
    }
  }, 
  "11321": {
    "DOCTYPE_VALID": {
      "onfalse": {
        "comment": "le DOCTYPE est absent, mal \u00e9crit ou mal positionn\u00e9", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le DOCTYPE est pr\u00e9sent", 
        "result": "c"
      }
    }
  }, 
  "11324": {
    "CSS_MEDIA_HANDHELD": {
      "onfalse": {
        "comment": "aucune CSS pour le mobile", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "au moins une CSS pour le mobile", 
        "result": "c"
      }
    }
  }, 
  "11361": {
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_WO_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun IMG avec ALT vide", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "11364": {
    "HTTP_REFRESH": {
      "onfalse": {
        "comment": "le serveur n'envoie pas de commande de rafra\u00eechissement de la page", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "le serveur envoie une commande de rafra\u00eechissement de la page", 
        "result": "nc"
      }
    }, 
    "META_REFRESH_SHORT": {
      "onfalse": {
        "comment": "aucun META REFRESH avec une dur\u00e9e courte", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "un META REFRESH avec une dur\u00e9e courte est pr\u00e9sent", 
        "result": "nc"
      }
    }, 
    "META_REFRESH_URL": {
      "onfalse": {
        "comment": "aucun META REFRESH avec une URL", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "un META REFRESH avec une URL est pr\u00e9sent", 
        "result": "nc"
      }
    }
  }, 
  "11365": {
    "CSS_BACKGROUND_IMAGE": {
      "onfalse": {
        "comment": "aucune image ajout\u00e9e par CSS", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une image ajout\u00e9e par CSS", 
        "result": "i"
      }
    }, 
    "CSS_CONTENT": {
      "onfalse": {
        "comment": "aucun contenu textuel ajout\u00e9 par CSS", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un contenu textuel ajout\u00e9 par CSS", 
        "result": "i"
      }
    }
  }, 
  "11369": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "nc"
      }, 
      "ontrue": {
        "chain": {
          "TITLE_W_TEXT": {
            "onfalse": {
              "comment": "TITLE est vide", 
              "result": "nc"
            }, 
            "ontrue": {
              "chain": {
                "TITLE_W_DEFAULT_VALUE": {
                  "onfalse": {
                    "comment": "TITLE est rempli", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "TITLE correspond \u00e0 une valeur par d\u00e9faut", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "TITLE est rempli", 
              "result": "i"
            }
          }
        }, 
        "comment": "TITLE est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "11372": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "nc"
      }, 
      "ontrue": {
        "chain": {
          "TITLE_W_TEXT": {
            "onfalse": {
              "comment": "TITLE est vide", 
              "result": "nc"
            }, 
            "ontrue": {
              "chain": {
                "TITLE_W_DEFAULT_VALUE": {
                  "onfalse": {
                    "comment": "TITLE est rempli", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "TITLE correspond \u00e0 une valeur par d\u00e9faut", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "TITLE est rempli", 
              "result": "i"
            }
          }
        }, 
        "comment": "TITLE est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "11390": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AUDIO": {
      "onfalse": {
        "comment": "aucun AUDIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AUDIO", 
        "result": "i"
      }
    }, 
    "CANVAS": {
      "onfalse": {
        "comment": "aucun CANVAS", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un CANVAS", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }, 
    "VIDEO": {
      "onfalse": {
        "comment": "aucun VIDEO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un VIDEO", 
        "result": "i"
      }
    }
  }, 
  "11394": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "BGSOUND": {
      "onfalse": {
        "comment": "aucun BGSOUND", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un BGSOUND", 
        "result": "i"
      }
    }, 
    "CANVAS": {
      "onfalse": {
        "comment": "aucun CANVAS", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un CANVAS", 
        "result": "i"
      }
    }, 
    "IMG_ANIMATED": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment anim\u00e9", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment anim\u00e9", 
        "result": "i"
      }
    }, 
    "RESSOURCE_MULTIMEDIA": {
      "onfalse": {
        "comment": "aucune ressource multim\u00e9dia", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ressource multim\u00e9dia", 
        "result": "i"
      }
    }
  }, 
  "11396": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "11399": {
    "INPUT_W_TYPE_CHECKBOX_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX avec un TITLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX avec un TITLE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE avec un TITLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE avec un TITLE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD avec un TITLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD avec un TITLE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO avec un TITLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO avec un TITLE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT avec un TITLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT avec un TITLE", 
        "result": "i"
      }
    }, 
    "LABEL": {
      "onfalse": {
        "comment": "aucun LABEL", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un LABEL", 
        "result": "i"
      }
    }, 
    "SELECT_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT avec un TITLE non vide et unique", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec un TITLE non vide et unique", 
        "result": "i"
      }
    }, 
    "TEXTAREA_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun TEXTAREA avec un TITLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA avec un TITLE", 
        "result": "i"
      }
    }
  }, 
  "11401": {
    "A_NOT_ANCHOR_SELF": {
      "onfalse": {
        "comment": "aucun A autre qu'une ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "A_NOT_ANCHOR_SELF_WO_TEXT": {
            "onfalse": {
              "comment": "aucun A sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un A sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins A autre qu'une ancre", 
        "result": "i"
      }
    }
  }, 
  "11402": {
    "CSS_UNDERLINE": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment autre que A soulign\u00e9", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment autre que A soulign\u00e9", 
        "result": "nc"
      }
    }
  }, 
  "11409": {
    "HTML_W_LANG_ATTR_VALID": {
      "onfalse": {
        "comment": "l'attribut LANG de HTML est vide, absent ou incorrect", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "l'attribut LANG de HTML est correct", 
        "result": "i"
      }
    }
  }, 
  "11412": {
    "FRAME": {
      "onfalse": {
        "comment": "aucun FRAME", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FRAME", 
        "result": "nc"
      }
    }, 
    "FRAMESET": {
      "onfalse": {
        "comment": "aucun FRAMESET", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FRAMESET", 
        "result": "nc"
      }
    }, 
    "NOFRAMES": {
      "onfalse": {
        "comment": "aucun NOFRAMES", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un NOFRAMES", 
        "result": "nc"
      }
    }
  }, 
  "11413": {
    "IFRAME": {
      "onfalse": {
        "comment": "aucun IFRAME", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IFRAME_WO_FILLED_TITLE_ATTR": {
            "onfalse": {
              "chain": {
                "IFRAME_W_UNIQUE_SRC_ATTR_WO_UNIQUE_TITLE_ATTR": {
                  "onfalse": {
                    "comment": "tous les IFRAME poss\u00e8dent un attribut TITLE diff\u00e9rents", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins deux IFRAME poss\u00e8dent le m\u00eame TITLE", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "aucun IFRAME avec un attribut TITLE absent ou vide", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un IFRAME avec un attribut TITLE absent ou vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IFRAME", 
        "result": "i"
      }
    }
  }, 
  "11419": {
    "TARGET_BLANK": {
      "onfalse": {
        "comment": "aucune ouverture dans une nouvelle fen\u00eatre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ouverture dans une nouvelle fen\u00eatre", 
        "result": "i"
      }
    }
  }, 
  "11420": {
    "JS_POPUP": {
      "onfalse": {
        "comment": "aucune pop-up d\u00e9tect\u00e9e (\u00e0 v\u00e9rifier)", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins une pop-up d\u00e9tect\u00e9e", 
        "result": "nc"
      }
    }
  }, 
  "11423": {
    "JS_RESIZE": {
      "onfalse": {
        "comment": "aucune fen\u00eatre redimensionn\u00e9e d\u00e9tect\u00e9e (\u00e0 v\u00e9rifier)", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins une fen\u00eatre redimensionn\u00e9e d\u00e9tect\u00e9e", 
        "result": "nc"
      }
    }
  }, 
  "11435": {
    "HTTP_CHARSET": {
      "onfalse": {
        "comment": "le serveur n'envoie pas les informations relatives au jeu de caract\u00e8res employ\u00e9", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le serveur envoie les informations relatives au jeu de caract\u00e8res employ\u00e9", 
        "result": "c"
      }
    }
  }, 
  "11436": {
    "HTTP_CACHE": {
      "onfalse": {
        "comment": "le serveur envoie les informations permettant la mise en cache des contenus", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "le serveur n'envoie pas d'information permettant la mise en cache des contenus", 
        "result": "nc"
      }
    }
  }, 
  "11438": {
    "404_DEFAULT": {
      "onfalse": {
        "comment": "aucune page 404 par d\u00e9faut", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins une page 404 par d\u00e9faut", 
        "result": "nc"
      }
    }
  }, 
  "11439": {
    "HTTP_404": {
      "onfalse": {
        "comment": "le serveur ne renvoie pas d'ent\u00eate HTTP 404", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le serveur renvoie un ent\u00eate HTTP 404", 
        "result": "c"
      }
    }
  }, 
  "11440": {
    "HTTP_GZIP": {
      "onfalse": {
        "comment": "le serveur envoie des contenus compress\u00e9s aux clients qui les acceptent", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "le serveur n'envoie pas de contenus compress\u00e9s aux clients qui les acceptent", 
        "result": "nc"
      }
    }
  }, 
  "11441": {
    "RSS_PRESENCE": {
      "onfalse": {
        "comment": "absence de syndication", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "RSS_CACHE": {
            "onfalse": {
              "comment": "absence de MAJ", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "pr\u00e9sence de MAJ", 
              "result": "c"
            }
          }
        }, 
        "comment": "pr\u00e9sence de syndication", 
        "result": "i"
      }
    }
  }, 
  "11442": {
    "RSS_PRESENCE": {
      "onfalse": {
        "comment": "absence de syndication", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "RSS_ABSOLUTE_LINKS": {
            "onfalse": {
              "comment": "aucun hyperlien non absolu dans les fils de syndication", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un hyperlien non absolu dans les fils de syndication", 
              "result": "nc"
            }
          }
        }, 
        "comment": "pr\u00e9sence de syndication", 
        "result": "i"
      }
    }
  }, 
  "11443": {
    "LINK_ALTERN_ATOM": {
      "onfalse": {
        "chain": {
          "LINK_ALTERN_RSS": {
            "onfalse": {
              "comment": "aucun LINK de type ATOM ou RSS", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un LINK de type RSS", 
              "result": "c"
            }
          }
        }, 
        "comment": "aucun LINK de type ATOM", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins un LINK de type ATOM", 
        "result": "c"
      }
    }
  }, 
  "11444": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TH_WO_FILLED_AND_UNIQUE_ID_WO_SCOPE_ATTR": {
            "onfalse": {
              "chain": {
                "TD_WO_TH_OR_W_TH_WO_SCOPE_ATTR": {
                  "onfalse": {
                    "comment": "aucun TD dont le HEADERS ne correspond \u00e0 aucun TH", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TD dont le HEADERS ne correspond \u00e0 aucun TH", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "aucun TH sans ID unique ni SCOPE", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un TH sans ID unique ni SCOPE", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "11446": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AUDIO": {
      "onfalse": {
        "comment": "aucun AUDIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AUDIO", 
        "result": "i"
      }
    }, 
    "CANVAS": {
      "onfalse": {
        "comment": "aucun CANVAS", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un CANVAS", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }, 
    "VIDEO": {
      "onfalse": {
        "comment": "aucun VIDEO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un VIDEO", 
        "result": "i"
      }
    }
  }, 
  "11448": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "NESTED_TABLE": {
            "onfalse": {
              "comment": "aucun TABLE imbriqu\u00e9", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE imbriqu\u00e9", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "11460": {
    "META_CHARSET_VALID": {
      "onfalse": {
        "comment": "aucun META CONTENT-TYPE pr\u00e9cisant le CHARSET", 
        "result": "nc"
      }, 
      "ontrue": {
        "chain": {
          "META_CHARSET_REAL": {
            "onfalse": {
              "comment": "le CHARSET pr\u00e9cis\u00e9 par le META CONTENT-TYPE ne correspond pas au charset r\u00e9\u00e9l", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "le CHARSET pr\u00e9cis\u00e9 par le META CONTENT-TYPE correspond au charset r\u00e9\u00e9l", 
              "result": "c"
            }
          }
        }, 
        "comment": "le META CONTENT-TYPE pr\u00e9cisant le CHARSET est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "11474": {
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "CSS_IMG_RESIZE": {
            "onfalse": {
              "comment": "aucun IMG avec un WIDTH ou HEIGHT redimensionn\u00e9", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec un WIDTH ou HEIGHT redimensionn\u00e9", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "11475": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "11476": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "11477": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "11478": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "11479": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }, 
    "TEXTAREA": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "11485": {
    "ROBOTS_PRESENCE": {
      "onfalse": {
        "comment": "le robots.txt \u00e0 la racine du site est absent ou vide", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le robots.txt \u00e0 la racine du site est pr\u00e9sent et non vide", 
        "result": "c"
      }
    }
  }, 
  "11486": {
    "META_DESCRIPTION_FILLED": {
      "onfalse": {
        "comment": "aucun META DESCRIPTION ou META DESCRIPTION vide", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le META DESCRIPTION est non vide", 
        "result": "i"
      }
    }
  }, 
  "11488": {
    "FAVICON": {
      "onfalse": {
        "comment": "aucun appel valide \u00e0 un favicon", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "un appel valide \u00e0 un favicon", 
        "result": "c"
      }
    }
  }, 
  "11497": {
    "AREA_W_HREF_NOT_HTTP": {
      "onfalse": {
        "comment": "aucun AREA ouvrant un logiciel externe", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ouvrant un logiciel externe", 
        "result": "i"
      }
    }, 
    "A_W_HREF_NOT_HTTP": {
      "onfalse": {
        "comment": "aucun A ouvrant un logiciel externe", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ouvrant un logiciel externe", 
        "result": "i"
      }
    }
  }, 
  "11500": {
    "CSS_MEDIA_PRINT": {
      "onfalse": {
        "comment": "aucune CSS pour l'impression", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "au moins une CSS pour l'impression", 
        "result": "c"
      }
    }
  }, 
  "11501": {
    "CSS_GENERIC_FONT": {
      "onfalse": {
        "comment": "aucune CSS ne se termine par une police non g\u00e9n\u00e9rique", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une CSS se termine par une police non g\u00e9n\u00e9rique", 
        "result": "nc"
      }
    }
  }, 
  "11502": {
    "CSS_FONT_SIZE_W_ABSOLUTE_VALUE": {
      "onfalse": {
        "comment": "aucun FONT-SIZE n'est d\u00e9fini en taille absolue", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FONT-SIZE est d\u00e9fini en taille absolue", 
        "result": "nc"
      }
    }
  }, 
  "11506": {
    "HTTP_CONTENT_LANGUAGE": {
      "onfalse": {
        "comment": "le serveur n'envoie pas l'indication de la langue principale du contenu", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le serveur envoie l'indication de la langue principale du contenu", 
        "result": "i"
      }
    }
  }, 
  "11507": {
    "TABLE_FOR_DATA": {
      "onfalse": {
        "comment": "aucun TABLE de donn\u00e9es", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_FOR_DATA_WO_CAPTION": {
            "onfalse": {
              "comment": "tous les TABLE ont un CAPTION", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE sans CAPTION", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE de donn\u00e9es", 
        "result": "i"
      }
    }
  }, 
  "11512": {
    "TABLE_LAYOUT": {
      "onfalse": {
        "comment": "aucun TABLE de mise en page", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TABLE de mise en page", 
        "result": "i"
      }
    }
  }, 
  "11515": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AUDIO": {
      "onfalse": {
        "comment": "aucun AUDIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AUDIO", 
        "result": "i"
      }
    }, 
    "CANVAS": {
      "onfalse": {
        "comment": "aucun CANVAS", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un CANVAS", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }, 
    "VIDEO": {
      "onfalse": {
        "comment": "aucun VIDEO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un VIDEO", 
        "result": "i"
      }
    }
  }, 
  "11516": {
    "STYLE_ATTR": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment avec un attribut STYLE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment avec un attribut STYLE", 
        "result": "i"
      }
    }
  }, 
  "11517": {
    "DOCTYPE_DOM_VALID": {
      "onfalse": {
        "comment": "le code contient des erreurs d'attributs ou de balises", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le code ne contient pas d'erreurs d'attributs ou de balises", 
        "result": "c"
      }
    }
  }, 
  "11518": {
    "ALIGN_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALIGN", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALIGN", 
        "result": "nc"
      }
    }, 
    "ALINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALINK", 
        "result": "nc"
      }
    }, 
    "BACKGROUND_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BACKGROUND", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BACKGROUND", 
        "result": "nc"
      }
    }, 
    "BASEFONT": {
      "onfalse": {
        "comment": "aucun BASEFONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BASEFONT", 
        "result": "nc"
      }
    }, 
    "BASEFONT_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BASEFONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BASEFONT", 
        "result": "nc"
      }
    }, 
    "BGCOLOR_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BGCOLOR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BGCOLOR", 
        "result": "nc"
      }
    }, 
    "BLINK": {
      "onfalse": {
        "comment": "aucun BLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BLINK", 
        "result": "nc"
      }
    }, 
    "BORDER_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BORDER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BORDER", 
        "result": "nc"
      }
    }, 
    "CENTER": {
      "onfalse": {
        "comment": "aucun CENTER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un CENTER", 
        "result": "nc"
      }
    }, 
    "COLOR_ATTR": {
      "onfalse": {
        "comment": "aucun attribut COLOR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut COLOR", 
        "result": "nc"
      }
    }, 
    "FONT": {
      "onfalse": {
        "comment": "aucun FONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FONT", 
        "result": "nc"
      }
    }, 
    "LINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut LINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut LINK", 
        "result": "nc"
      }
    }, 
    "MARQUEE": {
      "onfalse": {
        "comment": "aucun MARQUEE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un MARQUEE", 
        "result": "nc"
      }
    }, 
    "S": {
      "onfalse": {
        "comment": "aucun S", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un S", 
        "result": "nc"
      }
    }, 
    "STRIKE": {
      "onfalse": {
        "comment": "aucun STRIKE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un STRIKE", 
        "result": "nc"
      }
    }, 
    "TEXT_ATTR": {
      "onfalse": {
        "comment": "aucun attribut TEXT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut TEXT", 
        "result": "nc"
      }
    }, 
    "TT": {
      "onfalse": {
        "comment": "aucun TT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un TT", 
        "result": "nc"
      }
    }, 
    "U": {
      "onfalse": {
        "comment": "aucun U", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un U", 
        "result": "nc"
      }
    }, 
    "VLINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut VLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut VLINK", 
        "result": "nc"
      }
    }
  }, 
  "11521": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "11522": {
    "DOCTYPE_HTML_VALID": {
      "onfalse": {
        "comment": "le code est conforme au DOCTYPE", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le code n'est pas conforme au DOCTYPE", 
        "result": "c"
      }
    }
  }, 
  "11537": {
    "IMG_ANIMATED": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment anim\u00e9", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment anim\u00e9", 
        "result": "i"
      }
    }, 
    "RESSOURCE_MULTIMEDIA": {
      "onfalse": {
        "comment": "aucune ressource multim\u00e9dia", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ressource multim\u00e9dia", 
        "result": "i"
      }
    }
  }, 
  "11538": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "11540": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "11542": {
    "LABEL": {
      "onfalse": {
        "comment": "aucun LABEL", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un LABEL", 
        "result": "i"
      }
    }
  }, 
  "11543": {
    "FORM_W_3_FIELDS_OR_MORE": {
      "onfalse": {
        "comment": "aucun FORM avec 3 champs ou plus", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM avec 3 champs ou plus", 
        "result": "i"
      }
    }
  }, 
  "11544": {
    "SELECT": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SELECT_W_OPTGROUP_W_FILLED_AND_UNIQUE_LABEL_ATTR": {
            "onfalse": {
              "comment": "tous les OPTGROUP poss\u00e8dent un LABEL non vide et unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un OPTGROUP sans LABEL non vide et unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }
  }, 
  "11545": {
    "OPTION": {
      "onfalse": {
        "comment": "aucun OPTION", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OPTION", 
        "result": "i"
      }
    }
  }, 
  "11551": {
    "ROBOTS_W_VALID_SITEMAP": {
      "onfalse": {
        "comment": "absence du SITEMAP ou du robots.txt", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "pr\u00e9sence du SITEMAP", 
        "result": "c"
      }
    }
  }, 
  "11557": {
    "JS_NEW_WINDOW": {
      "onfalse": {
        "comment": "aucun \u00e9v\u00e9nement clavier ou souris", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9v\u00e9nement clavier ou souris", 
        "result": "i"
      }
    }, 
    "TARGET_BLANK": {
      "onfalse": {
        "comment": "aucune ouverture dans une nouvelle fen\u00eatre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ouverture dans une nouvelle fen\u00eatre", 
        "result": "nc"
      }
    }
  }, 
  "11563": {
    "CSS_FONTS_NUMBER": {
      "onfalse": {
        "comment": "pas plus de 3 polices d\u00e9finies", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "plus de 3 polices d\u00e9finies", 
        "result": "nc"
      }
    }
  }, 
  "11566": {
    "CSS_MEDIA_HANDHELD": {
      "onfalse": {
        "comment": "aucune CSS pour le mobile", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "au moins une CSS pour le mobile", 
        "result": "c"
      }
    }
  }, 
  "11570": {
    "CSS_UPPERCASE": {
      "onfalse": {
        "comment": "aucune suite de majuscules d\u00e9coratives", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une suite de majuscules d\u00e9coratives", 
        "result": "nc"
      }
    }
  }, 
  "11573": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT_IN_HEAD": {
            "onfalse": {
              "chain": {
                "SCRIPT_AT_END": {
                  "onfalse": {
                    "comment": "au moins un SCRIPT non plac\u00e9 \u00e0 la fin du code", 
                    "result": "nc"
                  }, 
                  "ontrue": {
                    "comment": "aucun SCRIPT non plac\u00e9 \u00e0 la fin du code", 
                    "result": "c"
                  }
                }
              }, 
              "comment": "aucun SCRIPT dans le HEAD", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT dans le HEAD", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "11575": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT_WO_SRC": {
            "onfalse": {
              "comment": "aucun SCRIPT interne", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT interne", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "11576": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "JS_W_CR": {
            "onfalse": {
              "chain": {
                "JS_W_REDUDANT_SPACES": {
                  "onfalse": {
                    "chain": {
                      "JS_W_COMMENTS": {
                        "onfalse": {
                          "comment": "aucun JS avec des commentaires", 
                          "result": "c"
                        }, 
                        "ontrue": {
                          "comment": "au moins un JS avec des commentaires", 
                          "result": "nc"
                        }
                      }
                    }, 
                    "comment": "aucun JS avec des espaces inutiles", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un JS avec des espaces inutiles", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "aucun JS avec des retours \u00e0 la ligne", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un JS avec des retours \u00e0 la ligne", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "11864": {
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_WO_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun IMG avec ALT vide", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "11940": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AUDIO": {
      "onfalse": {
        "comment": "aucun AUDIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AUDIO", 
        "result": "i"
      }
    }, 
    "CANVAS": {
      "onfalse": {
        "comment": "aucun CANVAS", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un CANVAS", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }, 
    "VIDEO": {
      "onfalse": {
        "comment": "aucun VIDEO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un VIDEO", 
        "result": "i"
      }
    }
  }, 
  "11976": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "12016": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "12020": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "12029": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "nc"
      }, 
      "ontrue": {
        "chain": {
          "TITLE_W_TEXT": {
            "onfalse": {
              "comment": "TITLE est vide", 
              "result": "nc"
            }, 
            "ontrue": {
              "chain": {
                "TITLE_W_DEFAULT_VALUE": {
                  "onfalse": {
                    "comment": "TITLE est rempli", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "TITLE correspond \u00e0 une valeur par d\u00e9faut", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "TITLE est rempli", 
              "result": "i"
            }
          }
        }, 
        "comment": "TITLE est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "12045": {
    "ABBR_W_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun ABBR sans TITLE non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un ABBR avec TITLE non vide", 
        "result": "i"
      }
    }, 
    "ACRONYM_W_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun ACRONYM sans TITLE non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un ACRONYM avec un TITLE non vide", 
        "result": "i"
      }
    }
  }, 
  "12051": {
    "CSS_CONTENT": {
      "onfalse": {
        "comment": "aucun contenu textuel ajout\u00e9 par CSS", 
        "result": "c"
      }, 
      "ontrue": {
        "chain": {
          "CSS_BACKGROUND_IMAGE": {
            "onfalse": {
              "comment": "aucune image ajout\u00e9e par CSS", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins une image ajout\u00e9e par CSS", 
              "result": "c"
            }
          }
        }, 
        "comment": "au moins un contenu textuel ajout\u00e9 par CSS", 
        "result": "i"
      }
    }
  }, 
  "12082": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_CHECKBOX_WO_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type CHECKBOX sans TITLE non vide et unique", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type CHECKBOX sans TITLE non vide et unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_FILE_WO_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type FILE sans TITLE non vide et unique", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type FILE sans TITLE non vide et unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_PASSWORD_WO_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type PASSWORD sans TITLE non vide et unique", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type PASSWORD sans TITLE non vide et unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_RADIO_WO_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type RADIO sans TITLE non vide et unique", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type RADIO sans TITLE non vide et unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_TEXT_WO_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type TEXT sans TITLE non vide et unique", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type TEXT sans TITLE non vide et unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SELECT_WO_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun SELECT sans TITLE vide ou non unique", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un SELECT avec TITLE vide ou non unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }, 
    "TEXTAREA": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TEXTAREA_WO_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun TEXTAREA sans TITLE non vide et unique", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TEXTAREA sans TITLE non vide et unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "12087": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "12155": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "12718": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "nc"
      }, 
      "ontrue": {
        "chain": {
          "TITLE_W_TEXT": {
            "onfalse": {
              "comment": "TITLE est vide", 
              "result": "nc"
            }, 
            "ontrue": {
              "chain": {
                "TITLE_W_DEFAULT_VALUE": {
                  "onfalse": {
                    "comment": "TITLE est rempli", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "TITLE correspond \u00e0 une valeur par d\u00e9faut", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "TITLE est rempli", 
              "result": "i"
            }
          }
        }, 
        "comment": "TITLE est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "12751": {
    "ALIGN_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALIGN", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALIGN", 
        "result": "nc"
      }
    }, 
    "ALINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALINK", 
        "result": "nc"
      }
    }, 
    "BACKGROUND_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BACKGROUND", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BACKGROUND", 
        "result": "nc"
      }
    }, 
    "BASEFONT": {
      "onfalse": {
        "comment": "aucun BASEFONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BASEFONT", 
        "result": "nc"
      }
    }, 
    "BASEFONT_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BASEFONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BASEFONT", 
        "result": "nc"
      }
    }, 
    "BGCOLOR_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BGCOLOR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BGCOLOR", 
        "result": "nc"
      }
    }, 
    "BLINK": {
      "onfalse": {
        "comment": "aucun BLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BLINK", 
        "result": "nc"
      }
    }, 
    "BORDER_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BORDER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BORDER", 
        "result": "nc"
      }
    }, 
    "CENTER": {
      "onfalse": {
        "comment": "aucun CENTER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un CENTER", 
        "result": "nc"
      }
    }, 
    "COLOR_ATTR": {
      "onfalse": {
        "comment": "aucun attribut COLOR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut COLOR", 
        "result": "nc"
      }
    }, 
    "FONT": {
      "onfalse": {
        "comment": "aucun FONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FONT", 
        "result": "nc"
      }
    }, 
    "LINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut LINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut LINK", 
        "result": "nc"
      }
    }, 
    "MARQUEE": {
      "onfalse": {
        "comment": "aucun MARQUEE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un MARQUEE", 
        "result": "nc"
      }
    }, 
    "S": {
      "onfalse": {
        "comment": "aucun S", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un S", 
        "result": "nc"
      }
    }, 
    "STRIKE": {
      "onfalse": {
        "comment": "aucun STRIKE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un STRIKE", 
        "result": "nc"
      }
    }, 
    "TEXT_ATTR": {
      "onfalse": {
        "comment": "aucun attribut TEXT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut TEXT", 
        "result": "nc"
      }
    }, 
    "TT": {
      "onfalse": {
        "comment": "aucun TT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un TT", 
        "result": "nc"
      }
    }, 
    "U": {
      "onfalse": {
        "comment": "aucun U", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un U", 
        "result": "nc"
      }
    }, 
    "VLINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut VLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut VLINK", 
        "result": "nc"
      }
    }
  }, 
  "12754": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "12761": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "12763": {
    "CSS_CONTENT": {
      "onfalse": {
        "comment": "aucun contenu textuel ajout\u00e9 par CSS", 
        "result": "c"
      }, 
      "ontrue": {
        "chain": {
          "CSS_BACKGROUND_IMAGE": {
            "onfalse": {
              "comment": "aucune image ajout\u00e9e par CSS", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins une image ajout\u00e9e par CSS", 
              "result": "c"
            }
          }
        }, 
        "comment": "au moins un contenu textuel ajout\u00e9 par CSS", 
        "result": "i"
      }
    }
  }, 
  "12776": {
    "DOCTYPE_VALID": {
      "onfalse": {
        "comment": "le DOCTYPE est absent, mal \u00e9crit ou mal positionn\u00e9", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le DOCTYPE est pr\u00e9sent", 
        "result": "c"
      }
    }
  }, 
  "12808": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "12809": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "12810": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "12811": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "12812": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "12813": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "12814": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "12815": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "12816": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "13575": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AUDIO": {
      "onfalse": {
        "comment": "aucun AUDIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AUDIO", 
        "result": "i"
      }
    }, 
    "CANVAS": {
      "onfalse": {
        "comment": "aucun CANVAS", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un CANVAS", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }, 
    "VIDEO": {
      "onfalse": {
        "comment": "aucun VIDEO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un VIDEO", 
        "result": "i"
      }
    }
  }, 
  "13580": {
    "CSS_UNDERLINE": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment autre que A soulign\u00e9", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment autre que A soulign\u00e9", 
        "result": "nc"
      }
    }
  }, 
  "13588": {
    "FRAME": {
      "onfalse": {
        "comment": "aucun FRAME", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FRAME", 
        "result": "nc"
      }
    }, 
    "FRAMESET": {
      "onfalse": {
        "comment": "aucun FRAMESET", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FRAMESET", 
        "result": "nc"
      }
    }, 
    "NOFRAMES": {
      "onfalse": {
        "comment": "aucun NOFRAMES", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un NOFRAMES", 
        "result": "nc"
      }
    }
  }, 
  "13591": {
    "JS_RESIZE": {
      "onfalse": {
        "comment": "aucune fen\u00eatre redimensionn\u00e9e d\u00e9tect\u00e9e (\u00e0 v\u00e9rifier)", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins une fen\u00eatre redimensionn\u00e9e d\u00e9tect\u00e9e", 
        "result": "nc"
      }
    }
  }, 
  "13598": {
    "HTTP_CHARSET": {
      "onfalse": {
        "comment": "le serveur n'envoie pas les informations relatives au jeu de caract\u00e8res employ\u00e9", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le serveur envoie les informations relatives au jeu de caract\u00e8res employ\u00e9", 
        "result": "c"
      }
    }
  }, 
  "13599": {
    "HTTP_CACHE": {
      "onfalse": {
        "comment": "le serveur envoie les informations permettant la mise en cache des contenus", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "le serveur n'envoie pas d'information permettant la mise en cache des contenus", 
        "result": "nc"
      }
    }
  }, 
  "13601": {
    "404_DEFAULT": {
      "onfalse": {
        "comment": "aucune page 404 par d\u00e9faut", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins une page 404 par d\u00e9faut", 
        "result": "nc"
      }
    }
  }, 
  "13602": {
    "HTTP_404": {
      "onfalse": {
        "comment": "le serveur ne renvoie pas d'ent\u00eate HTTP 404", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le serveur renvoie un ent\u00eate HTTP 404", 
        "result": "c"
      }
    }
  }, 
  "13603": {
    "HTTP_GZIP": {
      "onfalse": {
        "comment": "le serveur envoie des contenus compress\u00e9s aux clients qui les acceptent", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "le serveur n'envoie pas de contenus compress\u00e9s aux clients qui les acceptent", 
        "result": "nc"
      }
    }
  }, 
  "13604": {
    "RSS_PRESENCE": {
      "onfalse": {
        "comment": "absence de syndication", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "RSS_CACHE": {
            "onfalse": {
              "comment": "absence de MAJ", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "pr\u00e9sence de MAJ", 
              "result": "c"
            }
          }
        }, 
        "comment": "pr\u00e9sence de syndication", 
        "result": "i"
      }
    }
  }, 
  "13605": {
    "RSS_PRESENCE": {
      "onfalse": {
        "comment": "absence de syndication", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "RSS_ABSOLUTE_LINKS": {
            "onfalse": {
              "comment": "aucun hyperlien non absolu dans les fils de syndication", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un hyperlien non absolu dans les fils de syndication", 
              "result": "nc"
            }
          }
        }, 
        "comment": "pr\u00e9sence de syndication", 
        "result": "i"
      }
    }
  }, 
  "13606": {
    "LINK_ALTERN_ATOM": {
      "onfalse": {
        "chain": {
          "LINK_ALTERN_RSS": {
            "onfalse": {
              "comment": "aucun LINK de type ATOM ou RSS", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un LINK de type RSS", 
              "result": "c"
            }
          }
        }, 
        "comment": "aucun LINK de type ATOM", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins un LINK de type ATOM", 
        "result": "c"
      }
    }
  }, 
  "13608": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "NESTED_TABLE": {
            "onfalse": {
              "comment": "aucun TABLE imbriqu\u00e9", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE imbriqu\u00e9", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "13616": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "13617": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "13623": {
    "ROBOTS_PRESENCE": {
      "onfalse": {
        "comment": "le robots.txt \u00e0 la racine du site est absent ou vide", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le robots.txt \u00e0 la racine du site est pr\u00e9sent et non vide", 
        "result": "c"
      }
    }
  }, 
  "13624": {
    "META_DESCRIPTION_FILLED": {
      "onfalse": {
        "comment": "aucun META DESCRIPTION ou META DESCRIPTION vide", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le META DESCRIPTION est non vide", 
        "result": "i"
      }
    }
  }, 
  "13625": {
    "FAVICON": {
      "onfalse": {
        "comment": "aucun appel valide \u00e0 un favicon", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "un appel valide \u00e0 un favicon", 
        "result": "c"
      }
    }
  }, 
  "13629": {
    "CSS_MEDIA_PRINT": {
      "onfalse": {
        "comment": "aucune CSS pour l'impression", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "au moins une CSS pour l'impression", 
        "result": "c"
      }
    }
  }, 
  "13630": {
    "CSS_GENERIC_FONT": {
      "onfalse": {
        "comment": "aucune CSS ne se termine par une police non g\u00e9n\u00e9rique", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une CSS se termine par une police non g\u00e9n\u00e9rique", 
        "result": "nc"
      }
    }
  }, 
  "13631": {
    "CSS_FONT_SIZE_W_ABSOLUTE_VALUE": {
      "onfalse": {
        "comment": "aucun FONT-SIZE n'est d\u00e9fini en taille absolue", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FONT-SIZE est d\u00e9fini en taille absolue", 
        "result": "nc"
      }
    }
  }, 
  "13635": {
    "HTTP_CONTENT_LANGUAGE": {
      "onfalse": {
        "comment": "le serveur n'envoie pas l'indication de la langue principale du contenu", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le serveur envoie l'indication de la langue principale du contenu", 
        "result": "i"
      }
    }
  }, 
  "13641": {
    "META_CHARSET_VALID": {
      "onfalse": {
        "comment": "aucun META CONTENT-TYPE pr\u00e9cisant le CHARSET", 
        "result": "nc"
      }, 
      "ontrue": {
        "chain": {
          "META_CHARSET_REAL": {
            "onfalse": {
              "comment": "le CHARSET pr\u00e9cis\u00e9 par le META CONTENT-TYPE ne correspond pas au charset r\u00e9\u00e9l", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "le CHARSET pr\u00e9cis\u00e9 par le META CONTENT-TYPE correspond au charset r\u00e9\u00e9l", 
              "result": "c"
            }
          }
        }, 
        "comment": "le META CONTENT-TYPE pr\u00e9cisant le CHARSET est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "13642": {
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "CSS_IMG_RESIZE": {
            "onfalse": {
              "comment": "aucun IMG avec un WIDTH ou HEIGHT redimensionn\u00e9", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec un WIDTH ou HEIGHT redimensionn\u00e9", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "13649": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "13654": {
    "ROBOTS_W_VALID_SITEMAP": {
      "onfalse": {
        "comment": "absence du SITEMAP ou du robots.txt", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "pr\u00e9sence du SITEMAP", 
        "result": "c"
      }
    }
  }, 
  "13655": {
    "CSS_FONTS_NUMBER": {
      "onfalse": {
        "comment": "pas plus de 3 polices d\u00e9finies", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "plus de 3 polices d\u00e9finies", 
        "result": "nc"
      }
    }
  }, 
  "13657": {
    "CSS_MEDIA_HANDHELD": {
      "onfalse": {
        "comment": "aucune CSS pour le mobile", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "au moins une CSS pour le mobile", 
        "result": "c"
      }
    }
  }, 
  "13659": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT_IN_HEAD": {
            "onfalse": {
              "chain": {
                "SCRIPT_AT_END": {
                  "onfalse": {
                    "comment": "au moins un SCRIPT non plac\u00e9 \u00e0 la fin du code", 
                    "result": "nc"
                  }, 
                  "ontrue": {
                    "comment": "aucun SCRIPT non plac\u00e9 \u00e0 la fin du code", 
                    "result": "c"
                  }
                }
              }, 
              "comment": "aucun SCRIPT dans le HEAD", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT dans le HEAD", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "13661": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT_WO_SRC": {
            "onfalse": {
              "comment": "aucun SCRIPT interne", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT interne", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "13662": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "JS_W_CR": {
            "onfalse": {
              "chain": {
                "JS_W_REDUDANT_SPACES": {
                  "onfalse": {
                    "chain": {
                      "JS_W_COMMENTS": {
                        "onfalse": {
                          "comment": "aucun JS avec des commentaires", 
                          "result": "c"
                        }, 
                        "ontrue": {
                          "comment": "au moins un JS avec des commentaires", 
                          "result": "nc"
                        }
                      }
                    }, 
                    "comment": "aucun JS avec des espaces inutiles", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un JS avec des espaces inutiles", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "aucun JS avec des retours \u00e0 la ligne", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un JS avec des retours \u00e0 la ligne", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "13666": {
    "FRAME": {
      "onfalse": {
        "comment": "aucun FRAME", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FRAME_WO_FILLED_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun FRAME avec un attribut TITLE absent ou vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un FRAME avec un attribut TITLE absent ou vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FRAME", 
        "result": "i"
      }
    }, 
    "IFRAME": {
      "onfalse": {
        "comment": "aucun IFRAME", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IFRAME_WO_FILLED_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun IFRAME avec un attribut TITLE absent ou vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IFRAME avec un attribut TITLE absent ou vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IFRAME", 
        "result": "i"
      }
    }
  }, 
  "13667": {
    "FRAME_W_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun FRAME avec un attribut TITLE non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FRAME_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun FRAME sans un attribut TITLE non vide et unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un FRAME avec un attribut TITLE non vide ou non unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FRAME avec un attribut TITLE", 
        "result": "i"
      }
    }, 
    "IFRAME_W_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun IFRAME avec un attribut TITLE non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IFRAME_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun IFRAME sans un attribut TITLE non vide et unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un IFRAME avec un attribut TITLE non vide ou non unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IFRAME avec un attribut TITLE", 
        "result": "i"
      }
    }
  }, 
  "13678": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "13679": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }, 
    "TEXTAREA": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "13680": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "13681": {
    "FORM_WO_FIELDSET": {
      "onfalse": {
        "comment": "aucun FORM sans FIELDSET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM sans FIELDSET", 
        "result": "i"
      }
    }
  }, 
  "13682": {
    "FIELDSET": {
      "onfalse": {
        "comment": "aucun FIELDSET", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FIELDSET_WO_LEGEND": {
            "onfalse": {
              "comment": "au moins un LEGEND", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "aucun LEGEND", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FIELDSET", 
        "result": "i"
      }
    }
  }, 
  "13683": {
    "LEGEND": {
      "onfalse": {
        "comment": "aucun LEGEND", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "LEGEND_WO_FILLED_AND_UNIQUE_TEXT": {
            "onfalse": {
              "comment": "aucun LEGEND vide ou non unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un LEGEND vide ou non unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un LEGEND", 
        "result": "i"
      }
    }
  }, 
  "13684": {
    "SELECT": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "OPTGROUP": {
            "onfalse": {
              "comment": "aucun OPTGROUP", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un OPTGROUP", 
              "result": "c"
            }
          }
        }, 
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }
  }, 
  "13685": {
    "OPTGROUP": {
      "onfalse": {
        "comment": "aucun OPTGROUP", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "OPTGROUP_WO_FILLED_LABEL_ATTR": {
            "onfalse": {
              "comment": "aucun OPTGROUP sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un OPTGROUP sans LABEL", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un OPTGROUP", 
        "result": "i"
      }
    }
  }, 
  "13686": {
    "OPTGROUP": {
      "onfalse": {
        "comment": "aucun OPTGROUP", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "OPTGROUP_WO_FILLED_AND_UNIQUE_LABEL_ATTR": {
            "onfalse": {
              "comment": "tous les OPTGROUP poss\u00e8dent un attribut LABEL unique et non vide", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un OPTGROUP ne poss\u00e8dent pas d'attribut LABEL unique et non vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un OPTGROUP", 
        "result": "i"
      }
    }
  }, 
  "13687": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_CHECKBOX_WO_FILLED_AND_UNIQUE_ID": {
            "onfalse": {
              "comment": "aucun INPUT de type CHECKBOX sans ID unique", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_CHECKBOX_WO_FILLED_TITLE_ATTR_WO_UNIQUE_ID": {
                  "onfalse": {
                    "comment": "aucun INPUT de type CHECKBOX sans TITLE rempli et sans ID unique", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins INPUT de type CHECKBOX sans TITLE rempli et sans ID unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type CHECKBOX sans ID unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_FILE_WO_FILLED_AND_UNIQUE_ID": {
            "onfalse": {
              "comment": "aucun INPUT de type FILE sans ID unique", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_FILE_WO_FILLED_TITLE_ATTR_WO_UNIQUE_ID": {
                  "onfalse": {
                    "comment": "aucun INPUT de type FILE sans TITLE rempli et sans ID unique", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type FILE sans TITLE rempli et sans ID unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type FILE sans ID unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_PASSWORD_WO_FILLED_AND_UNIQUE_ID": {
            "onfalse": {
              "comment": "aucun INPUT de type PASSWORD sans ID unique", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_PASSWORD_WO_FILLED_TITLE_ATTR_WO_UNIQUE_ID": {
                  "onfalse": {
                    "comment": "aucun INPUT de type PASSWORD sans TITLE rempli et sans ID unique", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type PASSWORD sans TITLE rempli et sans ID unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type PASSWORD sans ID unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_RADIO_WO_FILLED_AND_UNIQUE_ID": {
            "onfalse": {
              "comment": "aucun INPUT de type RADIO sans ID unique", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_RADIO_WO_FILLED_TITLE_ATTR_WO_UNIQUE_ID": {
                  "onfalse": {
                    "comment": "aucun INPUT de type RADIO sans TITLE rempli et sans ID unique", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type RADIO sans TITLE rempli et sans ID unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type RADIO sans ID unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_TEXT_WO_FILLED_AND_UNIQUE_ID": {
            "onfalse": {
              "comment": "aucun INPUT de type TEXT sans ID unique", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_TEXT_WO_FILLED_TITLE_ATTR_WO_UNIQUE_ID": {
                  "onfalse": {
                    "comment": "aucun INPUT de type TEXT sans TITLE rempli et sans ID unique", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type TEXT sans TITLE rempli et sans ID unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type TEXT sans ID unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SELECT_WO_FILLED_AND_UNIQUE_ID": {
            "onfalse": {
              "comment": "aucun SELECT sans ID unique", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "SELECT_WO_FILLED_TITLE_ATTR_WO_UNIQUE_ID": {
                  "onfalse": {
                    "comment": "aucun TEXTAREA sans TITLE rempli et sans ID unique", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TEXTAREA sans TITLE rempli et sans ID unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un SELECT sans ID unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }, 
    "TEXTAREA": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TEXTAREA_WO_FILLED_AND_UNIQUE_ID": {
            "onfalse": {
              "comment": "aucun TEXTAREA sans ID unique", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "TEXTAREA_WO_FILLED_TITLE_ATTR_WO_UNIQUE_ID": {
                  "onfalse": {
                    "comment": "aucun TEXTAREA sans TITLE rempli et sans ID unique", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TEXTAREA sans TITLE rempli et sans ID unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un TEXTAREA sans ID unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "13688": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_CHECKBOX_WO_LABEL": {
            "onfalse": {
              "comment": "aucun INPUT de type CHECKBOX sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_CHECKBOX_WO_FILLED_TITLE_ATTR_WO_LABEL": {
                  "onfalse": {
                    "comment": "aucun INPUT de type CHECKBOX sans LABEL et sans TITLE", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type CHECKBOX sans LABEL et sans TITLE", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type CHECKBOX sans LABEL", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_FILE_WO_LABEL": {
            "onfalse": {
              "comment": "aucun INPUT de type FILE sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_FILE_WO_FILLED_TITLE_ATTR_WO_LABEL": {
                  "onfalse": {
                    "comment": "aucun INPUT de type FILE sans LABEL et sans TITLE", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type FILE sans LABEL et sans TITLE", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type FILE sans LABEL", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_PASSWORD_WO_LABEL": {
            "onfalse": {
              "comment": "aucun INPUT de type PASSWORD sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_PASSWORD_WO_FILLED_TITLE_ATTR_WO_LABEL": {
                  "onfalse": {
                    "comment": "aucun INPUT de type PASSWORD sans LABEL et sans TITLE", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type PASSWORD sans LABEL et sans TITLE", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type PASSWORD sans LABEL", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_RADIO_WO_LABEL": {
            "onfalse": {
              "comment": "aucun INPUT de type RADIO sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_RADIO_WO_FILLED_TITLE_ATTR_WO_LABEL": {
                  "onfalse": {
                    "comment": "aucun INPUT de type RADIO sans LABEL et sans TITLE", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type RADIO sans LABEL et sans TITLE", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type RADIO sans LABEL", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_TEXT_WO_LABEL": {
            "onfalse": {
              "comment": "aucun INPUT de type TEXT sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_TEXT_WO_FILLED_TITLE_ATTR_WO_LABEL": {
                  "onfalse": {
                    "comment": "aucun INPUT de type TEXT sans LABEL et sans TITLE", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type TEXT sans LABEL et sans TITLE", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type TEXT sans LABEL", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SELECT_WO_LABEL": {
            "onfalse": {
              "comment": "aucun SELECT sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "SELECT_WO_FILLED_TITLE_ATTR_WO_LABEL": {
                  "onfalse": {
                    "comment": "aucun SELECT sans LABEL et sans TITLE", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un SELECT sans LABEL et sans TITLE", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un SELECT avec LABEL", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }, 
    "TEXTAREA": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TEXTAREA_WO_LABEL": {
            "onfalse": {
              "comment": "aucun TEXTAREA sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "chain": {
                "TEXTAREA_WO_FILLED_TITLE_ATTR_WO_LABEL": {
                  "onfalse": {
                    "comment": "aucun TEXTAREA sans LABEL et sans TITLE", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TEXTAREA sans LABEL et sans TITLE", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un TEXTAREA sans LABEL", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "13690": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "13691": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "13692": {
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "TEXTAREA": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "13693": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "APPLET_WO_FILLED_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun APPLET avec ALT vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un APPLET avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA": {
      "onfalse": {
        "comment": "aucun AREA", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "AREA_WO_FILLED_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun AREA avec ALT vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un AREA avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un AREA", 
        "result": "i"
      }
    }, 
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_WO_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun IMG avec ALT vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_IMAGE_WO_FILLED_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type IMAGE sans ALT non vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type IMAGE sans ALT non vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un INPUT de type IMAGE", 
        "result": "i"
      }
    }
  }, 
  "13695": {
    "AREA": {
      "onfalse": {
        "comment": "aucun AREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type IMAGE", 
        "result": "i"
      }
    }
  }, 
  "13696": {
    "APPLET_IN_A": {
      "onfalse": {
        "comment": "aucun APPLET dans un A", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET dans un A", 
        "result": "i"
      }
    }, 
    "APPLET_IN_BUTTON": {
      "onfalse": {
        "comment": "aucun APPLET dans un BUTTON", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET dans un BUTTON", 
        "result": "i"
      }
    }, 
    "EMBED_IN_A": {
      "onfalse": {
        "comment": "aucun EMBED dans un A", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED dans un A", 
        "result": "i"
      }
    }, 
    "EMBED_IN_BUTTON": {
      "onfalse": {
        "comment": "aucun EMBED dans un BUTTON", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED dans un BUTTON", 
        "result": "i"
      }
    }, 
    "IMG_IN_A": {
      "onfalse": {
        "comment": "aucun IMG dans un A", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG dans un A", 
        "result": "i"
      }
    }, 
    "IMG_IN_BUTTON": {
      "onfalse": {
        "comment": "aucun IMG dans un BUTTON", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG dans un BUTTON", 
        "result": "i"
      }
    }, 
    "OBJECT_IN_A": {
      "onfalse": {
        "comment": "aucun OBJECT dans un A", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT dans un A", 
        "result": "i"
      }
    }, 
    "OBJECT_IN_BUTTON": {
      "onfalse": {
        "comment": "aucun OBJECT dans un BUTTON", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT dans un BUTTON", 
        "result": "i"
      }
    }
  }, 
  "13697": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "13698": {
    "APPLET_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun APPLET avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "APPLET_W_MORE_THAN_120_CHAR_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun APPLET avec ALT de plus de 120 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un APPLET avec ALT de plus de 120 caract\u00e8res", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un APPLET avec ALT non vide", 
        "result": "i"
      }
    }, 
    "AREA_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun AREA avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "AREA_W_MORE_THAN_120_CHAR_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun AREA avec ALT de plus de 120 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un AREA avec ALT de plus de 120 caract\u00e8res", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un AREA avec ALT non vide", 
        "result": "i"
      }
    }, 
    "IMG_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun IMG avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_W_MORE_THAN_120_CHAR_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun IMG avec ALT de plus de 120 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec ALT de plus de 120 caract\u00e8res", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un IMG avec ALT non vide", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_IMAGE_W_MORE_THAN_120_CHAR_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type IMAGE avec ALT de plus de 120 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type IMAGE avec ALT de plus de 120 caract\u00e8res", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type IMAG avec ALT non vide", 
        "result": "i"
      }
    }
  }, 
  "13699": {
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_WO_VALID_LONGDESC": {
            "onfalse": {
              "comment": "aucun IMG avec un attribut LONGDESC invalide", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec un attribut LONGDESC invalide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "13700": {
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "13701": {
    "IMG_W_FILLED_ALT_ATTR_OR_FILLED_LONGDESC_ATTR": {
      "onfalse": {
        "comment": "aucun IMG avec ALT ou LONGDESC non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG avec ALT ou LONGDESC non vide", 
        "result": "i"
      }
    }
  }, 
  "13702": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type IMAGE", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "13704": {
    "APPLET_NOT_IN_A_OR_BUTTON_WO_ANCHOR": {
      "onfalse": {
        "comment": "aucun APPLET ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "i"
      }
    }, 
    "EMBED_NOT_IN_A_OR_BUTTON_WO_ANCHOR": {
      "onfalse": {
        "comment": "aucun EMBED ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "i"
      }
    }, 
    "IMG_ANIMATED_NOT_IN_BUTTON_NOT_IN_A": {
      "onfalse": {
        "comment": "aucun IMG anim\u00e9e ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG anim\u00e9e ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "i"
      }
    }, 
    "OBJECT_NOT_IN_A_OR_BUTTON_WO_ANCHOR": {
      "onfalse": {
        "comment": "aucun OBJECT ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "i"
      }
    }
  }, 
  "13705": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "13707": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "13708": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "13709": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "13710": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "13711": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "13713": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "13714": {
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }
  }, 
  "13715": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "IMG_ANIMATED": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment anim\u00e9", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment anim\u00e9", 
        "result": "i"
      }
    }, 
    "RESOURCE_MULTIMEDIA_WO_AUDIO": {
      "onfalse": {
        "comment": "aucune ressource multim\u00e9dia", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ressource multim\u00e9dia", 
        "result": "i"
      }
    }
  }, 
  "13716": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "13718": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "IMG_ANIMATED": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment anim\u00e9", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment anim\u00e9", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "13720": {
    "BLINK": {
      "onfalse": {
        "comment": "aucun BLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BLINK", 
        "result": "nc"
      }
    }
  }, 
  "13721": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "IMG_ANIMATED": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment anim\u00e9", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment anim\u00e9", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "13722": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "13724": {
    "MARQUEE": {
      "onfalse": {
        "comment": "aucun MARQUEE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un MARQUEE", 
        "result": "nc"
      }
    }
  }, 
  "13725": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "IMG_ANIMATED": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment anim\u00e9", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment anim\u00e9", 
        "result": "i"
      }
    }, 
    "RESOURCE_MULTIMEDIA_WO_AUDIO": {
      "onfalse": {
        "comment": "aucune ressource multim\u00e9dia", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ressource multim\u00e9dia", 
        "result": "i"
      }
    }
  }, 
  "13728": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "13729": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "13730": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "RESSOURCE_MULTIMEDIA": {
            "onfalse": {
              "comment": "aucune ressource multim\u00e9dia", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins une ressource multim\u00e9dia", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "RESSOURCE_MULTIMEDIA": {
            "onfalse": {
              "comment": "aucune ressource multim\u00e9dia", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins une ressource multim\u00e9dia", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "13731": {
    "BGSOUND": {
      "onfalse": {
        "comment": "aucun BGSOUND", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BGSOUND", 
        "result": "nc"
      }
    }
  }, 
  "13732": {
    "IMG_W_ISMAP_ATTR": {
      "onfalse": {
        "comment": "aucun IMG avec un attribut ISMAP", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG avec un attribut ISMAP", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE_W_ISMAP_TITLE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE avec un attribut ISMAP", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type IMAGE avec un attribut ISMAP", 
        "result": "i"
      }
    }
  }, 
  "13733": {
    "A_W_TARGET_ATTR_BLANK": {
      "onfalse": {
        "comment": "aucun A avec un TARGET blank", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A avec un TARGET blank", 
        "result": "i"
      }
    }, 
    "FORM_W_TARGET_ATTR_BLANK": {
      "onfalse": {
        "comment": "aucun FORM avec un TARGET blank", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM avec un TARGET blank", 
        "result": "i"
      }
    }
  }, 
  "13734": {
    "AREA_W_TARGET_ATTR_BLANK": {
      "onfalse": {
        "comment": "aucun AREA avec un TARGET blank", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA avec un TARGET blank", 
        "result": "i"
      }
    }, 
    "A_W_TARGET_ATTR_BLANK_W_IMG": {
      "onfalse": {
        "comment": "aucun A avec un TARGET blank", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A avec un TARGET blank", 
        "result": "i"
      }
    }
  }, 
  "13735": {
    "JS_EVENT_MOUSE_OR_KEYBOARD": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment avec onclick, onmouseover, onmouseout, onfocus ou onblur", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment avec onclick, onmouseover, onmouseout, onfocus ou onblur", 
        "result": "i"
      }
    }, 
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "13736": {
    "JS_BODY_ONLAD": {
      "onfalse": {
        "comment": "aucun \u00e9v\u00e9nement au chargement de la page", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "JS_POPUP": {
            "onfalse": {
              "comment": "aucune pop-up d\u00e9tect\u00e9e (\u00e0 v\u00e9rifier)", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "au moins une pop-up d\u00e9tect\u00e9e", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un \u00e9v\u00e9nement au chargement de la page", 
        "result": "i"
      }
    }, 
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "13737": {
    "A_W_FILLED_HREF_ATTR_AND_WO_NEGATIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun A avec un HREF", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A avec un HREF", 
        "result": "i"
      }
    }, 
    "BUTTON_WO_NEGATIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun BUTTON", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un BUTTON", 
        "result": "i"
      }
    }, 
    "INPUT_WO_NEGATIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT", 
        "result": "i"
      }
    }, 
    "POSITIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment avec un TABINDEX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment avec un TABINDEX", 
        "result": "i"
      }
    }, 
    "SELECT_WO_NEGATIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_NEGATIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "13738": {
    "META_REFRESH_SHORT": {
      "onfalse": {
        "comment": "aucun META REFRESH avec une dur\u00e9e courte", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "META_REFRESH_URL": {
            "onfalse": {
              "comment": "aucun META REFRESH avec une URL", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "un META REFRESH avec une URL est pr\u00e9sent", 
              "result": "c"
            }
          }
        }, 
        "comment": "un META REFRESH avec une dur\u00e9e courte est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "13739": {
    "JS_REFRESH": {
      "onfalse": {
        "comment": "", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "", 
        "result": "i"
      }
    }
  }, 
  "13740": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "HTTP_REFRESH": {
      "onfalse": {
        "comment": "le serveur n'envoie pas de commande de rafra\u00eechissement de la page", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "le serveur envoie une commande de rafra\u00eechissement de la page", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "13741": {
    "META_REFRESH_SHORT": {
      "onfalse": {
        "comment": "aucun META REFRESH avec une dur\u00e9e courte", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "META_REFRESH_URL": {
            "onfalse": {
              "comment": "aucun META REFRESH avec une URL", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "un META REFRESH avec une URL est pr\u00e9sent", 
              "result": "nc"
            }
          }
        }, 
        "comment": "un META REFRESH avec une dur\u00e9e courte est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "13747": {
    "A_NOT_ANCHOR_SELF": {
      "onfalse": {
        "comment": "aucun A autre qu'une ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "A_NOT_ANCHOR_SELF_WO_TEXT": {
            "onfalse": {
              "comment": "aucun A sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un A sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins A autre qu'une ancre", 
        "result": "i"
      }
    }
  }, 
  "13765": {
    "CSS_BACKGROUND_IMAGE": {
      "onfalse": {
        "comment": "aucune image ajout\u00e9e par CSS", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une image ajout\u00e9e par CSS", 
        "result": "i"
      }
    }, 
    "CSS_CONTENT": {
      "onfalse": {
        "comment": "aucun contenu textuel ajout\u00e9 par CSS", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un contenu textuel ajout\u00e9 par CSS", 
        "result": "i"
      }
    }
  }, 
  "13771": {
    "ALIGN_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALIGN", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALIGN", 
        "result": "nc"
      }
    }, 
    "ALINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALINK", 
        "result": "nc"
      }
    }, 
    "BACKGROUND_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BACKGROUND", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BACKGROUND", 
        "result": "nc"
      }
    }, 
    "BASEFONT": {
      "onfalse": {
        "comment": "aucun BASEFONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BASEFONT", 
        "result": "nc"
      }
    }, 
    "BASEFONT_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BASEFONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BASEFONT", 
        "result": "nc"
      }
    }, 
    "BGCOLOR_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BGCOLOR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BGCOLOR", 
        "result": "nc"
      }
    }, 
    "BLINK": {
      "onfalse": {
        "comment": "aucun BLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BLINK", 
        "result": "nc"
      }
    }, 
    "BORDER_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BORDER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BORDER", 
        "result": "nc"
      }
    }, 
    "CENTER": {
      "onfalse": {
        "comment": "aucun CENTER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un CENTER", 
        "result": "nc"
      }
    }, 
    "COLOR_ATTR": {
      "onfalse": {
        "comment": "aucun attribut COLOR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut COLOR", 
        "result": "nc"
      }
    }, 
    "FONT": {
      "onfalse": {
        "comment": "aucun FONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FONT", 
        "result": "nc"
      }
    }, 
    "LINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut LINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut LINK", 
        "result": "nc"
      }
    }, 
    "MARQUEE": {
      "onfalse": {
        "comment": "aucun MARQUEE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un MARQUEE", 
        "result": "nc"
      }
    }, 
    "S": {
      "onfalse": {
        "comment": "aucun S", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un S", 
        "result": "nc"
      }
    }, 
    "STRIKE": {
      "onfalse": {
        "comment": "aucun STRIKE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un STRIKE", 
        "result": "nc"
      }
    }, 
    "TEXT_ATTR": {
      "onfalse": {
        "comment": "aucun attribut TEXT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut TEXT", 
        "result": "nc"
      }
    }, 
    "TT": {
      "onfalse": {
        "comment": "aucun TT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un TT", 
        "result": "nc"
      }
    }, 
    "U": {
      "onfalse": {
        "comment": "aucun U", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un U", 
        "result": "nc"
      }
    }, 
    "VLINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut VLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut VLINK", 
        "result": "nc"
      }
    }
  }, 
  "13780": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA": {
      "onfalse": {
        "comment": "aucun AREA", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un AREA", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type IMAGE", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "13781": {
    "JS_EVENT_CLICK": {
      "onfalse": {
        "comment": "aucun ONCLICK sur un \u00e9l\u00e9ment focusable", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un ONCLICK sur un \u00e9l\u00e9ment focusable", 
        "result": "i"
      }
    }
  }, 
  "13782": {
    "JS_EVENT_MOUSE_OR_KEYBOARD": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment avec onclick, onmouseover, onmouseout, onfocus ou onblur", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment avec onclick, onmouseover, onmouseout, onfocus ou onblur", 
        "result": "i"
      }
    }
  }, 
  "13786": {
    "JS_EVENT_SPECIFIC": {
      "onfalse": {
        "comment": "aucun ONSCROLL, ONDBLCLICK ou ONCHANGE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un ONSCROLL, ONDBLCLICK ou ONCHANGE", 
        "result": "i"
      }
    }
  }, 
  "13787": {
    "JS_EVENT_BLUR_ON_FOCUS": {
      "onfalse": {
        "comment": "aucun ONFOCUS", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un ONFOCUS", 
        "result": "i"
      }
    }
  }, 
  "13791": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "13792": {
    "DOCTYPE_PRESENT": {
      "onfalse": {
        "comment": "le DOCTYPE est absent ou mal positionn\u00e9", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le DOCTYPE est pr\u00e9sent", 
        "result": "c"
      }
    }
  }, 
  "13793": {
    "DOCTYPE_PRESENT": {
      "onfalse": {
        "comment": "le DOCTYPE est absent ou mal positionn\u00e9", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "le DOCTYPE est pr\u00e9sent", 
        "result": "c"
      }
    }
  }, 
  "13794": {
    "DOCTYPE_PRESENT": {
      "onfalse": {
        "comment": "le DOCTYPE est absent ou mal positionn\u00e9", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "DOCTYPE_VALID": {
            "onfalse": {
              "comment": "le DOCTYPE est absent, mal \u00e9crit ou mal positionn\u00e9", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "le DOCTYPE est pr\u00e9sent", 
              "result": "c"
            }
          }
        }, 
        "comment": "le DOCTYPE est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "13795": {
    "DOCTYPE_HTML_VALID": {
      "onfalse": {
        "comment": "le code est conforme au DOCTYPE", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le code n'est pas conforme au DOCTYPE", 
        "result": "c"
      }
    }
  }, 
  "13796": {
    "LISTING": {
      "onfalse": {
        "comment": "aucun LISTING", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un LISTING", 
        "result": "nc"
      }
    }, 
    "PLAINTEXT": {
      "onfalse": {
        "comment": "aucun PLAINTEXT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un PLAINTEXT", 
        "result": "nc"
      }
    }, 
    "XMP": {
      "onfalse": {
        "comment": "aucun XMP", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un XMP", 
        "result": "nc"
      }
    }
  }, 
  "13797": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "TITLE est pr\u00e9sent", 
        "result": "c"
      }
    }
  }, 
  "13798": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TITLE_W_TEXT": {
            "onfalse": {
              "comment": "TITLE est vide", 
              "result": "nc"
            }, 
            "ontrue": {
              "chain": {
                "TITLE_W_DEFAULT_VALUE": {
                  "onfalse": {
                    "comment": "TITLE est rempli", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "TITLE correspond \u00e0 une valeur par d\u00e9faut", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "TITLE est rempli", 
              "result": "i"
            }
          }
        }, 
        "comment": "TITLE est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "13800": {
    "H1": {
      "onfalse": {
        "comment": "aucun H1", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "au moins un H1", 
        "result": "c"
      }
    }
  }, 
  "13801": {
    "H1": {
      "onfalse": {
        "comment": "aucun H1", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H1_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H1 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H1 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H1", 
        "result": "i"
      }
    }, 
    "H2": {
      "onfalse": {
        "comment": "aucun H2", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H2_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H2 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H2 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H2", 
        "result": "i"
      }
    }, 
    "H3": {
      "onfalse": {
        "comment": "aucun H3", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H3_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H3 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H3 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H3", 
        "result": "i"
      }
    }, 
    "H4": {
      "onfalse": {
        "comment": "aucun H4", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H4_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H4 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H4 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H4", 
        "result": "i"
      }
    }, 
    "H5": {
      "onfalse": {
        "comment": "aucun H5", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H5_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H5 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H5 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H5", 
        "result": "i"
      }
    }, 
    "H6": {
      "onfalse": {
        "comment": "aucun H6", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H6_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H6 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H6 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H6", 
        "result": "i"
      }
    }
  }, 
  "13802": {
    "H1_TO_H6": {
      "onfalse": {
        "comment": "aucun H1, H2, H3, H4, H5 ni H6", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H1_TO_H6_HIERACHICAL_ERROR": {
            "onfalse": {
              "comment": "aucune interruption dans la hi\u00e9rarchie des titres", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins une interruption dans la hi\u00e9rarchie des titres", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un  H1, H2, H3, H4, H5 ou H6", 
        "result": "i"
      }
    }
  }, 
  "13804": {
    "FAKE_UNORDERED_LIST": {
      "onfalse": {
        "comment": "aucune liste simul\u00e9e", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins une liste simul\u00e9e", 
        "result": "nc"
      }
    }
  }, 
  "13805": {
    "FAKE_ORDERED_LIST": {
      "onfalse": {
        "comment": "aucune liste simul\u00e9e", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins une liste simul\u00e9e", 
        "result": "nc"
      }
    }
  }, 
  "13806": {
    "DL": {
      "onfalse": {
        "comment": "aucun DL", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "DL_WO_DT_FIRST": {
            "onfalse": {
              "comment": "aucun DL sans DT en premier", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un DL sans DT en premier", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un DL", 
        "result": "i"
      }
    }
  }, 
  "13810": {
    "ABBR_W_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun ABBR sans TITLE non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un ABBR avec TITLE non vide", 
        "result": "i"
      }
    }
  }, 
  "13811": {
    "ACRONYM_W_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun ACRONYM sans TITLE non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un ACRONYM avec un TITLE non vide", 
        "result": "i"
      }
    }
  }, 
  "13813": {
    "TABLE_FOR_DATA2": {
      "onfalse": {
        "comment": "aucun TABLE de donn\u00e9es", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_FOR_DATA2_W_TH": {
            "onfalse": {
              "chain": {
                "TABLE_W_FAKE_TH": {
                  "onfalse": {
                    "comment": "aucun TABLE avec des TH simul\u00e9s", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TABLE avec des TH simul\u00e9s", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un TABLE de donn\u00e9es sans TH", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "aucun TABLE de donn\u00e9es sans TH", 
              "result": "c"
            }
          }
        }, 
        "comment": "au moins un TABLE de donn\u00e9es", 
        "result": "i"
      }
    }
  }, 
  "13815": {
    "TABLE_W_TH_LINE_OR_COLUMN": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TH_W_FILLED_AND_UNIQUE_ID": {
            "onfalse": {
              "chain": {
                "TD_WO_TH": {
                  "onfalse": {
                    "comment": "aucun TD dont l'attribut HEADERS ne correspond \u00e0 aucun TH", 
                    "result": "c"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TD dont l'attribut HEADERS ne correspond \u00e0 aucun TH", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "aucun TH sans ID unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un TH sans ID unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "13816": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "13818": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "13819": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_FOR_DATA": {
            "onfalse": {
              "comment": "aucun TABLE de donn\u00e9es", 
              "result": "i"
            }, 
            "ontrue": {
              "chain": {
                "TABLE_FOR_DATA_WO_CAPTION": {
                  "onfalse": {
                    "comment": "tous les TABLE ont un CAPTION", 
                    "result": "c"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TABLE sans CAPTION", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un TABLE de donn\u00e9es", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "13820": {
    "TABLE_FOR_DATA3": {
      "onfalse": {
        "comment": "aucun TABLE de donn\u00e9es", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_FOR_DATA4": {
            "onfalse": {
              "comment": "tous les TABLE ont des SUMMARY", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE sans SUMMARY", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE de donn\u00e9es", 
        "result": "i"
      }
    }
  }, 
  "13821": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "CAPTION_WO_UNIQUE_TEXT": {
            "onfalse": {
              "comment": "au moins un CAPTION sans contenu textuel unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "tous les CAPTION ont un contenu textuel unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "13822": {
    "TABLE_W_SUMMARY_ATTR": {
      "onfalse": {
        "comment": "aucun TABLE poss\u00e9dant un SUMMARY", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_W_FILLED_AND_UNIQUE_SUMMARY_ATTR": {
            "onfalse": {
              "chain": {
                "TABLE_W_SUMMARY_ATTR_EQUALS_TO_CAPTION": {
                  "onfalse": {
                    "comment": "aucun TABLE avec un SUMMARY et un CAPTION identiques", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TABLE avec un SUMMARY et un CAPTION identiques", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "aucun TABLE avec un SUMMARY vide ou non unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE avec un SUMMARY vide ou non unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE poss\u00e9dant un SUMMARY", 
        "result": "i"
      }
    }
  }, 
  "14291": {
    "ALIGN_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALIGN", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALIGN", 
        "result": "nc"
      }
    }, 
    "ALINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALINK", 
        "result": "nc"
      }
    }, 
    "BACKGROUND_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BACKGROUND", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BACKGROUND", 
        "result": "nc"
      }
    }, 
    "BASEFONT": {
      "onfalse": {
        "comment": "aucun BASEFONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BASEFONT", 
        "result": "nc"
      }
    }, 
    "BASEFONT_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BASEFONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BASEFONT", 
        "result": "nc"
      }
    }, 
    "BGCOLOR_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BGCOLOR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BGCOLOR", 
        "result": "nc"
      }
    }, 
    "BLINK": {
      "onfalse": {
        "comment": "aucun BLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BLINK", 
        "result": "nc"
      }
    }, 
    "BORDER_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BORDER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BORDER", 
        "result": "nc"
      }
    }, 
    "CENTER": {
      "onfalse": {
        "comment": "aucun CENTER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un CENTER", 
        "result": "nc"
      }
    }, 
    "COLOR_ATTR": {
      "onfalse": {
        "comment": "aucun attribut COLOR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut COLOR", 
        "result": "nc"
      }
    }, 
    "FONT": {
      "onfalse": {
        "comment": "aucun FONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FONT", 
        "result": "nc"
      }
    }, 
    "LINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut LINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut LINK", 
        "result": "nc"
      }
    }, 
    "MARQUEE": {
      "onfalse": {
        "comment": "aucun MARQUEE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un MARQUEE", 
        "result": "nc"
      }
    }, 
    "S": {
      "onfalse": {
        "comment": "aucun S", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un S", 
        "result": "nc"
      }
    }, 
    "STRIKE": {
      "onfalse": {
        "comment": "aucun STRIKE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un STRIKE", 
        "result": "nc"
      }
    }, 
    "TEXT_ATTR": {
      "onfalse": {
        "comment": "aucun attribut TEXT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut TEXT", 
        "result": "nc"
      }
    }, 
    "TT": {
      "onfalse": {
        "comment": "aucun TT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un TT", 
        "result": "nc"
      }
    }, 
    "U": {
      "onfalse": {
        "comment": "aucun U", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un U", 
        "result": "nc"
      }
    }, 
    "VLINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut VLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut VLINK", 
        "result": "nc"
      }
    }
  }, 
  "14303": {
    "CSS_CONTENT": {
      "onfalse": {
        "comment": "aucun contenu textuel ajout\u00e9 par CSS", 
        "result": "c"
      }, 
      "ontrue": {
        "chain": {
          "CSS_BACKGROUND_IMAGE": {
            "onfalse": {
              "comment": "aucune image ajout\u00e9e par CSS", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins une image ajout\u00e9e par CSS", 
              "result": "c"
            }
          }
        }, 
        "comment": "au moins un contenu textuel ajout\u00e9 par CSS", 
        "result": "i"
      }
    }
  }, 
  "14336": {
    "DOCTYPE_VALID": {
      "onfalse": {
        "comment": "le DOCTYPE est absent, mal \u00e9crit ou mal positionn\u00e9", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le DOCTYPE est pr\u00e9sent", 
        "result": "c"
      }
    }
  }, 
  "14486": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "nc"
      }, 
      "ontrue": {
        "chain": {
          "TITLE_W_TEXT": {
            "onfalse": {
              "comment": "TITLE est vide", 
              "result": "nc"
            }, 
            "ontrue": {
              "chain": {
                "TITLE_W_DEFAULT_VALUE": {
                  "onfalse": {
                    "comment": "TITLE est rempli", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "TITLE correspond \u00e0 une valeur par d\u00e9faut", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "TITLE est rempli", 
              "result": "i"
            }
          }
        }, 
        "comment": "TITLE est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "14522": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "14529": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "14576": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "14577": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "14578": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "14579": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "14580": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "14581": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "14582": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "14583": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "14584": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "14657": {
    "HTTP_CACHE": {
      "onfalse": {
        "comment": "le serveur envoie les informations permettant la mise en cache des contenus", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "le serveur n'envoie pas d'information permettant la mise en cache des contenus", 
        "result": "nc"
      }
    }
  }, 
  "16170": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "APPLET_WO_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun APPLET sans ALT", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un APPLET sans ALT", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA": {
      "onfalse": {
        "comment": "aucun AREA", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "AREA_WO_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun AREA sans ALT", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un AREA sans ALT", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un AREA", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "EMBED_WO_ALTERNATIVE": {
            "onfalse": {
              "comment": "aucun EMBED sans alternative", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un EMBED sans alternative", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_WO_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun IMG avec ALT vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_IMAGE_WO_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type IMAGE sans ALT", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type IMAGE sans ALT", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un INPUT de type IMAGE", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "OBJECT_WO_ALTERNATIVE": {
            "onfalse": {
              "comment": "aucun OBJECT sans alternative", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un OBJECT sans alternative", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "16171": {
    "APPLET_W_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun APPLET avec un attribut ALT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "APPLET_W_MORE_THAN_80_CHAR_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun APPLET avec ALT de plus de 80 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un APPLET avec ALT de plus de 80 caract\u00e8res", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un APPLET avec un attribut ALT", 
        "result": "i"
      }
    }, 
    "AREA_W_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun AREA avec un attribut ALT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "AREA_W_MORE_THAN_80_CHAR_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun AREA avec ALT de plus de 80 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un AREA avec ALT de plus de 80 caract\u00e8res", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un AREA avec un attribut ALT", 
        "result": "i"
      }
    }, 
    "IMG_W_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun IMG avec un attribut ALT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_W_MORE_THAN_80_CHAR_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun IMG avec ALT de plus de 80 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec ALT de plus de 80 caract\u00e8res", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG avec un attribut ALT", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE_W_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE avec un attribut ALT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_IMAGE_W_MORE_THAN_80_CHAR_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type IMAGE avec ALT de plus de 80 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type IMAGE avec ALT de plus de 80 caract\u00e8res", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un INPUT de type IMAG avec un attribut ALT", 
        "result": "i"
      }
    }
  }, 
  "16172": {
    "APPLET_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun APPLET avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "APPLET_W_ALT_ATTR_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun APPLET avec ALT dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un APPLET avec ALT dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un APPLET avec ALT non vide", 
        "result": "i"
      }
    }, 
    "AREA_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun AREA avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "AREA_W_ALT_ATTR_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun AREA avec ALT dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un AREA avec ALT dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un AREA avec ALT non vide", 
        "result": "i"
      }
    }, 
    "IMG_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun IMG avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_W_ALT_ATTR_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun IMG avec ALT dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec ALT dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG avec ALT non vide", 
        "result": "i"
      }
    }
  }, 
  "16177": {
    "FRAME": {
      "onfalse": {
        "comment": "aucun FRAME", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FRAME", 
        "result": "nc"
      }
    }, 
    "FRAMESET": {
      "onfalse": {
        "comment": "aucun FRAMESET", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FRAMESET", 
        "result": "nc"
      }
    }, 
    "NOFRAMES": {
      "onfalse": {
        "comment": "aucun NOFRAMES", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un NOFRAMES", 
        "result": "nc"
      }
    }
  }, 
  "16178": {
    "FRAMESET": {
      "onfalse": {
        "comment": "aucun FRAMESET", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "NOFRAMES": {
            "onfalse": {
              "comment": "aucun NOFRAMES", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "au moins un NOFRAMES", 
              "result": "c"
            }
          }
        }, 
        "comment": "au moins un FRAMESET", 
        "result": "i"
      }
    }
  }, 
  "16179": {
    "NOFRAMES": {
      "onfalse": {
        "comment": "aucun NOFRAMES", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un NOFRAMES", 
        "result": "i"
      }
    }
  }, 
  "16180": {
    "NOFRAMES": {
      "onfalse": {
        "comment": "aucun NOFRAMES", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un NOFRAMES", 
        "result": "i"
      }
    }
  }, 
  "16181": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AUDIO": {
      "onfalse": {
        "comment": "aucun AUDIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AUDIO", 
        "result": "i"
      }
    }, 
    "CANVAS": {
      "onfalse": {
        "comment": "aucun CANVAS", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un CANVAS", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }, 
    "VIDEO": {
      "onfalse": {
        "comment": "aucun VIDEO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un VIDEO", 
        "result": "i"
      }
    }
  }, 
  "16184": {
    "MORE_EXT_THEN_INT_LINKS": {
      "onfalse": {
        "comment": "la page comporte plus de liens internes que de liens externes", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "la page comporte plus de liens externes que de liens internes", 
        "result": "nc"
      }
    }
  }, 
  "16190": {
    "HTML_W_LANG_ATTR_VALID": {
      "onfalse": {
        "comment": "l'attribut LANG de HTML est vide, absent ou incorrect", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "l'attribut LANG de HTML est correct", 
        "result": "i"
      }
    }
  }, 
  "16191": {
    "META_DESCRIPTION_FILLED": {
      "onfalse": {
        "comment": "aucun META DESCRIPTION ou META DESCRIPTION vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "le META DESCRIPTION est non vide", 
        "result": "i"
      }
    }
  }, 
  "16192": {
    "META_DESCRIPTION_FILLED": {
      "onfalse": {
        "comment": "aucun META DESCRIPTION ou META DESCRIPTION vide", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le META DESCRIPTION est non vide", 
        "result": "i"
      }
    }
  }, 
  "16194": {
    "META_DESCRIPTION_FILLED": {
      "onfalse": {
        "comment": "aucun META DESCRIPTION ou META DESCRIPTION vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "META_DESCRIPTION_W_MORE_THAN_250_CHAR": {
            "onfalse": {
              "comment": "le META DESCRIPTION contient moins de 250 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "le META DESCRIPTION contient plus de 250 caract\u00e8res", 
              "result": "nc"
            }
          }
        }, 
        "comment": "le META DESCRIPTION est non vide", 
        "result": "i"
      }
    }
  }, 
  "16196": {
    "TITLE_W_TEXT": {
      "onfalse": {
        "comment": "TITLE est vide", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "TITLE est rempli", 
        "result": "i"
      }
    }
  }, 
  "16197": {
    "H1": {
      "onfalse": {
        "comment": "aucun H1", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "au moins un H1", 
        "result": "c"
      }
    }
  }, 
  "16203": {
    "ROBOTS_PRESENCE": {
      "onfalse": {
        "comment": "le robots.txt \u00e0 la racine du site est absent ou vide", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le robots.txt \u00e0 la racine du site est pr\u00e9sent et non vide", 
        "result": "c"
      }
    }
  }, 
  "16205": {
    "STYLE_ATTR": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment avec un attribut STYLE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment avec un attribut STYLE", 
        "result": "nc"
      }
    }, 
    "STYLE_INTERNAL": {
      "onfalse": {
        "comment": "aucun STYLE avec du code CSS interne", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un STYLE avec du code CSS interne", 
        "result": "nc"
      }
    }
  }, 
  "16206": {
    "TITLE_W_MORE_THAN_80_CHAR": {
      "onfalse": {
        "comment": "le TITLE contient 80 caract\u00e8res ou moins", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "le TITLE contient plus de 80 caract\u00e8res", 
        "result": "nc"
      }
    }
  }, 
  "16209": {
    "H1": {
      "onfalse": {
        "comment": "aucun H1", 
        "result": "nc"
      }, 
      "ontrue": {
        "chain": {
          "H2": {
            "onfalse": {
              "comment": "aucun H2", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "au moins un H2", 
              "result": "c"
            }
          }
        }, 
        "comment": "au moins un H1", 
        "result": "i"
      }
    }
  }, 
  "16210": {
    "H1": {
      "onfalse": {
        "comment": "aucun H1", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H1_W_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun H1 dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H1 dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H1", 
        "result": "i"
      }
    }, 
    "H2": {
      "onfalse": {
        "comment": "aucun H2", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H2_W_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun H2 dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H2 dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H2", 
        "result": "i"
      }
    }, 
    "H3": {
      "onfalse": {
        "comment": "aucun H3", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H3_W_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun H3 dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H3 dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H3", 
        "result": "i"
      }
    }, 
    "H4": {
      "onfalse": {
        "comment": "aucun H4", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H4_W_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun H4 dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H4 dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H4", 
        "result": "i"
      }
    }, 
    "H5": {
      "onfalse": {
        "comment": "aucun H5", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H5_W_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun H5 dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H5 dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H5", 
        "result": "i"
      }
    }, 
    "H6": {
      "onfalse": {
        "comment": "aucun H6", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H6_W_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun H6 dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H6 dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H6", 
        "result": "i"
      }
    }
  }, 
  "16212": {
    "META_KEYWORDS_FILLED": {
      "onfalse": {
        "comment": "aucun META KEYWORDS ou META KEYWORDS vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "META_KEYWORDS_W_MORE_THAN_10_TERMS": {
            "onfalse": {
              "comment": "le META KEYWORDS contient 10 termes ou moins", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "le META KEYWORDS contient plus de 10 termes", 
              "result": "nc"
            }
          }
        }, 
        "comment": "le META KEYWORDS est non vide", 
        "result": "i"
      }
    }
  }, 
  "16213": {
    "META_KEYWORDS_FILLED": {
      "onfalse": {
        "comment": "aucun META KEYWORDS ou META KEYWORDS vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "le META KEYWORDS est non vide", 
        "result": "i"
      }
    }
  }, 
  "16217": {
    "URL_W_TERMS_NOT_IN_TITLE": {
      "onfalse": {
        "comment": "au moins un des termes pr\u00e9sents dans l'URL est pr\u00e9sent dans le titre", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "aucun des termes pr\u00e9sents dans l'URL n'est pr\u00e9sent dans le titre", 
        "result": "nc"
      }
    }
  }, 
  "16221": {
    "INLINKS": {
      "onfalse": {
        "comment": "moins de 3 liens entrants vers le domaine", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "au moins 3 liens entrants vers le domaine", 
        "result": "c"
      }
    }
  }, 
  "16229": {
    "RSS_PRESENCE": {
      "onfalse": {
        "comment": "absence de syndication", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "RSS_SUMMARY": {
            "onfalse": {
              "comment": "aucune entr\u00e9e de syndication sans r\u00e9sum\u00e9", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins une entr\u00e9e de syndication sans r\u00e9sum\u00e9", 
              "result": "nc"
            }
          }
        }, 
        "comment": "pr\u00e9sence de syndication", 
        "result": "i"
      }
    }
  }, 
  "16239": {
    "META_CHARSET_VALID": {
      "onfalse": {
        "comment": "aucun META CONTENT-TYPE pr\u00e9cisant le CHARSET", 
        "result": "nc"
      }, 
      "ontrue": {
        "chain": {
          "META_CHARSET_REAL": {
            "onfalse": {
              "comment": "le CHARSET pr\u00e9cis\u00e9 par le META CONTENT-TYPE ne correspond pas au charset r\u00e9\u00e9l", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "le CHARSET pr\u00e9cis\u00e9 par le META CONTENT-TYPE correspond au charset r\u00e9\u00e9l", 
              "result": "c"
            }
          }
        }, 
        "comment": "le META CONTENT-TYPE pr\u00e9cisant le CHARSET est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "16240": {
    "CSS_BACKGROUND_IMAGE": {
      "onfalse": {
        "comment": "aucune image ajout\u00e9e par CSS", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une image ajout\u00e9e par CSS", 
        "result": "i"
      }
    }, 
    "CSS_CONTENT": {
      "onfalse": {
        "comment": "aucun contenu textuel ajout\u00e9 par CSS", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un contenu textuel ajout\u00e9 par CSS", 
        "result": "i"
      }
    }
  }, 
  "16243": {
    "COUNTRY_DOMAIN": {
      "onfalse": {
        "comment": "le domaine ne correspond pas \u00e0 une zone g\u00e9ographique", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "COUNTRY_SERVER": {
            "onfalse": {
              "comment": "le serveur n'est pas dans la zone g\u00e9ographique du domaine", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "le serveur est dans la zone g\u00e9ographique du domaine", 
              "result": "c"
            }
          }
        }, 
        "comment": "le domaine correspond \u00e0 une zone g\u00e9ographique", 
        "result": "i"
      }
    }
  }, 
  "16251": {
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_NOT_INDEXABLE": {
            "onfalse": {
              "comment": "aucun IMG dont le format n'est pas indexable par les moteurs de recherche", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG dont le format n'est pas indexable par les moteurs de recherche", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "16257": {
    "CSS_UPPERCASE": {
      "onfalse": {
        "comment": "aucune suite de majuscules d\u00e9coratives", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une suite de majuscules d\u00e9coratives", 
        "result": "nc"
      }
    }
  }, 
  "16258": {
    "ROBOTS_W_VALID_SITEMAP": {
      "onfalse": {
        "comment": "absence du SITEMAP ou du robots.txt", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "pr\u00e9sence du SITEMAP", 
        "result": "c"
      }
    }
  }, 
  "16259": {
    "ROBOTS_W_VALID_SITEMAP": {
      "onfalse": {
        "comment": "absence du SITEMAP ou du robots.txt", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "pr\u00e9sence du SITEMAP", 
        "result": "c"
      }
    }
  }, 
  "16263": {
    "URL_W_UNSAFE_CHARS": {
      "onfalse": {
        "comment": "aucune URL avec un caract\u00e8re consid\u00e9r\u00e9 comme non s\u00fbr", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une URL avec un caract\u00e8re consid\u00e9r\u00e9 comme non s\u00fbr", 
        "result": "nc"
      }
    }
  }, 
  "16267": {
    "HTTP_404": {
      "onfalse": {
        "comment": "le serveur ne renvoie pas d'ent\u00eate HTTP 404", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le serveur renvoie un ent\u00eate HTTP 404", 
        "result": "c"
      }
    }
  }, 
  "16657": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AUDIO": {
      "onfalse": {
        "comment": "aucun AUDIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AUDIO", 
        "result": "i"
      }
    }, 
    "CANVAS": {
      "onfalse": {
        "comment": "aucun CANVAS", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un CANVAS", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }, 
    "VIDEO": {
      "onfalse": {
        "comment": "aucun VIDEO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un VIDEO", 
        "result": "i"
      }
    }
  }, 
  "17500": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "APPLET_WO_FILLED_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun APPLET avec ALT vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un APPLET avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA": {
      "onfalse": {
        "comment": "aucun AREA", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "AREA_WO_FILLED_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun AREA avec ALT vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un AREA avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un AREA", 
        "result": "i"
      }
    }, 
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_WO_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun IMG avec ALT vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_IMAGE_WO_FILLED_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type IMAGE sans ALT non vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type IMAGE sans ALT non vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un INPUT de type IMAGE", 
        "result": "i"
      }
    }
  }, 
  "17502": {
    "APPLET_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun APPLET avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET avec ALT non vide", 
        "result": "i"
      }
    }, 
    "AREA_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun AREA avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA avec ALT non vide", 
        "result": "i"
      }
    }, 
    "IMG_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun IMG avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG avec ALT non vide", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type IMAG avec ALT non vide", 
        "result": "i"
      }
    }
  }, 
  "17503": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type IMAGE", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "17504": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type IMAGE", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "17505": {
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_W_LONGDESC_ATTR": {
            "onfalse": {
              "comment": "aucun IMG avec un attribut LONGDESC", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec un attribut LONGDESC", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "17509": {
    "FRAME": {
      "onfalse": {
        "comment": "aucun FRAME", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FRAME_WO_FILLED_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun FRAME avec un attribut TITLE absent ou vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un FRAME avec un attribut TITLE absent ou vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FRAME", 
        "result": "i"
      }
    }, 
    "IFRAME": {
      "onfalse": {
        "comment": "aucun IFRAME", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IFRAME_WO_FILLED_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun IFRAME avec un attribut TITLE absent ou vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IFRAME avec un attribut TITLE absent ou vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IFRAME", 
        "result": "i"
      }
    }
  }, 
  "17510": {
    "FRAME_W_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun FRAME avec un attribut TITLE non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FRAME_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun FRAME sans un attribut TITLE non vide et unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un FRAME avec un attribut TITLE non vide ou non unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FRAME avec un attribut TITLE", 
        "result": "i"
      }
    }, 
    "IFRAME_W_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun IFRAME avec un attribut TITLE non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IFRAME_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun IFRAME sans un attribut TITLE non vide et unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un IFRAME avec un attribut TITLE non vide ou non unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IFRAME avec un attribut TITLE", 
        "result": "i"
      }
    }
  }, 
  "17515": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "17517": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "17518": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AUDIO": {
      "onfalse": {
        "comment": "aucun AUDIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AUDIO", 
        "result": "i"
      }
    }, 
    "CANVAS": {
      "onfalse": {
        "comment": "aucun CANVAS", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un CANVAS", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }, 
    "VIDEO": {
      "onfalse": {
        "comment": "aucun VIDEO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un VIDEO", 
        "result": "i"
      }
    }
  }, 
  "17521": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "17522": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "17523": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "RESOURCE_MULTIMEDIA_WO_AUDIO": {
      "onfalse": {
        "comment": "aucune ressource multim\u00e9dia", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ressource multim\u00e9dia", 
        "result": "i"
      }
    }
  }, 
  "17524": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "RESOURCE_MULTIMEDIA_WO_AUDIO": {
      "onfalse": {
        "comment": "aucune ressource multim\u00e9dia", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ressource multim\u00e9dia", 
        "result": "i"
      }
    }
  }, 
  "17525": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "17529": {
    "APPLET_NOT_IN_A_OR_BUTTON_WO_ANCHOR": {
      "onfalse": {
        "comment": "aucun APPLET ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "i"
      }
    }, 
    "EMBED_NOT_IN_A_OR_BUTTON_WO_ANCHOR": {
      "onfalse": {
        "comment": "aucun EMBED ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "i"
      }
    }, 
    "IMG_ANIMATED_NOT_IN_BUTTON_NOT_IN_A": {
      "onfalse": {
        "comment": "aucun IMG anim\u00e9e ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG anim\u00e9e ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "i"
      }
    }, 
    "OBJECT_NOT_IN_A_OR_BUTTON_WO_ANCHOR": {
      "onfalse": {
        "comment": "aucun OBJECT ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT ni dans un A, ni dans un BUTTON sans ancre", 
        "result": "i"
      }
    }
  }, 
  "17530": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "17532": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "BGSOUND": {
      "onfalse": {
        "comment": "aucun BGSOUND", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BGSOUND", 
        "result": "nc"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "RESSOURCE_MULTIMEDIA": {
            "onfalse": {
              "comment": "aucune ressource multim\u00e9dia", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins une ressource multim\u00e9dia", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "RESSOURCE_MULTIMEDIA": {
            "onfalse": {
              "comment": "aucune ressource multim\u00e9dia", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins une ressource multim\u00e9dia", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "17534": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun AREA ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "A_NOT_ANCHOR": {
      "onfalse": {
        "comment": "aucun A ni vide, ni ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ni vide, ni ancre", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "17535": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "17536": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "IMG_ANIMATED": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment anim\u00e9", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment anim\u00e9", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "17537": {
    "TABLE_FOR_DATA3": {
      "onfalse": {
        "comment": "aucun TABLE de donn\u00e9es", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_FOR_DATA4": {
            "onfalse": {
              "comment": "tous les TABLE ont des SUMMARY", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE sans SUMMARY", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE de donn\u00e9es", 
        "result": "i"
      }
    }
  }, 
  "17538": {
    "TABLE_W_SUMMARY_ATTR": {
      "onfalse": {
        "comment": "aucun TABLE poss\u00e9dant un SUMMARY", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_W_FILLED_AND_UNIQUE_SUMMARY_ATTR": {
            "onfalse": {
              "chain": {
                "TABLE_W_SUMMARY_ATTR_EQUALS_TO_CAPTION": {
                  "onfalse": {
                    "comment": "aucun TABLE avec un SUMMARY et un CAPTION identiques", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TABLE avec un SUMMARY et un CAPTION identiques", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "aucun TABLE avec un SUMMARY vide ou non unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE avec un SUMMARY vide ou non unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE poss\u00e9dant un SUMMARY", 
        "result": "i"
      }
    }
  }, 
  "17539": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "17540": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_FOR_DATA": {
            "onfalse": {
              "comment": "aucun TABLE de donn\u00e9es", 
              "result": "i"
            }, 
            "ontrue": {
              "chain": {
                "TABLE_FOR_DATA_WO_CAPTION": {
                  "onfalse": {
                    "comment": "tous les TABLE ont un CAPTION", 
                    "result": "c"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TABLE sans CAPTION", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un TABLE de donn\u00e9es", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "17541": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "CAPTION_WO_TEXT": {
            "onfalse": {
              "comment": "aucun CAPTION sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "chain": {
                "CAPTION_WO_UNIQUE_TEXT": {
                  "onfalse": {
                    "comment": "au moins un CAPTION sans contenu textuel unique", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "tous les CAPTION ont un contenu textuel unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un CAPTION sans contenu textuel", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "17542": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_FOR_DATA2": {
            "onfalse": {
              "chain": {
                "TABLE_W_FAKE_TH": {
                  "onfalse": {
                    "comment": "aucun TABLE avec des TH simul\u00e9s", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TABLE avec des TH simul\u00e9s", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "aucun TABLE de donn\u00e9es", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE de donn\u00e9es", 
              "result": "c"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "17543": {
    "TABLE_W_TH": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TH_WO_FILLED_AND_UNIQUE_ID_WO_SCOPE_ATTR": {
            "onfalse": {
              "chain": {
                "TD_WO_TH_OR_W_TH_WO_SCOPE_ATTR": {
                  "onfalse": {
                    "comment": "aucun TD dont le HEADERS ne correspond \u00e0 aucun TH", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TD dont le HEADERS ne correspond \u00e0 aucun TH", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "aucun TH sans ID unique ni SCOPE", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un TH sans ID unique ni SCOPE", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }, 
    "TABLE_W_TH_LINE_OR_COLUMN": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TH_W_FILLED_AND_UNIQUE_ID": {
            "onfalse": {
              "chain": {
                "TD_WO_TH": {
                  "onfalse": {
                    "comment": "aucun TD dont l'attribut HEADERS ne correspond \u00e0 aucun TH", 
                    "result": "c"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TD dont l'attribut HEADERS ne correspond \u00e0 aucun TH", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "aucun TH sans ID unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un TH sans ID unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "17544": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "17549": {
    "IMG_W_ISMAP_ATTR": {
      "onfalse": {
        "comment": "aucun IMG avec un attribut ISMAP", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG avec un attribut ISMAP", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE_W_ISMAP_TITLE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE avec un attribut ISMAP", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type IMAGE avec un attribut ISMAP", 
        "result": "i"
      }
    }
  }, 
  "17550": {
    "A_NOT_ANCHOR_SELF": {
      "onfalse": {
        "comment": "aucun A autre qu'une ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "A_NOT_ANCHOR_SELF_WO_TEXT": {
            "onfalse": {
              "comment": "aucun A sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un A sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins A autre qu'une ancre", 
        "result": "i"
      }
    }
  }, 
  "17552": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AREA": {
      "onfalse": {
        "comment": "aucun AREA", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un AREA", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type IMAGE", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "17554": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "17556": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "17557": {
    "DOCTYPE_PRESENT": {
      "onfalse": {
        "comment": "le DOCTYPE est absent ou mal positionn\u00e9", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le DOCTYPE est pr\u00e9sent", 
        "result": "c"
      }
    }
  }, 
  "17558": {
    "DOCTYPE_HTML_VALID": {
      "onfalse": {
        "comment": "le code est conforme au DOCTYPE", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le code n'est pas conforme au DOCTYPE", 
        "result": "c"
      }
    }
  }, 
  "17561": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "TITLE est pr\u00e9sent", 
        "result": "c"
      }
    }
  }, 
  "17562": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TITLE_W_TEXT": {
            "onfalse": {
              "comment": "TITLE est vide", 
              "result": "nc"
            }, 
            "ontrue": {
              "chain": {
                "TITLE_W_DEFAULT_VALUE": {
                  "onfalse": {
                    "comment": "TITLE est rempli", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "TITLE correspond \u00e0 une valeur par d\u00e9faut", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "TITLE est rempli", 
              "result": "i"
            }
          }
        }, 
        "comment": "TITLE est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "17567": {
    "H1": {
      "onfalse": {
        "comment": "aucun H1", 
        "result": "nc"
      }, 
      "ontrue": {
        "chain": {
          "H1_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H1 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H1 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H1", 
        "result": "i"
      }
    }, 
    "H2": {
      "onfalse": {
        "comment": "aucun H2", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H2_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H2 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H2 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H2", 
        "result": "i"
      }
    }, 
    "H3": {
      "onfalse": {
        "comment": "aucun H3", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H3_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H3 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H3 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H3", 
        "result": "i"
      }
    }, 
    "H4": {
      "onfalse": {
        "comment": "aucun H4", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H4_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H4 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H4 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H4", 
        "result": "i"
      }
    }, 
    "H5": {
      "onfalse": {
        "comment": "aucun H5", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H5_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H5 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H5 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H5", 
        "result": "i"
      }
    }, 
    "H6": {
      "onfalse": {
        "comment": "aucun H6", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H6_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H6 sans contenu textuel", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un H6 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H6", 
        "result": "i"
      }
    }
  }, 
  "17568": {
    "DL": {
      "onfalse": {
        "comment": "aucun DL", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "DL_WO_DT_FIRST": {
            "onfalse": {
              "comment": "aucun DL sans DT en premier", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un DL sans DT en premier", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un DL", 
        "result": "i"
      }
    }, 
    "FAKE_ORDERED_LIST": {
      "onfalse": {
        "comment": "aucune liste simul\u00e9e", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins une liste simul\u00e9e", 
        "result": "nc"
      }
    }, 
    "FAKE_UNORDERED_LIST": {
      "onfalse": {
        "comment": "aucune liste simul\u00e9e", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins une liste simul\u00e9e", 
        "result": "nc"
      }
    }
  }, 
  "17570": {
    "ABBR_W_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun ABBR sans TITLE non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un ABBR avec TITLE non vide", 
        "result": "i"
      }
    }, 
    "ACRONYM_W_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun ACRONYM sans TITLE non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un ACRONYM avec un TITLE non vide", 
        "result": "i"
      }
    }
  }, 
  "17572": {
    "ALIGN_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALIGN", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALIGN", 
        "result": "nc"
      }
    }, 
    "ALINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALINK", 
        "result": "nc"
      }
    }, 
    "BACKGROUND_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BACKGROUND", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BACKGROUND", 
        "result": "nc"
      }
    }, 
    "BASEFONT": {
      "onfalse": {
        "comment": "aucun BASEFONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BASEFONT", 
        "result": "nc"
      }
    }, 
    "BASEFONT_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BASEFONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BASEFONT", 
        "result": "nc"
      }
    }, 
    "BGCOLOR_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BGCOLOR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BGCOLOR", 
        "result": "nc"
      }
    }, 
    "BLINK": {
      "onfalse": {
        "comment": "aucun BLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BLINK", 
        "result": "nc"
      }
    }, 
    "BORDER_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BORDER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BORDER", 
        "result": "nc"
      }
    }, 
    "CENTER": {
      "onfalse": {
        "comment": "aucun CENTER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un CENTER", 
        "result": "nc"
      }
    }, 
    "COLOR_ATTR": {
      "onfalse": {
        "comment": "aucun attribut COLOR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut COLOR", 
        "result": "nc"
      }
    }, 
    "FONT": {
      "onfalse": {
        "comment": "aucun FONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FONT", 
        "result": "nc"
      }
    }, 
    "LINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut LINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut LINK", 
        "result": "nc"
      }
    }, 
    "MARQUEE": {
      "onfalse": {
        "comment": "aucun MARQUEE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un MARQUEE", 
        "result": "nc"
      }
    }, 
    "S": {
      "onfalse": {
        "comment": "aucun S", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un S", 
        "result": "nc"
      }
    }, 
    "STRIKE": {
      "onfalse": {
        "comment": "aucun STRIKE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un STRIKE", 
        "result": "nc"
      }
    }, 
    "TEXT_ATTR": {
      "onfalse": {
        "comment": "aucun attribut TEXT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut TEXT", 
        "result": "nc"
      }
    }, 
    "TT": {
      "onfalse": {
        "comment": "aucun TT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un TT", 
        "result": "nc"
      }
    }, 
    "U": {
      "onfalse": {
        "comment": "aucun U", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un U", 
        "result": "nc"
      }
    }, 
    "VLINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut VLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut VLINK", 
        "result": "nc"
      }
    }
  }, 
  "17573": {
    "CSS_BACKGROUND_IMAGE": {
      "onfalse": {
        "comment": "aucune image ajout\u00e9e par CSS", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une image ajout\u00e9e par CSS", 
        "result": "i"
      }
    }, 
    "CSS_CONTENT": {
      "onfalse": {
        "comment": "aucun contenu textuel ajout\u00e9 par CSS", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un contenu textuel ajout\u00e9 par CSS", 
        "result": "i"
      }
    }
  }, 
  "17587": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_CHECKBOX_WO_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type CHECKBOX sans TITLE non vide et unique", 
              "result": "i"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_CHECKBOX_WO_UNIQUE_TITLE_ATTR_WO_UNIQUE_LABEL": {
                  "onfalse": {
                    "comment": "aucun INPUT de type CHECKBOX sans LABEL non vide et unique", 
                    "result": "c"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type CHECKBOX sans LABEL non vide et unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type CHECKBOX sans TITLE non vide et unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_FILE_WO_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type FILE sans TITLE non vide et unique", 
              "result": "i"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_FILE_WO_UNIQUE_TITLE_ATTR_WO_UNIQUE_LABEL": {
                  "onfalse": {
                    "comment": "aucun INPUT de type FILE sans LABEL non vide et unique", 
                    "result": "c"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type FILE sans LABEL non vide et unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type FILE sans TITLE non vide et unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_PASSWORD_WO_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type PASSWORD sans TITLE non vide et unique", 
              "result": "i"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_PASSWORD_WO_UNIQUE_TITLE_ATTR_WO_UNIQUE_LABEL": {
                  "onfalse": {
                    "comment": "aucun INPUT de type PASSWORD sans LABEL non vide et unique", 
                    "result": "c"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type PASSWORD sans LABEL non vide et unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type PASSWORD sans TITLE non vide et unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_RADIO_WO_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type RADIO sans TITLE non vide et unique", 
              "result": "i"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_RADIO_WO_UNIQUE_TITLE_ATTR_WO_UNIQUE_LABEL": {
                  "onfalse": {
                    "comment": "aucun INPUT de type RADIO sans LABEL non vide et unique", 
                    "result": "c"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type RADIO sans LABEL non vide et unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type RADIO sans TITLE non vide et unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_TEXT_WO_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type TEXT sans TITLE non vide et unique", 
              "result": "i"
            }, 
            "ontrue": {
              "chain": {
                "INPUT_W_TYPE_TEXT_WO_UNIQUE_TITLE_ATTR_WO_UNIQUE_LABEL": {
                  "onfalse": {
                    "comment": "aucun INPUT de type TEXT sans LABEL non vide et unique", 
                    "result": "c"
                  }, 
                  "ontrue": {
                    "comment": "au moins un INPUT de type TEXT sans LABEL non vide et unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un INPUT de type TEXT sans TITLE non vide et unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SELECT_WO_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun SELECT sans TITLE vide ou non unique", 
              "result": "i"
            }, 
            "ontrue": {
              "chain": {
                "SELECT_WO_UNIQUE_TITLE_ATTR_WO_UNIQUE_LABEL": {
                  "onfalse": {
                    "comment": "aucun SELECT sans TITLE ou LABEL unique", 
                    "result": "c"
                  }, 
                  "ontrue": {
                    "comment": "au moins un SELECT sans TITLE ou LABEL unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un SELECT avec TITLE vide ou non unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }, 
    "TEXTAREA": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TEXTAREA_WO_FILLED_AND_UNIQUE_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun TEXTAREA sans TITLE non vide et unique", 
              "result": "i"
            }, 
            "ontrue": {
              "chain": {
                "TEXTAREA_WO_UNIQUE_TITLE_ATTR_WO_UNIQUE_LABEL": {
                  "onfalse": {
                    "comment": "aucun TEXTAREA sans TITLE ou LABEL non vide et unique", 
                    "result": "c"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TEXTAREA sans TITLE ou LABEL non vide et unique", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "au moins un TEXTAREA sans TITLE non vide et unique", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "17590": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "17591": {
    "FORM_WO_FIELDSET": {
      "onfalse": {
        "comment": "aucun FORM sans FIELDSET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM sans FIELDSET", 
        "result": "i"
      }
    }
  }, 
  "17592": {
    "FIELDSET": {
      "onfalse": {
        "comment": "aucun FIELDSET", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FIELDSET_WO_LEGEND": {
            "onfalse": {
              "comment": "au moins un LEGEND", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "aucun LEGEND", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FIELDSET", 
        "result": "i"
      }
    }
  }, 
  "17593": {
    "LEGEND": {
      "onfalse": {
        "comment": "aucun LEGEND", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "LEGEND_WO_FILLED_AND_UNIQUE_TEXT": {
            "onfalse": {
              "comment": "aucun LEGEND vide ou non unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un LEGEND vide ou non unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un LEGEND", 
        "result": "i"
      }
    }
  }, 
  "17594": {
    "OPTGROUP": {
      "onfalse": {
        "comment": "aucun OPTGROUP", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "OPTGROUP_WO_FILLED_AND_UNIQUE_LABEL_ATTR": {
            "onfalse": {
              "comment": "tous les OPTGROUP poss\u00e8dent un attribut LABEL unique et non vide", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un OPTGROUP ne poss\u00e8dent pas d'attribut LABEL unique et non vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un OPTGROUP", 
        "result": "i"
      }
    }, 
    "SELECT": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "OPTGROUP": {
            "onfalse": {
              "comment": "aucun OPTGROUP", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un OPTGROUP", 
              "result": "c"
            }
          }
        }, 
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }
  }, 
  "17596": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }, 
    "TEXTAREA": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "17597": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "17598": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "17599": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "17600": {
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "TEXTAREA": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "17615": {
    "A_W_FILLED_HREF_ATTR_AND_WO_NEGATIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun A avec un HREF", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A avec un HREF", 
        "result": "i"
      }
    }, 
    "BUTTON_WO_NEGATIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun BUTTON", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un BUTTON", 
        "result": "i"
      }
    }, 
    "INPUT_WO_NEGATIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT", 
        "result": "i"
      }
    }, 
    "POSITIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment avec un TABINDEX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment avec un TABINDEX", 
        "result": "i"
      }
    }, 
    "SELECT_WO_NEGATIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_NEGATIVE_TABINDEX_ATTR": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "17617": {
    "AREA_W_TARGET_ATTR_BLANK": {
      "onfalse": {
        "comment": "aucun AREA avec un TARGET blank", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA avec un TARGET blank", 
        "result": "i"
      }
    }, 
    "A_W_TARGET_ATTR_BLANK": {
      "onfalse": {
        "comment": "aucun A avec un TARGET blank", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A avec un TARGET blank", 
        "result": "i"
      }
    }, 
    "A_W_TARGET_ATTR_BLANK_W_IMG": {
      "onfalse": {
        "comment": "aucun A avec un TARGET blank", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A avec un TARGET blank", 
        "result": "i"
      }
    }, 
    "FORM_W_TARGET_ATTR_BLANK": {
      "onfalse": {
        "comment": "aucun FORM avec un TARGET blank", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM avec un TARGET blank", 
        "result": "i"
      }
    }, 
    "JS_EVENT_MOUSE_OR_KEYBOARD": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment avec onclick, onmouseover, onmouseout, onfocus ou onblur", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment avec onclick, onmouseover, onmouseout, onfocus ou onblur", 
        "result": "i"
      }
    }, 
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "17630": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "IMG_ANIMATED": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment anim\u00e9", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment anim\u00e9", 
        "result": "i"
      }
    }, 
    "RESOURCE_MULTIMEDIA_WO_AUDIO": {
      "onfalse": {
        "comment": "aucune ressource multim\u00e9dia", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ressource multim\u00e9dia", 
        "result": "i"
      }
    }, 
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "17632": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "BLINK": {
      "onfalse": {
        "comment": "aucun BLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BLINK", 
        "result": "nc"
      }
    }, 
    "IMG_ANIMATED": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment anim\u00e9", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment anim\u00e9", 
        "result": "i"
      }
    }, 
    "MARQUEE": {
      "onfalse": {
        "comment": "aucun MARQUEE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un MARQUEE", 
        "result": "nc"
      }
    }, 
    "RESOURCE_MULTIMEDIA_WO_AUDIO": {
      "onfalse": {
        "comment": "aucune ressource multim\u00e9dia", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ressource multim\u00e9dia", 
        "result": "i"
      }
    }, 
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "19073": {
    "A_W_TARGET_ATTR_BLANK": {
      "onfalse": {
        "comment": "aucun A avec un TARGET blank", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un A avec un TARGET blank", 
        "result": "nc"
      }
    }
  }, 
  "19079": {
    "AREA_W_TARGET_ATTR_BLANK": {
      "onfalse": {
        "comment": "aucun AREA avec un TARGET blank", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un AREA avec un TARGET blank", 
        "result": "nc"
      }
    }
  }, 
  "19088": {
    "CAPTION_WO_UNIQUE_TEXT": {
      "onfalse": {
        "comment": "au moins un CAPTION sans contenu textuel unique", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "tous les CAPTION ont un contenu textuel unique", 
        "result": "nc"
      }
    }
  }, 
  "19094": {
    "DIV_W_FAKE_LIST": {
      "onfalse": {
        "comment": "aucune liste simul\u00e9e", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une liste simul\u00e9e", 
        "result": "nc"
      }
    }
  }, 
  "19096": {
    "EMBED_W_WMODE_ATTR_OPAQUE_OR_TRANSPARENT": {
      "onfalse": {
        "comment": "aucun EMBED avec un WMODE transparent ou opaque", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED avec un WMODE transparent ou opaque", 
        "result": "nc"
      }
    }
  }, 
  "19099": {
    "FORM_W_TARGET_ATTR_BLANK": {
      "onfalse": {
        "comment": "aucun FORM avec un TARGET blank", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FORM avec un TARGET blank", 
        "result": "nc"
      }
    }
  }, 
  "19120": {
    "A_W_TEXT_W_IMG_W_EMPTY_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun A avec un contenu textuel et un IMG avec un ALT vide", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un A avec un contenu textuel et un IMG avec un ALT vide", 
        "result": "nc"
      }
    }
  }, 
  "19123": {
    "INPUT_W_TYPE_CHECKBOX_WO_ID": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX sans ID", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX sans ID", 
        "result": "nc"
      }
    }
  }, 
  "19124": {
    "INPUT_W_TYPE_FILE_WO_ID": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE sans ID", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE sans ID", 
        "result": "nc"
      }
    }
  }, 
  "19127": {
    "INPUT_W_TYPE_PASSWORD_WO_ID": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD sans ID", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD sans ID", 
        "result": "nc"
      }
    }
  }, 
  "19128": {
    "INPUT_W_TYPE_RADIO_WO_ID": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO sans ID", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO sans ID", 
        "result": "nc"
      }
    }
  }, 
  "19130": {
    "INPUT_W_TYPE_TEXT_WO_ID": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT sans ID", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT sans ID", 
        "result": "nc"
      }
    }
  }, 
  "19135": {
    "LEGEND_WO_UNIQUE_TEXT": {
      "onfalse": {
        "comment": "aucun LEGEND avec un texte non unique", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un LEGEND sans un texte non unique", 
        "result": "nc"
      }
    }
  }, 
  "19142": {
    "OBJECT_W_WMODE_ATTR_OPAQUE_OR_TRANSPARENT": {
      "onfalse": {
        "comment": "aucun OBJECT avec un WMODE transparent ou opaque", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT avec un WMODE transparent ou opaque", 
        "result": "nc"
      }
    }
  }, 
  "19147": {
    "P_W_FAKE_LIST": {
      "onfalse": {
        "comment": "aucune liste simul\u00e9e", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une liste simul\u00e9e", 
        "result": "nc"
      }
    }
  }, 
  "19149": {
    "S": {
      "onfalse": {
        "comment": "aucun S", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un S", 
        "result": "nc"
      }
    }
  }, 
  "19150": {
    "SELECT_WO_ID": {
      "onfalse": {
        "comment": "aucun SELECT sans ID", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT sans ID", 
        "result": "nc"
      }
    }
  }, 
  "19153": {
    "TABLE_FOR_DATA_WO_SUMMARY": {
      "onfalse": {
        "comment": "aucun TABLE pr\u00e9sentant des donn\u00e9es sans SUMMARY", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un TABLE pr\u00e9sentant des donn\u00e9es sans SUMMARY", 
        "result": "nc"
      }
    }
  }, 
  "19155": {
    "TABLE_WO_UNIQUE_SUMMARY_ATTR": {
      "onfalse": {
        "comment": "aucun TABLE avec SUMMARY non unique", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un TABLE avec SUMMARY non unique", 
        "result": "nc"
      }
    }
  }, 
  "19160": {
    "TD_W_EMPTY_HEADERS_ATTR": {
      "onfalse": {
        "comment": "aucun TD avec HEADERS vide", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un TD avec HEADERS vide", 
        "result": "nc"
      }
    }
  }, 
  "19163": {
    "TEXTAREA_WO_ID": {
      "onfalse": {
        "comment": "aucun TEXTAREA sans ID", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA sans ID", 
        "result": "nc"
      }
    }
  }, 
  "19168": {
    "U": {
      "onfalse": {
        "comment": "aucun U", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un U", 
        "result": "nc"
      }
    }
  }, 
  "19171": {
    "JS_EVENT_ONBLUR_WO_ONMOUSEOUT": {
      "onfalse": {
        "comment": "aucun ONBLUR sans ONMOUSEOUT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un ONBLUR sans ONMOUSEOUT", 
        "result": "nc"
      }
    }
  }, 
  "19172": {
    "JS_EVENT_ONBLUR_SUBMIT": {
      "onfalse": {
        "comment": "aucun submit() sur un \u00e9v\u00e9nement ONBLUR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un submit() sur un \u00e9v\u00e9nement ONBLUR", 
        "result": "nc"
      }
    }
  }, 
  "19173": {
    "JS_EVENT_ONCHANGE_SUBMIT": {
      "onfalse": {
        "comment": "aucun submit() sur un \u00e9v\u00e9nement ONCHANGE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un submit() sur un \u00e9v\u00e9nement ONCHANGE", 
        "result": "nc"
      }
    }
  }, 
  "19174": {
    "JS_EVENT_ONCHANGE_LOCATION": {
      "onfalse": {
        "comment": "aucun ONCHANGE avec un location", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un ONCHANGE avec un location", 
        "result": "nc"
      }
    }
  }, 
  "19175": {
    "JS_EVENT_ONCLICK": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment avec ONCLICK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment avec ONCLICK", 
        "result": "nc"
      }
    }
  }, 
  "19176": {
    "JS_EVENT_ONDOUBLECLICK": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment avec ONDBLCLICK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment avec ONDBLCLICK", 
        "result": "nc"
      }
    }
  }, 
  "19177": {
    "JS_EVENT_ONFOCUS_WO_ONMOUSEOVER": {
      "onfalse": {
        "comment": "aucun ONFOCUS sans ONMOUSEOVER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un ONFOCUS sans ONMOUSEOVER", 
        "result": "nc"
      }
    }
  }, 
  "19178": {
    "JS_EVENT_ONFOCUS_BLUR": {
      "onfalse": {
        "comment": "aucun blur() sur un \u00e9v\u00e9nement ONFOCUS", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un blur() sur un \u00e9v\u00e9nement ONFOCUS", 
        "result": "nc"
      }
    }
  }, 
  "19179": {
    "JS_EVENT_ONFOCUS_SUBMIT": {
      "onfalse": {
        "comment": "aucun submit() sur un \u00e9v\u00e9nement ONFOCUS", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un submit() sur un \u00e9v\u00e9nement ONFOCUS", 
        "result": "nc"
      }
    }
  }, 
  "19180": {
    "JS_EVENT_ONMOUSEOUT_WO_ONBLUR": {
      "onfalse": {
        "comment": "aucun ONMOUSEOUT sans ONBLUR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un ONMOUSEOUT sans ONBLUR", 
        "result": "nc"
      }
    }
  }, 
  "19181": {
    "JS_EVENT_ONMOUSEOUT_SUBMIT": {
      "onfalse": {
        "comment": "aucun submit() sur un \u00e9v\u00e9nement ONMOUSEOUT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un submit() sur un \u00e9v\u00e9nement ONMOUSEOUT", 
        "result": "nc"
      }
    }
  }, 
  "19182": {
    "JS_EVENT_ONMOUSEOVER_SUBMIT": {
      "onfalse": {
        "comment": "aucun submit() sur un \u00e9v\u00e9nement ONMOUSEOVER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un submit() sur un \u00e9v\u00e9nement ONMOUSEOVER", 
        "result": "nc"
      }
    }
  }, 
  "19183": {
    "JS_EVENT_ONMOUSEOVER_WO_ONFOCUS": {
      "onfalse": {
        "comment": "aucun ONMOUSEOVER sans ONFOCUS", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un ONMOUSEOVER sans ONFOCUS", 
        "result": "nc"
      }
    }
  }, 
  "19184": {
    "JS_EVENT_ONSCROLL": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment avec ONSCROLL", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment avec ONSCROLL", 
        "result": "nc"
      }
    }
  }, 
  "19185": {
    "JS_SET_TIMEOUT": {
      "onfalse": {
        "comment": "aucun JS contenant un setTimeout()", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un JS contenant un setTimeout()", 
        "result": "nc"
      }
    }
  }, 
  "19186": {
    "JS_SET_INTERVAL": {
      "onfalse": {
        "comment": "aucun JS contenant un setInterval()", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un JS contenant un setInterval()", 
        "result": "nc"
      }
    }
  }, 
  "19187": {
    "JS_WINDOW_OPEN": {
      "onfalse": {
        "comment": "aucun JS contenant un window.open()", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un JS contenant un window.open()", 
        "result": "nc"
      }
    }
  }, 
  "19190": {
    "CSS_FONT_SIZE_W_PIXEL_VALUE": {
      "onfalse": {
        "comment": "aucun FONT-SIZE n'est d\u00e9fini en px", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FONT-SIZE n'est d\u00e9fini en px", 
        "result": "nc"
      }
    }
  }, 
  "19191": {
    "CSS_FOCUS_STYLE": {
      "onfalse": {
        "comment": "aucun outline supprim\u00e9", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un outline supprim\u00e9", 
        "result": "nc"
      }
    }
  }, 
  "19192": {
    "CSS_TEXT_ALIGN_JUSTIFY": {
      "onfalse": {
        "comment": "aucun texte justifi\u00e9", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un texte justifi\u00e9", 
        "result": "nc"
      }
    }
  }, 
  "19193": {
    "CSS_TEXT_INDENT_NEGATIVE": {
      "onfalse": {
        "comment": "aucun texte avec une image de fond indent\u00e9 n\u00e9gativement", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un texte avec une image de fond indent\u00e9 n\u00e9gativement", 
        "result": "nc"
      }
    }
  }, 
  "19195": {
    "TABLE_W_FAKE_TH_LINE": {
      "onfalse": {
        "comment": "aucun TABLE avec une ligne de TH simul\u00e9s", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un TABLE avec une ligne de TH simul\u00e9s", 
        "result": "nc"
      }
    }
  }, 
  "19197": {
    "CSS_DISPLAY_NONE": {
      "onfalse": {
        "comment": "aucun display none", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un display none", 
        "result": "nc"
      }
    }, 
    "CSS_VISIBILITY_HIDDEN": {
      "onfalse": {
        "comment": "aucun visibility hidden", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un visibility hidden", 
        "result": "nc"
      }
    }
  }, 
  "19200": {
    "A_W_TITLE_ATTR_SHORTER_THAN_TEXT": {
      "onfalse": {
        "comment": "aucun A avec un title plus court que le contenu textuel", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un A avec un title plus court que le contenu textuel", 
        "result": "nc"
      }
    }
  }, 
  "19205": {
    "LABEL_EQUALS_TO_ANOTHER_LABEL_IN_FIELDSET": {
      "onfalse": {
        "comment": "aucun LABEL identique dans le m\u00eame FIELDSET", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un LABEL identique dans le m\u00eame FIELDSET", 
        "result": "nc"
      }
    }
  }, 
  "19212": {
    "TABLE_W_FAKE_TH_COLUMN": {
      "onfalse": {
        "comment": "aucun TABLE avec une colonne de TH simul\u00e9s", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un TABLE avec une colonne de TH simul\u00e9s", 
        "result": "nc"
      }
    }
  }, 
  "19214": {
    "CSS_DIRECTION": {
      "onfalse": {
        "comment": "aucune direction indiqu\u00e9e par CSS", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une direction indiqu\u00e9e par CSS", 
        "result": "nc"
      }
    }
  }, 
  "19216": {
    "A_WO_TEXT": {
      "onfalse": {
        "comment": "aucun A sans texte", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "A_NOT_ANCHOR_WO_TEXT": {
            "onfalse": {
              "comment": "aucun lien sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un lien sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un A sans texte", 
        "result": "i"
      }
    }
  }, 
  "19218": {
    "ALIGN_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALIGN", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALIGN", 
        "result": "nc"
      }
    }
  }, 
  "19219": {
    "ALINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALINK", 
        "result": "nc"
      }
    }
  }, 
  "19220": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "APPLET_WO_FILLED_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun APPLET avec ALT vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un APPLET avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }
  }, 
  "19221": {
    "AREA": {
      "onfalse": {
        "comment": "aucun AREA", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "AREA_WO_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun AREA sans ALT", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un AREA sans ALT", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un AREA", 
        "result": "i"
      }
    }
  }, 
  "19222": {
    "AREA_W_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun AREA avec un attribut ALT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "AREA_WO_FILLED_AND_UNIQUE_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun AREA sans ALT rempli et unique", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un AREA sans ALT rempli et unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un AREA avec un attribut ALT", 
        "result": "i"
      }
    }
  }, 
  "19224": {
    "BACKGROUND_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BACKGROUND", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BACKGROUND", 
        "result": "nc"
      }
    }
  }, 
  "19225": {
    "BASEFONT": {
      "onfalse": {
        "comment": "aucun BASEFONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BASEFONT", 
        "result": "nc"
      }
    }
  }, 
  "19226": {
    "BGCOLOR_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BGCOLOR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BGCOLOR", 
        "result": "nc"
      }
    }
  }, 
  "19227": {
    "BGSOUND": {
      "onfalse": {
        "comment": "aucun BGSOUND", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BGSOUND", 
        "result": "nc"
      }
    }
  }, 
  "19228": {
    "BLINK": {
      "onfalse": {
        "comment": "aucun BLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BLINK", 
        "result": "nc"
      }
    }
  }, 
  "19229": {
    "H1": {
      "onfalse": {
        "comment": "aucun H1", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "au moins un H1", 
        "result": "c"
      }
    }
  }, 
  "19230": {
    "BORDER_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BORDER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BORDER", 
        "result": "nc"
      }
    }
  }, 
  "19231": {
    "BUTTON": {
      "onfalse": {
        "comment": "aucun BUTTON", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "BUTTON_WO_TEXT": {
            "onfalse": {
              "comment": "aucun BUTTON sans contenu texte", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un BUTTON sans contenu texte", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un BUTTON", 
        "result": "i"
      }
    }
  }, 
  "19233": {
    "TABLE_W_SUMMARY_ATTR_AND_CAPTION": {
      "onfalse": {
        "comment": "aucun TABLE avec un SUMMARY et un CAPTION", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_W_SUMMARY_ATTR_EQUALS_TO_CAPTION": {
            "onfalse": {
              "comment": "aucun TABLE avec un SUMMARY et un CAPTION identiques", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE avec un SUMMARY et un CAPTION identiques", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE avec un SUMMARY et un CAPTION", 
        "result": "i"
      }
    }
  }, 
  "19234": {
    "CAPTION": {
      "onfalse": {
        "comment": "aucun CAPTION", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "CAPTION_WO_TEXT": {
            "onfalse": {
              "comment": "aucun CAPTION sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un CAPTION sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un CAPTION", 
        "result": "i"
      }
    }
  }, 
  "19235": {
    "TABLE_W_CAPTION": {
      "onfalse": {
        "comment": "aucun TABLE avec CAPTION", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_W_CAPTION_WO_TH": {
            "onfalse": {
              "comment": "aucun TABLE avec CAPTION mais sans TH", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE avec CAPTION mais sans TH", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE avec CAPTION", 
        "result": "i"
      }
    }
  }, 
  "19236": {
    "CENTER": {
      "onfalse": {
        "comment": "aucun CENTER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un CENTER", 
        "result": "nc"
      }
    }
  }, 
  "19239": {
    "DL": {
      "onfalse": {
        "comment": "aucun DL", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "DL_WO_DT_FIRST": {
            "onfalse": {
              "comment": "aucun DL sans DT en premier", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un DL sans DT en premier", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un DL", 
        "result": "i"
      }
    }
  }, 
  "19241": {
    "FIELDSET": {
      "onfalse": {
        "comment": "aucun FIELDSET", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FIELDSET_WO_LEGEND_FIRST": {
            "onfalse": {
              "comment": "aucun FIELDSET dont le premier \u00e9l\u00e9ment n'est pas LEGEND", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un FIELDSET dont le premier \u00e9l\u00e9ment n'est pas LEGEND", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FIELDSET", 
        "result": "i"
      }
    }
  }, 
  "19242": {
    "FONT": {
      "onfalse": {
        "comment": "aucun FONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FONT", 
        "result": "nc"
      }
    }
  }, 
  "19244": {
    "FRAME": {
      "onfalse": {
        "comment": "aucun FRAME", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FRAME_WO_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun FRAME sans un attribut TITLE", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un FRAME sans un attribut TITLE", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FRAME", 
        "result": "i"
      }
    }
  }, 
  "19245": {
    "FRAME": {
      "onfalse": {
        "comment": "aucun FRAME", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FRAME_W_EMPTY_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun FRAME avec un attribut TITLE vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un FRAME avec un attribut TITLE vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FRAME", 
        "result": "i"
      }
    }
  }, 
  "19246": {
    "H1": {
      "onfalse": {
        "comment": "aucun H1", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H1_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H1 sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H1 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H1", 
        "result": "i"
      }
    }
  }, 
  "19247": {
    "H2": {
      "onfalse": {
        "comment": "aucun H2", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H2_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H2 sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H2 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H2", 
        "result": "i"
      }
    }
  }, 
  "19248": {
    "H2": {
      "onfalse": {
        "comment": "aucun H2", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H2_WO_H1": {
            "onfalse": {
              "comment": "aucun H2 non pr\u00e9c\u00e9d\u00e9 d'un H1", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H2 non pr\u00e9c\u00e9d\u00e9 d'un H1", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H2", 
        "result": "i"
      }
    }
  }, 
  "19249": {
    "H3": {
      "onfalse": {
        "comment": "aucun H3", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H3_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H3 sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H3 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H3", 
        "result": "i"
      }
    }
  }, 
  "19250": {
    "H3": {
      "onfalse": {
        "comment": "aucun H3", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H3_WO_H2": {
            "onfalse": {
              "comment": "aucun H3 non pr\u00e9c\u00e9d\u00e9 d'un H2", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H3 non pr\u00e9c\u00e9d\u00e9 d'un H2", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H3", 
        "result": "i"
      }
    }
  }, 
  "19251": {
    "H4": {
      "onfalse": {
        "comment": "aucun H4", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H4_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H4 sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H4 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H4", 
        "result": "i"
      }
    }
  }, 
  "19252": {
    "H4": {
      "onfalse": {
        "comment": "aucun H4", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H4_WO_H3": {
            "onfalse": {
              "comment": "aucun H4 non pr\u00e9c\u00e9d\u00e9 d'un H3", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H4 non pr\u00e9c\u00e9d\u00e9 d'un H3", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H4", 
        "result": "i"
      }
    }
  }, 
  "19253": {
    "H5": {
      "onfalse": {
        "comment": "aucun H5", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H5_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H5 sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H5 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H5", 
        "result": "i"
      }
    }
  }, 
  "19254": {
    "H5": {
      "onfalse": {
        "comment": "aucun H5", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H5_WO_H4": {
            "onfalse": {
              "comment": "aucun H5 non pr\u00e9c\u00e9d\u00e9 d'un H4", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H5 non pr\u00e9c\u00e9d\u00e9 d'un H4", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H5", 
        "result": "i"
      }
    }
  }, 
  "19255": {
    "H6": {
      "onfalse": {
        "comment": "aucun H6", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H6_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H6 sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H6 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H6", 
        "result": "i"
      }
    }
  }, 
  "19256": {
    "H6": {
      "onfalse": {
        "comment": "aucun H6", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H6_WO_H5": {
            "onfalse": {
              "comment": "aucun H6 non pr\u00e9c\u00e9d\u00e9 d'un H5", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H6 non pr\u00e9c\u00e9d\u00e9 d'un H5", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H6", 
        "result": "i"
      }
    }
  }, 
  "19257": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "TITLE est pr\u00e9sent", 
        "result": "c"
      }
    }
  }, 
  "19258": {
    "HTML_W_LANG_ATTR": {
      "onfalse": {
        "comment": "la balise HTML ne poss\u00e8de pas d'attribut LANG", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "la balise HTML poss\u00e8de un attribut LANG", 
        "result": "c"
      }
    }
  }, 
  "19259": {
    "DOCTYPE_VALID": {
      "onfalse": {
        "comment": "le DOCTYPE est absent, mal \u00e9crit ou mal positionn\u00e9", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le DOCTYPE est pr\u00e9sent", 
        "result": "c"
      }
    }
  }, 
  "19260": {
    "DOCTYPE_DOM_VALID": {
      "onfalse": {
        "comment": "le code contient des erreurs d'attributs ou de balises", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le code ne contient pas d'erreurs d'attributs ou de balises", 
        "result": "c"
      }
    }
  }, 
  "19261": {
    "IFRAME": {
      "onfalse": {
        "comment": "aucun IFRAME", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IFRAME_WO_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun IFRAME sans un attribut TITLE", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IFRAME sans un attribut TITLE", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IFRAME", 
        "result": "i"
      }
    }
  }, 
  "19262": {
    "IFRAME": {
      "onfalse": {
        "comment": "aucun IFRAME", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IFRAME_W_EMPTY_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun IFRAME avec un attribut TITLE vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IFRAME avec un attribut TITLE vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IFRAME", 
        "result": "i"
      }
    }
  }, 
  "19263": {
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_WO_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun IMG avec ALT vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "19265": {
    "A_W_IMG_W_EMPTY_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun A avec un IMG ayant un attribut ALT vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "A_WO_TEXT_W_IMG_W_EMPTY_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun A sans texte contenant une image sans ALT rempli", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un A sans texte contenant une image sans ALT rempli", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un A avec un IMG ayant un attribut ALT vide", 
        "result": "i"
      }
    }, 
    "BUTTON_W_IMG_W_EMPTY_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun BUTTON avec un IMG ayant un attribut ALT vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "BUTTON_WO_TEXT_W_IMG_W_EMPTY_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun BUTTON sans contenu texte contenant un IMG sans ALT rempli", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un BUTTON sans contenu texte contenant un IMG sans ALT rempli", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un BUTTON avec un IMG ayant un attribut ALT vide", 
        "result": "i"
      }
    }
  }, 
  "19266": {
    "IMG_W_LONGDESC_ATTR": {
      "onfalse": {
        "comment": "aucun IMG avec un attribut LONGDESC", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_WO_VALID_LONGDESC": {
            "onfalse": {
              "comment": "aucun IMG avec un attribut LONGDESC invalide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec un attribut LONGDESC invalide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG avec un attribut LONGDESC", 
        "result": "i"
      }
    }
  }, 
  "19269": {
    "INPUT_W_TYPE_IMAGE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_IMAGE_WO_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type IMAGE sans ALT", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type IMAGE sans ALT", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un INPUT de type IMAGE", 
        "result": "i"
      }
    }
  }, 
  "19270": {
    "INPUT_W_TYPE_IMAGE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_IMAGE_WO_FILLED_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type IMAGE sans ALT non vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type IMAGE sans ALT non vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un INPUT de type IMAGE", 
        "result": "i"
      }
    }
  }, 
  "19273": {
    "INPUT_W_TYPE_SUBMIT": {
      "onfalse": {
        "comment": "aucun INPUT de type SUBMIT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_SUBMIT_W_VAL_ATTR_EMPTY": {
            "onfalse": {
              "comment": "aucun INPUT de type SUBMIT avec un VALUE non rempli", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type SUBMIT avec un VALUE non rempli", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un INPUT de type SUBMIT", 
        "result": "i"
      }
    }
  }, 
  "19275": {
    "LABEL": {
      "onfalse": {
        "comment": "aucun LABEL", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "LABEL_WO_FOR_ATTR": {
            "onfalse": {
              "comment": "aucun LABEL sans FOR", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un LABEL sans FOR", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un LABEL", 
        "result": "i"
      }
    }
  }, 
  "19276": {
    "LABEL": {
      "onfalse": {
        "comment": "aucun LABEL", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "LABEL_W_FOR_ATTR_EMPTY": {
            "onfalse": {
              "comment": "aucun LABEL avec un FOR non rempli", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un LABEL avec un FOR non rempli", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un LABEL", 
        "result": "i"
      }
    }
  }, 
  "19277": {
    "LABEL_W_FOR_ATTR": {
      "onfalse": {
        "comment": "aucun LABEL avec attribut FOR", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "LABEL_W_FOR_ATTR_UNKNOWN": {
            "onfalse": {
              "comment": "aucun LABEL avec un FOR ne correspondant \u00e0 aucun ID", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un LABEL avec un FOR ne correspondant \u00e0 aucun ID", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un LABEL avec attribut FOR", 
        "result": "i"
      }
    }
  }, 
  "19278": {
    "HTML_W_LANG_ATTR": {
      "onfalse": {
        "comment": "la balise HTML ne poss\u00e8de pas d'attribut LANG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "HTML_W_LANG_ATTR_VALID": {
            "onfalse": {
              "comment": "l'attribut LANG de HTML est vide, absent ou incorrect", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "l'attribut LANG de HTML est correct", 
              "result": "c"
            }
          }
        }, 
        "comment": "la balise HTML poss\u00e8de un attribut LANG", 
        "result": "i"
      }
    }
  }, 
  "19280": {
    "LEGEND": {
      "onfalse": {
        "comment": "aucun LEGEND", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "LEGEND_WO_TEXT": {
            "onfalse": {
              "comment": "aucun LEGEND sans texte", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un LEGEND sans texte", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un LEGEND", 
        "result": "i"
      }
    }
  }, 
  "19281": {
    "LI": {
      "onfalse": {
        "comment": "aucun LI", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "LI_WO_TEXT": {
            "onfalse": {
              "comment": "aucun LI sans texte", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un LI sans texte", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un LI", 
        "result": "i"
      }
    }
  }, 
  "19282": {
    "LINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut LINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut LINK", 
        "result": "nc"
      }
    }
  }, 
  "19283": {
    "LISTING": {
      "onfalse": {
        "comment": "aucun LISTING", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un LISTING", 
        "result": "nc"
      }
    }
  }, 
  "19284": {
    "MARQUEE": {
      "onfalse": {
        "comment": "aucun MARQUEE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un MARQUEE", 
        "result": "nc"
      }
    }
  }, 
  "19285": {
    "META": {
      "onfalse": {
        "comment": "aucun META", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "META_REFRESH": {
            "onfalse": {
              "comment": "aucun META REFRESH", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "un META REFRESH est pr\u00e9sent", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un META", 
        "result": "i"
      }
    }
  }, 
  "19287": {
    "OPTGROUP": {
      "onfalse": {
        "comment": "aucun OPTGROUP", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "OPTGROUP_WO_LABEL_ATTR": {
            "onfalse": {
              "comment": "aucun OPTGROUP sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un OPTGROUP sans LABEL", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un OPTGROUP", 
        "result": "i"
      }
    }
  }, 
  "19288": {
    "OPTGROUP": {
      "onfalse": {
        "comment": "aucun OPTGROUP", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "OPTGROUP_WO_FILLED_AND_UNIQUE_LABEL_ATTR": {
            "onfalse": {
              "comment": "tous les OPTGROUP poss\u00e8dent un attribut LABEL unique et non vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un OPTGROUP ne poss\u00e8dent pas d'attribut LABEL unique et non vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un OPTGROUP", 
        "result": "i"
      }
    }
  }, 
  "19289": {
    "OPTGROUP": {
      "onfalse": {
        "comment": "aucun OPTGROUP", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "OPTGROUP_WO_FILLED_LABEL_ATTR": {
            "onfalse": {
              "comment": "aucun OPTGROUP sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un OPTGROUP sans LABEL", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un OPTGROUP", 
        "result": "i"
      }
    }
  }, 
  "19290": {
    "P": {
      "onfalse": {
        "comment": "aucun P", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "P_WO_TEXT": {
            "onfalse": {
              "comment": "aucun P sans texte", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un P sans texte", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un P", 
        "result": "i"
      }
    }
  }, 
  "19292": {
    "PLAINTEXT": {
      "onfalse": {
        "comment": "aucun PLAINTEXT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un PLAINTEXT", 
        "result": "nc"
      }
    }
  }, 
  "19295": {
    "STRIKE": {
      "onfalse": {
        "comment": "aucun STRIKE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un STRIKE", 
        "result": "nc"
      }
    }
  }, 
  "19296": {
    "TABLE_W_TH": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_W_TH_WO_CAPTION": {
            "onfalse": {
              "comment": "aucun TABLE contenant des TH et sans CAPTION", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE contenant des TH et sans CAPTION", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "19298": {
    "TABLE_FOR_DATA": {
      "onfalse": {
        "comment": "aucun TABLE de donn\u00e9es", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_FOR_DATA_WO_TH": {
            "onfalse": {
              "comment": "aucun TABLE pr\u00e9sentant des donn\u00e9es sans TH", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE pr\u00e9sentant des donn\u00e9es sans TH", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE de donn\u00e9es", 
        "result": "i"
      }
    }
  }, 
  "19300": {
    "TABLE_W_SUMMARY_ATTR_AND_CAPTION": {
      "onfalse": {
        "comment": "aucun TABLE avec un SUMMARY et un CAPTION", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_W_SUMMARY_ATTR_EQUALS_TO_CAPTION": {
            "onfalse": {
              "comment": "aucun TABLE avec un SUMMARY et un CAPTION identiques", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE avec un SUMMARY et un CAPTION identiques", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE avec un SUMMARY et un CAPTION", 
        "result": "i"
      }
    }
  }, 
  "19301": {
    "TABLE_FOR_DATA": {
      "onfalse": {
        "comment": "aucun TABLE de donn\u00e9es", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_FOR_DATA_WO_FILLED_SUMMARY": {
            "onfalse": {
              "comment": "aucun TABLE pr\u00e9sentant des donn\u00e9es sans SUMMARY rempli", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE pr\u00e9sentant des donn\u00e9es sans SUMMARY rempli", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE de donn\u00e9es", 
        "result": "i"
      }
    }
  }, 
  "19302": {
    "TABLE_W_SUMMARY_ATTR": {
      "onfalse": {
        "comment": "aucun TABLE poss\u00e9dant un SUMMARY", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_W_SUMMARY_WO_TH": {
            "onfalse": {
              "comment": "aucun TABLE avec SUMMARY mais sans TH", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE avec SUMMARY mais sans TH", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE poss\u00e9dant un SUMMARY", 
        "result": "i"
      }
    }
  }, 
  "19303": {
    "TH_WITH_ID": {
      "onfalse": {
        "comment": "aucun TH avec ID", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TD_WO_HEADERS_ATTR_W_TH_WITH_ID": {
            "onfalse": {
              "comment": "aucun TD sans HEADERS avec des TH ayant des ID", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TD sans HEADERS avec des TH ayant des ID", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TH avec ID", 
        "result": "i"
      }
    }
  }, 
  "19305": {
    "TD_W_HEADERS_ATTR": {
      "onfalse": {
        "comment": "aucun TD avec attribut HEADERS", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TD_W_HEADERS_ATTR_UNKNOWN": {
            "onfalse": {
              "comment": "aucun TD avec HEADERS ne correspondant \u00e0 aucun ID", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TD avec HEADERS ne correspondant \u00e0 aucun ID", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TD avec attribut HEADERS", 
        "result": "i"
      }
    }
  }, 
  "19306": {
    "TEXT_ATTR": {
      "onfalse": {
        "comment": "aucun attribut TEXT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut TEXT", 
        "result": "nc"
      }
    }
  }, 
  "19308": {
    "TH": {
      "onfalse": {
        "comment": "aucun TH", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TH_WO_SCOPE_ATTR_WO_ID": {
            "onfalse": {
              "comment": "aucun TH sans SCOPE ou ID", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TH sans SCOPE ni ID", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TH", 
        "result": "i"
      }
    }
  }, 
  "19309": {
    "TH_W_SCOPE_ATTR": {
      "onfalse": {
        "comment": "aucun TH avec un attribut SCOPE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TH_W_INVALID_SCOPE_ATTR": {
            "onfalse": {
              "comment": "aucun TH avec SCOPE invalide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TH avec SCOPE invalide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TH avec un attribut SCOPE", 
        "result": "i"
      }
    }
  }, 
  "19310": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TITLE_WO_TEXT": {
            "onfalse": {
              "comment": "TITLE est rempli", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "TITLE est vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "TITLE est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "19311": {
    "TT": {
      "onfalse": {
        "comment": "aucun TT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un TT", 
        "result": "nc"
      }
    }
  }, 
  "19313": {
    "VLINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut VLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut VLINK", 
        "result": "nc"
      }
    }
  }, 
  "19314": {
    "XMP": {
      "onfalse": {
        "comment": "aucun XMP", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un XMP", 
        "result": "nc"
      }
    }
  }, 
  "19338": {
    "AREA": {
      "onfalse": {
        "comment": "aucun AREA", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "AREA_W_EMPTY_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun AREA avec ALT vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un AREA avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un AREA", 
        "result": "i"
      }
    }
  }, 
  "19348": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FORM_WO_SUBMIT": {
            "onfalse": {
              "comment": "aucun FORM sans bouton d'envoi", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un FORM sans bouton d'envoi", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "19353": {
    "DIR_ATTR": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment avec un attribut DIR", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "DIR_W_INVALID_VALUE": {
            "onfalse": {
              "comment": "aucun \u00e9l\u00e9ment avec un attribut DIR dont la valeur est invalide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un \u00e9l\u00e9ment avec un attribut DIR dont la valeur est invalide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un \u00e9l\u00e9ment avec un attribut DIR", 
        "result": "i"
      }
    }
  }, 
  "19355": {
    "FIELDSET": {
      "onfalse": {
        "comment": "aucun FIELDSET", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FIELDSET_WO_FORM": {
            "onfalse": {
              "comment": "aucun FIEDLSET en dehors d'un FORM", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un FIEDLSET en dehors d'un FORM", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FIELDSET", 
        "result": "i"
      }
    }
  }, 
  "19359": {
    "A_W_IMG_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun A avec un IMG ayant un attribut ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "A_W_IMG_ALT_ATTR_EQUALS_TO_TEXT": {
            "onfalse": {
              "comment": "aucun A avec un IMG dont le ALT est \u00e9gal au contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un A avec un IMG dont le ALT est \u00e9gal au contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un A avec un IMG ayant un attribut ALT non vide", 
        "result": "i"
      }
    }
  }, 
  "19360": {
    "DOCTYPE_VALID": {
      "onfalse": {
        "comment": "le DOCTYPE est absent, mal \u00e9crit ou mal positionn\u00e9", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le DOCTYPE est pr\u00e9sent", 
        "result": "c"
      }
    }
  }, 
  "19361": {
    "IFRAME": {
      "onfalse": {
        "comment": "aucun IFRAME", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IFRAME_WO_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun IFRAME sans un attribut TITLE", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IFRAME sans un attribut TITLE", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IFRAME", 
        "result": "i"
      }
    }
  }, 
  "19362": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "TITLE est pr\u00e9sent", 
        "result": "c"
      }
    }
  }, 
  "19363": {
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_WO_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun IMG avec ALT vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "19364": {
    "URL_W_UNSAFE_CHARS": {
      "onfalse": {
        "comment": "aucune URL avec un caract\u00e8re consid\u00e9r\u00e9 comme non s\u00fbr", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une URL avec un caract\u00e8re consid\u00e9r\u00e9 comme non s\u00fbr", 
        "result": "nc"
      }
    }
  }, 
  "19365": {
    "AREA": {
      "onfalse": {
        "comment": "aucun AREA", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "AREA_WO_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun AREA sans ALT", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un AREA sans ALT", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un AREA", 
        "result": "i"
      }
    }
  }, 
  "19366": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "APPLET_WO_FILLED_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun APPLET avec ALT vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un APPLET avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }
  }, 
  "19367": {
    "INPUT_W_TYPE_IMAGE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_IMAGE_WO_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type IMAGE sans ALT", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type IMAGE sans ALT", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un INPUT de type IMAGE", 
        "result": "i"
      }
    }
  }, 
  "19368": {
    "IMG_W_LONGDESC_ATTR": {
      "onfalse": {
        "comment": "aucun IMG avec un attribut LONGDESC", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_WO_VALID_LONGDESC": {
            "onfalse": {
              "comment": "aucun IMG avec un attribut LONGDESC invalide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec un attribut LONGDESC invalide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG avec un attribut LONGDESC", 
        "result": "i"
      }
    }
  }, 
  "19369": {
    "META_CHARSET_VALID": {
      "onfalse": {
        "comment": "aucun META CONTENT-TYPE pr\u00e9cisant le CHARSET", 
        "result": "nc"
      }, 
      "ontrue": {
        "chain": {
          "META_CHARSET_REAL": {
            "onfalse": {
              "comment": "le CHARSET pr\u00e9cis\u00e9 par le META CONTENT-TYPE ne correspond pas au charset r\u00e9\u00e9l", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "le CHARSET pr\u00e9cis\u00e9 par le META CONTENT-TYPE correspond au charset r\u00e9\u00e9l", 
              "result": "c"
            }
          }
        }, 
        "comment": "le META CONTENT-TYPE pr\u00e9cisant le CHARSET est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "19370": {
    "META": {
      "onfalse": {
        "comment": "aucun META", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "META_REFRESH": {
            "onfalse": {
              "comment": "aucun META REFRESH", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "un META REFRESH est pr\u00e9sent", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un META", 
        "result": "i"
      }
    }
  }, 
  "19371": {
    "TABLE_FOR_DATA": {
      "onfalse": {
        "comment": "aucun TABLE de donn\u00e9es", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_FOR_DATA_WO_TH": {
            "onfalse": {
              "comment": "aucun TABLE pr\u00e9sentant des donn\u00e9es sans TH", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE pr\u00e9sentant des donn\u00e9es sans TH", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE de donn\u00e9es", 
        "result": "i"
      }
    }
  }, 
  "19372": {
    "TH_WO_SCOPE_ATTR_WO_ID": {
      "onfalse": {
        "comment": "aucun TH sans SCOPE ou ID", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un TH sans SCOPE ni ID", 
        "result": "nc"
      }
    }
  }, 
  "19373": {
    "HTML_W_LANG_ATTR": {
      "onfalse": {
        "comment": "la balise HTML ne poss\u00e8de pas d'attribut LANG", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "la balise HTML poss\u00e8de un attribut LANG", 
        "result": "c"
      }
    }
  }, 
  "19374": {
    "TH_W_SCOPE_ATTR": {
      "onfalse": {
        "comment": "aucun TH avec un attribut SCOPE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TH_W_INVALID_SCOPE_ATTR": {
            "onfalse": {
              "comment": "aucun TH avec SCOPE invalide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TH avec SCOPE invalide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TH avec un attribut SCOPE", 
        "result": "i"
      }
    }
  }, 
  "19375": {
    "TD_W_HEADERS_ATTR": {
      "onfalse": {
        "comment": "aucun TD avec attribut HEADERS", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TD_W_HEADERS_ATTR_UNKNOWN": {
            "onfalse": {
              "comment": "aucun TD avec HEADERS ne correspondant \u00e0 aucun ID", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TD avec HEADERS ne correspondant \u00e0 aucun ID", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TD avec attribut HEADERS", 
        "result": "i"
      }
    }
  }, 
  "19376": {
    "HTML_W_LANG_ATTR": {
      "onfalse": {
        "comment": "la balise HTML ne poss\u00e8de pas d'attribut LANG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "HTML_W_LANG_ATTR_VALID": {
            "onfalse": {
              "comment": "l'attribut LANG de HTML est vide, absent ou incorrect", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "l'attribut LANG de HTML est correct", 
              "result": "c"
            }
          }
        }, 
        "comment": "la balise HTML poss\u00e8de un attribut LANG", 
        "result": "i"
      }
    }
  }, 
  "19377": {
    "LABEL": {
      "onfalse": {
        "comment": "aucun LABEL", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "LABEL_WO_FOR_ATTR": {
            "onfalse": {
              "comment": "aucun LABEL sans FOR", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un LABEL sans FOR", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un LABEL", 
        "result": "i"
      }
    }
  }, 
  "19378": {
    "LABEL": {
      "onfalse": {
        "comment": "aucun LABEL", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "LABEL_W_FOR_ATTR_EMPTY": {
            "onfalse": {
              "comment": "aucun LABEL avec un FOR non rempli", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un LABEL avec un FOR non rempli", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un LABEL", 
        "result": "i"
      }
    }
  }, 
  "19379": {
    "LABEL_W_FOR_ATTR_UNKNOWN": {
      "onfalse": {
        "comment": "aucun LABEL avec un FOR ne correspondant \u00e0 aucun ID", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un LABEL avec un FOR ne correspondant \u00e0 aucun ID", 
        "result": "nc"
      }
    }
  }, 
  "19380": {
    "RSS_PRESENCE": {
      "onfalse": {
        "comment": "absence de syndication", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "RSS_ABSOLUTE_LINKS": {
            "onfalse": {
              "comment": "aucun hyperlien non absolu dans les fils de syndication", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un hyperlien non absolu dans les fils de syndication", 
              "result": "nc"
            }
          }
        }, 
        "comment": "pr\u00e9sence de syndication", 
        "result": "i"
      }
    }
  }, 
  "19381": {
    "FRAME": {
      "onfalse": {
        "comment": "aucun FRAME", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FRAME_WO_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun FRAME sans un attribut TITLE", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un FRAME sans un attribut TITLE", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FRAME", 
        "result": "i"
      }
    }
  }, 
  "19382": {
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "CSS_IMG_RESIZE": {
            "onfalse": {
              "comment": "aucun IMG avec un WIDTH ou HEIGHT redimensionn\u00e9", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec un WIDTH ou HEIGHT redimensionn\u00e9", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "19383": {
    "DOCTYPE_DOM_VALID": {
      "onfalse": {
        "comment": "le code contient des erreurs d'attributs ou de balises", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le code ne contient pas d'erreurs d'attributs ou de balises", 
        "result": "c"
      }
    }
  }, 
  "19384": {
    "URL_W_TERMS_NOT_IN_TITLE": {
      "onfalse": {
        "comment": "au moins un des termes pr\u00e9sents dans l'URL est pr\u00e9sent dans le titre", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "aucun des termes pr\u00e9sents dans l'URL n'est pr\u00e9sent dans le titre", 
        "result": "nc"
      }
    }
  }, 
  "19385": {
    "TABLE_W_TH": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_W_TH_WO_CAPTION": {
            "onfalse": {
              "comment": "aucun TABLE contenant des TH et sans CAPTION", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE contenant des TH et sans CAPTION", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "19386": {
    "TABLE_W_CAPTION": {
      "onfalse": {
        "comment": "aucun TABLE avec CAPTION", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_W_CAPTION_WO_TH": {
            "onfalse": {
              "comment": "aucun TABLE avec CAPTION mais sans TH", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE avec CAPTION mais sans TH", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE avec CAPTION", 
        "result": "i"
      }
    }
  }, 
  "19387": {
    "TABLE_W_SUMMARY_ATTR": {
      "onfalse": {
        "comment": "aucun TABLE poss\u00e9dant un SUMMARY", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_W_SUMMARY_WO_TH": {
            "onfalse": {
              "comment": "aucun TABLE avec SUMMARY mais sans TH", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE avec SUMMARY mais sans TH", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE poss\u00e9dant un SUMMARY", 
        "result": "i"
      }
    }
  }, 
  "19388": {
    "TH_WITH_ID": {
      "onfalse": {
        "comment": "aucun TH avec ID", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TD_WO_HEADERS_ATTR_W_TH_WITH_ID": {
            "onfalse": {
              "comment": "aucun TD sans HEADERS avec des TH ayant des ID", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TD sans HEADERS avec des TH ayant des ID", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TH avec ID", 
        "result": "i"
      }
    }
  }, 
  "19389": {
    "OPTGROUP": {
      "onfalse": {
        "comment": "aucun OPTGROUP", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "OPTGROUP_WO_LABEL_ATTR": {
            "onfalse": {
              "comment": "aucun OPTGROUP sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un OPTGROUP sans LABEL", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un OPTGROUP", 
        "result": "i"
      }
    }
  }, 
  "19390": {
    "FAVICON": {
      "onfalse": {
        "comment": "aucun appel valide \u00e0 un favicon", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "un appel valide \u00e0 un favicon", 
        "result": "c"
      }
    }
  }, 
  "19391": {
    "DOCTYPE_HTML_VALID": {
      "onfalse": {
        "comment": "le code est conforme au DOCTYPE", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le code n'est pas conforme au DOCTYPE", 
        "result": "c"
      }
    }
  }, 
  "19392": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT_IN_HEAD": {
            "onfalse": {
              "chain": {
                "SCRIPT_AT_END": {
                  "onfalse": {
                    "comment": "au moins un SCRIPT non plac\u00e9 \u00e0 la fin du code", 
                    "result": "nc"
                  }, 
                  "ontrue": {
                    "comment": "aucun SCRIPT non plac\u00e9 \u00e0 la fin du code", 
                    "result": "c"
                  }
                }
              }, 
              "comment": "aucun SCRIPT dans le HEAD", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT dans le HEAD", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "19393": {
    "DIR_ATTR": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment avec un attribut DIR", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "DIR_W_INVALID_VALUE": {
            "onfalse": {
              "comment": "aucun \u00e9l\u00e9ment avec un attribut DIR dont la valeur est invalide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un \u00e9l\u00e9ment avec un attribut DIR dont la valeur est invalide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un \u00e9l\u00e9ment avec un attribut DIR", 
        "result": "i"
      }
    }
  }, 
  "19394": {
    "RSS_PRESENCE": {
      "onfalse": {
        "comment": "absence de syndication", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "RSS_CACHE": {
            "onfalse": {
              "comment": "absence de MAJ", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "pr\u00e9sence de MAJ", 
              "result": "c"
            }
          }
        }, 
        "comment": "pr\u00e9sence de syndication", 
        "result": "i"
      }
    }
  }, 
  "19395": {
    "H1": {
      "onfalse": {
        "comment": "aucun H1", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "au moins un H1", 
        "result": "c"
      }
    }
  }, 
  "19396": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FORM_WO_SUBMIT": {
            "onfalse": {
              "comment": "aucun FORM sans bouton d'envoi", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un FORM sans bouton d'envoi", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "19397": {
    "FRAME": {
      "onfalse": {
        "comment": "aucun FRAME", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FRAME", 
        "result": "nc"
      }
    }, 
    "FRAMESET": {
      "onfalse": {
        "comment": "aucun FRAMESET", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FRAMESET", 
        "result": "nc"
      }
    }, 
    "NOFRAMES": {
      "onfalse": {
        "comment": "aucun NOFRAMES", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un NOFRAMES", 
        "result": "nc"
      }
    }
  }, 
  "19398": {
    "H2": {
      "onfalse": {
        "comment": "aucun H2", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H2_WO_H1": {
            "onfalse": {
              "comment": "aucun H2 non pr\u00e9c\u00e9d\u00e9 d'un H1", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H2 non pr\u00e9c\u00e9d\u00e9 d'un H1", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H2", 
        "result": "i"
      }
    }
  }, 
  "19399": {
    "H3": {
      "onfalse": {
        "comment": "aucun H3", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H3_WO_H2": {
            "onfalse": {
              "comment": "aucun H3 non pr\u00e9c\u00e9d\u00e9 d'un H2", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H3 non pr\u00e9c\u00e9d\u00e9 d'un H2", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H3", 
        "result": "i"
      }
    }
  }, 
  "19400": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT_WO_SRC": {
            "onfalse": {
              "comment": "aucun SCRIPT interne", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT interne", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "19401": {
    "H4": {
      "onfalse": {
        "comment": "aucun H4", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H4_WO_H3": {
            "onfalse": {
              "comment": "aucun H4 non pr\u00e9c\u00e9d\u00e9 d'un H3", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H4 non pr\u00e9c\u00e9d\u00e9 d'un H3", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H4", 
        "result": "i"
      }
    }
  }, 
  "19402": {
    "H5": {
      "onfalse": {
        "comment": "aucun H5", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H5_WO_H4": {
            "onfalse": {
              "comment": "aucun H5 non pr\u00e9c\u00e9d\u00e9 d'un H4", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H5 non pr\u00e9c\u00e9d\u00e9 d'un H4", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H5", 
        "result": "i"
      }
    }
  }, 
  "19403": {
    "H6": {
      "onfalse": {
        "comment": "aucun H6", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H6_WO_H5": {
            "onfalse": {
              "comment": "aucun H6 non pr\u00e9c\u00e9d\u00e9 d'un H5", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H6 non pr\u00e9c\u00e9d\u00e9 d'un H5", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H6", 
        "result": "i"
      }
    }
  }, 
  "19404": {
    "DL": {
      "onfalse": {
        "comment": "aucun DL", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "DL_WO_DT_FIRST": {
            "onfalse": {
              "comment": "aucun DL sans DT en premier", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un DL sans DT en premier", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un DL", 
        "result": "i"
      }
    }
  }, 
  "19405": {
    "FRAMESET": {
      "onfalse": {
        "comment": "aucun FRAMESET", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "NOFRAMES": {
            "onfalse": {
              "comment": "aucun NOFRAMES", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "au moins un NOFRAMES", 
              "result": "c"
            }
          }
        }, 
        "comment": "au moins un FRAMESET", 
        "result": "i"
      }
    }
  }, 
  "19406": {
    "FIELDSET": {
      "onfalse": {
        "comment": "aucun FIELDSET", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FIELDSET_WO_LEGEND_FIRST": {
            "onfalse": {
              "comment": "aucun FIELDSET dont le premier \u00e9l\u00e9ment n'est pas LEGEND", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un FIELDSET dont le premier \u00e9l\u00e9ment n'est pas LEGEND", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FIELDSET", 
        "result": "i"
      }
    }
  }, 
  "19407": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "NESTED_TABLE": {
            "onfalse": {
              "comment": "aucun TABLE imbriqu\u00e9", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE imbriqu\u00e9", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "19408": {
    "CSS_UNDERLINE": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment autre que A soulign\u00e9", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment autre que A soulign\u00e9", 
        "result": "nc"
      }
    }
  }, 
  "19409": {
    "STYLE_ATTR": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment avec un attribut STYLE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment avec un attribut STYLE", 
        "result": "nc"
      }
    }, 
    "STYLE_INTERNAL": {
      "onfalse": {
        "comment": "aucun STYLE avec du code CSS interne", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un STYLE avec du code CSS interne", 
        "result": "nc"
      }
    }
  }, 
  "19410": {
    "BGSOUND": {
      "onfalse": {
        "comment": "aucun BGSOUND", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BGSOUND", 
        "result": "nc"
      }
    }
  }, 
  "19411": {
    "BLINK": {
      "onfalse": {
        "comment": "aucun BLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BLINK", 
        "result": "nc"
      }
    }
  }, 
  "19412": {
    "LISTING": {
      "onfalse": {
        "comment": "aucun LISTING", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un LISTING", 
        "result": "nc"
      }
    }
  }, 
  "19413": {
    "MARQUEE": {
      "onfalse": {
        "comment": "aucun MARQUEE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un MARQUEE", 
        "result": "nc"
      }
    }
  }, 
  "19414": {
    "PLAINTEXT": {
      "onfalse": {
        "comment": "aucun PLAINTEXT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un PLAINTEXT", 
        "result": "nc"
      }
    }
  }, 
  "19415": {
    "STRIKE": {
      "onfalse": {
        "comment": "aucun STRIKE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un STRIKE", 
        "result": "nc"
      }
    }
  }, 
  "19416": {
    "XMP": {
      "onfalse": {
        "comment": "aucun XMP", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un XMP", 
        "result": "nc"
      }
    }
  }, 
  "19417": {
    "ALIGN_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALIGN", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALIGN", 
        "result": "nc"
      }
    }
  }, 
  "19418": {
    "ALINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALINK", 
        "result": "nc"
      }
    }
  }, 
  "19419": {
    "BACKGROUND_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BACKGROUND", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BACKGROUND", 
        "result": "nc"
      }
    }
  }, 
  "19420": {
    "BGCOLOR_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BGCOLOR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BGCOLOR", 
        "result": "nc"
      }
    }
  }, 
  "19421": {
    "BORDER_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BORDER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BORDER", 
        "result": "nc"
      }
    }
  }, 
  "19422": {
    "LINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut LINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut LINK", 
        "result": "nc"
      }
    }
  }, 
  "19423": {
    "TEXT_ATTR": {
      "onfalse": {
        "comment": "aucun attribut TEXT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut TEXT", 
        "result": "nc"
      }
    }
  }, 
  "19424": {
    "VLINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut VLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut VLINK", 
        "result": "nc"
      }
    }
  }, 
  "19425": {
    "CSS_MEDIA_PRINT": {
      "onfalse": {
        "comment": "aucune CSS pour l'impression", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "au moins une CSS pour l'impression", 
        "result": "c"
      }
    }
  }, 
  "19426": {
    "CSS_FONT_SIZE_W_ABSOLUTE_VALUE": {
      "onfalse": {
        "comment": "aucun FONT-SIZE n'est d\u00e9fini en taille absolue", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FONT-SIZE est d\u00e9fini en taille absolue", 
        "result": "nc"
      }
    }
  }, 
  "19427": {
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_NOT_INDEXABLE": {
            "onfalse": {
              "comment": "aucun IMG dont le format n'est pas indexable par les moteurs de recherche", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG dont le format n'est pas indexable par les moteurs de recherche", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "19428": {
    "BASEFONT": {
      "onfalse": {
        "comment": "aucun BASEFONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BASEFONT", 
        "result": "nc"
      }
    }
  }, 
  "19429": {
    "CENTER": {
      "onfalse": {
        "comment": "aucun CENTER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un CENTER", 
        "result": "nc"
      }
    }
  }, 
  "19430": {
    "FONT": {
      "onfalse": {
        "comment": "aucun FONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FONT", 
        "result": "nc"
      }
    }
  }, 
  "19431": {
    "TT": {
      "onfalse": {
        "comment": "aucun TT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un TT", 
        "result": "nc"
      }
    }
  }, 
  "19432": {
    "CSS_GENERIC_FONT": {
      "onfalse": {
        "comment": "aucune CSS ne se termine par une police non g\u00e9n\u00e9rique", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une CSS se termine par une police non g\u00e9n\u00e9rique", 
        "result": "nc"
      }
    }
  }, 
  "19433": {
    "FIELDSET_WO_FORM": {
      "onfalse": {
        "comment": "aucun FIEDLSET en dehors d'un FORM", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FIEDLSET en dehors d'un FORM", 
        "result": "nc"
      }
    }
  }, 
  "19434": {
    "CSS_UPPERCASE": {
      "onfalse": {
        "comment": "aucune suite de majuscules d\u00e9coratives", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une suite de majuscules d\u00e9coratives", 
        "result": "nc"
      }
    }
  }, 
  "19435": {
    "FRAME": {
      "onfalse": {
        "comment": "aucun FRAME", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "FRAME_W_EMPTY_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun FRAME avec un attribut TITLE vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un FRAME avec un attribut TITLE vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un FRAME", 
        "result": "i"
      }
    }
  }, 
  "19436": {
    "IFRAME": {
      "onfalse": {
        "comment": "aucun IFRAME", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IFRAME_W_EMPTY_TITLE_ATTR": {
            "onfalse": {
              "comment": "aucun IFRAME avec un attribut TITLE vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IFRAME avec un attribut TITLE vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IFRAME", 
        "result": "i"
      }
    }
  }, 
  "19437": {
    "H1": {
      "onfalse": {
        "comment": "aucun H1", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H1_W_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun H1 dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H1 dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H1", 
        "result": "i"
      }
    }, 
    "H2": {
      "onfalse": {
        "comment": "aucun H2", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H2_W_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun H2 dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H2 dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H2", 
        "result": "i"
      }
    }, 
    "H3": {
      "onfalse": {
        "comment": "aucun H3", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H3_W_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun H3 dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H3 dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H3", 
        "result": "i"
      }
    }, 
    "H4": {
      "onfalse": {
        "comment": "aucun H4", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H4_W_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun H4 dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H4 dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H4", 
        "result": "i"
      }
    }, 
    "H5": {
      "onfalse": {
        "comment": "aucun H5", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H5_W_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun H5 dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H5 dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H5", 
        "result": "i"
      }
    }, 
    "H6": {
      "onfalse": {
        "comment": "aucun H6", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H6_W_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun H6 dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H6 dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H6", 
        "result": "i"
      }
    }
  }, 
  "19438": {
    "H1": {
      "onfalse": {
        "comment": "aucun H1", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H1_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H1 sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H1 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H1", 
        "result": "i"
      }
    }
  }, 
  "19439": {
    "H2": {
      "onfalse": {
        "comment": "aucun H2", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H2_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H2 sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H2 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H2", 
        "result": "i"
      }
    }
  }, 
  "19440": {
    "H3": {
      "onfalse": {
        "comment": "aucun H3", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H3_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H3 sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H3 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H3", 
        "result": "i"
      }
    }
  }, 
  "19441": {
    "H4": {
      "onfalse": {
        "comment": "aucun H4", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H4_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H4 sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H4 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H4", 
        "result": "i"
      }
    }
  }, 
  "19442": {
    "H5": {
      "onfalse": {
        "comment": "aucun H5", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H5_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H5 sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H5 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H5", 
        "result": "i"
      }
    }
  }, 
  "19443": {
    "H6": {
      "onfalse": {
        "comment": "aucun H6", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "H6_WO_TEXT": {
            "onfalse": {
              "comment": "aucun H6 sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un H6 sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H6", 
        "result": "i"
      }
    }
  }, 
  "19444": {
    "LI": {
      "onfalse": {
        "comment": "aucun LI", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "LI_WO_TEXT": {
            "onfalse": {
              "comment": "aucun LI sans texte", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un LI sans texte", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un LI", 
        "result": "i"
      }
    }
  }, 
  "19445": {
    "A_WO_TEXT": {
      "onfalse": {
        "comment": "aucun A sans texte", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "A_NOT_ANCHOR_WO_TEXT": {
            "onfalse": {
              "comment": "aucun lien sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un lien sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un A sans texte", 
        "result": "i"
      }
    }
  }, 
  "19446": {
    "BUTTON": {
      "onfalse": {
        "comment": "aucun BUTTON", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "BUTTON_WO_TEXT": {
            "onfalse": {
              "comment": "aucun BUTTON sans contenu texte", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un BUTTON sans contenu texte", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un BUTTON", 
        "result": "i"
      }
    }
  }, 
  "19447": {
    "A_W_IMG_W_EMPTY_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun A avec un IMG ayant un attribut ALT vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "A_WO_TEXT_W_IMG_W_EMPTY_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun A sans texte contenant une image sans ALT rempli", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un A sans texte contenant une image sans ALT rempli", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un A avec un IMG ayant un attribut ALT vide", 
        "result": "i"
      }
    }, 
    "BUTTON_W_IMG_W_EMPTY_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun BUTTON avec un IMG ayant un attribut ALT vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "BUTTON_WO_TEXT_W_IMG_W_EMPTY_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun BUTTON sans contenu texte contenant un IMG sans ALT rempli", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un BUTTON sans contenu texte contenant un IMG sans ALT rempli", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un BUTTON avec un IMG ayant un attribut ALT vide", 
        "result": "i"
      }
    }
  }, 
  "19448": {
    "INPUT_W_TYPE_IMAGE": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_IMAGE_WO_FILLED_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type IMAGE sans ALT non vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type IMAGE sans ALT non vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un INPUT de type IMAGE", 
        "result": "i"
      }
    }
  }, 
  "19449": {
    "AREA": {
      "onfalse": {
        "comment": "aucun AREA", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "AREA_W_EMPTY_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun AREA avec ALT vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un AREA avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un AREA", 
        "result": "i"
      }
    }
  }, 
  "19450": {
    "TABLE_FOR_DATA": {
      "onfalse": {
        "comment": "aucun TABLE de donn\u00e9es", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_FOR_DATA_WO_FILLED_SUMMARY": {
            "onfalse": {
              "comment": "aucun TABLE pr\u00e9sentant des donn\u00e9es sans SUMMARY rempli", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE pr\u00e9sentant des donn\u00e9es sans SUMMARY rempli", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE de donn\u00e9es", 
        "result": "i"
      }
    }
  }, 
  "19451": {
    "INPUT_W_TYPE_SUBMIT": {
      "onfalse": {
        "comment": "aucun INPUT de type SUBMIT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_SUBMIT_W_VAL_ATTR_EMPTY": {
            "onfalse": {
              "comment": "aucun INPUT de type SUBMIT avec un VALUE non rempli", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type SUBMIT avec un VALUE non rempli", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un INPUT de type SUBMIT", 
        "result": "i"
      }
    }
  }, 
  "19452": {
    "P": {
      "onfalse": {
        "comment": "aucun P", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "P_WO_TEXT": {
            "onfalse": {
              "comment": "aucun P sans texte", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un P sans texte", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un P", 
        "result": "i"
      }
    }
  }, 
  "19453": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TITLE_WO_TEXT": {
            "onfalse": {
              "comment": "TITLE est rempli", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "TITLE est vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "TITLE est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "19454": {
    "A_W_IMG_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun A avec un IMG ayant un attribut ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "A_W_IMG_ALT_ATTR_EQUALS_TO_TEXT": {
            "onfalse": {
              "comment": "aucun A avec un IMG dont le ALT est \u00e9gal au contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un A avec un IMG dont le ALT est \u00e9gal au contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un A avec un IMG ayant un attribut ALT non vide", 
        "result": "i"
      }
    }
  }, 
  "19455": {
    "AREA_W_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun AREA avec un attribut ALT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "AREA_WO_FILLED_AND_UNIQUE_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun AREA sans ALT rempli et unique", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un AREA sans ALT rempli et unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un AREA avec un attribut ALT", 
        "result": "i"
      }
    }
  }, 
  "19456": {
    "TABLE_W_SUMMARY_ATTR_AND_CAPTION": {
      "onfalse": {
        "comment": "aucun TABLE avec un SUMMARY et un CAPTION", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_W_SUMMARY_ATTR_EQUALS_TO_CAPTION": {
            "onfalse": {
              "comment": "aucun TABLE avec un SUMMARY et un CAPTION identiques", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE avec un SUMMARY et un CAPTION identiques", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE avec un SUMMARY et un CAPTION", 
        "result": "i"
      }
    }
  }, 
  "19457": {
    "CAPTION": {
      "onfalse": {
        "comment": "aucun CAPTION", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "CAPTION_WO_TEXT": {
            "onfalse": {
              "comment": "aucun CAPTION sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un CAPTION sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un CAPTION", 
        "result": "i"
      }
    }
  }, 
  "19458": {
    "TABLE_W_SUMMARY_ATTR_AND_CAPTION": {
      "onfalse": {
        "comment": "aucun TABLE avec un SUMMARY et un CAPTION", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_W_SUMMARY_ATTR_EQUALS_TO_CAPTION": {
            "onfalse": {
              "comment": "aucun TABLE avec un SUMMARY et un CAPTION identiques", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE avec un SUMMARY et un CAPTION identiques", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE avec un SUMMARY et un CAPTION", 
        "result": "i"
      }
    }
  }, 
  "19459": {
    "LEGEND": {
      "onfalse": {
        "comment": "aucun LEGEND", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "LEGEND_WO_TEXT": {
            "onfalse": {
              "comment": "aucun LEGEND sans texte", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un LEGEND sans texte", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un LEGEND", 
        "result": "i"
      }
    }
  }, 
  "19460": {
    "OPTGROUP": {
      "onfalse": {
        "comment": "aucun OPTGROUP", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "OPTGROUP_WO_FILLED_AND_UNIQUE_LABEL_ATTR": {
            "onfalse": {
              "comment": "tous les OPTGROUP poss\u00e8dent un attribut LABEL unique et non vide", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un OPTGROUP ne poss\u00e8dent pas d'attribut LABEL unique et non vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un OPTGROUP", 
        "result": "i"
      }
    }
  }, 
  "19461": {
    "OPTGROUP": {
      "onfalse": {
        "comment": "aucun OPTGROUP", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "OPTGROUP_WO_FILLED_LABEL_ATTR": {
            "onfalse": {
              "comment": "aucun OPTGROUP sans LABEL", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un OPTGROUP sans LABEL", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un OPTGROUP", 
        "result": "i"
      }
    }
  }, 
  "19462": {
    "APPLET_W_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun APPLET avec un attribut ALT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "APPLET_W_MORE_THAN_80_CHAR_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun APPLET avec ALT de plus de 80 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un APPLET avec ALT de plus de 80 caract\u00e8res", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un APPLET avec un attribut ALT", 
        "result": "i"
      }
    }, 
    "AREA_W_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun AREA avec un attribut ALT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "AREA_W_MORE_THAN_80_CHAR_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun AREA avec ALT de plus de 80 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un AREA avec ALT de plus de 80 caract\u00e8res", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un AREA avec un attribut ALT", 
        "result": "i"
      }
    }, 
    "IMG_W_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun IMG avec un attribut ALT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_W_MORE_THAN_80_CHAR_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun IMG avec ALT de plus de 80 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec ALT de plus de 80 caract\u00e8res", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG avec un attribut ALT", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_IMAGE_W_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT de type IMAGE avec un attribut ALT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "INPUT_W_TYPE_IMAGE_W_MORE_THAN_80_CHAR_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun INPUT de type IMAGE avec ALT de plus de 80 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un INPUT de type IMAGE avec ALT de plus de 80 caract\u00e8res", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un INPUT de type IMAG avec un attribut ALT", 
        "result": "i"
      }
    }
  }, 
  "19463": {
    "META_KEYWORDS_FILLED": {
      "onfalse": {
        "comment": "aucun META KEYWORDS ou META KEYWORDS vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "META_KEYWORDS_W_MORE_THAN_10_TERMS": {
            "onfalse": {
              "comment": "le META KEYWORDS contient 10 termes ou moins", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "le META KEYWORDS contient plus de 10 termes", 
              "result": "nc"
            }
          }
        }, 
        "comment": "le META KEYWORDS est non vide", 
        "result": "i"
      }
    }
  }, 
  "19464": {
    "TITLE_W_MORE_THAN_80_CHAR": {
      "onfalse": {
        "comment": "le TITLE contient 80 caract\u00e8res ou moins", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "le TITLE contient plus de 80 caract\u00e8res", 
        "result": "nc"
      }
    }
  }, 
  "19465": {
    "META_DESCRIPTION_FILLED": {
      "onfalse": {
        "comment": "aucun META DESCRIPTION ou META DESCRIPTION vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "META_DESCRIPTION_W_MORE_THAN_250_CHAR": {
            "onfalse": {
              "comment": "le META DESCRIPTION contient moins de 250 caract\u00e8res", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "le META DESCRIPTION contient plus de 250 caract\u00e8res", 
              "result": "nc"
            }
          }
        }, 
        "comment": "le META DESCRIPTION est non vide", 
        "result": "i"
      }
    }
  }, 
  "19466": {
    "APPLET_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun APPLET avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "APPLET_W_ALT_ATTR_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun APPLET avec ALT dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un APPLET avec ALT dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un APPLET avec ALT non vide", 
        "result": "i"
      }
    }, 
    "AREA_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun AREA avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "AREA_W_ALT_ATTR_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun AREA avec ALT dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un AREA avec ALT dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un AREA avec ALT non vide", 
        "result": "i"
      }
    }, 
    "IMG_W_FILLED_ALT_ATTR": {
      "onfalse": {
        "comment": "aucun IMG avec ALT non vide", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_W_ALT_ATTR_TERMS_NOT_IN_CONTENT": {
            "onfalse": {
              "comment": "aucun IMG avec ALT dont les termes ne sont pas dans le contenu de la page", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec ALT dont les termes ne sont pas dans le contenu de la page", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG avec ALT non vide", 
        "result": "i"
      }
    }
  }, 
  "19467": {
    "HTTP_404": {
      "onfalse": {
        "comment": "le serveur ne renvoie pas d'ent\u00eate HTTP 404", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le serveur renvoie un ent\u00eate HTTP 404", 
        "result": "c"
      }
    }
  }, 
  "19468": {
    "ROBOTS_PRESENCE": {
      "onfalse": {
        "comment": "le robots.txt \u00e0 la racine du site est absent ou vide", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le robots.txt \u00e0 la racine du site est pr\u00e9sent et non vide", 
        "result": "c"
      }
    }
  }, 
  "19469": {
    "HTTP_CHARSET": {
      "onfalse": {
        "comment": "le serveur n'envoie pas les informations relatives au jeu de caract\u00e8res employ\u00e9", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le serveur envoie les informations relatives au jeu de caract\u00e8res employ\u00e9", 
        "result": "c"
      }
    }
  }, 
  "19470": {
    "HTTP_CACHE": {
      "onfalse": {
        "comment": "le serveur envoie les informations permettant la mise en cache des contenus", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "le serveur n'envoie pas d'information permettant la mise en cache des contenus", 
        "result": "nc"
      }
    }
  }, 
  "19471": {
    "HTTP_GZIP": {
      "onfalse": {
        "comment": "le serveur envoie des contenus compress\u00e9s aux clients qui les acceptent", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "le serveur n'envoie pas de contenus compress\u00e9s aux clients qui les acceptent", 
        "result": "nc"
      }
    }
  }, 
  "500": {
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IMG_WO_ALT_ATTR": {
            "onfalse": {
              "comment": "aucun IMG avec ALT vide", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec ALT vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "501": {
    "DOCTYPE_VALID": {
      "onfalse": {
        "comment": "le DOCTYPE est absent, mal \u00e9crit ou mal positionn\u00e9", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le DOCTYPE est pr\u00e9sent", 
        "result": "c"
      }
    }
  }, 
  "502": {
    "H1": {
      "onfalse": {
        "comment": "aucun H1", 
        "result": "nc"
      }, 
      "ontrue": {
        "chain": {
          "H1_TO_H6_HIERACHICAL_ERROR": {
            "onfalse": {
              "comment": "aucune interruption dans la hi\u00e9rarchie des titres", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins une interruption dans la hi\u00e9rarchie des titres", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un H1", 
        "result": "i"
      }
    }
  }, 
  "504": {
    "CSS_BACKGROUND_IMAGE": {
      "onfalse": {
        "comment": "aucune image ajout\u00e9e par CSS", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une image ajout\u00e9e par CSS", 
        "result": "i"
      }
    }, 
    "CSS_CONTENT": {
      "onfalse": {
        "comment": "aucun contenu textuel ajout\u00e9 par CSS", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un contenu textuel ajout\u00e9 par CSS", 
        "result": "i"
      }
    }
  }, 
  "508": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "nc"
      }, 
      "ontrue": {
        "chain": {
          "TITLE_W_TEXT": {
            "onfalse": {
              "comment": "TITLE est vide", 
              "result": "nc"
            }, 
            "ontrue": {
              "chain": {
                "TITLE_W_DEFAULT_VALUE": {
                  "onfalse": {
                    "comment": "TITLE est rempli", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "TITLE correspond \u00e0 une valeur par d\u00e9faut", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "TITLE est rempli", 
              "result": "i"
            }
          }
        }, 
        "comment": "TITLE est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "511": {
    "TITLE": {
      "onfalse": {
        "comment": "TITLE est absent", 
        "result": "nc"
      }, 
      "ontrue": {
        "chain": {
          "TITLE_W_TEXT": {
            "onfalse": {
              "comment": "TITLE est vide", 
              "result": "nc"
            }, 
            "ontrue": {
              "chain": {
                "TITLE_W_DEFAULT_VALUE": {
                  "onfalse": {
                    "comment": "TITLE est rempli", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "TITLE correspond \u00e0 une valeur par d\u00e9faut", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "TITLE est rempli", 
              "result": "i"
            }
          }
        }, 
        "comment": "TITLE est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "529": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AUDIO": {
      "onfalse": {
        "comment": "aucun AUDIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AUDIO", 
        "result": "i"
      }
    }, 
    "CANVAS": {
      "onfalse": {
        "comment": "aucun CANVAS", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un CANVAS", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }, 
    "VIDEO": {
      "onfalse": {
        "comment": "aucun VIDEO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un VIDEO", 
        "result": "i"
      }
    }
  }, 
  "533": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "BGSOUND": {
      "onfalse": {
        "comment": "aucun BGSOUND", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un BGSOUND", 
        "result": "i"
      }
    }, 
    "CANVAS": {
      "onfalse": {
        "comment": "aucun CANVAS", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un CANVAS", 
        "result": "i"
      }
    }, 
    "IMG_ANIMATED": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment anim\u00e9", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment anim\u00e9", 
        "result": "i"
      }
    }, 
    "RESSOURCE_MULTIMEDIA": {
      "onfalse": {
        "comment": "aucune ressource multim\u00e9dia", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ressource multim\u00e9dia", 
        "result": "i"
      }
    }
  }, 
  "535": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "538": {
    "INPUT_W_TYPE_CHECKBOX_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX avec un TITLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX avec un TITLE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE avec un TITLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE avec un TITLE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD avec un TITLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD avec un TITLE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO avec un TITLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO avec un TITLE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT avec un TITLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT avec un TITLE", 
        "result": "i"
      }
    }, 
    "LABEL": {
      "onfalse": {
        "comment": "aucun LABEL", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un LABEL", 
        "result": "i"
      }
    }, 
    "SELECT_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT avec un TITLE non vide et unique", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec un TITLE non vide et unique", 
        "result": "i"
      }
    }, 
    "TEXTAREA_W_FILLED_AND_UNIQUE_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun TEXTAREA avec un TITLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA avec un TITLE", 
        "result": "i"
      }
    }
  }, 
  "540": {
    "A_NOT_ANCHOR_SELF": {
      "onfalse": {
        "comment": "aucun A autre qu'une ancre", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "A_NOT_ANCHOR_SELF_WO_TEXT": {
            "onfalse": {
              "comment": "aucun A sans contenu textuel", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un A sans contenu textuel", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins A autre qu'une ancre", 
        "result": "i"
      }
    }
  }, 
  "541": {
    "CSS_UNDERLINE": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment autre que A soulign\u00e9", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment autre que A soulign\u00e9", 
        "result": "nc"
      }
    }
  }, 
  "548": {
    "HTML_W_LANG_ATTR_VALID": {
      "onfalse": {
        "comment": "l'attribut LANG de HTML est vide, absent ou incorrect", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "l'attribut LANG de HTML est correct", 
        "result": "i"
      }
    }
  }, 
  "551": {
    "FRAME": {
      "onfalse": {
        "comment": "aucun FRAME", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FRAME", 
        "result": "nc"
      }
    }, 
    "FRAMESET": {
      "onfalse": {
        "comment": "aucun FRAMESET", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FRAMESET", 
        "result": "nc"
      }
    }, 
    "NOFRAMES": {
      "onfalse": {
        "comment": "aucun NOFRAMES", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un NOFRAMES", 
        "result": "nc"
      }
    }
  }, 
  "552": {
    "IFRAME": {
      "onfalse": {
        "comment": "aucun IFRAME", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "IFRAME_WO_FILLED_TITLE_ATTR": {
            "onfalse": {
              "chain": {
                "IFRAME_W_UNIQUE_SRC_ATTR_WO_UNIQUE_TITLE_ATTR": {
                  "onfalse": {
                    "comment": "tous les IFRAME poss\u00e8dent un attribut TITLE diff\u00e9rents", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins deux IFRAME poss\u00e8dent le m\u00eame TITLE", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "aucun IFRAME avec un attribut TITLE absent ou vide", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un IFRAME avec un attribut TITLE absent ou vide", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IFRAME", 
        "result": "i"
      }
    }
  }, 
  "558": {
    "TARGET_BLANK": {
      "onfalse": {
        "comment": "aucune ouverture dans une nouvelle fen\u00eatre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ouverture dans une nouvelle fen\u00eatre", 
        "result": "i"
      }
    }
  }, 
  "559": {
    "JS_POPUP": {
      "onfalse": {
        "comment": "aucune pop-up d\u00e9tect\u00e9e (\u00e0 v\u00e9rifier)", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins une pop-up d\u00e9tect\u00e9e", 
        "result": "nc"
      }
    }
  }, 
  "562": {
    "JS_RESIZE": {
      "onfalse": {
        "comment": "aucune fen\u00eatre redimensionn\u00e9e d\u00e9tect\u00e9e (\u00e0 v\u00e9rifier)", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins une fen\u00eatre redimensionn\u00e9e d\u00e9tect\u00e9e", 
        "result": "nc"
      }
    }
  }, 
  "574": {
    "HTTP_CHARSET": {
      "onfalse": {
        "comment": "le serveur n'envoie pas les informations relatives au jeu de caract\u00e8res employ\u00e9", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le serveur envoie les informations relatives au jeu de caract\u00e8res employ\u00e9", 
        "result": "c"
      }
    }
  }, 
  "575": {
    "HTTP_CACHE": {
      "onfalse": {
        "comment": "le serveur envoie les informations permettant la mise en cache des contenus", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "le serveur n'envoie pas d'information permettant la mise en cache des contenus", 
        "result": "nc"
      }
    }
  }, 
  "577": {
    "404_DEFAULT": {
      "onfalse": {
        "comment": "aucune page 404 par d\u00e9faut", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins une page 404 par d\u00e9faut", 
        "result": "nc"
      }
    }
  }, 
  "578": {
    "HTTP_404": {
      "onfalse": {
        "comment": "le serveur ne renvoie pas d'ent\u00eate HTTP 404", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le serveur renvoie un ent\u00eate HTTP 404", 
        "result": "c"
      }
    }
  }, 
  "579": {
    "HTTP_GZIP": {
      "onfalse": {
        "comment": "le serveur envoie des contenus compress\u00e9s aux clients qui les acceptent", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "le serveur n'envoie pas de contenus compress\u00e9s aux clients qui les acceptent", 
        "result": "nc"
      }
    }
  }, 
  "580": {
    "RSS_PRESENCE": {
      "onfalse": {
        "comment": "absence de syndication", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "RSS_CACHE": {
            "onfalse": {
              "comment": "absence de MAJ", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "pr\u00e9sence de MAJ", 
              "result": "c"
            }
          }
        }, 
        "comment": "pr\u00e9sence de syndication", 
        "result": "i"
      }
    }
  }, 
  "581": {
    "RSS_PRESENCE": {
      "onfalse": {
        "comment": "absence de syndication", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "RSS_ABSOLUTE_LINKS": {
            "onfalse": {
              "comment": "aucun hyperlien non absolu dans les fils de syndication", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un hyperlien non absolu dans les fils de syndication", 
              "result": "nc"
            }
          }
        }, 
        "comment": "pr\u00e9sence de syndication", 
        "result": "i"
      }
    }
  }, 
  "582": {
    "LINK_ALTERN_ATOM": {
      "onfalse": {
        "chain": {
          "LINK_ALTERN_RSS": {
            "onfalse": {
              "comment": "aucun LINK de type ATOM ou RSS", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un LINK de type RSS", 
              "result": "c"
            }
          }
        }, 
        "comment": "aucun LINK de type ATOM", 
        "result": "i"
      }, 
      "ontrue": {
        "comment": "au moins un LINK de type ATOM", 
        "result": "c"
      }
    }
  }, 
  "583": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TH_WO_FILLED_AND_UNIQUE_ID_WO_SCOPE_ATTR": {
            "onfalse": {
              "chain": {
                "TD_WO_TH_OR_W_TH_WO_SCOPE_ATTR": {
                  "onfalse": {
                    "comment": "aucun TD dont le HEADERS ne correspond \u00e0 aucun TH", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un TD dont le HEADERS ne correspond \u00e0 aucun TH", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "aucun TH sans ID unique ni SCOPE", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un TH sans ID unique ni SCOPE", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "585": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AUDIO": {
      "onfalse": {
        "comment": "aucun AUDIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AUDIO", 
        "result": "i"
      }
    }, 
    "CANVAS": {
      "onfalse": {
        "comment": "aucun CANVAS", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un CANVAS", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }, 
    "VIDEO": {
      "onfalse": {
        "comment": "aucun VIDEO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un VIDEO", 
        "result": "i"
      }
    }
  }, 
  "587": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "NESTED_TABLE": {
            "onfalse": {
              "comment": "aucun TABLE imbriqu\u00e9", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE imbriqu\u00e9", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }, 
  "599": {
    "META_CHARSET_VALID": {
      "onfalse": {
        "comment": "aucun META CONTENT-TYPE pr\u00e9cisant le CHARSET", 
        "result": "nc"
      }, 
      "ontrue": {
        "chain": {
          "META_CHARSET_REAL": {
            "onfalse": {
              "comment": "le CHARSET pr\u00e9cis\u00e9 par le META CONTENT-TYPE ne correspond pas au charset r\u00e9\u00e9l", 
              "result": "nc"
            }, 
            "ontrue": {
              "comment": "le CHARSET pr\u00e9cis\u00e9 par le META CONTENT-TYPE correspond au charset r\u00e9\u00e9l", 
              "result": "c"
            }
          }
        }, 
        "comment": "le META CONTENT-TYPE pr\u00e9cisant le CHARSET est pr\u00e9sent", 
        "result": "i"
      }
    }
  }, 
  "613": {
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "CSS_IMG_RESIZE": {
            "onfalse": {
              "comment": "aucun IMG avec un WIDTH ou HEIGHT redimensionn\u00e9", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un IMG avec un WIDTH ou HEIGHT redimensionn\u00e9", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "614": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "615": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "616": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT_WO_FILLED_TITLE_ATTR": {
      "onfalse": {
        "comment": "aucun SELECT sans TITLE vide", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT avec TITLE vide", 
        "result": "i"
      }
    }, 
    "TEXTAREA_WO_TITLE": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "617": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "618": {
    "INPUT_W_TYPE_CHECKBOX": {
      "onfalse": {
        "comment": "aucun INPUT de type CHECKBOX", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type CHECKBOX", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_FILE": {
      "onfalse": {
        "comment": "aucun INPUT de type FILE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type FILE", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_PASSWORD": {
      "onfalse": {
        "comment": "aucun INPUT de type PASSWORD", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type PASSWORD", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_RADIO": {
      "onfalse": {
        "comment": "aucun INPUT de type RADIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type RADIO", 
        "result": "i"
      }
    }, 
    "INPUT_W_TYPE_TEXT": {
      "onfalse": {
        "comment": "aucun INPUT de type TEXT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un INPUT de type TEXT", 
        "result": "i"
      }
    }, 
    "SELECT": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }, 
    "TEXTAREA": {
      "onfalse": {
        "comment": "aucun TEXTAREA", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TEXTAREA", 
        "result": "i"
      }
    }
  }, 
  "624": {
    "ROBOTS_PRESENCE": {
      "onfalse": {
        "comment": "le robots.txt \u00e0 la racine du site est absent ou vide", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le robots.txt \u00e0 la racine du site est pr\u00e9sent et non vide", 
        "result": "c"
      }
    }
  }, 
  "625": {
    "META_DESCRIPTION_FILLED": {
      "onfalse": {
        "comment": "aucun META DESCRIPTION ou META DESCRIPTION vide", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le META DESCRIPTION est non vide", 
        "result": "i"
      }
    }
  }, 
  "627": {
    "FAVICON": {
      "onfalse": {
        "comment": "aucun appel valide \u00e0 un favicon", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "un appel valide \u00e0 un favicon", 
        "result": "c"
      }
    }
  }, 
  "636": {
    "AREA_W_HREF_NOT_HTTP": {
      "onfalse": {
        "comment": "aucun AREA ouvrant un logiciel externe", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AREA ouvrant un logiciel externe", 
        "result": "i"
      }
    }, 
    "A_W_HREF_NOT_HTTP": {
      "onfalse": {
        "comment": "aucun A ouvrant un logiciel externe", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un A ouvrant un logiciel externe", 
        "result": "i"
      }
    }
  }, 
  "639": {
    "CSS_MEDIA_PRINT": {
      "onfalse": {
        "comment": "aucune CSS pour l'impression", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "au moins une CSS pour l'impression", 
        "result": "c"
      }
    }
  }, 
  "640": {
    "CSS_GENERIC_FONT": {
      "onfalse": {
        "comment": "aucune CSS ne se termine par une police non g\u00e9n\u00e9rique", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une CSS se termine par une police non g\u00e9n\u00e9rique", 
        "result": "nc"
      }
    }
  }, 
  "641": {
    "CSS_FONT_SIZE_W_ABSOLUTE_VALUE": {
      "onfalse": {
        "comment": "aucun FONT-SIZE n'est d\u00e9fini en taille absolue", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FONT-SIZE est d\u00e9fini en taille absolue", 
        "result": "nc"
      }
    }
  }, 
  "645": {
    "HTTP_CONTENT_LANGUAGE": {
      "onfalse": {
        "comment": "le serveur n'envoie pas l'indication de la langue principale du contenu", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le serveur envoie l'indication de la langue principale du contenu", 
        "result": "i"
      }
    }
  }, 
  "646": {
    "TABLE_FOR_DATA": {
      "onfalse": {
        "comment": "aucun TABLE de donn\u00e9es", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "TABLE_FOR_DATA_WO_CAPTION": {
            "onfalse": {
              "comment": "tous les TABLE ont un CAPTION", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un TABLE sans CAPTION", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un TABLE de donn\u00e9es", 
        "result": "i"
      }
    }
  }, 
  "651": {
    "TABLE_LAYOUT": {
      "onfalse": {
        "comment": "aucun TABLE de mise en page", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TABLE de mise en page", 
        "result": "i"
      }
    }
  }, 
  "654": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "AUDIO": {
      "onfalse": {
        "comment": "aucun AUDIO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un AUDIO", 
        "result": "i"
      }
    }, 
    "CANVAS": {
      "onfalse": {
        "comment": "aucun CANVAS", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un CANVAS", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }, 
    "VIDEO": {
      "onfalse": {
        "comment": "aucun VIDEO", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un VIDEO", 
        "result": "i"
      }
    }
  }, 
  "655": {
    "STYLE_ATTR": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment avec un attribut STYLE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment avec un attribut STYLE", 
        "result": "i"
      }
    }
  }, 
  "656": {
    "DOCTYPE_DOM_VALID": {
      "onfalse": {
        "comment": "le code contient des erreurs d'attributs ou de balises", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le code ne contient pas d'erreurs d'attributs ou de balises", 
        "result": "c"
      }
    }
  }, 
  "657": {
    "ALIGN_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALIGN", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALIGN", 
        "result": "nc"
      }
    }, 
    "ALINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut ALINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut ALINK", 
        "result": "nc"
      }
    }, 
    "BACKGROUND_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BACKGROUND", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BACKGROUND", 
        "result": "nc"
      }
    }, 
    "BASEFONT": {
      "onfalse": {
        "comment": "aucun BASEFONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BASEFONT", 
        "result": "nc"
      }
    }, 
    "BASEFONT_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BASEFONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BASEFONT", 
        "result": "nc"
      }
    }, 
    "BGCOLOR_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BGCOLOR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BGCOLOR", 
        "result": "nc"
      }
    }, 
    "BLINK": {
      "onfalse": {
        "comment": "aucun BLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un BLINK", 
        "result": "nc"
      }
    }, 
    "BORDER_ATTR": {
      "onfalse": {
        "comment": "aucun attribut BORDER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut BORDER", 
        "result": "nc"
      }
    }, 
    "CENTER": {
      "onfalse": {
        "comment": "aucun CENTER", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un CENTER", 
        "result": "nc"
      }
    }, 
    "COLOR_ATTR": {
      "onfalse": {
        "comment": "aucun attribut COLOR", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut COLOR", 
        "result": "nc"
      }
    }, 
    "FONT": {
      "onfalse": {
        "comment": "aucun FONT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un FONT", 
        "result": "nc"
      }
    }, 
    "LINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut LINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut LINK", 
        "result": "nc"
      }
    }, 
    "MARQUEE": {
      "onfalse": {
        "comment": "aucun MARQUEE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un MARQUEE", 
        "result": "nc"
      }
    }, 
    "S": {
      "onfalse": {
        "comment": "aucun S", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un S", 
        "result": "nc"
      }
    }, 
    "STRIKE": {
      "onfalse": {
        "comment": "aucun STRIKE", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un STRIKE", 
        "result": "nc"
      }
    }, 
    "TEXT_ATTR": {
      "onfalse": {
        "comment": "aucun attribut TEXT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut TEXT", 
        "result": "nc"
      }
    }, 
    "TT": {
      "onfalse": {
        "comment": "aucun TT", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un TT", 
        "result": "nc"
      }
    }, 
    "U": {
      "onfalse": {
        "comment": "aucun U", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un U", 
        "result": "nc"
      }
    }, 
    "VLINK_ATTR": {
      "onfalse": {
        "comment": "aucun attribut VLINK", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins un attribut VLINK", 
        "result": "nc"
      }
    }
  }, 
  "660": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "661": {
    "DOCTYPE_HTML_VALID": {
      "onfalse": {
        "comment": "le code est conforme au DOCTYPE", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "le code n'est pas conforme au DOCTYPE", 
        "result": "c"
      }
    }
  }, 
  "676": {
    "IMG_ANIMATED": {
      "onfalse": {
        "comment": "aucun \u00e9l\u00e9ment anim\u00e9", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9l\u00e9ment anim\u00e9", 
        "result": "i"
      }
    }, 
    "RESSOURCE_MULTIMEDIA": {
      "onfalse": {
        "comment": "aucune ressource multim\u00e9dia", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ressource multim\u00e9dia", 
        "result": "i"
      }
    }
  }, 
  "677": {
    "APPLET": {
      "onfalse": {
        "comment": "aucun APPLET", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un APPLET", 
        "result": "i"
      }
    }, 
    "EMBED": {
      "onfalse": {
        "comment": "aucun EMBED", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un EMBED", 
        "result": "i"
      }
    }, 
    "OBJECT": {
      "onfalse": {
        "comment": "aucun OBJECT", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OBJECT", 
        "result": "i"
      }
    }
  }, 
  "679": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT": {
            "onfalse": {
              "comment": "aucun SCRIPT", 
              "result": "na"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT", 
              "result": "i"
            }
          }
        }, 
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "681": {
    "LABEL": {
      "onfalse": {
        "comment": "aucun LABEL", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un LABEL", 
        "result": "i"
      }
    }
  }, 
  "682": {
    "FORM_W_3_FIELDS_OR_MORE": {
      "onfalse": {
        "comment": "aucun FORM avec 3 champs ou plus", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM avec 3 champs ou plus", 
        "result": "i"
      }
    }
  }, 
  "683": {
    "SELECT": {
      "onfalse": {
        "comment": "aucun SELECT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SELECT_W_OPTGROUP_W_FILLED_AND_UNIQUE_LABEL_ATTR": {
            "onfalse": {
              "comment": "tous les OPTGROUP poss\u00e8dent un LABEL non vide et unique", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un OPTGROUP sans LABEL non vide et unique", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un SELECT", 
        "result": "i"
      }
    }
  }, 
  "684": {
    "OPTION": {
      "onfalse": {
        "comment": "aucun OPTION", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OPTION", 
        "result": "i"
      }
    }
  }, 
  "690": {
    "ROBOTS_W_VALID_SITEMAP": {
      "onfalse": {
        "comment": "absence du SITEMAP ou du robots.txt", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "pr\u00e9sence du SITEMAP", 
        "result": "c"
      }
    }
  }, 
  "696": {
    "JS_NEW_WINDOW": {
      "onfalse": {
        "comment": "aucun \u00e9v\u00e9nement clavier ou souris", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un \u00e9v\u00e9nement clavier ou souris", 
        "result": "i"
      }
    }, 
    "TARGET_BLANK": {
      "onfalse": {
        "comment": "aucune ouverture dans une nouvelle fen\u00eatre", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins une ouverture dans une nouvelle fen\u00eatre", 
        "result": "nc"
      }
    }
  }, 
  "702": {
    "CSS_FONTS_NUMBER": {
      "onfalse": {
        "comment": "pas plus de 3 polices d\u00e9finies", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "plus de 3 polices d\u00e9finies", 
        "result": "nc"
      }
    }
  }, 
  "705": {
    "CSS_MEDIA_HANDHELD": {
      "onfalse": {
        "comment": "aucune CSS pour le mobile", 
        "result": "nc"
      }, 
      "ontrue": {
        "comment": "au moins une CSS pour le mobile", 
        "result": "c"
      }
    }
  }, 
  "709": {
    "CSS_UPPERCASE": {
      "onfalse": {
        "comment": "aucune suite de majuscules d\u00e9coratives", 
        "result": "c"
      }, 
      "ontrue": {
        "comment": "au moins une suite de majuscules d\u00e9coratives", 
        "result": "nc"
      }
    }
  }, 
  "712": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT_IN_HEAD": {
            "onfalse": {
              "chain": {
                "SCRIPT_AT_END": {
                  "onfalse": {
                    "comment": "au moins un SCRIPT non plac\u00e9 \u00e0 la fin du code", 
                    "result": "nc"
                  }, 
                  "ontrue": {
                    "comment": "aucun SCRIPT non plac\u00e9 \u00e0 la fin du code", 
                    "result": "c"
                  }
                }
              }, 
              "comment": "aucun SCRIPT dans le HEAD", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT dans le HEAD", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "714": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "SCRIPT_WO_SRC": {
            "onfalse": {
              "comment": "aucun SCRIPT interne", 
              "result": "c"
            }, 
            "ontrue": {
              "comment": "au moins un SCRIPT interne", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "715": {
    "SCRIPT": {
      "onfalse": {
        "comment": "aucun SCRIPT", 
        "result": "na"
      }, 
      "ontrue": {
        "chain": {
          "JS_W_CR": {
            "onfalse": {
              "chain": {
                "JS_W_REDUDANT_SPACES": {
                  "onfalse": {
                    "chain": {
                      "JS_W_COMMENTS": {
                        "onfalse": {
                          "comment": "aucun JS avec des commentaires", 
                          "result": "c"
                        }, 
                        "ontrue": {
                          "comment": "au moins un JS avec des commentaires", 
                          "result": "nc"
                        }
                      }
                    }, 
                    "comment": "aucun JS avec des espaces inutiles", 
                    "result": "i"
                  }, 
                  "ontrue": {
                    "comment": "au moins un JS avec des espaces inutiles", 
                    "result": "nc"
                  }
                }
              }, 
              "comment": "aucun JS avec des retours \u00e0 la ligne", 
              "result": "i"
            }, 
            "ontrue": {
              "comment": "au moins un JS avec des retours \u00e0 la ligne", 
              "result": "nc"
            }
          }
        }, 
        "comment": "au moins un SCRIPT", 
        "result": "i"
      }
    }
  }, 
  "FORM": {
    "FORM": {
      "onfalse": {
        "comment": "aucun FORM", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un FORM", 
        "result": "i"
      }
    }
  }, 
  "IMG": {
    "IMG": {
      "onfalse": {
        "comment": "aucun IMG", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un IMG", 
        "result": "i"
      }
    }
  }, 
  "LIST": {
    "ORDERED_LIST": {
      "onfalse": {
        "comment": "aucun OL", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un OL", 
        "result": "i"
      }
    }, 
    "UNORDERED_LIST": {
      "onfalse": {
        "comment": "aucun UL", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un UL", 
        "result": "i"
      }
    }
  }, 
  "TABLE": {
    "TABLE": {
      "onfalse": {
        "comment": "aucun TABLE", 
        "result": "na"
      }, 
      "ontrue": {
        "comment": "au moins un TABLE", 
        "result": "i"
      }
    }
  }
};