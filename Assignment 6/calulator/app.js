document.getElementById("user").innerHTML =
  "Welcome " + localStorage.getItem("username") + ",";

$(document).ready(() => {
  $("#first_num").focusout(function () {
    checkInt();
  });
  $("#second_num").focusout(function () {
    checkInt();
  });

  $("#addbtn").click(() => {
    var num1 = parseFloat($("#first_num").val());
    var num2 = parseFloat($("#second_num").val());
    var num3 = num1 + num2;
    console.log(num3);
    if (isNaN(num3)) {
      alert("Please enter valid input characters!");
    } else {
      document.display.result.value = num3;
    }
  });

  $("#subbtn").click(() => {
    var num1 = parseFloat($("#first_num").val());
    var num2 = parseFloat($("#second_num").val());
    var num3 = num1 - num2;
    if (isNaN(num3)) {
      alert("Please enter valid input characters!");
    } else {
      document.display.result.value = num3;
    }
  });

  $("#divbtn").click(() => {
    var num1 = parseFloat($("#first_num").val());
    var num2 = parseFloat($("#second_num").val());
    var num3 = num1 / num2;
    if (isNaN(num3)) {
      alert("Please enter valid input characters!");
    } else {
      document.display.result.value = num3;
    }
  });

  $("#mulbtn").click(() => {
    var num1 = parseFloat($("#first_num").val());
    var num2 = parseFloat($("#second_num").val());
    var num3 = num1 * num2;
    if (isNaN(num3)) {
      alert("Please enter valid input characters!");
    } else {
      document.display.result.value = num3;
    }
  });

  $("#resetbtn").click(()=> {
    $("#first_num").css("border", "none");
    $("#second_num").css("border", "none");
  })

  function checkInt() {
    var num1 = $("#first_num").val();
    var num2 = $("#second_num").val();
    var regex = /^[0-9]$/;
    var isInt = true;

    if (regex.test(num1)) {
      $("#first_num").css("border-bottom", "2px solid #34F458");
    } else {
      $("#first_num").css("border-bottom", "2px solid #F90A0A");
      // $(".btngrp").attr("disabled", true);
      isInt = false;
    }
    if (regex.test(num2)) {
      $("#second_num").css("border-bottom", "2px solid #34F458");
    } else {
      $("#second_num").css("border-bottom", "2px solid #F90A0A");
      // $(".btngrp").attr("disabled", true);
      isInt = false;
    }

    return isInt;
  }
});
