"use strict";$(document).ready(function(){$("#oem").easyAutocomplete({url:function(e){return"https://suggest.parts-soft.ru/1.1/suggest/search?oem="+e},listLocation:"suggests",requestDelay:500,minCharNumber:3,getValue:"oem",list:{onChooseEvent:function(){item=$("#oem").getSelectedItemData(),url="/products/"+encodeURI(item.make_name)+"/"+encodeURI(item.oem)+".html",window.location=url}},template:{type:"custom",method:function(e,t){return url="/products/"+encodeURI(t.make_name)+"/"+encodeURI(t.oem)+".html",'<a href="'+url+'"><span class="suggest-make-name">'+t.make_name+'</span> <span class="suggest-oem">'+t.oem+'</span><span class="suggest-detail-name">'+t.detail_name+"</span></a>"}}})});