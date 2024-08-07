"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[35],{5035:(t,e,i)=>{i.r(e),i.d(e,{slideHide:()=>d});var s=i(2981),n=i(2085),h=i(9304),o=i(1960),r=i(6615),d=function(t,e,i){r.s.call(this,t,e,i)};s.x.extend(d.prototype,r.s.prototype),d.prototype.defaultOptions={pluginType:"uiplugin.slideHide",pluginName:"slideHide",userEvents:["onSlideEnd","onHideEnd","onSlideStart","onHideStart"],parseChild:!0,showSize:20,moveSize:10,slideDirection:"right",slideEvent:"",hideEvent:"",firstStatus:"hide",eventArea:"full",accessibility:!1,accessibilityLabel:"",useKeyboardNavagation:!1,tabIndex:""},d.prototype.initialize=function(t){try{this.slideStatus="slide"==this.options.firstStatus,this.slideDist=0,this.slideTime=0,this.nowMove=this.slideStatus?2:0,!0!==this.options.useKeyboardNavagation||this.options.tabIndex||(this.options.tabIndex="0")}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.toHTML=function(){try{var t=[],e=""==this.options.style?"":"style='"+this.options.style+("hide"==this.options.firstStatus?";display:none":"")+"'",i=this.options.tabIndex?"tabIndex='"+this.options.tabIndex+"'":"";t.push("<div id='"+this.id+"' "+e+" class='w2slideHide "+this.options.className+"' "+i+">");var s="",o="w2slideHide_slideHideMain";if(!0===this.options.accessibility){var r="hide"==this.options.firstStatus?" w2slideHide_btnToggle_show":" w2slideHide_btnToggle_hide",d=this.options.accessibilityLabel||h.d.getMessage("SlideHide_btnToggle")||"확장 축소 버튼";s+="<div id='"+this.id+"_btnMain' class='w2slideHide_btnMain'>",s+="<button id='"+this.id+"_btnToggle' class='w2slideHide_btnToggle"+r+"' aria-expanded='"+("hide"==this.options.firstStatus?"false":"true")+"' aria-controls='"+this.id+"_slideHideMain' aria-label='"+d+"'></button>",s+="</div>",t.push(s),o+=" w2slideHide_btnMain"}t.push("<div id='"+this.id+"_slideHideMain' class='"+o+"'>");for(var a=this.getChildren(),l=0;l<a.length;l++)t.push(a[l].toHTML());return t.push("</div>"),t.push("</div>"),t.join("")}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.setAction=function(){try{this.originStyle={},this.originStyle.left=this.render.style.left,this.originStyle.top=this.render.style.top,this.originStyle.width=this.render.style.width,this.originStyle.height=this.render.style.height,this.main=this.getElementById(this.id+"_slideHideMain");var t="hide"==this.options.firstStatus?this.render.style.width:WebSquare.style.getSize(this.render,"innerwidth")+"px",e=0;!0===this.options.accessibility&&(e=document.getElementById(this.id+"_btnMain").offsetHeight,this.options.showSize=Math.max(this.options.showSize,e+2));var i="hide"==this.options.firstStatus?this.render.style.height-e:WebSquare.style.getSize(this.render,"innerheight")-e+"px";switch(this.main.style.width=t,this.main.style.height=i,this.options.slideDirection){case"right":this.setRight(t,i);break;case"left":this.setLeft(t,i);break;case"up":this.setUp(t,i);break;case"down":this.setDown(t,i)}if(this.options.slideEvent==this.options.hideEvent?""!=this.options.slideEvent&&""!=this.options.hideEvent&&this.event.addListener(this.render,this.options.slideEvent,this.event.bindAsEventListener(this,this.handleToggleEvent)):(""!=this.options.slideEvent&&this.event.addListener(this.render,this.options.slideEvent,this.event.bindAsEventListener(this,this.handleSlideEvent)),""!=this.options.hideEvent&&this.event.addListener(this.render,this.options.hideEvent,this.event.bindAsEventListener(this,this.handleHideEvent))),this.options.useKeyboardNavagation&&this.event.addListener(this.render,"onkeydown",this.event.bindAsEventListener(this,this.handlekeyDownEvent)),!0===this.options.accessibility){var s=document.getElementById(this.id+"_btnToggle");this.event.addListener(s,"onclick",this.event.bindAsEventListener(this,this.handleToggleButtonEvent))}}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.setRight=function(t,e){try{this.main.style.right="0px",this.slideStatus||(this.render.style.width=this.options.showSize+"px"),
this.render.style.display="";var i=(parseInt(t,10)-this.options.showSize)/this.options.moveSize*.015,s=this;this.slideOption={width:parseInt(t,10),height:parseInt(e,10),fromLeft:!0,fromTop:!0,mode:"absolute",duration:i,finish:function(){s.endSlide()}},this.hideOption={width:this.options.showSize,height:parseInt(e,10),fromLeft:!0,fromTop:!0,mode:"absolute",duration:i,finish:function(){s.endHide()}}}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.setLeft=function(t,e){try{this.main.style.left="0px",this.slideStatus||(this.render.style.width=this.options.showSize+"px",this.render.style.left=parseInt(this.render.style.left,10)+parseInt(t,10)-this.options.showSize+"px"),this.render.style.display="";var i=(parseInt(t,10)-this.options.showSize)/this.options.moveSize*.015,s=this;this.slideOption={width:parseInt(t,10),height:parseInt(e,10),fromLeft:!1,fromTop:!0,mode:"absolute",duration:i,finish:function(){s.endSlide()}},this.hideOption={width:this.options.showSize,height:parseInt(e,10),fromLeft:!1,fromTop:!0,mode:"absolute",duration:i,finish:function(){s.endHide()}}}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.setDown=function(t,e){try{this.main.style.bottom="0px",this.slideStatus||(this.render.style.height=this.options.showSize+"px"),this.render.style.display="";var i=(parseInt(e,10)-this.options.showSize)/this.options.moveSize*.015,s=this;this.slideOption={width:parseInt(t,10),height:parseInt(e,10),fromLeft:!0,fromTop:!0,mode:"absolute",duration:i,finish:function(){s.endSlide()}},this.hideOption={width:parseInt(t,10),height:this.options.showSize,fromLeft:!0,fromTop:!0,mode:"absolute",duration:i,finish:function(){s.endHide()}}}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.setUp=function(t,e){try{this.main.style.top="0px",this.slideStatus||(this.render.style.height=this.options.showSize+"px",this.render.style.top=parseInt(this.render.style.top,10)+parseInt(e,10)-this.options.showSize+"px"),this.render.style.display="";var i=(parseInt(e,10)-this.options.showSize)/this.options.moveSize*.015,s=this;this.slideOption={width:parseInt(t,10),height:parseInt(e,10),fromLeft:!0,fromTop:!1,mode:"absolute",duration:i,finish:function(){s.endSlide()}},this.hideOption={width:parseInt(t,10),height:this.options.showSize,fromLeft:!0,fromTop:!1,mode:"absolute",duration:i,finish:function(){s.endHide()}}}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.endSlide=function(){try{switch(this.nowMove=2,this.slideStatus=!0,this.options.slideDirection){case"right":case"left":this.render.style.top=this.originStyle.top,this.render.style.height=this.originStyle.height;break;case"up":case"down":this.render.style.left=this.originStyle.left,this.render.style.width=this.originStyle.width}o.B.fireEvent(this,"onSlideEnd")}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.endHide=function(t){try{switch(this.nowMove=0,this.slideStatus=!1,this.options.slideDirection){case"right":case"left":this.render.style.top=this.originStyle.top,this.render.style.height=this.originStyle.height;break;case"up":case"down":this.render.style.left=this.originStyle.left,this.render.style.width=this.originStyle.width}o.B.fireEvent(this,"onHideEnd")}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.isMouseInRender=function(t){try{var e=WebSquare.style.getAbsoluteLeft(this.render),i=WebSquare.style.getAbsoluteTop(this.render),s=this.render.offsetWidth,h=this.render.offsetHeight,r=o.B.getMouseX(t),d=o.B.getMouseY(t);return r>e&&r<e+s&&d>i&&d<i+h}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.isMouseInShownArea=function(t){try{var e,i,s,h;switch(this.options.slideDirection){case"right":e=WebSquare.style.getAbsoluteLeft(this.render)+this.render.offsetWidth-this.options.showSize,i=WebSquare.style.getAbsoluteTop(this.render),s=this.options.showSize,h=this.render.offsetHeight;break;case"left":e=WebSquare.style.getAbsoluteLeft(this.render),i=WebSquare.style.getAbsoluteTop(this.render),s=this.options.showSize,h=this.render.offsetHeight;break
;case"up":e=WebSquare.style.getAbsoluteLeft(this.render),i=WebSquare.style.getAbsoluteTop(this.render),s=this.render.offsetWidth,h=this.options.showSize;break;case"down":e=WebSquare.style.getAbsoluteLeft(this.render),i=WebSquare.style.getAbsoluteTop(this.render)+this.render.offsetHeight-this.options.showSize,s=this.render.offsetWidth,h=this.options.showSize}var r=o.B.getMouseX(t),d=o.B.getMouseY(t);return r>e&&r<e+s&&d>i&&d<i+h}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.startSlide=function(){try{if(1==this.nowMove||2==this.nowMove)return;3==this.nowMove&&WebSquare.effect.effectManager.remove(this.slideEffect),this.nowMove=1,o.B.fireEvent(this,"onSlideStart"),this.slideEffect=new WebSquare.effect.resize(this.render,this.slideOption)}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.startHide=function(){try{if(0==this.nowMove||3==this.nowMove)return;1==this.nowMove&&WebSquare.effect.effectManager.remove(this.slideEffect),this.nowMove=3,o.B.fireEvent(this,"onHideStart"),this.slideEffect=new WebSquare.effect.resize(this.render,this.hideOption)}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.setSlideHide=function(t){try{if("slide"===t)switch(1!=this.nowMove&&3!=this.nowMove||WebSquare.effect.effectManager.remove(this.slideEffect),this.nowMove=2,this.slideStatus||("left"===this.options.slideDirection?this.render.style.left=parseInt(this.render.style.left,10)-parseInt(this.originStyle.width,10)+this.options.showSize+"px":"up"===this.options.slideDirection&&(this.render.style.top=parseInt(this.render.style.top,10)-parseInt(this.originStyle.height,10)+this.options.showSize+"px")),this.slideStatus=!0,this.options.slideDirection){case"right":case"left":this.render.style.width=this.originStyle.width;break;case"up":case"down":this.render.style.height=this.originStyle.height}else if("hide"===t)switch(1!=this.nowMove&&3!=this.nowMove||WebSquare.effect.effectManager.remove(this.slideEffect),this.nowMove=0,this.slideStatus&&("left"===this.options.slideDirection?this.render.style.left=parseInt(this.render.style.left,10)+parseInt(this.originStyle.width,10)-this.options.showSize+"px":"up"===this.options.slideDirection&&(this.render.style.top=parseInt(this.render.style.top,10)+parseInt(this.originStyle.height,10)-this.options.showSize+"px")),this.slideStatus=!1,this.options.slideDirection){case"right":case"left":this.render.style.width=this.options.showSize+"px";break;case"up":case"down":this.render.style.height=this.options.showSize+"px"}}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.isOpen=function(){try{return this.slideStatus}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.handleSlideEvent=function(t){try{this.startSlide()}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.handleHideEvent=function(t){try{if("onmouseout"==this.options.hideEvent&&this.isMouseInRender(t))return;if("partial"==this.options.eventArea&&!this.isMouseInShownArea(t))return;this.startHide()}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.handleToggleEvent=function(t){try{0==this.slideStatus?this.handleSlideEvent(t):this.handleHideEvent(t)}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.handleToggleButtonEvent=function(t){try{var e=document.getElementById(this.id+"_btnToggle");0==this.slideStatus?(this.handleSlideEvent(t),e.setAttribute("aria-expanded",!0),this.removeClass(e,"w2slideHide_btnToggle_show"),this.addClass(e,"w2slideHide_btnToggle_hide")):(this.handleHideEvent(t),e.setAttribute("aria-expanded",!1),this.removeClass(e,"w2slideHide_btnToggle_hide"),this.addClass(e,"w2slideHide_btnToggle_show"))}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.handlekeyDownEvent=function(t){try{var e=t.charCode?t.charCode:t.keyCode;if(13!==e&&32!==e)return;0==this.slideStatus?this.startSlide():this.startHide()}catch(t){n.w.printStackTrace(t,null,this)}},d.prototype.setHeight=function(t){
this.render&&("left"!=this.options.slideDirection&&"right"!=this.options.slideDirection||null!=(t=parseInt(t,10))&&!isNaN(t)&&t>=0&&(this.render.style.height=t+"px",this.main.style.height=t+"px",this.slideOption.height=t,this.hideOption.height=t))},d.prototype.setWidth=function(t){this.render&&("up"!=this.options.slideDirection&&"down"!=this.options.slideDirection||null!=(t=parseInt(t,10))&&!isNaN(t)&&t>=0&&(this.render.style.width=t+"px",this.main.style.width=t+"px",this.slideOption.width=t,this.hideOption.width=t))}}}]);