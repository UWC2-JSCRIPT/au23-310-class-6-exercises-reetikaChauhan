// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
$(document).ready(function (){
  const $anchor = $('#more-info')
  $anchor.attr('href',"")
  $anchor.on('click', () =>{
    let text = `Here's some more info`
    alert(text)
  })
    
})
// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
$barkbutton = $('#dog')
$barkbutton.on('click',function (e) {
  e.stopPropagation()
})
$barkbutton.on('click',() =>{
  alert("Bow wow!")
})
