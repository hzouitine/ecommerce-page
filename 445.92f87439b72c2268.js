"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[445],{2445:(b,d,i)=>{i.r(d),i.d(d,{ProductsModule:()=>Z});var s=i(6814),t=i(9468),p=i(9862);let l=(()=>{class o{constructor(c){this.http=c,this.URL="https://fakestoreapi.com/products"}getProducts(){return this.http.get(this.URL)}static#t=this.\u0275fac=function(e){return new(e||o)(t.LFG(p.eN))};static#o=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var m=i(6031),n=i(2507);function h(o,a){1&o&&(t.TgZ(0,"div",12),t._UZ(1,"i",2),t._uU(2," Ajout\xe9 au Panier "),t.qZA())}function g(o,a){if(1&o){const c=t.EpF();t.TgZ(0,"ngb-toast",9),t.NdJ("hidden",function(){t.CHM(c);const r=t.oxw();return t.KtG(r.showAddToCartToast=!1)}),t.YNc(1,h,3,0,"ng-template",10),t._UZ(2,"img",11),t.TgZ(3,"div"),t._uU(4),t.qZA()()}if(2&o){const c=t.oxw();t.Q6J("autohide",!0)("delay",2e3),t.xp6(2),t.s9C("src",c.product.image,t.LSH),t.xp6(2),t.Oqu(c.product.title)}}let f=(()=>{class o{constructor(c){this.cartService=c,this.showAddToCartToast=!1}addToCart(){this.cartService.addToCart(this.product),this.showAddToCartToast=!0}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(m.N))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-card"]],inputs:{product:"product"},decls:12,vars:7,consts:[[1,"card"],[1,"fs-4","btn","btn-link","position-absolute","top-0","end-0",3,"click"],[1,"bi","bi-cart-plus"],["alt","...",1,"pt-2","card-img-top","w-100","img-fluid",2,"height","250px","object-fit","contain",3,"src"],[1,"card-body"],[1,"card-title","text-truncate","text-secondary-emphasis",3,"title"],[1,"my-3","text-primary-emphasis"],[1,"toast-container","position-fixed","bottom-0","end-0","p-1","text-center",2,"z-index","9999999"],["aria-atomic","true",3,"autohide","delay","hidden",4,"ngIf"],["aria-atomic","true",3,"autohide","delay","hidden"],["ngbToastHeader",""],[1,"mb-2","w-100","img-fluid",2,"height","50px","object-fit","contain",3,"src"],[1,"me-auto",2,"color","black"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return r.addToCart()}),t._UZ(2,"i",2),t.qZA(),t._UZ(3,"img",3),t.TgZ(4,"div",4)(5,"h5",5),t._uU(6),t.qZA(),t.TgZ(7,"h5",6),t._uU(8),t.ALo(9,"currency"),t.qZA()()(),t.TgZ(10,"div",7),t.YNc(11,g,5,4,"ngb-toast",8),t.qZA()),2&e&&(t.xp6(3),t.s9C("src",r.product.image,t.LSH),t.xp6(2),t.s9C("title",r.product.title),t.xp6(1),t.Oqu(r.product.title),t.xp6(2),t.Oqu(t.lcZ(9,5,r.product.price)),t.xp6(3),t.Q6J("ngIf",r.showAddToCartToast))},dependencies:[s.O5,n.Iv,n.xz,s.H9]})}return o})();function C(o,a){if(1&o&&(t.TgZ(0,"div",4),t._UZ(1,"app-product-card",5),t.qZA()),2&o){const c=a.$implicit;t.xp6(1),t.Q6J("product",c)}}let T=(()=>{class o{constructor(c){this.productService=c}ngOnInit(){this.productService.getProducts().subscribe(c=>this.products=c)}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(l))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:4,vars:1,consts:[[1,"p-3"],[1,"container"],[1,"row"],["class","mb-2 col-sm-12 col-md-6 col-lg-4 col-xl-3",4,"ngFor","ngForOf"],[1,"mb-2","col-sm-12","col-md-6","col-lg-4","col-xl-3"],[3,"product"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,C,2,1,"div",3),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("ngForOf",r.products))},dependencies:[s.sg,f]})}return o})();var u=i(594);const v=[{path:"",component:T}];let Z=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#o=this.\u0275mod=t.oAB({type:o});static#c=this.\u0275inj=t.cJS({imports:[s.ez,u.Bz.forChild(v),n.aE,u.Bz]})}return o})()}}]);