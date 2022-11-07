jQuery("#simulation")
  .on("click", ".s-a2053f06-5e0e-4525-a385-4f1a7888e589 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "disptaches",
                    "fields": {
                      "edb5598e-c46a-4434-ab95-b4e83024e260": {
                        "datatype": "property",
                        "target": "#s-Input_1",
                        "property": "jimGetValue"
                      },
                      "2e417fc9-179c-4f4a-bfe2-23bca256b73c": {
                        "datatype": "property",
                        "target": "#s-Input_2",
                        "property": "jimGetValue"
                      },
                      "460ab57a-684d-4216-9277-8dbbed4e562b": {
                        "datatype": "property",
                        "target": "#s-Input_3",
                        "property": "jimGetValue"
                      },
                      "a2c445ad-6458-4378-a292-d188bbfb81b5": {
                        "datatype": "property",
                        "target": "#s-Input_4",
                        "property": "jimGetValue"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });