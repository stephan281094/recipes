var flickity;

UI.registerHelper('coverImage', function(src, options) {
  var src = src || '/images/notfound.jpg';

  return 'background:url(' + src + ') center center;background-size:cover;';
});

Template.body.helpers({
  recipes: function() {
    return [
      {id: 0, src: '/images/panini.jpg', name: 'Club Sandwich', user: 'John'},
      {id: 1, src: '/images/pizza.jpg', name: 'Italian Pizza', user: 'Jane'},
      {id: 2, src: '/images/dessert.jpg', name: 'Ice cream sandwich', user: 'Stephan'}
    ]
  }
});

Template.body.rendered = function() {
  flickity = new Flickity('.recipes', {
    setGallerySize: false,
    prevNextButtons: false,
    pageDots: false
  });
};

Template.body.events({
  'mouseup .recipe': function (event, template) {
    flickity.select(this.id);
  }
});
