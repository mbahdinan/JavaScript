﻿function getCurrentYear(){var e=new Date;return e.getFullYear()}el=document.getElementById(&quot;current-year&quot;),el.innerHTML=getCurrentYear();
function show(e){document.getElementById(e).style.display=&quot;block&quot;}function hide(e){document.getElementById(e).style.display=&quot;none&quot;}
$(window).on(&quot;hashchange&quot;,function(n){history.replaceState(&quot;&quot;,document.title,n.originalEvent.oldURL)});
//<![CDATA[
//Random Post
function showLucky(e){for(var t=e.feed,a=(t.entry||[],t.entry[0]),c=0;c<a.link.length;++c)"alternate"==a.link[c].rel&&(window.location=a.link[c].href)}function fetchLuck(e){script=document.createElement("script"),script.src="/feeds/posts/summary?start-index="+e+"&max-results=1&alt=json-in-script&callback=showLucky",script.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(script)}function readLucky(e){var t=e.feed,a=parseInt(t.openSearch$totalResults.$t,10),c=Math.floor(Math.random()*a);c++,fetchLuck(c)}function feelingLucky(){var e=document.createElement("script");e.type="text/javascript",e.src="/feeds/posts/summary?max-results=0&alt=json-in-script&callback=readLucky",document.getElementsByTagName("head")[0].appendChild(e)}
// Multi Tab
!function(t){"use strict";var e=function(e,a){var n=this;n.element=e,n.$element=t(e),n.tabs=n.$element.children(),n.options=t.extend({},t.fn.mtabs.defaults,a),n.current_tab=0,n.init()};e.prototype={init:function(){var t=this;t.tabs.length&&(t.build(),t.buildTabMenu())},build:function(){var e=this,a=e.options,n=a.tab_text_el,s=a.container_class;e.tab_names=[],e.$wrapper=e.$element.wrapInner('<div class="'+s+'" />').find("."+s),e.tabs.wrapAll('<div class="'+a.tabs_container_class+'" />'),e.tabs.each(function(a,s){var i,r=t(s),l=n;i=r.find(l).filter(":first").hide().text(),e.tab_names.push(i)}),t.isFunction(a.onReady)&&a.onReady.call(e.element)},buildTabMenu:function(){for(var e,a=this,n=a.options,s=n.tabsmenu_el,i=a.tab_names,r="<"+s+' class="'+n.tabsmenu_class+'">',l=0,o=i.length,c=function(){var t=arguments;return n.tmpl.tabsmenu_tab.replace(/\{[0-9]\}/g,function(e){var a=Number(e.replace(/\D/g,""));return t[a]||""})};o>l;l++)r+=c(l+1,i[l]);r+="</"+s+">",a.$tabs_menu=t(r).prependTo(a.$wrapper),e=a.$tabs_menu.find(":first")[0].nodeName.toLowerCase(),a.$tabs_menu.on("click",e,function(e){var n=t(this),s=n.index();a.show(s),e.preventDefault()}).find(":first").trigger("click")},show:function(e){var a=this,n=a.options,s=n.active_tab_class;a.tabs.hide().filter(":eq("+e+")").show(),a.$tabs_menu.children().removeClass(s).filter(":eq("+e+")").addClass(s),t.isFunction(n.onTabSelect)&&e!==a.current_tab&&n.onTabSelect.call(a.element,e),a.current_tab=e},destroy:function(){var t=this,e=t.options.tab_text_el;t.$tabs_menu.remove(),t.tabs.unwrap().unwrap(),t.tabs.removeAttr("style"),t.tabs.children(e+":first").removeAttr("style"),t.$element.removeData("mtabs")}},t.fn.mtabs=function(a,n){return this.each(function(){var s,i=t(this),r=i.data("mtabs");s="object"==typeof a&&a,r||i.data("mtabs",r=new e(this,s)),"string"==typeof a&&r[a](n)})},t.fn.mtabs.defaults={container_class:"tabs",tabs_container_class:"tabs-content",active_tab_class:"active-tab",tab_text_el:"h1, h2, h3, h4, h5, h6",tabsmenu_class:"tabs-menu",tabsmenu_el:"ul",tmpl:{tabsmenu_tab:'<li class="tab-{0}"><span>{1}</span></li>'},onTabSelect:null}}(window.jQuery,window,document);
// Lazy Load
(function(a){a.fn.lazyload=function(b){var c={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(b){a.extend(c,b)}var d=this;if("scroll"==c.event){a(c.container).bind("scroll",function(b){var e=0;d.each(function(){if(a.abovethetop(this,c)||a.leftofbegin(this,c)){}else if(!a.belowthefold(this,c)&&!a.rightoffold(this,c)){a(this).trigger("appear")}else{if(e++>c.failurelimit){return false}}});var f=a.grep(d,function(a){return!a.loaded});d=a(f)})}this.each(function(){var b=this;if(undefined==a(b).attr("original")){a(b).attr("original",a(b).attr("src"))}if("scroll"!=c.event||undefined==a(b).attr("src")||c.placeholder==a(b).attr("src")||a.abovethetop(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.rightoffold(b,c)){if(c.placeholder){a(b).attr("src",c.placeholder)}else{a(b).removeAttr("src")}b.loaded=false}else{b.loaded=true}a(b).one("appear",function(){if(!this.loaded){a("<img />").bind("load",function(){a(b).hide().attr("src",a(b).attr("original"))[c.effect](c.effectspeed);b.loaded=true}).attr("src",a(b).attr("original"))}});if("scroll"!=c.event){a(b).bind(c.event,function(c){if(!b.loaded){a(b).trigger("appear")}})}});a(c.container).trigger(c.event);return this};a.belowthefold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).height()+a(window).scrollTop()}else{var d=a(c.container).offset().top+a(c.container).height()}return d<=a(b).offset().top-c.threshold};a.rightoffold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).width()+a(window).scrollLeft()}else{var d=a(c.container).offset().left+a(c.container).width()}return d<=a(b).offset().left-c.threshold};a.abovethetop=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollTop()}else{var d=a(c.container).offset().top}return d>=a(b).offset().top+c.threshold+a(b).height()};a.leftofbegin=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollLeft()}else{var d=a(c.container).offset().left}return d>=a(b).offset().left+c.threshold+a(b).width()};a.extend(a.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container:window})"})})(jQuery);$(function(){$(".post img").lazyload({placeholder:"https://1.bp.blogspot.com/-Qg5bi1ZtDdM/VZ5nHAyYBqI/AAAAAAAAChE/exGnasO4oyk/s640/arlinadesign.gif",effect:"fadeIn",threshold:"0"})});
