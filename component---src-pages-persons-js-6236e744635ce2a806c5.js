(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(144),i=n(153),u=(n(76),n(33),n(7)),s=n.n(u),c=n(51),l=n.n(c),f=(n(79),n(80),n(200),n(201),n(82),n(206)),p=n.n(f),d=function(e){var t=e.persons;return a.a.createElement("ul",{className:p.a.persons},t.map(function(e){var t=e.node.firstName,n=e.node.lastName,r=e.node.id,i=e.node.fields.slug;return a.a.createElement("li",null,a.a.createElement(o.Link,{to:i,key:r},t+" "+n))}))},h=n(207),v=n.n(h),m=["firstName","lastName","city"],y=function(e){return e.trim().toLocaleLowerCase()},g=function(e,t){var n=y(t),r=[],a=e,o=Array.isArray(a),i=0;for(a=o?a:a[Symbol.iterator]();;){var u;if(o){if(i>=a.length)break;u=a[i++]}else{if((i=a.next()).done)break;u=i.value}for(var s=u,c=0;c<m.length;c++){var l=m[c],f=s.node[l]||"";if(y(f).includes(n)){r.push(s);break}}}return r},b=function(e){function t(t){var n,r=t.persons;return(n=e.call(this)||this).handleInput=function(e){var t=e.target.value||"";n.setState(function(e){return Object.assign({},e,{persons:g(n.persons,t)})})},n.persons=r,n.state={persons:n.persons},n.handleInput=n.handleInput.bind(l()(l()(n))),n}return s()(t,e),t.prototype.render=function(){var e=this.state.persons;return a.a.createElement("div",{className:v.a.container},a.a.createElement("input",{className:v.a.search,type:"search",placeholder:"імя / прозвішча / горад",onChange:this.handleInput}),a.a.createElement(d,{persons:e}))},t}(a.a.Component);n.d(t,"query",function(){return w});t.default=function(e){var t=e.data;return a.a.createElement(i.a,null,a.a.createElement(b,{persons:t.allDataJson.edges}),a.a.createElement("div",{style:{"text-align":"center"}},a.a.createElement(o.Link,{to:"/"},"Go back to the homepage")))};var w="1036495581"},143:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var a=r(n(146)),o=r(n(147)),i=r(n(7)),u=r(n(51)),s=r(n(52)),c=r(n(4)),l=r(n(0)),f=n(20),p=n(144);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/CodeJam-Teams-Group-18/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},v=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={IOSupported:r},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,a=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(a.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,i=void 0===r?this.defaultGetProps:r,u=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,v=(0,a.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),m=d(n);return l.default.createElement(f.Link,(0,o.default)({to:m,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),y(n,{state:c,replace:h})),!0}},v))},t}(l.default.Component);v.propTypes=(0,o.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var m=v;t.default=m;var y=function(e,t){window.___navigate(d(e),t)};t.navigate=y;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return d});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),u=n(143),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(145),l=n.n(c);n.d(t,"PageRenderer",function(){return l.a});var f=n(32);n.d(t,"parsePath",function(){return f.a});var p=a.a.createContext({}),d=function(e){return a.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,n){var r;e.exports=(r=n(150))&&r.default||r},146:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},147:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},148:function(e,t,n){},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Тэатральныя рэжысёры Беларусі"}}}}},150:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),u=n(53),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},151:function(e,t,n){e.exports={logo:"header-module--logo--3gu8x"}},152:function(e,t,n){e.exports={nav:"navigation-module--nav--26imw",ul:"navigation-module--ul--3okYT",li:"navigation-module--li--1ZStM"}},153:function(e,t,n){"use strict";var r=n(149),a=n(0),o=n.n(a),i=n(4),u=n.n(i),s=n(144),c=n(151),l=n.n(c),f=n(152),p=n.n(f),d=function(){return o.a.createElement("nav",{className:p.a.nav},o.a.createElement("ul",{className:p.a.ul},o.a.createElement("li",{className:p.a.li},o.a.createElement(s.Link,{to:"/"},"HOME")),o.a.createElement("li",{className:p.a.li},o.a.createElement(s.Link,{to:"/persons/"},"PERSONS")),o.a.createElement("li",{className:p.a.li},o.a.createElement(s.Link,{to:"#"},"En"))))},h=function(e){var t=e.siteTitle;return o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement("div",{className:l.a.logo},o.a.createElement("h1",null,t)))};h.propTypes={siteTitle:u.a.string},h.defaultProps={siteTitle:""};var v=h,m=(n(148),function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(a.Fragment,null,o.a.createElement(v,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",null,t))},data:r})});m.propTypes={children:u.a.node.isRequired};t.a=m},159:function(e,t,n){var r=n(5),a=n(17),o=n(35),i=n(160),u=n(24).f;e.exports=function(e){var t=a.Symbol||(a.Symbol=o?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||u(t,e,{value:i.f(e)})}},160:function(e,t,n){t.f=n(3)},161:function(e,t,n){var r=n(78),a=n(56).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},200:function(e,t,n){n(159)("asyncIterator")},201:function(e,t,n){"use strict";var r=n(5),a=n(26),o=n(16),i=n(12),u=n(18),s=n(202).KEY,c=n(25),l=n(55),f=n(38),p=n(36),d=n(3),h=n(160),v=n(159),m=n(203),y=n(81),g=n(6),b=n(11),w=n(34),E=n(74),S=n(54),O=n(83),P=n(204),N=n(205),k=n(24),x=n(37),T=N.f,j=k.f,R=P.f,C=r.Symbol,q=r.JSON,I=q&&q.stringify,_=d("_hidden"),G=d("toPrimitive"),M={}.propertyIsEnumerable,L=l("symbol-registry"),D=l("symbols"),F=l("op-symbols"),J=Object.prototype,K="function"==typeof C,Q=r.QObject,U=!Q||!Q.prototype||!Q.prototype.findChild,A=o&&c(function(){return 7!=O(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=T(J,t);r&&delete J[t],j(e,t,n),r&&e!==J&&j(J,t,r)}:j,W=function(e){var t=D[e]=O(C.prototype);return t._k=e,t},Y=K&&"symbol"==typeof C.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof C},z=function(e,t,n){return e===J&&z(F,t,n),g(e),t=E(t,!0),g(n),a(D,t)?(n.enumerable?(a(e,_)&&e[_][t]&&(e[_][t]=!1),n=O(n,{enumerable:S(0,!1)})):(a(e,_)||j(e,_,S(1,{})),e[_][t]=!0),A(e,t,n)):j(e,t,n)},B=function(e,t){g(e);for(var n,r=m(t=w(t)),a=0,o=r.length;o>a;)z(e,n=r[a++],t[n]);return e},H=function(e){var t=M.call(this,e=E(e,!0));return!(this===J&&a(D,e)&&!a(F,e))&&(!(t||!a(this,e)||!a(D,e)||a(this,_)&&this[_][e])||t)},V=function(e,t){if(e=w(e),t=E(t,!0),e!==J||!a(D,t)||a(F,t)){var n=T(e,t);return!n||!a(D,t)||a(e,_)&&e[_][t]||(n.enumerable=!0),n}},X=function(e){for(var t,n=R(w(e)),r=[],o=0;n.length>o;)a(D,t=n[o++])||t==_||t==s||r.push(t);return r},Z=function(e){for(var t,n=e===J,r=R(n?F:w(e)),o=[],i=0;r.length>i;)!a(D,t=r[i++])||n&&!a(J,t)||o.push(D[t]);return o};K||(u((C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(n){this===J&&t.call(F,n),a(this,_)&&a(this[_],e)&&(this[_][e]=!1),A(this,e,S(1,n))};return o&&U&&A(J,e,{configurable:!0,set:t}),W(e)}).prototype,"toString",function(){return this._k}),N.f=V,k.f=z,n(161).f=P.f=X,n(73).f=H,n(75).f=Z,o&&!n(35)&&u(J,"propertyIsEnumerable",H,!0),h.f=function(e){return W(d(e))}),i(i.G+i.W+i.F*!K,{Symbol:C});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;$.length>ee;)d($[ee++]);for(var te=x(d.store),ne=0;te.length>ne;)v(te[ne++]);i(i.S+i.F*!K,"Symbol",{for:function(e){return a(L,e+="")?L[e]:L[e]=C(e)},keyFor:function(e){if(!Y(e))throw TypeError(e+" is not a symbol!");for(var t in L)if(L[t]===e)return t},useSetter:function(){U=!0},useSimple:function(){U=!1}}),i(i.S+i.F*!K,"Object",{create:function(e,t){return void 0===t?O(e):B(O(e),t)},defineProperty:z,defineProperties:B,getOwnPropertyDescriptor:V,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),q&&i(i.S+i.F*(!K||c(function(){var e=C();return"[null]"!=I([e])||"{}"!=I({a:e})||"{}"!=I(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],a=1;arguments.length>a;)r.push(arguments[a++]);if(n=t=r[1],(b(t)||void 0!==e)&&!Y(e))return y(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!Y(t))return t}),r[1]=t,I.apply(q,r)}}),C.prototype[G]||n(13)(C.prototype,G,C.prototype.valueOf),f(C,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},202:function(e,t,n){var r=n(36)("meta"),a=n(11),o=n(26),i=n(24).f,u=0,s=Object.isExtensible||function(){return!0},c=!n(25)(function(){return s(Object.preventExtensions({}))}),l=function(e){i(e,r,{value:{i:"O"+ ++u,w:{}}})},f=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,r)){if(!s(e))return"F";if(!t)return"E";l(e)}return e[r].i},getWeak:function(e,t){if(!o(e,r)){if(!s(e))return!0;if(!t)return!1;l(e)}return e[r].w},onFreeze:function(e){return c&&f.NEED&&s(e)&&!o(e,r)&&l(e),e}}},203:function(e,t,n){var r=n(37),a=n(75),o=n(73);e.exports=function(e){var t=r(e),n=a.f;if(n)for(var i,u=n(e),s=o.f,c=0;u.length>c;)s.call(e,i=u[c++])&&t.push(i);return t}},204:function(e,t,n){var r=n(34),a=n(161).f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&"[object Window]"==o.call(e)?function(e){try{return a(e)}catch(t){return i.slice()}}(e):a(r(e))}},205:function(e,t,n){var r=n(73),a=n(54),o=n(34),i=n(74),u=n(26),s=n(77),c=Object.getOwnPropertyDescriptor;t.f=n(16)?c:function(e,t){if(e=o(e),t=i(t,!0),s)try{return c(e,t)}catch(n){}if(u(e,t))return a(!r.f.call(e,t),e[t])}},206:function(e,t,n){e.exports={persons:"persons-list-module--persons--EIVXo"}},207:function(e,t,n){e.exports={container:"persons-container-module--container--3DJ37",search:"persons-container-module--search--MGUdP"}}}]);
//# sourceMappingURL=component---src-pages-persons-js-6236e744635ce2a806c5.js.map