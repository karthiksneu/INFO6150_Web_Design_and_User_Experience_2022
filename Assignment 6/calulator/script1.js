$(function() {

    $("#usercheck").hide();
    $("#emailcheck").hide();
    $("#passcheck").hide();
    $("#retype_passcheck").hide();

    var error_fname = false;
    var error_email = false;
    var error_password = false;
    var error_retype_password = false;

    $("#userName").focusout(function(){
       check_fname();
    });
    $("#emailId").focusout(function() {
       check_email();
    });
    $("#password").focusout(function() {
       check_password();
    });
    $("#retype_password").focusout(function() {
       check_retype_password();
    });

    function check_fname() {
       var pattern = /^[a-zA-Z]*$/;
       var fname = $("#userName").val();
       if (pattern.test(fname) && fname !== '') {
          $("#usercheck").hide();
          $("#userName").css("border-bottom","2px solid #34F458");
       } else {
          $("#usercheck").html("Should contain only Characters");
          $("#usercheck").show();
          $("#userName").css("border-bottom","2px solid #F90A0A");
          error_fname = true;
       }
    }

    

    function check_password() {
       var password_length = $("#password").val().length;
       if (password_length < 8) {
          $("#passcheck").html("Atleast 8 Characters");
          $("#passcheck").show();
          $("#password").css("border-bottom","2px solid #F90A0A");
          error_password = true;
       } else {
          $("#passcheck").hide();
          $("#password").css("border-bottom","2px solid #34F458");
       }
    }

    function check_retype_password() {
       var password = $("#password").val();
       var retype_password = $("#retype_password").val();
       if (password !== retype_password) {
          $("#retype_passcheck").html("Passwords Did not Matched");
          $("#retype_passcheck").show();
          $("#retype_password").css("border-bottom","2px solid #F90A0A");
          error_retype_password = true;
       } else {
          $("#retype_passcheck").hide();
          $("#retype_password").css("border-bottom","2px solid #34F458");
       }
    }

    function check_email() {
       var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@northeastern.edu$/;
       var email = $("#emailId").val();
       if (pattern.test(email) && email !== '') {
          $("#emailcheck").hide();
          $("#emailId").css("border-bottom","2px solid #34F458");
       } else {
          $("#emailcheck").html("Invalid Email");
          $("#emailcheck").show();
          $("#emailId").css("border-bottom","2px solid #F90A0A");
          error_email = true;
       }
    }

    $("#myForm").submit(function() {
       error_fname = false;
       error_email = false;
       error_password = false;
       error_retype_password = false;

       check_fname();
       check_email();
       check_password();
       check_retype_password();

       if (error_fname === false  && error_email === false && error_password === false && error_retype_password === false) {
          alert(" Successfull");
          localStorage.setItem("username",document.getElementById("userName").value);
          return true;
       } else {
          alert("Please Fill the form Correctly");
          return false;
       } 

    });
 });