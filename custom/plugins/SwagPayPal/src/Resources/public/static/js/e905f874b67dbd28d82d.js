(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[198],{4650:function(){},3198:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}}),t(6973);var a=Shopware.Component.wrapComponentConfig({template:'{# @deprecated tag:v10.0.0 - Will be removed without replacement #}\n{% block swag_paypal_content_card_channel_config_plus %}\n<sw-card\n    position-identifier="swag-paypal-card-channel-config-plus"\n    :title="$tc(\'swag-paypal.settingForm.plus.cardTitle\')"\n>\n\n    {# @deprecated tag:v10.0.0 - Will be removed without replacement #}\n    {% block swag_paypal_content_card_channel_config_plus_settings %}\n    <div v-if="actualConfigData" class="swag-paypal-settings-plus-fields">\n\n        {# @deprecated tag:v10.0.0 - Will be removed without replacement #}\n        {% block swag_paypal_content_card_channel_config_plus_settings_warning %}\n        <template v-if="isPayPalPLUSActive">\n            <sw-alert variant="warning">\n                <span v-html="$tc(\'swag-paypal.settingForm.plus.warning.active\')"/>\n            </sw-alert>\n        </template>\n\n        <template v-if="isPayPalPLUSInActive">\n            <sw-alert variant="info">\n                <span v-html="$tc(\'swag-paypal.settingForm.plus.warning.inactive\')"/>\n            </sw-alert>\n        </template>\n        {% endblock %}\n\n        {# @deprecated tag:v10.0.0 - Will be removed without replacement #}\n        {% block swag_paypal_content_card_channel_config_plus_settings_onboarding %}\n        <p\n            v-bind:class="{ \'swag-paypal-payal-plus-disabled\': isPayPalPLUSInActive}"\n            v-html="$tc(\'swag-paypal.settingForm.plus.introduction\')"\n        />\n        {% endblock %}\n\n        {# @deprecated tag:v10.0.0 - Will be removed without replacement #}\n        {% block swag_paypal_content_card_channel_config_plus_settings_checkout_enabled %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.plusCheckoutEnabled\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.plusCheckoutEnabled\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.plusCheckoutEnabled"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.plus.plusCheckoutEnabled.label\')"\n                    :disabled="ifItWasNotActive() || props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n\n                {# @deprecated tag:v10.0.0 - Will be removed without replacement #}\n                {% block swag_paypal_content_card_channel_config_behaviour_settings_intent_hint %}\n                <swag-paypal-settings-hint :hintText="$tc(\'swag-paypal.settingForm.plus.hint\')"/>\n                {% endblock %}\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["acl"],props:{actualConfigData:{type:Object,required:!0,default:()=>({})},allConfigs:{type:Object,required:!0},selectedSalesChannelId:{type:String,required:!1,default:null}},computed:{isPayPalPLUSActive(){return this.actualConfigData["SwagPayPal.settings.plusCheckoutEnabled"]},isPayPalPLUSInActive(){return!this.isPayPalPLUSActive}},methods:{checkTextFieldInheritance(e){return"string"!=typeof e||e.length<=0},checkBoolFieldInheritance(e){return"boolean"!=typeof e},ifItWasNotActive(){return!this.actualConfigData["SwagPayPal.settings.plusCheckoutEnabled"]}}})},6973:function(e,n,t){var a=t(4650);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),t(5346).Z("033b7527",a,!0,{})},5346:function(e,n,t){"use strict";function a(e,n){for(var t=[],a={},l=0;l<n.length;l++){var r=n[l],i=r[0],s={id:e+":"+l,css:r[1],media:r[2],sourceMap:r[3]};a[i]?a[i].parts.push(s):t.push(a[i]={id:i,parts:[s]})}return t}t.d(n,{Z:function(){return h}});var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},i=l&&(document.head||document.getElementsByTagName("head")[0]),s=null,o=0,c=!1,p=function(){},d=null,u="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,n,t,l){c=t,d=l||{};var i=a(e,n);return f(i),function(n){for(var t=[],l=0;l<i.length;l++){var s=r[i[l].id];s.refs--,t.push(s)}n?f(i=a(e,n)):i=[];for(var l=0;l<t.length;l++){var s=t[l];if(0===s.refs){for(var o=0;o<s.parts.length;o++)s.parts[o]();delete r[s.id]}}}}function f(e){for(var n=0;n<e.length;n++){var t=e[n],a=r[t.id];if(a){a.refs++;for(var l=0;l<a.parts.length;l++)a.parts[l](t.parts[l]);for(;l<t.parts.length;l++)a.parts.push(m(t.parts[l]));a.parts.length>t.parts.length&&(a.parts.length=t.parts.length)}else{for(var i=[],l=0;l<t.parts.length;l++)i.push(m(t.parts[l]));r[t.id]={id:t.id,refs:1,parts:i}}}}function v(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function m(e){var n,t,a=document.querySelector("style["+u+'~="'+e.id+'"]');if(a){if(c)return p;a.parentNode.removeChild(a)}if(g){var l=o++;n=y.bind(null,a=s||(s=v()),l,!1),t=y.bind(null,a,l,!0)}else n=b.bind(null,a=v()),t=function(){a.parentNode.removeChild(a)};return n(e),function(a){a?(a.css!==e.css||a.media!==e.media||a.sourceMap!==e.sourceMap)&&n(e=a):t()}}var w=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function y(e,n,t,a){var l=t?"":a.css;if(e.styleSheet)e.styleSheet.cssText=w(n,l);else{var r=document.createTextNode(l),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(r,i[n]):e.appendChild(r)}}function b(e,n){var t=n.css,a=n.media,l=n.sourceMap;if(a&&e.setAttribute("media",a),d.ssrId&&e.setAttribute(u,n.id),l&&(t+="\n/*# sourceURL="+l.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}}]);