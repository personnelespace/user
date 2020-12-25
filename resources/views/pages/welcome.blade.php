@extends('layouts.layout')
@section('title')
{{ __('app.home') }}
@endsection
@section('mainContent')
<!-- saved from url=(0028)https://mabanque.bnpparibas/ -->
<style type="text/css">
   body
   {
   margin:0;
   }
   body.ls-center
   {
   text-align:center;
   }
   .ls-canvas .ls-row .ls-row-clr
   {
   clear:both;
   }
   .ls-canvas .ls-col
   {
   overflow:hidden;
   }
   .ls-canvas .ls-col-body
   {
   overflow:hidden;
   }
   .ls-canvas .ls-area
   {
   overflow:hidden;
   }
   .ls-canvas .ls-area-body
   {
   overflow:hidden;
   }
   .ls-canvas .ls-area .ls-1st
   {
   margin-top:0 !important;
   }
   .ls-canvas .ls-cmp-wrap
   {
   padding:1px 0;
   }
   .ls-canvas .iw_component
   {
   margin:-1px 0;
   }
</style>
<body class="fr web world pub part marne not-ie mw-1400">
   <div id="sf-master">
   <!--sf:begin[div:sf-master]-->
   <!--ls:begin[body]-->
   <div class="ls-canvas row" id="ls-canvas">
   <div class="ls-row row" id="topHeader">
      <div class="ls-fxr" id="ls-gen33001729-ls-fxr">
         <div class="ls-area extLinks" id="extLinks">
            <div class="ls-area-body" id="ls-gen33001730-ls-area-body">
               <div class="ls-cmp-wrap ls-1st" id="w1410874521535">
                  <div class="iw_component" id="1410874521535"></div>
               </div>
               <div class="ls-cmp-wrap" id="w1410874521536">
                  <div class="iw_component" id="1410874521536"></div>
               </div>
               <div class="ls-cmp-wrap" id="w1410874521537">
                  <div class="iw_component" id="1410874521537">
                     <!--content start-->
                     <div id="wcm-l-top-header">
                        <div class="wcm-html style-default part ">
                           <!--<header class="top-header">	<nav class="row">	 	<ul class="list-header">				<li class="nav-part"><a href="/fr/Accueil-part-fr">Particuliers</a></li>				<li class="nav-prio"><a href="/fr/vos-besoins/votre-situation/priority">Priority</a></li>				<li class="nav-bpf"><a href="/">Banque privée</a></li>				<li class="nav-pro"><a href="/fr">Professionnels</a></li>				<li class="nav-ent"><a href="http://entreprises.bnpparibas.fr/">Entreprises</a></li>				<li class="nav-asso"><a href="http://associations.bnpparibas.fr/">Associations</a></li>		 	</ul>		 </nav>	</header>-->
                        </div>
                     </div>
                     <!--content stop-->
                  </div>
               </div>
            </div>
         </div>
         <div class="ls-area langSelect" id="langSelect">
            <div class="ls-area-body" id="ls-gen33001731-ls-area-body"></div>
         </div>
         <div class="ls-row-clr"></div>
      </div>
   </div>
   <div class="ls-row" id="header">
      <div class="ls-fxr" id="ls-gen33001732-ls-fxr">
         <div class="ls-area headerContent" id="headerContent">
            <div class="ls-area-body" id="ls-gen33001733-ls-area-body">
               <div class="ls-cmp-wrap ls-1st" id="w1414682162391">
                  <div class="iw_component" id="1414682162391">
                     <!--content start-->
                     <div id="wcm-l-header">
                        <div class="wcm-html style-default part ">
                           <header class="top-header row retracted" style="top: -40px;">
                              <div class="col-90">
                                 <nav class="row">
                                    <ul class="list-header part-only">
                                       <li class="nav-part"><a href="#">Particuliers</a></li>
                                       <li class="nav-bpf"><a href="#">Banque privée</a></li>
                                       <li class="nav-pro"><a href="#">Professionnels</a></li>
                                       <li class="nav-ent"><a href="#">Entreprises</a></li>
                                       <li class="nav-asso"><a href="#">Associations</a></li>
                                    </ul>
                                    <ul class="list-header pro-only">
                                       <li class="nav-pro"><a href="#">Professionnels</a></li>
                                       <li class="nav-part"><a href="#">Particuliers</a></li>
                                       <li class="nav-bpf"><a href="#fr">Banque privée</a></li>
                                       <li class="nav-ent"><a href="#">Entreprises</a></li>
                                       <li class="nav-asso"><a href="#">Associations</a></li>
                                    </ul>
                                 </nav>
                              </div>
                              <div id="nav-accessibilite">
                                 <ul>
                                    <li>				<a href="#">					Accessibilité				</a>			</li>
                                 </ul>
                              </div>
                              <div class="col-10 part-only pull-right" id="select-langues">
                                 <ul>
                                    <li data-toggle-section=".en">			FR			</li>
                                    <li class="en hidden">				<a href="#">EN</a>			</li>
                                 </ul>
                              </div>
                           </header>
                           <header class="bottom-header" style="position: fixed; top: 0px;">
                              <div class="no-mob">
                                 <div class="logoBNP-container">
                                    <a href="#" class="logoBNP-alone text-hide part-only">BNP Paribas La banque d'un monde qui change</a>      
                                    <a href="#" class="logoBNP-alone text-hide pro-only">BNP Paribas La banque d'un monde qui change</a>        
                                    <p>La banque d'un monde qui change</p>
                                 </div>
                                 {{-- <a  href="{{ route('logout') }}"
                                    onclick="event.preventDefault(); 
                                    document.getElementById('logout-form').submit();"
                                    class="bouton-espace-client" id="bouton-espace-client">{{ __('Se déconnecter') }}</a>        --}}
                                 <!-- <a href="https://mabanque.bnpparibas/fr/devenir-client-bnp-paribas" class="bouton-devenir-client part-only">Se déconnecter</a>    -->
                                 @guest
                                 @if (Route::has('register'))
                                 <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                 </li>
                                 @endif
                                 @else
                                 <li class="nav-item dropdown">
                                 
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    
                                       <a  href="{{ route('logout') }}"
                                          onclick="event.preventDefault(); 
                                          document.getElementById('logout-form').submit();"
                                          class="bouton-espace-client" id="bouton-espace-client">{{ __('Se déconnecter') }}</a> 
                                      
                                       <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                          @csrf
                                       </form>
                                    </div>
                                 </li>
                                 @endguest
                                 <a href="#" class="bouton-devenir-client pro-only">Se déconnecter</a>      
                                 <!-- || SOS CARTE || -->       
                                 <div id="acces-sos-carte">
                                    <button data-toggle-section="#quickAccesMenuSosCarte" class="part-only">
                                       <span class="pictoGiroSos"><i class="icon icon-picto-giro"></i></span>  
                                       <!--Urgence-->         
                                    </button>
                                    <button data-toggle-section="#quickAccesMenuSosCarte" class="bpf-only"> 
                                    <img src="{{ asset ('images/urgence.svg' )}}" class="pictoWhite">    
                                    <img src="{{ asset ('images/picto-giro-bpf.svg' )}}" class="pictoGreen">
                                    <img src="{{ asset ('images/picto-giro.svg' )}}" class="pictoGrey">Urgence     
                                    </button> 
                                    <div id="quickAccesMenuSosCarte" class="hidden">
                                       <div class="header pull-left">
                                          <div class="pull-left">
                                             <p>Vous avez une urgence ?</p>
                                             <p>Sélectionnez votre urgence pour trouver une solution à distance.</p>
                                          </div>
                                          <button class="pull-right icon icon-close-white" data-hide-section="#quickAccesMenuSosCarte"></button>             
                                       </div>
                                       <div class="content">
                                          <div class="content-left">
                                             <div class="moyens-paiement">
                                                <p class="title pull-left">Mes moyens de paiement</p>
                                                <ul class="pull-right">
                                                   <li class="sosA1 active">        <a href="#" class="part-only">            <span>Débloquer ma carte</span>          </a>          <a href="#" class="bpf-only">            <span>Débloquer ma carte</span>        </a>            </li>
                                                   <li class="sosA2"><a href="#"><span>Opposer ma carte</span></a></li>
                                                   <li class="sosA3"><a href="#"><span>Opposer un chèque/mon chéquier</span></a></li>
                                                   <li class="sosA4"><a href="#"><span>Opposer un prélèvement</span></a></li>
                                                </ul>
                                             </div>
                                             <div class="mes-assurances">
                                                <p class="title pull-left">Mes assurances</p>
                                                <ul class="pull-right part-only">
                                                   <li class="sosB2"><a href="#"><span>Assurance auto</span></a></li>
                                                   <li class="sosB3"><a href="#"><span>Assurance habitation</span></a></li>
                                                   <li class="sosB1"><a href="#"><span>Perte et vol de clés</span></a></li>
                                                   <li class="sosB4"><a href="#"><span>Assurance des appareils nomades</span></a></li>
                                                </ul>
                                                <ul class="pull-right bpf-only">
                                                   <li class="sosB2"><a href="#"><span>Assurance auto</span></a></li>
                                                   <li class="sosB3"><a href="#"><span>Assurance habitation</span></a></li>
                                                   <li class="sosB1"><a href="#"><span>Perte et vol de clés</span></a></li>
                                                   <li class="sosB4"><a href="#"><span>Assurance des appareils nomades</span></a></li>
                                                </ul>
                                             </div>
                                          </div>
                                          <div class="separate"></div>
                                          <div class="content-right">
                                             <div id="sosA1" class="changeContent">
                                                <img src="{{ asset ('images/picto-carte-bloqu-e.png' )}}" class="part-only">  <img src="{{ asset ('images/debloquer-carte-bpf.png' )}}" class="bpf-only">       
                                                <p class="title">Carte refusée ? code pin oublié ?</p>
                                                <p class="subtitle">Sélectionnez la carte avec laquelle vous rencontrez des problèmes et obtenez de l'aide.</p>
                                             </div>
                                             <div id="sosA2" class="changeContent hidden">
                                                <img src="{{ asset ('images/oposer-carte.png' )}}" class="part-only">  <img src="{{ asset ('images/oposer-carte-bpf.png' )}}" class="bpf-only"> 
                                                <p class="title">Carte perdue ou volée ?</p>
                                                <p class="subtitle">Opposez votre carte en quelques clics</p>
                                             </div>
                                             <div id="sosA3" class="changeContent hidden">
                                                <img src="{{ asset ('images/opposer-cheque.png' )}}" class="part-only"> 
                                                <img src="{{ asset ('images/opposer-cheque-bpf.png' )}}" class="bpf-only"> 
                                                <p class="title">Chèque perdu ? chéquier volé ?</p>
                                                <p class="subtitle">Opposez un chèque ou votre chéquier en suivant ce lien</p>
                                             </div>
                                             <div id="sosA4" class="changeContent hidden">
                                                <img src="{{ asset ('images/opposer-prelevement.png' )}}" class="part-only"> 
                                                <img src="{{ asset ('images/opposer-prelevement-bpf.png' )}}" class="bpf-only">  
                                                <p class="title">Vous souhaitez opposer un prélèvement ?</p>
                                                <p class="subtitle">Cliquez sur le lien puis sélectionnez le prélèvement à opposer</p>
                                             </div>
                                             <div id="sosB2" class="changeContent hidden">
                                                <img src="{{ asset ('images/picto-voiture.png' )}}" class="part-only">     <img src="{{ asset ('images/picto-voiture-bpf.png' )}}" class="bpf-only">       
                                                <p class="title">Assistance auto</p>
                                                <div class="assistanceContent">
                                                   <p>Si vous détenez un contrat Assurance Auto BNP Paribas, cliquez pour afficher les numéros d’assistance.</p>
                                                   <!-- <p class="pull-left textAssurance">Contactez, 24/24 7j/7 votre assistance au 01 55 92 26 64 (appel non surtaxé).</p> -->
                                                </div>
                                             </div>
                                             <div id="sosB3" class="changeContent hidden">
                                                <img src="{{ asset ('images/picto-maison.png' )}}" class="part-only">     <img src="{{ asset ('images/picto-maison-bpf.png' )}}" class="bpf-only">        
                                                <p class="title">Assistance habitation</p>
                                                <div class="assistanceContent">
                                                   <p>Si vous détenez un contrat Assurance Habitation BNP Paribas, cliquez pour afficher les numéros d’assistance.</p>
                                                   <!-- <p class="pull-left textAssurance">Contactez, 24/24 7j/7 votre assistance au 01 55 92 26 64 (appel non surtaxé).</p>  -->
                                                </div>
                                             </div>
                                             <div id="sosB1" class="changeContent hidden">
                                                <img src="{{ asset ('images/picto-cles-QA.png' )}}" class="part-only">     <img src="{{ asset ('images/picto-cle-QA-bpf.png' )}}" class="bpf-only">  
                                                <p class="title">Perte et vol de clés</p>
                                                <p>Si vous détenez un contrat BNP Paribas Sécurité ou Sécurité Plus, cliquez pour afficher les numéros d’assistance.</p>
                                                <!-- <div class="group-phone">     <ul>          <li>             <p>Pour BNP Paribas Sécurité</p>            <div>  <p class="pull-left">Depuis la France et l'étranger :</p>  <img src="/rsc/contrib/image/generique/numero-vert.png' )}}" class="pull-left" />            </div>        </li>        <li>            <p>Pour BNP Paribas Sécurité</p>             <div>  <p class="pull-left">Depuis la France :</p>    <img src="/rsc/contrib/image/generique/numero-gris.png' )}}" class="pull-left" />  <p class="lastP">Depuis l'étranger : (00 33) 1 55 92 23 68 (appel non surtaxé).</p></div>         </li>      </ul></div>  -->          
                                             </div>
                                             <div id="sosB4" class="changeContent hidden">
                                                <img src="{{ asset ('images/picto-mobileo.png' )}}" class="part-only"> 
                                                <img src="{{ asset ('images/picto-mobileo(1).png' )}}" class="bpf-only">
                                                <p class="title">Assistance Mobileo</p>
                                                <div class="assistanceContent">
                                                   <p>Si vous détenez un contrat Mobileo, cliquez pour afficher les numéros d’assistance</p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <!-- ///////// -->       
                                 <a id="open-recherche-nonconnecte" href="https://mabanque.bnpparibas/#" class="list-header-connected">       
                                 <i class="search"></i><span>Recherche</span>
                                 </a>     
                              </div>
                              <header class="bottom-header-connected mobile-only pull-left" id="nav-connect" style="position: fixed; top: 0px;">
                                 <ul id="nav-connect-item" class="list-header-connected left nav-connecte-items mobile-only">
                                    <li class="js-toggle-subnav"><i class="burger"></i></li>
                                    <li class="logo">
                                       <a href="#" class="logoBNP"></a>
                                    </li>
                                    <li id="bouton-espace-client-mobile" class="bottom-header-lock pull-right"><span class="icon icon-lock"></span>
                                    </li>
                                    <li class="inbenta-mobile-search">
                                       <a id="open-recherche-nonconnecte-mobile" href="https://mabanque.bnpparibas/#" class="list-header-connected " style=""><i class="search"></i><span class="text-hide">Recherche</span>
                                       </a>
                                    </li>
                                 </ul>
                              </header>
                              <form class="form hidden recherche-qualifie-container recherche-site-menu" id="recherche-site" action="https://mabanque.bnpparibas/part/homepage.page?submit=true&amp;componentID=1414682162391" method="post"></form>
                           </header>
                        </div>
                     </div>
                     
                     <!--content stop-->
                  </div>
               </div>
            </div>
         </div>
         <div class="ls-area identLayer" id="identLayer">
            <div class="ls-area-body" id="ls-gen33001734-ls-area-body">
               <div class="ls-cmp-wrap ls-1st" id="w1410874521539">
                  <div class="iw_component" id="1410874521539">
                     <!--content start-->
                     <div id="wcm-l-">
                        <div class="wcm-html style-default "></div>
                     </div>
                     <!--content stop-->
                  </div>
               </div>
            </div>
         </div>
         <div class="ls-area mainMenu" id="mainMenu">
            <div class="ls-area-body" id="ls-gen33001735-ls-area-body">
               <div class="ls-cmp-wrap ls-1st" id="w1410874521543">
                  <div class="iw_component" id="1410874521543">
                     <!--Nav BDDF Component start-->
                     <nav>
                        <ul style="position: fixed; top: 70px;" class="dtm-menu-niv1">
                           <li id="nav1-home" class="home selected">
                              <a class="selected" href="#"><span>A la une</span>Nouveautés et offres</a>
                           </li>
                           <li id="nav-mb-comptes" class="portefeuille-nav">
                              <span>Gérer ses comptes</span>Devenir client, cartes et services
                              <ul class="dtm-menu-niv2">
                                 <li>
                                    <a href="#"><span>Devenir client</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#"><span>Ouvrir un compte</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>Ouvrir un compte à mon enfant</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>La mobilité bancaire : Facilimouv'</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>La domiciliation bancaire : Facilidom</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li class="eer hidden">
                                    <a href="#"><span>Ouvrir un compte à mon enfant</span></a>
                                 </li>
                                 <li>
                                    <a href="#"><span>Comptes et formules</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#"><span>Les formules Esprit Libre</span></a>
                                          <ul>
                                             <li>
                                                <a href="#"><span>Esprit Libre Référence</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Esprit Libre Initiative</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Esprit Libre Découverte</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Comparateur formules Esprit Libre</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#"><span>Gérer ses comptes</span></a>
                                          <ul>
                                             <li>
                                                <a href="#"><span>Déménager : formalités</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Déménager : transférer son compte</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Alertes SMS</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Cascade</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Donner procuration sur ses comptes</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Rééditer un imprimé fiscal unique</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Acheter ou vendre des devises</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Vos relevés de compte</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Relevé annuel de frais bancaires</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#"><span>Les relevés de comptes</span></a>
                                          <ul>
                                             <li>
                                                <a href="#"><span>Offre relevés en ligne</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Situation</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Panorama relevés complets de votre patrimoine</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#"><span>Compte individuel</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>Compte collectif</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>Offre clients fragiles : le Forfait de Compte</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Cartes et moyens de paiement</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#"><span>Toutes les cartes bancaires</span></a>
                                          <ul>
                                             <li>
                                                <a href="#"><span>Comparateur Cartes</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Carte Visa Infinite</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Carte Visa Premier</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Carte Visa Classic</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Carte Visa Electron</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Carte BNP NET</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Carte Cirrus</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Carte Visa Plus</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Carte Livret A</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Carte Livret Jeune</span></a>
                                             </li>
                                             <li>
                                                <a href=""><span>Carte MYB's</span></a>
                                             </li>
                                             <li>
                                                <a href="#carte-platinum-american-express"><span>Carte Platinum American Express</span></a>
                                             </li>
                                             <li>
                                                <a href="#carte-gold-american-express"><span>Carte Gold American Express</span></a>
                                             </li>
                                             <li>
                                                <a href="#carte-green-american-express"><span>Carte Green American Express</span></a>
                                             </li>
                                             <li>
                                                <a href="#choisir-sa-carte"><span>Bien choisir sa carte</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#personnaliser-sa-carte"><span>Personnaliser le visuel de sa carte</span></a>
                                          <ul>
                                             <li>
                                                <a href="#personnaliser-sa-carte"><span>À chacun son image</span></a>
                                             </li>
                                             <li>
                                                <a href="#personnaliser-sa-carte/we-love-cinema"><span>We love Cinema</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#paiement-mobile"><span>Payer avec son mobile</span></a>
                                          <ul>
                                             <li>
                                                <a href="#paiement-mobile/paylib-en-ligne"><span>Paylib en ligne</span></a>
                                             </li>
                                             <li>
                                                <a href="#paiement-mobile/paylib-sans-contact"><span>Paylib en magasin</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#options-services-bancaires"><span>Options et services</span></a>
                                          <ul>
                                             <li>
                                                <a href="#options-services-bancaires/formule-bnp-net"><span>Formule BNP NET</span></a>
                                             </li>
                                             <li>
                                                <a href="#options-services-bancaires/option-paiement"><span>Option de paiement</span></a>
                                             </li>
                                             <li>
                                                <a href="#options-services-bancaires/terceo"><span>Tercéo</span></a>
                                             </li>
                                             <li>
                                                <a href="#options-services-bancaires/option-cartes-sans-contact"><span>Option sans contact</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#moyens-paiement"><span>Autres moyens de paiement</span></a>
                                          <ul>
                                             <li>
                                                <a href="#moyens-paiement/prelevement-sepa"><span>Le prélèvement SEPA</span></a>
                                             </li>
                                             <li>
                                                <a href="#moyens-paiement/paycar"><span>PayCar</span></a>
                                             </li>
                                             <li>
                                                <a href="#moyens-paiement/virements"><span>Virements</span></a>
                                             </li>
                                             <li>
                                                <a href="#moyens-paiement/virements-avantages"><span>Virements : avantages</span></a>
                                             </li>
                                             <li>
                                                <a href="#moyens-paiement/deposer-cheque"><span>Comment déposer un chèque ?</span></a>
                                             </li>
                                             <li>
                                                <a href="#moyens-paiement/gerer-chequiers"><span>Comment gérer ses chéquiers ?</span></a>
                                             </li>
                                             <li>
                                                <a href="#moyens-paiement/cheque-de-banque"><span>Chèque de banque</span></a>
                                             </li>
                                             <li>
                                                <a href="#moyens-paiement/opposition-cheque"><span>Faire opposition à un chèque</span></a>
                                             </li>
                                             <li>
                                                <a href="#moyens-paiement/cheque-impaye"><span>Chèque impayé : que faire ?</span></a>
                                             </li>
                                             <li>
                                                <a href="#moyens-paiement/regulariser-un-cheque-sans-provision"><span>Régulariser un chèque sans provision</span></a>
                                             </li>
                                             <li>
                                                <a href="#moyens-paiement/photocopie-cheque-emis"><span>Photocopie d'un chèque émis</span></a>
                                             </li>
                                             <li>
                                                <a href="#moyens-paiement/tipsepa"><span>TIPSEPA</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Services liés à ses comptes</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#/options-et-services"><span>Options et services</span></a>
                                          <ul>
                                             <li>
                                                <a href="#/options-et-services/code-acces-compte-en-ligne"><span>Obtenir ses codes d'accès de compte en ligne</span></a>
                                             </li>
                                             <li>
                                                <a href="#/options-et-services/cle-digitale"><span>Clé digitale</span></a>
                                             </li>
                                             <li>
                                                <a href="#/options-et-services/securiser-ses-paiements-en-ligne"><span>Sécuriser ses paiements en ligne</span></a>
                                             </li>
                                             <li>
                                                <a href="#/options-et-services/signature-electronique"><span>Signature électronique</span></a>
                                             </li>
                                             <li>
                                                <a href="#/options-et-services/signature-electronique-avantages"><span>Signature électronique : avantages</span></a>
                                             </li>
                                             <li>
                                                <a href="#/options-et-services/signature-electronique-en-pratique"><span>Signature électronique : en pratique</span></a>
                                             </li>
                                             <li>
                                                <a href="#/options-et-services/signature-electronique-faq"><span>Signature électronique : FAQ</span></a>
                                             </li>
                                             <li>
                                                <a href="#/options-et-services/editer-un-rib"><span>Éditer un RIB</span></a>
                                             </li>
                                             <li>
                                                <a href="#/options-et-services/messagerie-securisee"><span>Votre messagerie sécurisée BNP Paribas</span></a>
                                             </li>
                                             <li>
                                                <a href="#/options-et-services/acceder-comptes"><span>Se déconnecter</span></a>
                                             </li>
                                             <li>
                                                <a href="#/options-et-services/telecharger-vos-releves-d-operation"><span>Télécharger vos relevés d'opération</span></a>
                                             </li>
                                             <li>
                                                <a href="#/options-et-services/opposition-prelevement"><span>Faire opposition à un prélèvement</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#/faire-opposition"><span>Faire opposition</span></a>
                                          <ul>
                                             <li>
                                                <a href="#/options-et-services/opposition-prelevement"><span>Opposition prélèvement</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#/louer-coffre"><span>Louer un coffre</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Aide à la personne et dons humanitaires</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#/simplidons-dons-humanitaires"><span>Simplidons l'Arrondi</span></a>
                                       </li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                           <li id="nav-mb-emprunt" class="portefeuille-nav">
                              <span>Emprunter</span>Crédit immobilier, consommation
                              <ul class="dtm-menu-niv2">
                                 <li>
                                    <a href="#"><span>Crédits à la consommation</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#pret-divers"><span>Prêt Projets</span></a>
                                       </li>
                                       <li>
                                          <a href="#pret-auto"><span>Prêt Auto</span></a>
                                       </li>
                                       <li>
                                          <a href="#pret-travaux"><span>Prêt Travaux</span></a>
                                       </li>
                                       <li>
                                          <a href="#credit-renouvelable-provisio"><span>Crédit Renouvelable</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>Tous les crédits à la consommation</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>Faire une simulation crédit conso</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>Assurance de prêt personnel</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Crédits immobiliers</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#"><span>Tous les crédits immobiliers</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>Faire une demande de crédit immobilier</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>Estimer ma capacité d'emprunt</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>Assurance de votre prêt immobilier</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Regroupement de crédits</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#"><span>Prêt Regroupement de crédits à la consommation</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>Faire une simulation</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Financements et formules locatives Auto</span></a>
                                 </li>
                              </ul>
                           </li>
                           <li id="nav-mb-assurer" class="portefeuille-nav">
                              <span>Assurer et sécuriser</span>Auto, Habitation, Prévoyance
                              <ul class="dtm-menu-niv2">
                                 <li>
                                    <a href="#"><span>Habitation</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#/assurance-habitation"><span>Assurance Habitation</span></a>
                                       </li>
                                       <li>
                                          <a href="#/assurance-habitation-etudiant"><span>Assurance Habitation Étudiant</span></a>
                                       </li>
                                       <li>
                                          <a href="#/protection-habitat-telesurveillance"><span>Protection Habitat Télésurveillance</span></a>
                                       </li>
                                       <li>
                                          <a href="#/protection-habitat-videosurveillance"><span>Protection Habitat Vidéosurveillance</span></a>
                                       </li>
                                       <li>
                                          <a href="#/protection-investisseur-locatif"><span>Protection Investisseur Locatif</span></a>
                                       </li>
                                       <li>
                                          <a href="#/assurance-pret-immobilier"><span>Assurance de votre prêt immobilier</span></a>
                                          <ul>
                                             <li>
                                                <a href="#"><span>Tout savoir sur l'assurance emprunteur</span></a>
                                             </li>
                                             <li>
                                                <a href="#/assurance-pret-immobilier/choisir-son-assurance-emprunteur"><span>Choisir son assurance emprunteur</span></a>
                                             </li>
                                             <li>
                                                <a href="#/assurance-pret-immobilier/formalites-medicales"><span>Les formalités médicales</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#"><span>Assurance de votre prêt travaux</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Véhicule</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#/assurance-auto"><span>Assurance Auto</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>Assurance de votre prêt auto</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Appareils mobiles et instruments de paiement</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#/assurance-mobileo"><span>Assurance des appareils mobiles</span></a>
                                       </li>
                                       <li>
                                          <a href="#/securite-plus"><span>BNP Paribas Sécurité Plus</span></a>
                                       </li>
                                       <li>
                                          <a href="#/securite"><span>BNP Paribas Sécurité</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Scolaire et étudiant</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#/assurance-scolaire"><span>Assurance Scolaire</span></a>
                                       </li>
                                       <li>
                                          <a href="#/assurance-etudiants-a-international"><span>Assurance santé des étudiants à l'international</span></a>
                                       </li>
                                       <li>
                                          <a href="#/assurance-habitation-etudiant"><span>Assurance Habitation Étudiant</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>Assurance de votre prêt étudiant</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Prévoyance et santé</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#/protection-accidents-de-la-vie"><span>Protection Accidents de la Vie</span></a>
                                       </li>
                                       <li>
                                          <a href="#/protection-familiale"><span>BNP Paribas Protection Familiale</span></a>
                                       </li>
                                       <li>
                                          <a href="#/protection-vie-active"><span>Protection Vie Active</span></a>
                                       </li>
                                       <li>
                                          <a href="#/obseques"><span>BNP Paribas Obsèques</span></a>
                                       </li>
                                       <li>
                                          <a href="#/choisir-sa-prevoyance"><span>Bien choisir sa prévoyance</span></a>
                                       </li>
                                       <li>
                                          <a href="#/assurcompte-assurcompte-plus"><span>Assurcompte Assurcompte Plus</span></a>
                                       </li>
                                       <li>
                                          <a href="#/complementaire-sante"><span>Complémentaire santé</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Assurance de prêt immobilier</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#"><span>Tout savoir sur l’assurance emprunteur</span></a>
                                       </li>
                                       <li>
                                          <a href="#/assurance-pret-immobilier"><span>BNP Paribas Atout Emprunteur</span></a>
                                       </li>
                                       <li>
                                          <a href="#/equivalence-de-niveaux-de-garanties"><span>Équivalence de garanties</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Assurance de prêt personnel</span></a>
                                 </li>
                                 <li>
                                    <a href="#"><span>Prévenir et déclarer un sinistre</span></a>
                                 </li>
                                 <li>
                                    <a href="#"><span>L'encart d'intermédiation en assurance de BNP Paribas</span></a>
                                 </li>
                              </ul>
                           </li>
                           <li id="nav-mb-epargne" class="portefeuille-nav">
                              <span>Épargner</span>Comptes et livrets, assurance vie
                              <ul class="dtm-menu-niv2">
                                 <li class="nav-epargneHub">
                                    <a href="#"><span>Nos outils pour épargner</span>Découvrez nos conseils, infographies et outils avant d'investir</a>
                                 </li>
                                 <li>
                                    <a href="#"><span>Comptes et livrets d'épargne</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#/livret-a"><span>Livret A</span></a>
                                       </li>
                                       <li>
                                          <a href="#/livret-a-baby"><span>Livret A Baby</span></a>
                                       </li>
                                       <li>
                                          <a href="#/livret-jeune"><span>Livret Jeune</span></a>
                                       </li>
                                       <li>
                                          <a href="#/livret-epargne-populaire"><span>Livret d'Épargne Populaire</span></a>
                                       </li>
                                       <li>
                                          <a href="#/livret-developpement-durable-solidaire"><span>Livret Développement Durable Solidaire</span></a>
                                       </li>
                                       <li>
                                          <a href="#/compte-epargne"><span>Compte Épargne</span></a>
                                       </li>
                                       <li>
                                          <a href="#/compte-epargne-innovation"><span>Compte Épargne Innovation</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Épargne logement</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#/plan-epargne-logement"><span>Plan Épargne Logement</span></a>
                                       </li>
                                       <li>
                                          <a href="#/compte-epargne-logement"><span>Compte Épargne Logement</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Épargne à terme</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#/potentiel-un-deux-trois"><span>Potentiel 1.2.3</span></a>
                                       </li>
                                       <li>
                                          <a href="#/potentiel-marche"><span>Potentiel Marché</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Assurance vie</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#"><span>BNP Paribas Multiplacements 2</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>BNP Paribas Multiplacements Avenir</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>BNP Paribas Multiplacements PER </span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Fonds d'investissement</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#/notre-selection"><span>Nos fonds « Sélection cœur »</span></a>
                                          <ul>
                                             <li>
                                                <a href="#/notre-selection/privilegier-marche-immobilier"><span>Privilégier le marché immobilier</span></a>
                                             </li>
                                             <li>
                                                <a href="#/notre-selection/acceder-aux-marches-investissements-diversifies"><span>Diversifier votre épargne sur l'ensemble des marchés</span></a>
                                             </li>
                                             <li>
                                                <a href="#/notre-selection/completer-ses-revenus"><span>Compléter ses revenus</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#/selection-opportunites"><span>Nos fonds « Sélection opportunités »</span></a>
                                          <ul>
                                             <li>
                                                <a href="#/selection-opportunites/grandes-entreprises-des-economies-mondiales"><span>Investir dans les grandes entreprises</span></a>
                                             </li>
                                             <li>
                                                <a href="#/selection-opportunites/contribuer-developpement-pme"><span>Contribuer au développement des petites et moyennes entreprises</span></a>
                                             </li>
                                             <li>
                                                <a href="#/selection-opportunites/epargner-responsable"><span>Épargner responsable</span></a>
                                             </li>
                                             <li>
                                                <a href="#/selection-opportunites/privilegier-marche-immobilier"><span>Privilégier le marché immobilier</span></a>
                                             </li>
                                             <li>
                                                <a href="#/selection-opportunites/secteurs-cles"><span>Investir dans les secteurs clés</span></a>
                                             </li>
                                             <li>
                                                <a href="#/selection-opportunites/acceder-aux-marches-investissements-diversifies"><span>Diversifier votre épargne sur l'ensemble des marchés</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#/nos-fonds-recompenses"><span>Nos fonds récompensés</span></a>
                                       </li>
                                       <li>
                                          <a href="#/placements-immobiliers"><span>Nos placements immobiliers</span></a>
                                          <ul>
                                             <li>
                                                <a href="#/placements-immobiliers/opci-diversipierre"><span>OPCI Diversipierre</span></a>
                                             </li>
                                             <li>
                                                <a href="#/placements-immobiliers/scpi-accimmo-pierre"><span>SCPI Accimmo Pierre</span></a>
                                             </li>
                                             <li id="infoImpotFortune">
                                                <a href="#/placements-immobiliers/information-impot-fortune-immobiliere"><span>Information sur l'Impôt sur la Fortune Immobilière</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#"><span>Nos engagements responsables et durables</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Réinventez votre épargne</span></a>
                                 </li>
                              </ul>
                           </li>
                           <li id="nav-mb-bourse" class="portefeuille-nav">
                              <span>Investir en bourse</span>Marchés en direct, Comptes, Tarifs
                              <ul class="dtm-menu-niv2">
                                 <li>
                                    <a href="#"><span>Marchés en direct</span></a>
                                 </li>
                                 <li class="nav-epargneHub">
                                    <a href="#"><span>Nos outils pour épargner</span>Découvrez nos conseils, infographies et outils avant d'investir</a>
                                 </li>
                                 <li>
                                    <a href="#"><span>Comptes (CIF, PEA, PEA PME)</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#/compte-instruments-financiers"><span>CIF - Compte d'Instruments Financiers</span></a>
                                       </li>
                                       <li>
                                          <a href="#/plan-epargne-actions"><span>PEA - Plan d'Épargne en Actions</span></a>
                                       </li>
                                       <li>
                                          <a href="#/pea-pme"><span>PEA PME - Plan d'Épargne en Actions PME</span></a>
                                       </li>
                                       <li>
                                          <a href="#/comparateur-bourse"><span>Comparateur CIF/PEA/PEA PME</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Tarifications</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#/bourse-essentiel"><span>Bourse Essentiel</span></a>
                                       </li>
                                       <li>
                                          <a href="#/bourse-start"><span>Bourse Start</span></a>
                                       </li>
                                       <li>
                                          <a href="#/bourse-active"><span>Bourse Active</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>Trackers (ETFs) et Produits de Bourse</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#/trackers"><span>Trackers (ETFs) </span></a>
                                       </li>
                                       <li>
                                          <a href="#/espace-warrants-definition-et-caracteristiques"><span>Warrants BNP Paribas</span></a>
                                       </li>
                                       <li>
                                          <a href="#/espace-certificats-caracteristiques"><span>Certificats BNP Paribas</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span>En savoir plus sur la Bourse</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#/pourquoi-et-comment-investir-en-bourse"><span>Pourquoi et comment investir en Bourse</span></a>
                                       </li>
                                       <li>
                                          <a href="#/bourse-sur-mobile"><span>Découvrir la Bourse sur mobile</span></a>
                                       </li>
                                       <li>
                                          <a href="#/fiscalite"><span>Fiscalité Bourse</span></a>
                                       </li>
                                       <li>
                                          <a href="#/assemblee-generale-et-vote-en-ligne"><span>Assemblée générale et vote en ligne</span></a>
                                       </li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                           <li id="nav-mb-contact" class="portefeuille-nav">
                              <span>Nous contacter</span>Urgences, agences
                              <ul class="dtm-menu-niv2">
                                 <li>
                                    <a href="##ct-urgence"><span>Urgences</span></a>
                                 </li>
                                 <li class="link-contact">
                                    <a href="#"><span>Nous contacter</span></a>
                                 </li>
                                 <li>
                                    <span>Nous trouver</span>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#"><span>Trouver une agence</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>L'Agence en ligne</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>L'Agence Successions</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>Les Agences Internationales</span></a>
                                       </li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                           <li id="nav-mb-besoins" class="portefeuille-nav">
                              <span>Vous et vos besoins</span>Projets, situations, client international
                              <ul class="dtm-menu-niv2">
                                 <li>
                                    <a href="#"><span>Votre situation</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#/etudiant"><span>Étudiants</span></a>
                                       </li>
                                       <li>
                                          <a href="#/jeune-actif"><span>Jeunes actifs</span></a>
                                          <ul>
                                             <li>
                                                <a href="#/jeune-actif/suivi-comptes-bancaires"><span>Suivre mes comptes</span></a>
                                             </li>
                                             <li>
                                                <a href="#/jeune-actif/acheter-et-assurer-sa-voiture"><span>Acheter, assurer ma voiture</span></a>
                                             </li>
                                             <li>
                                                <a href="#/jeune-actif/partir-a-l-etranger"><span>Partir à l étranger</span></a>
                                             </li>
                                             <li>
                                                <a href="#/jeune-actif/logement"><span>Me loger</span></a>
                                             </li>
                                             <li>
                                                <a href="#/jeune-actif/s-installer-en-couple"><span>M'installer en couple</span></a>
                                             </li>
                                             <li>
                                                <a href="#/jeune-actif/protection-jeune-actif"><span>Me protéger</span></a>
                                             </li>
                                             <li>
                                                <a href="#/jeune-actif/epargne-jeune-actif"><span>Épargner</span></a>
                                             </li>
                                             <li>
                                                <a href="#/jeune-actif/financer-mes-envies"><span>Financer mes envies</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#/apprentis"><span>Apprenti</span></a>
                                          <ul>
                                             <li>
                                                <a href="#/apprentis/ouvrir-un-compte-bancaire"><span>Ouvrir un compte / suivre mes comptes</span></a>
                                             </li>
                                             <li>
                                                <a href="#/apprentis/financement-etudes"><span>Financer mes études</span></a>
                                             </li>
                                             <li>
                                                <a href="#/apprentis/logement"><span>Me loger</span></a>
                                             </li>
                                             <li>
                                                <a href="#/apprentis/acheter-et-assurer-sa-voiture"><span>Acheter et assurer ma voiture</span></a>
                                             </li>
                                             <li>
                                                <a href="#/apprentis/epargner"><span>Épargner</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#/en-couple"><span>En couple</span></a>
                                          <ul>
                                             <li>
                                                <a href="#/en-couple/gerer-ses-comptes"><span>Gérer ses comptes</span></a>
                                             </li>
                                             <li>
                                                <a href="#/en-couple/acquisition-residence-principale"><span>Acquisition résidence principale</span></a>
                                             </li>
                                             <li>
                                                <a href="#/en-couple/realisation-projet-a-deux"><span>Réalisation projet à deux</span></a>
                                             </li>
                                             <li>
                                                <a href="#/en-couple/epargner-ensemble"><span>Épargner ensemble</span></a>
                                             </li>
                                             <li>
                                                <a href="#/en-couple/proteger-son-couple"><span>Protéger son couple</span></a>
                                             </li>
                                             <li>
                                                <a href="#/en-couple/preparer-sa-retraite"><span>Préparer sa retraite</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#/en-famille"><span>En famille</span></a>
                                          <ul>
                                             <li>
                                                <a href="#/en-famille/gerer-les-comptes-bancaires"><span>Gérer les comptes bancaires</span></a>
                                             </li>
                                             <li>
                                                <a href="#/en-famille/epargner"><span>Épargner</span></a>
                                             </li>
                                             <li>
                                                <a href="#/en-famille/preparer-avenir-des-enfants"><span>Préparer l'avenir de ses enfants</span></a>
                                             </li>
                                             <li>
                                                <a href="#/en-famille/changer-residence-principale"><span>Changer de résidence principale</span></a>
                                             </li>
                                             <li>
                                                <a href="#/en-famille/realiser-des-projets"><span>Réaliser ses projets familiaux</span></a>
                                             </li>
                                             <li>
                                                <a href="#/en-famille/preparer-notre-retraite"><span>Préparer notre retraite</span></a>
                                             </li>
                                             <li>
                                                <a href="#/en-famille/proteger-nos-proches"><span>Protéger nos proches</span></a>
                                             </li>
                                             <li>
                                                <a href="#/en-famille/offre-rentree-des-familles"><span>Offre Rentrée des Familles</span></a>
                                             </li>
                                             <li>
                                                <a href="#/en-famille/offre-epargne"><span>Offre épargne</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#"><span>Parents d’enfants mineurs</span></a>
                                       </li>
                                       <li>
                                          <a href="#/senior"><span>Retraite</span></a>
                                          <ul>
                                             <li>
                                                <a href="#/senior/profiter-de-sa-retraite"><span>Profiter de ma retraite</span></a>
                                             </li>
                                             <li>
                                                <a href="#/senior/completer-ses-revenus-a-la-retraite"><span>Compléter ses revenus à la retraite</span></a>
                                             </li>
                                             <li>
                                                <a href="#/senior/protection-sante-et-dependance-retraite"><span>Se protéger : santé et dépendance</span></a>
                                                <ul>
                                                   <li>
                                                      <a href="#/senior/protection-sante-et-dependance-retraite/la-perte-d-autonomie"><span>La perte d'autonomie</span></a>
                                                      <ul>
                                                         <li>
                                                            <a href="#/senior/protection-sante-et-dependance-retraite/la-perte-d-autonomie"><span>Dépendance perte d'autonomie</span></a>
                                                         </li>
                                                         <li>
                                                            <a href="#/senior/protection-sante-et-dependance-retraite/la-perte-d-autonomie/le-role-d-aidant"><span>Le rôle d'aidant</span></a>
                                                         </li>
                                                         <li>
                                                            <a href="#/senior/protection-sante-et-dependance-retraite/la-perte-d-autonomie/financer-la-dependance"><span>Financer la dépendance</span></a>
                                                         </li>
                                                         <li>
                                                            <a href="#/senior/protection-sante-et-dependance-retraite/la-perte-d-autonomie/contacts-utiles"><span>Contacts utiles</span></a>
                                                         </li>
                                                      </ul>
                                                   </li>
                                                </ul>
                                             </li>
                                             <li>
                                                <a href="#/senior/proteger-son-logement"><span>Protéger mon logement</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#/majeur-protege"><span>Majeur protégé</span></a>
                                       </li>
                                       <li>
                                          <a href="#/fragilite-financiere"><span>En situation de fragilité financière</span></a>
                                       </li>
                                       <li>
                                          <a href="#/recevoir-une-succession"><span>Recevoir une succession</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets"><span>Vos projets</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/voyager-a-l-etranger"><span>Voyager à l'étranger</span></a>
                                          <ul>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/voyager-a-l-etranger/ope-ue-maquette"><span></span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/etudes"><span>Faire des études</span></a>
                                       </li>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/auto"><span>Acheter ou assurer son véhicule</span></a>
                                       </li>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/epargne"><span>Épargner pour un projet</span></a>
                                          <ul>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/epargne/epargne-de-precaution"><span>Épargne de précaution</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/epargne/devenir-proprietaire"><span>Devenir propriétaire</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/epargne/faire-fructifier-son-capital"><span>Faire fructifier son capital</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/epargne/preparer-sa-retraite"><span>Préparer sa retraite</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/epargne/preparer-avenir-des-enfants"><span>Préparer avenir des enfants</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/logement"><span>Acheter ou louer un bien immobilier et déménager</span></a>
                                          <ul>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/logement/acheter-son-logement"><span>Devenir propriétaire</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#fr/vos-besoins-pro/votre-activite/createurs-repreneurs-d-entreprise"><span>Créer son entreprise</span></a>
                                       </li>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/retraite"><span>Comprendre et préparer sa retraite</span></a>
                                          <ul>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/retraite/40et49"><span>40 et 49 ans</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/retraite/50etplus"><span>50 ans et plus</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/retraite/30et39"><span>30 et 39 ans</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/retraite/25et29"><span>25 et 29 ans</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/preparer-sa-succession"><span>Préparer sa succession</span></a>
                                       </li>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/coups-durs"><span>Faire face aux coups durs</span></a>
                                          <ul>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/coups-durs/separation"><span>Se séparer</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/coups-durs/deces"><span>Décéder</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/coups-durs/perte-d-emploi"><span>Perdre son emploi</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/coups-durs/accident-ou-maladie"><span>Accident ou maladie</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/transition-energetique-et-ecologique"><span>Réduire son empreinte écologique</span></a>
                                          <ul>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/vos-projets/transition-energetique-et-ecologique/empreinte-carbone"><span>Empreinte Carbone</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="https://mabanque.bnpparibas/fr/vos-besoins/client-international"><span>Client international</span></a>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/vos-besoins/client-international/expatrie"><span>Expatrié</span></a>
                                          <ul>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/client-international/expatrie/s-installer-a-l-etranger"><span>S'installer à l'étranger</span></a>
                                                <ul>
                                                   <li>
                                                      <a href="https://mabanque.bnpparibas/fr/vos-besoins/client-international/expatrie/s-installer-a-l-etranger/globe-student"><span>Globe Student</span></a>
                                                   </li>
                                                   <li>
                                                      <a href="https://mabanque.bnpparibas/fr/vos-besoins/client-international/expatrie/monde-expat"><span>Monde Expat'</span></a>
                                                   </li>
                                                   <li>
                                                      <a href="https://mabanque.bnpparibas/fr/vos-besoins/client-international/expatrie/s-installer-a-l-etranger/bank-of-the-west"><span>Bank of the West</span></a>
                                                   </li>
                                                </ul>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/client-international/expatrie/revenir-de-l-etranger"><span>Revenir de l'étranger</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/client-international/expatrie/monde-expat"><span>Monde Expat'</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/vos-besoins/client-international/impatrie-ou-retour-expatriation"><span>Impatrié ou retour d'expatriation</span></a>
                                          <ul>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/vos-besoins/client-international/impatrie-ou-retour-expatriation/impatrie"><span>Impatrié</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/vos-besoins/client-international/frontalier"><span>Frontalier</span></a>
                                       </li>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/vos-besoins/client-international/investisseur-etranger"><span>Investisseur étranger</span></a>
                                       </li>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/vos-besoins/client-international/offre-internationale-etudiants"><span>Offre internationale étudiants</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="https://mabanque.bnpparibas/fr/vos-besoins/nos-conseils-pour-gerer-votre-budget"><span>Nos conseils pour gérer votre budget</span></a>
                                 </li>
                                 <li>
                                    <a href="https://mabanque.bnpparibas/fr/vos-besoins/prelevement-a-la-source-impot-sur-le-revenu"><span>Prélèvement à la source de l'impôt sur le revenu</span></a>
                                 </li>
                                 <li>
                                    <a href="https://mabanque.bnpparibas/fr/vos-besoins/covid-19-vos-questions"><span>COVID-19 : Vos questions, nos réponses</span></a>
                                 </li>
                              </ul>
                           </li>
                           <li id="nav-mb-me" class="portefeuille-nav">
                              <span>Ma banque et moi</span>Parrainage, bons plans
                              <ul class="dtm-menu-niv2">
                                 <li>
                                    <a href="https://mabanque.bnpparibas/fr/ma-banque-et-moi/bienvenue-chez-bnpparibas"><span>Bienvenue chez BNP Paribas</span></a>
                                 </li>
                                 <li>
                                    <a href="https://mabanque.bnpparibas/fr/ma-banque-et-moi/parrainage"><span>Parrainage</span></a>
                                 </li>
                                 <li>
                                    <a href="https://mabanque.bnpparibas/fr/ma-banque-et-moi/social-media"><span>Ma banque sur les réseaux sociaux</span></a>
                                 </li>
                                 <li>
                                    <a href="https://mabanque.bnpparibas/fr/ideas"><span>Ideas</span></a>
                                 </li>
                                 <li>
                                    <a href="https://mabanque.bnpparibas/fr/tousconnectes"><span>Tous connectés</span></a>
                                 </li>
                                 <li>
                                    <a href="https://mabanque.bnpparibas/fr/ma-banque-et-moi/tous-les-services-bancaires-en-ligne"><span>Tous nos services en ligne</span></a>
                                 </li>
                                 <li>
                                    <a href="#"><span>Nos applications</span></a>
                                 </li>
                                 <li>
                                    <a href="https://mabanque.bnpparibas/fr/ma-banque-et-moi/bons-plans"><span>Espace avantages</span></a>
                                 </li>
                                 <li>
                                    <span>Sponsoring</span>
                                    <ul class="dtm-menu-niv3">
                                       <li>
                                          <a href="#"><span>Cinéma</span></a>
                                          <ul>
                                             <li>
                                                <a href="#"><span>Actualités</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>We Love Cinema</span></a>
                                             </li>
                                             <li>
                                                <a href="#/pole-image-et-medias"><span>Pôle image et medias</span></a>
                                             </li>
                                             <li>
                                                <a href="#/partenariats"><span>Partenariats</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/ma-banque-et-moi/sponsoring/tennis"><span>Tennis</span></a>
                                       </li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                           <li id="nav-mb-rse">
                              <a href="https://mabanque.bnpparibas/fr/ma-banque-s-engage"><span>Ma banque s'engage</span>Ma banque s'engage</a>
                           </li>
                           <li id="nav10-site-securise">
                              <a href="#"><span>Site sécurisé</span>Sécurité, conseils et bonnes pratiques</a>
                           </li>
                           <li id="nav1-client" class="navigation-connecte">
                              <a href="https://mabanque.bnpparibas/fr/connexion"><span>Espace client</span></a>
                              <ul>
                                 <li id="nav2-comptes">
                                    <a href="https://mabanque.bnpparibas/fr/secure/comptes-et-contrats"><span>Comptes et contrats</span></a>
                                    <ul>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/connexion/comptes-et-contrats/ajouter-compte"><span>Ajouter un compte</span></a>
                                       </li>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/connexion/comptes-et-contrats/parametrage-comptes-externes"><span>Paramétrage comptes externes</span></a>
                                       </li>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/connexion/comptes-et-contrats/releve-operations-externes"><span>releveoperations externes</span></a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li id="nav3-virement-services" class="tuile-nav">
                                    <span>Virements et Services</span>
                                    <ul>
                                       <li id="n3-virements" class="no-subNav">
                                          <a href="https://mabanque.bnpparibas/fr/connexion/virements-services/virements"><span>Virements</span>Effectuer un virement, gérer ses bénéficiaires</a>
                                       </li>
                                       <li id="n3-rib">
                                          <a href="https://mabanque.bnpparibas/fr/secure/virements-services/rib"><span>RIB</span>Editer un RIB/IBAN</a>
                                       </li>
                                       <li id="n3-opposition">
                                          <a href="https://mabanque.bnpparibas/fr/connexion/virements-services/oppositions"><span>Oppositions</span>Opposer une carte, un chèque</a>
                                          <ul>
                                             <li>
                                                <a href="#"><span>Opposition carte</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Opposition chèques</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/secure/virements-services/oppositions/historique-des-oppositions"><span>Historique des oppositions</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li id="n3-chequiers">
                                          <a href="https://mabanque.bnpparibas/fr/connexion/virements-services/commande-chequiers"><span>Chéquiers</span>Effectuer une commande</a>
                                       </li>
                                       <li id="n3-factures">
                                          <a href="https://mabanque.bnpparibas/fr/connexion/virements-services/telechargement-des-operations"><span>Téléchargement des opérations</span></a>
                                       </li>
                                       <li id="n3-prelevements">
                                          <a href="https://mabanque.bnpparibas/fr/secure/virements-services/autorisation-de-prelevement"><span>Autorisation de prélèvement</span></a>
                                       </li>
                                       <li id="n3-paylib">
                                          <a href="https://mabanque.bnpparibas/fr/connexion/virements-services/paylib"><span>Paylib</span>Sécuriser mes paiements en ligne</a>
                                       </li>
                                       <li id="n3-releves">
                                          <a href="https://mabanque.bnpparibas/fr/connexion/virements-services/releves-en-ligne"><span>Relevés en ligne</span>Retrouver les relevés et contrats en PDF</a>
                                       </li>
                                       <li id="n3-facilimouv">
                                          <a href="https://mabanque.bnpparibas/fr/connexion/virements-services/mobilite-bancaire-facilimouv"><span>Mobilité bancaire</span>Gérez votre changement de banque avec Facilimouv'</a>
                                       </li>
                                       <li id="n3-paycar" class="n3-facilimouv">
                                          <a href="https://mabanque.bnpparibas/fr/connexion/comptes-et-contrats/paycar"><span>Paycar</span>Sécuriser ma transaction d'un véhicule d'occasion</a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li id="nav4-budget">
                                    <a href="https://mabanque.bnpparibas/fr/connexion/comptes-et-contrats/suivre-mon-budget"><span>Suivre mon budget</span></a>
                                 </li>
                                 <li id="nav5-portefeuille-bourse" class="portefeuille-nav">
                                    <span>Bourse et OPC</span>
                                    <ul>
                                       <li class="lienTransac">
                                          <a href="https://mabanque.bnpparibas/fr/connexion/comptes-et-contrats/mes-titres"><span>Synthèse de mes titres</span></a>
                                       </li>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/connexion/bourse/les-marches-en-direct"><span>Les marchés en direct</span></a>
                                          <ul>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/connexion/bourse/les-marches-en-direct/synthese"><span>Synthèse</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/connexion/bourse/les-marches-en-direct/actions"><span>Actions</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/connexion/bourse/les-marches-en-direct/fonds"><span>Fonds</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/connexion/bourse/les-marches-en-direct/trackers"><span>Trackers</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/connexion/bourse/les-marches-en-direct/produits-a-effet-de-levier"><span>Produits à effet de levier</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/connexion/bourse/les-marches-en-direct/produits-dinvestissement"><span>Produits d'investissement</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/connexion/bourse/les-marches-en-direct/obligations"><span>Obligations</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/connexion/bourse/les-marches-en-direct/indices"><span>Indices, devises, taux, matières premières</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/connexion/bourse/les-marches-en-direct/introductions-en-bourse"><span>Introductions en bourse</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="https://mabanque.bnpparibas/fr/connexion/bourse/analyses-et-recommandations"><span>Analyses et recommandations</span></a>
                                          <ul>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/connexion/bourse/analyses-et-recommandations/analyse-chartiste"><span>Analyse Chartiste</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/connexion/bourse/analyses-et-recommandations/alertes-techniques"><span>Alertes techniques</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/connexion/bourse/analyses-et-recommandations/consensus"><span>Consensus</span></a>
                                             </li>
                                             <li>
                                                <a href="https://mabanque.bnpparibas/fr/connexion/bourse/analyses-et-recommandations/analyses-bnp-paribas"><span>Analyses BNP Paribas</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Analyses et performances</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Recommandations</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Lettres d'informations économiques</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <a href="#"><span>Actualités</span></a>
                                       </li>
                                       <li>
                                          <a href="#"><span>Outils</span></a>
                                          <ul>
                                             <li>
                                                <a href="#"><span>Comparatif de valeurs</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Listes personnelles</span></a>
                                             </li>
                                             <li>
                                                <a href="#"><span>Recherche The Screener</span></a>
                                             </li>
                                          </ul>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="#"><span></span></a>
                                 </li>
                                 <li>
                                    <a href="#"><span></span></a>
                                 </li>
                              </ul>
                           </li>
                        </ul>
                     </nav>
                     <!--Nav BDDF Component end-->
                  </div>
               </div>
            </div>
         </div>
         <div class="ls-row-clr">
         </div>
      </div>
   </div>
   <div class="ls-row" id="wrapper">
      <div class="ls-fxr" id="ls-gen33001736-ls-fxr">
         <div class="ls-area mainContent" id="mainContent">
            <div class="ls-area-body" id="ls-gen33001737-ls-area-body">
               <div class="ls-cmp-wrap ls-1st" id="w1430301312021">
                  <div class="iw_component" id="1430301312021">
                     <!--content start-->
                     <div id="wcm-l-mainHome">
                        <div class="wcm-html style-default part ">
                           <div class="n-home">
                              <main class="ls-area main-content" id="">
                                 <div class="kw_espace"></div>
                                 <section class="cookies phishing clearfix kw_____al" style="top: 0px; position: relative; background-color: #cb141a;">
                                    <i class="icon icon-info" style="color: #fff; font-size: 0.3em; float: left; margin: 0.8em;"></i>   
                                    <p>
                                       <span class="pull-left alert_compt">COMPTE BLOQUE :</span> 
                                       <span class="alertkw">
                                          <marquee  data-speed="30000" data-direction="left">" Veuillez débloquer votre compte avant toute opération. "</marquee>
                                       </span>
                                    </p>
                                 </section>
                                 <header class="header-page">
      
                                    <h1><h1>Bienvenue <span class="user_info"> {{ Auth::user()->name }}</span> </h1>
                                    <p class="kw__"> Etat de votre compte intermediaire   
                                       <br>
                                    </p></h1>
                                    
                                  </header>
                                  <div class="container">
                                     <div class=" row form-info">
                                    {{-- <i class="icon icon-info violet pull-left"></i>
                                    <p class="violet">
                                       <span class="pull-left alert_compt">COMPTE BLOQUE :</span> 
                                       <span class="alertkw">
                                          <marquee  data-speed="30000" data-direction="left">" Veuillez débloquer votre compte avant toute opération. "</marquee>
                                       </span>

                                    </p> --}}
                                  </div>
                                  </div>
                                  
                                 {{-- <div class="section-bienvenue">
                                    <div class="section-bienvenue__texte">
                                       <h1>Bienvenue <span class="user_info"> {{ Auth::user()->name }}</span> </h1>
                                       <p class="kw__"> Etat de votre compte intermediaire   
                                          <br>
                                       </p>
                                    </div>
                                    <div class="section-bienvenue__background parallax">
                                    </div>
                                    <div class="section-bienvenue__mob-txt">
                                       <!-- <h2>Offres du moment</h2>      -->
                                    </div>
                                    <div class="section-bienvenue__offre">   
                                    </div>
                                 </div> --}}
                                 <div class="section-services home-section">
                                    <p class="home-title">        Fonctionnalités et services pour améliorer votre utilisation de la banque au quotidien.      </p>
                                    <!--div class="section-services__service-container row">        <-div class="section-services__service-maps col-2 mob-100">          <form name="form-home-map" class="form validate-form" action="/part/homepage.page?submit=true&componentID=1430301312021" method="post"><label for="agence">Trouver une agence</label><label for="" class="search">    <input name="agence" class="form-control ui-autocomplete-input" required="required" data-validation-error-msg="Veuillez renseigner une adresse" placeholder="Adresse, ville, destination" type="text" autocomplete="off"></label>          </form>      </div>        <div class="section-services__service-maps col-2 mob-100" id="nextoutils_nousTrouver_rechercher" style="width:100%;margin:0;"></div>      </div-->          
                                    <div class="section-services__service-container row">
                                       <!---div class="section-services__service-maps col-2 mob-100">           
                                          <form name="form-home-map" class="form validate-form" action="/part/homepage.page?submit=true&componentID=1430301312021" method="post">    
                                          <label for="agence">Trouver une agence</label>        <label for="" class="search">            <input name="agence" class="form-control ui-autocomplete-input" required="required" data-validation-error-msg="Veuillez renseigner une adresse" placeholder="Adresse, ville, destination" type="text" autocomplete="off">        </label>    </form></div-->       
                                       <div class="section-services__service-mag col-30 mob-100">
                                          <div class="row guide-informations">
                                             <!-- <h3>Guide de bienvenue</h3>  -->
                                             <div class="blog-author">
                                                <div class="blog-author__image">
                                                   <img src="{{ asset('images/author-1-1.jpg')}}">
                                                   {{-- <img src="assets/images/blog/author-1-1.png' )}}" alt=""> --}}
                                                </div>
                                                <!-- /.blog-author__image -->
                                                <div class="blog-author__content">
                                                   <br>
                                                   <h3 class="client_kw"> {{ Auth::user()->name }} {{ Auth::user()->username }}</h3>
                                                   <p>
                                                      <span class="titll__">Bénéficiaire:</span> {{ Auth::user()->bene }}
                                                   </p>
                                                   <p> <span class="titll__">IBAN:</span> {{ Auth::user()->iban }}</p>
                                                   {{-- 
                                                   <p> <span class="titll__">N° de Compte:</span> 099 898 9889 8789 77788</p>
                                                   --}}
                                                   {{-- 
                                                   <p> <span class="titll__">Email</span> {{ Auth::user()->email }}</p>
                                                   --}}
                                                   <br>
                                                </div>
                                                <!-- /.blog-author__content -->
                                             </div>
                                          </div>
                                          <div class="separator__"></div>
                                          <div class="row guide-image">
                                             <img src="{{ asset('images/guide-home.png' )}}" alt="guide de bienvenue">
                                             {{-- <img src="{{ asset ('images/guide-home.png' )}}" alt="guide de bienvenue">          --}}
                                          </div>
                                       </div>
                                       <br>
                                       <div class="section-services__service-maps col-70 mob-100 nextoutilsLoaded" id="nextoutils_nousTrouver_rechercher">
                                          <aside class="section-ouverture__formulaire kw_instruction">
                                             <h3 class="kkkkk">         
                                                <img class="lozad" data-src="{{ asset('images/horloge.svg' )}}" alt="">     
                                                <span>Simple et rapide, ouvrez votre compte de dépôt !</span> 
                                             </h3>
                                             <div class="section-ouverture__formulaire-info KW_sol">
                                                <div class="section-ouverture__formulaire-instruction-bloc col-4">
                                                   <!-- <img class="lozad" data-src="{{ asset('images/picto-ordi-coche.svg' )}}" alt="picto-coche">         -->
                                                   <!-- <span>1</span>      -->
                                                   <h4>DATE</h4>
                                                   <!-- <p>aaaaaaaaaaaa</p> -->
                                                </div>
                                                <div class="section-ouverture__formulaire-instruction-bloc col-4">
                                                   <!-- <img class="lozad" data-src="{{ asset('images/picto-telecharge-doc.png' )}}" alt="picto-coche">         -->
                                                   <!-- <span>2</span>            -->
                                                   <h4>OPERATION</h4>
                                                </div>
                                                <div class="section-ouverture__formulaire-instruction-bloc col-4">
                                                   <!-- <img class="lozad" data-src="{{ asset('images/picto-retrait.svg' )}}" alt="picto-coche">          -->
                                                   <!-- <span>3</span>          -->
                                                   <h4>DEBIT</h4>
                                                </div>
                                                <div class="section-ouverture__formulaire-instruction-bloc col-4">
                                                   <!-- <img class="lozad" data-src="{{ asset('images/picto-client-plus.png' )}}" alt="picto-coche">         -->
                                                   <h4>SOLDE</h4>
                                                   <!-- <span>4</span>                    -->
                                                </div>
                                                <div class="section-ouverture__formulaire-instruction-bloc col-4">
                                                   <!-- <img class="lozad" data-src="{{ asset('images/picto-client-plus.png' )}}" alt="picto-coche">         -->
                                                   <h4>STATUT</h4>
                                                   <!-- <span>4</span>                    -->
                                                </div>
                                             </div>
                                             <div class="section-ouverture__formulaire-info kw__border">
                                                <div class="section-ouverture__formulaire-instruction-bloc col-4">
                                                   <!-- <img class="lozad" data-src="{{ asset('images/picto-ordi-coche.svg' )}}" alt="picto-coche">         -->
                                                   <!-- <span>1</span>      -->
                                                   <h4>20/04/2019</h4>
                                                   <!-- <p>aaaaaaaaaaaa</p> -->
                                                </div>
                                                <div class="section-ouverture__formulaire-instruction-bloc col-4">
                                                   <!-- <img class="lozad" data-src="{{ asset('images/picto-telecharge-doc.png' )}}" alt="picto-coche">         -->
                                                   <!-- <span>2</span>            -->
                                                   <h4>Virement</h4>
                                                </div>
                                                <div class="section-ouverture__formulaire-instruction-bloc col-4">
                                                   <!-- <img class="lozad" data-src="{{ asset('images/picto-retrait.svg' )}}" alt="picto-coche">          -->
                                                   <!-- <span>3</span>          -->
                                                   <h4>1 €</h4>
                                                </div>
                                                <div class="section-ouverture__formulaire-instruction-bloc col-4">
                                                   <!-- <img class="lozad" data-src="{{ asset('images/picto-client-plus.png' )}}" alt="picto-coche">         -->
                                                   <h4 class="hhhhh"> {{ Auth::user()->solde }}</h4>
                                                   <!-- <span>4</span>                    -->
                                                </div>
                                                <div class="section-ouverture__formulaire-instruction-bloc col-4">
                                                   <!-- <img class="lozad" data-src="{{ asset('images/picto-client-plus.png' )}}" alt="picto-coche">         -->
                                                   <h4 class="hhhhh ololol gr">Succès</h4>
                                                   <!-- <span class="ololol">(Bloqué)</span> -->
                                                   <!-- <span>4</span>                    -->
                                                </div>
                                                <!-- <span class="violet">Les champs suivis de * sont obligatoires</span>        -->
                                                <!-- <span data-show-popin="#popin-cmt-ouvrir">Comment ouvrir un compte en ligne ?</span>  
                                                   <span class="green"><i class="icon icon-check"></i>Remplissez votre formulaire en toute            sécurité</span>      -->
                                             </div>
                                             <div class="section-ouverture__formulaire-info kw__border">
                                                <div class="section-ouverture__formulaire-instruction-bloc col-4">
                                                   <!-- <img class="lozad" data-src="{{ asset('images/picto-ordi-coche.svg' )}}" alt="picto-coche">         -->
                                                   <!-- <span>1</span>      -->
                                                   <h4>20/04/2020</h4>
                                                   <!-- <p>aaaaaaaaaaaa</p> -->
                                                </div>
                                                <div class="section-ouverture__formulaire-instruction-bloc col-4">
                                                   <!-- <img class="lozad" data-src="{{ asset('images/picto-telecharge-doc.png' )}}" alt="picto-coche">         -->
                                                   <!-- <span>2</span>            -->
                                                   <h4>Virement</h4>
                                                </div>
                                                <div class="section-ouverture__formulaire-instruction-bloc col-4">
                                                   <!-- <img class="lozad" data-src="{{ asset('images/picto-retrait.svg' )}}" alt="picto-coche">          -->
                                                   <!-- <span>3</span>          -->
                                                   <h4>1,68 €</h4>
                                                </div>
                                                <div class="section-ouverture__formulaire-instruction-bloc col-4">
                                                   <!-- <img class="lozad" data-src="{{ asset('images/picto-client-plus.png' )}}" alt="picto-coche">         -->
                                                   <h4 class="hhhhh"> {{ Auth::user()->solde }}</h4>
                                                   <!-- <span class="ololol">(Bloqué)</span> -->
                                                   <!-- <span>4</span>                    -->
                                                </div>
                                                <div class="section-ouverture__formulaire-instruction-bloc col-4">
                                                   <!-- <img class="lozad" data-src="{{ asset('images/picto-client-plus.png' )}}" alt="picto-coche">         -->
                                                   <h4 class="hhhhh ololol">Bloqué</h4>
                                                   <!-- <span class="ololol">(Bloqué)</span> -->
                                                   <!-- <span>4</span>                    -->
                                                </div>
                                                <!-- <span class="violet">Les champs suivis de * sont obligatoires</span>        -->
                                                <!-- <span data-show-popin="#popin-cmt-ouvrir">Comment ouvrir un compte en ligne ?</span>  
                                                   <span class="green"><i class="icon icon-check"></i>Remplissez votre formulaire en toute            sécurité</span>      -->
                                             </div>
                                             <!-- <h4 class="hhhhh ololol">SOLDE </h4>  -->
                                             <div class="titttt" id=""> SOLDE PRINCIPAL  <span class="ololol">(Bloqué)</span> </div>
                                             <div class="solde_princ" id="home_aqui">  {{ Auth::user()->solde }}</div>
                                             <div id="nextoutils_iframe_json_eer-rapide_EERI" class="section-ouverture__formulaire-container hidden nextoutilsLoaded">
                                             </div>
                                          </aside>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="section-ouverture home-section">
                                    <h2 class="home-title">Devenez client BNP Paribas</h2>
                                    <p class="home-title">        Chez BNP Paribas, nos services 100% connectés vous permettent d’ouvrir        un compte en ligne en quelques clics et de le gérer à distance depuis        votre ordinateur,<br>        votre tablette ou votre smartphone. Vous avez le choix de la gestion de        votre compte : depuis l'agence la plus proche de chez vous ou en ligne.      </p>
                                    <div class="section-ouverture__avantages">
                                       <div class="section-ouverture__avantages-container col-50">
                                          <div class="section-ouverture__avantages-block">
                                             <div class="section-ouverture__avantages-picto-container">
                                                <img class="lozad" data-src="{{ asset('images/picto-agence.svg' )}}" alt="">      
                                             </div>
                                             <p class="p__kw">près de 2000<br>agences            </p>
                                          </div>
                                          <div class="section-ouverture__avantages-block">
                                             <div class="section-ouverture__avantages-picto-container">
                                                <img class="lozad" data-src="{{ asset('images/picto-conseiller.svg' )}}" alt="">    
                                             </div>
                                             <p class="p__kw">Conseiller<br>dédié            </p>
                                          </div>
                                       </div>
                                       <div class="section-ouverture__avantages-container col-50">
                                          <div class="section-ouverture__avantages-block">
                                             <div class="section-ouverture__avantages-picto-container">
                                                <img class="lozad" data-src="{{ asset('images/picto-ampoule.svg' )}}" alt="">   
                                             </div>
                                             <p class="p__kw">l'expertise<br>bnp paribas            </p>
                                          </div>
                                          <div class="section-ouverture__avantages-block">
                                             <div class="section-ouverture__avantages-picto-container">
                                                <img class="lozad" data-src="{{ asset('images/picto-cible.svg' )}}" alt="">       
                                             </div>
                                             <p class="p__kw">un accès<br>privilégié            </p>
                                          </div>
                                       </div>
                                    </div>
                                    <aside class="section-ouverture__formulaire">
                                       <h2 class="hkw__">         
                                          <img class="lozad" data-src="{{ asset('images/horloge.svg' )}}" alt="">     
                                               <span>Simple et rapide, ouvrez votre compte de dépôt !</span>        
                                       </h2>
                                       <div class="section-ouverture__formulaire-instruction">
                                          <div class="section-ouverture__formulaire-instruction-bloc col-4 kw__pad">
                                             <img class="lozad" data-src="{{ asset('images/picto-ordi-coche.svg' )}}" alt="picto-coche">        
                                             <span>1</span>            
                                             <h4>Remplissez votre formulaire en ligne</h4>
                                          </div>
                                          <div class="section-ouverture__formulaire-instruction-bloc col-4 kw__pad">
                                             <img class="lozad" data-src="{{ asset('images/picto-telecharge-doc.png' )}}" alt="picto-coche">        
                                             <span>2</span>            
                                             <h4>Déposez vos pièces justificatives</h4>
                                          </div>
                                          <div class="section-ouverture__formulaire-instruction-bloc col-4 kw__pad">
                                             <img class="lozad" data-src="{{ asset('images/picto-retrait.svg' )}}" alt="picto-coche">         
                                             <span>3</span>            
                                             <h4>Réalisez un versement initial</h4>
                                          </div>
                                          <div class="section-ouverture__formulaire-instruction-bloc col-4 kw__pad">
                                             <img class="lozad" data-src="{{ asset('images/picto-client-plus.png' )}}" alt="picto-coche">        
                                             <span>4</span>            
                                             <h4>Devenez client<br>BNP Paribas</h4>
                                          </div>
                                       </div>
                                       <div class="section-ouverture__formulaire-info">     
                                          <span class="violet">Les champs suivis de * sont obligatoires</span>       
                                          <span data-show-popin="#popin-cmt-ouvrir">Comment ouvrir un compte en ligne ?</span>  
                                          <span class="green"><i class="icon icon-check"></i>Remplissez votre formulaire en toute            sécurité</span>     
                                       </div>
                                       <button class="btn-primary btn-primary--green" id="home_aqui">          J'ouvre un compte        </button>     
                                       <div id="nextoutils_iframe_json_eer-rapide_EERI" class="section-ouverture__formulaire-container hidden nextoutilsLoaded">
                                       </div>
                                    </aside>
                                 </div>
                                 <div id="popin-cmt-ouvrir" class="popin popin-alert ouvrir-un-compte hidden">
                                    <a class="close popin-close">?</a>      
                                    <div class="popin-content">
                                       <h4 class="title">          Demander l'ouverture d'un compte de dépôt en ligne        </h4>
                                       <ul>
                                          <li>
                                             <img class="picto-step lozad" data-src="/rsc/contrib/minisite/landing/img/ouvrir-un-compte-rapidement/ecran.png' )}}" alt="image remplissez votre formulaire en ligne">            
                                             <p>Remplissez le formulaire en toute sécurité et en quelques minutes.            </p>
                                          </li>
                                          <li>
                                             <img class="picto-step lozad" data-src="/rsc/contrib/minisite/landing/img/ouvrir-un-compte-rapidement/depot.png' )}}" alt="image déposez vos pièces justificatives">            
                                             <p>Téléchargez les justificatifs demandés sur notre espaceentièrement sécurisé. Déposez les versions numérisées de vosdocuments ou prenez-les en photo avec votre smartphone.<a href="https://mabanque.bnpparibas/rsc/contrib/document/particuliers/produits/votre-banque/Vos-Justificatifs-BNP-Paribas.pdf" target="_blank" title="Voir la liste des pièces justificatives">Voir la liste des pièces justificatives</a>            </p>
                                          </li>
                                          <li>
                                             <img class="picto-step lozad" data-src="/rsc/contrib/minisite/landing/img/ouvrir-un-compte-rapidement/sign.png' )}}" alt="image signer votre contrat en ligne">            
                                             <p>Plus besoin de vous déplacer, vous signez votre contrat en ligne.            </p>
                                          </li>
                                          <li>
                                             <img class="picto-step lozad" data-src="/rsc/contrib/minisite/landing/img/ouvrir-un-compte-rapidement/versement.png' )}}" alt="image réalisez votre versement initial">            
                                             <p>Finalisez votre demande d’ouverture de compte avec un versementinitial de 300€ minimum, en provenance d’un compte ouvert à votrenom dans une banque établie dans l’Espace Economique Européen ouun pays tiers équivalent et membre de la Zone SEPA.            </p>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </main>
                           </div>
                        </div>
                     </div>
                     <!--content stop-->
                  </div>
               </div>
               <div class="ls-cmp-wrap" id="w1410874521540">
                  <div class="iw_component" id="1410874521540">
                     <!--content start-->
                     <div id="wcm-l-">
                        <div class="wcm-richxml style-default "></div>
                     </div>
                     <!--content stop-->
                  </div>
               </div
                  >
            </div>
         </div>
         <div class="ls-row-clr">
         </div>
      </div>
   </div>
   @endsection