(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{77:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return p}));var t=r(3),a=r(7),o=(r(0),r(84)),i={id:"players",title:"Players",sidebar_label:"Players"},l={unversionedId:"api/players",id:"api/players",isDocsHomePage:!1,title:"Players",description:"All players are identified by an ID, which is assigned when joining a lobby.",source:"@site/docs\\api\\players.md",slug:"/api/players",permalink:"/client/api/players",editUrl:"https://github.com/gamemaker-websocket/client/edit/master/docs/docs/docs/api/players.md",version:"current",sidebar_label:"Players",sidebar:"default",previous:{title:"Lobbies",permalink:"/client/api/lobbies"}},c=[],s={toc:c};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All players are identified by an ID, which is assigned when joining a lobby."),Object(o.b)("p",null,"The player state (id, username, lobby) is also persisted across network reconnections (by using its IP address), until the player leaves the lobby or the server is restarted."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Available player events (wsnet/events):")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"net_on_player_join([ player_id, player_name ])\n// When a new player joins the current connected lobby\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"net_on_player_leave([ player_id, player_name ])\n// When a player leaves the lobby\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"net_on_player_username([ player_id, player_name ])\n// When a player changes its username\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"net_on_player_kickban(success, [ player_id, player_name ], kick_or_ban)\n// When a player is kicked or banned. \n// The first arguments specifies if the action has been successful\n// The third argument specifies the kind of event\n")),Object(o.b)("p",null,"You can modify these functions code to handle the events behavior."))}p.isMDXComponent=!0},84:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},y=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),y=t,d=u["".concat(i,".").concat(y)]||u[y]||b[y]||o;return r?a.a.createElement(d,l(l({ref:n},s),{},{components:r})):a.a.createElement(d,l({ref:n},s))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);