$(function(){
    $("#phone").mask("+7 (999) 999-99-99");
  });

randomColor = Math.floor(Math.random() * 5)
function ColorToHTML(color) {
  $(".button-secondary").css("background-color", color)
  $(".button-secondary").css("border-color", color)
  //$(".button-nina").css("outline", color)
  $(".mdi-email").css("color", color)
  $(".mdi-phone").css("color", color)
  $(".randomColor").css("color", color)
  $(".event-default-wrap > .event-default-inner > span").css("color", color)
  //
  //$( "<style></style>" ).appendTo( "head" )
  $( "<style>.rd-navbar-static .rd-navbar-top-panel a:hover {color: " + color + ";}</style>" ).appendTo( "head" )
  $( "<style>.rd-navbar-fixed .rd-navbar-nav li:hover>a {background: " + color + "; color: #fff;}</style>" ).appendTo( "head" )
  $( "<style>.rd-navbar-fixed .rd-navbar-nav li.active>a {background:" + color + ";}</style>" ).appendTo( "head" )
  $( "<style>.rd-navbar-static .rd-navbar-nav>li>a:hover {color:" + color + ";}</style>" ).appendTo( "head" )
  $( "<style>.rd-navbar-static .rd-navbar-nav>li.active>a {color:" + color + ";} .rd-navbar-static .rd-navbar-nav>li>a:before { background:" + color + "}</style>" ).appendTo( "head" )
}

switch (randomColor) {
  case 1: 
  ColorToHTML("#ff002c")
  break;
  case 2: 
  ColorToHTML("#00aee5")
  break;
  case 3: 
  ColorToHTML("#7ac73a")
  break;
  case 4: 
  ColorToHTML("#854fa2")
  break;
  default: 
  ColorToHTML("#ff7e2e")
  break;
}

// ToProfile
var data = JSON.parse(data);
alert(data[0].MEIIEN)