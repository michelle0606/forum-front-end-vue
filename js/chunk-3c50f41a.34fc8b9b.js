(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c50f41a"],{"12b2":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.name,expression:"restaurant.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter name",required:""},domProps:{value:t.restaurant.name},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"name",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"categoryId"}},[t._v("Category")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.categoryId,expression:"restaurant.categoryId"}],staticClass:"form-control",attrs:{id:"categoryId",name:"categoryId",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.restaurant,"categoryId",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("--請選擇--")]),t._l(t.categories,function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2)]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"tel"}},[t._v("Tel")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.tel,expression:"restaurant.tel"}],staticClass:"form-control",attrs:{id:"tel",type:"text",name:"tel",placeholder:"Enter telephone number"},domProps:{value:t.restaurant.tel},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"tel",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"address"}},[t._v("Address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.address,expression:"restaurant.address"}],staticClass:"form-control",attrs:{id:"address",type:"text",placeholder:"Enter address",name:"address"},domProps:{value:t.restaurant.address},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"address",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"opening-hours"}},[t._v("Opening Hours")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.openingHours,expression:"restaurant.openingHours"}],staticClass:"form-control",attrs:{id:"opening-hours",type:"time",name:"opening_hours"},domProps:{value:t.restaurant.openingHours},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"openingHours",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[t._v("Description")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.description,expression:"restaurant.description"}],staticClass:"form-control",attrs:{id:"description",rows:"3",name:"description"},domProps:{value:t.restaurant.description},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"description",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[t._v("Image")]),t.restaurant.image?r("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:t.restaurant.image,width:"200",height:"200"}}):t._e(),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:t.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.isProcessing}},[t._v("\n    "+t._s(t.isProcessing?"處理中...":"送出")+"\n  ")])])},n=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("7f7f"),r("96cf"),r("3b8d")),i=r("bd86"),o=r("be6c"),u=r("2fa3");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach(function(e){Object(i["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var d={props:{initialRestaurant:{type:Object,default:function(){return{name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""}}},isProcessing:{type:Boolean,default:!1}},data:function(){return{restaurant:{name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""},categories:[],isLoading:!0}},watch:{initialRestaurant:function(t){this.restaurant=l({},this.restaurant,{},t)}},created:function(){this.fetchCategories(),this.restaurant=l({},this.restaurant,{},this.initialRestaurant)},methods:{fetchCategories:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].categories.get();case 3:if(e=t.sent,r=e.data,a=e.statusText,"OK"===a){t.next=8;break}throw new Error(a);case 8:this.categories=r.categories,this.isLoading=!1,t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](0),this.isLoading=!1,u["a"].fire({type:"error",title:"無法取得餐廳類別，請稍後再試"});case 16:case"end":return t.stop()}},t,this,[[0,12]])}));function e(){return t.apply(this,arguments)}return e}(),handleFileChange:function(t){var e=t.target.files;if(e.length){var r=window.URL.createObjectURL(e[0]);this.restaurant.image=r}},handleSubmit:function(t){if(this.restaurant.name)if(this.restaurant.categoryId){var e=t.target,r=new FormData(e);this.$emit("after-submit",r)}else u["a"].fire({type:"warning",title:"請選擇餐廳類別"});else u["a"].fire({type:"warning",title:"請填寫餐廳名稱"})}}},p=d,m=r("2877"),f=Object(m["a"])(p,a,n,!1,null,null,null);e["a"]=f.exports},6945:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("AdminRestaurantForm",{attrs:{"initial-restaurant":t.restaurant,"is-processing":t.isProcessing},on:{"after-submit":t.handleAfterSubmit}})],1)},n=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("7f7f"),r("bd86")),i=(r("96cf"),r("3b8d")),o=r("12b2"),u=r("be6c"),c=r("2fa3");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach(function(e){Object(s["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var p={components:{AdminRestaurantForm:o["a"]},data:function(){return{restaurant:{id:-1,name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""},isProcessing:!1}},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},beforeRouteUpdate:function(t,e,r){var a=t.params;this.fetchRestaurant(a),r()},methods:{handleAfterSubmit:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var r,a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.isProcessing=!0,t.next=4,u["a"].restaurants.update({restaurantId:this.restaurant.id,formData:e});case 4:if(r=t.sent,a=r.data,n=r.statusText,"OK"===n&&"success"===a.status){t.next=9;break}throw new Error(n);case 9:this.$route.push({name:"admin-restaurants"}),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](0),this.isProcessing=!1,c["a"].fire({type:"error",title:"無法更新餐廳，請稍後再試"});case 16:case"end":return t.stop()}},t,this,[[0,12]])}));function e(e){return t.apply(this,arguments)}return e}(),fetchRestaurant:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var r,a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].restaurants.getDetail({restaurantId:e});case 3:if(r=t.sent,a=r.data.restaurant,n=r.statusText,"OK"===n){t.next=8;break}throw new Error(n);case 8:this.restaurant=d({},this.restaurant,{id:a.id,name:a.name,categoryId:a.CategoryId,tel:a.tel,address:a.address,description:a.description,image:a.image,openingHours:a.opening_hours}),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),c["a"].fire({type:"error",title:"無法取得餐廳資料，請稍後再試"});case 14:case"end":return t.stop()}},t,this,[[0,11]])}));function e(e){return t.apply(this,arguments)}return e}()}},m=p,f=r("2877"),g=Object(f["a"])(m,a,n,!1,null,null,null);e["default"]=g.exports},be6c:function(t,e,r){"use strict";var a=r("2fa3");e["a"]={categories:{get:function(){return a["b"].get("/admin/categories")}},restaurants:{getDetail:function(t){var e=t.restaurantId;return a["b"].get("/admin/restaurants/".concat(e))},get:function(){return a["b"].get("/admin/restaurants")},create:function(t){var e=t.formData;return a["b"].post("/admin/restaurants",e)},update:function(t){var e=t.restaurantId,r=t.formData;return a["b"].put("/admin/restaurants/".concat(e),r)},delete:function(t){var e=t.restaurantId;return a["b"].delete("/admin/restaurants/".concat(e))}}}}}]);
//# sourceMappingURL=chunk-3c50f41a.34fc8b9b.js.map