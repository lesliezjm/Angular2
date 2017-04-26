/**
 * Created by Leslie on 2017/4/26.
 */
(function (app) {
    app.AppModule =
        ng.core.NgModule({
            imports: [ng.platformBrowser.BrowserModule],
            declarations: [app.AppComponent],
            bootstrap: [app.AppComponent]
        })
            .Class({
                constructor: function () {
                }
            });
})(window.app || (window.app = {}));