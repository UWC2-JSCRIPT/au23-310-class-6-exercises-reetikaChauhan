// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
$(document).ready(function (){
$mainele = $('main')
$newanchor = $("<a>")
$newanchor.text("Buy Now!")
$newanchor.attr("id","cta")
$('main').append($newanchor)


// Access (read) the data-color attribute of the <img>,
// log to the console

  $img = $('img')
  $color = $img.attr('data-color')
  console.log($color)

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
const $allliElements = $('li');
const $thirdli = $($allliElements[2])
$thirdli.addClass("highlight")
// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const $removeEle = $('p')
$removeEle.remove()
// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
 const $anchorclick = $('#cta')
 $anchorclick.on('click', () => {
       $anchorclick.remove()
       $('main').append('Added to cart')
 })
})