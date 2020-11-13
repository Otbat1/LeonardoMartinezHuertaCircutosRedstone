$(document).ready(function(){
	$('#menu a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('#menu a').click(function(){
		$('#menu a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();
		
		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});
});