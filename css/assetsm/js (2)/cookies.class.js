(function(){
    var cookie = {
        write : function (cname, cvalue, exdays) { 
            var d = new Date(); 
            d.setTime(d.getTime() + (exdays*24*60*60*1000)); 
            var expires = "expires="+d.toUTCString(); 
            document.cookie = cname + "=" + cvalue + ";domain="+document.location.hostname.split('.').slice(-2).join('.')+";path=/; " + expires; 
        }, 
        read : function (name) { 
            var tab=document.cookie.split(";");
            regex=RegExp("^\\s*"+name+"=\\s*(.*?)\\s*$");
            for(var i=0;i<tab.length;i++){
                var tmp=tab[i].match(regex);
                if(tmp)
                    return tmp[1];
            }
            return "";
        }, 
        delete : function (cname) { 
            var d = new Date(); 
            d.setTime(d.getTime() - 1000); 
            var expires = "expires="+d.toUTCString(); 
            document.cookie = cname + "=; " + expires;
        } 
    }
    function replaceAt(string, index, replace) {
        return string.substring(0, index) + replace + string.substring(index + 1);
    }

    function GESTIONCOOKIES() {
        this._cookieKey = "cookie202003";
        this._exdays = 183;
        this.cookie = cookie;
        this._value = cookie.read(this._cookieKey);
        if (this._value.length != 5)
            this._value = "1    ";
        this.cookieNavDisable();
    }
    GESTIONCOOKIES.prototype.cookieNavDisable = function() {
        /hellobank.fr/.test(document.location.hostname) ? cookie.write("cookiepopinok", "01") : cookie.write("cookieNav", "0");
    }
    GESTIONCOOKIES.prototype.celebrus = function(value) {
        if (value === undefined)
            cookie.write("BDDFCSAP3P", this.publicite() === true ? "optedIn" : "optedOut", this._exdays);
        else
        {
            var tmp = cookie.read("BDDFCSAP3P");
            if (!tmp)
                cookie.write("BDDFCSAP3P", value ? "optedIn" : "optedOut", this._exdays);
        }
    }
    GESTIONCOOKIES.prototype.save = function() {
        cookie.write(this._cookieKey, this._value, this._exdays);
        this.celebrus();
    }
    GESTIONCOOKIES.prototype.technique = function(value) {
        var index=0;
        return this._value[index]=="1"?true:(this._value[index]=="0"?false:undefined);
    }
    GESTIONCOOKIES.prototype.fonctionalite = function(value) {
        var index=1;
        if (value === undefined)
            return this._value[index]=="1"?true:(this._value[index]=="0"?false:undefined);
        else
            this._value = replaceAt(this._value, index, (value === "1" ? "1" : "0"));
    }
    GESTIONCOOKIES.prototype.audience = function(value) {
        var index=2;
        if (value === undefined)
            return this._value[index]=="1"?true:(this._value[index]=="0"?false:undefined);
        else
            this._value = replaceAt(this._value, index, (value === "1" ? "1" : "0"));
    }
    GESTIONCOOKIES.prototype.publicite = function(value) {
        var index = 3;
        if (value === undefined)
            return this._value[index]=="1"?true:(this._value[index]=="0"?false:undefined);
        else
            this._value = replaceAt(this._value, index, (value === "1" ? "1" : "0"));
    }
    GESTIONCOOKIES.prototype.reseauxSociaux = function(value) {
        var index=4;
        if (value === undefined)
            return this._value[index]=="1"?true:(this._value[index]=="0"?false:undefined);
        else
            this._value = replaceAt(this._value, index, (value === "1" ? "1" : "0"));
    }
    GESTIONCOOKIES.prototype.valid = function() {
        return /(0|1){5}/.test(this._value);
    }
    GESTIONCOOKIES.prototype.getQueryParameter = function() {
        var qp = 'privacy=';
        qp+= +this.technique();
        qp+= +this.fonctionalite();
        qp+= +this.audience();
        qp+= +this.publicite();
        qp+= +this.reseauxSociaux();
        return qp;
    }
    if (!window.bnpp)
        window.bnpp = {};
    window.bnpp.gestioncookies = new GESTIONCOOKIES();
})()
