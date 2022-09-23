import * as Position from "./position.js"
export function Node(id,name, x, y) {
	this.id = id;
	this.name = name;
	this.x = x;
	this.y = y;
	this.getNodeInfo = function() {
		return this.id + "," + this.name;
	}
	this.setLabelLocation=function(l){
		
	}
}
