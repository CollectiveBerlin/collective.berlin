function updateBoxSize(){
  $(".box").height($(".box").width());
}

function updateTitleSize(){
  $("#title").width($(".container").width())
  console.log("do shit");

}

function CollectiveBerlin( jQuery ) {
  updateBoxSize();
  updateTitleSize()
  $(window).resize(updateBoxSize);
  $(window).resize(updateTitleSize);

}

$( document ).ready( CollectiveBerlin );
