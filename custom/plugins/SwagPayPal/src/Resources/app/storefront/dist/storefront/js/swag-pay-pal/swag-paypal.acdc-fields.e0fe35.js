"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["swag-paypal.acdc-fields"],{857:e=>{var t=function(e){var t;return!!e&&"object"==typeof e&&"[object RegExp]"!==(t=Object.prototype.toString.call(e))&&"[object Date]"!==t&&e.$$typeof!==r},r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(e,t){return!1!==t.clone&&t.isMergeableObject(e)?a(Array.isArray(e)?[]:{},e,t):e}function n(e,t,r){return e.concat(t).map(function(e){return i(e,r)})}function o(e){return Object.keys(e).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[])}function s(e,t){try{return t in e}catch(e){return!1}}function a(e,r,c){(c=c||{}).arrayMerge=c.arrayMerge||n,c.isMergeableObject=c.isMergeableObject||t,c.cloneUnlessOtherwiseSpecified=i;var l,d,u=Array.isArray(r);return u!==Array.isArray(e)?i(r,c):u?c.arrayMerge(e,r,c):(d={},(l=c).isMergeableObject(e)&&o(e).forEach(function(t){d[t]=i(e[t],l)}),o(r).forEach(function(t){(!s(e,t)||Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))&&(s(e,t)&&l.isMergeableObject(r[t])?d[t]=(function(e,t){if(!t.customMerge)return a;var r=t.customMerge(e);return"function"==typeof r?r:a})(t,l)(e[t],r[t],l):d[t]=i(r[t],l))}),d)}a.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce(function(e,r){return a(e,r,t)},{})},e.exports=a},49:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(140);class n{static isNode(e){return"object"==typeof e&&null!==e&&(e===document||e===window||e instanceof Node)}static hasAttribute(e,t){if(!n.isNode(e))throw Error("The element must be a valid HTML Node!");return"function"==typeof e.hasAttribute&&e.hasAttribute(t)}static getAttribute(e,t){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(r&&!1===n.hasAttribute(e,t))throw Error('The required property "'.concat(t,'" does not exist!'));if("function"!=typeof e.getAttribute){if(r)throw Error("This node doesn't support the getAttribute function!");return}return e.getAttribute(t)}static getDataAttribute(e,t){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=t.replace(/^data(|-)/,""),s=i.Z.toLowerCamelCase(o,"-");if(!n.isNode(e)){if(r)throw Error("The passed node is not a valid HTML Node!");return}if(void 0===e.dataset){if(r)throw Error("This node doesn't support the dataset attribute!");return}let a=e.dataset[s];if(void 0===a){if(r)throw Error('The required data attribute "'.concat(t,'" does not exist on ').concat(e,"!"));return a}return i.Z.parsePrimitive(a)}static querySelector(e,t){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(r&&!n.isNode(e))throw Error("The parent node is not a valid HTML Node!");let i=e.querySelector(t)||!1;if(r&&!1===i)throw Error('The required element "'.concat(t,'" does not exist in parent node!'));return i}static querySelectorAll(e,t){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(r&&!n.isNode(e))throw Error("The parent node is not a valid HTML Node!");let i=e.querySelectorAll(t);if(0===i.length&&(i=!1),r&&!1===i)throw Error('At least one item of "'.concat(t,'" must exist in parent node!'));return i}static getFocusableElements(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return e.querySelectorAll('\n            input:not([tabindex^="-"]):not([disabled]):not([type="hidden"]),\n            select:not([tabindex^="-"]):not([disabled]),\n            textarea:not([tabindex^="-"]):not([disabled]),\n            button:not([tabindex^="-"]):not([disabled]),\n            a[href]:not([tabindex^="-"]):not([disabled]),\n            [tabindex]:not([tabindex^="-"]):not([disabled])\n        ')}static getFirstFocusableElement(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return this.getFocusableElements(e)[0]}static getLastFocusableElement(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=this.getFocusableElements(e);return t[t.length-1]}}},266:(e,t,r)=>{r.d(t,{Z:()=>i});class i{static iterate(e,t){if(e instanceof Map||Array.isArray(e))return e.forEach(t);if(e instanceof FormData){for(var r of e.entries())t(r[1],r[0]);return}if(e instanceof NodeList)return e.forEach(t);if(e instanceof HTMLCollection)return Array.from(e).forEach(t);if(e instanceof Object)return Object.keys(e).forEach(r=>{t(e[r],r)});throw Error("The element type ".concat(typeof e," is not iterable!"))}}},140:(e,t,r)=>{r.d(t,{Z:()=>i});class i{static ucFirst(e){return e.charAt(0).toUpperCase()+e.slice(1)}static lcFirst(e){return e.charAt(0).toLowerCase()+e.slice(1)}static toDashCase(e){return e.replace(/([A-Z])/g,"-$1").replace(/^-/,"").toLowerCase()}static toLowerCamelCase(e,t){let r=i.toUpperCamelCase(e,t);return i.lcFirst(r)}static toUpperCamelCase(e,t){return t?e.split(t).map(e=>i.ucFirst(e.toLowerCase())).join(""):i.ucFirst(e.toLowerCase())}static parsePrimitive(e){try{return/^\d+(.|,)\d+$/.test(e)&&(e=e.replace(",",".")),JSON.parse(e)}catch(t){return e.toString()}}}},293:(e,t,r)=>{r.d(t,{Z:()=>c});var i=r(857),n=r.n(i),o=r(49),s=r(140);class a{publish(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=new CustomEvent(e,{detail:t,cancelable:r});return this.el.dispatchEvent(i),i}subscribe(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this,n=e.split("."),o=r.scope?t.bind(r.scope):t;if(r.once&&!0===r.once){let t=o;o=function(r){i.unsubscribe(e),t(r)}}return this.el.addEventListener(n[0],o),this.listeners.push({splitEventName:n,opts:r,cb:o}),!0}unsubscribe(e){let t=e.split(".");return this.listeners=this.listeners.reduce((e,r)=>([...r.splitEventName].sort().toString()===t.sort().toString()?this.el.removeEventListener(r.splitEventName[0],r.cb):e.push(r),e),[]),!0}reset(){return this.listeners.forEach(e=>{this.el.removeEventListener(e.splitEventName[0],e.cb)}),this.listeners=[],!0}get el(){return this._el}set el(e){this._el=e}get listeners(){return this._listeners}set listeners(e){this._listeners=e}constructor(e=document){this._el=e,e.$emitter=this,this._listeners=[]}}class c{init(){throw Error('The "init" method for the plugin "'.concat(this._pluginName,'" is not defined.'))}update(){}_init(){this._initialized||(this.init(),this._initialized=!0)}_update(){this._initialized&&this.update()}_mergeOptions(e){let t=s.Z.toDashCase(this._pluginName),r=o.Z.getDataAttribute(this.el,"data-".concat(t,"-config"),!1),i=o.Z.getAttribute(this.el,"data-".concat(t,"-options"),!1),a=[this.constructor.options,this.options,e];r&&a.push(window.PluginConfigManager.get(this._pluginName,r));try{i&&a.push(JSON.parse(i))}catch(e){throw console.error(this.el),Error('The data attribute "data-'.concat(t,'-options" could not be parsed to json: ').concat(e.message))}return n().all(a.filter(e=>e instanceof Object&&!(e instanceof Array)).map(e=>e||{}))}_registerInstance(){window.PluginManager.getPluginInstancesFromElement(this.el).set(this._pluginName,this),window.PluginManager.getPlugin(this._pluginName,!1).get("instances").push(this)}_getPluginName(e){return e||(e=this.constructor.name),e}constructor(e,t={},r=!1){if(!o.Z.isNode(e))throw Error("There is no valid element given.");this.el=e,this.$emitter=new a(this.el),this._pluginName=this._getPluginName(r),this.options=this._mergeOptions(t),this._initialized=!1,this._registerInstance(),this._init()}}},107:(e,t,r)=>{r.d(t,{Z:()=>i});class i{get(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json",i=this._createPreparedRequest("GET",e,r);return this._sendRequest(i,null,t)}post(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";i=this._getContentType(t,i);let n=this._createPreparedRequest("POST",e,i);return this._sendRequest(n,t,r)}delete(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";i=this._getContentType(t,i);let n=this._createPreparedRequest("DELETE",e,i);return this._sendRequest(n,t,r)}patch(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";i=this._getContentType(t,i);let n=this._createPreparedRequest("PATCH",e,i);return this._sendRequest(n,t,r)}abort(){if(this._request)return this._request.abort()}setErrorHandlingInternal(e){this._errorHandlingInternal=e}_registerOnLoaded(e,t){t&&(!0===this._errorHandlingInternal?(e.addEventListener("load",()=>{t(e.responseText,e)}),e.addEventListener("abort",()=>{console.warn("the request to ".concat(e.responseURL," was aborted"))}),e.addEventListener("error",()=>{console.warn("the request to ".concat(e.responseURL," failed with status ").concat(e.status))}),e.addEventListener("timeout",()=>{console.warn("the request to ".concat(e.responseURL," timed out"))})):e.addEventListener("loadend",()=>{t(e.responseText,e)}))}_sendRequest(e,t,r){return this._registerOnLoaded(e,r),e.send(t),e}_getContentType(e,t){return e instanceof FormData&&(t=!1),t}_createPreparedRequest(e,t,r){return this._request=new XMLHttpRequest,this._request.open(e,t),this._request.setRequestHeader("X-Requested-With","XMLHttpRequest"),r&&this._request.setRequestHeader("Content-type",r),this._request}constructor(){this._request=null,this._errorHandlingInternal=!1}}},471:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(266);class n{static serialize(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];if("FORM"!==e.nodeName){if(t)throw Error("The passed element is not a form!");return{}}return new FormData(e)}static serializeJson(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=n.serialize(e,t);if(0===Object.keys(r).length)return{};let o={};return i.Z.iterate(r,(e,t)=>o[t]=e),o}}},363:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(266);let n="loader",o={BEFORE:"before",INNER:"inner"};class s{create(){if(!this.exists()){if(this.position===o.INNER){this.parent.innerHTML=s.getTemplate();return}this.parent.insertAdjacentHTML(this._getPosition(),s.getTemplate())}}remove(){let e=this.parent.querySelectorAll(".".concat(n));i.Z.iterate(e,e=>e.remove())}exists(){return this.parent.querySelectorAll(".".concat(n)).length>0}_getPosition(){return this.position===o.BEFORE?"afterbegin":"beforeend"}static getTemplate(){return'<div class="'.concat(n,'" role="status">\n                    <span class="').concat("visually-hidden",'">Loading...</span>\n                </div>')}static SELECTOR_CLASS(){return n}constructor(e,t=o.BEFORE){this.parent=e instanceof Element?e:document.body.querySelector(e),this.position=t}}},551:(e,t,r)=>{r.d(t,{Z:()=>m});var i=r(363);class n{static isTouchDevice(){return"ontouchstart"in document.documentElement}static isIOSDevice(){return n.isIPhoneDevice()||n.isIPadDevice()}static isNativeWindowsBrowser(){return n.isIEBrowser()||n.isEdgeBrowser()}static isIPhoneDevice(){return!!navigator.userAgent.match(/iPhone/i)}static isIPadDevice(){return!!navigator.userAgent.match(/iPad/i)}static isIEBrowser(){return -1!==navigator.userAgent.toLowerCase().indexOf("msie")||!!navigator.userAgent.match(/Trident.*rv:\d+\./)}static isEdgeBrowser(){return!!navigator.userAgent.match(/Edge\/\d+/i)}static getList(){return{"is-touch":n.isTouchDevice(),"is-ios":n.isIOSDevice(),"is-native-windows":n.isNativeWindowsBrowser(),"is-iphone":n.isIPhoneDevice(),"is-ipad":n.isIPadDevice(),"is-ie":n.isIEBrowser(),"is-edge":n.isEdgeBrowser()}}}var o=r(266);let s="modal-backdrop",a="modal-backdrop-open",c="no-scroll",l={ON_CLICK:"backdrop/onclick"};class d{create(e){this._removeExistingBackdrops(),document.body.insertAdjacentHTML("beforeend",this._getTemplate());let t=document.body.lastChild;document.documentElement.classList.add(c),setTimeout(function(){t.classList.add(a),"function"==typeof e&&e()},75),this._dispatchEvents()}remove(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:350,t=this._getBackdrops();o.Z.iterate(t,e=>e.classList.remove(a)),setTimeout(this._removeExistingBackdrops.bind(this),e),document.documentElement.classList.remove(c)}_dispatchEvents(){let e=n.isTouchDevice()?"touchstart":"click";document.addEventListener(e,function(e){e.target.classList.contains(s)&&document.dispatchEvent(new CustomEvent(l.ON_CLICK))})}_getBackdrops(){return document.querySelectorAll(".".concat(s))}_removeExistingBackdrops(){if(!1===this._exists())return;let e=this._getBackdrops();o.Z.iterate(e,e=>e.remove())}_exists(){return document.querySelectorAll(".".concat(s)).length>0}_getTemplate(){return'<div class="'.concat(s,'"></div>')}constructor(){return d.instance||(d.instance=this),d.instance}}let u=Object.freeze(new d);class h{static create(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;u.create(e)}static remove(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:350;u.remove(e)}static SELECTOR_CLASS(){return s}}class p extends i.Z{create(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];!this.exists()&&e&&(h.create(),document.querySelector(".".concat(h.SELECTOR_CLASS())).insertAdjacentHTML("beforeend",i.Z.getTemplate()))}remove(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];super.remove(),e&&h.remove()}constructor(){super(document.body)}}let f=Object.freeze(new p);class m{static create(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];f.create(e)}static remove(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];f.remove(e)}}},689:(e,t,r)=>{r.d(t,{Z:()=>u});var i=r(49),n=r(471),o=r(107),s=r(551),a=r(307),c=r(561);function l(e,t,r){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r||e):n.value}})(e,t,r||e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}class u extends a.Z{init(){if(this.confirmOrderForm=i.Z.querySelector(document,this.options.confirmOrderFormSelector),this.options.preventErrorReload){i.Z.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector).disabled="disabled";return}i.Z.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector).classList.add("d-none"),this._client=new o.Z,this.createScript(e=>{this.render(e)})}render(e){let t=e.Buttons(this.getButtonConfig(this.getFundingSource(e)));if(!t.isEligible())return void this.handleError(this.NOT_ELIGIBLE,!0,"Funding for PayPal button is not eligible (".concat(this.getFundingSource(e),")"));t.render(this.el)}getFundingSource(e){return e.FUNDING.PAYPAL}getButtonConfig(e){return{fundingSource:e,style:{size:this.options.buttonSize,shape:this.options.buttonShape,color:this.options.buttonColor,label:"pay"},createOrder:this.createOrder.bind(this,this.constructor.product),onApprove:this.onApprove.bind(this),onCancel:this.onCancel.bind(this),onClick:this.onClick.bind(this),onError:this.onError.bind(this)}}createOrder(e){let t=n.Z.serialize(this.confirmOrderForm);t.set("product",e);let r=this.options.orderId;return null!==r&&t.set("orderId",r),new Promise((e,r)=>{this._client.post(this.options.createOrderUrl,t,(t,i)=>{i.status>=400&&r(t);try{let r=JSON.parse(t);e(r.token)}catch(e){r(e)}})})}onApprove(e){var t;s.Z.create();let r=document.createElement("input");r.setAttribute("type","hidden"),r.setAttribute("name","paypalOrderId"),r.setAttribute("value",(t=e.orderID)!==null&&void 0!==t?t:e.orderId),this.confirmOrderForm.appendChild(r),i.Z.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector).click()}onClick(e,t){return this.confirmOrderForm.checkValidity()?t.resolve():t.reject()}}u.scriptLoading=new c.Z,u.product="spb",u.options={...l(d(u),"options",u),clientToken:"",buttonColor:null,buttonShape:"sharp",buttonSize:"small",createOrderUrl:"",orderId:null,accountOrderEditFailedUrl:"",accountOrderEditCancelledUrl:"",confirmOrderFormSelector:"#confirmOrderForm",confirmOrderButtonSelector:'button[type="submit"]',preventErrorReload:!1,brandName:""}},40:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var i=r(49),n=r(471),o=r(551),s=r(363);class a extends s.Z{create(){super.create(),this._isButtonElement()?this.parent.disabled=!0:this._isAnchorElement()&&this.parent.classList.add("disabled")}remove(){super.remove(),this._isButtonElement()?this.parent.disabled=!1:this._isAnchorElement()&&this.parent.classList.remove("disabled")}_isButtonElement(){return"button"===this.parent.tagName.toLowerCase()}_isAnchorElement(){return"a"===this.parent.tagName.toLowerCase()}constructor(e,t="before"){if(super(e,t),!this._isButtonElement()&&!this._isAnchorElement())throw Error("Parent element is not of type <button> or <a>")}}var c=r(689),l=r(561);function d(e,t,r){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r||e):n.value}})(e,t,r||e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}class h extends c.Z{render(e){this.cardFieldForm=i.Z.querySelector(document,this.options.cardFieldFormSelector);let t=e.CardFields(this.getFieldConfig());if(t.isEligible())this.cardFieldForm.classList.remove("d-none"),this.renderIndividualFields(t),this.bindFieldActions(t);else{let t=e.Buttons(this.getButtonConfig(e.FUNDING.CARD));if(!t.isEligible())return void this.handleError(this.NOT_ELIGIBLE,!0,"Neither hosted fields nor standalone buttons are eligible");t.render(this.el)}}getFieldConfig(){return{createOrder:this.createOrder.bind(this,"acdc"),onError:this.onError.bind(this),onApprove:this.onApprove.bind(this),style:this.options.cardFieldStyleConfig}}renderIndividualFields(e){this.fields={},this.fields.cardNameField=e.NameField({placeholder:i.Z.querySelector(this.cardFieldForm,this.options.cardNameFieldSelector).dataset.placeholder}),this.fields.cardNameField.render(this.options.cardNameFieldSelector),this.fields.cardNumberField=e.NumberField({placeholder:i.Z.querySelector(this.cardFieldForm,this.options.cardNumberFieldSelector).dataset.placeholder}),this.fields.cardNumberField.render(this.options.cardNumberFieldSelector),this.fields.cardCvvField=e.CVVField({placeholder:i.Z.querySelector(this.cardFieldForm,this.options.cardCvvFieldSelector).dataset.placeholder}),this.fields.cardCvvField.render(this.options.cardCvvFieldSelector),this.fields.cardExpiryField=e.ExpiryField({placeholder:i.Z.querySelector(this.cardFieldForm,this.options.cardExpiryFieldSelector).dataset.placeholder}),this.fields.cardExpiryField.render(this.options.cardExpiryFieldSelector)}bindFieldActions(e){i.Z.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector).classList.remove("d-none"),this.confirmOrderForm.addEventListener("submit",this.onFieldSubmit.bind(this,e)),window.PluginManager.getPluginInstanceFromElement(this.confirmOrderForm,"FormAddHistory").options.entries=[]}onFieldSubmit(e,t){!n.Z.serialize(this.confirmOrderForm).has("paypalOrderId")&&this.confirmOrderForm.checkValidity()&&(t.preventDefault(),t.stopPropagation(),e.getState().then(t=>{var r;if(t.isFormValid){e.submit();return}new a(i.Z.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector)).remove();let n=Object.keys(t.fields).find(e=>!t.fields[e].isValid);(r=this.fields[n])===null||void 0===r||r.focus(),window.scrollTo({top:this.getScrollOffset(i.Z.querySelector(this.cardFieldForm,this.options[n+"Selector"])),behavior:"smooth"})}))}onApprove(e){var t;o.Z.create();let r=document.createElement("input");r.setAttribute("type","hidden"),r.setAttribute("name","paypalOrderId"),r.setAttribute("value",(t=e.orderID)!==null&&void 0!==t?t:e.orderId),this.confirmOrderForm.appendChild(r),this.confirmOrderForm.submit()}getScrollOffset(e){let t=e.getBoundingClientRect().top+window.scrollY-this.options.scrollOffset,r=i.Z.querySelector(document,this.options.fixedHeaderSelector,!1);return r&&(t-=r.getBoundingClientRect().height),t}}h.scriptLoading=new l.Z,h.options={...d(u(h),"options",h),buttonColor:"black",cardFieldFormSelector:"#swag-paypal-acdc-form",cardNumberFieldSelector:"#swag-paypal-acdc-form-cardnumber",cardExpiryFieldSelector:"#swag-paypal-acdc-form-expiration",cardCvvFieldSelector:"#swag-paypal-acdc-form-cvv",cardNameFieldSelector:"#swag-paypal-acdc-form-cardholder",scrollOffset:15,fixedHeaderSelector:"header.fixed-top",validatedStyleClass:"was-validated",cardFieldStyleConfig:{input:{"font-family":'"Inter", sans-serif',"font-size":"0.875rem","font-weight":300,"letter-spacing":"0.03rem",padding:"0.5625rem"},"input::placeholder":{color:"#c3c3c3",opacity:1},body:{padding:0},"input.card-field-number.display-icon":{"padding-left":"calc(2rem + 40px) !important"}}}},307:(e,t,r)=>{r.d(t,{Z:()=>u});var i=r(293);function n(e,t){void 0===t&&(t={});var r=document.createElement("script");return r.src=e,Object.keys(t).forEach(function(e){r.setAttribute(e,t[e]),"data-csp-nonce"===e&&r.setAttribute("nonce",t["data-csp-nonce"])}),r}function o(e,t){if("object"!=typeof e||null===e)throw Error("Expected an options object.");if(void 0!==t&&"function"!=typeof t)throw Error("Expected PromisePonyfill to be a function.")}var s=r(561);let a=["card","bancontact","blik","eps","giropay","ideal","mybank","p24","sepa","sofort","venmo"];class c extends i.Z{_init(){this.options.partOfDomContentLoading||"complete"===document.readyState?super._init():window.addEventListener("load",()=>{super._init()})}get scriptOptionsHash(){return JSON.stringify(this.getScriptOptions())}async createScript(e){var t,r,i;(i=(t=c.scriptPromises)[r=this.scriptOptionsHash])!==null&&void 0!==i||(t[r]=this._loadScript());let n=async()=>{e(await c.scriptPromises[this.scriptOptionsHash])};this.options.scriptAwaitVisibility?await this._awaitVisibility(n):await n(),this._createScriptLegacy(e)}async _awaitVisibility(e){let t=new IntersectionObserver(r=>{let[i]=r;i.isIntersecting&&(t.disconnect(),e())},{rootMargin:"200px"});t.observe(this.el)}async _loadScript(){return await function(e,t){if(void 0===t&&(t=Promise),o(e,t),"undefined"==typeof document)return t.resolve(null);var r,i,s,a,c,l=(i="https://www.paypal.com/sdk/js",e.sdkBaseUrl&&(i=e.sdkBaseUrl,delete e.sdkBaseUrl),a=(s=Object.keys(e).filter(function(t){return void 0!==e[t]&&null!==e[t]&&""!==e[t]}).reduce(function(t,r){var i=e[r].toString();return"data"===(r=r.replace(/[A-Z]+(?![a-z])|[A-Z]/g,function(e,t){return(t?"-":"")+e.toLowerCase()})).substring(0,4)||"crossorigin"===r?t.attributes[r]=i:t.queryParams[r]=i,t},{queryParams:{},attributes:{}})).queryParams,c=s.attributes,a["merchant-id"]&&-1!==a["merchant-id"].indexOf(",")&&(c["data-merchant-id"]=a["merchant-id"],a["merchant-id"]="*"),{url:"".concat(i,"?").concat((r="",Object.keys(a).forEach(function(e){0!==r.length&&(r+="&"),r+=e+"="+a[e]}),r)),attributes:c}),d=l.url,u=l.attributes,h=u["data-namespace"]||"paypal",p=window[h];return(u["data-js-sdk-library"]||(u["data-js-sdk-library"]="paypal-js"),/*!
 * paypal-js v8.0.5 (2024-04-16T22:14:11.318Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){var r=document.querySelector('script[src="'.concat(e,'"]'));if(null===r)return null;var i=n(e,t),o=r.cloneNode();if(delete o.dataset.uidAuto,Object.keys(o.dataset).length!==Object.keys(i.dataset).length)return null;var s=!0;return Object.keys(o.dataset).forEach(function(e){o.dataset[e]!==i.dataset[e]&&(s=!1)}),s?r:null}(d,u)&&p)?t.resolve(p):(function(e,t){void 0===t&&(t=Promise),o(e,t);var r=e.url,i=e.attributes;if("string"!=typeof r||0===r.length)throw Error("Invalid url.");if(void 0!==i&&"object"!=typeof i)throw Error("Expected attributes to be an object.");return new t(function(e,t){var o,s,a,c,l,d;if("undefined"==typeof document)return e();s=(o={url:r,attributes:i,onSuccess:function(){return e()},onError:function(){return t(Error('The script "'.concat(r,'" failed to load. Check the HTTP status code and response body in DevTools to learn more.')))}}).url,a=o.attributes,c=o.onSuccess,l=o.onError,(d=n(s,a)).onerror=l,d.onload=c,document.head.insertBefore(d,document.head.firstElementChild)})})({url:d,attributes:u},t).then(function(){var e=window[h];if(e)return e;throw Error("The window.".concat(h," global variable is not available."))})}(this.getScriptOptions()),c.paypal[this.scriptOptionsHash]=window.paypal,c.paypal[this.scriptOptionsHash]}getScriptOptions(){let e={components:"buttons,messages,card-fields,funding-eligibility,applepay,googlepay","client-id":this.options.clientId,commit:!!this.options.commit,locale:this.options.languageIso,currency:this.options.currency,intent:this.options.intent,"enable-funding":"paylater,venmo"};return(this.options.disablePayLater||!1===this.options.showPayLater)&&(e["enable-funding"]="venmo"),!1===this.options.useAlternativePaymentMethods?e["disable-funding"]=a.join(","):Array.isArray(this.options.disabledAlternativePaymentMethods)&&(e["disable-funding"]=this.options.disabledAlternativePaymentMethods.join(",")),this.options.merchantPayerId&&(e["merchant-id"]=this.options.merchantPayerId),this.options.clientToken&&(e["data-client-token"]=this.options.clientToken),this.options.userIdToken&&(e["data-user-id-token"]=this.options.userIdToken),this.options.partnerAttributionId&&(e["data-partner-attribution-id"]=this.options.partnerAttributionId),e}callCallbacks(){this.constructor.scriptLoading.callbacks.forEach(e=>{c.scriptPromises[this.scriptOptionsHash].then(t=>e.call(this,t))})}_createScriptLegacy(e){this.constructor.scriptLoading.callbacks.push(e)}}function l(e,t,r){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r||e):n.value}})(e,t,r||e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}c.scriptLoading=new s.Z,c.options={clientId:"",merchantPayerId:"",partnerAttributionId:"",currency:"EUR",intent:"capture",commit:!0,languageIso:"en_GB",scriptAwaitVisibility:!1,partOfDomContentLoading:!0},c.scriptPromises={},c.paypal={};class u extends c{handleError(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;r&&"string"!=typeof r&&(r=String(r));let i=this._extractErrorCode(r);if(i&&(e=i),!this.options.handleErrorUrl){console.error("PayPal ".concat(t?"fatal ":"","error occurred: ").concat(e," - ").concat(String(null!=r?r:"")));return}this._client.post(this.options.handleErrorUrl,JSON.stringify({code:e,error:r,fatal:t}),()=>{this.onErrorHandled(e,t,r)})}onErrorHandled(e,t,r){window.scrollTo(0,0),window.location.reload()}onFatalError(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;this.handleError(this.GENERIC_ERROR,!0,e)}onError(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;this.handleError(this.GENERIC_ERROR,!1,e)}onCancel(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;this.handleError(this.USER_CANCELLED,!1,e)}createError(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=this.options.addErrorUrl;if(this.options.accountOrderEditCancelledUrl&&this.options.accountOrderEditFailedUrl){window.location="cancel"===e?this.options.accountOrderEditCancelledUrl:this.options.accountOrderEditFailedUrl;return}t&&"string"!=typeof t&&(t=String(t)),this._client.post(i,JSON.stringify({error:t,type:e}),()=>{if(r){window.location=r;return}window.onbeforeunload=()=>{window.scrollTo(0,0)},window.location.reload()})}_extractErrorCode(e){try{var t;let r=(t=JSON.parse(e))===null||void 0===t?void 0:t.errors;if(!Array.isArray(r))return null;for(let e of r)if("object"==typeof e&&"string"==typeof e.code)return e.code}catch(e){}return null}constructor(...e){super(...e),this.GENERIC_ERROR="SWAG_PAYPAL__GENERIC_ERROR",this.NOT_ELIGIBLE="SWAG_PAYPAL__NOT_ELIGIBLE",this.USER_CANCELLED="SWAG_PAYPAL__USER_CANCELLED",this.BROWSER_UNSUPPORTED="SWAG_PAYPAL__BROWSER_UNSUPPORTED"}}u.options={...l(d(u),"options",u),addErrorUrl:"",handleErrorUrl:""}},561:(e,t,r)=>{r.d(t,{Z:()=>i});class i{constructor(){this.loadingScript=!1,this.paypal=null,this.callbacks=[]}}}}]);