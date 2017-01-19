var five = require('johnny-five');
var Particle = require('particle-io');
var board = new five.Board({
  io: new Particle({
    token: process.env.PARTICLE_TOKEN,
    deviceId: process.env.PARTICLE_DEVICE_ID
  })
});

board.on('ready', function () {
  // var led = new five.Led('D7');
  // led.blink();
  var write = (message) => {
    this.i2cWrite(0x08, Array.from(message, c => c.charCodeAt(0)));
  };
  this.i2cConfig();
  this.repl.inject({write});

  write('Hello World');
});
