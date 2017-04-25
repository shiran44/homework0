var EventEmitter = require('events');

module.exports = class JumpRope extends EventEmitter {

    constructor(){
        super();
        this.sumJumping = 0;
    }

    jumpSuccess(num){
        this.sumJumping +=num;
        this.emit('sumJumpingChange');
        this.emit('sumJumpingGrowUp');
    }

    jumpFell(num){
        this.sumJumping -=num;
        this.emit('sumJumpingChange');
        this.emit('sumJumpingDown');

    }
}