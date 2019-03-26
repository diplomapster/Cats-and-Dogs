$(document).ready(function(){
  $("button#cat").click(function(){
    $("p.cattalk").prepend("<p>Meow, hater</p>");
  });
  $("button#dog").click(function(){
    $("p.dogtalk").prepend("<p>Ruff ruff, hater</p>");
  });
  $("img#catjpg").click(function(){
    $("img#catjpg").attr('src', "images/cat2.jpg");
  });
  $("img#dogjpg").click(function(){
    $("img#dogjpg").attr('src', "images/dog2.jpg");
  });
  $('src', "images/dog2.jpg").click(function(){
    $("img#dogjpg").attr('src', "images/dog.jpg");{
});
