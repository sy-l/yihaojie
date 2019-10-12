"use strict";var cart={allChecked:!0,total:0},items=getCookie("items")?JSON.parse(getCookie("items")):[];cart.items=items;var tbody=document.querySelector("tbody");function fillCart(){subTotal();for(var t="",e=0;e<cart.items.length;e++)t+='\n        <tr>\n            <td>\n                <input type="checkbox" '.concat(cart.items[e].isChecked?"checked":"",' class="check">\n            </td>\n            <td>').concat(cart.items[e].itemName,'</td>\n            <td class="price">').concat(cart.items[e].itemPrice,'</td>\n            <td class="count">\n                <button class="add">+</button>\n                <b>').concat(cart.items[e].itemNum,'</b>\n                <button class="reduce">-</button>\n            </td>\n            <td class="subTotal">').concat(cart.items[e].subTotal,'</td>\n            <td>\n                <button class="del">删除</button>\n            </td>\n     </tr>\n        ');tbody.innerHTML=t;var c=document.querySelectorAll(".allCheck");for(e=0;e<c.length;e++)c[e].checked=cart.allChecked;document.querySelector(".total").innerHTML=caltTotal(cart.items);var i=document.querySelectorAll(".add");for(e=0;e<i.length;e++)i[e].index=e,i[e].onclick=function(){cart.items[this.index].itemNum=cart.items[this.index].itemNum+1,setCookie("items",JSON.stringify(cart.items)),fillCart()};var n=document.querySelectorAll(".reduce");for(e=0;e<n.length;e++)n[e].index=e,n[e].onclick=function(){cart.items[this.index].itemNum=cart.items[this.index].itemNum-1,cart.items[this.index].itemNum<=1&&(cart.items[this.index].itemNum=1),setCookie("items",JSON.stringify(cart.items)),fillCart()};var r=document.querySelectorAll(".check");for(e=0;e<r.length;e++)r[e].index=e,r[e].onchange=function(){cart.items[this.index].isChecked=this.checked,cart.items.every(function(t){return t.isChecked})?cart.allChecked=!0:cart.allChecked=!1,fillCart()};for(c=document.querySelectorAll(".allCheck"),e=0;e<c.length;e++)c[e].onchange=function(){cart.allChecked=this.checked,this.checked?cart.items.map(function(t){t.isChecked=!0}):cart.items.forEach(function(t){t.isChecked=!1}),fillCart()};var a=document.querySelectorAll(".del");for(e=0;e<a.length;e++)a[e].index=e,a[e].onclick=function(){confirm("您确认删除吗")&&(cart.items.splice(this.index,1),console.log(cart.items),setCookie("items",JSON.stringify(cart.items)),fillCart())}}function subTotal(){for(var t=0;t<cart.items.length;t++)cart.items[t].subTotal=parseFloat((cart.items[t].itemPrice*cart.items[t].itemNum).toFixed(2))}function caltTotal(t){for(var e=t.filter(function(t){return t.isChecked}),c=0,i=0;i<e.length;i++)c+=e[i].subTotal;return c}fillCart(),$(function(){$(".sea").mouseenter(function(){$(this).find(".car_none").stop().fadeIn()}),$(".sea").mouseleave(function(t){$(this).find(".car_none").stop().fadeOut()})});