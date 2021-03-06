(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{72:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return b})),a.d(n,"metadata",(function(){return o})),a.d(n,"toc",(function(){return s})),a.d(n,"default",(function(){return p}));var t=a(3),r=a(7),l=(a(0),a(84)),b={id:"lobbies",title:"Lobbies",sidebar_label:"Lobbies"},o={unversionedId:"api/lobbies",id:"api/lobbies",isDocsHomePage:!1,title:"Lobbies",description:"All game activity is based around lobbies, eg. a player can only send data after joining a lobby.",source:"@site/docs\\api\\lobbies.md",slug:"/api/lobbies",permalink:"/client/api/lobbies",editUrl:"https://github.com/gamemaker-websocket/client/docs/edit/master/docs/api/lobbies.md",version:"current",sidebar_label:"Lobbies",sidebar:"default",previous:{title:"Send and receive data",permalink:"/client/api/messages"},next:{title:"Players",permalink:"/client/api/players"}},s=[],c={toc:s};function p(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"All game activity is based around lobbies, eg. a player can only send data after joining a lobby."),Object(l.b)("p",null,"Lobbies can have only one admin, which is transferable to another player at any time. If the admin leaves the lobby, the first available player will be assigned as new admin."),Object(l.b)("p",null,"Lobbies may have an optional password, to allow other players to join it."),Object(l.b)("p",null,"The max number of connected players is 254, but this can be limited from the admin."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Available public functions:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// Create a lobby (use an empty string to disable the password)\nnet_lobby_create(lobby_name, max_players, username, password)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// Get the list of lobbies\nnet_lobby_get_list()\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// Join an existing lobby\njsnet_lobby_join(lobby_id, user_name, password)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// Join to the first available lobby without a password. The function accept \n// two arguments to sort the lobbies list (eg. to join lobbies with less players)\nnet_lobby_join_auto(username, date_sort, players_count_sort)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// Leave the lobby\nnet_lobby_leave()\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// Set the player username\nnet_lobby_username(username)\n")),Object(l.b)("hr",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Admin functions:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// Specify if the lobby allows other players to join\nnet_lobby_allow_join(allow)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// Ban a specific player (by IP)\nnet_lobby_ban(player_id)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// Get the list of banned players\nnet_lobby_get_banned()\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// Kick a specific player\nnet_lobby_kick(player_id)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// Specify the max players allowed to join the lobby\nnet_lobby_max_players(max_players)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// Set the lobby password\nnet_lobby_password(password)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// Transfer the admin to another player\nnet_lobby_transfer(player_id)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// Unban a player. The argument is the hashed IP of the player returned\n// from the function net_on_lobby_get_banned\nnet_lobby_unban(hashed_ip)\n")),Object(l.b)("hr",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Lobby events:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// When the lobby has been created\nnet_on_lobby_create(success, lobby_id)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// When the lobbies list has been retrieved\nnet_on_lobby_get_list()\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// When a player joins the lobby\nnet_on_lobby_join(success, lobby_id, player_id)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// When a player leaves the lobby\nnet_on_lobby_leave(success)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// When the allow_join option has been set\nnet_on_lobby_allow_join(success, allow)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// When the max players option has been set\nnet_on_lobby_max_players(success, max_players)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// When the lobby password has been changed\nnet_on_lobby_password(success)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// When the admin has been transfered\nnet_on_lobby_transfer(success, new_admin_id)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// When a player has been unbanned\nnet_on_unban(success, hashed_ip)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// When the list of banned players has been retrieved\nnet_on_lobby_get_banned(success, banned_players)\n")))}p.isMDXComponent=!0},84:function(e,n,a){"use strict";a.d(n,"a",(function(){return i})),a.d(n,"b",(function(){return d}));var t=a(0),r=a.n(t);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function b(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?b(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},i=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,b=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),i=p(a),m=t,d=i["".concat(b,".").concat(m)]||i[m]||u[m]||l;return a?r.a.createElement(d,o(o({ref:n},c),{},{components:a})):r.a.createElement(d,o({ref:n},c))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,b=new Array(l);b[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:t,b[1]=o;for(var c=2;c<l;c++)b[c]=a[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);