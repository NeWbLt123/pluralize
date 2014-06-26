(function(global){
    var pluralize = global.pluralize = global.pluralize || {};
    var _langs = ["fr-ca", "en-ca"];
    
    var _lang = "en-ca";
    
    pluralize.lang = function(lang){
    	if(_langs.indexOf(lang) === -1) throw "Current language cannot be found in the available languages.";
        _lang = lang;    
    }
    
    pluralize.pluralizeSimple = function(word, count){
        if(_lang === "en-ca") return count === 1 ? word : word + 's';
        if(_lang === "fr-ca") return count < 2 ? word : word + 's';
        return word;
    }
    
})(window);
