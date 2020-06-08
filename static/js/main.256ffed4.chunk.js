(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(40)},32:function(e,t,n){},33:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),l=n.n(c),o=(n(31),n(8)),s=n(6),i=(n(32),n(33),function(){return r.a.createElement("nav",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{className:"logo misc",to:"/"},"\ud83c\udfb9 Armony")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/scale-to-chords"},"Scale to Chords")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/notes-to-chords"},"Notes to Chords")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/common-chords"},"Common Chords")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/voho/armony/issues",className:"misc",target:"_blank"},"Submit an issue")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/voho/armony",className:"misc",target:"_blank"},"Source")))))}),u=n(2),m=n(25),h=n(17),d=n(7),f=n(18),v=n(11),w=n(12),E=0,g=1,y=2,p=3,b=4,N=5,S=6,j=7,O=8,k=9,C=10,K=11,M=12,A=Array.from(Array(M).keys());function x(e){switch(e%M){case E:return"C";case g:return"C#";case y:return"D";case p:return"D#";case b:return"E";case N:return"F";case S:return"F#";case j:return"G";case O:return"G#";case k:return"A";case C:return"A#";case K:return"B";default:throw new Error("Invalid pitch")}}var T=function(){function e(t,n){Object(v.a)(this,e),this.name=void 0,this.steps=void 0,this.name=t,this.steps=n}return Object(w.a)(e,[{key:"getName",value:function(){return this.name}},{key:"getType",value:function(){return"default"}},{key:"getSize",value:function(){return this.steps.length+1}},{key:"withKey",value:function(e){return new R(this,e)}},{key:"generate",value:function(e){var t=[e],n=e,a=!0,r=!1,c=void 0;try{for(var l,o=this.steps[Symbol.iterator]();!(a=(l=o.next()).done);a=!0){n+=l.value,t.push(n)}}catch(s){r=!0,c=s}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return t}}]),e}(),D=function(e){function t(){return Object(v.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(w.a)(t,[{key:"getType",value:function(){return"primary"}}]),t}(T),I=function(e){function t(){return Object(v.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(w.a)(t,[{key:"getName",value:function(){return"Interval "+Object(m.a)(Object(d.a)(t.prototype),"getName",this).call(this)}},{key:"getType",value:function(){return"secondary"}}]),t}(D),R=function(){function e(t,n){Object(v.a)(this,e),this.scale=void 0,this.root=void 0,this.scale=t,this.root=n}return Object(w.a)(e,[{key:"getName",value:function(){return"".concat(x(this.root)," ").concat(this.scale.getName())}},{key:"getRoot",value:function(){return this.root}},{key:"getScale",value:function(){return this.scale}},{key:"generate",value:function(){return this.scale.generate(this.root)}},{key:"transpose",value:function(t){return new e(this.scale,this.root+t)}},{key:"up",value:function(){return this.transpose(1)}},{key:"down",value:function(){return this.transpose(-1)}}]),e}(),z=new I("m2",[1]),B=new I("M2",[2]),F=new I("m3",[3]),G=new I("M3",[4]),J=new I("4",[5]),H=new I("b5",[6]),L=new I("5",[7]),P=new I("m6",[8]),_=new I("M6",[9]),W=new I("m7",[10]),q=new I("M7",[11]),Q=new D("Major",[4,3]),U=new D("Major 6th",[4,3,2]),V=new D("Dominant 7th",[4,3,3]),X=new D("Major 7th",[4,3,4]),Y=new D("Major 9th",[4,3,4,3]),Z=new D("Minor",[3,4]),$=new D("Minor 6th",[3,4,2]),ee=new D("Minor 7th",[3,4,3]),te=new D("Minor 9th",[3,4,3,4]),ne=new D("Diminished",[3,3]),ae=new D("Diminished 7th",[3,3,3]),re=new D("Augmented",[4,4]),ce=new D("Augmented 7th",[4,4,2]),le=new D("Suspended 2nd",[2,5]),oe=new D("Suspended 7th 2nd",[2,5,2]),se=[Q,U,X,Y,V,Z,$,ee,te,ne,ae,re,ce,new D("Suspended 4th",[5,2]),le,new D("Suspended 7th 4th",[5,2,2]),oe,new D("6/9",[4,3,2,5]),z,B,F,G,J,H,L,P,_,W,q];function ie(e,t){var n=e.map(function(e){return e%M});return 0===t.map(function(e){return e%M}).filter(function(e){return!n.includes(e)}).length}function ue(e){for(var t=[],n=function(n){se.forEach(function(a){var r=e.generate(),c=a.withKey(n);ie(r,c.generate())&&t.push(c)})},a=0;a<M;a++)n(a);return de(t),t}function me(e,t){for(var n=[],a=function(a){se.forEach(function(r){var c=e.generate(),l=t.generate(),o=r.withKey(a),s=o.generate();ie(c,s)&&ie(l,s)&&n.push(o)})},r=0;r<M;r++)a(r);return de(n),n}function he(e){for(var t=[],n=function(n){se.forEach(function(a){var r=a.withKey(n);ie(r.generate(),e)&&t.push(r)})},a=0;a<M;a++)n(a);return de(t),t}function de(e){e.sort(function(e,t){var n=e.getScale().getSize(),a=t.getScale().getSize();if(n<a)return 1;if(a<n)return-1;var r=e.getRoot(),c=t.getRoot();return r<c?-1:c<r?1:e.getName()<t.getName()?-1:e.getName()>t.getName()?1:0})}n(38);var fe=n(13),ve=n.n(fe),we=new ve.a.PolySynth(6,ve.a.FMSynth).toMaster();function Ee(e,t){ve.a.Transport.stop(0),ve.a.Transport.start(0);for(var n,a,r=e.generate(),c=0;c<r.length;c++){var l=c*t,o=l+t,s=(n=r[c],a=4,x(n)+(a+n/M));we.triggerAttack([s],"+"+l),we.triggerRelease([s],"+"+o)}}function ge(e){e.generate().length<=4?function(e){Ee(e,.01)}(e):function(e){Ee(e,.07)}(e)}var ye=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),r=n[0],c=n[1];return a.createElement("div",{className:"chord "+("secondary"===e.scale.getScale().getType()?" ":" secondary")+(r?" playing":" ")},a.createElement("div",{className:"row"},a.createElement("div",{className:"title"},x(e.scale.getRoot())," ",a.createElement("small",null,e.scale.getScale().getName())),a.createElement("div",{className:"play"},a.createElement("button",{disabled:r,onClick:function(){return c(!0),ge(e.scale),void setTimeout(function(){return c(!1)},200)}},a.createElement("small",null,"\u25b6")))),a.createElement("div",{className:"row"},a.createElement("div",{className:"pitches"},e.scale.generate().map(function(e){var t=[g,p,S,O,C].includes(e%M)?"badge badge-dark mr-1 pt-3":"badge badge-secondary mr-1 pt-3";return a.createElement("span",{key:e,className:t},x(e))}))))},pe=function(e){return!e.chords||e.chords.length<1?a.createElement("div",{className:"alert alert-secondary",role:"alert"},"Could not find any known chords for this scale."):a.createElement("div",{className:"chord-list"},a.createElement("div",{className:"row"},e.chords.map(function(e){return a.createElement("div",{key:e.getName()},a.createElement(ye,{scale:e}))})))},be=(n(39),function(e){var t=Object(a.useState)(new Set),n=Object(u.a)(t,2),c=n[0],l=n[1];return Object(a.useEffect)(function(){var t=new Set([E,b,j]);l(t),e.onNoteSelectionChange(Array.from(t))},[]),r.a.createElement("div",{className:"row selector-options"},A.map(function(t){return r.a.createElement("span",{className:"selector-options-item"},r.a.createElement("input",{type:"checkbox",id:"pitch-".concat(t),className:"form-check-input",checked:c.has(t),onChange:function(n){return function(t,n){var a=new Set(c);n?a.add(t):a.delete(t),l(a),e.onNoteSelectionChange(Array.from(a))}(t,n.target.checked)},value:t}),r.a.createElement("label",{htmlFor:"pitch-".concat(t)},x(t)))}))}),Ne=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement("section",{className:"p-3"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("p",{className:"lead"},"Shows all chords that contain the given notes."),r.a.createElement("h3",null,"Select Notes"),r.a.createElement(be,{onNoteSelectionChange:function(e){return c(e)}})),r.a.createElement("h3",null,"Chords in selected scale"),r.a.createElement(pe,{chords:he(n)}))},Se=new T("Ionian (major)",[2,2,1,2,2,2,1]),je=new T("Phrygian",[1,2,2,2,1,2,2]),Oe=new T("Dorian",[2,1,2,2,2,1,2]),ke=new T("Lydian",[2,2,2,1,2,2,1]),Ce=new T("Mixolydian",[2,2,1,2,2,1,2]),Ke=new T("Aeolian (minor)",[2,1,2,2,1,2,2]),Me=new T("Locrian",[1,2,2,1,2,2,2]),Ae=new T("Wholetone",[2,2,2,2,2]),xe=new T("Hungarian",[1,3,3,1,3,1]),Te=new T("Gypsy",[1,3,1,3,1,3,1]),De=new T("Byzantine",[2,3,1,2,1,3,1]),Ie=new T("Hindu",[2,2,1,2,1,2,2]),Re=new T("Arabian",[2,2,1,1,2,2,2]),ze=new T("Oriental",[1,3,1,1,3,1,2]),Be=new T("Javanese",[2,2,2,1,1,2,2]),Fe=new T("In Sen",[1,4,2,3,2]),Ge=new T("Iwato",[1,4,1,4,2]),Je=new T("Balinese",[1,2,4,1,4]),He=new T("Chromatic (all)",[1,1,1,1,1,1,1,1,1,1,1]),Le=[Se,je,Oe,ke,Ce,Ke,Me,Ae,xe,Te,De,Ie,Re,ze,Be,Fe,Ge,Je,He],Pe=function(e){return r.a.createElement("section",null,r.a.createElement("div",{className:"row align-items-start justify-content-start"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",{className:"btn-group-sm"},A.map(function(t){var n=function(t){return void 0!==e.selectedKey&&e.selectedKey===t}(t)?"active btn btn-secondary btn-sm m-1":"btn btn-secondary btn-sm m-1";return r.a.createElement("button",{key:t,className:n,onClick:function(){return e.onKeyChange(t)}},x(t))})))),r.a.createElement("div",{className:"row align-items-start justify-content-start"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",{className:"btn-group-sm"},Le.map(function(t){var n=function(t){return void 0!==e.selectedScale&&t.getName()===e.selectedScale.getName()}(t)?"active btn btn-primary btn-sm m-1":"btn btn-primary btn-sm m-1";return r.a.createElement("button",{key:t.getName(),className:n,onClick:function(){return e.onScaleChange(t)}},t.getName())})))),r.a.createElement("div",{className:"row align-items-start justify-content-start"},r.a.createElement("div",{className:"col-auto"},void 0!==e.selectedScale&&void 0!==e.selectedKey&&r.a.createElement(ye,{scale:e.selectedScale.withKey(e.selectedKey)}))))},_e=function(){var e=Object(a.useState)(E),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(Se),o=Object(u.a)(l,2),s=o[0],i=o[1];return r.a.createElement("section",{className:"p-3"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("p",{className:"lead"},"Shows all chords in the selected scale."),r.a.createElement("h3",null,"Select Scale"),r.a.createElement(Pe,{selectedKey:n,selectedScale:s,onKeyChange:function(e){return c(e)},onScaleChange:function(e){return i(e)}})),r.a.createElement("h3",null,"Chords in selected scale"),r.a.createElement(pe,{chords:ue(s.withKey(n))}))},We=function(){var e=Object(a.useState)(E),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(E),o=Object(u.a)(l,2),s=o[0],i=o[1],m=Object(a.useState)(Se),h=Object(u.a)(m,2),d=h[0],f=h[1],v=Object(a.useState)(Oe),w=Object(u.a)(v,2),g=w[0],y=w[1];return r.a.createElement("section",{className:"p-3"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("p",{className:"lead"},"Shows all chords that the two selected scales have in common."),r.a.createElement("h3",null,"Select first scale"),r.a.createElement(Pe,{selectedKey:n,selectedScale:d,onKeyChange:function(e){return c(e)},onScaleChange:function(e){return f(e)}}),r.a.createElement("h3",null,"Select second scale"),r.a.createElement(Pe,{selectedKey:s,selectedScale:g,onKeyChange:function(e){return i(e)},onScaleChange:function(e){return y(e)}})),r.a.createElement("h3",null,"Chords in both selected scales"),r.a.createElement(pe,{chords:me(d.withKey(n),g.withKey(s))}))};l.a.render(r.a.createElement(function(){return r.a.createElement("div",{className:"app"},r.a.createElement(o.a,{basename:"/armony"},r.a.createElement("div",{className:"header"},r.a.createElement(i,null)),r.a.createElement("div",{className:"container"},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/scale-to-chords",component:_e}),r.a.createElement(s.b,{exact:!0,path:"/notes-to-chords",component:Ne}),r.a.createElement(s.b,{exact:!0,path:"/common-chords",component:We}),r.a.createElement(s.a,{to:"/scale-to-chords"})))))},null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.256ffed4.chunk.js.map