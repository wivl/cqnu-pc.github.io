(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{360:function(e,t,l){"use strict";l.r(t);var s={mounted(){this.reverse(),this.WatchClick()},methods:{reverse(){var e=setInterval(()=>{let t=document.getElementsByClassName("sidebar-group-items")[0];if(t){let l=t.childNodes;for(let e=l.length-1;e>=0;e--)t.append(l[e]);clearInterval(e)}},100)},WatchClick(){var e=setInterval(()=>{let t=document.getElementsByClassName("sidebar-group");if(t){for(let e=0;e<t.length;e++)t[e].addEventListener("click",()=>{this.reverse()});clearInterval(e)}},100)}}},r=l(0),n=Object(r.a)(s,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);t.default=n.exports}}]);