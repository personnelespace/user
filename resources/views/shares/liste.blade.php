@extends('layouts.layout')
@section('title')
{{ __('app.client') }}
@endsection
@section('mainContent')
<!--************************************
   Inner Banner Start
   *************************************-->
<div id="tg-innerbanner" class="tg-innerbanner tg-haslayout">
   <div class="tg-parallaximg" data-appear-top-offset="600" data-parallax="scroll">
      <img src="{{ asset('images/parallax/bgparallax-03.jpg')}}">
   </div>
   <div class="tg-sectionhead _kw_center">
      <div class="tg-sectiontitle">
         <h2> </h2>
         <h3 class="kw_h3_"><span class="kw_our">Our</span> {{ __('app.client') }}</h3>
      </div>
      <div class="tg-description">
      </div>
   </div>
</div>
<!--************************************
   Inner Banner End
   *************************************-->
<!--************************************
   Main Start
   *************************************-->
<main id="tg-main" class="tg-main tg-haslayout">
  <div class="container">
    <section class="tg-main-section tg-haslayout tg-relative">
     
        <style>
            .uper {
              margin-top: 40px;
            }
          </style>
          <div class="uper">
            @if(session()->get('success'))
              <div class="alert alert-success">
                {{ session()->get('success') }}  
              </div><br />
            @endif
            <table class="table table-striped">
              <thead>
                  <tr>
                    <td>ID</td>
                    <td>Stock Name</td>
                    <td>Stock Price</td>
                    <td>Stock Quantity</td>
                    <td colspan="2">Action</td>
                  </tr>
              </thead>
              <tbody>
                  @foreach($shares as $share)
                  <tr>
                      <td>{{$share->id}}</td>
                      <td>{{$share->share_name}}</td>
                      <td>{{$share->share_price}}</td>
                      <td>{{$share->share_qty}}</td>
                      <td><a href="{{ route('shares.edit',$share->id)}}" class="btn btn-primary">Edit</a></td>
                      <td>
                          <form action="{{ route('shares.destroy', $share->id)}}" method="post">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-danger" type="submit">Delete</button>
                          </form>
                      </td>
                  </tr>
                  @endforeach
              </tbody>
            </table>
          <div>
    </section>
  </div>
</main>
<!--************************************
   Main End
   *************************************-->
@endsection

