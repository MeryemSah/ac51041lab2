/*function d3draw() {
    var dataset=[2,5,8, 16, 20, 71, 29];    
    
    d3.select("body").selectAll("h1").data(dataset).enter().append("h1").text(function (d){
        return "This is number " + d;
    });
}

window.onload=d3draw;
*/
/*
function drawCircle()
{
    var data=[[20,40,5],[20,80,10],[20,120,15]];
    
    var h = 350;
    var w = 350;
   
    var canvas = d3.select("body").append("svg").attr("width",w).attr("Height",h);
    
    var circles = canvas.selectAll("circle").data(data).enter().append("circle");
    
    circles.style("stroke", "red").style("fill", "blue").attr("cy",function (d){return d[0];}).attr("cx",function(d){return d[1];}).attr("r", function(d){return d[2];});
}
window.onload=drawCircle;

*/
function geoDataUK()
{
    var path = d3.geo.path();
    /*
    d3.json("http://ac32007.cloudapp.net:8080/Circles/Towns/5", function(json){
        svg.selectAll("path").data(json.features)
                .enter()
                .append("path")
                .attr("d", path);
        
    });
    */
   var url = "http://ac32007.cloudapp.net:8080/Circles/Towns/5";
   d3.json(url, function(error,json)
   {
       if(error)
       {
            return console.error(error);
       }
       console.log(json);
       d3.select("body").selectAll("p").data(json).enter().append("p").text(function(dd){return dd;});
   });
    
    
}
window.onload=d3draw;