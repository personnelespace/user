function initNousTrouver(item, monObj) {
    DisplayMap(item, monObj);
}

function DisplayMap(item, monObj, tabAgence, adr, crit) {
    var src = "https://agences.bnpparibas/";
    if ( /*ENVIRONNEMENT == "PREVIEW" ||*/ GetURLParameter("mode") == "preview")
        src = "https://agencesbnpp.mosaic.fr/";
    var typeCarte = "nextagence/?v2=1";
    if ((/-bpf.bnpparibas/.test(document.location) || /privee.bnpparibas/.test(document.location)) && GetURLParameter("carte") != "retail")
        typeCarte = "nextagencebpf/";
    if ((/-pro.bnpparibas/.test(document.location) || /pro.bnpparibas/.test(document.location)) && GetURLParameter("carte") != "retail")
        typeCarte += (typeCarte.indexOf("?") >= 0 ? "&" : "?") + "crit=conseil_professionnel";
    src += typeCarte;
    if (GetURLParameter("agence")) {
        if (GetURLParameter("agence").match(/^\d+$/))
            src += (src.indexOf("?") >= 0 ? "&" : "?") + "agence=" + GetURLParameter("agence");
        else
            src += (src.indexOf("?") >= 0 ? "&" : "?") + "adr=" + GetURLParameter("agence");
    } else if (GetURLParameter("cde"))
        src += (src.indexOf("?") >= 0 ? "&" : "?") + "adr=" + GetURLParameter("cde");
    else if (adr)
        src += (src.indexOf("?") >= 0 ? "&" : "?") + "adr=" + adr;
    if (tabAgence)
        src += (src.indexOf("?") >= 0 ? "&" : "?") + "selag=" + tabAgence.join(',');
    if (crit)
        src += (src.indexOf("?") >= 0 ? "&" : "?") + "crit=" + crit;
    var monIframe = jQuery("<iframe width='100%'></iframe>");
    monIframe.css('min-height', '499px');
    monIframe.css('height', '499px');
    monIframe.attr('src', src);
    monIframe.load(function() {
        monIframe.css('min-height', '500px');
        monIframe.css('height', '500px');
    });
    jQuery("#" + item).empty().append(monIframe);
    jQuery('iframe').iFrameResize();
    OApp.displayOutil(item);
}

function initNousTrouver_ClienteleInternationale(item, monObj) {
    DisplayMap(item, monObj, null, null, "agence_nonresident");
}

function initNousTrouver_ClienteleInternationaleParis(item, monObj) {

    //var tabAgence = [567, 2688, 2712, 2839, 2861, 2881, 3092];
    var tabAgence = [3368, 3371, 3369, 3367, 3363, 2712, 3581, 3362, 2688, 3361, 3360, 2839, 567];
    DisplayMap(item, monObj, tabAgence, null, "agence_nonresident");
}

function initNousTrouver_ParlonsCoeur(item, monObj) {

    //var tabAgence = [567, 2688, 2712, 2839, 2861, 2881, 3092];
    var tabAgence = [
		'parlons-coeur'
		];

    DisplayMap(item, monObj, tabAgence);
}

function initNousTrouver_Parrainage(item, monObj) {

    var tabAgence = [515, 530, 531, 532, 559, 560, 563, 564, 565, 572, 896, 901, 923, 1020, 1029, 1090, 1091, 1324, 1343, 1376, 1389, 1390, 1397, 1614, 1642, 1716, 1823, 2102, 2263, 2293, 2360, 2627, 3, 71, 186, 188, 195, 199, 206, 233, 234, 235, 264, 265, 271, 275, 280, 283, 379, 558, 930, 1051, 1086, 1123, 1344, 1462, 1463, 1465, 1589, 1673, 1776, 1787, 1854, 1949, 1964, 1978, 2085, 2108, 2268, 2309, 2352, 2379, 2556, 2608, 2648, 2726, 2805, 3050, 3095, 601, 614, 615, 616, 620, 676, 677, 700, 701, 702, 706, 1005, 1105, 1267, 1381, 1917, 2072, 2289, 2328, 2372, 2373, 2429, 2473, 2498, 2590, 2591, 2657, 2658, 2659, 2813, 2828, 127, 170, 177, 733, 761, 858, 1470, 1515, 1574, 1683, 1819, 1830, 1856, 1885, 2025, 2131, 2137, 2164, 2216, 2766, 2949, 55, 167, 431, 610, 611, 617, 618, 619, 660, 661, 678, 679, 680, 681, 686, 687, 692, 1019, 1097, 1243, 1285, 1443, 1742, 1779, 1833, 1943, 1950, 1996, 2103, 2234, 2338, 2494, 2809, 2812, 42, 187, 189, 375, 387, 577, 741, 809, 817, 969, 988, 1353, 1471, 1502, 1557, 1657, 1682, 1697, 1763, 1841, 62, 158, 162, 164, 295, 759, 810, 816, 874, 894, 895, 984, 1237, 1478, 1513, 1533, 1626, 1861, 1886, 2109, 2139, 2761, 273, 414, 416, 417, 418, 419, 421, 422, 423, 424, 426, 427, 428, 429, 430, 451, 452, 453, 454, 457, 458, 460, 461, 926, 1006, 1007, 1042, 1070, 1126, 1142, 1145, 1153, 1172, 1221, 1227, 1228, 1248, 1249, 1250, 1262, 1449, 1482, 1725, 1855, 2009, 2417, 2752, 2782, 2810, 3099, 197, 209, 244, 245, 247, 258, 259, 262, 288, 353, 1024, 1032, 1055, 1056, 1078, 1093, 1312, 1348, 1415, 1607, 1750, 1762, 2106, 2285, 2423, 2441, 2534, 2660, 2697, 2700, 2701, 2783, 2807, 3009, 3011, 3020, 3024, 3043, 3046, 3058, 3065, 3067, 3074, 3077, 3086, 3104, 13, 301, 302, 303, 304, 312, 313, 359, 363, 1012, 1014, 1018, 1061, 1114, 1209, 1278, 1286, 1556, 1800, 1898, 1931, 1965, 2005, 2030, 2191, 2288, 2732];
    DisplayMap(item, monObj, tabAgence);
}

function initNousTrouver_Recherche(item, monObj) {
    if ($("body").hasClass("pro"))
        $("#"+item+" #rechercherAgence form").attr("action", "/fr/banque-contacts-pro/nous-trouver");
    var service = new google.maps.places.AutocompleteService();
    $("input[name=agence]").autocomplete({
        autoFocus: !0,
        source: function(request, response) {
            var aPlaces = [],
                params = {
                    input: request.term,
                    types: [],
                    componentRestrictions: {
                        country: "fr"
                    }
                };
            service.getPlacePredictions(params, function(results, status) {
                console.log(results);
                $.each(results, function(i, result) {
                    aPlaces.push({
                        label: result.description,
                        value: result.description,
                        types: result.types,
                        main_text: result.structured_formatting.main_text
                    });
                }), response(aPlaces);
            });
        },
        minLength: 3,
        select: function(event, ui) {
            $("input[name=agence]").val(ui.item.value);
            $('#rechercherAgence form').submit();
        }
    });
}

function PrendreRDV(codeAgence) {
    console.log(codeAgence);
    if (OApp.isConnected()) {
        var cb = jQuery("#nextcallback_BAQ-Trouver-Agence");
        if (cb.length == 0)
            cb = jQuery("#nextcallback_PRO-Trouver-Agence");
        cb.attr('data-agence', codeAgence);
        cb.click();
    } else {
        var cb = jQuery("#nextcallback_Prospect-Trouver-Agence");
        if (cb.length == 0)
            cb = jQuery("#nextcallback_PRO-Trouver-Agence-Prospect");
        cb.attr('data-agence', codeAgence);
        cb.click();
    }

}