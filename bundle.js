!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e,n){"use strict";function i(t,e){if(null!==t&&void 0!==t)if("string"==typeof t||"number"==typeof t)e.push(t.toString());else if(Array.isArray(t))for(var n=0;n<t.length;n++)i(t[n],e);else e.push(t)}function r(t,e){for(var n=[],r=arguments.length,a=Array(r>2?r-2:0),c=2;c<r;c++)a[c-2]=arguments[c];return i(a,n),"function"==typeof t?t(o({},e,{children:n})):{tag:t,props:e,children:n}}e.a=r;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}},function(t,e,n){"use strict";function i(t,e){return t.setDate(t.getDate()+e),t}function r(t,e){var n=[],r=new Date(t);for(r.setHours(24,0,0,0);r.getTime()<=e;)n.push(r.getTime()),i(r,1);return n}function o(t,e,n){return s=s||document.createElement("canvas").getContext("2d"),s.font=e,s.measureText(t).width+n}function a(t){var e=t.getFullYear(),n=t.getMonth()+1;return e+"/"+(n>9?n:"0"+n)}function c(t){return t.getMonth()+1+"/"+t.getDate()}function l(t){var e=[];return t.forEach(function(t){var n=Math.min.apply(null,t.children.map(function(t){return t.from})),i=Math.max.apply(null,t.children.map(function(t){return t.to})),r=t.children.reduce(function(t,e){return t+e.percent},0);t.children.length&&(r/=t.children.length),e.push({id:t.id,group:!0,name:t.name,from:n,to:i,percent:r}),t.children.forEach(function(t){e.push({id:t.id,name:t.name,from:t.from.getTime(),to:t.to.getTime(),percent:t.percent})})}),e}n.d(e,"a",function(){return u}),e.b=i,e.f=r,e.g=o,e.e=a,e.d=c,e.c=l;var u=864e5,s=null},function(t,e,n){"use strict";function i(){}function r(t){var e=t.data,n=void 0===e?[]:e,r=t.onClick,a=void 0===r?i:r,v=t.viewMode,b=void 0===v?"week":v,x=t.maxTextWidth,O=void 0===x?140:x,j=t.offsetY,w=void 0===j?60:j,k=t.rowHeight,T=void 0===k?40:k,D=t.barHeight,S=void 0===D?16:D,W=t.thickWidth,C=void 0===W?1.4:W,H=t.footerHeight,P=void 0===H?50:H,M=t.legends,Y=void 0===M?p:M,E=t.styleOptions,B=void 0===E?{}:E,q=m[b],A=Math.min.apply(null,n.map(function(t){return t.from}))-40*q,F=Math.max.apply(null,n.map(function(t){return t.to}))+40*q,R=(F-A)/q+O,z=n.length*T+w+P,L="0 0 "+R+" "+z,$=(new Date).getTime(),N=Object(y.a)(B);return Object(o.a)("svg",{width:R,height:z,viewBox:L},Object(o.a)(c.a,{styles:N,width:R,height:z,offsetY:w,thickWidth:C,maxTextWidth:O}),"day"===b?Object(o.a)(l.a,{styles:N,unit:q,height:z,offsetY:w,minTime:A,maxTime:F,maxTextWidth:O,footerHeight:P}):null,"week"===b?Object(o.a)(u.a,{styles:N,unit:q,height:z,offsetY:w,minTime:A,maxTime:F,maxTextWidth:O,footerHeight:P}):null,"month"===b?Object(o.a)(s.a,{styles:N,unit:q,offsetY:w,minTime:A,maxTime:F,maxTextWidth:O,footerHeight:P}):null,Object(o.a)(f.a,{styles:N,data:n,width:R,height:z,offsetY:w,rowHeight:T,thickWidth:C,footerHeight:P,maxTextWidth:O}),Object(o.a)(h.a,{styles:N,data:n,offsetY:w,rowHeight:T}),Object(o.a)(d.a,{styles:N,data:n,unit:q,height:z,current:$,offsetY:w,minTime:A,onClick:a,rowHeight:T,barHeight:S,maxTextWidth:O,footerHeight:P}),Object(o.a)(g.a,{styles:N,legends:Y,width:R,height:z,barHeight:S,footerHeight:P}))}e.a=r;var o=n(0),a=n(1),c=n(8),l=n(9),u=n(10),s=n(11),f=n(13),h=n(14),d=n(15),g=n(16),y=n(3),p=[{type:"bar",name:"Planning"},{type:"green",name:"Actual"},{type:"red",name:"Delay"}],m={day:a.a/28,week:7*a.a/56,month:30*a.a/56}},function(t,e,n){"use strict";function i(t){var e=t.fontSize,n=void 0===e?a:e,i=t.fontFamily;return"bold "+n+" "+(void 0===i?c:i)}function r(t){var e=t.BG,n=void 0===e?"#fff":e,i=t.groupBG,r=void 0===i?"#f5f5f5":i,l=t.lineColor,u=void 0===l?"#eee":l,s=t.redLineColor,f=void 0===s?"#f04134":s,h=t.baseBar,d=void 0===h?"#b8c2cc":h,g=t.greenBar,y=void 0===g?"#00a854":g,p=t.redBar,m=void 0===p?"#f04134":p,v=t.textColor,b=void 0===v?"#222":v,x=t.lightTextColor,O=void 0===x?"#999":x,j=t.lineWidth,w=void 0===j?"1px":j,k=t.thickLineWidth,T=void 0===k?"1.4px":k,D=t.fontSize,S=void 0===D?a:D,W=t.smallFontSize,C=void 0===W?"12px":W,H=t.fontFamily,P=void 0===H?c:H,M={stroke:u,"stroke-width":w},Y={stroke:f,"stroke-width":w},E={stroke:u,"stroke-width":T},B={fill:b,"dominant-baseline":"central","font-size":S,"font-family":P},q={fill:O,"font-size":C};return{week:{fill:"rgba(252, 248, 227, .6)"},box:o({},E,{fill:n}),line:M,cline:Y,bline:E,group:{fill:r},label:B,groupLabel:o({},B,{"font-weight":"600"}),text1:o({},B,q,{"text-anchor":"end"}),text2:o({},B,q),text3:o({},B,q,{"text-anchor":"middle"}),bar:{fill:d},green:{fill:y},red:{fill:m}}}e.b=i,e.a=r;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a="14px",c='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},function(t,e,n){"use strict";function i(t){var e=t.styles,n=t.dates,i=t.unit,a=t.offsetY,c=t.minTime,l=t.maxTime,u=t.maxTextWidth,s=n.filter(function(t){return 1===new Date(t).getDate()});s.unshift(c),s.push(l);for(var f=[],h=u,d=a/2,g=s.length-1,y=0;y<g;y++){var p=new Date(s[y]),m=Object(o.e)(p),v=h+(s[y]-c)/i,b=(s[y+1]-s[y])/i;f.push(Object(r.a)("g",null,Object(r.a)("line",{x1:v,x2:v,y1:0,y2:d,style:e.line}),b>50?Object(r.a)("text",{x:v+b/2,y:.25*a,style:e.text3},m):null))}return Object(r.a)("g",null,f)}e.a=i;var r=n(0),o=n(1)},function(t,e,n){"use strict";function i(){document.querySelector("#str").textContent=a(h.render())}function r(t){s.setOptions({viewMode:t}),f.setOptions({viewMode:t}),h.setOptions({viewMode:t}),i()}function o(t){var e=void 0,n=void 0;return t?(n=60*Math.random()+5,e=new Date(t)):(n=60*Math.random()-60,e=new Date),e.setDate(e.getDate()+n),e}function a(t){var e=/(>)\s*(<)(\/*)/g,n=/ *(.*) +\n/g,i=/(<.+>)(.+\n)/g;t=t.replace(e,"$1\n$2$3").replace(n,"$1\n").replace(i,"$1\n$2");for(var r="",o=t.split("\n"),a=0,c="other",l={"single->single":0,"single->closing":-1,"single->opening":0,"single->other":0,"closing->single":0,"closing->closing":-1,"closing->opening":0,"closing->other":0,"opening->single":1,"opening->closing":0,"opening->opening":1,"opening->other":1,"other->single":0,"other->closing":-1,"other->opening":0,"other->other":0},u=0;u<o.length;u++){var s=o[u];if(s.match(/\s*<\?xml/))r+=s+"\n";else{var f=Boolean(s.match(/<.+\/>/)),h=Boolean(s.match(/<\/.+>/)),d=Boolean(s.match(/<[^!].*>/)),g=f?"single":h?"closing":d?"opening":"other",y=c+"->"+g;c=g;var p="";a+=l[y];for(var m=0;m<a;m++)p+="  ";"opening->closing"==y?r=r.substr(0,r.length-1)+s+"\n":r+=p+s+"\n"}}return r}Object.defineProperty(e,"__esModule",{value:!0});var c=n(6),l=function(){var t=[{id:1,name:"Waterfall model",collapse:!1,children:[{id:11,name:"Requirements"},{id:12,name:"Design"},{id:13,name:"Implement"},{id:14,name:"Verification"}]},{id:2,name:"Development",collapse:!1,children:[{id:21,name:"Preliminary"},{id:22,name:"Systems design"},{id:23,name:"Development"},{id:24,name:"Integration"}]}];return t.forEach(function(t){t.children.forEach(function(t){t.from=o(),t.to=o(t.from),t.percent=Math.random()})}),t}(),u={viewMode:"week",onClick:function(t){return console.log(t)}},s=new c.b("#svg",l,u),f=new c.a("#canvas",l,u),h=new c.c(l,u);i(),document.querySelector("#viewMode").onchange=function(t){return r(t.target.value)}},function(t,e,n){"use strict";var i=n(7),r=n(18),o=n(21);n.d(e,"b",function(){return i.a}),n.d(e,"a",function(){return r.a}),n.d(e,"c",function(){return o.a});r.a},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=n(0),o=n(2),a=n(17),c=n(3),l=n(1),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),f=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};i(this,t),this.dom="string"==typeof e?document.querySelector(e):e,this.data=Object(l.c)(n),this.options=r,this.render()}return s(t,[{key:"setData",value:function(t){this.data=Object(l.c)(t),this.render()}},{key:"setOptions",value:function(t){this.options=u({},this.options,t),this.render()}},{key:"render",value:function(){var t=this.data,e=this.options;if(this.tree&&this.dom.removeChild(this.tree),!e.maxTextWidth){var n=Object(c.b)(e.styleOptions||{});e.maxTextWidth=Math.max.apply(null,t.map(function(t){return Object(l.g)(t.name,n,20)}))}this.tree=Object(a.a)(Object(r.a)(o.a,u({data:t},e))),this.dom.appendChild(this.tree)}}]),t}();e.a=f},function(t,e,n){"use strict";function i(t){var e=t.styles,n=t.width,i=t.height,o=t.offsetY,a=t.thickWidth,c=t.maxTextWidth,l=a/2,u=n-a,s=i-a;return Object(r.a)("g",null,Object(r.a)("rect",{x:l,y:l,width:u,height:s,style:e.box}),Object(r.a)("line",{x1:0,x2:n,y1:o-l,y2:o-l,style:e.bline}),Object(r.a)("line",{x1:c,x2:n,y1:o/2,y2:o/2,style:e.line}))}e.a=i;var r=n(0)},function(t,e,n){"use strict";function i(t){for(var e=t.styles,n=t.unit,i=t.minTime,c=t.maxTime,l=t.height,u=t.offsetY,s=t.maxTextWidth,f=t.footerHeight,h=Object(o.f)(i,c),d=[],g=s,y=u/2,p=l-y-f,m=h.length-1,v=0;v<m;v++){var b=new Date(h[v]),x=b.getDay(),O=g+(h[v]-i)/n,j=(h[v+1]-h[v])/n;d.push(Object(r.a)("g",null,0===x||6===x?Object(r.a)("rect",{x:O,y:y,width:j,height:p,style:e.week}):null,Object(r.a)("line",{x1:O,x2:O,y1:y,y2:u,style:e.line}),Object(r.a)("text",{x:O+j/2,y:.75*u,style:e.text3},b.getDate()),v===m-1?Object(r.a)("line",{x1:O+j,x2:O+j,y1:y,y2:u,style:e.line}):null))}return Object(r.a)("g",null,Object(r.a)(a.a,{styles:e,unit:n,dates:h,offsetY:u,minTime:i,maxTime:c,maxTextWidth:s}),d)}e.a=i;var r=n(0),o=n(1),a=n(4)},function(t,e,n){"use strict";function i(t){var e=t.styles,n=t.unit,i=t.minTime,c=t.maxTime,l=t.height,u=t.offsetY,s=t.maxTextWidth,f=t.footerHeight,h=Object(o.f)(i,c),d=h.filter(function(t){return 0===new Date(t).getDay()});d.push(c);for(var g=[],y=s,p=u/2,m=l-p-f,v=o.a/n,b=d.length-1,x=0;x<b;x++){var O=new Date(d[x]),j=y+(d[x]-i)/n,w=O.getDate(),k=Object(o.b)(O,-1).getDate();g.push(Object(r.a)("g",null,Object(r.a)("rect",{x:j-v,y:p,width:2*v,height:m,style:e.week}),Object(r.a)("line",{x1:j,x2:j,y1:p,y2:u,style:e.line}),Object(r.a)("text",{x:j+3,y:.75*u,style:e.text2},w),j-y>28?Object(r.a)("text",{x:j-3,y:.75*u,style:e.text1},k):null))}return Object(r.a)("g",null,Object(r.a)(a.a,{styles:e,unit:n,dates:h,offsetY:u,minTime:i,maxTime:c,maxTextWidth:s}),g)}e.a=i;var r=n(0),o=n(1),a=n(4)},function(t,e,n){"use strict";function i(t){var e=t.styles,n=t.unit,i=t.minTime,c=t.maxTime,l=t.offsetY,u=t.maxTextWidth,s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],f=Object(o.f)(i,c),h=f.filter(function(t){return 1===new Date(t).getDate()});h.unshift(i),h.push(c);for(var d=[],g=u,y=l/2,p=h.length-1,m=0;m<p;m++){var v=new Date(h[m]),b=v.getMonth(),x=g+(h[m]-i)/n,O=(h[m+1]-h[m])/n;d.push(Object(r.a)("g",null,Object(r.a)("line",{x1:x,x2:x,y1:y,y2:l,style:e.line}),O>30?Object(r.a)("text",{x:x+O/2,y:.75*l,style:e.text3},s[b]):null))}return Object(r.a)("g",null,Object(r.a)(a.a,{styles:e,unit:n,months:h,offsetY:l,minTime:i,maxTime:c,maxTextWidth:u}),d)}e.a=i;var r=n(0),o=n(1),a=n(12)},function(t,e,n){"use strict";function i(t){var e=t.styles,n=t.months,i=t.unit,o=t.offsetY,a=t.minTime,c=t.maxTime,l=t.maxTextWidth,u=n.filter(function(t){return 0===new Date(t).getMonth()});u.unshift(a),u.push(c);for(var s=[],f=l,h=o/2,d=u.length-1,g=0;g<d;g++){var y=new Date(u[g]),p=f+(u[g]-a)/i,m=(u[g+1]-u[g])/i;s.push(Object(r.a)("g",null,Object(r.a)("line",{x1:p,x2:p,y1:0,y2:h,style:e.line}),m>35?Object(r.a)("text",{x:p+m/2,y:.25*o,style:e.text3},y.getFullYear()):null))}return Object(r.a)("g",null,s)}e.a=i;var r=n(0)},function(t,e,n){"use strict";function i(t){var e=t.styles,n=t.data,i=t.width,o=t.height,a=t.offsetY,c=t.thickWidth,l=t.rowHeight,u=t.footerHeight,s=t.maxTextWidth,f=i-2*c,h=o-u;return Object(r.a)("g",null,n.map(function(t,n){if(!t.group)return null;var i=n*l+a;return Object(r.a)("rect",{x:c,y:i,width:f,height:l,style:e.group})}),n.map(function(t,n){var o=(n+1)*l+a;return Object(r.a)("line",{key:n,x1:0,x2:i,y1:o,y2:o,style:e.line})}),Object(r.a)("line",{x1:s,x2:s,y1:0,y2:h,style:e.bline}))}e.a=i;var r=n(0)},function(t,e,n){"use strict";function i(t){var e=t.styles,n=t.data,i=t.rowHeight,o=t.offsetY;return Object(r.a)("g",null,n.map(function(t,n){return Object(r.a)("text",{key:n,x:10,y:(n+.5)*i+o,style:t.group?e.groupLabel:e.label},t.name)}))}e.a=i;var r=n(0)},function(t,e,n){"use strict";function i(t){var e=t.styles,n=t.data,i=t.unit,a=t.height,c=t.offsetY,l=t.minTime,u=t.rowHeight,s=t.barHeight,f=t.footerHeight,h=t.maxTextWidth,d=t.current,g=t.onClick,y=h,p=(u-s)/2+c,m=y+(d-l)/i;return Object(r.a)("g",null,Object(r.a)("line",{x1:m,x2:m,y1:c,y2:a-f,style:e.cline}),n.map(function(t,n){var a=(t.to-t.from)/i,c=a*t.percent,f=y+(t.from-l)/i,h=p+n*u,d=h+s/2,v="green";f+c<m&&t.percent<.999999&&(v="red");var b=function(){return g(t)};return Object(r.a)("g",{key:n,style:{cursor:"pointer"},onClick:b},Object(r.a)("text",{x:f-4,y:d,style:e.text1},Object(o.d)(new Date(t.from))),Object(r.a)("text",{x:f+a+4,y:d,style:e.text2},Object(o.d)(new Date(t.to))),Object(r.a)("rect",{x:f,y:h,width:a,height:s,rx:1.8,ry:1.8,style:e.bar,onClick:b}),c>1e-6?Object(r.a)("rect",{x:f,y:h,width:c,height:s,rx:1.8,ry:1.8,style:e[v]}):null)}))}e.a=i;var r=n(0),o=n(1)},function(t,e,n){"use strict";function i(t){var e=t.styles,n=t.legends,i=t.width,o=t.height,a=t.barHeight,c=t.footerHeight,l=n.length;return Object(r.a)("g",null,n.map(function(t,n){var u=(i-100*l)/2+100*n,s=o-c/2,f=s-a/2;return Object(r.a)("g",{key:n},Object(r.a)("rect",{x:u,y:f,width:a,height:a,style:e[t.type]}),Object(r.a)("text",{x:u+a+10,y:s,style:e.label},t.name))}))}e.a=i;var r=n(0)},function(t,e,n){"use strict";function i(t,e){Object.keys(e).forEach(function(n){var i=e[n];"style"===n&&"object"===(void 0===i?"undefined":o(i))?Object.keys(i).forEach(function(e){t.style[e]=i[e]}):"onClick"===n?"function"==typeof i&&"g"===t.tagName&&t.addEventListener("click",i):t.setAttribute(n,i)})}function r(t,e){var n=t.tag,o=t.props,l=t.children,u=c.createElementNS(a,n);return o&&i(u,o),l.forEach(function(t){u.appendChild("string"==typeof t?c.createTextNode(t):r(t,e))}),u}e.a=r;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a="http://www.w3.org/2000/svg",c=document},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=n(0),o=n(2),a=n(19),c=n(20),l=n(3),u=n(1),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},f=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),h=function(){function t(e,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};i(this,t),this.ctx=Object(c.a)(e),this.data=Object(u.c)(n),this.options=o,this.render(),this.ctx.onClick=function(t){return r.render(t)}}return f(t,[{key:"setData",value:function(t){this.data=Object(u.c)(t),this.render()}},{key:"setOptions",value:function(t){this.options=s({},this.options,t),this.render()}},{key:"render",value:function(t){var e=this.data,n=this.options;if(!n.maxTextWidth){var i=Object(l.b)(n.styleOptions||{});n.maxTextWidth=Math.max.apply(null,e.map(function(t){return Object(u.g)(t.name,i,20)}))}Object(a.a)(Object(r.a)(o.a,s({data:e},n)),this.ctx,t)}}]),t}();e.a=h},function(t,e,n){"use strict";function i(t,e,n){var r=t.tag,o=t.props,a=t.children;if("svg"===r){var c=o.width,l=o.height;e.width=c,e.height=l}if("line"===r){var u=o.x1,s=o.x2,f=o.y1,h=o.y2,d=o.style,g=void 0===d?{}:d;g.stroke&&(e.strokeStyle=g.stroke,e.lineWidth=parseFloat(g["stroke-width"]||1)),e.beginPath(),e.moveTo(u,f),e.lineTo(s,h),e.stroke()}if("rect"===r){var y=o.x,p=o.y,m=o.width,v=o.height,b=o.rx,x=void 0===b?0:b,O=o.ry,j=void 0===O?0:O,w=o.onClick,k=o.style,T=void 0===k?{}:k;e.beginPath(),e.moveTo(y+x,p),e.lineTo(y+m-x,p),e.quadraticCurveTo(y+m,p,y+m,p+j),e.lineTo(y+m,p+v-j),e.quadraticCurveTo(y+m,p+v,y+m-x,p+v),e.lineTo(y+x,p+v),e.quadraticCurveTo(y,p+v,y,p+v-j),e.lineTo(y,p+j),e.quadraticCurveTo(y,p,y+x,p),n&&w&&e.isPointInPath(n.x,n.y)&&w(),e.closePath(),T.fill&&(e.fillStyle=T.fill),e.fill(),T.stroke&&(e.strokeStyle=T.stroke,e.lineWidth=parseFloat(T["stroke-width"]||1),e.stroke())}if("text"===r){var D=o.x,S=o.y,W=o.style;if(W){e.fillStyle=W.fill;var C={central:"middle",middle:"middle",hanging:"hanging",alphabetic:"alphabetic",ideographic:"ideographic"},H={start:"start",middle:"center",end:"end"};e.textBaseline=C[W["dominant-baseline"]]||"alphabetic",e.textAlign=H[W["text-anchor"]]||"start",e.font=(W["font-weight"]||"")+" "+W["font-size"]+" "+W["font-family"]}e.fillText(a.join(""),D,S)}a.forEach(function(t){"string"!=typeof t&&i(t,e,n)})}e.a=i},function(t,e,n){"use strict";function i(t){var e="string"==typeof t?document.querySelector(t):t,n=e.getContext("2d"),i=n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1,r=(window.devicePixelRatio||1)/i;return["width","height"].forEach(function(t){Object.defineProperty(n,t,{get:function(){return e[t]/r},set:function(i){e[t]=i*r,e.style[t]=i+"px",n.scale(r,r)},enumerable:!0,configurable:!0})}),e.addEventListener("click",function(t){if(n.onClick){var i=e.getBoundingClientRect();n.onClick({x:(t.clientX-i.left)*r,y:(t.clientY-i.top)*r})}}),n}e.a=i},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=n(0),o=n(2),a=n(22),c=n(1),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,t),this.data=Object(c.c)(e),this.options=n}return u(t,[{key:"setData",value:function(t){this.data=Object(c.c)(t)}},{key:"setOptions",value:function(t){this.options=l({},this.options,t)}},{key:"render",value:function(){var t=this.data,e=this.options;return Object(a.a)(Object(r.a)(o.a,l({data:t},e)))}}]),t}();e.a=s},function(t,e,n){"use strict";function i(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;")}function r(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;")}function o(t,e){var n=t.tag,c=t.props,l=t.children,u=[];return u.push("<"+n),Object.keys(c||{}).forEach(function(t){var e=c[t];"onClick"!==t&&("style"===t&&"object"===(void 0===e?"undefined":a(e))&&(e=Object.keys(e).map(function(t){return t+":"+e[t]+";"}).join("")),u.push(" "+t+'="'+i(e)+'"'))}),l&&l.length?(u.push(">"),l.forEach(function(t){"string"==typeof t?u.push(r(t)):u.push(o(t,e))}),u.push("</"+n+">"),u.join("")):(u.push(" />"),u.join(""))}e.a=o;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}]);