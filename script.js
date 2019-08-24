
function validateForm (){
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    if ((email == "")||(subject == "")||(message == "")){
      alert("Please fill out all fields to be able to submit the form");
      } else {
      alert("Thank you for submitting the form!");
      }
  }
  
  function clearForm(){
    document.getElementById("contact").reset();
  }
  
  $(".contact").on("submit", function(e){
    e.preventDefault();
    validateForm();
    clearForm();
  })
  
  
  
  
  

