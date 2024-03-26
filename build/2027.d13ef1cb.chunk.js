"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[2027],{82027:(Ts,$,s)=>{s.d($,{ReviewWorkflowsEditPage:()=>_s});var t=s(74081),E=s(27279),G=s(48102),A=s(10701),J=s(77970),R=s(32370),d=s(15530),X=s(59082),b=s(53532),I=s(71563),q=s(43433),ss=s(61020),ts=s(40464),l=s(59461),os=s(51447),es=s(87137),ns=s(59491),e=s(90947),as=s(66947),is=s(74563),h=s(85405),M=s(9991),W=s(47706),ls=s(60625),As=s(24468),Rs=s(15816),Is=s(97442),Ws=s(13576),Bs=s(87830),Us=s(47184),Ks=s(364),us=s(49204),ys=s(47853),ws=s(74919),js=s(29206),ps=s(98934),Ss=s(75719),xs=s(8175),ks=s(6078),Fs=s(51943),Zs=s(55783),Hs=s(92249),Ns=s(41942),Ys=s(22919),zs=s(53915),Qs=s(75041),Vs=s(30200),$s=s(91379),Gs=s(33299),Js=s(33409),Xs=s(63645),bs=s(7988),qs=s(7055),st=s(26757),tt=s(58311),ot=s(29510),et=s(16946),nt=s(10124),at=s(69530),it=s(86961),lt=s(51527),_t=s(19764),rt=s(42982),Et=s(26126),dt=s(93836),Mt=s(64797),Dt=s(85811);const _s=()=>{const{workflowId:S}=(0,os.UO)(),rs=(0,l.v9)(as.s),{formatMessage:a}=(0,ss.Z)(),r=(0,l.I0)(),{put:Es}=(0,d.kY)(),{formatAPIError:ds}=(0,d.So)(),L=(0,d.lm)(),{isLoading:P,meta:g,workflows:v,refetch:Ms}=(0,ls.u)(),{collectionTypes:x,singleTypes:k,isLoading:B}=(0,ns.u)(),Ds=(0,l.v9)(e.j),Os=(0,l.v9)(e.a),i=(0,l.v9)(e.b),F=(0,l.v9)(e.k),Z=(0,l.v9)(e.c),f=(0,l.v9)(e.s),{allowedActions:{canDelete:Ps,canUpdate:U}}=(0,d.ss)(rs.settings?.["review-workflows"]),[C,T]=E.useState({}),{getFeature:gs,isLoading:H}=(0,is.u)(),{isLoading:K,roles:N}=(0,es.u)(void 0,{retry:!1}),[Y,D]=E.useState(null),[vs,z]=E.useState(),u=v?.find(o=>o.id===parseInt(S,10)),Q=v?.filter(o=>o.id!==parseInt(S,10)).flatMap(o=>o.contentTypes),y=gs("review-workflows"),m=y?.[W.C],c=y?.[W.a],{mutateAsync:fs,isLoading:ms}=(0,ts.useMutation)(async({workflow:o})=>{const{data:{data:n}}=await Es(`/admin/review-workflows/workflows/${o.id}`,{data:o});return n},{onSuccess(){L({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})}}),cs=async o=>{z(void 0);try{return await fs({workflow:{...o,stages:o.stages?.map(_=>{let O=!0;const j=Ds.workflow?.stages?.find(p=>p.id===_?.id);return j&&(O=j.permissions?.length!==_.permissions?.length||!j.permissions?.every(p=>!!_.permissions?.find(Cs=>Cs.role===p.role))),{..._,permissions:O?_.permissions:void 0}})}})}catch(n){if(n instanceof b.d7)return n.response&&n.response.data?.error?.name==="ValidationError"&&n.response.data?.error?.details?.errors?.length>0&&z((n.response.data?.error?.details?.errors).reduce((_,O)=>(O.path&&q(_,O.path,O.message),_),{})),L({type:"warning",message:ds(n)}),null}},V=async()=>{await cs(i),await Ms(),T({})},hs=async()=>{await V()},Ls=()=>{T({})},w=(0,I.TA)({enableReinitialize:!0,initialErrors:vs,initialValues:i,async onSubmit(){const o=i.contentTypes?.some(n=>Q?.includes(n));g&&m&&g?.workflowCount>parseInt(m,10)?D("workflow"):i.stages&&c&&i.stages.length>parseInt(c,10)?D("stage"):F||o?(F&&T(n=>({...n,hasDeletedServerStages:!0})),o&&T(n=>({...n,hasReassignedContentTypes:!0}))):V()},validate(o){return(0,e.v)({values:o,formatMessage:a})}});return(0,e.u)(W.R,e.i),E.useEffect(()=>(!P&&u&&v&&(r((0,e.l)({workflow:u})),r((0,e.d)({workflows:v}))),B||r((0,e.e)({collectionTypes:x,singleTypes:k})),K||r((0,e.f)(N)),r((0,e.g)(P||B||K)),()=>{r((0,e.r)())}),[x,r,B,P,K,N,k,u,v]),E.useEffect(()=>{!P&&!H&&(g&&m&&g?.workflowCount>parseInt(m,10)?D("workflow"):i.stages&&c&&i.stages.length>parseInt(c,10)&&D("stage"))},[i.stages,H,P,y,g,m,c]),E.useEffect(()=>{!f&&Z?.length===0&&L({blockTransition:!0,type:"warning",message:a({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[a,f,Z,L]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.D,{}),(0,t.jsx)(I.Hy,{value:w,children:(0,t.jsxs)(I.l0,{onSubmit:w.handleSubmit,children:[(0,t.jsx)(h.H,{navigationAction:(0,t.jsx)(h.B,{href:"/settings/review-workflows"}),primaryAction:U&&(0,t.jsx)(G.z,{startIcon:(0,t.jsx)(X.Z,{}),type:"submit",size:"M",disabled:!Os,loading:!Boolean(Object.keys(C).length>0)&&ms,children:a({id:"global.save",defaultMessage:"Save"})}),subtitle:!f&&a({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:i.stages?.length}),title:i.name||""}),(0,t.jsx)(h.R,{children:f?(0,t.jsx)(A.k,{justifyContent:"center",children:(0,t.jsx)(J.a,{children:a({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})})}):(0,t.jsxs)(A.k,{alignItems:"stretch",direction:"column",gap:7,children:[(0,t.jsx)(e.W,{canUpdate:U}),(0,t.jsx)(e.S,{canDelete:Ps,canUpdate:U,stages:w.values?.stages})]})})]})}),(0,t.jsx)(d.QH.Root,{isConfirmButtonLoading:f,isOpen:Object.keys(C).length>0,onToggleDialog:Ls,onConfirm:hs,children:(0,t.jsx)(d.QH.Body,{children:(0,t.jsxs)(A.k,{direction:"column",gap:5,children:[C.hasDeletedServerStages&&(0,t.jsx)(R.Z,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.delete.confirm.stages.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage."})}),C.hasReassignedContentTypes&&(0,t.jsx)(R.Z,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:Q?.filter(o=>i.contentTypes?.includes(o)).length})}),(0,t.jsx)(R.Z,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})}),(0,t.jsxs)(M.L.Root,{isOpen:Y==="workflow",onClose:()=>D(null),children:[(0,t.jsx)(M.L.Title,{children:a({id:"Settings.review-workflows.edit.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(M.L.Body,{children:a({id:"Settings.review-workflows.edit.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(M.L.Root,{isOpen:Y==="stage",onClose:()=>D(null),children:[(0,t.jsx)(M.L.Title,{children:a({id:"Settings.review-workflows.edit.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(M.L.Body,{children:a({id:"Settings.review-workflows.edit.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})}}}]);
