"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[1122],{1122:function(e,t,i){i.r(t),i.d(t,{panel:function(){return a},panelContainer:function(){return d}});var n=i(9122),o=i(1160),s=i(5841),r=i(8754),l=i(6079),h=i(5316),d=function(e,t,i){h.s.call(this,e,t,i)};n.x.extend(d.prototype,h.s.prototype),d.prototype.defaultOptions={pluginType:"uiplugin.panelContainer",pluginName:"panelContainer",useConfig:!0,cols:1,colWidth:0,panelMove:!0},d.prototype.initialize=function(e){this.panelIdCount=0,this.colArr=[]},d.prototype.toHTML=function(){var e=[],t=""==this.options.style?"":"style='"+this.options.style+"'";e.push("<div id='"+this.id+"' "+t+" class='w2panelContainer "+this.options.className+"'>");for(var i=0;i<this.options.cols;i++)e.push("<div id='"+this.id+"_col_"+i+"' class='w2panelContainer_col'></div>");return e.push("</div>"),e.join("")},d.prototype.setAction=function(){var e=0,t=[];if(0==this.options.colWidth)for(var i=0;i<this.options.cols;i++)t[i]=parseInt(100/this.options.cols,10)+(i<100%this.options.cols?1:0);for(i=0;i<this.render.childNodes.length;i++)this.colArr.push(this.render.childNodes[i]),0==this.options.colWidth?(this.colArr[i].style.width=t[i]+"%",this.colArr[i].style.left=e+"%",e+=t[i]):(this.colArr[i].style.width=this.options.colWidth+"px",this.colArr[i].style.left=i*this.options.colWidth+"px");this.event.addListener(this.render,"onmousedown",this.event.bindAsEventListener(this,this.handleMousedownEvent)),this.event.addListener(this.render,"onmousemove",this.event.bindAsEventListener(this,this.handleMousemoveEvent)),this.event.addListener(this.render,"onmouseup",this.event.bindAsEventListener(this,this.handleMouseupEvent))},d.prototype.addPanel=function(e){var t=e.col||0;e.id||(e.id=this.id+"_panel"+this.panelIdCount++);var i=new WebSquare.uiplugin.panel(e.id,e),n=this;return i.options.xmlEvents=[{name:"onpanelopen",action:"script",param:{handler:function(e){var t=n.getPanelInfoById(this.id);s.B.fireEvent(n,"onpanelopen",t)}}},{name:"onpanelclose",action:"script",param:{handler:function(e){var t=n.getPanelInfoById(this.id);s.B.fireEvent(n,"onpanelclose",t)}}}],this.addControl(i),i.appendTo(this.colArr[t]),i.activate(),i},d.prototype.removePanel=function(e,t){if(e=parseInt(e,10),!((t=parseInt(t,10))>=this.render.childNodes.length||e>=this.render.childNodes[t].childNodes.length)){var i=this.render.childNodes[t],n=i.childNodes[e],o=n.id;return this.removeControl(this.getPanelById(o)),r.D.getComponentById(o+"_content").remove(),window[o]&&(window[o]=null),window[WebSquare.noConflict].comp[o]=null,delete window[WebSquare.noConflict].comp[o],i.removeChild(n),o}},d.prototype.getPanelById=function(e){for(var t=0;t<this.childControlList.length;t++){var i=this.childControlList[t];if(i.id==e)return i}},d.prototype.getPanelInfo=function(){for(var e=[],t=0;t<this.options.cols;t++){for(var i=this.render.childNodes[t],n=[],o=0;o<i.childNodes.length;o++)for(var s=i.childNodes[o],r=0;r<this.childControlList.length;r++){var l=this.childControlList[r];if(l.render==s){n.push({id:l.id,style:l.options.style,title:l.options.title,src:l.options.src,scope:l.options.scope,col:t,row:o,isOpen:"0px"!=WebSquare.style.getStyle(this.getElementById(l.id+"_content"),"height")});break}}e.push(n)}return e},d.prototype.getPanelInfoById=function(e){for(var t=this.getPanelInfo(),i=0;i<t.length;i++)for(var n=t[i],o=0;o<n.length;o++){var s=n[o];if(e==s.id)return s}},d.prototype.setPanelTitle=function(e,t){var i=this.getPanelById(e);i&&(i.options.title=t,i.render.childNodes[0].childNodes[1].innerHTML=t)},d.prototype.openPanel=function(e){var t=this.getPanelById(e),i=t.getElementById(t.id+"_content");0==i.offsetHeight&&WebSquare.style.animate(i,{height:i.scrollHeight},{key:t.id+"_toggle",easing:"linear",duration:300,caller:t,complete:function(){WebSquare.style.setStyle(i,"height",""),t.removeClass("w2panel_closed"),s.B.fireEvent(t,"onpanelopen")}})},d.prototype.closePanel=function(e){
var t=this.getPanelById(e),i=t.getElementById(t.id+"_content");0==i.offsetHeight||(WebSquare.style.setStyle(i,"height",i.scrollHeight+"px"),WebSquare.style.animate(i,{height:0},{key:t.id+"_toggle",easing:"linear",duration:300,caller:t,complete:function(){t.addClass("w2panel_closed"),s.B.fireEvent(t,"onpanelclose")}}))},d.prototype.handleMousedownEvent=function(e){for(var t=this.event.getTargetIterator(e,this.render);this.options.panelMove&&t.next();)if(t.match("w2panel_title"))return this.dragDropElem=t.getElement().parentNode,this.render.style.cursor="pointer",this.addClass("w2noselect"),void s.B.stopEvent(e);this.dragDropElem=null},d.prototype.handleMousemoveEvent=function(e){this.dragDropElem&&(this.ghost||(this.ghost=document.createElement("div"),this.ghost.innerHTML=this.dragDropElem.childNodes[0].childNodes[1].innerHTML,this.ghost.className="w2panelContainer_ghost",WebSquare.getBody().appendChild(this.ghost)),this.ghost.style.left=s.B.getMouseX(e)+10+"px",this.ghost.style.top=s.B.getMouseY(e)+10+"px",s.B.preventDefault(e))},d.prototype.handleMouseupEvent=function(e){try{if(this.dragDropElem){for(var t=this.event.getTargetIterator(e,this.render);t.next()&&(!t.match("w2panel_title")||t.getElement().parentNode!=this.dragDropElem);)if(t.match(null,this.id)){for(var i=s.B.getMouseX(e)+this.render.scrollLeft-WebSquare.style.getAbsoluteLeft(this.render),n=s.B.getMouseY(e)+this.render.scrollTop-WebSquare.style.getAbsoluteTop(this.render),r=null,l=0;l<this.render.childNodes.length;l++){if(i<(r=this.render.childNodes[l]).offsetLeft+r.offsetWidth)break}for(var h=this.render.childNodes[l].childNodes,d=0;d<h.length;d++){var a=h[d];if(n<a.offsetTop+a.offsetHeight)break}if(this.dragDropElem.parentNode.removeChild(this.dragDropElem),!r)return;d<h.length?r.insertBefore(this.dragDropElem,h[d]):(d=h.length,r.appendChild(this.dragDropElem)),s.B.fireEvent(this,"onpanelmove",d,l)}this.render.style.cursor="",this.removeClass("w2noselect")}this.dragDropElem=null,this.ghost&&(this.ghost.parentNode.removeChild(this.ghost),this.ghost=null)}catch(e){o.w.printStackTrace(e,null,this)}},d.prototype.movePanel=function(e,t,i){try{var n=this.getPanelById(e),r=this.render.childNodes[i];if(!r)return void l.k.printLog("invalid position : ["+t+","+i+"]["+this.id+"]");var h=this.render.childNodes[i].childNodes;n?(n.render.parentNode.removeChild(n.render),t<h.length?r.insertBefore(n.render,h[t]):(t=h.length,r.appendChild(n.render)),s.B.fireEvent(this,"onpanelmove",t,i)):l.k.printLog("cannot find pannel : "+e+"["+this.id+"]")}catch(e){o.w.printStackTrace(e,null,this)}};var a=function(e,t,i){h.s.call(this,e,t,i)};n.x.extend(a.prototype,h.s.prototype),a.prototype.defaultOptions={pluginType:"uiplugin.panel",pluginName:"panel",title:"",src:"",scope:!1,isOpen:!0},a.prototype.toHTML=function(){var e=[],t=""==this.options.style?"":"style='"+this.options.style+"'";return e.push("<div id='"+this.id+"' "+t+" class='w2panel "+this.options.className+"'>"),e.push("<div id='"+this.id+"_title' class='w2panel_title'>"),e.push("<div id='"+this.id+"_title_image' class='w2panel_title_image'></div>"),e.push("<span id='"+this.id+"_title_text' class='w2panel_title_text'>"+this.options.title+"</span>"),e.push("</div>"),e.push("</div>"),e.join("")},a.prototype.setAction=function(){var e=new WebSquare.uiplugin.wframe(this.id+"_content",{className:"w2panel_content",src:this.options.src,scope:this.options.scope,style:this.options.isOpen?"":"height:0"});e.appendTo(this),e.activate(),this.contentRender=e.render,this.event.addListener(this.getElementById(this.id+"_title"),"onclick",this.event.bindAsEventListener(this,this.handleTitleClick)),this.options.isOpen||this.addClass("w2panel_closed")},a.prototype.handleTitleClick=function(e){0==this.getElementById(this.id+"_content").offsetHeight?this.parentControl.openPanel(this.id):this.parentControl.closePanel(this.id)}}}]);