"use strict";const e={atom:"Atom",bash:"Bash",c:"C",clike:"C-like",coffee:"CoffeeScript",coffeescript:"CoffeeScript",cpp:"C++",css:"CSS","css-extras":"CSS Extras",diff:"Diff",git:"Git",go:"Go",graphql:"GraphQL",handlebars:"Handlebars",haskell:"Haskell",hs:"Haskell",html:"HTML",json:"JSON",javascript:"JavaScript",js:"JavaScript","js-extras":"JS Extras",jsx:"JSX",less:"Less",makefile:"Makefile",markdown:"Markdown",mathml:"MathML",md:"Markdown",objc:"Objective C",objectivec:"Objective C",ocaml:"OCaml",py:"Python",python:"Python",reason:"Reason",rss:"RSS",rust:"Rust",sass:"Sass",scss:"Scss",shell:"Shell",sql:"SQL",ssml:"SSML",stylus:"Stylus",svg:"SVG",ts:"TypeScript",tsx:"TSX",typescript:"TypeScript",wasm:"WebAssembly",webmanifest:"webmanifest",xml:"XML",yaml:"YAML",yml:"YAML"},s=/(?:^\s*```[^\S\r\n]*(?<language>\S+)(?:$|(?:\s+(?<metastring>.*)$))(?<codeBlock>[\s\S]*?))(?:(?=(?:^\s*```\s*\S*|(?![\s\S]))))/gm,a=/label=(["'])(?<label>.*?)\1/,t={type:"import",value:"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';"};module.exports=(l={})=>{const{sync:r=!1,customLabels:o}=l,c={sync:r,tabLabels:Object.assign(Object.assign({},e),o)};let n=!1,i=!1;const m=e=>{if("import"===e.type&&e.value.includes("@theme/Tabs")&&(i=!0),(e=>"code"===e.type&&"codetabs"===e.meta)(e))return n=!0,((e,{sync:t,tabLabels:l})=>{let r={};const o=[...e.value.matchAll(s)].map((({groups:{language:e,metastring:s,codeBlock:t}})=>{var r;return{codeBlock:t.trim(),language:e||"",metastring:s||"",label:(null===(r=null==s?void 0:s.match(a))||void 0===r?void 0:r.groups.label)||(null==l?void 0:l[e])||e||l[""]}})).reduce(((e,s)=>(r.hasOwnProperty(s.label)||(e.push(s),r[s.label]=!0),e)),[]);if(0===o.length)return;const c=o.map((({label:e})=>e)),n="all"===t?'groupId="codetabs"':t?`groupId="codetabs-${c.join("-")}"`:"";let i=[{type:"jsx",value:`<Tabs\n          defaultValue="${c[0]}"\n          ${n}\n          values={[${c.map((e=>`{label: "${e}", value: "${e}"}`))}]}\n        >`}];return o.forEach((({codeBlock:s,language:a,metastring:t,label:l})=>{i.push({type:"jsx",value:`<TabItem value="${l}">`},{type:e.type,meta:t,lang:a,value:s},{type:"jsx",value:"</TabItem>"})})),i.push({type:"jsx",value:"</Tabs>"}),i})(e,c);if(Array.isArray(e.children)){let s=0;for(;s<e.children.length;){const a=m(e.children[s]);a?(e.children.splice(s,1,...a),s+=a.length):s+=1}}"root"===e.type&&n&&!i&&e.children.unshift(t)};return m};
