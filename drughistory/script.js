class AnimatedFilter {
    constructor(filterId, elementId) {
      this.index = 0;
      this.filterId = filterId;
      this.element = document.getElementById(elementId);
      this.isHover = false;
      this.element.addEventListener('mouseenter', () => { this.isHover = true; });
      this.element.addEventListener('mouseleave', () => { this.isHover = false; });
  
      this.update();
    }
  
    get currentFilterId() {
      return `${ this.filterId }-${ this.index }`;
    }
  
    update() {
      const frame = window.requestAnimationFrame(_ => this.update());
      if(frame % 3 != 0) return;
  
      const sec = performance.now() / 1000;
      
      const eFilter = document.getElementById(this.currentFilterId);
      
      this.index = (this.index + 1) % 2;
      eFilter.setAttribute('id', this.currentFilterId);
  
      const eNoise = eFilter.querySelector('feTurbulence');
      const eDisplace = eFilter.querySelector(`feDisplacementMap`);
  
      const s1 = (sec % 3) * 0.001 + (Math.tan(Math.tan(sec)) * .5 + .5) * 0.001;
      eNoise.setAttribute('baseFrequency', `0 ${ s1 * ((this.isHover) ? 1 : 0) }`);
      const rnd = parseInt(Math.random() * 100);
  
      eNoise.setAttribute('seed', `${ ( Math.random() < 0.6 ) ? rnd : 0 }`);
      
      this.element.setAttribute('style', `filter: url(#${ this.currentFilterId });`);
    }
  };
  
  window.addEventListener('DOMContentLoaded', () => {
    const filter = new AnimatedFilter('glitch', 'hdg-1');
  });

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


});



