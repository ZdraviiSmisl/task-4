(this.webpackJsonptask4=this.webpackJsonptask4||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),o=a.n(s),i=(a(80),a(2)),c=a(3),l=a(4),d=a(63),u=a.n(d),p=a(20),m=a(22),_=a(8),h=a(41),f=a.n(h),v=a(64),E=a.n(v),T=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:E.a}))},k=a(44),b=a.n(k),g=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={error:!1,title:"",inputEmptyDisable:!1},e.onAddItem=function(){var t=e.state.title;e.setState({title:""}),""===t?e.setState({error:!0,inputEmptyDisable:!0}):(e.setState({error:!1}),e.props.addItem(t))},e.onTitleChanged=function(t){e.setState({error:!1,title:t.currentTarget.value,inputEmptyDisable:!1})},e.onKeyPress=function(t){"Enter"===t.key&&e.onAddItem()},e.render=function(){var t=e.state.error?b.a.error:"";return r.a.createElement("div",{className:b.a.todoList_newTaskForm},r.a.createElement("input",{className:t,type:"text",placeholder:"New item name",onChange:e.onTitleChanged,onKeyPress:e.onKeyPress,value:e.state.title}),r.a.createElement("button",{onClick:e.onAddItem,disabled:e.state.inputEmptyDisable},"Add"))},e}return a}(r.a.Component),y=a(45),L=a.n(y),S=a(32),N=a.n(S),w=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={editMode:!1,title:e.props.title},e.activatedEditMode=function(){e.setState({editMode:!0})},e.deactivatedEditMode=function(){e.setState({editMode:!1}),e.props.changeTitleList(e.state.title)},e.onTitleListChanged=function(t){e.setState({title:t.currentTarget.value})},e.render=function(){return r.a.createElement("div",{className:N.a.todoListHeader},e.state.editMode?r.a.createElement("input",{className:N.a.todoListTitle,autoFocus:!0,onBlur:e.deactivatedEditMode,onChange:e.onTitleListChanged,value:e.state.title}):r.a.createElement("div",null,r.a.createElement("h3",{className:N.a.todoListHeaderTitle,onClick:e.activatedEditMode},e.state.title),r.a.createElement("span",{className:N.a.button_delete},r.a.createElement("button",{onClick:e.props.onDelete},"X"))))},e}return a}(r.a.Component),C=a(16),O=a.n(C),j=a(73),A=a(123),I=Object(j.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(A.a);function M(e){return r.a.createElement(I,{title:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"created:",e.created),r.a.createElement("div",null,"updated:",e.updated),r.a.createElement("div",null,"finished:",e.finished))},e.children)}var x=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={editMode:!1,title:e.props.task.title},e.onIsDoneChanged=function(t){var a=t.currentTarget.checked?2:0;e.props.changeStatus(e.props.task.id,a)},e.activatedEditMode=function(){e.setState({editMode:!0})},e.deactivatedEditMode=function(){e.setState({editMode:!1}),e.props.changeTitle(e.props.task.id,e.state.title)},e.onTitleChanged=function(t){e.setState({title:t.currentTarget.value})},e.clickForDel=function(){e.props.removeTask(e.props.task.id)},e.togglePriority=function(t){var a=Number(t.target.value);e.props.changePriority(e.props.task.id,a)},e}return Object(_.a)(a,[{key:"render",value:function(){var e=this.props.task.isDone?"".concat(O.a.todoListTask," ").concat(O.a.done):O.a.todoListTask,t="low"===this.props.task.priority?O.a.low:"middle"===this.props.task.priority?O.a.middle:"high"===this.props.task.priority?O.a.high:"";return r.a.createElement(M,{created:this.props.task.created,updated:this.props.task.updated,finished:this.props.task.finished},r.a.createElement("div",{className:O.a.wrap_task},r.a.createElement("div",{className:e},r.a.createElement("input",{className:O.a.checkbox__class,type:"checkbox",checked:2===this.props.task.status,onChange:this.onIsDoneChanged}),this.state.editMode?r.a.createElement("input",{className:O.a.input,autoFocus:!0,onBlur:this.deactivatedEditMode,onChange:this.onTitleChanged,value:this.state.title}):r.a.createElement("span",{onClick:this.activatedEditMode,className:t},this.props.task.id," ",this.state.title," "),r.a.createElement("select",{className:O.a.select__class,value:this.props.task.priority,onChange:this.togglePriority},r.a.createElement("option",{value:"2"},"high"),r.a.createElement("option",{value:"0"},"low"),r.a.createElement("option",{value:"1"},"middle")),r.a.createElement("button",{className:O.a.delete__task,onClick:this.clickForDel},"X"))))}}]),a}(r.a.Component),H=a(66),D=a.n(H),F=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).render=function(){var t=e.props.tasks.map((function(t){return r.a.createElement(x,{key:t.id,task:t,removeTask:e.props.removeTask,changeStatus:e.props.changeStatus,changeTitle:e.props.changeTitle,changePriority:e.props.changePriority})}));return r.a.createElement("div",{className:D.a.todoListTasks},t)},e}return a}(r.a.Component),G=a(26),B=a.n(G),K=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={isHidden:!1},e.onAllFilterClick=function(){e.props.changeFilter("All")},e.onCompletedFilterClick=function(){e.props.changeFilter("Completed")},e.onActiveFilterClick=function(){e.props.changeFilter("Active")},e.onClickIsHidden=function(){e.setState({isHidden:!1})},e.onClickIsShow=function(){e.setState({isHidden:!0})},e.render=function(){var t="All"===e.props.filterValue?B.a.filterActive:"",a="Completed"===e.props.filterValue?B.a.filterActive:"",n="Active"===e.props.filterValue?B.a.filterActive:"";return r.a.createElement("div",{className:"todoList-footer"},!e.state.isHidden&&r.a.createElement("div",{className:B.a.wrap_buttons},r.a.createElement("button",{className:t,onClick:e.onAllFilterClick},"All"),r.a.createElement("button",{className:a,onClick:e.onCompletedFilterClick},"Completed"),r.a.createElement("button",{className:n,onClick:e.onActiveFilterClick},"Active"),!e.state.isHidden&&r.a.createElement("button",{className:B.a.button__show,onClick:e.onClickIsShow},"hide")),e.state.isHidden&&r.a.createElement("button",{className:B.a.button__show,onClick:e.onClickIsHidden},"show"))},e}return a}(r.a.Component),R=a(21),W=a(31),P=a(5),V=a(37),U=a.n(V),q=U.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/todo-lists/",withCredentials:!0,headers:{"API-KEY":"9afe52b8-8bdf-4340-bf02-6f9a020ad3e6"}}),J=function(){return q.get("")},Y=function(e){return q.post("",{title:e})},Q=function(e){return q.delete("".concat(e))},z=function(e,t){return q.put("".concat(e),{title:t})},X=function(e){return q.get("".concat(e,"/tasks"))},Z=function(e,t){return q.delete("".concat(e,"/tasks/").concat(t))},$=function(e,t){return q.post("".concat(t,"/tasks"),{title:e})},ee=function(e,t){return q.put("".concat(e,"/tasks/").concat(t.id),Object(P.a)({},t))},te={todoLists:[],loading:!0,nextTodolistId:0,nextTaskId:0,filterValue:"All"},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TODOLISTS":return Object(P.a)({},e,{todoLists:t.todolists});case"SET_TASKS":return Object(P.a)({},e,{todoLists:e.todoLists.map((function(e){return e.id===t.todoListId?Object(P.a)({},e,{tasks:t.tasks}):e}))});case"ADD-TODOLIST":return Object(P.a)({},e,{todoLists:[].concat(Object(W.a)(e.todoLists),[t.newTodoList])});case"CHANGE_LIST":return Object(P.a)({},e,{todoLists:e.todoLists.map((function(e){return e.id===t.todoListId?Object(P.a)({},e,{title:t.todoListTitle}):e}))});case"SET_FILTER":return Object(P.a)({},e,{filterValue:t.newFilterValue});case"ADD-TASK":return Object(P.a)({},e,{nextTaskId:e.nextTaskId+1,todoLists:e.todoLists.map((function(e){return e.id===t.todoListId?Object(P.a)({},e,{tasks:[].concat(Object(W.a)(e.tasks),[t.newTask])}):e}))});case"CHANGE_TASK":return Object(P.a)({},e,{todoLists:e.todoLists.map((function(e){return e.id===t.todoListId?Object(P.a)({},e,{tasks:e.tasks.map((function(e){return e.id===t.taskId?Object(P.a)({},e,{},t.obj):e}))}):e}))});case"DELETE_TASK":return Object(P.a)({},e,{todoLists:e.todoLists.map((function(e){return e.id===t.todoListId?Object(P.a)({},e,{tasks:e.tasks.filter((function(e){return e.id!==t.taskId}))}):e}))});case"DELETE_LIST":return Object(P.a)({},e,{todoLists:e.todoLists.filter((function(e){return e.id!==t.todoListId}))});case"SET_LOADING":return Object(P.a)({},e,{loading:!1})}return e},ne=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).removeTask=function(t){e.props.delete_Task(e.props.id,t)},e.addTask=function(t){e.props.addTask(t,e.props.id)},e.removeList=function(){e.props.delete_List(e.props.id)},e.changeTitleList=function(t){e.props.change_List(e.props.id,t)},e.changePriority=function(t,a){e.changeTask(t,{priority:a})},e.changeFilter=function(t){e.props.setFilterValue(t)},e.changeStatus=function(t,a){var n=new Date;e.changeTask(t,{status:a,finished:n+""})},e.changeTitle=function(t,a){var n=new Date;e.changeTask(t,{title:a,updated:n+""})},e.changeTask=function(t,a){e.props.change__Task(t,a,e.props.id)},e}return Object(_.a)(a,[{key:"componentDidMount",value:function(){this.props.get_Tusks(this.props.id)}},{key:"render",value:function(){var e=this,t=this.props.tasks,a=void 0===t?[]:t;return r.a.createElement("div",{className:L.a.wrap},r.a.createElement("div",{className:L.a.todoList},r.a.createElement(w,{title:this.props.title,changeTitleList:this.changeTitleList,onDelete:this.removeList}),r.a.createElement(g,{addItem:this.addTask}),r.a.createElement(F,{changePriority:this.changePriority,removeTask:this.removeTask,changeTitle:this.changeTitle,changeStatus:this.changeStatus,tasks:a.filter((function(t){switch(e.props.filterValue){case"Active":return!t.isDone;case"Completed":return t.isDone;case"All":default:return!0}}))}),r.a.createElement(K,{filterValue:this.props.filterValue,changeFilter:this.changeFilter})))}}]),a}(r.a.Component),re=Object(R.b)((function(e){var t=e.todolists;return{nextTaskId:t.nextTaskId,filterValue:t.filterValue}}),{addTask:function(e,t){return function(a){$(e,t).then((function(e){var n=e.data.data.item;0===e.data.resultCode?a(function(e,t){return{type:"ADD-TASK",newTask:e,todoListId:t}}(n,t)):console.log(e.data.messages)}))}},change__Task:function(e,t,a){return function(n,r){var s=r().todolists.todoLists.find((function(e){return e.id===a})).tasks.find((function(t){return t.id===e})),o=Object(P.a)({},s,{},t);ee(a,o).then((function(r){0===r.data.resultCode?n(function(e,t,a){return{type:"CHANGE_TASK",taskId:e,obj:t,todoListId:a}}(e,t,a)):console.error(r.data.messages)}))}},delete_Task:function(e,t){return function(a){Z(e,t).then((function(n){0===n.data.resultCode?a(function(e,t){return{type:"DELETE_TASK",taskId:e,todoListId:t}}(t,e)):console.log(n.data.messages)}))}},delete_List:function(e){return function(t){Q(e).then((function(a){0===a.data.resultCode?t(function(e){return{type:"DELETE_LIST",todoListId:e}}(e)):console.log(a.data.messages)}))}},change_List:function(e,t){return function(a){z(e,t).then((function(n){a(function(e,t){return{type:"CHANGE_LIST",todoListId:e,todoListTitle:t}}(e,t))}))}},setFilterValue:function(e){return{type:"SET_FILTER",newFilterValue:e}},get_Tusks:function(e){return function(t){X(e).then((function(a){var n=a.data.items;t(function(e,t){return{type:"SET_TASKS",tasks:e,todoListId:t}}(n,e))}))}}})(ne),se=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onAddTodoList=function(e){n.props.Add_TodoList(e)},n}return Object(_.a)(a,[{key:"componentDidMount",value:function(){this.props.get_TodoLists()}},{key:"render",value:function(){var e=this.props.todoLists.map((function(e){return r.a.createElement(re,{key:e.id,id:e.id,title:e.title,tasks:e.tasks})}));return r.a.createElement(r.a.Fragment,null,this.props.loading?r.a.createElement(T,null):r.a.createElement("div",{className:f.a.wrap},r.a.createElement("div",{className:f.a.AddList},r.a.createElement(g,{addItem:this.onAddTodoList})),r.a.createElement("div",{className:f.a.wrap_todolists},e)))}}]),a}(r.a.Component),oe=Object(R.b)((function(e){var t=e.todolists;return{todoLists:t.todoLists,nextTodolistId:t.nextTodolistId,loading:t.loading,filterValue:t.filterValue}}),{Add_TodoList:function(e){return function(t){Y(e).then((function(e){var a=e.data.data.item;t(function(e){return{type:"ADD-TODOLIST",newTodoList:e}}(a))}))}},get_TodoLists:function(){return function(e){setTimeout((function(){e({type:"SET_LOADING"})}),3e3),J().then((function(t){var a=t.data;e(function(e){return{type:"SET_TODOLISTS",todolists:e}}(a))}))}}})(se),ie=a(42),ce=a.n(ie),le=a(33),de=a.n(le),ue=a(47),pe=a.n(ue),me=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e.onPressEnter=function(e){"Enter"===e.key&&alert("\u0442\u044b \u043a\u043b\u0430\u0446\u043d\u0443\u043b \u043f\u043e Enter")},e}return Object(_.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:pe.a.InputWrap},r.a.createElement("input",{onKeyPress:this.onPressEnter,onChange:this.props.onChangeNameInput,className:pe.a.Input,type:"text",placeholder:"\u043d\u0435\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043e\u0431\u044a\u044f\u0441\u043d\u044f\u0442\u044c,\u043f\u0438\u0448\u0438 \u0441\u044e\u0434\u0430!",value:this.props.value}))}}]),a}(r.a.Component),_e=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={value:""},n.onAddNewUserNameClick=function(){var e=n.state.value;n.setState({value:""}),n.props.addName(e)},n.onChangeNameInput=function(e){var t=e.currentTarget.value;n.setState({value:t}),n.props.changeStatusButton(t)},n.render=function(){return r.a.createElement("div",{className:de.a.Wrap},r.a.createElement("span",{className:de.a.Counter}," ",n.props.counter," "),r.a.createElement("h3",{className:de.a.say},"\u041d\u0443,\u0440\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0439,\u043a\u0430\u043a \u0442\u0435\u0431\u044f \u0437\u043e\u0432\u0443\u0442 \u0438\u043b\u0438 \u043a\u043b\u0438\u0447\u0443\u0442?"),r.a.createElement(me,{value:n.state.value,addName:n.props.addName,onChangeNameInput:n.onChangeNameInput,addNameButtonStatus:n.props.addNameButtonStatus}),r.a.createElement("button",{className:de.a.Click,onClick:n.onAddNewUserNameClick,disabled:n.props.addNameButtonStatus}," hello"))},n}return a}(r.a.Component),he=a(68),fe=a.n(he),ve=function(e){return r.a.createElement("div",{className:fe.a.skill},r.a.createElement("span",null,e.title))},Ee=a(48),Te=a.n(Ee),ke=function(e){var t=e.skills.map((function(e){return r.a.createElement(ve,{key:e.id,title:e.title})}));return r.a.createElement("div",{className:Te.a.skills},r.a.createElement("h4",{className:Te.a.h4},"My Skills:"),t)},be=a(49),ge=a.n(be),ye=a(69),Le=a.n(ye),Se=function(e){return r.a.createElement("div",{className:Le.a.Friend},e.name)},Ne=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).render=function(){var t=e.props.names.map((function(e){return r.a.createElement(Se,{key:e.id,name:e.name})}));return r.a.createElement("div",{className:ge.a.AddNewFriend},r.a.createElement("h3",null,"\u0422\u0443\u0442 \u043a\u0430\u043d\u0442\u043e\u0432\u0430\u043b\u0441\u044f:"),r.a.createElement("div",{className:ge.a.wrap},t))},e}return a}(r.a.Component),we=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={counter:1,names:[],skills:[{id:1,title:"\u041a\u0443\u0440\u044f\u0449\u0438\u0439 \u0441\u043f\u043e\u0440\u0442\u0441\u043c\u0435\u043d"},{id:2,title:"\u0423\u043f\u043e\u0440(\u043d\u044b\u0439)\u043e\u0442\u044b\u0439"},{id:3,title:"Carolina Reaper-one love"}],addNameButtonStatus:!0},e.addName=function(t){var a={id:e.state.counter,name:t};alert("\u0422\u0443\u0442 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u043d\u0435 \u043d\u0430\u043b\u0438\u0432\u0430\u044e\u0442: ".concat(t));var n=[].concat(Object(W.a)(e.state.names),[a]);e.setState({names:n,counter:e.state.counter+1,addNameButtonStatus:!0})},e.changeStatusButton=function(t){""===t?e.setState({addNameButtonStatus:!0}):e.setState({addNameButtonStatus:!1})},e}return Object(_.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:ce.a.Wrap},r.a.createElement("span",{className:ce.a.name},"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439, \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0410\u0440\u0430\u043f\u043e\u0432 \u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447"),r.a.createElement("h5",{className:ce.a.h5},"\u042f \u0437\u0430 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u0438\u0437\u043c"),r.a.createElement(_e,{addName:this.addName,counter:this.state.counter,changeStatusButton:this.changeStatusButton,addNameButtonStatus:this.state.addNameButtonStatus}),r.a.createElement(ke,{skills:this.state.skills}),r.a.createElement(Ne,{names:this.state.names})))}}]),a}(r.a.Component),Ce=a(14),Oe=a.n(Ce),je=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={selectedPage:""},e.onSelected=function(t){var a=t.currentTarget.getAttribute("href");e.setState({selectedPage:a})},e}return Object(_.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:Oe.a.wrapNavBar},r.a.createElement(p.b,{to:"/Menu"},r.a.createElement("h3",{className:Oe.a.menu},"MENU")),r.a.createElement("div",{className:Oe.a.item},r.a.createElement(p.b,{to:"/Monday",onClick:this.onSelected,activeClassName:Oe.a.active},"Monday")),r.a.createElement("div",{className:Oe.a.item},r.a.createElement(p.b,{to:"/tuesday",onClick:this.onSelected,activeClassName:Oe.a.active},"Tuesday")),r.a.createElement("div",{className:Oe.a.item},r.a.createElement(p.b,{to:"/wednesday",onClick:this.onSelected,activeClassName:Oe.a.active},"Wednesday")),r.a.createElement("div",{className:Oe.a.item},r.a.createElement(p.b,{to:"/thursday",onClick:this.onSelected,activeClassName:Oe.a.active},"Thursday")),r.a.createElement("div",{className:Oe.a.item},r.a.createElement(p.b,{to:"/friday",onClick:this.onSelected,activeClassName:Oe.a.active},"Friday")))}}]),a}(r.a.Component),Ae=a(27),Ie=a.n(Ae),Me=a(71),xe=a.n(Me),He=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(_.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:xe.a.StartPicture},"This is the start page")}}]),a}(r.a.Component),De=a(23),Fe=a.n(De),Ge=a(34),Be=a.n(Ge),Ke=a(52),Re=U.a.create({baseURL:"https://neko-cafe-back.herokuapp.com/auth/test"}),We=function(e){return Re.post("",{success:e})},Pe={theme:"DARK_THEME",loading:!1,buttonStatus:!1,status:!1,message:"waiting for a new message"},Ve=function(e){return{type:"TOGGLE_LOADING",loading:e}},Ue=function(e){return{type:"CHANGE_BUTTON_STATUS",buttonStatus:e}},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STYLE":return Object(P.a)({},e,{theme:t.selectedTheme});case"TOGGLE_STATUS":return Object(P.a)({},e,{status:t.status});case"TOGGLE_LOADING":return Object(P.a)({},e,{loading:t.loading});case"CHANGE_BUTTON_STATUS":return Object(P.a)({},e,{buttonStatus:t.buttonStatus});case"SET_MESSAGE":return Object(P.a)({},e,{message:t.message});default:return e}},Je=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).functionRequest=function(){e.props.request_To_Server()},e.toggleCheckbox=function(t){var a=t.currentTarget.checked;e.props.toggleStatus(a)},e.setTheme=function(t){var a;t.currentTarget.checked&&(a=t.currentTarget.value),e.props.setStyle(a)},e}return Object(_.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:Fe.a.infoServer__wrap},r.a.createElement("div",{className:Fe.a.infoServer__discr},this.props.loading?r.a.createElement(T,null):r.a.createElement("div",{className:Fe.a.infoServer__text},this.props.message)),r.a.createElement("div",{className:Fe.a.infoServer__panel},r.a.createElement("div",{className:"".concat(Fe.a.wrap__inputRadio," ").concat(Fe.a[this.props.theme])},r.a.createElement("label",null,"Dark Theme ",r.a.createElement("input",{name:"them",type:"radio",value:"DARK_THEME",checked:"DARK_THEME"===this.props.theme,onChange:this.setTheme})),r.a.createElement("label",null,"Light Theme",r.a.createElement("input",{name:"them",type:"radio",value:"LIGHT_THEME",checked:"LIGHT_THEME"===this.props.theme,onChange:this.setTheme})),r.a.createElement("label",null,"Green Theme",r.a.createElement("input",{name:"them",type:"radio",value:"GREEN_THEME",checked:"GREEN_THEME"===this.props.theme,onChange:this.setTheme})),r.a.createElement("input",{type:"checkbox",checked:this.props.status,onChange:this.toggleCheckbox}),r.a.createElement("button",{className:Fe.a.btn,onClick:this.functionRequest,disabled:this.props.buttonStatus},"Send"))))}}]),a}(r.a.Component),Ye=Object(R.b)((function(e){var t=e.settings;return{theme:t.theme,loading:t.loading,message:t.message,buttonStatus:t.buttonStatus,status:t.status}}),{setStyle:function(e){return{type:"SET_STYLE",selectedTheme:e}},toggleStatus:function(e){return{type:"TOGGLE_STATUS",status:e}},request_To_Server:function(){return function(){var e=Object(Ke.a)(Be.a.mark((function e(t,a){var n,r,s;return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Ve(!0)),t(Ue(!0)),n=a().settings.status,r=function(){var e=Object(Ke.a)(Be.a.mark((function e(t){var a;return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,We(t);case 3:return a=e.sent,console.log("answer:",a.data),e.abrupt("return",a.data.info);case 8:return e.prev=8,e.t0=e.catch(0),console.log("error:",Object(P.a)({},e.t0)),e.abrupt("return",e.t0.response.data.info);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),e.next=6,r(n);case 6:s=e.sent,t({type:"SET_MESSAGE",message:s}),t(Ve(!1)),t(Ue(!1));case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}})(Je),Qe=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={isHidden:!1},e.onClickIsShow=function(){e.setState({isHidden:!0})},e.onClickIsHidden=function(){e.setState({isHidden:!1})},e.render=function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:Ie.a.wrap__main},r.a.createElement("div",{className:Ie.a.nav},!e.state.isHidden&&r.a.createElement("div",{className:Ie.a.wrap_wrap_navbar},r.a.createElement(je,null)),!e.state.isHidden&&r.a.createElement("button",{className:Ie.a.b,onClick:e.onClickIsShow},"hide"),e.state.isHidden&&r.a.createElement("button",{className:Ie.a.b2,onClick:e.onClickIsHidden},"show")),r.a.createElement("div",{className:Ie.a.wrap__days},r.a.createElement(m.a,{path:"/Menu",render:function(){return r.a.createElement(He,null)}}),r.a.createElement(m.a,{path:"/Monday",render:function(){return r.a.createElement(we,null)}}),r.a.createElement(m.a,{path:"/tuesday",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(m.a,{path:"/wednesday",render:function(){return r.a.createElement(Ye,null)}}),r.a.createElement(m.a,{path:"/thursday",render:function(){return r.a.createElement(He,null)}}),r.a.createElement(m.a,{path:"/friday",render:function(){return r.a.createElement(He,null)}}))))},e}return a}(r.a.Component),ze=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).render=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement(Qe,null))},e}return a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Xe=a(28),Ze=a(72),$e=Object(Xe.c)({todolists:ae,settings:qe}),et=Object(Xe.d)($e,Object(Xe.a)(Ze.a));o.a.render(r.a.createElement(R.a,{store:et},r.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},14:function(e,t,a){e.exports={wrapNavBar:"Navbar_wrapNavBar__1PnRT",item:"Navbar_item__2FtLv",active:"Navbar_active__1ZtBm",menu:"Navbar_menu__2cgMa"}},16:function(e,t,a){e.exports={low:"TodoListTask_low__2eAQe",middle:"TodoListTask_middle__3UeKG",high:"TodoListTask_high__8LfYd",wrap_task:"TodoListTask_wrap_task__1MtkE",input:"TodoListTask_input__1aot6",todoListTask:"TodoListTask_todoListTask__22O_q",done:"TodoListTask_done__1E4ov",select__class:"TodoListTask_select__class__2ZRG1",delete__task:"TodoListTask_delete__task__zIFv_",checkbox__class:"TodoListTask_checkbox__class__wGyNT"}},23:function(e,t,a){e.exports={wrap__inputRadio:"Wednesday_wrap__inputRadio__1vJ1d",DARK_THEME:"Wednesday_DARK_THEME__3whMf",LIGHT_THEME:"Wednesday_LIGHT_THEME__fcNj_",GREEN_THEME:"Wednesday_GREEN_THEME__Gy2dd",infoServer__wrap:"Wednesday_infoServer__wrap__dkIHm",infoServer__discr:"Wednesday_infoServer__discr__3MZb_",infoServer__text:"Wednesday_infoServer__text__3JT_Y",steam:"Wednesday_steam__3AllK",infoServer__panel:"Wednesday_infoServer__panel__3hAtB",btn:"Wednesday_btn__1enbM"}},26:function(e,t,a){e.exports={filterActive:"TodoListFooter_filterActive__1_C8r",wrap_buttons:"TodoListFooter_wrap_buttons__1BmHh",button__show:"TodoListFooter_button__show__EcCNz"}},27:function(e,t,a){e.exports={wrap__main:"Main_wrap__main__1rvfe",b:"Main_b__16C6u",b2:"Main_b2__2k666",nav:"Main_nav__2jpWA",wrap__days:"Main_wrap__days__3KR73",wrap_wrap_navbar:"Main_wrap_wrap_navbar__3hAoi"}},32:function(e,t,a){e.exports={todoListHeader:"TodoListHeader_todoListHeader__25Nqf",todoListTitle:"TodoListHeader_todoListTitle__1B6Ce",todoListHeaderTitle:"TodoListHeader_todoListHeaderTitle__3Sns_",button_delete:"TodoListHeader_button_delete__1rm9d"}},33:function(e,t,a){e.exports={Wrap:"Greeting_Wrap__DpcNS",Counter:"Greeting_Counter__270M7",Click:"Greeting_Click__3vLPI",say:"Greeting_say__1eKsL"}},41:function(e,t,a){e.exports={wrap:"Tuesday_wrap__1x_NA",wrap_todolists:"Tuesday_wrap_todolists__2N2sB",AddList:"Tuesday_AddList__38arc",todoList:"Tuesday_todoList__3o1-F","todoList-task":"Tuesday_todoList-task__3HlT_",done:"Tuesday_done__d1DJN","filter-active":"Tuesday_filter-active__kmQpV",error:"Tuesday_error__hdnjg"}},42:function(e,t,a){e.exports={Wrap:"Monday_Wrap__h5vUU",name:"Monday_name__1gpS1",h5:"Monday_h5__3bs7R"}},44:function(e,t,a){e.exports={todoList_newTaskForm:"AddNewItemForm_todoList_newTaskForm__3VpfM",error:"AddNewItemForm_error__1XYdV",add:"AddNewItemForm_add__2wt9n"}},45:function(e,t,a){e.exports={wrap:"Todolist_wrap__15E5P",todoList:"Todolist_todoList__xjxDu"}},47:function(e,t,a){e.exports={InputWrap:"Input_InputWrap__2a0EK",Input:"Input_Input__caBEk"}},48:function(e,t,a){e.exports={skills:"StyleSkills_skills__1rgoK",h4:"StyleSkills_h4__qDkQQ"}},49:function(e,t,a){e.exports={AddNewFriend:"AddNewFriend_AddNewFriend__3mFvx",wrap:"AddNewFriend_wrap__2vXDZ"}},63:function(e,t,a){e.exports={App:"App_App___zQhV"}},64:function(e,t,a){e.exports=a.p+"static/media/preloader.1abb8447.svg"},66:function(e,t,a){e.exports={todoListTasks:"TodoListTasks_todoListTasks__25sCA"}},68:function(e,t,a){e.exports={skill:"StyleSkill_skill__2D2vy"}},69:function(e,t,a){e.exports={Friend:"Friend_Friend__3CiGJ"}},71:function(e,t,a){e.exports={StartPicture:"StartComponent_StartPicture__1I5im"}},75:function(e,t,a){e.exports=a(104)},80:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.8d62b463.chunk.js.map