function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{h9W5:function(e,t,n){"use strict";n.r(t),n.d(t,"OrdersModule",(function(){return U}));var i,r=n("PCNd"),a=n("tyNb"),s=n("fXoL"),o=((i=function(){function e(){_classCallCheck(this,e),this.value="list"}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=s.Eb({type:i,selectors:[["cm-customers-orders"]],decls:21,vars:0,consts:[[1,"customers","view","indent"],[1,"container"],[1,"glyphicon","glyphicon-folder-open"],[1,"row"],[1,"col-md-10"],[1,"navbar"],[1,"nav","navbar-nav"],[1,"toolbar-item"],["routerLink","/orders/list","routerLinkActive","active"],[1,"glyphicon","glyphicon-align-justify"],["routerLink","/orders/add/0","routerLinkActive","active"],[1,"glyphicon","glyphicon-plus"]],template:function(e,t){1&e&&(s.Qb(0,"div",0),s.Qb(1,"div",1),s.Qb(2,"header"),s.Qb(3,"h3"),s.Lb(4,"span",2),s.tc(5," Orders "),s.Pb(),s.Pb(),s.Lb(6,"br"),s.Qb(7,"div",3),s.Qb(8,"div",4),s.Qb(9,"div",5),s.Qb(10,"ul",6),s.Qb(11,"li",7),s.Qb(12,"a",8),s.Lb(13,"span",9),s.tc(14," List "),s.Pb(),s.Pb(),s.Qb(15,"li",7),s.Qb(16,"a",10),s.Lb(17,"span",11),s.tc(18," New Order "),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(19,"div",1),s.Lb(20,"router-outlet"),s.Pb(),s.Pb(),s.Pb())},directives:[a.d,a.c,a.f],encapsulation:2}),i),u=n("+qzk"),l=n("yWAI"),c=n("9nld"),h=n("OsF4"),d=n("MPuK"),p=n("3Pt+"),b=n("ofXK");n("mrSG");var f,g,v,m=new s.q("currency.mask.config"),y=function(){function e(t){_classCallCheck(this,e),this.htmlInputElement=t}return _createClass(e,[{key:"setCursorAt",value:function(e){if(this.htmlInputElement.setSelectionRange)this.htmlInputElement.focus(),this.htmlInputElement.setSelectionRange(e,e);else if(this.htmlInputElement.createTextRange){var t=this.htmlInputElement.createTextRange();t.collapse(!0),t.moveEnd("character",e),t.moveStart("character",e),t.select()}}},{key:"updateValueAndCursor",value:function(e,t,n){this.rawValue=e,this.setCursorAt(n-=t-e.length)}},{key:"canInputMoreNumbers",get:function(){var e=!(this.rawValue.length>=this.htmlInputElement.maxLength&&this.htmlInputElement.maxLength>=0),t=this.inputSelection.selectionStart,n=this.inputSelection.selectionEnd,i=!(t==n||!this.htmlInputElement.value.substring(t,n).match(/\d/)),r="0"==this.htmlInputElement.value.substring(0,1);return e||i||r}},{key:"inputSelection",get:function(){var e=0,t=0;if("number"==typeof this.htmlInputElement.selectionStart&&"number"==typeof this.htmlInputElement.selectionEnd)e=this.htmlInputElement.selectionStart,t=this.htmlInputElement.selectionEnd;else{var n=document.getSelection().anchorNode;if(n&&n.firstChild==this.htmlInputElement){var i=this.htmlInputElement.value.length,r=this.htmlInputElement.value.replace(/\r\n/g,"\n"),a=this.htmlInputElement.createTextRange(),s=this.htmlInputElement.createTextRange();s.collapse(!1),a.compareEndPoints("StartToEnd",s)>-1?e=t=i:(e=-a.moveStart("character",-i),e+=r.slice(0,e).split("\n").length-1,a.compareEndPoints("EndToEnd",s)>-1?t=i:(t=-a.moveEnd("character",-i),t+=r.slice(0,t).split("\n").length-1))}}return{selectionStart:e,selectionEnd:t}}},{key:"rawValue",get:function(){return this.htmlInputElement&&this.htmlInputElement.value},set:function(e){this._storedRawValue=e,this.htmlInputElement&&(this.htmlInputElement.value=e)}},{key:"storedRawValue",get:function(){return this._storedRawValue}}]),e}(),C=function(){function e(t,n){_classCallCheck(this,e),this.htmlInputElement=t,this.options=n,this.inputManager=new y(t)}return _createClass(e,[{key:"addNumber",value:function(e){this.rawValue||(this.rawValue=this.applyMask(!1,"0"));var t=String.fromCharCode(e),n=this.inputSelection.selectionStart,i=this.inputSelection.selectionEnd;this.rawValue=this.rawValue.substring(0,n)+t+this.rawValue.substring(i,this.rawValue.length),this.updateFieldValue(n+1)}},{key:"applyMask",value:function(e,t){var n=this.options,i=n.allowNegative,r=n.decimal,a=n.precision,s=n.prefix,o=n.suffix,u=n.thousands,l=(t=e?new Number(t).toFixed(a):t).replace(/[^0-9]/g,"");if(!l)return"";var c=l.slice(0,l.length-a).replace(/^0*/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,u);""==c&&(c="0");var h=c,d=l.slice(l.length-a);a>0&&(h+=r+(d="0".repeat(a-d.length)+d));var p=0==parseInt(c)&&(0==parseInt(d)||""==d);return(t.indexOf("-")>-1&&i&&!p?"-":"")+s+h+o}},{key:"clearMask",value:function(e){if(null==e||""==e)return null;var t=e.replace(this.options.prefix,"").replace(this.options.suffix,"");return this.options.thousands&&(t=t.replace(new RegExp("\\"+this.options.thousands,"g"),"")),this.options.decimal&&(t=t.replace(this.options.decimal,".")),parseFloat(t)}},{key:"changeToNegative",value:function(){if(this.options.allowNegative&&""!=this.rawValue&&"-"!=this.rawValue.charAt(0)&&0!=this.value){var e=this.inputSelection.selectionStart;this.rawValue="-"+this.rawValue,this.updateFieldValue(e+1)}}},{key:"changeToPositive",value:function(){var e=this.inputSelection.selectionStart;this.rawValue=this.rawValue.replace("-",""),this.updateFieldValue(e-1)}},{key:"fixCursorPosition",value:function(e){var t=this.inputSelection.selectionStart;t>this.getRawValueWithoutSuffixEndPosition()||e?this.inputManager.setCursorAt(this.getRawValueWithoutSuffixEndPosition()):t<this.getRawValueWithoutPrefixStartPosition()&&this.inputManager.setCursorAt(this.getRawValueWithoutPrefixStartPosition())}},{key:"getRawValueWithoutSuffixEndPosition",value:function(){return this.rawValue.length-this.options.suffix.length}},{key:"getRawValueWithoutPrefixStartPosition",value:function(){return null!=this.value&&this.value<0?this.options.prefix.length+1:this.options.prefix.length}},{key:"removeNumber",value:function(e){var t=this.options,n=t.decimal,i=t.thousands,r=this.inputSelection.selectionEnd,a=this.inputSelection.selectionStart;a>this.rawValue.length-this.options.suffix.length&&(r=this.rawValue.length-this.options.suffix.length,a=this.rawValue.length-this.options.suffix.length),r==a&&(46!=e&&63272!=e||!/^\d+$/.test(this.rawValue.substring(a,r+1))||(r+=1),46!=e&&63272!=e||this.rawValue.substring(a,r+1)!=n&&this.rawValue.substring(a,r+1)!=i||(r+=2,a+=1),8==e&&/^\d+$/.test(this.rawValue.substring(a-1,r))&&(a-=1),8!=e||this.rawValue.substring(a-1,r)!=n&&this.rawValue.substring(a-1,r)!=i||(a-=2,r-=1)),this.rawValue=this.rawValue.substring(0,a)+this.rawValue.substring(r,this.rawValue.length),this.updateFieldValue(a)}},{key:"updateFieldValue",value:function(e){var t=this.applyMask(!1,this.rawValue||"");this.inputManager.updateValueAndCursor(t,this.rawValue.length,e=null==e?this.rawValue.length:e)}},{key:"updateOptions",value:function(e){var t=this.value;this.options=e,this.value=t}},{key:"canInputMoreNumbers",get:function(){return this.inputManager.canInputMoreNumbers}},{key:"inputSelection",get:function(){return this.inputManager.inputSelection}},{key:"rawValue",get:function(){return this.inputManager.rawValue},set:function(e){this.inputManager.rawValue=e}},{key:"storedRawValue",get:function(){return this.inputManager.storedRawValue}},{key:"value",get:function(){return this.clearMask(this.rawValue)},set:function(e){this.rawValue=this.applyMask(!0,""+e)}}]),e}(),k=function(){function e(t,n){_classCallCheck(this,e),this.inputService=new C(t,n),this.htmlInputElement=t}return _createClass(e,[{key:"handleClick",value:function(e,t){0!=Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart)||isNaN(this.inputService.value)||this.inputService.fixCursorPosition(t)}},{key:"handleCut",value:function(e){var t=this;this.isReadOnly()||setTimeout((function(){t.inputService.updateFieldValue(),t.setValue(t.inputService.value),t.onModelChange(t.inputService.value)}),0)}},{key:"handleInput",value:function(e){if(!this.isReadOnly()){var t=this.getNewKeyCode(this.inputService.storedRawValue,this.inputService.rawValue),n=this.inputService.rawValue.length,i=this.inputService.inputSelection.selectionEnd,r=this.inputService.getRawValueWithoutSuffixEndPosition(),a=this.inputService.storedRawValue.length;if(this.inputService.rawValue=this.inputService.storedRawValue,i==r&&1==Math.abs(n-a)||0==a){if(n<a&&(0!=this.inputService.value?this.inputService.removeNumber(8):this.setValue(null)),n>a)switch(t){case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:if(!this.inputService.canInputMoreNumbers||isNaN(this.inputService.value)&&null==String.fromCharCode(t).match(/\d/))return;this.inputService.addNumber(t)}this.setCursorPosition(e),this.onModelChange(this.inputService.value)}else this.setCursorPosition(e)}}},{key:"handleKeydown",value:function(e){if(!this.isReadOnly()){var t=e.which||e.charCode||e.keyCode;if(8==t||46==t||63272==t){e.preventDefault();var n=Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart);n!=this.inputService.rawValue.length&&0!=this.inputService.value||(this.setValue(null),this.onModelChange(this.inputService.value)),0!=n||isNaN(this.inputService.value)||(this.inputService.removeNumber(t),this.onModelChange(this.inputService.value)),8!==t&&46!==t||0==n||isNaN(this.inputService.value)||(this.inputService.removeNumber(t),this.onModelChange(this.inputService.value))}}}},{key:"handleKeypress",value:function(e){if(!this.isReadOnly()){var t=e.which||e.charCode||e.keyCode;if(null!=t&&-1==[9,13].indexOf(t)&&!this.isArrowEndHomeKeyInFirefox(e)){switch(t){case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:!this.inputService.canInputMoreNumbers||isNaN(this.inputService.value)&&null==String.fromCharCode(t).match(/\d/)||this.inputService.addNumber(t)}e.preventDefault(),this.onModelChange(this.inputService.value)}}}},{key:"handleKeyup",value:function(e){this.inputService.fixCursorPosition()}},{key:"handlePaste",value:function(e){var t=this;this.isReadOnly()||setTimeout((function(){t.inputService.updateFieldValue(),t.setValue(t.inputService.value),t.onModelChange(t.inputService.value)}),1)}},{key:"updateOptions",value:function(e){this.inputService.updateOptions(e)}},{key:"getOnModelChange",value:function(){return this.onModelChange}},{key:"setOnModelChange",value:function(e){this.onModelChange=e}},{key:"getOnModelTouched",value:function(){return this.onModelTouched}},{key:"setOnModelTouched",value:function(e){this.onModelTouched=e}},{key:"setValue",value:function(e){this.inputService.value=e}},{key:"getNewKeyCode",value:function(e,t){if(e.length>t.length)return null;for(var n=0;n<t.length;n++)if(e.length==n||e[n]!=t[n])return t.charCodeAt(n)}},{key:"isArrowEndHomeKeyInFirefox",value:function(e){return-1!=[35,36,37,38,39,40].indexOf(e.keyCode)&&(null==e.charCode||0==e.charCode)}},{key:"isReadOnly",value:function(){return this.htmlInputElement&&this.htmlInputElement.readOnly}},{key:"setCursorPosition",value:function(e){var t=this.inputService.getRawValueWithoutSuffixEndPosition();setTimeout((function(){e.target.setSelectionRange(t,t)}),0)}}]),e}(),w={provide:p.g,useExisting:Object(s.S)((function(){return S})),multi:!0},S=((v=f=function(){function e(t,n,i){_classCallCheck(this,e),this.currencyMaskConfig=t,this.elementRef=n,this.keyValueDiffers=i,this.options={},this.optionsTemplate={align:"right",allowNegative:!0,decimal:".",precision:2,prefix:"$ ",suffix:"",thousands:","},t&&(this.optionsTemplate=t),this.keyValueDiffer=i.find({}).create()}return _createClass(e,[{key:"ngAfterViewInit",value:function(){this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align}},{key:"ngDoCheck",value:function(){this.keyValueDiffer.diff(this.options)&&(this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align,this.inputHandler.updateOptions(Object.assign({},this.optionsTemplate,this.options)))}},{key:"ngOnInit",value:function(){this.inputHandler=new k(this.elementRef.nativeElement,Object.assign({},this.optionsTemplate,this.options))}},{key:"handleBlur",value:function(e){this.inputHandler.getOnModelTouched().apply(e)}},{key:"handleClick",value:function(e){this.inputHandler.handleClick(e,this.isChromeAndroid())}},{key:"handleCut",value:function(e){this.isChromeAndroid()||this.inputHandler.handleCut(e)}},{key:"handleInput",value:function(e){this.isChromeAndroid()&&this.inputHandler.handleInput(e)}},{key:"handleKeydown",value:function(e){this.isChromeAndroid()||this.inputHandler.handleKeydown(e)}},{key:"handleKeypress",value:function(e){this.isChromeAndroid()||this.inputHandler.handleKeypress(e)}},{key:"handleKeyup",value:function(e){this.isChromeAndroid()||this.inputHandler.handleKeyup(e)}},{key:"handlePaste",value:function(e){this.isChromeAndroid()||this.inputHandler.handlePaste(e)}},{key:"isChromeAndroid",value:function(){return/chrome/i.test(navigator.userAgent)&&/android/i.test(navigator.userAgent)}},{key:"registerOnChange",value:function(e){this.inputHandler.setOnModelChange(e)}},{key:"registerOnTouched",value:function(e){this.inputHandler.setOnModelTouched(e)}},{key:"setDisabledState",value:function(e){this.elementRef.nativeElement.disabled=e}},{key:"validate",value:function(e){var t={};return e.value>this.max&&(t.max=!0),e.value<this.min&&(t.min=!0),t!={}?t:null}},{key:"writeValue",value:function(e){this.inputHandler.setValue(e)}}]),e}()).\u0275fac=function(e){return new(e||v)(s.Kb(m,8),s.Kb(s.l),s.Kb(s.t))},v.\u0275dir=s.Fb({type:v,selectors:[["","currencyMask",""]],hostBindings:function(e,t){1&e&&s.Yb("blur",(function(e){return t.handleBlur(e)}))("click",(function(e){return t.handleClick(e)}))("cut",(function(e){return t.handleCut(e)}))("input",(function(e){return t.handleInput(e)}))("keydown",(function(e){return t.handleKeydown(e)}))("keypress",(function(e){return t.handleKeypress(e)}))("keyup",(function(e){return t.handleKeyup(e)}))("paste",(function(e){return t.handlePaste(e)}))},inputs:{options:"options",max:"max",min:"min"},features:[s.yb([w,{provide:p.f,useExisting:f,multi:!0}])]}),v),P=((g=function e(){_classCallCheck(this,e)}).\u0275mod=s.Ib({type:g}),g.\u0275inj=s.Hb({factory:function(e){return new(e||g)},imports:[[b.b,p.e]]}),g),V=n("vTEt"),M=["orderForm"];function I(e,t){if(1&e&&(s.Qb(0,"option",7),s.tc(1),s.bc(2,"capitalize"),s.bc(3,"capitalize"),s.Pb()),2&e){var n=t.$implicit;s.gc("ngValue",n.id),s.zb(1),s.wc("",s.cc(2,3,n.firstName)," ",s.cc(3,5,n.lastName),"")}}function O(e,t){if(1&e&&(s.Qb(0,"tr"),s.Qb(1,"td"),s.tc(2),s.Pb(),s.Qb(3,"td",22),s.tc(4),s.bc(5,"currency"),s.Pb(),s.Pb()),2&e){var n=t.$implicit;s.zb(2),s.uc(n.productName),s.zb(2),s.uc(s.dc(5,2,n.itemCost,"USD","symbol"))}}function E(e,t){if(1&e&&(s.Ob(0),s.Qb(1,"table",19),s.sc(2,O,6,6,"tr",20),s.Qb(3,"tr",21),s.Qb(4,"td"),s.tc(5,"\xa0"),s.Pb(),s.Qb(6,"td",22),s.tc(7),s.bc(8,"currency"),s.Pb(),s.Pb(),s.Pb(),s.Nb()),2&e){var n=s.ac(2);s.zb(2),s.gc("ngForOf",n.orders)("ngForTrackBy",n.trackbyService.order),s.zb(5),s.vc("",s.dc(8,3,n.orderTotal,"USD","symbol")," ")}}var x=function(){return{align:"left",precision:2,allowNegative:!1}};function N(e,t){if(1&e){var n=s.Rb();s.Ob(0),s.Qb(1,"div",8),s.Qb(2,"div",9),s.Qb(3,"label"),s.tc(4,"Product Name"),s.Pb(),s.Qb(5,"input",10,11),s.Yb("ngModelChange",(function(e){return s.nc(n),s.ac().order.productName=e})),s.Pb(),s.Qb(7,"div",12),s.tc(8,"Product Name is required "),s.Pb(),s.Pb(),s.Qb(9,"div",9),s.Qb(10,"label"),s.tc(11,"Product Price"),s.Pb(),s.Qb(12,"input",13,14),s.Yb("ngModelChange",(function(e){return s.nc(n),s.ac().order.itemCost=e})),s.Pb(),s.Qb(14,"div",12),s.tc(15,"Product price is required"),s.Pb(),s.Pb(),s.Pb(),s.sc(16,E,9,7,"ng-container",6),s.Qb(17,"div",15),s.Qb(18,"button",16),s.Yb("click",(function(e){return s.nc(n),s.ac().cancel(e)})),s.tc(19,"Cancel"),s.Pb(),s.tc(20,"\xa0 "),s.Qb(21,"button",17),s.Yb("click",(function(){return s.nc(n),s.ac().addItem()})),s.tc(22,"Add Item "),s.Pb(),s.Qb(23,"button",18),s.tc(24,"Insert List "),s.Pb(),s.Pb(),s.Nb()}if(2&e){var i=s.mc(6),r=s.mc(13),a=s.ac(),o=s.mc(2);s.zb(5),s.gc("ngModel",a.order.productName),s.zb(2),s.gc("hidden",i.pristine||i.valid),s.zb(5),s.gc("options",s.ic(8,x))("ngModel",a.order.itemCost),s.zb(2),s.gc("hidden",r.pristine||r.valid),s.zb(2),s.gc("ngIf",a.orders.length),s.zb(5),s.gc("disabled",o.pristine||!o.valid),s.zb(2),s.gc("disabled",0===a.orders.length)}}var Q,T=((Q=function(){function e(t,n,i,r,a,s,o){_classCallCheck(this,e),this.dataService=t,this.router=n,this.modalService=i,this.growler=r,this.logger=a,this.route=s,this.trackbyService=o,this.order={productName:"",itemCost:null},this.orders=[],this.orderTotal=0}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.dataService.getCustomers().subscribe((function(t){e.customers=t,e.updateId()}))}},{key:"ngOnDestroy",value:function(){this.sub.unsubscribe()}},{key:"updateId",value:function(){var e=this;this.sub=this.route.params.subscribe((function(t){var n=+t.id;e.selectedCustomerId=e.customers.map((function(e){return e.id})).includes(n)?n:null}))}},{key:"cancel",value:function(e){e.preventDefault(),this.router.navigate(["/orders"])}},{key:"submit",value:function(){var e=this;this.dataService.inserOrder(this.selectedCustomerId,this.orders).subscribe((function(t){if(t)e.orderForm.form.markAsPristine(),e.growler.growl("Order was added :)",u.a.Info),e.router.navigate(["/orders"]);else{var n="Unable to insert order";e.growler.growl(n,u.a.Danger),e.errorMessage=n}}),(function(t){return e.logger.log(t)}))}},{key:"addItem",value:function(){this.orders.push(this.order),this.orderTotal+=this.order.itemCost,this.order={productName:"",itemCost:null},this.orderForm.controls.productName.reset(),this.orderForm.controls.itemCost.reset()}},{key:"canDeactivate",value:function(){return!this.orderForm.dirty||this.modalService.show({header:"Lose Unsaved Changes?",body:"You have unsaved changes! Would you like to leave the page and lose them?",cancelButtonText:"Cancel",OKButtonText:"Leave"})}}]),e}()).\u0275fac=function(e){return new(e||Q)(s.Kb(l.a),s.Kb(a.b),s.Kb(c.a),s.Kb(u.b),s.Kb(h.a),s.Kb(a.a),s.Kb(d.a))},Q.\u0275cmp=s.Eb({type:Q,selectors:[["cm-order-add"]],viewQuery:function(e,t){var n;1&e&&s.qc(M,!0),2&e&&s.lc(n=s.Zb())&&(t.orderForm=n.first)},decls:12,vars:4,consts:[["novalidate","",1,"customer-form",3,"ngSubmit"],["orderForm","ngForm"],[1,"form-group"],["name","customer","required","",1,"form-control",3,"ngModel","ngModelChange"],["disabled","",3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"ngValue"],[1,"row"],[1,"form-group","col-md-6"],["type","text","name","productName","required","",1,"form-control","prodName",3,"ngModel","ngModelChange"],["productName","ngModel"],[1,"alert","alert-danger",3,"hidden"],["type","text","name","itemCost","ppOnlyNumber","true","currencyMask","","required","",1,"form-control","itemCost",3,"options","ngModel","ngModelChange"],["itemCost","ngModel"],[1,"pull-right"],[1,"btn","btn-default",3,"click"],[1,"btn","btn-primary","add-btn",3,"disabled","click"],["type","submit",1,"btn","btn-success",3,"disabled"],[1,"table","table-striped","table-hover"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"summary-border"],[1,"text-right"]],template:function(e,t){1&e&&(s.Qb(0,"div"),s.Qb(1,"form",0,1),s.Yb("ngSubmit",(function(){return t.submit()})),s.Qb(3,"div",2),s.Qb(4,"label"),s.tc(5,"Customer"),s.Pb(),s.Qb(6,"select",3),s.Yb("ngModelChange",(function(e){return t.selectedCustomerId=e})),s.Qb(7,"option",4),s.tc(8,"Select Customer"),s.Pb(),s.sc(9,I,4,7,"option",5),s.Pb(),s.Pb(),s.sc(10,N,25,9,"ng-container",6),s.Pb(),s.Lb(11,"br"),s.Pb()),2&e&&(s.zb(6),s.gc("ngModel",t.selectedCustomerId),s.zb(1),s.gc("ngValue",0),s.zb(2),s.gc("ngForOf",t.customers),s.zb(1),s.gc("ngIf",t.selectedCustomerId))},directives:[p.r,p.i,p.j,p.o,p.n,p.h,p.k,p.l,p.q,b.k,b.l,p.a,S],pipes:[V.a,b.c],styles:[".customer-form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%}.customer-form[_ngcontent-%COMP%]   .ng-invalid[_ngcontent-%COMP%]{border-left:5px solid #a94442}.customer-form[_ngcontent-%COMP%]   .ng-valid[_ngcontent-%COMP%]{border-left:5px solid #42a948}.pull-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 2px}"]}),Q),R=n("Exvd");function F(e,t){if(1&e&&(s.Qb(0,"tr"),s.Qb(1,"td"),s.tc(2),s.Pb(),s.Qb(3,"td",11),s.tc(4),s.bc(5,"currency"),s.Pb(),s.Pb()),2&e){var n=t.$implicit;s.zb(2),s.uc(n.productName),s.zb(2),s.uc(s.dc(5,2,n.itemCost,"USD","symbol"))}}function _(e,t){if(1&e&&(s.Qb(0,"table",8),s.sc(1,F,6,6,"tr",9),s.Qb(2,"tr",10),s.Qb(3,"td"),s.tc(4,"\xa0"),s.Pb(),s.Qb(5,"td",11),s.tc(6),s.bc(7,"currency"),s.Pb(),s.Pb(),s.Pb()),2&e){var n=s.ac().$implicit,i=s.ac(2);s.zb(1),s.gc("ngForOf",n.orders)("ngForTrackBy",i.trackbyService.order),s.zb(5),s.vc("",s.dc(7,3,n.orderTotal,"USD","symbol")," ")}}function z(e,t){1&e&&(s.Qb(0,"div"),s.tc(1," No orders found "),s.Pb())}function K(e,t){if(1&e){var n=s.Rb();s.Qb(0,"div",4),s.Qb(1,"div",5),s.Qb(2,"h4"),s.tc(3),s.bc(4,"capitalize"),s.bc(5,"capitalize"),s.Pb(),s.Qb(6,"button",6),s.Yb("click",(function(){s.nc(n);var e=t.$implicit;return s.ac(2).router.navigate(["/orders/add",e.id])})),s.tc(7,"Add Order"),s.Pb(),s.Pb(),s.Lb(8,"br"),s.sc(9,_,8,7,"table",7),s.sc(10,z,2,0,"div",1),s.Pb()}if(2&e){var i=t.$implicit;s.zb(3),s.wc("",s.cc(4,4,i.firstName)," ",s.cc(5,6,i.lastName),""),s.zb(6),s.gc("ngIf",i.orders&&i.orders.length),s.zb(1),s.gc("ngIf",!i.orders||!i.orders.length)}}function A(e,t){if(1&e){var n=s.Rb();s.Qb(0,"div"),s.sc(1,K,11,8,"div",2),s.Qb(2,"cm-pagination",3),s.Yb("pageChanged",(function(e){return s.nc(n),s.ac().pageChanged(e)})),s.Pb(),s.Pb()}if(2&e){var i=s.ac();s.zb(1),s.gc("ngForOf",i.customers)("ngForTrackBy",i.trackbyService.customer),s.zb(1),s.gc("hidden",!i.customers)("totalItems",i.totalRecords)("pageSize",i.pageSize)}}function H(e,t){1&e&&(s.Qb(0,"div"),s.tc(1," No customers found "),s.Pb())}var L,D,B,j=((L=function(){function e(t,n,i){_classCallCheck(this,e),this.dataService=t,this.trackbyService=n,this.router=i,this.totalRecords=0,this.pageSize=5}return _createClass(e,[{key:"ngOnInit",value:function(){this.getCustomersPage(1)}},{key:"pageChanged",value:function(e){this.getCustomersPage(e)}},{key:"getCustomersPage",value:function(e){var t=this;this.dataService.getCustomersPage((e-1)*this.pageSize,this.pageSize).subscribe((function(e){t.totalRecords=e.totalRecords,t.customers=e.results}))}}]),e}()).\u0275fac=function(e){return new(e||L)(s.Kb(l.a),s.Kb(d.a),s.Kb(a.b))},L.\u0275cmp=s.Eb({type:L,selectors:[["cm-orders-list"]],decls:3,vars:2,consts:[[1,"container"],[4,"ngIf"],["class","row",4,"ngFor","ngForOf","ngForTrackBy"],[3,"hidden","totalItems","pageSize","pageChanged"],[1,"row"],[1,"flex-row"],[1,"btn","btn-light","btn-sm",3,"click"],["class","table table-striped table-hover orders-table",4,"ngIf"],[1,"table","table-striped","table-hover","orders-table"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"summary-border"],[1,"text-right"]],template:function(e,t){1&e&&(s.Qb(0,"div",0),s.sc(1,A,3,5,"div",1),s.sc(2,H,2,0,"div",1),s.Pb()),2&e&&(s.zb(1),s.gc("ngIf",t.customers),s.zb(1),s.gc("ngIf",!t.customers))},directives:[b.l,b.k,R.a],pipes:[V.a,b.c],styles:[".flex-row[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;width:50%}"]}),L),W=n("uBHf"),Y=n("wNMA"),q=[{path:"",component:o,children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:j},{path:"add/:id",component:T,canActivate:[W.a],canDeactivate:[Y.a]}]}],$=((B=function e(){_classCallCheck(this,e)}).components=[o,T,j],B.\u0275mod=s.Ib({type:B}),B.\u0275inj=s.Hb({factory:function(e){return new(e||B)},providers:[W.a,Y.a],imports:[[a.e.forChild(q)],a.e]}),B),U=((D=function e(){_classCallCheck(this,e)}).\u0275mod=s.Ib({type:D}),D.\u0275inj=s.Hb({factory:function(e){return new(e||D)},imports:[[r.a,$,P]]}),D)}}]);