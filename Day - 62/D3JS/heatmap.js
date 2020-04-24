var data = [
    {
      "week": 1, 
      "day" : 1, 
      "value": 6
    }, 
    {
      "week": 1, 
      "day" : 2, 
      "value": 7
    }
    ,
    {
        "week": 3,
        "day": 3,
        "value": 9,
    }
//So on and so forth
];
const w = 500;
const h = 500;

const svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);


    var colorDomain = d3.extent(data, function(d){
        return d.value;
      });
      var colorScale = d3.scaleLinear()
        .domain(colorDomain)
        .range(["lightblue","blue"]);




var rectangles = svg.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr("x", function(d){
return d.day * 50; 
})
.attr("y", function(d){
return d.week * 50; 
})
.attr("width", 50)
.attr("height", 50). 
style("fill", function(d){
return colorScale(d.value); 
});   

