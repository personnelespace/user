// Gestion consentement cookie audience

    // Global site tag (gtag.js) - Google AdWords: 955257480

    var a=document.createElement("script");
    var b=document.getElementsByTagName("body")[0];
    a.src="https://www.googletagmanager.com/gtag/js?id=AW-955257480";
   	a.type="text/javascript";
    b.appendChild(a);

    // Config PART du tag
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}

    gtag('js', new Date());
    gtag('config', 'AW-955257480');
    gtag('config', 'AW-988466996');
    gtag('config', 'DC-9849332');

    gtag('event', 'conversion', {
    'allow_custom_scripts': true,
    'u1': _satellite.getVar('pageNameDE'),
    'u2': _satellite.getVar('hostName'),
    'send_to': 'DC-9849332/bnp_coun/viewpage+standard'
    });
    gtag('event', 'conversion', {
    'allow_custom_scripts': true,
    'send_to': 'DC-9849332/bnp_coun/visits+unique'
    });
    
