
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       // Add your code below this line
       .attr("cx", function(d){
           return d[0]
       })
       .attr("cy", function(d){
           return h-d[1];
       })
       .attr("r",8)  
         

       svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text( d => (d[0]+ ", "+d[1]))
        .attr("x", d=>{
            return d[0]+7;
        })
        .attr("y", d=>{
            return h-d[1];
        })
        