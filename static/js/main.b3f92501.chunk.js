(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(n,t,e){n.exports=e(30)},22:function(n,t,e){},30:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(8),i=e.n(a),u=(e(22),e(3)),c=e(4),s=e(6),d=e(5),f=e(7),b=e(1),l=e(2);function p(){var n=Object(b.a)(["\n    from {\n        transform: rotate(","deg)}\n    }\n    to {\n        transform: rotate(","deg)}\n    }"]);return p=function(){return n},n}function h(){var n=Object(b.a)(["\n                    width:35%;\n                    transform-origin: 15%;\n                    transform: rotate(","deg);\n            "]);return h=function(){return n},n}function g(){var n=Object(b.a)(["\n                    width:45%;\n                    transform-origin: 12%;\n                    transform: rotate(","deg);\n            "]);return g=function(){return n},n}function m(){var n=Object(b.a)(["\n                    width:60%;\n                    transform-origin: 17%;\n                    transform: rotate(","deg);\n                    // animation: "," 60s linear 0s infinite;\n            "]);return m=function(){return n},n}function j(){var n=Object(b.a)(["\n            position: absolute;\n            top: 50%;\n            left: ",";\n            outline: ",";\n\n            ","\n            ","\n            ","\n        "]);return j=function(){return n},n}function v(){var n=Object(b.a)(["\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            width: 12px;\n            height: 12px;\n            border: 2px solid #fff;\n            background-color: #459cff;\n            border-radius: 100%;\n            margin-left: -6px;\n            margin-top: -9px;\n            z-index: 100;\n        "]);return v=function(){return n},n}function O(){var n=Object(b.a)(["\n            position: relative;\n            height: 100%;\n            width: 100%;\n            background-color: ",";\n            border-radius: 100%;\n        "]);return O=function(){return n},n}function w(){var n=Object(b.a)(["\n            position: relative;\n            box-sizing: border-box;\n            height: 100%;\n            width: 100%;\n            background-color: ",";\n            padding: ",";\n            border-radius: 100%;\n        "]);return w=function(){return n},n}function y(){var n=Object(b.a)(["\n        \theight: ",";\n            width: ",";\n        "]);return y=function(){return n},n}var k=l.b.div(y(),function(n){return n.width||"400px"},function(n){return n.width||"400px"}),x=l.b.div(w(),function(n){return n.borderColor?n.borderColor:"transparent"},function(n){return n.border?"5% 5% 5% 5%":"0"}),C=l.b.div(O(),function(n){return n.baseColor?n.baseColor:"black"}),E=l.b.div(v()),A=l.b.div(j(),function(n){return"second"===n.type?"40%":"45%"},function(n){return"second"===n.type?"2px solid #d81c7a":"2px solid #fff"},function(n){return"second"===n.type&&Object(l.a)(m(),function(n){return n.handAngle},function(n){return n.secondStartAngle&&H(n.secondStartAngle)})},function(n){return"minute"===n.type&&Object(l.a)(g(),function(n){return n.handAngle})},function(n){return"hour"===n.type&&Object(l.a)(h(),function(n){return n.handAngle})}),H=function(n){return Object(l.c)(p(),n,n+360)},S=function(){function n(){Object(u.a)(this,n)}return Object(c.a)(n,null,[{key:"getHandAngle",value:function(n){var t=0;switch(n.type){case"second":t=270+6*n.seconds;break;case"minute":t=270+6*n.minutes;break;case"hour":t=270+30*n.hours;break;default:t=0}return t}}]),n}(),D=function(n){function t(n){var e;return Object(u.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this,n))).state={},e}return Object(f.a)(t,n),Object(c.a)(t,[{key:"componentDidMount",value:function(){if("second"===this.props.type){var n=270+6*this.props.seconds;this.state.secondStartAngle||this.setState({secondStartAngle:n})}}},{key:"render",value:function(){return o.a.createElement(A,Object.assign({type:this.props.type,handAngle:S.getHandAngle(this.props)},this.state))}}]),t}(r.Component),M=function(n){function t(n){var e;Object(u.a)(this,t),e=Object(s.a)(this,Object(d.a)(t).call(this,n));var r=new Date;return e.state={seconds:r.getSeconds(),minutes:r.getMinutes(),hours:r.getHours()>12?r.getHours()-12:r.getHours()},e}return Object(f.a)(t,n),Object(c.a)(t,[{key:"componentDidMount",value:function(){var n=this;setInterval(function(){var t=new Date;n.setState({seconds:t.getSeconds(),minutes:t.getMinutes(),hours:t.getHours()>12?t.getHours()-12:t.getHours()})},1e3)}},{key:"render",value:function(){var n=this.props,t=n.width,e=n.border,r=n.borderColor,a=n.baseColor;return o.a.createElement(k,{width:t},o.a.createElement(x,{border:e,borderColor:r},o.a.createElement(C,{baseColor:a},o.a.createElement(E,null),o.a.createElement(D,Object.assign({type:"second"},this.state)),o.a.createElement(D,Object.assign({type:"minute"},this.state)),o.a.createElement(D,Object.assign({type:"hour"},this.state)))))}}]),t}(r.Component),z=function(n){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,n),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(M,{width:"300px",border:!0,borderColor:"#ff9e9e",baseColor:"#223480"}))}}]),t}(r.Component);i.a.render(o.a.createElement(z,null),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.b3f92501.chunk.js.map