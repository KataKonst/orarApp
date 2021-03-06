var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
require('rxjs/add/operator/share');
require('rxjs/add/operator/map');
var WikipediaService = (function () {
    function WikipediaService(jsonp) {
        this.jsonp = jsonp;
    }
    WikipediaService.prototype.search = function (term) {
        var search = new http_1.URLSearchParams();
        search.set('action', 'opensearch');
        search.set('search', term);
        search.set('format', 'json');
        return this.jsonp.get("http://localhost:8080/create?name=dfsdfs&email=asdasd").map(function (x) { return x.text(); });
    };
    WikipediaService = __decorate([
        core_1.Injectable()
    ], WikipediaService);
    return WikipediaService;
})();
exports.WikipediaService = WikipediaService;
//# sourceMappingURL=DataService.js.map