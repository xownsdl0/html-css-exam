$('.openBtn').click(function(){

	$('.overlay').css('height','100%');
		$('body').addClass('apply-to-body');
});
$('.closeBtn').click(function(){

	$('.overlay').css('height','0%');
		$('body').removeClass('apply-to-body');
});
