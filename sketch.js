var video;
var slider;

function setup() {
  // put setup code here
  canvas = createCanvas(640, 480, WEBGL);
  canvas.id('p5canvas');
  //background (51);


  video = createCapture(VIDEO);
  video.size(640, 480);
  video.id('p5video');
  //video.hide();
 //<img src="images/colorbars.png" id="colorbars"/>
	var seriously = new Seriously();

	var src = seriously.source('#p5video');
	var target = seriously.target('#p5canvas');

	// Effect Blure Still not show
	 //var blur = seriously.effect('blur');
	// blur.amount = '#blur-slider';
	// blur.source = src;
	 //target.source = blur;

	// Chromakey effect
	var chroma = seriously.effect('chroma');
	
	chroma.source = src;
	target.source = chroma;
	var r = 98 / 255;
	var g = 175 / 255;
	var b = 116 / 255;
	chroma.screen = [r,g,b,1];


	seriously.go();
}
/*
function draw() {
  // put drawing code here
  rect(50,50,20,20);
}
*/