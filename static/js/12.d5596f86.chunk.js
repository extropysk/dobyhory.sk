(this.webpackJsonpkd=this.webpackJsonpkd||[]).push([[12],{519:function(e,t,n){"use strict";n(2);var a=n(169),i=n.n(a),r=n(521),s=n.n(r),c=n(7),l=n(0);t.a=Object(c.withStyles)((function(e){return{formControl:{margin:e.spacing.unit,width:160}}}))((function(e){return Object(l.jsxs)(i.a,{onClose:e.onClose,"aria-labelledby":"simple-dialog-title",open:e.isOpen,fullWidth:!0,children:[Object(l.jsx)(s.a,{id:"simple-dialog-title",children:e.title}),e.children]})}))},523:function(e,t,n){"use strict";var a=n(3),i=n.n(a),r=n(6),s=n(18),c=n(19),l=n(21),o=n(20),u=n(4),p=n(2),d=n.n(p),h=n(7),m=n(168),b=n(528),j=n.n(b),f=n(69),g=n.n(f),x=n(67),O=n.n(x),v=n(527),C=n.n(v),k=n(0);var w=Object(h.withStyles)((function(e){return{}}))((function(e){var t=e.color,n=e.onClick,a=e.tooltip,i=e.disabled,r=e.className;return Object(k.jsx)(C.a,{title:a,children:Object(k.jsx)(O.a,{color:t,onClick:n,"aria-label":a,disabled:i,className:r,children:e.children})})})),y=n(93),S=n(11),R=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onChange=function(){var e=Object(r.a)(i.a.mark((function e(t){var n,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=t.target.files[0],a.filePath=URL.createObjectURL(n),t.target.value="","image/jpeg"!==a.props.mimeType){e.next=10;break}return r=window.URL||window.webkitURL,s=r.createObjectURL(n),e.next=9,a.props.utils.resize(s,a.props.height,n.name);case 9:n=e.sent;case 10:a.props.onChange(a.props.field,n);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onClick=function(){a.props.disabled||a.inputRef.current.click()},a.inputRef=d.a.createRef(),a.filePath="",a}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.value,a=e.disabled,i=e.mimeType,r=e.field,s=e.translate,c=this.props.label||s("field."+r);return Object(k.jsxs)("div",{children:[Object(k.jsx)(w,{className:t.button,tooltip:Object(k.jsx)("img",{src:null!==n&&""===this.filePath?n:this.filePath,alt:"Attach file",className:t.tooltip}),color:n?"primary":"default",onClick:this.onClick,disabled:a,children:Object(k.jsx)(j.a,{})}),Object(k.jsx)(g.a,{htmlFor:r,children:c}),Object(k.jsx)("input",{ref:this.inputRef,style:{display:"none"},type:"file",accept:i,onChange:this.onChange})]})}}]),n}(d.a.Component);t.a=Object(S.b)(Object(y.a)(Object(h.withStyles)((function(e){return Object(u.a)(Object(u.a)({},Object(m.a)(e)),{},{button:{margin:e.spacing.unit},tooltip:{"max-width":"150px","max-height":"150px"}})}))(R)))},529:function(e,t,n){"use strict";var a=n(14),i=n(3),r=n.n(i),s=n(4),c=n(532),l=n(536),o=n(2),u=n.n(o),p=n(525),d=n.n(p),h=n(171),m=n(7),b=n(143),j=n.n(b),f=n(67),g=n.n(f),x=n(168),O=n(93),v=(n(533),n(6)),C=n(534),k=n.n(C),w=n(535),y=n.n(w),S=n(0),R=function(e,t,n,a,i){return{name:"Custom command",icon:function(){return Object(S.jsx)("img",{src:t,alt:"Custom command",className:e,onClick:function(e){return n(e,i)}})},execute:function(e){a(e)}}},N=function(e){var t=u.a.createRef(),n=null,a=function(){var t=Object(v.a)(r.a.mark((function t(a){var i,s,c,l,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),i=a.target.files[0],a.target.value="",s=window.URL||window.webkitURL,c=s.createObjectURL(i),t.next=7,e.utils.resize(c,e.height,"img.jpg");case 7:return l=t.sent,t.prev=8,t.next=11,e.postFile(l);case 11:o=t.sent,n.textApi.replaceSelection('<img src="{URL}/api/file/'.concat(o._id,'" alt="img" style="max-height:480px;" />')),t.next=19;break;case 15:return t.prev=15,t.t0=t.catch(8),console.log(t.t0),t.abrupt("return",!1);case 19:case"end":return t.stop()}}),t,null,[[8,15]])})));return function(e){return t.apply(this,arguments)}}();return{name:"Custom command",icon:function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(k.a,{}),Object(S.jsx)("input",{ref:t,style:{display:"none"},type:"file",accept:"image/jpeg",onChange:a})]})},execute:function(e){!function(e){t.current.click(),n=e}(e)}}};var F=function(e,t,n){var a=e.classes;return{commands:{Emojis:R(a.emojiSize,"/img/emojis/nerd.png",t,n,"Emojis"),Marks:R(a.markSize,"/img/marks/mark black.png",t,n,"Marks"),UploadFile:N(e),Center:{name:"Custom command",icon:function(){return Object(S.jsx)(y.a,{})},execute:function(e){e.textApi.replaceSelection('<div class="center"></div>')}}},toolbarCommands:["Emojis","Marks","UploadFile","Center"]}},T=null,U="",L=["Asset 4.svg","camera.png","compas.svg","fist.png","hi.png","medal.png","metal.png","nerd.png","rocks.svg","sadman.png","crossroad.svg","mountain.png","rocks.svg","nerd.png","tree.png","triangel.svg","triangle.png"],P=["mark black.png","mark blue.png","mark brown.png","mark green.png","mark red.png","mark yellow.png"],z=function(e){T=e},E=function(){var e={data:[]},t=""!==U?"Emojis"===U?{path:"/img/emojis/",data:L,className:"emoji"}:"Marks"===U?{path:"/img/marks/",data:P,className:"emoji"}:e:e;return t.data.map((function(e){return Object(S.jsx)(g.a,{onClick:function(n){T&&T.textApi.replaceSelection('<img src="'.concat(t.path+e,'" alt="Custom command" className="').concat(t.className,'" />'))},style:{backgroundColor:"transparent"},children:Object(S.jsx)("img",{src:t.path+e,alt:"Custom command",className:t.className})})}))};t.a=Object(m.withStyles)((function(e){return Object(s.a)(Object(s.a)({},Object(x.a)(e)),{},{typography:{padding:e.spacing.unit/2},markSize:{width:"30px",height:"20px"},emojiSize:{width:"20px",height:"20px"},tooltip:{"max-width":"150px","max-height":"150px"}})}))(Object(O.a)((function(e){var t=function(){var t=Object(l.a)(r.a.mark((function t(n){var a,i,s,l,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new Blob([n],{type:"image/jpeg"}),i=window.URL||window.webkitURL,s=i.createObjectURL(a),t.next=5,Object(c.a)(e.utils.resize(s,e.height,"img.jpg"));case 5:return l=t.sent,t.prev=6,t.next=9,Object(c.a)(e.postFile(l));case 9:return o=t.sent,t.next=12,"{URL}/api/file/".concat(o._id);case 12:return t.abrupt("return",!0);case 15:return t.prev=15,t.t0=t.catch(6),console.log(t.t0),t.abrupt("return",!1);case 19:case"end":return t.stop()}}),t,null,[[6,15]])})));return function(e){return t.apply(this,arguments)}}(),n=u.a.useState("write"),i=Object(a.a)(n,2),s=i[0],o=i[1],m=u.a.useState(null),b=Object(a.a)(m,2),f=b[0],g=b[1],x=Boolean(f),O=x?"simple-popover":void 0,v=F(e,(function(e,t){g(e.currentTarget),U=t}),z),C=Object(p.getDefaultToolbarCommands)();return C.push(v.toolbarCommands),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(d.a,{commands:v.commands,toolbarCommands:C,value:e.value,onChange:function(t){return e.onChange(e.field,t)},selectedTab:s,readOnly:e.disabled,onTabChange:o,generateMarkdownPreview:function(e){return Promise.resolve(Object(S.jsx)(h.a,{children:e}))},paste:e.postFile?{saveImage:t}:null}),Object(S.jsx)(j.a,{id:O,open:x,anchorEl:f,onClose:function(){g(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:E()})]})})))},622:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n(2),r=n.n(i),s=n(7),c=n(5),l=n.n(c),o=n(68),u=n.n(o),p=n(3),d=n.n(p),h=n(6),m=n(18),b=n(19),j=n(21),f=n(20),g=n(520),x=n(112),O=n(524),v=n(170),C=n(523),k=n(529),w=n(9),y=n(1),S=n.n(y),R=n(16),N=n(29),F=n(26),T=n(8),U=n(0),L={title:"",description:"",typeRef:null,content:"",readTime:0,_img:null,_thumbnail:null},P=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleChangeTypeRef=function(e,t){a.setState({[e]:{id:t}})},a.handleChangeFile=function(e,t){a.setState({[e]:t,[e+"Changed"]:!0})},a.handleChange=function(e,t){console.log(e,t),a.setState({[e]:t})},a.handleSubmit=Object(h.a)(d.a.mark((function e(){var t,n,i,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props.doby,n=t.addPost,i=t.refreshPosts,r=t.editPost,e.prev=1,!a.state._id){e.next=7;break}return e.next=5,r(a.state);case 5:e.next=9;break;case 7:return e.next=9,n(a.state);case 9:i(),a.setState(L),a.props.onSubmit&&a.props.onSubmit(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),a.props.user.showError(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])}))),a.state=e.data||L,a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.store.getEnums,n=[{field:"enumTypeId",value:1},{field:"disabled",value:!1}],e.next=5,t(n);case 5:if(!this.state._id){e.next=10;break}return e.next=8,this.props.doby.getFilesPost(this.state,!0);case 8:i=e.sent,this.setState((function(e){return Object(a.a)({},i)}));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.disabled,a=this.state,i=a.title,r=a.description,s=a.typeRef,c=a.content,o=a._img,u=a._thumbnail,p=a.readTime,d=this.props.store.enums;return Object(U.jsxs)(x.a,{onSubmit:this.handleSubmit,inline:!0,disabled:n,children:[Object(U.jsxs)(l.a,{container:!0,direction:"row",justify:"left",alignItems:"left",children:[Object(U.jsx)(l.a,{item:!0,xs:4,className:S()(t.pr10),children:Object(U.jsx)(g.a,{value:i,field:"title",onChange:this.handleChange,required:!0,fullWidth:!0,disabled:n})}),Object(U.jsx)(l.a,{item:!0,xs:8,className:S()(t.pr10),children:Object(U.jsx)(g.a,{value:r,field:"description",onChange:this.handleChange,required:!0,fullWidth:!0,disabled:n})})]}),Object(U.jsxs)(l.a,{container:!0,direction:"row",justify:"left",alignItems:"left",children:[Object(U.jsx)(l.a,{item:!0,xs:5,className:S()(t.pl10,t.pr10),children:Object(U.jsx)(v.a,{value:s?s.id:null,field:"typeRef",onChange:this.handleChangeTypeRef,data:d.data,textField:"name",required:!0,fullWidth:!0,disabled:n})}),Object(U.jsx)(l.a,{item:!0,xs:1,className:S()(t.pr10),children:Object(U.jsx)(O.a,{value:p,field:"readTime",onChange:this.handleChange,min:0,step:1,fullWidth:!0})}),Object(U.jsx)(l.a,{item:!0,xs:2,className:S()(t.pr10),children:Object(U.jsx)(C.a,{mimeType:"image/jpeg",value:o,field:"_img",onChange:this.handleChangeFile,disabled:n,height:w.a.imageSize})}),Object(U.jsx)(l.a,{item:!0,xs:3,className:S()(t.pr10),children:Object(U.jsx)(C.a,{mimeType:"image/jpeg",value:u,field:"_thumbnail",onChange:this.handleChangeFile,disabled:n,height:w.a.thumbnailSize})})]}),Object(U.jsx)(l.a,{container:!0,direction:"row",justify:"left",alignItems:"left",children:Object(U.jsx)(l.a,{item:!0,xs:12,className:S()(t.pl10,t.pr10),children:Object(U.jsx)(k.a,{field:"content",value:c,onChange:this.handleChange,height:w.a.imageSize,disabled:n,postFile:this.props.store.postFile})})})]})}}]),n}(r.a.Component),z=Object(T.a)(Object(s.withStyles)((function(e){return{nameTextInput:{display:"flex",flex:1},mr10:{"margin-right":"10px"},ml10:{"margin-left":"10px"},pr10:{"padding-right":"10px"},pl10:{"padding-left":"10px"}}})),N.a,R.a,F.a)(P),E=n(522),_=n(519),D=n(11),I=[{field:"title",disablePadding:!0},{field:"description"},{field:"type.name",type:"enum",data:"enums",idField:"typeRef.id",sortable:!1},{field:"readTime",type:"num"},{field:"_id"}],M=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleChangeClient=function(e,t){a.setState({clientId:t})},a.handleClose=function(){a.setState({isOpen:!1})},a.handleOpen=function(){a.setState({isOpen:!0})},a.handleChange=function(){var e=Object(h.a)(d.a.mark((function e(t,n,i,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.props.doby.getPosts(t,i,n,r);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),a.props.user.showError(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n,a,i){return e.apply(this,arguments)}}(),a.onEdit=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({x:t,isOpen:!0});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.isDisabled=function(e){return!1},a.state={x:null,isOpen:!1},a}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.doby.deletePost,t=this.props.translate;return Object(U.jsxs)("div",{children:[Object(U.jsx)(E.a,{rows:I,data:"posts",onChange:this.handleChange,onDelete:e,title:t("posts"),onEdit:this.onEdit,store:Object(a.a)(Object(a.a)({},this.props.doby),this.props.store),filters:[],isDisabled:this.isDisabled,filename:"posts"}),Object(U.jsx)(_.a,{title:t("post"),onClose:this.handleClose,isOpen:this.state.isOpen,children:Object(U.jsx)(z,{data:this.state.x,onSubmit:this.handleClose})})]})}}]),n}(r.a.Component),A=Object(T.a)(N.a,R.a,F.a,D.b)(M),W=n(10);t.default=Object(T.a)(Object(s.withStyles)((function(e){return Object(a.a)(Object(a.a)({},Object(W.a)(e)),{},{paper:{padding:e.spacing.unit}})})),F.a)((function(e){var t=e.classes;return Object(U.jsxs)(l.a,{container:!0,children:[Object(U.jsx)(l.a,{item:!0,xs:12,className:t.p2,children:Object(U.jsx)(u.a,{className:t.paper,children:Object(U.jsx)(z,{})})}),Object(U.jsx)(l.a,{item:!0,xs:12,className:t.p2,children:Object(U.jsx)(A,{})})]})}))}}]);