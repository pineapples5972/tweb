(this.webpackJsonp=this.webpackJsonp||[]).push([[3],{105:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));const a=1271266957},106:function(e,t,s){"use strict";function a(e){const t=document.createElement("span");return t.innerHTML=e,t}s.d(t,"a",(function(){return a}))},123:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var a=s(120);const n=/[`~!@#$%^&*()\-_=+\[\]\\|{}'";:\/?.>,<]+/g,i=/^\s+|\s$/g;function r(e,t=!0){const s="%"===e.charAt(0);return e=e.replace(n,"").replace(i,""),t&&(e=e.replace(/[^A-Za-z0-9]/g,e=>{const t=a.a.LatinizeMap[e];return void 0!==t?t:e})),e=e.toLowerCase(),s&&(e="%"+e),e}},33:function(e,t,s){"use strict";var a=s(34),n=s(26),i=s(123);function r(e){return e&&e.toLowerCase()||""}var d=s(44),h=s(30),o=s(13),u=s(27),c=s(105),p=s(64),l=s(29),g=s(12),f=s(95),_=s(61),m=s(42),C=s(40),v=s(15);const P=new class{constructor(){this.storage=v.default.storages.users,this.updateUsersStatuses=()=>{const e=Object(d.h)(!0);for(const t in this.users){const s=this.users[t];s.status&&"userStatusOnline"===s.status._&&s.status.expires<e&&(s.status={_:"userStatusOffline",was_online:s.status.expires},g.default.dispatchEvent("user_update",s.id),this.setUserToStateIfNeeded(s))}},this.clear(!0),setInterval(this.updateUsersStatuses,6e4),g.default.addEventListener("state_synchronized",this.updateUsersStatuses),g.default.addMultipleEventsListeners({updateUserStatus:e=>{const t=e.user_id,s=this.users[t];s&&(s.status=e.status,s.status&&("expires"in s.status&&(s.status.expires-=p.a.serverTimeOffset),"was_online"in s.status&&(s.status.was_online-=p.a.serverTimeOffset)),g.default.dispatchEvent("user_update",t),this.setUserToStateIfNeeded(s))},updateUserPhoto:e=>{const t=e.user_id,s=this.users[t];s?(this.forceUserOnline(t),"userProfilePhotoEmpty"===e.photo._?delete s.photo:s.photo=Object(h.i)(s.photo,e.photo),this.setUserToStateIfNeeded(s),g.default.dispatchEvent("user_update",t),g.default.dispatchEvent("avatar_update",t)):console.warn("No user by id:",t)},updateUserName:e=>{const t=e.user_id,s=this.users[t];s&&(this.forceUserOnline(t),this.saveApiUser(Object.assign({},s,{first_name:e.first_name,last_name:e.last_name,username:e.username}),!0))}}),g.default.addEventListener("language_change",e=>{const t=this.getSelf().id;this.contactsIndex.indexObject(t,this.getUserSearchText(t))}),v.default.getState().then(e=>{const t=v.default.storagesResults.users;if(t.length)for(let e=0,s=t.length;e<s;++e){const s=t[e];s&&(this.users[s.id]=s)}const s=e.contactsList;s&&Array.isArray(s)&&(s.forEach(e=>{this.pushContact(e)}),s.length&&(this.contactsFillPromise=Promise.resolve(this.contactsList))),v.default.addEventListener("peerNeeded",e=>{e<0||this.storage.getFromCache(e)||this.storage.set({[e]:this.getUser(e)})}),v.default.addEventListener("peerUnneeded",e=>{e<0||!this.storage.getFromCache(e)||this.storage.delete(e)})})}clear(e=!1){if(e)this.users={},this.usernames={};else{const e=v.default.storagesResults.users;for(const t in this.users){const s=+t;if(s&&!v.default.isPeerNeeded(s)){const t=this.users[s];t.username&&delete this.usernames[r(t.username)],e.findAndSplice(e=>e.id===s),this.storage.delete(s),delete this.users[s]}}}this.contactsIndex=new f.a,this.contactsFillPromise=void 0,this.contactsList=new Set,this.updatedContactsList=!1}onContactsModified(){const e=[...this.contactsList];v.default.pushToState("contactsList",e)}fillContacts(){if(this.contactsFillPromise&&this.updatedContactsList)return this.contactsFillPromise;this.updatedContactsList=!0;const e=u.a.invokeApi("contacts.getContacts").then(t=>("contacts.contacts"===t._&&(this.saveApiUsers(t.users),t.contacts.forEach(e=>{this.pushContact(e.user_id)}),this.onContactsModified()),this.contactsFillPromise=e,this.contactsList));return this.contactsFillPromise||(this.contactsFillPromise=e)}resolveUsername(e){return"@"===e[0]&&(e=e.slice(1)),e=e.toLowerCase(),this.usernames[e]?Promise.resolve(this.users[this.usernames[e]]):u.a.invokeApi("contacts.resolveUsername",{username:e}).then(e=>(this.saveApiUsers(e.users),m.a.saveApiChats(e.chats),C.a.getPeer(C.a.getPeerId(e.peer))))}pushContact(e){this.contactsList.add(e),this.contactsIndex.indexObject(e,this.getUserSearchText(e)),v.default.requestPeer(e,"contacts")}getUserSearchText(e){const t=this.users[e];if(!t)return"";return[t.first_name,t.last_name,t.phone,t.username,t.pFlags.self?o.default.format("SavedMessages",!0):"",t.pFlags.self?"Saved Messages":""].filter(Boolean).join(" ")}getContacts(e,t=!1){return this.fillContacts().then(s=>{let a=[...s];if(e){const t=this.contactsIndex.search(e);a=[...a].filter(e=>t.has(e))}return a.sort((e,t)=>{const s=(this.users[e]||{}).sortName||"",a=(this.users[t]||{}).sortName||"";return s.localeCompare(a)}),t&&this.testSelfSearch(e)&&(a.findAndSplice(e=>e===g.default.myId),a.unshift(g.default.myId)),a})}toggleBlock(e,t){return u.a.invokeApi(t?"contacts.block":"contacts.unblock",{id:C.a.getInputPeerById(e)}).then(s=>(s&&_.a.processUpdateMessage({_:"updateShort",update:{_:"updatePeerBlocked",peer_id:C.a.getOutputPeer(e),blocked:t}}),s))}testSelfSearch(e){const t=this.getSelf(),s=new f.a;return s.indexObject(t.id,this.getUserSearchText(t.id)),s.search(e).has(t.id)}saveApiUsers(e,t){e.forEach(e=>this.saveApiUser(e,t))}saveApiUser(e,t){var s,a;if("userEmpty"===e._)return;const n=e.id,d=this.users[n];if(void 0===e.pFlags&&(e.pFlags={}),e.pFlags.min&&void 0!==d)return;const o=e.first_name+" "+(e.last_name||"");if(e.username){const t=r(e.username);this.usernames[t]=n}e.sortName=e.pFlags.deleted?"":Object(i.a)(o,!1),e.initials=l.a.getAbbreviation(o),e.status&&(e.status.expires&&(e.status.expires-=p.a.serverTimeOffset),e.status.was_online&&(e.status.was_online-=p.a.serverTimeOffset));let u=!1,c=!1;if(void 0===d)this.users[n]=e;else{e.first_name===d.first_name&&e.last_name===d.last_name&&e.username===d.username||(c=!0);(null===(s=d.photo)||void 0===s?void 0:s.photo_id)!==(null===(a=e.photo)||void 0===a?void 0:a.photo_id)&&(u=!0),Object(h.i)(d,e),g.default.dispatchEvent("user_update",n)}u&&g.default.dispatchEvent("avatar_update",e.id),c&&g.default.dispatchEvent("peer_title_edit",e.id),this.setUserToStateIfNeeded(e)}setUserToStateIfNeeded(e){v.default.isPeerNeeded(e.id)&&this.storage.set({[e.id]:e})}formatUserPhone(e){return"+"+Object(a.c)(e).formatted}getUserStatusForSort(e){if("number"==typeof e&&(e=this.getUser(e).status),e){const t="userStatusOnline"===e._?e.expires:"userStatusOffline"===e._?e.was_online:0;if(t)return t;switch(e._){case"userStatusRecently":return 3;case"userStatusLastWeek":return 2;case"userStatusLastMonth":return 1}}return 0}getUser(e){return Object(h.f)(e)?e:this.users[e]||{id:e,pFlags:{deleted:!0},access_hash:""}}getSelf(){return this.getUser(g.default.myId)}getUserStatusString(e){var t;let s,a;switch(e){case c.a:s="Peer.RepliesNotifications";break;case 777e3:s="Peer.ServiceNotifications";break;default:{if(this.isBot(e)){s="Bot";break}const n=this.getUser(e);if(!n){s="";break}if(n.pFlags.support){s="SupportStatus";break}switch(null===(t=n.status)||void 0===t?void 0:t._){case"userStatusRecently":s="Lately";break;case"userStatusLastWeek":s="WithinAWeek";break;case"userStatusLastMonth":s="WithinAMonth";break;case"userStatusOffline":{const e=n.status.was_online,t=Date.now()/1e3;if(t-e<60)s="Peer.Status.justNow";else if(t-e<3600){s="Peer.Status.minAgo";a=[(t-e)/60|0]}else if(t-e<86400){s="LastSeen.HoursAgo";a=[(t-e)/3600|0]}else{s="Peer.Status.LastSeenAt";const t=new Date(1e3*e);a=[("0"+t.getDate()).slice(-2)+"."+("0"+(t.getMonth()+1)).slice(-2),("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)]}break}case"userStatusOnline":s="Online";break;default:s="ALongTimeAgo"}break}}return Object(o.i18n)(s,a)}isBot(e){return this.users[e]&&this.users[e].pFlags.bot}isContact(e){return this.contactsList.has(e)}isRegularUser(e){const t=this.users[e];return t&&!this.isBot(e)&&!t.pFlags.deleted&&!t.pFlags.support}isNonContactUser(e){return this.isRegularUser(e)&&!this.isContact(e)&&e!==g.default.myId}hasUser(e,t){var s=this.users[e];return Object(h.f)(s)&&(t||!s.pFlags.min)}canSendToUser(e){const t=this.getUser(e);return!t.pFlags.deleted&&"replies"!==t.username}getUserPhoto(e){const t=this.getUser(e);return t&&t.photo||{_:"userProfilePhotoEmpty"}}getUserString(e){const t=this.getUser(e);return"u"+e+(t.access_hash?"_"+t.access_hash:"")}getUserInput(e){const t=this.getUser(e);return t.pFlags&&t.pFlags.self?{_:"inputUserSelf"}:{_:"inputUser",user_id:e,access_hash:t.access_hash}}forceUserOnline(e,t){if(this.isBot(e))return;const s=Object(d.h)(!0);if(t){if(s-t>=60)return}else if(_.a.updatesState.syncLoading)return;const a=this.getUser(e);a&&a.status&&"userStatusOnline"!==a.status._&&"userStatusEmpty"!==a.status._&&!a.pFlags.support&&!a.pFlags.deleted&&(a.status={_:"userStatusOnline",expires:s+60},g.default.dispatchEvent("user_update",e),this.setUserToStateIfNeeded(a))}getTopPeers(){return this.getTopPeersPromise?this.getTopPeersPromise:this.getTopPeersPromise=v.default.getState().then(e=>{var t;return(null===(t=null==e?void 0:e.topPeers)||void 0===t?void 0:t.length)?e.topPeers:u.a.invokeApi("contacts.getTopPeers",{correspondents:!0,offset:0,limit:15,hash:0}).then(e=>{let t=[];return"contacts.topPeers"===e._&&(this.saveApiUsers(e.users),m.a.saveApiChats(e.chats),e.categories.length&&(t=e.categories[0].peers.map(e=>{const t=C.a.getPeerId(e.peer);return v.default.requestPeer(t,"topPeer"),t}))),v.default.pushToState("topPeers",t),t})})}getBlocked(e=0,t=0){return u.a.invokeApi("contacts.getBlocked",{offset:e,limit:t}).then(e=>{this.saveApiUsers(e.users),m.a.saveApiChats(e.chats);return{count:"contacts.blocked"===e._?e.users.length+e.chats.length:e.count,peerIds:e.users.map(e=>e.id).concat(e.chats.map(e=>-e.id))}})}searchContacts(e,t=20){return u.a.invokeApi("contacts.search",{q:e,limit:t}).then(e=>{this.saveApiUsers(e.users),m.a.saveApiChats(e.chats);return{my_results:[...new Set(e.my_results.map(e=>C.a.getPeerId(e)))],results:e.results.map(e=>C.a.getPeerId(e))}})}onContactUpdated(e,t){t!==this.isContact(e)&&(t?this.pushContact(e):this.contactsList.delete(e),this.onContactsModified(),g.default.dispatchEvent("contacts_update",e))}updateUsername(e){return u.a.invokeApi("account.updateUsername",{username:e}).then(e=>{this.saveApiUser(e)})}setUserStatus(e,t){if(this.isBot(e))return;const s=this.users[e];if(s){const a=t?{_:"userStatusOffline",was_online:Object(d.h)(!0)}:{_:"userStatusOnline",expires:Object(d.h)(!0)+500};s.status=a,g.default.dispatchEvent("user_update",e)}}addContact(e,t,s,a,n){return u.a.invokeApi("contacts.addContact",{id:this.getUserInput(e),first_name:t,last_name:s,phone:a,add_phone_privacy_exception:n}).then(t=>{_.a.processUpdateMessage(t,{override:!0}),this.onContactUpdated(e,!0)})}deleteContacts(e){return u.a.invokeApi("contacts.deleteContacts",{id:e.map(e=>this.getUserInput(e))}).then(t=>{_.a.processUpdateMessage(t,{override:!0}),e.forEach(e=>{this.onContactUpdated(e,!1)})})}};n.a.appUsersManager=P;t.a=P},40:function(e,t,s){"use strict";var a=s(26),n=s(30),i=s(29),r=s(12),d=s(42),h=s(33),o=s(13);const u=["#fc5c51","#0fb297","#d09306","#3d72ed","#895dd5","#cd4073","#00c1a6","#fa790f"],c=["red","green","yellow","blue","violet","pink","cyan","orange"],p=[0,7,4,1,6,3,5];const l=new class{constructor(){r.default.addMultipleEventsListeners({updatePeerBlocked:e=>{r.default.dispatchEvent("peer_block",{peerId:this.getPeerId(e.peer_id),blocked:e.blocked})}})}canPinMessage(e){return e>0||d.a.hasRights(-e,"pin_messages")}getPeerPhoto(e){const t=e>0?h.a.getUserPhoto(e):d.a.getChatPhoto(-e);return"chatPhotoEmpty"!==t._&&"userProfilePhotoEmpty"!==t._?t:null}getPeerMigratedTo(e){if(e>=0)return!1;let t=d.a.getChat(-e);return!!(t&&t.migrated_to&&t.pFlags.deactivated)&&this.getPeerId(t.migrated_to)}getPeerTitle(e,t=!1,s=!1){e||(e=r.default.myId);let a={};a=Object(n.f)(e)?e:this.getPeer(e);let d="";return e>0?(a.first_name&&(d+=a.first_name),a.last_name&&(d+=" "+a.last_name),d=d?d.trim():a.pFlags.deleted?o.default.format("HiddenName",!0):a.username):d=a.title,s&&(d=d.split(" ")[0]),t?d:i.a.wrapEmojiText(d)}getOutputPeer(e){if(e>0)return{_:"peerUser",user_id:e};let t=-e;return d.a.isChannel(t)?{_:"peerChannel",channel_id:t}:{_:"peerChat",chat_id:t}}getPeerString(e){return e>0?h.a.getUserString(e):d.a.getChatString(-e)}getPeerUsername(e){return e>0?h.a.getUser(e).username||"":d.a.getChat(-e).username||""}getPeer(e){return e>0?h.a.getUser(e):d.a.getChat(-e)}getPeerId(e){if("number"==typeof e)return e;if(Object(n.f)(e))return e.user_id||-(e.channel_id||e.chat_id);if(!e)return 0;const t="u"===e.charAt(0),s=e.substr(1).split("_");return t?+s[0]:-s[0]||0}getDialogPeer(e){return{_:"dialogPeer",peer:this.getOutputPeer(e)}}isChannel(e){return e<0&&d.a.isChannel(-e)}isMegagroup(e){return e<0&&d.a.isMegagroup(-e)}isAnyGroup(e){return e<0&&!d.a.isBroadcast(-e)}isBroadcast(e){return this.isChannel(e)&&!this.isMegagroup(e)}isBot(e){return e>0&&h.a.isBot(e)}getInputNotifyPeerById(e,t){return t?e>0?{_:"inputNotifyUsers"}:l.isBroadcast(e)?{_:"inputNotifyBroadcasts"}:{_:"inputNotifyChats"}:{_:"inputNotifyPeer",peer:this.getInputPeerById(e)}}getInputPeerById(e){if(!e)return{_:"inputPeerEmpty"};if(e<0){const t=-e;return d.a.isChannel(t)?d.a.getChannelInputPeer(t):d.a.getChatInputPeer(t)}return{_:"inputPeerUser",user_id:e,access_hash:h.a.getUser(e).access_hash}}getInputDialogPeerById(e){return{_:"inputDialogPeer",peer:this.getInputPeerById(e)}}getPeerColorById(e,t=!0){if(!e)return"";return(t?c:u)[p[(e<0?-e:e)%7]]}getPeerSearchText(e){let t;if(e>0)t="%pu "+h.a.getUserSearchText(e);else if(e<0){t="%pg "+(d.a.getChat(-e).title||"")}return t}getDialogType(e){return l.isMegagroup(e)?"megagroup":l.isChannel(e)?"channel":e<0?"group":e===r.default.myId?"saved":"chat"}getDeleteButtonText(e){switch(this.getDialogType(e)){case"channel":return"ChatList.Context.LeaveChannel";case"megagroup":return"ChatList.Context.LeaveGroup";case"group":return"ChatList.Context.DeleteAndExit";default:return"ChatList.Context.DeleteChat"}}};a.a.appPeersManager=l,t.a=l},42:function(e,t,s){"use strict";var a=s(26),n=s(30),i=s(27),r=s(29),d=s(12),h=s(61),o=s(40),u=s(15),c=s(33);const p=new class{constructor(){this.storage=u.default.storages.chats,this.onChatUpdated=(e,t)=>{h.a.processUpdateMessage(t),t&&this.isChannel(e)&&d.default.dispatchEvent("invalidate_participants",e)},this.clear(!0),d.default.addMultipleEventsListeners({updateChannelParticipant:e=>{i.a.clearCache("channels.getParticipants",t=>t.channel.channel_id===e.channel_id)},updateChatDefaultBannedRights:e=>{const t=-o.a.getPeerId(e.peer),s=this.chats[t];s&&(s.default_banned_rights=e.default_banned_rights,d.default.dispatchEvent("chat_update",t))}}),u.default.getState().then(e=>{const t=u.default.storagesResults.chats;if(t.length)for(let e=0,s=t.length;e<s;++e){const s=t[e];s&&(this.chats[s.id]=s)}u.default.addEventListener("peerNeeded",e=>{e>0||this.storage.getFromCache(-e)||this.storage.set({[-e]:this.getChat(-e)})}),u.default.addEventListener("peerUnneeded",e=>{e>0||!this.storage.getFromCache(-e)||this.storage.delete(-e)})})}clear(e=!1){if(e)this.chats={};else{const e=u.default.storagesResults.chats;for(const t in this.chats){const s=+t;s&&(u.default.isPeerNeeded(-s)||(e.findAndSplice(e=>e.id===s),this.storage.delete(s),delete this.chats[s]))}}}saveApiChats(e,t){e.forEach(e=>this.saveApiChat(e,t))}saveApiChat(e,t){var s,a;if("chatEmpty"===e._)return;const i=this.chats[e.id];if(void 0===e.pFlags&&(e.pFlags={}),e.pFlags.min&&void 0!==i)return;e.initials=r.a.getAbbreviation(e.title),"channel"===e._&&void 0===e.participants_count&&void 0!==i&&i.participants_count&&(e.participants_count=i.participants_count);let h=!1,o=!1;if(void 0===i)this.chats[e.id]=e;else{(null===(s=i.photo)||void 0===s?void 0:s.photo_id)!==(null===(a=e.photo)||void 0===a?void 0:a.photo_id)&&(h=!0),i.title!==e.title&&(o=!0),Object(n.i)(i,e),d.default.dispatchEvent("chat_update",e.id)}h&&d.default.dispatchEvent("avatar_update",-e.id),o&&d.default.dispatchEvent("peer_title_edit",-e.id),u.default.isPeerNeeded(-e.id)&&this.storage.set({[e.id]:e})}getChat(e){return e<0&&(e=-e),this.chats[e]||{_:"chatEmpty",id:e,deleted:!0,access_hash:"",pFlags:{}}}combineParticipantBannedRights(e,t){const s=this.getChat(e);if(s.default_banned_rights){t=Object(n.a)(t);const e=s.default_banned_rights.pFlags;for(let s in e)t.pFlags[s]=e[s]}return t}hasRights(e,t,s,a){const n=this.getChat(e);if("chatEmpty"===n._)return!1;if("chatForbidden"===n._||"channelForbidden"===n._||n.pFlags.kicked||n.pFlags.left&&!n.pFlags.megagroup)return!1;if(n.pFlags.creator&&void 0===s)return!0;if(!s&&!(s=n.admin_rights||n.banned_rights||n.default_banned_rights))return!1;let i={};switch(s&&(i=s.pFlags),t){case"embed_links":case"send_games":case"send_gifs":case"send_inline":case"send_media":case"send_messages":case"send_polls":case"send_stickers":if(!a&&n.pFlags.left)return!1;if("chatBannedRights"===s._&&i[t])return!1;if("channel"===n._&&!n.pFlags.megagroup&&!i.post_messages)return!1;break;case"delete_messages":return!!i.delete_messages;case"pin_messages":return"chatAdminRights"===s._?i[t]||!!i.post_messages:!i[t];case"invite_users":case"change_info":return"chatAdminRights"===s._?i[t]:!i[t];case"change_type":case"delete_chat":return!1;case"change_permissions":return"chatAdminRights"===s._&&i.ban_users;case"view_participants":return!("chat"!==n._&&n.pFlags.broadcast&&!n.pFlags.creator&&!n.admin_rights)}return!0}editChatDefaultBannedRights(e,t){const s=this.getChat(e);return s.default_banned_rights&&s.default_banned_rights.until_date===t.until_date&&Object(n.b)(s.default_banned_rights.pFlags,t.pFlags)?Promise.resolve():i.a.invokeApi("messages.editChatDefaultBannedRights",{peer:o.a.getInputPeerById(-e),banned_rights:t}).then(this.onChatUpdated.bind(this,e))}isChannel(e){const t=this.chats[e];return t&&("channel"===t._||"channelForbidden"===t._)}isMegagroup(e){const t=this.chats[e];return t&&"channel"===t._&&t.pFlags.megagroup}isBroadcast(e){return this.isChannel(e)&&!this.isMegagroup(e)}isInChat(e){let t=!0;const s=this.getChat(e);return("channelForbidden"===s._||"chatForbidden"===s._||"chatEmpty"===s._||s.pFlags.left||s.pFlags.kicked||s.pFlags.deactivated)&&(t=!1),t}getChannelInput(e){const t=this.getChat(e);return"chatEmpty"!==t._&&t.access_hash?{_:"inputChannel",channel_id:e,access_hash:t.access_hash||"0"}:{_:"inputChannelEmpty"}}getChatInputPeer(e){return{_:"inputPeerChat",chat_id:e}}getChannelInputPeer(e){return{_:"inputPeerChannel",channel_id:e,access_hash:this.getChat(e).access_hash||0}}hasChat(e,t){const s=this.chats[e];return Object(n.f)(s)&&(t||!s.pFlags.min)}getChatPhoto(e){const t=this.getChat(e);return t&&t.photo||{_:"chatPhotoEmpty"}}getChatString(e){const t=this.getChat(e);return this.isChannel(e)?(this.isMegagroup(e)?"s":"c")+e+"_"+t.access_hash:"g"+e}createChannel(e,t){return i.a.invokeApi("channels.createChannel",{broadcast:!0,title:e,about:t}).then(e=>{h.a.processUpdateMessage(e);const t=e.chats[0].id;return d.default.dispatchEvent("history_focus",{peerId:-t}),t})}inviteToChannel(e,t){const s=this.getChannelInput(e),a=t.map(e=>c.a.getUserInput(e));return i.a.invokeApi("channels.inviteToChannel",{channel:s,users:a}).then(e=>{h.a.processUpdateMessage(e)})}createChat(e,t){return i.a.invokeApi("messages.createChat",{users:t.map(e=>c.a.getUserInput(e)),title:e}).then(e=>{h.a.processUpdateMessage(e);const t=e.chats[0].id;return d.default.dispatchEvent("history_focus",{peerId:-t}),t})}leaveChannel(e){return i.a.invokeApi("channels.leaveChannel",{channel:this.getChannelInput(e)}).then(this.onChatUpdated.bind(this,e))}joinChannel(e){return i.a.invokeApi("channels.joinChannel",{channel:this.getChannelInput(e)}).then(this.onChatUpdated.bind(this,e))}addChatUser(e,t,s=100){return i.a.invokeApi("messages.addChatUser",{chat_id:e,user_id:c.a.getUserInput(t),fwd_limit:s}).then(this.onChatUpdated.bind(this,e))}deleteChatUser(e,t){return i.a.invokeApi("messages.deleteChatUser",{chat_id:e,user_id:c.a.getUserInput(t)}).then(this.onChatUpdated.bind(this,e))}leaveChat(e){return this.deleteChatUser(e,c.a.getSelf().id)}leave(e){return this.isChannel(e)?this.leaveChannel(e):this.leaveChat(e)}delete(e){return this.isChannel(e)?this.deleteChannel(e):this.deleteChat(e)}deleteChannel(e){return i.a.invokeApi("channels.deleteChannel",{channel:this.getChannelInput(e)}).then(this.onChatUpdated.bind(this,e))}deleteChat(e){return i.a.invokeApi("messages.deleteChat",{chat_id:e})}migrateChat(e){const t=this.getChat(e);return"channel"===t._?Promise.resolve(t.id):i.a.invokeApi("messages.migrateChat",{chat_id:e}).then(t=>{this.onChatUpdated(e,t);return t.updates.find(e=>"updateChannel"===e._).channel_id})}updateUsername(e,t){return i.a.invokeApi("channels.updateUsername",{channel:this.getChannelInput(e),username:t}).then(s=>{if(s){this.getChat(e).username=t}return s})}editPhoto(e,t){const s={_:"inputChatUploadedPhoto",file:t};let a;return a=this.isChannel(e)?i.a.invokeApi("channels.editPhoto",{channel:this.getChannelInput(e),photo:s}):i.a.invokeApi("messages.editChatPhoto",{chat_id:e,photo:s}),a.then(e=>{h.a.processUpdateMessage(e)})}editTitle(e,t){let s;return s=this.isChannel(e)?i.a.invokeApi("channels.editTitle",{channel:this.getChannelInput(e),title:t}):i.a.invokeApi("messages.editChatTitle",{chat_id:e,title:t}),s.then(e=>{h.a.processUpdateMessage(e)})}editAbout(e,t){return i.a.invokeApi("messages.editChatAbout",{peer:o.a.getInputPeerById(-e),about:t}).then(t=>{d.default.dispatchEvent("peer_bio_edit",-e)})}getParticipantPeerId(e){return e.peer?o.a.getPeerId(e.peer):e.user_id}editBanned(e,t,s){const a="number"==typeof t?t:this.getParticipantPeerId(t);return i.a.invokeApi("channels.editBanned",{channel:this.getChannelInput(e),participant:o.a.getInputPeerById(a),banned_rights:s}).then(n=>{if(this.onChatUpdated(e,n),"number"!=typeof t){const n=Date.now()/1e3|0;h.a.processUpdateMessage({_:"updateShort",update:{_:"updateChannelParticipant",channel_id:e,date:n,actor_id:void 0,qts:void 0,user_id:a,prev_participant:t,new_participant:Object.keys(s.pFlags).length?{_:"channelParticipantBanned",date:n,banned_rights:s,kicked_by:c.a.getSelf().id,peer:o.a.getOutputPeer(a),pFlags:{}}:void 0}})}})}clearChannelParticipantBannedRights(e,t){return this.editBanned(e,t,{_:"chatBannedRights",until_date:0,pFlags:{}})}kickFromChannel(e,t){return this.editBanned(e,t,{_:"chatBannedRights",until_date:0,pFlags:{view_messages:!0}})}};a.a.appChatsManager=p,t.a=p},61:function(e,t,s){"use strict";var a=s(26),n=s(36),i=s(27),r=s(12),d=s(33),h=s(42),o=s(40),u=s(15),c=s(64);const p=new class{constructor(){this.updatesState={pendingPtsUpdates:[],pendingSeqUpdates:{},syncPending:null,syncLoading:null},this.channelStates={},this.attached=!1,this.log=Object(n.b)("UPDATES",n.a.Error|n.a.Warn|n.a.Log),this.debug=a.b,this.processUpdateMessage=(e,t={})=>{const s={date:e.date,seq:e.seq,seqStart:e.seq_start};switch(this.debug&&this.log.debug("processUpdateMessage",e),e._){case"updatesTooLong":case"new_session_created":this.forceGetDifference();break;case"updateShort":this.processUpdate(e.update,s);break;case"updateShortMessage":case"updateShortChatMessage":{this.debug&&this.log.debug("updateShortMessage | updateShortChatMessage",Object.assign({},e));const t=e.pFlags.out,a=e.from_id||(t?r.default.myId:e.user_id),n=e.chat_id?-e.chat_id:e.user_id||r.default.myId;this.processUpdate({_:"updateNewMessage",message:{_:"message",pFlags:e.pFlags,id:e.id,from_id:o.a.getOutputPeer(a),peer_id:o.a.getOutputPeer(n),date:e.date,message:e.message,fwd_from:e.fwd_from,reply_to:e.reply_to,entities:e.entities},pts:e.pts,pts_count:e.pts_count},s);break}case"updatesCombined":case"updates":d.a.saveApiUsers(e.users,t.override),h.a.saveApiChats(e.chats,t.override),e.updates.forEach(e=>{this.processUpdate(e,s)});break;default:this.log.warn("Unknown update message",e)}}}setProxy(){const e=this;this.updatesState=new Proxy(this.updatesState,{set:function(t,s,a){return t[s]=a,e.saveUpdatesState(),!0}})}saveUpdatesState(){const e=this.updatesState;u.default.pushToState("updates",{seq:e.seq,pts:e.pts,date:e.date})}popPendingSeqUpdate(){const e=this.updatesState,t=e.seq+1,s=e.pendingSeqUpdates[t];if(!s)return!1;const a=s.updates;for(let e=0,t=a.length;e<t;++e)this.saveUpdate(a[e]);return e.seq=s.seq,s.date&&e.date<s.date&&(e.date=s.date),delete e.pendingSeqUpdates[t],!this.popPendingSeqUpdate()&&e.syncPending&&e.syncPending.seqAwaiting&&e.seq>=e.syncPending.seqAwaiting&&(e.syncPending.ptsAwaiting?delete e.syncPending.seqAwaiting:(clearTimeout(e.syncPending.timeout),e.syncPending=null)),!0}popPendingPtsUpdate(e){const t=e?this.getChannelState(e):this.updatesState;if(!t.pendingPtsUpdates.length)return!1;t.pendingPtsUpdates.sort((e,t)=>e.pts-t.pts);let s=t.pts,a=0,n=0;for(let e=0,i=t.pendingPtsUpdates.length;e<i;++e){const i=t.pendingPtsUpdates[e];s+=i.pts_count,s>=i.pts&&(a=i.pts,n=e)}if(!a)return!1;this.debug&&this.log.debug("pop pending pts updates",a,t.pendingPtsUpdates.slice(0,n+1)),t.pts=a;for(let e=0;e<=n;++e){const s=t.pendingPtsUpdates[e];this.saveUpdate(s)}return t.pendingPtsUpdates.splice(0,n+1),!t.pendingPtsUpdates.length&&t.syncPending&&(t.syncPending.seqAwaiting?delete t.syncPending.ptsAwaiting:(clearTimeout(t.syncPending.timeout),t.syncPending=null)),!0}forceGetDifference(){this.updatesState.syncLoading||this.getDifference()}getDifference(e=!1){const t=this.updatesState;let s=t.syncLoading;s||(t.pendingSeqUpdates={},t.pendingPtsUpdates=[]),t.syncPending&&(clearTimeout(t.syncPending.timeout),t.syncPending=null);const a=i.a.invokeApi("updates.getDifference",{pts:t.pts,pts_total_limit:e?1200:void 0,date:t.date,qts:-1},{timeout:2147483647}).then(s=>{if(this.debug&&this.log.debug("Get diff result",s),"updates.differenceEmpty"===s._)return this.debug&&this.log.debug("apply empty diff",s.seq),t.date=s.date,void(t.seq=s.seq);if(e&&r.default.dispatchEvent("state_synchronizing"),"updates.differenceTooLong"!==s._){d.a.saveApiUsers(s.users),h.a.saveApiChats(s.chats),s.other_updates.forEach(e=>{switch(e._){case"updateChannelTooLong":case"updateNewChannelMessage":case"updateEditChannelMessage":return void this.processUpdate(e)}this.saveUpdate(e)}),s.new_messages.forEach(e=>{this.saveUpdate({_:"updateNewMessage",message:e,pts:t.pts,pts_count:0})});const e="updates.difference"===s._?s.state:s.intermediate_state;t.seq=e.seq,t.pts=e.pts,t.date=e.date}else t.pts=s.pts,t.date=(Date.now()/1e3|0)+c.a.serverTimeOffset,delete t.seq,this.channelStates={},this.log.warn("getDifference:",s._),r.default.dispatchEvent("state_cleared");if("updates.differenceSlice"===s._)return this.getDifference();this.debug&&this.log.debug("finished get diff")});return s||this.justAName(t,a),a}getChannelDifference(e){const t=this.getChannelState(e),s=t.syncLoading;s||(t.pendingPtsUpdates=[]),t.syncPending&&(clearTimeout(t.syncPending.timeout),t.syncPending=null);const a=i.a.invokeApi("updates.getChannelDifference",{channel:h.a.getChannelInput(e),filter:{_:"channelMessagesFilterEmpty"},pts:t.pts,limit:30},{timeout:2147483647}).then(s=>{if(this.debug&&this.log.debug("Get channel diff result",s),t.pts="pts"in s?s.pts:void 0,"updates.channelDifferenceEmpty"!==s._){if("updates.channelDifferenceTooLong"===s._)return this.debug&&this.log.debug("channel diff too long",s),delete this.channelStates[e],void this.saveUpdate({_:"updateChannelReload",channel_id:e});if(d.a.saveApiUsers(s.users),h.a.saveApiChats(s.chats),this.debug&&this.log.debug("applying",s.other_updates.length,"channel other updates"),s.other_updates.forEach(e=>{this.saveUpdate(e)}),this.debug&&this.log.debug("applying",s.new_messages.length,"channel new messages"),s.new_messages.forEach(e=>{this.saveUpdate({_:"updateNewChannelMessage",message:e,pts:t.pts,pts_count:0})}),this.debug&&this.log.debug("apply channel diff",t.pts),"updates.channelDifference"===s._&&!s.pFlags.final)return this.getChannelDifference(e);this.debug&&this.log.debug("finished channel get diff")}else this.debug&&this.log.debug("apply channel empty diff",s)});return s||this.justAName(t,a,e),a}justAName(e,t,s){e.syncLoading=t,r.default.dispatchEvent("state_synchronizing",s),t.then(()=>{e.syncLoading=null,r.default.dispatchEvent("state_synchronized",s)},()=>{e.syncLoading=null})}addChannelState(e,t){if(!t)throw new Error("Add channel state without pts "+e);return!(e in this.channelStates)&&(this.channelStates[e]={pts:t,pendingPtsUpdates:[],syncPending:null,syncLoading:null},!0)}getChannelState(e,t){return void 0===this.channelStates[e]&&this.addChannelState(e,t),this.channelStates[e]}processUpdate(e,t={}){let s=0;switch(e._){case"updateNewChannelMessage":case"updateEditChannelMessage":s=-o.a.getPeerId(e.message.peer_id);break;case"updateDeleteChannelMessages":s=e.channel_id;break;case"updateChannelTooLong":if(s=e.channel_id,!(s in this.channelStates))return!1}const a=s?this.getChannelState(s,e.pts):this.updatesState;if(a.syncLoading)return!1;if("updateChannelTooLong"===e._)return(!a.lastPtsUpdateTime||a.lastPtsUpdateTime<Date.now()-6)&&this.getChannelDifference(s),!1;if("updateNewMessage"===e._||"updateEditMessage"===e._||"updateNewChannelMessage"===e._||"updateEditChannelMessage"===e._){const t=e.message,a=o.a.getPeerId(t.peer_id),n=t.fwd_from||{};let i=!1;if(t.from_id&&!d.a.hasUser(o.a.getPeerId(t.from_id),t.pFlags.post)&&(i="author")||n.from_id&&!d.a.hasUser(o.a.getPeerId(n.from_id),!!n.channel_id)&&(i="fwdAuthor")||n.channel_id&&!h.a.hasChat(n.channel_id,!0)&&(i="fwdChannel")||a>0&&!d.a.hasUser(a)&&(i="toPeer User")||a<0&&!h.a.hasChat(-a)&&(i="toPeer Chat"))return this.log.warn("Not enough data for message update",a,i,t),s&&h.a.hasChat(s)?this.getChannelDifference(s):this.forceGetDifference(),!1}else if(s&&!h.a.hasChat(s))return!1;let n,i;if(e.pts){if(a.pts+(e.pts_count||0)<e.pts)return this.debug&&this.log.warn("Pts hole",a,e,s&&h.a.getChat(s)),a.pendingPtsUpdates.push(e),a.syncPending||a.syncLoading||(a.syncPending={timeout:window.setTimeout(()=>{a.syncPending=null,a.syncLoading||(s?this.getChannelDifference(s):this.getDifference())},6)}),a.syncPending.ptsAwaiting=!0,!1;if(e.pts>a.pts)a.pts=e.pts,n=!0,a.lastPtsUpdateTime=Date.now();else if(e.pts_count)return!1;s&&t.date&&this.updatesState.date<t.date&&(this.updatesState.date=t.date)}else if(!s&&t.seq>0){const s=t.seq,n=t.seqStart||s;if(n!==a.seq+1&&n>a.seq)return this.debug&&this.log.warn("Seq hole",a,a.syncPending&&a.syncPending.seqAwaiting),void 0===a.pendingSeqUpdates[n]&&(a.pendingSeqUpdates[n]={seq:s,date:t.date,updates:[]}),a.pendingSeqUpdates[n].updates.push(e),a.syncPending||(a.syncPending={timeout:window.setTimeout(()=>{a.syncPending=null,a.syncLoading||this.getDifference()},6)}),(!a.syncPending.seqAwaiting||a.syncPending.seqAwaiting<n)&&(a.syncPending.seqAwaiting=n),!1;a.seq!==s&&(a.seq=s,t.date&&a.date<t.date&&(a.date=t.date),i=!0)}this.saveUpdate(e),n?this.popPendingPtsUpdate(s):i&&this.popPendingSeqUpdate()}saveUpdate(e){r.default.dispatchEvent(e._,e)}attach(){this.attached||(this.log("attach"),this.attached=!0,u.default.getState().then(e=>{const t=e.updates;t&&t.pts&&t.date&&t.seq?(Object.assign(this.updatesState,t),this.log("will get difference",Object.assign({},t)),this.getDifference(!0)):(this.log("will get new state"),this.updatesState.syncLoading=new Promise(e=>{i.a.invokeApi("updates.getState",{},{noErrorBox:!0}).then(t=>{this.updatesState.seq=t.seq,this.updatesState.pts=t.pts,this.updatesState.date=t.date,this.saveUpdatesState(),this.updatesState.syncLoading=null,e()})})),i.a.setUpdatesProcessor(this.processUpdateMessage),this.setProxy()}))}};a.a.apiUpdatesManager=p,t.a=p},95:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var a=s(123);class n{constructor(e=!0,t=!0,s=0){this.cleanText=e,this.latinize=t,this.minChars=s,this.fullTexts=new Map}indexObject(e,t){if(t.trim()&&this.cleanText&&(t=Object(a.a)(t,this.latinize)),!t)return this.fullTexts.delete(e),!1;this.fullTexts.set(e,t)}search(e){const t=this.fullTexts;this.cleanText&&(e=Object(a.a)(e,this.latinize));const s=[],n=e.split(" "),i=n.length;t.forEach((e,t)=>{let a=!0,r=0;for(let t=0;t<i;++t){const s=n[t],i=e.indexOf(s);if(-1===i||0!==i&&" "!==e[i-1]){a=!1;break}r+=s.length}if(a){r+=i-1;const a=e.length;(this.minChars<=r||a<=r)&&s.push({fullText:e,fullTextLength:a,what:t,foundChars:r})}}),s.sort((e,t)=>e.fullTextLength-t.fullTextLength||t.foundChars-e.foundChars);return new Set(s.map(e=>e.what))}}}}]);
//# sourceMappingURL=3.6d966c78e5e0da7ae9b1.chunk.js.map