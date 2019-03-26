var flag = true
var dogflag = true

$(document).ready(function(){
  $("button#cat").click(function(){
    $("p.cattalk").prepend("<p>Meow, hater</p>");
  });
  $("button#dog").click(function(){
    $("p.dogtalk").prepend("<p>Ruff ruff, hater</p>");
  });
  $("img#catjpg").click(function() {
    if (flag){
      $(this).attr("src", "images/cat2.jpg");
      flag = false;
    }else {
        $(this).attr("src", "images/cat.jpg");
        flag = true;
    }
  });
  $("img#dogjpg").click(function(){
  if (dogflag) {
    $(this).attr("src", "images/dog2.jpg");
    dogflag = false;

  }else{
    $(this).attr("src", "images/dog.jpg");
    dogflag = true;
  }
  });
});
