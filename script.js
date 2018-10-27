window.onload = () => {

  var aboutMeData = "Hi. My name is Brian Sharp and I am a Software engineer.".split(/(\s+)/).reverse();
  var aboutMeText = $("#aboutMeText");
  

  var updateAboutMe = window.setInterval(function (){
          
    let newText = aboutMeText.text() + aboutMeData.pop();
    aboutMeText.text(newText);
    
    if( aboutMeData.length < 1){
      window.clearInterval(updateAboutMe)
    }
    
  }, 200)
  
  var cursorShowing = true;
  window.setInterval(function (){
    cursorShowing = !cursorShowing;
    if (cursorShowing) {
      $(".cursor-blink").show();
    }
    else {
      $(".cursor-blink").hide();
    }
  },250);

}