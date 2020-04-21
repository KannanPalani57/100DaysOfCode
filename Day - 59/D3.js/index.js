
function data(){
d3.json("jsondata.json", function(data) {
  console.log(data)

});

}
            //D3(Data Visualization)
/*d3.select("body")
.selectAll("h2")
.data(array)
.enter()
.append("h2")
.text(function(d){
    return d + " USD"
})
.style('color', d =>{
     if(d < 3){
         return "red"
     }else{
         return "green"
     }
})*/ 
const array = [12, 31, 22, 17, 25, 18, 29, 14, 9];
d3.select("body")
.selectAll("div")
.data(array)
.enter()
.append("div")
.attr("class","container")
.style("height", (d) => (d*10 + "px"))