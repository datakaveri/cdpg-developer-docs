"use strict";(self.webpackChunkiudx_website=self.webpackChunkiudx_website||[]).push([[2048],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return v}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=d(r),p=n,v=g["".concat(l,".").concat(p)]||g[p]||u[p]||i;return r?a.createElement(v,o(o({ref:t},c),{},{components:r})):a.createElement(v,o({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},50534:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],s={sidebar_position:3},l="Manage Delegations",d={unversionedId:"Provider/provider_manage_delegates",id:"version-5.0.0/Provider/provider_manage_delegates",isDocsHomePage:!1,title:"Manage Delegations",description:"Providers can delegate administrative tasks to pre-approved users having the delegate role. Delegates are assigned to a specific IUDX server which determines their capabilities.",source:"@site/versioned_docs/version-5.0.0/Provider/provider_manage_delegates.md",sourceDirName:"Provider",slug:"/Provider/provider_manage_delegates",permalink:"/docs/Provider/provider_manage_delegates",editUrl:"https://github.com/datakaveri/iudx-developer-docs/blob/main/versioned_docs/version-5.0.0/Provider/provider_manage_delegates.md",tags:[],version:"5.0.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-5.0.0/tutorialSidebar",previous:{title:"Manage Policies",permalink:"/docs/Provider/provider_manage_policies"},next:{title:"Manage Catalogue Items",permalink:"/docs/Provider/provider_register_catalogue_item"}},c=[{value:"Catalogue (catalogue.iudx.org.in) Delegations",id:"catalogue-catalogueiudxorgin-delegations",children:[],level:2},{value:"Auth (authorization.iudx.org.in) Delegations",id:"auth-authorizationiudxorgin-delegations",children:[],level:2},{value:"Resource Server (rs.iudx.org.in) Delegation",id:"resource-server-rsiudxorgin-delegation",children:[],level:2},{value:"Manage Delegates",id:"manage-delegates",children:[],level:2}],g={toc:c};function u(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"manage-delegations"},"Manage Delegations"),(0,i.kt)("p",null,"Providers can delegate administrative tasks to pre-approved users having the delegate role. Delegates are assigned to a specific IUDX server which determines their capabilities."),(0,i.kt)("h2",{id:"catalogue-catalogueiudxorgin-delegations"},"Catalogue (catalogue.iudx.org.in) Delegations"),(0,i.kt)("p",null,"A provider can delegate the responsibility of creating IUDX Catalogue entries for their resources to a Catalogue delegate, who has pre registered with IUDX. Once a Catalogue delegate has been granted access, they can obtain an access token with which they can create and modify Catalogue entries for resources under the Provider account."),(0,i.kt)("h2",{id:"auth-authorizationiudxorgin-delegations"},"Auth (authorization.iudx.org.in) Delegations"),(0,i.kt)("p",null,"A provider can delegate the responsibility of creating and deleting policies, as well as creating and deleting delegations to an Auth delegate, who has pre registered with IUDX. Once an Auth delegate has been granted access, they may log onto the Provider Panel and manage policies and delegations on behalf of the Provider."),(0,i.kt)("h2",{id:"resource-server-rsiudxorgin-delegation"},"Resource Server (rs.iudx.org.in) Delegation"),(0,i.kt)("p",null,"A provider can also delegate the responsibility of uploading resources to the IUDX Resource Server to a Resource Server delegate, who has preregistered with IUDX. Once a Resource Server delegate has been granted access, they can obtain an access token with which they can configure an adapter to push data to the IUDX Resource Server."),(0,i.kt)("h2",{id:"manage-delegates"},"Manage Delegates"),(0,i.kt)("p",null,"A provider may view, create and delete delegations in the Delegates tab."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Viewing delegates",src:r(62562).Z}),(0,i.kt)("br",null),"\n",(0,i.kt)("em",{parentName:"p"},"Viewing delegates")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add delegates",src:r(52482).Z}),(0,i.kt)("br",null),"\n",(0,i.kt)("em",{parentName:"p"},"Add delegates")))}u.isMDXComponent=!0},52482:function(e,t,r){t.Z=r.p+"assets/images/create-delegate-6e8454fe423c99f845c25a48d49e718d.png"},62562:function(e,t,r){t.Z=r.p+"assets/images/view-delegates-0022c46ad57c212c8e49353e830bc25a.png"}}]);