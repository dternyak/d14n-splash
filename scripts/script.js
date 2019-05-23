$(function() {
  // Background animation
  VANTA.NET({
    el: document.querySelector('.Hero'),
    color: '#0984e3',
    backgroundColor: '#111',
  });

  // Portfolio selector
  var $menuItems = $('.Portfolio-menu-item');
  var $contentItems = $('.Portfolio-content-item');

  $menuItems.on('click', function(ev) {
    var $menuItem = $(ev.target);
    var project = $menuItem.data('project');
    $menuItems.removeClass('is-active');
    $contentItems.removeClass('is-active');
    $menuItem.addClass('is-active');
    $('.Portfolio-content-item[data-project="' + project + '"]').addClass('is-active');
  });
});
