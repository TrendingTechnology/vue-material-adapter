(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{161:function(e,t,s){},176:function(e,t,s){"use strict";var n=s(161);s.n(n).a},193:function(e,t,s){"use strict";s.r(t);var n={data:function(){return{selectedType:"Meat",selectedValue:void 0,food:{Vegetables:["Spinach","Carrots","Onions","Broccoli"],Meat:["Eggs","Chicken","Fish","Turkey","Pork","Beef"],Fruits:["Apples","Oranges","Bananas","Berries","Lemons"]}}},computed:{types:function(){return Object.keys(this.food)},options:function(){return this.selectedType?this.food[this.selectedType]:[]}},methods:{onTypeChanged:function(e){console.log(e),this.selectedType=e,this.selectedValue=null},onKindChanged:function(e){this.selectedValue=e}}},o=(s(176),s(2)),l=Object(o.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mcw-demo"},[s("div",{staticClass:"mcw-demo mcw-demo--container"},[s("div",[s("mcw-select",{attrs:{id:"food-group",value:e.selectedType,label:"Food",helptext:"Pick a food group","leading-icon":"restaurant_menu"},on:{change:e.onTypeChanged}},e._l(e.types,(function(t){return s("mcw-list-item",{key:t,attrs:{"data-value":t,role:"option",icon:""}},[e._v(e._s(t))])})),1),e._v(" "),s("br"),e._v(" "),e.selectedType?s("mcw-select",{attrs:{outlined:"",label:"Kind"},model:{value:e.selectedValue,callback:function(t){e.selectedValue=t},expression:"selectedValue"}},e._l(e.options,(function(t){return s("mcw-list-item",{key:t,attrs:{"data-value":t.toLowerCase(),role:"option"}},[e._v(e._s(t))])})),1):e._e()],1)]),e._v(" "),e.selectedType?s("div",{staticClass:"mdc-typography--caption"},[e._v("\n    Selected Type: "+e._s(e.selectedType)+"\n  ")]):e._e(),e._v(" "),e.selectedValue?s("div",{staticClass:"mdc-typography--caption"},[e._v("\n    Selected Value: "+e._s(e.selectedValue)+"\n  ")]):e._e()])}),[],!1,null,null,null);t.default=l.exports}}]);
//# sourceMappingURL=22.58cd0cfc0237118e059e.js.map