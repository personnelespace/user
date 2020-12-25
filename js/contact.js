function loadChat(cb) {
    $.get("/rsc/contrib/script/simulateur/pointDeContact/html/loader.html", function (res) {
        $("body").append(res);
        cb();
    });
}

var btn = '<div class="content-bt-chat"><div class="bouton-chat-s"><div class="bloc-text"><p>Chatter</p></div><div class="bloc-bulle"><span class="icon icon-bulle"></span></div></div></div>';

function initContact(item, Obj)
{
    if (!$('[data-target="#modalContact"]').length) $('[data-target="#modalContact"]').addClass('iadvize-launcher')
    if ($("#secret-nbr-keyboard")[0] || /authentification-forte/gim.test(location.href)) return;
    if (!window.MyObjContact) {
        window.MyObjContact = new Contact();
    }


    if (/(chat-externe)|(chat-hb)|(sfIaParam)/gi.test(location.href) && window.ENVIRONNEMENT === "MOBILE" && /rc=mobile/gi.test(location.href) ||
        window.ENVIRONNEMENT === "PREVIEW" && /(chat-externe)|(chat-hb)|(sfIaParam)/gi.test(location.href)) {
        if (/fr\/des-questions\/contactez-nous\/chat-externe/gi.test(document.location.href)) {
            $("head").append('<link type="text/css" href="/rsc/contrib/css/hb2/home.css" rel="stylesheet">');
        }
        loadChat(function () {
            MyObjContact.Step(2);
            MyObjContact.init();
        });
        return;
    }

    function clickChat(elem, dispo) {
        elem.click(function () {
            if (window.iAdvize && window.iAdvize.navigate) window.iAdvize.navigate("?escalationChatbot");
            if (!dispo) return;
            MyObjContact.Step(2);
            MyObjContact.init();
        });
    }
    var btnChat = $(".content-bt-chat, .openChatbot");
    if (window.sfSiteId === "part") {
        if (btnChat[0])
            MyObjContact.btnScroll();


        try {
            if (JSON.parse(sessionStorage.info_client).message !== "user not connected" && MyObjContact.parametrage("demandeChat")) {
                MyObjContact.Step(2);
                MyObjContact.init();
                _satellite.track("Chatbot - miseenrelationConseiller")
                MyObjContact.parametrage("demandeChat", null, true);
            }
        } catch (e) {}

        MyObjContact.configBtnChat(function (config) {

            var elem = $(".openChat_" + config.classeAppel + "_configDefault, .content-bt-chat");
            MyObjContact.parametrage('button', "openChat_" + config.classeAppel + "_configDefault")
            MyObjContact.classNameButton = "openChat_" + config.classeAppel + "_configDefault";

            elem.removeClass("openWithRequiredDAC3 chat-inbenta no-chat-inbenta");

            if (config.chat && MyObjContact.isConnected()) {
                clickChat(elem);
            } else if (!config.chat && config.chatbot) {
                if (MyObjContact.Step() === 0) elem.show().removeClass("hidden");
                var elem = $(".openChat_" + config.classeAppel + "_configDefault, .content-bt-chat");
                elem.click(function () {
                    $(this).hide();
                    if (MyObjContact.Step() === 0) MyObjContact.nextStep();
                    MyObjContact.Step(0)
                });
            }
        })
    } else if (window.sfSiteId === "bpf") {
        $(".bouton-chat-s").removeClass("openWithRequiredDAC3 openChat_Chat_MB_Contacts_configDefault");

        if (/(nous-contacter|mes-outils\/conseiller|banque-contact\/nous-contacter)/gi.test(location.href) && MyObjContact.isAuth()) {
            $("body").append(btn);
            btnChat = $(".content-bt-chat, .openChatbot");
            btnChat.show();
            MyObjContact.btnScroll();
            if (MyObjContact.Step() > 0)
                $(".content-bt-chat, .openChatbot").hide();

            btnChat.click(function () {
                if (MyObjContact.Step() === 0) MyObjContact.nextStep();
                $(this).hide();
            });
        }
    } else if (window.sfSiteId === "hellobank") {
        $(".iadvize-launcher").click(function (params) {
            if (MyObjContact.Step() === 0)
                MyObjContact.nextStep();
        })
        if (/chat-hb/gi.test(location.href) && MyObjContact.Step() === 0)
            MyObjContact.nextStep();
        else
            MyObjContact.init();

        try {
            if (JSON.parse(sessionStorage.info_client).message !== "user not connected" && JSON.parse(sessionStorage.contact).demandeChat) {
                MyObjContact.Step(2);
                MyObjContact.init();
                _satellite.track("Chatbot - miseenrelationConseiller")
                MyObjContact.parametrage("demandeChat", null, true);
            }
        } catch (e) {}
    } else if (window.sfSiteId === "pro") {
        if (/(nous-contacter|mes-outils\/conseiller|banque-contact\/nous-contacter)/gi.test(location.href)) {
            $("body").append(btn);
            btnChat = $(".content-bt-chat, .openChatbot");
            btnChat.show();
            MyObjContact.btnScroll();
            if (MyObjContact.Step() > 0) btnChat.hide();
            $(".content-bt-chat, .openChatbot").on("click", function () {
                if (MyObjContact.Step() === 0) MyObjContact.nextStep();
                $(this).hide();
            });
        }
    }
    if (MyObjContact.Step() > 0)
        btn.hide();
    else
        btn.show()

}