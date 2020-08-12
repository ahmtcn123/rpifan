const Gpio = require('onoff').Gpio;
module.exports = function (fanPin, {min, max}) {
	var degree = () => new Promise((resolve) => {
		require('child_process').exec("/opt/vc/bin/vcgencmd measure_temp").stdout.on('data', (data) => {
		  resolve(data.toString().split("=")[1].split(".")[0])
		});
	})

	if(fanPin instanceof Gpio) {
		var {maxT, minT} = {min: min && !isNaN(Number(min)) || 45, maxT: max && !isNaN(Number(max)) || 55}
		setInterval(async () => {
			var cpuDegree = await degrec.get();
			res > maxT || res == maxT ? fanPin.writeSync(1) : fanPin.writeSync(0) 
		}, 100)
	} else {
		throw new Error("fanPin is not a Gpio pin")
	}
}
