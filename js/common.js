$(function(){var g="https://cdn.jsdelivr.net/gh/YQHP-Happi/soluow-resouces-repos-cdn@master/images/img-load-error.svg";var i="https://cdn.jsdelivr.net/gh/YQHP-Happi/soluow-resouces-repos-cdn@master/images/img-load.svg";var e=0;var d=0;var b=$("header .menu-list,header nav");var f=$("#searchText");var j=$("#search");var c=$("#phoneSearchText");$("header .menu-btn").on("click",function(n){n.stopPropagation();b.slideToggle("fast")});$(window).on("resize",function(){b.hide()}).on("click",function(){b.hide()}).on("touchstart",function(n){e=n.originalEvent.changedTouches[0].pageX;d=n.originalEvent.changedTouches[0].pageY}).on("touchmove",function(q){var o=q.originalEvent.changedTouches[0].pageX;var n=q.originalEvent.changedTouches[0].pageY;var p=h(e,d,o,n);if(p===1){b.hide()}});b.on("click",function(n){n.stopPropagation()}).on("touchmove",function(n){n.stopPropagation()});j.on("click",function(){m(f.val().trim())});f.on("keyup",function(n){if(n.keyCode===13){m(f.val().trim())}});c.on("keyup",function(n){if(n.keyCode===13){m($(this).val().trim())}});function m(n){(n&&n.trim().length!==0)&&(location.href="/search/"+n)}function h(q,o,s,r){var p=o-r;var n=0;if(p>0){n=1}else{if(p<0){n=2}else{n=0}}return n}function l(o){var n=new Image();var p=parseInt(o.data("retry-count"))||0;o.attr("src",i);n.onload=function(q){o.replaceWith(n)};n.onerror=function(){if(p<3){l(o)}else{o.attr("src",g);console.log("图片加载失败:"+o.data("src"))}};o.data("retry-count",p+1);n.src=o.data("src")}var k=$(".content .data .lock input").select().focus();$(".content .data ").find("img").on("click",function(){l($(this).data("retry-count",0))}).each(function(){l($(this))}).end().find(".lock .error").fadeOut(5000).end().find(".lock button").on("click",function(){$(this).prop("disabled",true);a()});k.on("keyup",function(n){if(n.keyCode===13){a()}});function a(){location.href=location.protocol+"//"+location.host+location.pathname+"?pw="+k.val()}});
