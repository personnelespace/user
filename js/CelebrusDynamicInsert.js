window.CelebrusDynamicInsert = {
	
	// set these values to be appropriate to the site being monitored 
	csaName:'BDDFCSA',
	tcpURL:urlDomain+'/rsc/contrib/script/celebrus/prod/CelebrusInsert.js',
	sslURL:urlDomain+'/rsc/contrib/script/celebrus/prod/CelebrusInsert.js',
	collectionDomain:'collect.dcrm.bnpparibas.fr',
	defaultToAnonymous:false,

	doInsert:function(checkCookie)
	{	
		try
		{
			if(checkCookie)
			{
				var p3pVal = this.findCookieVal(this.csaName+'P3P');
	
				if('optedOut' == p3pVal)
					return;
			}
					
			if(window[this.csaName+'wid'])
			{
				if(window[this.csaName+'doReInit'])
					window[this.csaName+'doReInit'](true);
			}
			else
			{
				this.addInsert();
			}
		}
		catch(e){}
	},
	
	addInsert:function()
	{
		try
		{
			var scriptTag = document.createElement('SCRIPT');
			
			var protocol = (''+location.protocol).toLowerCase();
			var targetURL;
			
			if('https:' == protocol)
				targetURL = this.sslURL;
			else
				targetURL = this.tcpURL;
			
			scriptTag.src = targetURL;
			
			if(document.body)
				document.body.appendChild(scriptTag);
		}
		catch(e){}
	},
	
	// find the given cookie value
	findCookieVal:function(key)
	{
		var valsArray = document.cookie.split('; ');
            
		for(var loop = 0; loop < valsArray.length; loop++)
		{
			var testPair = valsArray[loop].split('=');
            
			try
			{
				if(testPair[0] == key)
					return testPair[1];
			}
			catch(e){}
		};
		return null;
	},
	
	getCSAName:function()
	{
		return this.csaName;
	},
	
	getCollectionDomain:function()
	{
		return this.collectionDomain;
	},
	
	setCookieVal:function(v,e,u,cT,cpt,ctr,dmn,isDelete)
	{
		window[this.csaName+'SC'](v,e,u,cT,cpt,ctr,dmn,isDelete);
	},
	
	deleteCelebrusCookies:function(csaNameVal)
	{
		var collectionDomain = this.getCollectionDomain();
		
		var deleteDate=new Date();
		deleteDate.setFullYear(deleteDate.getFullYear()-1);
		var expiryString = deleteDate.toGMTString();
		
		//legacy cookies
		this.setCookieVal(csaNameVal+'DBID=0',expiryString,'','','','','',true);
		this.setCookieVal(csaNameVal+'uvt=0',expiryString,'','','','','',true);
		this.setCookieVal(csaNameVal+'key=0',expiryString,'','','','','',true);
		this.setCookieVal('usy46gabsosd=0',expiryString,'','','','','',true);
		this.setCookieVal('vtz47gabsosd=', expiryString,'','','','',collectionDomain,true);
		this.setCookieVal(csaNameVal+'CDuvt=', expiryString,'','','','',collectionDomain, true);
		this.setCookieVal(csaNameVal+'CDID=', expiryString,'','','','',collectionDomain,true);
		
		//latest format cookies
		this.setCookieVal(csaNameVal+'session=0', expiryString,'','','','','',true);
		this.setCookieVal(csaNameVal+'persisted=0', expiryString,'','','','','',true);
		this.setCookieVal(csaNameVal+'cdSession=0', expiryString,'','','','',collectionDomain,true);
		this.setCookieVal(csaNameVal+'cdPersisted=0', expiryString,'','','','',collectionDomain,true);
		
	},
	
	// 'allow' indicates whether collection should be allowed or not
	// isCrossDomain indicates whether an attempt should be made to
	// apply the cookie to the collection domain as well as the current domain
	setCollection:function(allow, isCrossDomain)
	{
		var csaName = this.getCSAName();
		var cookieToAdd = '';
		var expireDate=new Date();
		expireDate.setFullYear(expireDate.getFullYear()+20);
	
		if(allow)
		{
			cookieToAdd = csaName+'P3P=optedIn';
		}	
		else
		{
			cookieToAdd = csaName+'P3P=optedOut';
		}
	
		this.setCookieVal(cookieToAdd, expireDate.toGMTString());
		
		if(isCrossDomain)
		{
			this.setCookieVal(cookieToAdd, expireDate.toGMTString(), '','','','',this.collectionDomain);
		}
	
		if(allow)
		{
			this.doInsert(false);
		}
		else
		{
			window[csaName+'oTP']=false;
			this.deleteCelebrusCookies(csaName);
		}
	},
	
	// isCrossDomain indicates whether an attempt should be made to
	// apply the cookie to the collection domain as well as the current domain
	setCollectionAnonymous:function(isCrossDomain)
	{
		var csaName = this.getCSAName();
		
		var p3pVal = this.findCookieVal(this.csaName+'P3P');
	
		if('anonymous' == p3pVal)
			return;
					
		var cookieToAdd = '';
		var expireDate=new Date();
		expireDate.setFullYear(expireDate.getFullYear()+20);
	
		cookieToAdd = csaName+'P3P=anonymous';
		this.setCookieVal(cookieToAdd, expireDate.toGMTString());
		
		if(isCrossDomain)
		{
			this.setCookieVal(cookieToAdd, expireDate.toGMTString(), '','','','',this.collectionDomain);
		}
		
		this.doInsert(false);
	},
	
	// decides whether to add the insert depending on either the current first party P3P value if it is present
	// or the default optOut status as defined above
	doInsertOperation:function(optOutByDefault)
	{
		var csaName = this.getCSAName();
		var existingP3PVal = this.findCookieVal(csaName+'P3P');
	
		if((existingP3PVal)||(!optOutByDefault))
		{
			if(existingP3PVal)
			{
				this.doInsert(true);
				return;
			}
			
			if(this.defaultToAnonymous)
			{
				this.setCollectionAnonymous();
			}
			else
			{
				this.doInsert(true);
			}
		} 
		else
		{
			// if status is not opt-in delete any existing Celebrus cookies
			this.deleteCelebrusCookies(csaName);
		}	
	}
};window.BDDFCSASC||(window.BDDFCSASC=function(a,g,c,b,h,e,f,k){var d=document,l=window;b=a+"; path=/;";var p=a.split("=");if(l.BDDFCSAuSC){if("https:"!=location.protocol)return;b+=" secure;"}var m=b;g&&(b=b+"expires="+g);";"==b.charAt(b.length-1)&&(b=b.substring(0,b.length-1));l.BDDFCSAGD&&(d.cookie=b+l.BDDFCSAGD());if(k||!(-1<d.cookie.indexOf(a))||g)if(c=location.hostname,h=c.split("."),f)d.cookie=b+";domain="+f;else{if(2<=h.length){e=h.length-2;f="."+h[e+1];do if(f="."+h[e]+f,d.cookie=
b+"; domain="+f,e--,k)try{if(-1==document.cookie.indexOf(p[0]+"="))return}catch(q){}while((k&&-1<d.cookie.indexOf(p[0]+"=")||!k&&-1==d.cookie.indexOf(a))&&0<=e);if(!k&&-1==d.cookie.indexOf(a)&&m)for(e=h.length-2,f="."+h[e+1];-1==d.cookie.indexOf(a)&&0<=e;)f="."+h[e]+f,d.cookie=m+" domain="+f,e--}0!==location.href.indexOf("file://")&&(k&&-1<d.cookie.indexOf(a)||!k&&-1==d.cookie.indexOf(a))&&(k?(c=new Date,c.setFullYear(1970),d.cookie=m+" domain="+location.hostname+"; expires="+c.toGMTString()):d.cookie=
m+" domain="+location.hostname);if(!k&&-1==d.cookie.indexOf(a)||k&&-1<d.cookie.indexOf(a)&&!l.BDDFCSAuSC){a=a.split("=");try{var n=window.sessionStorage;g&&(n=window.localStorage);n&&(a[1]&&-1<a[1].indexOf(";")&&(a[1]=a[1].substring(0,a[1].indexOf(";"))),k?n.removeItem(a[0]):n.setItem(a[0],a[1]));return}catch(q){}l.BDDFCSASF=1}}});
window.BDDFCSAfindCookieVal=function(a,g){if(document.cookie)for(var c=document.cookie.split("; "),b=0;b<c.length;b++){var h=c[b].split("=");try{if(h[0]==a)return h[1]}catch(f){}}c="";try{var e=window.sessionStorage;if(g||"BDDFCSAuvt"==a||"BDDFCSADBID"==a||"BDDFCSApersisted"==a)e=window.localStorage;e&&(c=e.getItem(a))}catch(f){}return c};
window.BDDFCSAdeleteLegacyCookies=function(){var a=!0,g=BDDFCSAfindCookieVal("COOKIE_ID",!1);g&&1<g.split("::").length&&(a=!1);if(document.cookie)window.BDDFCSASC&&(a&&window.BDDFCSAdoDeleteCookie("COOKIE_ID"),window.BDDFCSAdoDeleteCookie("BDDFCSAuvt"),window.BDDFCSAdoDeleteCookie("BDDFCSAkey"),window.BDDFCSAdoDeleteCookie("BDDFCSADBID"));else try{window.sessionStorage&&(a&&window.sessionStorage.removeItem("COOKIE_ID"),window.sessionStorage.removeItem("BDDFCSAkey")),
window.localStorage&&(window.localStorage.removeItem("BDDFCSAuvt"),window.localStorage.removeItem("BDDFCSADBID"))}catch(c){}};window.BDDFCSAdoDeleteCookie=function(a,g){var c=new Date;c.setFullYear(1970);window.BDDFCSASC&&window.BDDFCSASC(a+"=0",c.toGMTString(),"","","","",g,!0)};
window.CelebrusDynamicInsert.doInsertOperation(false);