

function text(color) {
}


function changeBG(color) {
    let text = document.getElementsByClassName('text')
  document.body.style.backgroundColor = color;
  if(color == '#000000')
  {
     for (const elm of text) {
        elm.style.color = "white"
     }
  }
  else
  {
     for (const elm of text) {
         elm.style.color = "black"
      }
  }
}