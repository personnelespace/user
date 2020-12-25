(function() {
    var whitelist = function(){
       if (window.ENVIRONNEMENT == "PREVIEW")
           return /fr\/devenir-client-bnp-paribas/.test(document.location.pathname) 
               || /rsc\/contrib\/minisite\/landing\/ouvrir-un-compte-bnpparibas/.test(document.location.pathname)
               || /rsc\/contrib\/minisite\/landing\/votre-compte-en-ligne/.test(document.location.pathname)
               ;

       else
           return /fr\/devenir-client-bnp-paribas/.test(document.location.pathname) 
               || /rsc\/contrib\/minisite\/landing\/ouvrir-un-compte-bnpparibas/.test(document.location.pathname)
               || /rsc\/contrib\/minisite\/landing\/votre-compte-en-ligne/.test(document.location.pathname)
               ;
   };
   var isActivated = function () {
       //return window.ENVIRONNEMENT == "PREVIEW" || sessionStorage.getItem("kameleoon") === 'true' ? true : false;
       return sessionStorage.getItem("kameleoon") === 'false' ? false : true;
   };
   if (window.GetURLParameter && window.GetURLParameter("mode") && window.GetURLParameter("mode") == "kameleoon")
       sessionStorage.setItem("kameleoon", true);
   if (isActivated() && whitelist() && !window.abtesting) {
       window.abtesting = true;
       $.ajax({
           dataType: "script",
           cache: true,
           url: '//static-bp.kameleoon.com/css/customers/qx8grdsvgh/0/kameleoon.js'
       })
       //$.getScript('//static-bp.kameleoon.com/css/customers/qx8grdsvgh/0/kameleoon.js', function() {});
   }


   var whitelistabtasty = function(){
       if (window.ENVIRONNEMENT != "PREVIEW" && sessionStorage.getItem("abtasty")!="true")
           return false;
       if (window.ENVIRONNEMENT == "PREVIEW")
           return /\/fr\/deconnexion/.test(document.location.pathname)
               || /\/fr\/assurer\/logement\/assurance-habitation/.test(document.location.pathname)
               || /\/fr\/gerer\/services-lies-compte\/options-et-services\/cle-digitale/.test(document.location.pathname)
               ;

       else
           return /\/fr\/deconnexion/.test(document.location.pathname)
               || /\/fr\/assurer\/logement\/assurance-habitation/.test(document.location.pathname)
               || /\/fr\/gerer\/services-lies-compte\/options-et-services\/cle-digitale/.test(document.location.pathname)
               ;
   };	
   if (window.GetURLParameter && window.GetURLParameter("mode") && window.GetURLParameter("mode") == "abtasty")
       sessionStorage.setItem("abtasty", true);
   if (whitelistabtasty())
   {
       var urlScript = "/rsc/contrib/script/a-b-testing/";
       if (sessionStorage.getItem("abtasty")=="true")
           urlScript = "//try.abtasty.com/";
       if(window.ENVIRONNEMENT == "PREVIEW" && sessionStorage.getItem("abtasty")=="true")
           urlScript += "1020ddba405b39066f02662074e1362c.js";
       else
           urlScript += "d5fe472b977fbada3e61dc96cdc027ab.js";
       var now = Date.now();
       urlScript += "?t=" + (now - now % (15 * 60 * 1000));
       $.getScript(urlScript);
   }
})();
