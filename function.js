var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");

var next = document.getElementById("next");
var back = document.getElementById("back");

next.onclick = function () {
 form2.style.left = "-45rem";
 form3.style.left = "4rem";
 progress.style.width = "24rem";
}

back.onclick = function () {
 form2.style.left = "5rem";
 form3.style.left = "55rem";
 progress.style.width = "12rem";
}

var maxLength = 200;
$('#address').keyup(function () {
 var length = $(this).val().length;
 var length = maxLength - length;
 $('#chars').text(length);
});