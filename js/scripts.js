function navBehaviour() {

    const navigation = document.querySelector('.navigation');
    const icon = document.querySelector('.nav-icon');

    // Mobile Navbar Toggle

    icon.addEventListener('click', function () {

        if(this.classList.contains('open')){
            navigation.style.height="0px";
            this.classList.remove('open');
        }
        else{
            navigation.style.height="200px";
            this.classList.add('open');
        }
    });

    // Desktop Sticky Navbar

    const media = window.matchMedia("(min-width: 768px)") // only applies on medium/large screens
    const sticky = navigation.offsetTop;

    window.onscroll = () => stickyNav(media);

    function stickyNav(media) {
        if (window.pageYOffset > sticky && media.matches) {
            navigation.classList.add('sticky');
        } else {
            navigation.classList.remove('sticky');
        }
    };

};

navBehaviour();