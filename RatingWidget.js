!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react/addons"));else if("function"==typeof define&&define.amd)define(["react/addons"],t);else{var n=t("object"==typeof exports?require("react/addons"):e.React);for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(this,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(1),e.exports.RatingWidget=n(4),e.exports.RatingStep=n(5)},function(e,t,n){var i=n(2);"string"==typeof i&&(i=[[e.id,i,""]]);n(3)(i,{})},function(e,t,n){t=e.exports=n(7)(),t.push([e.id,".ddm-rating-widget{display:inline-block;cursor:pointer}.ddm-rating-widget--disabled{cursor:default}.ddm-rating-widget__step{position:relative;display:inline-block;margin-right:2px;font-size:16px;width:16px;height:16px;line-height:16px}.ddm-rating-widget__step:before,.ddm-rating-widget__step:after{position:absolute;left:0;top:0;overflow:hidden;content:'\\2605'}.ddm-rating-widget__step:before{color:#FA9E49;z-index:10;width:0}.ddm-rating-widget__step:after{color:#9F9F9F;z-index:5}@media (max-width:736px){.ddm-rating-widget__step{font-size:27px;width:27px;height:27px;line-height:27px;margin-left:10px}.ddm-rating-widget__step:first-child{margin-left:0}}.ddm-rating-widget--large .ddm-rating-widget__step{font-size:27px;width:27px;height:27px;line-height:27px;margin-left:10px}.ddm-rating-widget--large .ddm-rating-widget__step:first-child{margin-left:0}.ddm-rating-widget__step--hover:before{color:#2354ac}.ddm-rating-widget__step--whole:before{width:100%}.ddm-rating-widget__step--half:before{width:50%}.ddm-rating-widget__step--ieFix{font-family:Wingdings}.ddm-rating-widget__step--ieFix:before,.ddm-rating-widget__step--ieFix:after{content:'\\00AB'}",""])},function(e){function t(e,t){for(var n=0;n<e.length;n++){var i=e[n],s=d[i.id];if(s){s.refs++;for(var a=0;a<s.parts.length;a++)s.parts[a](i.parts[a]);for(;a<i.parts.length;a++)s.parts.push(r(i.parts[a],t))}else{for(var o=[],a=0;a<i.parts.length;a++)o.push(r(i.parts[a],t));d[i.id]={id:i.id,refs:1,parts:o}}}}function n(e){for(var t=[],n={},i=0;i<e.length;i++){var r=e[i],s=r[0],a=r[1],o=r[2],d=r[3],p={css:a,media:o,sourceMap:d};n[s]?n[s].parts.push(p):t.push(n[s]={id:s,parts:[p]})}return t}function i(){var e=document.createElement("style"),t=f();return e.type="text/css",t.appendChild(e),e}function r(e,t){var n,r,s;if(t.singleton){var d=c++;n=u||(u=i()),r=a.bind(null,n,d,!1),s=a.bind(null,n,d,!0)}else n=i(),r=o.bind(null,n),s=function(){n.parentNode.removeChild(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else s()}}function s(e,t,n){var i=["/** >>"+t+" **/","/** "+t+"<< **/"],r=e.lastIndexOf(i[0]),s=n?i[0]+n+i[1]:"";if(e.lastIndexOf(i[0])>=0){var a=e.lastIndexOf(i[1])+i[1].length;return e.slice(0,r)+s+e.slice(a)}return e+s}function a(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=s(e.styleSheet.cssText,t,r);else{var a=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function o(e,t){var n=t.css,i=t.media,r=t.sourceMap;if(r&&"function"==typeof btoa)try{n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(r))+" */",n='@import url("data:stylesheet/css;base64,'+btoa(n)+'")'}catch(s){}if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},l=p(function(){return/msie 9\b/.test(window.navigator.userAgent.toLowerCase())}),f=p(function(){return document.head||document.getElementsByTagName("head")[0]}),u=null,c=0;e.exports=function(e,i){i=i||{},"undefined"==typeof i.singleton&&(i.singleton=l());var r=n(e);return t(r,i),function(e){for(var s=[],a=0;a<r.length;a++){var o=r[a],p=d[o.id];p.refs--,s.push(p)}if(e){var l=n(e);t(l,i)}for(var a=0;a<s.length;a++){var p=s[a];if(0===p.refs){for(var f=0;f<p.parts.length;f++)p.parts[f]();delete d[p.id]}}}}},function(e,t,n){var i=n(6),r=n(5),s=i.addons.classSet,a=function(){},o=n(8),d=i.createClass({displayName:"RatingWidget",propTypes:{size:i.PropTypes.number,onChange:i.PropTypes.func,disabled:i.PropTypes.bool,initialRating:i.PropTypes.number,halfRating:i.PropTypes.bool,hover:i.PropTypes.bool,className:i.PropTypes.string},getDefaultProps:function(){return{size:5,onChange:a,disabled:!1,initialRating:0,halfRating:!1,hover:!0,className:""}},getInitialState:function(){return{rating:this.props.initialRating,tempRating:null}},handleClick:function(e,t){this.props.disabled||(e=this.calcHalfRating(e,t),e===this.state.rating&&(e=0),this.setState({rating:e}),this.setState({tempRating:null}),this.props.onChange(e))},handleOnMouseMove:function(e,t){o||this.props.disabled||!this.props.hover||(e=this.calcHalfRating(e,t),this.setState({tempRating:e}))},handleOnMouseLeave:function(){this.setState({tempRating:null})},calcHalfRating:function(e,t){if(!this.props.halfRating)return e;var n=t.target,i=n.offsetWidth,r=i/2,s=n.getBoundingClientRect(),a=t.pageX-(s.left+document.body.scrollLeft);return r>=a&&(e-=.5),e},render:function(){var e=this.renderSteps(),t={"ddm-rating-widget":!0,"ddm-rating-widget--disabled":this.props.disabled};return t=s(t)+" "+this.props.className,i.createElement("div",{className:t,onMouseLeave:this.handleOnMouseLeave},e)},renderSteps:function(){for(var e=[],t=this.state.tempRating||this.state.rating,n=Math.round(t),s=Math.ceil(t),a=1;a<=this.props.size;a++){var o="empty";t>=a?o="whole":n==a&&n==s&&this.props.halfRating&&(o="half"),e.push(i.createElement(r,{step:a,type:o,temporaryRating:null!==this.state.tempRating,onClick:this.handleClick,onMouseMove:this.handleOnMouseMove,key:"rating-step-"+a}))}return e}});e.exports=d},function(e,t,n){var i=n(6),r=i.addons.classSet,s=function(){},a=i.createClass({displayName:"RatingStep",propTypes:{step:i.PropTypes.number,type:i.PropTypes.oneOf(["empty","half","whole"]),temporaryRating:i.PropTypes.bool,onClick:i.PropTypes.func,onMouseMove:i.PropTypes.func},getDefaultProps:function(){return{step:0,type:"empty",temporaryRating:!1,onClick:s,onMouseMove:s}},handleClick:function(e){this.props.onClick(this.props.step,e)},handleMouseMove:function(e){this.props.onMouseMove(this.props.step,e)},render:function(){var e=document.all&&!document.addEventListener,t={"ddm-rating-widget__step":!0,"ddm-rating-widget__step--ieFix":e,"ddm-rating-widget__step--hover":this.props.temporaryRating};return t["ddm-rating-widget__step--"+this.props.type]=!0,i.createElement("span",{className:r(t),onClick:this.handleClick,onMouseMove:this.handleMouseMove})}});e.exports=a},function(t){t.exports=e},function(e){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];e.push(n[2]?"@media "+n[2]+"{"+n[1]+"}":n[1])}return e.join("")},e}},function(e){e.exports=function(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}()}])});