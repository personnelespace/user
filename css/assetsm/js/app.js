/********************************************
     app.js version 2.5    
1.1 : 
    - Simplification
    - Fusion des prérequis des outils au require
1.2 : 
    - Ajout de displayPopin
1.3 : 
    - Nettoyage maConfig
1.4 : 
    - Webtrends
1.5 : 
    - init et sessionStorage
2.0 :
    - Chargement sans zone html
2.5 :
    - Chargement des outils en attente. Pour inscrire un outil :
    if(!window.appwaiting)
        window.appwaiting = [];
    window.appwaiting.push({id:id, connected:0/1});
    if (window.OApp)
        OApp.runWaiting();
*********************************************/

function AppInit() {
    this.delta;
    this.dateServ;
    this.dateClient;
    this.formule;
    this.xhr;
    this.popin = $('<div id="apppopin" class="popin popin-alert hidden"> <a class="close popin-close">✕</a> <div class="popin-content confirmation"><h3 class="popin_title"></h3> <p class="head"></p><div id="apppopin_content"> </div></div> </div> ');
    this.content = $('<div id="apppopin" class=" row wrapper-redirection"><header class="header-page has-onglet" style="height: 0px; min-height:0; padding: 0px;/*margin-bottom: -25px*/"></header><div id="apppopin_content"/></div>');
    this.maConfig = {
        baseUrl: "/rsc/contrib/script",
        paths: {
            jquery: "generique/jquery-1.11.0.min",
            jqueryUI: "generique/jquery-ui-1.10.4.custom.min",
            jqueryValidate: "generique/jquery.validate.min",
            jquerynanoscroller: "generique/jquery.nanoscroller",
            ccnet: "generique/ccnet_tools",
            datepicker : "simulateur/datepicker",
            formHelper : "simulateur/formHelper",
            deviceSize : "simulateur/deviceSize",
            globalSite : "simulateur/globalSite",
            apim : "simulateur/apim.class"
        },
        shim: {
            ccnet: {
                deps: ["jquery"]
            },
            jqueryUI: {
                deps: ["jquery"],
                test: "jQuery && jQuery.ui"
            },
            jqueryValidate: {
                deps: ["jquery"],
                test: "jQuery && jQuery.validator"
            },
            jquerynanoscroller: {
                deps: ["jquery"]
            },
            jquery: {
                test: "jQuery"
            },
            datepicker: {
                test: "window.Datepicker"
            },
            globalSite: {
                test: "window.GlobalSite"
            },
            formHelper: {
                deps: ["deviceSize"],
                test: "window.FormHelper"
            },
            apim: {
                test: "window.APIM"
            }
        },
        urlArgs: "appVersion=2.0"
    };

    if (window.bnpp) {
        this.maConfig.paths = $.extend(true, {}, this.maConfig.paths, bnpp.config.require.paths);
        this.maConfig.shim = $.extend(true, {}, this.maConfig.shim, bnpp.config.require.shim);
    }
    this.WS = Array();

    jQuery(document).delegate('#apppopin .popin-close', 'click', function() {
        Popin.hidePopin($('#apppopin'));
        jQuery('#apppopin').remove();
    });

    jQuery(document).delegate('#apppopin .degrade-hover', 'click', function(e) {
        //e.preventDefault();
        jQuery(this).find('a')[0].click();
    });

    jQuery(document).delegate('#lireMessage', 'DOMSubtreeModified', function(e) {
        if (window.OApp) OApp.runLoading();
    });

    jQuery(document).on('click', '.nextoutilsLoaded [tagmedia]:not([tagmedia=""]), .popin [tagmedia]:not([tagmedia=""])', function(e) {
        OApp.runTag($(this).attr("tagmedia"), $(this).attr("tagmedia-value"));
        return true;
    });
    jQuery(document).on('click', '.nextoutilsLoaded [dcsMultiTrack]:not([dcsMultiTrack=""]), .popin [dcsMultiTrack]:not([dcsMultiTrack=""])', function(e) {
        var dl = $(this).attr("dcsMultiTrack-dl");
        if (!dl)
            dl = "0";
        var title = $(this).attr("dcsMultiTrack-title");
        dcsMultiTrack('DCS.dcsuri', document.location.pathname + "/" + $(this).attr("dcsMultiTrack"), 'WT.ti', title + '/' + $(this).attr("dcsMultiTrack"), 'WT.z_click', title + '/' + $(this).attr("dcsMultiTrack"), 'WT.dl', dl, 'WT.z_clickcat', 'informations');
        return true;
    });
    jQuery(document).on('click', '.nextoutilsLoaded [uti027]:not([uti027=""]), .popin [uti027]:not([uti027=""])', function(e) {
        OApp.runUti027($(this).attr("uti027"));
        return true;
    });
}
(function(document, window, $) {
    if (!$)
        return;
    AppInit.prototype = {
        init: function(){
            this._init = true;
            this.runLoading();
            this.runWaiting();
        },
        runLoading: function(idObj, callback) {
            this.loadelem(idObj, callback);
        },
        runWaiting : function() {
            if (!this._init)
                return;
            if (window.appwaiting && Array.isArray(window.appwaiting)){
                for (var cptI = window.appwaiting.length - 1 ; cptI >= 0 ; cptI--)
                {
                    if (window.appwaiting[cptI].connected === undefined || (!window.appwaiting[cptI].connected && !this.isConnected()) || this.isConnected())
                        this.loadelem(window.appwaiting[cptI].id);
                        window.appwaiting.splice(cptI, 1);
                }
            }
        },
        log: function(message) {
            if (/.canalnet-part/.test(document.location.href) || /.hellobank-part/.test(document.location.href))
            {
                console.log("AppInit : ");
                console.log(message);
            }
        },
        testforpopin: function(infopopin) {
            var result;
            if (infopopin.connected) {
                if (this.isConnected() && infopopin.connected == '1') {
                    result = true;
                } else if (!this.isConnected() && infopopin.connected == '0') {
                    result = true;
                } else {
                    result = false;
                }
            } else {
                result = true;
            }
            if (result) {
                if (infopopin.params) {
                    if (infopopin.params.not && GetURLParameter(infopopin.params.name)) {
                        result = false;
                    } else if (infopopin.params.value) {
                        if (GetURLParameter(infopopin.params.name) == infopopin.params.value) {
                            result = true;
                        } else {
                            result = false;
                        }
                    } else {
                        result = true;
                    }
                }
            }
            return result;
        },
        getLang: function() {
            var lang = 'fr';
            if (typeof window.sfAxes1 != "undefined")
                lang = window.sfAxes1;
            return lang;
        },
        getSite: function() {
            return (/hellobank-part|hellobank.fr/.test(document.location.host) ? 'hb' : 'bnpp');
        },

        webtrends: function(json, etape, formerror, typeError, errormsg) {
            if (/hellobank-part|hellobank.fr/.test(document.location.host) && !/\/fr\/espace-client/.test(document.location.pathname))
                return;
            webtrendsMerge = true;
            var AtypeError = ['technique', 'fonctionnelle'];
            var Aargs = [];
            Aargs.push('WT.z_outil', json.type);
            Aargs.push('WT.z_outil_name', json.name);
            if (json.title)
                Aargs.push('WT.ti', json.name + ' - ' + json.title);
            Aargs.push('WT.si_n', json.name);
            Aargs.push('WT.si_x', etape);
            Aargs.push('WT.dl', json.dl ? json.dl : 0);
            if (typeof typeError != 'undefined' && typeof errormsg != 'undefined') {
                Aargs.push('WT.z_type_error', AtypeError[typeError]);
                Aargs.push('WT.z_error', errormsg);
            }
            if (typeof json.etape != 'undefined' && etape == json.etape)
                Aargs.push('WT.si_cs', 1);
            if (typeof formerror != 'undefined' && formerror)
                Aargs.push('WT.z_form', 0);
            else if (typeof formerror != 'undefined' && !formerror)
                Aargs.push('WT.z_form', 1);

            if ("function" == typeof tagguageNext) {
                tagguageNext(Aargs);
            } else {
                $.getScript("/rsc/contrib/script/generique/webtrends.next.js", function() {
                    if ("function" == typeof tagguageNext) {
                        tagguageNext(Aargs);
                    } else {
                        trace("impossible to load tagguageNext");
                    }
                });
            }
            webtrendsMerge = false;
        },
        runTag: function(type, value) {
            switch (type) {
                case "webtrends":
                    if (!$('script[src*="adperf_conversion.js"]').prop('src')) {
                        var head = document.getElementsByTagName('head')[0];
                        var script = document.createElement('script');
                        script.setAttribute('src', "https://cstatic.weborama.fr/js/advertiserv2/adperf_conversion.js");
                        script.setAttribute('type', 'text/javascript');
                        head.appendChild(script);
                    }
                    try { adperfTracker.track({ fullhost: 'bnpparibasfr.solution.weborama.fr', site: 1668, conversion_page: value }); } catch (err) {}
                    break;
                case "simulerGauche":
                    if (!$('script[src*="adperf_conversion.js"]').prop('src')) {
                        var head = document.getElementsByTagName('head')[0];
                        var script = document.createElement('script');
                        script.setAttribute('src', "https://cstatic.weborama.fr/js/advertiserv2/adperf_conversion.js");
                        script.setAttribute('type', 'text/javascript');
                        head.appendChild(script);
                    }
                    try { adperfTracker.track({ fullhost: 'bnpparibasfr.solution.weborama.fr', site: 1668, conversion_page: 318 }); } catch (err) {}
                    break;
                case "simulerDroite":
                    if (!$('script[src*="adperf_conversion.js"]').prop('src')) {
                        var head = document.getElementsByTagName('head')[0];
                        var script = document.createElement('script');
                        script.setAttribute('src', "https://cstatic.weborama.fr/js/advertiserv2/adperf_conversion.js");
                        script.setAttribute('type', 'text/javascript');
                        head.appendChild(script);
                    }
                    try { adperfTracker.track({ fullhost: 'bnpparibasfr.solution.weborama.fr', site: 1668, conversion_page: 319 }); } catch (err) {}
                    break;
                case "refaireSimulation":
                    if (!$('script[src*="adperf_conversion.js"]').prop('src')) {
                        var head = document.getElementsByTagName('head')[0];
                        var script = document.createElement('script');
                        script.setAttribute('src', "https://cstatic.weborama.fr/js/advertiserv2/adperf_conversion.js");
                        script.setAttribute('type', 'text/javascript');
                        head.appendChild(script);
                    }
                    try { adperfTracker.track({ fullhost: 'bnpparibasfr.solution.weborama.fr', site: 1668, conversion_page: 313 }); } catch (err) {}
                    break;
            }
        },
        runUti027: function(value) {
            var urlindex = "/cre-autonomy-wspl/rpc/trame/consultation/produitTelematique?produit=" + value;
            jQuery.ajax({
                url: urlindex,
                success: function(data) {}
            });
        },
        displaypopin: function(Opopin, div) {
            var result = false;
            var line;
            if ((Opopin[0].mode == 'content' && $(div).before().attr("id") != "apppopin") || (!$('#apppopin').is(':visible') || Opopin[0].mode != 'content')) {
                for (var cptI = 0; cptI < Opopin.length; cptI++) {

                    if (this.testforpopin(Opopin[cptI])) {

                        if (!Opopin[cptI].mode || Opopin[cptI].mode == 'popin' || div == null)
                            var recallpart = this.popin.clone();
                        else
                            var recallpart = this.content.clone();
                        if (Opopin[cptI].mode && Opopin[cptI].mode == 'content') {
                            if (Opopin[cptI].elem && Opopin[cptI].elem.length > 0)
                                for (var cptJ = 0; cptJ < Opopin[cptI].elem.length; cptJ++) {
                                    recallpart.find('#apppopin_content').append('<header class="form-ligne-titre"><h3>' + Opopin[cptI].elem[cptJ] + '</h3></header><div class="white-box wb-pad row head_' + cptJ + '"></div>');
                                }
                            else
                                recallpart.find('#apppopin_content').html($('<div>').addClass('white-box wb-pad row head_0'));
                        } else {
                            recallpart.find('.popin_title').html(Opopin[cptI].poptitle);
                            recallpart.find('.head').html(Opopin[cptI].poptext);
                        }

                        //style="padding:10px 0"
                        for (var cptJ = 0; cptJ < Opopin[cptI].link.length; cptJ++) {
                            var link = Opopin[cptI].link[cptJ].url ? Opopin[cptI].link[cptJ].url : '#';
                            if (GetURLParameter("cValeur") && link != "#") {
                                if (link == "?requiredDAC=3")
                                    link = "?cValeur=" + GetURLParameter("cValeur") + "&requiredDAC=3";
                                else
                                    link += (link.indexOf("?") >= 0 ? "&" : "?") + "cValeur=" + GetURLParameter("cValeur");
                            } else if (GetURLParameter("codeValeur") && link != "#") {
                                if (link == "?requiredDAC=3")
                                    link = "?codeValeur=" + GetURLParameter("codeValeur") + "&requiredDAC=3";
                                else
                                    link += (link.indexOf("?") >= 0 ? "&" : "?") + "codeValeur=" + GetURLParameter("codeValeur");
                            }
                            var actionjs = Opopin[cptI].link[cptJ].actionjs ? Opopin[cptI].link[cptJ].actionjs : '';
                            var zone = Opopin[cptI].link[cptJ].zone ? Opopin[cptI].link[cptJ].zone : '0';

                            if (!Opopin[cptI].mode || Opopin[cptI].mode == 'popin' || div == null)
                                recallpart.find('#apppopin_content').append('<div class="row"><a href="' + link + '" onclick="' + actionjs + '" style="display:block">' + Opopin[cptI].link[cptJ].message + '<i class="icon-carret-right pull-right"></i></a></div>');
                            else {
                                var size = recallpart.find('#apppopin_content .head_' + zone + ' .row:last-child .col-2').length;
                                if (size % 2 == 0) {
                                    recallpart.find('#apppopin_content .head_' + zone).append('<div class="row line_' + cptJ + '" style="padding:10px 0"></div>');
                                    line = cptJ;
                                }
                                recallpart.find('#apppopin_content .line_' + line).append('<div class="col-2 white-box center degrade-hover"><h3><a href="' + link + '" onclick="' + actionjs + '" style="text-transform: uppercase !important;">' + Opopin[cptI].link[cptJ].message + '</a></h3></div> ');
                            }
                        }
                        if (!Opopin[cptI].mode || Opopin[cptI].mode == 'popin' || div == null) {
                            $('body').append(recallpart);
                            Popin.showPopin($('#apppopin'));
                        } else {
                            var lstClass = $(div).attr("class").split(" ");
                            if (lstClass && lstClass.length > 0) {
                                for (var cptJ = 0; cptJ < lstClass.length; cptJ++) {
                                    if (lstClass[cptJ] != "" && lstClass[cptJ] != "hidden" && !recallpart.hasClass(lstClass[cptJ]))
                                        recallpart.addClass(lstClass[cptJ]);
                                }
                            }
                            $(div).before(recallpart);
                        }
                        if (!Opopin[cptI].loadtools)
                            return false;
                    }
                }
            }
            return true;
        },
        setSession: function(item, data) {
            if (!this.isConnected()) {
                if (sessionStorage.getItem(item))
                    sessionStorage.removeItem(item);
                sessionStorage.setItem(item, JSON.stringify(data));
                document.location.href = '?requiredDAC=3';
            } else
                return false;
        },
        getSession: function(item) {
            if (this.isConnected() && sessionStorage.getItem(item)) {
                var data = JSON.parse(sessionStorage.getItem(item));
                sessionStorage.removeItem(item);
                return (data);
            } else
                return false;
        },
        loadelem: function(idObj, callback) {
            var element;
            if (idObj)
            {
                if (/^nextoutils/.test(idObj))
                {
                    element = $('#' + idObj);
                    if (element.length == 0)
                    {
                        element = $("<div>").attr("id", idObj).addClass("hidden");
                        $("body").append(element);
                    }
                    else if (element.hasClass('nextoutilsLoaded'))
                        return;
                }
                else
                    return;
            }
            else
                element = $('[id^="nextoutils"]:not(".nextoutilsLoaded")');
            var self = this;
            $.each(element, function(key) {
                $(this).addClass('nextoutilsLoaded');
                var monId = this.id;
                var tmp = monId.split('_');
                if (tmp.length < 1)
                    return;
                var service = tmp[1];
                var action = tmp.length > 2 ? tmp[2] : 'json';
                var url = '/rsc/contrib/script/simulateur/' + service + '/' + action + '.json';
				if (sessionStorage.app)
                {
                    try
                    {
                        var monApp = JSON.parse(sessionStorage.app);
                        if (monApp[monId])
                            url = '/rsc/contrib/script/simulateur/' + service + '/' + monApp[monId] + '/' + action + '.json';
                    }
                    catch(e){}
                }
                self.now = new Date();
                $.ajax({
                    dataType: "json",
                    url: url,
                    cache: false,
                    success: function(data, status, xhr) {
                        self.xhr = xhr;
                        if (data.popin) {
                            if (!self.displaypopin(data.popin, null))
                                return;
                        }
                        var maDiv = data.div;
                        if (data.css) {
                            $.each(data.css, function(key) {
                                if (data.css[key].path)
                                    $('head').append('<link rel="stylesheet" href="' + data.css[key].path + (data.version ? "?v=" + data.version : "") + '" type="text/css" />');
                                else
                                    $('head').append('<link rel="stylesheet" href="/rsc/contrib/css/' + service + '/' + data.css[key].name + '.css' + (data.version ? "?v=" + data.version : "") + '" type="text/css" />');
                            });
                        }

                        var tmpConfig = JSON.parse(JSON.stringify(self.maConfig));
                        var myDepens = Array();
                        var now = Date.now();
                        var timestamp = now - now%(15*60*1000);

                        for (var cptI = 0; cptI < data.require.length; cptI++) {
                            myDepens.push(data.require[cptI].name ? data.require[cptI].name : data.require[cptI]);
                            if (tmpConfig.paths[data.require[cptI].name] == null) {
                                if(typeof data.require[cptI].path != "undefined")
                                    tmpConfig.paths[data.require[cptI].name] = data.require[cptI].path;
                                else if(typeof data.require[cptI].paths != "undefined" && $.isArray(data.require[cptI].paths)){
                                    var ApathLg = $.grep(data.require[cptI].paths, function(e) { return e.lang == self.getLang() });
                                    if (ApathLg.length == 0)
                                        ApathLg = $.grep(data.require[cptI].paths, function(e) { return e.lang == null });

                                    var ApathEnv = $.grep(ApathLg, function(e) { return e.env == window.ENVIRONNEMENT });
                                    if (ApathEnv.length == 0)
                                        ApathEnv = $.grep(ApathLg, function(e) { return e.env == null });

                                    var Apath = $.grep(ApathEnv, function(e) { return e.site == self.getSite() });
                                    if (Apath.length == 0)
                                        Apath = $.grep(ApathEnv, function(e) { return e.site == null });



                                    if(Apath.length != 0)
                                        tmpConfig.paths[data.require[cptI].name] = Apath[0].url;
                                    else
                                        tmpConfig.paths[data.require[cptI].name] = data.require[cptI].paths[1].url;
                                }
                                if (data.version)
                                {
                                    if (tmpConfig.paths[data.require[cptI].name].indexOf(".js")<0)
                                        tmpConfig.paths[data.require[cptI].name] +=".js";
                                    tmpConfig.paths[data.require[cptI].name] +="?v="+data.version;
                                }
                                if (data.require[cptI].nocache)
                                    tmpConfig.paths[data.require[cptI].name] += "&t=" + timestamp;
                            }
                            if (data.require[cptI].deps) {
                                if (tmpConfig.shim[data.require[cptI].name] == null)
                                    tmpConfig.shim[data.require[cptI].name] = { deps: [] };
                                tmpConfig.shim[data.require[cptI].name].deps = data.require[cptI].deps.concat(tmpConfig.shim[data.require[cptI].name].deps);
                            }
                            if (data.require[cptI].test) {
                                if (tmpConfig.shim[data.require[cptI].name] == null)
                                    tmpConfig.shim[data.require[cptI].name] = { };
                                tmpConfig.shim[data.require[cptI].name].test = data.require[cptI].test;
                            }
                        }
                        for (var name in tmpConfig.shim) {
                            if (tmpConfig.shim[name].test) {
                                if (eval(tmpConfig.shim[name].test)) {
                                    if (name != 'jquery')
                                        delete(tmpConfig.paths[name]);
                                    for (var name2 in tmpConfig.shim) {
                                        if (tmpConfig.shim[name2] && tmpConfig.shim[name2].deps) {
                                            var index = tmpConfig.shim[name2].deps.indexOf(name);
                                            if (index >= 0)
                                                tmpConfig.shim[name2].deps.splice(index, 1);
                                        }
                                    }
                                    delete(tmpConfig.shim[name]);
                                    var index = myDepens.indexOf(name);
                                    if (index >= 0)
                                        myDepens.splice(index, 1);
                                } else
                                    delete(tmpConfig.shim[name].test);
                            }
                        }
                        var urlindex = '';
                        if (typeof data.urlindex == "undefined" && data.htmls != '' && data.htmls != null && $.isArray(data.htmls)) {

                            if (data.htmls.length > 0) {
                                var Aurlindex = $.grep(data.htmls, function(e) { return e.lang == self.getLang() });
                                if (Aurlindex.length > 0)
                                    urlindex = Aurlindex[0].urlindex;
                                else
                                    urlindex = data.htmls[0].urlindex;
                            }
                        } else if (data.urlindex != '' && data.urlindex != null)
                            urlindex = data.urlindex + (data.version ? "?v=" + data.version : "");
                        if (urlindex != '') {
                            jQuery.ajax({
                                url: urlindex,
                                success: function(data) {
                                    var obj = $(data);
                                    if (maDiv != "")
                                        obj = obj.find('#' + maDiv);
                                    $("#" + monId).append(obj);
                                },
                                async: false
                            });
                        }
                        self.log(myDepens);
                        self.log(tmpConfig);
                        var tmpRequire;
                        try { tmpRequire = bnpp.sf31.require; } catch (e) {}
                        try { if (!tmpRequire) tmpRequire = require ? require : requirejs; } catch (e) {}

                        tmpRequire.config(tmpConfig);
                        tmpRequire(myDepens, function() {
                            if (data.init) {
                                try {
                                    if (data.init.indexOf("(") < 0)
                                        window[data.init].call(window, monId, data, callback);
                                    else
                                        eval(data.init);
                                } catch (e) { self.log(e.message); }
                            }
                        });
                        if (data.webtrends && data.webtrends.init)
                            self.webtrends(data.webtrends, 1);
                        else if (typeof data.webtrends == "undefined") {
                            var tjson = { "item": monId, "name": monId, "dl": 98 };
                            self.webtrends(tjson, 0);
                        }

                        /*gestion des popins*/
                        if (data.popin) {
                            if (!self.isConnected() && !$('#apppopin').is(':visible')) {

                                var recallpart = self.popin.clone();
                                recallpart.find('.popin_title').html(data.popin.poptitle);
                                recallpart.find('.head').html(data.popin.poptext);
                                for (var cptI = 0; cptI < data.popin.lien.length; cptI++) {
                                    recallpart.find('#apppopin_content').append('<div class="row"><a href="' + data.popin.lien[cptI].url + '" style="display:block">' + data.popin.lien[cptI].message + '<i class="icon-carret-right pull-right"></i></a></div>').append();
                                }
                                $('body').append(recallpart);
                                Popin.showPopin($('#apppopin'));
                            }
                        }
                        try {
                            self.dateServ = xhr.getResponseHeader('Date');
                            self.delta = 0;
                            if (OApp.dateServ)
                                self.delta = (new Date(self.dateServ)) - self.now;
                        } catch (e) {}
                    },
                    error: function(msg) { self.log('une erreur est survenue;'); },
                    async: false
                });

            });
        },
        displayOutil: function(monId) {
            var monElement = $("#" + monId);
            if (!monElement.hasClass("hidden"))
                monElement = monElement.parent();
            if (!monElement.hasClass("hidden"))
                monElement = monElement.parent(".hidden:first");
            if (monElement.length > 0) {
                monElement.removeClass("hidden");
                if (monElement.attr("id") != "")
                    jQuery("a[href='#" + monElement.attr("id") + "']").removeClass('hidden');
            }
        },
        isConnected: function() {
            return $('.bottom-header-logoff').length > 0 || $('#barreFonctions .deconnexion').length > 0;
        },
        get: function(path, callBack) {
            var self = this;
            if (!this.WS[path]) {
                if (window.ENVIRONNEMENT && window.ENVIRONNEMENT === "LOCAL") {
                    var data = window.STATIC_LOCAL ? window.STATIC_LOCAL.app.get[path] : null;
                    if (data)
                    {
                        self.WS[path] = data;
                        if (callBack)
                            callBack(data);
                        else
                            return data;
                        return;
                    }
                }
                jQuery.ajaxSetup({ async: false });
                jQuery.ajax({
                    url: path,
                    success: function(data) { self.WS[path] = data; },
                    error: function(msg) { callBack ? callBack(null) : null; },
                    async: false
                });
                jQuery.ajaxSetup({ async: true });
            }
            if (this.WS[path]) {
                if (callBack)
                    callBack(this.WS[path]);
                else
                    return this.WS[path];
            }
        },
        keepConnectionOpen: function() {
            if (this.intervalLeaveConnectionOpen)
                return;
            var self = this;
            this.activity_test = 60;
            this.activity_refresh = 60 * 10;
            this.lastActivity = (new Date()).getTime();
            this.lastLeaveConnectionOpen = (new Date()).getTime();
            $(document).click(function() {
                self.log(new Date());
                self.lastActivity = (new Date()).getTime();
            });
            this.intervalLeaveConnectionOpen = setInterval(function() {
                self.log('test');
                var now = (new Date()).getTime();
                if (now - self.lastLeaveConnectionOpen >= 1000 * self.activity_refresh) {
                    self.log('test2 : ' + (now - self.lastActivity));
                    if ((now - self.lastActivity) <= (1000 * self.activity_refresh) / 2) {
                        self.lastLeaveConnectionOpen = now;

                        $.ajax({
                            url: '/serviceinfosclient-wspl/rpc/keepalive',
                            cache: false,
                            success: function(data) {
                                self.log('connection refresh');
                            },
                            error: function(msg) {}
                        });
                    } else
                    self.log('not yet');

                }
            }, self.activity_test * 1000);

        },
        stopConnectionOpen: function() {
            clearInterval(this.intervalLeaveConnectionOpen);
            this.intervalLeaveConnectionOpen = null;
        },
        getAge: function(birth) {
            var data = new Date(birth);
            var now = new Date(Date.now() + this.delta);
            return (now.getYear() - data.getYear() - (now.getMonth() < data.getMonth() ? 1 : 0) - (now.getMonth() == data.getMonth() && now.getDate() < data.getDate() ? 1 : 0));
        }
    }
})(document, window, window.$);

var OApp;
if (window.app_interval) {
    if (app_interval.waitReady)
        clearInterval(app_interval.waitReady);
    if (app_interval.waitSessionStorage)
        clearInterval(app_interval.waitSessionStorage);
}
var app_interval = { cpt: 0, waitReadyTime: 100, waitSessionStorageTime: 500 };
if (window.ENVIRONNEMENT && window.ENVIRONNEMENT === "PREVIEW")
    app_interval.waitReadyTime = 10;
app_interval.waitReady = setInterval(function() {
    app_interval.cpt++;
    /*if (window.ENVIRONNEMENT && window.ENVIRONNEMENT === "PREVIEW")
        console.log(app_interval.cpt);*/
    if (document.readyState == "complete") {
        clearInterval(app_interval.waitReady);
        app_interval.cpt = 0;
        OApp = new AppInit();
        app_interval.waitSessionStorage = setInterval(function() {
            if (OApp.isConnected() && app_interval.cpt*app_interval.waitSessionStorageTime > 10000)
            {
                clearInterval(app_interval.waitSessionStorage);
                console.log("Pb infoclient - rechargement");
                jQuery.ajax({
                    url: '/serviceinfosclient-wspl/rpc/InfosClient',
                    success: function(data) {
						if (data && data.message == "OK" && data.data && data.data.statut !== 115)
							sessionStorage.info_client = JSON.stringify(data);
						OApp.init();
                    },
                    error: function(msg) {}
                });
            }
            app_interval.cpt++;
            if ((OApp.isConnected() && sessionStorage.info_client) || !OApp.isConnected()) {
                OApp.init();
                clearInterval(app_interval.waitSessionStorage);
            }
        }, app_interval.waitSessionStorageTime);
    }
}, app_interval.waitReadyTime);