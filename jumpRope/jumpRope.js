var EventEmitter = require('events');


module.exports = class JumpRope extends EventEmitter {

    constructor(){
        super();
        this.sumJumping = 0;
        this.operation=[];
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

    view (){
        console.log ('player: Shiran Twik');
        console.log (`the game: jump rope`);
    }

    sumJumpingGrowUp (){
        console.log (`your jump has succeeded, sum of jumps : ${this.sumJumping}`);
        this.operation.push('jump success');
    }

    sumJumpingDown (){
        console.log (`your jump has felled, sum of jumps : ${this.sumJumping}`);
        this.operation.push('jump felled');
    }


    checkOverJump(){
        if (this.sumJumping < 0 ){
            console.log (`Result in minus, please try again, sum of jumps: ${this.sumJumping}`);
            this.operation.push('jumping under 0');
        }
    }

    checkGoal(){
        var goal=25;
        if (this.sumJumping > goal){
            console.log(`checkGoal: ${this.sumJumping}`);
            this.operation.push('jumping goal');
        }
    }

}