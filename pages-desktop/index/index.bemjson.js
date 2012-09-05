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
                            block: 'carousel',
                            mix: [{ block: 'motivator', elem: 'img' }],
                            content: [
                                {
                                    elem: 'item',
                                    elemMods: { theme: 'qr' }
                                },
                                {
                                    elem: 'item',
                                    elemMods: { theme: 'bem' }
                                },
                                {
                                    elem: 'item',
                                    elemMods: { theme: 'another' }
                                },
                                {
                                    elem: 'item',
                                    elemMods: { theme: 'brain' }
                                }
                            ]
                        },
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
                }
            ]
        }
    ]
})
