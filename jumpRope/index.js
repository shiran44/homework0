
var EventEmitter = require('events');
var jumpRope = require('./jumpRope');

var jumpRope1 = new jumpRope();
var operation= [];
exports.array=operation;

jumpRope1.on("sumJumpingGrowUp" ,sumJumpingGrowUp);
jumpRope1.on("sumJumpingDown" ,sumJumpingDown);
jumpRope1.on ("sumJumpingChange",checkOverdraw);
jumpRope1.on ("sumJumpingChange",view);

function view (){
    console.log ('player: Shiran Twik');
    console.log (`the game: jump rope`);
}

function sumJumpingGrowUp (){
    console.log (`your jump has succeeded, sum of jumps : ${this.sumJumping}`);
    operation.push('jump success');
}

function sumJumpingDown (){
    console.log (`your jump has felled, sum of jumps : ${this.sumJumping}`);
    operation.push('jump felled');
}


function checkOverdraw(){
    if (this.sumJumping < 0 ){
       console.log (`Result in minus, please try again, sum of jumps: ${this.sumJumping}`);
       operation.push('jumping under 0');
    }
}

function checkGoal(acc,goal){
    if (acc.sumJumping > goal){
        console.log(`checkGoal: ${acc.sumJumping}`);
        operation.push('jumping goal');
    }
}

jumpRope1.on("sumJumpingChange", function(){
    checkGoal(this ,20);
});

jumpRope1.jumpSuccess(15);
jumpRope1.jumpSuccess(7);
jumpRope1.jumpFell(2);
jumpRope1.jumpSuccess(4);

