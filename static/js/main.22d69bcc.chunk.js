(window["webpackJsonpd3-example"]=window["webpackJsonpd3-example"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(6),c=n.n(i),o=(n(13),n(2)),l=(n(14),function(t){var e=t.split("-");return(e=e.map(function(t){return t.slice(0,1).toUpperCase()+t.slice(1)})).join(" ")}),u=n(0),s=function(){var t=20,e=20,n=40,i=60,c=960-i-e,o=500-t-n;return Object(a.useEffect)(function(){!function(){var a=u.o("#axis-static").attr("width",c+i+e).attr("height",o+t+n).append("g").attr("transform","translate(".concat(i,", ").concat(t,")")),r=u.n().domain([0,6]).range([0,c]),l=u.n().domain([0,12]).range([o,0]);a.append("g").attr("transform","translate(0, ".concat(o,")")).call(u.b(r).ticks(6)),a.append("g").call(u.c(l)),a.append("text").attr("text-anchor","end").attr("x",c).attr("y",o+t+20).text("X Axis"),a.append("text").attr("text-anchor","end").attr("transform","rotate(-90)").attr("y",20-i).attr("x",-t).text("Y Axis")}()}),r.a.createElement("svg",{id:"axis-static"})},d=function(){var t=[],e=20,n=20,i=40,c=60,o=960-c-n,l=500-e-i,s=function(t){var e=u.o("#axis").select("g"),n=u.n().domain([0,t.length]).range([0,o]),a=u.n().domain([0,u.j(t)]).range([l,0]);e.select(".xAxis").transition().duration(750).call(u.b(n).ticks(t.length)),e.select(".yAxis").transition().duration(750).call(u.c(a))};t.unshift(setTimeout(function(){t.pop(),s([10,2,7,4,50,20,42,24,6,4,36,8])},1e3)),t.unshift(setTimeout(function(){t.pop(),s([5,7,2,6,9])},4e3)),t.unshift(setTimeout(function(){t.pop(),s([12,5,6,6,9,10])},7e3));var d=setInterval(function(){s([10,2,7,4,50,20,42,24,6,4,36,8]),t.unshift(setTimeout(function(){t.pop(),s([5,7,2,6,9])},3e3)),t.unshift(setTimeout(function(){t.pop(),s([12,5,6,6,9,10])},6e3))},9e3);return Object(a.useEffect)(function(){return function(){var t=[12,5,6,6,9,10],a=u.o("#axis").attr("width",o+c+n).attr("height",l+e+i).append("g").attr("transform","translate(".concat(c,", ").concat(e,")")),r=u.n().domain([0,t.length]).range([0,o]),s=u.n().domain([0,u.j(t)]).range([l,0]);a.append("g").attr("class","xAxis").attr("transform","translate(0, ".concat(l,")")).call(u.b(r).ticks(t.length)),a.append("g").attr("class","yAxis").call(u.c(s)),a.append("text").attr("text-anchor","end").attr("x",o).attr("y",l+e+20).text("X Axis"),a.append("text").attr("text-anchor","end").attr("transform","rotate(-90)").attr("y",20-c).attr("x",-e).text("Y Axis")}(),function(){d&&clearInterval(d),t.forEach(function(t){return clearTimeout(t)})}}),r.a.createElement("svg",{id:"axis"})},f=function(){var t=20,e=20,n=40,i=60,c=960-i-e,o=500-t-n;return Object(a.useEffect)(function(){!function(){var a=[12,5,6,6,9,10],r=u.n().domain([1,u.j(a)]).range(["#d1e2f3","#023858"]),l=u.m().domain(u.l(a.length)).rangeRound([0,c]).paddingInner(.08),s=u.n().domain([0,u.j(a)]).range([o,0]);u.o("#bars-static").attr("width",c+i+e).attr("height",o+t+n).append("g").attr("transform","translate(".concat(i,", ").concat(t,")")).selectAll("rect").data(a).enter().append("rect").attr("x",function(t,e){return l(e)}).attr("y",function(t){return s(t)}).attr("width",l.bandwidth()).attr("height",function(t){return o-s(t)}).attr("fill",function(t){return r(t)})}()}),r.a.createElement("svg",{id:"bars-static"})},p=function(){var t=[],e=20,n=20,i=40,c=60,o=960-c-n,l=500-e-i,s=function(t){var e=u.o("#bars").select("g"),n=u.n().domain([1,u.j(t)]).range(["#d1e2f3","#023858"]),a=u.m().domain(u.l(t.length)).rangeRound([0,o]).paddingInner(.08),r=u.n().domain([0,u.j(t)]).range([l,0]);e.selectAll("rect").data(t).exit().transition().duration(500).attr("fill","whitesmoke").remove(),e.selectAll("rect").data(t).transition().duration(750).attr("y",function(t){return r(t)}).attr("height",function(t){return l-r(t)}).attr("fill",function(t){return n(t)}).transition().duration(750).delay(500).attr("x",function(t,e){return a(e)}).attr("width",a.bandwidth()),e.selectAll("rect").data(t).enter().append("rect").attr("x",function(t,e){return a(e)}).attr("y",l).attr("width",a.bandwidth()).transition().duration(750).delay(1750).attr("y",function(t){return r(t)}).attr("height",function(t){return l-r(t)}).attr("fill",function(t){return n(t)})};t.unshift(setTimeout(function(){t.pop(),s([10,2,7,4,50,20,42,24,6,4,36,8])},1e3)),t.unshift(setTimeout(function(){t.pop(),s([5,7,2,6,9])},4e3)),t.unshift(setTimeout(function(){t.pop(),s([12,5,6,6,9,10])},7e3));var d=setInterval(function(){s([10,2,7,4,50,20,42,24,6,4,36,8]),t.unshift(setTimeout(function(){t.pop(),s([5,7,2,6,9])},3e3)),t.unshift(setTimeout(function(){t.pop(),s([12,5,6,6,9,10])},6e3))},9500);return Object(a.useEffect)(function(){return function(){var t=[12,5,6,6,9,10],a=u.n().domain([1,u.j(t)]).range(["#d1e2f3","#023858"]),r=u.m().domain(u.l(t.length)).rangeRound([0,o]).paddingInner(.08),s=u.n().domain([0,u.j(t)]).range([l,0]);u.o("#bars").attr("width",o+c+n).attr("height",l+e+i).append("g").attr("transform","translate(".concat(c,", ").concat(e,")")).selectAll("rect").data(t).enter().append("rect").attr("x",function(t,e){return r(e)}).attr("y",function(t){return s(t)}).attr("width",r.bandwidth()).attr("height",function(t){return l-s(t)}).attr("fill",function(t){return a(t)})}(),function(){d&&clearInterval(d),t.forEach(function(t){return clearTimeout(t)})}}),r.a.createElement("svg",{id:"bars"})},m=function(){var t=20,e=20,n=40,i=60,c=960-i-e,o=500-t-n;return Object(a.useEffect)(function(){!function(){var a=[12,5,6,6,9,10],r=u.n().domain([1,u.j(a)]).range(["#d1e2f3","#023858"]),l=u.o("#bars-graph-static").attr("width",c+i+e).attr("height",o+t+n).append("g").attr("transform","translate(".concat(i,", ").concat(t,")")),s=u.m().domain(u.l(a.length)).range([0,c]).paddingInner(.05).paddingOuter(.05),d=u.n().domain([0,u.j(a)]).range([o,0]);l.append("g").attr("transform","translate(0, ".concat(o,")")).call(u.b(s).ticks(a.length)),l.append("g").call(u.c(d)),l.append("text").attr("text-anchor","end").attr("x",c).attr("y",o+t+20).text("X Axis"),l.append("text").attr("text-anchor","end").attr("transform","rotate(-90)").attr("y",20-i).attr("x",-t).text("Y Axis"),l.selectAll("rect").data(a).enter().append("rect").attr("x",function(t,e){return s(e)}).attr("y",function(t){return d(t)}).attr("width",s.bandwidth()).attr("height",function(t){return o-d(t)}).attr("fill",function(t){return r(t)})}()}),r.a.createElement("svg",{id:"bars-graph-static"})},h=function(){var t=[],e=20,n=20,i=40,c=60,o=960-c-n,l=500-e-i,s=function(t){var e=u.o("#bars-graph").select("g"),n=u.n().domain([1,u.j(t)]).range(["#d1e2f3","#023858"]),a=u.m().domain(u.l(t.length)).range([0,o]).paddingInner(.05).paddingOuter(.05),r=u.n().domain([0,u.j(t)]).range([l,0]);e.select(".xAxis").transition().duration(750).delay(500).call(u.b(a).ticks(t.length)),e.select(".yAxis").transition().duration(750).delay(1250).call(u.c(r)),e.selectAll("rect").data(t).exit().transition().duration(500).attr("fill","whitesmoke").remove(),e.selectAll("rect").data(t).transition().duration(750).delay(500).attr("x",function(t,e){return a(e)}).attr("width",a.bandwidth()).transition().duration(750).attr("y",function(t){return r(t)}).attr("height",function(t){return l-r(t)}).attr("fill",function(t){return n(t)}),e.selectAll("rect").data(t).enter().append("rect").attr("x",function(t,e){return a(e)}).attr("y",l).attr("width",a.bandwidth()).transition().duration(750).delay(1250).attr("y",function(t){return r(t)}).attr("height",function(t){return l-r(t)}).attr("fill",function(t){return n(t)})};t.unshift(setTimeout(function(){t.pop(),s([10,2,7,4,50,20,42,24,6,4,36,8])},1e3)),t.unshift(setTimeout(function(){t.pop(),s([5,7,2,6,9])},4e3)),t.unshift(setTimeout(function(){t.pop(),s([12,5,6,6,9,10])},7e3));var d=setInterval(function(){s([10,2,7,4,50,20,42,24,6,4,36,8]),t.unshift(setTimeout(function(){t.pop(),s([5,7,2,6,9])},3e3)),t.unshift(setTimeout(function(){t.pop(),s([12,5,6,6,9,10])},6e3))},9500);return Object(a.useEffect)(function(){return function(){var t=[12,5,6,6,9,10],a=u.o("#bars-graph").attr("width",o+c+n).attr("height",l+e+i).append("g").attr("transform","translate(".concat(c,", ").concat(e,")")),r=u.n().domain([1,u.j(t)]).range(["#d1e2f3","#023858"]),s=u.m().domain(u.l(t.length)).range([0,o]).paddingInner(.05).paddingOuter(.05),d=u.n().domain([0,u.j(t)]).range([l,0]);a.append("g").attr("class","xAxis").attr("transform","translate(0, ".concat(l,")")).call(u.b(s).ticks(t.length)),a.append("g").attr("class","yAxis").call(u.c(d)),a.append("text").attr("text-anchor","end").attr("x",o).attr("y",l+e+20).text("X Axis"),a.append("text").attr("text-anchor","end").attr("transform","rotate(-90)").attr("y",20-c).attr("x",-e).text("Y Axis"),a.selectAll("rect").data(t).enter().append("rect").attr("x",function(t,e){return s(e)}).attr("y",function(t){return d(t)}).attr("width",s.bandwidth()).attr("height",function(t){return l-d(t)}).attr("fill",function(t){return r(t)})}(),function(){d&&clearInterval(d),t.forEach(function(t){return clearTimeout(t)})}}),r.a.createElement("svg",{id:"bars-graph"})},g=function(t){var e=t.data,n=20,i=20,c=40,o=60,l=960-o-i,s=500-n-c;return Object(a.useEffect)(function(){var t=u.o("#bars-graph-interactive").attr("width",l+o+i).attr("height",s+n+c).append("g").attr("transform","translate(".concat(o,", ").concat(n,")")),e=u.m().domain(0).range([0,l]).paddingInner(.05).paddingOuter(.05),a=u.n().domain(0).range([s,0]);t.append("g").attr("class","xAxis").attr("transform","translate(0, ".concat(s,")")).call(u.b(e)),t.append("g").attr("class","yAxis").call(u.c(a)),t.append("text").attr("text-anchor","end").attr("x",l).attr("y",s+n+20).text("X Axis"),t.append("text").attr("text-anchor","end").attr("transform","rotate(-90)").attr("y",20-o).attr("x",-n).text("Y Axis")},[s,l,n,i,c,o]),Object(a.useEffect)(function(){var t=u.o("#bars-graph-interactive").select("g"),n=u.n().domain([1,u.j(e)]).range(["#d1e2f3","#023858"]),a=u.m().domain(u.l(e.length)).range([0,l]).paddingInner(.05).paddingOuter(.05),r=u.n().domain([0,u.j(e)]).range([s,0]);t.select(".xAxis").transition().duration(750).delay(500).call(u.b(a).ticks(e.length)),t.select(".yAxis").transition().duration(750).delay(1250).call(u.c(r)),t.selectAll("rect").data(e).exit().transition().duration(500).attr("fill","white").remove(),t.selectAll("rect").data(e).transition().duration(750).delay(500).attr("x",function(t,e){return a(e)}).attr("width",a.bandwidth()).transition().duration(750).attr("y",function(t){return r(t)}).attr("height",function(t){return s-r(t)}).attr("fill",function(t){return n(t)}),t.selectAll("rect").data(e).enter().append("rect").attr("x",function(t,e){return a(e)}).attr("y",s).attr("width",a.bandwidth()).transition().duration(750).delay(1250).attr("y",function(t){return r(t)}).attr("height",function(t){return s-r(t)}).attr("fill",function(t){return n(t)})},[e,s,l]),r.a.createElement("svg",{id:"bars-graph-interactive"})},v=n(3),x=function(t,e){var n=Math.ceil(t),a=Math.floor(e);return Math.floor(Math.random()*(a-n))+n},y=function(t){var e=t.shouldDisplay,n=t.data,i=t.setData,c=function(t){var e=Object(a.useState)(t),n=Object(o.a)(e,2),r=n[0],i=n[1];return{value:r,onChange:function(t){return i(Number(t.target.value))}}}(0),l="display-interactions".concat(e?"":" hide");return r.a.createElement("div",{className:l},r.a.createElement("form",null,r.a.createElement("input",{type:"number",min:"0",value:c.value,onChange:c.onChange}),r.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),i([].concat(Object(v.a)(n),[c.value]))}},"Add"),r.a.createElement("button",{type:"button",onClick:function(){i([].concat(Object(v.a)(n),[x(1,51)]))}},"Add Random"),r.a.createElement("button",{type:"button",onClick:function(){for(var t=Object(v.a)(n),e=0;e<c.value;e+=1)t.push(x(1,51));i(t)}},"Add ",r.a.createElement("i",null,"X")," Random"),r.a.createElement("button",{type:"button",onClick:function(){var t=Object(v.a)(n),e=t.findIndex(function(t){return t===c.value});e>-1&&t.splice(e,1),i(t)}},"Remove"),r.a.createElement("button",{type:"button",onClick:function(){var t=Object(v.a)(n).reduce(function(t,e){return e!==c.value&&t.push(e),t},[]);i(t)}},"Remove All"),r.a.createElement("button",{type:"button",onClick:function(){i([])}},"Clear")))},b=function(){var t=["axis-static","axis-animated","bars-static","bars-animated","graph-static","graph-animated","graph-interactive"],e=Object(a.useState)(t[0]),n=Object(o.a)(e,2),i=n[0],c=n[1],u=Object(a.useState)([]),v=Object(o.a)(u,2),x=v[0],b=v[1],E=function(t){return"display-control-button".concat(t===i?" selected":"")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"display-control"},t.map(function(t){return r.a.createElement("button",{key:t,type:"button",className:E(t),value:t,onClick:function(){return c(t)}},l(t))})),r.a.createElement("hr",null),r.a.createElement("div",{className:"display-content"},function(){switch(i){case"axis-static":return r.a.createElement(s,null);case"axis-animated":return r.a.createElement(d,null);case"bars-static":return r.a.createElement(f,null);case"bars-animated":return r.a.createElement(p,null);case"graph-static":return r.a.createElement(m,null);case"graph-animated":return r.a.createElement(h,null);case"graph-interactive":return r.a.createElement(g,{data:x});default:return r.a.createElement(s,null)}}()),r.a.createElement("hr",null),r.a.createElement(y,{shouldDisplay:"graph-interactive"===i,data:x,setData:b}))},E=function(){var t=20,e=20,n=40,i=60,c=960-i-e,o=500-t-n;return Object(a.useEffect)(function(){!function(){var a=[12,5,6,6,9,10],r=u.n().domain([0,a.length-1]).range([0,c]),l=u.n().domain([0,u.j(a)]).range([o,0]),s=u.o("#lines-static").attr("width",c+i+e).attr("height",o+t+n).append("g").attr("transform","translate(".concat(i,", ").concat(t,")")),d=u.i().x(function(t,e){return r(e)}).y(function(t){return l(t)}).curve(u.e);s.append("path").datum(a).attr("d",d).attr("fill","none").attr("stroke","black").attr("stroke-width",3),s.selectAll("circle").data(a).enter().append("circle").attr("cx",function(t,e){return r(e)}).attr("cy",function(t){return l(t)}).attr("r",5)}()}),r.a.createElement("svg",{id:"lines-static"})},w=function(){var t,e=[],n=20,i=20,c=40,o=60,l=960-o-i,s=500-n-c,d=function(e){var n=u.o("#lines").select("g"),a=u.n().domain([0,e.length-1]).range([0,l]),r=u.n().domain([0,u.j(e)]).range([s,0]),i=u.i().x(function(t,e){return a(e)}).y(function(t){return r(t)}).curve(u.e),c=u.i().x(function(e,n){return t(n)}).y(s).curve(u.e),o=u.i().x(function(t,e){return a(e)}).y(s).curve(u.e);n.select(".line").transition().duration(1e3).attr("d",c).selection().datum(e).transition().duration(0).delay(1e3).attr("d",o).transition().duration(2e3).delay(1e3).attr("d",i),n.selectAll("circle").data(e).exit().transition().duration(750).attr("r",0).remove(),n.selectAll("circle").data(e).transition().duration(750).attr("r",0).selection().transition().duration(0).delay(750).attr("cx",function(t,e){return a(e)}).attr("cy",s).transition().duration(750).delay(250).attr("r",5).transition().duration(2e3).delay(250).attr("cy",function(t){return r(t)}),n.selectAll("circle").data(e).enter().append("circle").attr("cx",function(t,e){return a(e)}).attr("cy",s).attr("r",0).transition().duration(750).delay(1e3).attr("r",5).transition().duration(2e3).delay(250).attr("cy",function(t){return r(t)}),t=a};e.unshift(setTimeout(function(){e.pop(),d([10,2,7,4,50,20,42,24,6,4,36,8])},1e3)),e.unshift(setTimeout(function(){e.pop(),d([5,7,2,6,9])},5500)),e.unshift(setTimeout(function(){e.pop(),d([12,5,6,6,9,10])},1e4));var f=setInterval(function(){d([10,2,7,4,50,20,42,24,6,4,36,8]),e.unshift(setTimeout(function(){e.pop(),d([5,7,2,6,9])},4500)),e.unshift(setTimeout(function(){e.pop(),d([12,5,6,6,9,10])},9e3))},14500);return Object(a.useEffect)(function(){return function(){var e=[12,5,6,6,9,10],a=u.n().domain([0,e.length-1]).range([0,l]);t=a;var r=u.n().domain([0,u.j(e)]).range([s,0]),d=u.o("#lines").attr("width",l+o+i).attr("height",s+n+c).append("g").attr("transform","translate(".concat(o,", ").concat(n,")")),f=u.i().x(function(t,e){return a(e)}).y(function(t){return r(t)}).curve(u.e);d.append("path").datum(e).attr("class","line").attr("d",f).attr("fill","none").attr("stroke","black").attr("stroke-width",3),d.selectAll("circle").data(e).enter().append("circle").attr("cx",function(t,e){return a(e)}).attr("cy",function(t){return r(t)}).attr("r",5)}(),function(){f&&clearInterval(f),e.forEach(function(t){return clearTimeout(t)})}}),r.a.createElement("svg",{id:"lines"})},j=function(){var t=20,e=20,n=40,i=60,c=960-i-e,o=500-t-n,l=setInterval(function(){!function(){var t=u.o("#lines-entrance").select("g");t.selectAll("circle").attr("r",0).transition().duration(1e3).attr("r",5),t.select(".line").attr("stroke-dashoffset",t.select(".line").node().getTotalLength()).transition().duration(2e3).delay(1e3).attr("stroke-dashoffset",0)}()},3750);return Object(a.useEffect)(function(){return function(){var a=[12,5,6,6,9,10],r=u.n().domain([0,a.length-1]).range([0,c]),l=u.n().domain([0,u.j(a)]).range([o,0]),s=u.o("#lines-entrance").attr("width",c+i+e).attr("height",o+t+n).append("g").attr("transform","translate(".concat(i,", ").concat(t,")")),d=u.i().x(function(t,e){return r(e)}).y(function(t){return l(t)}).curve(u.e);s.selectAll("circle").data(a).enter().append("circle").attr("cx",function(t,e){return r(e)}).attr("cy",function(t){return l(t)}).transition().duration(1e3).attr("r",5),s.append("path").datum(a).attr("class","line").attr("d",d).attr("fill","none").attr("stroke","black").attr("stroke-width",3).attr("stroke-dasharray",s.select(".line").node().getTotalLength()).attr("stroke-dashoffset",s.select(".line").node().getTotalLength()).transition().duration(2e3).delay(1e3).attr("stroke-dashoffset",0)}(),function(){l&&clearInterval(l)}}),r.a.createElement("svg",{id:"lines-entrance"})},A=function(){var t=20,e=20,n=40,i=60,c=960-i-e,o=500-t-n;return Object(a.useEffect)(function(){!function(){var a=[12,5,6,6,9,10],r=u.o("#lines-graph-static").attr("width",c+i+e).attr("height",o+t+n).append("g").attr("transform","translate(".concat(i,", ").concat(t,")")),l=u.n().domain([0,a.length-1]).range([0,c]),s=u.n().domain([0,u.j(a)]).range([o,0]);r.append("g").attr("transform","translate(0, ".concat(o,")")).call(u.b(l).ticks(a.length)),r.append("g").call(u.c(s)),r.append("text").attr("text-anchor","end").attr("x",c).attr("y",o+t+20).text("X Axis"),r.append("text").attr("text-anchor","end").attr("transform","rotate(-90)").attr("y",20-i).attr("x",-t).text("Y Axis");var d=u.i().x(function(t,e){return l(e)}).y(function(t){return s(t)}).curve(u.e);r.append("path").datum(a).attr("d",d).attr("fill","none").attr("stroke","black").attr("stroke-width",3),r.selectAll("circle").data(a).enter().append("circle").attr("cx",function(t,e){return l(e)}).attr("cy",function(t){return s(t)}).attr("r",5)}()}),r.a.createElement("svg",{id:"lines-graph-static"})},O=function(){var t,e=[],n=20,i=20,c=40,o=60,l=960-o-i,s=500-n-c,d=function(e){var n=u.o("#lines-graph").select("g"),a=u.n().domain([0,e.length-1]).range([0,l]),r=u.n().domain([0,u.j(e)]).range([s,0]);n.select(".xAxis").transition().duration(1e3).delay(500).call(u.b(a).ticks(e.length)),n.select(".yAxis").transition().duration(2e3).delay(2e3).call(u.c(r));var i=u.i().x(function(t,e){return a(e)}).y(function(t){return r(t)}).curve(u.e),c=u.i().x(function(e,n){return t(n)}).y(s).curve(u.e),o=u.i().x(function(t,e){return a(e)}).y(s).curve(u.e);n.select(".line").transition().duration(1e3).attr("d",c).selection().datum(e).transition().duration(0).delay(1e3).attr("d",o).transition().duration(2e3).delay(1e3).attr("d",i),n.selectAll("circle").data(e).exit().transition().duration(750).attr("r",0).remove(),n.selectAll("circle").data(e).transition().duration(750).attr("r",0).selection().transition().duration(0).delay(750).attr("cx",function(t,e){return a(e)}).attr("cy",s).transition().duration(750).delay(250).attr("r",5).transition().duration(2e3).delay(250).attr("cy",function(t){return r(t)}),n.selectAll("circle").data(e).enter().append("circle").attr("cx",function(t,e){return a(e)}).attr("cy",s).attr("r",0).transition().duration(750).delay(1e3).attr("r",5).transition().duration(2e3).delay(250).attr("cy",function(t){return r(t)}),t=a};e.unshift(setTimeout(function(){e.pop(),d([10,2,7,4,50,20,42,24,6,4,36,8])},1e3)),e.unshift(setTimeout(function(){e.pop(),d([5,7,2,6,9])},5500)),e.unshift(setTimeout(function(){e.pop(),d([12,5,6,6,9,10])},1e4));var f=setInterval(function(){d([10,2,7,4,50,20,42,24,6,4,36,8]),e.unshift(setTimeout(function(){e.pop(),d([5,7,2,6,9])},4500)),e.unshift(setTimeout(function(){e.pop(),d([12,5,6,6,9,10])},9e3))},14500);return Object(a.useEffect)(function(){return function(){var e=[12,5,6,6,9,10],a=u.o("#lines-graph").attr("width",l+o+i).attr("height",s+n+c).append("g").attr("transform","translate(".concat(o,", ").concat(n,")")),r=u.n().domain([0,e.length-1]).range([0,l]);t=r;var d=u.n().domain([0,u.j(e)]).range([s,0]);a.append("g").attr("class","xAxis").attr("transform","translate(0, ".concat(s,")")).call(u.b(r).ticks(e.length)),a.append("g").attr("class","yAxis").call(u.c(d)),a.append("text").attr("text-anchor","end").attr("x",l).attr("y",s+n+20).text("X Axis"),a.append("text").attr("text-anchor","end").attr("transform","rotate(-90)").attr("y",20-o).attr("x",-n).text("Y Axis");var f=u.i().x(function(t,e){return r(e)}).y(function(t){return d(t)}).curve(u.e);a.append("path").datum(e).attr("class","line").attr("d",f).attr("fill","none").attr("stroke","black").attr("stroke-width",3),a.selectAll("circle").data(e).enter().append("circle").attr("cx",function(t,e){return r(e)}).attr("cy",function(t){return d(t)}).attr("r",5)}(),function(){f&&clearInterval(f),e.forEach(function(t){return clearTimeout(t)})}}),r.a.createElement("svg",{id:"lines-graph"})},k=function(t){var e=t.data,n=Object(a.useState)(function(){return function(){return null}}),i=Object(o.a)(n,2),c=i[0],l=i[1],s=Object(a.useState)([]),d=Object(o.a)(s,2),f=d[0],p=d[1],m=20,h=20,g=40,v=60,x=960-v-h,y=500-m-g;return Object(a.useEffect)(function(){var t=u.o("#lines-graph-interactive").attr("width",x+v+h).attr("height",y+m+g).append("g").attr("transform","translate(".concat(v,", ").concat(m,")")),e=u.n().domain(0).range([0,x]),n=u.n().domain(0).range([y,0]);t.append("g").attr("class","xAxis").attr("transform","translate(0, ".concat(y,")")).call(u.b(e)),t.append("g").attr("class","yAxis").call(u.c(n)),t.append("text").attr("text-anchor","end").attr("x",x).attr("y",y+m+20).text("X Axis"),t.append("text").attr("text-anchor","end").attr("transform","rotate(-90)").attr("y",20-v).attr("x",-m).text("Y Axis"),t.append("path").datum([]).attr("class","line").attr("fill","none").attr("stroke","black").attr("stroke-width",3)},[x,y,m,h,g,v]),Object(a.useEffect)(function(){if(!((s=e)===(d=f)||s.length===d.length&&s.every(function(t,e){return t===d[e]}))){p(e);var t=u.o("#lines-graph-interactive").select("g"),n=u.n().domain([0,e.length-1]).range([0,x]),a=u.n().domain([0,u.j(e)]).range([y,0]);t.select(".xAxis").transition().duration(1e3).delay(500).call(u.b(n).ticks(e.length)),t.select(".yAxis").transition().duration(2e3).delay(2e3).call(u.c(a));var r=u.i().x(function(t,e){return n(e)}).y(function(t){return a(t)}).curve(u.e),i=u.i().x(function(t,e){return c(e)}).y(y).curve(u.e),o=u.i().x(function(t,e){return n(e)}).y(y).curve(u.e);t.select(".line").transition().duration(1e3).attr("d",i).selection().datum(e).transition().duration(0).delay(1e3).attr("d",o).transition().duration(2e3).delay(1e3).attr("d",r),t.selectAll("circle").data(e).exit().transition().duration(750).attr("r",0).remove(),t.selectAll("circle").data(e).transition().duration(750).attr("r",0).selection().transition().duration(0).delay(750).attr("cx",function(t,e){return n(e)}).attr("cy",y).transition().duration(750).delay(250).attr("r",5).transition().duration(2e3).delay(250).attr("cy",function(t){return a(t)}),t.selectAll("circle").data(e).enter().append("circle").attr("cx",function(t,e){return n(e)}).attr("cy",y).attr("r",0).transition().duration(750).delay(1e3).attr("r",5).transition().duration(2e3).delay(250).attr("cy",function(t){return a(t)}),l(function(){return n})}var s,d},[y,x,e,f,c]),r.a.createElement("svg",{id:"lines-graph-interactive"})},T=function(){var t=["lines-static","lines-entrance","lines-animated","graph-static","graph-animated","graph-interactive"],e=Object(a.useState)(t[0]),n=Object(o.a)(e,2),i=n[0],c=n[1],u=Object(a.useState)([]),s=Object(o.a)(u,2),d=s[0],f=s[1],p=function(t){return"display-control-button".concat(t===i?" selected":"")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"display-control"},t.map(function(t){return r.a.createElement("button",{key:t,type:"button",className:p(t),value:t,onClick:function(){return c(t)}},l(t))})),r.a.createElement("hr",null),r.a.createElement("div",{className:"display-content"},function(){switch(i){case"lines-static":return r.a.createElement(E,null);case"lines-entrance":return r.a.createElement(j,null);case"lines-animated":return r.a.createElement(w,null);case"graph-static":return r.a.createElement(A,null);case"graph-animated":return r.a.createElement(O,null);case"graph-interactive":return r.a.createElement(k,{data:d});default:return r.a.createElement(E,null)}}()),r.a.createElement("hr",null),r.a.createElement(y,{shouldDisplay:"graph-interactive"===i,data:d,setData:f}))},I=function(){var t=20,e=20,n=40,i=60,c=480-i-e,o=500-t-n;return Object(a.useEffect)(function(){!function(){var a=[12,5,6,6,9,10],r=u.n().domain(u.f(a)).range(["#d1e2f3","#023858"]),l=u.o("#legend-static").attr("width",c+i+e).attr("height",o+t+n).append("g").attr("transform","translate(".concat(c/2,", ").concat(o/4,")")).selectAll(".legend").data(a).enter().append("g").attr("class","legend").attr("transform",function(t,e){return"translate(0, ".concat(30*e,")")});l.append("circle").attr("r",9).attr("fill",function(t){return r(t)}),l.append("text").attr("id",function(t,e){return"text-".concat(e)}).text(function(t){return t}).attr("x",15).attr("y",6).style("font-size","1.2rem").attr("font-weight","bold");var s=10,d=100-2-60,f=250-s-10,p=u.o("#legend-static-container").style("width","".concat(c+i+e,"px")).style("height","".concat(o+t+n,"px")).append("div").style("margin-left","".concat(c/2,"px")).style("margin-top","".concat(o/4-t,"px")).append("canvas").attr("width",1).attr("height",f).style("width","".concat(d,"px")).style("height","".concat(f,"px")).node().getContext("2d"),m=p.createLinearGradient(0,0,0,f);m.addColorStop(0,"#d1e2f3"),m.addColorStop(1,"#023858"),p.fillStyle=m,p.fillRect(0,0,d,f);var h=u.o("#legend-static-container div").append("svg").attr("width","".concat(100,"px")).attr("height","".concat(250,"px")).attr("transform","translate(0, ".concat(s,")")),g=u.n().range([1,f]).domain(r.domain()),v=u.d(g).tickSize(6).ticks(a.length);h.append("g").attr("class","axis").attr("transform","translate(0, ".concat(s-1,")")).call(v).select(".domain").attr("visibility","hidden")}()}),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("svg",{id:"legend-static"}),r.a.createElement("div",{id:"legend-static-container"}))},S=function(){var t=[],e=[],n=20,i=20,c=40,o=60,l=480-o-i,s=500-n-c,d=10,f=100-2-60,p=250-d-10,m=function(t){var n=u.n().domain(u.f(t)).range(["#d1e2f3","#023858"]),a=u.g(",d"),r=u.o("#legend-animated").select("g");r.selectAll(".legend").data(t).exit().select("circle").transition().duration(2e3).attr("cx",-25).style("opacity",0).remove(),r.selectAll(".legend").data(t).exit().select("text").transition().duration(2e3).attr("x",-10).style("opacity",0).remove(),r.selectAll(".legend").data(t).exit().transition().duration(0).delay(2e3).remove(),r.selectAll(".legend").data(t).select("circle").transition().duration(2e3).attr("fill",function(t){return n(t)}),r.selectAll(".legend").data(t).select("text").transition().duration(2e3).tween("text",function(t,n){var r=u.h(e[n],t);e[n]=t;var i=u.o("#text-".concat(n));return function(t){return i.text(a(r(t)))}});var i=r.selectAll(".legend").data(t).enter().append("g").attr("class","legend").attr("transform",function(t,e){return"translate(0, ".concat(30*e,")")});i.append("circle").attr("r",9).attr("fill",function(t){return n(t)}).attr("cx",-25).style("opacity",0).transition().duration(2e3).attr("cx",0).style("opacity",1),i.append("text").attr("id",function(t,e){return"text-".concat(e)}).text(function(t,n){return e[n]=t,t}).attr("x",-10).attr("y",6).style("font-size","1.2rem").style("opacity",0).attr("font-weight","bold").transition().duration(2e3).attr("x",15).style("opacity",1);var c=u.o("#legend-animated-container div").select("svg"),o=u.n().range([1,p]).domain(n.domain()).nice(),l=u.d(o).tickSize(6).ticks(t.length);c.select(".axis").transition().duration(2e3).call(l)};t.unshift(setTimeout(function(){t.pop(),m([10,2,7,4,50,20,42,24,6,4,36,8])},1e3)),t.unshift(setTimeout(function(){t.pop(),m([5,7,2,6,9])},4e3)),t.unshift(setTimeout(function(){t.pop(),m([12,5,6,6,9,10])},7e3));var h=setInterval(function(){m([10,2,7,4,50,20,42,24,6,4,36,8]),t.unshift(setTimeout(function(){t.pop(),m([5,7,2,6,9])},3e3)),t.unshift(setTimeout(function(){t.pop(),m([12,5,6,6,9,10])},6e3))},9500);return Object(a.useEffect)(function(){return function(){var t=[12,5,6,6,9,10];e=t;var a=u.n().domain(u.f(t)).range(["#d1e2f3","#023858"]),r=u.o("#legend-animated").attr("width",l+o+i).attr("height",s+n+c).append("g").attr("transform","translate(".concat(l/2,", ").concat(s/4,")")).selectAll(".legend").data(t).enter().append("g").attr("class","legend").attr("transform",function(t,e){return"translate(0, ".concat(30*e,")")});r.append("circle").attr("r",9).attr("fill",function(t){return a(t)}),r.append("text").attr("id",function(t,e){return"text-".concat(e)}).text(function(t){return t}).attr("x",15).attr("y",6).style("font-size","1.2rem").attr("font-weight","bold");var m=u.o("#legend-animated-container").style("width","".concat(l+o+i,"px")).style("height","".concat(s+n+c,"px")).append("div").style("margin-left","".concat(l/2,"px")).style("margin-top","".concat(s/4-n,"px")).append("canvas").attr("width",1).attr("height",p).style("width","".concat(f,"px")).style("height","".concat(p,"px")).node().getContext("2d"),h=m.createLinearGradient(0,0,0,p);h.addColorStop(0,"#d1e2f3"),h.addColorStop(1,"#023858"),m.fillStyle=h,m.fillRect(0,0,f,p);var g=u.o("#legend-animated-container div").append("svg").attr("width","".concat(100,"px")).attr("height","".concat(250,"px")).attr("transform","translate(0, ".concat(d,")")),v=u.n().range([1,p]).domain(a.domain()).nice(),x=u.d(v).tickSize(6).ticks(t.length);g.append("g").attr("class","axis").attr("transform","translate(0, ".concat(d-1,")")).call(x).select(".domain").attr("visibility","hidden")}(),function(){h&&clearInterval(h),t.forEach(function(t){return clearTimeout(t)})}}),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("svg",{id:"legend-animated"}),r.a.createElement("div",{id:"legend-animated-container"}))},C=function(){var t=20,e=20,n=40,i=60,c=960-i-e,o=500-t-n;return Object(a.useEffect)(function(){!function(){var a=[12,5,6,6,9,10],r=Math.min(c,o)/2-20,l=u.o("#pie-static").attr("width",c+i+e).attr("height",o+t+n).append("g").attr("transform","translate(".concat(c/2+i,", ").concat(o/2+t,")")),s=u.n().domain(u.f(a)).range(["#d1e2f3","#023858"]),d=u.k().value(function(t){return t}).sort(null)(a);l.selectAll("slices").data(d).enter().append("path").attr("d",u.a().innerRadius(0).outerRadius(r)).attr("fill",function(t){return s(t.value)}).attr("stroke","black").style("stroke-width","2px").style("opacity",.7)}()}),r.a.createElement("svg",{id:"pie-static"})},P=n(4);function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(n,!0).forEach(function(e){Object(P.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var N=function(){var t=[],e=20,n=20,i=40,c=60,o=960-c-n,l=500-e-i,s=[],d=Math.min(o,l)/2-20,f=2*Math.PI,p=u.a().innerRadius(0).outerRadius(d),m=u.k().value(function(t){return t}).sort(null),h=function(t,e){var n=u.h(s[e],t);return s[e]=n(1),function(t){return p(n(t))}},g=function(t){var e=R({},t,{startAngle:f,endAngle:f}),n=u.h(t,e);return function(t){return p(n(t))}},v=function(t){var e=u.o("#pie-animated").select("g"),n=u.n().domain(u.f(t)).range(["#d1e2f3","#023858"]),a=m(t);e.selectAll(".slice").data(a).exit().transition().duration(2e3).attrTween("d",g).attr("fill","#d1e2f3").remove(),e.selectAll(".slice").data(a).transition().duration(2e3).attrTween("d",h).attr("fill",function(t){return n(t.value)}),e.selectAll(".slice").data(a).enter().append("path").attr("class","slice").attr("d",function(t){return s[t.index]=R({},t,{startAngle:f,endAngle:f}),p(s[t.index])}).attr("fill","#d1e2f3").attr("stroke","black").style("stroke-width","2px").style("opacity",.7).transition().duration(2e3).attrTween("d",h).attr("fill",function(t){return n(t.value)})};t.unshift(setTimeout(function(){t.pop(),v([10,2,7,4,50,20,42,24,6,4,36,8])},1e3)),t.unshift(setTimeout(function(){t.pop(),v([5,7,2,6,9])},4e3)),t.unshift(setTimeout(function(){t.pop(),v([12,5,6,6,9,10])},7e3));var x=setInterval(function(){v([10,2,7,4,50,20,42,24,6,4,36,8]),t.unshift(setTimeout(function(){t.pop(),v([5,7,2,6,9])},3e3)),t.unshift(setTimeout(function(){t.pop(),v([12,5,6,6,9,10])},6e3))},9500);return Object(a.useEffect)(function(){return function(){var t=[12,5,6,6,9,10],a=u.o("#pie-animated").attr("width",o+c+n).attr("height",l+e+i).append("g").attr("transform","translate(".concat(o/2+c,", ").concat(l/2+e,")")),r=u.n().domain(u.f(t)).range(["#d1e2f3","#023858"]);a.selectAll(".slice").data(m(t)).enter().append("path").attr("class","slice").attr("d",p).each(function(t){s[t.index]=t}).attr("fill",function(t){return r(t.value)}).attr("stroke","black").style("stroke-width","2px").style("opacity",.7)}(),function(){x&&clearInterval(x),t.forEach(function(t){return clearTimeout(t)})}}),r.a.createElement("svg",{id:"pie-animated"})};function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function X(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(n,!0).forEach(function(e){Object(P.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var Y=function(t){var e=t.data,n=20,i=20,c=40,l=60,s=960-l-i,d=500-n-c,f=Object(a.useState)([]),p=Object(o.a)(f,1)[0],m=Math.min(s,d)/2-20,h=2*Math.PI,g=u.a().innerRadius(0).outerRadius(m),v=u.k().value(function(t){return t}).sort(null),x=Object(a.useCallback)(function(t,e){var n=u.h(p[e],t);return p[e]=n(1),function(t){return g(n(t))}},[g,p]),y=Object(a.useCallback)(function(t){var e=X({},t,{startAngle:h,endAngle:h}),n=u.h(t,e);return function(t){return g(n(t))}},[g,h]);return Object(a.useEffect)(function(){u.o("#pie-interactive").attr("width",s+l+i).attr("height",d+n+c).append("g").attr("transform","translate(".concat(s/2+l,", ").concat(d/2+n,")"))},[d,s,n,i,c,l]),Object(a.useEffect)(function(){var t=u.o("#pie-interactive").select("g"),n=u.n().domain(u.f(e)).range(["#d1e2f3","#023858"]),a=v(e);t.selectAll(".slice").data(a).exit().transition().duration(2e3).attrTween("d",y).attr("fill","#d1e2f3").remove(),t.selectAll(".slice").data(a).transition().duration(2e3).attrTween("d",x).attr("fill",function(t){return n(t.value)}),t.selectAll(".slice").data(a).enter().append("path").attr("class","slice").attr("d",function(t){return p[t.index]=X({},t,{startAngle:h,endAngle:h}),g(p[t.index])}).attr("fill","#d1e2f3").attr("stroke","black").style("stroke-width","2px").style("opacity",.7).transition().duration(2e3).attrTween("d",x).attr("fill",function(t){return n(t.value)})},[e,g,x,y,p,h,v]),r.a.createElement("svg",{id:"pie-interactive"})},z=function(){var t=["legend-static","legend-animated","pie-static","pie-animated","pie-interactive"],e=Object(a.useState)(t[0]),n=Object(o.a)(e,2),i=n[0],c=n[1],u=Object(a.useState)([]),s=Object(o.a)(u,2),d=s[0],f=s[1],p=function(t){return"display-control-button".concat(t===i?" selected":"")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"display-control"},t.map(function(t){return r.a.createElement("button",{key:t,type:"button",className:p(t),value:t,onClick:function(){return c(t)}},l(t))})),r.a.createElement("hr",null),r.a.createElement("div",{className:"display-content"},function(){switch(i){case"legend-static":return r.a.createElement(I,null);case"legend-animated":return r.a.createElement(S,null);case"pie-static":return r.a.createElement(C,null);case"pie-animated":return r.a.createElement(N,null);case"pie-interactive":return r.a.createElement(Y,{data:d});default:return r.a.createElement(I,null)}}()),r.a.createElement("hr",null),r.a.createElement(y,{shouldDisplay:"pie-interactive"===i,data:d,setData:f}))},L=function(){var t=["bar-chart","line-graph","pie-chart"],e=Object(a.useState)(t[0]),n=Object(o.a)(e,2),i=n[0],c=n[1],u=function(t){return"display-control-button main-chart-control".concat(t===i?" selected":"")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"display-container"},function(){switch(i){case"bar-chart":return r.a.createElement(b,null);case"line-graph":return r.a.createElement(T,null);case"pie-chart":return r.a.createElement(z,null);default:return r.a.createElement(b,null)}}()),r.a.createElement("div",{className:"graph-control"},t.map(function(t){return r.a.createElement("button",{key:t,type:"button",className:u(t),value:t,onClick:function(){return c(t)}},l(t))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.22d69bcc.chunk.js.map