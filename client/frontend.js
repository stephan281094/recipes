var flickity;

Template.body.helpers({
  recipes: function() {
    return [
      {id: 0, src: '/images/panini.jpg', name: 'Club Sandwich', user: 'John'},
      {id: 1, src: '/images/pizza.jpg', name: 'Italian Pizza', user: 'Jane'},
      {id: 2, src: '/images/dessert.jpg', name: 'Ice cream sandwich', user: 'Stephan'}
    ]
  },

  image: function(src) {
    var src = src || '/images/notfound.jpg';

    return 'background:url(' + src + ') center center;background-size:cover;';
  }
});

Template.body.rendered = function() {
  flickity = new Flickity('.carousel', {
    setGallerySize: false,
    prevNextButtons: false
  });
};

Template.body.events({
  'mouseup .gallery-cell:not(.is-selected)': function (event, template) {
    flickity.select(this.id);
  }
});
