var rulesets = {
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
  }
};