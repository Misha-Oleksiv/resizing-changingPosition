
$(function(){
	let clickBall = $('.ball');
	let r,g,b;
	let height,width,top,left;
	
	clickBall.on('click', function(){
		r = Math.round(Math.random()*255);
		g = Math.round(Math.random()*255);
		b = Math.round(Math.random()*255);

		height = Math.round(Math.random()*300);
		width = Math.round(Math.random()*300);
		top = Math.round(Math.random()*500);
		left = Math.round(Math.random()*1400);

		clickBall.animate({
			backgroundColor: `rgb(${r}, ${g}, ${b})`,
			height: `${height}`,
			width: `${width}`,
			top: `${top}`,
			left: `${left}`,
		}, 3000, 'easeInBack');
	})
})
