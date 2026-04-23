    const bigImg = document.querySelector('.big-img img');
    function showImg(src) {
        bigImg.src = src;
    }

    document.querySelectorAll('.card-list .card-item .image').forEach(img => {
        img.addEventListener('click', function() {
            showImg(this.src);
        });
    });

    const swiper = new Swiper('.slider-wrapper', {
        spaceBetween : true,
      
        navigation: {
          nextEl: '.buttonnext',
          prevEl: '.buttonprev',
        },
    
        breakpoints: {
            0: {
                slidesPerView : 4
            }
        }
      });
    
      function loadHTML(selector, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector(selector).innerHTML = data;
            });
    }