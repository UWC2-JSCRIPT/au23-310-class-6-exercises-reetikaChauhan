/**
 * Toggles "done" class on <li> element
 */
$(document).ready(function (){
$('li').on('click',function(e) {
  let $this = $(this);
  $(this).toggleClass('done');
  
})


/**
 * Delete element when delete link clicked
 */
$('.delete').on('click',function(e){
  let $this = $(this);
  $(this).parent().remove();
})

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();
  const $newliEl = $('<li>')
  const $span = $('<span>')
  $span.text(text)
  const $newanchor = $('<a>')
  $newanchor.text('Delete')
  $newanchor.addClass('delete')
  $newliEl.append($span)
  $newliEl.append($newanchor)
  $('ul').append($newliEl)
  $('.delete').on('click',function(e){
    let $this = $(this);
    $(this).parent().remove();
  })
  $('li').on('click',function(e) {
    let $this = $(this);
    $(this).toggleClass('done');
    
  })
  

  // rest here...
};

// add listener for add
$('.add-item').on('click',function(e){
  addListItem(e)
})
})