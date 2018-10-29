const degree = module.exports

degree.get = (res) => {
var exec = require('child_process').exec;
var child = exec("/opt/vc/bin/vcgencmd measure_temp")
child.stdout.on('data', (data) => {
  var degree = data.toString().toString().split("=")[1].split(".")[0]
  res(degree)
});
}
