"use strict";$(function(){$(".loadMore").click(function(){$(".typeWeb").is(":hidden")?$(".typeWeb").show():$(".typeWeb").hide()})}),$(function(){$(".two_dimension_code").click(function(){$(".main_two").is(":hidden")?($(".main_two").show(),$(".main_denglu").hide()):($(".main_two").hide(),$(".main_denglu").show())})});var btn=document.querySelector("#btn"),user=document.querySelector("#userName"),pwd=document.querySelector("#pwd"),check=document.querySelector("#check");btn.onclick=function(){var t=null;(t=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).open("post","./login.php"),t.setRequestHeader("content-type","application/x-www-form-urlencoded"),t.send("userName="+user.value+"&pwd="+pwd.value),t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){var e=JSON.parse(t.responseText);e.code&&check.checked&&setCookie("userName",JSON.stringify(e.data),7),alert(e.msg)}}};var userMsg=getCookie("userName");userMsg?alert("已经登录记住用户名"):alert("请登录");