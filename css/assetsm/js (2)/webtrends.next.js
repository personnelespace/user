/************************************************************************************/
/************ WEBTRENDS NE DOIT PLUS ETRE UTILISER A PARTIR DU 31 DEC 2017 **********/
/************************************************************************************/

(function(){var n=void 0;
    (function(i,j,k,l){function m(a){if(a){if(!a.forEach)a.forEach=function(a,c){for(var e=c||window,d=0,g=this.length;d<g;++d)a.call(e,this[d],d,this)};if(!a.filter)a.filter=function(a,c){for(var e=c||window,d=[],g=0,h=this.length;g<h;++g)a.call(e,this[g],g,this)&&d.push(this[g]);return d};if(!a.indexOf)a.indexOf=function(a){for(var c=0;c<this.length;++c)if(this[c]===a)return c;return-1}}return a}if(!i.Ba||!i.Ba.zb){var d={zb:!0,e:{},plugins:{},hb:0,f:{},addEventListener:i.addEventListener?function(a,
    b,c){a.addEventListener&&a.addEventListener(b,c,!1)}:function(a,b,c){a.attachEvent&&a.attachEvent("on"+b,c,!1)},h:{},version:"10.4.14",i:{},pb:!1,t:25,$:function(){if(/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(k.userAgent)!=null)d.da=parseFloat(RegExp.$1);if(l.search)d.i=d.pa(l.search);if(i.webtrendsAsyncInit&&!i.webtrendsAsyncInit.hasRun)i.webtrendsAsyncInit(),i.webtrendsAsyncInit.hasRun=!0;d.addEventListener(i,"load",function(){d.pb=!0})},g:function(a){return Object.prototype.toString.call(a)==="[object Function]"},
    qb:function(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&a[c]!=""&&a[c]!=n&&typeof a[c]!="function"&&b.push({k:c,v:a[c]});return b},extend:function(a,b,c){for(var e in b)if(c||typeof a[e]==="undefined")a[e]=b[e];return a},find:function(a){if(!d.wa)d.wa=d.nb();return d.wa(a)},nb:function(){var a=/MSIE (\d+)/.exec(k.userAgent),a=a?a[1]:99;if(j.querySelectorAll&&j.body&&a>8){var b=j.body;return function(a){return b.querySelectorAll(a)}}if(i.jQuery)return i.jQuery.find;if(i.Sizzle)return i.Sizzle;if(i.YAHOO&&
    YAHOO.za&&YAHOO.za.Aa)return YAHOO.za.Aa.Nb;if("qwery"in i)return qwery;i.YUI&&YUI().Pb("node",function(a){return a.all});return j.querySelectorAll?(b=j.body)?function(a){return b.querySelectorAll(a)}:function(){return[]}:function(){return[]}},pa:function(a){var a=a.split(/[&?]/g),b={};try{for(var c=0,e=a.length;c<e;++c){var d=a[c].match(/^([^=]+)(?:=([\s\S]*))?/);if(d&&d[1]){var g="";try{g=decodeURIComponent(d[1])}catch(h){try{g=unescape(d[1])}catch(j){g=d[1]}}var i="";try{i=decodeURIComponent(d[2])}catch(k){try{i=
    unescape(d[2])}catch(l){i=d[2]}}b[g]?(b[g]=[b[g]],b[g].push(i)):b[g]=i}}}catch(m){}return b},aa:function(a,b,c){arguments.length<2&&(b=!0);var e=j.createElement("script");e.type="text/javascript";e.async=b;e.src=a;var d=j.getElementsByTagName("script")[0];d.parentNode.insertBefore(e,d)},V:function(a,b){var c=a.target||a.srcElement;if(typeof b=="string"){var e=b,b={};b[e.toUpperCase()]=1}for(;c&&c.tagName&&!b[c.tagName.toUpperCase()];)c=c.parentElement||c.parentNode;return c},fa:function(a){return typeof encodeURIComponent==
    "function"?encodeURIComponent(a):escape(a)},sa:function(a){for(var b in d.e)d.e[b].ha(a);return!1},Q:function(a,b,c){b||(b="collect");c?d.D("transform."+b,a,c):d.D("transform."+b,a);return this},D:function(a,b,c){function e(b,c){d.h[a][b.n]||(d.h[a][b.n]=m([]));d.h[a][b.n].push(c)}if(a&&b&&a!=""&&d.g(b)){a==="wtmouseup"&&(a="wtmouse");if(a==="wtmouse"&&!d.ta){var f=/MSIE (\d+)/.exec(k.userAgent);d.addEventListener(j,(f?f[1]:99)>=8?"mousedown":"mouseup",function(b){if(!b)b=window.event;d.Pa(a,{event:b})});
    d.ta=!0}d.h[a]||(d.h[a]={});if(c)e(c,b);else for(var g in d.e)e(d.e[g],b)}},Pa:function(a,b){for(var c in d.e)d.fireEvent(a,d.e[c],b)},Ca:function(a,b,c,e){if(typeof b==="function")return b.onetime?(c.push(b),!0):(b(a,e),!1)},fireEvent:function(a,b,c){var e=m([]);if(d.h[a]&&d.h[a][b.n]){a=d.h[a][b.n];if(!a.length)return;for(var f=a.length-1;f>=0;f--)d.Ca(b,a[f],e,c)&&a.pop()}e.forEach(function(a){a(b,c)})},ca:function(a,b){var c=!1,e;for(e in d.e){var f=d.e[e];a in f.plugins&&(c=!0,f.ca(a,b))}c||
    b({Mb:!0})},T:function(a,b){for(var c=j.cookie.split("; "),e=[],d=0,g=0,h=a.length,p=c.length,g=0;g<p;g++){var i=c[g];i.substring(0,h+1)==a+"="&&(e[d++]=i)}c=e.length;if(c>0){d=0;if(c>1&&a==b){p=new Date(0);for(g=0;g<c;g++)i=new Date(parseInt(this.Wa(e[g],"lv"))),i>p&&(p.setTime(i.getTime()),d=g)}return unescape(e[d].substring(h+1))}else return null},Wa:function(a,b,c){a=a.split(c||":");for(c=0;c<a.length;c++){var e=a[c].split("=");if(b==e[0])return e[1]}return null}},q=d.fireEvent,r=d.D;d.b=function(){this.na=
    i.RegExp?/dcs(uri)|(ref)|(aut)|(met)|(sta)|(sip)|(pro)|(byt)|(dat)|(p3p)|(cfg)|(redirect)|(cip)/i:"";this.va={};this.plugins=this.plugins={};this.d=this.WT={};this.j=this.DCS={};this.q=this.DCSext={};this.n=this.dcssID="dcsobj_"+d.hb++;this.images=this.images=[];this.ma=this.errors=[];this.a=this.FPCConfig={};this.c=this.TPCConfig={};this.images=[];this.w=[];this.Eb=[];this.l=[];this.N=[];this.P="";this.ba=this.p=0;this.X=this.oa="";this.ta=!1;return this};d.b.prototype={$:function(a){function b(b,
    c){return a.hasOwnProperty(b)?a[b]:c}function c(a,b,c){return!a?c:a.hasOwnProperty(b)?a[b]:c}this.Gb=a;this.I=b("errorlogger",function(){});this.gb=this.dcsid=a.dcsid;this.L=this.queue=b("queue",[]);this.domain=this.domain=b("domain","statse.webtrendslive.com");this.Bb=this.timezone=b("timezone",-8);this.enabled=this.enabled=b("enabled",!0);this.Z=this.i18n=b("i18n",!0);this.va=i.RegExp?this.Z?{"%25":/\%/g,"%26":/\&/g,"%23":/\#/g}:{"%09":/\t/g,"%20":/ /g,"%23":/\#/g,"%26":/\&/g,"%2B":/\+/g,"%3F":/\?/g,
    "%5C":/\\/g,"%22":/\"/g,"%7F":/\x7F/g,"%A0":/\xA0/g}:"";if(a.metanames)this.ra=m(a.metanames.toLowerCase().split(","));i.webtrendsAsyncLoad&&typeof i.webtrendsAsyncLoad==="function"&&!b("privateFlag",!1)&&d.D("onready",window.webtrendsAsyncLoad,this);this.M=this.vtid=b("vtid",n);this.ua=b("paidsearchparams","gclid");this.yb=this.splitvalue=b("splitvalue","");d.t=a.dcsdelay||d.t;this.ib=this.delayAll=b("delayAll",!1);this.K=this.preserve=b("preserve",!0);this.w=m(b("navigationtag","div,table").toLowerCase().split(","));
    this.l=b("onsitedoms","");if(!d.g(this.l.test))this.l=m(this.l.toLowerCase().split(",")),this.l.forEach(function(a,b,c){c[b]=a.replace(/^\s*/,"").replace(/\s*$/,"")});this.N=m(b("downloadtypes","xls,doc,pdf,txt,csv,zip,docx,xlsx,rar,gzip").toLowerCase().split(","));this.N.forEach(function(a,b,c){c[b]=a.replace(/^\s*/,"").replace(/\s*$/,"")});if(b("adimpressions",!1))this.P=b("adsparam","WT.ac");this.a.enabled=this.FPCConfig.enabled=c(a.FPCConfig,"enabled",!0);this.a.domain=this.FPCConfig.domain=c(a.FPCConfig,
    "domain",b("fpcdom",""));this.a.name=this.FPCConfig.name=c(a.FPCConfig,"name",b("fpc","WT_FPC"));this.a.u=this.FPCConfig.expiry=c(a.FPCConfig,"expires",b("cookieexpires",34187400000));this.a.u=this.a.u<34187400000?this.a.u:34187400000;this.a.kb=new Date(this.getTime()+this.a.u);this.a.wb=this.a.u===0;this.c.enabled=this.TPCConfig.enabled=c(a.TPCConfig,"enabled",!b("disablecookie",!1));this.c.R=this.TPCConfig.cfgType=c(a.TPCConfig,"cfgType",!this.c.enabled?"1":"");if(a.cookieTypes)if(a.cookieTypes.toLowerCase()===
    "none")this.a.enabled=!1,this.c.enabled=!1,this.c.R="1";else if(a.cookieTypes.toLowerCase()==="firstpartyonly")this.a.enabled=!0,this.c.enabled=!1,this.c.R="1";else if(a.cookieTypes.toLowerCase()==="all")this.a.enabled=!0,this.c.enabled=!0,this.c.R=c(a.TPCConfig,"cfgType","");this.Jb=this.fpc=this.a.name;this.Kb=this.fpcdom=this.a.domain;this.Ib=this.cookieExp=this.a.u;m(b("pageEvents",[])).forEach(function(b){this.Db=a[b.toLowerCase()]=!0});b("offsite",!1)&&this.Ma();b("download",!1)&&this.Ka();
    b("anchor",!1)&&this.Ja();b("javascript",!1)&&this.La();b("rightclick",!1)&&this.Na();b("privateFlag",!1)||(d.e[this.n]=this);this.plugins=a.plugins||{};this.Fa();d.f[this.domain]||(d.f[this.domain]="");!b("privateFlag",!1)&&this.a.enabled&&this.Ya(this.n);this.F();return this},Fa:function(){for(var a in this.plugins){var b=this.plugins[a];if(!d.plugins[a]){d.plugins[a]=b;var c=b.src;d.g(c)?i.setTimeout(function(a){return function(){a()}}(c),1):d.aa(c,!1)}if(!b.async){var e=this;b.loaded=!1;this.p++;
    b.Qb&&this.ba++;b.timeout&&i.setTimeout(function(a){return function(){if(!a.loaded)a.Ab=!0,e.p--,e.F()}}(b),b.timeout)}}},Za:function(a){if(typeof a!="undefined")!d.f[this.domain]&&a.gTempWtId&&(d.f[this.domain]=a.gTempWtId),this.X=a.gTempWtId,!d.f[this.domain]&&a.gWtId&&(d.f[this.domain]=a.gWtId),this.oa=a.gWtAccountRollup;this.p--;this.F()},Ya:function(a){return j.cookie.indexOf(this.a.name+"=")==-1&&j.cookie.indexOf("WTLOPTOUT=")==-1&&this.c.enabled?(this.enabled&&(d.aa("//"+this.domain+"/"+this.gb+
    "/wtid.js?callback=Webtrends.dcss."+a+".dcsGetIdCallback",!0),this.p++),!1):!0},ca:function(a,b){var c=this.plugins[a];if(c)d.g(b)&&(this.tb()?b(this,c):r("pluginsLoaded",function(a,b,c){function d(){a(b,c)}d.onetime=!0;return d}(b,this,c),this)),c.loaded=!0,!c.async&&!c.Ab&&this.p--;this.F()},vb:function(){this.ba--;this.F()},tb:function(){return this.p<=0},F:function(){if(this.p<=0){if(!this.Ea)q("pluginsLoaded",this),this.Ea=!0;this.ba<=0&&this.xb()}},xb:function(){if(!this.Ga)q("onready",this),
    this.ob(),this.ub(),this.Ga=!0},ob:function(){for(var a=0;a<this.L.length;a++)this.ka(this.L[a]);this.L=[]},ub:function(){var a=this;this.L.push=function(b){a.ka(b)}},Q:function(a,b){d.Q(a,b,this)},r:function(a,b){var c=this,e=d.extend({domEvent:"click",callback:n,argsa:[],args:{},delayTime:n,transform:n,filter:n,actionElems:{A:1,INPUT:1},finish:n},b,!0);r("wtmouse",function(b,g){c.Oa(c,a,d.extend(g,e,!0))},c);return this},xa:function(a,b,c,e){b.element=c;if(e==="form"||e==="input"||e==="button")b.domEvent=
    "submit";a.ea(b)},Oa:function(a,b,c){var e=d.find;if(e&&c.event&&c.actionElems){var f=d.V(c.event,c.actionElems),g=f.tagName?f.tagName.toLowerCase():"";if(b.toUpperCase()in c.actionElems&&b.toUpperCase()===g.toUpperCase())return this.xa(a,c,f,g);if((b=e(b))&&f&&b&&b.length)for(e=0;e<b.length;e++)if(b[e]===f){this.xa(a,c,f,g);break}}},W:function(a,b){var c=m(j.cookie.split("; ")).filter(function(b){return b.indexOf(a+"=")!=-1})[0];if(!c||c.length<a.length+1)return!1;m(c.split(a+"=")[1].split(":")).forEach(function(a){a=
    a.split("=");b[a[0]]=a[1]});return!0},T:function(a){return d.T(a,this.a.name)},cb:function(a,b,c){var e=[],b=d.qb(b);m(b).forEach(function(a){e.push(a.k+"="+a.v)});e=e.sort().join(":");j.cookie=a+"="+e+c},Ta:function(a,b,c){a+="=";a+="; expires=expires=Thu, 01 Jan 1970 00:00:01 GMT";a+="; path="+b;a+=c?";domain="+c:"";document.cookie=a},$a:function(a,b,c,d){var f={};return this.W(a,f)?b==f.id&&c==f.lv&&d==f.ss?0:3:2},Xa:function(){var a={};this.W(this.a.name,a);return a},Va:function(){if(j.cookie.indexOf("WTLOPTOUT=")==
    -1)if(this.d.ce=!this.a.enabled&&!this.c.enabled?"0":this.a.enabled&&!this.c.enabled?"1":"2",this.a.enabled){var a=this.d,b=this.a.name,c=new Date,e=c.getTimezoneOffset()*6E4+this.Bb*36E5;c.setTime(c.getTime()+e);var f=new Date(c.getTime());a.co_f=a.vtid=a.vtvs=a.vt_f=a.vt_f_a=a.vt_f_s=a.vt_f_d=a.vt_f_tlh=a.vt_f_tlv="";var g={};if(this.W(b,g)){var h=g.id,p=parseInt(g.lv),i=parseInt(g.ss);if(h==null||h=="null"||isNaN(p)||isNaN(i))return;a.co_f=h;h=new Date(p);a.vt_f_tlh=Math.floor((h.getTime()-e)/
    1E3);f.setTime(i);if(c.getTime()>h.getTime()+18E5||c.getTime()>f.getTime()+288E5)a.vt_f_tlv=Math.floor((f.getTime()-e)/1E3),f.setTime(c.getTime()),a.vt_f_s="1";if(c.getDate()!=h.getDate()||c.getMonth()!=h.getMonth()||c.getFullYear()!=h.getFullYear())a.vt_f_d="1"}else{if(this.X.length)a.co_f=d.f[this.domain].length?d.f[this.domain]:this.X,a.vt_f="1";else if(d.f[this.domain].length)a.co_f=d.f[this.domain];else{a.co_f="2";i=c.getTime().toString();for(h=2;h<=32-i.length;h++)a.co_f+=Math.floor(Math.random()*
    16).toString(16);a.co_f+=i;a.vt_f="1"}this.oa.length==0&&(a.vt_f_a="1");a.vt_f_s=a.vt_f_d="1";a.vt_f_tlh=a.vt_f_tlv="0"}a.co_f=escape(a.co_f);a.vtid=typeof this.M=="undefined"?a.co_f:this.M||"";a.vtvs=(f.getTime()-e).toString();e=(this.a.wb?"":"; expires="+this.a.kb.toGMTString())+"; path=/"+(this.a.domain!=""?"; domain="+this.a.domain:"");c=c.getTime().toString();f=f.getTime().toString();g.id=a.co_f;g.lv=c;g.ss=f;this.cb(b,g,e);b=this.$a(b,a.co_f,c,f);if(b!=0)a.co_f=a.vtvs=a.vt_f_s=a.vt_f_d=a.vt_f_tlh=
    a.vt_f_tlv="",typeof this.M=="undefined"&&(a.vtid=""),a.vt_f=a.vt_f_a=b}else this.d.vtid=this.M?this.M:"",this.Ta(this.a.name,"/",this.a.domain)},Cb:function(){try{var a;arguments&&arguments.length>1?a={argsa:Array.prototype.slice.call(arguments)}:arguments.length===1&&(a=arguments[0]);typeof a==="undefined"&&(a={element:n,event:n,Fb:[]});typeof a.argsa==="undefined"&&(a.argsa=[]);this.la("collect",a);return this}catch(b){this.ma.push(b),this.I(b)}},ha:function(a){a&&a.length>1&&(a={argsa:Array.prototype.slice.call(arguments)});
    this.ea(a)},ea:function(a){try{typeof a==="undefined"&&(a={});this.la("multitrack",a);if(a.delayTime){var b=Number(a.delayTime);this.ya(isNaN(b)?d.t:b)}else this.ib&&this.ya(d.t);return!1}catch(c){this.ma.push(c),this.I(c)}},Ra:function(){this.j={};this.d={};this.q={};arguments.length%2==0&&this.U(arguments)},U:function(a){if(a)for(var b=0,c=a.length;b<c;b+=2)a[b].indexOf("WT.")==0?this.d[a[b].substring(3)]=a[b+1]:a[b].indexOf("DCS.")==0?this.j[a[b].substring(4)]=a[b+1]:a[b].indexOf("DCSext.")==0&&
    (this.q[a[b].substring(7)]=a[b+1])},eb:function(a){var b,c;if(this.K){this.C=[];for(var d=0,f=a.length;d<f;d+=2)c=a[d],c.indexOf("WT.")==0?(b=c.substring(3),this.C.push(c,this.d[b]||"")):c.indexOf("DCS.")==0?(b=c.substring(4),this.C.push(c,this.j[b]||"")):c.indexOf("DCSext.")==0&&(b=c.substring(7),this.C.push(c,this.q[b]||""))}},bb:function(){if(this.K)this.U(this.C),this.C=[]},fb:function(){var a=new Date,b=this,c=this.d,e=this.j;c.tz=parseInt(a.getTimezoneOffset()/60*-1)||"0";c.bh=a.getHours()||
    "0";c.ul=k.language||k.userLanguage;if(typeof screen=="object")c.cd=k.appName=="Netscape"?screen.pixelDepth:screen.colorDepth,c.sr=screen.width+"x"+screen.height;typeof k.javaEnabled()=="boolean"&&(c.jo=k.javaEnabled()?"Yes":"No");j.title&&(c.ti=i.RegExp?j.title.replace(RegExp("^"+l.protocol+"//"+l.hostname+"\\s-\\s"),""):j.title);c.js="Yes";c.jv=function(){var a=navigator.userAgent.toLowerCase(),b=parseInt(navigator.appVersion),c=a.indexOf("mac")!=-1,d=a.indexOf("firefox")!=-1,e=a.indexOf("firefox/0.")!=
    -1,f=a.indexOf("firefox/1.0")!=-1,g=a.indexOf("firefox/1.5")!=-1,h=a.indexOf("firefox/2.0")!=-1,j=!d&&a.indexOf("mozilla")!=-1&&a.indexOf("compatible")==-1,i=a.indexOf("msie")!=-1&&a.indexOf("opera")==-1,k=i&&b==4&&a.indexOf("msie 4")!=-1,i=i&&!k,l=a.indexOf("opera 5")!=-1||a.indexOf("opera/5")!=-1,m=a.indexOf("opera 6")!=-1||a.indexOf("opera/6")!=-1,a=a.indexOf("opera")!=-1&&!l&&!m,o="1.1";d&&!e&&!f&!g&!h?o="1.8":h?o="1.7":g?o="1.6":e||f||j&&b>=5||a?o="1.5":c&&i||m?o="1.4":i||j&&b==4||l?o="1.3":
    k&&(o="1.2");return o}();c.ct="unknown";if(j.body&&j.body.addBehavior)try{j.body.addBehavior("#default#clientCaps"),c.ct=j.body.Hb||"unknown",j.body.addBehavior("#default#homePage"),c.hp=j.body.Lb(location.href)?"1":"0"}catch(f){b.I(f)}var g=0,h=0;if(typeof i.innerWidth=="number")g=i.innerWidth,h=i.innerHeight;else if(j.documentElement&&(j.documentElement.clientWidth||j.documentElement.clientHeight))g=j.documentElement.clientWidth,h=j.documentElement.clientHeight;else if(j.body&&(j.body.clientWidth||
    j.body.clientHeight))g=j.body.clientWidth,h=j.body.clientHeight;c.bs=g+"x"+h;c.fv=function(){var a;if(i.ActiveXObject)for(a=15;a>0;a--)try{return new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+a),a+".0"}catch(c){b.I(c)}else if(k.plugins&&k.plugins.length)for(a=0;a<k.plugins.length;a++)if(k.plugins[a].name.indexOf("Shockwave Flash")!=-1)return k.plugins[a].description.split(" ")[2];return"Not enabled"}();c.slv=function(){var a="Not enabled";try{k.userAgent.indexOf("MSIE")!=-1?new ActiveXObject("AgControl.AgControl")&&
    (a="Unknown"):k.plugins["Silverlight Plug-In"]&&(a="Unknown")}catch(c){b.I(c)}if(a!="Not enabled"){var d,e,f;if(typeof Silverlight=="object"&&typeof Silverlight.qa=="function"){for(d=9;d>0;d--){e=d;if(Silverlight.qa(e+".0"))break;if(a==e)break}for(d=9;d>=0;d--){f=e+"."+d;if(Silverlight.qa(f)){a=f;break}if(a==f)break}}}return a}();this.Z&&(c.le=typeof j.defaultCharset=="string"?j.defaultCharset:typeof j.characterSet=="string"?j.characterSet:"unknown");c.tv=d.version;c.sp=this.yb;c.dl="0";if(d.i&&d.i.lb)c.fb_ref=
    d.i.lb;if(d.i&&d.i.mb)c.fb_source=d.i.mb;c.ssl=l.protocol.indexOf("https:")==0?"1":"0";e.dcsdat=a.getTime();e.dcssip=l.hostname;e.dcsuri=l.pathname;c.es=e.dcssip+e.dcsuri;if(l.search)e.dcsqry=l.search;if(e.dcsqry){a=e.dcsqry.toLowerCase();g=this.ua.length?this.ua.toLowerCase().split(","):[];for(h=0;h<g.length;h++)if(a.indexOf(g[h]+"=")!=-1){c.srch="1";break}}if(j.referrer!=""&&j.referrer!="-"&&!(k.appName=="Microsoft Internet Explorer"&&parseInt(k.appVersion)<4))e.dcsref=j.referrer;e.dcscfg=this.c.R},
    Ua:function(a,b){if(b!=""){if(a===null||a===n)return"";var a=a.toString(),c;for(c in b)b[c]instanceof RegExp&&(a=a.replace(b[c],c));return a}else return escape(a)},S:function(a,b){if(this.Z&&this.na!=""&&!this.na.test(a))if(a=="dcsqry"){for(var c="",e=b.substring(1).split("&"),f=0;f<e.length;f++){var g=e[f],h=g.indexOf("=");if(h!=-1){var i=g.substring(0,h),g=g.substring(h+1);f!=0&&(c+="&");c+=i+"="+d.fa(g)}}b=b.substring(0,1)+c}else b=d.fa(b);return"&"+a+"="+this.Ua(b,this.va)},Sa:function(a,b){if(j.images){var c=
    new Image;this.images.push(c);if(arguments.length===2&&b&&d.g(b.callback)){var e=!1,f=b.callback,g=this;c.onload=function(){if(!e)return e=!0,f(g,b),!0};i.setTimeout(function(){if(!e)return e=!0,f(g,b),!0},d.t)}c.src=a}},ab:function(){var a;j.documentElement?a=j.getElementsByTagName("meta"):j.all&&(a=j.all.Ob("meta"));if(typeof a!="undefined")for(var b=a.length,c=0;c<b;c++){var d=a.item(c).name,f=a.item(c).content;a.item(c);d.length>0&&(d=d.toLowerCase(),d.toUpperCase().indexOf("WT.")==0?this.d[d.substring(3)]=
    f:d.toUpperCase().indexOf("DCSEXT.")==0?this.q[d.substring(7)]=f:d.toUpperCase().indexOf("DCS.")==0?this.j[d.substring(4)]=f:this.ra&&this.ra.indexOf(d)!=-1&&(this.q["meta_"+d]=f))}},ia:function(a){if(j.cookie.indexOf("WTLOPTOUT=")==-1){var b=this.d,c=this.j,e=this.q,f=this.i18n,g="http"+(l.protocol.indexOf("https:")==0?"s":"")+"://"+this.domain+(this.dcsid==""?"":"/"+this.dcsid)+"/dcs.gif?";f&&(b.dep="");for(var h in c)c[h]!=""&&c[h]!=n&&typeof c[h]!="function"&&(g+=this.S(h,c[h]));for(h in b)b[h]!=
    ""&&b[h]!=n&&typeof b[h]!="function"&&(g+=this.S("WT."+h,b[h]));for(h in e)if(e[h]!=""&&e[h]!=n&&typeof e[h]!="function")f&&(b.dep=b.dep.length==0?h:b.dep+";"+h),g+=this.S(h,e[h]);f&&b.dep.length>0&&(g+=this.S("WT.dep",b.dep));d.da&&d.da<9&&g.length>2048&&(g=g.substring(0,2040)+"&WT.tu=1");this.Sa(g,a);this.d.ad=""}},rb:function(){this.fb();this.ab();this.P&&this.P.length>0&&this.Qa();this.sb=!0},getTime:function(){return(new Date).getTime()},jb:0,ya:function(a){for(var b=this.getTime();this.getTime()-
    b<a;)this.jb++},la:function(a,b){a||(a="collect");this.L.push({action:a,message:b})},ka:function(a){var b="action_"+a.action,c=a.message;this.sb||this.rb();c.event&&!c.element&&(c.element=d.V(c.event,{A:1}));if(!d.g(c.filter)||!c.filter(this,c)){if(c.args){c.argsa=c.argsa||[];for(var e in c.args)c.argsa.push(e,c.args[e])}c.element&&c.element.getAttribute&&c.element.getAttribute("data-wtmt")&&(c.argsa=c.argsa.concat(c.element.getAttribute("data-wtmt").split(",")));q("transform."+a.action,this,c);q("transform.all",
    this,c);c.transform&&d.g(c.transform)&&c.transform(this,c);if(this.enabled){this.Va();if(d.g(this[b]))this[b](c);q("finish."+a.action,this,c);q("finish.all",this,c);c.finish&&d.g(c.finish)&&c.finish(this,c)}}},Ia:function(a){var b=a&&a.argsa&&a.argsa.length%2==0;b&&(this.eb(a.argsa),this.U(a.argsa));this.j.dcsdat=this.getTime();this.ia(a);b&&this.bb()},Ha:function(a){a&&a.argsa&&a.argsa.length%2==0&&this.U(a.argsa);this.ia(a)},J:function(a){var b=document.createElement("a");b.href=a.href;a={};a.H=
    b.hostname?b.hostname.split(":")[0]:window.location.hostname;a.o=b.pathname?b.pathname.indexOf("/")!=0?"/"+b.pathname:b.pathname:"/";a.m=b.search?b.search.substring(b.search.indexOf("?")+1,b.search.length):"";a.G=i.location;return a},ga:function(a,b){if(a.length>0){a=a.toLowerCase();if(a==window.location.hostname.toLowerCase())return!0;if(d.g(b.test))return b.test(a);else if(b.length>0)for(var c=b.length,e=0;e<c;e++)if(a==b[e])return!0}return!1},ja:function(a,b){for(var c=a.toLowerCase().substring(a.lastIndexOf(".")+
    1,a.length),d=b.length,f=0;f<d;f++)if(c==b[f])return!0;return!1},s:function(a,b){var c="",e="",f=b.length,g,h;for(g=0;g<f;g++)if(h=b[g],h.length&&(e=d.V(a,h),c=e.getAttribute&&e.getAttribute("id")?e.getAttribute("id"):"",e=e.className||"",c.length||e.length))break;return c.length?c:e},Y:function(a,b,c){var e=j.all?b.innerText:b.text,a=d.V(a,{IMG:1}),f;if(a&&a.alt)f=a.alt;else if(e)f=e;else if(b.innerHTML)f=b.innerHTML;return f?f:c},B:function(){if(!this.K)this.Da=this.K=!0},z:function(){this.Da=this.K=
    !1},O:function(a){var b=!1;if(!a)a=window.event;a.which?b=a.which==3:a.button&&(b=a.button==2);return b},Ma:function(){this.r("a",{filter:function(a,b){var c=b.element||{},d=b.event||{};return c.hostname&&!a.ga(c.hostname,a.l)&&!a.O(d)?!1:!0},transform:function(a,b){var c=b.event||{},d=b.element||{};a.B(b);d=a.J(d);b.argsa.push("DCS.dcssip",d.H,"DCS.dcsuri",d.o,"DCS.dcsqry",d.m,"DCS.dcsref",d.G,"WT.ti","Offsite:"+d.H+d.o+(d.m.length?"?"+d.m:""),"WT.dl","24","WT.nv",a.s(c,a.w))},finish:function(a){a.z()}})},
    Ja:function(){this.r("a",{filter:function(a,b){var c=b.element||{},d=b.event||{};return a.ga(c.hostname,a.l)&&c.hash&&c.hash!=""&&c.hash!="#"&&!a.O(d)?!1:!0},transform:function(a,b){var c=b.event||{},d=b.element||{};a.B(b);d=a.J(d);b.argsa.push("DCS.dcssip",d.H,"DCS.dcsuri",escape(d.o+b.element.hash),"DCS.dcsqry",d.m,"DCS.dcsref",d.G,"WT.ti",escape("Anchor:"+b.element.hash),"WT.nv",a.s(c,a.w),"WT.dl","21")},finish:function(a){a.z()}})},Ka:function(){this.r("a",{filter:function(a,b){var c=b.event||
    {};return a.ja((b.element||{}).pathname,a.N)&&!a.O(c)?!1:!0},transform:function(a,b){var c=b.event||{},d=b.element||{};a.B(b);var f=a.J(d),d=a.Y(c,d,f.o);b.argsa.push("DCS.dcssip",f.H,"DCS.dcsuri",f.o,"DCS.dcsqry",f.m,"DCS.dcsref",f.G,"WT.ti","Download:"+d,"WT.nv",a.s(c,a.w),"WT.dl","20")},finish:function(a){a.z()}})},Na:function(){this.r("a",{filter:function(a,b){var c=b.event||{};return a.ja((b.element||{}).pathname,a.N)&&a.O(c)?!1:!0},transform:function(a,b){var c=b.event||{},d=b.element||{};a.B(b);
    var f=a.J(d),d=a.Y(c,d,f.o);b.argsa.push("DCS.dcssip",f.H,"DCS.dcsuri",f.o,"DCS.dcsqry",f.m,"DCS.dcsref",f.G,"WT.ti","RightClick:"+d,"WT.nv",a.s(c,a.w),"WT.dl","25")},finish:function(a){a.z()}})},La:function(){this.r("a",{filter:function(a,b){var c=b.element||{};return c.href&&c.protocol&&c.protocol.toLowerCase()==="javascript:"?!1:!0},transform:function(a,b){var c=b.event||{},d=b.element||{};a.B(b);var f=a.J(d);b.argsa.push("DCS.dcssip",i.location.hostname,"DCS.dcsuri",d.href,"DCS.dcsqry",f.m,"DCS.dcsref",
    f.G,"WT.ti","JavaScript:"+(d.innerHTML?d.innerHTML:""),"WT.dl","22","WT.nv",a.s(c,a.w))},finish:function(a){a.z()}})},Qa:function(){if(j.links){var a=this.P+"=",b=a.length,a=RegExp(a,"i"),c=j.links.length,d=end=-1,f=urlp=value="",g,f=j.URL+"",d=f.search(a);d!=-1&&(end=f.indexOf("&",d),urlp=f.substring(d,end!=-1?end:f.length),g=RegExp(urlp+"(&|#)","i"));for(var h=0;h<c;h++)if(j.links[h].href&&(f=j.links[h].href+"",urlp.length>0&&(f=f.replace(g,"$1")),d=f.search(a),d!=-1))d+=b,end=f.indexOf("&",d),
    value=f.substring(d,end!=-1?end:f.length),this.d.ad=this.d.ad?this.d.ad+";"+value:value}}};d.b.prototype.action_multitrack=d.b.prototype.Ia;d.b.prototype.action_collect=d.b.prototype.Ha;i.dcsMultiTrack=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];d.sa({argsa:a})};i.Webtrends=d;i.WebTrends=d;d.multiTrack=d.sa;d.dcs=d.b;d.dcss=d.e;d.addTransform=d.Q;d.bindEvent=d.D;d.getQryParams=d.pa;d.qryparams=d.i;d.dcsdelay=d.t;d.find=d.find;d.loadJS=d.aa;d.registerPlugin=d.ca;d.registerPluginCallback=
    d.vb;d.dcsGetCookie=d.T;d.b.prototype.init=d.b.prototype.$;d.b.prototype.dcsMultiTrack=d.b.prototype.ha;d.b.prototype.track=d.b.prototype.Cb;d.b.prototype.addSelector=d.b.prototype.r;d.b.prototype.dcsGetIdCallback=d.b.prototype.Za;d.b.prototype.dcsCleanUp=d.b.prototype.Ra;d.b.prototype.dcsGetFPC=d.b.prototype.Xa;d.b.prototype.addTransform=d.b.prototype.Q;d.b.prototype.dcsGetCookie=d.b.prototype.T;d.b.prototype.dcsNavigation=d.b.prototype.s;d.b.prototype.getTTL=d.b.prototype.Y;d.$()}})(window,window.document,
    window.navigator,window.location);})();
/* 2014-12-17 12:15:31 */
/*
(c) Copyright Weborama SA - PARIS
All rights reserved

It is illegal to modify, disassemble, sell, copy or publish  this software
or any part thereof. The use of this software is only permitted with the
prior and express written permission of Weborama SA - PARIS.

for more information please contact: info@weborama.com
*/
(function(){"use strict";var I1a=navigator.userAgent.toLowerCase(),I1b=document,I1c=(I1a.indexOf('opera')>=0)?parseFloat(I1a.slice(I1a.indexOf('opera')+6)):0,I1d=((I1a.indexOf('msie')>=0)&&(!I1c))?(I1a.indexOf('trident/5.0')!==-1?9:parseFloat(I1a.slice(I1a.indexOf('msie')+5))):0;function I1e(I1f){if(typeof I1f==="undefined"||I1f===""||I1f===null){return false;}
return true;}
function I1g(I1h){var I1i=new Date(),I1j={},I1k='a',I1l='',I1t='',I1u,I1m=".weborama.fr",I1n="/fcgi-bin/dispatch.fcgi",I1p='',I1v,I1w;try{I1v=escape(document.location);I1w=escape((top!==null&&top.location!==null&&typeof(top.location.href)==="string")?top.document.referrer:document.referrer);}catch(e){}
I1i=parseInt(I1i.getTime()/1000-60*I1i.getTimezoneOffset(),10);if(location.protocol==='https:'){I1k='b';}
if(I1h.fullhost!==undefined&&I1h.fullhost!==''){I1p=((location.protocol==='https:')?"https://":"http://")+I1h.fullhost;}else if(I1h.host!==''){I1p=((location.protocol==='https:')?"https://":"http://")+I1h.host+'.solution.weborama.fr';}else{I1p=((location.protocol==='https:')?"https://ssl":"http://perf")+I1m;}
I1l=I1p+I1n+"?a.A=co";I1l+="&a.si="+I1h.site;I1l+="&a.cp="+I1h.conversion_page;I1l+="&a.ct="+I1k;if(I1e(I1h.client)&&I1h.client!==0){I1l+="&a.cid="+escape(I1h.client);}
if(I1e(I1h.amount)&&I1h.amount!==0){I1l+="&a.re="+escape(I1h.amount);}if(I1e(I1h.invoice_id)&&I1h.invoice_id!==0){I1l+="&a.iid="+escape(I1h.invoice_id);}
if(I1e(I1h.quantity)&&I1h.quantity!==0){I1l+="&a.inu="+I1h.quantity;}
if(I1e(I1h.is_client)){I1l+="&a.isc="+I1h.is_client;}
if(I1e(I1h.funnel_id)){I1l+="&a.fu="+I1h.funnel_id;}
if(I1e(I1h.funnel_step)){I1l+="&a.fus="+I1h.funnel_step;}
if(I1e(I1h.is_mobile)){I1l+="&g.ism="+(I1h.is_mobile?1:0);}
if(I1e(I1h.device_id)&&I1h.device_id.match&&I1h.device_id.match(/^[a-f0-9_\-]+$/i)){I1l+="&g.did="+encodeURIComponent(I1h.device_id);}
I1l+='&da='+I1i+'&g.ru='+I1w+'&g.pu='+I1v;if(I1h.optional_parameters){for(I1u in I1h.optional_parameters){if((typeof I1j[I1u]==="undefined"||I1j[I1u]!==I1h.optional_parameters[I1u])&&typeof I1h.optional_parameters[I1u]!=="function"){if(I1t.length>0){I1t+=',';}
I1t+=encodeURIComponent(I1u)+':'+encodeURIComponent(I1h.optional_parameters[I1u]);}
}
if(I1t.length>0){I1l=I1l+"&a.opt="+encodeURIComponent(I1t);}
}
return I1l;}
function I1q(I1h){try{var I1r=I1b.createElement('IFRAME'),I1s=I1b.getElementsByTagName('body').item(0)||I1b.documentElement.childNodes[0];I1r.style.width=I1r.style.height='1px';I1r.style.border='0px';I1r.style.position='absolute';I1r.style.display='none';I1r.style.top=I1r.style.left='0px';I1r.style.zIndex=0;I1r.src=I1g(I1h);if(I1d>5&&I1d<=6){I1s.insertAdjacentHTML("beforeBegin","<iframe src='"+I1g(I1h)+"' width=\"1\" height=\"1\" frameborder=\"0\" style='zindex:0;position:absolute;border:0px;display:none;left:0;top:0;width:1px;height:1px;'><\/iframe>");}
else if(I1s.firstChild!==null){I1s.insertBefore(I1r,I1s.firstChild);}
else{I1s.appendChild(I1r);}
}catch(e){I1b.write("<iframe src='"+I1g(I1h)+"' width=\"1\" height=\"1\" frameborder=\"0\" style='zindex:0;position:absolute;border:0px;display:none;left:0;top:0;width:1px;height:1px;'><\/iframe>");}
}
if(typeof window.adperfTracker==="undefined"){window.adperfTracker=(function(){return{track:I1q};}());}
}());


var hostnameForRessources = "";
function load_hostnameForRessources(){
    try{
        var a = document.createElement('a');
        a.href = $("script[src*='webtrends.next.js']").attr("src");

        hostnameForRessources = a["hostname"];
        if (hostnameForRessources)
            hostnameForRessources = "https://" + hostnameForRessources;
    }
    catch(e){}
}
load_hostnameForRessources();



/**
 *
 * Please DON'T TOUCH !!!!
 *
 * This function let us clear all special chars in a string.
 *
 */

var clearChars = function(s) {
  if(s != undefined) {
    var r = s.toLowerCase()
        // r = r.replace(/\s/g,"_")
        r = r.replace(/[àáâãäå]/g,"a");
        r = r.replace(/æ/g,"ae");
        r = r.replace(/ç/g,"c");
        r = r.replace(/[èéêë]/g,"e");
        r = r.replace(/[ìíîï]/g,"i");
        r = r.replace(/ñ/g,"n");
        r = r.replace(/[òóôõö]/g,"o");
        r = r.replace(/œ/g,"oe");
        r = r.replace(/[ùúûü]/g,"u");
        r = r.replace(/[ýÿ]/g,"y");
        r = r.replace(/['-]/g," ");
        r = r.replace(/[,?.!"*]/g,"");
        // r = r.replace(/\W/g," ")
    return r.toLowerCase()
  }
};


function wboPerformance(id_transfo) {
    WBO_AMOUNT="0.0"; /* <== set here the command amount */
    WBO_CLIENT="";     /* <== set here your client id */
    WBO_INVOICE="";     /* <== set here your bill id */
    WBO_NUM_ITEMS=1; /* <== set here the number of item */
    WBO_POST_VALIDATION=0; /* <== set to 1 if need backoffice validation */
    var webo_interval = setInterval( function() {
        if ( typeof webo_performance != 'undefined' ) {
            clearInterval(webo_interval);
            if (webo_performance) {
                try {
                    transfo = new performanceTransfo(SITE=144092, WBO_ID_TRANSFO=id_transfo);
                    transfo.setAmount(WBO_AMOUNT);
                    transfo.setClient(WBO_CLIENT);
                    transfo.setId(WBO_INVOICE);
                    transfo.setQuantity(WBO_NUM_ITEMS);
                    transfo.setPostValidation(WBO_POST_VALIDATION);
                    transfo.setHost("bnpparibasnet.solution.weborama.fr");

                    /* == Optional parameters == */
                    //~optional parameters~
                    /* == Type parameters == */
                    /* == Free parameters == */
                    transfo.execute();
                }catch(e) {}
            }
        }
    },500);
};
var WeboramaConfig = {};
var NavTrackerConfig = {};

/******** Annule tous les hits Webtrends ******/
$(document).ready(function() {
    function objWTk(){

    }

    objWTk.prototype.dcsMultiTrack  = function(){};
    objWTk.prototype.track          = function(){};
    objWTk.prototype.multiTrack     = function(o){
        if (typeof o.callback === 'function') {
          o.callback();
        }
    };
    objWTk.prototype.tagguageNext   = function(argsa){
        // if ( typeof WeboramaConfig !== 'undefined' ) {
        //     WeboramaNext.init( argsa, false, 'tagguage' );
        // }
    };

    window.Webtrends = new objWTk();
    window.WebTrends = new objWTk();
});
/*********************************************/

$(function() {

    var s=document.createElement("script");
    s.src=hostnameForRessources+"/rsc/contrib/script/generique/webtrends.min.js";
    document.body.appendChild(s);
    // webtrends.min.js

    // Tracking spÃ©cifique sur la page devenir client
    if ( window.location.pathname.indexOf('/fr/banque-contacts/devenez-client-bnp-paribas') !== -1 ) {

        // Debut code AdPerf v2.0 http://weborama.com
        var s=document.createElement("script");
        s.src="https://cstatic.weborama.fr/js/advertiser/wbo_performance.js";
        document.body.appendChild(s);
        // Page devenir client
        wboPerformance(27755);

        // Clic sur bouton prendre rend
        $('#prendre-rdv-button').on('click', function() {
            wboPerformance(27756);
            WeboramaNext.init('', 68);
        });
    }
   // Tracking spÃ©cifique sur le bouton souscrire de capri
    if ( window.location.pathname.indexOf('/fr/souscription/credits/pret-personnel-individuel') !== -1 && window.location.search.indexOf('?rc=105') !== -1 ) {
        var souscrire_interval = setInterval(function() {
            if ( $('.resultat-simulation #souscrire').length > 0) {
                clearInterval(souscrire_interval);
                $('.resultat-simulation #souscrire').on('click', function() {
                    WeboramaNext.init('', 229);
                });
            }
        }, 500);
    }
});


/**
 * Weborama
 */
var WeboramaNext = {
    cpt: 0,
    init: function( argsa, conversion_page, initiator ) {
        if ( conversion_page == undefined || conversion_page == false ) {
            var conversion_page = this.getConversionPageId( argsa, initiator );
        }
        // Si l'id de la page n'a pas Ã©tÃ© trouvÃ© les donnÃ©es ne sont pas envoyÃ©es
        if ( !conversion_page ) { return; }

        // Code fourni par weborama, le seul changement est conversion_page
        var adperftrackobj = {
            client : "",        // <== set your client id here
            amount : "0.0",     // <== set the total price here
            invoice_id : "",    // <== set your invoice id here
            quantity : 0,      // <== set the number of items purchased
            is_client : 0,      // <== set to 1 if the client is a new client
            optional_parameters : {
                "N1" : "0", // <== to set
                "N2" : "0" // <== to set
                // to set free parameter follow this pattern :
                //,"customer_type" : "abc"
            },
            /* don't edit below this point */
            fullhost : 'bnpparibasfr.solution.weborama.fr',
            site : 1668,
            conversion_page : conversion_page
        }
        try{adperfTracker.track( adperftrackobj );}catch(err){}
    },
    getConversionPageId: function( argsa, initiator ) {
        var conversion_page = 0,
            pathname = window.location.pathname;

        if ( WeboramaConfig[pathname] === undefined ) {
            pathname = window.location.pathname + window.location.search;
        }

        // Si on trouve une entrÃ©e dans le tableau de config
        if ( WeboramaConfig[pathname] !== undefined ) {
            if(WeboramaConfig[pathname].hasOwnProperty('outil')){
                if(WeboramaConfig[pathname]['outil'] == "true"){
                    if(initiator == 'ajax' || initiator == 'tagguage')
                        this.cpt++;
                        if(this.cpt > 1) {
                            return false;   
                        }
                }
            }

            // Si page produit
            if ( WeboramaConfig[pathname]['page'] !== undefined ) {
                return WeboramaConfig[pathname]['page']; // Retourne l'id de la page
            }
            // Si formulaire
            if ( argsa !== undefined ) {
                var index = argsa.indexOf('WT.si_x');
                var new_index = argsa[index+1];
                if ( WeboramaConfig[pathname][new_index] !== undefined ) {
                    return WeboramaConfig[pathname][new_index];
                }
            } else {
                // Capri
                if ( WeboramaConfig[pathname] !== undefined ) {
                    var courrier_signature_interval = setInterval(function() {
                        if ( $('#ia-capri .progression-alt.etp-1').length > 0 ) {
                             return WeboramaConfig[pathname]['profil'];
                        }
                        if ( $('#zone-publiable-confirmation-courrier').text().length > 0 ) {
                             return WeboramaConfig[pathname]['courrier'];
                        }
                        if ( $('#zone-publiable-confirmation-se').text().length > 0 ) {
                            return WeboramaConfig[pathname]['signature'];
                        }
                    },1000);
                }
            }
        }

        // On n'a pas trouvÃ© d'id conversion page dans le tableau de config
        return false;
    }
};

/**
 * Tagguagenext pour sous traitant
 */

window.tagguageNext = function(argsa){
    trace("tagguageNext="+JSON.stringify(argsa));
    if ( typeof WeboramaConfig !== 'undefined' ) {
        WeboramaNext.init( argsa, false, 'tagguage' );
    }
    // try {
    //     if ( window.webtrendsMerge ) {

    //         if( argsa.length ) {
    //             var i;
    //             for( i = 0; i < argsa.length; i++ ) {
    //                 if( !(i % 2) && cmsWebtrendsInfo.indexOf(argsa[i]) > -1 ) {
    //                     argsa[i] = argsa[i] + "_app";
    //                 }
    //             }
    //         }

    //         var WTtii = argsa.indexOf("WT.ti");
    //         var WTtiValue;

    //         if( WTtii > -1 ) {
    //             WTtiValue = argsa[WTtii+1];

    //             if( WTtiValue === "erreur technique" || WTtiValue === "erreur_technique" ) {
    //                 argsa.push("WT.z_type_error", "Technique");
    //                 argsa.push("WT.z_error", "erreur technique");
    //             }
    //         }

    //         cmsWebtrendsInfo.concat( argsa );
    //         Webtrends.multiTrack({element:this, argsa:argsa});
    //     }
    // }
    // catch(e) {}
}
// Id webtrends
var _dcsid = 'dcsdr3u9m00000c5gt1ial0cl_7p1n';
if( document.URL.match(/mabanque.*bnpparibas/) ){
    _dcsid = 'dcscf2lct100008mm6gqh20cl_4c6s';
}

 // Pour mobileo
if ( window.location.pathname.indexOf('mobileo') + 8 >=  window.location.pathname.length ) {
    var autopopulated = window.location.pathname;
}

// Envoi des donnÃ©es Ã  webtrends
window.webtrendsAsyncInit=function(){
    var options = {
        dcsid:_dcsid,
        domain:"statse.webtrendslive.com",
        FPCConfig: {
            enabled: true,
            expires: 34187400000  
        },
        timezone:1,
        i18n:true,
        fpcdom: window.location.host,
        plugins:{
            replicate: {
                src:hostnameForRessources+"/rsc/contrib/script/generique/webtrends.replicate.js",
                servers:[{domain: "scs.webtrends.com"}]
            }
        },
        offsite : true,
        onsitedoms: "lanetagence.bnpparibas.net, bnpparibasnet.solution.weborama.fr, mabanque.bnpparibas.net, secure.bnpparibas.net, mabanque.bnpparibas, mabanquepro.bnpparibas, mabanqueprivee.bnpparibas, pro.mabanque.bnpparibas, mabanquepro.bnpparibas.net, mabanqueprivee.bnpparibas.net"
    }; 

    //===== options conditionnelles 
    // plugin 'heatmap'
    (function (_options) {
        var isGoodEnv;
        var isGoodPage;

        isGoodEnv = true;
        if (!isGoodEnv) { return };
        
        isGoodPage = [
            "fr/notre-offre/credits/credits-a-la-consommation/prets-personnels/pret-divers",
            "fr/notre-offre/credits/credits-immobiliers/prets-immobiliers/pret-immobilier-taux-fixe",
            "fr/notre-offre/assurances/assurances-des-biens/assurance-habitation",
            "fr/notre-offre/epargne-et-bourse/comptes-epargne-et-livrets/livret-a",
            "fr/notre-offre/epargne-et-bourse/assurance-vie/bnp-paribas-multiplacements-2",
            "fr/notre-offre/comptes-cartes-et-services/cartes-et-moyens-de-paiement/decouvrir-toutes-les-cartes/carte-visa-premier",
            "fr/notre-offre/comptes-cartes-et-services/cartes-et-moyens-de-paiement/options-paylib/paylib"
        ].map(function (path) {
            return window.location.pathname.indexOf(path) >= 0;
        }).reduce(function (acc, curr) {
            return acc || curr;
        }, false);

        var isGoodContext = isGoodEnv && isGoodPage;

        if (!isGoodContext) { return };

        _options.plugins.hm = { src: "//s.webtrends.com/js/webtrends.hm.js" };

    })(options);

    var dcs = new Webtrends.dcs().init(options);

    if ( !window.webtrendsMerge && window.location.pathname != '/fr/souscription/assurance/simulation-assurance-auto' ) {
        dcs.track();
    }
};

var cmsWebtrendsInfo = [];
$(function() {
    var client_type = 'Particuliers';
    if ( $('body').hasClass('bpf') ) { client_type = 'BPF'; }
    if ( $('body').hasClass('pro') ) { client_type = 'PRO'; }

    // Typologie du client
    $('head').append('<meta name="WT.z_clienttype1" content="'+client_type+'"  />');
    cmsWebtrendsInfo.push("WT.z_clienttype1", client_type);

    // Identifiant du site hÃ´te, nom de domaine
    $('head').append('<meta name="WT.site" content="'+window.location.host+'">');
    cmsWebtrendsInfo.push("WT.site", window.location.host);

    window.webtrendsInfo = function( info_client ) {
        var loggedin = 0;
        var appinstance = $.cookie('APinstance');
        var lsinstance = $.cookie('LSinstance');

        if ( $('body').hasClass('bpf') ) { client_type = 'BPF'; }
        if ( $('body').hasClass('pro') ) { client_type = 'PRO'; }
        if ( info_client !== undefined ) { loggedin = 1; }

        // Indicateur langue
        $('head').append('<meta name="WT.z_lang" content="'+ window.location.pathname.substring(1,3) +'" />');
        cmsWebtrendsInfo.push("WT.z_lang", window.location.pathname.substring(1,3));

        if ( loggedin ) {
            // Indicateur Priority
            $('head').append('<meta name="WT.z_clienttype2" content="'+ (+info_client.data.indicateurs.indicPriority) +'" />');
            cmsWebtrendsInfo.push("WT.z_clienttype2", Number(info_client.data.indicateurs.indicPriority));
            // Indicateur Net agence
            $('head').append('<meta name="WT.z_clienttype3" content="'+Number(info_client.data.indicateurs.indicAgenceNet)+'" />');
            cmsWebtrendsInfo.push("WT.z_clienttype3", Number(info_client.data.indicateurs.indicAgenceNet));
            // Indicateur rÃ©sident
            $('head').append('<meta name="WT.z_clienttype4" content="'+info_client.data.abonnement.typeResident+'" />');
            cmsWebtrendsInfo.push("WT.z_clienttype3", info_client.data.abonnement.typeResident);

            // Indicateur jeune et calcul de l'age
            var jeune = 0,
                birthDate = new Date(info_client.data.client.dateNaissance),
                today = new Date(info_client.dateServeur),
                age = today.getFullYear() - birthDate.getFullYear(),
                m = today.getMonth() - birthDate.getMonth();

            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            if ( age <= 25 ) {
                jeune = 1;
            }
            $('head').append('<meta name="WT.z_clienttype5" content="'+jeune+'" />');
            cmsWebtrendsInfo.push("WT.z_clienttype5", jeune);
            // Indicateur collaborateur
            $('head').append('<meta name="WT.z_clienttype6" content="'+info_client.data.indicateurs.indicAgentBNP+'" />');
            cmsWebtrendsInfo.push("WT.z_clienttype6", info_client.data.indicateurs.indicAgentBNP);
            // Segmentation compte client
            $('head').append('<meta name="WT.z_clienttype7" content="'+info_client.data.abonnement.codeSegmentClientele +'" />');
            cmsWebtrendsInfo.push("WT.z_clienttype7", info_client.data.abonnement.codeSegmentClientele);
        }

        // Indicateur de connexion
        $('head').append('<meta name="WT.z_loggedin" content="'+loggedin+'"  />');
        cmsWebtrendsInfo.push("WT.z_loggedin", loggedin);

        // Appserver
        if ( appinstance !== undefined ) {
            $('head').append('<meta name="WT.z_appserver" content="'+appinstance+'" />');
            cmsWebtrendsInfo.push("WT.z_appserver", appinstance);
        }
        // Livesite
        $('head').append('<meta name="WT.z_livesite" content="'+lsinstance+'" />');
        cmsWebtrendsInfo.push("WT.z_livesite", lsinstance);

        // Rubriques, on les rÃ©cupÃ¨re du breadcrumbs
        var rubrique_niv1 = $('.wcm-fil-ariane-token').eq(0).text().trim();
        var rubrique_niv2 = $('.wcm-fil-ariane-token').eq(1).text().trim();

        $('head').append('<meta name="WT.cg_n" content="'+rubrique_niv1+'">');
        cmsWebtrendsInfo.push("WT.cg_n", rubrique_niv1);

        $('head').append('<meta name="WT.cg_s" content="'+rubrique_niv2+'">');
        cmsWebtrendsInfo.push("WT.cg_s", rubrique_niv2);

        /**
         *
         * HUBS & Fiches produits
         *
         */
        if(window.location.pathname.match(/notre-offre/) !== null ||
            window.location.pathname.match(/notre-offre-pro/) !== null ||
            window.location.pathname.match(/vos-besoins-pro/) !== null) {
            var breadcrumbsMiams = $(".wcm-fil-ariane-header .wcm-fil-ariane-token");
            var textFiche = clearChars(breadcrumbsMiams.last().text());
            var reallyDeepTags = [ "z_univers", "z_niveau1" ,"z_niveau2", "z_niveau3", "z_niveau4" ];
            $.each(breadcrumbsMiams, function(i) {
                var superMiamText = clearChars($(this).text());

                if(i >= 1) {
                    $('head').append('<meta name="WT.' + reallyDeepTags[i-1] + '" content="'+superMiamText+'">');
                    cmsWebtrendsInfo.push("WT."+reallyDeepTags[i-1], superMiamText);
                }
            })

            if(!$("#wrapper-hub-offre-col100").length) {
                $('head').append('<meta name="WT.z_fiche_produit" content="'+textFiche+'">');
                cmsWebtrendsInfo.push("WT.z_fiche_produit", textFiche);
            }
        }



    };

    // Pour page produits
    if (!hostnameForRessources || hostnameForRessources == "https://"+document.location.hostname)
    {
		if (bnpp && bnpp.gestioncookies && bnpp.gestioncookies.publicite && bnpp.gestioncookies.publicite() === false)
			return;
        $.getJSON(hostnameForRessources+'/rsc/contrib/script/client/weboramaConfig.json', function(data) {
            WeboramaConfig = data;
            trace(data);
            WeboramaNext.init(false, false, 'ajax');
        });

        // TRACKER NAV CONFIG
        // RÃ©cupÃ©ration des url de la navigation
        (window.ENVIRONNEMENT !== "PREVIEW") && $.getJSON(hostnameForRessources+'/rsc/contrib/script/client/navTracker.json', function(data) {
            NavTrackerConfig = data;
        });
    }

    // *

    //     TODO:
    //     - GET match on URL : notre-offre
    //     - IF !== null We get all the links and buttons in the page
    //       and we add the WT params and we concat them with the CMSARGS and
    //       send them to the tagguageNext function
    //     - On click we send the data to WT and on callback we change the
    //         location



    (function() {
        "use strict";

        if(window.location.pathname.match(/notre-offre/) !== null ||
            window.location.pathname.match(/vos-besoins/) !== null ||
            window.location.pathname.match(/notre-offre-pro/) !== null ||
            window.location.pathname.match(/vos-besoins-pro/) !== null) {
            var textToMatch = {
                header: {
                    en_bref: {
                        tClick: "en_bref",
                        clickCat : "header"
                    },
                    en_detail: {
                        tClick: "en_detail",
                        clickCat : "header"
                    },
                    comment_souscrire: {
                        tClick: "comment_souscrire",
                        clickCat : "header"
                    },
                    faq: {
                        tClick: "faq_menu",
                        clickCat : "header"
                    },
                    outils_et_simulateurs: {
                        tClick: "outils_menu",
                        clickCat : "header"
                    },
                    en_complement: {
                        tClick: "en_complement",
                        clickCat : "header"
                    }
                },
                righColumn: {
                    souscrire_en_ligne : {
                        tClick : "souscrire_colonne_droite",
                        clickCat : "souscrire"
                    },
                    effectuer_une_simulation : {
                        tClick : "simulateur_colonne_droite",
                        clickCat : "outils"
                    },
                    comparateur : {
                        tClick : "comparateur_colonne_droite",
                        clickCat : "outils"
                    },
                    chatter_avec_un_conseiller : {
                        tClick : "chatter_colonne_droite",
                        clickCat : "contact"
                    },
                    contacter_un_specialiste : {
                        tClick : "contacter_specialiste_droite",
                        clickCat : "contact"
                    },
                    /* Mabanquepro*/
                    obtenir_le_guide : {
                        tClick : "obternir_le_guide_droite",
                        clickCat : "informations"
                    },
                    presenter_son_projet : {
                        tClick : "presenter_son_projet_droite",
                        clickCat : "contact"
                    }
                },
                mainContent: {
                    plus_de_details: {
                        tClick : "plus_de_details",
                        clickCat : "informations"
                    },
                    infographies: {
                        tClick : "infographie",
                        clickCat : "informations"
                    },
                    video: {
                        tClick : "video",
                        clickCat: "informations"
                    },
                    consulter_les_notices: {
                        tClick : "consulter_les_notices",
                        clickCat : "informations"
                    },
                    effectuer_une_simulation: {
                        tClick : "simulateur_contenu",
                        clickCat : "outils"
                    },
                    comparer_les_offres: {
                        tClick : "comparateur_contenu",
                        clickCat : "outils"
                    },
                    souscrire_en_ligne: {
                        tClick : "souscrire_contenu",
                        clickCat : "souscrire"
                    },
                    chatter_avec_un_conseiller: {
                        tClick : "chatter_contenu",
                        clickCat : "contact"
                    },
                    contacter_un_specialiste: {
                        tClick : "contacter_specialiste_contenu",
                        clickCat : "contact"
                    },
                    /* Mabanquepro */
                    obtenir_le_guide : {
                        tClick : "obternir_le_guide_contenu",
                        clickCat : "informations"
                    },
                    presenter_son_projet : {
                        tClick : "presenter_son_projet_contenu",
                        clickCat : "contact"
                    }
                }
            };

            var faqQuestions = $("#fp_faqListe li");
            var fpMenu = "#fp_nav a";
            var rightColBtn = "#colonneContactContainer a";
            var fpMainContent = "#fp_endetail .btn-primary, #fp_souscrire p[class*=btn-], .obtenirGuideCreateurRepreneur";
            var fpComplement = "#fp_complement a";
            var outilsSimliste = "#fp_outilsSimliste a";

            var getTarget = function(elem) {
                return clearChars(elem.text()).replace(/\s/g,"_");
            };

            var concatAndSend = function(tClick, clickCat, callback) {
                var oldDLPos = cmsWebtrendsInfo.indexOf("WT.dl");
                var argsa = [
                  "WT.dl",  "99",
                  "WT.z_click", tClick,
                  "WT.z_clickcat", clickCat
                ];


                if(oldDLPos > -1) {
                    cmsWebtrendsInfo.splice(oldDLPos, 2);
                }


                cmsWebtrendsInfo.concat( argsa );

                Webtrends.multiTrack({
                    element:this,
                    argsa:argsa,
                    callback: function() {
                        if(typeof callback === "function") {
                            setTimeout(function() {
                                callback();
                            }, 140);
                        }
                    }
                });
            };

            $(document).
                on("click", fpMenu, function(evt) {
                    var cText = getTarget($(this));
                    var tClick = (textToMatch.header.hasOwnProperty(cText)) ? textToMatch.header[cText].tClick : cText;
                    var clickCat = (textToMatch.header.hasOwnProperty(cText)) ? textToMatch.header[cText].clickCat : "header";

                    concatAndSend(tClick, clickCat);
                }).
                on("click", rightColBtn, function(evt) {
                    var jThis = $(this);
                    var cText = getTarget(jThis);
                    var tClick = (textToMatch.righColumn.hasOwnProperty(cText)) ? textToMatch.righColumn[cText].tClick : cText;
                    var clickCat = (textToMatch.righColumn.hasOwnProperty(cText)) ? textToMatch.righColumn[cText].clickCat : "colonne_droite";
                    var callback;

                    if (jThis.attr("href") !== "#" && jThis.attr("href") !== undefined) {
                        evt.preventDefault();
                      
                        callback = function() {
                          if (jThis.attr("target") == "_blank") {
                            window.open(
                              jThis.attr("href"),
                              "_blank" 
                            );
                          } else {
                            window.location = jThis.attr("href");
                          }
                        };
                    }

                    concatAndSend(tClick, clickCat, callback);
                }).
                on("click", fpMainContent, function(evt) {
                    var cText = getTarget($(this));
                    var tClick = (textToMatch.mainContent.hasOwnProperty(cText)) ? textToMatch.mainContent[cText].tClick : cText;
                    var clickCat = (textToMatch.mainContent.hasOwnProperty(cText)) ? textToMatch.mainContent[cText].clickCat : "contenu";

                    concatAndSend(tClick, clickCat);
                }).
                on("click", fpComplement, function(evt) {
                    var jThis = $(this);
                    var cText = getTarget(jThis);
                    var tClick = cText;
                    var clickCat = "redirection";
                    var callback;

                    if(jThis.attr("href") !== "#" && jThis.attr("href") !== undefined) {
                        evt.preventDefault();

                        callback = function() {
                            window.location = jThis.attr("href");
                        };
                    }

                    concatAndSend(tClick, clickCat, callback);

                }).on("click", outilsSimliste, function(evt) {
                    var jThis = $(this);
                    var cText = clearChars(jThis.text());
                    var tClick;
                    var clickCat;
                    var callback;

                    if(cText.match(/(presentez|projet)/gi).length === 2) {
                        tClick = textToMatch.mainContent.presenter_son_projet.tClick
                        clickCat = textToMatch.mainContent.presenter_son_projet.clickCat

                        if(jThis.attr("href") !== "#" && jThis.attr("href") !== undefined) {
                            evt.preventDefault();

                            callback = function() {
                                window.location = jThis.attr("href");
                            };
                        }

                        concatAndSend(tClick, clickCat, callback);
                    }

                });

            faqQuestions.on("click", function(evt) {
                concatAndSend("faq_"+getTarget($(this)), "faq");
            });
        }
    })();

    /* Dynacaap webtrends */
    (function(){
        // NOTE D'ORIENTATIONS STRATÃ‰GIQUES
        $('#note-orientation a.suite').on('click', function(e){
            e.preventDefault();

            var elm            = $(this);
            var targetContent  =  elm.text();
            var targetCat      = "note orientation strategique";
            var clickText      = "lire l'article";
            var downloadPdf    = 'telecharger le pdf';

            var argsObj = {'WT.dl':'50','WT.z_click':'','WT.z_clickcat':targetCat,'WT.z_clickvalue':targetContent,'WT.z_outil_name':'Dynacaap'};
            Webtrends.multiTrack({args : argsObj});
            //console.log(argsObj);
            //window.location.href = elm.attr('href');
        });

        // DOCUMENT D'ANALYSES FINANCIÃˆRES
        var itemTarget = "#doc-analyse .contenu-ongana .onglet a span";
        var targetCat  = "#onglets-analyses li a.active span";

        $(itemTarget).on('click', function(e){
            e.preventDefault();
            var elm  = $(this);
            var targetContent  = elm.text();
            var targetCatText  = $(targetCat).text();
            var clickText      = "lire l'article";
            var downloadPdf    = 'telecharger le pdf';

            if(targetContent === ''){
                var t = elm.is('a') ? elm.attr('href') : elm.attr('class');
                targetContent = t;
                clickText     = downloadPdf ;
            }

            var argsObj = {'WT.dl':'50','WT.z_click':clickText,'WT.z_clickcat':targetCatText,'WT.z_clickvalue':targetContent,'WT.z_outil_name':'Dynacaap'};
            Webtrends.multiTrack({args : argsObj });
            //console.log(argsObj);
            //window.location.href = elm.attr('href');
        });
    })();

    //Taggage le-cercle-wealth
    (function(){
       var out = setInterval(function(){
            url = window.location.href;

            if(url.match(/le-cercle-wealth/) !== null){

                urlPathname = window.location.pathname;

                var z_bpf_theme = " ";
                var z_bpf_webzine = "";

                if(urlPathname.split('/').length == 3 && urlPathname.match(/le-cercle-wealth/) !== null){
                    z_bpf_webzine = "A la une";
                }
                else if(urlPathname.split('/').length == 4 && urlPathname.match(/magazine/) !== null){
                    z_bpf_webzine = "Accueil Magazine";
                }
                else{
                  z_bpf_theme   = urlPathname.split('/')[3];
                  z_bpf_webzine = "Article";
                }

                var argsObj = {'WT.dl':'0','WT.z_bpf_theme':z_bpf_theme,'WT.z_bpf_webzine':z_bpf_webzine};
                Webtrends.multiTrack({args : argsObj });
            }

            if($(".magazine-body").length > 0 || $('.detail-article').length > 0){
                clearInterval(out);
            }
        }, 1000);
    })();


     //  Paylib
    (function() {
        "use strict";
        var url = window.location.href;
        if (url.match(/notre-offre\/paylib/) !== null) {
                var urlToRedirect = "";
                var wTdlValue, dCvalue, wTtiValue, wTesValue;
                $("a span:contains('je fais un don')").on('click', function(event) {
                    event.preventDefault();
                    urlToRedirect = $(this).parent().attr("href");
                    wTdlValue = '99';
                    dCvalue = '/paylib/offre-du-moment/fondation-de-France/faire-un-don';
                    wTtiValue = 'Paylib - Offre du moment - Formation de France - Faireun don';
                    wTesValue = '/paylib/offre-du-moment/fondation-de-France/faire-un-don';
                    dcsMultiTrack('WT.dl', wTdlValue, 'dcsuri', dCvalue, 'WT.ti', wTtiValue, 'WT.es', wTesValue);
                    window.setTimeout(function() {
                        document.location = urlToRedirect;
                    }, 500);

                });

                $("a span:contains('mon compte Paylib')").on('click', function(event) {
                    event.preventDefault();
                    urlToRedirect = $(this).parent().attr("href");
                    wTdlValue = '99';
                    dCvalue = '/paylib/offre-du-moment/fondation-de-France/activer-compte';
                    wTtiValue = 'Paylib - Offre du moment - Formation de France - Activer mon compte';
                    wTesValue = '/paylib/offre-du-moment/fondation-de-France/activer-compte';
                    dcsMultiTrack('WT.dl', wTdlValue, 'dcsuri', dCvalue, 'WT.ti', wTtiValue, 'WT.es', wTesValue);
                    window.setTimeout(function() {
                        document.location = urlToRedirect;
                    }, 500);
                });

        }

    })();

    // Pages nous contacter - popins et pages associees

        /*(window.ENVIRONNEMENT === "PREVIEW") && */(function() {
        "use strict";
        var url = window.location.href;
        var storageCT4 ;

        if (url.match(/banque-contact\/nous-contacter/) !== null) {
                var urlToRedirect = "";
                var wTdlValue, wTtiValue, wTzClickcatValue, wTzClickValue;
                var wTsinValue, wTsixValue, wTsicsValue;
                var $_contacterBanquier,
                    $_contacterBanquierContainerItemFirstRowFirstCol,
                    $_contacterBanquierContainerItemFirstRowSecondCol,
                    $_popin,
                    $_popinContentConfirmationValidateForm,
                    $_wrapperWcmPrendreUnRDV,
                    $_actionsRapides,
                    $_reclamation,
                    $_btnprimarypullright;


                $_contacterBanquier = $("#wcm-l-contact .container-contact #ct-banquier-prive .contacter-banquier-dec ");

                $_contacterBanquierContainerItemFirstRowFirstCol = $_contacterBanquier.find(".container .row .container-item:first .col-2:first .row");
                if (typeof(Storage) !== "undefined"){
                    if(window.sessionStorage.getItem('CT4') =='actived')
                        window.sessionStorage.removeItem('CT4');
                }

                // Joindre mon conseiller : CT1 
                $(".col-2:first .round-icon-container a",$_contacterBanquierContainerItemFirstRowFirstCol).on('click', function(event) {
                    event.preventDefault();
                    urlToRedirect = $(this).attr("href");
                    wTdlValue = '99';
                    wTtiValue = 'Ma Banque Mes Contacts - joindre mon conseiller';
                    wTzClickcatValue = 'contact banquier prive';
                    wTzClickValue = 'Ma Banque Mes Contacts - joindre mon conseiller';
                    dcsMultiTrack('WT.dl', wTdlValue, 'WT.ti', wTtiValue, 'WT.z_clickcat', wTzClickcatValue, 'WT.z_click', wTzClickValue);
                    window.setTimeout(function() {
                        document.location = urlToRedirect;
                    }, 500);
                });

                 // Joindre mon conseiller CT2
                $(".col-2:last .round-icon-container a",$_contacterBanquierContainerItemFirstRowFirstCol).on('click', function(event) {
                    event.preventDefault();
                    urlToRedirect = $(this).attr("href");
                    wTdlValue = '99';
                    wTtiValue = 'Ma Banque Mes Contacts -  Ã©crire Ã  mon conseiller';
                    wTzClickcatValue = 'contact banquier prive';
                    wTzClickValue = 'Ma Banque Mes Contacts - Ã©crire Ã  mon conseiller';
                    dcsMultiTrack('WT.dl', wTdlValue, 'WT.ti', wTtiValue, 'WT.z_clickcat', wTzClickcatValue, 'WT.z_click', wTzClickValue);
                    window.setTimeout(function() {
                        document.location = urlToRedirect;
                    }, 500);
                });

                 // Etre rappelÃ© : CT3 
                $_contacterBanquierContainerItemFirstRowSecondCol = $_contacterBanquier.find(".container .row .container-item:last");
                $_popin = $(".popin ");
                $(".col-2:first .round-icon-container a",$_contacterBanquierContainerItemFirstRowSecondCol ).on('click', function(event) {
                    event.preventDefault();
                    urlToRedirect = $(this).attr("href");
                    wTdlValue = '99';
                    wTtiValue = 'Ma Banque Mes Contacts - Ãªtre rappelÃ©';
                    wTsinValue = 'Etre joint';
                    wTsixValue = '1' ;
                    wTsicsValue = "";
                    wTzClickcatValue = 'contact banquier prive';
                    wTzClickValue = 'Ma Banque Mes Contacts - Ãªtre rappelÃ©';
                    Webtrends.multiTrack({
                         args: {'WT.dl': wTdlValue,
                                'WT.ti': wTtiValue,
                                'WT.si_n' : wTsinValue,
                                'WT.si_x' : wTsixValue,
                                'WT.si_cs' : wTsicsValue,
                                'WT.z_clickcat': wTzClickcatValue,
                                'WT.z_click': wTzClickValue
                                },
                                callback: function (e) {
                                    if( $_popin.parents('body').find('#wcm-l-contact').length ){
                                        $_popinContentConfirmationValidateForm= $_popin.find('.confirmation.validate-form'); 
                                        // Ã‰tre RappelÃ© Formulaire CT3    
                                        wTdlValue = '0';
                                        wTtiValue = 'Ma Banque Mes Contacts - Ãªtre rappelÃ© formulaire';
                                        wTsinValue = 'Etre joint' ;
                                        wTsixValue = '2';
                                        wTsicsValue = "";
                                        Webtrends.multiTrack({
                                         args: {'WT.dl': wTdlValue,
                                                'WT.ti': wTtiValue,
                                                'WT.si_n' : wTsinValue,
                                                'WT.si_x' : wTsixValue,
                                                'WT.si_cs' : wTsicsValue
                                                },
                                                callback: function (e) {
                                                    var chargePopin_interval;
                                                    if (typeof chargePopin_interval != 'undefined'){
                                                        clearInterval(chargePopin_interval);
                                                    }                   
                                                    // Ã‰tre RappelÃ© Soumission demande CT3 
                                                    $("#wcb_content .send").on('click', function(event) {
                                                        if (typeof chargePopin_interval != 'undefined'){
                                                            clearInterval(chargePopin_interval);
                                                        }                                                        
                                                        wTdlValue = '99';
                                                        wTtiValue = 'Ma Banque Mes Contacts - Ãªtre rappelÃ© soumission demande';
                                                        wTsinValue = 'Etre joint' ;
                                                        wTsixValue = '3' ;
                                                        wTsicsValue = "";
                                                        Webtrends.multiTrack({
                                                        args: {'WT.dl': wTdlValue,
                                                                'WT.ti': wTtiValue,
                                                                'WT.si_n' : wTsinValue,
                                                                'WT.si_x' : wTsixValue,
                                                                'WT.si_cs' : wTsicsValue
                                                                },
                                                                callback: function(e){                                                                    
                                                                    chargePopin_interval = setInterval(function() {
                                                                    if(  !$('#form_input').length  &&
                                                                        $("#wcb_content button.popin-close").text()=="Fermer"  )  {
                                                                        clearInterval(chargePopin_interval);
                                                                        wTdlValue = '0';
                                                                        wTtiValue = 'Ma Banque Mes Contacts - Ãªtre rappelÃ© validation';
                                                                        wTsinValue = 'Etre joint' ;
                                                                        wTsixValue = '4' ;
                                                                        wTsicsValue = "1";
                                                                        Webtrends.multiTrack({
                                                                         args: {'WT.dl': wTdlValue,
                                                                                'WT.ti': wTtiValue,
                                                                                'WT.si_n' : wTsinValue,
                                                                                'WT.si_x' : wTsixValue,
                                                                                'WT.si_cs' : wTsicsValue
                                                                                }
                                                                            });

                                                                        }
                                                                    }, 500);
                                                                }
                                                            });

                                                    });
                                                }

                                            });
                                    }
                                }
                            });

                });


                // Prendre RDV : CT4  
                $(".col-2:last .round-icon-container a",$_contacterBanquierContainerItemFirstRowSecondCol ).on('click', function(event) {
                    event.preventDefault();
                    urlToRedirect = $(this).attr("href");
                    wTdlValue = '99';
                    wTtiValue = 'Ma Banque Mes Contacts - prise de rdv';
                    wTsinValue = 'Prise RDV' ;
                    wTsixValue = '1';
                    wTsicsValue = "";
                    wTzClickcatValue = 'contact banquier prive';
                    wTzClickValue = 'Ma Banque Mes Contacts - prise de rdv';
                     Webtrends.multiTrack({
                                     args: {'WT.dl': wTdlValue,
                                            'WT.ti': wTtiValue,
                                            'WT.si_n' : wTsinValue,
                                            'WT.si_x' : wTsixValue,
                                            'WT.si_cs' : wTsicsValue,
                                            'WT.z_clickcat' : wTzClickcatValue,
                                            'WT.z_click': wTzClickValue
                                            },
                                            callback: function (e) {
                                                if (typeof(Storage) !== "undefined"){
                                                  window.sessionStorage.setItem('CT4', 'actived');
                                                  storageCT4 = window.sessionStorage.getItem('CT4');
                                                }
                                                window.location = urlToRedirect;
                                            }
                                        });
                });


                // Opposition carte : CT5 
                $_actionsRapides=$('.actions-rapides');
                $(".col-6:eq(0) a ", $_actionsRapides).on('click', function(event) {
                    event.preventDefault();
                    urlToRedirect = $(this).attr("href");
                    wTdlValue = '99';
                    wTtiValue = 'Ma Banque Mes Contacts - opposition carte';
                    wTzClickcatValue = 'urgence';
                    wTzClickValue = 'Ma Banque Mes Contacts - opposition carte';
                     Webtrends.multiTrack({
                                     args: {'WT.dl': wTdlValue,
                                            'WT.ti': wTtiValue,
                                            'WT.z_clickcat' : wTzClickcatValue,
                                            'WT.z_click': wTzClickValue
                                            },
                                            callback: function (e) {
                                                window.location = urlToRedirect;
                                            }
                                        });
                }); 
                // Opposition prelevements : CT6
                $(".col-6:eq(1) a ", $_actionsRapides).on('click', function(event) {
                    event.preventDefault();
                    urlToRedirect = $(this).attr("href");
                    wTdlValue = '99';
                    wTtiValue = 'Ma Banque Mes Contacts - opposition prelevements';
                    wTzClickcatValue = 'urgence';
                    wTzClickValue = 'Ma Banque Mes Contacts - opposition prelevements';
                     Webtrends.multiTrack({
                                     args: {'WT.dl': wTdlValue,
                                            'WT.ti': wTtiValue,
                                            'WT.z_clickcat' : wTzClickcatValue,
                                            'WT.z_click': wTzClickValue
                                            },
                                            callback: function (e) {
                                                window.location = urlToRedirect;
                                            }
                                        });
                });

                // Opposition prelevements : CT7
                $(".col-6:eq(2) a ", $_actionsRapides).on('click', function(event) {
                    event.preventDefault();
                    urlToRedirect = $(this).attr("href");
                    wTdlValue = '99';
                    wTtiValue = 'Ma Banque Mes Contacts - opposition chÃ¨ques';
                    wTzClickcatValue = 'urgence';
                    wTzClickValue = 'Ma Banque Mes Contacts - opposition chÃ¨ques';
                     Webtrends.multiTrack({
                                     args: {'WT.dl': wTdlValue,
                                            'WT.ti': wTtiValue,
                                            'WT.z_clickcat' : wTzClickcatValue,
                                            'WT.z_click': wTzClickValue
                                            },
                                            callback: function (e) {
                                                window.location = urlToRedirect;
                                            }
                                        });
                }); 

                // Opposition prelevements : CT8
                $(".col-6:eq(3) a ", $_actionsRapides).on('click', function(event) {
                    //console.log('bouton CT8');
                    event.preventDefault();
                    urlToRedirect = $(this).attr("href");
                    wTdlValue = '99';
                    wTtiValue = 'Ma Banque Mes Contacts - declaration sinistres';
                    wTzClickcatValue = 'urgence';
                    wTzClickValue = 'Ma Banque Mes Contacts - declaration sinistres';
                     Webtrends.multiTrack({
                                     args: {'WT.dl': wTdlValue,
                                            'WT.ti': wTtiValue,
                                            'WT.z_clickcat' : wTzClickcatValue,
                                            'WT.z_click': wTzClickValue
                                            },
                                            callback: function (e) {
                                                window.location = urlToRedirect;
                                            }
                                        });
                });                 

                 $_reclamation=$('.reclamation');
                 $(".contact .btn-primary", $_reclamation).on('click', function(event) {
                    event.preventDefault();
                    urlToRedirect = $(this).attr("href");
                    wTdlValue = '99';
                    wTtiValue = 'Ma Banque Mes Contacts - reclamation';
                    wTzClickcatValue = 'reclamation';
                    wTzClickValue = 'Ma Banque Mes Contacts - reclamation';
                     Webtrends.multiTrack({
                                     args: {'WT.dl': wTdlValue,
                                            'WT.ti': wTtiValue,
                                            'WT.z_clickcat' : wTzClickcatValue,
                                            'WT.z_click': wTzClickValue
                                            },
                                            callback: function (e) {
                                                window.location = urlToRedirect;
                                            }
                                        });
                });  
 

        }

        // page Prendre RDV suite Ã  acion sur CT4 'Prendre RDV' sur page Contact avec tracking du formulaire
/*        if (window.location.pathname.startsWith("/fr/banque-contact/prendre-rendez-vous") && (window.sessionStorage.getItem('CT4') =='actived')) {
        //if (url.match(/banque-contact\/prendre-rendez-vous/) !== null) {
            //console.log('prendre rendez vous');
            // TODO: tester si on est passÃ© par la page d'avant'
            $(window).on("load",function () {
                //console.log('IIF');
                var wTdlValue = '0';
                var wTtiValue = 'Ma Banque Mes Contacts - BNP Paribas Banque PrivÃ©e - formulaire';
                var wTsinValue = 'Prise RDV';
                var wTsixValue = '2';
                var wTsicsValue = "";
                setTimeout(function(){
                    Webtrends.multiTrack({
                        args: {
                            'WT.dl': wTdlValue,
                            'WT.ti': wTtiValue,
                            'WT.si_n': wTsinValue,
                            'WT.si_x': wTsixValue,
                            'WT.si_cs': wTsicsValue
                        },
                        callback: function (e) {
                            //console.log('1');
                            // $_wrapperWcmPrendreUnRDV = $("#wcm-l-prendre-rdv");
                            var $_btnprimarypullright = $(".btn-primary.pull-right");
                            //console.log('call back de suivant');
                            //console.log("longueur", $_btnprimarypullright.length);
                            var confirmationOk_interval;
                            console.log("confirmationOk_interval : ",confirmationOk_interval);
                            if (typeof confirmationOk_interval != 'undefined'){
                                //console.log("confirmationOk_interval : ",confirmationOk_interval);
                                //console.log('suppression de SetInterval confirmationOk_interval');
                                clearInterval(confirmationOk_interval);
                            } 
                            $(function () {
                                //console.log("longueur2", $_btnprimarypullright.length);
                                $("body").on('click', ".btn-primary.pull-right", function (event) {
                                    if (typeof confirmationOk_interval != 'undefined'){
                                        //console.log("confirmationOk_interval : ",confirmationOk_interval);
                                        //console.log('suppression de SetInterval confirmationOk_interval');
                                        clearInterval(confirmationOk_interval);
                                    }         
                                    //console.log('click bt suivant');
                                    var wTdlValue = '99';
                                    var wTtiValue = 'Ma Banque Mes Contacts - BNP Paribas Banque PrivÃ©e - sousmission demande';
                                    var wTsinValue = 'Prise RDV';
                                    var wTsixValue = '3';
                                    var wTsicsValue = "";
                                    Webtrends.multiTrack({
                                        args: {
                                            'WT.dl': wTdlValue,
                                            'WT.ti': wTtiValue,
                                            'WT.si_n': wTsinValue,
                                            'WT.si_x': wTsixValue,
                                            'WT.si_cs': wTsicsValue
                                        },
                                        callback : function(e){
                                            $(function () {
                                                confirmationOk_interval = setInterval(function() {  
                                                //console.log('confirmationOk_interval');   
                                                if( $(".confirmation.ok").css('display') !='none'  )  {
                                                    clearInterval(confirmationOk_interval);
                                                    //console.log('confirmation ok');
                                                    var wTdlValue = '0';
                                                    var wTtiValue = 'Ma Banque Mes Contacts - BNP Paribas Banque PrivÃ©e - validation';
                                                    var wTsinValue = 'Prise RDV' ;
                                                    var wTsixValue = '4' ;
                                                    var wTsicsValue = "1";
                                                    Webtrends.multiTrack({
                                                     args: {'WT.dl': wTdlValue,
                                                            'WT.ti': wTtiValue,
                                                            'WT.si_n' : wTsinValue,
                                                            'WT.si_x' : wTsixValue,
                                                            'WT.si_cs' : wTsicsValue
                                                            }
                                                        });
                                                    window.sessionStorage.removeItem('CT4');

                                                    }
                                                }, 500);
                                            });

                                        }
                                    });
                                });
                            });
                        }
                    });
                }, 500);
            });
            
        }*/

        // page Prendre RDV suite Ã  acion sur CT4 'Prendre RDV' sur page Contact Sans trÃ©acking du formualire
        if (window.location.pathname.startsWith("/fr/banque-contact/prendre-rendez-vous") && (window.sessionStorage.getItem('CT4') =='actived')) {
            // TODO: tester si on est passÃ© par la page d'avant'
            $(window).on("load",function () {
                setTimeout(function(){ 
                    var $_btnprimarypullright = $(".btn-primary.pull-right");
                    var confirmationOk_interval;
                    console.log("confirmationOk_interval : ",confirmationOk_interval);
                    if (typeof confirmationOk_interval != 'undefined'){
                        clearInterval(confirmationOk_interval);
                    } 
                    $(function () {
                        $("body").on('click', ".btn-primary.pull-right", function (event) {
                            if (typeof confirmationOk_interval != 'undefined'){
                                clearInterval(confirmationOk_interval);
                            }         
                            var wTdlValue = '99';
                            var wTtiValue = 'Ma Banque Mes Contacts - BNP Paribas Banque PrivÃ©e - sousmission demande';
                            var wTsinValue = 'Prise RDV';
                            var wTsixValue = '3';
                            var wTsicsValue = "";
                            Webtrends.multiTrack({
                                args: {
                                    'WT.dl': wTdlValue,
                                    'WT.ti': wTtiValue,
                                    'WT.si_n': wTsinValue,
                                    'WT.si_x': wTsixValue,
                                    'WT.si_cs': wTsicsValue
                                },
                                callback : function(e){
                                    $(function () {
                                        confirmationOk_interval = setInterval(function() {    
                                        if( $(".confirmation.ok").css('display') !='none'  )  {
                                            clearInterval(confirmationOk_interval);
                                            var wTdlValue = '0';
                                            var wTtiValue = 'Ma Banque Mes Contacts - BNP Paribas Banque PrivÃ©e - validation';
                                            var wTsinValue = 'Prise RDV' ;
                                            var wTsixValue = '4' ;
                                            var wTsicsValue = "1";
                                            Webtrends.multiTrack({
                                             args: {'WT.dl': wTdlValue,
                                                    'WT.ti': wTtiValue,
                                                    'WT.si_n' : wTsinValue,
                                                    'WT.si_x' : wTsixValue,
                                                    'WT.si_cs' : wTsicsValue
                                                    }
                                                });
                                            window.sessionStorage.removeItem('CT4');

                                            }
                                        }, 500);
                                    });
                                }
                            });
                        });
                    });
                }, 500);
            });
        }
    })();
});


//
// This script is designed to correct duplicate Webtrends cookies where multiple tags have been incorrectly configured to use different domains/sub-domains.
// This will attempt to read all Webtrends cookies, remove those set on the wrong domain and re-write onto the correct domain.
// Please check the configuration settings in the first code block.
//
// *** THE TAG "FPCDOM" CONFIGURATIONS MUST ALSO BE SET CORRECTLY BEFORE THIS FIX CAN BE APPLIED, OTHERWISE THE PROBLEM WILL PERSIST. ***
//
// Include this file in the page at any point BEFORE the existing Webtrends tag executes.
//
// SW @ Webtrends, November 2014
//

var wtCookies = {
  wrongDomain     : location.hostname.toLowerCase(),
  rightDomain     :  location.hostname.toLowerCase().match(/[^\.]+\.(.+)/)[1],  // strip initial "www." or other subdomain
  cookieName      : 'WT_FPC',  // default is WT_FPC
  cookieLifetime  : 34187400000,  // default is 63113851500ms (1.99 years)
  metaTagFix      : 'WT.z_cookieFix',  // for possible reporting purposes
  metaTagFixFail  : 'WT.z_cookieFixFail',  // for possible reporting purposes
  setMetaTags     : true,  //decide whether or not to set meata tags for reporting
  debug           : false  // enables console output
};

// Read the Webtrends cookie(s) and set in an array
wtCookies.readCookies = function (cookieName) {
  if (this.debug) { console.log ('readCookies(' + cookieName.toString() + ')'); }
  var re = new RegExp(cookieName + '=[^;]*', 'gi');
  var result = document.cookie.match(re);

  if (result) {
    // If we got a result array, just strip out the cookie name from the results.
    for (var i=0; i<result.length; i++) {
      result[i] = result[i].replace(cookieName + '=', '');
    }
  }
  else {
    // If we didn't get a result, set an empty array rather than a null value
    result = [];
  }
  return result;
};

// Split the Webtrends cookie into its constituent parts as an array of objects
wtCookies.splitCookies = function (cookieArray) {
  if (this.debug) { console.log ('splitCookies(' + cookieArray.toString() + ')');}
  var cookieObjs = [];
  var temp = [];
  // loop through multiple cookies
  for (var i=0; i<cookieArray.length; i++) {
    // split on both : and = chars
    temp = cookieArray[i].split(/[:=]/);
    // new cookie object
    cookieObjs[i] = {};
    // set the object with the various parts (name, value, name, value...)
    for (var j=0; j<temp.length; j=j+2) {
      cookieObjs[i][temp[j]] = temp[j+1];
    }
  }
  return cookieObjs;
};

// Set a Webtrends cookie
wtCookies.setCookie = function (cookieName, cookieValue, domain, lifetime) {
  if (this.debug) { console.log ('setCookie(' + cookieName.toString() + ', ' + cookieValue.toString() + ', ' + domain.toString() + ', ' + lifetime.toString() + ')');}
  // Calculate expiry date based on lifetime period
  var d = new Date();
  d.setTime(d.getTime() + lifetime);

  // Set cookie
  var temp = cookieName + '=' + cookieValue + '; expires=' + d.toUTCString() + '; domain=.' + domain + '; path=/;';
  if (this.debug) { console.log('Cookie: ' + temp);}
  document.cookie = temp;
};

// Delete a Webtrends cookie
wtCookies.deleteCookie = function (cookieName, domain) {
  if (this.debug) { console.log ('deleteCookie(' + cookieName.toString() + ', ' + domain.toString() + ')');}
  // Set a cookie with a negative lifetime
  this.setCookie(cookieName, '', domain, -999999999999);
};

// Set meta tag to indicate fix applied, or not, should be picked up by WT tag
wtCookies.setMeta = function (metaName, metaValue) {
  if (this.debug) { console.log ('setMeta(' + metaName.toString() + ', ' + metaValue.toString() + ')');}
  var meta = document.createElement('meta');
  meta.name = metaName;
  meta.content = metaValue;
  document.getElementsByTagName('head')[0].appendChild(meta);
};

// This is the main logic
wtCookies.run = function() {
  if (this.debug) { console.log ('run()');}
  // Read in the cookie(s)
  var cookies = this.readCookies(this.cookieName);

  // Only proceed if we got any cookies back
  if (cookies.length === 0) {
    if (this.debug) { console.log ('no cookies');}
    return;
  }

  // If we only have one cookie, we just want to make sure it's set on the right domain
  if (cookies.length == 1) {
    if (this.debug) { console.log ('1 cookie');}
    // Set on right domain.  This may overwrite existing, or set a new one, depending on what already exists
    this.setCookie(this.cookieName, cookies[0], this.rightDomain, this.cookieLifetime);
    //re-check in case this has created an additional cookie
    cookies = this.readCookies(this.cookieName);
    if (cookies.length == 1) {
      //this means it was overwritten without change, so we can just leave
      return;
    }
  }

  // From this point on, we have some work to do to attempt a fix

  // If we have two cookies
  if (cookies.length == 2) {
    if (this.debug) { console.log ('2 cookies');}
    // Compare the two cookies
    if (cookies[0] == cookies[1]) {
      if (this.debug) { console.log ('cookies identical');}
      // If exactly the same values, then just delete from wrong domain
      this.deleteCookie(this.cookieName, this.wrongDomain);
    }
    else {
      if (this.debug) { console.log ('cookies different');}
      // If different values, then split out into crumbs
      var cookieCrumbs = this.splitCookies(cookies);

      // Check IDs
      if (cookieCrumbs[0].id == cookieCrumbs[1].id) {
        if (this.debug) { console.log ('IDs identical');}
        //  If IDs match, find most recent values of ss, lv from the two cookies.
        // (We don't want to do this if IDs don't match because we don't know which should take priority)
        var id = cookieCrumbs[0].id;
        var ss = Math.max(cookieCrumbs[0].ss, cookieCrumbs[1].ss);
        var lv = Math.max(cookieCrumbs[0].lv, cookieCrumbs[1].lv);
        // Set on the correct domain with most recent values
        this.setCookie(this.cookieName, 'id=' + id + ':lv=' + lv + ':ss=' + ss, this.rightDomain, this.cookieLifetime);
      }
      // Delete wrong domain cookie (this will happen whether or not IDs match).
      this.deleteCookie(this.cookieName, this.wrongDomain);
    }
  }

  if (cookies.length > 2) {
    if (this.debug) { console.log ('3+ cookies');}
    // This should never happen, but if it does the best we can do is to delete the wrong domain cookie.
    this.deleteCookie(this.cookieName, this.wrongDomain);
  }

  // By this point, if everything is OK, we should just have one cookie.
  // If meta tag reporting is enabled, let's check.
  if (this.setMetaTags) {
    // Re-read the cookies
    cookies = this.readCookies(this.cookieName);
    if (this.debug) { console.log ('cookies left: ' + cookies.length.toString());}
    if (cookies.length == 1) {
      // Yes, it's all good!
      this.setMeta(this.metaTagFix, "1");
    }
    else {
      // Oh dear, something didn't work
      this.setMeta(this.metaTagFixFail, "1");
    }
  }
};

// ==== Polyfills ==
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.lastIndexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}
//==================

// Tracking Bon plans
(function() {
    $(function() {
        var link = $('.wrapper-bon-plan').find('a');
        var title = clearChars($('.wrapper-bon-plan').find('h4').text());
        var bonus = clearChars($('.wrapper-bon-plan').find('.avantage-promo').text());

        link.on('click', function(evt) {
            var url = $(this).attr('href');

            evt.preventDefault();
            evt.stopPropagation();

            var argsa = [
                'WT.dl','99',
                'WT.ti','Fiche detail bon plan - Bouton acces offre - ' + title + ' ' + bonus ,
                'WT.z_clickcat','Bons plans',
                'WT.z_click','Fiche detail bon plan - Bouton acces offre - ' + title + ' ' + bonus,
                'WT.cg_s','Offre detail bon plan'
            ];

             Webtrends.multiTrack({element:this, argsa:argsa, callback: function() {
                setTimeout(function() {
                    window.location = url;
                }, 200);
             }});
        });
    });
})();

$(function pdmCtaOuvrirUnCompte() {
    if (($("body").is(".part") || $("body").is(".pro"))) {
        $(function homePart() { // PDM - CTA Ouvrir un compte

            var isPart;
            var isPro;
            var isGoodContext = function isGoodContext() {
                var isGoodEnv = true;
                isPart = $("body").is(".part");
                isPro = $("body").is(".pro");
                var isGoodUnivers = isPart || isPro;
                var isGoodPage = true;
                var isGoodContext = isGoodEnv && isGoodUnivers && isGoodPage;

                return function () { return isGoodContext; };
            };
            isGoodContext();

            if (!window.location.pathname) {
                return;
            }

            var $body = $("body");
            var CTA1Sel = "#btn-devenir-client"; // changement de page
            var CTA2Sel = isPart && "#btn-suivi-dossier" || isPro && "#btn-modedemo"; // changement de page en part
            var CTA3Sel = isPart && "#btn-modedemo";
            var CTA4Sel = "#popin-modedemo .popin-content.confirmation a"; // changement de page
            var CTA5Sel = "#devenir-client-row a"; // changement de page
            var getArgs = function (o) {
                var _o = o || {};
                var argsPart = _o.part;
                var argsPro = _o.pro;

                if (isPart) {
                    return argsPart;
                } else if (isPro) {
                    return argsPro;
                }
            };

            $(CTA5Sel).each(function () {
                if (!isGoodContext()) {
                    return true;
                }
                var $this = $(this);
                var href = $this.attr("href");

                $this.removeAttr("href").attr("data-href", href);
                $this.css({
                    cursor: "pointer",
                    color: "#1b9b5b"
                });
            });

            $body.on("click", CTA1Sel, function (event) {
                if (!isGoodContext()) {
                    return true;
                }
                var $this = $(this);
                var args = getArgs({
                    part: {
                        'WT.dl': '99',
                        'dcsuri': '/fr/devenir-client-client-bnp-paribas',
                        'WT.ti': 'Devenir Client - Ouvrir un compte chez BNP Paribas',
                        'WT.z_originepage': window.location.pathname,
                        'WT.z_ctaposition': 'ouvrir un compte - header'
                    },
                    pro: {
                        'WT.dl': '99',
                        'dcsuri': 'devenir-client-pro/clic-acces-form-devenir-client',
                        'WT.ti': 'Devenir client pro - Clic acces form devenir client',
                        'WT.z_outil': 'Acces espace demo pro',
                        'WT.site': 'mabanquepro.bnpparibas'
                    }
                });

                event.preventDefault();
                Webtrends.multiTrack({
                    args: args,
                    callback: function () {
                        window.location = $this.data("href");
                    }
                });
            }).on("click", CTA2Sel, function (event) {
                if (!isGoodContext()) {
                    return true;
                }
                var $this = $(this);

                event.preventDefault();
                Webtrends.multiTrack({
                    args: getArgs({
                        part: {
                            'WT.dl': '99',
                            'dcsuri': '/fr/devenir-client-client-bnp-paribas',
                            'WT.ti': 'Suivre votre dossier - Ouvrir un compte chez BNP Paribas',
                            'WT.z_originepage': window.location.pathname,
                            'WT.z_ctaposition': 'suivi dossier ouverture compte - header'
                        },
                        pro: {
                            'WT.dl': '99',
                            'dcsuri': 'devenir-client-pro/clic-demo-espace-client',
                            'WT.ti': 'Devenir client pro - Clic demo espace client',
                            'WT.z_outil': 'Acces espace demo pro',
                            'WT.site': 'mabanquepro.bnpparibas'
                        }
                    }),
                    callback: function () {
                        if (isPart) {
                            window.location = $this.data("href");
                        } else if (isPro) {
                            var wf = GlobalSite.waitFor.bind(GlobalSite);
                            wf(function () {
                                return $("#popin-modedemo:not(.hidden)").length > 0; // affichage de la popin demo
                            }).then(function () {
                                Webtrends.multiTrack({
                                    args: {
                                        'WT.dl': '0',
                                        'dcsuri': 'devenir-client-pro/pop-in-demo',
                                        'WT.ti': 'Devenir client pro - Pop-in demo',
                                        'WT.z_outil': 'Acces espace demo pro',
                                        'WT.site': 'mabanquepro.bnpparibas'
                                    }
                                });
                            });
                        }
                    }
                });
            }).on("click", CTA3Sel, function (event) {
                if (!isPart) {
                    return true;
                }
                if (!isGoodContext()) {
                    return true;
                }
                event.preventDefault();
                Webtrends.multiTrack({
                    args: getArgs({
                        part: {
                            'WT.dl': '99',
                            'dcsuri': '/fr/devenir-client-client-bnp-paribas',
                            'WT.ti': "Site DÃ©mo - Devenir Client - Demonstration de l'espace client",
                            'WT.z_originepage': window.location.pathname,
                            'WT.z_ctaposition': 'demo espace client - header'
                        }
                    })
                });
            }).on("click", CTA4Sel, function (event) {
                if (!isGoodContext()) {
                    return true;
                }
                var $this = $(this);

                event.preventDefault();
                Webtrends.multiTrack({
                    args: getArgs({
                        part: {
                            'WT.dl': '99',
                            'dcsuri': '/fr/devenir-client-client-bnp-paribas',
                            'WT.ti': 'AccÃ©der au site  de dÃ©mo - popin'
                        },
                        pro: {
                            'WT.dl': '99',
                            'dcsuri': 'devenir-client-pro/pop-in-demo/clic-acceder-site-demo',
                            'WT.ti': 'Devenir client pro - Pop-in demo - Clic acceder site demo',
                            'WT.z_outil': 'Acces espace demo pro',
                            'WT.site': 'mabanquepro.bnpparibas'
                        }
                    }),
                    callback: function () {
                        window.location = $this.data("href");
                    }
                });
            }).on("click", CTA5Sel, function (event) { // TODO: version pro Ã  faire
                if (!isPart) {
                    return true;
                }
                if (!isGoodContext()) {
                    return true;
                }
                var $this = $(this);

                event.preventDefault();
                Webtrends.multiTrack({
                    args: {
                        'WT.dl': '99',
                        'dcsuri': '/fr/devenir-client-client-bnp-paribas',
                        'WT.ti': 'Devenir Client - Ouvrir un compte chez BNP Paribas',
                        'WT.z_originepage': window.location.pathname,
                        'WT.z_ctaposition': 'ouvrir un compte - body'
                    },
                    callback: function () {
                        window.location = $this.data("href");
                    }
                });
            });
        });
    } 
});

$(function(){ // tracking Landing page - Les fantastiques
    var isGoodEnv = true /* window.ENVIRONNEMENT === "PREVIEW" */;
    var isGoodUnivers = $("body").is(".part");
    var isGoodPage = window.location.pathname.includes("/notre-offre/credits/financements-et-formules-locatives-auto/les-fantastiques");
    var isGoodContext = isGoodEnv && isGoodUnivers && isGoodPage;

    if(!isGoodContext){
        return;
    }

    $(".wrapper-selection-auto a.btn-primary").click(function (event) {
        event.preventDefault(); // blocage du changement de page
        var href = $(this).attr("href");
        Webtrends.multiTrack({
            args: {
                'WT.dl': '99',
                'WT.ti': 'LP Les fantastiques - Etre rappelÃ© par un expert auto',
                'WT.z_clickcat': 'WCB',
                'WT.z_click': 'LP Les fantastiques - Etre rappelÃ© par un expert auto'
            },
            callback: function (a) {
                window.location = href;
            }
        });
    });
});

$(window).on('load', function tagguageMenuGauche() {
    var $body = $("body");
    if(!$body.is(".not-ie")){ // le temps de corriger
        return true;
    }
    var isGoodEnv = ($body.is(".part") || $body.is(".pro")) && !GlobalSite.isMobileTablet() && !(DeviceSize.getDeviceState() === 'mobile');

    if (!isGoodEnv) {
        return true;
    }
    //========
    var rootPath;
    var selecteur;
    var $selecteur;
    var url;
    var transformTagLabel;
    var handler;
    var isPart;
    var isPro;
    var isEspaceClient;
    var getParentLinkFromItemMenu;
    //========

   
    isPart = $body.is(".part");
    isPro = $body.is(".pro");
    isEspaceClient = $("#wcm-l-bottom-header-connected").length > 0;

    if (isEspaceClient || !isEspaceClient && !(isPart || isPro)) {
        return;
    }

    rootPath = isPart ? "barre-navigation" : "barre-navigation-pro";
    selecteur = '#header #mainMenu nav ul li';
    $selecteur = $(selecteur);
    url = document.createElement('a');
    transformTagLabel = function (tagLabel) {
        var result = ({
            "barre-navigation/Accueil-part-fr": "barre-navigation/a-la-une",
            "barre-navigation/le-mag": "barre-navigation/ma-banque-et-moi/le-mag",
            "barre-navigation/ideas": "barre-navigation/ma-banque-et-moi/ideas",
            "barre-navigation/tousconnectes": "barre-navigation/ma-banque-et-moi/tousconnectes",
            "barre-navigation-pro/espace-pro/bourse": "barre-navigation-pro/banque-contacts-pro/engagement-chartes-et-conventions"

        })[tagLabel];

        return result ? result : tagLabel;
    };

    if ($selecteur.length === 0) {
        return;
    }

    function getFilePathExtension(path) {
        var filename = path.split('\\').pop().split('/').pop();
        return filename.substr(( Math.max(0, filename.lastIndexOf(".")) || Infinity) + 1);
    }

    handler = function (before, event, level) {
        var pathname;
        var segments;
        var level;
        var $this;
        var href;
        var isEligible;
        var isLeaf;
        var isFilePage;
        var getLevel;

        if (typeof before === "function") {
            before(event);
        }

        $this = $(this);
        href = $this.attr('href');
        isEligible = (function () {
            var test;
            url.href = href;
            pathname = url.pathname + url.hash;
            isFilePage = !!getFilePathExtension((url.pathname || "").trim());
            if(lgMgt.isEnglish()) {
                test = !(pathname.startsWith('/en/') || pathname.startsWith('/le-mag/')) || pathname.startsWith('/en/login');
                test = !isFilePage && test;
                if (test) {
                    return false;
                }
                segments = pathname.startsWith('/le-mag') ? [pathname.replace(/\//g, "")] : pathname.split('/en/')[1].split('/');
            } else {
                test = !(pathname.startsWith('/fr/') || pathname.startsWith('/le-mag/')) || pathname.startsWith('/fr/connexion')
                test = !isFilePage && test;
                if (test) {
                    return false;
                }
                segments = pathname.startsWith('/le-mag')
                    ? [pathname.replace(/\//g, "")]
                    : !isFilePage
                        ? pathname.split('/fr/')[1].split('/')
                        :[];
            }

            return (level === 1) || (level === 2) || (level === 3);
        })();
        isLeaf = (function () {
            return !$this.data("isNotLeaf") && (($this.closest("li").find(">ul a[href]").length === 0) || (level === 3));
        })();

        if (isLeaf) {
            event.stopImmediatePropagation();
        }

        if (isEligible && (level >= 1)) {
            (function () {
                var tagLabel;

                tagLabel = transformTagLabel(
                    [rootPath]
                        .concat(segments.slice(0, level))
                        .join('/')
                );

                trace({
                    $this: $this,
                    pathname: pathname,
                    segments: segments,
                    tagLabel: tagLabel,
                    isEligible: isEligible,
                    isLeaf: isLeaf,
                    level: level
                });

                if (isLeaf) {
                    !isFilePage && Webtrends.multiTrack({
                        args: {
                            'WT.dl': '99',
                            'WT.ti': tagLabel,
                            'WT.es': tagLabel,
                            'WT.mc_id': tagLabel
                        },
                        callback: function () {
                            trace("on taggue et on redirige");
                            window.location = pathname;
                        }
                    });
                    window.setTimeout(function(){ // securite au cas ou le callback n'est pas appelÃ©
                        trace("on taggue et on redirige(timeout)");
                        window.location = pathname;
                    }, 1000);
                } else {
                    trace("on taggue sans rediriger");
                    Webtrends.multiTrack({
                        args: {
                            'WT.dl': '99',
                            'WT.ti': tagLabel,
                            'WT.es': tagLabel,
                            'WT.mc_id': tagLabel
                        }
                    });
                }
            })();
        }
    };
    getParentLinkFromItemMenu = function getParentLinkFromItemMenu($a) { // recuperation du lien
        var href;

        if ($a.length === 0) {
            return;
        }

        href = $a.get().map(function (a) {
            return a.pathname.split("/").slice(0, -1).join("/");
        }).reduce(function (acc, value, index, array) {
            var len = array.length;
            var nextItem = array[Math.min(index + 1, len - 1)];

            return value === acc ? value : nextItem;
        });

        return $("<a />").attr("href", href);
    };
    getLevel = function ($elt) {
        var result;

        result = [
            "nav > ul > li",
            "nav > ul > li > ul > li",
            "nav > ul > li > ul > li > ul > li"
        ].map(function (selector) {
            return $elt.is(selector) ? 1 : 0;
        }).indexOf(1) + 1;

        return result;
    };
    $selecteur.on("click", function (event) {
        var $target = $(event.target);
        var $this = $(this);
        var level = getLevel($this);
        //--
        var prevents = function (_event) {
            _event.preventDefault();
        };
        if ($target.is("a[href]")) {
            (handler.bind(event.target))(prevents, event, level);
        } else if ($target.is("li")) {
            (function () {
                var $a;

                $a = (function () {
                    var $result;
                    var _$a = $target.find(">a[href]").eq(0);

                    if (_$a.length > 0) {
                        $result = _$a;
                    } else {
                        $result = getParentLinkFromItemMenu($target.find("> ul a"));
                        $result.data("isNotLeaf", true);
                    }

                    return $result;
                })();
                ($a.length > 0) && (handler.bind($a))(void (0), event, level);
            })();
        } else if ($target.is("li > a[href] > span, li > span")) {
            (function () {
                var $a;

                $a = (function () {
                    var $result;
                    var _$a = $target.closest("a").eq(0);

                    if (_$a.length > 0) {
                        $result = _$a;
                    } else {
                        $result = getParentLinkFromItemMenu($target.find("~ul a"));
                        $result.data("isNotLeaf", true);
                    }

                    return $result;
                })();
                ($a.length > 0) && (handler.bind($a))(prevents, event, level);
            })();
        }
        //--
    });
});

$(function devenirClientEerDigital() {
    var $body = $("body");
    var isGoodEnv = true; //(window.ENVIRONNEMENT === "PREVIEW");
    var isGoodUnivers = $body.is(".part");
    var isGoodPage = window.location.pathname.endsWith("devenir-client-bnp-paribas");
    var isGoodContext = isGoodEnv && isGoodUnivers && isGoodPage;

    if (!isGoodContext) {
        return true;
    }

    var CTA1 = ".ouvrir-compte .main a.btn-primary:eq(0)";
    var CTA2 = ".ouvrir-compte .main a.btn-primary:eq(1)";
    var CTA3 = ".ouvrir-compte .devenir-client a.btn-primary";
    var $ouvrirCompte = $(".ouvrir-compte");

    $(CTA1).on("click", function (event) {
        var $this = $(this);

        event.preventDefault();

        Webtrends.multiTrack({
            args: {
                'WT.dl': '99',
                'WT.ti': 'EER digitale - dispatch - ael - devenir client',
                'WT.z_clickcat': 'Souscription',
                'WT.z_click': 'EER digitale - dispatch - ael - devenir client'
            },
            callback: function () {
                window.location = $this.attr("href");
            }
        });
    });

    $(CTA2).on("click", function (event) {
        var $this = $(this);

        event.preventDefault();

        Webtrends.multiTrack({
            args: {
                'WT.dl': '99',
                'WT.ti': 'EER digitale - dispatch - ap - devenir client',
                'WT.z_clickcat': 'Souscription',
                'WT.z_click': 'EER digitale - dispatch - ap - devenir client'
            },
            callback: function () {
                window.location = $this.attr("href");
            }
        });
    });

    $(CTA3).on("click", function (event) {
        var $this = $(this);

        event.preventDefault();

        Webtrends.multiTrack({
            args: {
                'WT.dl': '99',
                'WT.ti': 'EER digitale - ouvrir un compte',
                'WT.z_clickcat': 'Souscription',
                'WT.z_click': 'EER digitale - ouvrir un compte'
            },
            callback: function () {
                window.location = $this.attr("href");
            }
        });
    });

});

$(function faciliteDeCaisse() {
    var $body = $("body");
    var isGoodEnv = window.ENVIRONNEMENT === "PREVIEW" || window.ENVIRONNEMENT === "QUALIF";
    var isGoodUnivers = $body.is(".pro");
    var isGoodPage = window.location.pathname.includes("espace-pro/comptes-et-contrats");
    var isConnected = $("#wcm-l-bottom-header-connected").length > 0;
    var isGoodContext = isGoodEnv && isConnected && isGoodUnivers && isGoodPage;

    if (!isGoodContext) {
        return;
    }

    var getComptesFromInfoClient = function (infoClient) {
        var comptes, ref, ref1;

        comptes = (typeof infoClient !== "undefined" && infoClient !== null ? (ref = infoClient.data) != null ? (ref1 = ref.contrat) != null ? ref1.comptes : void 0 : void 0 : void 0) || [];

        return comptes;
    };

    var hasFaciliteDeCaisse = function (comptes) {
        return comptes.filter(function (item) {
            return item.montantDecouvertAutorise && item.montantDecouvertAutorise > 0;
        }).length > 0;
    };

    var wf = GlobalSite.waitFor.bind(GlobalSite);

    wf(function () {
        return sessionStorage.getItem('info_client');
    }).then(function mainAction() {
        var isUDC;
        var isROP;
        var infoClient = JSON.parse(sessionStorage.getItem('info_client'));

        if (hasFaciliteDeCaisse(getComptesFromInfoClient(infoClient))) {
            isUDC = window.location.pathname.endsWith("espace-pro/comptes-et-contrats") || window.location.pathname.endsWith("espace-pro/comptes-et-contrats/");
            isROP = window.location.pathname.endsWith("releve-operations");

            if (isUDC) {
                Webtrends.multiTrack({
                    args: {
                        'WT.dl': '0',
                        'WT.ti': "mes comptes et contrats - une des comptes avec facilitÃ© de caisse",
                    }
                });
            }

            if (isROP) {
                Webtrends.multiTrack({
                    args: {
                        'WT.dl': '0',
                        'WT.ti': "mes comptes et contrats - releve des opÃ©rations - facilite de caisse",
                    }
                });
            }
        }
    });
});

// Execute the script
try {
  wtCookies.run();
}
catch (e) {
  if (wtCookies.debug) { console.log(e); }
}