var stream = require('stream')
var inherits = require('inherits')
var GameController = require('./gamecontroller/gamecontroller.js').GameController

module.exports = function(opts) {
  return new TouchControls(opts)
}

function TouchControls(opts) {
  var self = this
  this.readable = true
  this.controller = GameController
  this.controller.init( { 
    left: { 
			dpad: {
				up: {
					touchStart: function() { self.emit('command', 'moveForward', true) },
					touchEnd: function() { self.emit('command', 'moveForward', false) }
				},
				right: {
					touchStart: function() { self.emit('command', 'moveRight', true) },
					touchEnd: function() { self.emit('command', 'moveRight', false) }
				},
				down: {
					touchStart: function() { self.emit('command', 'moveBackward', true) },
					touchEnd: function() { self.emit('command', 'moveBackward', false) }
				},
				left: {
					touchStart: function() { self.emit('command', 'moveLeft', true) },
					touchEnd: function() { self.emit('command', 'moveLeft', false) }
				}
			}
		},
    right: { 
      type: 'joystick', 
      position: { right: '15%', bottom: '15%' },
      joystick: {
        touchMove: function( ev ) {
          ev.dy = ev.dy * -1 // invert controls
          self.emit('data', ev)
        }
      }
    }
  })
}

inherits(TouchControls, stream.Stream)
