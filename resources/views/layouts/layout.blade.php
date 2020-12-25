<!doctype html>
<html lang="{{ app()->getLocale() }}">
   <head>
      @include('includes.head')
      @yield('customCss')
   </head>
   <body>

         @include('includes.header')
         @yield('mainContent')
         @include('includes.footer')
     

         
      @include('includes.script')
      @yield('customScript')
   </body>
</html>