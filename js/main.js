require.config({
	baseUrl:'js',
	paths: {
		'jquery': 'jquery-2.1.4'
	}
});

require(['jquery', 'backtop'], function($, backtop) {
	var opts = {
		mode : 'move',
		pos : $(window).height(),
		speed : 200,
		dest : 0
	};
	new backtop.BackTop($("#backtop"),opts);
});

