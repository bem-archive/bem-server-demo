//process.env.YENV = 'production';

MAKE.decl('Arch', {

    getLibraries: function() {

        return {
            'bem-bl': {
                type: 'git',
                url: 'git://github.com/bem/bem-bl.git',
                treeish: '0.3'
            },
            'bootstrap-bl': {
                type: 'git',
                url: 'git://github.com/tadatuta/bootstrap-bl.git'
            }
        };
    }

});
