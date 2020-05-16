'use strict'

function Udp (client) {
  const serialport = require('serialport');
  const readline = serialport.parsers.Readline;
  this.output = null;
  this.input = null;
  this.stack = [];
  this.ports = [];

// list serial ports:

  this.start = function () {

    this.selectInput()
    this.selectOutput()
  }

  this.clear = function () {
    this.stack = [];
  }

  this.run = function () {
    for (const item of this.stack) {
      this.output.write(item);
    }
  }

  this.push = function (msg) {
    this.stack.push(msg)
  }

  this.play = function (data) {

  }

  this.selectOutput = function (port = 0, rate = 9600) {
    console.log("Searching for serial ports...")
    serialport.list(function (err, _ports) {
      _ports.forEach(function(_port) {
        this.ports.push(_port)
        console.log("Found serial port " + _port)
      });
    });
    this.output = new SerialPort(this.ports[port], rate);
    console.log("Selected port " + port + " as Output at rate " + rate)
    this.output.on('open', function(){
      console.log("Output port opened successfully.")
    });
    this.output.on('close', function(){
      console.log("Output port closed successfully.")
    });
    this.output.on('error',function(error){
      console.log('Output port error: ' + error);
    });
  }

  this.selectInput = (port = 0, rate = 9600) => {
    console.log("Searching for serial ports...")
    serialport.list(function (err, _ports) {
      _ports.forEach(function(_port) {
        this.ports.push(_port)
        console.log("Found serial port " + _port)
      });
    });
    this.input = new SerialPort(this.ports[port], rate);
    var parser = new readline();
    parser.on('data', function(data){
      console.log(data)
    });
    this.input.pipe(new readline());
    console.log("Selected port " + port + " as Input at rate " + rate)
    this.output.on('open', function(){
      console.log("Input port opened successfully.")
    });
    this.output.on('close', function(){
      console.log("Input port closed successfully.")
    });
    this.output.on('error',function(error){
      console.log('Input port error: ' + error);
    });
  }
}
