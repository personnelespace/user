function Contact() {
    // iAdvize pour le moment seulement sur HB !
    // A supprimer lorsque generalise

    // fin supp
    if (window.ENVIRONNEMENT && window.ENVIRONNEMENT == 'LOCAL' && !sessionStorage.info_client && window.tmpObj)
    {
        sessionStorage.info_client = JSON.stringify(tmpObj);
    }
    var _this = this;
    this._step = [
        {
            name: "button", tools: undefined, function:function(){
                $(".iadvize-launcher, .openChatbot").show();
            }
        },
        { 
            name: "chatbot", tools: "nextoutils_pointDeContact_chatbot", function: function () {
                if (!_this.parametrage("userID"))
                    _this.reset();
                $("#nextoutils_pointDeContact_chatbot").show();
                if (window.openChatbot) openChatbot();
            }
        },
        { name: "chatia", tools: "nextoutils_pointDeContact_chatia"},
        { name: "sondage", tools: "nextoutils_pointDeContact_sondage" }
    ];

    if (this.isProd())
        this._apiMasterBotServer = "https://apis.smartly.ai";
    else
        this._apiMasterBotServer = "https://apis.smartly.ai";

    this._apiMasterBot = {
        dialog: { path: "/api/dialog/", method: "POST" },
        authorizeBNPAPI: { url: "/oidc/authorize", method: "GET", type: "html" },
        getAuthorize: { url: "/rsc/contrib/script/simulateur/pointDeContact/authorize.html", method: "GET", type: "html" },
    }
    this._accessTokenMasterBot = {
        "PROD" : {
            "mb" : {
                "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWFhYThjMTBlZGViZTM1NjdhNjVlNDlhIiwic2tpbGxfaWQiOiJhcGlfdG9rZW4iLCJpYXQiOjE1MzQ5NDgzODV9.iIDYHeJkobYv9e7CFuJEp10ugDlwdtanb7SnvpQvge8",
                "skill" : {
                    "part" : "5d136d45fe5343001dab0d0d",
                    "bpf" : "5d3cddbef4106c86a9fd9ac1",
                    "pro" : "5e1c43d592979bf35adb3fa0"
                }
            },
            "hb" : {
                "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWFhZmNmM2Q4ZWNhNWI0NTgxYzFiMmViIiwic2tpbGxfaWQiOiJhcGlfdG9rZW4iLCJpYXQiOjE1MjQ4MzkwNDR9.X4_XPzeBWRsIR6mheYDxmg97goonHtPv773jT6t8IzY",
                "skill" : {
                    "hellobank" :"5ce7acc7b192362bd69de730"
                }
            }
        },
        "PREVIEW" : {
            "mb" : {
                "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWNlZTM2MTAxZjRlZmU4NDQ3MTdlODFjIiwic2tpbGxfaWQiOiJhcGlfdG9rZW4iLCJpYXQiOjE1NzAxMDY2OTd9.2PP1oDoUckrtQpsVQKDzAiIJdCP60H-hsHyxzbNf3nk",
                "skill" : {
                    "part" : "5da7145403d1a64e9a5d86c1",
                    "bpf" : "5ee878f5b9062f5ad0b3928c",
                    "pro" : "5e1c46093a15abb7029d4d66"
                }
            },
            "hb" : {
                "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWNlZTM2MTAxZjRlZmU4NDQ3MTdlODFjIiwic2tpbGxfaWQiOiJhcGlfdG9rZW4iLCJpYXQiOjE1NzAxMDY2OTd9.2PP1oDoUckrtQpsVQKDzAiIJdCP60H-hsHyxzbNf3nk",
                "skill" : {
                    "hellobank" :"5db8497548d3489a8c59257a"
                }
            }
        },
        "QUALIF" : {
            "mb" : {
                "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWM5YTU0ODdlYmI0Y2IxNDg4NzRiZWZlIiwic2tpbGxfaWQiOiJhcGlfdG9rZW4iLCJpYXQiOjE1NTQ3Mzc4OTl9.XB4hAJqkL5QLU3jThl9Wa_Sm13773z8s1OUAjXn8-is",
                "skill" : {
                    "part" : "5c9b3336989328673fb4dd71",
                    "bpf" : "5d3cddbef4106c86a9fd9ac1"
                }
            },
            "hb" : {
                "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWNlZTM2MTAxZjRlZmU4NDQ3MTdlODFjIiwic2tpbGxfaWQiOiJhcGlfdG9rZW4iLCJpYXQiOjE1NzAxMDY2OTd9.2PP1oDoUckrtQpsVQKDzAiIJdCP60H-hsHyxzbNf3nk",
                "skill" : {
                    "hellobank" :"5db8497548d3489a8c59257a"
                }
            }
        },
        "LOCAL" : {
            "mb" : {
                "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWFhZmRlYTRjMmI0OGM3NTZjZDhlMmRjIiwic2tpbGxfaWQiOiJhcGlfdG9rZW4iLCJpYXQiOjE1NjUyOTYwODJ9.2aXd_lcBVuWRQZ9GYGKawRMq5qAI3ub0BTut3a5RbuA",
                // "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWM5YTU0ODdlYmI0Y2IxNDg4NzRiZWZlIiwic2tpbGxfaWQiOiJhcGlfdG9rZW4iLCJpYXQiOjE1NTQ3Mzc4OTl9.XB4hAJqkL5QLU3jThl9Wa_Sm13773z8s1OUAjXn8-is",
                "skill" : {
                    // "part" : "5d7e3df2c489ba3979452d70",
                    "part" : "5d91cb707af5b3051c928996",
                    "bpf" : "5d3cddbef4106c86a9fd9ac1",
                    "pro" : "5db990c95e63f95cf7b376d5"
                }
            },
            "hb" : {
                "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWFhZmRlYTRjMmI0OGM3NTZjZDhlMmRjIiwic2tpbGxfaWQiOiJhcGlfdG9rZW4iLCJpYXQiOjE1NjUyOTYwODJ9.2aXd_lcBVuWRQZ9GYGKawRMq5qAI3ub0BTut3a5RbuA",
                "skill" : {
                    "hellobank" :"5d4b1c9325b7540cd28f7ae7"
                }
            }
        }
    }
    if (this.isProd())
        this._apiBotTransactionnelServer = "//web.bnpp-cbw.as8677.net";
    else
        this._apiBotTransactionnelServer = "//web-eacc74.bnpp-cbw.as8677.net";
    if (this.isProd())
        this._apiBotTransactionnel = {
            startConversation : {url: "//web.bnpp-cbw.as8677.net/exchange_server/api/authent/startConversation"},
            getAuthorize: { path: "/rsc/contrib/script/simulateur/pointDeContact/authorize.html" },
            message: { path: "/exchange_server/api/messages/", method: "POST", stringify: true }
        }
    else
        this._apiBotTransactionnel = {
            startConversation : {url: "//web-eacc74.bnpp-cbw.as8677.net/exchange_server/api/authent/startConversation"},
            getAuthorize: { path: "/rsc/contrib/script/simulateur/pointDeContact/authorize.html" },
            message: { path: "/exchange_server/api/messages/", method: "POST", stringify: true }
        }

    this._oidc = {
        BotTransactionnel : {interval : {interval:500, max:10000}, client_id : "", expire: 9*60}
    }
    if (this.isProd())
        this._oidc.BotTransactionnel.client_id = "";
    else
        this._oidc.BotTransactionnel.client_id = "";

    if (sessionStorage.contact) {
        try { this._parametrage = JSON.parse(sessionStorage.contact); } catch (e) {}
    }
    else
        this._parametrage = {};
    // this._sgi;
    this._sgi = (window.ENVIRONNEMENT && window.ENVIRONNEMENT === "LOCAL") ? "localhost" : undefined; // Problème pour le dev en local
    try {
        var infoClt = JSON.parse(sessionStorage.info_client);
        var compte = infoClt.data.contrat.comptePrincipal;
        if (!compte)
            compte = infoClt.data.contrat.comptes[0];
        this._sgi = compte.identifiantSGIRattache;
    } catch (e) {}

    this.parametrage("sgi", this._sgi, true);

    // Ajout historique pour le conseiller
    if (this.parametrage("messageConseiller")) {
        this._messageConseiller = this.parametrage("messageConseiller");
    }

    this.init();
}

Contact.prototype.btnScroll =  function () {
    // Eviter selecteur répété

    if (window.sfSiteId && window.sfSiteId === "hellobank") return;

    function btnFollowScroll() {
        var maxBtnScroll = ($(".signal-problem-content")[0]) ? $(".signal-problem-content").offset().top : $("#footer").offset().top,
            scollWindow = ($(window).scrollTop() + $(window).height());

        if (scollWindow > maxBtnScroll && window.sfSiteId !== "bpf") {
            if (window.sfSiteId === "part") {
                $(".content-bt-chat").css({
                    "position": "absolute",
                    "bottom" : 140,
                    "right" : 30
                });
            } else if (window.sfSiteId === "pro") {
                $(".content-bt-chat").css({
                    "position" : "absolute",
                    "top" : $("#footer").offset().top,
                    "right" : $("#ls-canvas").offset().left
                });
            }
        } else {
            $(".content-bt-chat").css({
                "position": "fixed",
                "right" : ($("#ls-canvas").offset().left) + 30
            });

            if (window.sfSiteId === "bpf") {
                var heightOngletBPF = ($("#wcm-l-contact > .no-subnav > .onglet-nav").height()) ? $("#wcm-l-contact > .no-subnav > .onglet-nav").height() : 0;
                var heightTopHeader = ($(".top-header:not(.retracted)").height()) ? $(".top-header:not(.retracted)").height() : 0;
                var heightSousMenuBPF = ($("#wcm-l-bottom-header-connected").find("header.bottom-header-connected.no-mob").height()) ?
                                    $("#wcm-l-bottom-header-connected").find("header.bottom-header-connected.no-mob").height() : 0;
                var topBtn = heightSousMenuBPF + heightOngletBPF + heightTopHeader + 20;
                $(".content-bt-chat").css({
                    top : topBtn
                });
            } else if (window.sfSiteId === "part") {
                $(".content-bt-chat").css({
                    bottom : "10px",
                    // top: topBtn
                });
            } else if (window.sfSiteId === "pro") {
                $(".content-bt-chat").css({
                    "top" : $(window).height() - ($(".content-bt-chat").height() + 10),
                    "right" : $("#default-footer-refresh").offset().left
                })
            }
        }
    }
    btnFollowScroll();
    $(document).resize(btnFollowScroll);
    $(window).resize(btnFollowScroll);
    $(window).scroll(btnFollowScroll);
}

Contact.prototype.showButton = function (show) {
    if (!show) {
        $("." + MyObjContact.parametrage('button')).hide();
    } else {
        $("." + MyObjContact.parametrage('button')).show()
        $(".content-bt-chat, .open-chatbot, .bouton-chat-s").show();
        $(".content-bt-chat, .open-chatbot, .bouton-chat-s").removeClass('hidden');
        MyObjContact.btnScroll()
    }
}

Contact.prototype.site = function(){
    return (!window.sfSiteId || window.sfSiteId=="acquisition") ? "hellobank" : window.sfSiteId;
}

Contact.prototype.client = function(callback, callws){
    var _this = this;
    if (callws && !sessionStorage.info_client)
    {
        OApp.get("/serviceinfosclient-wspl/rpc/InfosClient", function(data){
            if (data)
                sessionStorage.info_client = JSON.stringify(data);
            _this.client(callback, false)
        });
    }
    var client = {
        civilite : "Inconnu",
        ikpi : "Inconnu",
        nom : "Inconnu",
        prenom : "Inconnu"
    };
    if (sessionStorage.info_client)
    {
        try
        {
            tmp = JSON.parse(sessionStorage.info_client)
            client = {
                civilite : tmp.data.client.civilite,
                ikpi : tmp.data.client.ikpiPersonne,
                nom : tmp.data.client.nomComplet,
                prenom : tmp.data.client.prenom
            }
        }
        catch(e){}
    }
    callback(client);
}

Contact.prototype.getCookie = function (cookiename) {
    var cookiestring = RegExp("" + cookiename + "[^;]+").exec(document.cookie);
    return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : "");
}

Contact.prototype.parametrage = function(key, value, reset) {
    if (value === undefined)
        return this._parametrage[key];
    else {
        var save = this._parametrage[key] != value;
        if (reset && key == "sgi" && !this._parametrage[key])
            reset = false;
        this._parametrage[key] = value;
        if (save || key == "messages") {
            if (reset) {
                // for (key in this._parametrage) {
                    if (key != "sgi")
                        delete this._parametrage[key];
                // }
            }
            sessionStorage.contact = JSON.stringify(this._parametrage);
        }
    }
}

Contact.prototype.isProd = function(){
    return (window.ENVIRONNEMENT && (ENVIRONNEMENT == "PROD" || ENVIRONNEMENT == "PREVIEW" || ENVIRONNEMENT == "MACHINE"))
}

Contact.prototype.isConnected = function(){
    var info_client = null
    try { if (sessionStorage.info_client && JSON.parse(sessionStorage.info_client).message !== "user not connected") info_client = true } catch(e) { }

    return !!((window.ENVIRONNEMENT && window.ENVIRONNEMENT == "LOCAL") || this._sgi || info_client)
}

Contact.prototype.isAuth = function () {
    try {
        if (JSON.parse(sessionStorage.info_client).message === "OK") return true;
        // return (JSON.parse(sessionStorage.info_client).message === "Ok") ? true : false;
    } catch (e) {
        return false
    }
}

Contact.prototype.randomString = function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

Contact.prototype.getUrl = function(url, api, params) {
    var url = api.url ? api.url : url + api.path;
    if (params) {
        var tmpUrl = url;
        for (var param in params)
            url = url.replace(param, params[param]);
        if (tmpUrl == url) {
            var bEt = url.indexOf("?") >= 0;
            for (var param in params) {
                url += (bEt ? "&" : "?") + param + "=" + params[param];
                bEt = true;
            }
        }
    }

    return url;
}

Contact.prototype.accesstokenMasterBot = function(){
    if (!this.parametrage("accesstokenMasterBot")){
        var tmp;
        if (window.ENVIRONNEMENT && this._accessTokenMasterBot[window.ENVIRONNEMENT])
            tmp = this._accessTokenMasterBot[window.ENVIRONNEMENT];
        else
            tmp = this._accessTokenMasterBot["DEFAULT"];

        this.parametrage("accesstokenMasterBot", tmp[this.site()=="hellobank" ? "hb" : "mb"]["token"]);
    }

    return this.parametrage("accesstokenMasterBot");
}

Contact.prototype.accesstokenBotTransactionnel = function(value) {
    if (value === undefined) {
        if (this.parametrage("accesstokenBotTransactionnel") && this.parametrage("expireBotTransactionnel") < (new Date()).getTime() / 1000)
            this.parametrage("accesstokenBotTransactionnel", null);
        return this.parametrage("accesstokenBotTransactionnel");
    } else {
        this.parametrage("accesstokenBotTransactionnel", value);
        this.parametrage("expireBotTransactionnel", (new Date()).getTime() / 1000 + this._oidc.BotTransactionnel.expire);
    }
}

Contact.prototype.skillId = function(){
    if ( ! this.parametrage("skillId")){
        var tmp;
        if (window.ENVIRONNEMENT && this._accessTokenMasterBot[window.ENVIRONNEMENT])
            tmp = this._accessTokenMasterBot[window.ENVIRONNEMENT];
        else
            tmp = this._accessTokenMasterBot["DEFAULT"];
        var skill =tmp[this.site()=="hellobank" ? "hb" : "mb"]["skill"];
        this.parametrage("skillId", skill[this.site()]);
    }
    return this.parametrage("skillId");
}

Contact.prototype.callapiPromiseMasterBot = function(api, data, auth) {
    var settings = {
        url: this.getUrl(this._apiMasterBotServer, api),
        type: api.method,
        cache: api.cache || false
    };
    if (data) settings.data = api.stringify ? JSON.stringify(data) : data;
    if (auth)
        settings.headers = { Authorization: "Bearer " + this.accesstokenMasterBot()};
    //settings.dataType = api.type || "json";
    //settings.contentType = "application/json;charset=UTF-8";

    return $.ajax(settings);
};

Contact.prototype.callapiMasterBot = function(api, data, auth, callback) {
    this.callapiPromiseMasterBot(api, data, auth).done(callback).fail(function(jqXHR, textStatus) {
        callback(null, textStatus, jqXHR);
    });
};

Contact.prototype.dialog = function(data, callback){
    data.platform = "api";
    data.lang = "fr-fr";
    this.callapiMasterBot(this._apiMasterBot.dialog, data, true, function(data) {
        if (callback) callback(data);
    });
}

Contact.prototype.callapiPromiseBotTransactionnel = function(api, data, auth) {
    var settings = {
        url: this.getUrl(this._apiBotTransactionnelServer, api),
        type: api.method,
        cache: api.cache || false,
        dataType: "JSON"
    };
    if (data) settings.data = api.stringify ? JSON.stringify(data) : data;
    if (auth)
        settings.headers = { Authorization: "Bearer " + this.accesstokenBotTransactionnel()};
    //settings.dataType = api.type || "json";
    settings.contentType = "application/json;charset=UTF-8";

    return $.ajax(settings);
};

Contact.prototype.callapiBotTransactionnel = function(api, data, auth, callback) {
    this.callapiPromiseBotTransactionnel(api, data, auth).done(callback).fail(function(jqXHR, textStatus) {
        callback(null, textStatus, jqXHR);
    });
};

Contact.prototype.reset = function(){
    this.Step(0);
    this.parametrage("messages", null, true);
    this.init();
}

Contact.prototype.initBotTransactionnel = function(callback){
    if (this.accesstokenBotTransactionnel() || window.ENVIRONNEMENT == 'LOCAL')
        callback();
    else
    {
        var _this = this;
        var param = {}
        param.redirect_jwe = encodeURI("https://"+document.location.host+_this._apiBotTransactionnel.getAuthorize.path);

        if($("#oidc_bottransactionnel").length > 0)
            $("#oidc_bottransactionnel").remove();
        if($("#oidc_bottransactionnel").length == 0)
            $("body").append($("<iframe id='oidc_bottransactionnel' class='hidden'>"));
        $("#oidc_bottransactionnel").on("load", function(){
            var tokenInteval= JSON.parse(JSON.stringify(_this._oidc.BotTransactionnel.interval));
            tokenInteval.cpt = 0;
            tokenInteval.token = setInterval(function(){
                tokenInteval.cpt++;
                try{
                    if ($("#oidc_bottransactionnel")[0].contentWindow.document.location.search)
                    {
                        clearInterval(tokenInteval.token);
                        var params = $("#oidc_bottransactionnel")[0].contentWindow.document.location.search.substring(1).split("&");
                        var access_token;
                        var expiration_date;
                        for(var cptI=0 ; cptI<params.length ; cptI++)
                        {
                            var param = params[cptI].split("=");
                            if (param[0] == "jwe")
                                access_token = decodeURIComponent(param[1]);
                            if (param[0] == "expiration_date")
                                expiration_date = param[1];
                        }
                        _this.accesstokenBotTransactionnel(access_token);

                        callback();
                    }
                }
                catch(e){}
                if (tokenInteval.cpt * tokenInteval.interval > tokenInteval.max && tokenInteval.token)
                {
                    clearInterval(tokenInteval.token);
                    callback();
                }
            }, tokenInteval.interval);
        });
        $("#oidc_bottransactionnel").attr('src',_this.getUrl("", _this._apiBotTransactionnel.startConversation, param));
    }
}

Contact.prototype.BOTInit = function (callback) {
    data = {
        'event_name' : "NEW_DIALOG_SESSION",
        'user_id' : this.userID(),
        'skill_id' : this.skillId(),
        'user_data' : {
            "dateUser": {
                "timezone" : new Date().getTimezoneOffset()
            },
            "geolocation" : this.geolocation,
            "site": window.sfSiteId,
            "env" : window.ENVIRONNEMENT,
            "auth" : this.isConnected()
        },
        'input' : ""
    };

    try {
        data.user_data.client = {
            civilite : JSON.parse(sessionStorage.info_client).data.client.civilite,
            nom : JSON.parse(sessionStorage.info_client).data.client.nomComplet
        }
    } catch (e) {}
    data.user_data.iAdvize = true;
    var _this = this;
    this.dialog(data, function(data){
        if (data.payload) data.payload.origin = "smartly";
        this.messages(true, "bot", data.answer, data.rich_text, data.payload);
        if (this.Step() === 0) this.nextStep();
        this.newMessageAdvisor(data.answer);
        if (callback) callback(data);
    }.bind(this));
}

Contact.prototype.messageUser = function (payload) {
    var data = {};
    if (typeof payload === "string") {
        return payload
            .replace(/&nbsp;/gim, "")
            .replace(/\n/gim, "")
            .replace(/\r/gim, "")
            .trim();
    } else if (payload.reply) {
        return payload;
    } else {
        return data.message;
    }
}

// Message transact
Contact.prototype.BotTransactionnelGetSolde = function(token, message, callback){
    var _this = this;
    var data = {
        type: "TEXT",
        text: message,
        platformOverride: "NATIVE",
        locale: "fr",
        pageAccesToken: token
    };
    //data.sessionId="em5p-f5fs9ff1-at8meg9sgh8g5fae8jds";
    this.initBotTransactionnel(function() {
        _this.callapiBotTransactionnel(_this._apiBotTransactionnel.message, data, true, function(data) {
            if(data)
                MyObjContact.parametrage("infoTransac", {
                    userId : data[0].userId,
                    sessionId : data[0].sessionId,
                    pageAccesToken : token
                });
            if (callback) callback(data);
        });
    });
}
Contact.prototype.BotTransactionnelGetSoldePayload = function(payload, callback){
    var _this = this;
    var data = {
        type: "QUICK_REPLY",
        payload : payload,
        platformOverride: "NATIVE",
        locale: "FRENCH",
        userId : MyObjContact.parametrage("infoTransac").userId,
        sessionId : MyObjContact.parametrage("infoTransac").sessionId,
        pageAccesToken : MyObjContact.parametrage("infoTransac").pageAccesToken,
    };
    this.initBotTransactionnel(function() {
        _this.callapiBotTransactionnel(_this._apiBotTransactionnel.message, data, true, function(dataAtos) {
            _this.MessageAtosTraitement(dataAtos);
            if (callback) callback(data);
        });
    });
}
Contact.prototype.BotTransactionnelGetRDVPayload = function(payload, callback){
    var _this = this;
    var data = {
        type: "TEXT",
        text : payload,
        platformOverride: "NATIVE",
        locale: "FRENCH",
        userId : MyObjContact.parametrage("infoTransac").userId,
        sessionId : MyObjContact.parametrage("infoTransac").sessionId,
        pageAccesToken : MyObjContact.parametrage("infoTransac").pageAccesToken,
    };
    this.initBotTransactionnel(function() {
        _this.callapiBotTransactionnel(_this._apiBotTransactionnel.message, data, true, function(dataAtos) {
            //console.log('data');
            _this.MessageAtosTraitement(dataAtos);
            //console.log(data)
            if (callback) callback(data);
        });
    });
}

Contact.prototype.traitement = function (data, cb) {
    if (!data) { cb(data); return; }

    if (typeof data.payload.adobeTracking === "object") {
        for (var i = 0; i < data.payload.adobeTracking.length; i += 1) {
            _satellite.track(data.payload.adobeTracking[i]);
        }
    } else if (window._satellite && data.payload && data.payload.adobeTracking) _satellite.track(data.payload.adobeTracking);

    if (data.payload.hiddenMessage) {
        delete data.payload.origin;
        this.parametrage("origin", "transactionnel");

        this.BOTMessageTransactionel(data.payload, "test", function (dataAtos) {
            if (cb) cb(dataAtos);
        });
    } else {
        this.parametrage("info_maps", data.payload.localisation)
        this.parametrage("origin", null, true);
        if (!data.payload.conseiller) {
            if (data.payload.reset_position) this.parametrage("coords", null, true);
            this.messages(false, "bot", data.answer, data.rich_text, data.payload);


            if (data.payload.redirectConnect) { ///// ACTION APRES REDIRECTION
                if (!data.payload.transacAuth) {
                    this.parametrage("demandeChat", true);
                    if (window._satellite) _satellite.track("Chatbot - redirConseil");
                }
                this.parametrage("transaction", data.payload.transacAuth);
                setTimeout(function () {
                    window.location = window.location.origin += data.payload.redirectConnect;
                }, 3000);
            } else if (data.payload.path || data.payload.localisation) {
                if (data.payload.path && data.payload.path !== location.pathname) {
                    this.parametrage("info_maps", {
                        count : data.payload.count,
                        localisation : data.payload.localisation
                    });
                    setTimeout(function () {
                        window.location = window.location.origin += data.payload.path;
                    }, 3000);
                }
            }
            if (cb) cb(data);
        } else if (data.payload.conseiller) {
            this.messages(false, "bot", data.answer, data.rich_text, data.payload);
            if (window._satellite) _satellite.track("Chatbot - redirConseil");
            setTimeout(function () {
                if (data.payload.chatRegle) this.parametrage('chatRegle', data.payload.chatRegle)
                var regle = (this.parametrage('chatRegle')) ? this.parametrage('chatRegle') : '?escalationChatbot'
                if (this.Step() === 1) this.nextStep();

                if (window.iAdvize && window.iAdvize.navigate && window.iAdvize.navigate(regle));
            }.bind(this), 3000);
        }
    }
}

/// Enlever _ preciser promise
Contact.prototype.login_idz_to_uid = function (id) {
    return $.ajax({
        "url": "https://w-services.bnpparibas.net/services/apiDF/public/api/iAdvize/get_login_or_id",
        "method": "POST",
        "data": {
            "idIadvize": id
        }
    });
}

Contact.prototype.BOTMessageTransactionel = function(payload, message, cb){
    this.BotTransactionnelGetSolde(payload.hiddenMessage.pageAccesToken, message,function(dataAtos){
        if(dataAtos)
            this.MessageAtosTraitement(dataAtos);
        else
            this.MessageAtosTraitement([
                {
                    type: 'TEXT',
                    data:{
                        subtype : 'STOP',
                        Error : 'une erreur s\'est produite lors du chargement des informations.'
                    }
                }
            ]);
        if (cb) cb();
    }.bind(this));
}
Contact.prototype.MessageAtosTraitement= function(message){
    message.forEach(function (element) {
        switch (element.type) {
            case 'TEXT':
                switch(element.data.subtype) {
                    case 'STOP':
                        if (window._satellite) _satellite.track('Chatbot - ctaMenu');
                        this.BOTMessage("Revenir au menu principal", function (data) {
                            if(element.data.Error)
                                this.messages(true, "bot", element.data.Error, [], data.payload);
                        }.bind(this),'Revenir_au_menu_principal');
                        break;
                    case 'TRANSACTIONS_FUTURES':
                        if (window._satellite) _satellite.track('Chatbot - opeAVenir');
                        this.messages(false, "bot", element.text, [], {subtype:element.data.subtype,transactions:JSON.parse(element.data.futureTransactions)});
                        break;
                    case 'TRANSACTIONS_PASSEES':
                        if (window._satellite) _satellite.track('Chatbot - dernieresOpe');
                        this.messages(false, "bot", element.text, [], {subtype:element.data.subtype,transactions:JSON.parse(element.data.oldTransactions)});
                        break;
                    default:
                        this.messages(false, "bot", element.text, [], {subtype:element.data.subtype});
                }
                break;
            case 'QUICK_REPLY':
                var replys = {
                    'subtype':element.data.subtype,
                    'text':element.text,
                    'button':[],
                };

                switch (element.data.subtype) {
                    case 'DOUBLE_LINE_ACCOUNTS':
                        if (window._satellite) _satellite.track('Chatbot - SoldeMiddle');
                        element.quickReplies.forEach(function (reply) {
                            replys.button.push({
                                message:{"accountLabel" :reply.data.account.accountLabel,"accountNumber":reply.data.account.accountNumber},
                                pageAccessToken : MyObjContact.parametrage("infoTransac").pageAccesToken,
                                payload:reply.payload,
                                type:'replyAtos'
                            })
                        });
                        break;
                    default:
                        element.quickReplies.forEach(function (reply) {
                            replys.button.push({
                                message:reply.text,
                                pageAccessToken : MyObjContact.parametrage("infoTransac").pageAccesToken,
                                payload:reply.payload,
                                type:'replyAtos'
                            })
                        });
                }
                this.messages(false, "bot", "", [],  replys);
                break;
            default:
        }
    }.bind(this));
};

// Fonction échange smartly
Contact.prototype.BOTMessage = function(message, callback, add){
    var inputMessage = (message.payload) ? message.payload : message,
        userMessage = (message.message) ? message.message : message;

    var data = {
        'event_name' : "NEW_INPUT",
        'user_id' : this.userID(),
        'skill_id' : this.skillId(),
        'user_data' : {
            "dateUser": {
                "timezone" : new Date().getTimezoneOffset()
            },
            "geolocation" : this.geolocation,
            "env" : window.ENVIRONNEMENT,
            "address" : this._saisieAdresseUtilisateur,
            "critere" : this._critere,
            "path" : location.pathname,
            "auth" : this.isConnected()
        },
        'input' : (inputMessage) ? inputMessage : message
    };
    if (this.parametrage("coords")) {
        data.user_data.geoloc = {};
        data.user_data.geoloc.lat = this.parametrage("coords").lat;
        data.user_data.geoloc.lng = this.parametrage("coords").lng;
    }

    var _this = this;
    if (!add)
        _this.messages(false, "user", (window.MyObjContact._saisieAdresseUtilisateur) ? window.MyObjContact._saisieAdresseUtilisateur : userMessage, [], {});

    _this.dialog(data, function(data){
        if (data.payload) data.payload.origin = "smartly";
        _this.parametrage("origin", "smartly");
        _this.newMessageAdvisor(data.answer, data.input);
        _this.traitement(data, callback);
    });
}

Contact.prototype.fullScreen = function(){
    if (window.GetURLParameter && GetURLParameter("rc")=="mobile")
        return true;
    return false;
}

// Fonction récupération d'identifiant utilisateur smartly
Contact.prototype.userID = function(){
    if (!this.parametrage("userID")) {
        if (this.getCookie("s_fid"))
            this.parametrage("userID", this.getCookie("s_fid"));
        else
            this.parametrage("userID", Date.now() + this.randomString(20));
    }

    return this.parametrage("userID");
}

Contact.prototype.messages = function(first, sender, message, rich_text, payload){
    var messages = this.parametrage("messages") || [];
    if (sender !== undefined && ((first && messages.length == 0) || !first))
    {
        messages.push({sender : sender, message: message, rich_text: rich_text, payload : payload});
        this.parametrage("messages", messages);
        // sauvegarder messages
    }
    else
        return messages;
}

Contact.prototype.init = function(){
    var step = this.parametrage("step") || 0;

    var obj = this._step[step];

    if (obj.tools && window.OApp)
    {
        if (obj.tools) {
            OApp.runLoading(obj.tools);
        }

        OApp.displayOutil(obj.tools);
        if (obj.function)
            obj.function();
    }
    else if(obj.function)
    {
        obj.function();
    }
}

// retourne àétape suivante
Contact.prototype.nextStep = function(){
    var step = this.Step();
    step++;
    if (this.Step(step) == 0 && step>0)
        this.reset();
    else
        this.init();
}

// retourne à étape précédente
Contact.prototype.prevStep = function(){
    var step = this.Step();
    if (step>0)
        step--;
    if (this.Step(step) == 0)
        this.reset();
    else
        this.init();
}

// Retourne l'étape en cours (0 affichage bouton, 1 echange chatbot, 2 mise en relation conseiller, 3 sondage)
Contact.prototype.Step = function(value){
    if (value !== undefined)
        this.parametrage("step", value%this._step.length);
    return this.parametrage("step") || 0;
}

// Filtre/actualisaation de la carte de la chatbox
Contact.prototype.critere = function (filter, tabFilter) { // filter // tabFilter (récupérer depuis le appli chatbot.js)
    var itemFilter = null;
    for (var i = 0; i < tabFilter.length; i += 1) {
        if (tabFilter[i].text === filter && itemFilter === null) {
            itemFilter = tabFilter[i].type;
            break;
        }
    }
    if (this._critere.length === 0) return this._critere = itemFilter;
    var filters = this._critere.split(",");

    for (var i = 0; i < filters.length; i += 1) {
        if (filters[i] === itemFilter) {
            var newFilters = filters.filter(function (item) { return item !== itemFilter })
            return this._critere = newFilters.join(",");
        } else if (i === (filters.length - 1)) {
            filters.push(itemFilter);
            this._critere = filters.join(",");
            return this._critere;
        }
    }
}

// Ajout historique pour le conseiller
Contact.prototype.newMessageAdvisor = function (msgBot, msgUser) {
    if (this._messageConseiller !== undefined) {
        this._messageConseiller += "Internaute : " + msgUser + "  /  Chatbot : " + msgBot + "  /  ";
        this.parametrage("messageConseiller", this._messageConseiller);
    } else {
        this._messageConseiller = "Chatbot : " + msgBot + "  /  ";
        this.parametrage("messageConseiller", this._messageConseiller);
    }
}

// Message transact
Contact.prototype.BotTransactionnelMessage = function(message, callback){
    var _this = this;
    var data = {
        type: "TEXT",
        text: message,
        platformOverride: "NATIVE",
        locale: "fr",
        pageAccesToken: "5f6dfa70-ebe5-496a-80a3-28b425df1069"
    };
    //data.sessionId="em5p-f5fs9ff1-at8meg9sgh8g5fae8jds";
    this.initBotTransactionnel(function() {
        _this.callapiBotTransactionnel(_this._apiBotTransactionnel.message, data, true, function(data) {
            if (callback) callback(data);
        });
    });
}

// Récupération de la position lat, lng user
Contact.prototype.getCurrentPosition = function(callback) {
    function geolocation(state, callback) {
        navigator.geolocation.getCurrentPosition(function(pos){
            var crd = pos.coords;
            callback({"lat" : crd.latitude,"lng" : crd.longitude}, state);
        }, function(){
            callback({"error" : true}, state);
        }, {
            enableHighAccuracy: true,
            timeout: 100000,
            maximumAge: 0
        });
    }
    try{
        navigator.permissions.query({name : 'geolocation'}).then(function (permission) {
            var state = permission.state;
            geolocation(state, function (position) {
                callback(position);
            });
        });
    } catch(e) {
        geolocation(true, function (position) {
            callback(position);
        });
    }
}

// Récupération de l'historique smartly pour les mobiles
Contact.prototype.historyMobile = function (id) {
    var dataUser = {
            platform: "api",
            event_name: "NEW_INPUT",
            user_id: (GetURLParameter("sfIaParam")) ? GetURLParameter("sfIaParam") : id,
            skill_id: "5bfc241c95f03f515170f5d1",
            lang: "fr-fr",
            user_data: null,
            input: "conseiller"
        },
        headers = null,
        _sfSiteId = (window.sfSiteId !== "acquisition") ? window.sfSiteId : "hellobank";

    if (_sfSiteId === "hellobank") {
        headers = {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWFhZmNmM2Q4ZWNhNWI0NTgxYzFiMmViIiwic2tpbGxfaWQiOiJhcGlfdG9rZW4iLCJpYXQiOjE1MjQ4MzkwNDR9.X4_XPzeBWRsIR6mheYDxmg97goonHtPv773jT6t8IzY"
        }
    } else {
        headers = {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWFhYThjMTBlZGViZTM1NjdhNjVlNDlhIiwic2tpbGxfaWQiOiJhcGlfdG9rZW4iLCJpYXQiOjE1MzQ5NDgzODV9.iIDYHeJkobYv9e7CFuJEp10ugDlwdtanb7SnvpQvge8"
        }
        dataUser.skill_id = '5dc3ea3644a3ac1eaa299c2a';
    }
    
    return $.ajax({
        method: "post",
        url: "https://apis.smartly.ai/api/dialog/",
        headers: headers,
        data: dataUser
    });
}

Contact.prototype.refreshMap = function (adresse) {
    var timer = {
        wait : null,
        time: 0,
        maxTime: 10000
    }
    timer.wait = setInterval(function () {
        timer.time = timer.time+=1000;
        if ($("#nextoutils_nousTrouver")[0] || timer.time > timer.maxTime) {
            clearInterval(timer.wait);
            if (!$("#nextoutils_nousTrouver")[0]) return;

            $("#nextoutils_nousTrouver").find("iframe").attr("src", "https://agences.bnpparibas/nextagence/?v2=1&adresse=" + adresse);
            $("html, body").animate({
                scrollTop: $("#nextoutils_nousTrouver").offset().top-(($(window).height() - $("#nextoutils_nousTrouver").height()) / 2)
            }, 700)
            var lastMessageUser = document.querySelectorAll('.list-messages .message')[document.querySelectorAll('.list-messages .message').length - 2];
            if (lastMessageUser) lastMessageUser.scrollIntoView({ block: 'start', inline: 'end', behavior: 'smooth' });
        }
    });
}

Contact.prototype.isMobile = function(){
    var href = location.href;
    return (window.ENVIRONNEMENT === "MOBILE" || (/m-service/gi.test(href) || /m-webservices/gi.test(href) || /rc=mobile/gi.test(href)));
}

Contact.prototype.configBtnChat = function (cb) {
    function checkConfigBtn(config, cb) {
        var colonneConfig = config.colonneConfig;
        for (var i = 0; i < colonneConfig.length; i += 1) {
            if (colonneConfig[i].url === location.pathname) {
                cb(colonneConfig[i]);
                break;
            }
        }
    }
    if (sessionStorage.colonneContact) {
        checkConfigBtn(JSON.parse(sessionStorage.colonneContact), cb);
    } else {
        $.ajax({
            url : "/rsc/contrib/script/chat/colonneContactConfig.json",
            method : "GET",
            success: function (config) {
                sessionStorage.colonneContact = JSON.stringify(config);
                checkConfigBtn(config, cb)
            }
        });
    }
}

Contact.prototype.version = function () {
    try {
        var vs = JSON.parse(sessionStorage.app).nextoutils_pointDeContact;
        if (vs) return vs + "/"
        return ''
    } catch(e) {
        return ''
    }
}