(function() {

  if (!window.GetURLParameter)
  {
    window.GetURLParameter = function(sParam) {
      var sPageURL = window.location.search.substring(1);
      var sURLVariables = sPageURL.split('&');
      for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
          return sParameterName[1];
        }
      }
    }
  }

  var whitelist = function(){
    return true;
    //return /fr\/connexion\/virements-services\/rib/.test(document.location.pathname);
  };

  var isPriority = function () {
    var infoClient = sessionStorage.getItem('info_client');

    if (!infoClient) { return false; }
    try{return JSON.parse(infoClient).data.indicateurs.indicPriority;}catch(e){return false;}
  };

  // General switches
  var isProdActivated = function () {
    return sessionStorage.getItem("dtm-Activated") === 'false' ? false : (sessionStorage.getItem("dtm-Activated") === 'true' || /** COMMUTATOR **/ whitelist() /** DO NOT REMOVE**/) || isPriority();
  };

  var isStagingActivated = function() {
    return sessionStorage.getItem("dtm-Activated") === 'false' ? false : (sessionStorage.getItem("dtm-Activated") === 'true' || /** COMMUTATOR **/ whitelist() /** DO NOT REMOVE**/) || isPriority();
  };

  var dtmHost;
  var script;
  var scripts = {
    SelfHosted: {
      PREVIEW: '/rsc/contrib/script/dtm/d122cc2652677fff54494c415efa41a45b0164bc/satelliteLib-cf28a06dbec8714383fde6faf0a3733075fff226.js',
      PROD: '/rsc/contrib/script/dtm/d122cc2652677fff54494c415efa41a45b0164bc/satelliteLib-cf28a06dbec8714383fde6faf0a3733075fff226.js'
    },
    Akamai: {
      PREVIEW: '//assets.adobedtm.com/37617e04bc40/148ea22e9d02/launch-28ef65699427-development.min.js',
      PROD: 'https://assets.adobedtm.com/d122cc2652677fff54494c415efa41a45b0164bc/satelliteLib-cf28a06dbec8714383fde6faf0a3733075fff226.js'
    }
  };
  var mode = GetURLParameter('mode');

  var isEnv = function(strToTest) { return window.ENVIRONNEMENT && window.ENVIRONNEMENT === strToTest };
  var isMode = function(mode) { return (window.GetURLParameter && GetURLParameter("mode") === mode) };
  var getTimestamp = function() { var now = Date.now(); return now - now % (15 * 60 * 1000) };

  var webviewiOS = !!window.navigator.platform && /iPad|iPhone|iPod/.test(window.navigator.platform) && GetURLParameter('rc') === 'webview';

  if (typeof mode !== 'undefined') {
    var modes = mode.split('|');
    for (var m in modes) {
      switch (modes[m]) {
        case 'dtm-Activated':
          sessionStorage.setItem('dtm-Activated', true);
          break;

        case 'dtm-Deactivated':
          sessionStorage.setItem('dtm-Activated', false);
          break;

        case 'dtm-Akamai':
          sessionStorage.setItem('dtm-Akamai', true);
          break;

        default:
          break;
      }
    }
  }

  dtmHost = ( isEnv('PREVIEW') || (mode == 'dtm-Akamai') || window.ENV_IS_CAS) ? 'Akamai' : 'SelfHosted';

  if (!isEnv("PROD") && !isEnv("PREVIEW") && !isEnv("QUALIF") && !isEnv("MOBILE")) { return false; } // Returns if we're not on an "approved" environment ("PREVIEW" & "QUALIF" & "PROD" only)
  else { script = (isEnv("PROD") || isMode("PROD") || isEnv("MOBILE") || isMode("MOBILE")) ? scripts[dtmHost].PROD : scripts[dtmHost].PREVIEW; }

  // Load the header and footer code into the <head> and <body> tags
  if (script && !webviewiOS) {
      window.addEventListener('load', function() {
        _satellite.notify("******************************", 3);
        _satellite.notify("EVENT LOAD", 3);
        if (typeof _satellite.pageBottomFired === 'undefined' || !_satellite.pageBottomFired) {
          _satellite.pageBottom();
          if (dtmHost === 'Akamai') { _satellite.setDebug(true); }
          _satellite.notify('--> Satellite footer code loaded <--');
        }
      });

      // Inject the script synchronously
	  if (window.bnpp && window.bnpp.gestioncookies)
		document.write('<scr'+'ipt type="text/javascript" src="' + script + '"></scr'+'ipt>');
	  else
		setTimeout(function(){
		  function addScript(src, mod) { if (mod) { var d = new Date(); var t = d - (d % mod); src+="?"+t; } var s = document.createElement( 'script' ); s.setAttribute( 'src', src ); document.head.appendChild( s ); };
		  addScript(script); 
        },50);
  }
})();