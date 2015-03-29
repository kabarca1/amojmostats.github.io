$("table").tablesorter({



        sortList: [[3,1]]



        // set forced sort on the fourth column and i decending order.



    });
var cutoffsixtyfive = $("#stats tr:nth-child("+Math.floor($("#stats tr").length * 0.65)+") td:nth-child(4)").text();
cutoffsixtyfive = "65%-tile: "+ parseFloat(cutoffsixtyfive).toFixed(1).toString()
//document.getElementById("sixty-five").innerHTML="65%-tile: "+cutoffsixtyfive;

var cutoffsixty = $("#stats tr:nth-child("+Math.floor($("#stats tr").length * 0.60)+") td:nth-child(4)").text();
cutoffsixty = "60%-tile: "+ parseFloat(cutoffsixty).toFixed(1).toString()
//document.getElementById("sixty").innerHTML="60%-tile: "+cutoffsixty;

var cutofffiftyfive = $("#stats tr:nth-child("+Math.floor($("#stats tr").length * 0.55)+") td:nth-child(4)").text();
cutofffiftyfive = "55%-tile: "+ parseFloat(cutofffiftyfive).toFixed(1).toString()
//document.getElementById("fifty-five").innerHTML="55%-tile: "+cutofffiftyfive;

document.getElementById("percentiles").innerHTML = cutofffiftyfive+"  <br>   "+"<strong>"+cutoffsixty+"</strong>"+"  <br>   "+cutoffsixtyfive