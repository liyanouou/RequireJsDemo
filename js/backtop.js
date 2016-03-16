define(['jquery','scrollto'],function($,scrollto){

	function BackTop(el,opts){ 
		this.opts = $.extend({},BackTop.DEFAULTS,opts);
		this.$el = $(el);

		var scroll = new scrollto.ScrollTo({});
		if(this.opts.mode == 'move')
			this.$el.on('click',$.proxy(scroll.animate,scroll));
		else 
			this.$el.on('click',$.proxy(scroll.go,scroll));

		$(window).on('scroll',$.proxy(this.checkPosition,this));
	}

	BackTop.prototype.checkPosition = function(){
		var el = this.$el;
		if($(window).scrollTop() > this.opts.pos)
			el.fadeIn();
		else
			el.fadeOut();
	}

	BackTop.DEFAULTS = {
		mode : 'move',
		pos : $(window).height(),
		speed : 500,
		dest : 0
	};

	return{
		BackTop:BackTop
	}

});