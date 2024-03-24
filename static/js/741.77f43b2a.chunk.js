"use strict";(self.webpackChunkstore_of_stylish_clothes=self.webpackChunkstore_of_stylish_clothes||[]).push([[741],{7741:function(e,n,r){r.r(n),r.d(n,{default:function(){return I}});var o,s,l,a=r(2791),i=r(9434),t=r(4116),c=r(456),d=r(9439),h=r(2506),u=r(828),m=r(5331),x=r(9982),p=r(8126),j=r(168),f=r(545),v=r(2700),g=r(7521),w=(0,f.ZP)(g.vw)(o||(o=(0,j.Z)([""]))),b=(0,f.ZP)(g.Gq)(s||(s=(0,j.Z)([""]))),Z=(0,f.ZP)(v.z)(l||(l=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 125px;\n\n  color: ",";\n  background: ",";\n  font-family: ",";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: normal;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 12px;\n  transform: scale(1);\n\n  cursor: pointer;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  transition: ",";\n\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n    transition: transform 0.5s;\n    border: 2px solid ",";\n    color: ",";\n    background: transparent;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: auto;\n    transform: none;\n    transition: none;\n  }\n\n  @media screen and (min-width: ",") {\n    width: 180px;\n  }\n"])),p.Z.colors.white,p.Z.colors.brown4,p.Z.fonts[0],p.Z.transition[0],p.Z.colors.brown4,p.Z.colors.brown4,p.Z.breakpoints.desktop),y=r(3329),C=function(){var e=(0,a.useState)(!0),n=(0,d.Z)(e,2),r=n[0],o=n[1],s=(0,a.useState)(!1),l=(0,d.Z)(s,2),t=l[0],c=l[1],j=(0,a.useState)(!1),f=(0,d.Z)(j,2),v=f[0],C=f[1],I=(0,a.useState)(!1),P=(0,d.Z)(I,2),k=P[0],B=P[1],S=(0,i.I0)(),F=(0,h.TA)({initialValues:{name:"",email:"",password:"",confirmPassword:"",phone:"",location:""},validationSchema:m.Z.registerSchema,onSubmit:function(e,n){!function(e){var n=e.values;B(!0);var r=n.name,o=n.email,s=n.password,l=n.phone,a=n.location;S((0,x.z2)({userName:r,email:o,password:s,phone:l,location:a})),B(!1)}({values:e,action:n})}}),N=!!(F.errors.email&&F.touched.email||F.errors.password&&F.touched.password||F.errors.confirmPassword&&F.touched.confirmPassword||""===F.values.email||""===F.values.confirmPassword),D=function(e,n){return e?"".concat(n?p.Z.colors.red:p.Z.colors.darkGreen):null};return(0,y.jsx)(g.hj,{children:(0,y.jsx)(g.Yb,{children:(0,y.jsx)(h.J9,{validationSchema:m.Z.registerSchema,children:(0,y.jsxs)(b,{onSubmit:F.handleSubmit,autoComplete:"off",children:[(0,y.jsx)(w,{children:"Register"}),r&&(0,y.jsxs)("div",{children:[(0,y.jsx)(g.II,{style:{borderColor:D(F.values.email,F.errors.email)},name:"email",type:"email",value:F.values.email,validate:m.Z.registerSchema.email,onChange:F.handleChange,onBlur:F.handleBlur}),F.values.email?F.errors.email?(0,y.jsx)(g.F1,{color:p.Z.colors.red}):(0,y.jsx)(g.gq,{color:p.Z.colors.green1}):null,F.errors.email&&F.touched.email?(0,y.jsx)(g.Tv,{children:F.errors.email}):null,(0,y.jsx)(g.Dr,{className:"floating-label",children:"Email"})]}),r&&(0,y.jsxs)("div",{children:[(0,y.jsx)(g.II,{style:{borderColor:D(F.values.password,F.errors.password)},name:"password",type:t?"text":"password",onChange:F.handleChange,value:F.values.password,onBlur:F.handleBlur}),(0,y.jsx)(g.gW,{onClick:function(){c(!t)},children:t?(0,y.jsx)(u.bt0,{}):(0,y.jsx)(u.RF8,{})}),F.errors.password&&F.touched.password?(0,y.jsx)(g.Tv,{children:F.errors.password}):null,(0,y.jsx)(g.Dr,{className:"floating-label",children:"Password"})]}),r&&(0,y.jsxs)("div",{children:[(0,y.jsx)(g.II,{style:{borderColor:D(F.values.confirmPassword,F.errors.confirmPassword)},name:"confirmPassword",type:v?"text":"password",onChange:F.handleChange,value:F.values.confirmPassword,onBlur:F.handleBlur}),(0,y.jsx)(g.gW,{onClick:function(){C(!v)},children:v?(0,y.jsx)(u.bt0,{}):(0,y.jsx)(u.RF8,{})}),F.errors.confirmPassword&&F.touched.confirmPassword?(0,y.jsx)(g.Tv,{children:F.errors.confirmPassword}):null,(0,y.jsx)(g.Dr,{className:"floating-label",children:"Confirm Password"})]}),r&&(0,y.jsxs)(g._D,{children:[(0,y.jsx)(g.un,{type:"button",onClick:function(){o(!1)},disabled:N,children:"Next"}),(0,y.jsxs)(g.cu,{children:[(0,y.jsx)("span",{children:"Already have an account?"}),(0,y.jsx)(g.Fg,{to:"/signin",children:"Sign In"})]})]}),!r&&(0,y.jsxs)("div",{children:[(0,y.jsx)(g.II,{style:{borderColor:D(F.values.name,F.errors.name)},name:"name",type:"text",onChange:F.handleChange,value:F.values.name,onBlur:F.handleBlur}),F.values.name?F.errors.name?(0,y.jsx)(g.F1,{color:p.Z.colors.red}):(0,y.jsx)(g.gq,{color:p.Z.colors.green1}):null,F.errors.name&&F.touched.name?(0,y.jsx)(g.Tv,{children:F.errors.name}):null,(0,y.jsx)(g.Dr,{className:"floating-label",children:"Name"})]}),!r&&(0,y.jsxs)("div",{children:[(0,y.jsx)(g.II,{style:{borderColor:D(F.values.location,F.errors.location)},name:"location",type:"text",value:F.values.location,onBlur:F.handleBlur,onChange:function(e){F.handleChange(e)}}),F.values.location?F.errors.location?(0,y.jsx)(g.F1,{color:p.Z.colors.red}):(0,y.jsx)(g.gq,{color:p.Z.colors.green1}):null,F.errors.location&&F.touched.location?(0,y.jsx)(g.Tv,{children:F.errors.location}):null,(0,y.jsx)(g.Dr,{className:"floating-label",children:"Location, region"})]}),!r&&(0,y.jsxs)("div",{children:[(0,y.jsx)(g.II,{style:{borderColor:D(F.values.phone,F.errors.phone)},id:"phone",type:"phone",onChange:F.handleChange,value:F.values.phone,onBlur:F.handleBlur,name:"phone"}),F.values.phone?F.errors.phone?(0,y.jsx)(g.F1,{color:p.Z.colors.red}):(0,y.jsx)(g.gq,{color:p.Z.colors.green1}):null,F.errors.phone&&F.touched.phone?(0,y.jsx)(g.Tv,{children:F.errors.phone}):null,(0,y.jsx)(g.Dr,{className:"floating-label",children:"Mobile phone"})]}),!r&&(0,y.jsxs)(g._D,{children:[(0,y.jsx)(Z,{type:"button","aria-label":"back button",onClick:function(){o(!0)},children:"Back"}),(0,y.jsx)(g.un,{type:"submit","aria-label":"submit registration",children:k?"Loading":"Register"}),(0,y.jsxs)(g.cu,{children:[(0,y.jsx)("span",{children:"Already have an account?"})," ",(0,y.jsx)(g.Fg,{to:"/signin",children:"Sign In"})]})]})]})})})})},I=function(){var e=(0,i.I0)();return window.scrollTo({top:0,left:0,behavior:"smooth"}),(0,a.useEffect)((function(){e((0,c.X)({headerBottom:"addHeaderBottom"}))}),[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(t.H,{title:"Register",description:"Register your account"}),(0,y.jsx)(C,{})]})}}}]);
//# sourceMappingURL=741.77f43b2a.chunk.js.map