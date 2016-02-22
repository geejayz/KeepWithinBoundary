//Keep marker within canvas boundary
	
  if (marker.x < 0) {
		marker.x = 0;
	}
	
	if (marker.y < 0) {
		marker.y = 0;
	}
	
	if (marker.x > canvas.width - marker.width) {
		marker.x = canvas.width - marker.width;
	}
	
	if (marker.y > canvas.height - marker.height) {
		marker.y = canvas.height - marker.height;
	}
	
	marker.x += marker.vx;
	marker.y += marker.vy;
	
	//Now consider....
	//Math.max(10,20,30,50) will always return the largest value ==> 50
	//Math.min(10,20,30,50) will always return the lowest value ==> 10
	//If our marker moved outside the left border for example it's x value would become less than zero
	//so if we instead said marker.x = Math.max(0, marker.x); it could never become less than zero
	//Similarly we could say marker.x = Math.min(marker.x, canvas.width-marker.width);
	//This would prevent marker.x ever becoming larger than the canvas width less its own width
	//We can thus replace the above with the following;
	
	marker.x += marker.vx;
	marker.x = Math.max(0, marker.x);
	marker.x = Math.min(marker.x, canvas.width - marker.width);
	
	marker.y += marker.vy;
	marker.y = Math.max(0, marker.y);
	marker.y = Math.min(marker.y, canvas.height - marker.height);
	
	//Taking it one step further, we could put one argument inside the other
	marker.x += marker.vx;
	marker.x = Math.max(0, Math.min(marker.x, canvas.width - marker.width));
		
	marker.y += marker.vy;
	marker.y = Math.min(Math.max(0, marker.y), canvas.height - marker.height);				
	
	
	//Finally the adder can be put inside the argument also so we only have two lines of code
  marker.x = Math.max(0, Math.min(marker.x += marker.vx, canvas.width - marker.width));
	marker.y = Math.max(0, Math.min(marker.y += marker.vy, canvas.height - marker.height));
	
	
	
