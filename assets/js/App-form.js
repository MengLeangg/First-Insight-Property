$(".participation").hide();
$(".payment").hide();
$("#participation-link").click(function(){
  $(".company-detail").fadeOut(100);
  $(".payment").fadeOut(100);
  $(".participation").delay(100).fadeIn(100);
  $("#company-link").removeClass("active");
  $("#payment").removeClass("active");
  $("#participation-link").addClass("active");
});
$("#company-link").click(function(){
  $(".company-detail").delay(100).fadeIn(100);;
  $(".participation").fadeOut(100);
  $(".payment").fadeOut(100);
  $("#company-link").addClass("active");
  $("#participation-link").removeClass("active");
  $("#payment-link").removeClass("active");
});
$("#payment-link").click(function(){
    $(".payment").delay(100).fadeIn(100);;
    $(".company-detail").fadeOut(100);
    $(".participation").fadeOut(100);
    $("#payment-link").addClass("active");
    $("#company-link").removeClass("active");
    $("#participation-link").removeClass("active");
});

// function onlyOne(checkbox) {
//   var checkboxes = document.getElementsByName('group1[]')
//   checkboxes.forEach((item) => {
//       if (item !== checkbox) item.checked = false;
//   })
// }
  