(this.webpackJsonpkd=this.webpackJsonpkd||[]).push([[8],{519:function(e,t,a){"use strict";a(2);var n=a(169),i=a.n(n),r=a(521),s=a.n(r),l=a(7),c=a(0);t.a=Object(l.withStyles)((function(e){return{formControl:{margin:e.spacing.unit,width:160}}}))((function(e){return Object(c.jsxs)(i.a,{onClose:e.onClose,"aria-labelledby":"simple-dialog-title",open:e.isOpen,fullWidth:!0,children:[Object(c.jsx)(s.a,{id:"simple-dialog-title",children:e.title}),e.children]})}))},523:function(e,t,a){"use strict";var n=a(3),i=a.n(n),r=a(6),s=a(18),l=a(19),c=a(21),o=a(20),d=a(4),u=a(2),h=a.n(u),p=a(7),m=a(168),g=a(528),j=a.n(g),b=a(69),f=a.n(b),x=a(67),O=a.n(x),v=a(527),C=a.n(v),k=a(0);var y=Object(p.withStyles)((function(e){return{}}))((function(e){var t=e.color,a=e.onClick,n=e.tooltip,i=e.disabled,r=e.className;return Object(k.jsx)(C.a,{title:n,children:Object(k.jsx)(O.a,{color:t,onClick:a,"aria-label":n,disabled:i,className:r,children:e.children})})})),w=a(93),S=a(11),_=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChange=function(){var e=Object(r.a)(i.a.mark((function e(t){var a,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=t.target.files[0],n.filePath=URL.createObjectURL(a),t.target.value="","image/jpeg"!==n.props.mimeType){e.next=10;break}return r=window.URL||window.webkitURL,s=r.createObjectURL(a),e.next=9,n.props.utils.resize(s,n.props.height,a.name);case 9:a=e.sent;case 10:n.props.onChange(n.props.field,a);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onClick=function(){n.props.disabled||n.inputRef.current.click()},n.inputRef=h.a.createRef(),n.filePath="",n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.value,n=e.disabled,i=e.mimeType,r=e.field,s=e.translate,l=this.props.label||s("field."+r);return Object(k.jsxs)("div",{children:[Object(k.jsx)(y,{className:t.button,tooltip:Object(k.jsx)("img",{src:null!==a&&""===this.filePath?a:this.filePath,alt:"Attach file",className:t.tooltip}),color:a?"primary":"default",onClick:this.onClick,disabled:n,children:Object(k.jsx)(j.a,{})}),Object(k.jsx)(f.a,{htmlFor:r,children:l}),Object(k.jsx)("input",{ref:this.inputRef,style:{display:"none"},type:"file",accept:i,onChange:this.onChange})]})}}]),a}(h.a.Component);t.a=Object(S.b)(Object(w.a)(Object(p.withStyles)((function(e){return Object(d.a)(Object(d.a)({},Object(m.a)(e)),{},{button:{margin:e.spacing.unit},tooltip:{"max-width":"150px","max-height":"150px"}})}))(_)))},529:function(e,t,a){"use strict";var n=a(14),i=a(3),r=a.n(i),s=a(4),l=a(532),c=a(536),o=a(2),d=a.n(o),u=a(525),h=a.n(u),p=a(171),m=a(7),g=a(143),j=a.n(g),b=a(67),f=a.n(b),x=a(168),O=a(93),v=(a(533),a(6)),C=a(534),k=a.n(C),y=a(535),w=a.n(y),S=a(0),_=function(e,t,a,n,i){return{name:"Custom command",icon:function(){return Object(S.jsx)("img",{src:t,alt:"Custom command",className:e,onClick:function(e){return a(e,i)}})},execute:function(e){n(e)}}},F=function(e){var t=d.a.createRef(),a=null,n=function(){var t=Object(v.a)(r.a.mark((function t(n){var i,s,l,c,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),i=n.target.files[0],n.target.value="",s=window.URL||window.webkitURL,l=s.createObjectURL(i),t.next=7,e.utils.resize(l,e.height,"img.jpg");case 7:return c=t.sent,t.prev=8,t.next=11,e.postFile(c);case 11:o=t.sent,a.textApi.replaceSelection('<img src="{URL}/api/file/'.concat(o._id,'" alt="img" style="max-height:480px;" />')),t.next=19;break;case 15:return t.prev=15,t.t0=t.catch(8),console.log(t.t0),t.abrupt("return",!1);case 19:case"end":return t.stop()}}),t,null,[[8,15]])})));return function(e){return t.apply(this,arguments)}}();return{name:"Custom command",icon:function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(k.a,{}),Object(S.jsx)("input",{ref:t,style:{display:"none"},type:"file",accept:"image/jpeg",onChange:n})]})},execute:function(e){!function(e){t.current.click(),a=e}(e)}}};var R=function(e,t,a){var n=e.classes;return{commands:{Emojis:_(n.emojiSize,"/img/emojis/nerd.png",t,a,"Emojis"),Marks:_(n.markSize,"/img/marks/mark black.png",t,a,"Marks"),UploadFile:F(e),Center:{name:"Custom command",icon:function(){return Object(S.jsx)(w.a,{})},execute:function(e){e.textApi.replaceSelection('<div class="center"></div>')}}},toolbarCommands:["Emojis","Marks","UploadFile","Center"]}},N=null,D="",T=["Asset 4.svg","camera.png","compas.svg","fist.png","hi.png","medal.png","metal.png","nerd.png","rocks.svg","sadman.png","crossroad.svg","mountain.png","rocks.svg","nerd.png","tree.png","triangel.svg","triangle.png"],U=["mark black.png","mark blue.png","mark brown.png","mark green.png","mark red.png","mark yellow.png"],z=function(e){N=e},E=function(){var e={data:[]},t=""!==D?"Emojis"===D?{path:"/img/emojis/",data:T,className:"emoji"}:"Marks"===D?{path:"/img/marks/",data:U,className:"emoji"}:e:e;return t.data.map((function(e){return Object(S.jsx)(f.a,{onClick:function(a){N&&N.textApi.replaceSelection('<img src="'.concat(t.path+e,'" alt="Custom command" className="').concat(t.className,'" />'))},style:{backgroundColor:"transparent"},children:Object(S.jsx)("img",{src:t.path+e,alt:"Custom command",className:t.className})})}))};t.a=Object(m.withStyles)((function(e){return Object(s.a)(Object(s.a)({},Object(x.a)(e)),{},{typography:{padding:e.spacing.unit/2},markSize:{width:"30px",height:"20px"},emojiSize:{width:"20px",height:"20px"},tooltip:{"max-width":"150px","max-height":"150px"}})}))(Object(O.a)((function(e){var t=function(){var t=Object(c.a)(r.a.mark((function t(a){var n,i,s,c,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Blob([a],{type:"image/jpeg"}),i=window.URL||window.webkitURL,s=i.createObjectURL(n),t.next=5,Object(l.a)(e.utils.resize(s,e.height,"img.jpg"));case 5:return c=t.sent,t.prev=6,t.next=9,Object(l.a)(e.postFile(c));case 9:return o=t.sent,t.next=12,"{URL}/api/file/".concat(o._id);case 12:return t.abrupt("return",!0);case 15:return t.prev=15,t.t0=t.catch(6),console.log(t.t0),t.abrupt("return",!1);case 19:case"end":return t.stop()}}),t,null,[[6,15]])})));return function(e){return t.apply(this,arguments)}}(),a=d.a.useState("write"),i=Object(n.a)(a,2),s=i[0],o=i[1],m=d.a.useState(null),g=Object(n.a)(m,2),b=g[0],f=g[1],x=Boolean(b),O=x?"simple-popover":void 0,v=R(e,(function(e,t){f(e.currentTarget),D=t}),z),C=Object(u.getDefaultToolbarCommands)();return C.push(v.toolbarCommands),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(h.a,{commands:v.commands,toolbarCommands:C,value:e.value,onChange:function(t){return e.onChange(e.field,t)},selectedTab:s,readOnly:e.disabled,onTabChange:o,generateMarkdownPreview:function(e){return Promise.resolve(Object(S.jsx)(p.a,{children:e}))},paste:e.postFile?{saveImage:t}:null}),Object(S.jsx)(j.a,{id:O,open:x,anchorEl:b,onClose:function(){f(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:E()})]})})))},537:function(e,t,a){"use strict";var n=a(3),i=a.n(n),r=a(6),s=a(18),l=a(19),c=a(21),o=a(20),d=a(4),u=a(2),h=a.n(u),p=a(7),m=a(520),g=a(170),j=a(112),b=a(540),f=a(523),x=a(524),O=a(168),v=a(9),C=a(5),k=a.n(C),y=a(529),w=a(1),S=a.n(w),_=a(16),F=a(26),R=a(29),N=a(8),D=a(0),T={name:"",description:"",summitsRef:[],packsRef:[],serieRef:null,difficulty:1,start:new Date,end:new Date,regStart:new Date,regEnd:new Date,key:0,_img:null,_imgDesktop:null,_thumbnail:null,_map:null,_logo:null,_badge:null,_mapDark:null,_mapFull:null,_mapFullTransparent:null,_logoDark:null,_medalFront:null,_medalBack:null},U=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChangeFile=function(e,t){n.setState({[e]:t,[e+"Changed"]:!0})},n.handleChange=function(e,t){n.setState({[e]:t})},n.handleChangeSummitsRef=function(e,t){var a=t.map((function(e){return{id:e}}));n.setState({[e]:a})},n.handleChangePacksRef=function(e,t){var a=t.map((function(e){return{id:e}}));n.setState({[e]:a})},n.handleChangeSerieRef=function(e,t){n.setState({[e]:{id:t}})},n.handleSubmit=Object(r.a)(i.a.mark((function e(){var t,a,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.props.doby,a=t.addChallenge,r=t.refreshChallenges,s=t.editChallenge,e.prev=1,!n.state._id){e.next=7;break}return e.next=5,s(n.state);case 5:e.next=9;break;case 7:return e.next=9,a(n.state);case 9:r(),n.setState(T),n.props.onSubmit&&n.props.onSubmit(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),n.props.user.showError(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])}))),n.state=e.data||T,n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,r,s,l,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.doby,a=t.getSummits,n=t.getSeries,r=t.getFilesChallenge,s=t.getProducts,e.next=4,a();case 4:return e.next=6,n();case 6:return l=[{field:"catalog_id",op:"eq",value:"pack"}],e.next=9,s(l);case 9:if(!this.state._id){e.next=14;break}return e.next=12,r(this.state,!0);case 12:c=e.sent,this.setState((function(e){return Object(d.a)({},c)}));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0);case 19:case"end":return e.stop()}}),e,this,[[0,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.disabled,n=this.state,i=n.name,r=n.description,s=n.start,l=n.end,c=n.regEnd,o=n.regStart,d=n.summitsRef,u=n.packsRef,h=n.serieRef,p=n.difficulty,O=n.key,C=n._img,w=n._imgDesktop,_=n._map,F=n._thumbnail,R=n._logo,N=n._badge,T=n._mapDark,U=n._mapFull,z=n._logoDark,E=n._mapFullTransparent,L=n._medalFront,P=n._medalBack,q=this.props.doby,W=q.summits,I=q.series,M=q.products;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(j.a,{onSubmit:this.handleSubmit,inline:!0,disabled:a,children:[Object(D.jsxs)(k.a,{container:!0,direction:"row",justify:"left",alignItems:"left",children:[Object(D.jsx)(k.a,{item:!0,xs:6,className:S()(t.pr10),children:Object(D.jsx)(m.a,{value:i,field:"name",onChange:this.handleChange,required:!0,disabled:a,fullWidth:!0})}),Object(D.jsx)(k.a,{item:!0,xs:3,className:S()(t.pr10),children:Object(D.jsx)(b.a,{value:s,field:"start",onChange:this.handleChange,required:!0})}),Object(D.jsx)(k.a,{item:!0,xs:3,className:S()(t.pr10),children:Object(D.jsx)(b.a,{value:l,field:"end",onChange:this.handleChange,required:!0})})]}),Object(D.jsxs)(k.a,{container:!0,direction:"row",justify:"left",alignItems:"left",children:[Object(D.jsx)(k.a,{item:!0,xs:2,className:S()(t.pr10),children:Object(D.jsx)(x.a,{value:O,field:"key",onChange:this.handleChange,min:0,step:1,fullWidth:!0})}),Object(D.jsx)(k.a,{item:!0,xs:2,className:S()(t.pr10),children:Object(D.jsx)(x.a,{value:p,field:"difficulty",onChange:this.handleChange,min:0,max:5,step:1,required:!0,fullWidth:!0})}),Object(D.jsx)(k.a,{item:!0,xs:4,className:S()(t.pr10,t.pl10),children:Object(D.jsx)(g.a,{value:h?h.id:null,field:"serieRef",onChange:this.handleChangeSerieRef,data:I.data,textField:"name",required:!0,idField:"id",disabled:a,fullWidth:!0})}),Object(D.jsx)(k.a,{item:!0,xs:4,className:S()(t.pr10),children:Object(D.jsx)(g.a,{value:d?d.map((function(e){return e.id})):[],field:"summitsRef",onChange:this.handleChangeSummitsRef,fullWidth:!0,data:W.data,textField:"name",required:!0,multiple:!0,idField:"id",disabled:a})})]}),Object(D.jsxs)(k.a,{container:!0,direction:"row",justify:"left",alignItems:"left",children:[Object(D.jsx)(k.a,{item:!0,xs:6,className:S()(t.pr10,t.pl10),children:Object(D.jsx)(g.a,{value:u?u.map((function(e){return e.id})):[],field:"packsRef",onChange:this.handleChangePacksRef,fullWidth:!0,data:M.data,textField:"name",required:!0,multiple:!0,idField:"id",disabled:a})}),Object(D.jsx)(k.a,{item:!0,xs:3,className:S()(t.pr10),children:Object(D.jsx)(b.a,{value:o,field:"regStart",onChange:this.handleChange})}),Object(D.jsx)(k.a,{item:!0,xs:3,className:S()(t.pr10),children:Object(D.jsx)(b.a,{value:c,field:"regEnd",onChange:this.handleChange})})]}),Object(D.jsx)(f.a,{mimeType:"image/jpeg",value:C,field:"_img",onChange:this.handleChangeFile,disabled:a,height:v.a.imageSize}),Object(D.jsx)(f.a,{mimeType:"image/jpeg",value:w,field:"_imgDesktop",onChange:this.handleChangeFile,disabled:a,height:v.a.imageSize}),Object(D.jsx)(f.a,{mimeType:"image/jpeg",value:F,field:"_thumbnail",onChange:this.handleChangeFile,disabled:a,height:v.a.thumbnailSize}),Object(D.jsx)(f.a,{mimeType:"image/png",value:R,field:"_logo",onChange:this.handleChangeFile,disabled:a}),Object(D.jsx)(f.a,{mimeType:"image/png",value:_,field:"_map",onChange:this.handleChangeFile,disabled:a}),Object(D.jsx)(f.a,{mimeType:"image/png",value:N,field:"_badge",onChange:this.handleChangeFile,disabled:a}),Object(D.jsx)(f.a,{mimeType:"image/png",value:z,field:"_logoDark",onChange:this.handleChangeFile,disabled:a}),Object(D.jsx)(f.a,{mimeType:"image/png",value:T,field:"_mapDark",onChange:this.handleChangeFile,disabled:a}),Object(D.jsx)(f.a,{mimeType:"image/jpeg",value:U,field:"_mapFull",onChange:this.handleChangeFile,disabled:a,height:v.a.imageSize}),Object(D.jsx)(f.a,{mimeType:"image/png",value:E,field:"_mapFullTransparent",onChange:this.handleChangeFile,disabled:a}),Object(D.jsx)(f.a,{mimeType:"image/png",value:L,field:"_medalFront",onChange:this.handleChangeFile,disabled:a}),Object(D.jsx)(f.a,{mimeType:"image/png",value:P,field:"_medalBack",onChange:this.handleChangeFile,disabled:a})]}),Object(D.jsx)(y.a,{field:"description",value:r,onChange:this.handleChange,height:v.a.imageSize,disabled:a,postFile:this.props.store.postFile})]})}}]),a}(h.a.Component);t.a=Object(N.a)(Object(p.withStyles)((function(e){return Object(d.a)(Object(d.a)({},Object(O.a)(e)),{},{nameTextInput:{display:"flex",flex:1},mr10:{"margin-right":"10px"},ml10:{"margin-left":"10px"},pr10:{"padding-right":"10px"},pl10:{"padding-left":"10px"}})})),_.a,F.a,R.a)(U)},628:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a(2),r=a.n(i),s=a(7),l=a(5),c=a.n(l),o=a(68),d=a.n(o),u=a(537),h=a(3),p=a.n(h),m=a(6),g=a(18),j=a(19),b=a(21),f=a(20),x=a(522),O=a(519),v=a(8),C=a(16),k=a(26),y=a(29),w=a(11),S=a(0),_=[{field:"name",disablePadding:!0},{field:"description"},{field:"start",type:"date"},{field:"end",type:"date"},{field:"key",type:"num"},{field:"_id"}],F=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).handleChangeClient=function(e,t){n.setState({clientId:t})},n.handleClose=function(){n.setState({isOpen:!1})},n.handleOpen=function(){n.setState({isOpen:!0})},n.handleChange=function(){var e=Object(m.a)(p.a.mark((function e(t,a,i,r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.props.doby.getChallenges(t,i,a,r);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),n.props.user.showError(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a,n,i){return e.apply(this,arguments)}}(),n.handleDelete=function(){var e=Object(m.a)(p.a.mark((function e(t){var a,i,r,s,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.doby,i=a.challenges,r=a.deleteChallenge,s=a.refreshChallenges,l=i.data.find((function(e){return e._id===t})),e.next=4,r(t,l);case 4:s();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onEdit=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({x:t,isOpen:!0});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.isDisabled=function(e){return!1},n.state={x:null,isOpen:!1},n}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.translate;return Object(S.jsxs)("div",{children:[Object(S.jsx)(x.a,{rows:_,data:"challenges",onChange:this.handleChange,onDelete:this.handleDelete,title:e("challenges_title"),onEdit:this.onEdit,store:Object(n.a)(Object(n.a)({},this.props.doby),this.props.store),filters:[],isDisabled:this.isDisabled,filename:"challenges"}),Object(S.jsx)(O.a,{title:e("challenge_title"),onClose:this.handleClose,isOpen:this.state.isOpen,children:Object(S.jsx)(u.a,{data:this.state.x,onSubmit:this.handleClose})})]})}}]),a}(r.a.Component),R=Object(v.a)(y.a,C.a,k.a,w.b)(F),N=a(10);t.default=Object(v.a)(Object(s.withStyles)((function(e){return Object(n.a)(Object(n.a)({},Object(N.a)(e)),{},{paper:{padding:e.spacing.unit}})})),k.a)((function(e){var t=e.classes;return Object(S.jsxs)(c.a,{container:!0,children:[Object(S.jsx)(c.a,{item:!0,xs:12,className:t.p2,children:Object(S.jsx)(d.a,{className:t.paper,children:Object(S.jsx)(u.a,{})})}),Object(S.jsx)(c.a,{item:!0,xs:12,className:t.p2,children:Object(S.jsx)(R,{})})]})}))}}]);