var letra1;
var letra2;
var letra3;
var letra4;

function preload () {
  letra1 = loadStrings("grupoletras1.txt");
  letra2 = loadStrings("grupoletras2.txt");
  letra3 = loadStrings("grupoletras3.txt");
  letra4 = loadStrings("grupoletras4.txt");

}

function setup() {
	createCanvas(800,800);
  background(255,60,100);
  console.log(letra1);
  console.log(letra2);
  console.log(letra3);
  console.log(letra4);
}

var degrau1 = createButton("Primeiro Degrau");
button.mouseClicked(pisadaDegrau1)


function mouseClicked() {
	var linha1 = random(letra1)
	var linha2 = random(letra2)
	var linha3 = random(letra3)
	var linha4 = random(letra4)

textSize(30);
textStyle(BOLD);
fill(255)
background(255,60,100);
text(linha1, 50, 120);
text(linha2, 50, 160);
text(linha3, 50, 200);
text(linha4, 50, 240);

saveCanvas('png', 'png');

}
