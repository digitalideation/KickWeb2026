// Source - https://stackoverflow.com/a/73736335
// Posted by Sean Doherty
// Retrieved 2026-03-09, License - CC BY-SA 4.0

document.addEventListener('DOMContentLoaded', function () {
        
    var parallaxImages =[].slice.call( 
        document.querySelectorAll(".parallax img")
    )
  
  //console.log(parallaxImages);
    
    
    if ("IntersectionObserver" in window && 'IntersectionObserverEntry' in window) {
        
        // Intersection Observer Configuration
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px', // important: needs units on all values
            threshold: 0
        };
        
        var observer = new IntersectionObserver(handleIntersect, observerOptions);
        var el;
        function handleIntersect(entries, observer) {
                        
            entries.forEach(function(entry) {
                
                if (entry.isIntersecting) {
              el = entry.target;
                    window.addEventListener('scroll', parallax, false);
                } else {
                    window.removeEventListener('scroll', parallax, false);
                }
            });
        }
    
        parallaxImages.forEach(function(parallaxImage) {
            observer.observe(parallaxImage);
        });
        
        var parallax = debounce(function() {
    
            amount = Math.round( window.pageYOffset * 0.2 );
            el.style.webkitTransform = 'translateY(-'+amount+'px)';
                    
        }, 10);
                
    }

}, false);

/*************************************
  Function: Debounce
  *************************************/
  
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
        if (!immediate) func.apply(context, args);
        };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };