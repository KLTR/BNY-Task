function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{vfUp:function(t,e,n){"use strict";n.r(e),n.d(e,"CustomersModule",(function(){return V}));var r,i,o=n("PCNd"),c=n("tyNb"),s=n("mrSG"),a=n("fXoL"),d=n("yWAI"),b=n("bEMC"),l=n("OsF4"),u=n("3Pt+"),p=((r=function(){function t(){_classCallCheck(this,t),this.model={filter:null},this.changed=new a.n}return _createClass(t,[{key:"filterChanged",value:function(t){t.preventDefault(),this.changed.emit(this.model.filter)}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=a.Eb({type:r,selectors:[["cm-filter-textbox"]],outputs:{changed:"changed"},decls:3,vars:1,consts:[["type","text","name","filter",3,"ngModel","ngModelChange","keyup"]],template:function(t,e){1&t&&(a.Qb(0,"form"),a.tc(1," Filter: "),a.Qb(2,"input",0),a.Yb("ngModelChange",(function(t){return e.model.filter=t}))("keyup",(function(t){return e.filterChanged(t)})),a.Pb(),a.Pb()),2&t&&(a.zb(2),a.gc("ngModel",e.model.filter))},directives:[u.r,u.i,u.j,u.a,u.h,u.k],styles:["cm-filter-textbox[_ngcontent-%COMP%]{margin-top:5px}"]}),r),m=n("MPuK"),f=n("ofXK"),g=n("vTEt"),h=((i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){return t?t.trim():""}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275pipe=a.Jb({name:"trim",type:i,pure:!0}),i),y=function(t){return["/customers",t,"details"]},C=function(t){return["/customers",t,"edit"]},P=function(t){return["/customers",t,"orders"]};function v(t,e){if(1&t&&(a.Qb(0,"div",4),a.Qb(1,"div",5),a.Qb(2,"div",6),a.Qb(3,"a",7),a.tc(4),a.bc(5,"capitalize"),a.bc(6,"capitalize"),a.Pb(),a.Qb(7,"a",8),a.Lb(8,"i",9),a.Pb(),a.Pb(),a.Qb(9,"div",10),a.Qb(10,"div",11),a.Qb(11,"div",12),a.Qb(12,"a",13),a.Lb(13,"img",14),a.bc(14,"lowercase"),a.Pb(),a.Pb(),a.Qb(15,"div",15),a.Qb(16,"div",16),a.tc(17),a.bc(18,"trim"),a.Pb(),a.Qb(19,"a",8),a.tc(20,"View Orders"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&t){var n=e.$implicit;a.zb(3),a.gc("routerLink",a.jc(16,y,n.id)),a.zb(1),a.wc(" ",a.cc(5,8,n.firstName)," ",a.cc(6,10,n.lastName)," "),a.zb(3),a.gc("routerLink",a.jc(18,C,n.id)),a.zb(6),a.hc("src","assets/images/",a.cc(14,12,n.gender),".png",a.oc),a.zb(4),a.wc("",a.cc(18,14,n.city),", ",n.state.name,""),a.zb(2),a.gc("routerLink",a.jc(20,P,n.id))}}function Q(t,e){1&t&&(a.Qb(0,"div"),a.tc(1," No Records Found "),a.Pb())}var k,M,w=((k=function(){function t(e){_classCallCheck(this,t),this.trackbyService=e,this.customers=[]}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||k)(a.Kb(m.a))},k.\u0275cmp=a.Eb({type:k,selectors:[["cm-customers-card"]],inputs:{customers:"customers"},decls:4,vars:3,consts:[[1,"container"],[1,"row","card-container"],["class","col-sm-6 col-md-4 col-lg-3",4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[1,"col-sm-6","col-md-4","col-lg-3"],[1,"card"],[1,"card-header"],[1,"white",3,"routerLink"],[3,"routerLink"],["title","Edit",1,"pull-right","glyphicon","glyphicon-edit","edit-icon","white"],[1,"card-body"],[1,"clearfix"],[1,"pull-left","card-body-left"],["href","#",1,"white"],[1,"card-image",3,"src"],[1,"pull-left","card-body-right"],[1,"card-body-content"]],template:function(t,e){1&t&&(a.Qb(0,"div",0),a.Qb(1,"div",1),a.sc(2,v,21,22,"div",2),a.sc(3,Q,2,0,"div",3),a.Pb(),a.Pb()),2&t&&(a.zb(2),a.gc("ngForOf",e.customers)("ngForTrackBy",e.trackbyService.customer),a.zb(1),a.gc("ngIf",!e.customers.length))},directives:[f.k,f.l,c.d],pipes:[g.a,f.i,h],styles:[".card-container[_ngcontent-%COMP%]{width:85%}.card[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #d4d4d4;height:120px;margin-bottom:20px;position:relative}.card-header[_ngcontent-%COMP%]{background-color:#027ff4;font-size:14pt;color:#fff;padding:5px;width:100%}.card-close[_ngcontent-%COMP%]{color:#fff;font-weight:700;margin-right:5px}.card-body[_ngcontent-%COMP%]{padding-left:5px}.card-body-left[_ngcontent-%COMP%]{margin-top:-5px}.card-body-right[_ngcontent-%COMP%]{margin-left:20px;margin-top:2px}.card-body-content[_ngcontent-%COMP%]{width:100px}.card-image[_ngcontent-%COMP%]{height:50px;width:50px;margin-top:10px}.white[_ngcontent-%COMP%], .white[_ngcontent-%COMP%]:hover{color:#fff}"],changeDetection:0}),k),z=n("+Obw"),_=((M=function(){function t(){_classCallCheck(this,t),this.sorted=new a.n}return _createClass(t,[{key:"onClick",value:function(){event.preventDefault(),this.sorted.next(this.sortProperty)}},{key:"sortBy",set:function(t){this.sortProperty=t}}]),t}()).\u0275fac=function(t){return new(t||M)},M.\u0275dir=a.Fb({type:M,selectors:[["","cmSortBy",""]],hostBindings:function(t,e){1&t&&a.Yb("click",(function(){return e.onClick()}))},inputs:{sortBy:["cmSortBy","sortBy"]},outputs:{sorted:"sorted"}}),M),x=function(t){return["/customers",t,"details"]},O=function(t){return["/customers",t,"orders"]};function S(t,e){if(1&t&&(a.Qb(0,"tr"),a.Qb(1,"td"),a.Lb(2,"img",13),a.bc(3,"lowercase"),a.Pb(),a.Qb(4,"td"),a.Qb(5,"a",14),a.tc(6),a.bc(7,"capitalize"),a.Pb(),a.Pb(),a.Qb(8,"td"),a.tc(9),a.bc(10,"capitalize"),a.Pb(),a.Qb(11,"td"),a.tc(12),a.Pb(),a.Qb(13,"td"),a.tc(14),a.bc(15,"trim"),a.Pb(),a.Qb(16,"td"),a.tc(17),a.Pb(),a.Qb(18,"td"),a.tc(19),a.bc(20,"currency"),a.Pb(),a.Qb(21,"td"),a.Qb(22,"a",14),a.tc(23,"View Orders"),a.Pb(),a.Pb(),a.Pb()),2&t){var n=e.$implicit;a.zb(2),a.hc("src","assets/images/",a.cc(3,9,n.gender),".png",a.oc),a.zb(3),a.gc("routerLink",a.jc(21,x,n.id)),a.zb(1),a.uc(a.cc(7,11,n.firstName)),a.zb(3),a.uc(a.cc(10,13,n.lastName)),a.zb(3),a.uc(n.address),a.zb(2),a.uc(a.cc(15,15,n.city)),a.zb(3),a.uc(n.state.name),a.zb(2),a.uc(a.dc(20,17,n.orderTotal,"USD","symbol")),a.zb(3),a.gc("routerLink",a.jc(23,O,n.id))}}function L(t,e){1&t&&(a.Qb(0,"tr"),a.Qb(1,"td"),a.tc(2,"\xa0"),a.Pb(),a.Qb(3,"td",15),a.tc(4,"No Records Found"),a.Pb(),a.Pb())}var F,R,E,N,B=((F=function(){function t(e,n){_classCallCheck(this,t),this.sorterService=e,this.trackbyService=n,this.customers=[]}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"sort",value:function(t){this.customers=this.sorterService.sort(this.customers,t)}}]),t}()).\u0275fac=function(t){return new(t||F)(a.Kb(z.a),a.Kb(m.a))},F.\u0275cmp=a.Eb({type:F,selectors:[["cm-customers-grid"]],inputs:{customers:"customers"},decls:26,vars:3,consts:[[1,"container"],[1,"row","grid-container"],[1,"col-md-10"],[1,"table"],[1,"table","table-striped","table-hover"],["cmSortBy","firstName",3,"sorted"],["cmSortBy","lastName",3,"sorted"],["cmSortBy","address",3,"sorted"],["cmSortBy","city",3,"sorted"],["cmSortBy","state.name",3,"sorted"],[3,"click"],[4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],["alt","Customer Image",1,"grid-image",3,"src"],[3,"routerLink"],["colspan","7"]],template:function(t,e){1&t&&(a.Qb(0,"div",0),a.Qb(1,"div",1),a.Qb(2,"div",2),a.Qb(3,"div",3),a.Qb(4,"table",4),a.Qb(5,"thead"),a.Qb(6,"tr"),a.Qb(7,"th"),a.tc(8,"\xa0"),a.Pb(),a.Qb(9,"th",5),a.Yb("sorted",(function(t){return e.sort(t)})),a.tc(10,"First Name"),a.Pb(),a.Qb(11,"th",6),a.Yb("sorted",(function(t){return e.sort(t)})),a.tc(12,"Last Name"),a.Pb(),a.Qb(13,"th",7),a.Yb("sorted",(function(t){return e.sort(t)})),a.tc(14,"Address"),a.Pb(),a.Qb(15,"th",8),a.Yb("sorted",(function(t){return e.sort(t)})),a.tc(16,"City"),a.Pb(),a.Qb(17,"th",9),a.Yb("sorted",(function(t){return e.sort(t)})),a.tc(18,"State"),a.Pb(),a.Qb(19,"th",10),a.Yb("click",(function(){return e.sort("orderTotal")})),a.tc(20,"Order Total"),a.Pb(),a.Qb(21,"th"),a.tc(22,"\xa0"),a.Pb(),a.Pb(),a.Pb(),a.Qb(23,"tbody"),a.sc(24,S,24,25,"tr",11),a.sc(25,L,5,0,"tr",12),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&t&&(a.zb(24),a.gc("ngForOf",e.customers)("ngForTrackBy",e.trackbyService.customer),a.zb(1),a.gc("ngIf",!e.customers.length))},directives:[_,f.k,f.l,c.d],pipes:[f.i,g.a,h,f.c],styles:[".grid-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-left:0}.grid-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle}.grid-image[_ngcontent-%COMP%]{height:50px;width:50px;margin-top:10px}"],changeDetection:0}),F),I=n("Exvd"),Y=["mapsContainer"],j=((R=function(){function t(e,n,r,i){_classCallCheck(this,t),this.componentFactoryResolver=e,this.dataService=n,this.filterService=r,this.logger=i,this.customers=[],this.displayModeEnum=D,this.totalRecords=0,this.pageSize=10,this._filteredCustomers=[]}return _createClass(t,[{key:"ngOnInit",value:function(){this.title="Customers",this.filterText="Filter Customers:",this.displayMode=D.Card,this.getCustomersPage(1)}},{key:"changeDisplayMode",value:function(t){this.displayMode=t}},{key:"pageChanged",value:function(t){this.getCustomersPage(t)}},{key:"getCustomersPage",value:function(t){var e=this;this.dataService.getCustomersPage((t-1)*this.pageSize,this.pageSize).subscribe((function(t){e.customers=e.filteredCustomers=t.results,e.totalRecords=t.totalRecords}),(function(t){return e.logger.log(t)}),(function(){return e.logger.log("getCustomersPage() retrieved customers for page: "+t)}))}},{key:"filterChanged",value:function(t){t&&this.customers?(t=t.toUpperCase(),this.filteredCustomers=this.filterService.filter(this.customers,t,["firstName","lastName","city","state.name"])):this.filteredCustomers=this.customers}},{key:"lazyLoadMapComponent",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.changeDisplayMode(D.Map),this.mapsViewContainerRef.length){t.next=8;break}return t.next=3,n.e(2).then(n.bind(null,"ISAC"));case 3:e=t.sent,r=e.MapComponent,console.log("Lazy loaded map component!"),i=this.componentFactoryResolver.resolveComponentFactory(r),this.mapComponentRef=this.mapsViewContainerRef.createComponent(i),this.mapComponentRef.instance.zoom=2,this.mapComponentRef.instance.dataPoints=this.filteredCustomers,this.mapComponentRef.instance.enabled=!0;case 8:case"end":return t.stop()}}),t,this)})))}},{key:"updateMapComponentDataPoints",value:function(){this.mapComponentRef&&(this.mapComponentRef.instance.dataPoints=this.filteredCustomers)}},{key:"filteredCustomers",get:function(){return this._filteredCustomers},set:function(t){this._filteredCustomers=t,this.updateMapComponentDataPoints()}}]),t}()).\u0275fac=function(t){return new(t||R)(a.Kb(a.j),a.Kb(d.a),a.Kb(b.a),a.Kb(l.a))},R.\u0275cmp=a.Eb({type:R,selectors:[["cm-customers"]],viewQuery:function(t,e){var n;1&t&&a.xc(Y,!0,a.N),2&t&&a.lc(n=a.Zb())&&(e.mapsViewContainerRef=n.first)},decls:34,vars:14,consts:[[1,"customers","view","indent"],[1,"container"],[1,"glyphicon","glyphicon-user"],[1,"row"],[1,"col-md-10"],[1,"navbar"],[1,"nav","navbar-nav"],[1,"toolbar-item"],[3,"click"],[1,"glyphicon","glyphicon-th-large"],[1,"glyphicon","glyphicon-align-justify"],[1,"glyphicon","glyphicon-map-marker"],["routerLink","/customers/0/edit"],[1,"glyphicon","glyphicon-plus"],[1,"navbar-right",3,"changed"],[3,"customers","hidden"],[3,"hidden"],["mapsContainer",""],[3,"totalItems","pageSize","pageChanged"]],template:function(t,e){1&t&&(a.Qb(0,"div",0),a.Qb(1,"div",1),a.Qb(2,"header"),a.Qb(3,"h3"),a.Lb(4,"span",2),a.tc(5),a.Pb(),a.Pb(),a.Lb(6,"br"),a.Qb(7,"div",3),a.Qb(8,"div",4),a.Qb(9,"div",5),a.Qb(10,"ul",6),a.Qb(11,"li",7),a.Qb(12,"a",8),a.Yb("click",(function(){return e.changeDisplayMode(e.displayModeEnum.Card)})),a.Lb(13,"span",9),a.tc(14," Card View "),a.Pb(),a.Pb(),a.Qb(15,"li",7),a.Qb(16,"a",8),a.Yb("click",(function(){return e.changeDisplayMode(e.displayModeEnum.Grid)})),a.Lb(17,"span",10),a.tc(18," List View "),a.Pb(),a.Pb(),a.Qb(19,"li",7),a.Qb(20,"a",8),a.Yb("click",(function(){return e.lazyLoadMapComponent()})),a.Lb(21,"span",11),a.tc(22," Map View "),a.Pb(),a.Pb(),a.Qb(23,"li",7),a.Qb(24,"a",12),a.Lb(25,"span",13),a.tc(26," New Customer "),a.Pb(),a.Pb(),a.Pb(),a.Qb(27,"cm-filter-textbox",14),a.Yb("changed",(function(t){return e.filterChanged(t)})),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Lb(28,"cm-customers-card",15),a.Lb(29,"cm-customers-grid",15),a.Qb(30,"div",16),a.Mb(31,null,17),a.Pb(),a.Qb(33,"cm-pagination",18),a.Yb("pageChanged",(function(t){return e.pageChanged(t)})),a.Pb(),a.Pb(),a.Pb()),2&t&&(a.zb(5),a.vc(" ",e.title," "),a.zb(7),a.Cb("active",e.displayMode===e.displayModeEnum.Card),a.zb(4),a.Cb("active",e.displayMode===e.displayModeEnum.Grid),a.zb(4),a.Cb("active",e.displayMode===e.displayModeEnum.Map),a.zb(8),a.gc("customers",e.filteredCustomers)("hidden",e.displayMode!==e.displayModeEnum.Card),a.zb(1),a.gc("customers",e.filteredCustomers)("hidden",e.displayMode!==e.displayModeEnum.Grid),a.zb(1),a.gc("hidden",e.displayMode!==e.displayModeEnum.Map),a.zb(3),a.gc("totalItems",e.totalRecords)("pageSize",e.pageSize))},directives:[c.d,p,w,B,I.a],encapsulation:2}),R),D=function(t){return t[t.Card=0]="Card",t[t.Grid=1]="Grid",t[t.Map=2]="Map",t}({}),T=[{path:"",component:j}],K=((N=function t(){_classCallCheck(this,t)}).components=[j,w,B],N.\u0275mod=a.Ib({type:N}),N.\u0275inj=a.Hb({factory:function(t){return new(t||N)},imports:[[c.e.forChild(T)],c.e]}),N),V=((E=function t(){_classCallCheck(this,t)}).\u0275mod=a.Ib({type:E}),E.\u0275inj=a.Hb({factory:function(t){return new(t||E)},imports:[[K,o.a]]}),E)}}]);