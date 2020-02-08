const gallery = [
  {
    src: "img/4.jpg",
  },
  {
    src: "img/3.jpg",
  },
  {
    src: "img/6.jpg",
  },
  {
    src: "img/1.jpg",
  },
  {
    src: "img/7.jpg",
  },
]

new Vue({
  el: '.content',
  data: {
    gallery: gallery,
    isVisible: false,
    src: "",
    nextSrc: "",
    prevSrc: "",
    currentSrc: "", 
  },
  methods: {
    showLbx: function(e) {
      this.isVisible = true;
      this.src = e.target.src;
      this.nextSrc = e.target;
      this.prevSrc = e.target;
      document.body.style.overflow = 'hidden';
    },
    hideLbx: function() {
      this.isVisible = false;
      document.body.style.overflow = 'auto';
      console.log('Firing');
    },
    showNext: function() { 
      if (this.nextSrc.nextSibling === null) {
        return
      } else {
        this.src = this.nextSrc.nextSibling.src;
        this.nextSrc = this.nextSrc.nextSibling;
        this.prevSrc = this.nextSrc; // ensures next/prev remain focused on the same gallery object
      }
    },
    showPrev: function() {
      if (this.prevSrc.previousSibling === null) {
        return
      } else {
        this.src = this.prevSrc.previousSibling.src;
        this.prevSrc = this.prevSrc.previousSibling;
        this.nextSrc = this.prevSrc; // ensures next/prev remain focused on the same gallery object
      }
    }
  },
})