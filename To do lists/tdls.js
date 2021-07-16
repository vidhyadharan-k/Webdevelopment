$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("ul").on("click","li",function() {
	$(this).toggleClass('completed');
});
var newlist;
$("input").keypress(function(event) {
if(event.which===13){newlist=$(this).val();$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i> </span>"+newlist+"</li>");$(this).val()=" ";}
});
$(".fa-plus").click(function() {
	
	$("input").fadeToggle();

});
