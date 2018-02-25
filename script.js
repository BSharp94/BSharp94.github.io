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
  



  var vm = new Vue({
    el: '#app',
    data: {
      languages: ['C', 'Java', 'Javascript', 'Python'],
      categories: ['Hiring', 'General Knowledge'],
      bioText: "Here is text about me bio text stuff",
      experiences: [
        { src: "./content/c_code.jpg", title: "C / Java", text: "During college, my primary languages were C and Java."},
        { src: "./content/c_code.jpg", title: "Python", text: "During college, my primary languages were C and Java."},
        { src: "./content/c_code.jpg", title: "Javascript", text: "During college, my primary languages were C and Java."},
        { src: "./content/c_code.jpg", title: "C# ASP.net", text: "During college, my primary languages were C and Java."},

      ]
    }
  });

}