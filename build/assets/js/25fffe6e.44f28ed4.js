"use strict";(self.webpackChunkiudx_website=self.webpackChunkiudx_website||[]).push([[5156],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50239:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={sidebar_position:8},p=void 0,s={unversionedId:"Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/API Server",id:"version-5.0.0/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/API Server",isDocsHomePage:!1,title:"API Server",description:"A general instructions for all api servers below before deploying it",source:"@site/versioned_docs/version-5.0.0/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/API Server.md",sourceDirName:"Deployment/Docker Swarm-Based Deployment/IUDX Component Installation",slug:"/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/API Server",permalink:"/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/API Server",editUrl:"https://github.com/datakaveri/iudx-developer-docs/blob/main/versioned_docs/version-5.0.0/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/API Server.md",tags:[],version:"5.0.0",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"version-5.0.0/tutorialSidebar",previous:{title:"Keycloak",permalink:"/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Keycloak"},next:{title:"Latest-Ingestion-Pipeline",permalink:"/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Latest-Ingestion-Pipeline"}},m=[{value:"Disclaimer",id:"disclaimer",children:[],level:3}],c={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A general instructions for all api servers below before deploying it"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"For each api servers, following services are connected internally over overlay network using below service names ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Service Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Service DNS Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Port"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Elasticsearch"),(0,l.kt)("td",{parentName:"tr",align:null},"tasks.elasticsearch"),(0,l.kt)("td",{parentName:"tr",align:null},"9200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AMQP/Databroker Port"),(0,l.kt)("td",{parentName:"tr",align:null},"tasks.rabbitmq"),(0,l.kt)("td",{parentName:"tr",align:null},"5672")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Databroker HTTP Port"),(0,l.kt)("td",{parentName:"tr",align:null},"tasks.rabbitmq"),(0,l.kt)("td",{parentName:"tr",align:null},"15672")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Redis"),(0,l.kt)("td",{parentName:"tr",align:null},"tasks.redis-rejson"),(0,l.kt)("td",{parentName:"tr",align:null},"6379")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Postgres"),(0,l.kt)("td",{parentName:"tr",align:null},"tasks.postgres"),(0,l.kt)("td",{parentName:"tr",align:null},"5432")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Immudb"),(0,l.kt)("td",{parentName:"tr",align:null},"tasks.immudb"),(0,l.kt)("td",{parentName:"tr",align:null},"5432")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Zookeeper"),(0,l.kt)("td",{parentName:"tr",align:null},"tasks.zookeeper"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")))),(0,l.kt)("h3",{id:"disclaimer"},"Disclaimer"),(0,l.kt)("p",null,"If the credentials in the JSON config file contain the following special characters, add escape characters ('\\'):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Backspace")," to be replaced with ",(0,l.kt)("inlineCode",{parentName:"li"},"\\b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Form feed")," to be replaced with ",(0,l.kt)("inlineCode",{parentName:"li"},"\\f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Newline")," to be replaced with ",(0,l.kt)("inlineCode",{parentName:"li"},"\\n")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Carriage return")," to be replaced with ",(0,l.kt)("inlineCode",{parentName:"li"},"\\r")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Tab")," to be replaced with ",(0,l.kt)("inlineCode",{parentName:"li"},"\\t")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Double quote")," to be replaced with ",(0,l.kt)("inlineCode",{parentName:"li"},"\\")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Backslash")," to be replaced with ",(0,l.kt)("inlineCode",{parentName:"li"},"\\\\"))),(0,l.kt)("p",null,"  Click here for the reference ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://www.tutorialspoint.com/json_simple/json_simple_escape_characters.htm"},"link"))),(0,l.kt)("p",null,"The AAA server and Catalogue server must be HTTPS secured with proper valid certificates  on its public domain access .  This is because all other api servers connect to get some information and webclient of those servers might fail if not ."))}u.isMDXComponent=!0}}]);