function d3draw() {
    dataset=[2,5,8];    
    
    d3.select("body").selectAll("h1").data(dataset).enter().append("h1").text("hello it's Fahd!");
}
window.onload=d3draw;
