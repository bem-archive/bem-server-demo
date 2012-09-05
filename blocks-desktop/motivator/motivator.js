BEM.DOM.decl('motivator',
{
    onSetMod: {
        js: function() {
            var motivator = this;

            this.findBlockOutside('b-page').findBlockInside('b-menu-horiz').on('current', function(e, data) {
                motivator.setMod('theme', this.findBlockInside(data.current, 'b-link').domElem.attr('href'));
            });
        }
    }
});