"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[4536],{54536:(m,i,s)=>{s.r(i),s.d(i,{CreateActionEE:()=>P});var t=s(74081),e=s(10701),E=s(2981),r=s(50703),o=s(48102),d=s(15206),_=s(16543),l=s(69439),M=s(70627),D=s(61020),n=s(74563),a=s(27279),O=s(15530),g=s(40464);const P=({onClick:C})=>{const{formatMessage:c}=(0,D.Z)(),{license:L,isError:A,isLoading:v}=(0,n.u)(),{permittedSeats:I,shouldStopCreate:u}=L??{};return A||v?null:(0,t.jsxs)(e.k,{gap:2,children:[!l(I)&&u&&(0,t.jsx)(E.u,{description:c({id:"Settings.application.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),position:"left",children:(0,t.jsx)(r.J,{width:`${14/16}rem`,height:`${14/16}rem`,color:"danger500",as:d.Z})}),(0,t.jsx)(o.z,{"data-testid":"create-user-button",onClick:C,startIcon:(0,t.jsx)(_.Z,{}),size:"S",disabled:u,children:c({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})]})};P.propTypes={onClick:M.func.isRequired}},74563:(m,i,s)=>{s.d(i,{u:()=>r});var t=s(27279),e=s(15530),E=s(40464);function r({enabled:o}={enabled:!0}){const{get:d}=(0,e.kY)(),{data:_,isError:l,isLoading:M}=(0,E.useQuery)(["ee","license-limit-info"],async()=>{const{data:n}=await d("/admin/license-limit-information");return n},{enabled:o}),D=t.useCallback(n=>{const a=_?.data?.features.find(O=>O.name===n);return a&&"options"in a?a.options:{}},[_]);return{license:_?.data,getFeature:D,isError:l,isLoading:M}}}}]);
