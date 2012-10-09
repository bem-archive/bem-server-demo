var extend = require('bem/lib/util').extend;

exports.getTechs = function() {
    return {
        'bemjson.js': '',
        'js': 'js-i',
        'bemhtml': '../../bem-bl/blocks-common/i-bem/bem/techs/bemhtml.js',
        'html': '../../bem-bl/blocks-common/i-bem/bem/techs/html'
    };
};

exports.getConfig = function() {
    return extend({}, this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
            '../../bem-bl/blocks-common',
            '../../bem-bl/blocks-desktop',
            '../../bootstrap-bl/blocks',
            '../../blocks-desktop'
        ])
    });
};
