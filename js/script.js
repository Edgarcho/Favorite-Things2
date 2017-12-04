$(document).ready(function(){
  $("form#quiz").submit(function(event){
    var favoriteFood= $("input#food").val();
    var favoriteMusic= $("input#music").val();
    var favoritePresident= $("input#president").val();
    var favoriteThings= [favoriteFood, favoriteMusic, favoritePresident]
    $("#result").show();
    $(".list").prepend(<li>favoriteThings[0]</li>);
    $(".list").prepend(<li>favoriteThings[1]</li>);
    $(".list").prepend(<li>favoriteThings[2]</li>);
    event.preventDefault();
  });
});
