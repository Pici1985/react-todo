(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{22:function(e,t,n){e.exports=n(33)},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),c=n.n(r),l=n(16),i=n(6),d=n(7),u=n(9),s=n(8),p=n(12),m=n(1);var f={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},b={color:"#fff",textDecoration:"none"},h=function(){return o.a.createElement("header",{style:f},o.a.createElement("h1",null,"TodoList"),o.a.createElement(p.b,{style:b,to:"/"},"Home")," |",o.a.createElement(p.b,{style:b,to:"/about"}," About"))},v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc solid ",borderLeft:"1px #ccc solid ",borderRight:"1px #ccc solid ",textDecoration:e.props.todo.completed?"line-through":"none",width:"90%",margin:"0px 5%"}},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," "," ",n,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),style:g}," x ")))}}]),n}(a.Component),g={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right",boxShadow:"2px 2px #333"},y=v,E=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return o.a.createElement(y,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})}))}}]),n}(a.Component),x=n(21),j=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:""})},e.onChange=function(t){return e.setState(Object(x.a)({},t.target.name,t.target.value))},e}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex",width:"90%",margin:"0px 5%"}},o.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),n}(a.Component);var O=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is the ToDoList app v1.0.0. It is part of a react course."))},k=n(35),C=(n(32),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[]},e.markComplete=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t){e.setState({todos:Object(l.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addTodo=function(t){var n={id:Object(k.a)(),title:t,completed:!1};e.setState({todos:[].concat(Object(l.a)(e.state.todos),[n])})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(h,null),o.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,{addTodo:e.addTodo}),o.a.createElement(E,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),o.a.createElement(m.a,{path:"/about",component:O}))))}}]),n}(a.Component));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a78b4234.chunk.js.map