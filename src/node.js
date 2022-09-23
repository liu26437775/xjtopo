import * as xjconst from "./xjconst.js";
import * as idutils from "./idutils.js";
export function Node(name, x, y) {
	this.name = name;
	if (x == undefined) {
		this.x = 10;
	} else {
		this.x = x;
	}
	if (y == undefined) {
		this.y = 10;
	} else {
		this.y = y;
	}
	this.height = 30;
	this.width = 30;
	this.nodeShape = x.NODE_SHAPE_RECT;
	this.id = idutils.getRandomString(32);
	this.fillStyle = "orchid";
	this.getNodeInfo = function() {
		return this.id + "," + this.name + "|" + this.nodeShape + "|[" + this.x + "," + this.y + "," + this.height +
			"," + this.width + "]";
	};
	this.imageUrl = null; //图片路径，当设置图片为形状时候起作用
	//设置Label位置
	this.setLabelLocation = function(l) {

	};
	//设置节点形状
	this.setNodeShape = function(nodeShape) {
		this.nodeShape = nodeShape;
	};
	//设置Node节点大小
	this.setNodeShapeSize = function(width, height) {
		this.width = width;
		this.height = height;
	};
	//绘制节点
	this.drawNode = function(ctx) {
		if (this.nodeShape == xjconst.NODE_SHAPE_RECT) {
			this.drawRectNode(ctx);
		} else if (this.nodeShape == xjconst.NODE_SHAPE_CIRCULAR) {
			this.drawCircular(ctx);
		} else if (this.nodeShape == xjconst.NODE_SHAPE_IMAGE) {
			if(this.imageUrl==undefined){
				console.log("未提供图片路径");
			}else{
				var image=new Image();
				image.src=this.imageUrl;
				image.onload=function(){
					ctx.drawImage(this, this.x, this.y, this.width, this.height);
				}
			}
		} else {
			console.log("暂时不支持的图形类别");
		}
	};
	this.drawRectNode = function(ctx) {
		console.log("绘制矩形");
		ctx.fillStyle = this.fillStyle;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	};
	this.drawCircular = function(ctx) {
		console.log("绘制圆形");
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI,
			true); //以圆心300,300，绘制一个半径为100的原型 true或者false表示正向画圆还是逆向画圆，在绘制扇形的时候有意义
		ctx.stroke(); //画边框，关闭
		ctx.fillStyle = this.fillStyle;
		ctx.fill();
	};
}
