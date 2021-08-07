(this["webpackJsonpghost-app"]=this["webpackJsonpghost-app"]||[]).push([[0],{302:function(e,t,n){},376:function(e,t,n){},377:function(e,t,n){},391:function(e,t){},399:function(e,t,n){},400:function(e,t,n){},403:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),i=(n(302),n(82)),l=n(14),s=n(413),u=n(42),d=n(55),j=n(10),b=n(27),m=n(43),h=n(69),p=n.n(h),f=n(1),O=function(e){var t=e.joinGame,n=p.a.predicates[Math.floor(Math.random()*p.a.predicates.length)],r=p.a.objects[Math.floor(Math.random()*p.a.objects.length)],c=Object(a.useState)("".concat(n,"-").concat(r)),o=Object(b.a)(c,2),i=o[0],l=o[1];return Object(f.jsx)("div",{children:Object(f.jsxs)(s.c,{elevation:2,children:[Object(f.jsx)("h2",{children:"Create or Join a Game"}),Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(f.jsx)(s.i,{maxLength:30,onChange:function(e){return l(e.target.value)},placeholder:"Room Code...",value:i}),Object(f.jsx)(s.b,{text:"Join",intent:m.a.PRIMARY,onClick:function(){return t(i)},disabled:i.length<4})]})]})})},g=n(66),x=n(35),v=function(){var e=x.isMobile?"":"Support";return Object(f.jsx)(s.a,{icon:"dollar",text:e,href:"https://www.buymeacoffee.com/k2bd",target:"_blank",intent:"primary"})},y=n(13),C=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],c=x.isMobile?"":"How to play";return Object(f.jsxs)("div",{children:[Object(f.jsx)(s.b,{icon:"info-sign",text:c,onClick:function(){return r(!0)},intent:m.a.PRIMARY}),Object(f.jsx)(s.e,{icon:"info-sign",onClose:function(){return r(!1)},title:"How to play 2D Ghost",isOpen:n,children:Object(f.jsxs)("div",{className:y.DIALOG_BODY,children:[Object(f.jsx)("h3",{children:"Overview"}),Object(f.jsx)("p",{children:"2D Ghost is a competitive word building game in which players take turns placing letters on a board while trying to avoid completing words."}),Object(f.jsx)("h3",{children:"Where can I place a tile?"}),Object(f.jsx)("p",{children:"A new tile can be placed either at the first free tile along the horizontal or vertical edges, or at any tile that has at least 3 neighbors (including diagonals). TODO: example images."}),Object(f.jsx)("p",{children:"The most recently played tile is coloured differently."}),Object(f.jsx)("h3",{children:"Challenges"}),Object(f.jsx)("p",{children:"A move can be challenged by any player. The challenge can be because the player believes the previous move either completed a word, or cannot complete a word, in the row or column the most recent turn was made in. Remember that words being built must start at the edges. (TODO: examples)."}),Object(f.jsx)("p",{children:"When a challenge has been made, players must vote on whether the challenge is successful. If it is, the challenged player will be removed from the game. If it fails, the challenger is removed. A challenge must get at least 50% of the votes to pass."})]})})]})},w=n(2),k=n(18),R=n.n(k),N=n(33),S=n(19),D=n(171),L=n.n(D).a.create({baseURL:"https://ce5muj9w5f.execute-api.eu-west-2.amazonaws.com/main"}),P=Object(S.a)("player/logOut"),A=Object(S.b)("player/loginGuest",function(){var e=Object(N.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.post("/login/guest",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=function(e){var t=e.enabled,n=Object(j.c)((function(e){return e.player})).loginStatus,r=Object(a.useState)(""),c=Object(b.a)(r,2),o=c[0],i=c[1],l=Object(j.b)(),u=function(){l(A({name:o}))};return Object(f.jsx)(s.e,{isOpen:t,title:"Login",isCloseButtonShown:!1,icon:"user",children:Object(f.jsx)("div",{className:w.a.DIALOG_BODY,children:Object(f.jsx)("form",{onSubmit:function(e){e.preventDefault(),u()},children:Object(f.jsx)(s.f,{label:"Login as Guest",children:Object(f.jsx)("div",{className:w.a.FORM_CONTENT,children:Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(f.jsx)(s.i,{placeholder:"Display name",onChange:function(e){return i(e.target.value)},value:o,fill:!0}),Object(f.jsx)(s.b,{onClick:function(){return u()},icon:"log-in",disabled:o.length<3,loading:"loggingIn"===n})]})})})})})})},M=n(172),G=function(e){var t=e.roomCode,n=Object(l.g)(),a=Object(j.c)((function(e){return e.player.localPlayer})),r=Object(M.a)(window.location.href),c=Object(b.a)(r,2),o=c[0],i=c[1],u=a&&!x.isMobile?Object(f.jsx)(s.m,{fill:!0,minimal:!0,large:!0,icon:Object(f.jsx)(d.a,{size:"20",round:!0,src:null===a||void 0===a?void 0:a.imageUrl}),children:null===a||void 0===a?void 0:a.name}):Object(f.jsx)(f.Fragment,{}),m=t&&!x.isMobile?Object(f.jsx)(s.b,{text:t,rightIcon:o?"tick":"clipboard",onClick:function(){return i()}}):Object(f.jsx)(f.Fragment,{});return Object(f.jsxs)(s.j,{children:[Object(f.jsxs)(s.j.Group,{align:g.a.LEFT,children:[Object(f.jsx)(s.j.Heading,{children:Object(f.jsx)(s.b,{text:x.isMobile?"":"2D Ghost",icon:"home",onClick:function(){n.push("/")},outlined:!0})}),u,Object(f.jsx)(I,{enabled:null===a}),Object(f.jsx)(s.j.Divider,{}),Object(f.jsx)(s.j.Heading,{children:m})]}),Object(f.jsxs)(s.j.Group,{align:g.a.RIGHT,children:[Object(f.jsx)(C,{}),Object(f.jsx)(s.j.Divider,{}),Object(f.jsx)(v,{})]})]})},T=(n(376),function(){var e=Object(l.g)(),t=Object(j.b)(),n=Object(j.c)((function(e){return e.player.localPlayer}));return Object(f.jsxs)("div",{className:"game-join-page",children:[Object(f.jsx)(G,{}),Object(f.jsxs)("div",{className:"vertical-centering",children:[Object(f.jsx)(O,{joinGame:function(t){return function(t){e.push("/room/".concat(t))}(t)}}),Object(f.jsxs)(s.c,{elevation:u.a.TWO,style:{marginTop:"2em"},children:[Object(f.jsx)(s.m,{fill:!0,minimal:!0,large:!0,icon:Object(f.jsx)(d.a,{size:"20",round:!0,src:null===n||void 0===n?void 0:n.imageUrl}),style:{marginBottom:"1em"},children:null===n||void 0===n?void 0:n.name}),Object(f.jsx)(s.b,{text:"Logout",onClick:function(){t(P())},icon:"log-out"})]})]})]})}),W=n(176),E=n.n(W),_=n(412),Y=Object(S.a)("games/reloadGame"),B=Object(S.b)("games/fetchGameByRoomCode",function(){var e=Object(N.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.get("/game/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),V=Object(S.b)("games/createGame",function(){var e=Object(N.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.post("/game/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z=Object(S.b)("games/joinGame",function(){var e=Object(N.a)(R.a.mark((function e(t,n){var a,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.player,e.next=3,L.post("/game/".concat(a,"/player"),r);case 3:if(404!==(c=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:404}));case 6:return e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),U=Object(S.b)("games/startGame",function(){var e=Object(N.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.post("/game/".concat(t,"/start"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),F=Object(S.b)("games/makeMove",function(){var e=Object(N.a)(R.a.mark((function e(t,n){var a,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.move,e.next=3,L.post("/game/".concat(a,"/move"),r);case 3:if(200===(c=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:c.status}));case 6:return e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),H=Object(S.b)("games/makeChallenge",function(){var e=Object(N.a)(R.a.mark((function e(t,n){var a,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.challenge,e.next=3,L.post("/game/".concat(a,"/challenge"),r);case 3:if(200===(c=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:c.status}));case 6:return e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),J=Object(S.b)("games/makeChallengeResponse",function(){var e=Object(N.a)(R.a.mark((function e(t,n){var a,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.challengeResponse,e.next=3,L.post("/game/".concat(a,"/challenge-response"),r);case 3:if(200===(c=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:c.status}));case 6:return e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Z=Object(S.b)("games/makeChallengeVote",function(){var e=Object(N.a)(R.a.mark((function e(t,n){var a,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.vote,e.next=3,L.post("/game/".concat(a,"/challenge-vote"),r);case 3:if(200===(c=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:c.status}));case 6:return e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),q=function(){var e=Object(j.c)((function(e){return e.player.localPlayer})),t=Object(j.c)((function(e){return e.game})).game,n=Object(j.b)(),a=t&&(null===e||void 0===e?void 0:e.name)===t.turnPlayerName&&t.moves.length>0&&null===t.challenge&&null===t.winner,r=function(a){null!==t&&null!==e&&n(H({roomCode:t.roomCode,challenge:{challengerName:e.name,move:t.moves[t.moves.length-1],type:a}}))},c=Object(f.jsx)(s.a,{icon:"flag",text:"Challenge",disabled:!a,intent:m.a.DANGER}),o=Object(f.jsxs)("div",{children:[Object(f.jsx)(s.b,{text:"No valid words",disabled:!a,intent:m.a.PRIMARY,onClick:function(){return r("NO_VALID_WORDS")}}),Object(f.jsx)(s.b,{text:"Word already complete",disabled:!a,intent:m.a.PRIMARY,onClick:function(){return r("COMPLETE_WORD")}})]});return Object(f.jsx)(_.a,{content:o,disabled:!a,placement:"bottom",children:c})},K=function(){return Object(j.c)((function(e){return e.game}))},Q=function(){return Object(j.c)((function(e){return e.player.localPlayer}))},X=(n(377),function(e){var t=e.letter,n=e.position,a=e.isPlayable,r=e.isMostRecentlyPlayed,c=a?"#fff715":r?"#40acde":"#98f795",o=Q(),i=K().game,l=Object(j.b)(),s=(null===o||void 0===o?void 0:o.name)!==(null===i||void 0===i?void 0:i.turnPlayerName)||!a||null!==(null===i||void 0===i?void 0:i.winner)?Object(f.jsx)("div",{className:"tile-text",children:t}):Object(f.jsx)("input",{type:"text",className:"tile-input",value:t||"",size:1,onChange:function(e){return function(e){var t=e.toUpperCase();/[A-Z]/.test(t)&&null!==i&&null!==o&&l(F({roomCode:i.roomCode,move:{playerName:o.name,position:n,letter:t}}))}(e.target.value)}});return Object(f.jsx)("div",{className:"tile",style:{background:c},children:Object(f.jsx)("div",{className:"tile-content",children:s})})}),$=function(e,t){var n=e.filter((function(e){return e.position.y===t})).sort((function(e,t){return e.position.x-t.position.x})),a=n.map((function(e){return e.position.x})),r=n[n.length-1].position.x+1;return Array.from(Array(r).keys()).map((function(e,t){return a.includes(t)?n[a.indexOf(t)].letter:null}))},ee=function(e,t){var n=e.filter((function(e){return e.position.x===t})).sort((function(e,t){return e.position.y-t.position.y})),a=n.map((function(e){return e.position.y})),r=n[n.length-1].position.y+1;return Array.from(Array(r).keys()).map((function(e,t){return a.includes(t)?n[a.indexOf(t)].letter:null}))},te=function(e){var t=e.entries;return Object(f.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:t.map((function(e,t){return Object(f.jsx)(X,{letter:e,position:{x:t,y:0},isPlayable:!1,isMostRecentlyPlayed:!1},t)}))})},ne=function(){var e,t=Object(j.c)((function(e){return e.player.localPlayer})),n=Object(j.c)((function(e){return e.game})).game,r=Object(a.useState)(""),c=Object(b.a)(r,2),o=c[0],i=c[1],l=Object(a.useState)(""),u=Object(b.a)(l,2),d=u[0],m=u[1],h=Object(j.b)();if(!n||!t||0==n.moves.length)return Object(f.jsx)(f.Fragment,{});var p=n.challenge&&n.challenge.move.playerName===t.name&&"AWAITING_RESPONSE"===n.challenge.state,O=n.moves[n.moves.length-1],g=$(n.moves,O.position.y),x=ee(n.moves,O.position.x);return Object(f.jsxs)(s.e,{isOpen:p,title:"Challenge Response",isCloseButtonShown:!1,icon:"flag",children:[Object(f.jsxs)("div",{className:w.a.DIALOG_BODY,children:[Object(f.jsx)("h3",{children:"You have been challenged!"}),Object(f.jsxs)("p",{children:[null===n||void 0===n||null===(e=n.challenge)||void 0===e?void 0:e.challengerName," has challenged that your most recent move cannot make valid words."]}),Object(f.jsx)("p",{children:"Please provide words that can be made from the row and column of your last move, containing the placed letters and adding as many letters to the end as you want."}),Object(f.jsx)("p",{children:"Remember the words should be at least 4 letters long."}),Object(f.jsxs)(s.f,{label:"Row:",inline:!0,children:[Object(f.jsx)(te,{entries:g}),Object(f.jsx)(s.i,{placeholder:g.map((function(e){return e||"_"})).join("")+"...",onChange:function(e){return i(e.target.value)},value:o})]}),Object(f.jsxs)(s.f,{label:"Col:",inline:!0,children:[Object(f.jsx)(te,{entries:x}),Object(f.jsx)(s.i,{placeholder:x.map((function(e){return e||"_"})).join("")+"...",onChange:function(e){return m(e.target.value)},value:d})]})]}),Object(f.jsx)(s.b,{text:"Submit",onClick:function(){h(J({roomCode:n.roomCode,challengeResponse:{rowWord:o,colWord:d}}))},disabled:0===o.length||0===d.length})]})},ae=function(){var e=Object(j.c)((function(e){return e.player.localPlayer})),t=Object(j.c)((function(e){return e.game})).game,n=Object(j.b)();if(!t||!e||0==t.moves.length||!t.challenge)return Object(f.jsx)(f.Fragment,{});var a,r=$(t.moves,t.challenge.move.position.y),c=ee(t.moves,t.challenge.move.position.x),o=t.challenge&&"VOTING"===t.challenge.state,i=function(a){n(Z({roomCode:t.roomCode,vote:{voterName:e.name,proChallenge:a}}))},l=function(){var n;return null===(n=t.challenge)||void 0===n?void 0:n.votes.map((function(e){return e.voterName})).includes(e.name)};switch(t.challenge.type){case"NO_VALID_WORDS":var u,d,b=(null===(u=t.challenge.response)||void 0===u?void 0:u.rowWord.toUpperCase())||"",m=(null===(d=t.challenge.response)||void 0===d?void 0:d.colWord.toUpperCase())||"";a=Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:[t.challenge.challengerName," believes valid words can't be made from the most recent move."]}),Object(f.jsxs)("p",{children:[t.challenge.move.playerName," has provided the following words in response."]}),Object(f.jsxs)(s.f,{label:"Row:",inline:!0,children:[Object(f.jsx)(s.f,{label:"Tiles:",inline:!1,children:Object(f.jsx)(te,{entries:r})}),Object(f.jsx)(s.f,{label:"Response:",inline:!1,children:Object(f.jsx)(te,{entries:b.split("")})})]}),Object(f.jsxs)(s.f,{label:"Col:",inline:!0,children:[Object(f.jsx)(s.f,{label:"Tiles:",inline:!1,children:Object(f.jsx)(te,{entries:c})}),Object(f.jsx)(s.f,{label:"Response:",inline:!1,children:Object(f.jsx)(te,{entries:m.split("")})})]})]});break;case"COMPLETE_WORD":a=Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:[t.challenge.challengerName," believes the most recent move completed a word."]}),Object(f.jsxs)(s.f,{label:"Row:",inline:!0,children:[Object(f.jsx)("p",{children:"Tiles:"}),Object(f.jsx)(te,{entries:r})]}),Object(f.jsxs)(s.f,{label:"Col:",inline:!0,children:[Object(f.jsx)("p",{children:"Tiles:"}),Object(f.jsx)(te,{entries:c})]})]})}return Object(f.jsx)(s.e,{isOpen:o,title:"Challenge!",isCloseButtonShown:!1,icon:"flag",children:Object(f.jsxs)("div",{className:w.a.DIALOG_BODY,children:[Object(f.jsxs)("h3",{children:[t.challenge.challengerName," has challenged ",t.challenge.move.playerName,"!"]}),a,Object(f.jsx)("p",{children:"Is the challenge successful?"}),Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(f.jsx)(s.b,{text:"Yes",onClick:function(){return i(!0)},disabled:l()}),Object(f.jsx)(s.b,{text:"No",onClick:function(){return i(!1)},disabled:l()})]})]})})},re=n(179),ce=n.n(re),oe=n(180),ie=n.n(oe),le=function(e,t){var n=t.x,a=t.y;return null===e[n][a]&&(0===n&&0===a||(0==n&&null!==e[n][a-1]||(0==a&&null!==e[n-1][a]||function(e,t){var n=t.x,a=t.y;return e.slice(n-1,n+2).map((function(e){return e.slice(a-1,a+2).map((function(e){return e?1:0})).reduce((function(e,t){return e+t}),0)})).reduce((function(e,t){return e+t}),0)}(e,{x:n,y:a})>=3)))},se=function(){var e=K(),t=e.game,n=e.gameLoadStatus;if(["gameDoesNotExist","creatingGame","joining"].includes(n))return Object(f.jsx)(s.k,{size:s.l.LARGE});var a=(t?t.moves:[]).map((function(e){return Math.max(e.position.x,e.position.y)})).reduce((function(e,t){return Math.max(e,t)}),0)+2,r=Array.from(Array(a).keys()).map((function(){return Array.from(Array(a).keys()).map((function(){return null}))}));null!==t&&t.moves.forEach((function(e){return r[e.position.x][e.position.y]=e.letter}));var c=r.map((function(e,n){return Object(f.jsx)("div",{style:{flexDirection:"row"},children:e.map((function(e,a){var c;return Object(f.jsx)(X,{letter:e,position:{x:n,y:a},isPlayable:le(r,{x:n,y:a}),isMostRecentlyPlayed:ce()(null===t||void 0===t||null===(c=t.moves[t.moves.length-1])||void 0===c?void 0:c.position,{x:n,y:a})},a)}))},n)}));return Object(f.jsx)(ie.a,{cancel:".tile-input",children:Object(f.jsx)("div",{style:{display:"flex"},children:c})})},ue=function(e){var t=e.player,n=e.turnPlayer,a=e.loser,r=e.winner,c=n?Object(f.jsx)("b",{children:t.name}):a?Object(f.jsx)("s",{children:t.name}):t.name,o=n?m.a.PRIMARY:m.a.NONE,i=r?Object(f.jsx)(s.h,{icon:"crown"}):null;return Object(f.jsxs)(s.m,{fill:!0,minimal:a,intent:o,large:!0,icon:Object(f.jsx)(d.a,{size:"20",round:!0,src:t.imageUrl}),children:[i,c,i]})},de=function(){var e=Object(j.c)((function(e){return e.game})).game,t=Object(a.useState)(!x.isMobile),n=Object(b.a)(t,2),r=n[0],c=n[1],o=e?e.players.map((function(t,n){var a=null!==e.winner&&e.winner.name===t.name;return Object(f.jsx)(ue,{player:t,turnPlayer:t.name==e.turnPlayerName,loser:!1,winner:a},n)})):[],i=e?e.losers.map((function(e,t){return Object(f.jsx)(ue,{player:e,turnPlayer:!1,loser:!0,winner:!1},t)})):[];return Object(f.jsxs)("div",{children:[Object(f.jsx)(s.b,{fill:!0,outlined:!0,text:Object(f.jsx)("b",{children:"Players"}),rightIcon:r?"chevron-down":"chevron-left",onClick:function(){return c(!r)}}),Object(f.jsxs)(s.d,{isOpen:r,children:[o,i]})]})},je=function(){return Object(l.h)().roomCode},be=function(){var e=je(),t=K().game,n=Object(j.b)();return Object(f.jsxs)(s.c,{elevation:2,children:[Object(f.jsx)(s.g,{children:"Welcome to the game!"}),Object(f.jsx)("p",{children:"The game has not started yet. Start the game when everyone has joined."}),Object(f.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:Object(f.jsx)(s.b,{text:"Everyone's in!",intent:m.a.PRIMARY,onClick:function(){t&&!t.started&&n(U(e))}})})]})},me=(n(399),function(){var e=je(),t=K(),n=t.game,a=t.gameLoadStatus,r=t.joined,c=t.joinedRoomCode,o=Q(),i=Object(j.b)();if(E()((function(){return i(B(e))}),1e3),c&&c!==e&&i(Y()),null===n)switch(a){case"idle":i(B(e));break;case"gameDoesNotExist":i(V(e))}else r||n.started||null===o||r||!n||n.started||i(z({roomCode:e,player:o}));var l=(null===n||void 0===n?void 0:n.started)?Object(f.jsx)(se,{}):Object(f.jsx)(be,{});return Object(f.jsxs)("div",{children:[Object(f.jsx)(G,{roomCode:e}),Object(f.jsxs)("div",{className:"with-sidebar",children:[Object(f.jsxs)("div",{className:"sidebar",children:[Object(f.jsx)(de,{}),Object(f.jsx)(q,{})]}),Object(f.jsx)("div",{className:"not-sidebar",children:Object(f.jsx)("div",{className:"game-page",children:Object(f.jsx)("div",{className:"vertical-centering",children:l})})})]}),Object(f.jsx)(ne,{}),Object(f.jsx)(ae,{})]})}),he=(n(400),function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(i.a,{basename:"/",children:Object(f.jsxs)(l.d,{children:[Object(f.jsx)(l.b,{path:"/",exact:!0,component:T}),Object(f.jsx)(l.b,{path:"/room/:roomCode",component:me}),Object(f.jsx)(l.a,{to:"/"})]})})})}),pe=n(181),fe=n(16),Oe=n(182),ge=n(107),xe=n(183),ve=n.n(xe),ye=n(68),Ce={game:null,gameLoadStatus:"idle",joined:!1,joinedRoomCode:null},we=Object(S.c)({name:"games",initialState:Ce,reducers:{},extraReducers:function(e){e.addCase(Y,(function(e){e.game=Ce.game,e.gameLoadStatus=Ce.gameLoadStatus,e.joined=Ce.joined,e.joinedRoomCode=Ce.joinedRoomCode})),e.addCase(B.pending,(function(e){e.gameLoadStatus="loading"})),e.addCase(B.fulfilled,(function(e,t){e.game=t.payload,e.gameLoadStatus="idle"})),e.addCase(B.rejected,(function(e,t){e.game=null,e.gameLoadStatus="gameDoesNotExist",t.payload&&404==t.payload.statusCode&&(e.gameLoadStatus="gameDoesNotExist")})),e.addCase(V.pending,(function(e){e.game=null,e.gameLoadStatus="loading"})),e.addCase(V.fulfilled,(function(e,t){e.game=t.payload,e.gameLoadStatus="idle"})),e.addCase(V.rejected,(function(e){e.game=null,e.gameLoadStatus="error"})),e.addCase(U.fulfilled,(function(e,t){e.game=t.payload})),e.addCase(z.pending,(function(e){e.gameLoadStatus="joining",e.joined=!1,e.joinedRoomCode=null})),e.addCase(z.fulfilled,(function(e,t){e.gameLoadStatus="idle",e.joined=!0,e.game=t.payload,e.joinedRoomCode=t.payload.roomCode})),e.addCase(z.rejected,(function(e){e.gameLoadStatus="error",e.joined=!1,e.joinedRoomCode=null})),e.addCase(F.pending,(function(){})),e.addCase(F.fulfilled,(function(e,t){e.game=t.payload})),e.addCase(H.fulfilled,(function(e,t){e.game=t.payload})),e.addCase(J.fulfilled,(function(e,t){e.game=t.payload})),e.addCase(Z.fulfilled,(function(e,t){e.game=t.payload}))}}),ke=Object(S.c)({name:"player",initialState:{localPlayer:null,loginStatus:"notLoggedIn"},reducers:{},extraReducers:function(e){e.addCase(P,(function(e){e.localPlayer=null,e.loginStatus="notLoggedIn"})),e.addCase(A.pending,(function(e){e.loginStatus="loggingIn"})),e.addCase(A.rejected,(function(e){e.loginStatus="notLoggedIn"})),e.addCase(A.fulfilled,(function(e,t){e.localPlayer=t.payload,e.loginStatus="loggedIn"}))}}),Re=Object(fe.combineReducers)({game:we.reducer,player:ke.reducer}),Ne={key:"root",storage:ve.a,whitelist:["player"]},Se=Object(ge.a)(Ne,Re),De=Object(fe.createStore)(Se,Object(Oe.composeWithDevTools)(Object(fe.applyMiddleware)(ye.a))),Le=De,Pe=Object(ge.b)(De);o.a.render(Object(f.jsx)(j.a,{store:Le,children:Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(pe.PersistGate,{loading:Object(f.jsx)(s.k,{}),persistor:Pe,children:Object(f.jsx)(he,{})})})}),document.getElementById("root"))}},[[403,1,2]]]);
//# sourceMappingURL=main.de668fa3.chunk.js.map