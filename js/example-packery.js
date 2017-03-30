// // external js: packery.pkgd.min.js, draggabilly.pkgd.min.js

var pckry = new Packery('.grid', {
  itemSelector: '.grid-item',
  gutter: '.gutter-sizer',
  columnWidth: '.grid-sizer',
  rowHeight: '.grid-sizer',
  percentPosition: true
});

var itemElem = '.grid-item';
pckry.getItemElements().forEach(function(itemElem) {
  var draggie = new Draggabilly(itemElem);
  pckry.bindDraggabillyEvents(draggie);
});
