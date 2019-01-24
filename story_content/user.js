function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6VXl8FtthiY":
        Script1();
        break;
      case "5qYnT6kSv1G":
        Script2();
        break;
      case "5pZ68qBapmD":
        Script3();
        break;
      case "5WlhldGjtpv":
        Script4();
        break;
      case "6nBYsDg5Nuj":
        Script5();
        break;
      case "6BJI4QN3PWq":
        Script6();
        break;
      case "6jDgLBDVnaN":
        Script7();
        break;
      case "6S9Bp0luoIC":
        Script8();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_courses@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var player = GetPlayer();
var email="nsdd_courses@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script6()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script7()
{
  $("#tab-customlink").show();
}

function Script8()
{
  window.print();
}

