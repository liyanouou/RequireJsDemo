define(['jquery'],function($){

	ScrollTo.DEFAULTS = {
		dest: 0,
		speed: 800
	}

	function ScrollTo(opts){
		this.opts = $.extend({},ScrollTo.DEFAULTS,opts);
		this.$el = $('html,body');
	}

	ScrollTo.prototype.animate = function(){
		var opts = this.opts;
		if($(window).scrollTop() != this.opts.dest){
			if(!this.$el.is(':animated')){
				this.$el.animate({
					scrollTop:opts.dest
				},opts.speed);
			}
		}	
	}

	ScrollTo.prototype.go = function(){
		this.$el.scrollTop(0);
	}

	return{
		ScrollTo : ScrollTo
	}

});

