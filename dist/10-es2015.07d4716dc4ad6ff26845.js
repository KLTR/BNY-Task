(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{h9W5:function(e,t,i){"use strict";i.r(t),i.d(t,"OrdersModule",(function(){return D}));var n=i("PCNd"),r=i("tyNb"),s=i("fXoL");let a=(()=>{class e{constructor(){this.value="list"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Eb({type:e,selectors:[["cm-customers-orders"]],decls:21,vars:0,consts:[[1,"customers","view","indent"],[1,"container"],[1,"glyphicon","glyphicon-folder-open"],[1,"row"],[1,"col-md-10"],[1,"navbar"],[1,"nav","navbar-nav"],[1,"toolbar-item"],["routerLink","/orders/list","routerLinkActive","active"],[1,"glyphicon","glyphicon-align-justify"],["routerLink","/orders/add/0","routerLinkActive","active"],[1,"glyphicon","glyphicon-plus"]],template:function(e,t){1&e&&(s.Qb(0,"div",0),s.Qb(1,"div",1),s.Qb(2,"header"),s.Qb(3,"h3"),s.Lb(4,"span",2),s.tc(5," Orders "),s.Pb(),s.Pb(),s.Lb(6,"br"),s.Qb(7,"div",3),s.Qb(8,"div",4),s.Qb(9,"div",5),s.Qb(10,"ul",6),s.Qb(11,"li",7),s.Qb(12,"a",8),s.Lb(13,"span",9),s.tc(14," List "),s.Pb(),s.Pb(),s.Qb(15,"li",7),s.Qb(16,"a",10),s.Lb(17,"span",11),s.tc(18," New Order "),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(19,"div",1),s.Lb(20,"router-outlet"),s.Pb(),s.Pb(),s.Pb())},directives:[r.d,r.c,r.f],encapsulation:2}),e})();var o=i("+qzk"),l=i("yWAI"),u=i("9nld"),c=i("OsF4"),h=i("MPuK"),d=i("3Pt+"),p=i("ofXK");i("mrSG");let b=new s.q("currency.mask.config");class g{constructor(e){this.htmlInputElement=e}setCursorAt(e){if(this.htmlInputElement.setSelectionRange)this.htmlInputElement.focus(),this.htmlInputElement.setSelectionRange(e,e);else if(this.htmlInputElement.createTextRange){let t=this.htmlInputElement.createTextRange();t.collapse(!0),t.moveEnd("character",e),t.moveStart("character",e),t.select()}}updateValueAndCursor(e,t,i){this.rawValue=e,this.setCursorAt(i-=t-e.length)}get canInputMoreNumbers(){let e=!(this.rawValue.length>=this.htmlInputElement.maxLength&&this.htmlInputElement.maxLength>=0),t=this.inputSelection.selectionStart,i=this.inputSelection.selectionEnd,n=!(t==i||!this.htmlInputElement.value.substring(t,i).match(/\d/)),r="0"==this.htmlInputElement.value.substring(0,1);return e||n||r}get inputSelection(){let e=0,t=0;if("number"==typeof this.htmlInputElement.selectionStart&&"number"==typeof this.htmlInputElement.selectionEnd)e=this.htmlInputElement.selectionStart,t=this.htmlInputElement.selectionEnd;else{let i=document.getSelection().anchorNode;if(i&&i.firstChild==this.htmlInputElement){let i=this.htmlInputElement.value.length,n=this.htmlInputElement.value.replace(/\r\n/g,"\n"),r=this.htmlInputElement.createTextRange(),s=this.htmlInputElement.createTextRange();s.collapse(!1),r.compareEndPoints("StartToEnd",s)>-1?e=t=i:(e=-r.moveStart("character",-i),e+=n.slice(0,e).split("\n").length-1,r.compareEndPoints("EndToEnd",s)>-1?t=i:(t=-r.moveEnd("character",-i),t+=n.slice(0,t).split("\n").length-1))}}return{selectionStart:e,selectionEnd:t}}get rawValue(){return this.htmlInputElement&&this.htmlInputElement.value}set rawValue(e){this._storedRawValue=e,this.htmlInputElement&&(this.htmlInputElement.value=e)}get storedRawValue(){return this._storedRawValue}}class m{constructor(e,t){this.htmlInputElement=e,this.options=t,this.inputManager=new g(e)}addNumber(e){this.rawValue||(this.rawValue=this.applyMask(!1,"0"));let t=String.fromCharCode(e),i=this.inputSelection.selectionStart,n=this.inputSelection.selectionEnd;this.rawValue=this.rawValue.substring(0,i)+t+this.rawValue.substring(n,this.rawValue.length),this.updateFieldValue(i+1)}applyMask(e,t){let{allowNegative:i,decimal:n,precision:r,prefix:s,suffix:a,thousands:o}=this.options,l=(t=e?new Number(t).toFixed(r):t).replace(/[^0-9]/g,"");if(!l)return"";let u=l.slice(0,l.length-r).replace(/^0*/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,o);""==u&&(u="0");let c=u,h=l.slice(l.length-r);r>0&&(h="0".repeat(r-h.length)+h,c+=n+h);let d=0==parseInt(u)&&(0==parseInt(h)||""==h);return(t.indexOf("-")>-1&&i&&!d?"-":"")+s+c+a}clearMask(e){if(null==e||""==e)return null;let t=e.replace(this.options.prefix,"").replace(this.options.suffix,"");return this.options.thousands&&(t=t.replace(new RegExp("\\"+this.options.thousands,"g"),"")),this.options.decimal&&(t=t.replace(this.options.decimal,".")),parseFloat(t)}changeToNegative(){if(this.options.allowNegative&&""!=this.rawValue&&"-"!=this.rawValue.charAt(0)&&0!=this.value){let e=this.inputSelection.selectionStart;this.rawValue="-"+this.rawValue,this.updateFieldValue(e+1)}}changeToPositive(){let e=this.inputSelection.selectionStart;this.rawValue=this.rawValue.replace("-",""),this.updateFieldValue(e-1)}fixCursorPosition(e){let t=this.inputSelection.selectionStart;t>this.getRawValueWithoutSuffixEndPosition()||e?this.inputManager.setCursorAt(this.getRawValueWithoutSuffixEndPosition()):t<this.getRawValueWithoutPrefixStartPosition()&&this.inputManager.setCursorAt(this.getRawValueWithoutPrefixStartPosition())}getRawValueWithoutSuffixEndPosition(){return this.rawValue.length-this.options.suffix.length}getRawValueWithoutPrefixStartPosition(){return null!=this.value&&this.value<0?this.options.prefix.length+1:this.options.prefix.length}removeNumber(e){let{decimal:t,thousands:i}=this.options,n=this.inputSelection.selectionEnd,r=this.inputSelection.selectionStart;r>this.rawValue.length-this.options.suffix.length&&(n=this.rawValue.length-this.options.suffix.length,r=this.rawValue.length-this.options.suffix.length),n==r&&(46!=e&&63272!=e||!/^\d+$/.test(this.rawValue.substring(r,n+1))||(n+=1),46!=e&&63272!=e||this.rawValue.substring(r,n+1)!=t&&this.rawValue.substring(r,n+1)!=i||(n+=2,r+=1),8==e&&/^\d+$/.test(this.rawValue.substring(r-1,n))&&(r-=1),8!=e||this.rawValue.substring(r-1,n)!=t&&this.rawValue.substring(r-1,n)!=i||(r-=2,n-=1)),this.rawValue=this.rawValue.substring(0,r)+this.rawValue.substring(n,this.rawValue.length),this.updateFieldValue(r)}updateFieldValue(e){let t=this.applyMask(!1,this.rawValue||"");this.inputManager.updateValueAndCursor(t,this.rawValue.length,e=null==e?this.rawValue.length:e)}updateOptions(e){let t=this.value;this.options=e,this.value=t}get canInputMoreNumbers(){return this.inputManager.canInputMoreNumbers}get inputSelection(){return this.inputManager.inputSelection}get rawValue(){return this.inputManager.rawValue}set rawValue(e){this.inputManager.rawValue=e}get storedRawValue(){return this.inputManager.storedRawValue}get value(){return this.clearMask(this.rawValue)}set value(e){this.rawValue=this.applyMask(!0,""+e)}}class f{constructor(e,t){this.inputService=new m(e,t),this.htmlInputElement=e}handleClick(e,t){0!=Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart)||isNaN(this.inputService.value)||this.inputService.fixCursorPosition(t)}handleCut(e){this.isReadOnly()||setTimeout(()=>{this.inputService.updateFieldValue(),this.setValue(this.inputService.value),this.onModelChange(this.inputService.value)},0)}handleInput(e){if(this.isReadOnly())return;let t=this.getNewKeyCode(this.inputService.storedRawValue,this.inputService.rawValue),i=this.inputService.rawValue.length,n=this.inputService.inputSelection.selectionEnd,r=this.inputService.getRawValueWithoutSuffixEndPosition(),s=this.inputService.storedRawValue.length;if(this.inputService.rawValue=this.inputService.storedRawValue,n==r&&1==Math.abs(i-s)||0==s){if(i<s&&(0!=this.inputService.value?this.inputService.removeNumber(8):this.setValue(null)),i>s)switch(t){case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:if(!this.inputService.canInputMoreNumbers||isNaN(this.inputService.value)&&null==String.fromCharCode(t).match(/\d/))return;this.inputService.addNumber(t)}this.setCursorPosition(e),this.onModelChange(this.inputService.value)}else this.setCursorPosition(e)}handleKeydown(e){if(this.isReadOnly())return;let t=e.which||e.charCode||e.keyCode;if(8==t||46==t||63272==t){e.preventDefault();let i=Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart);i!=this.inputService.rawValue.length&&0!=this.inputService.value||(this.setValue(null),this.onModelChange(this.inputService.value)),0!=i||isNaN(this.inputService.value)||(this.inputService.removeNumber(t),this.onModelChange(this.inputService.value)),8!==t&&46!==t||0==i||isNaN(this.inputService.value)||(this.inputService.removeNumber(t),this.onModelChange(this.inputService.value))}}handleKeypress(e){if(this.isReadOnly())return;let t=e.which||e.charCode||e.keyCode;if(null!=t&&-1==[9,13].indexOf(t)&&!this.isArrowEndHomeKeyInFirefox(e)){switch(t){case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:!this.inputService.canInputMoreNumbers||isNaN(this.inputService.value)&&null==String.fromCharCode(t).match(/\d/)||this.inputService.addNumber(t)}e.preventDefault(),this.onModelChange(this.inputService.value)}}handleKeyup(e){this.inputService.fixCursorPosition()}handlePaste(e){this.isReadOnly()||setTimeout(()=>{this.inputService.updateFieldValue(),this.setValue(this.inputService.value),this.onModelChange(this.inputService.value)},1)}updateOptions(e){this.inputService.updateOptions(e)}getOnModelChange(){return this.onModelChange}setOnModelChange(e){this.onModelChange=e}getOnModelTouched(){return this.onModelTouched}setOnModelTouched(e){this.onModelTouched=e}setValue(e){this.inputService.value=e}getNewKeyCode(e,t){if(e.length>t.length)return null;for(let i=0;i<t.length;i++)if(e.length==i||e[i]!=t[i])return t.charCodeAt(i)}isArrowEndHomeKeyInFirefox(e){return-1!=[35,36,37,38,39,40].indexOf(e.keyCode)&&(null==e.charCode||0==e.charCode)}isReadOnly(){return this.htmlInputElement&&this.htmlInputElement.readOnly}setCursorPosition(e){let t=this.inputService.getRawValueWithoutSuffixEndPosition();setTimeout((function(){e.target.setSelectionRange(t,t)}),0)}}var v;const S={provide:d.g,useExisting:Object(s.S)(()=>w),multi:!0};let w=(()=>{let e=v=class{constructor(e,t,i){this.currencyMaskConfig=e,this.elementRef=t,this.keyValueDiffers=i,this.options={},this.optionsTemplate={align:"right",allowNegative:!0,decimal:".",precision:2,prefix:"$ ",suffix:"",thousands:","},e&&(this.optionsTemplate=e),this.keyValueDiffer=i.find({}).create()}ngAfterViewInit(){this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align}ngDoCheck(){this.keyValueDiffer.diff(this.options)&&(this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align,this.inputHandler.updateOptions(Object.assign({},this.optionsTemplate,this.options)))}ngOnInit(){this.inputHandler=new f(this.elementRef.nativeElement,Object.assign({},this.optionsTemplate,this.options))}handleBlur(e){this.inputHandler.getOnModelTouched().apply(e)}handleClick(e){this.inputHandler.handleClick(e,this.isChromeAndroid())}handleCut(e){this.isChromeAndroid()||this.inputHandler.handleCut(e)}handleInput(e){this.isChromeAndroid()&&this.inputHandler.handleInput(e)}handleKeydown(e){this.isChromeAndroid()||this.inputHandler.handleKeydown(e)}handleKeypress(e){this.isChromeAndroid()||this.inputHandler.handleKeypress(e)}handleKeyup(e){this.isChromeAndroid()||this.inputHandler.handleKeyup(e)}handlePaste(e){this.isChromeAndroid()||this.inputHandler.handlePaste(e)}isChromeAndroid(){return/chrome/i.test(navigator.userAgent)&&/android/i.test(navigator.userAgent)}registerOnChange(e){this.inputHandler.setOnModelChange(e)}registerOnTouched(e){this.inputHandler.setOnModelTouched(e)}setDisabledState(e){this.elementRef.nativeElement.disabled=e}validate(e){let t={};return e.value>this.max&&(t.max=!0),e.value<this.min&&(t.min=!0),t!={}?t:null}writeValue(e){this.inputHandler.setValue(e)}};return e.\u0275fac=function(t){return new(t||e)(s.Kb(b,8),s.Kb(s.l),s.Kb(s.t))},e.\u0275dir=s.Fb({type:e,selectors:[["","currencyMask",""]],hostBindings:function(e,t){1&e&&s.Yb("blur",(function(e){return t.handleBlur(e)}))("click",(function(e){return t.handleClick(e)}))("cut",(function(e){return t.handleCut(e)}))("input",(function(e){return t.handleInput(e)}))("keydown",(function(e){return t.handleKeydown(e)}))("keypress",(function(e){return t.handleKeypress(e)}))("keyup",(function(e){return t.handleKeyup(e)}))("paste",(function(e){return t.handlePaste(e)}))},inputs:{options:"options",max:"max",min:"min"},features:[s.yb([S,{provide:d.f,useExisting:v,multi:!0}])]}),e})(),C=(()=>{let e=class{};return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[p.b,d.e]]}),e})();var P=i("vTEt");const y=["orderForm"];function V(e,t){if(1&e&&(s.Qb(0,"option",7),s.tc(1),s.bc(2,"capitalize"),s.bc(3,"capitalize"),s.Pb()),2&e){const e=t.$implicit;s.gc("ngValue",e.id),s.zb(1),s.wc("",s.cc(2,3,e.firstName)," ",s.cc(3,5,e.lastName),"")}}function M(e,t){if(1&e&&(s.Qb(0,"tr"),s.Qb(1,"td"),s.tc(2),s.Pb(),s.Qb(3,"td",22),s.tc(4),s.bc(5,"currency"),s.Pb(),s.Pb()),2&e){const e=t.$implicit;s.zb(2),s.uc(e.productName),s.zb(2),s.uc(s.dc(5,2,e.itemCost,"USD","symbol"))}}function I(e,t){if(1&e&&(s.Ob(0),s.Qb(1,"table",19),s.sc(2,M,6,6,"tr",20),s.Qb(3,"tr",21),s.Qb(4,"td"),s.tc(5,"\xa0"),s.Pb(),s.Qb(6,"td",22),s.tc(7),s.bc(8,"currency"),s.Pb(),s.Pb(),s.Pb(),s.Nb()),2&e){const e=s.ac(2);s.zb(2),s.gc("ngForOf",e.orders)("ngForTrackBy",e.trackbyService.order),s.zb(5),s.vc("",s.dc(8,3,e.orderTotal,"USD","symbol")," ")}}const O=function(){return{align:"left",precision:2,allowNegative:!1}};function E(e,t){if(1&e){const e=s.Rb();s.Ob(0),s.Qb(1,"div",8),s.Qb(2,"div",9),s.Qb(3,"label"),s.tc(4,"Product Name"),s.Pb(),s.Qb(5,"input",10,11),s.Yb("ngModelChange",(function(t){return s.nc(e),s.ac().order.productName=t})),s.Pb(),s.Qb(7,"div",12),s.tc(8,"Product Name is required "),s.Pb(),s.Pb(),s.Qb(9,"div",9),s.Qb(10,"label"),s.tc(11,"Product Price"),s.Pb(),s.Qb(12,"input",13,14),s.Yb("ngModelChange",(function(t){return s.nc(e),s.ac().order.itemCost=t})),s.Pb(),s.Qb(14,"div",12),s.tc(15,"Product price is required"),s.Pb(),s.Pb(),s.Pb(),s.sc(16,I,9,7,"ng-container",6),s.Qb(17,"div",15),s.Qb(18,"button",16),s.Yb("click",(function(t){return s.nc(e),s.ac().cancel(t)})),s.tc(19,"Cancel"),s.Pb(),s.tc(20,"\xa0 "),s.Qb(21,"button",17),s.Yb("click",(function(){return s.nc(e),s.ac().addItem()})),s.tc(22,"Add Item "),s.Pb(),s.Qb(23,"button",18),s.tc(24,"Insert List "),s.Pb(),s.Pb(),s.Nb()}if(2&e){const e=s.mc(6),t=s.mc(13),i=s.ac(),n=s.mc(2);s.zb(5),s.gc("ngModel",i.order.productName),s.zb(2),s.gc("hidden",e.pristine||e.valid),s.zb(5),s.gc("options",s.ic(8,O))("ngModel",i.order.itemCost),s.zb(2),s.gc("hidden",t.pristine||t.valid),s.zb(2),s.gc("ngIf",i.orders.length),s.zb(5),s.gc("disabled",n.pristine||!n.valid),s.zb(2),s.gc("disabled",0===i.orders.length)}}let k=(()=>{class e{constructor(e,t,i,n,r,s,a){this.dataService=e,this.router=t,this.modalService=i,this.growler=n,this.logger=r,this.route=s,this.trackbyService=a,this.order={productName:"",itemCost:null},this.orders=[],this.orderTotal=0}ngOnInit(){this.dataService.getCustomers().subscribe(e=>{this.customers=e,this.updateId()})}ngOnDestroy(){this.sub.unsubscribe()}updateId(){this.sub=this.route.params.subscribe(e=>{const t=+e.id;this.selectedCustomerId=this.customers.map(e=>e.id).includes(t)?t:null})}cancel(e){e.preventDefault(),this.router.navigate(["/orders"])}submit(){this.dataService.inserOrder(this.selectedCustomerId,this.orders).subscribe(e=>{if(e)this.orderForm.form.markAsPristine(),this.growler.growl("Order was added :)",o.a.Info),this.router.navigate(["/orders"]);else{const e="Unable to insert order";this.growler.growl(e,o.a.Danger),this.errorMessage=e}},e=>this.logger.log(e))}addItem(){this.orders.push(this.order),this.orderTotal+=this.order.itemCost,this.order={productName:"",itemCost:null},this.orderForm.controls.productName.reset(),this.orderForm.controls.itemCost.reset()}canDeactivate(){return!this.orderForm.dirty||this.modalService.show({header:"Lose Unsaved Changes?",body:"You have unsaved changes! Would you like to leave the page and lose them?",cancelButtonText:"Cancel",OKButtonText:"Leave"})}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(l.a),s.Kb(r.b),s.Kb(u.a),s.Kb(o.b),s.Kb(c.a),s.Kb(r.a),s.Kb(h.a))},e.\u0275cmp=s.Eb({type:e,selectors:[["cm-order-add"]],viewQuery:function(e,t){var i;1&e&&s.qc(y,!0),2&e&&s.lc(i=s.Zb())&&(t.orderForm=i.first)},decls:12,vars:4,consts:[["novalidate","",1,"customer-form",3,"ngSubmit"],["orderForm","ngForm"],[1,"form-group"],["name","customer","required","",1,"form-control",3,"ngModel","ngModelChange"],["disabled","",3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"ngValue"],[1,"row"],[1,"form-group","col-md-6"],["type","text","name","productName","required","",1,"form-control","prodName",3,"ngModel","ngModelChange"],["productName","ngModel"],[1,"alert","alert-danger",3,"hidden"],["type","text","name","itemCost","ppOnlyNumber","true","currencyMask","","required","",1,"form-control","itemCost",3,"options","ngModel","ngModelChange"],["itemCost","ngModel"],[1,"pull-right"],[1,"btn","btn-default",3,"click"],[1,"btn","btn-primary","add-btn",3,"disabled","click"],["type","submit",1,"btn","btn-success",3,"disabled"],[1,"table","table-striped","table-hover"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"summary-border"],[1,"text-right"]],template:function(e,t){1&e&&(s.Qb(0,"div"),s.Qb(1,"form",0,1),s.Yb("ngSubmit",(function(){return t.submit()})),s.Qb(3,"div",2),s.Qb(4,"label"),s.tc(5,"Customer"),s.Pb(),s.Qb(6,"select",3),s.Yb("ngModelChange",(function(e){return t.selectedCustomerId=e})),s.Qb(7,"option",4),s.tc(8,"Select Customer"),s.Pb(),s.sc(9,V,4,7,"option",5),s.Pb(),s.Pb(),s.sc(10,E,25,9,"ng-container",6),s.Pb(),s.Lb(11,"br"),s.Pb()),2&e&&(s.zb(6),s.gc("ngModel",t.selectedCustomerId),s.zb(1),s.gc("ngValue",0),s.zb(2),s.gc("ngForOf",t.customers),s.zb(1),s.gc("ngIf",t.selectedCustomerId))},directives:[d.r,d.i,d.j,d.o,d.n,d.h,d.k,d.l,d.q,p.k,p.l,d.a,w],pipes:[P.a,p.c],styles:[".customer-form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%}.customer-form[_ngcontent-%COMP%]   .ng-invalid[_ngcontent-%COMP%]{border-left:5px solid #a94442}.customer-form[_ngcontent-%COMP%]   .ng-valid[_ngcontent-%COMP%]{border-left:5px solid #42a948}.pull-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 2px}"]}),e})();var x=i("Exvd");function N(e,t){if(1&e&&(s.Qb(0,"tr"),s.Qb(1,"td"),s.tc(2),s.Pb(),s.Qb(3,"td",11),s.tc(4),s.bc(5,"currency"),s.Pb(),s.Pb()),2&e){const e=t.$implicit;s.zb(2),s.uc(e.productName),s.zb(2),s.uc(s.dc(5,2,e.itemCost,"USD","symbol"))}}function Q(e,t){if(1&e&&(s.Qb(0,"table",8),s.sc(1,N,6,6,"tr",9),s.Qb(2,"tr",10),s.Qb(3,"td"),s.tc(4,"\xa0"),s.Pb(),s.Qb(5,"td",11),s.tc(6),s.bc(7,"currency"),s.Pb(),s.Pb(),s.Pb()),2&e){const e=s.ac().$implicit,t=s.ac(2);s.zb(1),s.gc("ngForOf",e.orders)("ngForTrackBy",t.trackbyService.order),s.zb(5),s.vc("",s.dc(7,3,e.orderTotal,"USD","symbol")," ")}}function R(e,t){1&e&&(s.Qb(0,"div"),s.tc(1," No orders found "),s.Pb())}function T(e,t){if(1&e){const e=s.Rb();s.Qb(0,"div",4),s.Qb(1,"div",5),s.Qb(2,"h4"),s.tc(3),s.bc(4,"capitalize"),s.bc(5,"capitalize"),s.Pb(),s.Qb(6,"button",6),s.Yb("click",(function(){s.nc(e);const i=t.$implicit;return s.ac(2).router.navigate(["/orders/add",i.id])})),s.tc(7,"Add Order"),s.Pb(),s.Pb(),s.Lb(8,"br"),s.sc(9,Q,8,7,"table",7),s.sc(10,R,2,0,"div",1),s.Pb()}if(2&e){const e=t.$implicit;s.zb(3),s.wc("",s.cc(4,4,e.firstName)," ",s.cc(5,6,e.lastName),""),s.zb(6),s.gc("ngIf",e.orders&&e.orders.length),s.zb(1),s.gc("ngIf",!e.orders||!e.orders.length)}}function F(e,t){if(1&e){const e=s.Rb();s.Qb(0,"div"),s.sc(1,T,11,8,"div",2),s.Qb(2,"cm-pagination",3),s.Yb("pageChanged",(function(t){return s.nc(e),s.ac().pageChanged(t)})),s.Pb(),s.Pb()}if(2&e){const e=s.ac();s.zb(1),s.gc("ngForOf",e.customers)("ngForTrackBy",e.trackbyService.customer),s.zb(1),s.gc("hidden",!e.customers)("totalItems",e.totalRecords)("pageSize",e.pageSize)}}function z(e,t){1&e&&(s.Qb(0,"div"),s.tc(1," No customers found "),s.Pb())}let K=(()=>{class e{constructor(e,t,i){this.dataService=e,this.trackbyService=t,this.router=i,this.totalRecords=0,this.pageSize=5}ngOnInit(){this.getCustomersPage(1)}pageChanged(e){this.getCustomersPage(e)}getCustomersPage(e){this.dataService.getCustomersPage((e-1)*this.pageSize,this.pageSize).subscribe(e=>{this.totalRecords=e.totalRecords,this.customers=e.results})}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(l.a),s.Kb(h.a),s.Kb(r.b))},e.\u0275cmp=s.Eb({type:e,selectors:[["cm-orders-list"]],decls:3,vars:2,consts:[[1,"container"],[4,"ngIf"],["class","row",4,"ngFor","ngForOf","ngForTrackBy"],[3,"hidden","totalItems","pageSize","pageChanged"],[1,"row"],[1,"flex-row"],[1,"btn","btn-light","btn-sm",3,"click"],["class","table table-striped table-hover orders-table",4,"ngIf"],[1,"table","table-striped","table-hover","orders-table"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"summary-border"],[1,"text-right"]],template:function(e,t){1&e&&(s.Qb(0,"div",0),s.sc(1,F,3,5,"div",1),s.sc(2,z,2,0,"div",1),s.Pb()),2&e&&(s.zb(1),s.gc("ngIf",t.customers),s.zb(1),s.gc("ngIf",!t.customers))},directives:[p.l,p.k,x.a],pipes:[P.a,p.c],styles:[".flex-row[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;width:50%}"]}),e})();var A=i("uBHf"),H=i("wNMA");const L=[{path:"",component:a,children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:K},{path:"add/:id",component:k,canActivate:[A.a],canDeactivate:[H.a]}]}];let _=(()=>{class e{}return e.components=[a,k,K],e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},providers:[A.a,H.a],imports:[[r.e.forChild(L)],r.e]}),e})(),D=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[n.a,_,C]]}),e})()}}]);