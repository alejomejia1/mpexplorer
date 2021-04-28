Blockly.defineBlocksWithJsonArray([
    {
      "type": "esp_temp",
      "message0": "Temperature ESP",
      // "args0": [
      //   {
      //     "type": "input_value",
      //     "name": "text"
      //   }
      // ],
      "inputsInline": false,
      "output": "Number",
      // "previousStatement": null,
      // "nextStatement": null,
      "colour": 120,
      "tooltip": "Print Variable",
      "helpUrl": ""
    }
]);


Blockly.defineBlocksWithJsonArray([
    {
      "type": "esp_hall",
      "message0": "Hall Sensor ESP",
      // "args0": [
      //   {
      //     "type": "input_value",
      //     "name": "text"
      //   }
      // ],
      "inputsInline": false,
      "output": "Number",
      // "previousStatement": null,
      // "nextStatement": null,
      "colour": 120,
      "tooltip": "Print Variable",
      "helpUrl": ""
    }
]);

Blockly.defineBlocksWithJsonArray([
    {
      "type": "ulp_period",
      "message0": "Ultra Low Power (ULP) Period %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERIOD"
        }
      ],
      "inputsInline": false,
      // "output": "Number",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "tooltip": "Print Variable",
      "helpUrl": ""
    }
]);

Blockly.defineBlocksWithJsonArray([
    {
      "type": "ulp_run",
      "message0": "Run ULP",
      // "args0": [
      //   {
      //     "type": "input_value",
      //     "name": "PERIOD"
      //   }
      // ],
      "inputsInline": false,
      // "output": "Number",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "tooltip": "Print Variable",
      "helpUrl": ""
    }
]);


Blockly.defineBlocksWithJsonArray([
    {
      "type": "touch_pin",
      "message0": "Touch on Pin %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PIN"
        }
      ],
      "inputsInline": true,
      // "output": "Number",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "tooltip": "Print Variable",
      "helpUrl": ""
    }
]);

Blockly.defineBlocksWithJsonArray([
    {
      "type": "read_touch",
      "message0": "Read Touch Pin",
      // "args0": [
      //   {
      //     "type": "input_value",
      //     "name": "PERIOD"
      //   }
      // ],
      "inputsInline": true,
      "output": "Number",
      // "previousStatement": null,
      // "nextStatement": null,
      "colour": 120,
      "tooltip": "Print Variable",
      "helpUrl": ""
    }
]);


Blockly.Python['esp_temp'] = function(block) {
  //var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.provideFunction_(
        'import_modul_esp32', ['import esp32']);
  var code = 'esp32.raw_temperature()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];

};



Blockly.Python['esp_hall'] = function(block) {
  //var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.provideFunction_(
        'import_modul_esp32', ['import esp32']);
  var code = 'esp32.hall_sensor()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];

};

Blockly.Python['ulp_period'] = function(block) {
  var value_period = Blockly.Python.valueToCode(block, 'PERIOD', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.provideFunction_(
        'import_modul_esp32', ['import esp32']);
  var code = 'ULP.set_wakeup_period(' + value_period + ')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
  // return [code, Blockly.Python.ORDER_ATOMIC];

};

Blockly.Python['ulp_run'] = function(block) {
  // var value_period = Blockly.Python.valueToCode(block, 'PERIOD', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.provideFunction_(
        'import_modul_esp32', ['import esp32']);
  var code = 'ULP.run()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
  // return [code, Blockly.Python.ORDER_ATOMIC];

};


Blockly.Python['touch_pin'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.provideFunction_(
        'import_modul_touch', ['from machine import Pin, TouchPad']);
  var code = 'touch = TouchPad(Pin(' + value_pin + '))\n';
  return code;
  // TODO: Change ORDER_NONE to the correct strength.
  // return [code, Blockly.Python.ORDER_ATOMIC];

};

Blockly.Python['read_touch'] = function(block) {
  //var value_pin = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // Blockly.Python.provideFunction_(
  //       'import_modul_touch', ['from machine import Pin, TouchPad']);
  var code = 'touch.read()\n';
  // return code;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];

};