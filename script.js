window.onload = () => {

  var vm = new Vue({
    el: '#app',
    data: {
      languages: ['C', 'Java', 'Javascript', 'Python'],
      categories: ['Hiring', 'General Knowledge'],
      aboutMeData: "tesst this is a text",
    }
  });

  var aboutMeData = "test test test".split(" ").reverse();

  // window.setInterval(
  //   () => {
      
  //     var newText = $("#aboutMeText").text() + aboutMeData.pop();
  //     $("#aboutMeText").text(newText)

  //     // clear interval
  //     if(aboutMeData.length = 0|| aboutMeData == null)
  //       clearInterval
  //   }
  // ,500);
}