import * as math from "./math";
import * as string from "./string";
import {Node}  from "./node";
import * as idutils from "./idutils.js"
import * as Position from "./position.js"
function test(){
	var canvas = document.getElementById('mycanvas');
	var ctx = canvas.getContext('2d');
	
	ctx.fillStyle = 'green';
	ctx.fillRect(10, 10, 100, 100);


	console.log(math.add(1,2));
	console.log(string.join(1,2));
	var node=new Node("11111");
	console.log(node.getNodeInfo());
	console.log(idutils.getRandomString(32));
}

export   {test,Position}
 
 
