(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(153),s=(a(164),a(144),a(165),a(166)),o=a.n(s),l=function(e){var t=e.children;return r.a.createElement("div",{className:o.a.container},t)},c=function(e){return r.a.createElement(l,null,r.a.createElement("p",null,e.headerText))},d=(a(167),a(169)),u=a.n(d),f=a(170),p=a.n(f),m=function(e){return r.a.createElement("article",{className:u.a.user},r.a.createElement("img",{src:e.avatar,className:u.a.avatar,alt:"name-developers"}),r.a.createElement("section",{className:u.a.description},r.a.createElement("h2",{className:u.a.username},r.a.createElement("a",{href:e.link},e.username)),r.a.createElement("a",{href:e.link},r.a.createElement("img",{src:e.image,className:e.image,alt:"git-hub"})),r.a.createElement("p",{className:u.a.excerpt},e.excerpt)))},h=function(){return r.a.createElement(l,null,r.a.createElement("h3",{className:u.a.title},"About us"),r.a.createElement(m,{link:"https://github.com/SiarheiKresik",username:"Bob Smith",image:p.a,avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg",excerpt:"I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}),r.a.createElement(m,{username:"Bob Smith",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg",excerpt:"I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}),r.a.createElement(m,{username:"Bob Smith",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg",excerpt:"I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}))},g=a(171),y=a.n(g),v=a(172),b=a(173),A=a(174),w=a(175),E=a(176),S=a.n(E),x=a(177),T=a.n(x),R=a(178),N=a.n(R),I=a(179),k=a.n(I),C=[v,b,A,w],L=[T.a,k.a,S.a,N.a],O=C.length,j=Math.ceil(Math.random()*O),z=function(e){return r.a.createElement("article",{className:y.a.user},r.a.createElement("img",{src:e.avatar,className:y.a.avatar,alt:""}),r.a.createElement("section",{className:y.a.description},r.a.createElement("h2",{className:y.a.username},e.username),r.a.createElement("p",{className:y.a.excerpt},e.excerpt)))},q=function(){return r.a.createElement(l,null,r.a.createElement("h3",{className:y.a.title},"Author of the day"),r.a.createElement(z,{username:C[j].firstName+" "+C[j].lastName,excerpt:C[j].data[0].dateText+" "+C[j].data[0].content+" ",avatar:L[j]}))};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c,{headerText:"контент о портале"}),r.a.createElement(q,null),r.a.createElement(h,null),r.a.createElement("div",null))}},143:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(146)),i=n(a(147)),s=n(a(7)),o=n(a(51)),l=n(a(52)),c=n(a(4)),d=n(a(0)),u=a(20),f=a(144);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/CodeJam-Teams-Group-18/"+e)}var m={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,l.default)((0,o.default)((0,o.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,s=void 0===n?this.defaultGetProps:n,o=t.onClick,l=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=p(a);return d.default.createElement(u.Link,(0,i.default)({to:g,state:c,getProps:s,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return o&&o(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),y(a,{state:c,replace:m})),!0}},h))},t}(d.default.Component);h.propTypes=(0,i.default)({},m,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var g=h;t.default=g;var y=function(e,t){window.___navigate(p(e),t)};t.navigate=y;var v=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=v;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),v(e)}},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(143),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(145),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},145:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},146:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},147:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},148:function(e,t,a){},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Тэатральныя рэжысёры Беларусі"}}}}},150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(53),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},151:function(e,t,a){e.exports={logo:"header-module--logo--3gu8x"}},152:function(e,t,a){e.exports={nav:"navigation-module--nav--26imw",ul:"navigation-module--ul--3okYT",li:"navigation-module--li--1ZStM"}},153:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),s=a(4),o=a.n(s),l=a(144),c=a(151),d=a.n(c),u=a(152),f=a.n(u),p=function(){return i.a.createElement("nav",{className:f.a.nav},i.a.createElement("ul",{className:f.a.ul},i.a.createElement("li",{className:f.a.li},i.a.createElement(l.Link,{to:"/"},"HOME")),i.a.createElement("li",{className:f.a.li},i.a.createElement(l.Link,{to:"/persons/"},"PERSONS")),i.a.createElement("li",{className:f.a.li},i.a.createElement(l.Link,{to:"#"},"En"))))},m=function(e){var t=e.siteTitle;return i.a.createElement("div",null,i.a.createElement(p,null),i.a.createElement("div",{className:d.a.logo},i.a.createElement("h1",null,t)))};m.propTypes={siteTitle:o.a.string},m.defaultProps={siteTitle:""};var h=m,g=(a(148),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(r.Fragment,null,i.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,t))},data:n})});g.propTypes={children:o.a.node.isRequired};t.a=g},164:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/CodeJam-Teams-Group-18/static/6d91c86c0fde632ba4cd01062fd9ccfa/045aa/gatsby-astronaut.png",srcSet:"/CodeJam-Teams-Group-18/static/6d91c86c0fde632ba4cd01062fd9ccfa/0552a/gatsby-astronaut.png 75w,\n/CodeJam-Teams-Group-18/static/6d91c86c0fde632ba4cd01062fd9ccfa/fc3be/gatsby-astronaut.png 150w,\n/CodeJam-Teams-Group-18/static/6d91c86c0fde632ba4cd01062fd9ccfa/045aa/gatsby-astronaut.png 300w,\n/CodeJam-Teams-Group-18/static/6d91c86c0fde632ba4cd01062fd9ccfa/24f49/gatsby-astronaut.png 450w,\n/CodeJam-Teams-Group-18/static/6d91c86c0fde632ba4cd01062fd9ccfa/5497d/gatsby-astronaut.png 600w,\n/CodeJam-Teams-Group-18/static/6d91c86c0fde632ba4cd01062fd9ccfa/483e1/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},165:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),s=n(a(51)),o=n(a(146)),l=n(a(147)),c=n(a(0)),d=n(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+o+l+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,i=(0,o.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:n,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var v=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.Tag,A="boolean"==typeof v?"lightgray":v,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),S={title:t,alt:this.state.isVisible?"":a,style:w,className:p};if(m){var x=m;return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&c.default.createElement(y,(0,l.default)({src:x.base64},S)),x.tracedSVG&&c.default.createElement(y,(0,l.default)({src:x.tracedSVG},S)),A&&c.default.createElement(b,{title:t,style:{backgroundColor:A,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),c.default.createElement(y,{alt:a,title:t,src:x.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},x))}}))}if(h){var T=h,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},i);return"inherit"===i.display&&delete R.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},T.base64&&c.default.createElement(y,(0,l.default)({src:T.base64},S)),T.tracedSVG&&c.default.createElement(y,(0,l.default)({src:T.tracedSVG},S)),A&&c.default.createElement(b,{title:t,style:{backgroundColor:A,width:T.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:T.height}}),this.state.isVisible&&c.default.createElement("picture",null,T.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),c.default.createElement("source",{srcSet:T.srcSet,sizes:T.sizes}),c.default.createElement(y,{alt:a,title:t,width:T.width,height:T.height,src:T.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:T.width,height:T.height},T))}}))}return null},t}(c.default.Component);v.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),A=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});v.propTypes={resolutions:b,sizes:A,fixed:b,fluid:A,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var w=v;t.default=w},166:function(e,t,a){e.exports={container:"container-module--container--3C57J"}},167:function(e,t,a){"use strict";a(168)("link",function(e){return function(t){return e(this,"a","href",t)}})},168:function(e,t,a){var n=a(12),r=a(25),i=a(19),s=/"/g,o=function(e,t,a,n){var r=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},169:function(e,t,a){e.exports={user:"about-us-module--user--1NwoH",avatar:"about-us-module--avatar--kNS7b",description:"about-us-module--description--2EweH",username:"about-us-module--username--3fgJv",excerpt:"about-us-module--excerpt--KhbeI",title:"about-us-module--title--3Vp90",image:"about-us-module--image--3GgAV"}},170:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjARwEMRc5LCiyAAAB8UlEQVQ4y42Uz0tUURTHP+8RVApFYiFagQ6pYy1CsI2QbhSaiRJUXEm2aReFGIL/gAhtBBe2KWEKNLcqgchswjIrKQUVhmEooU2RUATzy9ti3rvv3pn3vO/czT3nfD/vcc+591j4W4ROmjkP/CXDJz5QIIRdYYpviLL1i1najgcbmKNYAbqryAtqg9A7HAaC7vpBtx/6iCMjKhBkGSpHR0KiAkGeuIpG+eck5tkIPPE6L539IREPXneCB1hAK4vkSPOGBK9ZJcNPElwDIOMok1glNCa/vmZs5IrU9pUCSRl4b4Tf6to6pbPbRnhTqcJVeKC4fUY4rqjH4bl0do0owBepX7Jpl2FzuXRV1KZeOgehYE9VY3NGOidCwba3s8lLpzEUfFnuipCSBUiFgrekftNWahyhy4je4Lrc78GY0rmvSgX8rJrPivo+NGmz4yMtgWgT7xRljhqAZQSCUZ7wB0GWVwxwsaxI/STIak90oZRqp4Bgn0ZukXdSaaUlp9mreN0Fom56GoFgA4uH5BAIJrQ/P66AZ7zkSec0w1wixlPuUaXBd8vQLU6p6XpSCH5zG/UOudatod/VIeTiu84oWmOVDi13U0HT/jfxLM+kpFfLdMn4YvDYh362EQh6fOAdBjGYRQ+TXNBi55gm7s5Lz/4DtOVTNaVkBiQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDEtMjhUMDM6NDk6MjMrMDE6MDCeqNzcAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAxLTI4VDAzOjQ5OjIzKzAxOjAw7/VkYAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},171:function(e,t,a){e.exports={user:"person-of-the-day-module--user--36jTx",avatar:"person-of-the-day-module--avatar--DJZY2",description:"person-of-the-day-module--description--173yz",username:"person-of-the-day-module--username--1Ge6z",excerpt:"person-of-the-day-module--excerpt--2CZrM",title:"person-of-the-day-module--title--3sYHO"}},172:function(e){e.exports={firstName:"Еўсцігней",lastName:"Міровіч",birth:"29 ліпеня 1878",death:"25 лютага 1952",id:"003",gal:"y",city:"Санкт-Пецярбург",youtube:"",pict:"1.jpg",data:[{key:"001",dateText:"29 ліпеня 1878",content:"Нарадзіўся ў сям’і чыгуначніка, выхадца з Паўночна-Заходняга краю."},{key:"002",dateText:"1900",content:"З 1900 працаваў у пецярбургскіх тэатрах акцёрам, затым рэжысёрам."},{key:"003",dateText:"1941—1945",content:"1941—1945 рэжысёр Беларускага тэатра ім. Я. Купалы."},{key:"004",dateText:"25 лютага 1952",content:"Пахаваны на Вайсковых могілках Мінска."}]}},173:function(e){e.exports={firstName:"Ларыса",lastName:"Александроўская",birth:"15 лютага 1904",death:"23 мая 1980",id:"001",gal:"y",city:"Мінск",youtube:"https://www.youtube.com/watch?v=ORYrVlkTZLg&t=0s&index=98&list=WL",pict:"1.jpg",data:[{key:"001",dateText:"15 лютага 1904",content:"Нарадзілася ў Мінску."},{key:"002",dateText:"1928",content:"Скончыла Беларускі музычны тэхнікум."},{key:"003",dateText:"1919-1924",content:"Удзельніца арганізаванай ёю самадзейнай трупы пры Палітаддзеле Заходняга фронту."},{key:"004",dateText:"1951—1960",content:"Галоўны рэжысёр Беларускага тэатра оперы і балета."},{key:"005",dateText:"23 мая 1980",content:"Пахаваная на Усходніх могілках."}]}},174:function(e){e.exports={firstName:"Любоў",lastName:"Мазалеўская",birth:"12 студзеня 1903",death:"18 ліпеня 1964",id:"004",gal:"",city:"Каўшова",youtube:"",pict:"1.jpg",data:[{key:"001",dateText:"12 студзеня 1903",content:"Нарадзіўся ў горадзе Каўшова, Гродзенскі павет. Унучка Рыгора Мазалеўскага."},{key:"002",dateText:"1920",content:"У 1920 г., падчас польска-савецкай вайны, з адступаючай Чырвонай Арміяй з'ехала на ўсход."},{key:"003",dateText:"1926",content:"Скончыла Беларускую драматычную студыю ў Маскве."},{key:"004",dateText:"1956—1964",content:"Арганізатар, галоўны рэжысёр Беларускага рэспубліканскага тэатра юнага гледача (Мінск). Знялася ў шэрагу карцін беларускай кінастудыі."},{key:"005",dateText:"1992",content:"З 1992 г. прысуджаецца прэмія імя Л. І. Мазалеўскай ў галіне тэатральнага мастацтва."},{key:"006",dateText:"18 ліпеня 1964",content:"Памерла ва ўзросце 61 года."}]}},175:function(e){e.exports={firstName:"Уладзімір",lastName:"Савіцкі",birth:"9 сакавіка 1960",death:"",id:"002",gal:"y",city:"Баранавічы",youtube:"https://www.youtube.com/watch?v=iDRWxIcZK4E",pict:"1.jpg",data:[{key:"001",dateText:"9 сакавіка 1960",content:"Нарадзілася ў гораде Баранавічы."},{key:"002",dateText:"1981-1987",content:"Працаваў акцёрам Магілёўскага абласнога тэатра (г. Бабруйск)."},{key:"003",dateText:"1981",content:"Cкончыў Беларускі інстытут культуры."},{key:"004",dateText:"1991",content:"З 1991 года арганізатар (разам з А. Маркевічам) і рэжысёр тэатра-студыі Абзац."},{key:"005",dateText:"1993—2010",content:"У 1993—2010 гадах рэжысёр Купалаўскага тэатра."},{key:"006",dateText:"2010",content:"З 2010 года — мастацкі кіраўнік Беларускага тэатра юнага гледача."}]}},176:function(e,t,a){e.exports=a.p+"static/1-63575ec21efef21f299ae8881dbf17b6.gif"},177:function(e,t,a){e.exports=a.p+"static/1-5e549a571879c7f538ce23a252e555d4.jpg"},178:function(e,t,a){e.exports=a.p+"static/1-66ca901deabf6023a1ae4d1f7704716f.jpg"},179:function(e,t,a){e.exports=a.p+"static/1-cd510f6b0b262e0016abddd69e3de025.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-bb9262ddbf93818d3f95.js.map