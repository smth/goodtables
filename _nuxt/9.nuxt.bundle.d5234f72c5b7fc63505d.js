webpackJsonp([9],{161:function(t,a,s){var r=s(10)(s(194),s(222),null,null);t.exports=r.exports},194:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=s(71),e=s.n(r),i=s(216),h=s.n(i),n=s(215),l=s.n(n);a.default={components:{Logo:e.a,okiLogo:h.a,fdLogo:l.a},computed:{title:function(){return this.$route.matched.map(function(t){return t.components.default.options?t.components.default.options.pageTitle:t.components.default.pageTitle})[0]},tagline:function(){return this.$route.matched.map(function(t){return t.components.default.options?t.components.default.options.pageTag:t.components.default.pageTag})[0]},ctaText:function(){return this.$route.matched.map(function(t){return t.components.default.options?t.components.default.options.ctaText:t.components.default.ctaText})[0]},ctaSubText:function(){return this.$route.matched.map(function(t){return t.components.default.options?t.components.default.options.ctaSubText:t.components.default.ctaSubText})[0]},ctaLink:function(){return this.$route.matched.map(function(t){return t.components.default.options?t.components.default.options.ctaLink:t.components.default.ctaLink})[0]}}}},215:function(t,a,s){var r=s(10)(null,s(228),null,null);t.exports=r.exports},216:function(t,a,s){var r=s(10)(null,s(230),null,null);t.exports=r.exports},222:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"landing"},[s("header",{staticClass:"main-header"},[s("div",{staticClass:"pattern"},[s("div",{staticClass:"inner"},[s("div",{staticClass:"container"},[s("div",{staticClass:"main-nav"},[s("logo")],1),s("div",{staticClass:"content"},[s("h1",[t._v(t._s(t.title))]),s("p",[t._v("\n              "+t._s(t.tagline)+"\n            ")]),t.ctaLink?s("router-link",{staticClass:"cta btn",attrs:{to:t.ctaLink}},[t._v("\n              "+t._s(t.ctaText)+"\n              "),s("p",{staticClass:"sub-text"},[s("span",{staticClass:"link-icon icon-github"}),s("span",{staticClass:"link-text"},[t._v(t._s(t.ctaSubText))])])]):t._e()],1)])])])]),s("section",{staticClass:"main-content"},[s("main",{staticClass:"container"},[s("nuxt")],1),t.ctaLink?s("router-link",{staticClass:"cta btn",attrs:{to:t.ctaLink}},[t._v("\n      "+t._s(t.ctaText)+"\n      "),s("p",{staticClass:"sub-text"},[s("span",{staticClass:"link-icon icon-github"}),s("span",{staticClass:"link-text"},[t._v(t._s(t.ctaSubText))])])]):t._e()],1),s("section",{staticClass:"orgs"},[s("div",{staticClass:"container"},[s("ul",{staticClass:"logos"},[s("li",[s("okiLogo")],1),s("li",{staticClass:"fd"},[s("fdLogo")],1)]),s("p",[t._v("\n        GoodTables is part of the Frictionless Data project from Open Knowledge International, which supports a wider discussion around Open Data quality. We believe that GoodTables can reduce the processing time of your data publication workflow, whatever it may be.\n      ")])])])])},staticRenderFns:[]}},228:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 218.42 38.22"}},[s("title",[t._v("Frictionless Data")]),s("polygon",{attrs:{points:"0 25.45 1.85 23.6 2.52 22.93 2.52 30.6 10.14 38.22 10.64 38.22 10.64 22.92 25.2 22.92 25.2 14.8 10.65 14.8 8.8 16.65 8.13 17.31 8.12 17.31 8.12 8.18 25.2 8.18 25.2 0 0 0 0 25.45"}}),s("polygon",{attrs:{points:"36.9 18.69 42.63 18.69 42.63 16.93 36.9 16.93 36.9 12.9 43.76 12.9 43.76 11.02 34.77 11.02 34.77 24.51 36.9 24.51 36.9 18.69"}}),s("path",{attrs:{d:"M53.18,19.38a3.45,3.45,0,0,0,1.08-.58,3.72,3.72,0,0,0,.84-.92,4.59,4.59,0,0,0,.53-1.16,4.52,4.52,0,0,0,.19-1.31,4.31,4.31,0,0,0-.31-1.61,4.69,4.69,0,0,0-.86-1.41,4.31,4.31,0,0,0-1.32-1A3.75,3.75,0,0,0,51.64,11H45.77V24.51H47.9V19.82H51l2.93,4.69h2.41Zm-.73-1.64a1.72,1.72,0,0,1-.83.2H47.9v-5h3.61a1.74,1.74,0,0,1,.81.2,2.25,2.25,0,0,1,.68.54,2.81,2.81,0,0,1,.48.8,2.62,2.62,0,0,1,.18,1,3.06,3.06,0,0,1-.15,1,2.81,2.81,0,0,1-.42.81A2,2,0,0,1,52.45,17.74Z"}}),s("rect",{attrs:{x:"58.33",y:"11.02",width:"2.13",height:"13.49"}}),s("path",{attrs:{d:"M72.75,20.48a3.45,3.45,0,0,1-.67,1,4,4,0,0,1-.89.69,3.77,3.77,0,0,1-1,.4,4.38,4.38,0,0,1-1,.12,3.78,3.78,0,0,1-1.75-.41A4.41,4.41,0,0,1,66,21.2a5.1,5.1,0,0,1-.9-1.58,5.5,5.5,0,0,1-.32-1.88A5.78,5.78,0,0,1,65.08,16a5.06,5.06,0,0,1,.82-1.58,4.14,4.14,0,0,1,1.34-1.13,3.88,3.88,0,0,1,1.86-.43,5,5,0,0,1,1,.1,3.8,3.8,0,0,1,1,.35A3.35,3.35,0,0,1,72,14a3.83,3.83,0,0,1,.68,1l1.67-1.12a5.32,5.32,0,0,0-2-2.13,5.84,5.84,0,0,0-3.15-.82,6.24,6.24,0,0,0-2.76.59,6.47,6.47,0,0,0-2.06,1.55,6.7,6.7,0,0,0-1.28,2.17,7,7,0,0,0,0,5,7.3,7.3,0,0,0,1.33,2.22,6.83,6.83,0,0,0,2,1.59,5.59,5.59,0,0,0,2.6.61,6.64,6.64,0,0,0,1.63-.21,6.81,6.81,0,0,0,1.57-.61,5.79,5.79,0,0,0,1.33-1,4.13,4.13,0,0,0,.91-1.34Z"}}),s("polygon",{attrs:{points:"79.63 24.51 81.78 24.51 81.78 12.9 86.26 12.9 86.26 11.02 75.13 11.02 75.13 12.9 79.63 12.9 79.63 24.51"}}),s("rect",{attrs:{x:"88.06",y:"11.02",width:"2.13",height:"13.49"}}),s("path",{attrs:{d:"M103.54,13.09a6.61,6.61,0,0,0-2-1.57,5.76,5.76,0,0,0-2.63-.6,6,6,0,0,0-2.59.56A6.48,6.48,0,0,0,94.23,13a7.16,7.16,0,0,0-1.36,2.18,6.88,6.88,0,0,0-.49,2.58,7.11,7.11,0,0,0,.47,2.53,6.93,6.93,0,0,0,1.32,2.19,6.57,6.57,0,0,0,2,1.54,6.23,6.23,0,0,0,5.21,0,6.65,6.65,0,0,0,2.06-1.5,6.8,6.8,0,0,0,1.36-2.17,7,7,0,0,0,0-5.08A7.2,7.2,0,0,0,103.54,13.09Zm-.69,6.46a5.08,5.08,0,0,1-.84,1.58,4.25,4.25,0,0,1-1.34,1.13,3.75,3.75,0,0,1-1.82.43,3.86,3.86,0,0,1-1.79-.41,4.23,4.23,0,0,1-1.36-1.09,5,5,0,0,1-.86-1.58,5.69,5.69,0,0,1-.3-1.84A5.62,5.62,0,0,1,94.84,16a5,5,0,0,1,.84-1.57A4.35,4.35,0,0,1,97,13.29a4,4,0,0,1,3.58,0A4.33,4.33,0,0,1,102,14.35a4.93,4.93,0,0,1,.86,1.56,5.77,5.77,0,0,1,0,3.64Z"}}),s("polygon",{attrs:{points:"116.91 20.75 109.19 11.02 107.52 11.02 107.52 24.51 109.65 24.51 109.65 15.01 117.29 24.51 119.05 24.51 119.05 11.04 116.91 11.04 116.91 20.75"}}),s("polygon",{attrs:{points:"131.46 22.63 124.22 22.63 124.22 11.02 122.09 11.02 122.09 24.51 131.46 24.51 131.46 22.63"}}),s("polygon",{attrs:{points:"142.44 22.63 135.32 22.63 135.32 18.5 141.34 18.5 141.34 16.74 135.32 16.74 135.32 12.9 142.27 12.9 142.27 11.02 133.19 11.02 133.19 24.51 142.44 24.51 142.44 22.63"}}),s("path",{attrs:{d:"M152.39,23.74a3.33,3.33,0,0,0,1.06-1.21,3.75,3.75,0,0,0,.39-1.77,3.48,3.48,0,0,0-.31-1.55,3,3,0,0,0-.88-1.07,5.28,5.28,0,0,0-1.4-.74,16.87,16.87,0,0,0-1.85-.55l-1.46-.39a4.78,4.78,0,0,1-1-.42,1.71,1.71,0,0,1-.62-.55,1.48,1.48,0,0,1-.2-.81,1.64,1.64,0,0,1,.64-1.37,3.24,3.24,0,0,1,2-.49,5.28,5.28,0,0,1,1.19.13,6.16,6.16,0,0,1,1.06.34,5.57,5.57,0,0,1,.85.45,3,3,0,0,1,.55.45l1-1.75a8.41,8.41,0,0,0-2-1.08,7.11,7.11,0,0,0-2.53-.44,6.78,6.78,0,0,0-1.94.27,4.52,4.52,0,0,0-1.55.79,3.76,3.76,0,0,0-1,1.29,3.92,3.92,0,0,0-.38,1.76,3.26,3.26,0,0,0,.26,1.36,2.81,2.81,0,0,0,.75,1,4.4,4.4,0,0,0,1.25.71,16,16,0,0,0,1.76.56q.87.23,1.56.44a6.36,6.36,0,0,1,1.16.46,2.21,2.21,0,0,1,.73.6,1.39,1.39,0,0,1,.26.86,1.44,1.44,0,0,1-.68,1.29,3.61,3.61,0,0,1-1.94.44,6.13,6.13,0,0,1-1.5-.18,9.44,9.44,0,0,1-1.34-.44,6.62,6.62,0,0,1-1.08-.56,4.55,4.55,0,0,1-.71-.55l-1,1.82a8.51,8.51,0,0,0,2.59,1.36,9.56,9.56,0,0,0,3,.46,8.07,8.07,0,0,0,1.92-.22A4.7,4.7,0,0,0,152.39,23.74Z"}}),s("path",{attrs:{d:"M165.06,22.53a3.75,3.75,0,0,0,.39-1.77,3.48,3.48,0,0,0-.31-1.55,3,3,0,0,0-.88-1.07,5.28,5.28,0,0,0-1.4-.74,16.87,16.87,0,0,0-1.85-.55l-1.46-.39a4.78,4.78,0,0,1-1-.42,1.71,1.71,0,0,1-.62-.55,1.48,1.48,0,0,1-.2-.81,1.64,1.64,0,0,1,.64-1.37,3.24,3.24,0,0,1,2-.49,5.28,5.28,0,0,1,1.19.13,6.16,6.16,0,0,1,1.06.34,5.57,5.57,0,0,1,.85.45,3,3,0,0,1,.55.45l1-1.75a8.41,8.41,0,0,0-2-1.08,7.11,7.11,0,0,0-2.53-.44,6.78,6.78,0,0,0-1.94.27,4.52,4.52,0,0,0-1.55.79,3.76,3.76,0,0,0-1,1.29,3.92,3.92,0,0,0-.38,1.76,3.26,3.26,0,0,0,.26,1.36,2.81,2.81,0,0,0,.75,1,4.4,4.4,0,0,0,1.25.71,16,16,0,0,0,1.76.56q.87.23,1.56.44a6.36,6.36,0,0,1,1.16.46,2.21,2.21,0,0,1,.73.6,1.39,1.39,0,0,1,.26.86,1.44,1.44,0,0,1-.68,1.29,3.61,3.61,0,0,1-1.94.44,6.13,6.13,0,0,1-1.5-.18,9.44,9.44,0,0,1-1.34-.44,6.62,6.62,0,0,1-1.08-.56,4.55,4.55,0,0,1-.71-.55l-1,1.82a8.51,8.51,0,0,0,2.59,1.36,9.56,9.56,0,0,0,3,.46,8.07,8.07,0,0,0,1.92-.22,4.7,4.7,0,0,0,1.57-.68A3.33,3.33,0,0,0,165.06,22.53Z"}}),s("path",{attrs:{d:"M179.78,24a5.85,5.85,0,0,0,2.07-1.37,6.06,6.06,0,0,0,1.32-2.13,7.89,7.89,0,0,0,.47-2.78,8.05,8.05,0,0,0-.42-2.61A6,6,0,0,0,182,13a5.89,5.89,0,0,0-2.05-1.44,7.14,7.14,0,0,0-2.86-.53h-4.79V24.51h4.79A7.28,7.28,0,0,0,179.78,24ZM174.4,12.9h2.66a4.57,4.57,0,0,1,1.86.36,4,4,0,0,1,1.39,1,4.28,4.28,0,0,1,.87,1.53,6.22,6.22,0,0,1,.29,2,6.32,6.32,0,0,1-.29,1.94,4.42,4.42,0,0,1-.84,1.55,3.89,3.89,0,0,1-1.39,1,4.57,4.57,0,0,1-1.89.37H174.4Z"}}),s("path",{attrs:{d:"M191.23,11h-1.86L184,24.51h2.26l1.41-3.67h5.21l1.42,3.67h2.24Zm-3.17,8.25,2.24-5.79,2.17,5.79Z"}}),s("polygon",{attrs:{points:"202.31 24.51 202.31 12.9 206.79 12.9 206.79 11.02 195.66 11.02 195.66 12.9 200.16 12.9 200.16 24.51 202.31 24.51"}}),s("path",{attrs:{d:"M213.1,11h-1.86l-5.36,13.49h2.26l1.41-3.67h5.21l1.42,3.67h2.24Zm-3.17,8.25,2.24-5.79,2.17,5.79Z"}}),s("path",{attrs:{d:"M39.27,34.41a3,3,0,0,0-.79-.36q-.46-.15-1-.27l-.94-.23a2.46,2.46,0,0,1-.64-.27,1,1,0,0,1-.37-.38,1.19,1.19,0,0,1-.12-.57,1.31,1.31,0,0,1,.47-1.06,2.35,2.35,0,0,1,1.51-.4,2.48,2.48,0,0,1,2,.77l.26-.4a2.91,2.91,0,0,0-1-.62,3.45,3.45,0,0,0-1.23-.21,3.73,3.73,0,0,0-1,.13,2.29,2.29,0,0,0-.79.38,1.79,1.79,0,0,0-.51.63,1.86,1.86,0,0,0-.19.85,1.57,1.57,0,0,0,.15.73,1.36,1.36,0,0,0,.44.5,2.66,2.66,0,0,0,.73.34q.44.13,1,.25t1,.25a2.78,2.78,0,0,1,.69.31,1.25,1.25,0,0,1,.42.42,1.18,1.18,0,0,1,.14.6,1.14,1.14,0,0,1-.53,1,2.65,2.65,0,0,1-1.46.34A3.71,3.71,0,0,1,36,36.89a3.25,3.25,0,0,1-1.1-.75l-.27.41a4,4,0,0,0,2.81,1.06,4.18,4.18,0,0,0,1-.12,2.43,2.43,0,0,0,.8-.36,1.65,1.65,0,0,0,.52-.58,1.73,1.73,0,0,0,.19-.82,1.63,1.63,0,0,0-.18-.79A1.55,1.55,0,0,0,39.27,34.41Z"}}),s("path",{attrs:{d:"M46.13,31.15a2.13,2.13,0,0,0-.66-.5,1.84,1.84,0,0,0-.83-.19H41.73v7.1h.51V34.88h2.47a1.8,1.8,0,0,0,.82-.19,2,2,0,0,0,.64-.5,2.28,2.28,0,0,0,.41-.71,2.42,2.42,0,0,0,.15-.83,2.16,2.16,0,0,0-.16-.79A2.43,2.43,0,0,0,46.13,31.15Zm0,2.16a1.83,1.83,0,0,1-.3.56,1.46,1.46,0,0,1-.48.39,1.35,1.35,0,0,1-.63.14H42.24V30.92h2.39a1.35,1.35,0,0,1,.6.14,1.63,1.63,0,0,1,.5.38,1.83,1.83,0,0,1,.34.55,1.78,1.78,0,0,1,.13.67A2,2,0,0,1,46.09,33.31Z"}}),s("polygon",{attrs:{points:"48.95 34.15 52.56 34.15 52.56 33.71 48.95 33.71 48.95 30.92 53.08 30.92 53.08 30.46 48.44 30.46 48.44 37.56 53.17 37.56 53.17 37.1 48.95 37.1 48.95 34.15"}}),s("path",{attrs:{d:"M59.66,36.38a2.66,2.66,0,0,1-.58.43,2.56,2.56,0,0,1-.65.25,2.85,2.85,0,0,1-.66.08,2.47,2.47,0,0,1-1.12-.26,2.91,2.91,0,0,1-.9-.7A3.36,3.36,0,0,1,54.93,34a3.51,3.51,0,0,1,.18-1.11,3.12,3.12,0,0,1,.55-1,2.81,2.81,0,0,1,.88-.71,2.52,2.52,0,0,1,1.2-.28,2.94,2.94,0,0,1,.63.07,2.39,2.39,0,0,1,.61.22,2.35,2.35,0,0,1,.55.41,2.37,2.37,0,0,1,.44.62L60.4,32a2.74,2.74,0,0,0-1-1.12,2.91,2.91,0,0,0-1.62-.43,3.12,3.12,0,0,0-1.42.31,3.37,3.37,0,0,0-1.05.82,3.53,3.53,0,0,0-.66,1.13A3.81,3.81,0,0,0,54.42,34a3.77,3.77,0,0,0,.25,1.33,3.88,3.88,0,0,0,.68,1.17,3.55,3.55,0,0,0,1,.83,2.82,2.82,0,0,0,1.33.32,3.45,3.45,0,0,0,.83-.1,3.29,3.29,0,0,0,.81-.32,3.07,3.07,0,0,0,.69-.52,2.37,2.37,0,0,0,.49-.71l-.44-.21A2.33,2.33,0,0,1,59.66,36.38Z"}}),s("rect",{attrs:{x:"62.31",y:"30.46",width:"0.51",height:"7.1"}}),s("polygon",{attrs:{points:"65.18 37.56 65.69 37.56 65.69 34.18 69.18 34.18 69.18 33.74 65.69 33.74 65.69 30.92 69.8 30.92 69.8 30.46 65.18 30.46 65.18 37.56"}}),s("rect",{attrs:{x:"71.62",y:"30.46",width:"0.51",height:"7.1"}}),s("path",{attrs:{d:"M79.24,36.38a2.62,2.62,0,0,1-.58.43,2.54,2.54,0,0,1-.65.25,2.86,2.86,0,0,1-.66.08,2.46,2.46,0,0,1-1.12-.26,2.93,2.93,0,0,1-.9-.7,3.35,3.35,0,0,1-.6-1,3.31,3.31,0,0,1-.22-1.2,3.51,3.51,0,0,1,.18-1.11,3.11,3.11,0,0,1,.54-1,2.82,2.82,0,0,1,.88-.71,2.53,2.53,0,0,1,1.2-.28,2.92,2.92,0,0,1,.63.07,2.39,2.39,0,0,1,.62.22,2.34,2.34,0,0,1,.55.41,2.38,2.38,0,0,1,.45.62L80,32a2.75,2.75,0,0,0-1-1.12,2.91,2.91,0,0,0-1.62-.43,3.12,3.12,0,0,0-1.42.31,3.36,3.36,0,0,0-1.05.82,3.53,3.53,0,0,0-.66,1.13,3.75,3.75,0,0,0,0,2.61,3.89,3.89,0,0,0,.69,1.17,3.55,3.55,0,0,0,1,.83,2.82,2.82,0,0,0,1.33.32,3.45,3.45,0,0,0,.83-.1,3.27,3.27,0,0,0,.8-.32,3,3,0,0,0,.69-.52,2.39,2.39,0,0,0,.49-.71l-.44-.21A2.31,2.31,0,0,1,79.24,36.38Z"}}),s("path",{attrs:{d:"M84,30.46l-3,7.1h.55l1-2.34h3.39l1,2.34h.54l-3-7.1ZM82.66,34.8l1.58-3.72,1.55,3.72Z"}}),s("polygon",{attrs:{points:"87.59 30.92 90.19 30.92 90.19 37.56 90.7 37.56 90.7 30.92 93.3 30.92 93.3 30.46 87.59 30.46 87.59 30.92"}}),s("rect",{attrs:{x:"94.9",y:"30.46",width:"0.51",height:"7.1"}}),s("path",{attrs:{d:"M103,31.55a3.4,3.4,0,0,0-1-.83,2.93,2.93,0,0,0-1.36-.32,3,3,0,0,0-1.32.29,3.35,3.35,0,0,0-1.06.8,3.8,3.8,0,0,0-.7,1.15A3.69,3.69,0,0,0,97.28,34a3.81,3.81,0,0,0,.24,1.33,3.61,3.61,0,0,0,.68,1.15,3.47,3.47,0,0,0,1,.81,2.94,2.94,0,0,0,1.35.31,3,3,0,0,0,1.32-.29,3.38,3.38,0,0,0,1.05-.79,3.75,3.75,0,0,0,.71-3.82A3.79,3.79,0,0,0,103,31.55Zm.2,3.6a3.34,3.34,0,0,1-.57,1,2.8,2.8,0,0,1-.88.71,2.44,2.44,0,0,1-1.16.27,2.52,2.52,0,0,1-1.14-.26,2.86,2.86,0,0,1-.89-.7,3.17,3.17,0,0,1-.58-1A3.42,3.42,0,0,1,97.79,34a3.36,3.36,0,0,1,.2-1.14,3.29,3.29,0,0,1,.57-1,2.87,2.87,0,0,1,.89-.71,2.48,2.48,0,0,1,1.16-.27,2.42,2.42,0,0,1,1.12.26,2.89,2.89,0,0,1,.89.7,3.26,3.26,0,0,1,.58,1,3.37,3.37,0,0,1,0,2.31Z"}}),s("polygon",{attrs:{points:"111.17 36.71 106.19 30.46 105.8 30.46 105.8 37.56 106.31 37.56 106.31 31.42 111.21 37.56 111.68 37.56 111.68 30.46 111.17 30.46 111.17 36.71"}}),s("path",{attrs:{d:"M118.12,34.41a3,3,0,0,0-.79-.36q-.47-.15-1-.27l-.94-.23a2.46,2.46,0,0,1-.64-.27,1,1,0,0,1-.37-.38,1.19,1.19,0,0,1-.12-.57,1.31,1.31,0,0,1,.47-1.06,2.36,2.36,0,0,1,1.52-.4,2.48,2.48,0,0,1,1.95.77l.26-.4a2.92,2.92,0,0,0-1-.62,3.44,3.44,0,0,0-1.23-.21,3.73,3.73,0,0,0-1,.13,2.29,2.29,0,0,0-.79.38,1.79,1.79,0,0,0-.51.63,1.86,1.86,0,0,0-.19.85,1.59,1.59,0,0,0,.15.73,1.36,1.36,0,0,0,.45.5A2.64,2.64,0,0,0,115,34q.44.13,1,.25t1,.25a2.77,2.77,0,0,1,.7.31,1.26,1.26,0,0,1,.41.42,1.18,1.18,0,0,1,.14.6,1.14,1.14,0,0,1-.53,1,2.65,2.65,0,0,1-1.46.34,3.71,3.71,0,0,1-1.46-.28,3.25,3.25,0,0,1-1.1-.75l-.27.41a4,4,0,0,0,2.81,1.06,4.19,4.19,0,0,0,1-.12,2.44,2.44,0,0,0,.8-.36,1.64,1.64,0,0,0,.52-.58,1.72,1.72,0,0,0,.19-.82,1.64,1.64,0,0,0-.17-.79A1.57,1.57,0,0,0,118.12,34.41Z"}}),s("path",{attrs:{d:"M125.57,30.46l-3,7.1h.55l1-2.34h3.39l1,2.34H129l-3-7.1Zm-1.36,4.34,1.58-3.72,1.55,3.72Z"}}),s("polygon",{attrs:{points:"135.96 36.71 130.98 30.46 130.59 30.46 130.59 37.56 131.1 37.56 131.1 31.42 136 37.56 136.47 37.56 136.47 30.46 135.96 30.46 135.96 36.71"}}),s("path",{attrs:{d:"M143.71,31.5a3,3,0,0,0-1.06-.76,3.63,3.63,0,0,0-1.47-.28h-2.36v7.1h2.36a3.66,3.66,0,0,0,1.39-.25,3,3,0,0,0,1.07-.72,3.16,3.16,0,0,0,.67-1.12,4.3,4.3,0,0,0,.24-1.46,4.42,4.42,0,0,0-.21-1.37A3.19,3.19,0,0,0,143.71,31.5Zm.14,3.72a2.86,2.86,0,0,1-.54,1,2.47,2.47,0,0,1-.89.65,3,3,0,0,1-1.24.24h-1.85V30.92h1.85a3,3,0,0,1,1.22.23,2.53,2.53,0,0,1,.9.64,2.78,2.78,0,0,1,.55,1A3.85,3.85,0,0,1,144,34,3.92,3.92,0,0,1,143.85,35.22Z"}}),s("path",{attrs:{d:"M153.61,34.41a3,3,0,0,0-.79-.36q-.47-.15-1-.27l-.94-.23a2.46,2.46,0,0,1-.64-.27,1,1,0,0,1-.37-.38,1.19,1.19,0,0,1-.12-.57,1.31,1.31,0,0,1,.47-1.06,2.36,2.36,0,0,1,1.52-.4,2.48,2.48,0,0,1,1.95.77l.26-.4a2.92,2.92,0,0,0-1-.62,3.44,3.44,0,0,0-1.23-.21,3.73,3.73,0,0,0-1,.13,2.29,2.29,0,0,0-.79.38,1.79,1.79,0,0,0-.51.63,1.86,1.86,0,0,0-.19.85,1.59,1.59,0,0,0,.15.73,1.36,1.36,0,0,0,.45.5,2.64,2.64,0,0,0,.73.34q.44.13,1,.25t1,.25a2.77,2.77,0,0,1,.7.31,1.26,1.26,0,0,1,.41.42,1.18,1.18,0,0,1,.14.6,1.14,1.14,0,0,1-.53,1,2.65,2.65,0,0,1-1.46.34,3.71,3.71,0,0,1-1.46-.28,3.25,3.25,0,0,1-1.1-.75l-.27.41a4,4,0,0,0,2.81,1.06,4.19,4.19,0,0,0,1-.12,2.44,2.44,0,0,0,.8-.36,1.64,1.64,0,0,0,.52-.58,1.72,1.72,0,0,0,.19-.82,1.64,1.64,0,0,0-.17-.79A1.57,1.57,0,0,0,153.61,34.41Z"}}),s("path",{attrs:{d:"M161.31,31.55a3.4,3.4,0,0,0-1-.83,2.93,2.93,0,0,0-1.36-.32,3,3,0,0,0-1.32.29,3.35,3.35,0,0,0-1.06.8,3.8,3.8,0,0,0-.7,1.15,3.69,3.69,0,0,0-.25,1.36,3.81,3.81,0,0,0,.24,1.33,3.61,3.61,0,0,0,.68,1.15,3.47,3.47,0,0,0,1,.81,2.94,2.94,0,0,0,1.35.31,3,3,0,0,0,1.32-.29,3.38,3.38,0,0,0,1.05-.79A3.75,3.75,0,0,0,162,32.7,3.79,3.79,0,0,0,161.31,31.55Zm.2,3.6a3.34,3.34,0,0,1-.57,1,2.8,2.8,0,0,1-.88.71,2.44,2.44,0,0,1-1.16.27,2.52,2.52,0,0,1-1.14-.26,2.86,2.86,0,0,1-.89-.7,3.17,3.17,0,0,1-.58-1,3.42,3.42,0,0,1-.21-1.17,3.36,3.36,0,0,1,.2-1.14,3.29,3.29,0,0,1,.57-1,2.87,2.87,0,0,1,.89-.71,2.48,2.48,0,0,1,1.16-.27,2.42,2.42,0,0,1,1.12.26,2.89,2.89,0,0,1,.89.7,3.26,3.26,0,0,1,.58,1,3.37,3.37,0,0,1,0,2.31Z"}}),s("polygon",{attrs:{points:"164.1 37.56 164.61 37.56 164.61 34.18 168.1 34.18 168.1 33.74 164.61 33.74 164.61 30.92 168.72 30.92 168.72 30.46 164.1 30.46 164.1 37.56"}}),s("polygon",{attrs:{points:"169.79 30.92 172.39 30.92 172.39 37.56 172.9 37.56 172.9 30.92 175.5 30.92 175.5 30.46 169.79 30.46 169.79 30.92"}}),s("polygon",{attrs:{points:"183.18 36.96 181.69 33.5 182.94 30.51 182.44 30.51 181.38 33.09 180.32 30.51 179.82 30.51 181.07 33.5 179.6 36.96 176.87 30.46 176.32 30.46 179.35 37.56 179.82 37.56 181.39 33.91 182.95 37.56 183.42 37.56 186.46 30.46 185.9 30.46 183.18 36.96"}}),s("path",{attrs:{d:"M189.65,30.46l-3,7.1h.55l1-2.34h3.39l1,2.34h.54l-3-7.1Zm-1.36,4.34,1.58-3.72,1.55,3.72Z"}}),s("path",{attrs:{d:"M198.7,34.55a1.92,1.92,0,0,0,.53-.48,2.23,2.23,0,0,0,.34-.65,2.41,2.41,0,0,0,.12-.76,2.16,2.16,0,0,0-.16-.79,2.43,2.43,0,0,0-.43-.71,2.13,2.13,0,0,0-.66-.5,1.84,1.84,0,0,0-.83-.19h-3v7.1h.51V34.88h2.3l1.72,2.68h.59L198,34.8A1.86,1.86,0,0,0,198.7,34.55Zm-3.52-.14V30.92h2.42a1.33,1.33,0,0,1,.61.14,1.7,1.7,0,0,1,.5.38,1.86,1.86,0,0,1,.34.56,1.76,1.76,0,0,1,.13.65,2,2,0,0,1-.11.65,1.76,1.76,0,0,1-.3.56,1.58,1.58,0,0,1-.48.4,1.3,1.3,0,0,1-.62.15Z"}}),s("polygon",{attrs:{points:"202.17 34.15 205.78 34.15 205.78 33.71 202.17 33.71 202.17 30.92 206.3 30.92 206.3 30.46 201.66 30.46 201.66 37.56 206.39 37.56 206.39 37.1 202.17 37.1 202.17 34.15"}})])},staticRenderFns:[]}},230:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 935.45 243.64"}},[s("title",[t._v("Open Knowledge International")]),s("path",{staticClass:"a",attrs:{d:"M312.56,89.31A23.3,23.3,0,0,1,311,97.87a19.79,19.79,0,0,1-11.18,11.32,24.51,24.51,0,0,1-17.63,0,20.5,20.5,0,0,1-6.82-4.51A19.87,19.87,0,0,1,271,97.87a24.36,24.36,0,0,1,0-17.1,19.92,19.92,0,0,1,4.39-6.8,20.5,20.5,0,0,1,6.82-4.51,24.51,24.51,0,0,1,17.63,0,20.09,20.09,0,0,1,6.8,4.52A20.48,20.48,0,0,1,311,80.8,23.07,23.07,0,0,1,312.56,89.31Zm-8.9,0a18.82,18.82,0,0,0-.87-5.93,12.65,12.65,0,0,0-2.51-4.47,10.92,10.92,0,0,0-4-2.81,15,15,0,0,0-10.6,0,10.83,10.83,0,0,0-4,2.81,12.65,12.65,0,0,0-2.51,4.47,20.75,20.75,0,0,0,0,11.89,12.47,12.47,0,0,0,2.51,4.45,10.81,10.81,0,0,0,4,2.8,15,15,0,0,0,10.6,0,10.9,10.9,0,0,0,4-2.8,12.47,12.47,0,0,0,2.51-4.45A18.92,18.92,0,0,0,303.66,89.31Z"}}),s("path",{staticClass:"a",attrs:{d:"M336.8,95.89v14.47h-8.7V68.29h14.21a24.37,24.37,0,0,1,7.47,1A14.28,14.28,0,0,1,355,72.13a11.18,11.18,0,0,1,3,4.3,14.8,14.8,0,0,1,1,5.43,15.31,15.31,0,0,1-1,5.68A11.6,11.6,0,0,1,354.84,92a14.13,14.13,0,0,1-5.19,2.88,23.43,23.43,0,0,1-7.34,1Zm0-6.67h5.51c2.73,0,4.73-.65,6-2a7.42,7.42,0,0,0,1.9-5.39,8.13,8.13,0,0,0-.48-2.86,5.68,5.68,0,0,0-1.45-2.2,6.53,6.53,0,0,0-2.45-1.41,11.05,11.05,0,0,0-3.51-.49H336.8Z"}}),s("path",{staticClass:"a",attrs:{d:"M400.43,68.29V75.1h-18V85.92h14V92.5h-14v11h18v6.81h-26.8V68.29Z"}}),s("path",{staticClass:"a",attrs:{d:"M421.61,68.33a2.25,2.25,0,0,1,.71.2,2.76,2.76,0,0,1,.61.42,5.73,5.73,0,0,1,.64.7l21.11,26.82c-.07-.73-.13-1.45-.17-2.14s-.06-1.36-.06-2V68.29h7.69v42.07h-4.5a4,4,0,0,1-1.71-.33,4.09,4.09,0,0,1-1.36-1.14l-21-26.66c.06.68.1,1.34.13,2s0,1.25,0,1.81v24.33h-7.68V68.29h4.58A8.46,8.46,0,0,1,421.61,68.33Z"}}),s("path",{staticClass:"a",attrs:{d:"M501.75,85.66h1.72a3.56,3.56,0,0,0,3.1-1.34l10.64-14.24a4.19,4.19,0,0,1,1.65-1.4,5.57,5.57,0,0,1,2.21-.39h7.54l-13.4,17.25a8.61,8.61,0,0,1-2.7,2.41A6.9,6.9,0,0,1,514.34,89a8.58,8.58,0,0,1,1.57,1.72l13.74,19.63h-7.74a6.08,6.08,0,0,1-1.29-.11,4.31,4.31,0,0,1-.94-.32,2.63,2.63,0,0,1-.7-.51,4.59,4.59,0,0,1-.55-.71L507.61,93.57a3.11,3.11,0,0,0-1.3-1.11,5.26,5.26,0,0,0-2.12-.34h-2.44v18.24h-8.7V68.29h8.7Z"}}),s("path",{staticClass:"a",attrs:{d:"M548.05,68.33a2.25,2.25,0,0,1,.71.2,3,3,0,0,1,.61.42,6.67,6.67,0,0,1,.64.7l21.11,26.82C571,95.74,571,95,571,94.33s-.06-1.36-.06-2V68.29h7.68v42.07h-4.49a4,4,0,0,1-1.71-.33,4.11,4.11,0,0,1-1.37-1.14L550,82.23c.06.68.1,1.34.13,2s0,1.25,0,1.81v24.33h-7.68V68.29h4.58A8.46,8.46,0,0,1,548.05,68.33Z"}}),s("path",{staticClass:"a",attrs:{d:"M637.21,89.31a23.09,23.09,0,0,1-1.55,8.56,19.84,19.84,0,0,1-4.38,6.81,20.21,20.21,0,0,1-6.8,4.51,24.51,24.51,0,0,1-17.63,0,20.5,20.5,0,0,1-6.82-4.51,19.87,19.87,0,0,1-4.39-6.81,24.36,24.36,0,0,1,0-17.1A19.92,19.92,0,0,1,600,74a20.5,20.5,0,0,1,6.82-4.51,24.51,24.51,0,0,1,17.63,0A19.83,19.83,0,0,1,635.66,80.8,22.87,22.87,0,0,1,637.21,89.31Zm-8.9,0a18.82,18.82,0,0,0-.87-5.93,12.65,12.65,0,0,0-2.51-4.47,10.92,10.92,0,0,0-4-2.81,15,15,0,0,0-10.6,0,10.83,10.83,0,0,0-4,2.81,12.65,12.65,0,0,0-2.51,4.47,20.75,20.75,0,0,0,0,11.89,12.47,12.47,0,0,0,2.51,4.45,10.81,10.81,0,0,0,4,2.8,15,15,0,0,0,10.6,0,10.9,10.9,0,0,0,4-2.8,12.47,12.47,0,0,0,2.51-4.45A18.92,18.92,0,0,0,628.31,89.31Z"}}),s("path",{staticClass:"a",attrs:{d:"M647.68,68.29H655a3.29,3.29,0,0,1,1.9.52,2.41,2.41,0,0,1,1,1.39l6.52,23.72c.16.68.32,1.39.48,2.15s.33,1.55.48,2.4c.17-.85.36-1.65.55-2.42s.41-1.47.64-2.13l7.6-23.72a2.78,2.78,0,0,1,1-1.32,2.92,2.92,0,0,1,1.87-.59h2.55a3,3,0,0,1,1.84.53,3.21,3.21,0,0,1,1.06,1.38l7.57,23.72c.21.62.42,1.3.62,2s.39,1.51.54,2.32c.16-.81.31-1.58.46-2.32s.31-1.41.47-2l6.52-23.72a2.5,2.5,0,0,1,1-1.33,3,3,0,0,1,1.88-.58h6.85l-13,42.07h-7.86l-8.61-27.52a9.45,9.45,0,0,1-.42-1.27c-.13-.47-.25-.95-.37-1.45-.13.5-.26,1-.39,1.45s-.25.89-.39,1.27l-8.7,27.52H660.7Z"}}),s("path",{staticClass:"a",attrs:{d:"M731,103.29h16.27v7.07h-25V68.29H731Z"}}),s("path",{staticClass:"a",attrs:{d:"M788.5,68.29V75.1h-18V85.92h14V92.5h-14v11h18v6.81H761.71V68.29Z"}}),s("path",{staticClass:"a",attrs:{d:"M841.89,89.31a22.68,22.68,0,0,1-1.55,8.48,19.22,19.22,0,0,1-4.38,6.66,20.14,20.14,0,0,1-6.8,4.35,23.94,23.94,0,0,1-8.81,1.56H804.16V68.29h16.19a23.94,23.94,0,0,1,8.81,1.56,19.89,19.89,0,0,1,6.8,4.37,19.27,19.27,0,0,1,4.38,6.65A22.51,22.51,0,0,1,841.89,89.31Zm-8.93,0a18.88,18.88,0,0,0-.87-5.94,12.59,12.59,0,0,0-2.49-4.47,10.89,10.89,0,0,0-4-2.81,13.45,13.45,0,0,0-5.29-1h-7.43v28.45h7.43a13.63,13.63,0,0,0,5.29-1,10.79,10.79,0,0,0,4-2.82,12.64,12.64,0,0,0,2.49-4.48A19,19,0,0,0,833,89.31Z"}}),s("path",{staticClass:"a",attrs:{d:"M885.52,109.74a26.54,26.54,0,0,1-7.7,1.09,26.13,26.13,0,0,1-9.39-1.61,21.21,21.21,0,0,1-7.2-4.48,20,20,0,0,1-4.61-6.82A22.45,22.45,0,0,1,855,89.31a23.58,23.58,0,0,1,1.55-8.67A19.47,19.47,0,0,1,861,73.85a20.24,20.24,0,0,1,6.95-4.43,24.69,24.69,0,0,1,9.12-1.6,26.69,26.69,0,0,1,4.87.42,23.8,23.8,0,0,1,4.18,1.16,19.91,19.91,0,0,1,6.41,4L890,77.28a2.38,2.38,0,0,1-1.5,1.13,2.76,2.76,0,0,1-2-.47c-.7-.42-1.38-.81-2.05-1.14a15.62,15.62,0,0,0-2.13-.89,15.44,15.44,0,0,0-2.47-.58,21.26,21.26,0,0,0-3.07-.2,13.55,13.55,0,0,0-5.31,1,11.39,11.39,0,0,0-4,2.88,12.8,12.8,0,0,0-2.57,4.46,17.79,17.79,0,0,0-.9,5.83,18.24,18.24,0,0,0,1,6.22,13,13,0,0,0,2.78,4.63A12,12,0,0,0,872,103a15.27,15.27,0,0,0,5.58,1,15.08,15.08,0,0,0,3.73-.42,18.79,18.79,0,0,0,3.2-1.14V95.37h-4.75a1.85,1.85,0,0,1-1.32-.45,1.5,1.5,0,0,1-.48-1.14V88.93h14.44V106.3A22.34,22.34,0,0,1,885.52,109.74Z"}}),s("path",{staticClass:"a",attrs:{d:"M935.45,68.29V75.1h-18V85.92h14V92.5h-14v11h18v6.81h-26.8V68.29Z"}}),s("path",{staticClass:"a",attrs:{d:"M278.6,178.57h-5.33v-39.4h5.33Z"}}),s("path",{staticClass:"a",attrs:{d:"M301.66,139.34a3,3,0,0,1,.79.73l22.82,29.7c0-.47-.09-.94-.11-1.39s0-.88,0-1.3V139.17h4.68v39.4h-2.7a2.28,2.28,0,0,1-1.06-.22,2.53,2.53,0,0,1-.83-.74l-22.8-29.67c0,.46.06.9.08,1.35s0,.84,0,1.21v28.07h-4.68v-39.4h2.75A2.4,2.4,0,0,1,301.66,139.34Z"}}),s("path",{staticClass:"a",attrs:{d:"M375,139.17v4.48H362.23v34.92H356.9V143.65H344.11v-4.48Z"}}),s("path",{staticClass:"a",attrs:{d:"M413.55,139.17v4.34H394.63V156.6h15.31v4.18H394.63v13.45h18.92v4.34H389.26v-39.4Z"}}),s("path",{staticClass:"a",attrs:{d:"M435.77,162.13v16.44h-5.31v-39.4H441.6a24.55,24.55,0,0,1,6.46.75,12.31,12.31,0,0,1,4.49,2.19,8.67,8.67,0,0,1,2.63,3.45,11.49,11.49,0,0,1,.85,4.52,11.34,11.34,0,0,1-.66,3.91,10.29,10.29,0,0,1-1.91,3.26,11.45,11.45,0,0,1-3,2.46,15.1,15.1,0,0,1-4.08,1.54,5.66,5.66,0,0,1,1.76,1.67l11.49,15.65h-4.73a2.3,2.3,0,0,1-2.14-1.13l-10.23-14.07a3,3,0,0,0-1-1,3.58,3.58,0,0,0-1.65-.29Zm0-3.88h5.58a13.75,13.75,0,0,0,4.11-.56,8.44,8.44,0,0,0,3-1.6,6.59,6.59,0,0,0,1.8-2.46,8.09,8.09,0,0,0,.61-3.16,6.28,6.28,0,0,0-2.33-5.31q-2.33-1.78-6.91-1.79h-5.83Z"}}),s("path",{staticClass:"a",attrs:{d:"M477.83,139.34a2.8,2.8,0,0,1,.78.73l22.82,29.7c-.05-.47-.09-.94-.1-1.39s0-.88,0-1.3V139.17H506v39.4h-2.69a2.25,2.25,0,0,1-1.06-.22,2.56,2.56,0,0,1-.84-.74l-22.8-29.67c0,.46.07.9.08,1.35s0,.84,0,1.21v28.07H474v-39.4h2.75A2.43,2.43,0,0,1,477.83,139.34Z"}}),s("path",{staticClass:"a",attrs:{d:"M556.71,178.57h-4.13a1.76,1.76,0,0,1-1.15-.36,2.22,2.22,0,0,1-.66-.9l-3.69-9.52H529.4l-3.68,9.52a2.2,2.2,0,0,1-.66.88,1.8,1.8,0,0,1-1.16.38h-4.12l15.76-39.4H541Zm-25.82-14.63H545.6l-6.19-16a31.74,31.74,0,0,1-1.18-3.71c-.2.75-.4,1.44-.59,2.07s-.38,1.19-.56,1.67Z"}}),s("path",{staticClass:"a",attrs:{d:"M593.59,139.17v4.48H580.86v34.92h-5.34V143.65H562.73v-4.48Z"}}),s("path",{staticClass:"a",attrs:{d:"M614.21,178.57h-5.33v-39.4h5.33Z"}}),s("path",{staticClass:"a",attrs:{d:"M670.06,158.88a22.68,22.68,0,0,1-1.4,8.13,18.41,18.41,0,0,1-4,6.36,17.62,17.62,0,0,1-6.14,4.14,22.12,22.12,0,0,1-15.86,0,17.67,17.67,0,0,1-6.13-4.14,18.41,18.41,0,0,1-4-6.36,24.28,24.28,0,0,1,0-16.25,18.5,18.5,0,0,1,4-6.38,17.74,17.74,0,0,1,6.13-4.17,21.85,21.85,0,0,1,15.86,0,17.69,17.69,0,0,1,6.14,4.17,18.5,18.5,0,0,1,4,6.38A22.59,22.59,0,0,1,670.06,158.88Zm-5.47,0a20,20,0,0,0-1-6.51,13.78,13.78,0,0,0-2.8-4.89,12.11,12.11,0,0,0-4.4-3.06,15.93,15.93,0,0,0-11.53,0,12.24,12.24,0,0,0-4.41,3.06,13.67,13.67,0,0,0-2.82,4.89,21.9,21.9,0,0,0,0,13,13.71,13.71,0,0,0,2.82,4.86,12.24,12.24,0,0,0,4.41,3.06,16.21,16.21,0,0,0,11.53,0,12.11,12.11,0,0,0,4.4-3.06,13.82,13.82,0,0,0,2.8-4.86A20,20,0,0,0,664.59,158.88Z"}}),s("path",{staticClass:"a",attrs:{d:"M689.85,139.34a2.8,2.8,0,0,1,.78.73l22.83,29.7c-.06-.47-.09-.94-.11-1.39s0-.88,0-1.3V139.17H718v39.4h-2.7a2.28,2.28,0,0,1-1.06-.22,2.66,2.66,0,0,1-.84-.74l-22.79-29.67c0,.46.06.9.08,1.35s0,.84,0,1.21v28.07H686v-39.4h2.75A2.4,2.4,0,0,1,689.85,139.34Z"}}),s("path",{staticClass:"a",attrs:{d:"M768.73,178.57h-4.12a1.79,1.79,0,0,1-1.16-.36,2.22,2.22,0,0,1-.66-.9l-3.68-9.52H741.43l-3.69,9.52a2.2,2.2,0,0,1-.66.88,1.79,1.79,0,0,1-1.15.38H731.8l15.76-39.4H753Zm-25.82-14.63h14.71l-6.18-16a29.79,29.79,0,0,1-1.19-3.71c-.2.75-.39,1.44-.59,2.07s-.38,1.19-.56,1.67Z"}}),s("path",{staticClass:"a",attrs:{d:"M787.74,174.09h17v4.48H782.4v-39.4h5.34Z"}}),s("rect",{staticClass:"a",attrs:{x:"165.76",y:"30.99",width:"64.66",height:"7.81",transform:"translate(51.58 172.7) rotate(-53.24)"}}),s("rect",{staticClass:"a",attrs:{x:"157.97",y:"35.47",width:"31.15",height:"7.81",transform:"translate(60.95 177.18) rotate(-63.53)"}}),s("rect",{staticClass:"a",attrs:{x:"135.66",y:"20.7",width:"48.97",height:"7.81",transform:"matrix(0.28, -0.96, 0.96, 0.28, 91.88, 171.54)"}}),s("rect",{staticClass:"a",attrs:{x:"125.36",y:"25.98",width:"31.14",height:"7.81",transform:"translate(96.68 166.99) rotate(-84.09)"}}),s("rect",{staticClass:"a",attrs:{x:"119.82",y:"10.34",width:"7.81",height:"34.89",transform:"translate(-1.76 9.54) rotate(-4.38)"}}),s("rect",{staticClass:"a",attrs:{x:"104.07",y:"24.04",width:"7.81",height:"23.88",transform:"translate(-5.59 28.51) rotate(-14.67)"}}),s("rect",{staticClass:"a",attrs:{x:"90.29",y:"37.1",width:"7.81",height:"16.01",transform:"translate(-10.23 43.96) rotate(-24.96)"}}),s("rect",{staticClass:"a",attrs:{x:"79.51",y:"53.8",width:"7.81",height:"6.28",transform:"translate(-17.57 58.54) rotate(-35.22)"}}),s("rect",{staticClass:"a",attrs:{x:"61.29",y:"46.91",width:"7.81",height:"25.67",transform:"translate(-23.11 64.41) rotate(-45.52)"}}),s("polygon",{staticClass:"a",attrs:{points:"63.12 83 34.77 63.56 39.16 57.1 67.51 76.54 63.12 83"}}),s("rect",{staticClass:"a",attrs:{x:"45.55",y:"78.52",width:"7.81",height:"19.52",transform:"translate(-51.29 97.72) rotate(-66.1)"}}),s("rect",{staticClass:"a",attrs:{x:"23.45",y:"72.14",width:"7.81",height:"54.4",transform:"translate(-75.63 102.53) rotate(-76.38)"}}),s("rect",{staticClass:"a",attrs:{x:"28.05",y:"98.94",width:"7.81",height:"39.51",transform:"translate(-88.4 143.7) rotate(-86.67)"}}),s("rect",{staticClass:"a",attrs:{x:"13.75",y:"132.53",width:"38.51",height:"7.81",transform:"translate(-16.25 4.99) rotate(-6.94)"}}),s("rect",{staticClass:"a",attrs:{x:"46.35",y:"145.47",width:"8.95",height:"7.81",transform:"translate(-41.98 21.77) rotate(-17.24)"}}),s("rect",{staticClass:"a",attrs:{x:"29.96",y:"164.82",width:"32.4",height:"7.81",transform:"translate(-72.74 40.42) rotate(-27.52)"}}),s("rect",{staticClass:"a",attrs:{x:"36.96",y:"180.05",width:"34.93",height:"7.81",transform:"translate(-101.35 71.98) rotate(-37.81)"}}),s("rect",{staticClass:"a",attrs:{x:"49.54",y:"192.46",width:"34.05",height:"7.81",transform:"translate(-124.05 114.79) rotate(-48.11)"}}),s("rect",{staticClass:"a",attrs:{x:"77.38",y:"195.02",width:"15.72",height:"7.81",transform:"translate(-128.85 167.24) rotate(-58.38)"}}),s("rect",{staticClass:"a",attrs:{x:"81.26",y:"208.95",width:"30.6",height:"7.81",transform:"translate(-136.84 225.33) rotate(-68.66)"}}),s("rect",{staticClass:"a",attrs:{x:"99.09",y:"212.46",width:"28.08",height:"7.81",transform:"translate(-120.9 285.95) rotate(-78.96)"}}),s("rect",{staticClass:"a",attrs:{x:"120.11",y:"209.92",width:"19.53",height:"7.81",transform:"translate(-85.68 340.82) rotate(-89.23)"}}),s("rect",{staticClass:"a",attrs:{x:"143.45",y:"202.72",width:"7.81",height:"37.77",transform:"translate(-34.65 27.45) rotate(-9.53)"}}),s("rect",{staticClass:"a",attrs:{x:"157.99",y:"198.7",width:"7.81",height:"22.82",transform:"translate(-61.62 67.29) rotate(-19.81)"}}),s("polygon",{staticClass:"a",attrs:{points:"167.58 195.32 195.91 243.64 202.67 239.72 174.34 191.4 167.58 195.32"}}),s("polygon",{staticClass:"a",attrs:{points:"184.11 192.27 179.79 187.84 185.44 182.44 189.75 186.87 184.11 192.27"}}),s("rect",{staticClass:"a",attrs:{x:"198.44",y:"170.36",width:"7.81",height:"25.18",transform:"translate(-67.41 223.52) rotate(-50.67)"}}),s("rect",{staticClass:"a",attrs:{x:"206.67",y:"157.32",width:"7.81",height:"22.75",transform:"translate(-39.13 270.9) rotate(-60.96)"}}),s("rect",{staticClass:"a",attrs:{x:"207.32",y:"146.69",width:"7.81",height:"10.15",transform:"translate(-0.39 302.98) rotate(-71.25)"}}),s("rect",{staticClass:"a",attrs:{x:"220.93",y:"123.3",width:"7.81",height:"30.43",transform:"translate(54.7 340.49) rotate(-81.53)"}}),s("rect",{staticClass:"a",attrs:{x:"210.62",y:"117.82",width:"19.33",height:"7.81",transform:"matrix(1, -0.03, 0.03, 1, -3.74, 7.03)"}}),s("rect",{staticClass:"a",attrs:{x:"208.63",y:"101.41",width:"24.43",height:"7.81",transform:"translate(-17.16 48.58) rotate(-12.09)"}}),s("rect",{staticClass:"a",attrs:{x:"204.05",y:"87.17",width:"16.66",height:"7.81",transform:"translate(-18.68 87.75) rotate(-22.39)"}}),s("rect",{staticClass:"a",attrs:{x:"194.26",y:"64.61",width:"48.45",height:"7.81",transform:"translate(-2.43 128.76) rotate(-32.66)"}}),s("rect",{staticClass:"a",attrs:{x:"188.23",y:"63.55",width:"8.42",height:"7.81",transform:"translate(5.63 149.23) rotate(-42.96)"}}),s("polygon",{staticClass:"b",attrs:{points:"159.91 88.99 156.91 86.48 158.96 84.05 161.96 86.56 160.51 88.29 159.91 88.99"}}),s("rect",{staticClass:"b",attrs:{x:"144.39",y:"84.06",width:"11.88",height:"3.9",transform:"translate(6.36 182.29) rotate(-63.55)"}}),s("rect",{staticClass:"b",attrs:{x:"140.41",y:"78.83",width:"6.86",height:"3.9",transform:"translate(26.2 196.45) rotate(-73.83)"}}),s("rect",{staticClass:"b",attrs:{x:"129.66",y:"79.73",width:"11.81",height:"3.91",transform:"translate(40.42 208.16) rotate(-84.12)"}}),s("rect",{staticClass:"b",attrs:{x:"125.85",y:"75.67",width:"3.91",height:"10.9",transform:"translate(-5.82 10) rotate(-4.38)"}}),s("rect",{staticClass:"b",attrs:{x:"118.52",y:"76.92",width:"3.91",height:"13.81",transform:"translate(-17.3 33.25) rotate(-14.67)"}}),s("rect",{staticClass:"b",attrs:{x:"111.89",y:"79.37",width:"3.91",height:"16.07",transform:"translate(-26.25 56.19) rotate(-24.95)"}}),s("polygon",{staticClass:"b",attrs:{points:"113.16 102.67 101.25 85.65 104.44 83.39 116.35 100.42 113.16 102.67"}}),s("rect",{staticClass:"b",attrs:{x:"98.99",y:"88.2",width:"3.91",height:"13.43",transform:"translate(-37.5 100.43) rotate(-45.52)"}}),s("rect",{staticClass:"b",attrs:{x:"93.58",y:"94.38",width:"3.9",height:"11.96",transform:"translate(-41.17 122.97) rotate(-55.81)"}}),s("rect",{staticClass:"b",attrs:{x:"91.41",y:"100.1",width:"3.91",height:"15.42",transform:"translate(-43.03 149.47) rotate(-66.09)"}}),s("rect",{staticClass:"b",attrs:{x:"84.22",y:"110.88",width:"3.91",height:"5.54",transform:"translate(-44.58 170.64) rotate(-76.38)"}}),s("rect",{staticClass:"b",attrs:{x:"85.1",y:"117.1",width:"3.9",height:"9.76",transform:"translate(-39.76 201.81) rotate(-86.68)"}}),s("rect",{staticClass:"b",attrs:{x:"82.42",y:"127.91",width:"10.07",height:"3.91",transform:"translate(-15.08 11.54) rotate(-6.95)"}}),s("polygon",{staticClass:"b",attrs:{points:"84.88 140.93 83.72 137.21 102.66 131.4 103.81 135.13 84.88 140.93"}}),s("rect",{staticClass:"b",attrs:{x:"86.98",y:"142.54",width:"11.7",height:"3.91",transform:"translate(-56.31 59.34) rotate(-27.56)"}}),s("rect",{staticClass:"b",attrs:{x:"91.22",y:"149.24",width:"11.08",height:"3.91",transform:"translate(-72.35 90.98) rotate(-37.78)"}}),s("rect",{staticClass:"b",attrs:{x:"96.46",y:"154.81",width:"11.45",height:"3.9",transform:"translate(-82.74 128.12) rotate(-48.09)"}}),s("rect",{staticClass:"b",attrs:{x:"101.58",y:"157.5",width:"16.05",height:"3.91",transform:"translate(-83.64 169.25) rotate(-58.4)"}}),s("rect",{staticClass:"b",attrs:{x:"109.42",y:"162.63",width:"12.09",height:"3.91",transform:"translate(-79.82 212.33) rotate(-68.69)"}}),s("rect",{staticClass:"b",attrs:{x:"116.37",y:"164.24",width:"13.19",height:"3.91",transform:"matrix(0.19, -0.98, 0.98, 0.19, -63.73, 254.99)"}}),s("rect",{staticClass:"b",attrs:{x:"122.84",y:"163.92",width:"15.4",height:"3.91",transform:"translate(-37.03 294.21) rotate(-89.24)"}}),s("rect",{staticClass:"b",attrs:{x:"136.42",y:"162.88",width:"3.9",height:"10.09",transform:"translate(-25.86 25.19) rotate(-9.52)"}}),s("rect",{staticClass:"b",attrs:{x:"143.24",y:"156.28",width:"3.91",height:"14.84",transform:"translate(-46.94 59) rotate(-19.84)"}}),s("rect",{staticClass:"b",attrs:{x:"152.8",y:"163.53",width:"3.91",height:"3.69",transform:"translate(-62.04 99.81) rotate(-30.07)"}}),s("polygon",{staticClass:"b",attrs:{points:"161.37 163.17 147.41 146.82 150.39 144.29 164.34 160.64 161.37 163.17"}}),s("rect",{staticClass:"b",attrs:{x:"161.86",y:"144.65",width:"3.9",height:"13.45",transform:"translate(-57.1 182.13) rotate(-50.67)"}}),s("rect",{staticClass:"b",attrs:{x:"165.81",y:"137.85",width:"3.91",height:"14.17",transform:"translate(-40.4 221.2) rotate(-60.95)"}}),s("polygon",{staticClass:"b",attrs:{points:"176.89 142.19 159.45 136.19 160.71 132.49 178.15 138.49 176.89 142.19"}}),s("rect",{staticClass:"b",attrs:{x:"171.73",y:"124.95",width:"3.91",height:"11.93",transform:"translate(18.54 283.36) rotate(-81.5)"}}),s("rect",{staticClass:"b",attrs:{x:"164.92",y:"121.32",width:"15.18",height:"3.9",transform:"translate(-3.84 5.56) rotate(-1.82)"}}),s("rect",{staticClass:"b",attrs:{x:"165.37",y:"113.8",width:"13.83",height:"3.91",transform:"translate(-20.44 38.69) rotate(-12.1)"}}),s("rect",{staticClass:"b",attrs:{x:"161.22",y:"106.97",width:"15.82",height:"3.9",transform:"translate(-28.72 72.54) rotate(-22.36)"}}),s("rect",{staticClass:"b",attrs:{x:"166.05",y:"98.02",width:"6.88",height:"3.91",transform:"translate(-27.16 107.25) rotate(-32.65)"}}),s("rect",{staticClass:"b",attrs:{x:"150.92",y:"95.54",width:"18.56",height:"3.91",transform:"translate(-23.49 135.28) rotate(-42.95)"}})])},staticRenderFns:[]}}});