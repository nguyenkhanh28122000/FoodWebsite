const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menu = $('.header-icon__bars')
const navbar = $('.header-nav')
const searchIcon = $('.header-icon__search')
const searchBox = $('.search')
const searchCloseIcon = $('.search-icon__close')
const navbarItems = $$('.nav__item')
const sections = $$('section')
const navBarLists = $$('.header-nav a')
const loader = $('.web-load')
const secHome = $('#dishes')

const app = {
    handleEvents: function() {
        menu.onclick = () => {
            menu.classList.toggle('fa-xmark')
            navbar.classList.toggle('active')
        }

        searchIcon.onclick = () => {
            searchBox.classList.add('active')
        }

        searchCloseIcon.onclick = () => {
            searchBox.classList.remove('active')
        }

        navbarItems.forEach((navbarItem, index) => {
            navbarItem.onclick = () => {
                $('.nav__item.active').classList.remove('active')

                navbarItem.classList.add('active')
            }
        })

        window.onscroll = () => {
            navbar.classList.remove('active')
            menu.classList.remove('fa-xmark')

            sections.forEach(sec => {
                let top = window.scrollY
                let height = sec.offsetHeight
                let offset = sec.offsetTop - 150
                let id = sec.getAttribute('id')
                
                if(top >= offset && top < offset + height) {
                    navBarLists.forEach(list => {
                        list.classList.remove('active')
                        document.querySelector('.header-nav a[href*='+id+']').classList.add('active')
                    })
                }
            })
        }

        window.onload = () => {
            setInterval(() => {
                loader.classList.add('load-out')
            }, 2000)
        }
    },



    handleSlide: function() {
        var swiper = new Swiper(".home-slide", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            loop:true,
          });

          var swiper2 = new Swiper(".review-slider", {
            spaceBetween: 20,
            centeredSlides: true,
            autoplay: {
              delay: 8000,
              disableOnInteraction: false,
            },
            loop:true,

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }
          });
    },

    start: function() {
        this.handleEvents();
        this.handleSlide();
    }
}

app.start();