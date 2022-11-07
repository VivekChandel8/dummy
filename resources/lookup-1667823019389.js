(function(window, undefined) {
  var dictionary = {
    "e7f745d6-8541-4f67-b878-3ca5e0d151d3": "LoginScreen",
    "b80dc2c9-4dfa-4b5f-8a7c-7c08daab4b2b": "DisptachDetail",
    "97298b9b-de23-4c50-839b-8021cf18cffc": "Dashboard",
    "b5d04520-72ca-427f-8d79-1628057c3f9c": "DispatchParts",
    "fe10c1f1-8870-4f9c-875b-9f36a84151c0": "WorkOrder",
    "a2053f06-5e0e-4525-a385-4f1a7888e589": "new disptaches",
    "e4ffbd33-dc59-40ae-965f-61dd1298bb2c": "EditPart",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "a5e04715-4007-43a0-aef4-9a3d3414aafa": "AddNewPart",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);