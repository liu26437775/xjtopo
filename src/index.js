import * as math from "./math";
import * as string from "./string";
import {Node}  from "./node";
import * as idutils from "./idutils.js"
import * as x from "./xjconst.js"
function test(){
	var canvas = document.getElementById('mycanvas');
	var ctx = canvas.getContext('2d');
	var node=new Node("111222",200,200);
	node.setNodeShape(x.NODE_SHAPE_RECT);
	node.drawNode(ctx);
}

export   {test,x}
 
 
