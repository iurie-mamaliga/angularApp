(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"f+ep":function(n,l,u){"use strict";u.r(l);var o=u("CcnG"),e=function(){return function(){}}(),t=u("9AJC"),i=u("pMnS"),a=u("4GxJ"),g=u("gIcY"),r=u("A7o+"),b=u("ZYCi"),s=u("Ip0R"),c=function(){return function(){}}(),d=function(){function n(n){this.router=n,this.model=1,this.loginType=1,this.loginObj=new c}return n.prototype.ngOnInit=function(){},n.prototype.onLoggedin=function(){this.loginObj.errorMsg="","user01"===this.loginObj.username&&"password"===this.loginObj.password?(localStorage.setItem("isLoggedin","true"),localStorage.setItem("loginType",""+this.loginType),console.log(localStorage.getItem("loginType")),"1"===localStorage.getItem("loginType")?this.router.navigate(["dashboard"]):this.router.navigate(["allapplications"])):this.loginObj.errorMsg="Invalid username or password."},n.prototype.onSubmit=function(n){},n}(),p=o.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.login-page[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:auto;background:#222;text-align:center;color:#fff;padding:3em}.login-page[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]{padding:0}.login-page[_ngcontent-%COMP%]   .input-lg[_ngcontent-%COMP%]{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:0}.login-page[_ngcontent-%COMP%]   .input-underline[_ngcontent-%COMP%]{background:0 0;border:none;box-shadow:none;border-bottom:2px solid rgba(255,255,255,.5);color:#fff;border-radius:0}.login-page[_ngcontent-%COMP%]   .input-underline[_ngcontent-%COMP%]:focus{border-bottom:2px solid #fff;box-shadow:none}.login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]{border-radius:50px;color:rgba(255,255,255,.8);background:#222;border:2px solid rgba(255,255,255,.8);font-size:18px;line-height:40px;padding:0 25px}.login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:active, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:focus, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:hover, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:visited{color:#fff;border:2px solid #fff;outline:0}.login-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:300;margin-top:20px;margin-bottom:10px;font-size:36px}.login-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{padding:8px 0}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]{padding:0}.login-page[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{border-radius:50%;border:2px solid #fff}"]],data:{animation:[{type:7,name:"routerTransition",definitions:[],options:{}}]}});function C(n){return o.Lb(0,[(n()(),o.sb(0,0,null,null,69,"div",[["class","login-page"]],[[24,"@routerTransition",0]],null,null,null,null)),(n()(),o.sb(1,0,null,null,68,"div",[["class","row justify-content-md-center"]],null,null,null,null,null)),(n()(),o.sb(2,0,null,null,67,"div",[["class","col-md-4"]],null,null,null,null,null)),(n()(),o.sb(3,0,null,null,0,"img",[["class","user-avatar"],["src","assets/images/pnclogo.png"],["width","150px"]],null,null,null,null,null)),(n()(),o.sb(4,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Loan Application "])),(n()(),o.sb(6,0,null,null,27,"div",[["class","btn-group btn-group-toggle"],["name","radioBasic"],["ngbRadioGroup",""],["role","radiogroup"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,u){var o=!0;return"ngModelChange"===l&&(o=!1!==(n.component.model=u)&&o),o},null,null)),o.rb(7,16384,null,0,a.T,[],{name:[0,"name"]},null),o.Gb(1024,null,g.k,function(n){return[n]},[a.T]),o.rb(9,671744,null,0,g.p,[[8,null],[8,null],[8,null],[6,g.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,g.l,null,[g.p]),o.rb(11,16384,null,0,g.m,[[4,g.l]],null,null),(n()(),o.sb(12,0,null,null,10,"label",[["class","btn-primary"],["ngbButtonLabel",""]],[[2,"btn",null],[2,"active",null],[2,"disabled",null],[2,"focus",null]],null,null,null,null)),o.rb(13,16384,null,0,a.h,[],null,null),(n()(),o.sb(14,0,null,null,7,"input",[["name","loginType"],["ngbButton",""],["type","radio"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[8,"checked",0],[8,"disabled",0],[8,"name",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"],[null,"focus"]],function(n,l,u){var e=!0,t=n.component;return"input"===l&&(e=!1!==o.Cb(n,15)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==o.Cb(n,15).onTouched()&&e),"compositionstart"===l&&(e=!1!==o.Cb(n,15)._compositionStart()&&e),"compositionend"===l&&(e=!1!==o.Cb(n,15)._compositionEnd(u.target.value)&&e),"change"===l&&(e=!1!==o.Cb(n,16).onChange()&&e),"blur"===l&&(e=!1!==o.Cb(n,16).onTouched()&&e),"change"===l&&(e=!1!==o.Cb(n,21).onChange()&&e),"focus"===l&&(e=0!=(o.Cb(n,21).focused=!0)&&e),"blur"===l&&(e=0!=(o.Cb(n,21).focused=!1)&&e),"ngModelChange"===l&&(e=!1!==(t.loginType=u)&&e),e},null,null)),o.rb(15,16384,null,0,g.c,[o.E,o.k,[2,g.a]],null,null),o.rb(16,212992,null,0,g.s,[o.E,o.k,g.x,o.r],{name:[0,"name"],value:[1,"value"]},null),o.Gb(1024,null,g.k,function(n,l){return[n,l]},[g.c,g.s]),o.rb(18,671744,null,0,g.p,[[8,null],[8,null],[8,null],[6,g.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,g.l,null,[g.p]),o.rb(20,16384,null,0,g.m,[[4,g.l]],null,null),o.rb(21,147456,null,0,a.S,[a.T,a.h,o.E,o.k,o.h],{name:[0,"name"],value:[1,"value"]},null),(n()(),o.Jb(-1,null,[" Customer "])),(n()(),o.sb(23,0,null,null,10,"label",[["class","btn-primary"],["ngbButtonLabel",""]],[[2,"btn",null],[2,"active",null],[2,"disabled",null],[2,"focus",null]],null,null,null,null)),o.rb(24,16384,null,0,a.h,[],null,null),(n()(),o.sb(25,0,null,null,7,"input",[["name","loginType"],["ngbButton",""],["type","radio"],["value","2"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[8,"checked",0],[8,"disabled",0],[8,"name",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"],[null,"focus"]],function(n,l,u){var e=!0,t=n.component;return"input"===l&&(e=!1!==o.Cb(n,26)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==o.Cb(n,26).onTouched()&&e),"compositionstart"===l&&(e=!1!==o.Cb(n,26)._compositionStart()&&e),"compositionend"===l&&(e=!1!==o.Cb(n,26)._compositionEnd(u.target.value)&&e),"change"===l&&(e=!1!==o.Cb(n,27).onChange()&&e),"blur"===l&&(e=!1!==o.Cb(n,27).onTouched()&&e),"change"===l&&(e=!1!==o.Cb(n,32).onChange()&&e),"focus"===l&&(e=0!=(o.Cb(n,32).focused=!0)&&e),"blur"===l&&(e=0!=(o.Cb(n,32).focused=!1)&&e),"ngModelChange"===l&&(e=!1!==(t.loginType=u)&&e),e},null,null)),o.rb(26,16384,null,0,g.c,[o.E,o.k,[2,g.a]],null,null),o.rb(27,212992,null,0,g.s,[o.E,o.k,g.x,o.r],{name:[0,"name"],value:[1,"value"]},null),o.Gb(1024,null,g.k,function(n,l){return[n,l]},[g.c,g.s]),o.rb(29,671744,null,0,g.p,[[8,null],[8,null],[8,null],[6,g.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,g.l,null,[g.p]),o.rb(31,16384,null,0,g.m,[[4,g.l]],null,null),o.rb(32,147456,null,0,a.S,[a.T,a.h,o.E,o.k,o.h],{name:[0,"name"],value:[1,"value"]},null),(n()(),o.Jb(-1,null,[" Loan Officer "])),(n()(),o.sb(34,0,null,null,35,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,u){var e=!0,t=n.component;return"submit"===l&&(e=!1!==o.Cb(n,36).onSubmit(u)&&e),"reset"===l&&(e=!1!==o.Cb(n,36).onReset()&&e),"ngSubmit"===l&&(e=!1!==t.onSubmit(o.Cb(n,36))&&e),e},null,null)),o.rb(35,16384,null,0,g.A,[],null,null),o.rb(36,4210688,[["f",4]],0,g.o,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),o.Gb(2048,null,g.b,null,[g.o]),o.rb(38,16384,null,0,g.n,[[4,g.b]],null,null),(n()(),o.sb(39,0,null,null,19,"div",[["class","form-content"]],null,null,null,null,null)),(n()(),o.sb(40,0,null,null,7,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),o.sb(41,0,null,null,6,"input",[["class","form-control input-underline input-lg"],["id",""],["name","username"],["type","text"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0,t=n.component;return"input"===l&&(e=!1!==o.Cb(n,42)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==o.Cb(n,42).onTouched()&&e),"compositionstart"===l&&(e=!1!==o.Cb(n,42)._compositionStart()&&e),"compositionend"===l&&(e=!1!==o.Cb(n,42)._compositionEnd(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(t.loginObj.username=u)&&e),e},null,null)),o.rb(42,16384,null,0,g.c,[o.E,o.k,[2,g.a]],null,null),o.Gb(1024,null,g.k,function(n){return[n]},[g.c]),o.rb(44,671744,null,0,g.p,[[2,g.b],[8,null],[8,null],[6,g.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,g.l,null,[g.p]),o.rb(46,16384,null,0,g.m,[[4,g.l]],null,null),o.Eb(131072,r.i,[r.j,o.h]),(n()(),o.sb(48,0,null,null,7,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),o.sb(49,0,null,null,6,"input",[["class","form-control input-underline input-lg"],["id",""],["name","password"],["type","password"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0,t=n.component;return"input"===l&&(e=!1!==o.Cb(n,50)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==o.Cb(n,50).onTouched()&&e),"compositionstart"===l&&(e=!1!==o.Cb(n,50)._compositionStart()&&e),"compositionend"===l&&(e=!1!==o.Cb(n,50)._compositionEnd(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(t.loginObj.password=u)&&e),e},null,null)),o.rb(50,16384,null,0,g.c,[o.E,o.k,[2,g.a]],null,null),o.Gb(1024,null,g.k,function(n){return[n]},[g.c]),o.rb(52,671744,null,0,g.p,[[2,g.b],[8,null],[8,null],[6,g.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,g.l,null,[g.p]),o.rb(54,16384,null,0,g.m,[[4,g.l]],null,null),o.Eb(131072,r.i,[r.j,o.h]),(n()(),o.sb(56,0,null,null,2,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),o.sb(57,0,null,null,1,"label",[["class","text-danger"]],null,null,null,null,null)),(n()(),o.Jb(58,null,[" ",""])),(n()(),o.sb(59,0,null,null,4,"a",[["class","btn rounded-btn"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var e=!0,t=n.component;return"click"===l&&(e=!1!==o.Cb(n,60).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),"click"===l&&(e=!1!==t.onLoggedin()&&e),e},null,null)),o.rb(60,671744,null,0,b.o,[b.l,b.a,s.i],{routerLink:[0,"routerLink"]},null),o.Db(61,1),(n()(),o.Jb(62,null,["",""])),o.Eb(131072,r.i,[r.j,o.h]),(n()(),o.Jb(-1,null,[" \xa0 "])),(n()(),o.sb(65,0,null,null,4,"a",[["class","btn rounded-btn"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==o.Cb(n,66).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),o.rb(66,671744,null,0,b.o,[b.l,b.a,s.i],{routerLink:[0,"routerLink"]},null),o.Db(67,1),(n()(),o.Jb(68,null,["",""])),o.Eb(131072,r.i,[r.j,o.h])],function(n,l){var u=l.component;n(l,7,0,"radioBasic"),n(l,9,0,"radioBasic",u.model),n(l,16,0,"loginType",1),n(l,18,0,"loginType",u.loginType),n(l,21,0,"loginType",1),n(l,27,0,"loginType","2"),n(l,29,0,"loginType",u.loginType),n(l,32,0,"loginType","2"),n(l,44,0,"username",u.loginObj.username),n(l,52,0,"password",u.loginObj.password);var o=n(l,61,0,"/dashboard");n(l,60,0,o);var e=n(l,67,0,"/signup");n(l,66,0,e)},function(n,l){var u=l.component;n(l,0,0,void 0),n(l,6,0,o.Cb(l,11).ngClassUntouched,o.Cb(l,11).ngClassTouched,o.Cb(l,11).ngClassPristine,o.Cb(l,11).ngClassDirty,o.Cb(l,11).ngClassValid,o.Cb(l,11).ngClassInvalid,o.Cb(l,11).ngClassPending),n(l,12,0,!0,o.Cb(l,13).active,o.Cb(l,13).disabled,o.Cb(l,13).focused),n(l,14,0,o.Cb(l,20).ngClassUntouched,o.Cb(l,20).ngClassTouched,o.Cb(l,20).ngClassPristine,o.Cb(l,20).ngClassDirty,o.Cb(l,20).ngClassValid,o.Cb(l,20).ngClassInvalid,o.Cb(l,20).ngClassPending,o.Cb(l,21).checked,o.Cb(l,21).disabled,o.Cb(l,21).nameAttr),n(l,23,0,!0,o.Cb(l,24).active,o.Cb(l,24).disabled,o.Cb(l,24).focused),n(l,25,0,o.Cb(l,31).ngClassUntouched,o.Cb(l,31).ngClassTouched,o.Cb(l,31).ngClassPristine,o.Cb(l,31).ngClassDirty,o.Cb(l,31).ngClassValid,o.Cb(l,31).ngClassInvalid,o.Cb(l,31).ngClassPending,o.Cb(l,32).checked,o.Cb(l,32).disabled,o.Cb(l,32).nameAttr),n(l,34,0,o.Cb(l,38).ngClassUntouched,o.Cb(l,38).ngClassTouched,o.Cb(l,38).ngClassPristine,o.Cb(l,38).ngClassDirty,o.Cb(l,38).ngClassValid,o.Cb(l,38).ngClassInvalid,o.Cb(l,38).ngClassPending),n(l,41,0,o.ub(1,"",o.Kb(l,41,0,o.Cb(l,47).transform("Email")),""),o.Cb(l,46).ngClassUntouched,o.Cb(l,46).ngClassTouched,o.Cb(l,46).ngClassPristine,o.Cb(l,46).ngClassDirty,o.Cb(l,46).ngClassValid,o.Cb(l,46).ngClassInvalid,o.Cb(l,46).ngClassPending),n(l,49,0,o.ub(1,"",o.Kb(l,49,0,o.Cb(l,55).transform("Password")),""),o.Cb(l,54).ngClassUntouched,o.Cb(l,54).ngClassTouched,o.Cb(l,54).ngClassPristine,o.Cb(l,54).ngClassDirty,o.Cb(l,54).ngClassValid,o.Cb(l,54).ngClassInvalid,o.Cb(l,54).ngClassPending),n(l,58,0,u.loginObj.errorMsg),n(l,59,0,o.Cb(l,60).target,o.Cb(l,60).href),n(l,62,0,o.Kb(l,62,0,o.Cb(l,63).transform("Log in"))),n(l,65,0,o.Cb(l,66).target,o.Cb(l,66).href),n(l,68,0,o.Kb(l,68,0,o.Cb(l,69).transform("Register")))})}function m(n){return o.Lb(0,[(n()(),o.sb(0,0,null,null,1,"app-login",[],null,null,null,C,p)),o.rb(1,114688,null,0,d,[b.l],null,null)],function(n,l){n(l,1,0)},null)}var h=o.ob("app-login",d,m,{},{},[]),f=function(){return function(){}}();u.d(l,"LoginModuleNgFactory",function(){return v});var v=o.pb(e,[],function(n){return o.zb([o.Ab(512,o.j,o.cb,[[8,[t.a,t.b,t.r,t.s,t.o,t.p,t.q,i.a,h]],[3,o.j],o.y]),o.Ab(4608,s.n,s.m,[o.v,[2,s.B]]),o.Ab(4608,g.x,g.x,[]),o.Ab(4608,a.D,a.D,[o.j,o.r,a.xb,a.E]),o.Ab(1073742336,s.b,s.b,[]),o.Ab(1073742336,g.w,g.w,[]),o.Ab(1073742336,g.i,g.i,[]),o.Ab(1073742336,a.d,a.d,[]),o.Ab(1073742336,a.g,a.g,[]),o.Ab(1073742336,a.i,a.i,[]),o.Ab(1073742336,a.m,a.m,[]),o.Ab(1073742336,a.o,a.o,[]),o.Ab(1073742336,a.u,a.u,[]),o.Ab(1073742336,a.z,a.z,[]),o.Ab(1073742336,a.F,a.F,[]),o.Ab(1073742336,a.J,a.J,[]),o.Ab(1073742336,a.O,a.O,[]),o.Ab(1073742336,a.R,a.R,[]),o.Ab(1073742336,a.W,a.W,[]),o.Ab(1073742336,a.cb,a.cb,[]),o.Ab(1073742336,a.gb,a.gb,[]),o.Ab(1073742336,a.jb,a.jb,[]),o.Ab(1073742336,a.kb,a.kb,[]),o.Ab(1073742336,a.G,a.G,[]),o.Ab(1073742336,r.g,r.g,[]),o.Ab(1073742336,b.p,b.p,[[2,b.u],[2,b.l]]),o.Ab(1073742336,f,f,[]),o.Ab(1073742336,e,e,[]),o.Ab(1024,b.j,function(){return[[{path:"",component:d}]]},[])])})}}]);