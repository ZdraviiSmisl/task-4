(this.webpackJsonptask4=this.webpackJsonptask4||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports={WrapNavBar:"Navbar_WrapNavBar__3QY9y",item:"Navbar_item__2FtLv",active:"Navbar_active__1ZtBm"}},,,,,,,function(e,t,a){e.exports={todoListTask:"TodoListTask_todoListTask__22O_q",done:"TodoListTask_done__1E4ov",low:"TodoListTask_low__2eAQe",middle:"TodoListTask_middle__3UeKG",high:"TodoListTask_high__8LfYd",wrap_task:"TodoListTask_wrap_task__1MtkE"}},,,,,function(e,t,a){e.exports={todoListHeader:"TodoListHeader_todoListHeader__25Nqf",todoListHeaderTitle:"TodoListHeader_todoListHeaderTitle__3Sns_",todoListNewTaskForm:"TodoListHeader_todoListNewTaskForm__2cAzX",error:"TodoListHeader_error__lOJ01"}},function(e,t,a){e.exports={Wrap:"Greeting_Wrap__DpcNS",Counter:"Greeting_Counter__270M7",Click:"Greeting_Click__3vLPI",say:"Greeting_say__1eKsL"}},,,,,,function(e,t,a){e.exports={filterActive:"TodoListFooter_filterActive__1_C8r"}},function(e,t,a){e.exports={Wrap:"Monday_Wrap__h5vUU",name:"Monday_name__1gpS1",h5:"Monday_h5__3bs7R"}},function(e,t,a){e.exports={Wrap:"Main_Wrap__33LG5",b:"Main_b__16C6u",b2:"Main_b2__2k666"}},function(e,t,a){e.exports={wrap:"Tuesday_wrap__1x_NA",todoList:"Tuesday_todoList__3o1-F","todoList-task":"Tuesday_todoList-task__3HlT_",done:"Tuesday_done__d1DJN","filter-active":"Tuesday_filter-active__kmQpV",error:"Tuesday_error__hdnjg"}},function(e,t,a){e.exports={todoList_newTaskForm:"AddNewItemForm_todoList_newTaskForm__3VpfM",error:"AddNewItemForm_error__1XYdV"}},function(e,t,a){e.exports={wrap:"Todolist_wrap__15E5P",todoList:"Todolist_todoList__xjxDu"}},,function(e,t,a){e.exports={InputWrap:"Input_InputWrap__2a0EK",Input:"Input_Input__caBEk"}},function(e,t,a){e.exports={skills:"StyleSkills_skills__1rgoK",h4:"StyleSkills_h4__qDkQQ"}},function(e,t,a){e.exports={AddNewFriend:"AddNewFriend_AddNewFriend__3mFvx",wrap:"AddNewFriend_wrap__2vXDZ"}},,,,,,,function(e,t,a){e.exports={App:"App_App___zQhV"}},function(e,t,a){e.exports=a.p+"static/media/preloader.1abb8447.svg"},,,,,function(e,t,a){e.exports={todoListTasks:"TodoListTasks_todoListTasks__25sCA"}},function(e,t,a){e.exports={skill:"StyleSkill_skill__2D2vy"}},function(e,t,a){e.exports={Friend:"Friend_Friend__3CiGJ"}},,function(e,t,a){e.exports={StartPicture:"StartComponent_StartPicture__1I5im"}},,,,,function(e,t,a){e.exports=a(72)},,,,,function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),o=a.n(s),i=(a(67),a(2)),c=a(3),l=a(4),d=a(47),u=a.n(d),m=a(18),p=a(17),h=a(21),v=a(7),f=a(34),k=a.n(f),_={saveTodoLists:function(e){this._save(e,"todolists")},getTodoLists:function(){return this._get("todolists")},getTasks:function(){return this._get("our-state-")},saveTasks:function(e,t){this._save(e,"our-state-"+t)},_save:function(e,t){var a=JSON.stringify(e);localStorage.setItem(t,a)},_get:function(e){var t=localStorage.getItem(e);return null!=t?JSON.parse(t):null}},E=a(48),g=a.n(E),y=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:g.a}))},N=a(35),T=a.n(N),b=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={error:!1,title:""},e.onAddItem=function(){var t=e.state.title;e.setState({title:""}),""===t?e.setState({error:!0}):(e.setState({error:!1}),e.props.addItem(t))},e.onTitleChanged=function(t){e.setState({error:!1,title:t.currentTarget.value})},e.onKeyPress=function(t){"Enter"===t.key&&e.onAddItem()},e.render=function(){var t=e.state.error?T.a.error:"";return r.a.createElement("div",{className:T.a.todoList_newTaskForm},r.a.createElement("input",{className:t,type:"text",placeholder:"New task name",onChange:e.onTitleChanged,onKeyPress:e.onKeyPress,value:e.state.title}),r.a.createElement("button",{onClick:e.onAddItem},"Add"))},e}return a}(r.a.Component),C=a(59),S=a(36),w=a.n(S),O=a(24),j=a.n(O),A=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={error:!1,title:"",inputEmptyDisable:!1},e.onAddTaskClick=function(){var t=e.state.title;e.setState({title:""}),""===t?e.setState({error:!0,inputEmptyDisable:!0}):(e.setState({error:!1}),e.props.addTask(t))},e.onAddText=function(t){e.setState({error:!1,title:t.currentTarget.value,inputEmptyDisable:!1})},e.onPressEnter=function(e){"Enter"===e.key&&alert("\u0442\u044b \u043a\u043b\u0430\u0446\u043d\u0443\u043b \u043f\u043e Enter")},e.render=function(){return r.a.createElement("div",{className:j.a.todoListHeader},r.a.createElement("h3",{className:j.a.todoListHeaderTitle},"What to Learn"),r.a.createElement("div",{className:j.a.todoListNewTaskForm},r.a.createElement("input",{onKeyPress:e.onPressEnter,onChange:e.onAddText,className:e.state.error?j.a.error:"",type:"text",placeholder:"New task name",value:e.state.title}),r.a.createElement("button",{onClick:e.onAddTaskClick,disabled:e.state.inputEmptyDisable},"Add")))},e}return a}(r.a.Component),L=a(19),F=a.n(L),I=a(58),x=a(91),H=Object(I.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(x.a);function D(e){return r.a.createElement(H,{title:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"created:",e.created),r.a.createElement("div",null,"updated:",e.updated),r.a.createElement("div",null,"finished:",e.finished))},e.children)}var M=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={editMode:!1},e.onIsDoneChanged=function(t){e.props.changeStatus(e.props.task.id,t.currentTarget.checked)},e.activatedEditMode=function(){e.setState({editMode:!0})},e.deactivatedEditMode=function(){e.setState({editMode:!1})},e.onTitleChanged=function(t){e.props.changeTitle(e.props.task.id,t.currentTarget.value)},e.clickForDel=function(){e.props.removeTask(e.props.task.id)},e.togglePriority=function(t){var a=t.target.value;e.props.changePriority(e.props.task.id,a)},e}return Object(v.a)(a,[{key:"render",value:function(){var e=this.props.task.isDone?F.a.todoListTask+""+F.a.done:F.a.todoListTask,t="low"===this.props.task.priority?F.a.low:"middle"===this.props.task.priority?F.a.middle:"high"===this.props.task.priority?F.a.high:"";return r.a.createElement(D,{created:this.props.task.created,updated:this.props.task.updated,finished:this.props.task.finished},r.a.createElement("div",{className:F.a.wrap_task},r.a.createElement("div",{className:e},r.a.createElement("input",{type:"checkbox",checked:this.props.task.isDone,onChange:this.onIsDoneChanged}),this.state.editMode?r.a.createElement("input",{className:t,autoFocus:!0,onBlur:this.deactivatedEditMode,onChange:this.onTitleChanged}):r.a.createElement("span",{onClick:this.activatedEditMode},this.props.task.id," ",this.props.task.title," "),r.a.createElement("select",{value:this.props.task.priority,onChange:this.togglePriority},r.a.createElement("option",{value:"high"},"high"),r.a.createElement("option",{value:"low"},"low"),r.a.createElement("option",{value:"middle"},"middle")),r.a.createElement("span",null,r.a.createElement("button",{onClick:this.clickForDel},"Del")))))}}]),a}(r.a.Component),P=a(53),B=a.n(P),W=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).render=function(){var t=e.props.tasks.map((function(t){return r.a.createElement(M,{key:t.id,task:t,removeTask:e.props.removeTask,changeStatus:e.props.changeStatus,changeTitle:e.props.changeTitle,changePriority:e.props.changePriority})}));return r.a.createElement("div",{className:B.a.todoListTasks},t)},e}return a}(r.a.Component),V=a(31),K=a.n(V),G=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={isHidden:!1},e.onAllFilterClick=function(){e.props.changeFilter("All")},e.onCompletedFilterClick=function(){e.props.changeFilter("Completed")},e.onActiveFilterClick=function(){e.props.changeFilter("Active")},e.onClickIsHidden=function(){e.setState({isHidden:!1})},e.onClickIsShow=function(){e.setState({isHidden:!0})},e.render=function(){var t="All"===e.props.filterValue?K.a.filterActive:"",a="Completed"===e.props.filterValue?K.a.filterActive:"",n="Active"===e.props.filterValue?K.a.filterActive:"";return r.a.createElement("div",{className:"todoList-footer"},!e.state.isHidden&&r.a.createElement("div",null,r.a.createElement("button",{className:t,onClick:e.onAllFilterClick},"All"),r.a.createElement("button",{className:a,onClick:e.onCompletedFilterClick},"Completed"),r.a.createElement("button",{className:n,onClick:e.onActiveFilterClick},"Active")),!e.state.isHidden&&r.a.createElement("span",{onClick:e.onClickIsShow},"hide"),e.state.isHidden&&r.a.createElement("span",{onClick:e.onClickIsHidden},"show"))},e}return a}(r.a.Component),J=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={tasks:[],filterValue:"All",nextTaskId:0},n.saveState=function(){_.saveTasks(n.state,n.props.id)},n.restoreState=function(){var e=_.getTasks();null!==e&&n.setState(e)},n.removeTask=function(e){var t=n.state.tasks.filter((function(t){return t.id!==e}));n.setState({tasks:t},(function(){return n.saveState(n.state)}))},n.addTask=function(e){var t=new Date,a={id:n.state.nextTaskId,title:e,isDone:!1,priority:"low",created:t+"",updated:"",finished:""},r=[].concat(Object(h.a)(n.state.tasks),[a]);n.setState({tasks:r,nextTaskId:n.state.nextTaskId+1},(function(){return n.saveState(n.state)}))},n.changePriority=function(e,t){n.changeTask(e,{priority:t})},n.changeFilter=function(e){n.setState({filterValue:e},(function(){return n.saveState(n.state)}))},n.changeStatus=function(e,t){var a=new Date;n.changeTask(e,{isDone:t,finished:a+""})},n.changeTitle=function(e,t){var a=new Date;n.changeTask(e,{title:t,updated:a+""})},n.changeTask=function(e,t){var a=n.state.tasks.map((function(a){return a.id===e?Object(C.a)({},a,{},t):a}));n.setState({tasks:a},(function(){return n.saveState(n.state)}))},n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.restoreState()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:w.a.wrap},r.a.createElement("div",{className:w.a.todoList},r.a.createElement(A,{addTask:this.addTask}),r.a.createElement(W,{changePriority:this.changePriority,removeTask:this.removeTask,changeTitle:this.changeTitle,changeStatus:this.changeStatus,tasks:this.state.tasks.filter((function(t){switch(e.state.filterValue){case"Active":return!t.isDone;case"Completed":return t.isDone;case"All":default:return!0}}))}),r.a.createElement(G,{filterValue:this.state.filterValue,changeFilter:this.changeFilter})))}}]),a}(r.a.Component),Q=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={todolists:[{title:"every day",id:1}],loading:!0},n.saveState=function(){_.saveTodoLists(n.state)},n.restoreState=function(){var e=_.getTodoLists();null!=e&&n.setState(e)},n.onAddTodoList=function(e){var t=n.state.todolists.length-1,a={title:e,id:n.state.todolists[t].id+1},r=[].concat(Object(h.a)(n.state.todolists),[a]);n.setState({todolists:r},(function(){return n.saveState()}))},n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({loading:!1})}),3e3),this.restoreState()}},{key:"render",value:function(){var e=this.state.todolists.map((function(e){return r.a.createElement(J,{id:e.id,title:e.title})}));return r.a.createElement(r.a.Fragment,null,this.state.loading?r.a.createElement(y,null):r.a.createElement("div",{className:k.a.wrap},r.a.createElement("div",null,r.a.createElement(b,{addItem:this.onAddTodoList})),r.a.createElement("div",{className:k.a.wrap},e)))}}]),a}(r.a.Component),U=a(32),q=a.n(U),z=a(25),R=a.n(z),X=a(38),Y=a.n(X),Z=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e.onPressEnter=function(e){"Enter"===e.key&&alert("\u0442\u044b \u043a\u043b\u0430\u0446\u043d\u0443\u043b \u043f\u043e Enter")},e}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:Y.a.InputWrap},r.a.createElement("input",{onKeyPress:this.onPressEnter,onChange:this.props.onChangeNameInput,className:Y.a.Input,type:"text",placeholder:"\u043d\u0435\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043e\u0431\u044a\u044f\u0441\u043d\u044f\u0442\u044c,\u043f\u0438\u0448\u0438 \u0441\u044e\u0434\u0430!",value:this.props.value}))}}]),a}(r.a.Component),$=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={value:""},n.onAddNewUserNameClick=function(){var e=n.state.value;n.setState({value:""}),n.props.addName(e)},n.onChangeNameInput=function(e){var t=e.currentTarget.value;n.setState({value:t}),n.props.changeStatusButton(t)},n.render=function(){return r.a.createElement("div",{className:R.a.Wrap},r.a.createElement("span",{className:R.a.Counter}," ",n.props.counter," "),r.a.createElement("h3",{className:R.a.say},"\u041d\u0443,\u0440\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0439,\u043a\u0430\u043a \u0442\u0435\u0431\u044f \u0437\u043e\u0432\u0443\u0442 \u0438\u043b\u0438 \u043a\u043b\u0438\u0447\u0443\u0442?"),r.a.createElement(Z,{value:n.state.value,addName:n.props.addName,onChangeNameInput:n.onChangeNameInput,addNameButtonStatus:n.props.addNameButtonStatus}),r.a.createElement("button",{className:R.a.Click,onClick:n.onAddNewUserNameClick,disabled:n.props.addNameButtonStatus}," hello"))},n}return a}(r.a.Component),ee=a(54),te=a.n(ee),ae=function(e){return r.a.createElement("div",{className:te.a.skill},r.a.createElement("span",null,e.title))},ne=a(39),re=a.n(ne),se=function(e){var t=e.skills.map((function(e){return r.a.createElement(ae,{key:e.id,title:e.title})}));return r.a.createElement("div",{className:re.a.skills},r.a.createElement("h4",{className:re.a.h4},"My Skills:"),t)},oe=a(40),ie=a.n(oe),ce=a(55),le=a.n(ce),de=function(e){return r.a.createElement("div",{className:le.a.Friend},e.name)},ue=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).render=function(){var t=e.props.names.map((function(e){return r.a.createElement(de,{key:e.id,name:e.name})}));return r.a.createElement("div",{className:ie.a.AddNewFriend},r.a.createElement("h3",null,"\u0422\u0443\u0442 \u043a\u0430\u043d\u0442\u043e\u0432\u0430\u043b\u0441\u044f:"),r.a.createElement("div",{className:ie.a.wrap},t))},e}return a}(r.a.Component),me=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={counter:1,names:[],skills:[{id:1,title:"\u041a\u0443\u0440\u044f\u0449\u0438\u0439 \u0441\u043f\u043e\u0440\u0442\u0441\u043c\u0435\u043d"},{id:2,title:"\u0423\u043f\u043e\u0440(\u043d\u044b\u0439)\u043e\u0442\u044b\u0439"},{id:3,title:"Carolina Reaper-one love"}],addNameButtonStatus:!0},e.addName=function(t){var a={id:e.state.counter,name:t};alert("\u0422\u0443\u0442 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u043d\u0435 \u043d\u0430\u043b\u0438\u0432\u0430\u044e\u0442: ".concat(t));var n=[].concat(Object(h.a)(e.state.names),[a]);e.setState({names:n,counter:e.state.counter+1,addNameButtonStatus:!0})},e.changeStatusButton=function(t){""===t?e.setState({addNameButtonStatus:!0}):e.setState({addNameButtonStatus:!1})},e}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:q.a.Wrap},r.a.createElement("span",{className:q.a.name},"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439, \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0410\u0440\u0430\u043f\u043e\u0432 \u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447"),r.a.createElement("h5",{className:q.a.h5},"\u042f \u0437\u0430 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u0438\u0437\u043c"),r.a.createElement($,{addName:this.addName,counter:this.state.counter,changeStatusButton:this.changeStatusButton,addNameButtonStatus:this.state.addNameButtonStatus}),r.a.createElement(se,{skills:this.state.skills}),r.a.createElement(ue,{names:this.state.names})))}}]),a}(r.a.Component),pe=a(12),he=a.n(pe),ve=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={selectedPage:""},e.onSelected=function(t){var a=t.currentTarget.getAttribute("href");e.setState({selectedPage:a})},e}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:he.a.WrapNavBar},r.a.createElement("h3",null,"MENU"),r.a.createElement("div",{className:he.a.item},r.a.createElement(m.b,{to:"/Monday",onClick:this.onSelected,activeClassName:he.a.active},"Monday")),r.a.createElement("div",{className:he.a.item},r.a.createElement(m.b,{to:"/tuesday",onClick:this.onSelected,activeClassName:he.a.active},"Tuesday")),r.a.createElement("div",{className:he.a.item},r.a.createElement(m.b,{to:"/wednesday",onClick:this.onSelected,activeClassName:he.a.active},"Wednesday")),r.a.createElement("div",{className:he.a.item},r.a.createElement(m.b,{to:"/thursday",onClick:this.onSelected,activeClassName:he.a.active},"Thursday")),r.a.createElement("div",{className:he.a.item},r.a.createElement(m.b,{to:"/friday",onClick:this.onSelected,activeClassName:he.a.active},"Friday")))}}]),a}(r.a.Component),fe=a(33),ke=a.n(fe),_e=a(57),Ee=a.n(_e),ge=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:Ee.a.StartPicture},"This is the start page")}}]),a}(r.a.Component),ye=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={isHidden:!1},e.onClickIsShow=function(){e.setState({isHidden:!0})},e.onClickIsHidden=function(){e.setState({isHidden:!1})},e.render=function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:ke.a.Wrap},!e.state.isHidden&&r.a.createElement("div",null,r.a.createElement(ve,null)),!e.state.isHidden&&r.a.createElement("button",{className:ke.a.b,onClick:e.onClickIsShow},"hide"),e.state.isHidden&&r.a.createElement("button",{className:ke.a.b2,onClick:e.onClickIsHidden},"show"),r.a.createElement(p.a,{path:"/Monday",render:function(){return r.a.createElement(me,null)}}),r.a.createElement(p.a,{path:"/tuesday",render:function(){return r.a.createElement(Q,null)}}),r.a.createElement(p.a,{path:"/wednesday",render:function(){return r.a.createElement(ge,null)}}),r.a.createElement(p.a,{path:"/thursday",render:function(){return r.a.createElement(ge,null)}}),r.a.createElement(p.a,{path:"/friday",render:function(){return r.a.createElement(ge,null)}})))},e}return a}(r.a.Component),Ne=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).render=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement(ye,null))},e}return a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[62,1,2]]]);
//# sourceMappingURL=main.a3610457.chunk.js.map