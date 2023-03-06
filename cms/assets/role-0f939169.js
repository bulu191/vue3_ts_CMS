import{f as W,_ as le,ac as te,ab as Ee,k as Ke,C as De,as as we,j as Se}from"./base-fea03ce8.js";import{a as xe}from"./el-input-9d919cf6.js";import{s as Ae}from"./pinia-008b66ec.js";import{u as Te}from"./main-dbe8f02a.js";import{b as Ie}from"./login-505ab773.js";import{u as Le,P as Be}from"./usePageContentHook-c3d4a05e.js";import{P as Me}from"./page-content-023146c0.js";import{u as Oe,p as $e}from"./usePageModalHook-a7d196cb.js";import{v as ne,w as I,n as Pe,d as L,e as Fe}from"./index-1cfa6bc8.js";import{a9 as oe,a1 as Re,g as ze,d as _,O as U,h as he,a3 as Q,M as D,L as w,a2 as re,I as pe,i as qe,b as je,r as B,Q as de,o as K,c as O,R as se,W as z,w as Z,Z as He,S as x,Y as H,a as M,X as Ue,F as ge,au as ye,a0 as ue,V as Qe,s as We,N as Ye,T as Ve,u as S,_ as Xe}from"./_plugin-vue_export-helper-33f8d7e1.js";import{_ as Ze}from"./index-401947bc.js";import{u as Ge}from"./el-scrollbar-fb408054.js";import"./el-button-a5400fd7.js";import"./index-7842665d.js";import"./error-78e43d3e.js";import"./isNil-c75b1b34.js";import"./el-card-a01e4dcb.js";import"./el-form-item-5acb0a27.js";import"./el-col-5a6da4ad.js";import"./el-tooltip-ea3857ca.js";import"./vnode-7cc962c9.js";import"./refs-bfa8f37a.js";const q="$treeNodeId",fe=function(t,e){!e||e[q]||Object.defineProperty(e,q,{value:t.id,enumerable:!1,configurable:!1,writable:!1})},ce=function(t,e){return t?e[t]:e[q]},ae=(t,e,o)=>{const r=t.value.currentNode;o();const n=t.value.currentNode;r!==n&&e("current-change",n?n.data:null,n)},ie=t=>{let e=!0,o=!0,r=!0;for(let n=0,d=t.length;n<d;n++){const a=t[n];(a.checked!==!0||a.indeterminate)&&(e=!1,a.disabled||(r=!1)),(a.checked!==!1||a.indeterminate)&&(o=!1)}return{all:e,none:o,allWithoutDisable:r,half:!e&&!o}},G=function(t){if(t.childNodes.length===0||t.loading)return;const{all:e,none:o,half:r}=ie(t.childNodes);e?(t.checked=!0,t.indeterminate=!1):r?(t.checked=!1,t.indeterminate=!0):o&&(t.checked=!1,t.indeterminate=!1);const n=t.parent;!n||n.level===0||t.store.checkStrictly||G(n)},X=function(t,e){const o=t.store.props,r=t.data||{},n=o[e];if(typeof n=="function")return n(r,t);if(typeof n=="string")return r[n];if(typeof n>"u"){const d=r[e];return d===void 0?"":d}};let Je=0;class ${constructor(e){this.id=Je++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const o in e)oe(e,o)&&(this[o]=e[o]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const o=e.props;if(o&&typeof o.isLeaf<"u"){const d=X(this,"isLeaf");typeof d=="boolean"&&(this.isLeafByUser=d)}if(e.lazy!==!0&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||fe(this,this.data),!this.data)return;const r=e.defaultExpandedKeys,n=e.key;n&&r&&r.includes(this.key)&&this.expand(null,e.autoExpandParent),n&&e.currentNodeKey!==void 0&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(e){Array.isArray(e)||fe(this,e),this.data=e,this.childNodes=[];let o;this.level===0&&Array.isArray(this.data)?o=this.data:o=X(this,"children")||[];for(let r=0,n=o.length;r<n;r++)this.insertChild({data:o[r]})}get label(){return X(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return X(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const o=e.childNodes.indexOf(this);if(o>-1)return e.childNodes[o+1]}return null}get previousSibling(){const e=this.parent;if(e){const o=e.childNodes.indexOf(this);if(o>-1)return o>0?e.childNodes[o-1]:null}return null}contains(e,o=!0){return(this.childNodes||[]).some(r=>r===e||o&&r.contains(e))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,o,r){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof $)){if(!r){const n=this.getChildren(!0);n.includes(e.data)||(typeof o>"u"||o<0?n.push(e.data):n.splice(o,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=Re(new $(e)),e instanceof $&&e.initialize()}e.level=this.level+1,typeof o>"u"||o<0?this.childNodes.push(e):this.childNodes.splice(o,0,e),this.updateLeafState()}insertBefore(e,o){let r;o&&(r=this.childNodes.indexOf(o)),this.insertChild(e,r)}insertAfter(e,o){let r;o&&(r=this.childNodes.indexOf(o),r!==-1&&(r+=1)),this.insertChild(e,r)}removeChild(e){const o=this.getChildren()||[],r=o.indexOf(e.data);r>-1&&o.splice(r,1);const n=this.childNodes.indexOf(e);n>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(n,1)),this.updateLeafState()}removeChildByData(e){let o=null;for(let r=0;r<this.childNodes.length;r++)if(this.childNodes[r].data===e){o=this.childNodes[r];break}o&&this.removeChild(o)}expand(e,o){const r=()=>{if(o){let n=this.parent;for(;n.level>0;)n.expanded=!0,n=n.parent}this.expanded=!0,e&&e(),this.childNodes.forEach(n=>{n.canFocus=!0})};this.shouldLoadData()?this.loadData(n=>{Array.isArray(n)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||G(this),r())}):r()}doCreateChildren(e,o={}){e.forEach(r=>{this.insertChild(Object.assign({data:r},o),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(e=>{e.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const e=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!e||e.length===0;return}this.isLeaf=!1}setChecked(e,o,r,n){if(this.indeterminate=e==="half",this.checked=e===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:a,allWithoutDisable:i}=ie(this.childNodes);!this.isLeaf&&!a&&i&&(this.checked=!1,e=!1);const p=()=>{if(o){const y=this.childNodes;for(let s=0,f=y.length;s<f;s++){const g=y[s];n=n||e!==!1;const k=g.disabled?g.checked:n;g.setChecked(k,o,!0,n)}const{half:h,all:c}=ie(y);c||(this.checked=c,this.indeterminate=h)}};if(this.shouldLoadData()){this.loadData(()=>{p(),G(this)},{checked:e!==!1});return}else p()}const d=this.parent;!d||d.level===0||r||G(d)}getChildren(e=!1){if(this.level===0)return this.data;const o=this.data;if(!o)return null;const r=this.store.props;let n="children";return r&&(n=r.children||"children"),o[n]===void 0&&(o[n]=null),e&&!o[n]&&(o[n]=[]),o[n]}updateChildren(){const e=this.getChildren()||[],o=this.childNodes.map(d=>d.data),r={},n=[];e.forEach((d,a)=>{const i=d[q];!!i&&o.findIndex(y=>y[q]===i)>=0?r[i]={index:a,data:d}:n.push({index:a,data:d})}),this.store.lazy||o.forEach(d=>{r[d[q]]||this.removeChildByData(d)}),n.forEach(({index:d,data:a})=>{this.insertChild({data:a},d)}),this.updateLeafState()}loadData(e,o={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(o).length)){this.loading=!0;const r=n=>{this.childNodes=[],this.doCreateChildren(n,o),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,n)};this.store.load(this,r)}else e&&e.call(this)}}class _e{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const o in e)oe(e,o)&&(this[o]=e[o]);this.nodesMap={}}initialize(){if(this.root=new $({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,o=>{this.root.doCreateChildren(o),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const o=this.filterNodeMethod,r=this.lazy,n=function(d){const a=d.root?d.root.childNodes:d.childNodes;if(a.forEach(i=>{i.visible=o.call(i,e,i.data,i),n(i)}),!d.visible&&a.length){let i=!0;i=!a.some(p=>p.visible),d.root?d.root.visible=i===!1:d.visible=i===!1}e&&d.visible&&!d.isLeaf&&!r&&d.expand()};n(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof $)return e;const o=ze(e)?ce(this.key,e):e;return this.nodesMap[o]||null}insertBefore(e,o){const r=this.getNode(o);r.parent.insertBefore({data:e},r)}insertAfter(e,o){const r=this.getNode(o);r.parent.insertAfter({data:e},r)}remove(e){const o=this.getNode(e);o&&o.parent&&(o===this.currentNode&&(this.currentNode=null),o.parent.removeChild(o))}append(e,o){const r=o?this.getNode(o):this.root;r&&r.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],o=this.nodesMap;e.forEach(r=>{const n=o[r];n&&n.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const o=this.key;!e||!e.data||(o?e.key!==void 0&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}deregisterNode(e){!this.key||!e||!e.data||(e.childNodes.forEach(r=>{this.deregisterNode(r)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,o=!1){const r=[],n=function(d){(d.root?d.root.childNodes:d.childNodes).forEach(i=>{(i.checked||o&&i.indeterminate)&&(!e||e&&i.isLeaf)&&r.push(i.data),n(i)})};return n(this),r}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map(o=>(o||{})[this.key])}getHalfCheckedNodes(){const e=[],o=function(r){(r.root?r.root.childNodes:r.childNodes).forEach(d=>{d.indeterminate&&e.push(d.data),o(d)})};return o(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],o=this.nodesMap;for(const r in o)oe(o,r)&&e.push(o[r]);return e}updateChildren(e,o){const r=this.nodesMap[e];if(!r)return;const n=r.childNodes;for(let d=n.length-1;d>=0;d--){const a=n[d];this.remove(a.data)}for(let d=0,a=o.length;d<a;d++){const i=o[d];this.append(i,r.data)}}_setCheckedKeys(e,o=!1,r){const n=this._getAllNodes().sort((i,p)=>p.level-i.level),d=Object.create(null),a=Object.keys(r);n.forEach(i=>i.setChecked(!1,!1));for(let i=0,p=n.length;i<p;i++){const y=n[i],h=y.data[e].toString();if(!a.includes(h)){y.checked&&!d[h]&&y.setChecked(!1,!1);continue}let s=y.parent;for(;s&&s.level>0;)d[s.data[e]]=!0,s=s.parent;if(y.isLeaf||this.checkStrictly){y.setChecked(!0,!1);continue}if(y.setChecked(!0,!0),o){y.setChecked(!1,!1);const f=function(g){g.childNodes.forEach(C=>{C.isLeaf||C.setChecked(!1,!1),f(C)})};f(y)}}}setCheckedNodes(e,o=!1){const r=this.key,n={};e.forEach(d=>{n[(d||{})[r]]=!0}),this._setCheckedKeys(r,o,n)}setCheckedKeys(e,o=!1){this.defaultCheckedKeys=e;const r=this.key,n={};e.forEach(d=>{n[d]=!0}),this._setCheckedKeys(r,o,n)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(o=>{const r=this.getNode(o);r&&r.expand(null,this.autoExpandParent)})}setChecked(e,o,r){const n=this.getNode(e);n&&n.setChecked(!!o,r)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const o=this.currentNode;o&&(o.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,o=!0){const r=e[this.key],n=this.nodesMap[r];this.setCurrentNode(n),o&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,o=!0){if(e==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const r=this.getNode(e);r&&(this.setCurrentNode(r),o&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const et=_({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(t){const e=W("tree"),o=U("NodeInstance"),r=U("RootTree");return()=>{const n=t.node,{data:d,store:a}=n;return t.renderContent?t.renderContent(he,{_self:o,node:n,data:d,store:a}):r.ctx.slots.default?r.ctx.slots.default({node:n,data:d}):he("span",{class:e.be("node","label")},[n.label])}}});var tt=le(et,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node-content.vue"]]);function Ne(t){const e=U("TreeNodeMap",null),o={treeNodeExpand:r=>{t.node!==r&&t.node.collapse()},children:[]};return e&&e.children.push(o),Q("TreeNodeMap",o),{broadcastExpanded:r=>{if(t.accordion)for(const n of o.children)n.treeNodeExpand(r)}}}const ke=Symbol("dragEvents");function nt({props:t,ctx:e,el$:o,dropIndicator$:r,store:n}){const d=W("tree"),a=D({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return Q(ke,{treeNodeDragStart:({event:h,treeNode:c})=>{if(typeof t.allowDrag=="function"&&!t.allowDrag(c.node))return h.preventDefault(),!1;h.dataTransfer.effectAllowed="move";try{h.dataTransfer.setData("text/plain","")}catch{}a.value.draggingNode=c,e.emit("node-drag-start",c.node,h)},treeNodeDragOver:({event:h,treeNode:c})=>{const s=c,f=a.value.dropNode;f&&f!==s&&te(f.$el,d.is("drop-inner"));const g=a.value.draggingNode;if(!g||!s)return;let k=!0,C=!0,b=!0,T=!0;typeof t.allowDrop=="function"&&(k=t.allowDrop(g.node,s.node,"prev"),T=C=t.allowDrop(g.node,s.node,"inner"),b=t.allowDrop(g.node,s.node,"next")),h.dataTransfer.dropEffect=C||k||b?"move":"none",(k||C||b)&&f!==s&&(f&&e.emit("node-drag-leave",g.node,f.node,h),e.emit("node-drag-enter",g.node,s.node,h)),(k||C||b)&&(a.value.dropNode=s),s.node.nextSibling===g.node&&(b=!1),s.node.previousSibling===g.node&&(k=!1),s.node.contains(g.node,!1)&&(C=!1),(g.node===s.node||g.node.contains(s.node))&&(k=!1,C=!1,b=!1);const A=s.$el.getBoundingClientRect(),P=o.value.getBoundingClientRect();let E;const Y=k?C?.25:b?.45:1:-1,V=b?C?.75:k?.55:0:1;let F=-9999;const u=h.clientY-A.top;u<A.height*Y?E="before":u>A.height*V?E="after":C?E="inner":E="none";const m=s.$el.querySelector(`.${d.be("node","expand-icon")}`).getBoundingClientRect(),v=r.value;E==="before"?F=m.top-P.top:E==="after"&&(F=m.bottom-P.top),v.style.top=`${F}px`,v.style.left=`${m.right-P.left}px`,E==="inner"?Ee(s.$el,d.is("drop-inner")):te(s.$el,d.is("drop-inner")),a.value.showDropIndicator=E==="before"||E==="after",a.value.allowDrop=a.value.showDropIndicator||T,a.value.dropType=E,e.emit("node-drag-over",g.node,s.node,h)},treeNodeDragEnd:h=>{const{draggingNode:c,dropType:s,dropNode:f}=a.value;if(h.preventDefault(),h.dataTransfer.dropEffect="move",c&&f){const g={data:c.node.data};s!=="none"&&c.node.remove(),s==="before"?f.node.parent.insertBefore(g,f.node):s==="after"?f.node.parent.insertAfter(g,f.node):s==="inner"&&f.node.insertChild(g),s!=="none"&&n.value.registerNode(g),te(f.$el,d.is("drop-inner")),e.emit("node-drag-end",c.node,f.node,s,h),s!=="none"&&e.emit("node-drop",c.node,f.node,s,h)}c&&!f&&e.emit("node-drag-end",c.node,null,s,h),a.value.showDropIndicator=!1,a.value.draggingNode=null,a.value.dropNode=null,a.value.allowDrop=!0}}),{dragState:a}}const ot=_({name:"ElTreeNode",components:{ElCollapseTransition:Ze,ElCheckbox:xe,NodeContent:tt,ElIcon:Ke,Loading:De},props:{node:{type:$,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(t,e){const o=W("tree"),{broadcastExpanded:r}=Ne(t),n=U("RootTree"),d=D(!1),a=D(!1),i=D(null),p=D(null),y=D(null),h=U(ke),c=pe();Q("NodeInstance",c),t.node.expanded&&(d.value=!0,a.value=!0);const s=n.props.children||"children";w(()=>{const u=t.node.data[s];return u&&[...u]},()=>{t.node.updateChildren()}),w(()=>t.node.indeterminate,u=>{k(t.node.checked,u)}),w(()=>t.node.checked,u=>{k(u,t.node.indeterminate)}),w(()=>t.node.expanded,u=>{re(()=>d.value=u),u&&(a.value=!0)});const f=u=>ce(n.props.nodeKey,u.data),g=u=>{const m=t.props.class;if(!m)return{};let v;if(qe(m)){const{data:ee}=u;v=m(ee,u)}else v=m;return je(v)?{[v]:!0}:v},k=(u,m)=>{(i.value!==u||p.value!==m)&&n.ctx.emit("check-change",t.node.data,u,m),i.value=u,p.value=m},C=u=>{ae(n.store,n.ctx.emit,()=>n.store.value.setCurrentNode(t.node)),n.currentNode.value=t.node,n.props.expandOnClickNode&&T(),n.props.checkOnClickNode&&!t.node.disabled&&A(null,{target:{checked:!t.node.checked}}),n.ctx.emit("node-click",t.node.data,t.node,c,u)},b=u=>{n.instance.vnode.props.onNodeContextmenu&&(u.stopPropagation(),u.preventDefault()),n.ctx.emit("node-contextmenu",u,t.node.data,t.node,c)},T=()=>{t.node.isLeaf||(d.value?(n.ctx.emit("node-collapse",t.node.data,t.node,c),t.node.collapse()):(t.node.expand(),e.emit("node-expand",t.node.data,t.node,c)))},A=(u,m)=>{t.node.setChecked(m.target.checked,!n.props.checkStrictly),re(()=>{const v=n.store.value;n.ctx.emit("check",t.node.data,{checkedNodes:v.getCheckedNodes(),checkedKeys:v.getCheckedKeys(),halfCheckedNodes:v.getHalfCheckedNodes(),halfCheckedKeys:v.getHalfCheckedKeys()})})};return{ns:o,node$:y,tree:n,expanded:d,childNodeRendered:a,oldChecked:i,oldIndeterminate:p,getNodeKey:f,getNodeClass:g,handleSelectChange:k,handleClick:C,handleContextMenu:b,handleExpandIconClick:T,handleCheckChange:A,handleChildNodeExpand:(u,m,v)=>{r(m),n.ctx.emit("node-expand",u,m,v)},handleDragStart:u=>{n.props.draggable&&h.treeNodeDragStart({event:u,treeNode:t})},handleDragOver:u=>{u.preventDefault(),n.props.draggable&&h.treeNodeDragOver({event:u,treeNode:{$el:y.value,node:t.node}})},handleDrop:u=>{u.preventDefault()},handleDragEnd:u=>{n.props.draggable&&h.treeNodeDragEnd(u)},CaretRight:we}}}),rt=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],dt=["aria-expanded"];function st(t,e,o,r,n,d){const a=B("el-icon"),i=B("el-checkbox"),p=B("loading"),y=B("node-content"),h=B("el-tree-node"),c=B("el-collapse-transition");return de((K(),O("div",{ref:"node$",class:x([t.ns.b("node"),t.ns.is("expanded",t.expanded),t.ns.is("current",t.node.isCurrent),t.ns.is("hidden",!t.node.visible),t.ns.is("focusable",!t.node.disabled),t.ns.is("checked",!t.node.disabled&&t.node.checked),t.getNodeClass(t.node)]),role:"treeitem",tabindex:"-1","aria-expanded":t.expanded,"aria-disabled":t.node.disabled,"aria-checked":t.node.checked,draggable:t.tree.props.draggable,"data-key":t.getNodeKey(t.node),onClick:e[1]||(e[1]=I((...s)=>t.handleClick&&t.handleClick(...s),["stop"])),onContextmenu:e[2]||(e[2]=(...s)=>t.handleContextMenu&&t.handleContextMenu(...s)),onDragstart:e[3]||(e[3]=I((...s)=>t.handleDragStart&&t.handleDragStart(...s),["stop"])),onDragover:e[4]||(e[4]=I((...s)=>t.handleDragOver&&t.handleDragOver(...s),["stop"])),onDragend:e[5]||(e[5]=I((...s)=>t.handleDragEnd&&t.handleDragEnd(...s),["stop"])),onDrop:e[6]||(e[6]=I((...s)=>t.handleDrop&&t.handleDrop(...s),["stop"]))},[se("div",{class:x(t.ns.be("node","content")),style:Ue({paddingLeft:(t.node.level-1)*t.tree.props.indent+"px"})},[t.tree.props.icon||t.CaretRight?(K(),z(a,{key:0,class:x([t.ns.be("node","expand-icon"),t.ns.is("leaf",t.node.isLeaf),{expanded:!t.node.isLeaf&&t.expanded}]),onClick:I(t.handleExpandIconClick,["stop"])},{default:Z(()=>[(K(),z(He(t.tree.props.icon||t.CaretRight)))]),_:1},8,["class","onClick"])):H("v-if",!0),t.showCheckbox?(K(),z(i,{key:1,"model-value":t.node.checked,indeterminate:t.node.indeterminate,disabled:!!t.node.disabled,onClick:e[0]||(e[0]=I(()=>{},["stop"])),onChange:t.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):H("v-if",!0),t.node.loading?(K(),z(a,{key:2,class:x([t.ns.be("node","loading-icon"),t.ns.is("loading")])},{default:Z(()=>[M(p)]),_:1},8,["class"])):H("v-if",!0),M(y,{node:t.node,"render-content":t.renderContent},null,8,["node","render-content"])],6),M(c,null,{default:Z(()=>[!t.renderAfterExpand||t.childNodeRendered?de((K(),O("div",{key:0,class:x(t.ns.be("node","children")),role:"group","aria-expanded":t.expanded},[(K(!0),O(ge,null,ye(t.node.childNodes,s=>(K(),z(h,{key:t.getNodeKey(s),"render-content":t.renderContent,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,node:s,accordion:t.accordion,props:t.props,onNodeExpand:t.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,dt)),[[ne,t.expanded]]):H("v-if",!0)]),_:1})],42,rt)),[[ne,t.node.visible]])}var at=le(ot,[["render",st],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node.vue"]]);function it({el$:t},e){const o=W("tree"),r=ue([]),n=ue([]);Qe(()=>{a()}),We(()=>{r.value=Array.from(t.value.querySelectorAll("[role=treeitem]")),n.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"))}),w(n,i=>{i.forEach(p=>{p.setAttribute("tabindex","-1")})}),Pe(t,"keydown",i=>{const p=i.target;if(!p.className.includes(o.b("node")))return;const y=i.code;r.value=Array.from(t.value.querySelectorAll(`.${o.is("focusable")}[role=treeitem]`));const h=r.value.indexOf(p);let c;if([L.up,L.down].includes(y)){if(i.preventDefault(),y===L.up){c=h===-1?0:h!==0?h-1:r.value.length-1;const f=c;for(;!e.value.getNode(r.value[c].dataset.key).canFocus;){if(c--,c===f){c=-1;break}c<0&&(c=r.value.length-1)}}else{c=h===-1?0:h<r.value.length-1?h+1:0;const f=c;for(;!e.value.getNode(r.value[c].dataset.key).canFocus;){if(c++,c===f){c=-1;break}c>=r.value.length&&(c=0)}}c!==-1&&r.value[c].focus()}[L.left,L.right].includes(y)&&(i.preventDefault(),p.click());const s=p.querySelector('[type="checkbox"]');[L.enter,L.space].includes(y)&&s&&(i.preventDefault(),s.click())});const a=()=>{var i;r.value=Array.from(t.value.querySelectorAll(`.${o.is("focusable")}[role=treeitem]`)),n.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"));const p=t.value.querySelectorAll(`.${o.is("checked")}[role=treeitem]`);if(p.length){p[0].setAttribute("tabindex","0");return}(i=r.value[0])==null||i.setAttribute("tabindex","0")}}const lt=_({name:"ElTree",components:{ElTreeNode:at},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:Se}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(t,e){const{t:o}=Ge(),r=W("tree"),n=D(new _e({key:t.nodeKey,data:t.data,lazy:t.lazy,props:t.props,load:t.load,currentNodeKey:t.currentNodeKey,checkStrictly:t.checkStrictly,checkDescendants:t.checkDescendants,defaultCheckedKeys:t.defaultCheckedKeys,defaultExpandedKeys:t.defaultExpandedKeys,autoExpandParent:t.autoExpandParent,defaultExpandAll:t.defaultExpandAll,filterNodeMethod:t.filterNodeMethod}));n.value.initialize();const d=D(n.value.root),a=D(null),i=D(null),p=D(null),{broadcastExpanded:y}=Ne(t),{dragState:h}=nt({props:t,ctx:e,el$:i,dropIndicator$:p,store:n});it({el$:i},n);const c=Ye(()=>{const{childNodes:l}=d.value;return!l||l.length===0||l.every(({visible:N})=>!N)});w(()=>t.currentNodeKey,l=>{n.value.setCurrentNodeKey(l)}),w(()=>t.defaultCheckedKeys,l=>{n.value.setDefaultCheckedKey(l)}),w(()=>t.defaultExpandedKeys,l=>{n.value.setDefaultExpandedKeys(l)}),w(()=>t.data,l=>{n.value.setData(l)},{deep:!0}),w(()=>t.checkStrictly,l=>{n.value.checkStrictly=l});const s=l=>{if(!t.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");n.value.filter(l)},f=l=>ce(t.nodeKey,l.data),g=l=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const N=n.value.getNode(l);if(!N)return[];const R=[N.data];let j=N.parent;for(;j&&j!==d.value;)R.push(j.data),j=j.parent;return R.reverse()},k=(l,N)=>n.value.getCheckedNodes(l,N),C=l=>n.value.getCheckedKeys(l),b=()=>{const l=n.value.getCurrentNode();return l?l.data:null},T=()=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const l=b();return l?l[t.nodeKey]:null},A=(l,N)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");n.value.setCheckedNodes(l,N)},P=(l,N)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");n.value.setCheckedKeys(l,N)},E=(l,N,R)=>{n.value.setChecked(l,N,R)},Y=()=>n.value.getHalfCheckedNodes(),V=()=>n.value.getHalfCheckedKeys(),F=(l,N=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");ae(n,e.emit,()=>n.value.setUserCurrentNode(l,N))},u=(l,N=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");ae(n,e.emit,()=>n.value.setCurrentNodeKey(l,N))},m=l=>n.value.getNode(l),v=l=>{n.value.remove(l)},ee=(l,N)=>{n.value.append(l,N)},Ce=(l,N)=>{n.value.insertBefore(l,N)},me=(l,N)=>{n.value.insertAfter(l,N)},ve=(l,N,R)=>{y(N),e.emit("node-expand",l,N,R)},be=(l,N)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");n.value.updateChildren(l,N)};return Q("RootTree",{ctx:e,props:t,store:n,root:d,currentNode:a,instance:pe()}),Q(Fe,void 0),{ns:r,store:n,root:d,currentNode:a,dragState:h,el$:i,dropIndicator$:p,isEmpty:c,filter:s,getNodeKey:f,getNodePath:g,getCheckedNodes:k,getCheckedKeys:C,getCurrentNode:b,getCurrentKey:T,setCheckedNodes:A,setCheckedKeys:P,setChecked:E,getHalfCheckedNodes:Y,getHalfCheckedKeys:V,setCurrentNode:F,setCurrentKey:u,t:o,getNode:m,remove:v,append:ee,insertBefore:Ce,insertAfter:me,handleNodeExpand:ve,updateKeyChildren:be}}});function ct(t,e,o,r,n,d){var a;const i=B("el-tree-node");return K(),O("div",{ref:"el$",class:x([t.ns.b(),t.ns.is("dragging",!!t.dragState.draggingNode),t.ns.is("drop-not-allow",!t.dragState.allowDrop),t.ns.is("drop-inner",t.dragState.dropType==="inner"),{[t.ns.m("highlight-current")]:t.highlightCurrent}]),role:"tree"},[(K(!0),O(ge,null,ye(t.root.childNodes,p=>(K(),z(i,{key:t.getNodeKey(p),node:p,props:t.props,accordion:t.accordion,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,"render-content":t.renderContent,onNodeExpand:t.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),t.isEmpty?(K(),O("div",{key:0,class:x(t.ns.e("empty-block"))},[se("span",{class:x(t.ns.e("empty-text"))},Ve((a=t.emptyText)!=null?a:t.t("el.tree.emptyText")),3)],2)):H("v-if",!0),de(se("div",{ref:"dropIndicator$",class:x(t.ns.e("drop-indicator"))},null,2),[[ne,t.dragState.showDropIndicator]])],2)}var J=le(lt,[["render",ct],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree.vue"]]);J.install=t=>{t.component(J.name,J)};const ht=J,ut=ht;const ft={formItem:[{type:"input",placeholder:"请输入角色名称",label:"角色名称",prop:"name"},{type:"input",placeholder:"请输入权限介绍",label:"权限介绍",prop:"intro"},{type:"date-picker",label:"创建时间",prop:"createAt"}]},pt={title:"角色",pageName:"role",tableProps:[{type:"selection",width:"70"},{type:"index",label:"序号",width:"70"},{prop:"name",label:"角色名称",width:"150"},{prop:"intro",label:"角色权限",width:"150"},{type:"time",prop:"createAt",label:"创建时间"},{type:"time",prop:"updateAt",label:"更新时间"},{label:"操作",width:"140",type:"handle"}]},gt={pageName:"role",title:"角色",formItem:[{prop:"name",label:"角色名称",placeholder:"请输入角色名称",type:"input"},{prop:"intro",label:"角色描述",placeholder:"请输入角色描述",type:"input"},{prop:"menuList",type:"custom",label:"选择权限",initValue:[]}]},yt={class:"role"},Nt=_({__name:"role",setup(t){const{modalRef:e,handleAddEvent:o,handleUpdateEvent:r}=Oe(c),{contentRef:n,handleQuery:d,handleResetForm:a}=Le(),i=Te(),{menuList:p}=Ae(i),y=D();let h=[];function c(f){h=[],f&&(h=Ie(f.menuList)),re(()=>{var g;(g=y.value)==null||g.setCheckedKeys(h)})}function s(f,g){const{checkedKeys:k,halfCheckedKeys:C}=f[1];g.menuList=[...k,...C]}return(f,g)=>{const k=ut;return K(),O("div",yt,[M(Be,{"search-config":S(ft),onQueryEvent:S(d),onResetFormEvent:S(a)},null,8,["search-config","onQueryEvent","onResetFormEvent"]),M(Me,{"content-config":S(pt),ref_key:"contentRef",ref:n,onAddPageEvent:S(o),onUpdatePageEvent:S(r)},null,8,["content-config","onAddPageEvent","onUpdatePageEvent"]),M($e,{ref_key:"modalRef",ref:e,"modal-config":S(gt)},{menuList:Z(({formData:C})=>[M(k,{data:S(p),ref_key:"treeRef",ref:y,props:{label:"name"},"node-key":"id","show-checkbox":"","default-checked-keys":S(h),onCheck:(...b)=>s(b,C)},null,8,["data","default-checked-keys","onCheck"])]),_:1},8,["modal-config"])])}}});const zt=Xe(Nt,[["__scopeId","data-v-d5e6e03f"]]);export{zt as default};
