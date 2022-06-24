$(".characters").click( function() {
  $(".characters").hide();  
  $(".character-text").hide();
  $(".car-text, button").show();
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