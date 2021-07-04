(this["webpackJsonpghost-app"]=this["webpackJsonpghost-app"]||[]).push([[0],{298:function(e,t,n){},372:function(e,t,n){},373:function(e,t,n){},387:function(e,t){},392:function(e,t,n){},393:function(e,t,n){},396:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),i=(n(298),n(81)),l=n(14),s=n(406),u=n(41),d=n(55),j=n(10),b=n(32),m=n(42),h=n(69),p=n.n(h),g=n(1),f=function(e){var t=e.joinGame,n=p.a.predicates[Math.floor(Math.random()*p.a.predicates.length)],r=p.a.objects[Math.floor(Math.random()*p.a.objects.length)],c=Object(a.useState)("".concat(n,"-").concat(r)),o=Object(b.a)(c,2),i=o[0],l=o[1];return Object(g.jsx)("div",{children:Object(g.jsxs)(s.c,{elevation:2,children:[Object(g.jsx)("h2",{children:"Create or Join a Game"}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(g.jsx)(s.f,{maxLength:30,onChange:function(e){return l(e.target.value)},placeholder:"Room Code...",value:i}),Object(g.jsx)(s.b,{text:"Join",intent:m.a.PRIMARY,onClick:function(){return t(i)},disabled:i.length<4})]})]})})},O=n(66),x=n(43),v=function(){var e=x.isMobile?"":"Support";return Object(g.jsx)(s.a,{icon:"dollar",text:e,href:"https://www.buymeacoffee.com/k2bd",target:"_blank",intent:"primary"})},y=n(13),C=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],c=x.isMobile?"":"How to play";return Object(g.jsxs)("div",{children:[Object(g.jsx)(s.b,{icon:"info-sign",text:c,onClick:function(){return r(!0)},intent:m.a.PRIMARY}),Object(g.jsx)(s.d,{icon:"info-sign",onClose:function(){return r(!1)},title:"How to play 2D Ghost",isOpen:n,children:Object(g.jsxs)("div",{className:y.DIALOG_BODY,children:[Object(g.jsx)("h3",{children:"Overview"}),Object(g.jsx)("p",{children:"2D Ghost is a competitive word building game in which players take turns placing letters on a board while trying to avoid completing words."}),Object(g.jsx)("h3",{children:"Where can I place a tile?"}),Object(g.jsx)("p",{children:"A new tile can be placed either at the first free tile along the horizontal or vertical edges, or at any tile that has at least 3 neighbors (including diagonals). TODO: example images."}),Object(g.jsx)("p",{children:"The most recently played tile is coloured differently."}),Object(g.jsx)("h3",{children:"Challenges"}),Object(g.jsx)("p",{children:"A move can be challenged by any player. The challenge can be because the player believes the previous move either completed a word, or cannot complete a word, in the row or column the most recent turn was made in. Remember that words being built must start at the edges. (TODO: examples)."}),Object(g.jsx)("p",{children:"When a challenge has been made, players must vote on whether the challenge is successful. If it is, the challenged player will be removed from the game. If it fails, the challenger is removed. A challenge must get at least 50% of the votes to pass."})]})})]})},w=n(2),N=n(18),R=n.n(N),k=n(34),S=n(20),D=n(167),L=n.n(D).a.create({baseURL:"https://ce5muj9w5f.execute-api.eu-west-2.amazonaws.com/main"}),P=Object(S.a)("player/logOut"),A=Object(S.b)("player/loginGuest",function(){var e=Object(k.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.post("/login/guest",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=function(e){var t=e.enabled,n=Object(j.c)((function(e){return e.player})).loginStatus,r=Object(a.useState)(""),c=Object(b.a)(r,2),o=c[0],i=c[1],l=Object(j.b)(),u=function(){l(A({name:o}))};return Object(g.jsx)(s.d,{isOpen:t,title:"Login",isCloseButtonShown:!1,icon:"user",children:Object(g.jsx)("div",{className:w.a.DIALOG_BODY,children:Object(g.jsx)("form",{onSubmit:function(){return u()},children:Object(g.jsx)(s.e,{label:"Login as Guest",children:Object(g.jsx)("div",{className:w.a.FORM_CONTENT,children:Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(g.jsx)(s.f,{placeholder:"Display name",onChange:function(e){return i(e.target.value)},value:o,fill:!0}),Object(g.jsx)(s.b,{onClick:function(){return u()},icon:"log-in",disabled:o.length<3,loading:"loggingIn"===n})]})})})})})})},G=n(168),M=function(e){var t=e.roomCode,n=Object(l.g)(),a=Object(j.c)((function(e){return e.player.localPlayer})),r=Object(G.a)(window.location.href),c=Object(b.a)(r,2),o=c[0],i=c[1],u=a&&!x.isMobile?Object(g.jsx)(s.j,{fill:!0,minimal:!0,large:!0,icon:Object(g.jsx)(d.a,{size:"20",round:!0,src:null===a||void 0===a?void 0:a.imageUrl}),children:null===a||void 0===a?void 0:a.name}):Object(g.jsx)(g.Fragment,{}),m=t&&!x.isMobile?Object(g.jsx)(s.b,{text:t,rightIcon:o?"tick":"clipboard",onClick:function(){return i()}}):Object(g.jsx)(g.Fragment,{});return Object(g.jsxs)(s.g,{children:[Object(g.jsxs)(s.g.Group,{align:O.a.LEFT,children:[Object(g.jsx)(s.g.Heading,{children:Object(g.jsx)(s.b,{text:x.isMobile?"":"2D Ghost",icon:"home",onClick:function(){n.push("/")},minimal:!0})}),u,Object(g.jsx)(I,{enabled:null===a}),Object(g.jsx)(s.g.Divider,{}),Object(g.jsx)(s.g.Heading,{children:m})]}),Object(g.jsxs)(s.g.Group,{align:O.a.RIGHT,children:[Object(g.jsx)(C,{}),Object(g.jsx)(s.g.Divider,{}),Object(g.jsx)(v,{})]})]})},T=(n(372),function(){var e=Object(l.g)(),t=Object(j.b)(),n=Object(j.c)((function(e){return e.player.localPlayer}));return Object(g.jsxs)("div",{className:"game-join-page",children:[Object(g.jsx)(M,{}),Object(g.jsxs)("div",{className:"vertical-centering",children:[Object(g.jsx)(f,{joinGame:function(t){return function(t){e.push("/room/".concat(t))}(t)}}),Object(g.jsxs)(s.c,{elevation:u.a.TWO,style:{marginTop:"2em"},children:[Object(g.jsx)(s.j,{fill:!0,minimal:!0,large:!0,icon:Object(g.jsx)(d.a,{size:"20",round:!0,src:null===n||void 0===n?void 0:n.imageUrl}),style:{marginBottom:"1em"},children:null===n||void 0===n?void 0:n.name}),Object(g.jsx)(s.b,{text:"Logout",onClick:function(){t(P())},icon:"log-out"})]})]})]})}),W=n(172),E=n.n(W),_=n(405),Y=Object(S.a)("games/reloadGame"),B=Object(S.b)("games/fetchGameByRoomCode",function(){var e=Object(k.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.get("/game/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),V=Object(S.b)("games/createGame",function(){var e=Object(k.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.post("/game/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z=Object(S.b)("games/joinGame",function(){var e=Object(k.a)(R.a.mark((function e(t,n){var a,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.player,e.next=3,L.post("/game/".concat(a,"/player"),r);case 3:if(404!==(c=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:404}));case 6:return e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),F=Object(S.b)("games/makeMove",function(){var e=Object(k.a)(R.a.mark((function e(t,n){var a,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.move,e.next=3,L.post("/game/".concat(a,"/move"),r);case 3:if(200===(c=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:c.status}));case 6:return e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),H=Object(S.b)("games/makeChallenge",function(){var e=Object(k.a)(R.a.mark((function e(t,n){var a,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.challenge,e.next=3,L.post("/game/".concat(a,"/challenge"),r);case 3:if(200===(c=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:c.status}));case 6:return e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),U=Object(S.b)("games/makeChallengeResponse",function(){var e=Object(k.a)(R.a.mark((function e(t,n){var a,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.challengeResponse,e.next=3,L.post("/game/".concat(a,"/challenge-response"),r);case 3:if(200===(c=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:c.status}));case 6:return e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),J=Object(S.b)("games/makeChallengeVote",function(){var e=Object(k.a)(R.a.mark((function e(t,n){var a,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.vote,e.next=3,L.post("/game/".concat(a,"/challenge-vote"),r);case 3:if(200===(c=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:c.status}));case 6:return e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Z=function(){var e=Object(j.c)((function(e){return e.player.localPlayer})),t=Object(j.c)((function(e){return e.game})).game,n=Object(j.b)(),a=t&&(null===e||void 0===e?void 0:e.name)===t.turnPlayerName&&t.moves.length>0&&null===t.challenge,r=function(a){null!==t&&null!==e&&n(H({roomCode:t.roomCode,challenge:{challengerName:e.name,move:t.moves[t.moves.length-1],type:a}}))},c=Object(g.jsx)(s.a,{icon:"flag",text:"Challenge",disabled:!a,intent:m.a.DANGER}),o=Object(g.jsxs)("div",{children:[Object(g.jsx)(s.b,{text:"No valid words",disabled:!a,intent:m.a.PRIMARY,onClick:function(){return r("NO_VALID_WORDS")}}),Object(g.jsx)(s.b,{text:"Word already complete",disabled:!a,intent:m.a.PRIMARY,onClick:function(){return r("COMPLETE_WORD")}})]});return Object(g.jsx)(_.a,{content:o,disabled:!a,placement:"bottom",children:c})},q=(n(373),function(e){var t=e.letter,n=e.position,a=e.isPlayable,r=e.isMostRecentlyPlayed?"#fff715":"#98f795",c=Object(j.c)((function(e){return e.player.localPlayer})),o=Object(j.c)((function(e){return e.game})).game,i=Object(j.b)(),l=(null===c||void 0===c?void 0:c.name)!==(null===o||void 0===o?void 0:o.turnPlayerName)||!a,s=Object(g.jsx)("input",{type:"text",className:"tile-input",disabled:l,value:t||"",size:1,onChange:function(e){return function(e){var t=e.toUpperCase();/[A-Z]/.test(t)&&null!==o&&null!==c&&i(F({roomCode:o.roomCode,move:{playerName:c.name,position:n,letter:t}}))}(e.target.value)}});return Object(g.jsx)("div",{className:"tile",style:{background:r},children:Object(g.jsx)("div",{className:"tile-content",children:s})})}),K=function(e,t){var n=e.filter((function(e){return e.position.y===t})).sort((function(e,t){return e.position.x-t.position.x})),a=n.map((function(e){return e.position.x})),r=n[n.length-1].position.x+1;return Array.from(Array(r).keys()).map((function(e,t){return a.includes(t)?n[a.indexOf(t)].letter:null}))},Q=function(e,t){var n=e.filter((function(e){return e.position.x===t})).sort((function(e,t){return e.position.y-t.position.y})),a=n.map((function(e){return e.position.y})),r=n[n.length-1].position.y+1;return Array.from(Array(r).keys()).map((function(e,t){return a.includes(t)?n[a.indexOf(t)].letter:null}))},X=function(e){var t=e.entries;return Object(g.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:t.map((function(e,t){return Object(g.jsx)(q,{letter:e,position:{x:t,y:0},isPlayable:!1,isMostRecentlyPlayed:!1},t)}))})},$=function(){var e,t=Object(j.c)((function(e){return e.player.localPlayer})),n=Object(j.c)((function(e){return e.game})).game,r=Object(a.useState)(""),c=Object(b.a)(r,2),o=c[0],i=c[1],l=Object(a.useState)(""),u=Object(b.a)(l,2),d=u[0],m=u[1],h=Object(j.b)();if(!n||!t||0==n.moves.length)return Object(g.jsx)(g.Fragment,{});var p=n.challenge&&n.challenge.move.playerName===t.name&&"AWAITING_RESPONSE"===n.challenge.state,f=n.moves[n.moves.length-1],O=K(n.moves,f.position.y),x=Q(n.moves,f.position.x);return Object(g.jsxs)(s.d,{isOpen:p,title:"Challenge Response",isCloseButtonShown:!1,icon:"flag",children:[Object(g.jsxs)("div",{className:w.a.DIALOG_BODY,children:[Object(g.jsx)("h3",{children:"You have been challenged!"}),Object(g.jsxs)("p",{children:[null===n||void 0===n||null===(e=n.challenge)||void 0===e?void 0:e.challengerName," has challenged that your most recent move cannot make valid words."]}),Object(g.jsx)("p",{children:"Please provide words that can be made from the row and column of your last move, containing the placed letters and adding as many letters to the end as you want."}),Object(g.jsx)("p",{children:"Remember the words should be at least 4 letters long."}),Object(g.jsxs)(s.e,{label:"Row:",inline:!0,children:[Object(g.jsx)(X,{entries:O}),Object(g.jsx)(s.f,{placeholder:O.map((function(e){return e||"_"})).join("")+"...",onChange:function(e){return i(e.target.value)},value:o})]}),Object(g.jsxs)(s.e,{label:"Col:",inline:!0,children:[Object(g.jsx)(X,{entries:x}),Object(g.jsx)(s.f,{placeholder:x.map((function(e){return e||"_"})).join("")+"...",onChange:function(e){return m(e.target.value)},value:d})]})]}),Object(g.jsx)(s.b,{text:"Submit",onClick:function(){h(U({roomCode:n.roomCode,challengeResponse:{rowWord:o,colWord:d}}))},disabled:0===o.length||0===d.length})]})},ee=function(){var e=Object(j.c)((function(e){return e.player.localPlayer})),t=Object(j.c)((function(e){return e.game})).game,n=Object(j.b)();if(!t||!e||0==t.moves.length||!t.challenge)return Object(g.jsx)(g.Fragment,{});var a,r=K(t.moves,t.challenge.move.position.y),c=Q(t.moves,t.challenge.move.position.x),o=t.challenge&&"VOTING"===t.challenge.state,i=function(a){n(J({roomCode:t.roomCode,vote:{voterName:e.name,proChallenge:a}}))},l=function(){var n;return null===(n=t.challenge)||void 0===n?void 0:n.votes.map((function(e){return e.voterName})).includes(e.name)};switch(t.challenge.type){case"NO_VALID_WORDS":var u,d,b=(null===(u=t.challenge.response)||void 0===u?void 0:u.rowWord)||"",m=(null===(d=t.challenge.response)||void 0===d?void 0:d.colWord)||"";a=Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{children:[t.challenge.challengerName," believes valid words can't be made from the most recent move."]}),Object(g.jsxs)("p",{children:[t.challenge.move.playerName," has provided the following words in response."]}),Object(g.jsxs)(s.e,{label:"Row:",inline:!0,children:[Object(g.jsx)(s.e,{label:"Tiles:",inline:!1,children:Object(g.jsx)(X,{entries:r})}),Object(g.jsx)(s.e,{label:"Response:",inline:!1,children:Object(g.jsx)(X,{entries:b.split("")})})]}),Object(g.jsxs)(s.e,{label:"Col:",inline:!0,children:[Object(g.jsx)(s.e,{label:"Tiles:",inline:!1,children:Object(g.jsx)(X,{entries:c})}),Object(g.jsx)(s.e,{label:"Response:",inline:!1,children:Object(g.jsx)(X,{entries:m.split("")})})]})]});break;case"COMPLETE_WORD":a=Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{children:[t.challenge.challengerName," believes the most recent move completed a word."]}),Object(g.jsxs)(s.e,{label:"Row:",inline:!0,children:[Object(g.jsx)("p",{children:"Tiles:"}),Object(g.jsx)(X,{entries:r})]}),Object(g.jsxs)(s.e,{label:"Col:",inline:!0,children:[Object(g.jsx)("p",{children:"Tiles:"}),Object(g.jsx)(X,{entries:c})]})]})}return Object(g.jsx)(s.d,{isOpen:o,title:"Challenge!",isCloseButtonShown:!1,icon:"flag",children:Object(g.jsxs)("div",{className:w.a.DIALOG_BODY,children:[Object(g.jsxs)("h3",{children:[t.challenge.challengerName," has challenged ",t.challenge.move.playerName,"!"]}),a,Object(g.jsx)("p",{children:"Is the challenge successful?"}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(g.jsx)(s.b,{text:"Yes",onClick:function(){return i(!0)},disabled:l()}),Object(g.jsx)(s.b,{text:"No",onClick:function(){return i(!1)},disabled:l()})]})]})})},te=n(175),ne=n.n(te),ae=function(e,t){var n=t.x,a=t.y;return null===e[n][a]&&(0===n&&0===a||(0==n&&null!==e[n][a-1]||(0==a&&null!==e[n-1][a]||function(e,t){var n=t.x,a=t.y;return e.slice(n-1,n+2).map((function(e){return e.slice(a-1,a+2).map((function(e){return e?1:0})).reduce((function(e,t){return e+t}),0)})).reduce((function(e,t){return e+t}),0)}(e,{x:n,y:a})>=3)))},re=function(){var e=Object(j.c)((function(e){return e.game})),t=e.game,n=e.gameLoadStatus;if(["gameDoesNotExist","creatingGame","joining"].includes(n))return Object(g.jsx)(s.h,{size:s.i.LARGE});var a=(t?t.moves:[]).map((function(e){return Math.max(e.position.x,e.position.y)})).reduce((function(e,t){return Math.max(e,t)}),0)+2,r=Array.from(Array(a).keys()).map((function(){return Array.from(Array(a).keys()).map((function(){return null}))}));null!==t&&t.moves.forEach((function(e){return r[e.position.x][e.position.y]=e.letter}));var c=r.map((function(e,n){return Object(g.jsx)("div",{style:{flexDirection:"row"},children:e.map((function(e,a){var c;return Object(g.jsx)(q,{letter:e,position:{x:n,y:a},isPlayable:ae(r,{x:n,y:a}),isMostRecentlyPlayed:ne()(null===t||void 0===t||null===(c=t.moves[t.moves.length-1])||void 0===c?void 0:c.position,{x:n,y:a})},a)}))},n)}));return Object(g.jsx)("div",{style:{display:"flex"},children:c})},ce=function(e){var t=e.player,n=e.turnPlayer,a=e.loser,r=a?Object(g.jsx)("s",{children:t.name}):t.name,c=n?m.a.PRIMARY:m.a.NONE;return Object(g.jsx)(s.j,{fill:!0,minimal:a,intent:c,large:!0,icon:Object(g.jsx)(d.a,{size:"20",round:!0,src:t.imageUrl}),children:r})},oe=function(){var e=Object(j.c)((function(e){return e.game})).game,t=e?e.players.map((function(t,n){return Object(g.jsx)(ce,{player:t,turnPlayer:t.name==e.turnPlayerName,loser:!1},n)})):[],n=e?e.losers.map((function(e,t){return Object(g.jsx)(ce,{player:e,turnPlayer:!1,loser:!0},t)})):[];return Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{children:"Players"}),t,n]})},ie=(n(392),function(){var e=Object(l.h)().roomCode,t=Object(j.c)((function(e){return e.player.localPlayer})),n=Object(j.c)((function(e){return e.game})),a=n.game,r=n.gameLoadStatus,c=n.joined,o=n.joinedRoomCode,i=Object(j.b)();if(E()((function(){return i(B(e))}),1e3),o&&o!==e&&i(Y()),null===a)switch(r){case"idle":i(B(e));break;case"gameDoesNotExist":i(V(e))}else null===t||c||i(z({roomCode:e,player:t}));return Object(g.jsxs)("div",{children:[Object(g.jsx)(M,{roomCode:e}),Object(g.jsxs)("div",{className:"with-sidebar",children:[Object(g.jsx)("div",{className:"sidebar",children:Object(g.jsx)(oe,{})}),Object(g.jsx)("div",{className:"not-sidebar",children:Object(g.jsxs)("div",{className:"game-page",children:[Object(g.jsx)("div",{className:"vertical-centering",children:Object(g.jsx)(re,{})}),Object(g.jsx)(Z,{})]})})]}),Object(g.jsx)($,{}),Object(g.jsx)(ee,{})]})}),le=(n(393),function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(i.a,{basename:"/",children:Object(g.jsxs)(l.d,{children:[Object(g.jsx)(l.b,{path:"/",exact:!0,component:T}),Object(g.jsx)(l.b,{path:"/room/:roomCode",component:ie}),Object(g.jsx)(l.a,{to:"/"})]})})})}),se=n(176),ue=n(16),de=n(177),je=n(105),be=n(178),me=n.n(be),he=n(68),pe={game:null,gameLoadStatus:"idle",joined:!1,joinedRoomCode:null},ge=Object(S.c)({name:"games",initialState:pe,reducers:{},extraReducers:function(e){e.addCase(Y,(function(e){e.game=pe.game,e.gameLoadStatus=pe.gameLoadStatus,e.joined=pe.joined,e.joinedRoomCode=pe.joinedRoomCode})),e.addCase(B.pending,(function(e){e.gameLoadStatus="loading"})),e.addCase(B.fulfilled,(function(e,t){e.game=t.payload,e.gameLoadStatus="idle"})),e.addCase(B.rejected,(function(e,t){e.game=null,e.gameLoadStatus="gameDoesNotExist",t.payload&&404==t.payload.statusCode&&(e.gameLoadStatus="gameDoesNotExist")})),e.addCase(V.pending,(function(e){e.game=null,e.gameLoadStatus="loading"})),e.addCase(V.fulfilled,(function(e,t){e.game=t.payload,e.gameLoadStatus="idle"})),e.addCase(V.rejected,(function(e){e.game=null,e.gameLoadStatus="error"})),e.addCase(z.pending,(function(e){e.gameLoadStatus="joining",e.joined=!1,e.joinedRoomCode=null})),e.addCase(z.fulfilled,(function(e,t){e.gameLoadStatus="idle",e.joined=!0,e.game=t.payload,e.joinedRoomCode=t.payload.roomCode})),e.addCase(z.rejected,(function(e){e.gameLoadStatus="error",e.joined=!1,e.joinedRoomCode=null})),e.addCase(F.pending,(function(){})),e.addCase(F.fulfilled,(function(e,t){e.game=t.payload})),e.addCase(H.fulfilled,(function(e,t){e.game=t.payload})),e.addCase(U.fulfilled,(function(e,t){e.game=t.payload})),e.addCase(J.fulfilled,(function(e,t){e.game=t.payload}))}}),fe=Object(S.c)({name:"player",initialState:{localPlayer:null,loginStatus:"notLoggedIn"},reducers:{},extraReducers:function(e){e.addCase(P,(function(e){e.localPlayer=null,e.loginStatus="notLoggedIn"})),e.addCase(A.pending,(function(e){e.loginStatus="loggingIn"})),e.addCase(A.rejected,(function(e){e.loginStatus="notLoggedIn"})),e.addCase(A.fulfilled,(function(e,t){e.localPlayer=t.payload,e.loginStatus="loggedIn"}))}}),Oe=Object(ue.combineReducers)({game:ge.reducer,player:fe.reducer}),xe={key:"root",storage:me.a,whitelist:["player"]},ve=Object(je.a)(xe,Oe),ye=Object(ue.createStore)(ve,Object(de.composeWithDevTools)(Object(ue.applyMiddleware)(he.a))),Ce=ye,we=Object(je.b)(ye);o.a.render(Object(g.jsx)(j.a,{store:Ce,children:Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(se.PersistGate,{loading:Object(g.jsx)(s.h,{}),persistor:we,children:Object(g.jsx)(le,{})})})}),document.getElementById("root"))}},[[396,1,2]]]);
//# sourceMappingURL=main.f6279e85.chunk.js.map