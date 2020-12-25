﻿var msgNonLu = 0; // BUG FIX TEMP
/**
 * Fonction appelée par les sous traitants, lorsque l'appli est chargée
 * Est appelée à chaque chargement, chaque étape, un paramètre est passé dans certain cas
 * @param  {string} param
 * @return {void}
 */
var cpt_id = null;

var firstClick = 0;

var checkStatusMesDocuments = false;
if ( window.webtrendsMerge === undefined ) {
    window.webtrendsMerge = false;
}

if (
  !(
    GlobalSite &&
    GlobalSite.clientUtils &&
    typeof GlobalSite.clientUtils.isQualif === "function" &&
    typeof GlobalSite.clientUtils.isInte === "function" &&
    typeof GlobalSite.clientUtils.isPreview === "function" &&
    typeof GlobalSite.clientUtils.isProd === "function" &&
    (GlobalSite.clientUtils.isInte() || GlobalSite.clientUtils.isQualif() || GlobalSite.clientUtils.isPreview() || GlobalSite.clientUtils.isProd())
  )
) {
    $(function() {
      if ( $('[id^=id_]').length == 1 &&  $('[id$=_div]').length == 1 ) {
          webtrendsMerge = true;

          $('[id^=id_]').append('<div class="canvasLoader" style="width: 80px; height: 80px; margin: 300px auto 0 auto;" />');
          var color = '#1A794A';
          if ( $('body').hasClass('bpf') ) {
              color = '#b2965d';
          }
          if ( window.location.pathname.indexOf('/comptes-et-contrats/mes-assurances-vie') == -1
              || window.location.pathname.indexOf('/accounts-and-contracts/life-insurance') == -1
          ) {
              buildCanvasLoader( $('.canvasLoader'), {
                  dotNumber : 10,
                  dotWidth : 8,
                  density : 1.3,
                  trailMode : "followGlobalEase",
                  ease : "easeInOutQuad",
                  color: color
              });
          }

          var erreur_loader_interval = setInterval(function() {
              if ( $('[rv-show="data.erreurTechnique"]').length > 0 || $('[rv-show="data.erreur"]').length > 0 ) {
                  $('.canvasLoader').addClass('hidden');
                  clearInterval(erreur_loader_interval);
              }
          },500);

          if ( window.location.pathname.indexOf('/fr/souscription/comptes-cartes-services/servissimes-souscription') !== -1
              || window.location.pathname.indexOf('/fr/souscription/comptes-cartes-services/servissimes-reservation') !== -1
              || window.location.pathname.indexOf('/fr/connexion/virements-services/oppositions/opposition-carte') !== -1 || window.location.pathname.indexOf('/en/login/services-transfers/blocks/card-block') !== -1
              || window.location.pathname.indexOf('/fr/souscription-pro/credits/credit-amortissable-professionnel') !== -1
              || window.location.pathname.indexOf('/fr/espace-prive/analyses-recommandations/analyses-recommandations-financieres') !== -1
              || window.location.pathname.indexOf('/fr/espace-prive/gestion/modegestion') !== -1
              || window.location.pathname.indexOf('/fr/souscription/assurance/assurance-auto-bnp-paribas') !== -1
              || window.location.pathname.indexOf('/fr/connexion/mes-outils/profil/profil-client') !== -1 || window.location.pathname.indexOf('/en/login/tools/profile/customer-profile') !== -1
              || window.location.pathname.indexOf('/fr/souscription/assurance/protection-vie-active') !== -1
              || window.location.pathname.indexOf('/fr/souscription/credits/pret-personnel-individuel') !== -1
              || window.location.pathname.indexOf('/fr/espace-pro/comptes-et-contrats/mes-cartes') !== -1
              || window.location.pathname.indexOf('/fr/espace-prive/mes-outils/profil/profil-client') !== -1
              || window.location.pathname.indexOf('comptes-et-contrats/mes-cartes/carte-formule-bnp-net') !== -1  || window.location.pathname.indexOf('accounts-and-contracts/cards/carte-formule-bnp-net') !== -1
              || window.location.pathname.indexOf('/fr/souscription/comptes-cartes-services/blocage-notifications-sms') !== -1
              || window.location.pathname.indexOf('/fr/souscrire/comptes-cartes-services/blocage-notifications-sms') !== -1
              || (window.location.pathname.indexOf('/fr/souscription/assurance/multirisque-habitation') !== -1 && $(document).getUrlParam('redir') == 'Simulateur' )
              || $(document).getUrlParam('redir') == 'mrhVCD'
              || ( $('#ia-leonardo').length > 0 || $('#id_hbc_div').length > 0 )
              || (window.location.pathname.indexOf('/fr/connexion/comptes-et-contrats/mes-cartes/terceo') !== -1 || window.location.pathname.indexOf('/en/login/accounts-and-contracts/cards/terceo') !== -1 )
              || (window.location.pathname.indexOf('/mes-outils/profil/adresse-et-agence') !== -1 )
              || (window.location.pathname.indexOf('/fr/espace-pro/mes-outils/profil/profil-client') !== -1 )
              || (window.location.pathname.indexOf('/fr/souscription/assurance/mobileo') !== -1 )
              || (window.location.pathname.indexOf('/fr/espace-pro/virements-services/oppositions/opposition-carte') !== -1 )
              || (window.location.pathname.indexOf('/fr/systeme/test-page/chat-externe') !== -1 )
              || (window.location.pathname.indexOf('/en/souscription/comptes-cartes-services/blocage-notifications-sms') !== -1 )
              || (window.location.pathname.indexOf('/en/login/accounts-and-contracts/analyze-your-budget') !== -1 )
              || (window.location.pathname.indexOf('/fr/espace-pro/virements-services/virements/virement-permanent') !== -1 )
              || (window.location.pathname.indexOf('/fr/espace-prive/virements-services/oppositions/opposition-carte') !== -1 )
              || (window.location.pathname.indexOf('/fr/emprunter/souscription/credit-immobilier') !== -1 )
              || (window.location.pathname.indexOf('comptes-et-contrats/assurance-iard') !== -1)
              || (window.location.pathname.indexOf('/fr/expe/buymyhome') !== -1 )
              || (window.location.pathname.indexOf('/fr/expe/chargerfichiers') !== -1 )
              || (window.location.pathname.indexOf('/fr/expe/suivi') !== -1 )
              || (window.location.pathname.indexOf('/fr/expe/suivieerbpf ') !== -1 )
              || (window.location.pathname.indexOf('/fr/expe-bpf/') !== -1 )
              || (window.location.pathname.indexOf('/fr/souscrire/credits/credit-immobilier') !== -1 )
              || (window.location.pathname.indexOf('/fr/souscription/epargne-bourse/convention-conseil') !== -1 )
              || (window.location.pathname.indexOf('/fr/profil-financier') !== -1 )
              || (window.location.pathname.indexOf('/fr/emprunter/souscription/demande-credit-immobilier') !== -1 )
              || (window.location.pathname.indexOf('/fr/banque-contacts/recuperer-code-secret') !== -1 )
              || (window.location.pathname.indexOf('/fr/souscription/epargner/plan-epargne-logement') !== -1 )
              || (window.location.pathname.indexOf('/fr/souscription/epargner/compte-epargne-logement') !== -1 )
              || (window.location.pathname.indexOf('/souscrire/epargner/plan-epargne-logement') !== -1 )
              || (window.location.pathname.indexOf('/souscrire/epargner/compte-epargne-logement') !== -1 )
              || (window.location.pathname.indexOf('/fr/banque-contact/recuperer-code-secret') !== -1 )
              || (window.location.pathname.indexOf('/fr/connexion/comptes-et-contrats/mes-assurances-vie/rachat-av') !== -1 )
              || (window.location.pathname.indexOf('/fr/espace-prive/comptes-et-contrats/mes-assurances-vie/rachat-av') !== -1 )
              
          ) {
              $('[id^=id_]').find('.canvasLoader').addClass('hidden');
              if (window.location.pathname.indexOf('/fr/souscription/credits/pret-personnel-individuel') !== -1 ||  window.location.pathname.indexOf('/fr/souscription-pro/credits/credit-amortissable-professionnel') !== -1) {
                  webtrendsMerge = true;
              } else {
                  webtrendsMerge = false;
              }
          }

          if ( (window.location.pathname.indexOf('/fr/connexion/mes-outils/profil/profil-client') !== -1 ) || (window.location.pathname.indexOf('/fr/connexion/comptes-et-contrats/suivre-mon-budget') !== -1 ) ) {
              $('.canvasLoader').remove();
          }
      }
  });
}


function checkStatus( param ) {
    //Pour pouvoir souscrire à checkstatus, on va faire une liste de fonctions à lancer à l'appel de checkStatus
    for(var i = 0; i < checkStatusSubscribers.length; i++){
        checkStatusSubscribers[i]( param );
    }
    $('[id^=id_]').find('.canvasLoader').addClass('hidden');
    if ( window.location.pathname.indexOf('messagerie') != -1 ) {
        if ( $('body').hasClass('part') ) {
            if ( $('#nav8-contact').find('a').eq(0).attr('href') !== '/fr/banque-contacts' ) {
                $('#nav8-contact').find('a').eq(0).attr('href','/fr/banque-contacts');
            }
            $('a').each( function() {
                if ( $(this).attr('href') ) {
                    this.href = this.href.replace('/espace-pro', '/connexion');
                    this.href = this.href.replace('/espace-prive', '/connexion');
                }
            });
        }

        if ( $('body').hasClass('bpf') ) {
            $('a').each( function() {
                if ( $(this).attr('href') ) {
                    this.href = this.href.replace('/connexion', '/espace-prive');
                    this.href = this.href.replace('/espace-pro', '/espace-prive');
                }
            });
        }
        if ( $('body').hasClass('pro') ) {
            $('a').each( function() {
                if ( $(this).attr('href') ) {
                    this.href = this.href.replace('/connexion', '/espace-pro');
                    this.href = this.href.replace('/espace-prive', '/espace-pros');
                }
            });
        }
    }
}

var checkStatusSubscribers = [];
function subscribeToCheckStatus( fn ){
    checkStatusSubscribers.push( fn );
}

subscribeToCheckStatus(function( param ){
    trace('*** checkstatus ***');

    if ( $('[data-checkstatus]').length == 0 ) { return; }
    if ( cpt_id != null ) {
        clearInterval(cpt_id);
    }
    var fnc = $('[data-checkstatus]').data('checkstatus');

    cpt_id = setInterval( function() {
        window['checkStatusFonctions'][fnc]( param )
    }, 200);
});

/**
 * Liste des fonctions appelés via checkStatus
 * Le nom de chaque fonction est lui défini un élément html
 * @type {Object}
 */
var checkStatusFonctions = {
    checkAutreCompte: function(param) {
        try {
            if ( param == 'autreCompte' && !localStorage.getItem('ongletAutresComptes') ) {
                localStorage.setItem('ongletAutresComptes', 1);
                $('#autresComptes').parent('li').removeClass('hidden');
            }

            if ( $('ul.udc-assurance-vie').length > 0 || $('ul.udc-epargne-retraite').length > 0 || $('ul.udc-capitalisation').length > 0 ) {
                localStorage.setItem('ongletAssuranceVie', 1);
                $('#mesAssurancesVie').parent('li').removeClass('hidden');
            }

            if ( $('ul.udc-titre').length > 0 ) {
                localStorage.setItem('ongletTitre', 1);
                $('#mesTitres').parent('li').removeClass('hidden');
            }
        }
        catch(e){}
    },
    checkEtape: function(param) {
        // Si la barre d'onglet n'existe pas on ne fait rien
        if ( $('.onglet').length == 0 ) { return; }
        if ( window.location.pathname.indexOf('/virements-services/telechargement-des-operations') != -1
            || window.location.pathname.indexOf('/services-transfers/download-transaction-details') != -1 ) { return; }

        var $onglet = $('.onglet');
        var message_temp = '<div class="row form-info"> <i class="icon icon-info violet pull-left"></i><p>Nous rencontrons actuellement des dysfonctionnements ponctuels sur la validation des virements saisis, pouvant générer un message d\'erreur technique alors que la validation est correctement prise en compte.<br> Avant d\'initier la saisie d\'un nouveau virement, nous vous invitons à vérifier dans la rubrique "<a href="/fr/connexion/virements-services/virements/historique">Historique des virements</a>" que votre demande de virement n\'est pas déjà enregistrée.<br> Nous nous excusons pour la gêne occasionnée et mettons tout en oeuvre pour résoudre ce problème dans les plus brefs délais.</p></div>';



        if ( $('.legende-etape').length > 0 ) {
            // On récupère les étapes dans un tableau, 1ere entrée est  
            var etape = $('.legende-etape').find('span').text();
            etape_split = etape.split('/');
            // Confirmation
            if ( etape_split.length == 2 && etape_split[0] == etape_split[1] ) {
                $onglet.find('li').removeClass('hidden');
                $onglet.find('.abort').addClass('hidden');
                if ( getBreadcrumb().indexOf('virements') !== -1 && $('.form-info').length == 0 ) {
                    //$('.wrapper-virement').prepend( message_temp );
                }
            } else {
                $onglet.find('li').addClass('hidden');
                $onglet.find('.abort').removeClass('hidden');
                $('.onglet').eq(1).addClass('hidden');
                $('.onglet-pagination').addClass('hidden');
            }
        } else {
            $onglet.find('li').removeClass('hidden');
            $onglet.find('.abort').addClass('hidden');
            if ( getBreadcrumb().indexOf('virements') !== -1 && $('.form-info').length == 0 ) {
                //$('.wrapper-virement').prepend( message_temp );
            }
        }
    },
    checkMessageNonLu: function(param) {
        // TODO
    },
    // Affiche/Cache les ancres en fonction du contenu dans la page d'un contrat
    checkAnchors: function(param) {

        // Vérifie que l'utilisateur a sélectionné un contrat
        if ( $('.contrats.active').length > 0 ) { return; }

        // $('.onglet-back').addClass('hidden');

        if( $('.wrapper-caracteristiques').length > 0 && $('.pro').length == 0 ){

            $('.onglet-back').removeClass('hidden');

            $('.onglet').find('li a').each(function() {
                var class_onglet = $(this).attr('class');
                class_onglet_array = class_onglet.split(' ');
                $(this).attr('href', '#' + class_onglet_array[0] );
                if ( $('#'+ class_onglet ).length == 0 ) { $('.'+ class_onglet ).addClass('hidden') }
            }).on('click', function(e){
                e.preventDefault();
                $('.onglet').find('li a').removeClass('active');
                $(this).addClass('active');
                $('html, body').scrollTop( Number( $( $(this).attr('href') ).offset().top ) - 120 );
            });

            if(firstClick == 0){
                $('.onglet li:first-child a').addClass('active');
                firstClick = 1;
            }
        }


        if( $('.rop-wrapper').length > 0 && $('.pro').length == 0 ){

            $('.onglet').find('li a').each(function(){
                // if ( $(this).attr('href') ) {
                //     if( $( $(this).attr('href') ).length < 1 ){
                //         $(this).attr('href', '#');
                //     }
                // }
            }).on('click', function(){
                $('.onglet').find('li a').removeClass('active');
                $(this).addClass('active');
            });

            if(firstClick == 0){
                $('.onglet li:first-child a').addClass('active');
                firstClick = 1;
            }
        }
    },
    checkNavMefav: function() {
        var iban = $(document).getUrlParam('iban'),
            redir = $(document).getUrlParam('redir');

        $('#nav-mefav .onglet').find('a').each(function() {
            $(this).attr('href', '?iban='+ iban +'&redir=' + $(this).attr('id') );
        });
        // class active sur le bon élément
        if ( redir == undefined ) {
            $('#synthese').addClass('active');
        } else {
            $('#'+ redir).addClass('active');
        }
        // ajout icone versement régulier
        if (redir == "versements" || redir == "arbitrage") {
            if ($('.programmer-VR .icon-add-versement').length < 1) {
                $('.programmer-VR').prepend('<i class="icon icon-add-versement"></i>');
            }
        }
        if ($('th.link-fiche-fond').length > 0)  {
            $('th.link-fiche-fond').each(function( index ) {
                if ($( this ).text().indexOf('Fonds en Euros')>0 ) {
                    $( this ).removeClass('link-fiche-fond');
                }
            });
        }
    },
    checkHomeDemat: function() {
        // console.log('checkHomeDemat');
        if ( checkStatusMesDocuments ) { return; }
        var src_home = "/rsc/contrib/html/espaceclient/mesdocuments/mes-documents-home-rel.html",
            div_target = "#zone-publiable-haute-HomeMesDoc";
        li_params = '<li class="blue pointer parametres"><div class="lib"><i class="icon icon-cog"></i><p><a href="/fr/souscription/comptes-cartes-services/releves-en-ligne" class="demat_parameters_link">Paramètres</a></p></div></li>';

        if( $(div_target).length > 0 ){
            checkStatusMesDocuments = true;
            var demat_nav = setInterval(function() {
                if ($('.blue.pointer.parameters').length > 0 &&  $('.blue.pointer.parametres').length == 0) {
                    $('.blue.pointer.parameters').find('.icon').removeClass('icon-cog').addClass('icon-pin-white');
                    $('.blue.pointer.applications').after(li_params);
                    if ( $('body').hasClass('bpf') ) {
                        $('.demat_parameters_link').attr('href','/fr/souscrire/comptes-cartes-services/releves-en-ligne');
                    }
                    if ( $('body').hasClass('pro') ) {
                        $('.demat_parameters_link').attr('href','/fr/souscription-pro/comptes-cartes-services/releves-en-ligne');
                    }
                }
            },500);

            /*
            $.get(src_home, function(data) {
                $(div_target).after(data);
                $('.wrapper-mes-documents').addClass('no-padding');
                if ( $('body').hasClass('bpf') ) {
                    $('.acces-service .btn-primary').attr('href','/fr/souscrire/comptes-cartes-services/releves-en-ligne');
                }
                if ( $('body').hasClass('pro') ) {
                    $('.acces-service .btn-primary').attr('href','/fr/souscription-pro/comptes-cartes-services/releves-en-ligne');
                }
            });
            */
        }

    }
};
// OCNET
$(function() {
    if ( window.location.pathname == '/fr/connexion/mes-outils/messagerie'
        ||  window.location.pathname == '/en/login/tools/inbox' ) {
        $.getJSON('/rsc/contrib/script/client/ocnetWebtrends.json', function( data ) {
            subscribeToCheckStatus(function() {
                if ( $('[id^=ocnet-]').length > 0 ) {
                    var id = $('[id^=ocnet-]').attr('id').replace('ocnet-', '');
                    if ( data[id] !== undefined ) {
                        var argsa = []
                        $.each( data[id] , function( index, element ) {
                            argsa.push(index);
                            argsa.push(element);
                        });
                        tagguageNext(argsa);
                    }
                }
            });
        });
    }
});

$(function() {
    // Message confirmation d'envoi sur messagerie
    setInterval( function() {
        if ( $('.answer-msg .top-message .btn-primary').length > 0 ) {
            $('.answer-msg .top-message .btn-primary').one('click', function() {
                if ( $('#textarea-repondre').text().length ) {
                    var $current = $(this);
                    setTimeout(function() {
                        $current.parents('.answer-msg').find('.messagerie-alert-envoi-ok').removeClass('hidden').addClass('messagerie-alert');
                    },500)
                }
            });
        }
    },500);
});


/* empêche double-click sur bouton submit virements */
$(function() {
    var lockBtn = function(element) {
        if ($(element).length > 0) {
            $(element).on('click', function() {
                setTimeout( function() {
                    if ( $('[class=error]:visible').length == 0 && $('.loader'.length == 0) ) {
                        var $clone = $(element).clone();
                        $clone.attr('id', element+'-disable').css('width','125px').removeClass('btn-primary').addClass('loader').removeClass( element.replace('.',''));
                        $(element).addClass('hidden');
                        $(element).after( $clone );
                    }
                },10);
            });
        }
    };
    subscribeToCheckStatus(function() {
        if (window.location.pathname.indexOf('virements-services/virements') != -1 ) {
            if ( typeof( lockBtnInterval ) !== 'undefined' ) {
                clearInterval(lockBtnInterval);
            }
            var lockBtnInterval = setInterval(function() {
                if ( $('.btn-primary').length > 0 ) {
                    clearInterval(lockBtnInterval);
                    lockBtn('#valider-virement');
                    lockBtn('#btn-recap-valider');
                    lockBtn('.vpp-btn-step3');
                    lockBtn('.vpp-btn-goto-step5');
                }
            },500);
        }
    });
});

// corrige problème classes page BPF
$(document).ready(function(){
    if ( (window.location.pathname.indexOf('/fr/espace-prive/solutions-patrimoniales/decouvrir-la-banque-privee') !== -1 ) || (window.location.pathname.indexOf('/fr/espace-prive/solutions-patrimoniales/Decouvrir-la-banque-privee') !== -1 ) ) {
        $('body').removeClass('ident');
    }    
})
