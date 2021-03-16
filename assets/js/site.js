/*JavaScript added on this page */

  jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });

  setTimeout(function() {
    document.getElementById("splash").style.display = "none";
  }, 3000);


  function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }

  function validationEvent() {
    var a = document.forms["form-one"]["name-input"].value;
    var b = document.forms["form-one"]["email-address"].value;
    var c = document.forms["form-one"]["phone-number"].value;
    var d = document.forms["form-one"]["date-birth"].value;
    var e = document.forms["form-one"]["verification"].value;
    if ((a == "") || (b == "") || (c == "") || (d == "") || (e == "")){
      alert("All of the sections must be filled out.");
    }
    else{
      alert("Thank you for sign up" + "\n" + "Your confirmation number is : " + makeid(25));  
    }
  }

  function msg(){  
    alert(makeid(15));  
   }  


  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


