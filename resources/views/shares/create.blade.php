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
          <div class="card uper">
            <div class="card-header">
              Add Share
            </div>
            <div class="card-body">
              @if ($errors->any())
                <div class="alert alert-danger">
                  <ul>
                      @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                      @endforeach
                  </ul>
                </div><br />
              @endif
                <form method="post" action="{{ route('shares.store') }}">
                    <div class="form-group">
                        @csrf
                        <label for="name">Share Name:</label>
                        <input type="text" class="form-control" name="share_name"/>
                    </div>
                    <div class="form-group">
                        <label for="price">Share Price :</label>
                        <input type="text" class="form-control" name="share_price"/>
                    </div>
                    <div class="form-group">
                        <label for="quantity">Share Quantity:</label>
                        <input type="text" class="form-control" name="share_qty"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
            </div>
          </div>
          <span id="public"></span>
       </section>
  </div>
</main>
<!--************************************
   Main End
   *************************************-->
@endsection

