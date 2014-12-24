(function(){
	var canvas = document.getElementsByTagName('canvas');
	var context = canvas[0].getContext("2d");

//	context.moveTo(0,0);
//	context.lineTo(1000,500);
// Canvas 200 height, 300 width
//	context.stroke();
//Y izquierda
	context.beginPath();
	context.moveTo(150,150);
	context.lineTo(135,150);
	context.lineTo(135,120);
	context.lineTo(115,100);
	context.lineTo(130,90);
	context.lineTo(150,115);
	context.lineTo(150,150);
	context.stroke();

	context.beginPath();
	context.moveTo(155,150);
	context.lineTo(170,150);
	context.lineTo(170,120);
	context.lineTo(195,100);
	context.lineTo(180,100);
	context.lineTo(165,110);
	context.lineTo(140,75);
	context.lineTo(140,90);
	context.lineTo(155,115);
	context.lineTo(155,150);
//	context.lineTo(90,15);
	context.stroke();

	context.beginPath();
	context.moveTo(195,95);
	context.lineTo(180,95);
	context.lineTo(200,115);
	context.lineTo(215,115);
	context.lineTo(195,95);
	context.stroke();

	context.beginPath();
	context.moveTo(165,105);
	context.lineTo(170,95);
	context.lineTo(195,85);
	context.lineTo(185,95);
	context.lineTo(165,105);
	/*context.lineTo(215,115);
	context.lineTo(195,95);*/
	context.stroke();



})()