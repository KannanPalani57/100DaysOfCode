d3.select("body")
.append("h1")
.text("hello")
.style("color", "purple")

var dataset = [5,3,10,7,12,20]

d3.select("body")
.selectAll("div")
.data(dataset)
.enter()
.append('div')
.attr("class", "container")
.style('height', d => {
    return d*10 + "px";
})
.style("margin","2px")


const w = 500;
const h = 100;

const svg = d3.select("body")
   .append("svg")
   .style("width", w)
   .style("height", h)
   
svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d,i)=> {
      return i * 28;
  })
  .attr("y", (d,i)=>{
      return 100-d*8;
  })
  .attr("width", 25)
  .attr("height",(d) =>{
      return d * 8 + "px";
  })
  .attr("fill", "navy")
  .text(function(d){
      return d;
  })


const text = d3.select(svg)
 .selectAll("text")
 .data(dataset)
 .enter()
 .text(function(d){
     return d;
 })
 .attr("x", (d,i)=>{
     return h - d-2;
 })
.attr(y, (d,i) =>{
    return w *i;
})


// .text(function(d){
//     return d +" USD";
// })
// .style("color", (d) => {
//     if(d < 5){
//         return "green";
//     }else{
//         return "red";
//     }
// })