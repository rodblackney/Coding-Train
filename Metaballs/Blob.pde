class Blob {
	PVector pos;
	float r;
	PVector vel;

Blob(float x, float y) {
	pos = new PVector (x,y);

	r = 40;
	}


void show() {
	noFill();
	stroke(0);
	strokeWeight(4);
	ellipse(pos.x, pos.y, r*2, r*2);
	}
}
