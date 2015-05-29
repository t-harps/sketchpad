$(document).ready(function(){
	var $container = $('#container');
	var $square = $('<div class="square"></div>');

	for(i=0;i<16;i++){
		$container.append($('<div class="square"></div>'));
	};
	var x = 500/4+"px";
	var y = 1000/4+"px";
	$('.square').css("height",x);
	$('.square').css("width",y);

	function getRandomColor() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
	}

	$('#newGrid').click(function(){
		$container.empty();
		var width = prompt("How many pixels across?");
		var height = prompt("How many pixels down?");
		var x = (1000/width)+"px";
		var y = (500/height)+"px";
		for(i=0;i<(width*height);i++){
			$container.append($('<div class="square"></div>'));
		};
		$('.square').css("width",x);
		$('.square').css("height",y);	

		$('.square').hover(function(){
			$(this).css("background-color","black");
		},function(){
			//$(this).css("background-color","black");
		});

		$('#clear').click(function(){
			$('.square').css("background-color","#e6e6e6");
		});
	});

	$('.square').hover(function(){
		$(this).css("background-color","black");
	},function(){
		//$(this).css("background-color",getRandomColor());
	});

	$('#clear').click(function(){
		$('.square').css("background-color","#e6e6e6");
	});
	
});