$(".characters").click( function() {
  $(".characters").hide();  
  $(".character-text").hide();
  $(".car-text").show();
});

$(".mario-img").click( function() {
  $(".s-star, .mr").show();
});

$(".luigi-img").click(function() {
    $(".polter, .lg").show();
});

$(".cars").click(function() {
    $(".power, .power-text").show();
    $(".cars, .car-text").hide();
});

/* changing power-up classes 

$(".s-star").click(function() {
    $(".banana").addClass("bna-ss");
   	$(".mushroom").addClass("mshr-ss"); 
});

$(".mr").click(function() {
   	$(".banana").addClass("bna-mr"); 
    $(".mushroom").addClass("mshr-mr");
});

$(".polter").click(function() {
   	$(".banana").addClass("bna-plt"); 
    $(".mushroom").addClass("mshr-plt"); 
});

$(".lg").click(function() {
   	$(".banana").addClass("bna-lg"); 
    $(".mushroom").addClass("mshr-lg"); 
});

*/


$(".bna-ss").hover(function() {
	$(".loser").show();
    $(".power").hide();
});

