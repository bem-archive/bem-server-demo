({
    block: 'b-page',
    title: 'Bem server motivator',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' },
    ],
    content:[
        {
            block: 'content',
            content: [
                {
                    block: 'motivator',
                    content: [
                        {
                            block: 'b-link',
                            url: 'https://github.com/bem/bem-tools',
                            mix: [{ block: 'motivator', elem: 'slogan' }],
                            content: 'bem server'
                        },
                        {
                            elem: 'tagline',
                            content: 'вундервафля'
                        }
                    ]
                },
                {
                    block: 'b-menu-horiz',
                    mods: { layout: 'normal' },
                    content: [
                        {
                            elem: 'item',
                            elemMods: { state: 'current' },
                            content: {
                                block: 'b-link',
                                mods: { pseudo: 'yes' },
                                url: 'qr',
                                mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],
                                content: 'QR'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                mods: { pseudo : 'yes' },
                                url: 'bem',
                                mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],
                                content: 'BEM'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                mods: { pseudo : 'yes' },
                                url: 'another',
                                mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],
                                content: 'Yet Another BEM'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                mods: { pseudo : 'yes' },
                                url: 'brain',
                                mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],
                                content: 'BEM my brain!'
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
