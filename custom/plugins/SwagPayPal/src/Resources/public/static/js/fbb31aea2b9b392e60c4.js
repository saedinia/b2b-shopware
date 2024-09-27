(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[367],{1637:function(){},1367:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return t}}),a(2910);var t=Shopware.Component.wrapComponentConfig({template:'{% block sw_first_run_wizard_paypal_credentials %}\n<div class="sw-first-run-wizard-paypal-credentials">\n\n    {% block sw_first_run_wizard_paypal_credentials_inner %}\n        <sw-loader v-if="isLoading" />\n\n        {% block sw_first_run_wizard_paypal_credentials_intro %}\n        <p class="sw-first-run-wizard-paypal-credentials__headerText">\n            {{ $tc(\'swag-paypal-frw-credentials.textIntroPayPal\') }}\n        </p>\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_sandbox %}\n        <sw-switch-field\n            v-model:value="config[\'SwagPayPal.settings.sandbox\']"\n            :label="$tc(\'swag-paypal-frw-credentials.labelSandbox\')"\n            :helpText="$tc(\'swag-paypal-frw-credentials.tooltipSandbox\')"\n        />\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_button_container %}\n        <div class="sw-first-run-wizard-paypal-credentials__button-container">\n\n            {% block sw_first_run_wizard_paypal_credentials_button %}\n            <a\n                class="sw-button sw-button--primary swag-paypal-frw__signup-button"\n                target="_blank"\n                :data-paypal-onboard-complete="onboardingCallback"\n                :href="`${onboardingUrl}`"\n                data-paypal-button="true"\n            >\n                {{ $tc(\'swag-paypal-frw-credentials.buttonGetCredentials\') }}\n            </a>\n            {% endblock %}\n\n            {% block sw_first_run_wizard_paypal_credentials_indicator %}\n            <div class="sw-first-run-wizard-paypal-credentials__indicator">\n                <template v-if="isGetCredentialsSuccessful">\n\n                    {% block sw_first_run_wizard_paypal_credentials_indicator_icon %}\n                    <sw-icon\n                        name="regular-checkmark-s"\n                        class="sw-first-run-wizard-paypal-credentials__icon-successful"\n                    />\n                    {% endblock %}\n\n                    {% block sw_first_run_wizard_paypal_credentials_indicator_text %}\n                    <span class="sw-first-run-wizard-paypal-credentials__text-indicator">\n                        {{ $tc(\'swag-paypal-frw-credentials.textFetchedSuccessful\') }}\n                    </span>\n                    {% endblock %}\n                </template>\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_client_id %}\n        <sw-text-field\n            v-model:value="config[\'SwagPayPal.settings.clientId\']"\n            v-show="!sandboxMode"\n            :label="$tc(\'swag-paypal-frw-credentials.labelClientId\')"\n            @update:value="onCredentialsChanged"\n        />\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_client_secret %}\n        <sw-text-field\n            v-model:value="config[\'SwagPayPal.settings.clientSecret\']"\n            v-show="!sandboxMode"\n            :label="$tc(\'swag-paypal-frw-credentials.labelClientSecret\')"\n            @update:value="onCredentialsChanged"\n        />\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_merchant_id %}\n        <sw-text-field\n            v-model:value="config[\'SwagPayPal.settings.merchantPayerId\']"\n            v-show="!sandboxMode"\n            :label="$tc(\'swag-paypal-frw-credentials.labelMerchantPayerId\')"\n            @update:value="onCredentialsChanged"\n        />\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_client_id_sandbox %}\n        <sw-text-field\n            v-model:value="config[\'SwagPayPal.settings.clientIdSandbox\']"\n            v-show="sandboxMode"\n            :label="$tc(\'swag-paypal-frw-credentials.labelClientIdSandbox\')"\n            @update:value="onCredentialsChanged"\n        />\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_client_secret_sandbox %}\n        <sw-text-field\n            v-model:value="config[\'SwagPayPal.settings.clientSecretSandbox\']"\n            v-show="sandboxMode"\n            :label="$tc(\'swag-paypal-frw-credentials.labelClientSecretSandbox\')"\n            @update:value="onCredentialsChanged"\n        />\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_merchant_id_sandbox %}\n        <sw-text-field\n            v-model:value="config[\'SwagPayPal.settings.merchantPayerIdSandbox\']"\n            v-show="sandboxMode"\n            :label="$tc(\'swag-paypal-frw-credentials.labelMerchantPayerIdSandbox\')"\n            @update:value="onCredentialsChanged"\n        />\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_set_default %}\n        <sw-switch-field\n            v-model:value="setDefault"\n            :disabled="!credentialsProvided"\n            :label="$tc(\'swag-paypal-frw-credentials.labelSetDefault\')"\n            :helpText="$tc(\'swag-paypal-frw-credentials.tooltipSetDefault\')"\n        />\n        {% endblock %}\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["systemConfigApiService","SwagPaypalPaymentMethodService"],mixins:[Shopware.Mixin.getByName("swag-paypal-notification"),Shopware.Mixin.getByName("swag-paypal-credentials-loader")],data(){return{config:{},isLoading:!1,setDefault:!1}},computed:{sandboxMode(){return this.config["SwagPayPal.settings.sandbox"]||!1},onboardingUrl(){return this.sandboxMode?this.onboardingUrlSandbox:this.onboardingUrlLive},onboardingCallback(){return this.sandboxMode?"onboardingCallbackSandbox":"onboardingCallbackLive"},buttonConfig(){return this.$super("buttonConfig").map(e=>("next"===e.key&&(e.action=this.onClickNext.bind(this)),e))},credentialsProvided(){return!this.sandboxMode&&this.credentialsProvidedLive||this.sandboxMode&&this.credentialsProvidedSandbox},credentialsProvidedLive(){return!!this.config["SwagPayPal.settings.clientId"]&&!!this.config["SwagPayPal.settings.clientSecret"]},credentialsProvidedSandbox(){return!!this.config["SwagPayPal.settings.clientIdSandbox"]&&!!this.config["SwagPayPal.settings.clientSecretSandbox"]}},created(){this.createdComponent()},methods:{createdComponent(){this.$super("createdComponent"),this.fetchPayPalConfig()},onPayPalCredentialsLoadSuccess(e,n,a,t){this.setConfig(e,n,a,t)},onPayPalCredentialsLoadFailed(e){this.setConfig("","","",e),this.createNotificationError({message:this.$tc("swag-paypal-frw-credentials.messageFetchedError"),duration:1e4})},setConfig(e,n,a,t){let i=t?"Sandbox":"";this.$set(this.config,`SwagPayPal.settings.clientId${i}`,e),this.$set(this.config,`SwagPayPal.settings.clientSecret${i}`,n),this.$set(this.config,`SwagPayPal.settings.merchantPayerId${i}`,a)},async onClickNext(){if(!this.credentialsProvided)return this.createNotificationError({message:this.$tc("swag-paypal-frw-credentials.messageNoCredentials")}),!0;try{return this.isGetCredentialsSuccessful||await this.testApiCredentials(),await this.saveConfig(),this.$emit("frw-redirect","sw.first.run.wizard.index.plugins"),!1}catch{return!0}},fetchPayPalConfig(){return this.isLoading=!0,this.systemConfigApiService.getValues("SwagPayPal.settings",null).then(e=>{this.config=e}).finally(()=>{this.isLoading=!1})},async saveConfig(){this.isLoading=!0,await this.systemConfigApiService.saveValues(this.config,null),this.setDefault&&await this.SwagPaypalPaymentMethodService.setDefaultPaymentForSalesChannel(),this.isLoading=!1},async testApiCredentials(){this.isLoading=!0;let e=this.config["SwagPayPal.settings.sandbox"]??!1,n=e?"Sandbox":"",a=this.config[`SwagPayPal.settings.clientId${n}`],t=this.config[`SwagPayPal.settings.clientSecret${n}`],i=await this.SwagPayPalApiCredentialsService.validateApiCredentials(a,t,e).catch(e=>(this.createNotificationFromError({errorResponse:e,title:"swag-paypal.settingForm.messageTestError"}),{credentialsValid:!1}));return this.isLoading=!1,i.credentialsValid?Promise.resolve():Promise.reject()},onCredentialsChanged(){this.isGetCredentialsSuccessful=null}}})},2910:function(e,n,a){var t=a(1637);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),a(5346).Z("5e52cf78",t,!0,{})},5346:function(e,n,a){"use strict";function t(e,n){for(var a=[],t={},i=0;i<n.length;i++){var s=n[i],r=s[0],l={id:e+":"+i,css:s[1],media:s[2],sourceMap:s[3]};t[r]?t[r].parts.push(l):a.push(t[r]={id:r,parts:[l]})}return a}a.d(n,{Z:function(){return g}});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},r=i&&(document.head||document.getElementsByTagName("head")[0]),l=null,d=0,o=!1,c=function(){},p=null,u="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(e,n,a,i){o=a,p=i||{};var r=t(e,n);return w(r),function(n){for(var a=[],i=0;i<r.length;i++){var l=s[r[i].id];l.refs--,a.push(l)}n?w(r=t(e,n)):r=[];for(var i=0;i<a.length;i++){var l=a[i];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete s[l.id]}}}}function w(e){for(var n=0;n<e.length;n++){var a=e[n],t=s[a.id];if(t){t.refs++;for(var i=0;i<t.parts.length;i++)t.parts[i](a.parts[i]);for(;i<a.parts.length;i++)t.parts.push(_(a.parts[i]));t.parts.length>a.parts.length&&(t.parts.length=a.parts.length)}else{for(var r=[],i=0;i<a.parts.length;i++)r.push(_(a.parts[i]));s[a.id]={id:a.id,refs:1,parts:r}}}}function h(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function _(e){var n,a,t=document.querySelector("style["+u+'~="'+e.id+'"]');if(t){if(o)return c;t.parentNode.removeChild(t)}if(f){var i=d++;n=y.bind(null,t=l||(l=h()),i,!1),a=y.bind(null,t,i,!0)}else n=v.bind(null,t=h()),a=function(){t.parentNode.removeChild(t)};return n(e),function(t){t?(t.css!==e.css||t.media!==e.media||t.sourceMap!==e.sourceMap)&&n(e=t):a()}}var b=function(){var e=[];return function(n,a){return e[n]=a,e.filter(Boolean).join("\n")}}();function y(e,n,a,t){var i=a?"":t.css;if(e.styleSheet)e.styleSheet.cssText=b(n,i);else{var s=document.createTextNode(i),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(s,r[n]):e.appendChild(s)}}function v(e,n){var a=n.css,t=n.media,i=n.sourceMap;if(t&&e.setAttribute("media",t),p.ssrId&&e.setAttribute(u,n.id),i&&(a+="\n/*# sourceURL="+i.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}}}]);