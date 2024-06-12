"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1888],{303840:function(ae,M,l){Object.defineProperty(M,"__esModule",{value:!0}),M.default=void 0;const Z=T(l(554434));function T(F){return F&&F.__esModule?F:{default:F}}const L=Z;M.default=L,ae.exports=L},793582:function(ae,M,l){l.r(M),l.d(M,{default:function(){return wr}});var Z=l(9783),T=l.n(Z),L=l(513769),F=l.n(L),_=l(805574),O=l.n(_),ee=l(97857),b=l.n(ee),x=l(168400),s=l.n(x),f=l(667294),fe=l(416397),z=l(510274);function K(r){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(r)}function ge(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),e.push.apply(e,o)}return e}function pe(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?ge(Object(e),!0).forEach(function(o){At(r,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):ge(Object(e)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(e,o))})}return r}function At(r,t,e){return t=vt(t),t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function vt(r){var t=ht(r,"string");return K(t)=="symbol"?t:String(t)}function ht(r,t){if(K(r)!="object"||!r)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var o=e.call(r,t||"default");if(K(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function Ae(r,t){var e=t.generateColorPalettes,o=t.generateNeutralColorPalettes,a=r.colorSuccess,i=r.colorWarning,c=r.colorError,g=r.colorInfo,p=r.colorPrimary,d=r.colorBgBase,v=r.colorTextBase,m=e(p),u=e(a),A=e(i),h=e(c),y=e(g),C=o(d,v);return pe(pe({},C),{},{colorLink:m[6],colorLinkHover:m[4],colorLinkActive:m[7],colorPrimaryBg:m[1],colorPrimaryBgHover:m[2],colorPrimaryBorder:m[3],colorPrimaryBorderHover:m[4],colorPrimaryHover:m[5],colorPrimary:m[6],colorPrimaryActive:m[7],colorPrimaryTextHover:m[8],colorPrimaryText:m[9],colorPrimaryTextActive:m[10],colorSuccessBg:u[1],colorSuccessBgHover:u[2],colorSuccessBorder:u[3],colorSuccessBorderHover:u[4],colorSuccessHover:u[5],colorSuccess:u[6],colorSuccessActive:u[7],colorSuccessTextHover:u[8],colorSuccessText:u[9],colorSuccessTextActive:u[10],colorErrorBg:h[1],colorErrorBgHover:h[2],colorErrorBorder:h[3],colorErrorBgActive:h[3],colorErrorBorderHover:h[4],colorErrorHover:h[5],colorError:h[6],colorErrorActive:h[7],colorErrorTextHover:h[8],colorErrorText:h[9],colorErrorTextActive:h[10],colorWarningBg:A[1],colorWarningBgHover:A[2],colorWarningBorder:A[3],colorWarningBorderHover:A[4],colorWarningHover:A[5],colorWarning:A[6],colorWarningActive:A[7],colorWarningTextHover:A[8],colorWarningText:A[9],colorWarningTextActive:A[10],colorInfoBg:y[1],colorInfoBgHover:y[2],colorInfoBorder:y[3],colorInfoBorderHover:y[4],colorInfoHover:y[5],colorInfo:y[6],colorInfoActive:y[7],colorInfoTextHover:y[8],colorInfoText:y[9],colorInfoTextActive:y[10],colorBgMask:new z.C("#000").setAlpha(.45).toRgbString(),colorWhite:"#fff"})}var H=l(965516);function X(r){"@babel/helpers - typeof";return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X(r)}function ve(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),e.push.apply(e,o)}return e}function he(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?ve(Object(e),!0).forEach(function(o){bt(r,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):ve(Object(e)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(e,o))})}return r}function bt(r,t,e){return t=yt(t),t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function yt(r){var t=jt(r,"string");return X(t)=="symbol"?t:String(t)}function jt(r,t){if(X(r)!="object"||!r)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var o=e.call(r,t||"default");if(X(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}var xt=H.Z.defaultAlgorithm,B=function(t,e){return new z.C(t).setAlpha(e).toRgbString()},U=function(t,e){var o=new z.C(t);return o.darken(e).toHexString()},Ct=function(t){var e=(0,fe.generate)(t);return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[4],6:e[5],7:e[6],8:e[4],9:e[5],10:e[6]}},St=function(t,e){var o=t||"#fff",a=e||"#000";return{colorBgBase:o,colorTextBase:a,colorBgBlur:"transparent",colorText:B(a,.85),colorTextSecondary:B(a,.45),colorTextTertiary:B(a,.45),colorTextQuaternary:B(a,.25),colorFill:B(a,.06),colorFillSecondary:B(a,.04),colorFillTertiary:B(a,.03),colorFillQuaternary:B(a,.02),colorBgLayout:U(o,4),colorBgContainer:U(o,0),colorBgElevated:U(o,0),colorBgSpotlight:B(a,.85),colorBorder:U(o,15),colorBorderSecondary:U(o,6),colorSplit:B(a,.06)}},Pt=function(t,e){var o=e!=null?e:xt(t);return he(he({},o),Ae(e!=null?e:t,{generateColorPalettes:Ct,generateNeutralColorPalettes:St}))},be=Pt;function $(r){"@babel/helpers - typeof";return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(r)}function ye(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),e.push.apply(e,o)}return e}function je(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?ye(Object(e),!0).forEach(function(o){Ot(r,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):ye(Object(e)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(e,o))})}return r}function Ot(r,t,e){return t=Tt(t),t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function Tt(r){var t=Bt(r,"string");return $(t)=="symbol"?t:String(t)}function Bt(r,t){if($(r)!="object"||!r)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var o=e.call(r,t||"default");if($(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}var Dt=H.Z.darkAlgorithm,k=function(t,e){return new z.C(t).setAlpha(e).toRgbString()},W=function(t,e){var o=new z.C(t);return o.lighten(e).toHexString()},wt=function(t){var e=(0,fe.generate)(t,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},kt=function(t,e){var o=t||"#000",a=e||"#fff";return{colorBgBase:o,colorTextBase:a,colorBgBlur:"transparent",colorText:k(a,.85),colorTextSecondary:k(a,.45),colorTextTertiary:k(a,.45),colorTextQuaternary:k(a,.25),colorFill:k(a,.18),colorFillSecondary:k(a,.12),colorFillTertiary:k(a,.08),colorFillQuaternary:k(a,.04),colorBgElevated:W(o,12),colorBgContainer:W(o,8),colorBgLayout:W(o,0),colorBgSpotlight:W(o,26),colorBorder:W(o,26),colorBorderSecondary:W(o,19),colorSplit:k(a,.12)}},Rt=function(t,e){var o=e!=null?e:Dt(t);return je(je({},o),Ae(e!=null?e:t,{generateColorPalettes:wt,generateNeutralColorPalettes:kt}))},Et=Rt;function Y(r){"@babel/helpers - typeof";return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(r)}function xe(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),e.push.apply(e,o)}return e}function te(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?xe(Object(e),!0).forEach(function(o){Mt(r,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):xe(Object(e)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(e,o))})}return r}function Mt(r,t,e){return t=Ft(t),t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function Ft(r){var t=Zt(r,"string");return Y(t)=="symbol"?t:String(t)}function Zt(r,t){if(Y(r)!="object"||!r)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var o=e.call(r,t||"default");if(Y(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}var Ce={token:{borderRadius:2,colorPrimary:"#1890ff",wireframe:!0}},Se=te(te({},Ce),{},{algorithm:be,components:{Menu:{itemBorderRadius:0,subMenuItemBorderRadius:0,itemHoverColor:"#1890ff",itemSelectedColor:"#1890ff",itemSelectedBg:"#e6f7ff",activeBarWidth:3,itemMarginInline:0,itemHoverBg:"transparent"}}}),Nr=te(te({},Ce),{},{algorithm:Et,components:{Menu:{itemBorderRadius:0,subMenuItemBorderRadius:0,itemHoverColor:"transparent",itemSelectedColor:"#1890ff",itemSelectedBg:"#111b26",activeBarWidth:3,itemMarginInline:0,itemHoverBg:"transparent"}}}),q=l(639389),J=l(86198),G=l(506380),Ht=l(75529),I=l(106750),It=l(533108),Qt=l(256661),le=l(259696),Nt=l(294047),Pe=l(941346),Lt=l(371707),D=l(647759),Q=l(730717),zt=l(693967),S=l.n(zt),Wt=l(385956),Jt=l(49313),Oe=l(302559),Te=l(472638),Gt=l(438199),Be=l(373638),Vt=l(902316),De=l(833494),Kt=l(82225),V="#1677FF",ie="#ED4192",re=[{color:V,url:null,webp:null},{color:"#5A54F9",url:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*H8nRT7_q0EwAAAAAAAAAAAAADrJ8AQ/original",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*H8nRT7_q0EwAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#9E339F",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*FMluR4vJhaQAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*CMCMTKV51tIAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:ie,url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*DGZXS4YOGp0AAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*s5OdR6wZZIkAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#E0282E",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*w6xcR7MriwEAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*HE_4Qp_XfQQAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#F4801A",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*VWFOTbEyU9wAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xTG2QbottAQAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#F2BD27",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1yydQLzw5nYAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*hbPfSbF-xPIAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#00B96B",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*XpGeRoZKGycAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*iM6CQ496P3oAAAAAAAAAAAAADrJ8AQ/fmt.webp"}],we=re.map(function(r){var t=r.color;return t}),Xt=33;function oe(r){if(!r)return null;var t=(0,Q.vC)(r).toRgb(),e=re.map(function(a){var i=a.color,c=(0,Q.vC)(i).toRgb(),g=Math.sqrt(Math.pow(c.r-t.r,2)+Math.pow(c.g-t.g,2)+Math.pow(c.b-t.b,2));return{color:i,dist:g}}),o=e.sort(function(a,i){return a.dist-i.dist})[0];return o.dist<=Xt?o.color:null}function Ut(r){var t,e=oe(r);return e?((t=re.find(function(o){return o.color===e}))===null||t===void 0?void 0:t.url)||"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*CLp0Qqc11AkAAAAAAAAAAAAAARQnAQ":null}var n=l(785893),ke,$t=(0,D.kc)(function(r){var t=r.token;return{image:(0,D.iv)(ke||(ke=s()([`
    transition: all `,`;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: right top;
  `])),t.motionDurationSlow)}}),ce=function(){return{opacity:1}},se=function(){return{opacity:0}},Yt=function(t){var e=t.colorPrimary,o=t.isLight,a=(0,f.useMemo)(function(){return oe(e)},[e]),i=$t(),c=i.styles,g=(0,f.useState)([]),p=O()(g,2),d=p[0],v=p[1];return f.useLayoutEffect(function(){v([a])},[a]),(0,n.jsx)(Kt.V4,{keys:d,motionName:"transition",onEnterStart:se,onAppearStart:se,onEnterActive:ce,onAppearActive:ce,onLeaveStart:ce,onLeaveActive:se,motionDeadline:500,children:function(u){var A=u.key,h=u.className,y=u.style,C=S()(c.image,h),w=re.find(function(me){return me.color===A});if(!w||!w.url)return null;var ne=y||{},P=ne.opacity;return(0,n.jsxs)("picture",{children:[(0,n.jsx)("source",{srcSet:w.webp,type:"image/webp"}),(0,n.jsx)("source",{srcSet:w.url,type:"image/jpeg"}),(0,n.jsx)("img",{className:C,style:b()(b()({},y),{},{opacity:o?P:0}),src:w.url,alt:""})]})}})},qt=Yt,_t=l(719632),er=l.n(_t),tr=l(483465),rr=l(534826),Re,Ee,or=(0,D.kc)(function(r){var t=r.token,e=r.css;return{color:e(Re||(Re=s()([`
    width: `,`px;
    height: `,`px;
    border-radius: 100%;
    cursor: pointer;
    transition: all `,`;
    display: inline-block;

    & > input[type='radio'] {
      width: 0;
      height: 0;
      opacity: 0;
    }

    &:focus-within {
      // need \uFF1F
    }
  `])),t.controlHeightLG/2,t.controlHeightLG/2,t.motionDurationFast),colorActive:e(Ee||(Ee=s()([`
    box-shadow:
      0 0 0 1px `,`,
      0 0 0 `,"px ",`;
  `])),t.colorBgContainer,t.controlOutlineWidth*2+1,t.colorPrimary)}}),nr=function(t){var e=t.value,o=t.children,a=t.onChange,i=(0,f.useState)(e),c=O()(i,2),g=c[0],p=c[1];return(0,f.useEffect)(function(){var d=setTimeout(function(){a==null||a(g)},200);return function(){return clearTimeout(d)}},[g]),(0,f.useEffect)(function(){p(e)},[e]),(0,n.jsx)(tr.Z,{value:g,onChange:p,presets:[{label:"PresetColors",colors:we}],children:o})},ar=function(t){var e=t.value,o=t.onChange,a=t.id,i=or(),c=i.styles,g=f.useMemo(function(){var p=(0,Q.vC)(e||"").toRgbString(),d=!1,v=we.map(function(m){var u=(0,Q.vC)(m).toRgbString(),A=u===p;return d=d||A,{color:m,active:A,picker:!1}});return[].concat(er()(v),[{color:"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",picker:!0,active:!d}])},[e]);return(0,n.jsxs)(I.Z,{gap:"large",align:"center",wrap:!0,children:[(0,n.jsx)(rr.Z,{value:typeof e=="string"?e:e==null?void 0:e.toHexString(),onChange:function(d){return o==null?void 0:o(d.target.value)},style:{width:120},id:a}),(0,n.jsx)(I.Z,{gap:"middle",children:g.map(function(p){var d=p.color,v=p.active,m=p.picker,u=(0,n.jsx)("label",{className:S()(c.color,T()({},c.colorActive,v)),style:{background:d},onClick:function(){m||o==null||o(d)},children:(0,n.jsx)("input",{type:"radio",name:m?"picker":"color","aria-label":d,tabIndex:m?-1:0,onClick:function(h){return h.stopPropagation()}})},d);return m?(0,n.jsx)(nr,{value:e||"",onChange:o,children:u},"colorpicker-".concat(e)):u})})]})},lr=ar,ir=l(181632),Me,Fe,Ze,cr=(0,D.kc)(function(){var r=(0,De.EI)(),t=r.carousel;return{carousel:t,container:(0,D.iv)(Me||(Me=s()([`
      position: relative;
    `]))),title:(0,D.iv)(Fe||(Fe=s()([`
      position: absolute;
      top: 15%;
      z-index: 1;
      width: 100%;
      text-align: center;
    `]))),img:(0,D.iv)(Ze||(Ze=s()([`
      width: 100%;
    `])))}}),ue=[{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KsMrRZaciFcAAAAAAAAAAAAADrJ8AQ/original",titleColor:"rgba(0,0,0,.88)"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*3FkqR6XRNgoAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cSX_RbD3k9wAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*MldsRZeax6EAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xCAmSL0xlZ8AAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*vCfCSbiI_VIAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xCAmSL0xlZ8AAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BeDBTY9UnXIAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Q63XTbk8YaMAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"}],sr=function(t){var e=cr(),o=e.styles,a=t.id,i=t.title,c=t.description,g=(0,D.Fg)(),p=(0,f.useState)(0),d=O()(p,2),v=d[0],m=d[1];return(0,n.jsxs)("div",{className:o.container,children:[(0,n.jsxs)("div",{className:o.title,children:[(0,n.jsx)(le.Z.Title,{id:a,level:1,style:{fontWeight:900,color:ue[v].titleColor,fontFamily:"AliPuHui, ".concat(g.fontFamily),fontSize:g.fontSizeHeading2},children:i}),(0,n.jsx)(le.Z.Paragraph,{style:{marginBottom:g.marginXXL,color:ue[v].titleColor},children:c})]}),(0,n.jsx)(ir.Z,{className:o.carousel,afterChange:m,children:ue.map(function(u,A){return(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:u.imageSrc,className:o.img,alt:""})},A)})})]})},ur=sr,mr=l(877266),dr=l(548558),fr=function(t){var e=t.id,o=t.value,a=t.onChange;return(0,n.jsxs)(I.Z,{gap:"large",children:[(0,n.jsx)(mr.Z,{value:o,onChange:a,style:{width:120},min:0,formatter:function(c){return"".concat(c,"px")},parser:function(c){return c&&parseFloat(c)},id:e}),(0,n.jsx)(dr.Z,{tooltip:{open:!1},style:{width:128},min:0,value:o,max:20,onChange:a})]})},gr=fr,He,Ie,Qe={default:"https://gw.alipayobjects.com/zos/bmw-prod/ae669a89-0c65-46db-b14b-72d1c7dd46d6.svg",dark:"https://gw.alipayobjects.com/zos/bmw-prod/0f93c777-5320-446b-9bb7-4d4b499f346d.svg",lark:"https://gw.alipayobjects.com/zos/bmw-prod/3e899b2b-4eb4-4771-a7fc-14c7ff078aed.svg",comic:"https://gw.alipayobjects.com/zos/bmw-prod/ed9b04e8-9b8d-4945-8f8a-c8fc025e846f.svg",v4:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*bOiWT4-34jkAAAAAAAAAAAAADrJ8AQ/original"},pr={cn:{default:"\u9ED8\u8BA4",dark:"\u6697\u9ED1",lark:"\u77E5\u8BC6\u534F\u4F5C",comic:"\u6843\u82B1\u7F18",v4:"V4 \u4E3B\u9898"},en:{default:"Default",dark:"Dark",lark:"Document",comic:"Blossom",v4:"V4 Theme"}},Ar=(0,D.kc)(function(r){var t=r.token,e=r.css;return{themeCard:e(He||(He=s()([`
    border-radius: `,`px;
    cursor: pointer;
    transition: all `,`;
    overflow: hidden;
    display: inline-block;

    & > input[type='radio'] {
      width: 0;
      height: 0;
      opacity: 0;
      position: absolute;
    }

    img {
      vertical-align: top;
      box-shadow:
        0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 6px 16px 0 rgba(0, 0, 0, 0.08),
        0 9px 28px 8px rgba(0, 0, 0, 0.05);
    }

    &:focus-within,
    &:hover {
      transform: scale(1.04);
    }
  `])),t.borderRadius,t.motionDurationSlow),themeCardActive:e(Ie||(Ie=s()([`
    box-shadow:
      0 0 0 1px `,`,
      0 0 0 `,"px ",`;
    &,
    &:hover:not(:focus-within) {
      transform: scale(1);
    }
  `])),t.colorBgContainer,t.controlOutlineWidth*2+1,t.colorPrimary)}}),vr=function(t){var e=t.value,o=t.id,a=t.onChange,i=Ar(),c=i.styles,g=(0,Oe.default)(pr),p=O()(g,1),d=p[0];return(0,n.jsx)(I.Z,{gap:"large",wrap:!0,children:Object.keys(Qe).map(function(v,m){return(0,n.jsxs)(I.Z,{vertical:!0,gap:"small",justify:"center",align:"center",children:[(0,n.jsxs)("label",{onClick:function(){return a==null?void 0:a(v)},className:S()(c.themeCard,T()({},c.themeCardActive,e===v)),children:[(0,n.jsx)("input",{type:"radio",name:"theme",id:m===0?o:void 0}),(0,n.jsx)("img",{src:Qe[v],alt:v})]}),(0,n.jsx)("span",{children:d[v]})]},v)})})},hr=vr,br=["compact","themeType","colorPrimary"],Ne,Le,ze,We,Je,Ge,Ve,Ke,Xe,Ue,$e,Ye,qe,_e,et,tt,rt,ot,nt,at,lt,it,yr=J.Z.Header,jr=J.Z.Content,xr=J.Z.Sider,Cr=function(){return null},Sr={cn:{themeTitle:"\u5B9A\u5236\u4E3B\u9898\uFF0C\u968F\u5FC3\u6240\u6B32",themeDesc:"Ant Design 5.0 \u5F00\u653E\u66F4\u591A\u6837\u5F0F\u7B97\u6CD5\uFF0C\u8BA9\u4F60\u5B9A\u5236\u4E3B\u9898\u66F4\u7B80\u5355",customizeTheme:"\u5B9A\u5236\u4E3B\u9898",myTheme:"\u6211\u7684\u4E3B\u9898",titlePrimaryColor:"\u4E3B\u8272",titleBorderRadius:"\u5706\u89D2",titleCompact:"\u5BBD\u677E\u5EA6",default:"\u9ED8\u8BA4",compact:"\u7D27\u51D1",titleTheme:"\u4E3B\u9898",light:"\u4EAE\u8272",dark:"\u6697\u9ED1",toDef:"\u6DF1\u5EA6\u5B9A\u5236",toUse:"\u53BB\u4F7F\u7528"},en:{themeTitle:"Flexible theme customization",themeDesc:"Ant Design 5.0 enable extendable algorithm, make custom theme easier",customizeTheme:"Customize Theme",myTheme:"My Theme",titlePrimaryColor:"Primary Color",titleBorderRadius:"Border Radius",titleCompact:"Compact",titleTheme:"Theme",default:"Default",compact:"Compact",light:"Light",dark:"Dark",toDef:"More",toUse:"Apply"}},Pr=(0,D.kc)(function(r){var t=r.token,e=r.css,o=r.cx,a=(0,De.EI)(),i=a.carousel,c=e(Ne||(Ne=s()([`
    overflow: hidden;
    background: rgba(240, 242, 245, 0.25);
    backdrop-filter: blur(50px);
    box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.1);
    transition: all `,`;
  `])),t.motionDurationSlow);return{demo:c,otherDemo:e(Le||(Le=s()([`
      &.`,` {
        backdrop-filter: blur(10px);
        background: rgba(247, 247, 247, 0.5);
      }
    `])),o(c)),darkDemo:e(ze||(ze=s()([`
      &.`,` {
        background: #000;
      }
    `])),o(c)),larkDemo:e(We||(We=s()([`
      &.`,` {
        // background: #f7f7f7;
        background: rgba(240, 242, 245, 0.65);
      }
    `])),o(c)),comicDemo:e(Je||(Je=s()([`
      &.`,` {
        // background: #ffe4e6;
        background: rgba(240, 242, 245, 0.65);
      }
    `])),o(c)),menu:e(Ge||(Ge=s()([`
      margin-inline-start: auto;
    `]))),header:e(Ve||(Ve=s()([`
      display: flex;
      align-items: center;
      border-bottom: 1px solid `,`;
      padding-inline: `,`px !important;
      height: `,`px;
      line-height: `,`px;
    `])),t.colorSplit,t.paddingLG,t.controlHeightLG*1.2,t.controlHeightLG*1.2),headerDark:e(Ke||(Ke=s()([`
      border-bottom-color: rgba(255, 255, 255, 0.1);
    `]))),avatar:e(Xe||(Xe=s()([`
      width: `,`px;
      height: `,`px;
      border-radius: 100%;
      background: rgba(240, 240, 240, 0.75);
      background-size: cover;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    `])),t.controlHeight,t.controlHeight),avatarDark:e(Ue||(Ue=s()([`
      background: rgba(200, 200, 200, 0.3);
    `]))),logo:e($e||($e=s()([`
      display: flex;
      align-items: center;
      column-gap: `,`px;

      h1 {
        font-weight: 400;
        font-size: `,`px;
        line-height: 1.5;
      }
    `])),t.padding,t.fontSizeLG),logoImg:e(Ye||(Ye=s()([`
      width: 30px;
      height: 30px;
      overflow: hidden;

      img {
        width: 30px;
        height: 30px;
        vertical-align: top;
      }
    `]))),transBg:e(qe||(qe=s()([`
      background: transparent !important;
    `]))),form:e(_e||(_e=s()([`
      width: 100%;
      margin: 0 auto;
    `]))),pos:e(et||(et=s()([`
      position: absolute;
    `]))),leftTopImagePos:e(tt||(tt=s()([`
      left: 0;
      top: -100px;
      height: 500px;
    `]))),rightBottomPos:e(rt||(rt=s()([`
      right: 0;
      bottom: -100px;
      height: 287px;
    `]))),leftTopImage:e(ot||(ot=s()([`
      left: 50%;
      transform: translate3d(-900px, 0, 0);
      top: -100px;
      height: 500px;
    `]))),rightBottomImage:e(nt||(nt=s()([`
      right: 50%;
      transform: translate3d(750px, 0, 0);
      bottom: -100px;
      height: 287px;
    `]))),motion:e(at||(at=s()([`
      transition: all `,`;
    `])),t.motionDurationSlow),op1:e(lt||(lt=s()([`
      opacity: 1;
    `]))),op0:e(it||(it=s()([`
      opacity: 0;
    `]))),carousel:i}}),ct=[{key:"Design Values",label:"Design Values"},{key:"Global Styles",label:"Global Styles"},{key:"Themes",label:"Themes"},{key:"DesignPatterns",label:"Design Patterns"}],Or=[{key:"Design",label:"Design",icon:(0,n.jsx)(q.FolderOutlined,{}),children:ct},{key:"Development",label:"Development",icon:(0,n.jsx)(q.FolderOutlined,{})}];function Tr(r,t){if(!t)return"#FFF";var e=(0,Q.vC)(r),o=oe(r);switch(o){case V:case ie:case"#F2BD27":return;case"#5A54F9":case"#E0282E":return"#FFF";default:return e.toHsb().b<.7?"#FFF":void 0}}var st={themeType:"default",colorPrimary:"#1677FF",borderRadius:6,compact:"default"},ut={default:{},dark:{borderRadius:2},lark:{colorPrimary:"#00B96B",borderRadius:4},comic:{colorPrimary:ie,borderRadius:16},v4:b()({},Se.token)},R=function(t){return t/255};function Br(r){var t=new z.C(r).toRgb(),e=t.r,o=t.g,a=t.b,i=R(e)*100,c=100,g=Math.max(R(e),R(o),R(a))*1e4,p=(Math.atan2(Math.sqrt(3)*(R(o)-R(a)),2*R(e)-R(o)-R(a))*180/Math.PI+360)%360;return"invert(".concat(i,"%) sepia(").concat(c,"%) saturate(").concat(g,"%) hue-rotate(").concat(p,"deg)")}var Dr=function(){var t=Pr(),e=t.styles,o=(0,Oe.default)(Sr),a=O()(o,2),i=a[0],c=a[1],g=c==="cn",p=(0,Wt.useLocation)(),d=p.search,v=f.useState(st),m=O()(v,2),u=m[0],A=m[1],h=function(de,pt){f.startTransition(function(){A(b()(b()({},ut[pt.themeType]),pt))})},y=u.compact,C=u.themeType,w=u.colorPrimary,ne=F()(u,br),P=C!=="dark",me=G.Z.useForm(),kr=O()(me,1),mt=kr[0],Rr=f.useContext(Gt.Z),Er=Rr.isMobile,E=f.useMemo(function(){return typeof w=="string"?w:w.toHexString()},[w]),dt=f.useMemo(function(){var j=[P?H.Z.defaultAlgorithm:H.Z.darkAlgorithm];return y==="compact"&&j.push(H.Z.compactAlgorithm),C==="v4"&&j.push(be),j},[P,y,C]);f.useEffect(function(){var j=b()(b()({},st),{},{themeType:C},ut[C]);A(j),mt.setFieldsValue(j)},[C]);var ft=(0,Jt.Z)();f.useEffect(function(){h({},b()(b()({},u),{},{themeType:ft?"dark":"default"}))},[ft]);var N=oe(E),Mr=f.useMemo(function(){var j="transparent",de=H.Z.defaultAlgorithm(b()(b()({},H.Z.defaultConfig.token),{},{colorPrimary:E}));return C==="dark"?j="#393F4A":N===V?j="#F5F8FF":j=de.colorPrimaryHover,[j,de.colorPrimaryBgHover]},[C,N,E]),gt=O()(Mr,2),Fr=gt[0],Zr=gt[1],Hr=f.useMemo(function(){var j=(0,Q.vC)(E).toHsb();return j.b=Math.min(j.b,.7),(0,Q.vC)(j).toHexString()},[E]),Ir=f.useMemo(function(){return{token:b()(b()({},ne),{},{colorPrimary:E}),algorithm:dt,components:b()({Layout:P?{headerBg:"transparent",bodyBg:"transparent"}:{},Menu:P?{itemBg:"transparent",subMenuItemBg:"transparent",activeBarBorderWidth:0}:{}},C==="v4"?Se.components:{})}},[ne,E,dt,C]),Qr=(0,n.jsxs)(Ht.ZP,{theme:Ir,children:[(0,n.jsx)(Cr,{}),(0,n.jsx)("div",{className:S()(e.demo,T()(T()({},e.otherDemo,P&&N!==V&&e.otherDemo),e.darkDemo,!P)),style:{borderRadius:u.borderRadius},children:(0,n.jsxs)(J.Z,{className:e.transBg,children:[(0,n.jsxs)(yr,{className:S()(e.header,e.transBg,!P&&e.headerDark),children:[(0,n.jsxs)("div",{className:e.logo,children:[(0,n.jsx)("div",{className:e.logoImg,children:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",style:{filter:N===V?void 0:Br(Hr)},alt:"antd logo"})}),(0,n.jsx)("h1",{children:"Ant Design 5.0"})]}),(0,n.jsxs)(I.Z,{className:e.menu,gap:"middle",children:[(0,n.jsx)(q.BellOutlined,{}),(0,n.jsx)(q.QuestionCircleOutlined,{}),(0,n.jsx)("div",{className:S()(e.avatar,T()({},e.avatarDark,C==="dark")),style:{backgroundColor:Zr,backgroundImage:"url(".concat(Ut(N),")")}})]})]}),(0,n.jsxs)(J.Z,{className:e.transBg,hasSider:!0,children:[(0,n.jsx)(xr,{className:S()(e.transBg),width:200,children:(0,n.jsx)(It.Z,{mode:"inline",className:S()(e.transBg),selectedKeys:["Themes"],openKeys:["Design"],style:{height:"100%",borderRight:0},items:Or,expandIcon:!1})}),(0,n.jsxs)(J.Z,{className:e.transBg,style:{padding:"0 24px 24px"},children:[(0,n.jsx)(Qt.Z,{style:{margin:"16px 0"},items:[{title:(0,n.jsx)(q.HomeOutlined,{})},{title:"Design",menu:{items:ct}},{title:"Themes"}]}),(0,n.jsxs)(jr,{children:[(0,n.jsx)(le.Z.Title,{level:2,children:i.customizeTheme}),(0,n.jsx)(Nt.Z,{title:i.myTheme,extra:(0,n.jsxs)(I.Z,{gap:"small",children:[(0,n.jsx)(Te.Z,{to:(0,Be.J1)("/theme-editor",g,d),children:(0,n.jsx)(Pe.ZP,{type:"default",children:i.toDef})}),(0,n.jsx)(Te.Z,{to:(0,Be.J1)("/docs/react/customize-theme",g,d),children:(0,n.jsx)(Pe.ZP,{type:"primary",children:i.toUse})})]}),children:(0,n.jsxs)(G.Z,{form:mt,initialValues:u,onValuesChange:h,labelCol:{span:3},wrapperCol:{span:21},className:e.form,children:[(0,n.jsx)(G.Z.Item,{label:i.titleTheme,name:"themeType",children:(0,n.jsx)(hr,{})}),(0,n.jsx)(G.Z.Item,{label:i.titlePrimaryColor,name:"colorPrimary",children:(0,n.jsx)(lr,{})}),(0,n.jsx)(G.Z.Item,{label:i.titleBorderRadius,name:"borderRadius",children:(0,n.jsx)(gr,{})}),(0,n.jsx)(G.Z.Item,{label:i.titleCompact,name:"compact",htmlFor:"compact_default",children:(0,n.jsx)(Lt.ZP.Group,{options:[{label:i.default,value:"default",id:"compact_default"},{label:i.compact,value:"compact"}]})})]})})]})]})]})]})})]});return Er?(0,n.jsx)(ur,{title:i.themeTitle,description:i.themeDesc,id:"flexible"}):(0,n.jsx)(Vt.Z,{title:i.themeTitle,titleColor:Tr(E,P),description:i.themeDesc,id:"flexible",background:Fr,decoration:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:S()(e.motion,P&&N===V?e.op1:e.op0),children:[(0,n.jsx)("img",{className:S()(e.pos,e.leftTopImage),src:"https://gw.alipayobjects.com/zos/bmw-prod/bd71b0c6-f93a-4e52-9c8a-f01a9b8fe22b.svg",alt:""}),(0,n.jsx)("img",{className:S()(e.pos,e.rightBottomImage),src:"https://gw.alipayobjects.com/zos/bmw-prod/84ad805a-74cb-4916-b7ba-9cdc2bdec23a.svg",alt:""})]}),(0,n.jsxs)("div",{className:S()(e.motion,!P||!N?e.op1:e.op0),children:[(0,n.jsx)("img",{className:S()(e.pos,e.leftTopImagePos),src:"https://gw.alipayobjects.com/zos/bmw-prod/a213184a-f212-4afb-beec-1e8b36bb4b8a.svg",alt:""}),(0,n.jsx)("img",{className:S()(e.pos,e.rightBottomPos),src:"https://gw.alipayobjects.com/zos/bmw-prod/bb74a2fb-bff1-4d0d-8c2d-2ade0cd9bb0d.svg",alt:""})]}),(0,n.jsx)(qt,{isLight:P,colorPrimary:E})]}),children:Qr})},wr=Dr},935684:function(ae,M,l){var Z,T=l(564836).default;Z={value:!0},Z=b,M.bn=ee,Z=O;var L=T(l(918698)),F=T(l(667294)),_=T(l(973935));function O(x){return x instanceof HTMLElement||x instanceof SVGElement}function ee(x){return x&&(0,L.default)(x)==="object"&&O(x.nativeElement)?x.nativeElement:O(x)?x:null}function b(x){var s=ee(x);if(s)return s;if(x instanceof F.default.Component){var f;return(f=_.default.findDOMNode)===null||f===void 0?void 0:f.call(_.default,x)}return null}}}]);
