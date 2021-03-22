alert("There Will be Music Used, so Make Sure Your Volume Isn't Too High Cutie <3");
alert("But if You Can't Hear Any Audio, Then Please use A Different Browser");
//alert("The Use of a Computer and Headphones Are Recommended for the Best Expirence!");

setTimeout(function(){
	document.getElementById("Intro_Music").play();	
}, 1000); //<-- time in miliseconds on when the song starts
//fade in and out introduction
setTimeout(function() {
	//After 2000 milliseconds, fade out the overlay. The animation duration is 500 ms.
$(".introduction").fadeOut(1000); // Speed
}, 2500); //13500 last time, 
//^ Time in miliseconds before it fades out [?]. 8500 

//setTimeout(function() {
	//After 2000 milliseconds, fade out the overlay. The animation duration is 500 ms.
//$(".introduction_2").fadeOut(1000); // Speed
//}, 13000); //13500 last time, 
//^ Time in miliseconds 8500 

//music
setTimeout(function(){
	document.getElementById("2nd Song").play();
}, 222500) //time
setTimeout(function(){
	document.getElementById("3rd Song").play();
}, 451500) // time in miliseconds
setTimeout(function(){
	document.getElementById("4th Song").play();
}, 679500) // time in miliseconds
setTimeout(function(){
	document.getElementById("5th Song").play();
}, 984500) // time in miliseconds
setTimeout(function(){
	document.getElementById("2nd Song").play();
}, 1207000) //time
setTimeout(function(){
	document.getElementById("3rd Song").play();
}, 1658500) // time in miliseconds
setTimeout(function(){
	document.getElementById("4th Song").play();
}, 2338000) // time in miliseconds
setTimeout(function(){
	document.getElementById("5th Song").play();
}, 3322500) // time in miliseconds



//Hearts falling in background
var heart = new Image();
		function Heart () {
		var size = random(10, 20)
			this.x = random(size, ww - size)
			this.y = -size
			this.speed = rand(1)
			this.size = size
			this.deg = 0
			this.offX = 0
			this.speedOffX = random(-.1, .1)
			this.speedRotate = random(-1, 1)
			this.draw = function () {
				begin()
					save()
						translate(
							this.x,
							this.y
						)
						transform(1, 0, 0, 1, this.offX, 0)
						rotate(this.deg)
						drawImage(
							heart,
							0, 0,
							Math.max(
								heart.width,
								heart.height
							),
							Math.max(
								heart.width,
								heart.height
							),
							-this.size,
							-this.size,
							this.size,
							this.size
						)
					restore()
				close()
			}
			this.update = function () {
				this.draw()
				this.y += this.speed
				this.deg += this.speedRotate
				this.offX += this.speedOffX
				/*if (!inf && this.y + this.size > ch)
					return true;*/ 
				if (
					(this.y < -this.size) || 
					(this.y - this.size > ch) 
						||
					(this.x + this.size < 0)
						||
					(this.x - this.size > cw)
				)
					return true;
			}
		}
		function setup () {
			my('.container-sprin')
				.height(ch = wh)
			cw = ww
		}
		var Hearts = [], i = 0;
		while (50 > i++)
			Hearts.push(new Heart());
		function honkai () {
			my(heart).attr('src', "pictures/heart.png").load(init)
			function init () {
				clear()
					//bg('#333')
					Hearts = Hearts.map(function (e) {
						return e.update() ? new Heart : e;
					})
				loop()
			}
		}

function getSoundAndFadeAudio (Intro_Music) {

	var sound = document.getElementById(Intro_Music);

	// Set the point in playback that fadeout begins. This is for a 2 second fade out.
	var fadePoint = sound.duration - 2; 

	var fadeAudio = setInterval(function () {

		// Only fade if past the fade out point or not at zero already
		if ((sound.currentTime >= fadePoint) && (sound.volume != 0.0)) {
			sound.volume -= 0.1;
		}
		// When volume at zero stop all the intervalling
		if (sound.volume === 0.0) {
			clearInterval(fadeAudio);
		}
	}, 200);

}


//Canvas CSS Background Fix
//(function() {
//    var canvas = document.getElementById('canvas'),
//            context = canvas.getContext('2d');

     //resize the canvas to fill browser window dynamically
//    window.addEventListener('resize', resizeCanvas, false);

//    function resizeCanvas() {
 //           canvas.width = window.innerWidth;
   //         canvas.height = window.innerHeight;

            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
    //}
    //resizeCanvas();
//})();