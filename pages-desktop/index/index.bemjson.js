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
                    block: 'carousel',
                    content: [
                        {
                            content: [
                                {
                                    elem: 'item',
                                    content: [{block: 'motivator', content: [{elem: 'img', elemMods: {theme:'bem'}}, {elem: 'tagline', content: 'Делай BEM!'}]}]
                                },
                                {
                                    elem: 'item',
                                    content: [{block: 'motivator', content: [{elem: 'img', elemMods: {theme:'another'}}, {elem: 'tagline', content: 'Человек-летучая мышь - мрачный крепыш!'}]}]
                                },
                                {
                                    elem: 'item',
                                    content: [{block: 'motivator', content: [{elem: 'img', elemMods: {theme:'america'}}, {elem: 'tagline', content: 'Капитан Америка - у всех истерика!'}]}]
                                },
                                {
                                    elem: 'item',
                                    content: [{block: 'motivator', content: [{elem: 'img', elemMods: {theme:'iron'}}, {elem: 'tagline', content: 'Железный человек - в шлеме на век!'}]}]
                                },
                                {
                                    elem: 'item',
                                    content: [{block: 'motivator', content: [{elem: 'img', elemMods: {theme:'brain'}}, {elem: 'tagline', content: 'А этого никто не знает'}]}]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
