(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d36146a"],{"4b4f":function(e,t,s){},b0c0:function(e,t,s){var i=s("83ab"),a=s("9bf2").f,o=Function.prototype,r=o.toString,l=/^\s*function ([^ (]*)/,n="name";i&&!(n in o)&&a(o,n,{configurable:!0,get:function(){try{return r.call(this).match(l)[1]}catch(e){return""}}})},c051:function(e,t,s){"use strict";var i=s("4b4f"),a=s.n(i);a.a},ec96:function(e,t,s){e.exports=s.p+"img/product.b53a98c4.png"},ed7d:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"test-page"},[e._m(0),e._l(e.tableCount,(function(t,i){return s("div",{key:i,staticClass:"item"},[s("div",{staticClass:"block"},[s("span",{staticClass:"demonstration"},[e._v("*产品信息")]),s("el-carousel",{attrs:{trigger:"click",height:e.bannerHeight+"px"}},e._l(t.list,(function(e,t){return s("el-carousel-item",{key:t},[s("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.img}})])})),1)],1),s("div",{staticClass:"items"},[s("span",{staticClass:"demonstration"},[e._v("*产品套餐")]),s("div",{staticClass:"transition"},[s("el-row",{staticClass:"transition-box",attrs:{gutter:12}},[e._l(t.cards,(function(t,i){return s("el-col",{key:i,attrs:{span:8}},[s("el-card",{attrs:{shadow:"hover"}},[s("div",{staticClass:"text item",staticStyle:{"line-height":"70px"}},[s("p",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(t.title))]),s("p",{staticStyle:{"text-indent":"2em"}},[e._v(e._s(t.year))]),s("p",{staticStyle:{"text-indent":"2em"}},[e._v("特点:"+e._s(t.features))]),s("span",[e._v("￥"+e._s(t.money)+"元 / 年 ")]),s("el-select",{directives:[{name:"show",rawName:"v-show",value:t.type,expression:"item.type"}],staticStyle:{width:"65px"},attrs:{placeholder:"请选择",size:"mini"},model:{value:t.key,callback:function(s){e.$set(t,"key",s)},expression:"item.key"}},e._l(e.options,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),s("span",{directives:[{name:"show",rawName:"v-show",value:t.type,expression:"item.type"}]},[e._v(" 年")])],1),s("div",{staticClass:"bottom"},[s("el-button",{staticClass:"button",attrs:{type:"success"},on:{click:e.addClick}},[e._v("加入购物车")]),s("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(s){return e.buyClick(t)}}},[e._v("立即购买")])],1)])],1)})),s("el-dialog",{attrs:{title:"首次购买的需完善相关信息:",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[s("el-form",{attrs:{model:e.form,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"企业名称:",required:!0}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),s("el-form-item",{attrs:{label:"注册地址:",required:!0}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.registeredAddress,callback:function(t){e.$set(e.form,"registeredAddress",t)},expression:"form.registeredAddress"}})],1),s("el-form-item",{attrs:{label:"公司地址:",required:!0}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.companyAddress,callback:function(t){e.$set(e.form,"companyAddress",t)},expression:"form.companyAddress"}})],1),s("el-form-item",{attrs:{label:"联系方式:",required:!0}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),s("el-form-item",{attrs:{label:"开户银行:",required:!0}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.bank,callback:function(t){e.$set(e.form,"bank",t)},expression:"form.bank"}})],1),s("el-form-item",{attrs:{label:"开户账号:",required:!0}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.accountNumber,callback:function(t){e.$set(e.form,"accountNumber",t)},expression:"form.accountNumber"}})],1),s("el-form-item",{attrs:{label:"纳税识别号:",required:!0}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.payTaxes,callback:function(t){e.$set(e.form,"payTaxes",t)},expression:"form.payTaxes"}})],1)],1),s("div",{staticClass:"footer-button"},[s("el-button",{on:{click:e.resetClick}},[e._v("重置")]),s("el-button",{attrs:{type:"primary"},on:{click:e.saveClick}},[e._v("保存")])],1)],1),s("el-dialog",{attrs:{title:"检查相关基本信息后再购买:",visible:e.dialogFormVisible2},on:{"update:visible":function(t){e.dialogFormVisible2=t}}},[s("el-form",{attrs:{model:e.form,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"企业名称:",required:!0}},[s("el-input",{attrs:{autocomplete:"off",disabled:e.show},model:{value:e.$store.state.verification[0].name,callback:function(t){e.$set(e.$store.state.verification[0],"name",t)},expression:"$store.state.verification[0].name"}})],1),s("el-form-item",{attrs:{label:"注册地址:",required:!0}},[s("el-input",{attrs:{autocomplete:"off",disabled:e.show},model:{value:e.$store.state.verification[0].registeredAddress,callback:function(t){e.$set(e.$store.state.verification[0],"registeredAddress",t)},expression:"$store.state.verification[0].registeredAddress"}})],1),s("el-form-item",{attrs:{label:"公司地址:",required:!0}},[s("el-input",{attrs:{autocomplete:"off",disabled:e.show},model:{value:e.$store.state.verification[0].companyAddress,callback:function(t){e.$set(e.$store.state.verification[0],"companyAddress",t)},expression:"$store.state.verification[0].companyAddress"}})],1),s("el-form-item",{attrs:{label:"联系方式:",required:!0}},[s("el-input",{attrs:{autocomplete:"off",disabled:e.show},model:{value:e.$store.state.verification[0].mobile,callback:function(t){e.$set(e.$store.state.verification[0],"mobile",t)},expression:"$store.state.verification[0].mobile"}})],1),s("el-form-item",{attrs:{label:"开户银行:",required:!0}},[s("el-input",{attrs:{autocomplete:"off",disabled:e.show},model:{value:e.$store.state.verification[0].bank,callback:function(t){e.$set(e.$store.state.verification[0],"bank",t)},expression:"$store.state.verification[0].bank"}})],1),s("el-form-item",{attrs:{label:"开户账号:",required:!0}},[s("el-input",{attrs:{autocomplete:"off",disabled:e.show},model:{value:e.$store.state.verification[0].accountNumber,callback:function(t){e.$set(e.$store.state.verification[0],"accountNumber",t)},expression:"$store.state.verification[0].accountNumber"}})],1),s("el-form-item",{attrs:{label:"纳税识别号:",required:!0}},[s("el-input",{attrs:{autocomplete:"off",disabled:e.show},model:{value:e.$store.state.verification[0].payTaxes,callback:function(t){e.$set(e.$store.state.verification[0],"payTaxes",t)},expression:"$store.state.verification[0].payTaxes"}})],1)],1),s("div",{staticClass:"footer-button"},[s("el-button",{on:{click:e.modifyClick}},[e._v("修改")]),s("el-button",{attrs:{type:"primary"},on:{click:e.determineClick}},[e._v("确定")])],1)],1)],2)],1)])])})),e._m(1)],2)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"el-page-header"},[s("span",[e._v("金蝶财务软件")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bottom"},[s("p",[e._v("footer")])])}],o=(s("b0c0"),[{id:"金碟",list:[{img:s("ec96")},{img:s("ec96")},{img:s("ec96")}],cards:[{key:1,title:"套餐一",year:"一次性购买",features:"长期使用，节省成本",money:3e3,type:!1},{key:1,title:"套餐二",year:"按年支付维护费",features:"随购随用、简单、方便",money:600,type:!0},{key:1,title:"套餐三",year:"按年支付维护费",features:"随购随用、简单、方便",money:600,type:!0}]}]),r={name:"SetMealPage",data:function(){return{options:[{value:"选项1",label:"1"},{value:"选项2",label:"2"},{value:"选项3",label:"3"},{value:"选项4",label:"4"},{value:"选项5",label:"5"},{value:"选项6",label:"6"},{value:"选项7",label:"7"},{value:"选项8",label:"8"},{value:"选项9",label:"9"},{value:"选项10",label:"10"}],dialogFormVisible2:!1,dialogFormVisible:!1,show:!0,form:{name:"",registeredAddress:"",companyAddress:"",mobile:"",bank:"",accountNumber:"",payTaxes:""},bannerHeight:600,screenWidth:0}},computed:{tableCount:function(){return this.$store.getters.data}},methods:{buyClick:function(e){console.log(this.tableCount),""==this.$store.state.verification[0].name?this.dialogFormVisible=!0:this.dialogFormVisible2=!0,console.log(e),console.log(this.$store.state.verification)},resetClick:function(){this.$message({type:"success",message:"重置成功"}),console.log(this.form.name),this.form.name="",this.form.registeredAddress="",this.form.companyAddress="",this.form.mobile="",this.form.bank="",this.form.accountNumber="",this.form.payTaxes=""},addClick:function(){this.$message({type:"success",message:"添加成功"})},saveClick:function(){if(""!==this.form.name&&""!==this.form.registeredAddress&&""!==this.form.companyAddress&&""!==this.form.mobile&&""!==this.form.bank&&""!==this.form.accountNumber&&""!==this.form.payTaxes){this.$message({type:"success",message:"保存成功"});var e=this.$store.state.verification[0];e.name=this.form.name,e.registeredAddress=this.form.registeredAddress,e.companyAddress=this.form.companyAddress,e.mobile=this.form.mobile,e.bank=this.form.bank,e.accountNumber=this.form.accountNumber,e.payTaxes=this.form.payTaxes,console.log(this.$store.state.verification),this.dialogFormVisible=!1,this.dialogFormVisible2=!0}else this.$message.error("保存失败,请完善或修改信息")},modifyClick:function(){this.dialogFormVisible2=!1,this.dialogFormVisible=!0},determineClick:function(){this.dialogFormVisible2=!1}},mounted:function(){this.$store.commit("pull",o)},created:function(){}},l=r,n=(s("c051"),s("2877")),c=Object(n["a"])(l,i,a,!1,null,"8bd4eaa8",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-4d36146a.9e67e5f6.js.map