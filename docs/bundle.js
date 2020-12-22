(()=>{"use strict";var e={463:(e,t)=>{function n(e,t){var n,o,r=t.elm,i=e.data.class,a=t.data.class;if((i||a)&&i!==a){for(o in a=a||{},i=i||{})a[o]||r.classList.remove(o);for(o in a)(n=a[o])!==i[o]&&r.classList[n?"add":"remove"](o)}}t.Xy={create:n,update:n},t.ZP=t.Xy},789:(e,t)=>{function n(e,t,o){if("function"==typeof e)e.call(t,o,t);else if("object"==typeof e)if("function"==typeof e[0])if(2===e.length)e[0].call(t,e[1],o,t);else{var r=e.slice(1);r.push(o),r.push(t),e[0].apply(t,r)}else for(var i=0;i<e.length;i++)n(e[i],t,o)}function o(e,t){var o=e.type,r=t.data.on;r&&r[o]&&n(r[o],t,e)}function r(e,t){var n,r=e.data.on,i=e.listener,a=e.elm,l=t&&t.data.on,s=t&&t.elm;if(r!==l){if(r&&i)if(l)for(n in r)l[n]||a.removeEventListener(n,i,!1);else for(n in r)a.removeEventListener(n,i,!1);if(l){var d=t.listener=e.listener||function e(t){o(t,e.vnode)};if(d.vnode=t,r)for(n in l)r[n]||s.addEventListener(n,d,!1);else for(n in l)s.addEventListener(n,d,!1)}}}t.OC={create:r,update:r,destroy:r},t.ZP=t.OC},100:(e,t)=>{function n(e,t){var n,o,r=t.elm,i=e.data.props,a=t.data.props;if((i||a)&&i!==a){for(n in a=a||{},i=i||{})a[n]||delete r[n];for(n in a)o=a[n],i[n]===o||"value"===n&&r[n]===o||(r[n]=o)}}t.fx={create:n,update:n},t.ZP=t.fx},714:(e,t)=>{var n="undefined"!=typeof window&&window.requestAnimationFrame.bind(window)||setTimeout,o=!1;function r(e,t,o){var r;r=function(){e[t]=o},n((function(){n(r)}))}function i(e,t){var n,o,i=t.elm,a=e.data.style,l=t.data.style;if((a||l)&&a!==l){l=l||{};var s="delayed"in(a=a||{});for(o in a)l[o]||("-"===o[0]&&"-"===o[1]?i.style.removeProperty(o):i.style[o]="");for(o in l)if(n=l[o],"delayed"===o&&l.delayed)for(var d in l.delayed)n=l.delayed[d],s&&n===a.delayed[d]||r(i.style,d,n);else"remove"!==o&&n!==a[o]&&("-"===o[0]&&"-"===o[1]?i.style.setProperty(o,n):i.style[o]=n)}}t.qh={pre:function(){o=!1},create:i,update:i,destroy:function(e){var t,n,o=e.elm,r=e.data.style;if(r&&(t=r.destroy))for(n in t)o.style[n]=t[n]},remove:function(e,t){var n=e.data.style;if(n&&n.remove){o||(e.elm.offsetLeft,o=!0);var r,i=e.elm,a=0,l=n.remove,s=0,d=[];for(r in l)d.push(r),i.style[r]=l[r];for(var c=getComputedStyle(i)["transition-property"].split(", ");a<c.length;++a)-1!==d.indexOf(c[a])&&s++;i.addEventListener("transitionend",(function(e){e.target===i&&--s,0===s&&t()}))}else t()}},t.ZP=t.qh}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{function e(e,t,n,o,r){return{sel:e,data:t,children:n,text:o,elm:r,key:void 0===t?void 0:t.key}}const t=e;var o=Array.isArray;function r(e){return"string"==typeof e||"number"==typeof e}const i={createElement:function(e){return document.createElement(e)},createElementNS:function(e,t){return document.createElementNS(e,t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},getTextContent:function(e){return e.textContent},isElement:function(e){return 1===e.nodeType},isText:function(e){return 3===e.nodeType},isComment:function(e){return 8===e.nodeType}};function a(e,t,n){if(e.ns="http://www.w3.org/2000/svg","foreignObject"!==n&&void 0!==t)for(var o=0;o<t.length;++o){var r=t[o].data;void 0!==r&&a(r,t[o].children,t[o].sel)}}function l(t,n,i){var l,s,d,c={};if(void 0!==i?(c=n,o(i)?l=i:r(i)?s=i:i&&i.sel&&(l=[i])):void 0!==n&&(o(n)?l=n:r(n)?s=n:n&&n.sel?l=[n]:c=n),void 0!==l)for(d=0;d<l.length;++d)r(l[d])&&(l[d]=e(void 0,void 0,void 0,l[d],void 0));return"s"!==t[0]||"v"!==t[1]||"g"!==t[2]||3!==t.length&&"."!==t[3]&&"#"!==t[3]||a(c,l,t),e(t,c,l,s,void 0)}function s(e){return void 0===e}function d(e){return void 0!==e}var c=t("",{},[],void 0,void 0);function f(e,t){return e.key===t.key&&e.sel===t.sel}function u(e,t,n){var o,r,i,a={};for(o=t;o<=n;++o)null!=(i=e[o])&&void 0!==(r=i.key)&&(a[r]=o);return a}var h=["create","update","remove","destroy","pre","post"],m=n(463),v=n(100),g=n(714),p=n(789);let y,k=function(e,n){var a,l,m={},v=i;for(a=0;a<h.length;++a)for(m[h[a]]=[],l=0;l<e.length;++l){var g=e[l][h[a]];void 0!==g&&m[h[a]].push(g)}function p(e,t){return function(){if(0==--t){var n=v.parentNode(e);v.removeChild(n,e)}}}function y(e,t){var n,i=e.data;void 0!==i&&d(n=i.hook)&&d(n=n.init)&&(n(e),i=e.data);var a=e.children,l=e.sel;if("!"===l)s(e.text)&&(e.text=""),e.elm=v.createComment(e.text);else if(void 0!==l){var f=l.indexOf("#"),u=l.indexOf(".",f),h=f>0?f:l.length,g=u>0?u:l.length,p=-1!==f||-1!==u?l.slice(0,Math.min(h,g)):l,k=e.elm=d(i)&&d(n=i.ns)?v.createElementNS(n,p):v.createElement(p);for(h<g&&k.setAttribute("id",l.slice(h+1,g)),u>0&&k.setAttribute("class",l.slice(g+1).replace(/\./g," ")),n=0;n<m.create.length;++n)m.create[n](c,e);if(o(a))for(n=0;n<a.length;++n){var x=a[n];null!=x&&v.appendChild(k,y(x,t))}else r(e.text)&&v.appendChild(k,v.createTextNode(e.text));d(n=e.data.hook)&&(n.create&&n.create(c,e),n.insert&&t.push(e))}else e.elm=v.createTextNode(e.text);return e.elm}function k(e,t,n,o,r,i){for(;o<=r;++o){var a=n[o];null!=a&&v.insertBefore(e,y(a,i),t)}}function x(e){var t,n,o=e.data;if(void 0!==o){for(d(t=o.hook)&&d(t=t.destroy)&&t(e),t=0;t<m.destroy.length;++t)m.destroy[t](e);if(void 0!==e.children)for(n=0;n<e.children.length;++n)null!=(t=e.children[n])&&"string"!=typeof t&&x(t)}}function w(e,t,n,o){for(;n<=o;++n){var r=void 0,i=void 0,a=void 0,l=t[n];if(null!=l)if(d(l.sel)){for(x(l),i=m.remove.length+1,a=p(l.elm,i),r=0;r<m.remove.length;++r)m.remove[r](l,a);d(r=l.data)&&d(r=r.hook)&&d(r=r.remove)?r(l,a):a()}else v.removeChild(e,l.elm)}}function b(e,t,n){var o,r;d(o=t.data)&&d(r=o.hook)&&d(o=r.prepatch)&&o(e,t);var i=t.elm=e.elm,a=e.children,l=t.children;if(e!==t){if(void 0!==t.data){for(o=0;o<m.update.length;++o)m.update[o](e,t);d(o=t.data.hook)&&d(o=o.update)&&o(e,t)}s(t.text)?d(a)&&d(l)?a!==l&&function(e,t,n,o){for(var r,i,a,l=0,d=0,c=t.length-1,h=t[0],m=t[c],g=n.length-1,p=n[0],x=n[g];l<=c&&d<=g;)null==h?h=t[++l]:null==m?m=t[--c]:null==p?p=n[++d]:null==x?x=n[--g]:f(h,p)?(b(h,p,o),h=t[++l],p=n[++d]):f(m,x)?(b(m,x,o),m=t[--c],x=n[--g]):f(h,x)?(b(h,x,o),v.insertBefore(e,h.elm,v.nextSibling(m.elm)),h=t[++l],x=n[--g]):f(m,p)?(b(m,p,o),v.insertBefore(e,m.elm,h.elm),m=t[--c],p=n[++d]):(void 0===r&&(r=u(t,l,c)),s(i=r[p.key])?(v.insertBefore(e,y(p,o),h.elm),p=n[++d]):((a=t[i]).sel!==p.sel?v.insertBefore(e,y(p,o),h.elm):(b(a,p,o),t[i]=void 0,v.insertBefore(e,a.elm,h.elm)),p=n[++d]));(l<=c||d<=g)&&(l>c?k(e,null==n[g+1]?null:n[g+1].elm,n,d,g,o):w(e,t,l,c))}(i,a,l,n):d(l)?(d(e.text)&&v.setTextContent(i,""),k(i,null,l,0,l.length-1,n)):d(a)?w(i,a,0,a.length-1):d(e.text)&&v.setTextContent(i,""):e.text!==t.text&&(d(a)&&w(i,a,0,a.length-1),v.setTextContent(i,t.text)),d(r)&&d(o=r.postpatch)&&o(e,t)}}return function(e,n){var o,r,i,a=[];for(o=0;o<m.pre.length;++o)m.pre[o]();for(function(e){return void 0!==e.sel}(e)||(e=function(e){var n=e.id?"#"+e.id:"",o=e.className?"."+e.className.split(" ").join("."):"";return t(v.tagName(e).toLowerCase()+n+o,{},[],void 0,e)}(e)),f(e,n)?b(e,n,a):(r=e.elm,i=v.parentNode(r),y(n,a),null!==i&&(v.insertBefore(i,n.elm,v.nextSibling(r)),w(i,[e],0,0))),o=0;o<a.length;++o)a[o].data.hook.insert(a[o]);for(o=0;o<m.post.length;++o)m.post[o]();return n}}([m.ZP,v.ZP,g.ZP,p.ZP]),x=11,w="rank",b=0,T=[{rank:1,title:"The Shawshank Redemption",desc:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",elmHeight:0},{rank:2,title:"The Godfather",desc:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",elmHeight:0},{rank:3,title:"The Godfather: Part II",desc:"The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.",elmHeight:0},{rank:4,title:"The Dark Knight",desc:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",elmHeight:0},{rank:5,title:"Pulp Fiction",desc:"The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",elmHeight:0},{rank:6,title:"Schindler's List",desc:"In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",elmHeight:0},{rank:7,title:"12 Angry Men",desc:"A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court.",elmHeight:0},{rank:8,title:"The Good, the Bad and the Ugly",desc:"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",elmHeight:0},{rank:9,title:"The Lord of the Rings: The Return of the King",desc:"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",elmHeight:0},{rank:10,title:"Fight Club",desc:"An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more...",elmHeight:0}],C=[T[0],T[1],T[2],T[3],T[4],T[5],T[6],T[7],T[8],T[9]];function N(e){w=e,C.sort(((t,n)=>t[e]>n[e]?1:t[e]<n[e]?-1:0)),S()}function H(){let e=T[Math.floor(10*Math.random())];C=[{rank:x++,title:e.title,desc:e.desc,elmHeight:0}].concat(C),S(),S()}function E(e){C=C.filter((t=>t!==e)),S()}function L(e){return l("div.row",{key:e.rank,style:{opacity:"0",transform:"translate(-200px)",delayed:{transform:`translateY(${e.offset}px)`,opacity:"1"},remove:{opacity:"0",transform:`translateY(${e.offset}px) translateX(200px)`}},hook:{insert:t=>{e.elmHeight=t.elm.offsetHeight}}},[l("div",{style:{fontWeight:"bold"}},e.rank),l("div",e.title),l("div",e.desc),l("div.btn.rm-btn",{on:{click:[E,e]}},"x")])}function S(){C=C.reduce(((e,t)=>{let n=e[e.length-1];return t.offset=n?n.offset+n.elmHeight+8:8,e.concat(t)}),[]),b=C[C.length-1].offset+C[C.length-1].elmHeight,y=k(y,P(C))}function P(e){return l("div#container",[l("h1","Top 10 movies"),l("div",[l("a.btn.add",{on:{click:H}},"Add"),"Sort by: ",l("span.btn-group",[l("a.btn.rank",{class:{active:"rank"===w},on:{click:[N,"rank"]}},"Rank"),l("a.btn.title",{class:{active:"title"===w},on:{click:[N,"title"]}},"Title"),l("a.btn.desc",{class:{active:"desc"===w},on:{click:[N,"desc"]}},"Description")])]),l("div.list",{style:{height:b+"px"}},e.map(L))])}window.addEventListener("DOMContentLoaded",(()=>{let e=document.getElementById("container");y=k(e,P(C)),S()}))})()})();