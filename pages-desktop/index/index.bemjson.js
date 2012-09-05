({
    block: 'b-page',
    title: 'BEM Server Motivator',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' }
    ],
    content: [
        {
            block: 'content',
            content: [
                {
                    block: 'carousel',
                    content: [
                        {
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'motivator',
                                            content: [
                                                {elem: 'img', elemMods: {theme: 'bem'}},
                                                {elem: 'slogan', content: 'BEM SERVER'},
                                                {elem: 'tagline', content: 'Делай BEM!'}
                                        ]}
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'motivator',
                                            content: [
                                                {elem: 'img', elemMods: {theme: 'another'}},
                                                {elem: 'slogan', content: 'BATMAN'},
                                                {elem: 'tagline', content: 'Человек-летучая мышь - мрачный крепыш!'}
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'motivator',
                                            content: [
                                                {elem: 'img', elemMods: {theme: 'america'}},
                                                {elem: 'slogan', content: 'CAPTAIN AMERICA'},
                                                {elem: 'tagline', content: 'Капитан Америка - у всех истерика!'}
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'motivator',
                                            content: [
                                                {elem: 'img', elemMods: {theme: 'iron'}},
                                                {elem: 'slogan', content: 'IRONMAN'},
                                                {elem: 'tagline', content: 'Железный человек - в шлеме на век!'}
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'motivator',
                                            content: [
                                                {elem: 'img', elemMods: {theme: 'brain'}},
                                                {elem: 'slogan', content: '???'},
                                                {elem: 'tagline', content: 'А этого никто не знает'}
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
