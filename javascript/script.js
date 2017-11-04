$(document).ready(function() {
  $("button[data-action='reset']").on("click", function(){
    localStorage.clear();
    location.reload();
  });

  if (localStorage.getItem("imageNumber") == null) {
    localStorage.setItem("imageNumber", "1");
    var number = localStorage.getItem("imageNumber");
    $("img.sliderImage[data-number!=" + number + "]").addClass("hidden");
    $("img.sliderImage[data-number=" + number + "]").removeClass("hidden");
  }
  else {
    var number = localStorage.getItem("imageNumber");
    $("img.sliderImage[data-number!="+ number + "]").addClass("hidden");
    $("img.sliderImage[data-number="+ number + "]").removeClass("hidden");
  }

  if (localStorage.getItem("dotState") == null) {
    localStorage.setItem("dotState", "1");
    var number = localStorage.getItem("dotState");
    $("div .sliderDot[data-dot!="+ number +"]").addClass("white").removeClass("black");
    $("div .sliderDot[data-dot="+ number +"]").addClass("black").removeClass("white");
  }
  else {
    var number = localStorage.getItem("dotState");
    $("div .sliderDot[data-dot!="+ number +"]").addClass("white").removeClass("black");
    $("div .sliderDot[data-dot="+ number +"]").addClass("black").removeClass("white");
  }

  $("button[data-button='left'], button[data-button='right']").on("click", function(){
    var direction = $(this).data("button");
    if (direction == "left") {
      var length = $("img.sliderImage[data-number]").length; // length of array = number of images in the index.html so when i do not
      var imageNumber = parseInt(localStorage.getItem("imageNumber")) - 1; //  match something ging leftward, i go to the opposite of the images
      localStorage.setItem("imageNumber", imageNumber.toString());
      var dotNumber = parseInt(localStorage.getItem("dotState")) - 1;
      localStorage.setItem("dotState", dotNumber.toString());
      if ($("img.sliderImage[data-number=" + imageNumber + "]").length == 0) {
        $("img.sliderImage[data-number=" + length + "]").removeClass("hidden");
        $("img.sliderImage[data-number!=" + length + "]").addClass("hidden");
        $("div .sliderDot[data-dot!=" + length + "]").removeClass("black").addClass("white");
        $("div .sliderDot[data-dot=" + length + "]").removeClass("white").addClass("black");
        localStorage.setItem("imageNumber", length);
        localStorage.setItem("dotState", length);
      }
      else {
        $("img.sliderImage[data-number!=" + imageNumber + "]").addClass("hidden");
        $("img.sliderImage[data-number=" + imageNumber + "]").removeClass("hidden");
        $("div .sliderDot[data-dot!=" + dotNumber + "]").removeClass("black").addClass("white");
        $("div .sliderDot[data-dot=" + dotNumber + "]").removeClass("white").addClass("black");
      }
    }
    else {
      var imageNumber = parseInt(localStorage.getItem("imageNumber")) + 1;
      localStorage.setItem("imageNumber", imageNumber.toString());
      var dotNumber = parseInt(localStorage.getItem("dotState")) + 1;
      localStorage.setItem("dotState", dotNumber.toString());
      if ($("img.sliderImage[data-number=" + imageNumber + "]").length == 0) {
        $("img.sliderImage[data-number='1']").removeClass("hidden");
        $("img.sliderImage[data-number!='1']").addClass("hidden");
        $("div .sliderDot[data-dot!='1']").removeClass("black").addClass("white");
        $("div .sliderDot[data-dot='1']").removeClass("white").addClass("black");
        localStorage.setItem("imageNumber", "1");
        localStorage.setItem("dotState", "1");
      }
      else {
        $("img.sliderImage[data-number!=" + imageNumber + "]").addClass("hidden");
        $("img.sliderImage[data-number=" + imageNumber + "]").removeClass("hidden");
        $("div .sliderDot[data-dot!=" + dotNumber + "]").removeClass("black").addClass("white");
        $("div .sliderDot[data-dot=" + dotNumber + "]").removeClass("white").addClass("black");
      };
    }
  });

  $("div .sliderDot[data-dot]").on("click", function(){
    var number = $(this).data("dot");
    $("img.sliderImage[data-number="+ number +" ]").removeClass("hidden");
    $("img.sliderImage[data-number!="+ number +"]").addClass("hidden");
    localStorage.setItem("imageNumber", number);
    $("div .sliderDot[data-dot!="+ number +"]").removeClass("black").addClass("white");
    $("div .sliderDot[data-dot="+ number +"]").removeClass("white").addClass("black");
    localStorage.setItem("dotState", number);
  });
});

// $(document).ready(function() {
//   var totalSize = $('.img-slider').width() * $('.img-slider').length;  get the total size of the div that contain the images
//   var oneSize = $('.img-slider').width(); size of one image
//   var currentSize = 0;
//   $('button[data-action="left"], button[data-action="right"]').on('click', function() {
//     var direction = $(this).data('action');
//     if(direction == 'right') {
//       if((currentSize + oneSize) < totalSize) {
//         currentSize += oneSize ;
//         $('.slider').css('transform', 'translateX(-' + currentSize + 'px)');
//       } else {
//         $('.slider').css('transform', 'translateX(0px)');
//         currentSize = oneSize;
//       }
//       console.log('A Droite');
//     } else {
//       if(currentSize - oneSize < 0) {
//         currentSize = totalSize - oneSize;
//         $('.slider').css('transform', 'translateX(-' + currentSize + 'px)');
//       } else {
//         currentSize -= oneSize;
//         $('.slider').css('transform', 'translateX(-' + currentSize + 'px)');
//       }
//     };
//   });
//
// });
//
