(function(t){function a(a){for(var n,s,c=a[0],r=a[1],i=a[2],u=0,h=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&h.push(l[s][0]),l[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);p&&p(a);while(h.length)h.shift()();return o.push.apply(o,i||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,c=1;c<e.length;c++){var r=e[c];0!==l[r]&&(n=!1)}n&&(o.splice(a--,1),t=s(s.s=e[0]))}return t}var n={},l={app:0},o=[];function s(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)s.d(e,n,function(a){return t[a]}.bind(null,n));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/nts1-web-controller/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=a,c=c.slice();for(var i=0;i<c.length;i++)a(c[i]);var p=r;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"00ef":function(t,a,e){"use strict";var n=e("c2c8"),l=e.n(n);l.a},"3a7d":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"lHh Lpr lFf"}},[e("q-page-container",[e("Main")],1)],1)},o=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("q-toolbar",{staticClass:"bg-grey-9 text-white shadow-2"},[e("span",{staticClass:"app-name"},[t._v("Nu:Tekt NTS-1 Web Controller")]),e("q-space"),e("q-tabs",{staticClass:"tabs",attrs:{align:"justify","indicator-color":"white"},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab",{attrs:{name:"knobs",icon:"fiber_smart_record",label:"Knobs"}}),e("q-tab",{attrs:{name:"keyboards",icon:"straighten",label:"Keyboard"}}),e("q-tab",{attrs:{name:"settings",icon:"settings_input_svideo",label:"Settings"}})],1)],1),e("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"knobs"}},[e("div",{staticClass:"row",staticStyle:{"margin-bottom":"10px"}},t._l(8,(function(a,n){return e("span",{key:n},[e("store-button",{attrs:{number:n},on:{load:t.handleLoadPatch,save:t.handleSavePatch}})],1)})),0),e("div",{staticClass:"row q-col-gutter-sm"},[e("div",{staticClass:"col channel"},[e("q-card",[e("q-card-section",{staticClass:"bg-grey-8 q-pa-sm text-white"},[e("div",{staticClass:"text-h6"},[t._v("OSC")])]),e("div",[e("q-select",{attrs:{options:t.types.osc},on:{input:function(a){return t.handleControlChange(t.params.osc.type.cc,a.value)}},model:{value:t.tmpPatch.osc.type,callback:function(a){t.$set(t.tmpPatch.osc,"type",a)},expression:"tmpPatch.osc.type"}})],1),e("div",{staticClass:"knobs text-center"},[e("knob",{attrs:{params:t.params.osc.shape,value:t.tmpPatch.osc.shape},on:{input:function(a){t.tmpPatch.osc.shape=a},handleControlChange:t.handleControlChange}}),e("knob",{attrs:{params:t.params.osc.alt,value:t.tmpPatch.osc.alt},on:{input:function(a){t.tmpPatch.osc.alt=a},handleControlChange:t.handleControlChange}}),e("knob",{attrs:{params:t.params.osc.rate,value:t.tmpPatch.osc.rate},on:{input:function(a){t.tmpPatch.osc.rate=a},handleControlChange:t.handleControlChange}}),e("knob",{attrs:{params:t.params.osc.depth,value:t.tmpPatch.osc.depth},on:{input:function(a){t.tmpPatch.osc.depth=a},handleControlChange:t.handleControlChange}})],1)],1)],1),e("div",{staticClass:"col channel"},[e("q-card",[e("q-card-section",{staticClass:"bg-grey-8 q-pa-sm text-white"},[e("div",{staticClass:"text-h6"},[t._v("Filter")])]),e("div",[e("q-select",{attrs:{options:t.types.filter},on:{input:function(a){return t.handleControlChange(t.params.filter.type.cc,a.value)}},model:{value:t.tmpPatch.filter.type,callback:function(a){t.$set(t.tmpPatch.filter,"type",a)},expression:"tmpPatch.filter.type"}})],1),e("div",{staticClass:"knobs text-center"},[e("knob",{attrs:{params:t.params.filter.cutoff,value:t.tmpPatch.filter.cutoff},on:{input:function(a){t.tmpPatch.filter.cutoff=a},handleControlChange:t.handleControlChange}}),e("knob",{attrs:{params:t.params.filter.res,value:t.tmpPatch.filter.res},on:{input:function(a){t.tmpPatch.filter.res=a},handleControlChange:t.handleControlChange}}),e("knob",{attrs:{params:t.params.filter.rate,value:t.tmpPatch.filter.rate},on:{input:function(a){t.tmpPatch.filter.rate=a},handleControlChange:t.handleControlChange}}),e("knob",{attrs:{params:t.params.filter.depth,value:t.tmpPatch.filter.depth},on:{input:function(a){t.tmpPatch.filter.depth=a},handleControlChange:t.handleControlChange}})],1)],1)],1),e("div",{staticClass:"col channel"},[e("q-card",[e("q-card-section",{staticClass:"bg-grey-8 q-pa-sm text-white"},[e("div",{staticClass:"text-h6"},[t._v("EG")])]),e("div",[e("q-select",{attrs:{options:t.types.eg},on:{input:function(a){return t.handleControlChange(t.params.eg.type.cc,a.value)}},model:{value:t.tmpPatch.eg.type,callback:function(a){t.$set(t.tmpPatch.eg,"type",a)},expression:"tmpPatch.eg.type"}})],1),e("div",{staticClass:"knobs text-center"},[e("knob",{attrs:{params:t.params.eg.attack,value:t.tmpPatch.eg.attack},on:{input:function(a){t.tmpPatch.eg.attack=a},handleControlChange:t.handleControlChange}}),e("knob",{attrs:{params:t.params.eg.release,value:t.tmpPatch.eg.release},on:{input:function(a){t.tmpPatch.eg.release=a},handleControlChange:t.handleControlChange}}),e("knob",{attrs:{params:t.params.eg.rate,value:t.tmpPatch.eg.rate},on:{input:function(a){t.tmpPatch.eg.rate=a},handleControlChange:t.handleControlChange}}),e("knob",{attrs:{params:t.params.eg.depth,value:t.tmpPatch.eg.depth},on:{input:function(a){t.tmpPatch.eg.depth=a},handleControlChange:t.handleControlChange}})],1)],1)],1),e("div",{staticClass:"col channel"},[e("q-card",[e("q-card-section",{staticClass:"bg-grey-8 q-pa-sm text-white"},[e("div",{staticClass:"text-h6"},[t._v("Modulation")])]),e("div",[e("q-select",{attrs:{options:t.types.mod},on:{input:function(a){return t.handleControlChange(t.params.mod.type.cc,a.value)}},model:{value:t.tmpPatch.mod.type,callback:function(a){t.$set(t.tmpPatch.mod,"type",a)},expression:"tmpPatch.mod.type"}})],1),e("div",{staticClass:"knobs text-center"},[e("knob",{attrs:{params:t.params.mod.time,value:t.tmpPatch.mod.time},on:{input:function(a){t.tmpPatch.mod.time=a},handleControlChange:t.handleControlChange}}),e("knob",{attrs:{params:t.params.mod.depth,value:t.tmpPatch.mod.depth},on:{input:function(a){t.tmpPatch.mod.depth=a},handleControlChange:t.handleControlChange}})],1)],1)],1),e("div",{staticClass:"col channel"},[e("q-card",[e("q-card-section",{staticClass:"bg-grey-8 q-pa-sm text-white"},[e("div",{staticClass:"text-h6"},[t._v("Delay")])]),e("div",[e("q-select",{attrs:{options:t.types.delay},on:{input:function(a){return t.handleControlChange(t.params.delay.type.cc,a.value)}},model:{value:t.tmpPatch.delay.type,callback:function(a){t.$set(t.tmpPatch.delay,"type",a)},expression:"tmpPatch.delay.type"}})],1),e("div",{staticClass:"knobs text-center"},[e("knob",{attrs:{params:t.params.delay.time,value:t.tmpPatch.delay.time},on:{input:function(a){t.tmpPatch.delay.time=a},handleControlChange:t.handleControlChange}}),e("knob",{attrs:{params:t.params.delay.depth,value:t.tmpPatch.delay.depth},on:{input:function(a){t.tmpPatch.delay.depth=a},handleControlChange:t.handleControlChange}}),e("knob",{attrs:{params:t.params.delay.mix,value:t.tmpPatch.delay.mix},on:{input:function(a){t.tmpPatch.delay.mix=a},handleControlChange:t.handleControlChange}})],1)],1)],1),e("div",{staticClass:"col channel"},[e("q-card",[e("q-card-section",{staticClass:"bg-grey-8 q-pa-sm text-white"},[e("div",{staticClass:"text-h6"},[t._v("Reverb")])]),e("div",[e("q-select",{attrs:{options:t.types.reverb},on:{input:function(a){return t.handleControlChange(t.params.reverb.type.cc,a.value)}},model:{value:t.tmpPatch.reverb.type,callback:function(a){t.$set(t.tmpPatch.reverb,"type",a)},expression:"tmpPatch.reverb.type"}})],1),e("div",{staticClass:"knobs text-center"},[e("knob",{attrs:{params:t.params.reverb.time,value:t.tmpPatch.reverb.time},on:{input:function(a){t.tmpPatch.reverb.time=a},handleControlChange:t.handleControlChange}}),e("knob",{attrs:{params:t.params.reverb.depth,value:t.tmpPatch.reverb.depth},on:{input:function(a){t.tmpPatch.reverb.depth=a},handleControlChange:t.handleControlChange}}),e("knob",{attrs:{params:t.params.reverb.mix,value:t.tmpPatch.reverb.mix},on:{input:function(a){t.tmpPatch.reverb.mix=a},handleControlChange:t.handleControlChange}})],1)],1)],1),e("div",{staticClass:"col channel"},[e("q-card",[e("q-card-section",{staticClass:"bg-grey-8 q-pa-sm text-white"},[e("div",{staticClass:"text-h6"},[t._v("Arpeggiator")])]),e("div",[e("q-select",{attrs:{options:t.types.arp},on:{input:function(a){return t.handleControlChange(t.params.arp.type.cc,a.value)}},model:{value:t.tmpPatch.arp.type,callback:function(a){t.$set(t.tmpPatch.arp,"type",a)},expression:"tmpPatch.arp.type"}})],1),e("div",[e("q-select",{attrs:{options:t.types.scale},on:{input:function(a){return t.handleControlChange(t.params.arp.scale.cc,a.value)}},model:{value:t.tmpPatch.arp.scale,callback:function(a){t.$set(t.tmpPatch.arp,"scale",a)},expression:"tmpPatch.arp.scale"}})],1),e("div",{staticClass:"knobs text-center"},[e("knob",{attrs:{params:t.params.arp.length,value:t.tmpPatch.arp.length},on:{input:function(a){t.tmpPatch.arp.length=a},handleControlChange:t.handleControlChange}})],1)],1)],1)])]),e("q-tab-panel",{attrs:{name:"keyboards"}},[e("keyboard",{attrs:{arpSwitch:t.arpSwitch,holdSwitch:t.holdSwitch,octave:t.octave},on:{inputArp:function(a){t.arpSwitch=a},inputHold:function(a){t.holdSwitch=a},handleOctave:t.handleOctave,noteOn:t.noteOn,noteOff:t.noteOff,handleControlChange:t.handleControlChange}})],1),e("q-tab-panel",{attrs:{name:"settings"}},[e("h5",[t._v("Output Setting")]),e("div",{staticClass:"row justify-start q-gutter-sm"},[e("div",{staticClass:"col-3"},[e("q-select",{attrs:{outlined:"",options:t.outputs,"option-value":"id","option-label":"name","emit-value":"","map-options":"",label:"Output Device"},model:{value:t.outputId,callback:function(a){t.outputId=a},expression:"outputId"}})],1),e("div",{staticClass:"col-3"},[e("q-select",{attrs:{outlined:"",options:t.midiChannelOptions,label:"MIDI Channel"},model:{value:t.outputMidiChannel,callback:function(a){t.outputMidiChannel=a},expression:"outputMidiChannel"}})],1)])])],1)],1)},c=[],r=(e("159b"),e("c62b")),i=e.n(r),p=e("2ef0"),u=e.n(p),h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"knob"},[e("q-knob",{staticClass:"q-ma-xs",attrs:{min:t.params.min,max:t.params.max,"show-value":"",size:"60px",thickness:.22,color:"cyan-6","track-color":"grey-3"},model:{value:t._value,callback:function(a){t._value=a},expression:"_value"}}),e("div",{staticClass:"label-knob"},[t._v(t._s(t.params.label))])],1)},d=[],m=(e("a9e3"),{name:"Knob",props:{params:{type:Object,require:!0,default:function(){return{}}},value:{type:Number,require:!0,default:0}},data:function(){return{}},computed:{_value:{get:function(){return this.value},set:function(t){this.value!==t&&(this.$emit("input",t),this.$emit("handleControlChange",this.params.cc,t))}}}}),b=m,v=(e("aa5b"),e("2877")),f=Object(v["a"])(b,h,d,!1,null,null,null),C=f.exports,g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-btn-dropdown",{staticClass:"store-btn",attrs:{split:"",color:"cyan-8",label:t.label},on:{click:t.load}},[e("q-list",[e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:t.save}},[e("q-item-section",[e("q-item-label",[t._v("Save")])],1)],1)],1)],1)},y=[],k={name:"StoreButton",props:{number:{type:Number,require:!0,default:1}},computed:{label:function(){return"Patch-".concat(this.number+1)}},methods:{load:function(){this.$emit("load",this.number)},save:function(){this.$emit("save",this.number)}}},P=k,x=(e("00ef"),Object(v["a"])(P,g,y,!1,null,null,null)),w=x.exports,O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row q-pa-md"},[e("div",{staticClass:"col"},[e("div",[e("label",[t._v(" Octave: "),e("q-badge",{attrs:{color:"grey-9"}},[t._v(t._s(t.octave))])],1)]),e("q-btn",{staticStyle:{width:"120px",margin:"0 10px 0 0"},attrs:{color:"primary",icon:"keyboard_arrow_left",label:"Down"},on:{click:t.handleOctaveDown}}),e("q-btn",{staticStyle:{width:"120px"},attrs:{color:"primary","icon-right":"keyboard_arrow_right",label:"Up"},on:{click:t.handleOctaveUp}})],1),e("div",{staticClass:"col text-right"},[t._m(0),e("q-toggle",{model:{value:t._holdSwitch,callback:function(a){t._holdSwitch=a},expression:"_holdSwitch"}})],1)]),e("div",{staticClass:"piano",on:{mousedown:t.handleNoteOn,mouseup:t.handleNoteOff,touchstart:t.handleNoteOn,touchend:t.handleNoteOff}},[e("span",{staticClass:"key",attrs:{"data-note":"60"}}),e("span",{staticClass:"key black-key",attrs:{"data-note":"61"}}),e("span",{staticClass:"key",attrs:{"data-note":"62"}}),e("span",{staticClass:"key black-key",attrs:{"data-note":"63"}}),e("span",{staticClass:"key",attrs:{"data-note":"64"}}),e("span",{staticClass:"key",attrs:{"data-note":"65"}}),e("span",{staticClass:"key black-key",attrs:{"data-note":"66"}}),e("span",{staticClass:"key",attrs:{"data-note":"67"}}),e("span",{staticClass:"key black-key",attrs:{"data-note":"68"}}),e("span",{staticClass:"key",attrs:{"data-note":"69"}}),e("span",{staticClass:"key black-key",attrs:{"data-note":"70"}}),e("span",{staticClass:"key",attrs:{"data-note":"71"}}),e("span",{staticClass:"key",attrs:{"data-note":"72"}}),e("span",{staticClass:"key black-key",attrs:{"data-note":"73"}}),e("span",{staticClass:"key",attrs:{"data-note":"74"}}),e("span",{staticClass:"key black-key",attrs:{"data-note":"75"}}),e("span",{staticClass:"key",attrs:{"data-note":"76"}}),e("span",{staticClass:"key",attrs:{"data-note":"77"}}),e("span",{staticClass:"key black-key",attrs:{"data-note":"78"}}),e("span",{staticClass:"key",attrs:{"data-note":"79"}}),e("span",{staticClass:"key black-key",attrs:{"data-note":"80"}}),e("span",{staticClass:"key",attrs:{"data-note":"81"}}),e("span",{staticClass:"key black-key",attrs:{"data-note":"82"}}),e("span",{staticClass:"key",attrs:{"data-note":"83"}})])])},S=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("label",[t._v("Hold")])])}],q={name:"Keyboard",props:{holdSwitch:{type:Boolean,require:!0,default:!1},arpSwitch:{type:Boolean,require:!0,default:!1},octave:{type:Number,require:!0,default:0}},computed:{_holdSwitch:{get:function(){return this.holdSwitch},set:function(t){this.holdSwitch!==t&&this.$emit("inputHold",t)}},_arpSwitch:{get:function(){return this.arpSwitch},set:function(t){this.arpSwitch!==t&&this.$emit("inputArp",t)}},_octave:{get:function(){return this.octave}}},methods:{handleOctaveUp:function(){this.octave<5&&this.$emit("handleOctave",this.octave+1)},handleOctaveDown:function(){this.octave>-5&&this.$emit("handleOctave",this.octave-1)},handleNoteOn:function(t){var a=12*this.octave,e=Number(t.target.dataset.note)+a;this.$emit("noteOn",e)},handleNoteOff:function(){this.$emit("noteOff")}}},_=q,Q=(e("681b"),Object(v["a"])(_,O,S,!1,null,null,null)),M=Q.exports,D={osc:{type:{cc:53},shape:{min:0,max:127,step:1,label:"Shape",cc:54},alt:{min:0,max:127,step:1,label:"Alternate",cc:55},rate:{min:0,max:127,step:1,label:"LFO Rate",cc:24},depth:{min:0,max:127,step:1,label:"LFO Depth",cc:26}},filter:{type:{cc:42},cutoff:{min:0,max:127,step:1,label:"Cut Off",cc:43},res:{min:0,max:127,step:1,label:"Resonance",cc:44},depth:{min:0,max:127,step:1,label:"Sweep Depth",cc:45},rate:{min:0,max:127,step:1,label:"Sweep Rate",cc:46}},eg:{type:{cc:14},attack:{min:0,max:127,step:1,label:"Attack",cc:16},release:{min:0,max:127,step:1,label:"Release",cc:19},depth:{min:0,max:127,step:1,label:"Trem. Depth",cc:20},rate:{min:0,max:127,step:1,label:"Trem. Rate",cc:21}},mod:{type:{cc:88},time:{min:0,max:127,step:1,label:"Time",cc:28},depth:{min:0,max:127,step:1,label:"Depth",cc:29}},delay:{type:{cc:89},time:{min:0,max:127,step:1,label:"Time",cc:30},depth:{min:0,max:127,step:1,label:"Depth",cc:31},mix:{min:0,max:127,step:1,label:"Mix",cc:33}},reverb:{type:{cc:90},time:{min:0,max:127,step:1,label:"Time",cc:34},depth:{min:0,max:127,step:1,label:"Depth",cc:35},mix:{min:0,max:127,step:1,label:"Mix",cc:36}},arp:{type:{cc:117},scale:{cc:118},length:{min:0,max:127,step:1,label:"Length",cc:119}}},I={osc:[{value:0,label:"Sawtooth"},{value:31,label:"Triangle"},{value:62,label:"Square"},{value:93,label:"VPN"},{value:127,label:"USER01"}],filter:[{value:0,label:"LowPass 2p"},{value:21,label:"LowPass 4p"},{value:42,label:"BandPass 2p"},{value:63,label:"BandPass 4p"},{value:84,label:"HightPass 2p"},{value:105,label:"HightPass 4p"},{value:127,label:"Off"}],eg:[{value:0,label:"ADSR"},{value:31,label:"AHR"},{value:62,label:"AR"},{value:93,label:"AR Loop"},{value:127,label:"Open"}],mod:[{value:0,label:"Off"},{value:25,label:"Chorus"},{value:50,label:"Ensemble"},{value:75,label:"Phaser"},{value:100,label:"Flanger"},{value:127,label:"Random"}],delay:[{value:0,label:"Off"},{value:25,label:"Stereo"},{value:50,label:"Mono"},{value:75,label:"Ping Pong"},{value:100,label:"Hight Pass"},{value:127,label:"Tape"}],reverb:[{value:0,label:"Off"},{value:25,label:"Hall"},{value:50,label:"Plate"},{value:75,label:"Space"},{value:100,label:"Riser"},{value:127,label:"Submarine"}],arp:[{value:0,label:"Up"},{value:14,label:"Down"},{value:28,label:"Up-Down"},{value:42,label:"Down-Up"},{value:56,label:"Converge"},{value:70,label:"Diverge"},{value:84,label:"Conv.-Div."},{value:98,label:"Div.-Conv."},{value:112,label:"Random"},{value:127,label:"Stchastic"}],scale:[{value:0,label:"Octave"},{value:25,label:"Major Triad"},{value:50,label:"Major Suspended"},{value:75,label:"Majaor Augumented"},{value:100,label:"Minor Triad"},{value:127,label:"Minor Diminished"}]},$=["all","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],N=(e("b0c0"),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"localStorage",a=window[t];try{var e="__storage_test__";return a.setItem(e,e),a.removeItem(e),!0}catch(n){return n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&0!==a.length}}),T={name:"Main",components:{Knob:C,StoreButton:w,Keyboard:M},data:function(){return{holdSwitch:!0,arpSwitch:!1,octave:0,params:D,types:I,midiChannelOptions:$,tab:"knobs",outputs:[],output:null,outputId:-220173338,inputs:[],inputId:null,outputMidiChannel:"all",inputMidiChannel:"all",patches:[],tmpPatch:{osc:{type:{value:0,label:"Sawtooth"},shape:1,alt:1,rate:1,depth:1},filter:{type:{value:0,label:"Low Pass 2"},cutoff:1,res:1,rate:1,depth:1},eg:{type:{value:0,label:"ADSR"},attack:1,release:1,rate:1,depth:1},mod:{type:{value:0,label:"Off"},time:1,depth:1},delay:{type:{value:0,label:"Off"},time:1,depth:1,mix:1},reverb:{type:{value:0,label:"Off"},time:1,depth:1,mix:1},arp:{type:{value:0,label:"Up"},scale:{value:0,label:"Octave"},length:127}}}},created:function(){var t=this;i.a.enable((function(a){a?console.log("MIDI could not be enabled.",a):(console.log("WebMIDI ebabled!"),t.outputs=i.a.outputs,t.inputs=i.a.inputs)})),this.initStorage()},methods:{handleOctave:function(t){this.octave=t},noteOn:function(t){var a=i.a.getOutputById(this.outputId);a.playNote(t,this.outputMidiChannel)},noteOff:function(){var t=i.a.getOutputById(this.outputId);if(!this.holdSwitch)for(var a=0;a<128;a++)t.stopNote(a,this.outputMidiChannel)},handleControlChange:function(t,a){var e=i.a.getOutputById(this.outputId);e.sendControlChange(t,a,this.outputMidiChannel)},initStorage:function(){var t=this.tmpPatch;this.patches[0]=t,N&&void 0==localStorage.patches&&localStorage.setItem("patches",JSON.stringify(this.patches))},handleSavePatch:function(t){if(N()){var a=this.tmpPatch;this.patches[t]=a,localStorage.setItem("patches",JSON.stringify(this.patches))}},handleLoadPatch:function(t){if(N()){var a=JSON.parse(localStorage.getItem("patches"));a[t]?(this.tmpPatch=a[t],this.sendPatch()):console.log("Empty!")}},sendPatch:function(){var t=this;u.a.forEach(this.tmpPatch,(function(a,e){var n=e;"arp"!==e?u.a.forEach(t.tmpPatch[e],(function(a,e){var l=t.params[n][e]["cc"];"type"===e?t.handleControlChange(l,a.value):t.handleControlChange(l,a)})):(t.handleControlChange(117,t.tmpPatch.arp.type.value),t.handleControlChange(118,t.tmpPatch.arp.scale.value),t.handleControlChange(119,t.tmpPatch.arp.length))}))}}},j=T,E=(e("c266"),Object(v["a"])(j,s,c,!1,null,null,null)),R=E.exports,A={name:"App",components:{Main:R}},B=A,L=Object(v["a"])(B,l,o,!1,null,null,null),H=L.exports,U=e("9483");Object(U["a"])("".concat("/nts1-web-controller/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});e("a4ac"),e("e54f");var F=e("b05d"),K=e("7f67"),J=e("4d5a"),G=e("e359"),W=e("9404"),z=e("09e3"),V=e("9989"),X=e("65c6"),Y=e("6ac5"),Z=e("9c40"),tt=e("0016"),at=e("1c1c"),et=e("66e5"),nt=e("4074"),lt=e("0170"),ot=e("f09f"),st=e("a370"),ct=e("4b7e"),rt=e("3845"),it=e("ddd8"),pt=e("429b"),ut=e("7460"),ht=e("adad"),dt=e("823b"),mt=e("2c91"),bt=e("f20b"),vt=e("e7a9"),ft=e("c1d0"),Ct=e("58a81"),gt=e("9564");n["a"].use(F["a"],{config:{},components:{QLayout:J["a"],QHeader:G["a"],QDrawer:W["a"],QPageContainer:z["a"],QPage:V["a"],QToolbar:X["a"],QToolbarTitle:Y["a"],QBtn:Z["a"],QIcon:tt["a"],QList:at["a"],QItem:et["a"],QItemSection:nt["a"],QItemLabel:lt["a"],QCard:ot["a"],QCardSection:st["a"],QCardActions:ct["a"],QKnob:rt["a"],QSelect:it["a"],QTabs:pt["a"],QTab:ut["a"],QTabPanels:ht["a"],QTabPanel:dt["a"],QSpace:mt["a"],QBtnDropdown:bt["a"],QBtnGroup:vt["a"],QSlider:ft["a"],QBadge:Ct["a"],QToggle:gt["a"]},directives:{ClosePopup:K["a"]},plugins:{}}),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(H)}}).$mount("#app")},"681b":function(t,a,e){"use strict";var n=e("dad7"),l=e.n(n);l.a},"98b4":function(t,a,e){},a4ac:function(t,a,e){},aa5b:function(t,a,e){"use strict";var n=e("98b4"),l=e.n(n);l.a},c266:function(t,a,e){"use strict";var n=e("3a7d"),l=e.n(n);l.a},c2c8:function(t,a,e){},dad7:function(t,a,e){}});
//# sourceMappingURL=app.cd90ba45.js.map