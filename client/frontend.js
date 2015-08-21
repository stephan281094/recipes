Template.body.helpers({
  photos: function() {
    return [
      {id: 1, src: '/images/panini.jpg'},
      {id: 2, src: '/images/pizza.jpg'},
      {id: 3, src: '/images/desert.jpg'}
    ]
  },

  image: function(src) {
    var src = src || '/images/notfound.jpg';

    return 'background: url(' + src + ') center center;background-size: cover;'
  }
});

Template.body.rendered = function() {
  var flickity = new Flickity('.carousel', {
    setGallerySize: false,
    prevNextButtons: false
  });


};
