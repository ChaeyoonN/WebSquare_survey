"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[789],{6789:(t,e,i)=>{i.r(e),i.d(e,{mapchart:()=>p});var o=i(2981),r=i(2085),s=i(1960),a=i(3082),n=i(9304),l=i(6615),p=function(t,e,i){l.s.call(this,t,e,i)};p.prototype.initAsync=async function(){p.isImported||(await inquires("externalJS/mapchart/d3.min.js"),await inquires("externalJS/mapchart/topojson.min.js"),await inquires("externalJS/mapchart/textures.min.js"),p.isImported=!0)},o.x.extend(p.prototype,l.s.prototype),p.prototype.defaultOptions={pluginType:"uiplugin.mapchart",pluginName:"mapchart",useConfig:!0,userEvents:["onbeforemapchange","onaftermapchange","onmapmouseover","onmapmouseout","onmapclick","onmapdblclick","onmapmousemove","onmapdatachange"],dataMapPath:"",dataMapRatio_level0:"simp1",dataMapRatio_level1:"simp1",dataMapRatio_level2:"simp1",startMap:"0",dataLists:"",zoomMin:"0.2",zoomMax:"5",maxDepth:-1,usePattern:!0,useMarker:!1,markerPositionX:0,markerPositionY:0,markerImage:"",contextFormatter:"",markerDefiner:"",markerClassDefiner:"",showMunicipalityLabel:!0,setTooltipStrFunc:"",event_drillup:"oncontextmenu",event_drilldown:"onclick",event_select:"onmouseover",event_deselect:"onmouseout",event_tooltipon:"onmouseover",event_tooltipoff:"onmouseout",event_zoom:"onzoom",event_drag:"ondrag",accessibility:!1},p.prototype.initialize=function(t){try{if(!this.options.dataMapPath){var e=location.pathname.lastIndexOf("/");this.options.dataMapPath=e>=0?location.pathname.slice(0,e)+"/_websquare_/externalJS/mapchart":"/_websquare_/externalJS/mapchart"}this.currentMap="",this._dataListsObj={},this._load=!1,this.patternList=[],this._colorScales={}}catch(t){r.w.printStackTrace(t)}},p.prototype.toHTML=function(){try{var t=[],e=""==this.options.style?"":"style='"+this.options.style+"'";return t.push("<div id='"+this.id+"' "+e+" class='w2mapchart "+this.options.className+"'>"),t.push("<div id='"+this.id+"_tooltip' class='w2mapchart_tooltip' style='position:absolute;border:1px solid black;display:none;z-index:10;'></div>"),t.push("<div id='"+this.id+"_marker_tooltip' class='' style='position:absolute;display:none;z-index:10;'></div>"),1==this.options.accessibility&&(t.push("<div id='"+this.id+"_accessibilityZone' class='w2mapchart_accessibility'>"),t.push("<select id='"+this.id+"_level1' class='w2mapchart_accessibility_select'><option value='LEVEL1'>LEVEL1</options></select>"),t.push("<select id='"+this.id+"_level2' class='w2mapchart_accessibility_select'><option value='LEVEL2'>LEVEL2</options></select>"),t.push("<select id='"+this.id+"_level3' class='w2mapchart_accessibility_select'><option value='LEVEL3'>LEVEL3</options></select>"),t.push("</div>")),t.push("</div>"),t.join("")}catch(t){r.w.printStackTrace(t)}},p.prototype.setAction=function(){try{l.s.addCheckResize(this.uuid,"checkResize"),this.render&&this.render.offsetWidth>0&&this.render.offsetHeight>0&&(this._marker_tooltip=this.getElementById(this.id+"_marker_tooltip"),this._tooltip=this.getElementById(this.id+"_tooltip"),this.createMap({width:this.render.offsetWidth,height:this.render.offsetHeight,topoFile:this.getDataMapPath(this.options.startMap),topoObj:this.options.startMap})),this.event.addListener(this.render,"onmouseleave",this.event.bindAsEventListener(this,(function(t){this._marker_tooltip.style.display="none"})))}catch(t){r.w.printStackTrace(t)}},p.prototype.refreshItemset=function(){},p.prototype.finalize=function(){},p.prototype.createMap=function(t){try{var e=this;this.currentMap=t.topoObj
;var i=d3.select("#"+this.id).append("svg").attr("width",t.width).attr("height",t.height).attr("id",this.id+"_svg").style("overflow","hidden"),l=i.append("g").attr("class","w2mapchart_map").attr("id",this.id+"_map"),p=i.append("g").attr("class","w2mapchart_places").attr("id",this.id+"_places"),c=this.id,h=this.uuid,d=t.width,u=t.height,f=parseFloat(this.options.zoomMin),m=parseFloat(this.options.zoomMax),v=this.options.event_drillup.replace(/^on/,""),y=this.options.event_drilldown.replace(/^on/,""),k=this.options.event_select.replace(/^on/,""),D=this.options.event_deselect.replace(/^on/,""),B=this.options.event_tooltipon.replace(/^on/,""),g=this.options.event_tooltipoff.replace(/^on/,""),_=this.options.event_drag.replace(/^on/,""),b=this.options.event_zoom.replace(/^on/,""),S=this.patternList,w=null,z=null,x=null,M=null;this.options.setTooltipStrFunc&&(w=a.D.getGlobalFunction(this.options.setTooltipStrFunc,this.scope_id)),this.options.contextFormatter&&(z=a.D.getGlobalFunction(this.options.contextFormatter,this.scope_id)),this.options.markerDefiner&&(x=a.D.getGlobalFunction(this.options.markerDefiner,this.scope_id)),this.options.markerClassDefiner&&(M=a.D.getGlobalFunction(this.options.markerClassDefiner,this.scope_id));var W=this.options.markerImage||"m0.99,-32a10.982,10.982 0 0 0 -10.99,10.99c0,8.242 10.99,20.41 10.99,20.41s10.99,-12.168 10.99,-20.41a10.982,10.982 0 0 0 -10.99,-10.99zm0,14.915a3.925,3.925 0 1 1 3.925,-3.925a3.926,3.926 0 0 1 -3.925,3.925z";d3.json(t.topoFile,(function(r,E){e._mapData=E;var C,L=d/E.transform.scale[0],q=u/E.transform.scale[1]*.8,P=Math.min(L,q)/180,T=Math.min(1.25*L*E.transform.scale[1],u),j=Math.min(Math.min(L,q)*E.transform.scale[0],d),A=T+(u-T)/2-u/100,F=(d-j)/2+d/100,O=d3.geo.mercator().center(E.transform.translate).scale(P).translate([F,A]);if(i.on(v+".drillup",(function(){d3.event.preventDefault(),WebSquare.idCache[h].drillup()})),parseFloat(f)==parseFloat(m)||"none"===b){if("none"!==_){var I=d3.behavior.drag().on(_+".drag",(function(t,e){var i=d3.transform(l.attr("transform")),o=d3.transform(p.attr("transform")),r=[i.translate[0]+d3.event.dx,i.translate[1]+d3.event.dy].toString(),s=[o.translate[0]+d3.event.dx,o.translate[1]+d3.event.dy].toString(),a=[i.scale[0],i.scale[1]].toString(),n=[o.scale[0],o.scale[1]].toString();l.attr("transform",(function(){return"translate("+r+")scale("+a+")"})),p.attr("transform",(function(){return"translate("+s+")scale("+n+")"}))}));i.call(I)}}else"none"===_?((C=d3.behavior.zoom()).scaleExtent([f,m]),C.on(b+".zoom",(function(){l.attr("transform","scale("+d3.event.scale+")"),p.attr("transform","scale("+d3.event.scale+")")})),i.call(C),i.call(C.event)):((C=d3.behavior.zoom()).scaleExtent([f,m]),C.on(b+".zoom",(function(){l.attr("transform","translate("+d3.event.translate+")scale("+d3.event.scale+")"),p.attr("transform","translate("+d3.event.translate+")scale("+d3.event.scale+")")})),i.call(C),i.call(C.event));var R=d3.geo.path().projection(O),H=topojson.feature(E,E.objects[t.topoObj]).features;if(0!=S.length)for(var V in S)i.call(S[V]);var X=l.selectAll("path").data(H).enter().append("path").attr("class",(function(t){return"municipality c"+t.properties.code})).attr("d",R);if(0!=S.length&&X.style("fill",(function(t,e){return S[e%S.length].url()})),"none"!==B&&X.on(B+".tooltipon",(function(t){var i="";if(i+='<div class="kv">',i+='<span class="key">',"function"==typeof w){var o=w(t.properties.name,t.properties.code);i+=null!=o?o:t.properties.name+"("+t.properties.code+")"}else i+=t.properties.name+"("+t.properties.code+")";i+="</span>",i+="</div>",d3.select("#"+c+"_tooltip").html(i).style("display","block").style("pointer-events","none");var r,s,a=R.centroid(t),n=d3.transform(l.attr("transform"));"31"==t.properties.code||"23"==t.properties.code?(r=(1.1*a[1]+10)*n.scale[1]+n.translate[1],s=(1.1*a[0]+10)*n.scale[0]+n.translate[0]):(r=(a[1]+10)*n.scale[1]+n.translate[1],s=(a[0]+10)*n.scale[0]+n.translate[0]),r+=e.render.offsetTop+window.scrollY,
s+=e.render.offsetLeft+window.scrollX,d3.select("#"+c+"_tooltip").style("top",r+"px").style("left",s+"px")})),"none"!==k&&X.on(k+".select",(function(t){this.setAttribute("fill-opacity","0.6")})),"none"!==g&&X.on(g+".tooltipoff",(function(){d3.select("#"+c+"_tooltip").style("display","none")})),"none"!==D&&X.on(D+".deselect",(function(){this.setAttribute("fill-opacity","1.0")})),"none"!==y&&X.on(y+".drilldown",(function(t){WebSquare.idCache[h].changeMap(t.properties.code)})),X.on("click.onmapclick",(function(t){s.B.fireEvent(WebSquare.idCache[h],"onmapclick",o.x.extend({},t.properties))})).on("dblclick.onmapdblclick",(function(t){s.B.fireEvent(WebSquare.idCache[h],"onmapdblclick",o.x.extend({},t.properties))})).on("mouseover.onmapmouseover",(function(t){s.B.fireEvent(WebSquare.idCache[h],"onmapmouseover",o.x.extend({},t.properties))})).on("mouseout.onmapmouseout",(function(t){s.B.fireEvent(WebSquare.idCache[h],"onmapmouseout",o.x.extend({},t.properties))})).on("mousemove.onmapmousemove",(function(t){s.B.fireEvent(WebSquare.idCache[h],"onmapmousemove",o.x.extend({},t.properties))})),e.options.useMarker){l.selectAll("text").data(H).enter().append("svg:path").attr("d",(function(t){return x&&"function"==typeof x?!0===x(t.properties.name,t.properties.code)?W:void 0:W})).attr("class",(function(t){if(!M||"function"!=typeof M)return"w2mapchart_marker";var e=M(t.properties.name,t.properties.code);return e||void 0})).attr("transform",(function(t){var i=R.centroid(t);return"31"==t.properties.code?"translate("+[1.1*i[0]+e.options.markerPositionX,1.1*i[1]-e.options.markerPositionY]+") scale(0)":"translate("+[i[0]+e.options.markerPositionX,i[1]-e.options.markerPositionY]+") scale(0)"})).transition().ease("elastic").attr("transform",(function(t){var i=R.centroid(t);return"31"==t.properties.code||"23"==t.properties.code?"translate("+[1.1*i[0]+e.options.markerPositionX,1.1*i[1]-e.options.markerPositionY]+") scale(1.25)":"translate("+[i[0]+e.options.markerPositionX,i[1]-e.options.markerPositionY]+") scale(1.25)"}));var Y=".w2mapchart_marker";if(e.options.markerClass){var J=e.options.markerClass.split(",");for(V=0;V<J.length;V++)Y+=",."+J[V]}l.selectAll(Y).on("mouseover",(function(t){})).on("mouseleave",(function(t){})).on("click",(function(t){var i="";if(i+='<div class="w2mapchart_marker_tooltip">',i+='<span class="key">',z&&"function"==typeof z){var o=z(t.properties.name,t.properties.code);i+=null!=o?o:t.properties.name+"("+t.properties.code+")"}else i+=t.properties.name+"("+t.properties.code+")";i+="</span>",i+="</div>",d3.select("#"+c+"_marker_tooltip").html(i).style("display","block").style("pointer-events","none");var r,s,a=R.centroid(t),n=d3.transform(l.attr("transform"));"31"==t.properties.code||"23"==t.properties.code?(r=(1.1*a[1]+5)*n.scale[1]+n.translate[1],s=(1.1*a[0]+5)*n.scale[0]+n.translate[0]):(r=(a[1]+5)*n.scale[1]+n.translate[1],s=(a[0]+5)*n.scale[0]+n.translate[0]),r+=e.render.offsetTop+window.scrollY,s+=e.render.offsetLeft+window.scrollX,d3.select("#"+c+"_marker_tooltip").style("top",r+"px").style("left",s+"px")}))}var G=[],N=[],U=[],Z=0;l.selectAll("text").data(H).enter().append("text").attr("transform",(function(t){if(1==e.options.accessibility){var i=t.properties.code;i.length>=7?(Z=3,U.push({text:t.properties.name,value:t.properties.code})):i.length>=5?(Z=2,N.push({text:t.properties.name,value:t.properties.code})):i.length>=2&&(Z=1,G.push({text:t.properties.name,value:t.properties.code}))}var o=R.centroid(t);return"31"==t.properties.code||"23"==t.properties.code?"translate("+[1.1*o[0],1.1*o[1]]+")":"translate("+o+")"})).attr("dy",".35em").attr("class",(function(t){return"municipality-label c"+t.properties.code})).style("font-size",(function(t){if(!1===e.options.showMunicipalityLabel)return"0px"})).text((function(t){var i;if(e.options.regionNameShort){var o="Map_name_"+t.properties.code;i=n.d.getMessage(o)}return i||t.properties.name})),
1==e.options.accessibility&&(1==Z?e.setSelectOptions(G,Z):2==Z?e.setSelectOptions(N,Z):3==Z&&e.setSelectOptions(U,Z));var K=WebSquare.idCache[h].options.csvFileName;if(WebSquare.idCache[h].options.csvHandler)var Q=a.D.getGlobalFunction(WebSquare.idCache[h].options.csvHandler);if(K&&"function"==typeof Q&&d3.csv(WebSquare.idCache[h].getURL(K),(function(t){Q.call(WebSquare.idCache[h],p,t,O)})),s.B.fireEvent(WebSquare.idCache[h],"onaftermapchange"),!WebSquare.idCache[h]._load){WebSquare.idCache[h]._load=!0;var $=WebSquare.idCache[h].options.dataLists.split(",");for(V=0;V<$.length;V++){var tt=$[V].wq_trim(),et=a.D.getComponentById(tt,WebSquare.idCache[h].scope_id);null!=et&&(et.addChild(WebSquare.idCache[h]),WebSquare.idCache[h].refreshDataLists(et.id))}}if(e.options.dataLists&&Object.keys(e._colorScales).length>0)for(var it in e._colorScales)e.setColorScale(e._colorScales[it]);e._textStyles&&e.setTextStyle(e._textStyles.attributeArr,e._textStyles.valueArr)}))}catch(t){r.w.printStackTrace(t)}},p.prototype.setSelectOptions=function(t,e){try{var i=document.getElementById(this.id+"_level"+e);if(1==e)for(var o=1;o<3;o++){for(var s=(a=document.getElementById(this.id+"_level"+(e+o))).options.length;s>=0;s--)a.remove(s);(n=document.createElement("option")).text="LEVEL"+(e+o),n.value="",a.options[0]=n}else if(2==e){var a;for(o=(a=document.getElementById(this.id+"_level"+(e+1))).options.length;o>=0;o--)a.remove(o);(n=document.createElement("option")).text="LEVEL3",n.value="",a.options[0]=n}for(o=0;o<t.length;o++){var n;(n=document.createElement("option")).text=t[o].text,n.value=t[o].value,i.options[o]=n}}catch(t){r.w.printStackTrace(t,null,this)}},p.prototype.drillup=function(){try{if("0"===this.currentMap)return;var t="0";this.currentMap.length>2&&(t=this.currentMap.slice(0,2)),this.changeMap(t)}catch(t){r.w.printStackTrace(t)}},p.prototype.changeMap=function(t){try{var e;if(this._marker_tooltip.style.display="none",this._tooltip.style.display="none",1==this.options.accessibility)t.length>=7?e=document.getElementById(this.id+"_level3"):t.length>=5?e=document.getElementById(this.id+"_level2"):t.length>=2&&(e=document.getElementById(this.id+"_level1")),e&&(e.value=t);if(t.length<=5){if(!1===s.B.fireEvent(this,"onbeforemapchange",{oldMapCode:this.currentMap,newMapCode:t}))return;d3.select("#"+this.id+"_svg").remove(),d3.select("#"+this.id+"_svg").selectAll("defs").remove();var i=t,o=this.getDataMapPath(i);this.createMap({width:this.render.offsetWidth,height:this.render.offsetHeight,topoFile:o,topoObj:i})}}catch(t){r.w.printStackTrace(t)}},p.prototype.changeMapPath=function(t){try{d3.select("#"+this.id+"_svg").remove(),d3.select("#"+this.id+"_svg").selectAll("defs").remove(),this.options.dataMapPath=t,this.createMap({width:this.render.offsetWidth,height:this.render.offsetHeight,topoFile:this.getDataMapPath(this.options.startMap),topoObj:this.options.startMap})}catch(t){r.w.printStackTrace(t)}},p.prototype.getCurrentMap=function(){try{return this.currentMap}catch(t){r.w.printStackTrace(t)}},p.prototype.getParentMap=function(){try{return this.currentMap.length>2?this.currentMap.slice(0,2):"0"}catch(t){r.w.printStackTrace(t)}},p.prototype.addMapEvent=function(t,e){try{for(var i=!1,a=0;a<this.options.userEvents.length;a++)if(this.options.userEvents[a]===t){i=!0;break}i||this.options.userEvents.push(t);var n=t.replace("on",""),l=this.uuid;d3.select("#"+this.id+"_svg").select(".w2mapchart_map").selectAll("path").on(n+".onmap"+n,(function(t){s.B.fireEvent(WebSquare.idCache[l],"onmap"+n,o.x.extend({},t.properties))})),this.bind("onmap"+n,e)}catch(t){r.w.printStackTrace(t)}},p.prototype.setScale=function(t){try{d3.select("#"+this.id+"_map").attr("transform",(function(e){return"scale("+t+")"})),d3.select("#"+this.id+"_places").attr("transform",(function(e){return"scale("+t+")"}))}catch(t){r.w.printStackTrace(t)}},p.prototype.getDataMapPath=function(t){try{var e=0,i=this.options.dataMapRatio_level0;t.length>=5?(e=2,
i=this.options.dataMapRatio_level2):t.length>=2&&(e=1,i=this.options.dataMapRatio_level1);var o=this.options.dataMapPath+"/level"+e+"/"+i+"/"+t+".json";return o=WebSquare.BootLoader.getResourcePostfix(o)}catch(t){r.w.printStackTrace(t)}},p.prototype.createPattern=function(t,e){try{var i=[{type:"line",size:4,stroke:"#BDBDBD",strokeWidth:1},{type:"line",orientation:["vertical"],size:4,stroke:"#BDBDBD",strokeWidth:1},{type:"line",orientation:["7/8"],size:8,stroke:"#BDBDBD",strokeWidth:.7},{type:"line",orientation:["vertical","horizontal"],size:4,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["2/8"],size:8,stroke:"#BDBDBD",strokeWidth:1},{type:"line",orientation:["1/8","6/8"],size:8,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["3/8","7/8"],size:8,stroke:"#BDBDBD",strokeWidth:.6},{type:"line",orientation:["3/8","7/8"],size:6,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["2/8","6/8"],size:6,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["2/8","6/8"],size:3,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["2/8"],size:2,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["6/8"],size:3,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["1/8","5/8"],size:5,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["3/8"],size:4,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["1/8","4/8","6/8"],size:8,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["1/8","4/8","6/8","8/8"],size:8,stroke:"#BDBDBD",strokeWidth:.5},{type:"circle",size:5,radius:1.5,fill:"#BDBDBD"},{type:"circle",size:2,radius:.5,fill:"#BDBDBD"},{type:"circle",size:5,radius:2,fill:"#BDBDBD"},{type:"circle",size:8,radius:2,fill:"#BDBDBD",strokeWidth:.5},{type:"circle",size:3,radius:.4,fill:"#BDBDBD"},{type:"circle",size:10,radius:2,fill:"#BDBDBD"},{type:"circle",size:5,radius:1.5,fill:"#BDBDBD"},{type:"circle",size:10,radius:4,fill:"#BDBDBD"},{type:"circle",size:6,radius:2,fill:"transparent",stroke:"#BDBDBD",strokeWidth:1},{type:"circle",size:8,radius:4,fill:"transparent",stroke:"#BDBDBD",strokeWidth:2},{type:"circle",size:5,radius:1.5,fill:"#EAEAEA",stroke:"#BDBDBD",strokeWidth:2},{type:"path",d:"hexagons",size:3.5,strokeWidth:2,stroke:"#BDBDBD"},{type:"path",d:"crosses",size:8,stroke:"#BDBDBD",strokeWidth:1},{type:"path",d:"caps",size:7,stroke:"#BDBDBD",strokeWidth:.5},{type:"path",d:"woven",size:10,stroke:"#BDBDBD",strokeWidth:1},{type:"path",d:"waves",size:5,stroke:"#BDBDBD",strokeWidth:1},{type:"path",d:"nylon",size:10,stroke:"#BDBDBD",strokeWidth:1},{type:"path",d:"squares",size:5,stroke:"#BDBDBD",strokeWidth:.7},{type:"path",d:"waves",size:4,stroke:"#BDBDBD",strokeWidth:.5},{type:"path",d:"caps",size:4,stroke:"#BDBDBD",strokeWidth:.3},{type:"path",d:"nylon",size:7,stroke:"#BDBDBD",strokeWidth:.5},{type:"path",d:"woven",size:6,stroke:"#BDBDBD",strokeWidth:1.5},{type:"path",d:"squares",size:2,stroke:"#BDBDBD",strokeWidth:.5}];t&&"object"==typeof t?0!=e&&void 0!==e||(i=t):0!=e&&void 0!==e||(i=[]);for(var o=0;o<i.length;o++){var s=this.createPatternElement(i[o]);this.patternList.push(s);d3.select("#"+this.id).select("svg").call(s).select("pattern")}}catch(t){r.w.printStackTrace(t)}},p.prototype.addPattern=function(t){try{if(this.options.usePattern){var e=this.createPatternElement(t);this.patternList.push(e);var i=d3.select("#"+this.id).select("svg").call(e).selectAll("pattern")[0];return i[i.length-1].getAttribute("id")}}catch(t){r.w.printStackTrace(t)}},p.prototype.createPatternElement=function(t){try{var e;switch(t.type){case"line":e=textures.lines();break;case"circle":e=textures.circles();break;case"path":case"userDefine":e=textures.paths();break;default:return e}return t.orientation&&"line"==t.type&&e.orientation.apply(this,t.orientation),t.d&&"path"==t.type&&e.d(t.d),t.radius&&"circle"==t.type&&e.radius(t.radius),t.stroke&&e.stroke(t.stroke),t.strokeWidth&&e.strokeWidth(t.strokeWidth),t.background&&e.background(t.background),t.size&&e.size(t.size),
t.fill&&"circle"==t.type&&e.fill(t.fill),e}catch(t){r.w.printStackTrace(t,null,this)}},p.prototype.checkResize=function(){try{if(this.render){var t=this.render.offsetWidth,e=this.render.offsetHeight;this.resizeObj&&t>0&&e>0&&0==this.resizeObj.width&&0==this.resizeObj.height&&(this._marker_tooltip=this.getElementById(this.id+"_marker_tooltip"),this.createMap({width:this.render.offsetWidth,height:this.render.offsetHeight,topoFile:this.getDataMapPath(this.options.startMap),topoObj:this.options.startMap})),this.resizeObj={width:t,height:e}}}catch(t){r.w.printStackTrace(t,null,this)}},p.prototype.setColorScale=function(t,e,i,o){try{t&&e&&i&&o&&(this._colorScales[t]={key:e,scale:d3.scale.linear().domain(i).range(o)});for(var s=this.options.dataLists.split(","),n=0;n<s.length;n++){var l=s[n].wq_trim();if(l){var p=a.D.getComponentById(l).getAllJSON();for(n=0;n<p.length;n++){var c=0;5==p[n].code.length?c=1:p[n].code.length>5&&(c=2);var h=this._colorScales[c];if(h)d3.select("#"+this.id+"_map").select(".municipality.c"+p[n].code).style("fill",h.scale(p[n][h.key]))}}}}catch(t){r.w.printStackTrace(t)}},p.prototype.setTextStyle=function(t,e){try{this._textStyles={attributeArr:t,valueArr:e};var i=d3.select("#"+this.id+"_svg").select(".w2mapchart_map");if(this._mapData)for(var o=this._mapData,s=topojson.feature(o,o.objects[this.currentMap]).features,a=i.selectAll("text").data(s),n=0;n<t.length;n++)a.style(t[n],e[n])}catch(t){r.w.printStackTrace(t)}},p.prototype.refreshDataLists=function(t){try{this._load&&s.B.fireEvent(this,"onmapdatachange",t)}catch(t){r.w.printStackTrace(t)}}}}]);