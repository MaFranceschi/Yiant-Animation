(function(){

    var canvas = document.getElementById('yiant');
    var context = canvas.getContext('2d');
    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;


function Point(x,y) {
    this.x = x;
    this.y = y;
}

var points = [new Point(239,200), new Point(225,200), new Point(225,146), new Point(176,73), new Point(185,62), 
new Point(239,142), new Point(239,200)];

var points2 = [new Point(244,197), new Point(258,184), new Point(258,141), new Point(300,76), new Point(282,76),
 new Point(251,127), new Point(207,60), new Point(190,60), new Point(244,141), new Point(244,197)];

var points3 = [new Point(251,118), new Point(278,73), new Point(271,62), new Point(243,107), new Point(251,118)];

var points4 = [new Point(285,71), new Point(300,71), new Point(293,60), new Point(278,60), new Point(285,71)];

var count = 0;
var cont = 0;
var cunt = 0;
var cant = 0;
var lon = points.length;
var len = points2.length;
var lin = points3.length;
var lun = points4.length;

var violeta = "#432A73";
var azul = "#213F99";
var turqueza = "#0097D5";
var gris = "#393D3D";

function drawY()
{
	setTimeout(function (){

	requestAnimationFrame(drawY);

	if(lon <= 0)
	{
		console.log("Entro");
		if(len <=0)
		{
			if(lin <= 0)
			{
				setTimeout(function(){
					console.log("4ta");
					if(cant === 0)
				{
					var punto = points4[cant];
					context.beginPath();
					context.moveTo(punto.x, punto.y);
				}
					var point4 = points4[cant++];
					console.log('('+point4.x + ', ' + point4.y+')');
					context.lineTo(point4.x,point4.y);
					context.strokeStyle = azul;
					context.stroke();
						context.fillStyle = azul;
						context.fill();
					
					lun--;
					console.log(lun);
				},700);
	/*			if(cant === points4.length)
				{
					context.clearRect(0,0,300,200);
					requestAnimationFrame(drawY);
				}*/
			}
			else
			{
				setTimeout(function(){
					console.log("3era");
					if(cunt === 0)
				{
					var punto = points3[cunt];
					context.beginPath();
					context.moveTo(punto.x, punto.y);
				}
					var point3 = points3[cunt++];
					console.log('('+point3.x + ', ' + point3.y+')');
					context.lineTo(point3.x,point3.y);
					context.strokeStyle = turqueza;
					context.stroke();

						context.fillStyle = turqueza;
						context.fill();
					
					lin--;
					console.log(lin);
				},700);
			}
		}
		else
		{
			setTimeout(function(){
				console.log("2da");
				if(cont === 0)
				{
					var punto = points2[cont];
					context.beginPath();
					context.moveTo(punto.x, punto.y);
				}
				var point2 = points2[cont++];
				console.log('('+point2.x + ', ' + point2.y+')');
				context.lineTo(point2.x,point2.y);
				context.strokeStyle = violeta;
				context.stroke();
				if(cont === points2.length)
				{
				context.fillStyle = violeta;
					context.fill();
				}
				len--;
				console.log(len);
			},700);
		}
	}
	else
	{
		if(count === 0)
			{
				var punto = points[count];
				context.beginPath();
				context.moveTo(punto.x, punto.y);
			}
		var point = points[count++];
		console.log('('+point.x + ', ' + point.y+')');
		context.lineTo(point.x,point.y);
		context.strokeStyle = turqueza;
		context.stroke();
		if(count === points.length)
		{
			context.fillStyle = turqueza;
			context.fill();
		}
		lon--;
		console.log(lon);
	}
	},700);

};

requestAnimationFrame(drawY);
//	context.moveTo(0,0);
//	context.lineTo(1000,500);
// Canvas 200 height, 300 width
//	context.stroke();
//Y izquierda
/*	context.beginPath();
	context.moveTo(150,150);
	context.lineTo(135,150);
	context.lineTo(135,120);
	context.lineTo(115,100);
	context.lineTo(130,90);
	context.lineTo(150,115);
	context.lineTo(150,150);
	context.fillStyle = "black";
	context.fill();
	context.stroke();

	context.beginPath();
	context.moveTo(155,150);
	context.lineTo(170,150);
	context.lineTo(170,120);
	context.lineTo(195,100);
	context.lineTo(180,100);
	context.lineTo(165,110);
	context.lineTo(150,90);
	context.lineTo(135,90);
	context.lineTo(155,115);
	context.lineTo(155,150);
	context.fillStyle = "purple";
	context.fill();
	context.stroke();

	context.beginPath();
	context.moveTo(195,95);
	context.lineTo(180,95);
	context.lineTo(170,85);
	context.lineTo(185,85);
	context.lineTo(195,95);
	context.fillStyle = "red";
	context.fill();
	context.stroke();

	context.beginPath();
	context.moveTo(165,105);
	context.lineTo(160,100);
	context.lineTo(175,95);
	context.lineTo(180,100);
	context.lineTo(165,105);
	context.fillStyle = "blue";
	context.fill();
	context.stroke();
*/


})()