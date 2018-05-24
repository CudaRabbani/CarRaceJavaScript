var Car = function(name, color, weight, add, init) {
	var car = this;
	this.name = name;
	this.color = color;
	this.weight = weight;
	this.acceleration = acc;
	this.initialSpeed = init;
	this.position = 0;
	this.move = function(time) {
		position = (this.initialSpeed * time ) + 0.5 * (this.acceleration) + time * time;
	};
}
