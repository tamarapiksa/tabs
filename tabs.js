$(document).ready(function() {
	$('div.tabs a').click(function() {
		var tab_num = $(this).attr('data-tab');

		$('div.tabs a').removeClass('active');
		$('.tab-info').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_num).addClass('active');
	});
});