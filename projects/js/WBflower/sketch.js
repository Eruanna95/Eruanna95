let a;
let L;

function setup() {
 /* if (windowHeight < windowWidth) {
		if (windowHeight < 1000) {
			L = windowHeight / 1000;
		} else { //здесь я делаю так, что увелчичиваться масштаб не может даже на любых бОльших мониторах (макимальное значение стороны холста остается 900)
			L = 1;
		}
	} else {
		if (windowWidth < 1000) {
			L = windowWidth / 1000;
		} else { //здесь я делаю так, что увелчичиваться масштаб не может даже на любых бОльших мониторах (макимальное значение стороны холста остается 900)
			L = 1;
		}
	}*/
	if (warning.style.clientWidth < 800) {
			L = warning.style.clientWidth / 800;
		} else { //здесь я делаю так, что увелчичиваться масштаб не может даже на любых бОльших мониторах (макимальное значение стороны холста остается 900)
			L = 1;
		}
	let myCanvas = createCanvas(800*L, 800*L);
	//и вот теперь создаем холст в этом масштабе:
	myCanvas.parent('flower');
  }

function draw() {
  translate(width/2,height/2);
  scale(L);
  background(255);
  noStroke();
	fill('#001616');
  for (let j=0; j<a; j++) {
    push();
    translate(0,-2*PI*5*a);
    for (let i=0; i<a; i++) {
      ellipse(0,-50,10,100);
      rotate(radians(360/a));
    }
    fill('#ff4848');
    rotate(radians(360/a/3));
    for (let i=0; i<a; i++) {
      ellipse(0,-50,10,100);
      rotate(radians(360/a));
    }
    fill(255,200,30);
    rotate(radians(360/a/3));
    for (let i=0; i<a; i++) {
      ellipse(0,-50,10,100);
      rotate(radians(360/a));
    }
    pop();
    rotate(radians(360/a));
  }
  push();
	fill(255,200,30);
  scale(((2*PI*5*a)*2-200)/200);
    for (let i=0; i<a; i++) {
      ellipse(0,-50,10,100);
      rotate(radians(360/a));
    }
    fill('#001616');
    rotate(radians(360/a/3));
    for (let i=0; i<a; i++) {
      ellipse(0,-50,10,100);
      rotate(radians(360/a));
    }
    fill('#ff4848');
    rotate(radians(360/a/3));
    for (let i=0; i<a; i++) {
      ellipse(0,-50,10,100);
      rotate(radians(360/a));
    }
  pop();
	if (warning.style.clientWidth < 800) {
		L = warning.style.clientWidth / 800;
	} else { //здесь я делаю так, что увелчичиваться масштаб не может даже на любых бОльших мониторах (макимальное значение стороны холста остается 900)
		L = 1;
	}
}

function resizeCanvas() {
    canvas.width = 800*L;
    canvas.height = 800*L;
    // Redraw everything after resizing the window
    draw(); 
  }

function changenumL() {
  if(!isNaN(Number(numL.value))) {
    a=numL.value;
    numL.value="";
    warning.innerHTML="";
  }
  else warning.innerHTML="Это не число!";
}
  
