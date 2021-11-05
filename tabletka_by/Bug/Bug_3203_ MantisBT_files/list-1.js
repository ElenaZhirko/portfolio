// List.js v1.4.1 (http://www.listjs.com) by Jonny Strömberg (http://javve.com)
!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";function d(a){return a>=48&&a<=57}function e(a,b){for(var c=(a+="").length,e=(b+="").length,f=0,i=0;f<c&&i<e;){var j=a.charCodeAt(f),k=b.charCodeAt(i);if(d(j)){if(!d(k))return j-k;for(var l=f,m=i;48===j&&++l<c;)j=a.charCodeAt(l);for(;48===k&&++m<e;)k=b.charCodeAt(m);for(var n=l,o=m;n<c&&d(a.charCodeAt(n));)++n;for(;o<e&&d(b.charCodeAt(o));)++o;var p=n-l-o+m;if(p)return p;for(;l<n;)if(p=a.charCodeAt(l++)-b.charCodeAt(m++))return p;f=n,i=o}else{if(j!==k)return j<h&&k<h&&g[j]!==-1&&g[k]!==-1?g[j]-g[k]:j-k;++f,++i}}return c-e}var f,g,h=0;e.caseInsensitive=e.i=function(a,b){return e((""+a).toLowerCase(),(""+b).toLowerCase())},Object.defineProperties(e,{alphabet:{get:function(){return f},set:function(a){f=a,g=[];var b=0;if(f)for(;b<f.length;b++)g[f.charCodeAt(b)]=b;for(h=g.length,b=0;b<h;b++)void 0===g[b]&&(g[b]=-1)}}}),b.exports=e},{}],2:[function(a,b,c){b.exports=function(a){var b=function(c,d,e){var f=c.splice(0,50);e=e||[],e=e.concat(a.add(f)),c.length>0?setTimeout(function(){b(c,d,e)},1):(a.update(),d(e))};return b}},{}],3:[function(a,b,c){b.exports=function(a){return a.handlers.filterStart=a.handlers.filterStart||[],a.handlers.filterComplete=a.handlers.filterComplete||[],function(b){if(a.trigger("filterStart"),a.i=1,a.reset.filter(),void 0===b)a.filtered=!1;else{a.filtered=!0;for(var c=a.items,d=0,e=c.length;d<e;d++){var f=c[d];b(f)?f.filtered=!0:f.filtered=!1}}return a.update(),a.trigger("filterComplete"),a.visibleItems}}},{}],4:[function(a,b,c){!function(c,d){"use strict";var e=c.document,f=a("string-natural-compare"),g=a("./utils/get-by-class"),h=a("./utils/extend"),i=a("./utils/index-of"),j=a("./utils/events"),k=a("./utils/to-string"),l=a("./utils/classes"),m=a("./utils/get-attribute"),n=a("./utils/to-array"),o=function(b,c,p){var q,r=this,s=a("./item")(r),t=a("./add-async")(r);q={start:function(){r.listClass="list",r.searchClass="search",r.sortClass="sort",r.page=1e4,r.i=1,r.items=[],r.visibleItems=[],r.matchingItems=[],r.searched=!1,r.filtered=!1,r.searchColumns=d,r.handlers={updated:[]},r.plugins={},r.valueNames=[],r.utils={getByClass:g,extend:h,indexOf:i,events:j,toString:k,naturalSort:f,classes:l,getAttribute:m,toArray:n},r.utils.extend(r,c),r.listContainer="string"==typeof b?e.getElementById(b):b,r.listContainer&&(r.list=g(r.listContainer,r.listClass,!0),r.parse=a("./parse")(r),r.templater=a("./templater")(r),r.search=a("./search")(r),r.filter=a("./filter")(r),r.sort=a("./sort")(r),this.handlers(),this.items(),r.update(),this.plugins())},handlers:function(){for(var a in r.handlers)r[a]&&r.on(a,r[a])},items:function(){r.parse(r.list),p!==d&&r.add(p)},plugins:function(){for(var a=0;a<r.plugins.length;a++){var b=r.plugins[a];r[b.name]=b,b.init(r,o)}}},this.reIndex=function(){r.items=[],r.visibleItems=[],r.matchingItems=[],r.searched=!1,r.filtered=!1,r.parse(r.list)},this.toJSON=function(){for(var a=[],b=0,c=r.items.length;b<c;b++)a.push(r.items[b].values());return a},this.add=function(a,b){if(0!==a.length){if(b)return void t(a,b);var c=[],e=!1;a[0]===d&&(a=[a]);for(var f=0,g=a.length;f<g;f++){var h=null;e=r.items.length>r.page,h=new s(a[f],d,e),r.items.push(h),c.push(h)}return r.update(),c}},this.show=function(a,b){return this.i=a,this.page=b,r.update(),r},this.remove=function(a,b,c){for(var d=0,e=0,f=r.items.length;e<f;e++)r.items[e].values()[a]==b&&(r.templater.remove(r.items[e],c),r.items.splice(e,1),f--,e--,d++);return r.update(),d},this.get=function(a,b){for(var c=[],d=0,e=r.items.length;d<e;d++){var f=r.items[d];f.values()[a]==b&&c.push(f)}return c},this.size=function(){return r.items.length},this.clear=function(){return r.templater.clear(),r.items=[],r},this.on=function(a,b){return r.handlers[a].push(b),r},this.off=function(a,b){var c=r.handlers[a],d=i(c,b);return d>-1&&c.splice(d,1),r},this.trigger=function(a){for(var b=r.handlers[a].length;b--;)r.handlers[a][b](r);return r},this.reset={filter:function(){for(var a=r.items,b=a.length;b--;)a[b].filtered=!1;return r},search:function(){for(var a=r.items,b=a.length;b--;)a[b].found=!1;return r}},this.update=function(){var a=r.items,b=a.length;r.visibleItems=[],r.matchingItems=[],r.templater.clear();for(var c=0;c<b;c++)a[c].matching()&&r.matchingItems.length+1>=r.i&&r.visibleItems.length<r.page?(a[c].show(),r.visibleItems.push(a[c]),r.matchingItems.push(a[c])):a[c].matching()?(r.matchingItems.push(a[c]),a[c].hide()):a[c].hide();return r.trigger("updated"),r},q.start()};"function"==typeof define&&define.amd&&define(function(){return o}),b.exports=o,c.List=o}(window)},{"./add-async":2,"./filter":3,"./item":5,"./parse":6,"./search":7,"./sort":8,"./templater":9,"./utils/classes":10,"./utils/events":11,"./utils/extend":12,"./utils/get-attribute":13,"./utils/get-by-class":14,"./utils/index-of":15,"./utils/to-array":16,"./utils/to-string":17,"string-natural-compare":1}],5:[function(a,b,c){b.exports=function(a){return function(b,c,d){var e=this;this._values={},this.found=!1,this.filtered=!1;var f=function(b,c,d){if(void 0===c)d?e.values(b,d):e.values(b);else{e.elm=c;var f=a.templater.get(e,b);e.values(f)}};this.values=function(b,c){if(void 0===b)return e._values;for(var d in b)e._values[d]=b[d];c!==!0&&a.templater.set(e,e.values())},this.show=function(){a.templater.show(e)},this.hide=function(){a.templater.hide(e)},this.matching=function(){return a.filtered&&a.searched&&e.found&&e.filtered||a.filtered&&!a.searched&&e.filtered||!a.filtered&&a.searched&&e.found||!a.filtered&&!a.searched},this.visible=function(){return!(!e.elm||e.elm.parentNode!=a.list)},f(b,c,d)}}},{}],6:[function(a,b,c){b.exports=function(b){var c=a("./item")(b),d=function(a){for(var b=a.childNodes,c=[],d=0,e=b.length;d<e;d++)void 0===b[d].data&&c.push(b[d]);return c},e=function(a,d){for(var e=0,f=a.length;e<f;e++)b.items.push(new c(d,a[e]))},f=function(a,c){var d=a.splice(0,50);e(d,c),a.length>0?setTimeout(function(){f(a,c)},1):(b.update(),b.trigger("parseComplete"))};return b.handlers.parseComplete=b.handlers.parseComplete||[],function(){var a=d(b.list),c=b.valueNames;b.indexAsync?f(a,c):e(a,c)}}},{"./item":5}],7:[function(a,b,c){b.exports=function(a){var b,c,d,e,f={resetList:function(){a.i=1,a.templater.clear(),e=void 0},setOptions:function(a){2==a.length&&a[1]instanceof Array?c=a[1]:2==a.length&&"function"==typeof a[1]?(c=void 0,e=a[1]):3==a.length?(c=a[1],e=a[2]):c=void 0},setColumns:function(){0!==a.items.length&&void 0===c&&(c=void 0===a.searchColumns?f.toArray(a.items[0].values()):a.searchColumns)},setSearchString:function(b){b=a.utils.toString(b).toLowerCase(),b=b.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),d=b},toArray:function(a){var b=[];for(var c in a)b.push(c);return b}},g={list:function(){for(var b=0,c=a.items.length;b<c;b++)g.item(a.items[b])},item:function(a){a.found=!1;for(var b=0,d=c.length;b<d;b++)if(g.values(a.values(),c[b]))return void(a.found=!0)},values:function(c,e){return!!(c.hasOwnProperty(e)&&(b=a.utils.toString(c[e]).toLowerCase(),""!==d&&b.search(d)>-1))},reset:function(){a.reset.search(),a.searched=!1}},h=function(b){return a.trigger("searchStart"),f.resetList(),f.setSearchString(b),f.setOptions(arguments),f.setColumns(),""===d?g.reset():(a.searched=!0,e?e(d,c):g.list()),a.update(),a.trigger("searchComplete"),a.visibleItems};return a.handlers.searchStart=a.handlers.searchStart||[],a.handlers.searchComplete=a.handlers.searchComplete||[],a.utils.events.bind(a.utils.getByClass(a.listContainer,a.searchClass),"keyup",function(b){var c=b.target||b.srcElement,d=""===c.value&&!a.searched;d||h(c.value)}),a.utils.events.bind(a.utils.getByClass(a.listContainer,a.searchClass),"input",function(a){var b=a.target||a.srcElement;""===b.value&&h("")}),h}},{}],8:[function(a,b,c){b.exports=function(a){var b={els:void 0,clear:function(){for(var c=0,d=b.els.length;c<d;c++)a.utils.classes(b.els[c]).remove("asc"),a.utils.classes(b.els[c]).remove("desc")},getOrder:function(b){var c=a.utils.getAttribute(b,"data-order");return"asc"==c||"desc"==c?c:a.utils.classes(b).has("desc")?"asc":a.utils.classes(b).has("asc")?"desc":"asc"},getInSensitive:function(b,c){var d=a.utils.getAttribute(b,"data-insensitive");"false"===d?c.insensitive=!1:c.insensitive=!0},setOrder:function(c){for(var d=0,e=b.els.length;d<e;d++){var f=b.els[d];if(a.utils.getAttribute(f,"data-sort")===c.valueName){var g=a.utils.getAttribute(f,"data-order");"asc"==g||"desc"==g?g==c.order&&a.utils.classes(f).add(c.order):a.utils.classes(f).add(c.order)}}}},c=function(){a.trigger("sortStart");var c={},d=arguments[0].currentTarget||arguments[0].srcElement||void 0;d?(c.valueName=a.utils.getAttribute(d,"data-sort"),b.getInSensitive(d,c),c.order=b.getOrder(d)):(c=arguments[1]||c,c.valueName=arguments[0],c.order=c.order||"asc",c.insensitive="undefined"==typeof c.insensitive||c.insensitive),b.clear(),b.setOrder(c);var e,f=c.sortFunction||a.sortFunction||null,g="desc"===c.order?-1:1;e=f?function(a,b){return f(a,b,c)*g}:function(b,d){var e=a.utils.naturalSort;return e.alphabet=a.alphabet||c.alphabet||void 0,!e.alphabet&&c.insensitive&&(e=a.utils.naturalSort.caseInsensitive),e(b.values()[c.valueName],d.values()[c.valueName])*g},a.items.sort(e),a.update(),a.trigger("sortComplete")};return a.handlers.sortStart=a.handlers.sortStart||[],a.handlers.sortComplete=a.handlers.sortComplete||[],b.els=a.utils.getByClass(a.listContainer,a.sortClass),a.utils.events.bind(b.els,"click",c),a.on("searchStart",b.clear),a.on("filterStart",b.clear),c}},{}],9:[function(a,b,c){var d=function(a){var b,c=this,d=function(){b=c.getItemSource(a.item),b&&(b=c.clearSourceItem(b,a.valueNames))};this.clearSourceItem=function(b,c){for(var d=0,e=c.length;d<e;d++){var f;if(c[d].data)for(var g=0,h=c[d].data.length;g<h;g++)b.setAttribute("data-"+c[d].data[g],"");else c[d].attr&&c[d].name?(f=a.utils.getByClass(b,c[d].name,!0),f&&f.setAttribute(c[d].attr,"")):(f=a.utils.getByClass(b,c[d],!0),f&&(f.innerHTML=""));f=void 0}return b},this.getItemSource=function(b){if(void 0===b){for(var c=a.list.childNodes,d=0,e=c.length;d<e;d++)if(void 0===c[d].data)return c[d].cloneNode(!0)}else{if(/<tr[\s>]/g.exec(b)){var f=document.createElement("tbody");return f.innerHTML=b,f.firstChild}if(b.indexOf("<")!==-1){var g=document.createElement("div");return g.innerHTML=b,g.firstChild}var h=document.getElementById(a.item);if(h)return h}},this.get=function(b,d){c.create(b);for(var e={},f=0,g=d.length;f<g;f++){var h;if(d[f].data)for(var i=0,j=d[f].data.length;i<j;i++)e[d[f].data[i]]=a.utils.getAttribute(b.elm,"data-"+d[f].data[i]);else d[f].attr&&d[f].name?(h=a.utils.getByClass(b.elm,d[f].name,!0),e[d[f].name]=h?a.utils.getAttribute(h,d[f].attr):""):(h=a.utils.getByClass(b.elm,d[f],!0),e[d[f]]=h?h.innerHTML:"");h=void 0}return e},this.set=function(b,d){var e=function(b){for(var c=0,d=a.valueNames.length;c<d;c++)if(a.valueNames[c].data){for(var e=a.valueNames[c].data,f=0,g=e.length;f<g;f++)if(e[f]===b)return{data:b}}else{if(a.valueNames[c].attr&&a.valueNames[c].name&&a.valueNames[c].name==b)return a.valueNames[c];if(a.valueNames[c]===b)return b}},f=function(c,d){var f,g=e(c);g&&(g.data?b.elm.setAttribute("data-"+g.data,d):g.attr&&g.name?(f=a.utils.getByClass(b.elm,g.name,!0),f&&f.setAttribute(g.attr,d)):(f=a.utils.getByClass(b.elm,g,!0),f&&(f.innerHTML=d)),f=void 0)};if(!c.create(b))for(var g in d)d.hasOwnProperty(g)&&f(g,d[g])},this.create=function(a){if(void 0!==a.elm)return!1;if(void 0===b)throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");var d=b.cloneNode(!0);return d.removeAttribute("id"),a.elm=d,c.set(a,a.values()),!0},this.remove=function(b){b.elm.parentNode===a.list&&a.list.removeChild(b.elm)},this.show=function(b){c.create(b),a.list.appendChild(b.elm)},this.hide=function(b){void 0!==b.elm&&b.elm.parentNode===a.list&&a.list.removeChild(b.elm)},this.clear=function(){if(a.list.hasChildNodes())for(;a.list.childNodes.length>=1;)a.list.removeChild(a.list.firstChild)},d()};b.exports=function(a){return new d(a)}},{}],10:[function(a,b,c){function d(a){if(!a||!a.nodeType)throw new Error("A DOM element reference is required");this.el=a,this.list=a.classList}var e=a("./index-of"),f=/\s+/,g=Object.prototype.toString;b.exports=function(a){return new d(a)},d.prototype.add=function(a){if(this.list)return this.list.add(a),this;var b=this.array(),c=e(b,a);return~c||b.push(a),this.el.className=b.join(" "),this},d.prototype.remove=function(a){if("[object RegExp]"==g.call(a))return this.removeMatching(a);if(this.list)return this.list.remove(a),this;var b=this.array(),c=e(b,a);return~c&&b.splice(c,1),this.el.className=b.join(" "),this},d.prototype.removeMatching=function(a){for(var b=this.array(),c=0;c<b.length;c++)a.test(b[c])&&this.remove(b[c]);return this},d.prototype.toggle=function(a,b){return this.list?("undefined"!=typeof b?b!==this.list.toggle(a,b)&&this.list.toggle(a):this.list.toggle(a),this):("undefined"!=typeof b?b?this.add(a):this.remove(a):this.has(a)?this.remove(a):this.add(a),this)},d.prototype.array=function(){var a=this.el.getAttribute("class")||"",b=a.replace(/^\s+|\s+$/g,""),c=b.split(f);return""===c[0]&&c.shift(),c},d.prototype.has=d.prototype.contains=function(a){return this.list?this.list.contains(a):!!~e(this.array(),a)}},{"./index-of":15}],11:[function(a,b,c){var d=window.addEventListener?"addEventListener":"attachEvent",e=window.removeEventListener?"removeEventListener":"detachEvent",f="addEventListener"!==d?"on":"",g=a("./to-array");c.bind=function(a,b,c,e){a=g(a);for(var h=0;h<a.length;h++)a[h][d](f+b,c,e||!1)},c.unbind=function(a,b,c,d){a=g(a);for(var h=0;h<a.length;h++)a[h][e](f+b,c,d||!1)}},{"./to-array":16}],12:[function(a,b,c){b.exports=function(a){for(var b,c=Array.prototype.slice.call(arguments,1),d=0;b=c[d];d++)if(b)for(var e in b)a[e]=b[e];return a}},{}],13:[function(a,b,c){b.exports=function(a,b){var c=a.getAttribute&&a.getAttribute(b)||null;if(!c)for(var d=a.attributes,e=d.length,f=0;f<e;f++)void 0!==b[f]&&b[f].nodeName===b&&(c=b[f].nodeValue);return c}},{}],14:[function(a,b,c){b.exports=function(){return document.getElementsByClassName?function(a,b,c){return c?a.getElementsByClassName(b)[0]:a.getElementsByClassName(b)}:document.querySelector?function(a,b,c){return b="."+b,c?a.querySelector(b):a.querySelectorAll(b)}:function(a,b,c){var d=[],e="*";null===a&&(a=document);for(var f=a.getElementsByTagName(e),g=f.length,h=new RegExp("(^|\\s)"+b+"(\\s|$)"),i=0,j=0;i<g;i++)if(h.test(f[i].className)){if(c)return f[i];d[j]=f[i],j++}return d}}()},{}],15:[function(a,b,c){var d=[].indexOf;b.exports=function(a,b){if(d)return a.indexOf(b);for(var c=0;c<a.length;++c)if(a[c]===b)return c;return-1}},{}],16:[function(a,b,c){function d(a){return"[object Array]"===Object.prototype.toString.call(a)}b.exports=function(a){if("undefined"==typeof a)return[];if(null===a)return[null];if(a===window)return[window];if("string"==typeof a)return[a];if(d(a))return a;if("number"!=typeof a.length)return[a];if("function"==typeof a&&a instanceof Function)return[a];for(var b=[],c=0;c<a.length;c++)(Object.prototype.hasOwnProperty.call(a,c)||c in a)&&b.push(a[c]);return b.length?b:[]}},{}],17:[function(a,b,c){b.exports=function(a){return a=void 0===a?"":a,a=null===a?"":a,a=a.toString()}},{}]},{},[4]);