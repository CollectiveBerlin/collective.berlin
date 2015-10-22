function updateBoxSize(){
  $(".box").height($(".box").width());
  console.log($(".box").width() + " = "+ $(".box").height())
}

function CollectiveBerlin( jQuery ) {
  updateBoxSize();
  $(window).resize(updateBoxSize);
}

$( document ).ready( CollectiveBerlin );
