(function () {var a={},c=function(e){var r=Number(e);return r>1?r/100:parseFloat(e)},b=function(e){return Math.round(100*e)/100},d=function(e,r){return r*(e-50)*10},e=function(e){console.log("Rank | Name | Win% | Play% | Power");for(var r=0;r<e.length;r++)e[r].winPercent=b(e[r].winPercent).toString(),e[r].playPercent=b(e[r].playPercent).toString(),e[r].power=b(e[r].power).toString(),console.log(r+1+" | "+e[r].name+" | "+e[r].winPercent+"% | "+e[r].playPercent+"% | "+e[r].power);console.log("Rank | Name | Win% | Play% | Power")},f=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://benc.me";window.open(r+"/championgg-parser.html?data="+JSON.stringify(e.slice(0,9)),"_blank")};a={parsePercent:c,roundToDecimal:b,calculatePower:d,displayResults:e,openWebpage:f};(function(){var e=Array.from(document.getElementsByClassName("StatisticsChampionTable sortable tablesorter tablesorter-default")[0].rows);e.shift();var r=[];e.forEach(function(e){var t=e.cells;r.push({name:t[2].childNodes[1].innerHTML,winPercent:100*a.parsePercent(t[3].getAttribute("data-value")),playedGames:Number(t[4].innerHTML.replace(/,/g,""))})});var t=r.reduce(function(e,r){return e+r.playedGames},0);r.map(function(e){var r=e;return r.playPercent=100*e.playedGames/t,r.power=a.calculatePower(r.winPercent,r.playPercent),r}),r.sort(function(e,r){return r.power-e.power}),a.displayResults(r),a.openWebpage(r)})();})();