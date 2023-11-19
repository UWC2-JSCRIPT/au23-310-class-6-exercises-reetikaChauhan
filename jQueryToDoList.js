/**
 * Toggles "done" class on <li> element
 */
$(document).ready(function (){
$('li').on('click', event => {
  $(event.currentTarget).toggleClass('done');
  
})


/**
 * Delete element when delete link clicked
 */
$('.delete').on('click',event =>{
  $(event.currentTarget).parent().remove();
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
  $($newliEl).on('click', (event) => {
    const currentElement = $(event.currentTarget)
    console.log("ce",currentElement)
    $(currentElement).toggleClass('done');
    
  })
  $($newanchor).on('click',event =>{
    $(event.currentTarget).parent().remove();
  })

  // rest here...
};

// add listener for add
$('.add-item').on('click',function(e){
  addListItem(e)
})
})