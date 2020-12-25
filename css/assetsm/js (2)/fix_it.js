//$(window).on("load", function() {
    //if (document.getElementById('logoutCAS')) document.getElementById('logoutCAS').href = "javascript:logout()";
    //extendSessionSSO();
//});

//Recuperation URl CAS en fonction de l'environnement ( inte, qual, bench, prev, prod)
function getUrlCas(){
   var urlBaseCas;
   //NB: pas d'environnement BENCH => utilisation de l'environnement par defaut "NO_ENV" en attendant création environnements
   urlBaseCas = {
      PROD: "https://connexion-mabanque.bnpparibas",
      MACHINE: "https://connexion-mabanque.bnpparibas",
      PREVIEW: "https://prev.connexion-mabanque.bnpparibas",
      QUALIF: "https://login.mabanque.staging.bnpparibas.net",
      INTE: "https://login.mabanque.dev.echonet",
      NO_ENV:"https://login.mabanque-bench.staging.echonet"
   }[window.ENVIRONNEMENT];       
   return urlBaseCas;
}

//logout MB
function logoutSEEA(){ 
 var timestamp = Math.floor(Date.now());
 window.location.assign("/SEEA-pa01/logoff?param2="+timestamp);
}

//logout CAS + SEEA
//logout CAS + SEEA
function logout(){ 
  var urlCas = getUrlCas();
  
  if ("" != urlCas && "undefined" != typeof urlCas) { 
    //patch : logout CAS en GET avec redirection logout SEEA
    var timestamp = Math.floor(Date.now());
    var urlLogoutSEEA = window.location.origin + "/SEEA-pa01/logoff?param=" + timestamp;
    window.location.assign(urlCas + "/logout?service=" + encodeURI(urlLogoutSEEA));  
    console.log("Success : confirmed logout"); 
    /*$.ajax({
        //logout CAS 
        url : urlCas + '/logout',
        xhrFields: { withCredentials: true },
        success : function(data) {
            console.log(data);
            console.log("Success : confirmed logout");
            logoutSEEA();
      },
      error : function() {
          console.log("Error : failed logout");
          logoutSEEA();
        }
    });*/
  } else {
    //patch : pas de logout SEEA sans logout CAS
    //logoutSEEA();
    console.log("Error : failed logout");
  } 
}

//maintien de session CAS
function extendSessionSSO(){ 
 if(window.location.pathname.indexOf('/fr/connexion/') >-1  || window.location.pathname.indexOf('/fr/espace-prive/') >-1 || window.location.pathname.indexOf('/fr/espace-pro/') >-1 ){
   var urlCas = getUrlCas(); 
     if (urlCas != '' && typeof urlCas !== 'undefined'){  
       $.ajax({ 
         url : urlCas + '/keepaliveSSO', 
         xhrFields: { withCredentials: true }, 
         success : function(data) { 
             console.log(data); 
             console.log("Success : SSO Session extended."); 
         }, 
         error : function() { 
           console.log("Error : Can't extend SSO Session !"); 
         } 
       }); 
     }
   }
}