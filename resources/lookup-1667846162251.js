(function(window, undefined) {
  var dictionary = {
    "b80dc2c9-4dfa-4b5f-8a7c-7c08daab4b2b": "DisptachDetail",
    "e7f745d6-8541-4f67-b878-3ca5e0d151d3": "LoginScreen",
    "3e2c42d4-7655-47c5-991f-edf85f490ec1": "Profile",
    "97298b9b-de23-4c50-839b-8021cf18cffc": "Dashboard",
    "b5d04520-72ca-427f-8d79-1628057c3f9c": "DispatchParts",
    "56e59c1a-c095-4bd4-a0fa-09f3999707bd": "CompletionPage",
    "00703090-23b6-461d-b352-b85fe4156d76": "PaymentPage",
    "fe10c1f1-8870-4f9c-875b-9f36a84151c0": "WorkOrder",
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