$(document).ready(function(){
  $("form#quiz").submit(function(event){
    var favoriteFood= $("input#food").val();
    var favoriteMusic= $("input#music").val();
    var favoritePresident= $("input#president").val();
    var favoriteThings= [favoriteFood, favoriteMusic, favoritePresident]
    $("#result").show();
    $(".list").append(favoriteThings[0]);
    $(".list2").append(favoriteThings[1]);
    $(".list3").append(favoriteThings[2]);
    event.preventDefault();
  });
});
