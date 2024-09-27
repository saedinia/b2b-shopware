"use strict";(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[420],{4420:function(e,n,a){a.r(n),a.d(n,{default:function(){return r}});var t=a(5662);let{Criteria:l}=Shopware.Data;var r=Shopware.Component.wrapComponentConfig({template:'{% block swag_paypal_content_card_channel_config_behavior %}\n<sw-card\n    position-identifier="swag-paypal-card-channel-config-behavior"\n    :title="$tc(\'swag-paypal.settingForm.behavior.cardTitle\')"\n>\n\n    {% block swag_paypal_content_card_channel_config_behavior_settings %}\n    <div v-if="actualConfigData" class="swag-paypal-settings-behavior-field">\n\n        {# @deprecated tag:v10.0.0 - Will be removed without replacement #}\n        {% block swag_paypal_content_card_channel_config_behavior_settings_merchant_location %}\n        <sw-inherit-wrapper\n            v-if="showMerchantLocation"\n            v-model:value="actualConfigData[\'SwagPayPal.settings.merchantLocation\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.merchantLocation\']"\n            :customInheritationCheckFunction="checkTextFieldInheritance"\n            :label="$tc(\'swag-paypal.settingForm.behavior.merchantLocation.label\')"\n        >\n            <template #content="props">\n                <sw-single-select\n                    name="SwagPayPal.settings.merchantLocation"\n                    labelProperty="name"\n                    valueProperty="id"\n                    :options="merchantLocationOptions"\n                    :isInherited="props.isInherited"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_behavior_settings_intent %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.intent\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.intent\']"\n            :customInheritationCheckFunction="checkTextFieldInheritance"\n            :label="$tc(\'swag-paypal.settingForm.behavior.intent.label\')"\n        >\n            <template #content="props">\n                <sw-single-select\n                    name="SwagPayPal.settings.intent"\n                    labelProperty="name"\n                    valueProperty="id"\n                    :options="intentOptions"\n                    :isInherited="props.isInherited"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_behavior_settings_submit_cart %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.submitCart\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.submitCart\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.submitCart"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.behavior.submitCart.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.behavior.submitCart.helpText\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_behavior_settings_brand_name %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.brandName\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.brandName\']"\n            :customInheritationCheckFunction="checkTextFieldInheritance"\n        >\n            <template #content="props">\n                <sw-text-field\n                    name="SwagPayPal.settings.brandName"\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.behavior.brandName.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.behavior.brandName.tooltipText\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_behavior_settings_landing_page %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.landingPage\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.landingPage\']"\n            :customInheritationCheckFunction="checkTextFieldInheritance"\n            :label="$tc(\'swag-paypal.settingForm.behavior.landingPage.label\')"\n        >\n            <template #content="props">\n                <sw-single-select\n                    name="SwagPayPal.settings.landingPage"\n                    labelProperty="name"\n                    valueProperty="id"\n                    :options="landingPageOptions"\n                    :isInherited="props.isInherited"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n\n                {% block swag_paypal_content_card_channel_config_behaviour_settings_landing_page_hint %}\n                <swag-paypal-settings-hint :hintText="landingPageHint"/>\n                {% endblock %}\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_behavior_settings_send_order_number %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.sendOrderNumber\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.sendOrderNumber\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.sendOrderNumber"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.behavior.sendOrderNumber.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.behavior.sendOrderNumber.helpText\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n\n        {% block swag_paypal_content_card_channel_config_behavior_settings_order_number %}\n        <sw-container columns="1fr 1fr" gap="0px 30px">\n\n            {% block swag_paypal_content_card_channel_config_behavior_settings_order_number_prefix %}\n            <sw-inherit-wrapper\n                v-model:value="actualConfigData[\'SwagPayPal.settings.orderNumberPrefix\']"\n                :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.orderNumberPrefix\']"\n                :customInheritationCheckFunction="checkTextFieldInheritance"\n            >\n                <template #content="props">\n                    <sw-text-field\n                        name="SwagPayPal.settings.orderNumberPrefix"\n                        :mapInheritance="props"\n                        :label="$tc(\'swag-paypal.settingForm.behavior.orderNumberPrefix.label\')"\n                        :helpText="$tc(\'swag-paypal.settingForm.behavior.orderNumberPrefix.tooltipText\')"\n                        :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                        :value="props.currentValue"\n                        @update:value="props.updateCurrentValue"\n                    />\n                </template>\n            </sw-inherit-wrapper>\n            {% endblock %}\n\n            {% block swag_paypal_content_card_channel_config_behavior_settings_order_number_suffix %}\n            <sw-inherit-wrapper\n                v-model:value="actualConfigData[\'SwagPayPal.settings.orderNumberSuffix\']"\n                :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.orderNumberSuffix\']"\n                :customInheritationCheckFunction="checkTextFieldInheritance"\n            >\n                <template #content="props">\n                    <sw-text-field\n                        name="SwagPayPal.settings.orderNumberSuffix"\n                        :mapInheritance="props"\n                        :label="$tc(\'swag-paypal.settingForm.behavior.orderNumberSuffix.label\')"\n                        :helpText="$tc(\'swag-paypal.settingForm.behavior.orderNumberSuffix.tooltipText\')"\n                        :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                        :value="props.currentValue"\n                        @update:value="props.updateCurrentValue"\n                    />\n                </template>\n            </sw-inherit-wrapper>\n            {% endblock %}\n\n        </sw-container>\n        {% endblock %}\n\n                {% block swag_paypal_content_card_channel_config_behavior_settings_excluded_product_ids %}\n                    <sw-inherit-wrapper\n                        v-model:value="actualConfigData[\'SwagPayPal.settings.excludedProductIds\']"\n                        :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.excludedProductIds\']"\n                        :customInheritationCheckFunction="checkArrayFieldInheritance"\n                        :label="$tc(\'swag-paypal.settingForm.behavior.excludedProductIds.label\')"\n                        :helpText="$tc(\'swag-paypal.settingForm.behavior.excludedProductIds.tooltipText\')"\n                    >\n                        <template #content="props">\n                            <sw-entity-multi-id-select\n                                name="SwagPayPal.settings.excludedProductIds"\n                                :repository="productRepository"\n                                :criteria="excludedProductCriteria"\n                                :mapInheritance="props"\n                                :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                                :value="props.currentValue"\n                                @update:value="props.updateCurrentValue"\n                            >\n\n                    {% block swag_paypal_content_card_channel_config_behavior_settings_excluded_product_ids_label_property %}\n                    <template #selection-label-property="{ item }">\n                        <sw-product-variant-info\n                            :variations="item.variation"\n                        >\n                            {{ item.translated.name || item.name }}\n                        </sw-product-variant-info>\n                    </template>\n                    {% endblock %}\n\n                    {% block swag_paypal_content_card_channel_config_behavior_settings_excluded_product_ids_result_label_property %}\n                    <template #result-label-property="{ item, searchTerm, highlightSearchTerm }">\n                        <sw-product-variant-info\n                            :variations="item.variation"\n                        >\n                            {{ item.translated.name || item.name }}\n                        </sw-product-variant-info>\n                    </template>\n                    {% endblock %}\n\n                </sw-entity-multi-id-select>\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n                {% block swag_paypal_content_card_channel_config_behavior_settings_excluded_product_streams_ids %}\n                    <sw-inherit-wrapper\n                        v-model:value="actualConfigData[\'SwagPayPal.settings.excludedProductStreamIds\']"\n                        :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.excludedProductStreamIds\']"\n                        :customInheritationCheckFunction="checkArrayFieldInheritance"\n                        :label="$tc(\'swag-paypal.settingForm.behavior.excludedProductStreamIds.label\')"\n                        :helpText="$tc(\'swag-paypal.settingForm.behavior.excludedProductStreamIds.tooltipText\')"\n                    >\n                        <template #content="props">\n                            <sw-entity-multi-id-select\n                                name="SwagPayPal.settings.excludedProductStreamIds"\n                                :repository="productStreamRepository"\n                                :mapInheritance="props"\n                                :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                                :value="props.currentValue"\n                                @update:value="props.updateCurrentValue"\n                            ></sw-entity-multi-id-select>\n                        </template>\n                    </sw-inherit-wrapper>\n                {% endblock %}\n\n    </div>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["repositoryFactory","acl"],props:{actualConfigData:{type:Object,required:!0,default:()=>({null:{}})},allConfigs:{type:Object,required:!0},selectedSalesChannelId:{type:String,required:!1,default:null}},data(){return{...t.ZP}},computed:{intentOptions(){return[{id:"CAPTURE",name:this.$tc("swag-paypal.settingForm.behavior.intent.CAPTURE")},{id:"AUTHORIZE",name:this.$tc("swag-paypal.settingForm.behavior.intent.AUTHORIZE")}]},merchantLocationOptions(){return[{id:this.MERCHANT_LOCATION_GERMANY,name:this.$tc("swag-paypal.settingForm.behavior.merchantLocation.germany")},{id:this.MERCHANT_LOCATION_OTHER,name:this.$tc("swag-paypal.settingForm.behavior.merchantLocation.other")}]},showMerchantLocation(){return this.actualConfigData["SwagPayPal.settings.plusCheckoutEnabled"]??this.allConfigs?.null?.["SwagPayPal.settings.plusCheckoutEnabled"]},landingPageOptions(){return[{id:"LOGIN",name:this.$tc("swag-paypal.settingForm.behavior.landingPage.options.login")},{id:"GUEST_CHECKOUT",name:this.$tc("swag-paypal.settingForm.behavior.landingPage.options.guest_checkout")},{id:"NO_PREFERENCE",name:this.$tc("swag-paypal.settingForm.behavior.landingPage.options.no_preference")}]},landingPageHint(){let e=this.actualConfigData["SwagPayPal.settings.landingPage"]||"NO_PREFERENCE",n=`swag-paypal.settingForm.behavior.landingPage.helpText.${e.toLowerCase()}`;return this.$tc(n)},productRepository(){return this.repositoryFactory.create("product")},productStreamRepository(){return this.repositoryFactory.create("product_stream")},excludedProductCriteria(){let e=new l(1,25);return e.addAssociation("options.group"),e}},methods:{checkTextFieldInheritance(e){return"string"!=typeof e||e.length<=0},checkArrayFieldInheritance(e){return!Array.isArray(e)||e.length<=0},checkBoolFieldInheritance(e){return"boolean"!=typeof e}}})},5662:function(e,n,a){n.ZP={MERCHANT_LOCATION_GERMANY:"germany",MERCHANT_LOCATION_OTHER:"other"}}}]);