var bioActive = false;
  
  // toggle bio with animations/timing relative to its state
  // if closed, expand width first, then height
  // if open, expand height first, then width
  function toggleBio(){
    if(bioActive == false){
      firstClass = 'expand-width';
      secondClass = 'expand-height';  
      bioActive = true;
    }else{
      firstClass = 'expand-height';
      secondClass = 'expand-width';    
      bioActive = false;
    } 
    
    $(".wrap-center").toggleClass("bio-active").toggleClass(firstClass).delay(500).queue(function(){
      $(this).toggleClass(secondClass).dequeue();
    }); 
  }
  
  // run bio toggle on click
  $(".btn-about, .close-about, .toggle-about").on("click", toggleBio);

  var test = new toggleBio();
export { test };
  
;
//# sourceMappingURL=scripts.js.map