@if(session('statut') == 'visitor' || session('statut') == 'user')
 <li {!! Request::is('contact/create') ? 'class="active"' : '' !!}>
   {!! link_to('contact/create', trans('front/site.contact')) !!}
 </li>
@endif