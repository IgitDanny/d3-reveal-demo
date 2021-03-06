
Reveal.addEventListener( 'pichart', function addEventListener() {
    var width = 1000,
        height = 500,
        elem = document.getElementById('pichart-code');
    
    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.population; });
        
    d3.select('.pichart.showcase').select('svg').remove();
    
    var svg = d3.select(".pichart.showcase").append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        
    var data = [
        {age:'< π', population:100},
        {age:'> π', population:100}
    ];
    
    var doUpdate = updateD3(svg, elem, height, width, pie(data));
        
    doUpdate();
        
    elem.onkeypress = debounce(1000, elem, function () {
        if (Reveal.psychicCodeDispatch) {
            Reveal.psychicCodeDispatch(elem.id, elem.innerHTML);
        }
        
        doUpdate();
    });
});
