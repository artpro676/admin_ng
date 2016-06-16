$(document).ready(function(){
$('[data-toggle="offcanvas"]').click(function(){
	$('#side-menu').toggleClass('hidden-xs')
})
	$(".link").click(function(){
		$(".active").removeClass("active");//Удаляем класс у прошлого выделенного
		$(this).addClass("active");//добовляем класс
	});
	$("#side-menu a").click(function(){
		$(".active-a").removeClass("active-a");//Удаляем класс у прошлого выделенного
		$(this).addClass("active-a");//добовляем класс
	});

}); //the end


