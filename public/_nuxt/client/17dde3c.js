(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5],{489:function(n,t,e){"use strict";e.r(t);var o=e(204),r=e(203),l=(e(38),e(457)),c=e.n(l),m=(e(458),e(459),{components:{VueSlickCarousel:c.a},data:function(){return{officials:[{name:"Hon. Raymund C. Uy",position:"Calbayog City Mayor",profile:"/images/cm.png"},{name:"Jaynard Monterona",position:"Damdamin ng Bayan",profile:"/images/cm.png"},{name:"Hon. Raymund C. Uy",position:"Calbayog City Mayor",profile:"/images/cm.png"},{name:"Jaynard Monterona",position:"Damdamin ng Bayan",profile:"/images/cm.png"},{name:"Hon. Raymund C. Uy",position:"Calbayog City Mayor",profile:"/images/cm.png"},{name:"Jaynard Monterona",position:"Damdamin ng Bayan",profile:"/images/cm.png"},{name:"Hon. Raymund C. Uy",position:"Calbayog City Mayor",profile:"/images/cm.png"},{name:"Jaynard Monterona",position:"Damdamin ng Bayan",profile:"/images/cm.png"},{name:"Hon. Raymund C. Uy",position:"Calbayog City Mayor",profile:"/images/cm.png"},{name:"Jaynard Monterona",position:"Damdamin ng Bayan",profile:"/images/cm.png"},{name:"Hon. Raymund C. Uy",position:"Calbayog City Mayor",profile:"/images/cm.png"},{name:"Jaynard Monterona",position:"Damdamin ng Bayan",profile:"/images/cm.png"},{name:"Hon. Raymund C. Uy",position:"Calbayog City Mayor",profile:"/images/cm.png"},{name:"Jaynard Monterona",position:"Damdamin ng Bayan",profile:"/images/cm.png"},{name:"Hon. Raymund C. Uy",position:"Calbayog City Mayor",profile:"/images/cm.png"},{name:"Jaynard Monterona",position:"Damdamin ng Bayan",profile:"/images/cm.png"},{name:"Hon. Raymund C. Uy",position:"Calbayog City Mayor",profile:"/images/cm.png"},{name:"Jaynard Monterona",position:"Damdamin ng Bayan",profile:"/images/cm.png"},{name:"Hon. Raymund C. Uy",position:"Calbayog City Mayor",profile:"/images/cm.png"},{name:"Jaynard Monterona",position:"Damdamin ng Bayan",profile:"/images/cm.png"},{name:"Hon. Raymund C. Uy",position:"Calbayog City Mayor",profile:"/images/cm.png"},{name:"Jaynard Monterona",position:"Damdamin ng Bayan",profile:"/images/cm.png"}],sliderSettings:{dots:!0,dotsClass:"slick-dots custom-dot-class",infinite:!0,slidesToShow:5,speed:300,rows:2,slidesPerRow:1,draggable:!0,swipeToSlide:!0,responsive:[{breakpoint:1300,settings:{slidesToShow:4}},{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:1e3,settings:{slidesToShow:3,rows:1}},{breakpoint:991,settings:{slidesToShow:3,rows:1,dots:!1}},{breakpoint:767,settings:{slidesToShow:2,rows:1,dots:!1}},{breakpoint:500,settings:{slidesToShow:1,rows:1,dots:!1}}]}}}}),d=e(69),component=Object(d.a)(m,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"officials-wrapper"},[t("VueSlickCarousel",n._b({staticClass:"officials-slider"},"VueSlickCarousel",n.sliderSettings,!1),n._l(n.officials,(function(e,l){return t("div",{key:l,staticClass:"official"},[t(o.a,{staticClass:"profile",attrs:{height:"117",width:"117",rounded:"true"}},[t("img",{attrs:{src:e.profile}})]),n._v(" "),t("div",{staticClass:"name-and-position"},[t("p",[n._v(n._s(e.name))]),n._v(" "),t(r.a,{staticClass:"line"}),n._v(" "),t("span",[n._v(n._s(e.position))])],1)],1)})),0)],1)}),[],!1,null,null,null);t.default=component.exports},516:function(n,t,e){"use strict";e.r(t);var o=e(457),r=e.n(o),l=(e(458),e(459),{name:"About",layouts:"default",components:{VueSlickCarousel:r.a},data:function(){return{galleryMisiion:[{title:"img1",id:1,url:"/images/about1.png"},{title:"img2",id:2,url:"/images/about2.png"},{title:"img3",id:3,url:"/images/about3.png"}],imgUrl:"",headerCarousel:[{title:"Cathedral",img:"/images/Calbayog.png"},{title:"Falls",img:"/images/calbcover.png"},{title:"Falls",img:"/images/falls.png"}],sliderHeader:{dots:!1,dotsClass:"slick-dots header-dots",infinite:!0,slidesToShow:1,slidesPerRow:1,autoplay:!0,speed:5e3,autoplaySpeed:5e3,fade:!0,adaptiveHeight:!1}}},methods:{getImg:function(n){this.imgUrl=n,this.$modal.show("imgpop")}}}),c=e(69),component=Object(c.a)(l,(function(){var n=this,t=n._self._c;return t("div",[t("div",{staticClass:"banner-wrapper small-banner",attrs:{id:"about-banner"}},[t("VueSlickCarousel",n._b({staticClass:"officials-slider"},"VueSlickCarousel",n.sliderHeader,!1),n._l(n.headerCarousel,(function(n,i){return t("img",{key:i,attrs:{src:n.img,alt:""}})})),0),n._v(" "),t("p",{staticClass:"banner-title"},[n._v("About Us")])],1),n._v(" "),n._m(0),n._v(" "),t("div",{staticClass:"mission-section mission-visons-sections"},[t("div",{staticClass:"container"},[n._m(1),n._v(" "),t("div",{staticClass:"left-content gallery-content"},[t("div",{staticClass:"left-gallery"},n._l(n.galleryMisiion,(function(img,e){return t("div",{key:e,staticClass:"img-wrapper"},[t("img",{staticClass:"about-gallery-imgs",attrs:{src:img.url,alt:img.title},on:{click:function(t){return n.getImg(img.url)}}})])})),0)])])]),n._v(" "),t("div",{staticClass:"vision-section mission-visons-sections"},[t("div",{staticClass:"container"},[t("div",{staticClass:"right-content gallery-content"},[t("div",{staticClass:"left-gallery"},n._l(n.galleryMisiion,(function(img,e){return t("div",{key:e,staticClass:"img-wrapper"},[t("img",{staticClass:"about-gallery-imgs",attrs:{src:img.url,alt:img.title},on:{click:function(t){return n.getImg(img.url)}}})])})),0)]),n._v(" "),n._m(2)])]),n._v(" "),t("div",{staticClass:"official-section"},[t("div",{staticClass:"container"},[t("h4",{staticClass:"title",attrs:{id:"about-ocf-title"}},[n._v("\n                    Our City Officials\n                ")]),n._v(" "),t("Officials")],1)]),n._v(" "),t("modal",{attrs:{name:"imgpop",width:"600px",height:"600px"}},[t("div",{staticClass:"imagepop"},[t("img",{attrs:{src:n.imgUrl}})])])],1)}),[function(){var n=this._self._c;return n("div",{staticClass:"about-section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"desc"},[n("p",[this._v("\n                        Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.\n                    ")])])])])},function(){var n=this,t=n._self._c;return t("div",{staticClass:"right-content text-content"},[t("div",{staticClass:"inner-r-con"},[t("h5",{staticClass:"title"},[n._v("\n                            Our Mission\n                        ")]),n._v(" "),t("div",{staticClass:"content"},[t("p",[n._v('The office of the mayor is tasked with promoting the general welfare of the city and its\nconstituents the efficient, effective, relevant and economical governance. It exercises general\nsupervision and control over all programs, projects, services and activities of the City\nGovernment which aims to put emphasis on prioritizing the citizens\' needs at the core of the\ndevelopment agenda. "Tao ang una". The office serves as the coordinating body which goal is to\nmaximize the generation of resources and revenues and apply the same to the effective\nimplementation of development plans, programs, objectives and priorities to ensure')])])])])},function(){var n=this,t=n._self._c;return t("div",{staticClass:"left-content text-content"},[t("div",{staticClass:"inner-r-con"},[t("h5",{staticClass:"title"},[n._v("\n                            Our Vision\n                        ")]),n._v(" "),t("div",{staticClass:"content"},[t("p",[n._v("Good Governance, Better Quality life for empowered God Loving citizens and Private-\nPublic partnership for a sustainable economic development, entrepreneurship and self-reliance.")])])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Officials:e(489).default})}}]);