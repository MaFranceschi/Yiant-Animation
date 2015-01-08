(function(){

    var canvas = document.getElementById('yiant');
    var context = canvas.getContext('2d');
    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;


function Point(x,y) {
    this.x = x;
    this.y = y;
}

var points1 = [new Point(238,200), new Point(224,200), new Point(224,146), new Point(175,73), new Point(184,62), 
new Point(238,142), new Point(238,200)];

var points2 = [new Point(243,197), new Point(257,184), new Point(257,141), new Point(299,76), new Point(281,76),
 new Point(250,127), new Point(206,60), new Point(189,60), new Point(243,141), new Point(243,197)];

var points3 = [new Point(250,118), new Point(277,73), new Point(270,62), new Point(242,107), new Point(250,118)];

var points4 = [new Point(284,71), new Point(299,71), new Point(292,60), new Point(277,60), new Point(284,71)];

var step = 0;
var cont = 0;
var lon = 0;

function init(){

	setTimeout(function (){
		requestAnimationFrame(init);
		switch(step)
		{
			case 0: drawer(points1, "#0097D5");
			break;

			case 1: drawer(points2, "#432A73");
			break;

			case 2: drawer(points3, "#0097D5");
			break;

			case 3: drawer(points4, "#213F99");
			break;
		}
	}, 900 );
}

function drawer(points, color, lon){

	if(cont === 0)
	{
		var punto = points[cont];
		context.beginPath();
		context.moveTo(punto.x, punto.y);
		lon = points.length;
	}

	var point = points[cont++];
	context.lineTo(point.x,point.y);
	context.strokeStyle = color;
	context.stroke();

	if(cont === points.length)
	{
		context.fillStyle = color;
		context.fill();
		cont = 0;
		init(step++);
	}

	lon--;
}

	requestAnimationFrame(init);


})();