$(document).ready(function () {
  // Initialize select2
  $("#SelExample").select2();
  $("#SelExample").select2("val", "4");
  $("#SelExample option:selected").text("Vizag");
  // Read selected option
  $("#but_read").click(function () {
    var username = $("#SelExample option:selected").text();
    var userid = $("#SelExample").val();

    $("#result").text("id : " + userid + ", name : " + username);
  });
});
