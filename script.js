var aboutMeData = "Hi. My name is Brian Sharp and I am a Software engineer.".split("").reverse();
var aboutMeDisplay = $("#aboutMeText");
var letterMean = 100;
var spaceMean = 300;

function updateAboutMe() {
  var newLetter = aboutMeData.pop();
  var newText = $("#aboutMeText").text() + newLetter
  $("#aboutMeText").text(newText)

  if (aboutMeData.length > 1) {
    window.setTimeout(updateAboutMe, newLetter == " " ? spaceMean : letterMean);
  }
}

function getFormData() {
  return {
    name: $("#name").val(),
    phone: $("#phone").val(),
    email: $("#email").val(),
    preferredContact: $("input[name='preferredContact']").val(),
    message: $("#message").val(),
    formDataNameOrder: JSON.stringify(['name', 'phone', 'email', 'preferredContact', 'message']),
    formGoogleSheetName: "responses",
    formGoogleSend: "",
  }
}

window.onload = () => {

  window.setTimeout(updateAboutMe(), 300);
  
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

  // contact form object
  $("#contact-form").submit(function(e) {
    e.preventDefault();

    var formData = getFormData();
    var urlData = Object.keys(formData).map(function(k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(formData[k]);
    }).join("&")

    var urlFull = this.action + urlData;
    
    // User XHR Request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', this.action);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      $("#contact-form").hide();
      $("#contact-form-submitted").show();
    }

    xhr.send(urlData);
  })
}




