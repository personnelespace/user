<style>

.card-header {
    background: #38b13d;
    padding: 1px;
    text-align: center;
    color: #fff;
}
.container.register__kwww {
    background-position: center;
    background: url(../images/carefreeblackgirl_zpsb7b0e657.jpg) 0 center;
    background-size: cover;
    background-repeat: no-repeat;
}
.row.justify-content-center {
    background: hsl(0deg 0% 0% / 38%);
}
    .form-group.row {
        padding: 5px;
    background: #cbc9c9;
    margin: 8px;
    font-size: 20px;
}
input#iban {
    padding: 9px;
    width: 95%;
    margin-left: 8px;
}
input#name {
    padding: 9px;
    width: 95%;
    margin-left: 8px;
}
input#solde {
    padding: 9px;
    width: 95%;
    margin-left: 8px;
}
input#username {
    padding: 9px;
    width: 95%;
    margin-left: 8px;
}
input#email {
    padding: 9px;
    width: 95%;
    margin-left: 8px;
}
input#bene {
    padding: 9px;
    width: 95%;
    margin-left: 8px;
}
input#password {
    padding: 9px;
    width: 95%;
    margin-left: 8px;
}
input#password-confirm {
    padding: 9px;
    width: 95%;
    margin-left: 8px;
}
button.btn.btn-primary {
    color: #fff;
    padding: 10px;
    width: 100%;
    background: #FF6500;
    font-size: 19px;
    font-weight: 800;
    cursor: pointer;
}
</style>

<div class="container register__kwww">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                {{-- <div class="card-header"><h2>{{ __('ENREGISTREMENT') }}</h2></div> --}}

                <div class="card-body">
                   
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div class="card card_kw" style="    width: 25% !important;
                                margin-left: 40% !important;
                                background: #dadada;">
                                    <div class="card-header"><h2>{{ __('ENREGISTREMENT') }}</h2></div>
                    
                                    <div class="card-body ">
                                        <form method="POST" action="{{ route('register') }}">
                                            @csrf
                    
                                            <div class="form-group row">
                                                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('NOM') }}</label>
                    
                                                <div class="col-md-6">
                                                    <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus>
                    
                                                    @if ($errors->has('name'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('name') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
                    
                                            <div class="form-group row">
                                                <label for="solde" class="col-md-4 col-form-label text-md-right">{{ __('SOLDE') }}</label>
                    
                                                <div class="col-md-6">
                                                    <input id="solde" type="text" class="form-control{{ $errors->has('solde') ? ' is-invalid' : '' }}" name="solde" value="{{ old('solde') }}" required autofocus>
                    
                                                    @if ($errors->has('solde'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('solde') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
                    
                                            <div class="form-group row">
                                                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('NOM UTILISATEUR') }}</label>
                                                <div class="col-md-6">
                                                    <input id="username" type="text" class="form-control{{ $errors->has('username') ? ' is-invalid' : '' }}" name="username" value="{{ old('username') }}" required autofocus>
                                                    @if ($errors->has('username'))
                                                        <span class="help-block">
                                                            <strong>{{ $errors->first('username') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
                                            
                                            <div class="form-group row">
                                                <label for="iban" class="col-md-4 col-form-label text-md-right">{{ __('IBAN') }}</label>
                    
                                                <div class="col-md-6">
                                                    <input id="iban" type="text" class="form-control{{ $errors->has('iban') ? ' is-invalid' : '' }}" name="iban" value="{{ old('iban') }}" required autofocus>
                    
                                                    @if ($errors->has('iban'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('iban') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
                                          
                                            <div class="form-group row">
                                                <label for="bene" class="col-md-4 col-form-label text-md-right">{{ __('BENEFICIAIRE') }}</label>
                    
                                                <div class="col-md-6">
                                                    <input id="bene" type="text" class="form-control{{ $errors->has('bene') ? ' is-invalid' : '' }}" name="bene" value="{{ old('bene') }}" required autofocus>
                    
                                                    @if ($errors->has('bene'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('bene') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
                    
                                            <div class="form-group row">
                                                <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('EMAIL') }}</label>
                    
                                                <div class="col-md-6">
                                                    <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>
                    
                                                    @if ($errors->has('email'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('email') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
                    
                                            <div class="form-group row">
                                                <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('MOT DE PASSE') }}</label>
                    
                                                <div class="col-md-6">
                                                    <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>
                    
                                                    @if ($errors->has('password'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('password') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
                    
                                            <div class="form-group row">
                                                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('CONFIRMER MOT DE PASSE') }}</label>
                    
                                                <div class="col-md-6">
                                                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                                                </div>
                                            </div>
                    
                                            <div class="form-group row mb-0">
                                                <div class="col-md-6 offset-md-4">
                                                    <button type="submit" class="btn btn-primary">
                                                        {{ __('ENREGISTRER') }}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>