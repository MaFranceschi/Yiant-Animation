(function(){

    var canvas = document.getElementById('yiant');
    var context = canvas.getContext('2d');
    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;


function Point(x,y) {
    this.x = x;
    this.y = y;
}

var points1 = [new Point(239,200), new Point(225,200), new Point(225,146), new Point(176,73), new Point(185,62), 
new Point(239,142), new Point(239,200)];

var points2 = [new Point(244,197), new Point(258,184), new Point(258,141), new Point(300,76), new Point(282,76),
 new Point(251,127), new Point(207,60), new Point(190,60), new Point(244,141), new Point(244,197)];

var points3 = [new Point(251,118), new Point(278,73), new Point(271,62), new Point(243,107), new Point(251,118)];

var points4 = [new Point(285,71), new Point(300,71), new Point(293,60), new Point(278,60), new Point(285,71)];

var step = 0;
var i = 0;

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

				default: drawer();
				break;
			}
	}, 900 );



}

var cont = 0;
var lon = 0;
function drawer(points, color, lon){

	if(typeof points !== 'undefined' && points.length > 0)	
	{
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
	else
	{
		if(i < 2)
		{
			context.clearRect(0,0,canvas.width, canvas.height);			
		}
		i++;
		step = 0;
	}
}

	requestAnimationFrame(init);


})();