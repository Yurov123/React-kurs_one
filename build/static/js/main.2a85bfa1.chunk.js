(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(3),r=n.n(o),c=(n(18),n(1)),i=l.a.createContext(),u={li:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:".5rem 1rem",border:"1px solid #ccc",borderRadius:"4px",marginBottom:".5rem"},input:{marginRight:"1rem"}};var m=function(e){var t=e.todo,n=e.index,o=e.onChange,r=Object(a.useContext)(i).removeTodo,c=[];return t.completed&&c.push("done"),l.a.createElement("li",{style:u.li},l.a.createElement("span",{className:c.join(" ")},l.a.createElement("input",{type:"checkbox",checked:t.completed,style:u.input,onChange:function(){return o(t.id)}}),l.a.createElement("strong",null,n+1),"\xa0",t.title),l.a.createElement("button",{className:"rm",onClick:r.bind(null,t.id)},"\xd7"))},s={ul:{listStyle:"none",margin:0,padding:0}};var d=function(e){return l.a.createElement("ul",{style:s.ul},e.todos.map(function(t,n){return l.a.createElement(m,{todo:t,key:t.id,index:n,onChange:e.onToggle})}))},p=function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:".5rem"}},l.a.createElement("div",{className:"lds-dual-ring"}))},f=n(4),E=n(5),g=n(7),h=n(6),b=n(8),v=(n(20),function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(g.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={isOpen:!1},n}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:function(){return e.setState({isOpen:!0})}},"Open Modal"),this.state.isOpen&&l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"model-body"},l.a.createElement("h1",null,"Modal title"),l.a.createElement("p",null,"I am awesome modal !"),l.a.createElement("button",{onClick:function(){return e.setState({isOpen:!0})}},"Close model"))))}}]),t}(l.a.Component)),y=l.a.lazy(function(){return new Promise(function(e){setTimeout(function(){e(n.e(1).then(n.bind(null,23)))},3e3)})});var C=function(){var e=l.a.useState([]),t=Object(c.a)(e,2),n=t[0],o=t[1],r=l.a.useState(!0),u=Object(c.a)(r,2),m=u[0],s=u[1];return Object(a.useEffect)(function(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then(function(e){return e.json()}).then(function(e){setTimeout(function(){o(e),s(!1)},2e3)})},[]),l.a.createElement(i.Provider,{value:{removeTodo:function(e){o(n.filter(function(t){return t.id!==e}))}}},l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"React tutorial"),l.a.createElement(v,null),l.a.createElement(l.a.Suspense,{fallback:l.a.createElement(p,null)},l.a.createElement(y,{onCreate:function(e){o(n.concat([{title:e,id:Date.now(),completed:!1}]))}})),m&&l.a.createElement(p,null),n.length?l.a.createElement(d,{todos:n,onToggle:function(e){o(n.map(function(t){return t.id===e&&(t.completed=!t.completed),t}))}}):m?null:l.a.createElement("p",null,"No todos !")))},j=function(e){e&&e instanceof Function&&n.e(2).then(n.bind(null,24)).then(function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),l(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null))),j()},9:function(e,t,n){e.exports=n(22)}},[[9,4,3]]]);
//# sourceMappingURL=main.2a85bfa1.chunk.js.map