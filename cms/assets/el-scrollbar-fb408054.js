import{u as Z,af as ee,e as Y,f as V,_ as $,a as te,h as ae,g as z,a7 as j,w as oe}from"./base-fea03ce8.js";import{N as h,u as f,af as le,M as m,d as P,O as re,aq as se,ai as K,o as N,W as O,w as G,Q as ne,R as A,S as _,X as F,c as q,a as X,F as ie,L as U,a2 as J,a3 as ce,a1 as ue,V as me,s as de,P as fe,Z as ve,Y as he,g as pe}from"./_plugin-vue_export-helper-33f8d7e1.js";import{n as W,v as ge,o as be,u as ye}from"./index-1cfa6bc8.js";import{t as we}from"./error-78e43d3e.js";const Q=Symbol("scrollbarContextKey");var Se={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const Te=r=>(n,l)=>ke(n,l,f(r)),ke=(r,n,l)=>ee(l,r,r).replace(/\{(\w+)\}/g,(o,c)=>{var d;return`${(d=n==null?void 0:n[c])!=null?d:`{${c}}`}`}),ze=r=>{const n=h(()=>f(r).name),l=le(r)?r:m(r);return{lang:n,locale:l,t:Te(r)}},je=()=>{const r=Z("locale");return ze(h(()=>r.value||Se))},w=4,Ne={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},_e=({move:r,size:n,bar:l})=>({[l.size]:n,transform:`translate${l.axis}(${r}%)`}),Ce=Y({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Ee="Thumb",Me=P({__name:"thumb",props:Ce,setup(r){const n=r,l=re(Q),o=V("scrollbar");l||we(Ee,"can not inject scrollbar context");const c=m(),d=m(),i=m({}),v=m(!1);let a=!1,g=!1,b=te?document.onselectstart:null;const t=h(()=>Ne[n.vertical?"vertical":"horizontal"]),S=h(()=>_e({size:n.size,move:n.move,bar:t.value})),T=h(()=>c.value[t.value.offset]**2/l.wrapElement[t.value.scrollSize]/n.ratio/d.value[t.value.offset]),C=s=>{var e;if(s.stopPropagation(),s.ctrlKey||[1,2].includes(s.button))return;(e=window.getSelection())==null||e.removeAllRanges(),R(s);const u=s.currentTarget;u&&(i.value[t.value.axis]=u[t.value.offset]-(s[t.value.client]-u.getBoundingClientRect()[t.value.direction]))},D=s=>{if(!d.value||!c.value||!l.wrapElement)return;const e=Math.abs(s.target.getBoundingClientRect()[t.value.direction]-s[t.value.client]),u=d.value[t.value.offset]/2,p=(e-u)*100*T.value/c.value[t.value.offset];l.wrapElement[t.value.scroll]=p*l.wrapElement[t.value.scrollSize]/100},R=s=>{s.stopImmediatePropagation(),a=!0,document.addEventListener("mousemove",E),document.addEventListener("mouseup",y),b=document.onselectstart,document.onselectstart=()=>!1},E=s=>{if(!c.value||!d.value||a===!1)return;const e=i.value[t.value.axis];if(!e)return;const u=(c.value.getBoundingClientRect()[t.value.direction]-s[t.value.client])*-1,p=d.value[t.value.offset]-e,k=(u-p)*100*T.value/c.value[t.value.offset];l.wrapElement[t.value.scroll]=k*l.wrapElement[t.value.scrollSize]/100},y=()=>{a=!1,i.value[t.value.axis]=0,document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",y),M(),g&&(v.value=!1)},H=()=>{g=!1,v.value=!!n.size},B=()=>{g=!0,v.value=a};se(()=>{M(),document.removeEventListener("mouseup",y)});const M=()=>{document.onselectstart!==b&&(document.onselectstart=b)};return W(K(l,"scrollbarElement"),"mousemove",H),W(K(l,"scrollbarElement"),"mouseleave",B),(s,e)=>(N(),O(be,{name:f(o).b("fade"),persisted:""},{default:G(()=>[ne(A("div",{ref_key:"instance",ref:c,class:_([f(o).e("bar"),f(o).is(f(t).key)]),onMousedown:D},[A("div",{ref_key:"thumb",ref:d,class:_(f(o).e("thumb")),style:F(f(S)),onMousedown:C},null,38)],34),[[ge,s.always||v.value]])]),_:1},8,["name"]))}});var I=$(Me,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const xe=Y({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),Le=P({__name:"bar",props:xe,setup(r,{expose:n}){const l=r,o=m(0),c=m(0);return n({handleScroll:i=>{if(i){const v=i.offsetHeight-w,a=i.offsetWidth-w;c.value=i.scrollTop*100/v*l.ratioY,o.value=i.scrollLeft*100/a*l.ratioX}}}),(i,v)=>(N(),q(ie,null,[X(I,{move:o.value,ratio:i.ratioX,size:i.width,always:i.always},null,8,["move","ratio","size","always"]),X(I,{move:c.value,ratio:i.ratioY,size:i.height,vertical:"",always:i.always},null,8,["move","ratio","size","always"])],64))}});var Pe=$(Le,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const De=Y({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:ae([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),Re={scroll:({scrollTop:r,scrollLeft:n})=>[r,n].every(z)},He="ElScrollbar",Be=P({name:He}),Oe=P({...Be,props:De,emits:Re,setup(r,{expose:n,emit:l}){const o=r,c=V("scrollbar");let d,i;const v=m(),a=m(),g=m(),b=m("0"),t=m("0"),S=m(),T=m(1),C=m(1),D=h(()=>{const e={};return o.height&&(e.height=j(o.height)),o.maxHeight&&(e.maxHeight=j(o.maxHeight)),[o.wrapStyle,e]}),R=h(()=>[o.wrapClass,c.e("wrap"),{[c.em("wrap","hidden-default")]:!o.native}]),E=h(()=>[c.e("view"),o.viewClass]),y=()=>{var e;a.value&&((e=S.value)==null||e.handleScroll(a.value),l("scroll",{scrollTop:a.value.scrollTop,scrollLeft:a.value.scrollLeft}))};function H(e,u){pe(e)?a.value.scrollTo(e):z(e)&&z(u)&&a.value.scrollTo(e,u)}const B=e=>{z(e)&&(a.value.scrollTop=e)},M=e=>{z(e)&&(a.value.scrollLeft=e)},s=()=>{if(!a.value)return;const e=a.value.offsetHeight-w,u=a.value.offsetWidth-w,p=e**2/a.value.scrollHeight,k=u**2/a.value.scrollWidth,x=Math.max(p,o.minSize),L=Math.max(k,o.minSize);T.value=p/(e-p)/(x/(e-x)),C.value=k/(u-k)/(L/(u-L)),t.value=x+w<e?`${x}px`:"",b.value=L+w<u?`${L}px`:""};return U(()=>o.noresize,e=>{e?(d==null||d(),i==null||i()):({stop:d}=ye(g,s),i=W("resize",s))},{immediate:!0}),U(()=>[o.maxHeight,o.height],()=>{o.native||J(()=>{var e;s(),a.value&&((e=S.value)==null||e.handleScroll(a.value))})}),ce(Q,ue({scrollbarElement:v,wrapElement:a})),me(()=>{o.native||J(()=>{s()})}),de(()=>s()),n({wrapRef:a,update:s,scrollTo:H,setScrollTop:B,setScrollLeft:M,handleScroll:y}),(e,u)=>(N(),q("div",{ref_key:"scrollbarRef",ref:v,class:_(f(c).b())},[A("div",{ref_key:"wrapRef",ref:a,class:_(f(R)),style:F(f(D)),onScroll:y},[(N(),O(ve(e.tag),{ref_key:"resizeRef",ref:g,class:_(f(E)),style:F(e.viewStyle)},{default:G(()=>[fe(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?he("v-if",!0):(N(),O(Pe,{key:0,ref_key:"barRef",ref:S,height:t.value,width:b.value,always:e.always,"ratio-x":C.value,"ratio-y":T.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var Ae=$(Oe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const Ke=oe(Ae);export{Ke as E,je as u};
