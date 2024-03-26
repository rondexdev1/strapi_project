"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[713],{30713:(k,O,s)=>{s.r(O),s.d(O,{SettingsPage:()=>M,default:()=>b});var e=s(74081),c=s(27279),u=s(73354),p=s(27875),h=s(48102),v=s(74758),C=s(27997),r=s(10701),A=s(93415),T=s(32370),y=s(23298),_=s(74577),g=s(2548),o=s(15530),L=s(59082),I=s(6078),x=s(364),R=s(61020),D=s(40464),i=s(61843),J=s(31855),V=s(29206),U=s(61815),B=s(43433),$=s(71563),w=s(47853),q=s(50547),ss=s(74063),es=s(10124);const K=t=>t,j={initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},W=(t,n)=>(0,U.ZP)(t,l=>{switch(n.type){case"GET_DATA_SUCCEEDED":{l.initialData=n.data,l.modifiedData=n.data;break}case"ON_CHANGE":{B(l,["modifiedData",...n.keys.split(".")],n.value);break}default:return t}}),M=()=>{const{formatMessage:t}=(0,R.Z)(),{lockApp:n,unlockApp:l}=(0,o.o1)(),z=(0,o.lm)(),{get:S,put:N}=(0,o.kY)();(0,o.go)();const[{initialData:G,modifiedData:d},f]=(0,c.useReducer)(W,j,K),{data:E,isLoading:Z,refetch:F}=(0,D.useQuery)({queryKey:["upload","settings"],async queryFn(){const{data:{data:a}}=await S("/upload/settings");return a}});c.useEffect(()=>{E&&f({type:"GET_DATA_SUCCEEDED",data:E})},[E]);const P=I(G,d),{mutateAsync:H,isLoading:Q}=(0,D.useMutation)({async mutationFn(a){return N("/upload/settings",a)},onSuccess(){F(),z({type:"success",message:{id:"notification.form.success.fields"}})},onError(a){console.error(a)}}),X=async a=>{a.preventDefault(),!P&&(n(),await H(d),l())},m=({target:{name:a,value:Y}})=>{f({type:"ON_CHANGE",keys:a,value:Y})};return(0,e.jsxs)(u.o,{tabIndex:-1,children:[(0,e.jsx)(x.q,{title:t({id:(0,i.g)("page.title"),defaultMessage:"Settings - Media Libray"})}),(0,e.jsxs)("form",{onSubmit:X,children:[(0,e.jsx)(p.T,{title:t({id:(0,i.g)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:(0,e.jsx)(h.z,{disabled:P,loading:Q,type:"submit",startIcon:(0,e.jsx)(L.Z,{}),size:"S",children:t({id:"global.save",defaultMessage:"Save"})}),subtitle:t({id:(0,i.g)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),(0,e.jsx)(v.D,{children:Z?(0,e.jsx)(o.dO,{}):(0,e.jsx)(C.A,{children:(0,e.jsx)(r.k,{direction:"column",alignItems:"stretch",gap:12,children:(0,e.jsx)(A.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(r.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(r.k,{children:(0,e.jsx)(T.Z,{variant:"delta",as:"h2",children:t({id:(0,i.g)("settings.blockTitle"),defaultMessage:"Asset management"})})}),(0,e.jsxs)(y.r,{gap:6,children:[(0,e.jsx)(_.P,{col:6,s:12,children:(0,e.jsx)(g.s,{"aria-label":"responsiveDimensions",checked:d.responsiveDimensions,hint:t({id:(0,i.g)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:t({id:(0,i.g)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:a=>{m({target:{name:"responsiveDimensions",value:a.target.checked}})}})}),(0,e.jsx)(_.P,{col:6,s:12,children:(0,e.jsx)(g.s,{"aria-label":"sizeOptimization",checked:d.sizeOptimization,hint:t({id:(0,i.g)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:t({id:(0,i.g)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:a=>{m({target:{name:"sizeOptimization",value:a.target.checked}})}})}),(0,e.jsx)(_.P,{col:6,s:12,children:(0,e.jsx)(g.s,{"aria-label":"autoOrientation",checked:d.autoOrientation,hint:t({id:(0,i.g)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:t({id:(0,i.g)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:a=>{m({target:{name:"autoOrientation",value:a.target.checked}})}})})]})]})})})})})]})]})},b=()=>(0,e.jsx)(o.O4,{permissions:i.P.settings,children:(0,e.jsx)(M,{})})}}]);
