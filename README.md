# rpifan
Auto fan controller for rpi

### NPM
```shell
$ npm i rpifan
```

### Require Module

```js
    var fan = require("rpifan")
```


### Set max & min

```js
    fan(new Gpio(11, "out"), {
        min:47,
        max:52
    })
```

### Auto mode

```js
    fan(new Gpio(11, "out"))
```


<img src="https://image.ibb.co/ijT4GV/fan.png" height="350">


`You can see things I learn in 1 year if you look commits`