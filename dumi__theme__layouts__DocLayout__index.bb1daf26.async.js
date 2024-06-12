"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[367],{49313:function(zn,$,e){e.d($,{Z:function(){return fn},f:function(){return S}});var an=e(667294),S=an.createContext(!1);function fn(){return an.useContext(S)}},438746:function(zn,$,e){e.d($,{Z:function(){return b}});var an=e(97857),S=e.n(an),fn=e(952677),v=e.n(fn),P=e(805574),C=e.n(P),Sn=e(385956),s=e(667294),V=e(302559);function l(U){return U.replace("-cn","").replace(/\/$/,"")}function b(){var U=(0,Sn.useLocation)(),K=U.search,J=(0,V.default)(),m=C()(J,2),r=m[1],c=s.useCallback(function(t,j){var f=l(t);if(r==="cn"&&(f="".concat(f,"-cn")),K&&(f="".concat(f).concat(K)),j){var D;v()(j)==="object"?D=j[r]:D=j,f="".concat(f,"#").concat(D)}return f},[r,K]);return S()(S()({},U),{},{pathname:l(U.pathname),getLink:c})}},361446:function(zn,$,e){var an=e(805574),S=e.n(an),fn=e(719632),v=e.n(fn),P=e(9783),C=e.n(P),Sn=e(168400),s=e.n(Sn),V=e(667294),l=e(844183),b=e(566254),U=e(647759),K=e(693967),J=e.n(K),m=e(385956),r=e(472638),c=e(438746),t=e(785893),j,f,D;function ln(N){return N&&/^\d+\.\d+\.\d+$/.test(N)}var jn=(0,U.kc)(function(N){var L=N.css,k=N.token;return{link:L(j||(j=s()([`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `]))),tag:L(f||(f=s()([`
    margin-inline-end: 0;
  `]))),subtitle:L(D||(D=s()([`
    margin-inline-start: `,`px;
    font-weight: normal;
    font-size: `,`px;
    opacity: 0.8;
  `])),k.marginXS,k.fontSizeSM)}}),h=function(L){var k=jn(),G=k.styles,z=L.before,I=L.after,nn=L.link,W=L.title,A=L.subtitle,sn=L.search,en=L.tag,H=L.className;return!z&&!I?(0,t.jsxs)(r.Z,{to:"".concat(nn).concat(sn),className:J()(H,C()({},G.link,en)),children:[(0,t.jsxs)("span",{children:[W,A&&(0,t.jsx)("span",{className:G.subtitle,children:A})]}),en&&(0,t.jsx)(l.Z,{bordered:!1,className:J()(G.tag),color:ln(en)||en==="New"?"success":"processing",children:en.replace("VERSION",b.Z)})]}):(0,t.jsxs)(r.Z,{to:"".concat(nn).concat(sn),className:H,children:[z,W,A&&(0,t.jsx)("span",{className:G.subtitle,children:A}),I]})},M=function(){var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},k=(0,m.useFullSidebarData)(),G=(0,c.Z)(),z=G.pathname,I=G.search,nn=(0,m.useSidebarData)(),W=L.before,A=L.after,sn=(0,V.useMemo)(function(){var en,H=v()(nn!=null?nn:[]);if(z.startsWith("/docs/spec")){var un=H.splice(0,1);H.push.apply(H,v()(un))}if(z.startsWith("/docs/react")){var xn,B=(xn=Object.entries(k).find(function(E){var g=S()(E,1),F=g[0];return F.startsWith("/changelog")}))===null||xn===void 0?void 0:xn[1];B&&H.splice(1,0,B[0])}if(z.startsWith("/changelog")){var d,T=(d=Object.entries(k).find(function(E){var g=S()(E,1),F=g[0];return F.startsWith("/docs/react")}))===null||d===void 0?void 0:d[1];T&&(H.unshift(T[0]),H.push.apply(H,v()(T.slice(1))))}return(en=H==null?void 0:H.reduce(function(E,g){if(g!=null&&g.title)if(z.startsWith("/docs/spec")){var F,Q,mn=g.children.reduce(function(x,O){var w,Y,tn=(w=(Y=O.frontmatter)===null||Y===void 0?void 0:Y.type)!==null&&w!==void 0?w:"default";return x[tn]||(x[tn]=[]),x[tn].push(O),x},{}),dn=[];dn.push.apply(dn,v()((F=(Q=mn.default)===null||Q===void 0?void 0:Q.map(function(x){return{label:(0,t.jsxs)(r.Z,{to:"".concat(x.link).concat(I),children:[W,x==null?void 0:x.title,A]}),key:x.link.replace(/(-cn$)/g,"")}}))!==null&&F!==void 0?F:[])),Object.entries(mn).forEach(function(x){var O=S()(x,2),w=O[0],Y=O[1];w!=="default"&&dn.push({type:"group",label:w,key:w,children:Y==null?void 0:Y.map(function(tn){return{label:(0,t.jsxs)(r.Z,{to:"".concat(tn.link).concat(I),children:[W,tn==null?void 0:tn.title,A]}),key:tn.link.replace(/(-cn$)/g,"")}})})}),E.push({label:g==null?void 0:g.title,key:g==null?void 0:g.title,children:dn})}else{var gn;E.push({type:"group",label:g==null?void 0:g.title,key:g==null?void 0:g.title,children:(gn=g.children)===null||gn===void 0?void 0:gn.map(function(x){var O,w;return{label:(0,t.jsx)(h,{before:W,after:A,link:x.link,title:x==null?void 0:x.title,subtitle:(O=x.frontmatter)===null||O===void 0?void 0:O.subtitle,search:I,tag:(w=x.frontmatter)===null||w===void 0?void 0:w.tag}),key:x.link.replace(/(-cn$)/g,"")}})})}else{var pn=g.children||[];pn.every(function(x){var O;return x==null||(O=x.frontmatter)===null||O===void 0?void 0:O.date})&&pn.sort(function(x,O){var w,Y;return((w=x.frontmatter)===null||w===void 0?void 0:w.date)>((Y=O.frontmatter)===null||Y===void 0?void 0:Y.date)?-1:1}),E.push.apply(E,v()(pn.map(function(x){var O;return{label:(0,t.jsx)(h,{before:W,after:A,link:x.link,title:x==null?void 0:x.title,search:I,tag:(O=x.frontmatter)===null||O===void 0?void 0:O.tag}),key:x.link.replace(/(-cn$)/g,"")}})))}return E},[]))!==null&&en!==void 0?en:[]},[nn,k,z,I,L]);return[sn,z]};$.Z=M},148050:function(zn,$,e){e.r($);var an=e(168400),S=e.n(an),fn=e(667294),v=e(639389),P=e.n(v),C=e(879587),Sn=e(647759),s=e(785893),V,l="https://github.com/ant-design/ant-design/edit/master/",b=(0,Sn.kc)(function(K){var J=K.token,m=K.css,r=J.colorIcon,c=J.colorText,t=J.iconCls;return{editButton:m(V||(V=S()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: `,`px;
        `,` {
          display: block;
          color: `,`;
          font-size: `,`px;
          transition: all `,`;
          &:hover {
            color: `,`;
          }
        }
      }
    `])),J.marginXS,t,r,J.fontSizeLG,J.motionDurationSlow,c)}}),U=function(J){var m=J.title,r=J.filename,c=b(),t=c.styles;return(0,s.jsx)(C.Z,{title:m,children:(0,s.jsx)("a",{className:t.editButton,href:"".concat(l).concat(r),target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(v.EditOutlined,{})})})};$.default=U},156325:function(zn,$,e){e.r($),e.d($,{default:function(){return no}});var an=e(805574),S=e.n(an),fn=e(693967),v=e.n(fn),P=e(727484),C=e.n(P),Sn=e(533852),s=e(667294),V=e(75529),l=e(715778),b=e(385956),U=e(302559),K=e(438746),J=e(168400),m=e.n(J),r=e(370917),c=e(647759),t=e(785893),j,f={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},D=function(){var n=(0,c.Fg)(),a=function p(y){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return u<=10?`
.palette-`.concat(y,"-").concat(u,` {
  background: `).concat(n["".concat(y,"-").concat(u)],`;
}
`).concat(p(y,u+1),`
    `):""},i=function p(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return y<=13?`
.palette-gray-`.concat(y,` {
  background: `).concat(f[y],`;
}
`).concat(p(y+1),`
    `):""};return(0,t.jsx)(r.xB,{styles:(0,r.iv)(j||(j=m()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-inline-end: 0;
              }

              .main-color-item {
                margin-inline-end: 0;

                &:hover {
                  margin-inline-end: -`,`px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 `,`px;
            font-size: `,`px;
            text-align: center;
          }

          &-picker {
            margin: `,`px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-inline-start: `,`px;
              font-size: `,`px;
              font-family: Consolas, sans-serif;
              .ant-row-rtl & {
                margin-inline-end: `,`px;
                margin-inline-start: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-inline-start: `,`px;
              color: `,`;
              font-size: `,`px;

              .ant-row-rtl & {
                margin-inline-end: `,`px;
                margin-inline-start: 0;
              }

              &-dark {
                margin-inline-start: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
          `,`
          `,`
          `,`
          `,`
          `,`
          `,`
          `,`
          `,`
          `,`
          `,`
          `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-inline-end: `,`px;
            padding: 0 `,`px;
            font-size: `,`px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all `,`;

            &:first-child {
              border-radius: `,"px ",`px 0 0;
            }

            &:last-child {
              border-radius: 0 0 `,"px ",`px;
            }

            &:hover {
              margin-inline-end: -`,`px;
              border-radius: 0 `,"px ",`px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all `,`;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all `,`;
          }
        }

        .color-title {
          margin: 0 0 `,`px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: `,`px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: `,"px ",`px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-inline-end: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: `,"px ",`px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: `,`px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),n.paddingXS,n.marginMD,n.fontSizeXL,n.marginLG,n.margin,n.fontSize,n.margin,n.margin,n.colorError,n.fontSize,n.margin,a("blue"),a("purple"),a("cyan"),a("green"),a("magenta"),a("red"),a("volcano"),a("orange"),a("gold"),a("yellow"),a("lime"),a("geekblue"),i(),n.marginXXS,n.paddingSM,n.fontSize,n.motionDurationMid,n.borderRadiusSM,n.borderRadiusSM,n.borderRadiusSM,n.borderRadiusSM,n.marginXS,n.borderRadiusSM,n.borderRadiusSM,n.motionDurationSlow,n.motionDurationSlow,n.marginLG,n.fontSize,n.paddingXL,n.paddingXL-4,n.borderRadiusSM,n.borderRadiusSM,n.paddingXS)})},ln=D,jn,h=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(jn||(jn=m()([`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          > a[aria-hidden]:first-child {
            float: left;
            width: 20px;
            padding-inline-end: `,`px;
            font-size: 0;
            line-height: inherit;
            text-align: right;
            padding-inline-end: `,`px;
            margin-inline-start: -`,`px;

            [data-direction='rtl'] & {
              float: right;
            }

            &:hover {
              border: 0;
            }

            > .icon-link::before {
              font-size: `,`px;
              content: '#';
            }
          }

          &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
            visibility: hidden;
          }
        }
      `])),o.paddingXXS,o.paddingXXS,o.marginLG,o.fontSizeXL)})},M,N=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(M||(M=m()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),o.colorText,o.fontSize,o.fontFamily,o.lineHeight,o.colorBgContainer)})},L=e(693399),k,G=function(){var o=(0,c.Fg)(),n=o.anchorTop;return s.useInsertionEffect(function(){(0,L.updateCSS)("@layer global, antd;","site-global",{prepend:!0})},[]),(0,t.jsx)(r.xB,{styles:(0,r.iv)(k||(k=m()([`
        @layer global {
          body,
          div,
          dl,
          dt,
          dd,
          ul,
          ol,
          li,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          pre,
          code,
          form,
          fieldset,
          legend,
          input,
          textarea,
          p,
          blockquote,
          th,
          td,
          hr,
          button,
          article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          menu,
          nav,
          section {
            margin: 0;
            padding: 0;
          }

          ul,
          ol {
            list-style: none;
          }

          img {
            vertical-align: middle;
            border-style: none;
          }

          [id] {
            scroll-margin-top: `,`px;
          }

          [data-prefers-color='dark'] {
            color-scheme: dark;
          }

          [data-prefers-color='light'] {
            color-scheme: light;
          }
        }
      `])),n)})},z=e(510274),I,nn=function(){var n=(0,c.Fg)(),a=n.antCls,i=n.colorPrimary;return(0,t.jsx)(r.xB,{styles:(0,r.iv)(I||(I=m()([`
        .markdown {
          color: `,`;
          font-size: `,`px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: `,`px;
          margin-bottom: `,`px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-inline-start: `,`px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: `,`px;
        }

        .markdown h5 {
          font-size: `,`px;
        }

        .markdown h6 {
          font-size: `,`px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: `,`px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-inline-start: `,`px;
          padding-inline-start: `,`px;
          list-style-type: circle;

          .rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
            padding-inline-end: `,`px;
            padding-inline-start: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-inline-start: `,`px;
          padding-inline-start: `,`px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
            padding-inline-end: `,`px;
            padding-inline-start: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background-color: `,`;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: `,"px ",`px;
            font-size: `,`px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 `,`px;
            color: #aaa;
            font-size: 30px;
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-inline-end: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-inline-start: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-inline-end: 0.8em;
            padding-inline-start: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-inline-start: `,`px;
          opacity: 0;
          transition: opacity `,`;

          .rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-inline-start: `,`px;
          text-decoration: none;

          .rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: `,`px;
            transition: all `,`;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: `,"px ",`px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all `,`;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: `,`;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: `,`px;
            margin-bottom: `,`px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: `,`px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),n.colorText,n.fontSize,n.marginXS,n.marginMD,n.colorTextHeading,n.fontFamily,n.marginSM,n.colorTextHeading,n.fontFamily,n.fontSizeLG,n.fontSize,n.fontSizeSM,n.marginLG,n.colorSplit,a,n.marginMD,n.paddingXXS,n.marginMD,n.paddingXXS,n.marginMD,n.paddingXXS,a,n.marginMD,n.paddingXXS,n.siteMarkdownCodeBg,n.colorSplit,n.borderRadiusSM,n.codeFamily,n.siteMarkdownCodeBg,n.borderRadius,n.colorText,Math.max(n.fontSize-1,12),n.colorBgLayout,n.siteMarkdownCodeBg,n.borderRadius,n.paddingSM,n.paddingMD,n.fontSize,n.marginMD,n.colorTextSecondary,n.colorSplit,n.colorSplit,n.marginXS,n.motionDurationSlow,n.marginXS,n.marginXS,n.marginXS,a,n.colorTextSecondary,n.fontSizeLG,n.motionDurationSlow,n.colorText,n.colorSplit,n.paddingSM,n.paddingLG,n.colorSplit,n.colorSplit,n.colorSplit,n.motionDurationSlow,Math.max(n.fontSize-1,12),n.codeFamily,n.lineHeight,n.colorSplit,n.colorText,n.fontWeightStrong,n.magenta7,Math.max(n.fontSize-1,12),Math.max(n.fontSize-1,12),Math.max(n.fontSize-1,12),a,a,n.marginXS,n.marginXS,a,n.padding,i,new z.C(i).setAlpha(.75).toHex8String(),a,a,n.colorWhite,a,new z.C(i).setAlpha(.75).toHexString(),a,a,new z.C(i).setAlpha(.75).toHexString(),a,a,a,a,new z.C(i).setAlpha(.6).toHexString(),a,a,a)})},W=nn,A,sn=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(A||(A=m()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: `,"px ",`px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: `,`;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: `,`;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: `,`px 0;
          padding: `,"px ",`px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: `,`;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),o.padding,o.paddingXL,o.colorText,o.fontSize,o.borderRadius,o.colorText,o.lineHeightLG,o.margin,o.paddingSM,o.paddingMD,o.colorBgLayout)})},en,H=function(){var n=(0,c.Fg)(),a=n.antCls,i=n.iconCls;return(0,t.jsx)(r.xB,{styles:(0,r.iv)(en||(en=m()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: calc(100% - `,`px);
          margin: 0 0 `,`px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all `,`;

          &.code-box-simplify {
            border-radius: 0;
            margin-bottom: 0;

            .code-box-demo {
              padding: 0;
              border-bottom: 0;
            }
          }

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
            > .demo {
              overflow: auto;
            }
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: `,`px;
            cursor: pointer;
            opacity: 0.75;
            transition: all `,`;
            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: `,`px;

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: `,`px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: `,`px;

            `,` {
              color: `,`;
              transition: all `,`;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: `,`px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: `,`px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity `,`;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: `,`px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: `,"px ",`px;
              font-size: `,`px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
          display: flex;
          align-items: center;
          column-gap: `,`px;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),n.lineWidth*2,n.margin,n.colorBgContainer,n.colorSplit,n.borderRadiusLG,n.motionDurationMid,n.colorText,n.colorBgContainer,n.colorBgContainer,n.borderRadiusLG,n.borderRadiusLG,n.colorPrimary,n.fontSizeXL,n.motionDurationSlow,n.colorBgContainer,n.borderRadius,n.borderRadius,n.margin,n.colorText,n.fontSize,n.fontSizeSM,n.paddingXXS,i,n.colorTextSecondary,n.motionDurationSlow,n.colorText,a,a,n.colorText,n.colorSplit,n.fontSize,n.borderRadius,n.borderRadius,n.fontSizeSM,n.colorSplit,a,a,n.borderRadius,n.borderRadius,n.colorBgContainer,n.colorSplit,n.paddingSM,n.colorSplit,n.motionDurationSlow,n.colorTextSecondary,n.colorText,i,n.fontSize,n.colorBgContainer,i,n.green6,n.colorBgContainer,n.paddingSM,n.padding,n.fontSize,n.purple3,n.purple6,n.marginSM,a)})},un=H,xn,B=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(xn||(xn=m()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-inline-end: 0;
            margin-inline-start: 0;
            padding-inline-end: `,`px;
            padding-inline-start: `,`px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-inline-start: `,`px;
            .ant-row-rtl & {
              margin-inline-end: `,`px;
              margin-inline-start: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: `,`px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: `,`px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: `,`px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 `,`px;
                  font-size: `,`px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: `,`px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: `,`px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;
              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 `,`px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: `,`px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: `,`px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: `,`px;
                    font-size: `,`px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: `,`px;
                    font-size: `,`px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background-image: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg');
            background-repeat: no-repeat;
            background-size: cover;
            .ant-row {
              margin: 0 `,`px;
            }

            .page3-block {
              margin-bottom: `,`px;
              padding: `,`px;
              background: `,`;
              border-radius: `,`px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: `,`px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-inline-start: `,`px;
              }
            }
          }
        }
      `])),o.screenLG,o.padding,o.padding,o.margin,o.margin,o.marginMD,o.marginXL,o.fontSize,o.paddingMD,o.fontSize,o.marginXL,o.fontSize,o.colorBgContainer,o.padding,o.colorSplit,o.marginXL,o.marginXXS,o.marginXS,o.fontSizeSM,o.margin,o.fontSizeSM,o.colorLink,o.marginXS,o.marginXL,o.paddingLG,o.colorBgContainer,o.borderRadiusSM,o.fontSizeSM,o.padding)})},d,T=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(d||(d=m()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow:
              0 0 10px `,`,
              0 0 5px `,`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),o.colorPrimary,o.colorPrimary,o.colorPrimary,o.colorPrimary,o.colorPrimary)})},E,g=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(E||(E=m()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-inline-start: `,`px;

          .ant-row-rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: `,`px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: `,`px;
          color: `,`;
          font-size: `,`px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: `,`px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: `,`px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all `,`;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow:
            0 1px 0 0 #ddd,
            0 3px 0 0 `,`,
            0 4px 0 0 #ddd,
            0 6px 0 0 `,`,
            0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: `,"px 0 ",`px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-inline-end: 12.5%;
            margin-bottom: `,`px;
            padding: `,`px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: `,`px;

            &:last-child {
              margin-inline-end: 0;
            }

            h4 {
              margin: `,"px 0 ",`px;
            }

            p {
              font-size: `,`px;
              line-height: 24px;
            }
          }
        }
      `])),o.marginLG,o.marginLG,o.padding,o.colorPrimary,o.colorError,o.marginMD,o.colorText,o.fontSizeSM,o.colorTextSecondary,o.fontSizeSM,o.paddingSM,o.colorBgContainer,o.borderRadius,o.motionDurationSlow,o.colorBgContainer,o.colorBgContainer,o.marginXXL,o.marginLG,o.marginLG,o.paddingLG,o.borderRadiusSM,o.margin,o.marginXS,o.fontSizeSM)})},F,Q="dumi-default-",mn=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(F||(F=m()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),Q,o.colorText,o.colorBgContainer,o.colorBgContainer,o.colorTextPlaceholder,Q,o.colorBgElevated,o.colorBgElevated,Q,o.controlItemBgActive,o.controlItemBgHover,o.colorText,o.colorText)})},dn,gn=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(dn||(dn=m()([`
        .design-inline-cards {
          display: flex;
          margin: 0 -`,`px;
        }
        .design-inline-cards > * {
          flex: 10%;
          margin: 0 `,`px;
        }
        .design-inline-cards img {
          width: 100%;
          max-width: 100%;
        }
        .design-inline-cards h4 {
          margin-bottom: 0;
        }
      `])),o.marginMD,o.marginMD)})},pn=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(N,{}),(0,t.jsx)(G,{}),(0,t.jsx)(W,{}),(0,t.jsx)(sn,{}),(0,t.jsx)(un,{}),(0,t.jsx)(B,{}),(0,t.jsx)(T,{}),(0,t.jsx)(g,{}),(0,t.jsx)(gn,{}),(0,t.jsx)(ln,{}),(0,t.jsx)(h,{}),(0,t.jsx)(mn,{})]})},x=pn,O=e(97857),w=e.n(O),Y=e(9783),tn=e.n(Y),Tn=e(639389),On=e.n(Tn),kn=e(469181),on=e(344682),Ln=e(11739),Bn=e(709894),Fn=e(883458),Hn=e(722449),Kn=function(n){var a=n.direction;return(0,t.jsx)("svg",{viewBox:"0 0 20 20",width:"20",height:"20",fill:"currentColor",style:{transform:"scaleX(".concat(a==="ltr"?"1":"-1",")")},children:(0,t.jsx)("path",{d:"m14.6961816 11.6470802.0841184.0726198 2 2c.2662727.2662727.2904793.682876.0726198.9764816l-.0726198.0841184-2 2c-.2929.2929-.7677.2929-1.0606 0-.2662727-.2662727-.2904793-.682876-.0726198-.9764816l.0726198-.0841184.7196-.7197h-10.6893c-.41421 0-.75-.3358-.75-.75 0-.3796833.28215688-.6934889.64823019-.7431531l.10176981-.0068469h10.6893l-.7196-.7197c-.2929-.2929-.2929-.7677 0-1.0606.2662727-.2662727.682876-.2904793.9764816-.0726198zm-8.1961616-8.6470802c.30667 0 .58246.18671.69635.47146l3.00003 7.50004c.1538.3845-.0333.821-.41784.9749-.38459.1538-.82107-.0333-.9749-.4179l-.81142-2.0285h-2.98445l-.81142 2.0285c-.15383.3846-.59031.5717-.9749.4179-.38458-.1539-.57165-.5904-.41781-.9749l3-7.50004c.1139-.28475.38968-.47146.69636-.47146zm8.1961616 1.14705264.0841184.07261736 2 2c.2662727.26626364.2904793.68293223.0726198.97654222l-.0726198.08411778-2 2c-.2929.29289-.7677.29289-1.0606 0-.2662727-.26626364-.2904793-.68293223-.0726198-.97654222l.0726198-.08411778.7196-.7196675h-3.6893c-.4142 0-.75-.3357925-.75-.7500025 0-.3796925.2821653-.69348832.6482323-.74315087l.1017677-.00684663h3.6893l-.7196-.7196725c-.2929-.29289-.2929-.76777 0-1.06066.2662727-.26626364.682876-.29046942.9764816-.07261736zm-8.1961616 1.62238736-.89223 2.23056h1.78445z"})})},Xn=function(n){return(0,t.jsx)(On(),w()(w()({},n),{},{component:function(){return(0,t.jsx)(Kn,{direction:n.direction})}}))},Wn=Xn,qn=e(840070),Dn=e(373638),Jn=e(438199),Rn=e(472638),Qn,oe,Je=(0,c.kc)(function(o){var n=o.token,a=o.css,i=n.headerHeight,p=n.colorTextHeading,y=n.fontFamily,u=n.mobileMaxWidth;return{logo:a(Qn||(Qn=m()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: `,`px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),i,p,y,i,p,n.marginSM,u),title:a(oe||(oe=m()([`
      line-height: 32px;
    `])))}}),Qe=function(n){var a=n.isZhCN,i=(0,b.useLocation)(),p=i.search,y=Je(),u=y.styles;return(0,t.jsx)("h1",{children:(0,t.jsxs)(Rn.Z,{to:Dn.J1("/",a,p),className:u.logo,children:[(0,t.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,t.jsx)("span",{className:u.title,children:"Ant Design"})]})})},Ye=Qe,_e=e(719632),qe=e.n(_e),ce=e(533108),ue,nt={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},et=(0,c.kc)(function(o){var n=o.token,a=n.antCls,i=n.iconCls,p=n.fontFamily,y=n.fontSize,u=n.headerHeight,Z=n.menuItemBorder,R=n.colorPrimary,_=n.colorText;return{nav:(0,c.iv)(ue||(ue=m()([`
      height: 100%;
      font-size: `,`px;
      font-family: Avenir, `,`, sans-serif;
      border: 0 !important;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-inline-end: `,`px;
          padding-inline-start: `,`px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: '';
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),y,p,a,a,a,40+12*2,u,n.paddingSM,n.paddingSM,u,Z,_,a,i,a,R,a,a)}}),tt=function(n){var a,i,p=n.isZhCN,y=n.isMobile,u=n.responsive,Z=n.directionText,R=n.onLangChange,_=n.onDirectionChange,cn=(0,b.useLocation)(),Mn=cn.pathname,rn=cn.search,hn=(0,U.default)(nt),wn=S()(hn,1),Cn=wn[0],X=(0,b.useFullSidebarData)(),vn=((a=X["/docs/blog"])===null||a===void 0||(a=a[0])===null||a===void 0?void 0:a.children)||[],q=et(),En=q.styles,An=y?"inline":"horizontal",Gn=Mn.split("/").filter(Boolean).slice(0,-1).join("/"),bn=Gn||"home";Mn.startsWith("/changelog")?bn="docs/react":Mn.startsWith("/docs/resources")&&(bn="docs/resources");var Nn=[],In=[{label:(0,t.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,t.jsx)(b.FormattedMessage,{id:"app.header.lang"}),onClick:R,key:"switch-lang"},{label:Z,onClick:_,key:"switch-direction"}];y?Nn=In:u==="crowded"&&(Nn=[{label:(0,t.jsx)(Tn.MenuOutlined,{}),key:"additional",children:[].concat(In)}]);var Zn=[{label:(0,t.jsx)(Rn.Z,{to:Dn.J1("/docs/spec/introduce",p,rn),children:Cn.design}),key:"docs/spec"},{label:(0,t.jsx)(Rn.Z,{to:Dn.J1("/docs/react/introduce",p,rn),children:Cn.development}),key:"docs/react"},{label:(0,t.jsx)(Rn.Z,{to:Dn.J1("/components/overview/",p,rn),children:Cn.components}),key:"components"},vn.length?{label:(0,t.jsx)(Rn.Z,{to:Dn.J1(vn.sort(function($n,Vn){var ne,_n;return((ne=$n.frontmatter)===null||ne===void 0?void 0:ne.date)>((_n=Vn.frontmatter)===null||_n===void 0?void 0:_n.date)?-1:1})[0].link,p,rn),children:Cn.blog}),key:"docs/blog"}:null,{label:(0,t.jsx)(Rn.Z,{to:Dn.J1("/docs/resources",p,rn),children:Cn.resources}),key:"docs/resources"},p?{key:"mirror",label:(0,t.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"})}:null].concat(qe()((i=Nn)!==null&&i!==void 0?i:[])).filter(Boolean);return(0,t.jsx)(ce.Z,{mode:An,selectedKeys:[bn],className:En.nav,disabledOverflow:!0,items:Zn})},ot=tt,rt=e(879587),me,ge,pe,he,fe,Yn="1.2em",at=(0,c.kc)(function(o){var n=o.token,a=o.css,i=n.colorText,p=n.colorBorder,y=n.colorBgContainer,u=n.colorBgTextHover,Z=n.borderRadius,R=n.controlHeight,_=n.motionDurationMid;return{btn:a(me||(me=m()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),i,p,R,R,Z,_,_,u,Yn,Yn,Yn),innerDiv:a(ge||(ge=m()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Yn,Yn),labelStyle:a(pe||(pe=m()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Yn,i,i),label1Style:a(he||(he=m()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),i,y),label2Style:a(fe||(fe=m()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),it=function(n){var a=n.label1,i=n.label2,p=n.tooltip1,y=n.tooltip2,u=n.value,Z=n.pure,R=n.onClick,_=at(),cn=_.styles,Mn=cn.btn,rn=cn.innerDiv,hn=cn.labelStyle,wn=cn.label1Style,Cn=cn.label2Style,X=(0,t.jsx)("button",{onClick:R,className:Mn,"aria-label":n["aria-label"],children:(0,t.jsxs)("div",{className:"btn-inner",children:[Z&&(u===1?a:i),!Z&&(0,t.jsxs)("div",{className:rn,children:[(0,t.jsx)("span",{className:v()(hn,u===1?wn:Cn),children:a}),(0,t.jsx)("span",{className:v()(hn,u===1?Cn:wn),children:i})]})]})},"lang-button");return p||y?(0,t.jsx)(rt.Z,{title:u===1?p:y,children:X}):X},le=it,xe,ve,be,ye,Se,Ce,je=1120,we=1200,lt={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},st=(0,c.kc)(function(o){var n=o.token,a=o.css,i="#ced4d9";return{header:a(xe||(xe=m()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
        border: none;
      }

      .dumi-default-search-bar {
        display: inline-flex;
        align-items: center;
        flex: auto;
        margin: 0;
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;
          max-width: calc(100vw - 768px);

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: `,`px;
          position: static;
          top: unset;
          transform: unset;
        }

        .dumi-default-search-popover {
          inset-inline-start: `,`px;
          inset-inline-end: unset;
          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
          & > section {
            scrollbar-width: thin;
            scrollbar-color: unset;
          }
        }
      }
    `])),n.colorBgContainer,n.boxShadowTertiary,n.mobileMaxWidth,i,i,i,n.borderRadiusSM,n.paddingSM),menuRow:a(ve||(ve=m()([`
      display: flex;
      align-items: center;
      margin: 0;
      column-gap: `,`px;
      padding-inline-end: `,`px;

      > * {
        flex: none;
        margin: 0;
      }
    `])),n.paddingSM,n.padding),dataDirectionIcon:a(be||(be=m()([`
      width: 20px;
    `]))),popoverMenu:tn()({width:300},"".concat(n.antCls,"-popover-inner-content"),{padding:0}),banner:a(ye||(ye=m()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:a(Se||(Se=m()([`
      margin-inline-start: 10px;
      @media only screen and (max-width: `,`px) {
        margin-inline-start: 0;
      }
    `])),n.mobileMaxWidth),versionSelect:a(Ce||(Ce=m()([`
      min-width: 90px;
      .rc-virtual-list {
        .rc-virtual-list-holder {
          scrollbar-width: thin;
          scrollbar-color: unset;
        }
      }
    `])))}}),dt=function(){var n=(0,U.default)(lt),a=S()(n,2),i=a[0],p=a[1],y=(0,b.useSiteData)(),u=y.pkg,Z=(0,Dn.Is)(),R=(0,s.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),_=S()(R,2),cn=_[0],Mn=_[1],rn=(0,s.useContext)(Jn.Z),hn=rn.direction,wn=rn.isMobile,Cn=rn.bannerVisible,X=rn.updateSiteConfig,vn=(0,s.useRef)(null),q=(0,b.useLocation)(),En=q.pathname,An=q.search,Gn=st(),bn=Gn.styles,Nn=(0,s.useCallback)(function(){Mn(function(yn){return w()(w()({},yn),{},{menuVisible:!1})})},[]),In=(0,s.useCallback)(function(){Mn(function(yn){return w()(w()({},yn),{},{windowWidth:window.innerWidth})})},[]),Zn=(0,s.useCallback)(function(yn){Mn(function(Pn){return w()(w()({},Pn),{},{menuVisible:yn})})},[]),$n=function(){X({direction:hn!=="rtl"?"rtl":"ltr"})},Vn=function(){X({bannerVisible:!1}),Dn.Fy()&&localStorage.setItem(qn.ANT_DESIGN_NOT_SHOW_BANNER,C()().toISOString())};(0,s.useEffect)(function(){Nn()},[q]),(0,s.useEffect)(function(){return In(),window.addEventListener("resize",In),function(){window.removeEventListener("resize",In),vn.current&&clearTimeout(vn.current)}},[]);var ne=(0,s.useCallback)(function(yn){var Pn=window.location.href,ie=window.location.pathname;if(/overview/.test(ie)&&/0?[1-39][0-3]?x/.test(yn)){window.location.href=Pn.replace(window.location.origin,yn).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(yn)?"":"/react","/introduce")).replace(/\/$/,"");return}var te=new URL(Pn.replace(window.location.origin,yn));te.host.includes("antgroup")?(te.pathname="".concat(te.pathname.replace(/\/$/,""),"/"),window.location.href=te.toString()):window.location.href=te.href.replace(/\/$/,"")},[]),_n=(0,s.useCallback)(function(){var yn="".concat(window.location.protocol,"//"),Pn=window.location.href.slice(yn.length);Dn.Fy()&&localStorage.setItem("locale",Dn.KE(En)?"en-US":"zh-CN"),window.location.href=yn+Pn.replace(window.location.pathname,Dn.J1(En,!Dn.KE(En),An).pathname)},[q]),eo=(0,s.useMemo)(function(){return hn!=="rtl"?"RTL":"LTR"},[hn]),to=(0,s.useMemo)(function(){return hn==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[hn]),oo=cn.menuVisible,ae=cn.windowWidth,Ze=cn.searching,$e=w()(tn()({},u.version,u.version),Z==null?void 0:Z.docVersions),ro=Object.keys($e).map(function(yn){return{value:$e[yn],label:yn}}),Xe=["","index","index-cn"].includes(En),Ue=p==="cn",ao=hn==="rtl",de=null;ae<je?de="crowded":ae<we&&(de="narrow");var io=v()(bn.header,"clearfix",{"home-header":Xe}),Ge={isZhCN:Ue,isRTL:ao},Ve=(0,t.jsx)(ot,w()(w()({},Ge),{},{responsive:de,isMobile:wn,directionText:eo,onLangChange:_n,onDirectionChange:$n}),"nav"),ee=[Ve,(0,t.jsx)(kn.Z,{size:"small",className:bn.versionSelect,defaultValue:u.version,onChange:ne,dropdownStyle:to,popupMatchSelectWidth:!1,getPopupContainer:function(Pn){return Pn.parentNode},options:ro},"version"),(0,t.jsx)(le,{onClick:_n,value:Dn.KE(En)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,t.jsx)(le,{onClick:$n,value:hn==="rtl"?2:1,label1:(0,t.jsx)(Wn,{className:bn.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,t.jsx)(Wn,{className:bn.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,t.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,t.jsx)(le,{value:1,label1:(0,t.jsx)(Tn.GithubOutlined,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];ae<je?ee=Ze?[]:[Ve]:ae<we&&(ee=Ze?[]:ee);var Ke=Xe?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,t.jsxs)("header",{className:io,children:[wn&&(0,t.jsx)(on.Z,{overlayClassName:bn.popoverMenu,placement:"bottomRight",content:ee,trigger:"click",open:oo,arrow:{pointAtCenter:!0},onOpenChange:Zn,children:(0,t.jsx)(Tn.MenuOutlined,{className:"nav-phone-icon"})}),Ue&&Cn&&(0,t.jsx)(V.ZP,{theme:{token:{colorInfoBg:"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:"#000"}},children:(0,t.jsx)(Ln.Z,{className:bn.banner,message:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:wn?i.shortMessage:i.message}),(0,t.jsx)("a",{className:bn.link,href:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var Pn,ie;(Pn=(ie=window).gtag)===null||Pn===void 0||Pn.call(ie,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i.link})},children:i.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:Vn})}),(0,t.jsxs)(Bn.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,t.jsx)(Fn.Z,w()(w()({},Ke[0]),{},{children:(0,t.jsx)(Ye,w()(w()({},Ge),{},{location:q}))})),(0,t.jsx)(Fn.Z,w()(w()({},Ke[1]),{},{children:(0,t.jsxs)("div",{className:bn.menuRow,children:[(0,t.jsx)(Hn.ZP,{}),!wn&&ee]})}))]})]})},ct=dt,lo=e(945462),Me=e(777502),ut=function(n){var a=n.children,i=n.title,p=n.desc;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(b.Helmet,{children:[(0,t.jsx)("title",{children:i}),(0,t.jsx)("meta",{property:"og:title",content:i}),p&&(0,t.jsx)("meta",{name:"description",content:p})]}),(0,t.jsx)("div",{style:{minHeight:"100vh"},children:a}),(0,t.jsx)(Me.default,{})]})},mt=ut,gt=e(86198),Ee=e(259696),Te=e(49313),pt=function(){var n=(0,b.useRouteMeta)(),a=s.useMemo(function(){var u;if(!n.frontmatter.subtitle&&!n.frontmatter.title)u="404 Not Found - Ant Design";else{var Z;u="".concat(n.frontmatter.subtitle||""," ").concat(((Z=n.frontmatter)===null||Z===void 0?void 0:Z.title)||""," - Ant Design")}var R=n.frontmatter.description||"";return[u,R]},[n]),i=S()(a,2),p=i[0],y=i[1];return(0,t.jsxs)(b.Helmet,{children:[(0,t.jsx)("title",{children:p}),(0,t.jsx)("meta",{property:"og:title",content:p}),y&&(0,t.jsx)("meta",{name:"description",content:y})]})},Le=pt,ht=e(148050),ft=e(468990),xt=e(823493),vt=e.n(xt),bt=e(658192),De,ke,Be,Ae=["scroll","resize"],yt=(0,c.kc)(function(o){var n=o.token,a=o.css,i=n.boxShadowSecondary,p=n.antCls;return{affixTabs:a(De||(De=m()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1001;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition:
        opacity `,`,
        transform `,`;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),i,n.motionDurationSlow,n.motionDurationSlow,p,p,p),affixTabsFixed:a(ke||(ke=m()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:a(Be||(Be=m()([`
      text-transform: capitalize;
    `])))}}),Pe=32,St=function(){var n=s.useRef(null),a=s.useRef([]),i=s.useState(!1),p=S()(i,2),y=p[0],u=p[1],Z=s.useState(void 0),R=S()(Z,2),_=R[0],cn=R[1],Mn=yt(),rn=Mn.styles,hn=rn.affixTabs,wn=rn.affixTabsFixed,Cn=rn.span;function X(q){var En=document.getElementById(q);if(En){var An=En.offsetTop-n.current.offsetHeight-Pe;(0,bt.Z)(An)}}s.useEffect(function(){var q=document.querySelectorAll("h2[id]");a.current=Array.from(q).map(function(En){var An=En.id;return An}),u(!0)},[]),s.useEffect(function(){var q=decodeURIComponent((location.hash||"").slice(1));q&&X(q)},[y]);var vn=s.useMemo(function(){function q(){for(var En=window,An=En.scrollY,Gn=n.current.offsetHeight,bn=a.current.length-1;bn>=0;bn-=1){var Nn=a.current[bn],In=document.getElementById(Nn),Zn=In.offsetTop-Gn-Pe;if(Zn<=An){cn(Nn);return}}cn(void 0)}return vt()(q)},[]);return s.useEffect(function(){return Ae.forEach(function(q){return window.addEventListener(q,vn)}),vn(),function(){Ae.forEach(function(q){return window.removeEventListener(q,vn)})}},[]),(0,t.jsx)("div",{className:v()(hn,_&&wn),ref:n,children:(0,t.jsx)(ft.Z,{activeKey:_,centered:!0,size:"large",onChange:X,items:a.current.map(function(q){return{key:q,label:(0,t.jsx)("span",{className:Cn,children:q.replace(/-/g," ")})}})})})},Ct=St,ze,Oe,Fe,Re=40,re=1208,se=24,jt=function(){var n=(0,Te.Z)();return(0,c.kc)(function(a){var i=a.token,p=a.css,y=i.antCls;return{resourcePage:p(ze||(ze=m()([`
        footer {
          margin-top: 176px;

          .rc-footer-container {
            max-width: `,`px;
            margin: 0 auto;
            padding-inline-end: 0;
            padding-inline-start: 0;
          }
        }
      `])),re),resourceContent:p(Oe||(Oe=m()([`
        padding: 0 `,`px;
        max-width: `,`px;
        margin: 0 auto;
        box-sizing: content-box;
        min-height: 100vh;

        @media only screen and (max-width: 767.99px) {
          & {
            article {
              padding: 0 `,`px;
            }
            `,`-col {
              padding-top: `,`px !important;
              padding-bottom: `,`px !important;
            }
          }
        }
      `])),Re,re,se,y,i.padding,i.padding),banner:p(Fe||(Fe=m()([`
        padding: 0 `,`px;
        overflow: hidden;
        `,`
        background-size: cover;

        h1 {
          box-sizing: content-box;
          max-width: `,`px;
          margin: 56px auto 16px;
        }

        section {
          max-width: `,`px;
          margin: 0 auto 56px;
          font-weight: 200;
          font-size: `,`px;
          line-height: 24px;
        }

        @media only screen and (max-width: 767.99px) {
          & {
            margin: 0 -`,`px;
            padding: 0 `,`px;
          }
        }
      `])),Re,n?"":"background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');",re,re,i.fontSizeLG,se,se)}})()},wt=function(n){var a,i=n.children,p=jt(),y=p.styles,u=(0,b.useRouteMeta)(),Z=(0,Te.Z)(),R=(0,t.jsxs)(gt.Z,{children:[(0,t.jsx)(Le,{}),(0,t.jsxs)("div",{id:"resources-page",className:y.resourcePage,children:[(0,t.jsx)(Ct,{}),(0,t.jsxs)("div",{className:y.banner,children:[(0,t.jsxs)(Ee.Z.Title,{style:{fontSize:30},children:[(a=u.frontmatter)===null||a===void 0?void 0:a.title,(0,t.jsx)(ht.default,{title:(0,t.jsx)(b.FormattedMessage,{id:"app.content.edit-page"}),filename:u.frontmatter.filename})]}),(0,t.jsx)("section",{children:u.frontmatter.description})]}),(0,t.jsx)("div",{className:y.resourceContent,children:i}),(0,t.jsx)(Me.default,{})]})]});return Z?R:(0,t.jsx)(V.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:R})},Mt=wt,Et=e(106750),Tt=e(217187),Lt=e(340908),Dt=e(524229),kt=e(548657),Bt=e(442708),At=function(n){var a=n.children,i=n.fallback,p=i===void 0?(0,t.jsx)(kt.Z.Input,{active:!0,size:"small"}):i,y=n.delay,u=y===void 0?200:y;return(0,t.jsx)(Bt.df,{triggerOnce:!0,delay:u,children:function(R){var _=R.inView,cn=R.ref;return(0,t.jsx)("div",{ref:cn,children:(0,t.jsx)(s.Suspense,{fallback:p,children:_?a:(0,t.jsx)("span",{})})})}})},Un=At,Ne,Pt=s.lazy(function(){return Promise.all([e.e(3156),e.e(7721)]).then(e.bind(e,617721))}),zt=s.lazy(function(){return e.e(9148).then(e.bind(e,349148))}),Ot=s.lazy(function(){return e.e(8301).then(e.bind(e,368301))}),Ft=s.lazy(function(){return e.e(8598).then(e.bind(e,458598))}),Rt=s.lazy(function(){return Promise.resolve().then(e.bind(e,777502))}),Nt=s.lazy(function(){return e.e(6720).then(e.bind(e,366720))}),It=s.lazy(function(){return Promise.all([e.e(1249),e.e(9285),e.e(5557)]).then(e.bind(e,135557))}),Ht=s.lazy(function(){return Promise.resolve().then(e.bind(e,148050))}),Wt=(0,c.kc)(function(o){var n=o.token,a=o.css;return{articleWrapper:a(Ne||(Ne=m()([`
    padding: 0 170px 32px 64px;
    &.rtl {
      padding: 0 64px 144px 170px;
    }
    @media only screen and (max-width: `,`px) {
      &,
      &.rtl {
        padding: 0 `,`px;
      }
    }
  `])),n.screenLG,n.paddingLG*2)}}),Zt=function(n){var a,i,p,y=n.children,u=(0,b.useRouteMeta)(),Z=(0,K.Z)(),R=Z.pathname,_=Z.hash,cn=(0,s.useContext)(Jn.Z),Mn=cn.direction,rn=Wt(),hn=rn.styles,wn=(0,Tt.Z)(!1),Cn=S()(wn,2),X=Cn[0],vn=Cn[1],q=(0,s.useState)("tsx"),En=S()(q,2),An=En[0],Gn=En[1],bn=(0,s.useMemo)(function(){var $n;return(($n=u.toc)===null||$n===void 0?void 0:$n.filter(function(Vn){return Vn._debug_demo}).map(function(Vn){return Vn.id}))||[]},[u]),Nn=bn.includes(_.slice(1));(0,s.useLayoutEffect)(function(){vn(Nn)},[]);var In=(0,s.useMemo)(function(){return{showDebug:X,setShowDebug:vn,codeType:An,setCodeType:Gn}},[X,An,bn]),Zn=Mn==="rtl";return(0,t.jsx)(Dt.Z.Provider,{value:In,children:(0,t.jsxs)(Fn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[(0,t.jsx)(Un,{fallback:null,children:(0,t.jsx)(Ot,{showDebug:X,debugDemos:bn})}),(0,t.jsxs)("article",{className:v()(hn.articleWrapper,{rtl:Zn}),children:[(a=u.frontmatter)!==null&&a!==void 0&&a.title?(0,t.jsxs)(Ee.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,t.jsxs)(Et.Z,{gap:"small",children:[(0,t.jsx)("div",{children:(i=u.frontmatter)===null||i===void 0?void 0:i.title}),(0,t.jsx)("div",{children:(p=u.frontmatter)===null||p===void 0?void 0:p.subtitle}),!R.startsWith("/components/overview")&&(0,t.jsx)(Un,{fallback:null,children:(0,t.jsx)(Ht,{title:(0,t.jsx)(b.FormattedMessage,{id:"app.content.edit-page"}),filename:u.frontmatter.filename})})]}),R.startsWith("/components/")&&(0,t.jsx)(Un,{fallback:null,children:(0,t.jsx)(It,{pathname:R})})]}):null,(0,t.jsx)(Un,{fallback:null,children:(0,t.jsx)(Ft,{})}),!u.frontmatter.__autoDescription&&u.frontmatter.description,u.frontmatter.category==="Components"&&String(u.frontmatter.showImport)!=="false"&&(0,t.jsx)(Lt.Z,{source:!0,component:u.frontmatter.title,filename:u.frontmatter.filename,version:u.frontmatter.tag}),(0,t.jsx)("div",{style:{minHeight:"calc(100vh - 64px)",width:"calc(100% - 10px)"},children:y}),(0,t.jsx)(Un,{children:(0,t.jsx)(zt,{zhihuLink:u.frontmatter.zhihu_url,yuqueLink:u.frontmatter.yuque_url,juejinLink:u.frontmatter.juejin_url})}),(0,t.jsx)(Un,{fallback:(0,t.jsx)("div",{style:{height:50,marginTop:120}}),children:(0,t.jsx)(Pt,{filename:u.frontmatter.filename})})]}),(0,t.jsx)(Un,{fallback:null,children:(0,t.jsx)(Nt,{rtl:Zn})}),(0,t.jsx)(Rt,{})]})})},$t=Zt,Xt=e(650010),Ut=e(361446),Ie,He,Gt=(0,c.kc)(function(o){var n=o.token,a=o.css,i=n.antCls,p=n.fontFamily,y=n.colorSplit;return{asideContainer:a(Ie||(Ie=m()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: `,`px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: `,`px;
          margin-bottom: `,`px;
          font-size: `,`px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
          > `,`-menu-submenu
          > `,`-menu-submenu-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item,
          &`,`-menu-inline
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item {
          padding-inline-start: 40px !important;

          `,`-row-rtl & {
            padding-inline-end: 40px !important;
            padding-inline-start: `,`px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-inline-start: `,`px;
            padding-inline-start: 60px;

            `,`-row-rtl & {
              padding-inline-end: 60px;
              padding-inline-start: `,`px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-inline-start: 80px !important;

            `,`-row-rtl & {
              padding-inline-end: 80px !important;
              padding-inline-start: `,`px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }
    `])),p,i,i,i,i,n.fontSize,i,i,n.margin,n.margin,n.fontSize,y,i,i,i,i,i,i,i,i,i,i,i,i,i,n.padding,i,i,n.marginXXS,i,n.padding,i,i,i,n.padding,i,i),mainMenu:a(He||(He=m()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
        scrollbar-width: thin;
        scrollbar-color: unset;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),n.headerHeight+n.contentMarginTop,n.headerHeight+n.contentMarginTop)}}),Vt=function(){var n=(0,b.useSidebarData)(),a=(0,s.useContext)(Jn.Z),i=a.isMobile,p=a.theme,y=Gt(),u=y.styles,Z=(0,Ut.Z)(),R=S()(Z,2),_=R[0],cn=R[1],Mn=p.includes("dark"),rn=(0,c.Fg)(),hn=rn.colorBgContainer,wn=(0,t.jsx)(V.ZP,{theme:{components:{Menu:{itemBg:hn,darkItemBg:hn}}},children:(0,t.jsx)(ce.Z,{items:_,inlineIndent:30,className:u.asideContainer,mode:"inline",theme:Mn?"dark":"light",selectedKeys:[cn],defaultOpenKeys:n==null?void 0:n.map(function(Cn){var X=Cn.title;return X}).filter(Boolean)})});return i?(0,t.jsx)(Xt.Z,{children:wn},"Mobile-menu"):(0,t.jsx)(Fn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:u.mainMenu,children:(0,t.jsx)("section",{className:"main-menu-inner",children:wn})})},Kt=Vt,We,Jt=(0,c.kc)(function(o){var n=o.css,a=o.token;return{main:n(We||(We=m()([`
    display: flex;
    margin-top: `,`px;
  `])),a.contentMarginTop)}}),Qt=function(n){var a=n.children,i=Jt(),p=i.styles;return(0,t.jsxs)("main",{className:p.main,children:[(0,t.jsx)(Le,{}),(0,t.jsx)(Kt,{}),(0,t.jsx)($t,{children:a})]})},Yt=Qt,_t={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},qt=function(){var n=(0,b.useOutlet)(),a=(0,K.Z)(),i=a.pathname,p=a.search,y=a.hash,u=(0,U.default)(_t),Z=S()(u,2),R=Z[0],_=Z[1],cn=(0,s.useRef)(null),Mn=(0,s.useContext)(Jn.Z),rn=Mn.direction,hn=(0,b.useSiteData)(),wn=hn.loading;(0,s.useLayoutEffect)(function(){_==="cn"?C().locale("zh-cn"):C().locale("en")},[]),(0,s.useEffect)(function(){var X=document.getElementById("nprogress-style");X&&(cn.current=setTimeout(function(){var vn;(vn=X.parentNode)===null||vn===void 0||vn.removeChild(X)},0))},[]),(0,s.useEffect)(function(){var X=y.replace("#","");if(X){var vn;(vn=document.getElementById(decodeURIComponent(X)))===null||vn===void 0||vn.scrollIntoView()}},[wn,y]),(0,s.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",i+p)},[a]);var Cn=s.useMemo(function(){return["","/"].some(function(X){return X===i})||["/index"].some(function(X){return i.startsWith(X)})?(0,t.jsx)(mt,{title:R.title,desc:R.description,children:n}):i.startsWith("/docs/resource")?(0,t.jsx)(Mt,{children:n}):i.startsWith("/theme-editor")?n:(0,t.jsx)(Yt,{children:n})},[i,n]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(b.Helmet,{encodeSpecialCharacters:!1,children:[(0,t.jsx)("html",{lang:_==="cn"?"zh-CN":_,"data-direction":rn,className:v()({rtl:rn==="rtl"})}),(0,t.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,t.jsx)("meta",{property:"og:description",content:R.description}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,t.jsxs)(V.ZP,{direction:rn,locale:_==="cn"?l.default:void 0,children:[(0,t.jsx)(x,{}),(0,t.jsx)(ct,{}),Cn]})]})},no=qt},840070:function(zn,$,e){e.r($),e.d($,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return k},default:function(){return I}});var an=e(97857),S=e.n(an),fn=e(805574),v=e.n(fn),P=e(667294),C=e(900210),Sn=e(368655),s=e(359020),V=e(965516),l=e(471232),b=e(385956),U=e(49313),K=e(217187),J=e(438746),m=e(513769),r=e.n(m),c=e(75529),t=e(647759),j=e(438199),f=e(785893),D=["children","theme"],ln=64,jn=38,h=function(W){var A=W.children,sn=W.theme,en=r()(W,D),H=(0,P.useContext)(c.ZP.ConfigContext),un=H.getPrefixCls,xn=H.iconPrefixCls,B=un(),d=V.Z.useToken(),T=d.token,E=(0,P.useContext)(j.Z),g=E.bannerVisible;return P.useEffect(function(){c.ZP.config({theme:sn})},[sn]),(0,f.jsx)(t.f6,S()(S()({},en),{},{theme:sn,customToken:{headerHeight:ln,bannerHeight:jn,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:T.colorFillTertiary,antCls:".".concat(B),iconCls:".".concat(xn),marginFarXS:T.marginXXL/6*7,marginFarSM:T.marginXXL/3*5,marginFar:T.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40,anchorTop:ln+T.margin+(g?jn:0)},children:A}))},M=h,N=P.lazy(function(){return Promise.all([e.e(7898),e.e(4137),e.e(263)]).then(e.bind(e,531434))}),L=768,k="ANT_DESIGN_NOT_SHOW_BANNER",G=function(){var W=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return W.map(function(A){return A==="dark"?V.Z.darkAlgorithm:A==="compact"?V.Z.compactAlgorithm:null}).filter(Boolean)},z=function(){var W=(0,b.useOutlet)(),A=(0,J.Z)(),sn=A.pathname,en=(0,b.useSearchParams)(),H=v()(en,2),un=H[0],xn=H[1],B=(0,K.Z)({isMobile:!1,direction:"ltr",theme:[],bannerVisible:!1}),d=v()(B,2),T=d[0],E=T.theme,g=E===void 0?[]:E,F=T.direction,Q=T.isMobile,mn=T.bannerVisible,dn=mn===void 0?!1:mn,gn=d[1],pn=(0,P.useCallback)(function(on){gn(function(Fn){return S()(S()({},Fn),on)});var Ln=un.toString(),Bn=un;Object.entries(on).forEach(function(Fn){var Hn=v()(Fn,2),Kn=Hn[0],Xn=Hn[1];if(Kn==="direction"&&(Xn==="rtl"?Bn.set("direction","rtl"):Bn.delete("direction")),Kn==="theme"){var Wn;Bn=(0,b.createSearchParams)(S()(S()({},Bn),{},{theme:Xn.filter(function(qn){return qn!=="light"})})),(Wn=document.querySelector("html"))===null||Wn===void 0||Wn.setAttribute("data-prefers-color",Xn.includes("dark")?"dark":"light")}}),Bn.toString()!==Ln&&xn(Bn)},[un,xn]),x=function(){pn({isMobile:window.innerWidth<L})};(0,P.useEffect)(function(){var on=un.getAll("theme"),Ln=un.get("direction");return gn({theme:on,direction:Ln==="rtl"?"rtl":"ltr"}),document.documentElement.setAttribute("data-prefers-color",on.includes("dark")?"dark":"light"),x(),window.addEventListener("resize",x),function(){window.removeEventListener("resize",x)}},[]);var O=P.useMemo(function(){return{direction:F,updateSiteConfig:pn,theme:g,isMobile:Q,bannerVisible:dn}},[Q,F,pn,g,dn]),w=P.useMemo(function(){return{algorithm:G(g),token:{motion:!g.includes("motion-off")},cssVar:!0,hashed:!1}},[g]),Y=P.useState(function(){return(0,C.createCache)()}),tn=v()(Y,1),Tn=tn[0];(0,b.useServerInsertedHTML)(function(){var on=(0,C.extractStyle)(Tn,{plain:!0,types:"style"});return(0,f.jsx)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:on}})}),(0,b.useServerInsertedHTML)(function(){var on=(0,C.extractStyle)(Tn,{plain:!0,types:["cssVar","token"]});return(0,f.jsx)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:on}})}),(0,b.useServerInsertedHTML)(function(){return(0,f.jsx)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,s.$Z)()}})});var On=sn.startsWith("/~demos"),kn=W;return On||(kn=(0,f.jsxs)(l.Z,{children:[W,(0,f.jsx)(P.Suspense,{children:(0,f.jsx)(N,{value:g,onChange:function(Ln){return pn({theme:Ln})}})})]})),(0,f.jsx)(U.f.Provider,{value:g.includes("dark"),children:(0,f.jsx)(C.StyleProvider,{cache:Tn,linters:[C.legacyNotSelectorLinter,C.parentSelectorLinter,C.NaNLinter],children:(0,f.jsx)(j.Z.Provider,{value:O,children:(0,f.jsx)(M,{theme:w,children:(0,f.jsx)(Sn.HappyProvider,{disabled:!g.includes("happy-work"),children:kn})})})})})},I=z},777502:function(zn,$,e){e.r($),e.d($,{default:function(){return N}});var an=e(805574),S=e.n(an),fn=e(168400),v=e.n(fn),P=e(667294),C=e(639389),Sn=e(510274),s=e(647759),V=e(630770),l=e(385956),b=e(391298),U=e(302559),K=e(438746),J=e(438199),m=e(693399),r=e(785893),c="ant-where-checker",t={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function j(){var L=(0,U.default)(t),k=S()(L,1),G=k[0],z=P.useState(!0),I=S()(z,2),nn=I[0],W=I[1];return P.useEffect(function(){var A=document.createElement("p");A.className=c,A.style.position="fixed",A.style.pointerEvents="none",A.style.visibility="hidden",A.style.width="0",document.body.appendChild(A),(0,m.updateCSS)(`
:where(.`.concat(c,`) {
  content: "__CHECK__";
}
    `),c);var sn=getComputedStyle(A),en=sn.content;W(String(en).includes("CHECK")),document.body.removeChild(A),(0,m.removeCSS)(c)},[]),nn?null:(0,r.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[G.whereNotSupport," ",(0,r.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:G.whereDocUrl,children:G.whereDocTitle})]})})}var f=j,D,ln,jn={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},h=function(){var k=(0,P.useContext)(J.Z),G=k.isMobile;return(0,s.kc)(function(z){var I=z.token,nn=z.css,W=new Sn.C((0,V.Z)("#f0f3fa","#fff")).onBackground(I.colorBgContainer).toHexString();return{holder:nn(D||(D=v()([`
        background: `,`;
      `])),W),footer:nn(ln||(ln=v()([`
        background: `,`;
        color: `,`;
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

        * {
          box-sizing: border-box;
        }

        h2,
        a {
          color: `,`;
        }

        .rc-footer-column {
          margin-bottom: `,`px;
          :last-child {
            margin-bottom: `,`px;
          }
        }

        .rc-footer-item-icon {
          top: -1.5px;
        }

        .rc-footer-container {
          max-width: 1208px;
          margin-inline: auto;
          padding-inline: `,`px;
        }

        .rc-footer-bottom {
          box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
          .rc-footer-bottom-container {
            font-size: `,`px;
          }
        }
      `])),W,I.colorTextSecondary,I.colorText,G?60:0,G?20:0,I.marginXXL,I.fontSize)}})()},M=function(){var k=(0,K.Z)(),G=(0,U.default)(jn),z=S()(G,2),I=z[0],nn=z[1],W=h(),A=W.styles,sn=k.getLink,en=P.useMemo(function(){var H=nn==="cn",un={title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:H?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:H?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:H?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},xn={title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.community"}),items:[{icon:(0,r.jsx)(C.AntDesignOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,r.jsx)(C.MediumOutlined,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,r.jsx)(C.TwitterOutlined,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque logo"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,r.jsx)(C.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,r.jsx)(C.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf logo"}),title:"SEE Conf",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};H&&xn.items.push({icon:(0,r.jsx)(C.UsergroupAddOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.work_with_us"}),url:sn("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:l.Link});var B={title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.help"}),items:[{icon:(0,r.jsx)(C.GithubOutlined,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,r.jsx)(C.HistoryOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.change-log"}),url:sn("/changelog"),LinkComponent:l.Link},{icon:(0,r.jsx)(C.QuestionCircleOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.faq"}),url:sn("/docs/react/faq"),LinkComponent:l.Link},{icon:(0,r.jsx)(C.BugOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,r.jsx)(C.IssuesCloseOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,r.jsx)(C.MessageOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,r.jsx)(C.QuestionCircleOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,r.jsx)(C.QuestionCircleOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},d={icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech logo"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.more-product"}),items:[{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque logo"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV logo"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg logo",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"Kitchen logo"}),title:"Kitchen",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean logo"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.galacean"}),description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech logo"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,r.jsx)(C.BgColorsOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.theme"}),url:sn("/theme-editor"),LinkComponent:l.Link}]};return[un,xn,B,d]},[nn,k.search]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.Z,{columns:en,className:A.footer,bottom:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,r.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,r.jsx)("div",{children:I.owner})]})}),(0,r.jsx)(f,{})]})},N=M},373638:function(zn,$,e){e.d($,{J1:function(){return l},Is:function(){return m},Fy:function(){return U},KE:function(){return V},qE:function(){return b}});var an=e(661227),S=e(805574),fn=e(97857),v=e(385564),P=e(842348),C=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),Sn={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":C?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function s(r,c,t,j){var f=r.map(function(h){return h.meta}).filter(function(h){return!h.skip}),D=[],ln=function(M,N){return(M.order||0)-(N.order||0)};f.sort(ln).forEach(function(h){if(h.category&&(h.category=h.category[c]||h.category),h.type&&(h.type=h.type[c]||h.type),h!=null&&h.title&&(h.title=h.title[c]||h.title),!h.category){D.push(h);return}if(h.category==="Components"&&h.type){var M=D.find(function(k){return(k==null?void 0:k.title)===h.type});M||(M={type:"type",title:h.type,children:[],order:j[h.type]},D.push(M)),M.children=M.children||[],M.children.push(h);return}var N=D.find(function(k){return(k==null?void 0:k.title)===h.category});if(N||(N={type:"category",title:h.category,children:[],order:t[h.category]},D.push(N)),N.children=N.children||[],h.type){var L=N.children.filter(function(k){return(k==null?void 0:k.title)===h.type})[0];L||(L={type:"type",title:h.type,children:[],order:j[h.type]},N.children.push(L)),L.children=L.children||[],L.children.push(h)}else N.children.push(h)});function jn(h){return h.sort(ln).map(function(M){return M.children?_objectSpread(_objectSpread({},M),{},{children:jn(M.children)}):M})}return jn(D)}function V(r){return/-cn\/?$/.test(r)}function l(r,c,t,j){var f=r.startsWith("/")?r:"/".concat(r),D;if(c?f==="/"?D="/index-cn":f.endsWith("/")?D=f.replace(/\/$/,"-cn/"):(D="".concat(f,"-cn"),D=D.replace(/(-cn)+/,"-cn")):D=/\/?index-cn/.test(f)?"/":f.replace("-cn",""),j){var ln=j[c?"zhCN":"enUS"];D+="#".concat(ln)}return{pathname:D,search:t}}function b(r){var c="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",t=new Image,j,f=function(ln){j||(j=!0,t.src="",r(ln))};return t.onload=function(){return f("responded")},t.onerror=function(){return f("error")},t.src=c,setTimeout(function(){return f("timeout")},1500)}function U(){var r="test",c=window.localStorage;try{return c.setItem(r,"1"),c.removeItem(r),!0}catch(t){return!1}}function K(r){return new Promise(function(c,t){var j=document.createElement("script");j.type="text/javascript",j.src=r,j.onload=c,j.onerror=t,document.head.appendChild(j)})}function J(r){var c=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(r))return"";var t=flattenDeep(r.filter(function(j){if(Array.isArray(j)){var f=_slicedToArray(j,1),D=f[0];return D==="p"}return!1}).map(function(j){var f=flatten(j),D=_toArray(f),ln=D[0],jn=D.slice(1),h=jn.filter(function(M){return typeof M=="string"&&!c.includes(M)}).join("");return[ln,h]})).find(function(j){return j&&typeof j=="string"&&!c.includes(j)});return t}var m=function(){return Sn}},647727:function(zn,$,e){e.d($,{Z:function(){return an.Z}});var an=e(843534)},471232:function(zn,$,e){e.d($,{Z:function(){return jn}});var an=e(97857),S=e.n(an),fn=e(805574),v=e.n(fn),P=e(667294),C=e(693967),Sn=e.n(C),s=e(544695),V=e(73287),l=e(215570),b=e(269924),U=e(890887),K=e(414466),J=e(9783),m=e.n(J),r=e(631096),c=function(M){var N=M.componentCls,L=M.colorText,k=M.fontSize,G=M.lineHeight,z=M.fontFamily;return m()({},N,{color:L,fontSize:k,lineHeight:G,fontFamily:z})},t=function(){return{}},j=(0,r.I$)("App",c,t),f=e(785893),D=function(){return P.useContext(K.Z)},ln=function(M){var N=M.prefixCls,L=M.children,k=M.className,G=M.rootClassName,z=M.message,I=M.notification,nn=M.style,W=M.component,A=W===void 0?"div":W,sn=(0,P.useContext)(V.E_),en=sn.getPrefixCls,H=en("app",N),un=j(H),xn=v()(un,3),B=xn[0],d=xn[1],T=xn[2],E=Sn()(d,H,k,G,T),g=(0,P.useContext)(K.J),F=P.useMemo(function(){return{message:S()(S()({},g.message),z),notification:S()(S()({},g.notification),I)}},[z,I,g.message,g.notification]),Q=(0,l.Z)(F.message),mn=v()(Q,2),dn=mn[0],gn=mn[1],pn=(0,U.Z)(F.notification),x=v()(pn,2),O=x[0],w=x[1],Y=(0,b.Z)(),tn=v()(Y,2),Tn=tn[0],On=tn[1],kn=P.useMemo(function(){return{message:dn,notification:O,modal:Tn}},[dn,O,Tn]);(0,s.ln)("App")(!(T&&A===!1),"usage","When using cssVar, ensure `component` is assigned a valid React component string.");var on=A===!1?P.Fragment:A,Ln={className:E,style:nn};return B((0,f.jsx)(K.Z.Provider,{value:kn,children:(0,f.jsx)(K.J.Provider,{value:F,children:(0,f.jsxs)(on,S()(S()({},A===!1?void 0:Ln),{},{children:[On,gn,w,L]}))})}))};ln.useApp=D;var jn=ln},86198:function(zn,$,e){e.d($,{Z:function(){return xn}});var an=e(719632),S=e.n(an),fn=e(9783),v=e.n(fn),P=e(805574),C=e.n(P),Sn=e(513769),s=e.n(Sn),V=e(97857),l=e.n(V),b=e(667294),U=e(693967),K=e.n(U),J=e(518475),m=e(73287),r=e(121790),c=e(45598),t=e(296708);function j(B,d,T){if(typeof T=="boolean")return T;if(B.length)return!0;var E=(0,c.default)(d);return E.some(function(g){return g.type===t.Z})}var f=e(900210),D=e(631096),ln=function(d){var T=d.componentCls,E=d.bodyBg,g=d.lightSiderBg,F=d.lightTriggerBg,Q=d.lightTriggerColor;return v()({},"".concat(T,"-sider-light"),v()(v()({background:g},"".concat(T,"-sider-trigger"),{color:Q,background:F}),"".concat(T,"-sider-zero-width-trigger"),{color:Q,background:F,border:"1px solid ".concat(E),borderInlineStart:0}))},jn=ln,h=function(d){var T=d.antCls,E=d.componentCls,g=d.colorText,F=d.triggerColor,Q=d.footerBg,mn=d.triggerBg,dn=d.headerHeight,gn=d.headerPadding,pn=d.headerColor,x=d.footerPadding,O=d.triggerHeight,w=d.zeroTriggerHeight,Y=d.zeroTriggerWidth,tn=d.motionDurationMid,Tn=d.motionDurationSlow,On=d.fontSize,kn=d.borderRadius,on=d.bodyBg,Ln=d.headerBg,Bn=d.siderBg;return v()(v()(v()(v()({},E,l()(l()(v()(v()(v()({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:on,"&, *":{boxSizing:"border-box"}},"&".concat(E,"-has-sider"),v()({flexDirection:"row"},"> ".concat(E,", > ").concat(E,"-content"),{width:0})),"".concat(E,"-header, &").concat(E,"-footer"),{flex:"0 0 auto"}),"".concat(E,"-sider"),{position:"relative",minWidth:0,background:Bn,transition:"all ".concat(tn,", background 0s"),"&-children":v()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(T,"-menu").concat(T,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:O},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:O,color:F,lineHeight:(0,f.unit)(O),textAlign:"center",background:mn,cursor:"pointer",transition:"all ".concat(tn)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:dn,insetInlineEnd:d.calc(Y).mul(-1).equal(),zIndex:1,width:Y,height:w,color:F,fontSize:d.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:Bn,borderStartStartRadius:0,borderStartEndRadius:kn,borderEndEndRadius:kn,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(Tn," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(Tn),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:d.calc(Y).mul(-1).equal(),borderStartStartRadius:kn,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:kn}}}}),jn(d)),{},{"&-rtl":{direction:"rtl"}})),"".concat(E,"-header"),v()({height:dn,padding:gn,color:pn,lineHeight:(0,f.unit)(dn),background:Ln},"".concat(T,"-menu"),{lineHeight:"inherit"})),"".concat(E,"-footer"),{padding:x,color:g,fontSize:On,background:Q}),"".concat(E,"-content"),{flex:"auto",color:g,minHeight:0})},M=function(d){var T=d.colorBgLayout,E=d.controlHeight,g=d.controlHeightLG,F=d.colorText,Q=d.controlHeightSM,mn=d.marginXXS,dn=d.colorTextLightSolid,gn=d.colorBgContainer,pn=g*1.25;return{colorBgHeader:"#001529",colorBgBody:T,colorBgTrigger:"#002140",bodyBg:T,headerBg:"#001529",headerHeight:E*2,headerPadding:"0 ".concat(pn,"px"),headerColor:F,footerPadding:"".concat(Q,"px ").concat(pn,"px"),footerBg:T,siderBg:"#001529",triggerHeight:g+mn*2,triggerBg:"#002140",triggerColor:dn,zeroTriggerWidth:g,zeroTriggerHeight:g,lightSiderBg:gn,lightTriggerBg:gn,lightTriggerColor:F}},N=(0,D.I$)("Layout",function(B){return[h(B)]},M,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),L=e(785893),k=["prefixCls","suffixCls","className","tagName"],G=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function z(B){var d=B.suffixCls,T=B.tagName,E=B.displayName;return function(g){var F=b.forwardRef(function(Q,mn){return(0,L.jsx)(g,l()({ref:mn,suffixCls:d,tagName:T},Q))});return F}}var I=b.forwardRef(function(B,d){var T=B.prefixCls,E=B.suffixCls,g=B.className,F=B.tagName,Q=s()(B,k),mn=b.useContext(m.E_),dn=mn.getPrefixCls,gn=dn("layout",T),pn=N(gn),x=C()(pn,3),O=x[0],w=x[1],Y=x[2],tn=E?"".concat(gn,"-").concat(E):gn;return O((0,L.jsx)(F,l()({className:K()(T||tn,g,w,Y),ref:d},Q)))}),nn=b.forwardRef(function(B,d){var T=b.useContext(m.E_),E=T.direction,g=b.useState([]),F=C()(g,2),Q=F[0],mn=F[1],dn=B.prefixCls,gn=B.className,pn=B.rootClassName,x=B.children,O=B.hasSider,w=B.tagName,Y=B.style,tn=s()(B,G),Tn=(0,J.default)(tn,["suffixCls"]),On=b.useContext(m.E_),kn=On.getPrefixCls,on=On.layout,Ln=kn("layout",dn),Bn=j(Q,x,O),Fn=N(Ln),Hn=C()(Fn,3),Kn=Hn[0],Xn=Hn[1],Wn=Hn[2],qn=K()(Ln,v()(v()({},"".concat(Ln,"-has-sider"),Bn),"".concat(Ln,"-rtl"),E==="rtl"),on==null?void 0:on.className,gn,pn,Xn,Wn),Dn=b.useMemo(function(){return{siderHook:{addSider:function(Rn){mn(function(Qn){return[].concat(S()(Qn),[Rn])})},removeSider:function(Rn){mn(function(Qn){return Qn.filter(function(oe){return oe!==Rn})})}}}},[]);return Kn((0,L.jsx)(r.V.Provider,{value:Dn,children:(0,L.jsx)(w,l()(l()({ref:d,className:qn,style:l()(l()({},on==null?void 0:on.style),Y)},Tn),{},{children:x}))}))}),W=z({tagName:"div",displayName:"Layout"})(nn),A=z({suffixCls:"header",tagName:"header",displayName:"Header"})(I),sn=z({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(I),en=z({suffixCls:"content",tagName:"main",displayName:"Content"})(I),H=W,un=H;un.Header=A,un.Footer=sn,un.Content=en,un.Sider=t.Z,un._InternalSiderContext=t.D;var xn=un},715778:function(zn,$,e){e.r($),e.d($,{default:function(){return U}});var an=e(174219),S=e(97857),fn=e.n(S),v=e(585369),P={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},C=P,Sn={lang:fn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},v.Z),timePickerLocale:fn()({},C)};Sn.lang.ok="\u786E\u5B9A";var s=Sn,V=s,l="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",b={locale:"zh-cn",Pagination:an.Z,DatePicker:s,TimePicker:C,Calendar:V,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",emptyText:"\u6682\u65E0\u6570\u636E",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",deselectAll:"\u53D6\u6D88\u5168\u9009",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00",collapse:"\u6536\u8D77"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:l,method:l,array:l,object:l,number:l,date:l,boolean:l,integer:l,float:l,regexp:l,email:l,url:l,hex:l},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0",scanned:"\u5DF2\u626B\u63CF"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},U=b}}]);
