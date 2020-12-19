(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,o){e.exports=o(31)},24:function(e,t,o){},31:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(14),c=o.n(a),l=(o(24),o(1)),s=o(2),i=o(3),u=o(7),m=o(6),d=o(8),h=o(9),p=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(u.a)(this,Object(m.a)(t).call(this,e))).setClockSize=function(e){e.preventDefault();var t=e.target.value+"px";o.setState({options:Object(l.a)({},o.state.options,{width:t})})},o.setCustomTime=function(e){var t="yes"===e.target.value;o.setState({options:Object(l.a)({},o.state.options,{useCustomTime:t})})},o.setBorderReq=function(e){var t="yes"===e.target.value;o.setState({options:Object(l.a)({},o.state.options,{border:t})})},o.setColor=function(e){e.preventDefault(),o.setState({options:Object(l.a)({},o.state.options,Object(h.a)({},e.target.name,"#"+e.target.value))})},o.setHandColor=function(e){e.preventDefault();var t=Object(l.a)({},o.state.options.handColors);t[e.target.name]="#"+e.target.value,o.setState({options:Object(l.a)({},o.state.options,{handColors:t})})},o.buildClock=function(e){e.preventDefault(),e.stopPropagation(),o.props.customizeClock(o.state.options)},o.randomClock=function(e){e.preventDefault(),e.stopPropagation();var t=o.getRandomColor(),n=o.getRandomColor(),r=o.getRandomColor(),a=o.getRandomColor(),c={second:o.getRandomColor(),minute:o.getRandomColor(),hour:o.getRandomColor()};o.setState({options:Object(l.a)({},o.state.options,{borderColor:n,baseColor:t,centerColor:r,centerBorderColor:a,handColors:c})},function(){return o.buildClock(e)})},o.state={options:o.props.defaultOptions},o}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){return r.a.createElement("form",{className:"col-12 form"},r.a.createElement("div",{className:"row col-12"},r.a.createElement("h4",null,r.a.createElement("i",null,"Clock Options"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"clock-size"},"Clock size (px): ",this.state.options.width),r.a.createElement("input",{type:"range",min:"50",max:"500",className:"form-control-range",id:"clock-size",onChange:this.setClockSize})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"border-req-radios"},"Use Custom Time?"),r.a.createElement("div",{className:"form-check",name:"custom-time-radios"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"custom-time-yes",id:"custom-time-yes",value:"yes",checked:!0===this.state.options.useCustomTime,onChange:this.setCustomTime}),r.a.createElement("label",{className:"form-check-label",htmlFor:"custom-time-yes"},"Yes")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"custom-time-no",id:"custom-time-no",value:"no",checked:!1===this.state.options.useCustomTime,onChange:this.setCustomTime}),r.a.createElement("label",{className:"form-check-label",htmlFor:"custom-time-no"},"No"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"border-req-radios"},"Border Required?"),r.a.createElement("div",{className:"form-check",name:"border-req-radios"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"border-req-yes",id:"border-req-yes",value:"yes",checked:!0===this.state.options.border,onChange:this.setBorderReq}),r.a.createElement("label",{className:"form-check-label",htmlFor:"border-req-yes"},"Yes")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"bored-req-no",id:"bored-req-no",value:"no",checked:!1===this.state.options.border,onChange:this.setBorderReq}),r.a.createElement("label",{className:"form-check-label",htmlFor:"bored-req-no"},"No")))),r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"clock-border-color"},"Clock border color"),r.a.createElement("input",{type:"input",name:"borderColor",className:"form-control",id:"clock-border-color",maxLength:"6",placeholder:"2e2e2e",onChange:this.setColor})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"clock-base-color"},"Clock base color"),r.a.createElement("input",{type:"input",name:"baseColor",className:"form-control",id:"clock-base-color",maxLength:"6",placeholder:"17a2b8",onChange:this.setColor})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"clock-center-color"},"Clock center color"),r.a.createElement("input",{type:"input",name:"centerColor",className:"form-control",id:"clock-center-color",maxLength:"6",placeholder:"459cff",onChange:this.setColor})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"clock-center-border-color"},"Clock center border color"),r.a.createElement("input",{type:"input",name:"centerBorderColor",className:"form-control",id:"clock-center-border-color",maxLength:"6",placeholder:"fff",onChange:this.setColor}))),r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"second-hand-color"},"Second Hand color"),r.a.createElement("input",{type:"input",name:"second",className:"form-control",id:"second-hand-color",maxLength:"6",placeholder:"d81c7a",onChange:this.setHandColor})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"minute-hand-color"},"Minute Hand color"),r.a.createElement("input",{type:"input",name:"minute",className:"form-control",id:"minute-hand-color",maxLength:"6",placeholder:"fff",onChange:this.setHandColor})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"hour-hand-color"},"Hour Hand color"),r.a.createElement("input",{type:"input",name:"hour",className:"form-control",id:"hour-hand-color",maxLength:"6",placeholder:"fff",onChange:this.setHandColor})))),r.a.createElement("div",{className:"row col-12 d-flex justify-content-center"},r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.buildClock},"Build Clock!"),"\xa0",r.a.createElement("button",{type:"submit",className:"btn btn-warning",onClick:this.randomClock},"Surprise Me!")))}}]),t}(n.Component),f=o(4),b=o(5);function C(){var e=Object(f.a)(["\n        position: absolute;\n        width: 100%\n        height: 100%;\n        display: flex;\n        align-items: center;\n\n        transform: rotate(","deg);\n        transition: ",";\n    "]);return C=function(){return e},e}function v(){var e=Object(f.a)(["\n                    width: 35%;\n                    margin-left: 45%;\n                    background-color: ",";\n            "]);return v=function(){return e},e}function g(){var e=Object(f.a)(["\n                    width: 45%;\n                    margin-left: 45%;\n                    background-color: ",";\n            "]);return g=function(){return e},e}function E(){var e=Object(f.a)(["\n                    width: 60%;\n                    margin-left: 40%;\n                    background-color: ",";\n            "]);return E=function(){return e},e}function k(){var e=Object(f.a)(["\n        box-sizing: border-box;\n        height: 1.5%;\n        min-height: 2px;\n        max-height: 6px;\n\n            ","\n            ","\n            ","\n        "]);return k=function(){return e},e}function O(){var e=Object(f.a)(["\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            width: 12px;\n            height: 12px;\n            border: 2px solid ",";;\n            background-color: ",";\n            border-radius: 100%;\n            margin-left: -6px;\n            margin-top: -6px;\n            z-index: 100;\n        "]);return O=function(){return e},e}function y(){var e=Object(f.a)(["\n            position: relative;\n            height: 100%;\n            width: 100%;\n            background-color: ",";\n            border-radius: 100%;\n        "]);return y=function(){return e},e}function N(){var e=Object(f.a)(["\n            position: relative;\n            box-sizing: border-box;\n            height: 100%;\n            width: 100%;\n            background-color: ",";\n            padding: ",";\n            border-radius: 100%;\n        "]);return N=function(){return e},e}function j(){var e=Object(f.a)(["\n            height: ",";\n            width: ",";\n        "]);return j=function(){return e},e}var w=b.b.div(j(),function(e){return e.width||"400px"},function(e){return e.width||"400px"}),x=b.b.div(N(),function(e){return e.borderColor?e.borderColor:"transparent"},function(e){return e.border?"5%":"0"}),S=b.b.div(y(),function(e){return e.baseColor?e.baseColor:"black"}),H=b.b.div(O(),function(e){return e.centerBorderColor?e.centerBorderColor:"#fff"},function(e){return e.centerColor?e.centerColor:"#459cff"}),B=b.b.div(k(),function(e){return"second"===e.type&&Object(b.a)(E(),function(e){return e.handColors&&e.handColors.second?e.handColors.second:"#d81c7a"})},function(e){return"minute"===e.type&&Object(b.a)(g(),function(e){return e.handColors&&e.handColors.minute?e.handColors.minute:"#fff"})},function(e){return"hour"===e.type&&Object(b.a)(v(),function(e){return e.handColors&&e.handColors.hour?e.handColors.hour:"#fff"})}),T=b.b.div(C(),function(e){return e.handAngle},function(e){return e.handAngle>270&&"transform 250ms ease-in-out"}),F=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,null,[{key:"getHandAngle",value:function(e){var t=0;switch(e.type){case"second":t=270+6*e.seconds;break;case"minute":t=270+6*e.minutes;break;case"hour":t=270+30*e.hours;break;default:t=0}return t}}]),e}(),q=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={},o}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(T,{handAngle:F.getHandAngle(this.props)},r.a.createElement(B,{type:this.props.type,handColors:this.props.handColors}))}}]),t}(n.Component),z=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(u.a)(this,Object(m.a)(t).call(this,e))).initClock=function(){var e=new Date;return{seconds:e.getSeconds(),minutes:e.getMinutes(),hours:e.getHours()>12?e.getHours()-12:e.getHours()}},o.setupInterval=function(){o.interval=setInterval(function(){var e=new Date;o.setState({seconds:e.getSeconds(),minutes:e.getMinutes(),hours:e.getHours()>12?e.getHours()-12:e.getHours()})},1e3)},o.state=o.initClock(),o}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setupInterval()}},{key:"componentDidUpdate",value:function(e){e.useCustomTime!==this.props.useCustomTime&&(this.props.useCustomTime?(clearInterval(this.interval),this.setState({seconds:void 0,minutes:void 0,hours:void 0})):this.setupInterval())}},{key:"render",value:function(){var e=this.props,t=e.width,o=e.border,n=e.borderColor,a=e.baseColor,c=e.centerColor,l=e.centerBorderColor,s=e.handColors,i=this.props.useCustomTime?this.props:this.state,u=i.seconds,m=i.minutes,d=i.hours;return r.a.createElement(w,{width:t},r.a.createElement(x,{border:o,borderColor:n},r.a.createElement(S,{baseColor:a},r.a.createElement(H,{centerColor:c,centerBorderColor:l}),r.a.createElement(q,{type:"second",seconds:u,handColors:s}),r.a.createElement(q,{type:"minute",minutes:m,handColors:s}),r.a.createElement(q,{type:"hour",hours:d,handColors:s}))))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}}]),t}(n.Component),D=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(u.a)(this,Object(m.a)(t).call(this,e))).interval=null,o.updateClock=function(){var e=(new Date).toLocaleString("en-US",{timeZone:"Australia/Brisbane"}),t=new Date(e);o.setState({options:Object(l.a)({},o.state.options,{seconds:t.getSeconds(),minutes:t.getMinutes(),hours:t.getHours()})})},o.customizeClock=function(e){var t=e;t.useCustomTime?o.interval=setInterval(o.updateClock,1e3):(clearInterval(o.interval),delete t.seconds,delete t.minutes,delete t.hours),o.setState({options:Object(l.a)({},t)})},o.state={options:{useCustomTime:!1,width:"300px",border:!0,borderColor:"#2e2e2e",baseColor:"#17a2b8",centerColor:"#459cff",centerBorderColor:"#fff",handColors:{second:"#d81c7a",minute:"#fff",hour:"#fff"}}},o}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement(p,{defaultOptions:this.state.options,customizeClock:this.customizeClock})),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-6 border-right"},r.a.createElement("h4",null,r.a.createElement("i",null,"Options")),r.a.createElement("textarea",{className:"form-control",id:"selected-options",rows:"12",readOnly:!0,value:JSON.stringify(this.state.options,null,2)})),r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",null,r.a.createElement("i",null,"Preview")),r.a.createElement(z,this.state.options),this.state.options.useCustomTime?r.a.createElement("p",{style:{paddingTop:"5px",paddingLeft:"20px"}},r.a.createElement("i",null,"Timezone: Australia/Brisbane")):null)))}}]),t}(n.Component);c.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.918759a0.chunk.js.map