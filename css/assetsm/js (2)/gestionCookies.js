function initGestionCookies(item, Obj, callback)
{
    var $ = bnpp.$ ? bnpp.$ : jQuery;
    if (document.querySelectorAll('#cookiesPopin').length > 1) $('#nextoutils_gestionCookies_landing').remove(); 
    var popin = $('#cookiesPopin');
    if (bnpp.gestioncookies.valid()) {
        popin.remove();
        if (callback) callback();
        return;
    }

    var file = location.host.indexOf('hellobank') != -1 ? 'hb' : 'bnp';
    if (file == 'hb') $('body').addClass('hb');
    popin.load('/rsc/contrib/script/simulateur/gestionCookies/gestionCookies-'+file+'.html', function() {
        popin.removeClass('hidden');
            if (/rc\=nopopin/.test(document.location.search) || sessionStorage.getItem('nopopin'))
            return;
        if (/rc\=webview/.test(document.location.search) || /rc\=mobile/.test(document.location.search) || /redir\=webview/.test(document.location.search) || /mode\=webview/.test(document.location.search))
            return;
        function initInternal()
        {
            Popin.init();
            if (!bnpp.gestioncookies.valid())
            {
                bnpp.gestioncookies.celebrus(false);
                bnpp.gestioncookies.cookieNavDisable();
            }
            if (!bnpp.gestioncookies.fonctionalite())
                bnpp.gestioncookies.fonctionalite("0");
            if (!bnpp.gestioncookies.audience())
                bnpp.gestioncookies.audience("0");
            if (!bnpp.gestioncookies.publicite())
                bnpp.gestioncookies.publicite("0");
            if (!bnpp.gestioncookies.reseauxSociaux())
                bnpp.gestioncookies.reseauxSociaux("0");
            $("#"+item+" input[data-key]").change(function(e){
                var key = $(this).data("key");
                bnpp.gestioncookies[key]($(this).prop("checked")?"1":"0");
            });
            $("#"+item+" #cookiesPopinYesAll, #"+item+" #cookiesPopinYesParams, #"+item+" #cookiesPopinNoParams" ).click(function(e){
                var check = $(this).hasClass("accept-all");
                var close = $(this).hasClass("accept-close");
                bnpp.gestioncookies.technique(check?"1":"0");
                bnpp.gestioncookies.fonctionalite(check?"1":"0");
                bnpp.gestioncookies.audience(check?"1":"0");
                bnpp.gestioncookies.publicite(check?"1":"0");
                bnpp.gestioncookies.reseauxSociaux(check?"1":"0");
                if (close)
                {
                    bnpp.gestioncookies.save();
                    Popin.hidePopin();
                    popin.remove();
                    $('.popin-cache').remove();
                }
                else
                {
                    $("input[data-key]").each(function(){
                        $(this).prop("checked", bnpp.gestioncookies[$(this).data("key")]());
                    });
                }
            });
            $("#"+item+" #cookiesPopinSaveAndClose").click(function(e){
                bnpp.gestioncookies.save();
                Popin.hidePopin();
                $('.popin-cache').remove();
            });
            $("input[data-key]").each(function(){
                $(this).prop("checked", bnpp.gestioncookies[$(this).data("key")]());
            });
        
            $("input[data-key='fonctionalite']")[0].ckecked = bnpp.gestioncookies.fonctionalite()=="1";
            $("input[data-key='audience']")[0].ckecked = bnpp.gestioncookies.audience()=="1";
            $("input[data-key='publicite']")[0].ckecked = bnpp.gestioncookies.publicite()=="1";
            $("input[data-key='reseauxSociaux']")[0].ckecked = bnpp.gestioncookies.reseauxSociaux()=="1";  
            if (callback) callback();
        }
        if(/\/cookie\/{0,1}$|\/cookies\/{0,1}$/.test(document.location.pathname))
        {
            $("#openPopinGestionCookies").click(function(){
                initInternal();
                $("#cookiesPopin #popin-main-checkbox").prop("checked", true);
                $("#cookiesPopin #cookiesPopinBack").addClass("hidden");
                Popin.showPopin($("#"+item));
            });
        
            return;
        }
        initInternal()
        Popin.showPopin($("#"+item));
        $('.popin-cache').addClass("noclick");
        $('.popin-cache.noclick').click(function(e){
            e.stopPropagation();
            e.stopImmediatePropagation();
            e.preventDefault();
        });
    });
}


function initGestionCookiesLanding(item, Obj) {
    initGestionCookies(item, Obj, function() {
        if (bnpp && bnpp.gestioncookies) {
            var currentPrivacy = bnpp.gestioncookies.getQueryParameter();
            var $iframeLoaded = $('#formulaire iframe');
            var originalSrc = $iframeLoaded.attr('src');
            var src = '';
            var addPrivacy = function() {
                currentPrivacy = bnpp.gestioncookies.getQueryParameter();
                if (originalSrc) {
                    var querySeparator = originalSrc.indexOf('?') != -1 ? '&' : '?';
                    src = originalSrc + querySeparator + currentPrivacy;
                    $iframeLoaded.attr('src', src);
                }
            };
            addPrivacy()
    
            setInterval(function() {
                if (currentPrivacy != bnpp.gestioncookies.getQueryParameter()) {
                    addPrivacy();
                }
            }, 500);
        }
    });
}