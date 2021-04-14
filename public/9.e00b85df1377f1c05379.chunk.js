(this.webpackJsonp=this.webpackJsonp||[]).push([[9,20],{12:function(t,e,i){"use strict";var n=i(8),s=i(20);e.a=(t,e={})=>{const i=document.createElement("button");return i.className=t+(e.icon?" tgico-"+e.icon:""),e.noRipple||(e.rippleSquare&&i.classList.add("rp-square"),Object(s.ripple)(i)),e.onlyMobile&&i.classList.add("only-handhelds"),e.disabled&&(i.disabled=!0),e.text&&i.append(Object(n.i18n)(e.text)),i}},19:function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));var n=i(7),s=i(21),a=i(32),r=i(8),o=i(11);let l=()=>{document.addEventListener("paste",t=>{if(!t.target.hasAttribute("contenteditable")&&!t.target.parentElement.hasAttribute("contenteditable"))return;t.preventDefault();let e=(t.originalEvent||t).clipboardData.getData("text/plain"),i=o.b.parseEntities(e);i=i.filter(t=>"messageEntityEmoji"===t._||"messageEntityLinebreak"===t._),e=o.b.wrapRichText(e,{entities:i,noLinks:!0,wrappingDraft:!0}),window.document.execCommand("insertHTML",!1,e)}),l=null};const c=t=>{const e=(t instanceof HTMLInputElement?t.value:t.innerText)[0];let i="ltr";e&&Object(a.b)(e)&&(i="rtl"),t.style.direction=i};var u;!function(t){t[t.Neutral=0]="Neutral",t[t.Valid=1]="Valid",t[t.Error=2]="Error"}(u||(u={}));e.b=class{constructor(t={}){this.options=t,this.container=document.createElement("div"),this.container.classList.add("input-field"),t.maxLength&&(t.showLengthOn=Math.round(t.maxLength/3));const{placeholder:e,maxLength:i,showLengthOn:a,name:o,plainText:u}=t;let d,h,p=t.label||t.labelText;if(u)this.container.innerHTML=`\n      <input type="text" ${o?`name="${o}"`:""} autocomplete="off" ${p?'required=""':""} class="input-field-input">\n      `,d=this.container.firstElementChild,d.addEventListener("input",()=>c(d));else{l&&l(),this.container.innerHTML='\n      <div contenteditable="true" class="input-field-input"></div>\n      ',d=this.container.firstElementChild;const e=new MutationObserver(()=>{c(d),h&&h()});d.addEventListener("input",()=>{Object(n.u)(d)&&(d.innerHTML=""),this.inputFake&&(this.inputFake.innerHTML=d.innerHTML,this.onFakeInput())}),e.observe(d,{characterData:!0,childList:!0,subtree:!0}),t.animate&&(d.classList.add("scrollable","scrollable-y"),this.wasInputFakeClientHeight=0,this.showScrollDebounced=Object(s.a)(()=>this.input.classList.remove("no-scrollbar"),150,!1,!0),this.inputFake=document.createElement("div"),this.inputFake.setAttribute("contenteditable","true"),this.inputFake.className=d.className+" input-field-input-fake")}if(e&&Object(r._i18n)(d,e,void 0,"placeholder"),p&&(this.label=document.createElement("label"),this.setLabel(),this.container.append(this.label)),i){const t=this.container.lastElementChild;let e=!1;h=()=>{const s=d.classList.contains("error"),r=u?d.value.length:[...Object(n.n)(d)].length,o=i-r,l=o<0;d.classList.toggle("error",l),l||o<=a?(this.setLabel(),t.append(` (${i-r})`),e||(e=!0)):(s&&!l||e)&&(this.setLabel(),e=!1)},d.addEventListener("input",h)}this.input=d}setLabel(){this.label.textContent="",this.options.labelText?this.label.innerHTML=this.options.labelText:this.label.append(Object(r.i18n)(this.options.label,this.options.labelOptions))}onFakeInput(){const{scrollHeight:t,clientHeight:e}=this.inputFake;this.wasInputFakeClientHeight&&this.wasInputFakeClientHeight!==e&&(this.input.classList.add("no-scrollbar"),this.showScrollDebounced()),this.wasInputFakeClientHeight=e,this.input.style.height=t?t+"px":""}get value(){return this.options.plainText?this.input.value:Object(n.n)(this.input)}set value(t){this.setValueSilently(t,!1);const e=new Event("input",{bubbles:!0,cancelable:!0});this.input.dispatchEvent(e)}setValueSilently(t,e=!0){this.options.plainText?this.input.value=t:(this.input.innerHTML=t,this.inputFake&&(this.inputFake.innerHTML=t,e&&this.onFakeInput()))}isValid(){return!this.input.classList.contains("error")&&this.value!==this.originalValue}setOriginalValue(t="",e=!1){this.originalValue=t,this.options.plainText||(t=o.b.wrapDraftText(t)),e?this.setValueSilently(t,!1):this.value=t}setState(t,e){e&&(this.label.textContent="",this.label.append(Object(r.i18n)(e,this.options.labelOptions))),this.input.classList.toggle("error",!!(t&u.Error)),this.input.classList.toggle("valid",!!(t&u.Valid))}setError(t){this.setState(u.Error,t)}}},20:function(t,e,i){"use strict";i.r(e),i.d(e,"ripple",(function(){return o}));var n=i(1),s=i(17),a=i(9);let r=0;function o(t,e=(()=>Promise.resolve()),i=null,o=!1){if(t.querySelector(".c-ripple"))return;t.classList.add("rp");let l=document.createElement("div");l.classList.add("c-ripple");let c;t.classList.contains("rp-square")&&l.classList.add("is-square"),t[o?"prepend":"append"](l);const u=(t,n)=>{const a=Date.now(),o=document.createElement("div"),u=r++,h=1e3*+window.getComputedStyle(l).getPropertyValue("--ripple-duration").replace("s","");c=()=>{let t=Date.now()-a;if(t<h){let e=Math.max(h-t,h/2);setTimeout(()=>o.classList.add("hiding"),Math.max(e-h/2,0)),setTimeout(()=>{o.remove(),i&&i(u)},e)}else o.classList.add("hiding"),setTimeout(()=>{o.remove(),i&&i(u)},h/2);s.isTouchSupported||window.removeEventListener("contextmenu",c),c=null,d=!1},e&&e(u),window.requestAnimationFrame(()=>{const e=l.getBoundingClientRect();o.classList.add("c-ripple__circle");const i=t-e.left,s=n-e.top,a=Math.sqrt(Math.pow(Math.abs(s-e.height/2)+e.height/2,2)+Math.pow(Math.abs(i-e.width/2)+e.width/2,2)),r=i-a/2,c=s-a/2;o.style.width=o.style.height=a+"px",o.style.left=r+"px",o.style.top=c+"px",l.append(o)})};let d=!1;if(s.isTouchSupported){let e=()=>{c&&c()};t.addEventListener("touchstart",i=>{if(!a.default.settings.animationsEnabled)return;if(i.touches.length>1||d||["BUTTON","A"].includes(i.target.tagName)&&i.target!==t||Object(n.a)(i.target,"c-ripple")!==l)return;d=!0;let{clientX:s,clientY:r}=i.touches[0];u(s,r),t.addEventListener("touchend",e,{once:!0}),window.addEventListener("touchmove",i=>{i.cancelBubble=!0,i.stopPropagation(),e(),t.removeEventListener("touchend",e)},{once:!0})},{passive:!0})}else t.addEventListener("mousedown",e=>{if(![0,2].includes(e.button))return;if(!a.default.settings.animationsEnabled)return;if("0"===t.dataset.ripple||Object(n.a)(e.target,"c-ripple")!==l||"A"===e.target.tagName)return!1;if(d)return d=!1,!1;let{clientX:i,clientY:s}=e;u(i,s),window.addEventListener("mouseup",c,{once:!0}),window.addEventListener("contextmenu",c,{once:!0})})}},34:function(t,e,i){"use strict";i.r(e);var n=i(7),s=i(14),a=i(8),r=i(28),o=function(t,e,i,n){return new(i||(i=Promise))((function(s,a){function r(t){try{l(n.next(t))}catch(t){a(t)}}function o(t){try{l(n.throw(t))}catch(t){a(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,o)}l((n=n.apply(t,e||[])).next())}))};const l=new r.a("page-chats",!1,()=>(s.default.pushToState("authState",{_:"authStateSignedIn"}),Promise.resolve().then(i.bind(null,9)).then(t=>{t.default.broadcast("im_mount")}),a.default.requestedServerLanguage||a.default.getCacheLangPack().then(t=>{t.local&&a.default.getLangPack(t.lang_code)}),Object(n.c)(),new Promise(t=>{window.requestAnimationFrame(()=>{Promise.all([i.e(3),i.e(10)]).then(i.bind(null,65)).finally(()=>o(void 0,void 0,void 0,(function*(){t()})))})})));e.default=l},46:function(t,e,i){"use strict";var n=i(10),s=i(16),a=i(13);const r=new class{getState(){return a.a.invokeApi("account.getPassword").then(t=>t)}updateSettings(t={}){return this.getState().then(e=>{let i,n;const s={password:null,new_settings:{_:"account.passwordInputSettings",hint:t.hint,email:t.email}};i=t.currentPassword?a.a.computeSRP(t.currentPassword,e):Promise.resolve({_:"inputCheckPasswordEmpty"});const r=e.new_algo,o=new Uint8Array(r.salt1.length+32);return o.randomize(),o.set(r.salt1,0),r.salt1=o,n=t.newPassword?a.a.computeSRP(t.newPassword,e,!0):Promise.resolve(new Uint8Array),Promise.all([i,n]).then(t=>(s.password=t[0],s.new_settings.new_algo=r,s.new_settings.new_password_hash=t[1],a.a.invokeApi("account.updatePasswordSettings",s)))})}check(t,e,i={}){return a.a.computeSRP(t,e).then(t=>a.a.invokeApi("auth.checkPassword",{password:t},i).then(t=>("auth.authorization"===t._&&(s.a.saveApiUser(t.user),a.a.setUserAuth(t.user.id)),t)))}confirmPasswordEmail(t){return a.a.invokeApi("account.confirmPasswordEmail",{code:t})}resendPasswordEmail(){return a.a.invokeApi("account.resendPasswordEmail")}cancelPasswordEmail(){return a.a.invokeApi("account.cancelPasswordEmail")}};n.a.passwordManager=r,e.a=r},47:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i(8);class s{constructor(t){this.element=document.body.querySelector("."+t.className),this.container=document.createElement("div"),this.container.className="container center-align",this.imageDiv=document.createElement("div"),this.imageDiv.className="auth-image",this.title=document.createElement("h4"),t.titleLangKey&&this.title.append(Object(n.i18n)(t.titleLangKey)),this.subtitle=document.createElement("p"),this.subtitle.className="subtitle",t.subtitleLangKey&&this.subtitle.append(Object(n.i18n)(t.subtitleLangKey)),this.container.append(this.imageDiv,this.title,this.subtitle),t.withInputWrapper&&(this.inputWrapper=document.createElement("div"),this.inputWrapper.className="input-wrapper",this.container.append(this.inputWrapper)),this.element.append(this.container)}}},56:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i(7),s=i(19);class a extends s.b{constructor(t={}){super(Object.assign({plainText:!0},t)),this.passwordVisible=!1,this.onVisibilityClick=t=>{Object(n.f)(t),this.passwordVisible=!this.passwordVisible,this.toggleVisible.classList.toggle("eye-hidden",this.passwordVisible),this.input.type=this.passwordVisible?"text":"password",this.onVisibilityClickAdditional&&this.onVisibilityClickAdditional()};const e=this.input;e.type="password",e.setAttribute("required",""),e.autocomplete="off";const i=this.toggleVisible=document.createElement("span");i.classList.add("toggle-visible","tgico"),this.container.classList.add("input-field-password"),this.container.append(i),i.addEventListener("click",this.onVisibilityClick),i.addEventListener("touchend",this.onVisibilityClick)}}},62:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i(37);class s{constructor(t,e){this.passwordInputField=t,this.size=e,this.needFrame=0,this.container=document.createElement("div"),this.container.classList.add("media-sticker-wrapper")}load(){return this.loadPromise?this.loadPromise:this.loadPromise=n.b.loadAnimationFromURL({container:this.container,loop:!1,autoplay:!1,width:this.size,height:this.size,noCache:!0},"assets/img/TwoFactorSetupMonkeyPeek.tgs").then(t=>(this.animation=t,this.animation.addEventListener("enterFrame",t=>{(1===this.animation.direction&&t>=this.needFrame||-1===this.animation.direction&&t<=this.needFrame)&&(this.animation.setSpeed(1),this.animation.pause())}),this.passwordInputField.onVisibilityClickAdditional=()=>{this.passwordInputField.passwordVisible?(this.animation.setDirection(1),this.animation.curFrame=0,this.needFrame=16,this.animation.play()):(this.animation.setDirection(-1),this.animation.curFrame=16,this.needFrame=0,this.animation.play())},n.b.waitForFirstFrame(t)))}remove(){this.animation&&this.animation.remove()}}},64:function(t,e,i){"use strict";i.r(e);var n=i(18),s=i(23),a=i(14),r=i(46),o=i(28),l=i(34),c=i(12),u=i(56),d=i(62),h=i(11),p=i(8),m=i(47),b=i(7);let w;const g=new o.a("page-password",!0,()=>{const t=new m.a({className:"page-password",withInputWrapper:!0,titleLangKey:"Login.Password.Title",subtitleLangKey:"Login.Password.Subtitle"}),e=Object(c.a)("btn-primary btn-color-primary"),i=new p.default.IntlElement({key:"Login.Next"});e.append(i.element);const a=new u.a({label:"LoginPassword",name:"password"});let o;w=a.input,t.inputWrapper.append(a.container,e);let g,v=()=>(o||(o=window.setInterval(v,1e4)),r.a.getState().then(t=>{g=t,g.hint?Object(b.B)(a.label,Object(b.s)(h.b.wrapEmojiText(g.hint))):a.setLabel()}));e.addEventListener("click",(function(t){if(!w.value.length)return void w.classList.add("error");this.setAttribute("disabled","true");let s=w.value;i.update({key:"PleaseWait"});const c=Object(n.f)(this);r.a.check(s,g).then(t=>{switch(t._){case"auth.authorization":clearInterval(o),l.default.mount(),f&&f.remove();break;default:e.removeAttribute("disabled"),i.update({key:t._}),c.remove()}}).catch(t=>{e.removeAttribute("disabled"),a.input.classList.add("error"),t.type,i.update({key:"PASSWORD_HASH_INVALID"}),c.remove(),v()})})),w.addEventListener("keypress",(function(t){if(this.classList.remove("error"),i.update({key:"Login.Next"}),"Enter"===t.key)return e.click()}));const L=s.b.isMobile?100:166,f=new d.a(a,L);return t.imageDiv.append(f.container),Promise.all([f.load(),v()])},null,()=>{w.focus(),a.default.pushToState("authState",{_:"authStatePassword"}),a.default.saveState()});e.default=g}}]);