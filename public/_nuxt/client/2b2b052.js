(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{470:function(t,e,r){"use strict";r(11),r(9),r(10),r(3),r(15),r(8),r(16);var n=r(2),o=(r(27),r(212),r(213),r(483),r(216)),c=r(218),d=r(66),l=r(5);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(c.a,d.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},d.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},471:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(470),o=r(0),c=Object(o.h)("v-card__actions"),d=Object(o.h)("v-card__subtitle"),l=Object(o.h)("v-card__text"),v=Object(o.h)("v-card__title");n.a},482:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAgVJREFUSEvNliuMwkAQhm+BECQS2YRHkJVI5EnkSSTy5MmTJ5FIJBJ5shKJbFpIKpFIQnjcP6RLlr3Z7nJp02vSpOnszLczOzsz4iXj8TyvWavV+pVKxbter00hRIuW43uH7/3lcklOp1OYJMk+yw4nE9xPAlar1SFe38Xg+Xxe4w2e2cAvcK/X68OTEbxsuEDlGugcoLOMoih00XsAd7tdHyEcuSia1uAYlnEcr2027mDyFIvfMgzuIDuk8oY8b8P6hc3zGzhNookeXgofxCsk0ArnJ6E3FnQaSLwBPgecHnRmWWd+A7fb7ZGeSASF8hzK5KnxwQZa2MBYh1PCbbfbpUlRkLf1ev1dXeAKlTom+PF4nJq8Fp1Oh0L1qoGDzWYT2BJElcPOEHaGmp1v2FlxdgSSihKKEuv+YKdf+pnaNkFnjsh9aOtCJNmCBeMKTdQMpaqE6zCzgTj5M7bI40/VCMAJwPM/gsdwwlN14fGDfSnLFcwdmxH8THhsUdBt4XbskVzT/5VcpV2n0goIxb+Ukkng0poEwV3aIo07tFYdg7iMpSKEN0zHIrbJ5D4IaLXa2OFyHX0oIvqAYOp0uQ576Mu+3qEoAhycBctwmcZbqkgA7PTx1tSXOXgm2FYiObkrPHdwej3ZcUjxfFYI2AEeFAY2wWWiFQrW4Wp2Fw5WSrKvVrIfWZvTwo6DpUUAAAAASUVORK5CYII="},483:function(t,e,r){var content=r(484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("e23b7040",content,!0,{sourceMap:!1})},484:function(t,e,r){var n=r(17)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},523:function(t,e,r){"use strict";r.r(e);var n=r(459),o=r(460),c=r(470),d=r(471),l=r(278),v=(r(48),r(9),r(71),{name:"IndexPage",layouts:"default",data:function(){return{newsArray:[{title:"Graduation Ceremony",date:"15 JULY, 2022",description:"Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.",img:"/images/news2.png"},{title:"Graduation Ceremony",date:"15 JULY, 2022",description:"Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.",img:"/images/news3.png"},{title:"Graduation Ceremony",date:"15 JULY, 2022",description:"Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.",img:"/images/news4.png"},{title:"Graduation Ceremony",date:"15 JULY, 2022",description:"Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.",img:"/images/news5.png"},{title:"Graduation Ceremony",date:"15 JULY, 2022",description:"Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.",img:"/images/news2.png"}],items:["Graduation Ceremony","City Fiesta"],value:null}}}),h=r(61),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"news-section"},[e("div",{staticClass:"search-bar"},[e("div",{staticClass:"container"},[e("form",{attrs:{action:"news/_id"}},[e("div",{staticClass:"search-wrapper"},[e(o.a,{staticClass:"search-autocom",attrs:{items:t.items,dense:"",placeholder:"Search News"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),e("button",{attrs:{type:"submit"}},[e("img",{attrs:{src:r(482)}})])],1)])])]),t._v(" "),e("div",{staticClass:"city-news-section latest-news-section"},[e("div",{staticClass:"container"},[e("h4",{staticClass:"title",staticStyle:{"font-size":"2.25rem !important","font-weight":"700"}},[t._v("\n                News\n            ")]),t._v(" "),e("div",{staticClass:"news-grid"},[t._l(t.newsArray.slice(0,4),(function(r,n){return e(c.a,{key:n,staticClass:"news-card-wrappper",attrs:{width:"300"}},[e("a",{attrs:{href:"news/_id"}},[e(l.a,{staticClass:"news-card-img",attrs:{height:"210",src:r.img}}),t._v(" "),e(d.a,{staticClass:"news-content-wrapper"},[e("p",{staticClass:"news-date"},[t._v(t._s(r.date))]),t._v(" "),e("h5",{staticClass:"news-title"},[t._v(t._s(r.title))]),t._v(" "),e("p",{staticClass:"news-desc"},[t._v(t._s(r.description))]),t._v(" "),e("a",{attrs:{href:"news/_id"}},[e("Nuxtlink",{staticClass:"readmore-btn",attrs:{text:""}},[t._v("\n                                Read More\n                                ")])],1)])],1)])}))],2)])]),t._v(" "),e("div",{staticClass:"city-news-section trending-news-section"},[e("div",{staticClass:"container"},[e("h4",{staticClass:"title",staticStyle:{"font-size":"2.25rem !important","font-weight":"700"}},[t._v("\n                Trending\n            ")]),t._v(" "),e("div",{staticClass:"news-grid"},[t._l(t.newsArray.slice(0,4),(function(r,n){return e(c.a,{key:n,staticClass:"news-card-wrappper",attrs:{width:"300"}},[e("a",{attrs:{href:"news/_id"}},[e(l.a,{staticClass:"news-card-img",attrs:{height:"210",src:r.img}}),t._v(" "),e(d.a,{staticClass:"news-content-wrapper"},[e("p",{staticClass:"news-date"},[t._v(t._s(r.date))]),t._v(" "),e("h5",{staticClass:"news-title"},[t._v(t._s(r.title))]),t._v(" "),e("p",{staticClass:"news-desc"},[t._v(t._s(r.description))]),t._v(" "),e("a",{attrs:{href:"news/_id"}},[e("Nuxtlink",{staticClass:"readmore-btn",attrs:{text:""}},[t._v("\n                                Read More\n                                ")])],1)])],1)])}))],2)])])])}),[],!1,null,null,null);e.default=component.exports}}]);