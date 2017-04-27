
var EventEmitter = require('events');
var jumpRope = require('./jumpRope');

var jumpRope1 = new jumpRope();

exports.array=jumpRope1.operation;

jumpRope1.on("sumJumpingGrowUp" ,jumpRope1.sumJumpingGrowUp);
jumpRope1.on("sumJumpingDown" ,jumpRope1.sumJumpingDown);
jumpRope1.on ("sumJumpingChange",jumpRope1.checkOverJump);
jumpRope1.on ("sumJumpingChange",jumpRope1.view);

jumpRope1.on("sumJumpingChange",jumpRope1.checkGoal);

jumpRope1.jumpSuccess(15);
jumpRope1.jumpSuccess(7);
jumpRope1.jumpFell(2);
jumpRope1.jumpSuccess(4);
jumpRope1.jumpFell(6);
jumpRope1.jumpSuccess(8);
