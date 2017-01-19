Johnny Five Photon ☛ I2C ☛ Arduino Uno 
=======================================

Example sketch how to communicate from a [Particle Photon](https://store.particle.io/#photon) to an [Arduino Uno R3](https://www.arduino.cc/en/Main/arduinoBoardUno) using [Johnny Five](http://johnny-five.io/), [Particle-io](https://github.com/rwaldron/particle-io) and the [Wire](https://www.arduino.cc/en/Reference/Wire) library via [I2C](https://en.wikipedia.org/wiki/I%C2%B2C) protocol.  

## Contents


    ├── README.md
    ├── fritzing <-- frintzing source files
    ├── images <-- holds the hookup guide
    ├── index.js <-- the main programm
    ├── package.json 
    └── uno-receiver <-- Arduino firmware


## Hardware  

- tbd  

## Prerequisites

- tbd  

## Usage


Run this code:  

    nvm use  
    npm install  
    node index.js  


### Notes:  

Code examples are taken from here

- https://github.com/rwaldron/johnny-five/issues/1184

Hookup guide is derived from here

- https://github.com/johnny-five-io/johnny-five.io/blob/master/src/news/particle-io-now-supports-i2c.md
- http://johnny-five.io/news/particle-io-now-supports-i2c/





