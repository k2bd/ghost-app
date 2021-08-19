(this["webpackJsonpghost-app"]=this["webpackJsonpghost-app"]||[]).push([[0],{305:function(e,t,n){},379:function(e,t,n){},381:function(e,t,n){},395:function(e,t){},403:function(e,t,n){},404:function(e,t,n){},407:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),l=n.n(o),i=(n(305),n(84)),c=n(15),s=n(417),d=n(43),u=n(56),j=n(10),h=n(21),b=n(44),m=n(71),g=n.n(m),p=n(1),f=function(e){var t=e.joinGame,n=g.a.predicates[Math.floor(Math.random()*g.a.predicates.length)],r=g.a.objects[Math.floor(Math.random()*g.a.objects.length)],o=Object(a.useState)("".concat(n,"-").concat(r)),l=Object(h.a)(o,2),i=l[0],c=l[1];return Object(p.jsx)("div",{children:Object(p.jsxs)(s.d,{elevation:2,children:[Object(p.jsx)("h2",{children:"Create or Join a Game"}),Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(p.jsx)(s.j,{maxLength:30,onChange:function(e){return c(e.target.value)},placeholder:"Room Code...",value:i}),Object(p.jsx)(s.c,{text:"Join",intent:b.a.PRIMARY,onClick:function(){return t(i)},disabled:i.length<4})]})]})})},O=n(67),v=n(36),x=function(){var e=v.isMobile?"":"Support";return Object(p.jsx)(s.b,{icon:"dollar",text:e,href:"https://www.buymeacoffee.com/k2bd",target:"_blank",intent:"primary"})},y=n(13),w=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),n=t[0],r=t[1],o=v.isMobile?"":"How to play";return Object(p.jsxs)("div",{children:[Object(p.jsx)(s.c,{icon:"info-sign",text:o,onClick:function(){return r(!0)},intent:b.a.PRIMARY}),Object(p.jsx)(s.f,{icon:"info-sign",onClose:function(){return r(!1)},title:"How to play 2D Ghost",isOpen:n,children:Object(p.jsxs)("div",{className:y.DIALOG_BODY,children:[Object(p.jsx)("h2",{children:"Overview"}),Object(p.jsxs)("p",{children:["2D Ghost is a competitive word building game in which players take turns placing letters on a board while trying to avoid completing 4+ letter words horizontally or vertically. As the name suggests it's a 2D extension of the existing word game ",Object(p.jsx)("a",{href:"https://en.wikipedia.org/wiki/Ghost_(game)",target:"_blank",rel:"noreferrer",children:"Ghost"}),"."]}),Object(p.jsx)("p",{children:"A turn consists of either placing a tile on an available square, or challenging the previous move."}),Object(p.jsx)("h2",{children:"Tile placement"}),Object(p.jsx)("p",{children:"A new tile can be placed either at the first free tile along the horizontal or vertical edges, or at any tile that has at least 3 filled neighbors (including diagonals)."}),Object(p.jsx)("p",{children:"Playable tiles are highlighted in yellow, and the most recently played tile is coloured blue."}),Object(p.jsx)("img",{src:"https://imgur.com/C9ME23a.png"}),Object(p.jsx)("p",{children:"In this example, the tiles to the right of the 'N' and below the 'E' are playable because they're the next free tiles on the top and left borders of the board, and the tile to the right of the 'X' is playable because it has 3 neighbors (the 'X', 'A', and 'N'). No other tiles are playable."}),Object(p.jsx)("p",{children:"When you make a move, you must be building towards the completion of a 4+ letter word in both the row and column that your move is made in. In the above example, the player who placed the most recent move (the 'X') must be thinking of valid 4+ letter words starting with 'AX' and 'EX'. However, players must not actually complete 4+ letter words. Failing either condition leaves you vulnerable to a challenge. Of course, if you can't think of any valid moves, bluffing may be your only option."}),Object(p.jsx)("h2",{children:"Challenges"}),Object(p.jsx)("p",{children:"If the turn player believes the previous move either completed a word, or cannot complete a word, in the row or column the most recent turn was made in, they may issue a challenge. Remember the rules in the 'Valid Words' section when making, responding to, and voting on challenges."}),Object(p.jsx)("p",{children:"When a 'No Valid Words' challenge is made, the challenged player is given an opportunity to respond with what they believe to be valid words in the row and column their move was made in. 'Completed Word' challenges go straight to a vote."}),Object(p.jsx)("p",{children:"When a challenge has been made, players must vote on whether the challenge is successful. If it is, the challenged player will be removed from the game. If it fails, the challenger is removed. A challenge must get at least 50% of the votes to pass."}),Object(p.jsx)("h2",{children:"Valid Moves"}),Object(p.jsx)("h3",{children:"Only 4+ letter words count"}),Object(p.jsx)("p",{children:"Only words that are 4 letters or more are more count as completed words. It's OK for a board to contain the words 'A', 'AN', and 'ANT', but not 'ANTS'."}),Object(p.jsx)("h3",{children:"All words start at the edges"}),Object(p.jsx)("p",{children:"All words in 2D Ghost start at the edge of the board. So, if a board has '_,_,_,F,A,C' in a row or column, no word would be completed by playing an 'E' at the end, and this would be a valid move towards the word 'surface'."}),Object(p.jsx)("h3",{children:"The board doesn't have to be fully solvable"}),Object(p.jsx)("p",{children:"Quite often a move is valid for the row and column it's played in, but makes some other part of the board impossible to solve. This is fine, and can be used to strategically exclude moves previously accessible to your opponents."}),Object(p.jsx)("h3",{children:"Invalid moves that don't get challenged are fine"}),Object(p.jsx)("p",{children:"If a move was invalid, in that it either completed a 4+ letter word, or it was impossible to complete words in the row or column, and this went unchallenged, that's fine and the game continues. Bluffing is a legal strategy."}),Object(p.jsx)("h2",{children:"Misc"}),Object(p.jsx)("h3",{children:"Dictionary Use"}),Object(p.jsx)("p",{children:"Your group may choose to select a dictionary to be the judge of valid words in your game. If you do, this should be consulted only during challenge votes, and only to evaluate the challenge. You shouldn't use a dictionary when making moves or when writing in answers to a 'No Valid Moves' challenge."})]})})]})},C=n(2),k=n(18),N=n.n(k),A=n(34),R=n(19),S=n(175),P=n.n(S).a.create({baseURL:"https://ce5muj9w5f.execute-api.eu-west-2.amazonaws.com/main"}),I=Object(R.a)("player/logOut"),D=Object(R.b)("player/loginGuest",function(){var e=Object(A.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.post("/login/guest",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=function(e){var t=e.enabled,n=Object(j.c)((function(e){return e.player})).loginStatus,r=Object(a.useState)(""),o=Object(h.a)(r,2),l=o[0],i=o[1],c=Object(j.b)(),d=function(){c(D({name:l}))};return Object(p.jsx)(s.f,{isOpen:t,title:"Login",isCloseButtonShown:!1,icon:"user",children:Object(p.jsx)("div",{className:C.a.DIALOG_BODY,children:Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),d()},children:Object(p.jsx)(s.g,{label:"Login as Guest",children:Object(p.jsx)("div",{className:C.a.FORM_CONTENT,children:Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(p.jsx)(s.j,{placeholder:"Display name",onChange:function(e){return i(e.target.value)},value:l,fill:!0}),Object(p.jsx)(s.c,{onClick:function(){return d()},icon:"log-in",disabled:l.length<3,loading:"loggingIn"===n})]})})})})})})},G=n(176),M=function(e){var t=e.roomCode,n=Object(c.g)(),a=Object(j.c)((function(e){return e.player.localPlayer})),r=Object(G.a)(window.location.href),o=Object(h.a)(r,2),l=o[0],i=o[1],d=a&&!v.isMobile?Object(p.jsx)(s.n,{fill:!0,minimal:!0,large:!0,icon:Object(p.jsx)(u.a,{size:"20",round:!0,src:null===a||void 0===a?void 0:a.imageUrl}),children:null===a||void 0===a?void 0:a.name}):Object(p.jsx)(p.Fragment,{}),b=t&&!v.isMobile?Object(p.jsx)(s.c,{text:t,rightIcon:l?"tick":"clipboard",onClick:function(){return i()}}):Object(p.jsx)(p.Fragment,{});return Object(p.jsxs)(s.k,{children:[Object(p.jsxs)(s.k.Group,{align:O.a.LEFT,children:[Object(p.jsx)(s.k.Heading,{children:Object(p.jsx)(s.c,{text:v.isMobile?"":"2D Ghost",icon:"home",onClick:function(){n.push("/")},outlined:!0})}),d,Object(p.jsx)(L,{enabled:null===a}),Object(p.jsx)(s.k.Divider,{}),Object(p.jsx)(s.k.Heading,{children:b})]}),Object(p.jsxs)(s.k.Group,{align:O.a.RIGHT,children:[Object(p.jsx)(w,{}),Object(p.jsx)(s.k.Divider,{}),Object(p.jsx)(x,{})]})]})},E=(n(379),function(){var e=Object(c.g)(),t=Object(j.b)(),n=Object(j.c)((function(e){return e.player.localPlayer}));return Object(p.jsxs)("div",{className:"game-join-page",children:[Object(p.jsx)(M,{}),Object(p.jsxs)("div",{className:"vertical-centering",children:[Object(p.jsx)(f,{joinGame:function(t){return function(t){e.push("/room/".concat(t))}(t)}}),Object(p.jsxs)(s.d,{elevation:d.a.TWO,style:{marginTop:"2em"},children:[Object(p.jsx)(s.n,{fill:!0,minimal:!0,large:!0,icon:Object(p.jsx)(u.a,{size:"20",round:!0,src:null===n||void 0===n?void 0:n.imageUrl}),style:{marginBottom:"1em"},children:null===n||void 0===n?void 0:n.name}),Object(p.jsx)(s.c,{text:"Logout",onClick:function(){t(I())},icon:"log-out"})]})]})]})}),T=n(111),W=n(27),_=n.n(W),Y=n(180),B=n.n(Y),V=n(416),z=Object(R.a)("games/reloadGame"),F=Object(R.b)("games/fetchGameByRoomCode",function(){var e=Object(A.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("/game/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),U=Object(R.b)("games/createGame",function(){var e=Object(A.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.post("/game/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),X=Object(R.b)("games/joinGame",function(){var e=Object(A.a)(N.a.mark((function e(t,n){var a,r,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.player,e.next=3,P.post("/game/".concat(a,"/player"),r);case 3:if(404!==(o=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:404}));case 6:return e.abrupt("return",o.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),H=Object(R.b)("games/startGame",function(){var e=Object(A.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.post("/game/".concat(t,"/start"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),J=Object(R.b)("games/makeMove",function(){var e=Object(A.a)(N.a.mark((function e(t,n){var a,r,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.move,e.next=3,P.post("/game/".concat(a,"/move"),r);case 3:if(200===(o=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:o.status}));case 6:return e.abrupt("return",o.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),q=Object(R.b)("games/makeChallenge",function(){var e=Object(A.a)(N.a.mark((function e(t,n){var a,r,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.challenge,e.next=3,P.post("/game/".concat(a,"/challenge"),r);case 3:if(200===(o=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:o.status}));case 6:return e.abrupt("return",o.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),K=Object(R.b)("games/makeChallengeResponse",function(){var e=Object(A.a)(N.a.mark((function e(t,n){var a,r,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.challengeResponse,e.next=3,P.post("/game/".concat(a,"/challenge-response"),r);case 3:if(200===(o=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:o.status}));case 6:return e.abrupt("return",o.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Q=Object(R.b)("games/makeChallengeVote",function(){var e=Object(A.a)(N.a.mark((function e(t,n){var a,r,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.roomCode,r=t.vote,e.next=3,P.post("/game/".concat(a,"/challenge-vote"),r);case 3:if(200===(o=e.sent).status){e.next=6;break}return e.abrupt("return",n.rejectWithValue({statusCode:o.status}));case 6:return e.abrupt("return",o.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Z=Object(R.a)("games/resetPolling"),$=function(){var e=Object(j.c)((function(e){return e.player.localPlayer})),t=Object(j.c)((function(e){return e.game})).game,n=Object(j.b)(),a=t&&(null===e||void 0===e?void 0:e.name)===t.turnPlayerName&&t.moves.length>0&&null===t.challenge&&null===t.winner,r=function(a){null!==t&&null!==e&&n(q({roomCode:t.roomCode,challenge:{challengerName:e.name,move:t.moves[t.moves.length-1],type:a}}))},o=Object(p.jsx)(s.b,{icon:"flag",text:"Challenge",disabled:!a,intent:b.a.DANGER}),l=Object(p.jsxs)("div",{children:[Object(p.jsx)(s.c,{text:"No valid words",disabled:!a,intent:b.a.PRIMARY,onClick:function(){return r("NO_VALID_WORDS")}}),Object(p.jsx)(s.c,{text:"Word already complete",disabled:!a,intent:b.a.PRIMARY,onClick:function(){return r("COMPLETE_WORD")}})]});return Object(p.jsx)(V.a,{content:l,disabled:!a,placement:"bottom",children:o})},ee=function(){var e,t,n,a=Object(j.c)((function(e){return e.player.localPlayer})),r=Object(j.c)((function(e){return e.game})).game;if(!r||!a||0==r.moves.length)return Object(p.jsx)(p.Fragment,{});var o=r.challenge&&r.challenge.move.playerName!==a.name&&"AWAITING_RESPONSE"===r.challenge.state;return Object(p.jsx)(s.f,{isOpen:o,title:"Challenge in Progress!",isCloseButtonShown:!1,icon:"flag",children:Object(p.jsxs)("div",{className:C.a.DIALOG_BODY,children:[Object(p.jsxs)("h3",{children:[null===(e=r.challenge)||void 0===e?void 0:e.move.playerName," has been challenged!"]}),Object(p.jsxs)("p",{children:[null===r||void 0===r||null===(t=r.challenge)||void 0===t?void 0:t.challengerName," has challenged that the most recent move cannot make valid words."]}),Object(p.jsxs)("p",{children:[null===(n=r.challenge)||void 0===n?void 0:n.move.playerName," is currently entering what they believe to be valid words in the row and column of their most recent move. Once ","they've"," done this, it will be put to a vote."]}),Object(p.jsx)("p",{children:"Remember the words should be at least 4 letters long and must start at the beginning of the row or column."})]})})},te=function(){return Object(j.c)((function(e){return e.game}))},ne=function(){return Object(j.c)((function(e){return e.player.localPlayer}))},ae=(n(381),function(e){var t=e.letter,n=e.position,a=e.isPlayable,r=e.isMostRecentlyPlayed,o=a?"#fff715":r?"#40acde":"#98f795",l=ne(),i=te().game,c=Object(j.b)(),s=(null===l||void 0===l?void 0:l.name)!==(null===i||void 0===i?void 0:i.turnPlayerName)||!a||null!==(null===i||void 0===i?void 0:i.winner)?Object(p.jsx)("div",{className:"tile-text",children:t}):Object(p.jsx)("input",{type:"text",className:"tile-input",value:t||"",size:1,onChange:function(e){return function(e){var t=e.toUpperCase();/[A-Z]/.test(t)&&null!==i&&null!==l&&c(J({roomCode:i.roomCode,move:{playerName:l.name,position:n,letter:t}}))}(e.target.value)}});return Object(p.jsx)("div",{className:"tile",style:{background:o},children:Object(p.jsx)("div",{className:"tile-content",children:s})})}),re=function(e,t){var n=e.filter((function(e){return e.position.y===t})).sort((function(e,t){return e.position.x-t.position.x})),a=n.map((function(e){return e.position.x})),r=n[n.length-1].position.x+1;return Array.from(Array(r).keys()).map((function(e,t){return a.includes(t)?n[a.indexOf(t)].letter:null}))},oe=function(e,t){var n=e.filter((function(e){return e.position.x===t})).sort((function(e,t){return e.position.y-t.position.y})),a=n.map((function(e){return e.position.y})),r=n[n.length-1].position.y+1;return Array.from(Array(r).keys()).map((function(e,t){return a.includes(t)?n[a.indexOf(t)].letter:null}))},le=function(e){var t=e.entries;return Object(p.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:t.map((function(e,t){return Object(p.jsx)(ae,{letter:e,position:{x:t,y:0},isPlayable:!1,isMostRecentlyPlayed:!1},t)}))})},ie=function(){var e,t=Object(j.c)((function(e){return e.player.localPlayer})),n=Object(j.c)((function(e){return e.game})).game,r=Object(a.useState)(""),o=Object(h.a)(r,2),l=o[0],i=o[1],c=Object(a.useState)(""),d=Object(h.a)(c,2),u=d[0],b=d[1],m=Object(j.b)();if(!n||!t||0==n.moves.length)return Object(p.jsx)(p.Fragment,{});var g=n.challenge&&n.challenge.move.playerName===t.name&&"AWAITING_RESPONSE"===n.challenge.state,f=n.moves[n.moves.length-1],O=re(n.moves,f.position.y),v=oe(n.moves,f.position.x);return Object(p.jsxs)(s.f,{isOpen:g,title:"Challenge Response",isCloseButtonShown:!1,icon:"flag",children:[Object(p.jsxs)("div",{className:C.a.DIALOG_BODY,children:[Object(p.jsx)("h3",{children:"You have been challenged!"}),Object(p.jsxs)("p",{children:[null===n||void 0===n||null===(e=n.challenge)||void 0===e?void 0:e.challengerName," has challenged that your most recent move cannot make valid words."]}),Object(p.jsx)("p",{children:"Please provide words that can be made from the row and column of your last move, containing the placed letters and adding as many letters to the end as you want."}),Object(p.jsx)("p",{children:"Remember the words should be at least 4 letters long and must start at the beginning of the row or column."}),Object(p.jsxs)(s.g,{label:"Row:",inline:!0,children:[Object(p.jsx)(le,{entries:O}),Object(p.jsx)(s.j,{placeholder:O.map((function(e){return e||"_"})).join("")+"...",onChange:function(e){return i(e.target.value)},value:l})]}),Object(p.jsxs)(s.g,{label:"Col:",inline:!0,children:[Object(p.jsx)(le,{entries:v}),Object(p.jsx)(s.j,{placeholder:v.map((function(e){return e||"_"})).join("")+"...",onChange:function(e){return b(e.target.value)},value:u})]})]}),Object(p.jsx)(s.c,{text:"Submit",onClick:function(){m(K({roomCode:n.roomCode,challengeResponse:{rowWord:l,colWord:u}}))},disabled:0===l.length||0===u.length})]})},ce=function(){var e=Object(j.c)((function(e){return e.player.localPlayer})),t=Object(j.c)((function(e){return e.game})).game,n=Object(j.b)();if(!t||!e||0==t.moves.length||!t.challenge)return Object(p.jsx)(p.Fragment,{});var a,r=re(t.moves,t.challenge.move.position.y),o=oe(t.moves,t.challenge.move.position.x),l=t.challenge&&"VOTING"===t.challenge.state,i=function(a){n(Q({roomCode:t.roomCode,vote:{voterName:e.name,proChallenge:a}}))},c=function(){var n;return null===(n=t.challenge)||void 0===n?void 0:n.votes.map((function(e){return e.voterName})).includes(e.name)};switch(t.challenge.type){case"NO_VALID_WORDS":var d,u,h=(null===(d=t.challenge.response)||void 0===d?void 0:d.rowWord.toUpperCase())||"",b=(null===(u=t.challenge.response)||void 0===u?void 0:u.colWord.toUpperCase())||"";a=Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:[t.challenge.challengerName," believes valid words can't be made from the most recent move."]}),Object(p.jsxs)("p",{children:[t.challenge.move.playerName," has provided the following words in response."]}),Object(p.jsxs)(s.g,{label:"Row:",inline:!0,children:[Object(p.jsx)(s.g,{label:"Tiles:",inline:!1,children:Object(p.jsx)(le,{entries:r})}),Object(p.jsx)(s.g,{label:"Response:",inline:!1,children:Object(p.jsx)(le,{entries:h.split("")})})]}),Object(p.jsxs)(s.g,{label:"Col:",inline:!0,children:[Object(p.jsx)(s.g,{label:"Tiles:",inline:!1,children:Object(p.jsx)(le,{entries:o})}),Object(p.jsx)(s.g,{label:"Response:",inline:!1,children:Object(p.jsx)(le,{entries:b.split("")})})]})]});break;case"COMPLETE_WORD":a=Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:[t.challenge.challengerName," believes the most recent move completed a word."]}),Object(p.jsxs)(s.g,{label:"Row:",inline:!0,children:[Object(p.jsx)("p",{children:"Tiles:"}),Object(p.jsx)(le,{entries:r})]}),Object(p.jsxs)(s.g,{label:"Col:",inline:!0,children:[Object(p.jsx)("p",{children:"Tiles:"}),Object(p.jsx)(le,{entries:o})]})]})}var m=Object(p.jsx)("div",{style:{paddingTop:"3px"},children:Object(p.jsx)(s.n,{intent:"primary",minimal:!0,icon:Object(p.jsx)(s.l,{size:s.m.SMALL}),children:"Players are still voting..."})});return Object(p.jsx)(s.f,{isOpen:l,title:"Challenge!",isCloseButtonShown:!1,icon:"flag",children:Object(p.jsxs)("div",{className:C.a.DIALOG_BODY,children:[Object(p.jsxs)("h3",{children:[t.challenge.challengerName," has challenged ",t.challenge.move.playerName,"!"]}),a,Object(p.jsx)("p",{children:"Is the challenge successful?"}),Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(p.jsx)(s.c,{text:"Yes, kick ".concat(t.challenge.move.playerName),onClick:function(){return i(!0)},disabled:c()}),Object(p.jsx)(s.c,{text:"No, kick ".concat(t.challenge.challengerName),onClick:function(){return i(!1)},disabled:c()})]}),c()?m:null]})})},se=n(183),de=n.n(se),ue=n(184),je=n.n(ue),he=function(e,t){var n=t.x,a=t.y;return null===e[n][a]&&(0===n&&0===a||(0==n&&null!==e[n][a-1]||(0==a&&null!==e[n-1][a]||function(e,t){var n=t.x,a=t.y;return e.slice(n-1,n+2).map((function(e){return e.slice(a-1,a+2).map((function(e){return e?1:0})).reduce((function(e,t){return e+t}),0)})).reduce((function(e,t){return e+t}),0)}(e,{x:n,y:a})>=3)))},be=function(){var e=te(),t=e.game,n=e.gameLoadStatus;if(["gameDoesNotExist","creatingGame","joining"].includes(n))return Object(p.jsx)(s.l,{size:s.m.LARGE});var a=(t?t.moves:[]).map((function(e){return Math.max(e.position.x,e.position.y)})).reduce((function(e,t){return Math.max(e,t)}),0)+2,r=Array.from(Array(a).keys()).map((function(){return Array.from(Array(a).keys()).map((function(){return null}))}));null!==t&&t.moves.forEach((function(e){return r[e.position.x][e.position.y]=e.letter}));var o=r.map((function(e,n){return Object(p.jsx)("div",{style:{flexDirection:"row"},children:e.map((function(e,a){var o;return Object(p.jsx)(ae,{letter:e,position:{x:n,y:a},isPlayable:he(r,{x:n,y:a}),isMostRecentlyPlayed:de()(null===t||void 0===t||null===(o=t.moves[t.moves.length-1])||void 0===o?void 0:o.position,{x:n,y:a})},a)}))},n)}));return Object(p.jsx)(je.a,{cancel:".tile-input",children:Object(p.jsx)("div",{style:{display:"flex"},children:o})})},me=function(e){var t=e.player,n=e.turnPlayer,a=e.loser,r=e.winner,o=n?Object(p.jsx)("b",{children:t.name}):a?Object(p.jsx)("s",{children:t.name}):t.name,l=n?b.a.PRIMARY:b.a.NONE,i=r?Object(p.jsx)(s.i,{icon:"crown"}):null;return Object(p.jsxs)(s.n,{fill:!0,minimal:a,intent:l,large:!0,icon:Object(p.jsx)(u.a,{size:"20",round:!0,src:t.imageUrl}),children:[i,o,i]})},ge=function(){var e=Object(j.c)((function(e){return e.game})).game,t=Object(a.useState)(!v.isMobile),n=Object(h.a)(t,2),r=n[0],o=n[1],l=e?e.players.map((function(t,n){var a=null!==e.winner&&e.winner.name===t.name;return Object(p.jsx)(me,{player:t,turnPlayer:t.name==e.turnPlayerName,loser:!1,winner:a},n)})):[],i=e?e.losers.map((function(e,t){return Object(p.jsx)(me,{player:e,turnPlayer:!1,loser:!0,winner:!1},t)})):[];return Object(p.jsxs)("div",{children:[Object(p.jsx)(s.c,{fill:!0,outlined:!0,text:Object(p.jsx)("b",{children:"Players"}),rightIcon:r?"chevron-down":"chevron-left",onClick:function(){return o(!r)}}),Object(p.jsxs)(s.e,{isOpen:r,children:[l,i]})]})},pe=function(){return Object(c.h)().roomCode},fe=function(){var e=pe(),t=te().game,n=Object(j.b)();return Object(p.jsxs)(s.d,{elevation:2,children:[Object(p.jsx)(s.h,{children:"Welcome to the game!"}),Object(p.jsx)("p",{children:"The game has not started yet. Start the game when everyone has joined."}),Object(p.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:Object(p.jsx)(s.c,{text:"Everyone's in!",intent:b.a.PRIMARY,onClick:function(){t&&!t.started&&n(H(e))}})})]})},Oe=(n(403),3e5),ve=function(){var e=pe(),t=te(),n=t.game,r=t.gameLoadStatus,o=t.joined,l=t.joinedRoomCode,i=t.latestAction,c=ne(),d=Object(j.b)(),u=Object(a.useState)(!0),b=Object(h.a)(u,2),m=b[0],g=b[1];B()((function(){m&&d(F(e))}),1e3),Object(a.useEffect)((function(){g(_()().diff(i)<Oe)}),[n,i]);var f=Object(p.jsx)(s.a,{isOpen:!m,canOutsideClickCancel:!0,onClose:function(){d(Z())},confirmButtonText:"I'm still here!",children:Object(p.jsxs)("p",{children:["Are you still there? Polling has been paused because there hasn't been activity for ",_.a.duration(Oe,"milliseconds").humanize(),"."]})});if(l&&l!==e&&d(z()),null===n)switch(r){case"idle":d(F(e));break;case"gameDoesNotExist":d(U(e))}else o||n.started||null===c||o||!n||n.started||"joining"===r||d(X({roomCode:e,player:c}));var O=Object(p.jsxs)("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)",msTransform:"translateX(-50%) translateY(-50%)"},children:[Object(p.jsx)(s.l,{size:s.m.LARGE}),";"]}),v=void 0!==[].concat(Object(T.a)((null===n||void 0===n?void 0:n.players)||[]),Object(T.a)((null===n||void 0===n?void 0:n.losers)||[])).find((function(e){return e.name===(null===c||void 0===c?void 0:c.name)})),x=(null===n||void 0===n?void 0:n.started)?Object(p.jsx)(be,{}):Object(p.jsx)(fe,{});return Object(p.jsxs)("div",{children:[Object(p.jsx)(M,{roomCode:e}),Object(p.jsxs)("div",{className:"with-sidebar",children:[Object(p.jsxs)("div",{className:"sidebar",children:[Object(p.jsx)(ge,{}),Object(p.jsx)($,{})]}),Object(p.jsx)("div",{className:"not-sidebar",children:Object(p.jsx)("div",{className:"game-page",children:Object(p.jsx)("div",{className:"vertical-centering",children:v||(null===n||void 0===n?void 0:n.started)?x:O})})})]}),f,Object(p.jsx)(ie,{}),Object(p.jsx)(ee,{}),Object(p.jsx)(ce,{})]})},xe=(n(404),function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(i.a,{basename:"/",children:Object(p.jsxs)(c.d,{children:[Object(p.jsx)(c.b,{path:"/",exact:!0,component:E}),Object(p.jsx)(c.b,{path:"/room/:roomCode",component:ve}),Object(p.jsx)(c.a,{to:"/"})]})})})}),ye=n(185),we=n(16),Ce=n(186),ke=n(110),Ne=n(187),Ae=n.n(Ne),Re=n(70),Se={game:null,gameLoadStatus:"idle",joined:!1,joinedRoomCode:null,latestAction:_()()},Pe=Object(R.c)({name:"games",initialState:Se,reducers:{},extraReducers:function(e){e.addCase(z,(function(e){e.game=Se.game,e.gameLoadStatus=Se.gameLoadStatus,e.joined=Se.joined,e.joinedRoomCode=Se.joinedRoomCode,e.latestAction=_()()})),e.addCase(F.pending,(function(e){e.gameLoadStatus="loading"})),e.addCase(F.fulfilled,(function(e,t){e.game=t.payload,e.gameLoadStatus="idle"})),e.addCase(F.rejected,(function(e,t){e.game=null,e.gameLoadStatus="gameDoesNotExist",t.payload&&404==t.payload.statusCode&&(e.gameLoadStatus="gameDoesNotExist")})),e.addCase(U.pending,(function(e){e.game=null,e.gameLoadStatus="loading",e.latestAction=_()()})),e.addCase(U.fulfilled,(function(e,t){e.game=t.payload,e.gameLoadStatus="idle"})),e.addCase(U.rejected,(function(e){e.game=null,e.gameLoadStatus="error"})),e.addCase(H.fulfilled,(function(e,t){e.game=t.payload,e.latestAction=_()()})),e.addCase(X.pending,(function(e){e.gameLoadStatus="joining",e.joined=!1,e.joinedRoomCode=null,e.latestAction=_()()})),e.addCase(X.fulfilled,(function(e,t){e.gameLoadStatus="idle",e.joined=!0,e.game=t.payload,e.joinedRoomCode=t.payload.roomCode})),e.addCase(X.rejected,(function(e){e.gameLoadStatus="error",e.joined=!1,e.joinedRoomCode=null})),e.addCase(J.pending,(function(e){e.latestAction=_()()})),e.addCase(J.fulfilled,(function(e,t){e.game=t.payload})),e.addCase(q.fulfilled,(function(e,t){e.game=t.payload,e.latestAction=_()()})),e.addCase(K.fulfilled,(function(e,t){e.game=t.payload,e.latestAction=_()()})),e.addCase(Q.fulfilled,(function(e,t){e.game=t.payload,e.latestAction=_()()})),e.addCase(Z,(function(e){e.latestAction=_()()}))}}),Ie=Object(R.c)({name:"player",initialState:{localPlayer:null,loginStatus:"notLoggedIn"},reducers:{},extraReducers:function(e){e.addCase(I,(function(e){e.localPlayer=null,e.loginStatus="notLoggedIn"})),e.addCase(D.pending,(function(e){e.loginStatus="loggingIn"})),e.addCase(D.rejected,(function(e){e.loginStatus="notLoggedIn"})),e.addCase(D.fulfilled,(function(e,t){e.localPlayer=t.payload,e.loginStatus="loggedIn"}))}}),De=Object(we.combineReducers)({game:Pe.reducer,player:Ie.reducer}),Le={key:"root",storage:Ae.a,whitelist:["player"]},Ge=Object(ke.a)(Le,De),Me=Object(we.createStore)(Ge,Object(Ce.composeWithDevTools)(Object(we.applyMiddleware)(Re.a))),Ee=Me,Te=Object(ke.b)(Me);l.a.render(Object(p.jsx)(j.a,{store:Ee,children:Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(ye.PersistGate,{loading:Object(p.jsx)(s.l,{}),persistor:Te,children:Object(p.jsx)(xe,{})})})}),document.getElementById("root"))}},[[407,1,2]]]);
//# sourceMappingURL=main.6b58ea8d.chunk.js.map