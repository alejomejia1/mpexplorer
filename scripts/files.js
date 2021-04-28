Blockly.defineBlocksWithJsonArray([
    {
      "type": "listdir",
      "message0": "listdir",
      // "args0": [
      //   {
      //     "type": "input_value",
      //     "name": "text"
      //   }
      // ],
      "inputsInline": false,
      // "previousStatement": null,
      // "nextStatement": null,
      "output": "Number",
      "colour": 50,
      "tooltip": "listdir",
      "helpUrl": ""
    }
]);

Blockly.defineBlocksWithJsonArray([
    {
      "type": "mkdir",
      "message0": "make dir %1",
      "args0": [
        {
          "type": "input_value",
          "name": "dir_name"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      // "output": "Number",
      "colour": 50,
      "tooltip": "listdir",
      "helpUrl": ""
    }
]);

Blockly.defineBlocksWithJsonArray([
    {
      "type": "rmdir",
      "message0": "remove dir %1 Data %2",


      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "dir_name"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      // "output": "Number",
      "colour": 50,
      "tooltip": "listdir",
      "helpUrl": ""
    }
]);


Blockly.defineBlocksWithJsonArray([
    {
      "type": "create_file",
      "message0": "create file %1",
      "args0": [
        {
          "type": "input_value",
          "name": "file_name"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      // "output": "Number",
      "colour": 50,
      "tooltip": "listdir",
      "helpUrl": ""
    }
]);

Blockly.defineBlocksWithJsonArray([
    {
      "type": "write_file",
      "message0": "Write to open file %1",
      "args0": [
        {
          "type": "input_value",
          "name": "file_name"
        }
      ],
      "inputsInline": false,
      "previousStatement": null,
      "nextStatement": null,
      // "output": "Number",
      "colour": 50,
      "tooltip": "listdir",
      "helpUrl": ""
    }
]);

Blockly.defineBlocksWithJsonArray([
    {
      "type": "read_file",
      "message0": "read  file %1",
      "args0": [
        {
          "type": "input_value",
          "name": "file_name"
        }
      ],
      "inputsInline": false,
      "previousStatement": null,
      "nextStatement": null,
      // "output": "String",
      "colour": 50,
      "tooltip": "listdir",
      "helpUrl": ""
    }
]);

Blockly.Python['listdir'] = function(block) {
  // var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.provideFunction_('import_os', ['import os']);
  var code = 'os.listdir()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mkdir'] = function(block) {
  var dir_name = Blockly.Python.valueToCode(block, 'dir_name', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.provideFunction_('import_os', ['import os']);
  var code = 'os.mkdir(' + dir_name + ')\n';
  return code;
  // return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rmdir'] = function(block) {
  var dir_name = Blockly.Python.valueToCode(block, 'dir_name', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.provideFunction_('import_os', ['import os']);
  var code = 'os.remove(' + dir_name + ')\n';
  return code;
  // return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['create_file'] = function(block) {
  var file_name = Blockly.Python.valueToCode(block, 'file_name', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  // Blockly.Python.provideFunction_('import_os', ['import os']);
  var code = "file = open(" + file_name + ", 'w')"
  return code;
  // return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['write_file'] = function(block) {
  // var file_name = Blockly.Python.valueToCode(block, 'file_name', Blockly.Python.ORDER_ATOMIC);
  var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  // Blockly.Python.provideFunction_('import_os', ['import os']);
  var code = "file = open(" + file_name + ", 'w')"
  return code;
  // return [code, Blockly.Python.ORDER_ATOMIC];
};



Blockly.Python['read_file'] = function(block) {
  // var file_name = Blockly.Python.valueToCode(block, 'file_name', Blockly.Python.ORDER_ATOMIC);
  var file_name = Blockly.Python.valueToCode(block, 'file_name', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  // Blockly.Python.provideFunction_('import_os', ['import os']);

  var code = "file = open(" + file_name + ")\ndata = file.read()\nfile.close()\nprint(data)\n"
  return code;
  // return [code, Blockly.Python.ORDER_ATOMIC];
};

// >>> f = open('data.txt')
// >>> f.read()
// 'some data'
// >>> f.close()

