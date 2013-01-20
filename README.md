# fps-touch-controls

designed to be used with [player-physics](http://github.com/maxogden/player-physics)

uses [game-controller](https://github.com/austinhallock/html5-virtual-game-controller) for the UI

```javascript
var createTouchControls = require('fps-touch-controls')
var touchControls = createTouchControls()
touchControls.pipe(playerPhysics)
touchControls.on('command', function(command, setting) {
  playerPhysics.emit('command', command, setting)
})
```

## LICENSE

BSD