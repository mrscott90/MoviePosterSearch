$(document).ready( function() {
  $("button").click(function(){
    var keyword = $("input").val();
    var url = "https://www.omdbapi.com/?t=" + keyword
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json"
    })
    .done(function(response){
      console.log(response);
      poster(response);
    }).fail ( function (){
      console.log("fail");
    });
    var poster = function(response) {
      $('.moviePoster').html("<img class = 'image' src = '"+response.Poster+"'>")
    }
  });
});
// $("#keyword").keyup(function(event){
//   if(event.keyCode == 13){
//       $("#press").click();
//   }
// });