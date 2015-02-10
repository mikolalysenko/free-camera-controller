'use strict'

module.exports = createFreeCameraController

function FreeCameraController() { 
}

var proto = FreeCameraController.prototype

proto.getMatrix = function(t, out) {
}

proto.idle = function(t) {
}

proto.lookAt = function(t, center, eye, up) {
}

proto.rotate = function(t, yaw, pitch, roll) {
}

proto.zoom = function(t, dr) {
}

proto.pan = function(t, dx, dy, dz) {
}

proto.move = function(t, dx, dy, dz) {
}

proto.translate = function(t, dx, dy, dz) {
}

proto.setMatrix = function(t, mat) {
}

proto.setEye = function(t, x, y, z) {
}

proto.getEye = function(t, out) {
}

//Stub accessors
proto.setUp = proto.setCenter = proto.setDistance = function() {}
proto.getDistance = function() { return 0.0 }
proto.getUp = proto.setCenter = function(t, out) { out[0] = out[1] = out[2]; return out }

function createFreeCameraController() {
}