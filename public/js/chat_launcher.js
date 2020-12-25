if (/mode=iadvize/gi.test(location.href)) sessionStorage.setItem("iadvize", 1); 


function getUrlVars() {
    var vars = {}, hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i += 1) {
        hash = hashes[i].split('=');
        vars[hash[0]] = hash[1];
    }
    return vars;
}
// if (/mode=iadvize/gi.test(location.href)) return;
window.chatUrl = {
    "part": {

        "VAR_URL_POPUP": {

            "INTE": "/fr/chat-next/chat-popup?popup=true",
            "QUALIF": "/fr/banque-contacts/chat-popup?popup=true",
            "DEFAULT": "/fr/banque-contacts/chat-popup?popup=true"

        },

        "VAR_URL_POPUP_EX": {

            "INTE": "/fr/chat-next/chat-popup-ex?popup=true",
            "QUALIF": "/fr/banque-contacts/chat-popup-ex?popup=true",
            "DEFAULT": "/fr/banque-contacts/chat-popup-ex?popup=true"

        }

    },

    "hb": {

        "VAR_URL_POPUP": {

            "INTE": "/fr/chat/popup?popup=true",
            "QUALIF": "/fr/chat/popup?popup=true",
            "DEFAULT": "/fr/banque-contacts/chat-popup?popup=true"

        },

        "VAR_URL_POPUP_EX": {

            "INTE": "/fr/chat/popup-ex?popup=true",
            "QUALIF": "/fr/chat/popup-ex?popup=true",
            "DEFAULT": "/fr/banque-contacts/chat-popup-ex?popup=true"

        }

    }

};

window.VAR_TIMEOUT_NAVIGATION = 1000;

(function($) {


    window.chatCore = {

        config: null,
        deviceState: 'desktop',
        timeout: 0,
        lang: 'fr',
        clickedEl: null,
        message: '<h3 class="chat-off">Désolé, le service est indisponible</h3>',
        allParams: null,
        chatName: 'ChatNext_',
        defaultChatFlow: 'Contact',
        chatCoreName: 'Default',
        typeChat: 'statique',
        click: false,
        autorun: false,
        chatflow: null,
        popupMode: null,
        popupFromPopin: null,
        firstClick: 0,
        popupChat: null,
        initload: 0,
        avisload: 0,
        classCss: null,
        initChatload: 0,
        questionInbenta: null,
        loadInbenta: 0,
        openingHoursInbenta: true,
        loadinit: 0,

        init: function(classeAppel) {
            if (chatCore.initload == 1) {
                return;
            }
            chatCore.initload++;

            trace('Initialisation du chat', traceStyles.chat);
            if (classeAppel != null) {
                trace(classeAppel, traceStyles.chat);
            }
            //Le paramétre classeAppel est utilisé quand le chat attend que la colonne contact soit crée
            //Dans ce cas on doit tester la disponibilité du chat pour ce bouton avant de faire quoi que ce soit

            var urlManager = ($('body').is('[class*="hello-"]') || $('body').hasClass('hb')) ? chatUrl.hb : chatUrl.part;
            window.VAR_URL_POPUP = (typeof(urlManager.VAR_URL_POPUP[ENVIRONNEMENT]) != "undefined") ? urlManager.VAR_URL_POPUP[ENVIRONNEMENT] : urlManager.VAR_URL_POPUP.DEFAULT;
            window.VAR_URL_POPUP_EX = (typeof(urlManager.VAR_URL_POPUP_EX[ENVIRONNEMENT]) != "undefined") ? urlManager.VAR_URL_POPUP_EX[ENVIRONNEMENT] : urlManager.VAR_URL_POPUP_EX.DEFAULT;

            //Récupération des paramétres passés en GET

            // Url Param
            jQuery.fn.extend({
                getUrlParam: function(d) {
                    d = escape(unescape(d));
                    var c = [],
                        b = null;
                    if ($(this).attr("nodeName") == "#document") {
                        if (window.location.search.search(d) > -1) b = window.location.search.substr(1, window.location.search.length).split("&")
                    } else if ($(this).attr("src") != "undefined") {
                        var a = $(this).attr("src");
                        if (a.indexOf("?") > -1) {
                            b = a.substr(a.indexOf("?") + 1);
                            b = b.split("&")
                        }
                    } else if ($(this).attr("href") != "undefined") {
                        a = $(this).attr("href");
                        if (a.indexOf("?") > -1) {
                            b = a.substr(a.indexOf("?") + 1);
                            b = b.split("&")
                        }
                    } else return null;
                    if (b === null) return null;
                    for (a = 0; a < b.length; a++) escape(unescape(b[a].split("=")[0])) == d && c.push(b[a].split("=")[1]);
                    return c.length === 0 ? null : c.length == 1 ? c[0] : c
                }
            });

            var chatFlowParam = GetURLParameter('rc');
            chatCore.chatflow = (chatFlowParam != null && (chatFlowParam == 'mobile' || chatFlowParam.indexOf('Chat') !== -1 || chatFlowParam.indexOf('Bouton') != -1)) ? chatFlowParam : null,
                chatCore.popupMode = GetURLParameter('popup'),
                chatCore.popupFromPopin = (chatCore.popupMode == null) ? null : ((document.URL.match(/popup-ex/)) ? null : true);
            console.log('CHATFLOW:' + chatCore.chatflow);


            //------

            //Ecouteur de l'événement checkstatus
            chatCore.nbrOfCheckStatus = 0;
            subscribeToCheckStatus(function() {
                chatCore.nbrOfCheckStatus++;
                trace('nbrOfCheckStatus = ' + chatCore.nbrOfCheckStatus, traceStyles.chat);
            });
            //------

            //Test d'existence d'un chat en cours
            window.loadChat = chatCore.loadChat;

            //Cas d'une popup depuis la popin
            if (chatCore.popupFromPopin == true) {
                trace('Popup lancee depuis la popin', traceStyles.chat);
                chatCore.loadChat();
                return;
            }



            var idchat = chatCore.docCookies.getItem("idchat"),
                openedPopup = chatCore.docCookies.getItem("popup");

            if (idchat != null) {
                trace('Presence d\'un cookie idchat : ', traceStyles.chat);
                trace(idchat, traceStyles.chat);

                if (openedPopup != null && chatCore.popupMode == null) {
                    trace('Popup deja presente. On ne fait rien.', traceStyles.chat);

                    return;
                }

                trace('recuperation des infos du chat en cours', traceStyles.chat);
                chatCore.loadinit++;
                $.ajax({
                    url: '/chat-wspl/rpc/getTalkStatus',
                    // accepts : "application/json",
                    contentType: "application/json; charset=UTF-8",
                    dataType: "json",
                    method: "POST",
                    data: JSON.stringify({
                        idChat: idchat
                    })
                }).done(function(data) {
                    if (data.data.status != "FERMEE") {
                        trace('data.status != "FERMEE", on laisse la conversation reprendre');
                        chatCore.loadChat();
                        chatCore.autorun = true;
                    } else {
                        trace('data.status == "FERMEE", conversation terminee, on continue l\'initialisation');
                    }
                    chatCore.initChat(classeAppel);
                    chatCore.loadinit--;
                    console.log('init ' + chatCore.loadinit);
                });
            } else {
                trace('Pas de conversation en cours', traceStyles.chat);
                if (openedPopup != null && chatCore.popupMode == null) {
                    trace('Popup deja presente. On ne fait rien.', traceStyles.chat);
                    return;
                }
                //Initialisation des boutons de lancement du chat et/ou de la colonne contact
                chatCore.initChat(classeAppel);

            }



        },
        setCookie: function(cname, cvalue, minutes) {
            var d = new Date();
            d.setTime(d.getTime() + (minutes * 30 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        },
        getCookie: function(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },

        clickChat: function() {


            if (startChatDirect) {
                console.log('clean');
                clearInterval(startChatDirect);
                startChatDirect = null;
            }

            var startChatDirect;

            if (sessionStorage.startChat) {
                delete sessionStorage['startChat'];
                startChatDirect = setInterval(function() {
                    console.log('start');
                    if ($('#ia-chat .openChat').length > 0) {
                        clearInterval(startChatDirect);
                        startChatDirect = null;
                        if ($._data($('#ia-chat .openChat')[0], "events") != null || bnpp.jQuery._data(bnpp.jQuery('#ia-chat .openChat')[0], "events") != null || jQuery._data(jQuery('#ia-chat .openChat')[0], "events") != null) {
                            $('#ia-chat .openChat').click();
                        }


                    }
                }, 1000);
            }
        },
        openInbentachat: function(availability, classCss) {
            if (ENVIRONNEMENT === "PREVIEW" || ENVIRONNEMENT === "QUALIF") return;
            chatCore.classCss = classCss;

            if (!window.Inbenta) {

                $.getScript('/rsc/contrib/script/inbenta/faqracine-mb.js', function() {
                    setTimeout(function() {

                        sessionStorage.setItem("chat", true);
                        window.Inbenta.Assistant.openInbenta(availability, true, DeviceSize.getDeviceState(), sessionStorage.info_client ? 'client' : 'prospect');
                        // SCRIPT TEMP
                    }, 2000);

                });
            } else {

                window.Inbenta.Assistant.openInbenta(availability, true, DeviceSize.getDeviceState(), sessionStorage.info_client ? 'client' : 'prospect');

            }
        },
        initializeInbentaChatButton: function(obj, question) {

            if (chatCore.classCss == null && typeof $me != 'undefined') {
                chatCore.classCss = $me.attr("class").replace("chat-inbenta", "").replace(/btn-\S*/, "") + ' fromInbenta';
            }

            if (obj && obj.addClass) {
                obj.addClass(chatCore.classCss);

            }

            chatCore.questionInbenta = question;
            window.chatCore.allParams.autre_1 = chatCore.questionInbenta;


            return;

        },
        initChat: function(classeAppel) {
            /*  if (chatCore.initChatload == 1) {
                  return;
              }*/
            var self = this;
            console.log(chatCore)
                //Lancement du chat selon le cas
            if (chatCore.popupMode != null && chatCore.popupMode == "true" && !chatCore.autorun) {
                trace('Chat en mode popup', traceStyles.chat);
                //Chat en mode popup

                //Enregistrement d'un cookie pour savoir si la popup a été fermée ou non
                window.onbeforeunload = function() {
                    chatCore.docCookies.removeItem('popup');
                    // return null;
                }
                window.addEventListener("beforeunload", function(e) {
                    chatCore.docCookies.removeItem('popup', '/', document.domain);
                    // return null;
                }, false);

                if (!chatCore.docCookies.getItem('popup')) { //Permet le rafraichissement de la popup sans perte du cookie
                    chatCore.docCookies.setItem('popup', 'true', 45 * 60, '/', document.domain);
                }

                //Apparition d'un loader le temps que la popup charge
                $('#sf-master').css('display', "none");
                $('body').addClass('js-chat-loading').removeClass('client');
                chatCore.buildPreloader($('body'), "chatPreloader");

                //Initialisation des variables par défaut et récupération de la config chat voulue
                chatCore.initDefautVariables();
                if (chatCore.chatflow != null) {
                    chatCore.getChatConfig(chatCore.chatflow);
                } else {
                    chatCore.getChatConfig();
                }

            } else if (chatCore.chatflow == "mobile" || (chatCore.chatflow && chatCore.chatflow.indexOf("Chat") === 0)) {
                trace('Chat mobile', traceStyles.chat);
                //Mode mobile
                var chat = {
                    accessMode: "mobile"
                };
                window.chat = chat;
                $('body').addClass("AppliMobile");

                //Apparition d'un loader le temps que la popup charge
                $('#sf-master').css('display', "none");
                $('body').addClass('js-chat-loading').removeClass('client');
                chatCore.buildPreloader($('body'), "chatPreloader");

                //Initialisation des variables par défaut et récupération de la config chat voulue
                chatCore.initDefautVariables();
                chatCore.getChatConfig(chatCore.chatflow);

                // $('body').on('click', '[class*="openChat"]:not(.disable)', function(e){
                //     e.preventDefault();
                //     $me = $(this);
                //     trace("click chat", traceStyles.chat);
                //     chatCore.firstClick = 1;
                    $('.btn-secondary').each(function() {
                        if ( !$(this).hasClass('directeur') && !$(this).hasClass('ecrire') && !$(this).hasClass('gerer') ) {
                            $(this).removeClass('btn-secondary').addClass('btn-secondary2');
                        }
                    });
                // });
            } else {
                trace('Chat standard', traceStyles.chat);
                //Mode standard

                // ****************************
                // Peut on activer le bouton chat situé sur la colonne contact ? (test de dispo du service via getFlowStatus)
                if ($('.colonne-contact [class*="openChat_"]').length > 0 ||
                    $('#ct-conseiller-en-ligne [class*="openChat_"]').length > 0
                ) {
                    chatCore.clickedEl = $('.colonne-contact [class*="openChat_"], #ct-conseiller-en-ligne [class*="openChat_"], #fp_souscrire [class*="openChat_"]');
                    trace("Bouton(s) chat detecte(s)", traceStyles.chat);
                    chatCore.callGetFlowStatus();
                }

                if (ENVIRONNEMENT == "PREVIEW" && window.location.pathname.indexOf('/fr/systeme/test-page/chat-externe') != -1) {
                    var BoutonTestInterval = setInterval(function() {
                        if ($('[class*=Bouton]').length) {
                            clearInterval(BoutonTestInterval);
                            chatCore.clickedEl = $('[class*=Bouton]');
                            console.log(chatCore.clickedEl)
                            chatCore.clickedEl.addClass('hidden');
                            trace("Bouton(s) test chat detecte(s)", traceStyles.chat);
                            chatCore.callGetFlowStatus();
                        }
                    }, 500);
                }
                $('body').on('click', '[class*="openChat_"]:not(.disable)', function(e) {
                    e.preventDefault();
                    if ($(this).hasClass('clicked')) {
                        return;
                    }
                    if ($('#ia-chat .header-chat .close:visible').length > 0) {
                        return;
                    }
                    if (chatCore.getCookie('clickedChat') == "true") {
                        return;
                    } else if ((chatCore.getCookie('clickedChat') == "" || chatCore.getCookie('clickedChat') == "false") && !$(this).hasClass('chat-inbenta')) {
                        chatCore.setCookie('clickedChat', true, 1);
                    }

                    chatCore.loadInbenta = 0;
                    $me = $(this);



                    var inbentaChatFermer = ($me.hasClass('chat-inbenta') && $me.hasClass('chat-fermer'));
                    var inbentaChatIndisponible = ($me.hasClass('chat-inbenta') && $me.hasClass('conseiller-indisponible'));
                    if (inbentaChatFermer || inbentaChatIndisponible) {
                        chatCore.questionInbenta = "";
                        sessionStorage.setItem("chat", true)
                        chatCore.openInbentachat(false, null);
                        return;
                    }
                    if ($me.hasClass('chat-inbenta')) {
                        chatCore.questionInbenta = "";
                        sessionStorage.setItem("chat", true)
                        chatCore.openInbentachat(true, null);
                        return;
                    }
                    if (!$me.hasClass('fromInbenta')) {
                        chatCore.questionInbenta = "";
                        delete sessionStorage['questionInbenta'];

                    } else {
                        sessionStorage.questionInbenta = chatCore.questionInbenta;
                    }


                    $('[class*="openChat_"]:not(.disable)').each(function(index) {
                        if (!$(this).hasClass('clicked')) {
                            $(this).addClass('clicked');
                        }
                    })


                    $('.btn-secondary').each(function() {
                        if ($(this).parents('.content-chat').length == 0) {
                            $(this).removeClass('btn-secondary').addClass('btn-secondary2');
                        }
                    });

                    if (chatCore.popupChat != null && chatCore.popupChat.top != null) {
                        trace("Popup ouverte", traceStyles.chat);
                        return;
                    }
                    if (chatCore.firstClick == 1) {
                        trace("Chat en train de charger", traceStyles.chat);
                        return;
                    } else {
                        trace("click chat", traceStyles.chat);
                        chatCore.firstClick = 1;
                        // Si on lance un nouveau chat, on supprime l'idchat pour avoir une nouvelle conversation
                        chatCore.docCookies.removeItem("idchat", "/");

                    }

                    if ($me.parents('#ia-chat').length > 0) { //Cas du bouton démarrer la conversation
                        return;
                    } else { //Y'a t-il déjé un chat d'ouvert ?

                        if ($('#ia-chat .wrapper-chat').length > 0) { //Fenetre de chat deja presente, on se contente de lui enlever la classe hidden
                            trace("Fenetre de chat deja presente, on se contente de lui enlever la classe hidden", traceStyles.chat);
                            $('#ia-chat .wrapper-chat.global').removeClass('hidden');
                            chatCore.firstClick = 0;
                            //Si on est en mode mobile on ajoute la classe AppliMobile
                            if (DeviceSize.getDeviceState() == 'mobile') {
                                $('body').addClass('AppliMobile');
                            }
                            chatCore.launchLoaderClock();
                        } else {
                            if ($me.hasClass("openWithRequiredDAC3") && !(sessionStorage.info_client || $(".list-header-connected .bottom-header-logoff").length > 0)) {
                                sessionStorage.openChatNextStep = true;
                                sessionStorage.objet = '.' + $me.attr("class").match(/openChat\S*/);
                                document.location.search = "requiredDAC=3";

                            } else {

                                console.log('lancement');
                                chatCore.click = true;
                                chatCore.clickedEl = $me;
                                chatCore.initDefautVariables();
                                $('.btn-secondary').each(function() {
                                    if ($(this).parents('.content-chat').length == 0) {
                                        $(this).removeClass('btn-secondary').addClass('btn-secondary2');
                                    }
                                });
                                chatCore.getChatConfig();

                            }
                        }
                    }
                }).on('click', '.header-chat .close', function(e) {
                    // if($('[id*=conversationTerminee]').length > 0 || $('[id*=indispoConseiller-chat]').length > 0 ){
                    //  $('#ia-chat').html('');
                    // }


                    $('[class*="openChat_"]:not(.disable)').each(function(index) {
                        if ($(this).hasClass('clicked')) {
                            $(this).removeClass('clicked');
                        }
                    })
                    console.log('close');
                    if (chatCore.getCookie('clickedChat') == "true") {
                        console.log('remove'); //Permet le rafraichissement de la popup sans perte du cookie
                        chatCore.setCookie('clickedChat', true, 0);
                    }

                    if ($('#liste-conversation').length < 1) {
                        $('#ia-chat').html('');
                    }
                    if ($('#ia-chat').html() == '' && DeviceSize.getDeviceState() == 'mobile') {
                        $('body').removeClass('AppliMobile');
                    }
                    clearInterval(chatCore.loaderClock);
                });

            }
            //------
            if (chatCore.allParams === null) chatCore.initDefautVariables();
            self.avis();
        },

        debugIPad: function(txt) {
            var listConversation = $('#liste-conversation');
            if (listConversation.length < 1) {
                return;
            }
            if (listConversation.find('.debugDiv').length < 1) {
                listConversation.append('<div class="debugDiv" style="position:fixed; background:rgba(0, 0, 0, 0.5); padding:1em; color:#FFF; font-size:0.85rem; width:80%; right:10%; top:1em; height:30%; overflow:auto;">DEBUG -- PREV ONLY<br /></div>');
            }
            listConversation.find('.debugDiv').append('<br />' + txt);
        },

        initDefautVariables: function() {


            if ($('body').hasClass('en')) {
                chatCore.lang = 'en';
            }

            if (document.URL.match(/hellobank/)) {
                chatCore.chatName += 'BD';
            }

            chatCore.allParams = {
                "showDisclaimer": 1,
                "chatFlow": chatCore.chatName + chatCore.defaultChatFlow,
                "typeChat": chatCore.typeChat,
                "mode": "popin",
                "source": chatCore.chatName + chatCore.defaultChatFlow,
                "libelle_du_produit": chatCore.getFilArianne(),
                "simulation": "",
                "page_internaute": document.URL.replace(/((\&|\#|\?).*)/, ''),
                "produit": "",
                "panier": "",
                "autre_1": chatCore.questionInbenta,
                "autre_2": "",
                "autre_3": ""
            };


            chatCore.chatCoreObject = {
                "chat": {
                    "zonePubliableDisclaimer": {
                        "id": "zonePubliableDisclaimer",
                        "wcmContentSelector": ".content-chat",
                        "wcmRootUrl": "/part/share/",
                        "wcmContentType": "html.page",
                        "wcmContentAsset": "/templatedata/webmaster-contents/html/data/particuliers/chat/fr/disclaimer-chat.xml",
                        "wcmIframe": false
                    },
                    "zonePubliableAttente": {
                        "id": "zonePubliableAttente",
                        "wcmContentSelector": ".content-chat",
                        "wcmRootUrl": "/part/share/",
                        "wcmContentType": "html.page",
                        "wcmContentAsset": "/templatedata/webmaster-contents/html/data/particuliers/chat/fr/attente-chat.xml",
                        "wcmIframe": false
                    },
                    "zonePubliableIndispoConseiller": {
                        "id": "zonePubliableIndispoConseiller",
                        "wcmContentSelector": ".content-chat",
                        "wcmRootUrl": "/part/share/",
                        "wcmContentType": "html.page",
                        "wcmContentAsset": "/templatedata/webmaster-contents/html/data/particuliers/chat/fr/indispoConseiller-chat.xml",
                        "wcmIframe": false
                    },
                    "zonePubliableErreurTechnique": {
                        "id": "zonePubliableErreurTechnique",
                        "wcmContentSelector": ".content-chat",
                        "wcmRootUrl": "/part/share/",
                        "wcmContentType": "html.page",
                        "wcmContentAsset": "/templatedata/webmaster-contents/html/data/particuliers/chat/fr/erreurTechnique-chat.xml",
                        "wcmIframe": false
                    },
                    "zonePubliableConversationTerminee": {
                        "id": "zonePubliableConversationTerminee",
                        "wcmContentSelector": ".content-chat",
                        "wcmRootUrl": "/part/share/",
                        "wcmContentType": "html.page",
                        "wcmContentAsset": "/templatedata/webmaster-contents/html/data/particuliers/chat/fr/conversationTerminee-chat-sondage.xml",
                        "wcmIframe": false
                    },
                    "zonePubliableServiceFerme": {
                        "id": "zonePubliableServiceFerme",
                        "wcmContentSelector": ".content-chat",
                        "wcmRootUrl": "/part/share/",
                        "wcmContentType": "html.page",
                        "wcmContentAsset": "/templatedata/webmaster-contents/html/data/particuliers/chat/fr/serviceFerme-chat.xml",
                        "wcmIframe": false
                    },
                    "zonePubliableEvaluation": {
                        "id": "zonePubliableEvaluation",
                        "wcmContentSelector": "evaluation",
                        "wcmRootUrl": "/part/share/",
                        "wcmContentType": "html.page",
                        "wcmContentAsset": "/templatedata/webmaster-contents/html/data/particuliers/chat/fr/evaluation-chat.xml",
                        "wcmIframe": false
                    }
                }
            };
        },

        loadChat: function(params, waitTime, noCallGetFlowStatus, zonesPubliablesExt) {
            trace('loadChat', traceStyles.chat);
            /**
             * Fonction qui permet de charger le chat
             */

            if (params) {
                var chat = window.chat ? window.chat : {};
                chat.params = params;
                chat.waitTime = waitTime;
                chat.noCallGetFlowStatus = noCallGetFlowStatus;
                chat.zonesPubliablesExt = zonesPubliablesExt;
            }
            chatCore.loadinit++;
            //chargement du chat
            $.ajax({
                url: "/static/chat-htmlpl/app-index.html"
            }).done(function(data) {

                trace("loadChat reussi", traceStyles.chat);
                trace(data, traceStyles.chat);
                var myDiv;
                //tester la presence de la div
                if ($("#ia-chat").length == 0) {
                    trace('#ia-chat n\'existe pas', traceStyles.chat);
                    myDiv = $("<div id='ia-chat2'>&nbsp;</div>");
                    trace($("#ia-chat"), traceStyles.chat);
                    myDiv.appendTo("body");
                    trace($("#ia-chat"), traceStyles.chat);
                } else {
                    trace('#ia-chat existe', traceStyles.chat);
                    myDiv = $("#ia-chat");
                }
                myDiv.html(data);
                chatCore.loadinit--;
                console.log('init ' + chatCore.loadinit);
            });
        },

        docCookies: {
            /*\
            |*|
            |*|  :: cookies.js ::
            |*|
            |*|  A complete cookies reader/writer framework with full unicode support.
            |*|
            |*|  Revision #1 - September 4, 2014
            |*|
            |*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
            |*|  https://developer.mozilla.org/User:fusionchess
            |*|
            |*|  This framework is released under the GNU Public License, version 3 or later.
            |*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
            |*|
            |*|  Syntaxes:
            |*|
            |*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
            |*|  * docCookies.getItem(name)
            |*|  * docCookies.removeItem(name[, path[, domain]])
            |*|  * docCookies.hasItem(name)
            |*|  * docCookies.keys()
            |*|
            \*/

            getItem: function(sKey) {
                if (!sKey) {
                    return null;
                }
                return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
            },
            setItem: function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                    return false;
                }
                var sExpires = "";
                if (vEnd) {
                    switch (vEnd.constructor) {
                        case Number:
                            sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                            break;
                        case String:
                            sExpires = "; expires=" + vEnd;
                            break;
                        case Date:
                            sExpires = "; expires=" + vEnd.toUTCString();
                            break;
                    }
                }
                document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
                return true;
            },
            removeItem: function(sKey, sPath, sDomain) {
                if (!this.hasItem(sKey)) {
                    return false;
                }
                document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
                return true;
            },
            hasItem: function(sKey) {
                if (!sKey) {
                    return false;
                }
                return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
            },
            keys: function() {
                var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
                for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
                    aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
                }
                return aKeys;
            }
        },

        getChatConfig: function(chatFlow, returnChatFlow) {

            if (returnChatFlow == true) {
                var deferred = $.Deferred();
            }

            var now = new Date().getTime();
            cacheTime = Math.floor(now / (15 * 60 * 1000));

            chatCore.loadinit++;
            trace('call chatConfig.json', traceStyles.chat);
            $.ajax({
                async: false,
                url: '/rsc/contrib/script/chat/chatConfig.json?cache=' + now,
                dataType: "json",
                success: function(data) {
                    chatCore.config = data;
                    chatCore.cleanChatConfig();
                    if (returnChatFlow == true) {
                        if (typeof(chatCore.clickedEl) == "object") { //On a plusieurs boutons chat
                            trace("On a plusieurs boutons chat", traceStyles.chat);

                            //Il faut retourner un tableau avec chaque chatflow associé é chaque bouton pour pouvoir ensuite faire les appels é getflowstatus adéquat
                            var arClickedEl = $.extend({}, chatCore.clickedEl),
                                arChatFlows = [];

                            for (var i = 0; i < arClickedEl.length; i++) {
                                chatCore.clickedEl = $(arClickedEl[i]);
                                arChatFlows.push(chatCore.initChatConfig(null, true));
                                console.log('boucle arChatFlows')
                            }
                            console.log('exit boucle arChatFlows')
                            console.log(arChatFlows)

                            chatCore.clickedEl = arClickedEl;
                            deferred.resolve(arChatFlows);
                        } else {
                            deferred.resolve(chatCore.initChatConfig(null, true));
                        }
                    } else {
                        chatCore.initChatConfig(chatFlow);
                        chatCore.openChat();
                    }
                    chatCore.loadinit--;
                    console.log('init ' + chatCore.loadinit);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    trace(jqXHR.responseText, traceStyles.chat);
                    chatCore.displayNoChat();
                    chatCore.loadinit--;
                    console.log('init ' + chatCore.loadinit);
                }
            });

            if (returnChatFlow == true) {
                return deferred;
            }
        },

        initChatConfig: function(chatFlow, returnChatFlow) {

            var _classes;

            if (chatFlow != null) {
                _classes = ['openChat_' + chatFlow];
            } else {
                _classes = (chatCore.clickedEl != null) ? chatCore.clickedEl.attr('class').split(' ') : null;
            }

            var _openChatClass = null,
                param = null,
                _flowNumber = null;

            if (_classes != null) {

                //Identification de la classe d'ouverture du chat
                for (var i = 0; i < _classes.length; i++) {
                    if (_classes[i].match(/^openChat.*$/g)) {
                        _openChatClass = _classes[i].split('_');
                    }
                }

                if (_openChatClass != null && _openChatClass.length > 1) {
                    //Classe d'appel
                    for (var i = 0; i < chatCore.config.chatFlows.length; i++) {

                        if (typeof(chatCore.config.chatFlows[i]['classe_appel']) != "undefined") {

                            if (_openChatClass[1].toLowerCase() == chatCore.config.chatFlows[i]['classe_appel'].toLowerCase()) {
                                _flowNumber = i;
                                break;
                            }

                            var tempClassName = _openChatClass[1].toLowerCase();
                            for (var k = 2; k < _openChatClass.length; k++) {

                                if ((tempClassName + '_' + _openChatClass[k]).toLowerCase() == chatCore.config.chatFlows[i]['classe_appel'].toLowerCase()) {
                                    _flowNumber = i;
                                    break;
                                } else {
                                    tempClassName = (tempClassName + '_' + _openChatClass[k]);
                                }
                            }
                        }
                    }

                    if (_flowNumber == null) {
                        //Chatflow
                        for (var i = 0; i < chatCore.config.chatFlows.length; i++) {
                            if (typeof(chatCore.config.chatFlows[i]['chatFlow']) != "undefined" && typeof(chatCore.config.chatFlows[i]['classe_appel']) == "undefined") {

                                if (_openChatClass[1].toLowerCase() == chatCore.config.chatFlows[i]['chatFlow'].toLowerCase() || (_openChatClass.length > 2 && _openChatClass[1].toLowerCase() + '_' + _openChatClass[2].toLowerCase() == chatCore.config.chatFlows[i]['chatFlow'].toLowerCase())) {
                                    _flowNumber = i;
                                }
                            }
                        }
                    }

                    //Config
                    var pattern = /^config(.+)$/g;
                    if (_openChatClass[_openChatClass.length - 1].match(pattern)) {
                        chatCore.chatCoreName = String(_openChatClass[_openChatClass.length - 1]).replace(pattern, '$1', _openChatClass[_openChatClass.length - 1]);
                    }
                }

                if (returnChatFlow == true) {
                    return (!isNaN(_flowNumber)) ? chatCore.config.chatFlows[_flowNumber]['chatFlow'] : null;
                }

                if (!isNaN(_flowNumber)) {
                    $.map(chatCore.allParams, function(val, i) {
                        if (array_key_exists(i, chatCore.config.chatFlows[_flowNumber])) {
                            if (String(chatCore.config.chatFlows[_flowNumber][i]).length > 0) {
                                if ($.inArray(i, ['typechat', 'libelle_du_produit', 'page_internaute']) < 0) {
                                    chatCore.allParams[i] = chatCore.config.chatFlows[_flowNumber][i];
                                }
                            }
                        }
                    });
                    if (DeviceSize.getDeviceState() == 'mobile' && array_key_exists("mobile", chatCore.config.chatFlows[_flowNumber])) {
                        $.extend(chatCore.allParams, chatCore.config.chatFlows[_flowNumber]["mobile"]);
                    } else if (DeviceSize.getDeviceState() == 'mobile' && array_key_exists("mobile", chatCore.config.chatFlows[_flowNumber])) {

                    }
                }
            }

            if (chatCore.popupMode == null) {
                if (_flowNumber != null && typeof(chatCore.config.chatFlows[_flowNumber].classe_appel) != "undefined") {
                    VAR_URL_POPUP_EX = VAR_URL_POPUP_EX.replace(/&rc=.+/, '');
                    VAR_URL_POPUP_EX += "&rc=" + chatCore.config.chatFlows[_flowNumber].classe_appel;
                } else {
                    VAR_URL_POPUP_EX = VAR_URL_POPUP_EX.replace(/&rc=.+/, '');
                    VAR_URL_POPUP_EX += "&rc=" + chatCore.allParams.chatFlow;
                }
            }

            var zonesPubliable = 'Default';

            $.each(chatCore.config.chatFlows, function(key, value) {
                if (value.source === chatCore.allParams.source) {
                    zonesPubliable = (typeof value.zone_publiable !== 'undefined') ? value.zone_publiable : 'Default';
                }
            });
            /* if ( typeof zonesPubliable == 'undefined' ) {
               zonesPubliable = 'Default';
             }*/
            // console.log(zonesPubliable, chatCore.allParams.source);

            chatCore.chatCoreObject = chatCore.config.zonesPubliables[zonesPubliable];

            // chatCore.chatCoreObject = chatCore.config.zonesPubliables[chatCore.chatCoreName];
            // chatCore.openChat( allParams, chatCore.config.zonesPubliables[_chatCore] );
        },

        displayNoChat: function(txt) {

            if ($('#id_balise_div').length > 0) {
                $('#id_balise_div').remove();
            }
            $('body').append('<div id="id_balise_div"></div>');
            var chatDiv = $('#id_balise_div');

            if (chatDiv.length == 0) {
                trace("Chat div not found", traceStyles.chat);
                return;
            }

            if (typeof(txt) == "undefined") {
                txt = chatCore.message;
            }

            var code = '<section class="wrapper-chat">';
            code += '<header class="header-chat">';
            code += '<h2>chat conseiller</h2>';
            code += '<span class="close">X</span>';
            code += '<span class="pull-right">';
            code += '<strong class="js-reduire-chat"></strong>';
            code += '<strong class="js-popup-chat"></strong>';
            code += '</span>';
            code += '</header>';
            code += '<div class="content-chat">';
            code += '<div class="ferme"></div>';
            code += txt;
            code += '<button class="btn-secondary off">Se faire rappeler sous 24h</button>';
            code += '</div>';
            code += '</section>';

            chatDiv.append(code);
        },

        openChat: function(contact) {
            if (!contact) return;
            try { if ((JSON.parse(sessionStorage.contact).step !== 2 && !contact) || !contact) return; } catch (e) { if ((sessionStorage.contact === undefined && !contact) || !contact) return }
            sessionStorage.removeItem("chat")

            if (chatCore.allParams && chatCore.allParams.mode == "popup" && chatCore.click == true) {
                trace("VAR_URL_POPUP_EX = " + VAR_URL_POPUP_EX, traceStyles.chat);
                chatCore.popupChat = window.open(VAR_URL_POPUP_EX, "popupChat", "width=400, height=480, top=10, left=10");
                chatCore.docCookies.setItem('popup', 'true', 45 * 60, '/', document.domain);
                chatCore.firstClick = 0; //On remet firstClick é 0 pour que, si la popup du chat est fermée, il soit possible de la lancer é nouveau
                return;
            }

            if ($('#id_balise_div').length > 0) {
                $('#id_balise_div').remove();
            }

            $('body').append('<div id="id_balise_div"></div>');

            var paramsTool = "";
            var paramsUrl = location.search.substring(1);
            var url = "/static/chat-htmlpl/app-index.html" + "?mode=ajax&cache=" + (new Date()).getTime();
            if (paramsTool.length > 0) {
                url = url + "&" + paramsTool;
                if (paramsUrl.length > 0) {
                    url = url + "&" + paramsUrl;
                }
            } else if (paramsUrl.length > 0) {
                url = url + "&" + paramsUrl;
            }

            // window.paramsChat = $.extend(true, {}, chatCore.allParams);
            // window.zonesPubliablesExt = $.extend(true, {}, chatCore.chatCoreObject);
            // sessionStorage.setItem('paramsChat', JSON.stringify(chatCore.allParams));
            // sessionStorage.setItem('zonesPubliablesExt', JSON.stringify(chatCore.chatCoreObject));
            //
            // window.paramsChat = $.extend(true, {}, chatCore.allParams);
            // window.zonesPubliablesExt = $.extend(true, {}, chatCore.chatCoreObject);
            // sessionStorage.setItem('paramsChat', JSON.stringify(chatCore.allParams));
            // sessionStorage.setItem('zonesPubliablesExt', JSON.stringify(chatCore.chatCoreObject));


            /* ************************************************************** */
            /*                           MODE MOBILE                          */
            /* ************************************************************** */
            if (chatCore.allParams.type == "mobile") {
                trace("Mobe mobile detecte", traceStyles.chat);
                chatCore.modeMobile = true;

                //Sur mobile, quand on écrit et que le clavier apparait, la fenétre est décalée
                //Il faudrait replacer la conversation é chaque fois qu'on a un resize

                //On définit chat en mode mobile (demande de l'équipe mobile)
                //Mode mobile
                var chat = {
                    accessMode: "mobile"
                };
                window.chat = chat;
                //------

                $(window).resize(function() {
                    chatCore.resizeConversation();
                });

                //---------

                //Debug graphiques
                // $(window).on('resize', function(){
                //   chatCore.debugIPad("resize");
                // });

                // $('html').on('scroll', function(){
                //   chatCore.debugIPad('scroll html');
                // });

                // $('body').on('scroll', function(){
                //   chatCore.debugIPad('scroll body');
                // }).on('focus', '.chat-form', function(){
                //   chatCore.debugIPad('focus chat-form');
                // }).on('blur', '.chat-form', function(){
                //   chatCore.debugIPad('blur chat-form');
                //   $(document).scrollTop(0);
                // });

                // $(document).on('scroll', function(){
                //   chatCore.debugIPad('scroll document');
                // });
                //--------

                //Correctif utile sur Ipad
                //Replace le document aprés avoir quitté le champs de saisie
                //et, par extension, aprés que le clavier ait disparu
                $('body').on('blur', '.chat-form', function() {
                    $(document).scrollTop($('html').outerHeight());
                    setTimeout(function() {
                        $(document).scrollTop($('html').outerHeight());
                    }, 300);
                });

            }
            /* ************************************************************** */
            /* ************************************************************** */
            /* ************************************************************** */

            var delay = (chatCore.popupMode || !chatCore.modeMobile) ? 3000 : 1000;


            chatCore.loadinit++;
            $.ajax({
                async: false,
                url: url,
                dataType: "html",
                success: function(data) {

                    var chatDiv = $("#id_balise_div");
                    if (chatDiv.length == 0) {
                        trace("Chat div not found", traceStyles.chat);
                    } else {
                        $(data).appendTo("#id_balise_div");

                        trace('paramsChat :', traceStyles.chat);
                        trace(chatCore.allParams);
                        trace('zonePubliablesExt :', traceStyles.chat);
                        trace(chatCore.chatCoreObject);

                        runChat(chatCore.allParams, delay, false, chatCore.chatCoreObject);

                        // chatCore.loadChat(chatCore.allParams, 0, false, chatCore.chatCoreObject);
                        chatCore.launchLoaderClock();
                        console.log('init ' + chatCore.loadinit);
                        chatCore.loadinit--;
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    trace(jqXHR.responseText, traceStyles.chat);
                    console.log('init ' + chatCore.loadinit);
                    chatCore.loadinit--;
                }
            });
        },

        cleanChatConfig: function() {
            $.map(chatCore.config.zonesPubliables, function(val, i) {
                $.map(val.chat, function(_val, _i) {
                    _val.wcmContentAsset = _val.wcmContentAsset.replace(/(\/fr\/)|(\/en\/)/g, '/' + chatCore.lang + '/');
                });
            });
        },


        launchLoaderClock: function() {
            trace("launchLoaderClock", traceStyles.chat);
            try {
                clearInterval(chatCore.loaderClock);
            } catch (e) {
                trace(e);
            }

            var count = 0;
            chatCore.loaderClock = setInterval(function() {
                if ($('.circle-degrade').length > 0) {
                    //Si on est en mode mobile on ajoute la classe AppliMobile
                    if (DeviceSize.getDeviceState() == 'mobile' && !$('body').hasClass('AppliMobile')) {
                        $('body').addClass('AppliMobile');
                    }
                }

                if ($('#disclaimerMobile').length == 1) {
                    if (chatCore.loadInbenta == 0) {
                        $('#ia-chat').hide("fast", function() {
                            sessionStorage.setItem("chat", true)
                            chatCore.openInbentachat(chatCore.openingHoursInbenta, ' notHide');
                            $(document).on('click', '.notHide', function() {
                                $('#ia-chat').show("fast", function() {
                                    if ($._data($('#ia-chat .openChat')[0], "events") != null || bnpp.jQuery._data(bnpp.jQuery('#ia-chat .openChat')[0], "events") != null || jQuery._data(jQuery('#ia-chat .openChat')[0], "events") != null) {
                                        $('#ia-chat .openChat').click();
                                    }
                                })

                            });
                            $(document).on('click', '#inbentaModal .close-modal', function() {
                                $('#ia-chat').show();;
                            });
                        })

                    }
                    chatCore.loadInbenta++;

                }




                if ($('[id*="attente-chat"]').length > 0) {
                    clearInterval(chatCore.loaderClock);
                    buildCanvasLoader($('.canvasLoader'), {
                        dotNumber: 10,
                        dotWidth: 8,
                        density: 1.3,
                        trailMode: "followGlobalEase",
                        ease: "easeInOutQuad"
                    });
                }

                if ($('#ia-chat').children().length > 0) {
                    $('#chatPreloader').remove();
                    chatCore.firstClick = 0; //On met firstClick é 0 pour que, si le chat est hidden, il soit possible de le réafficher
                }

                if (chatCore.nbrOfCheckStatus >= 2) {
                    count++;
                }

                // if(count > 7 && $('.wrapper-chat').length < 1 && chatCore.popupMode == "true"){//Si aprés quelques secondes on n'a toujours pas de chat on relance
                //     trace("relance du chat");
                //  count = 0;
                //  chatCore.nbrOfCheckStatus = 0;
                //  clearInterval(chatCore.loaderClock);
                //  chatCore.buildPreloader( $('body'), "chatPreloader" );
                //     runChat(chatCore.allParams, 0, false, chatCore.chatCoreObject);
                //     chatCore.launchLoaderClock();
                // }

            }, 200);
        },

        buildPreloader: function(el, id, options, type) {
            trace('buildPreloader', traceStyles.chat);
            trace(el, traceStyles.chat);
            trace(id, traceStyles.chat);
            trace(options, traceStyles.chat);
            trace(type, traceStyles.chat);
            $('#' + id).remove();
            if (typeof(type) != "undefined") {
                if (type == "after") {
                    el.after('<div id="' + id + '"></div>');
                } else if (type == "before") {
                    el.before('<div id="' + id + '"></div>');
                } else {
                    el.prepend('<div id="' + id + '"></div>');
                }
            } else {
                el.prepend('<div id="' + id + '"></div>');
            }

            var baseOptions = {
                color: "#FFF",
                bgcolor: "rgba(255, 255, 255, 0.1)",
                precision: 1,
                taillength: 0.2,
                type: "tail"
            }
            if (typeof(options) != "undefined") {
                baseOptions = $.extend(baseOptions, options);
            }
            buildCanvasLoader($('#' + id), baseOptions);
        },

        getFilArianne: function() {
            var urlParts = document.URL.split('/');
            // urlParts.splice(0, 4);
            // return urlParts.join('/');
            return urlParts[urlParts.length - 1].replace(/((\&|\#|\?).*)/, '');
        },

        callGetFlowStatus: function() {
            //    trace("Verification d'un chat deja lance via le cookie `idchat`", traceStyles.chat);
            // if ( chatCore.docCookies.getItem('idchat') ) {
            //  trace("Chat deja lancé on ajoute la class hidden à tous les boutons", traceStyles.chat);
            //  $('[class*="openChat_"]').addClass('hidden');
            //  return;
            // }

            $.when(
                chatCore.getChatConfig(null, true)
            ).then(
                function(_chatFlow) {
                    trace("appel(s) a getFlowStatus...", traceStyles.chat);
                    trace(_chatFlow, traceStyles.chat);

                    var arChatFlows = [].concat(_chatFlow),
                        arClickedEl = $.extend({}, chatCore.clickedEl); //arChatFlows et arClickedEl doivent forcément avoir le même nombre d'éléments

                    //Un tableau de correspondance chatflow => classeAppel est utile pour la suite
                    var arCorres = {};
                    for (var i = 0; i < arChatFlows.length; i++) {
                        if (typeof(arCorres[arChatFlows[i]]) != "undefined") { //On a déjà un bouton avec le même chatflow, on se contente d'ajouter le bouton actuel dans la même entrée
                            arCorres[arChatFlows[i]] = $(arCorres[arChatFlows[i]]).add(arClickedEl[i]);
                        } else {
                            arCorres[arChatFlows[i]] = $(arClickedEl[i]);
                        }
                    }

                    for (var i = 0; i < arChatFlows.length; i++) {
                        $.ajax({
                            url: '/chat-wspl/rpc/getFlowStatus',
                            // accepts : "application/json",
                            contentType: "application/json; charset=UTF-8",
                            dataType: "json",
                            method: "POST",
                            data: JSON.stringify({
                                chatFlow: arChatFlows[i]
                            })
                        }).done(function(data) {
                            chatCore.openingHoursInbenta = data.data.openingHours;
                            if (typeof(data.message) != "undefined" && data.message == "OK") {

                                //De quel élément s'agit-il ?
                                var clickedEl = arCorres[data.data.chatFlow];

                                trace("dynamicTalkAllowed : " + data.data.dynamicTalkAllowed, traceStyles.chat);

                                if (ENVIRONNEMENT == 'PREVIEW')
                                    data.data.dynamicTalkAllowed = 0;


                                if (data.data.dynamicTalkAllowed == 0) {
                                    trace("Chat statique", traceStyles.chat);
                                    clickedEl.removeClass('hidden').removeClass('disable');
                                    if (arChatFlows.length == 1) {
                                        $('[class*="openChat_"].disable').removeClass('disable'); //Pour le cas de deux boutons chat identiques
                                    }


                                } else {
                                    trace("Chat dynamique", traceStyles.chat);
                                    trace("availability = " + data.data.availability, traceStyles.chat);
                                    if (data.data.availability == 1) {
                                        trace("Activation du bouton chat", traceStyles.chat);
                                        clickedEl.removeClass('hidden').removeClass('disable');
                                        if (arChatFlows.length == 1) {
                                            $('[class*="openChat_"].disable').removeClass('disable'); //Pour le cas de deux boutons chat identiques
                                        }
                                    } else {
                                        trace("Desactivation du bouton chat", traceStyles.chat);
                                        clickedEl.removeClass(arChatFlows[i]);
                                        // Exceptions (patch?)    
                                        // si page /nous-contacter/nous-contacter et '[class*="Chat_MB_Contacts"]'
                                        (function toDisableMBContatcs(params) {
                                            trace("Bouton chat Chat_MB_Contacts disable sur page /nous-contacter/nous-contacter", traceStyles.chat);
                                            var isGoodPage;
                                            var $btn;
                                            var $tmp;
                                            var isHeuresOuvrables;
                                            var openingHours;

                                            openingHours = (function getopeningHours(params) {
                                                var ref;
                                                var res;
                                                res = typeof data !== "undefined" && data !== null ? (ref = data.data) != null ? ref.openingHours : 1 : 1;

                                                return res;
                                            })();

                                            isHeuresOuvrables = openingHours === 1;

                                            isGoodPage = window.location.pathname.indexOf('/nous-contacter/nous-contacter') >= 0;
                                            if (isGoodPage) {
                                                $btn = $('[class*="Chat_MB_Contacts"].hidden');
                                                $tmp = $btn.addClass('disable')
                                                    .removeClass('hidden')
                                                    .next('p.horaires');

                                                if (isHeuresOuvrables) {
                                                    $tmp.addClass('hidden')
                                                        .after('<p class="horaires">Tous nos conseillers sont actuellement mobilisés, veuillez réessayer ultérieurement.</p>');
                                                }
                                            }
                                        })();
                                    }
                                }

                                window.colContHeight = $('#colonneContactContainer').outerHeight(true);
                            }

                        });
                    }
                }
            );
        },
        avis: function() {
            // if ( ENVIRONNEMENT != 'PREVIEW' ) { return; }
            if (chatCore.avisload == 1) {
                return;
            }
            chatCore.avisload++;
            var currentStep = 0;
            var chatStepContainer;
            var chatData;
            var chatflow;
            var pollForm = $('<form/>').attr('id', 'poll-form');

            var buildSmiley = function(step, inputName, container) {
                var list = $('<ul/>').addClass('list-avis-chat');

                $.each(step.inputs, function(idx, input) {
                    var listElment = $('<li/>');
                    var inputElem = $('<input/>').attr('type', 'radio');
                    inputElem.addClass('includeIntoFormname');
                    inputElem.attr('id', inputName + idx);
                    inputElem.attr('name', inputName);
                    inputElem.prop('value', input.value);
                    inputElem.addClass('js-chat-avis-next-step');
                    var label = $('<label/>').attr('for', inputName + idx);
                    label.text(input.label);

                    listElment.append(inputElem);
                    listElment.append(label);
                    list.append(listElment);

                });

                container.append(list);
            };

            var buildNPS = function(step, inputName, container) {
                var content = $('<div/>').addClass('row radio-inline list-avis-chat-nps');

                $.each(step.inputs, function(idx, input) {
                    var radioContainer = $('<div/>').addClass('col-11');
                    var inputElem = $('<input/>').attr('type', 'radio');
                    inputElem.addClass('includeIntoFormname');
                    inputElem.attr('id', inputName + idx);
                    inputElem.attr('name', inputName);
                    inputElem.prop('value', input.value);
                    inputElem.addClass('js-chat-avis-next-step');
                    var label = $('<label/>').attr('for', inputName + idx);
                    label.addClass('radio-label');
                    label.text(input.label);

                    radioContainer.append(inputElem);
                    radioContainer.append(label);

                    content.append(radioContainer);

                });

                container.append(content);
                container.addClass('form');

                var labels = $('<div/>').addClass('row row-labels');
                var labelBas = $('<div/>').addClass('col-2 lower-label');
                labelBas.text(step.labelBas);
                var labelHaut = $('<div/>').addClass('col-2 higher-label');
                labelHaut.text(step.labelHaut);

                labels.append(labelBas);
                labels.append(labelHaut);

                container.append(labels);
            };

            var buildSendBtn = function(container) {
                var btnRow = $('<div/>').addClass('row btn');
                var btnCancel = $('<button/>').addClass('btn-secondary pull-left js-close-conversation');
                btnCancel.attr('type', 'button');
                btnCancel.attr('name', 'cancel');
                btnCancel.text('Annuler');
                var btnSend = $('<button/>').addClass('btn-secondary send-poll');
                btnSend.attr('type', 'button');
                btnSend.text('Envoyer');
                btnRow.append(btnCancel);
                btnRow.append(btnSend);

                container.append(btnRow);
            };

            var createPollTemplates = function(data, currentStep, totalStep) {
                var chatContent = $('.content-chat');
                var pollStartScreen = chatContent.html();
                var closeScreen = $('<div/>').addClass('close-screen hidden');

                chatContent.empty();
                chatContent.append(closeScreen);
                closeScreen.append(pollStartScreen)


                var pollContent = $('<div/>').addClass('poll-content');


                chatContent.append(pollContent);

                var circle = $('<div/>').addClass('circle-avis');
                var title = $('<h3/>').addClass('chat-wait').text('Laisser un avis');

                var surveyForm = $('<input/>').attr('type', 'text');
                surveyForm.attr('name', 'surveyname');
                surveyForm.addClass('includeIntoFormname hidden');
                surveyForm.attr('value', 'SondageChatMB');


                var threadID = (sessionStorage.getItem('chat_thread_id')) ? sessionStorage.getItem('chat_thread_id') : 'no_thread_id';
                var threadIdInpt = $('<input/>').attr('type', 'text');
                threadIdInpt.attr('name', 'thread_id');
                threadIdInpt.addClass('includeIntoFormname hidden');
                // threadIdInpt.attr('value', '3282893');
                threadIdInpt.attr('value', threadID);

                var dataClient = $('<input/>').attr('type', 'hidden');
                dataClient.attr('name', 'Numero_client');
                dataClient.attr('value', 'DATANUMCLIENT');

                var email = $('<input/>').attr('type', 'hidden');
                email.attr('name', 'E_mail');
                email.attr('value', "bnpparibas@bnpparibas.com");

                // chatContent.empty();

                pollContent.append(circle);
                pollContent.append(title);
                pollContent.append(pollForm);

                pollForm.append(surveyForm);
                pollForm.append(threadIdInpt);
                pollForm.append(dataClient);
                pollForm.append(email);


                $.each(data, function(inputName, step) {
                    currentStep++;
                    var container = $('<div/>').addClass('chat-step-container hidden');
                    var question = $('<p/>').addClass('step').html(currentStep + '/' + (totalStep - 1) + '<br>' + step.question);

                    container.append(question);
                    pollForm.append(container);

                    switch (step.type) {
                        case 'smiley':
                            buildSmiley(step, inputName, container);

                            break;
                        case 'NPS':
                            buildNPS(step, inputName, container);
                            break;
                        case 'text':
                            var content = $('<textarea/>').attr('row', 6);
                            content.addClass('includeIntoFormname');
                            content.attr('placeholder', 'Message');
                            content.attr('name', inputName);

                            container.append(content);
                            container.addClass('form form-avis');
                            break;
                    }

                    if (currentStep < (totalStep - 1)) {
                        var btn = $('<button/>').attr('type', 'button');
                        btn.addClass('cancel js-close-conversation');
                        btn.text('Annuler');

                        container.append(btn);
                    } else if (currentStep === (totalStep - 1)) {
                        buildSendBtn(container);
                    }
                });
            };

            $('body').on('click', '[name=laisserAvis]', function() {
                var jThis = $(this);
                var pollContent = $('.poll-content');
                var closeScreen = $('.close-screen');

                trace('Appel du fichier avisConfig.json', traceStyles.chat);

                jThis.off('click');

                chatflow = chatCore.allParams.chatFlow;

                if (!closeScreen.length && !pollContent.length) {
                    $.getJSON('/rsc/contrib/script/chat/avisConfig.json?_=' + Date.now(), function(data) {
                        if (!data[chatflow]) {
                            trace('Pas de config trouve pour ce chatflow: ' + chatflow, traceStyles.chat);
                            return;
                        }

                        var totalStep = Object.keys(data[chatflow]).length;

                        chatData = data;

                        createPollTemplates(data[chatflow], currentStep, totalStep);

                        // chatContent.append(form);
                        chatStepContainer = $('.chat-step-container');

                        chatStepContainer.eq(currentStep).removeClass('hidden');
                    });
                } else {
                    closeScreen.addClass('hidden');
                    chatStepContainer.eq(currentStep).removeClass('hidden');
                    pollContent.removeClass('hidden');
                }
            });

            $('body').on('click', '.js-chat-avis-next-step', function() {
                var formValues = $(this).context;
                var $nextStep = $(this).parents('.chat-step-container').next('.chat-step-container');
                if ($nextStep.length) {
                    currentStep++;
                    chatStepContainer.addClass('hidden');
                    $nextStep.removeClass('hidden');
                }
            });

            $('body').on('click', '.send-poll', function(evt) {
                var lastProperty = Object.keys(chatData[chatflow]).pop();
                var chatContent = $('.content-chat');
                var circle = $('<div/>').addClass('circle-valid');
                var title = $('<h3/>').addClass('chat-wait').text(chatData[chatflow][lastProperty].title);
                var text = $('<p/>').html(chatData[chatflow][lastProperty].text);
                var formValues = $(this).closest('form').find('textarea')[0];

                evt.preventDefault();

                $.getScript('/rsc/contrib/script/simulateur/formulaire/formulaire.js', function() {
                    var newFormulaire = new formulaire();

                    newFormulaire.send($("#poll-form"), 'SondageChatMB', "bnpparibas.net", "bnpparibas@bnpparibas.com", function() {
                        currentStep = 0;
                        chatContent.empty();
                        pollForm.empty();

                        chatContent.append(circle);
                        chatContent.append(title);
                        chatContent.append(text);
                    });
                });
            });

            $('body').on('click', '.js-close-conversation', function() {
                var pollContent = $('.poll-content');
                var closeScreen = $('.close-screen');

                pollContent.addClass('hidden');
                closeScreen.removeClass('hidden');
            });

            $('body').on('mouseenter', '.list-avis-chat-nps .col-11', function() {
                var prev = $(this).prevAll();
                var radios = prev.find('.radio-label');
                radios.removeClass('active');
                radios.addClass('active');
            });

            $('body').on('mouseleave', '.list-avis-chat-nps .col-11', function() {
                var prev = $(this).prevAll();
                var radios = prev.find('.radio-label');
                radios.removeClass('active');
            });
        },
        sendMessageConseiller: function(msg) {
            if (msg !== null && msg !== undefined) {
                sessionStorage.removeItem('bot_part_idBNPP');
                $("#chat-msg").html(msg);
                $("#nextoutils_chatbot").fadeOut();
                setTimeout(function () {
                    $(".action-chat").find(".js-send-message").trigger('click');
                    if ($("#liste-conversation").find(".client").eq(0).length > 0)
                        $("#liste-conversation").find(".client").eq(0).remove();
                    $(".chat-form").find(".load_chatbot").remove();
                }, 500);

                sessionStorage.removeItem("messageConseiller");
            }
        },
        contactChat : function (msg) {
            let inc = 0,
                inc2 = null;
            let i1 = setInterval(function() {
                if ($(".ec-conseiller").find(".openChat").length === 1) {
                    if (inc2 === null)
                        inc2 = inc;
                    $("#nextoutils_chatbot").fadeOut();
                    if (inc === (inc2 + 3)) {
                        $(".ec-conseiller").find(".openChat").trigger('click');
                        clearInterval(i1);
                    } else {
                        inc += 1;
                    }
                } else {
                    inc += 1;
                }
            }, 500);
            if (sessionStorage.getItem("messageConseiller") || msg !== undefined) {
                var i2 = setInterval(function() {
                    if($(".action-chat").find(".js-send-message").length > 0) {
                        $("#liste-conversation").find(".client").eq(0).remove();
                        if (msg !== undefined)
                            chatCore.sendMessageConseiller(msg);
                        else
                            chatCore.sendMessageConseiller(sessionStorage.getItem("messageConseiller"));
                        clearInterval(i2);
                    }
                }, 500);
            }
        }

    };
    $(document).ready(function() {
        if (true || sessionStorage.iadvize) return;
        // if (getUrlVars().sfIaParam) {
        //     $("#nextoutils_chatbot").remove();
        //     var dataUser = {
        //         'platform' : 'api',
        //         'event_name' : "NEW_DIALOG_SESSION",
        //         'user_id' : getUrlVars().sfIaParam,
        //         'skill_id' : '5cac45cd64c746bece5d809f',
        //         'lang' : 'fr-fr',
        //         'user_data' : null,
        //         'input' : ""
        //     }
        //     $.ajax({
        //         "method" : 'post',
        //         "url" : 'https://apis.smartly.ai/api/dialog/',
        //         "headers" : {
        //             "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWFhYThjMTBlZGViZTM1NjdhNjVlNDlhIiwic2tpbGxfaWQiOiJhcGlfdG9rZW4iLCJpYXQiOjE1MzQ5NDgzODV9.iIDYHeJkobYv9e7CFuJEp10ugDlwdtanb7SnvpQvge8'
        //         },
        //         "data" : dataUser,
        //         "success" : function (res) {
        //             chatCore.openChat(true);
        //             chatCore.contactChat(res.long_term_memory.messageConseiller.replace(/<[^\/>][^>]*><\/[^>]+>/gim, ""));
        //         },
        //         "error" : function () {
        //             console.error("Impossible de récuperer la conversation");
        //             chatCore.openChat(true);
        //             chatCore.contactChat("Conversation chatbot non récupérée");
        //         }
        //     });
        // }

        if ($('#fp_main_content, #ct-conseiller-en-ligne, #wrapper-gabarit-libre, #wrapper-conditions-cartes, #wrapper-conditions-generales, #wrapper-conditions-tarifaires').length == 0) {
            //Dans ce cas on n'est pas sur une page produit et l'initialisation du chat peut se lancer normalement

            chatCore.init();

        }

    });

})((bnpp && bnpp.jQuery) ? bnpp.jQuery : jQuery);