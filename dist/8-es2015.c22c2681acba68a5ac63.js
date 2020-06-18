(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{d7gL:function(e,t,r){"use strict";r.r(t),r.d(t,"CustomerModule",(function(){return q}));var n=r("PCNd"),c=r("tyNb"),o=r("fXoL");let s=(()=>{class e{constructor(e){this.router=e}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(c.b))},e.\u0275cmp=o.Eb({type:e,selectors:[["cm-orders"]],decls:27,vars:0,consts:[[1,"orders","view"],[1,"container"],[1,"glyphicon","glyphicon-user"],[1,"navbar"],[1,"nav","navbar-nav"],[1,"toolbar-item"],["routerLink","details","routerLinkActive","active"],[1,"glyphicon","glyphicon-list"],["routerLink","orders","routerLinkActive","active"],[1,"glyphicon","glyphicon-tags"],["routerLink","edit","routerLinkActive","active"],[1,"glyphicon","glyphicon-edit"],["routerLink","/customers"]],template:function(e,t){1&e&&(o.Qb(0,"div",0),o.Qb(1,"div",1),o.Qb(2,"header"),o.Qb(3,"h3"),o.Lb(4,"span",2),o.tc(5,"\xa0\xa0Customer Information"),o.Pb(),o.Pb(),o.Lb(6,"br"),o.Qb(7,"div",3),o.Qb(8,"ul",4),o.Qb(9,"li",5),o.Qb(10,"a",6),o.Lb(11,"span",7),o.tc(12,"\xa0\xa0Customer Details "),o.Pb(),o.Pb(),o.Qb(13,"li",5),o.Qb(14,"a",8),o.Lb(15,"span",9),o.tc(16,"\xa0\xa0Customer Orders "),o.Pb(),o.Pb(),o.Qb(17,"li",5),o.Qb(18,"a",10),o.Lb(19,"span",11),o.tc(20,"\xa0\xa0Edit Customer "),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Qb(21,"div",1),o.Lb(22,"router-outlet"),o.Lb(23,"br"),o.Lb(24,"br"),o.Qb(25,"a",12),o.tc(26,"View all Customers"),o.Pb(),o.Pb(),o.Pb(),o.Pb())},directives:[c.d,c.c,c.f],encapsulation:2}),e})();var i=r("yWAI"),a=r("ofXK"),b=r("vTEt");function u(e,t){if(1&e&&(o.Qb(0,"tr"),o.Qb(1,"td"),o.tc(2),o.Pb(),o.Qb(3,"td",6),o.tc(4),o.bc(5,"currency"),o.Pb(),o.Pb()),2&e){const e=t.$implicit;o.zb(2),o.uc(e.productName),o.zb(2),o.uc(o.dc(5,2,e.itemCost,"USD","symbol"))}}function d(e,t){if(1&e&&(o.Qb(0,"div",2),o.Qb(1,"h4"),o.tc(2),o.bc(3,"capitalize"),o.bc(4,"capitalize"),o.Pb(),o.Lb(5,"br"),o.Qb(6,"table",3),o.sc(7,u,6,6,"tr",4),o.Qb(8,"tr",5),o.Qb(9,"td"),o.tc(10,"\xa0"),o.Pb(),o.Qb(11,"td",6),o.tc(12),o.bc(13,"currency"),o.Pb(),o.Pb(),o.Pb(),o.Pb()),2&e){const e=o.ac();o.zb(2),o.wc("Orders for ",o.cc(3,5,e.customer.firstName)," ",o.cc(4,7,e.customer.lastName),""),o.zb(5),o.gc("ngForOf",e.customer.orders)("ngForTrackBy",e.ordersTrackBy),o.zb(5),o.uc(o.dc(13,9,e.customer.orderTotal,"USD","symbol"))}}function l(e,t){if(1&e&&(o.Qb(0,"div",2),o.Qb(1,"span"),o.tc(2,"No orders found."),o.Pb(),o.Qb(3,"a",7),o.tc(4,"Add Order?"),o.Pb(),o.Pb()),2&e){const e=o.ac();o.zb(3),o.hc("routerLink","/orders/add/",e.customer.id,"")}}function m(e,t){1&e&&(o.Qb(0,"div",2),o.tc(1," No customer found "),o.Pb())}let g=(()=>{class e{constructor(e,t,r){this.route=e,this.dataService=t,this.router=r,this.orders=[]}ngOnInit(){this.route.parent.params.subscribe(e=>{this.dataService.getCustomer(+e.id).subscribe(e=>{this.customer=e})})}ordersTrackBy(e,t){return e}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(c.a),o.Kb(i.a),o.Kb(c.b))},e.\u0275cmp=o.Eb({type:e,selectors:[["cm-customer-orders"]],decls:4,vars:3,consts:[[1,"container"],["class","row",4,"ngIf"],[1,"row"],[1,"table","table-striped","table-hover","orders-table"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"summary-border"],[1,"text-right"],[3,"routerLink"]],template:function(e,t){1&e&&(o.Qb(0,"div",0),o.sc(1,d,14,13,"div",1),o.sc(2,l,5,1,"div",1),o.sc(3,m,2,0,"div",1),o.Pb()),2&e&&(o.zb(1),o.gc("ngIf",t.customer&&t.customer.orders),o.zb(1),o.gc("ngIf",t.customer&&!t.customer.orders),o.zb(1),o.gc("ngIf",!t.customer))},directives:[a.l,a.k,c.d],pipes:[b.a,a.c],encapsulation:2}),e})();var p=r("mrSG");const f=["mapsContainer"];function h(e,t){if(1&e&&(o.Qb(0,"div",2),o.Qb(1,"div",6),o.Lb(2,"img",7),o.bc(3,"lowercase"),o.Pb(),o.Qb(4,"div",8),o.Qb(5,"h4"),o.tc(6),o.bc(7,"capitalize"),o.bc(8,"capitalize"),o.Pb(),o.Lb(9,"br"),o.tc(10),o.Lb(11,"br"),o.tc(12),o.Pb(),o.Pb()),2&e){const e=o.ac();o.zb(2),o.hc("src","assets/images/",o.cc(3,6,e.customer.gender),".png",o.oc),o.zb(4),o.wc(" ",o.cc(7,8,e.customer.firstName)," ",o.cc(8,10,e.customer.lastName),"\xa0 "),o.zb(4),o.vc(" ",e.customer.address," "),o.zb(2),o.wc(" ",e.customer.city,", ",e.customer.state.name," ")}}function v(e,t){1&e&&(o.Qb(0,"div",0),o.tc(1," No customer found\n"),o.Pb())}let P=(()=>{class e{constructor(e,t,r){this.route=e,this.dataService=t,this.componentFactoryResolver=r}ngOnInit(){this.route.parent.params.subscribe(e=>{const t=+e.id;t&&this.dataService.getCustomer(t).subscribe(e=>{this.customer=e,this.customer&&this.customer.latitude&&this.lazyLoadMapComponent()})})}lazyLoadMapComponent(){return Object(p.a)(this,void 0,void 0,(function*(){if(!this.mapsViewContainerRef.length){const{MapComponent:e}=yield r.e(2).then(r.bind(null,"ISAC"));console.log("Lazy loaded map component!");const t=this.componentFactoryResolver.resolveComponentFactory(e);this.mapComponentRef=this.mapsViewContainerRef.createComponent(t),this.mapComponentRef.instance.zoom=10,this.mapComponentRef.instance.customer=this.customer,this.mapComponentRef.instance.enabled=!0}}))}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(c.a),o.Kb(i.a),o.Kb(o.j))},e.\u0275cmp=o.Eb({type:e,selectors:[["cm-customer-details"]],viewQuery:function(e,t){var r;1&e&&o.xc(f,!0,o.N),2&e&&o.lc(r=o.Zb())&&(t.mapsViewContainerRef=r.first)},decls:10,vars:2,consts:[[1,"container"],["class","row",4,"ngIf"],[1,"row"],[1,"col-md-12"],["mapsContainer",""],["class","container",4,"ngIf"],[1,"col-md-2"],[1,"details-image",3,"src"],[1,"col-md-10"]],template:function(e,t){1&e&&(o.Qb(0,"div",0),o.sc(1,h,13,12,"div",1),o.Lb(2,"br"),o.Lb(3,"br"),o.Qb(4,"div",2),o.Qb(5,"div",3),o.Qb(6,"div"),o.Mb(7,null,4),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.sc(9,v,2,0,"div",5)),2&e&&(o.zb(1),o.gc("ngIf",t.customer),o.zb(8),o.gc("ngIf",!t.customer))},directives:[a.l],pipes:[a.i,b.a],styles:[".details-image[_ngcontent-%COMP%]{height:100px;width:100px;margin-top:10px}"]}),e})();var Q=r("+qzk"),C=r("9nld"),y=r("OsF4"),M=r("3Pt+");const z=["customerForm"];function w(e,t){if(1&e&&(o.Qb(0,"option",16),o.tc(1),o.Pb()),2&e){const e=t.$implicit;o.gc("ngValue",e.abbreviation),o.zb(1),o.uc(e.name)}}function L(e,t){if(1&e){const e=o.Rb();o.Qb(0,"div",20),o.tc(1," Delete Customer?\xa0\xa0"),o.Qb(2,"button",21),o.Yb("click",(function(t){return o.nc(e),o.ac(2).delete(t)})),o.tc(3,"Yes"),o.Pb(),o.tc(4,"\xa0\xa0 "),o.Qb(5,"button",22),o.Yb("click",(function(){return o.nc(e),o.ac(2).deleteMessageEnabled=!1})),o.tc(6,"No"),o.Pb(),o.Pb()}}function k(e,t){if(1&e){const e=o.Rb();o.Qb(0,"button",21),o.Yb("click",(function(){return o.nc(e),o.ac(2).deleteMessageEnabled=!0})),o.tc(1,"Delete"),o.Pb()}}function I(e,t){if(1&e){const e=o.Rb();o.Qb(0,"div",23),o.Qb(1,"button",22),o.Yb("click",(function(t){return o.nc(e),o.ac(2).cancel(t)})),o.tc(2,"Cancel"),o.Pb(),o.tc(3,"\xa0\xa0 "),o.Qb(4,"button",24),o.tc(5),o.Pb(),o.Pb()}if(2&e){const e=o.ac(2),t=o.mc(2);o.zb(4),o.gc("disabled",t.pristine||!t.valid),o.zb(1),o.uc(e.operationText)}}function O(e,t){if(1&e&&(o.Qb(0,"div"),o.sc(1,L,7,0,"div",17),o.sc(2,k,2,0,"button",18),o.tc(3,"\xa0\xa0 "),o.sc(4,I,6,2,"div",19),o.Pb()),2&e){const e=o.ac();o.zb(1),o.gc("ngIf",e.customer.id&&e.deleteMessageEnabled),o.zb(1),o.gc("ngIf",e.customer.id&&!e.deleteMessageEnabled),o.zb(2),o.gc("ngIf",!e.deleteMessageEnabled)}}function N(e,t){if(1&e&&(o.Qb(0,"div",25),o.tc(1),o.Pb()),2&e){const e=o.ac();o.zb(1),o.uc(e.errorMessage)}}let F=(()=>{class e{constructor(e,t,r,n,c,o){this.router=e,this.route=t,this.dataService=r,this.growler=n,this.modalService=c,this.logger=o,this.customer={id:0,firstName:"",lastName:"",gender:"",address:"",city:"",state:{abbreviation:"",name:""}},this.operationText="Insert"}ngOnInit(){this.route.parent.params.subscribe(e=>{const t=+e.id;0!==t&&(this.operationText="Update",this.getCustomer(t))}),this.dataService.getStates().subscribe(e=>this.states=e)}getCustomer(e){this.dataService.getCustomer(e).subscribe(e=>{this.customer=e})}submit(){0===this.customer.id?this.dataService.insertCustomer(this.customer).subscribe(e=>{if(e)this.customerForm.form.markAsPristine(),this.router.navigate(["/customers"]);else{const e="Unable to insert customer";this.growler.growl(e,Q.a.Danger),this.errorMessage=e}},e=>this.logger.log(e)):this.dataService.updateCustomer(this.customer).subscribe(e=>{if(e)this.customerForm.form.markAsPristine(),this.growler.growl("Operation performed successfully.",Q.a.Success);else{const e="Unable to update customer";this.growler.growl(e,Q.a.Danger),this.errorMessage=e}},e=>this.logger.log(e))}cancel(e){e.preventDefault(),this.router.navigate(["/customers"])}delete(e){e.preventDefault(),this.dataService.deleteCustomer(this.customer.id).subscribe(e=>{e?this.router.navigate(["/customers"]):this.errorMessage="Unable to delete customer"},e=>this.logger.log(e))}canDeactivate(){return!this.customerForm.dirty||this.modalService.show({header:"Lose Unsaved Changes?",body:"You have unsaved changes! Would you like to leave the page and lose them?",cancelButtonText:"Cancel",OKButtonText:"Leave"})}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(c.b),o.Kb(c.a),o.Kb(i.a),o.Kb(Q.b),o.Kb(C.a),o.Kb(y.a))},e.\u0275cmp=o.Eb({type:e,selectors:[["cm-customer-edit"]],viewQuery:function(e,t){var r;1&e&&o.qc(z,!0),2&e&&o.lc(r=o.Zb())&&(t.customerForm=r.first)},decls:39,vars:12,consts:[["novalidate","",1,"customer-form",3,"ngSubmit"],["customerForm","ngForm"],[1,"form-group"],["type","text","name","firstName","required","",1,"form-control",3,"ngModel","ngModelChange"],["firstName","ngModel"],[1,"alert","alert-danger",3,"hidden"],["type","text","name","lastName","required","",1,"form-control",3,"ngModel","ngModelChange"],["lastName","ngModel"],["type","text","name","address","required","",1,"form-control",3,"ngModel","ngModelChange"],["address","ngModel"],["type","text","name","city","required","",1,"form-control",3,"ngModel","ngModelChange"],["city","ngModel"],["name","state","required","",1,"form-control",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],[4,"ngIf"],["class","alert alert-danger",4,"ngIf"],[3,"ngValue"],["class","alert alert-warning",4,"ngIf"],["class","btn btn-danger",3,"click",4,"ngIf"],["class","pull-right",4,"ngIf"],[1,"alert","alert-warning"],[1,"btn","btn-danger",3,"click"],[1,"btn","btn-default",3,"click"],[1,"pull-right"],["type","submit",1,"btn","btn-success",3,"disabled"],[1,"alert","alert-danger"]],template:function(e,t){if(1&e&&(o.Qb(0,"div"),o.Qb(1,"form",0,1),o.Yb("ngSubmit",(function(){return t.submit()})),o.Qb(3,"div",2),o.Qb(4,"label"),o.tc(5,"First Name"),o.Pb(),o.Qb(6,"input",3,4),o.Yb("ngModelChange",(function(e){return t.customer.firstName=e})),o.Pb(),o.Qb(8,"div",5),o.tc(9,"First Name is required"),o.Pb(),o.Pb(),o.Qb(10,"div",2),o.Qb(11,"label"),o.tc(12,"Last Name"),o.Pb(),o.Qb(13,"input",6,7),o.Yb("ngModelChange",(function(e){return t.customer.lastName=e})),o.Pb(),o.Qb(15,"div",5),o.tc(16,"Last Name is required"),o.Pb(),o.Pb(),o.Qb(17,"div",2),o.Qb(18,"label"),o.tc(19,"Address"),o.Pb(),o.Qb(20,"input",8,9),o.Yb("ngModelChange",(function(e){return t.customer.address=e})),o.Pb(),o.Qb(22,"div",5),o.tc(23,"Address is required"),o.Pb(),o.Pb(),o.Qb(24,"div",2),o.Qb(25,"label"),o.tc(26,"City"),o.Pb(),o.Qb(27,"input",10,11),o.Yb("ngModelChange",(function(e){return t.customer.city=e})),o.Pb(),o.Qb(29,"div",5),o.tc(30,"City is required"),o.Pb(),o.Pb(),o.Qb(31,"div",2),o.Qb(32,"label"),o.tc(33,"State"),o.Pb(),o.Qb(34,"select",12),o.Yb("ngModelChange",(function(e){return t.customer.state.abbreviation=e})),o.sc(35,w,2,2,"option",13),o.Pb(),o.Pb(),o.sc(36,O,5,3,"div",14),o.sc(37,N,2,1,"div",15),o.Pb(),o.Lb(38,"br"),o.Pb()),2&e){const e=o.mc(7),r=o.mc(14),n=o.mc(21),c=o.mc(28);o.zb(6),o.gc("ngModel",t.customer.firstName),o.zb(2),o.gc("hidden",e.pristine||e.valid),o.zb(5),o.gc("ngModel",t.customer.lastName),o.zb(2),o.gc("hidden",r.pristine||r.valid),o.zb(5),o.gc("ngModel",t.customer.address),o.zb(2),o.gc("hidden",n.pristine||n.valid),o.zb(5),o.gc("ngModel",t.customer.city),o.zb(2),o.gc("hidden",c.pristine||c.valid),o.zb(5),o.gc("ngModel",t.customer.state.abbreviation),o.zb(1),o.gc("ngForOf",t.states),o.zb(1),o.gc("ngIf",t.customer),o.zb(1),o.gc("ngIf",null!=t.errorMessage)}},directives:[M.r,M.i,M.j,M.a,M.n,M.h,M.k,M.o,a.k,a.l,M.l,M.q],styles:[".customer-form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%}.customer-form[_ngcontent-%COMP%]   .ng-invalid[_ngcontent-%COMP%]{border-left:5px solid #a94442}.customer-form[_ngcontent-%COMP%]   .ng-valid[_ngcontent-%COMP%]{border-left:5px solid #42a948}"]}),e})();var S=r("uBHf"),x=r("wNMA");const K=[{path:"",component:s,children:[{path:"orders",component:g},{path:"details",component:P},{path:"edit",component:F,canActivate:[S.a],canDeactivate:[x.a]}]}];let _=(()=>{class e{}return e.components=[s,g,P,F],e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({factory:function(t){return new(t||e)},providers:[S.a,x.a],imports:[[c.e.forChild(K)],c.e]}),e})(),q=(()=>{class e{}return e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({factory:function(t){return new(t||e)},imports:[[_,n.a]]}),e})()}}]);