$(document).ready(function(){
$('[data-toggle="offcanvas"]').click(function(){
	$('#side-menu').toggleClass('hidden-xs')
})
	$(".link").click(function(){
		$(".active").removeClass("active");//������� ����� � �������� �����������
		$(this).addClass("active");//��������� �����
	});
	$("#side-menu a").click(function(){
		$(".active-a").removeClass("active-a");//������� ����� � �������� �����������
		$(this).addClass("active-a");//��������� �����
	});

}); //the end


