(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[317],{3282:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news/[newsId]",function(){return t(8779)}])},7269:function(e,n,t){"use strict";var r=t(5893),s=t(7294),a=t(7674),c=t(7904),i=t(7103),o=t(5901);n.Z=function(){var e=(0,s.useContext)(o.Z).isNight;return(0,r.jsxs)("div",{className:"container",style:e?{backgroundColor:"#141518",color:"#FAFAFA"}:null,children:[(0,r.jsx)(c.Z,{}),(0,r.jsxs)("div",{className:"topContainer",children:[(0,r.jsx)(i.Z,{searchPlaceholder:"Search news on a stock",page:"news"}),(0,r.jsx)("div",{style:{height:"92vh",display:"flex",alignItems:"center"},children:(0,r.jsx)(a.iT,{color:"#00b075",height:80,width:80})})]})]})}},3053:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(5893),s=t(7294),a=t(7476),c=t.n(a),i=function(e){var n,t=e.title,a=e.source,i=e.snippet,o=e.image_url;return n=t.length>80?t.slice(0,80)+"...":t,(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)("div",{className:c().imageContainer,children:(0,r.jsx)("img",{src:o,alt:"Article Image",width:"210px",height:"150px",onError:function(e){e.target.src="/images/noImage.jpg"}})}),(0,r.jsxs)("div",{className:c().textContainer,children:[(0,r.jsx)("h2",{children:n}),(0,r.jsx)("p",{style:{fontSize:".8rem"},children:a}),(0,r.jsx)("p",{className:c().snippet,children:i})]})]})},o=t(5934),l=t(1664),u=t(6677),h=t.n(u),d=function(e){var n=e.title,t=e.data;return(0,r.jsxs)("div",{className:h().container,children:[(0,r.jsx)("h1",{style:{paddingTop:"2rem"},children:n}),t.map((function(e){return(0,r.jsx)(l.default,{href:e.url,children:(0,r.jsx)("a",{className:h().item,children:(0,r.jsx)(i,{title:e.title,source:e.source,snippet:e.snippet,image_url:e.image_url})})},(0,o.Z)())}))]})}},7904:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var r=t(5893),s=t(3008),a=t.n(s),c=t(9792),i=t.n(c),o=t(1664),l=t(4578),u=t(7294),h=t(5901),d=t(5570),x=t.n(d),_=function(){var e=(0,u.useContext)(h.Z).alert;return(0,r.jsx)("div",{className:x().container,children:e?(0,r.jsx)(l.gor,{className:x().bellAlt}):(0,r.jsx)(l.OUM,{className:x().bell})})},m=function(){return(0,r.jsxs)("div",{className:i().container,children:[(0,r.jsx)("h1",{children:"Stock Alerter"}),(0,r.jsx)(_,{})]})},j=t(5483),f=t.n(j),g=t(7885),p=t.n(g),N=function(e){var n=e.symbol,t=e.name,s=(0,u.useContext)(h.Z).isNight;return(0,r.jsxs)("div",{className:p().container,style:s?{color:"#CACACB"}:null,children:[(0,r.jsx)("span",{className:p().icon,children:n}),(0,r.jsx)("span",{className:p().word,children:t})]})},C=t(8193),v=t(3750),b=t(3990),w=t(9352),A=function(){return(0,r.jsxs)("div",{className:f().container,children:[(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)(N,{symbol:(0,r.jsx)(C.uME,{}),name:"Dashboard"})})}),(0,r.jsx)(o.default,{href:"/about",children:(0,r.jsx)("a",{children:(0,r.jsx)(N,{symbol:(0,r.jsx)(v.FPm,{}),name:"About"})})}),(0,r.jsx)(o.default,{href:"/news",children:(0,r.jsx)("a",{children:(0,r.jsx)(N,{symbol:(0,r.jsx)(b.zz8,{}),name:"News"})})}),(0,r.jsx)(o.default,{href:"/logout",children:(0,r.jsx)("a",{children:(0,r.jsx)(N,{symbol:(0,r.jsx)(w.Opj,{}),name:"Logout"})})})]})},k=function(e){var n=(0,u.useContext)(h.Z).isNight;return(0,r.jsxs)(u.Fragment,{children:[(0,r.jsxs)("nav",{className:a().container,style:n?{backgroundColor:"#424242",color:"#CACACB"}:null,children:[(0,r.jsx)(m,{}),(0,r.jsx)(A,{})]}),(0,r.jsx)("main",{children:e.children})]})}},7103:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(5893),s=t(9275),a=t.n(s),c=t(7294),i=t(1664),o=t(8595),l=function(e){var n=e.placeholder,t=e.page,s=(0,c.useState)(""),l=s[0],u=s[1],h=(0,c.useState)([]),d=h[0],x=h[1],_=(0,c.useContext)(o.Z),m=_.allStocks,j=_.setStockHome,f=_.setStockNews,g=_.scrollTop,p=function(e){"dashboard"===t&&(g(),j(e)),"news"===t&&f(e),u("")};return(0,c.useEffect)((function(){!function(){try{x(m.filter((function(e){return""===l?null:e.symbol.toLowerCase().includes(l.toLowerCase())||e.name.toLowerCase().includes(l.toLowerCase())?e:null})))}catch(e){console.log("did not connect to api")}}()}),[l]),(0,r.jsxs)("div",{className:a().searchContainer,children:[(0,r.jsxs)("form",{className:a().searchBar,autoComplete:"off",onSubmit:function(e){e.preventDefault(),u("")},children:[(0,r.jsx)("label",{htmlFor:"navSearch"}),(0,r.jsx)("input",{className:a().searchBarInput,id:"navSearch",type:"search",value:l,placeholder:n,onChange:function(e){u(e.target.value)},required:!0})]}),(0,r.jsx)("div",{className:a().searchResultsContainer,children:"news"===t?(0,r.jsx)("ul",{children:d.slice(0,8).map((function(e){var n=e.name,t=e.symbol;return(0,r.jsx)(i.default,{href:"/news/"+t,children:(0,r.jsx)("li",{className:a().searchItem,onClick:function(){return p(e)},children:(0,r.jsxs)("p",{children:[n," (",t,")"]})})},t)}))}):(0,r.jsx)("ul",{children:d.slice(0,8).map((function(e){var n=e.name,t=e.symbol;return(0,r.jsx)(i.default,{href:"/".concat(t),children:(0,r.jsx)("li",{className:a().searchItem,onClick:function(){return p(e)},children:(0,r.jsxs)("p",{children:[n," (",t,")"]})},t)},t)}))})})]})},u=t(5434),h=t(3819),d=t.n(h),x=t(5901),_=function(){var e=(0,c.useContext)(x.Z);return(0,r.jsxs)("div",{className:d().nightContainer,children:[(0,r.jsx)(u.Paj,{className:d().moon}),(0,r.jsxs)("label",{className:d().toggleContainer,children:[(0,r.jsx)("input",{className:d().toggle,type:"checkbox",onClick:e.changeNight}),(0,r.jsx)("span",{className:d().toggleBackground})]})]})},m=t(4264),j=t.n(m),f=function(e){var n=e.searchPlaceholder,t=e.page,s=(0,c.useContext)(x.Z);return(0,r.jsxs)("div",{className:j().container,style:s.isNight?{backgroundColor:"rgb(66,66,66)",color:"#FAFAFA"}:null,children:[(0,r.jsx)(l,{placeholder:n,page:t}),(0,r.jsx)(_,{})]})}},8779:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return u}});var r=t(5893),s=t(3053),a=t(7103),c=t(7904),i=t(7294),o=t(7269),l=t(5901),u=(t(8595),!0);n.default=function(e){var n=e.id,t=e.idInfo,u=(0,i.useContext)(l.Z).isNight;return t?(0,r.jsxs)("div",{className:"container",style:u?{backgroundColor:"#141518",color:"#FAFAFA"}:null,children:[(0,r.jsx)(c.Z,{}),(0,r.jsxs)("div",{className:"topContainer",children:[(0,r.jsx)(a.Z,{searchPlaceholder:"Search news on a stock",page:"news"}),(0,r.jsx)(s.Z,{title:"News on "+n,data:t.data})]})]}):(0,r.jsx)(o.Z,{})}},7476:function(e){e.exports={imageContainer:"NewsItem_imageContainer__F7kqK",textContainer:"NewsItem_textContainer__OKH7H",snippet:"NewsItem_snippet__UFmFT"}},6677:function(e){e.exports={container:"news_container__ZfoyK",item:"news_item__YDG2c"}},5570:function(e){e.exports={container:"Alert_container__5f45c",bell:"Alert_bell__AZbfT",bellAlt:"Alert_bellAlt__eH_NW"}},7885:function(e){e.exports={container:"Icon_container__5HA_S",icon:"Icon_icon__AjpdP",word:"Icon_word__ZJLBM"}},5483:function(e){e.exports={container:"Iconlist_container__eXYzC"}},9792:function(e){e.exports={container:"Logo_container__9E6dg"}},3008:function(e){e.exports={container:"navbar_container__AkUMw"}},3819:function(e){e.exports={nightContainer:"Night_nightContainer__FiLjl",moon:"Night_moon__EqKco",toggleContainer:"Night_toggleContainer__zkq8B",toggleBackground:"Night_toggleBackground__7lwZJ",toggle:"Night_toggle__L7vFh"}},9275:function(e){e.exports={searchContainer:"Searchbar_searchContainer__mmT2r",searchBar:"Searchbar_searchBar__ZOIXA",searchBarInput:"Searchbar_searchBarInput__hlAOP",searchResultsContainer:"Searchbar_searchResultsContainer__E7x2G",searchItem:"Searchbar_searchItem__EJju_"}},4264:function(e){e.exports={container:"topbar_container__LcOdT"}}},function(e){e.O(0,[228,937,13,617,609,876,949,869,774,888,179],(function(){return n=3282,e(e.s=n);var n}));var n=e.O();_N_E=n}]);