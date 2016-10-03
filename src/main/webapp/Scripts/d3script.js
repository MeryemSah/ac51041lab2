/*function d3draw() {
    var dataset=[2,5,8, 16, 20, 71, 29];    
    
    d3.select("body").selectAll("h1").data(dataset).enter().append("h1").text(function (d){
        return "This is number " + d;
    });
}

window.onload=d3draw;
*/

function drawCircle()
{
    var data=[[100,20],[45,55],[225,355]];
    
    var h = 500;
    var w = 600;
   
    var canvas = d3.select("body").append("svg").attr("width",w).attr("Height",h);
    
    var circles = canvas.selectAll("circle").data(data).enter().append("circle");
    
    circles.attr("cx",function (d){return d[0];}).attr("cy",function(d){return d[1];}).attr("r",6);
}
window.onload=drawCircle;

