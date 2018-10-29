const Gpio = require('onoff').Gpio;
const degrec = require("./degree.js")
const ps = require("os")

module.exports = function (gpio,val) {
	this.val  = val
	this.gpio = gpio
if(ps.type() !== "Linux") {
throw new Error("This os not supported: " + ps.type())
}
if(gpio == "" || gpio == undefined || gpio == null) {
throw new Error("Fan pin not defined")
}
if(isNaN(Number(gpio))) {
throw new Error("Fan pin is not a number " + gpio)
}
const fan = new Gpio(gpio,'out');

if(typeof val !== 'object') {
maxT = "55"
minT = "45"
setInterval(function() {
degrec.get(res => {
if(res > maxT || res == maxT) {
	fan.writeSync(1)
} else if(res < minT ||res == minT) {
	fan.writeSync(0)
}
})
},100)
} else {
if(val.min == "" || val.min == undefined || isNaN(Number(val.min)) || val.max == "" || val.max == undefined || isNaN(Number(val.max))) {
throw new Error("min,max value not defined in: " + val + " object")	
}
setInterval(function() {
degrec.get(res => {
if(res > val.max || res == val.max) {
	fan.writeSync(1)
} else if(res < val.min ||res == val.min) {
	fan.writeSync(0)
}
})
},100)
}

process.on('SIGINT', () => {
fan.writeSync(0)
process.exit()
});
}
