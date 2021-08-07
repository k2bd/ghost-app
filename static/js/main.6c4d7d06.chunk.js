(this["webpackJsonpghost-app"]=this["webpackJsonpghost-app"]||[]).push([[0],{302:function(e,t,n){},376:function(e,t,n){},377:function(e,t,n){},391:function(e,t){},399:function(e,t,n){},400:function(e,t,n){},403:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),l=(n(302),n(82)),c=n(14),s=n(413),u=n(42),d=n(55),j=n(10),h=n(27),b=n(43),m=n(69),p=n.n(m),g=n(1),f=function(e){var t=e.joinGame,n=p.a.predicates[Math.floor(Math.random()*p.a.predicates.length)],r=p.a.objects[Math.floor(Math.random()*p.a.objects.length)],o=Object(a.useState)("".concat(n,"-").concat(r)),i=Object(h.a)(o,2),l=i[0],c=i[1];return Object(g.jsx)("div",{children:Object(g.jsxs)(s.c,{elevation:2,children:[Object(g.jsx)("h2",{children:"Create or Join a Game"}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(g.jsx)(s.i,{maxLength:30,onChange:function(e){return c(e.target.value)},placeholder:"Room Code...",value:l}),Object(g.jsx)(s.b,{text:"Join",intent:b.a.PRIMARY,onClick:function(){return t(l)},disabled:l.length<4})]})]})})},O=n(66),x=n(35),v=function(){var e=x.isMobile?"":"Support";return Object(g.jsx)(s.a,{icon:"dollar",text:e,href:"https://www.buymeacoffee.com/k2bd",target:"_blank",intent:"primary"})},y=n(13),w=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),n=t[0],r=t[1],o=x.isMobile?"":"How to play";return Object(g.jsxs)("div",{children:[Object(g.jsx)(s.b,{icon:"info-sign",text:o,onClick:function(){return r(!0)},intent:b.a.PRIMARY}),Object(g.jsx)(s.e,{icon:"info-sign",onClose:function(){return r(!1)},title:"How to play 2D Ghost",isOpen:n,children:Object(g.jsxs)("div",{className:y.DIALOG_BODY,children:[Object(g.jsx)("h2",{children:"Overview"}),Object(g.jsxs)("p",{children:["2D Ghost is a competitive word building game in which players take turns placing letters on a board while trying to avoid completing 4+ letter words horizontally or vertically. As the name suggests it's a 2D extension of the existing word game ",Object(g.jsx)("a",{href:"https://en.wikipedia.org/wiki/Ghost_(game)",target:"_blank",rel:"noreferrer",children:"Ghost"}),"."]}),Object(g.jsx)("p",{children:"A turn consists of either placing a tile on an available square, or challenging the previous move."}),Object(g.jsx)("h2",{children:"Tile placement"}),Object(g.jsx)("p",{children:"A new tile can be placed either at the first free tile along the horizontal or vertical edges, or at any tile that has at least 3 filled neighbors (including diagonals)."}),Object(g.jsx)("p",{children:"Playable tiles are highlighted in yellow, and the most recently played tile is coloured blue."}),Object(g.jsx)("img",{src:"https://imgur.com/C9ME23a.png"}),Object(g.jsx)("p",{children:"In this example, the tile to the right of the 'N' and below the 'E' are playable because they're the next free tiles on the top and left borders of the board, and the tile to the right of the 'X' is playable because it has 3 neighbors (the 'X', 'A', and 'N'). No other tiles are playable."}),Object(g.jsx)("p",{children:"When you make a move, you must be moving towards the completion of a 4+ letter word in both the row and column that your move is made in. In the above example, the player who placed the most recent move (the 'X') must be thinking of valid 4+ letter words starting with 'AX' and 'EX'. However, players must not actually complete 4+ letter words. Failing either condition leaves you vulnerable to a challenge. Of course, if you can't think of any valid moves, bluffing may be your only option."}),Object(g.jsx)("h2",{children:"Challenges"}),Object(g.jsx)("p",{children:"If the turn player believes the previous move either completed a word, or cannot complete a word, in the row or column the most recent turn was made in, they may issue a challenge. Remember the rules in the 'Valid Words' section when making, responding to, and voting on challenges."}),Object(g.jsx)("p",{children:"When a 'No Valid Words' challenge is made, the challenged player is given an opportunity to respond with what they believe to be valid words in the row and column their move was made in. 'Completed Word' challenges go straight to a vote."}),Object(g.jsx)("p",{children:"When a challenge has been made, players must vote on whether the challenge is successful. If it is, the challenged player will be removed from the game. If it fails, the challenger is removed. A challenge must get at least 50% of the votes to pass."}),Object(g.jsx)("h2",{children:"Valid Moves"}),Object(g.jsx)("h3",{children:"Only 4+ letter words count"}),Object(g.jsx)("p",{children:"Only words that are 4 letters or more are more count as completed words. It's OK for a board to contain the words 'A', 'AN', and 'ANT', but not 'ANTS'."}),Object(g.jsx)("h3",{children:"All words start at the edges"}),Object(g.jsx)("p",{children:"All words in 2D Ghost start at the edge of the board. So, if a board has '_,_,_,F,A,C' in a row or column, no word would be completed by playing an 'E' at the end, and this would be a valid move towards the word 'surface'."}),Object(g.jsx)("h3",{children:"The board doesn't have to be fully solvable"}),Object(g.jsx)("p",{children:"Quite often a move is valid for the row and column it's played in, but makes some other part of the board impossible to solve. This is fine, and can be used to strategically exclude moves previously accessible to your opponents."}),Object(g.jsx)("h3",{children:"Invalid moves that don't get challenged are fine"}),Object(g.jsx)("p",{children:"If a move was invalid, in that it either completed a 4+ letter word, or it was impossible to complete words in the row or column, and this went unchallenged, that's fine and the game continues. Bluffing is a legal strategy."}),Object(g.jsx)("h2",{children:"Misc"}),Object(g.jsx)("h3",{children:"Dictionary Use"}),Object(g.jsx)("p",{children:"Your group may choose to select a dictionary to be the judge of valid words in your game. If you do, this should be consulted only during challenge votes, and only to evaluate the challenge. You shouldn't use a dictionary when making moves or when writing in answers to a 'No Valid Moves' challenge."})]})})]})},C=n(2),k=n(18),N=n.n(k),R=n(33),S=n(19),A=n(171),D=n.n(A).a.create({baseURL:"https://ce5muj9w5f.execute-api.eu-west-2.amazonaws.com/main"}),I=Object(S.a)("player/logOut"),P=Object(S.b)("player/loginGuest",function(){var e=Object(R.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.post("/login/guest",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=function(e){var t=e.enabled,n=Object(j.c)((function(e){return e.player})).loginStatus,r=Object(a.useState)(""),o=Object(h.a)(r,2),i=o[0],l=o[1],c=Object(j.b)(),u=function(){c(P({name:i}))};return Object(g.jsx)(s.e,{isOpen:t,title:"Login",isCloseButtonShown:!1,icon:"user",children:Object(g.jsx)("div",{className:C.a.DIALOG_BODY,children:Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault(),u()},children:Object(g.jsx)(s.f,{label:"Login as Guest",children:Object(g.jsx)("div",{className:C.a.FORM_CONTENT,children:Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(g.jsx)(s.i,{placeholder:"Display name",onChange:function(e){return l(e.target.value)},value:i,fill:!0}),Object(g.jsx)(s.b,{onClick:function(){return u()},icon:"log-in",disabled:i.length<3,loading:"loggingIn"===n})]})})})})})})},M=n(172),G=function(e){var t=e.roomCode,n=Object(c.g)(),a=Object(j.c)((function(e){return e.player.localPlayer})),r=Object(M.a)(window.location.href),o=Object(h.a)(r,2),i=o[0],l=o[1],u=a&&!x.isMobile?Object(g.jsx)(s.m,{fill:!0,minimal:!0,large:!0,icon:Object(g.jsx)(d.a,{size:"20",round:!0,src:null===a||void 0===a?void 0:a.imageUrl}),children:null===a||void 0===a?void 0:a.name}):Object(g.jsx)(g.Fragment,{}),b=t&&!x.isMobile?Object(g.jsx)(s.b,{text:t,rightIcon:i?"tick":"clipboard",onClick:function(){return l()}}):Object(g.jsx)(g.Fragment,{});return Object(g.jsxs)(s.j,{children:[Object(g.jsxs)(s.j.Group,{align:O.a.LEFT,children:[Object(g.jsx)(s.j.Heading,{children:Object(g.jsx)(s.b,{text:x.isMobile?"":"2D Ghost",icon:"home",onClick:function(){n.push("/")},outlined:!0})}),u,Object(g.jsx)(L,{enabled:null===a}),Object(g.jsx)(s.j.Divider,{}),Object(g.jsx)(s.j.Heading,{children:b})]}),Object(g.jsxs)(s.j.Group,{align:O.a.RIGHT,children:[Object(g.jsx)(w,{}),Object(g.jsx)(s.j.Divider,{}),Object(g.jsx)(v,{})]})]})},W=(n(376),function(){var e=Object(c.g)(),t=Object(j.b)(),n=Object(j.c)((function(e){return e.player.localPlayer}));return Object(g.jsxs)("div",{className:"game-join-page",children:[Object(g.jsx)(G,{}),Object(g.jsxs)("div",{className:"vertical-centering",children:[Object(g.jsx)(f,{joinGame:function(t){return function(t){e.push("/room/".concat(t))}(t)}}),Object(g.jsxs)(s.c,{elevation:u.a.TWO,style:{marginTop:"2em"},children:[Object(g.jsx)(s.m,{fill:!0,minimal:!0,large:!0,icon:Object(g.jsx)(d.a,{size:"20",round:!0,src:null===n||void 0===n?void 0:n.imageUrl}),style:{marginBottom:"1em"},children:null===n||void 0===n?void 0:n.name}),Object(g.jsx)(s.b,{text:"Logout",onClick:function(){t(I())},icon:"log-out"})]})]})]})}),E=n(176),T=n.n(E),_=n(412),Y=Object(S.a)("games/reloadGame"),V=Object(S.b)("games/fetchGameByRoomCode",function(){var e=Object(R.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("/game/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),B=Object(S.b)("games/createGame",function(){var e=Object(R.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.post("/game/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z=Object(S.b)("games/joinGame",function(){var e=Object(R.a)(N.a.mark((function e(t,n){var a,r,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.player,e.next=3,D.post("/game/".concat(a,"/player"),r);case 3:if(404!==(o=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:404}));case 6:return e.abrupt("return",o.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),F=Object(S.b)("games/startGame",function(){var e=Object(R.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.post("/game/".concat(t,"/start"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),U=Object(S.b)("games/makeMove",function(){var e=Object(R.a)(N.a.mark((function e(t,n){var a,r,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.move,e.next=3,D.post("/game/".concat(a,"/move"),r);case 3:if(200===(o=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:o.status}));case 6:return e.abrupt("return",o.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),H=Object(S.b)("games/makeChallenge",function(){var e=Object(R.a)(N.a.mark((function e(t,n){var a,r,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.challenge,e.next=3,D.post("/game/".concat(a,"/challenge"),r);case 3:if(200===(o=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:o.status}));case 6:return e.abrupt("return",o.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),X=Object(S.b)("games/makeChallengeResponse",function(){var e=Object(R.a)(N.a.mark((function e(t,n){var a,r,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.challengeResponse,e.next=3,D.post("/game/".concat(a,"/challenge-response"),r);case 3:if(200===(o=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:o.status}));case 6:return e.abrupt("return",o.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),J=Object(S.b)("games/makeChallengeVote",function(){var e=Object(R.a)(N.a.mark((function e(t,n){var a,r,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.vote,e.next=3,D.post("/game/".concat(a,"/challenge-vote"),r);case 3:if(200===(o=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:o.status}));case 6:return e.abrupt("return",o.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),q=function(){var e=Object(j.c)((function(e){return e.player.localPlayer})),t=Object(j.c)((function(e){return e.game})).game,n=Object(j.b)(),a=t&&(null===e||void 0===e?void 0:e.name)===t.turnPlayerName&&t.moves.length>0&&null===t.challenge&&null===t.winner,r=function(a){null!==t&&null!==e&&n(H({roomCode:t.roomCode,challenge:{challengerName:e.name,move:t.moves[t.moves.length-1],type:a}}))},o=Object(g.jsx)(s.a,{icon:"flag",text:"Challenge",disabled:!a,intent:b.a.DANGER}),i=Object(g.jsxs)("div",{children:[Object(g.jsx)(s.b,{text:"No valid words",disabled:!a,intent:b.a.PRIMARY,onClick:function(){return r("NO_VALID_WORDS")}}),Object(g.jsx)(s.b,{text:"Word already complete",disabled:!a,intent:b.a.PRIMARY,onClick:function(){return r("COMPLETE_WORD")}})]});return Object(g.jsx)(_.a,{content:i,disabled:!a,placement:"bottom",children:o})},K=function(){return Object(j.c)((function(e){return e.game}))},Q=function(){return Object(j.c)((function(e){return e.player.localPlayer}))},Z=(n(377),function(e){var t=e.letter,n=e.position,a=e.isPlayable,r=e.isMostRecentlyPlayed,o=a?"#fff715":r?"#40acde":"#98f795",i=Q(),l=K().game,c=Object(j.b)(),s=(null===i||void 0===i?void 0:i.name)!==(null===l||void 0===l?void 0:l.turnPlayerName)||!a||null!==(null===l||void 0===l?void 0:l.winner)?Object(g.jsx)("div",{className:"tile-text",children:t}):Object(g.jsx)("input",{type:"text",className:"tile-input",value:t||"",size:1,onChange:function(e){return function(e){var t=e.toUpperCase();/[A-Z]/.test(t)&&null!==l&&null!==i&&c(U({roomCode:l.roomCode,move:{playerName:i.name,position:n,letter:t}}))}(e.target.value)}});return Object(g.jsx)("div",{className:"tile",style:{background:o},children:Object(g.jsx)("div",{className:"tile-content",children:s})})}),$=function(e,t){var n=e.filter((function(e){return e.position.y===t})).sort((function(e,t){return e.position.x-t.position.x})),a=n.map((function(e){return e.position.x})),r=n[n.length-1].position.x+1;return Array.from(Array(r).keys()).map((function(e,t){return a.includes(t)?n[a.indexOf(t)].letter:null}))},ee=function(e,t){var n=e.filter((function(e){return e.position.x===t})).sort((function(e,t){return e.position.y-t.position.y})),a=n.map((function(e){return e.position.y})),r=n[n.length-1].position.y+1;return Array.from(Array(r).keys()).map((function(e,t){return a.includes(t)?n[a.indexOf(t)].letter:null}))},te=function(e){var t=e.entries;return Object(g.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:t.map((function(e,t){return Object(g.jsx)(Z,{letter:e,position:{x:t,y:0},isPlayable:!1,isMostRecentlyPlayed:!1},t)}))})},ne=function(){var e,t=Object(j.c)((function(e){return e.player.localPlayer})),n=Object(j.c)((function(e){return e.game})).game,r=Object(a.useState)(""),o=Object(h.a)(r,2),i=o[0],l=o[1],c=Object(a.useState)(""),u=Object(h.a)(c,2),d=u[0],b=u[1],m=Object(j.b)();if(!n||!t||0==n.moves.length)return Object(g.jsx)(g.Fragment,{});var p=n.challenge&&n.challenge.move.playerName===t.name&&"AWAITING_RESPONSE"===n.challenge.state,f=n.moves[n.moves.length-1],O=$(n.moves,f.position.y),x=ee(n.moves,f.position.x);return Object(g.jsxs)(s.e,{isOpen:p,title:"Challenge Response",isCloseButtonShown:!1,icon:"flag",children:[Object(g.jsxs)("div",{className:C.a.DIALOG_BODY,children:[Object(g.jsx)("h3",{children:"You have been challenged!"}),Object(g.jsxs)("p",{children:[null===n||void 0===n||null===(e=n.challenge)||void 0===e?void 0:e.challengerName," has challenged that your most recent move cannot make valid words."]}),Object(g.jsx)("p",{children:"Please provide words that can be made from the row and column of your last move, containing the placed letters and adding as many letters to the end as you want."}),Object(g.jsx)("p",{children:"Remember the words should be at least 4 letters long."}),Object(g.jsxs)(s.f,{label:"Row:",inline:!0,children:[Object(g.jsx)(te,{entries:O}),Object(g.jsx)(s.i,{placeholder:O.map((function(e){return e||"_"})).join("")+"...",onChange:function(e){return l(e.target.value)},value:i})]}),Object(g.jsxs)(s.f,{label:"Col:",inline:!0,children:[Object(g.jsx)(te,{entries:x}),Object(g.jsx)(s.i,{placeholder:x.map((function(e){return e||"_"})).join("")+"...",onChange:function(e){return b(e.target.value)},value:d})]})]}),Object(g.jsx)(s.b,{text:"Submit",onClick:function(){m(X({roomCode:n.roomCode,challengeResponse:{rowWord:i,colWord:d}}))},disabled:0===i.length||0===d.length})]})},ae=function(){var e=Object(j.c)((function(e){return e.player.localPlayer})),t=Object(j.c)((function(e){return e.game})).game,n=Object(j.b)();if(!t||!e||0==t.moves.length||!t.challenge)return Object(g.jsx)(g.Fragment,{});var a,r=$(t.moves,t.challenge.move.position.y),o=ee(t.moves,t.challenge.move.position.x),i=t.challenge&&"VOTING"===t.challenge.state,l=function(a){n(J({roomCode:t.roomCode,vote:{voterName:e.name,proChallenge:a}}))},c=function(){var n;return null===(n=t.challenge)||void 0===n?void 0:n.votes.map((function(e){return e.voterName})).includes(e.name)};switch(t.challenge.type){case"NO_VALID_WORDS":var u,d,h=(null===(u=t.challenge.response)||void 0===u?void 0:u.rowWord.toUpperCase())||"",b=(null===(d=t.challenge.response)||void 0===d?void 0:d.colWord.toUpperCase())||"";a=Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{children:[t.challenge.challengerName," believes valid words can't be made from the most recent move."]}),Object(g.jsxs)("p",{children:[t.challenge.move.playerName," has provided the following words in response."]}),Object(g.jsxs)(s.f,{label:"Row:",inline:!0,children:[Object(g.jsx)(s.f,{label:"Tiles:",inline:!1,children:Object(g.jsx)(te,{entries:r})}),Object(g.jsx)(s.f,{label:"Response:",inline:!1,children:Object(g.jsx)(te,{entries:h.split("")})})]}),Object(g.jsxs)(s.f,{label:"Col:",inline:!0,children:[Object(g.jsx)(s.f,{label:"Tiles:",inline:!1,children:Object(g.jsx)(te,{entries:o})}),Object(g.jsx)(s.f,{label:"Response:",inline:!1,children:Object(g.jsx)(te,{entries:b.split("")})})]})]});break;case"COMPLETE_WORD":a=Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{children:[t.challenge.challengerName," believes the most recent move completed a word."]}),Object(g.jsxs)(s.f,{label:"Row:",inline:!0,children:[Object(g.jsx)("p",{children:"Tiles:"}),Object(g.jsx)(te,{entries:r})]}),Object(g.jsxs)(s.f,{label:"Col:",inline:!0,children:[Object(g.jsx)("p",{children:"Tiles:"}),Object(g.jsx)(te,{entries:o})]})]})}return Object(g.jsx)(s.e,{isOpen:i,title:"Challenge!",isCloseButtonShown:!1,icon:"flag",children:Object(g.jsxs)("div",{className:C.a.DIALOG_BODY,children:[Object(g.jsxs)("h3",{children:[t.challenge.challengerName," has challenged ",t.challenge.move.playerName,"!"]}),a,Object(g.jsx)("p",{children:"Is the challenge successful?"}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(g.jsx)(s.b,{text:"Yes, kick ".concat(t.challenge.move.playerName),onClick:function(){return l(!0)},disabled:c()}),Object(g.jsx)(s.b,{text:"No, kick ".concat(t.challenge.challengerName),onClick:function(){return l(!1)},disabled:c()})]})]})})},re=n(179),oe=n.n(re),ie=n(180),le=n.n(ie),ce=function(e,t){var n=t.x,a=t.y;return null===e[n][a]&&(0===n&&0===a||(0==n&&null!==e[n][a-1]||(0==a&&null!==e[n-1][a]||function(e,t){var n=t.x,a=t.y;return e.slice(n-1,n+2).map((function(e){return e.slice(a-1,a+2).map((function(e){return e?1:0})).reduce((function(e,t){return e+t}),0)})).reduce((function(e,t){return e+t}),0)}(e,{x:n,y:a})>=3)))},se=function(){var e=K(),t=e.game,n=e.gameLoadStatus;if(["gameDoesNotExist","creatingGame","joining"].includes(n))return Object(g.jsx)(s.k,{size:s.l.LARGE});var a=(t?t.moves:[]).map((function(e){return Math.max(e.position.x,e.position.y)})).reduce((function(e,t){return Math.max(e,t)}),0)+2,r=Array.from(Array(a).keys()).map((function(){return Array.from(Array(a).keys()).map((function(){return null}))}));null!==t&&t.moves.forEach((function(e){return r[e.position.x][e.position.y]=e.letter}));var o=r.map((function(e,n){return Object(g.jsx)("div",{style:{flexDirection:"row"},children:e.map((function(e,a){var o;return Object(g.jsx)(Z,{letter:e,position:{x:n,y:a},isPlayable:ce(r,{x:n,y:a}),isMostRecentlyPlayed:oe()(null===t||void 0===t||null===(o=t.moves[t.moves.length-1])||void 0===o?void 0:o.position,{x:n,y:a})},a)}))},n)}));return Object(g.jsx)(le.a,{cancel:".tile-input",children:Object(g.jsx)("div",{style:{display:"flex"},children:o})})},ue=function(e){var t=e.player,n=e.turnPlayer,a=e.loser,r=e.winner,o=n?Object(g.jsx)("b",{children:t.name}):a?Object(g.jsx)("s",{children:t.name}):t.name,i=n?b.a.PRIMARY:b.a.NONE,l=r?Object(g.jsx)(s.h,{icon:"crown"}):null;return Object(g.jsxs)(s.m,{fill:!0,minimal:a,intent:i,large:!0,icon:Object(g.jsx)(d.a,{size:"20",round:!0,src:t.imageUrl}),children:[l,o,l]})},de=function(){var e=Object(j.c)((function(e){return e.game})).game,t=Object(a.useState)(!x.isMobile),n=Object(h.a)(t,2),r=n[0],o=n[1],i=e?e.players.map((function(t,n){var a=null!==e.winner&&e.winner.name===t.name;return Object(g.jsx)(ue,{player:t,turnPlayer:t.name==e.turnPlayerName,loser:!1,winner:a},n)})):[],l=e?e.losers.map((function(e,t){return Object(g.jsx)(ue,{player:e,turnPlayer:!1,loser:!0,winner:!1},t)})):[];return Object(g.jsxs)("div",{children:[Object(g.jsx)(s.b,{fill:!0,outlined:!0,text:Object(g.jsx)("b",{children:"Players"}),rightIcon:r?"chevron-down":"chevron-left",onClick:function(){return o(!r)}}),Object(g.jsxs)(s.d,{isOpen:r,children:[i,l]})]})},je=function(){return Object(c.h)().roomCode},he=function(){var e=je(),t=K().game,n=Object(j.b)();return Object(g.jsxs)(s.c,{elevation:2,children:[Object(g.jsx)(s.g,{children:"Welcome to the game!"}),Object(g.jsx)("p",{children:"The game has not started yet. Start the game when everyone has joined."}),Object(g.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:Object(g.jsx)(s.b,{text:"Everyone's in!",intent:b.a.PRIMARY,onClick:function(){t&&!t.started&&n(F(e))}})})]})},be=(n(399),function(){var e=je(),t=K(),n=t.game,a=t.gameLoadStatus,r=t.joined,o=t.joinedRoomCode,i=Q(),l=Object(j.b)();if(T()((function(){return l(V(e))}),1e3),o&&o!==e&&l(Y()),null===n)switch(a){case"idle":l(V(e));break;case"gameDoesNotExist":l(B(e))}else r||n.started||null===i||r||!n||n.started||l(z({roomCode:e,player:i}));var c=(null===n||void 0===n?void 0:n.started)?Object(g.jsx)(se,{}):Object(g.jsx)(he,{});return Object(g.jsxs)("div",{children:[Object(g.jsx)(G,{roomCode:e}),Object(g.jsxs)("div",{className:"with-sidebar",children:[Object(g.jsxs)("div",{className:"sidebar",children:[Object(g.jsx)(de,{}),Object(g.jsx)(q,{})]}),Object(g.jsx)("div",{className:"not-sidebar",children:Object(g.jsx)("div",{className:"game-page",children:Object(g.jsx)("div",{className:"vertical-centering",children:c})})})]}),Object(g.jsx)(ne,{}),Object(g.jsx)(ae,{})]})}),me=(n(400),function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(l.a,{basename:"/",children:Object(g.jsxs)(c.d,{children:[Object(g.jsx)(c.b,{path:"/",exact:!0,component:W}),Object(g.jsx)(c.b,{path:"/room/:roomCode",component:be}),Object(g.jsx)(c.a,{to:"/"})]})})})}),pe=n(181),ge=n(16),fe=n(182),Oe=n(107),xe=n(183),ve=n.n(xe),ye=n(68),we={game:null,gameLoadStatus:"idle",joined:!1,joinedRoomCode:null},Ce=Object(S.c)({name:"games",initialState:we,reducers:{},extraReducers:function(e){e.addCase(Y,(function(e){e.game=we.game,e.gameLoadStatus=we.gameLoadStatus,e.joined=we.joined,e.joinedRoomCode=we.joinedRoomCode})),e.addCase(V.pending,(function(e){e.gameLoadStatus="loading"})),e.addCase(V.fulfilled,(function(e,t){e.game=t.payload,e.gameLoadStatus="idle"})),e.addCase(V.rejected,(function(e,t){e.game=null,e.gameLoadStatus="gameDoesNotExist",t.payload&&404==t.payload.statusCode&&(e.gameLoadStatus="gameDoesNotExist")})),e.addCase(B.pending,(function(e){e.game=null,e.gameLoadStatus="loading"})),e.addCase(B.fulfilled,(function(e,t){e.game=t.payload,e.gameLoadStatus="idle"})),e.addCase(B.rejected,(function(e){e.game=null,e.gameLoadStatus="error"})),e.addCase(F.fulfilled,(function(e,t){e.game=t.payload})),e.addCase(z.pending,(function(e){e.gameLoadStatus="joining",e.joined=!1,e.joinedRoomCode=null})),e.addCase(z.fulfilled,(function(e,t){e.gameLoadStatus="idle",e.joined=!0,e.game=t.payload,e.joinedRoomCode=t.payload.roomCode})),e.addCase(z.rejected,(function(e){e.gameLoadStatus="error",e.joined=!1,e.joinedRoomCode=null})),e.addCase(U.pending,(function(){})),e.addCase(U.fulfilled,(function(e,t){e.game=t.payload})),e.addCase(H.fulfilled,(function(e,t){e.game=t.payload})),e.addCase(X.fulfilled,(function(e,t){e.game=t.payload})),e.addCase(J.fulfilled,(function(e,t){e.game=t.payload}))}}),ke=Object(S.c)({name:"player",initialState:{localPlayer:null,loginStatus:"notLoggedIn"},reducers:{},extraReducers:function(e){e.addCase(I,(function(e){e.localPlayer=null,e.loginStatus="notLoggedIn"})),e.addCase(P.pending,(function(e){e.loginStatus="loggingIn"})),e.addCase(P.rejected,(function(e){e.loginStatus="notLoggedIn"})),e.addCase(P.fulfilled,(function(e,t){e.localPlayer=t.payload,e.loginStatus="loggedIn"}))}}),Ne=Object(ge.combineReducers)({game:Ce.reducer,player:ke.reducer}),Re={key:"root",storage:ve.a,whitelist:["player"]},Se=Object(Oe.a)(Re,Ne),Ae=Object(ge.createStore)(Se,Object(fe.composeWithDevTools)(Object(ge.applyMiddleware)(ye.a))),De=Ae,Ie=Object(Oe.b)(Ae);i.a.render(Object(g.jsx)(j.a,{store:De,children:Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(pe.PersistGate,{loading:Object(g.jsx)(s.k,{}),persistor:Ie,children:Object(g.jsx)(me,{})})})}),document.getElementById("root"))}},[[403,1,2]]]);
//# sourceMappingURL=main.6c4d7d06.chunk.js.map