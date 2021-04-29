
 var audioPlaying = false,
 audio

 (function() {
 audio = document.getElementById('audio');

 var audioControl = document.getElementById('audio-control');
 audioControl.addEventListener('click', audioControlHandler, false)
}())

function audioControlHandler(e) {
 var _self = e.target;

 if (!audioPlaying) {
   _self.classList.add('noVolume')
   audio.volume = 0
 } else {
   _self.classList.remove('noVolume')
   audio.volume = 1
 }
 audioPlaying = !audioPlaying
}


// Scroll Fadein

$(document).ready(function() {
    
  $(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];

      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });

// Turns background audio on and off  
$("#audio-control").click(function () {
  if ($("#background")[0].volume != 0) {
    $("#background")[0].volume = 0
  } else {
    $("#background")[0].volume = 1
  }
});


// the little function that changes the source and loads it.
function changeSource(sourceUrl) {
  $("#fart-sound").attr("src", sourceUrl)
  /****************/
  player[0].pause()
  player[0].load() // this is important since we're changing the source on the fly, we need to also load it
}

});