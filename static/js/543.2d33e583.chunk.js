"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[543],{1543:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(3855),r=t(4808),s=t(184),c=function(){var e=(0,a.I0)();return(0,s.jsxs)("div",{className:"pb-3",children:[(0,s.jsx)("p",{className:"mb-2",children:"Find contact by name"}),(0,s.jsx)("input",{type:"text",onChange:function(n){e((0,r.a)(n.target.value))},placeholder:"Search by name",className:"form-control"})]})},l=t(9439),i=t(2791),o=t(3634),m=t(6916),u=function(e){return e.contacts.items},d=function(e){return e.contacts.isLoading},h=function(e){return e.contacts.error},b=(0,m.P1)([u,function(e){return e.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),f=function(){var e=(0,i.useState)(""),n=(0,l.Z)(e,2),t=n[0],r=n[1],c=(0,i.useState)(""),m=(0,l.Z)(c,2),d=m[0],h=m[1],b=(0,a.I0)(),f=(0,a.v9)(u),x=f.some((function(e){return e.name.toLowerCase()===t.toLowerCase()})),p=f.some((function(e){return e.number===d})),j=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":r(a);break;case"number":var s=a.replace(/\D/g,"").slice(0,10).replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3");h(s);break;default:return}};return(0,s.jsxs)("div",{className:" contact-form rounded   pt-3 p-3 ps-5 pe-5 ps-m-0  h-100",children:[(0,s.jsx)("h1",{className:"text-center mb-4",children:"Phonebook"}),(0,s.jsxs)("form",{className:"d-flex flex-column align-items-center  gap-4",onSubmit:function(e){return e.preventDefault(),x?alert("Contact with name ".concat(t," is already in contact")):p?alert("Number ".concat(d," is already in contact")):(b((0,o.uK)({name:t,number:d})),r(""),void h(""))},children:[(0,s.jsx)("div",{className:"mb-2 w-100",children:(0,s.jsxs)("label",{className:"form-label w-100 ",children:[(0,s.jsx)("h2",{className:"mb-1",children:"Name"}),(0,s.jsx)("input",{type:"text",name:"name",pattern:"[A-Za-z\u0410-\u042f\u0401\u0406\u0407\u0404\u0490\u0430-\u044f\u0451\u0456\u0457\u0454\u0491\\s]+",title:"Name may contain only letters, apostrophe, dash, and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:j,className:"form-control"})]})}),(0,s.jsx)("div",{className:"mb-2 w-100",children:(0,s.jsxs)("label",{className:"form-label w-100",children:[(0,s.jsx)("h2",{className:"mb-1",children:"Number"}),(0,s.jsx)("input",{type:"tel",name:"number",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",title:"Phone number must be digits and must contain 10 numbers",required:!0,value:d,onChange:j,className:"form-control"})]})}),(0,s.jsx)("button",{type:"submit",className:"btn btn-outline-dark fw-bold ps-4 pe-4",children:"ADD CONTACT"})]})]})},x="ContactItem_itemBorder__iSGKr",p=function(e){var n=e.contact,t=(0,a.I0)();return(0,s.jsxs)("li",{className:"d-flex justify-content-between align-items-center p-2 ".concat(x),children:[(0,s.jsxs)("div",{className:"d-flex align-items-center",children:[(0,s.jsx)("img",{src:"http://placehold.it/40x40",alt:"error",className:"rounded-circle me-2"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"m-0 fs-5 fw-medium ",children:n.name}),(0,s.jsx)("p",{className:"m-0 text-body-secondary",children:n.number})]})]}),(0,s.jsx)("button",{className:"btn btn-outline-dark rounded-3",type:"button",onClick:function(){return t((0,o.GK)(n.id))},children:"DELETE"})]})},j=function(){var e=(0,a.v9)(b);return(0,s.jsx)("ul",{className:"border border-black rounded-4 p-0 bg-light",children:e.map((function(e){return(0,s.jsx)(p,{contact:e},e.id)}))})},N=t(3975),v=function(){return(0,s.jsx)("div",{className:"d-flex justify-content-center",children:(0,s.jsx)(N.W0,{height:100,width:100,radius:5,color:"rgba(255, 199, 0, 1)",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})})},g=function(){var e=(0,a.v9)(d),n=(0,a.v9)(h),t=(0,a.I0)();return(0,i.useEffect)((function(){t((0,o.yF)())}),[t]),(0,s.jsx)("section",{className:"container container-content ",children:(0,s.jsx)("div",{className:"contacts-wrap  shadow-xlg ",children:(0,s.jsxs)("div",{className:"row ",children:[(0,s.jsx)("div",{className:"col-lg-7 ",children:(0,s.jsx)(f,{})}),(0,s.jsxs)("div",{className:"pt-3 col-lg-5 ",children:[(0,s.jsx)("h2",{className:"mb-2",children:"My contacts"}),(0,s.jsx)(c,{}),e&&!n?(0,s.jsx)(v,{}):(0,s.jsx)(j,{})]})]})})})}}}]);
//# sourceMappingURL=543.2d33e583.chunk.js.map