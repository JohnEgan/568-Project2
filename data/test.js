import d3 from "d3.js"

let data = d3.map(d3.range(1,100,1),
                  function (d){return{x:d,y:d}}
                  )
let yScale = d3.scaleLog().map([1,100]).range([100,1])
