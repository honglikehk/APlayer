const langs = [
    { title: 'English', path: '/home', matchPath: /^\/(home|ecosystem|support)/ },
    { title: '简体中文', path: '/zh-Hans/', matchPath: /^\/zh-Hans/ },
];

docute.init({
    landing: 'landing.html',
    title: 'APlayer',
    repo: 'DIYgod/APlayer',
    twitter: 'DIYgod',
    'edit-link': 'https://github.com/MoePlayer/APlayer/tree/master/docs',
    nav: {
        default: [
            {
                title: 'Home', path: '/home'
            },
            {
                title: 'Ecosystem', path: '/ecosystem'
            },
            {
                title: 'Support APlayer', path: '/support'
            },
            {
                title: 'Languages', type: 'dropdown', items: langs
            }
        ],
        'zh-Hans': [
            {
                title: '首页', path: '/zh-Hans/'
            },
            {
                title: '生态', path: '/zh-Hans/ecosystem'
            },
            {
                title: '支持 APlayer', path: '/zh-Hans/support'
            },
            {
                title: '选择语言', type: 'dropdown', items: langs
            }
        ],
    },
    plugins: [
        docsearch({
            apiKey: '',
            indexName: 'aplayer',
            tags: ['english', 'zh-Hans'],
            url: 'https://aplayer.js.org'
        }),
        evanyou(),
        player()
    ]
});

function player () {
    return function (context) {
        context.event.on('landing:updated', function () {
            console.log('landing:updated');
            clearPlayer();
            aplayer1();
        });
        context.event.on('content:updated', function () {
            console.log('content:updated');
            clearPlayer();
            for (let i = 0; i < document.querySelectorAll('.load').length; i++) {
                document.querySelectorAll('.load')[i].addEventListener('click', function () {
                    window[this.parentElement.id] && window[this.parentElement.id]();
                });
            }
        });
    };
}

function clearPlayer () {
    for (let i = 0; i < 10; i++) {
        if (window['ap' + (i + 1)]) {
            window['ap' + (i + 1)].destroy();
        }
    }
}

function aplayer1 () {
    window.ap1 = new APlayer({
        container: document.getElementById('aplayer1'),
        theme: '#F57F17',
        lrc: 3,
        audio: [{
            name: '光るなら',
            artist: 'Goose house',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
            theme: '#ebd0c2'
        }, {
            name: 'トリカゴ',
            artist: 'XX:me',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.lrc',
            theme: '#46718b'
        }, {
            name: '前前前世',
            artist: 'RADWIMPS',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.lrc',
            theme: '#505d6b'
        }]
    });
}

function aplayer2 () {
    window.ap2 = new APlayer({
        container: document.getElementById('aplayer2'),
        audio: [{
            name: '光るなら',
            artist: 'Goose house',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
            theme: '#ebd0c2'
        }]
    });
}

function aplayer3 () {
    window.ap3 = new APlayer({
        container: document.getElementById('aplayer3'),
        mini: false,
        autoplay: false,
        loop: 'all',
        order: 'random',
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        listFolded: false,
        listMaxHeight: '90px',
        lrc: 3,
        audio: [{
            name: '光るなら',
            artist: 'Goose house',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
            theme: '#ebd0c2'
        }, {
            name: 'トリカゴ',
            artist: 'XX:me',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.lrc',
            theme: '#46718b'
        }, {
            name: '前前前世',
            artist: 'RADWIMPS',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.lrc',
            theme: '#505d6b'
        }]
    });
}

function aplayer4 () {
    window.ap4 = new APlayer({
        container: document.getElementById('aplayer4'),
        lrc: 3,
        audio: [{
            name: '光るなら',
            artist: 'Goose house',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
            lrc: "https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc",
            theme: '#ebd0c2'
        }]
    });
}

function aplayer5 () {
    window.ap5 = new APlayer({
        container: document.getElementById('aplayer5'),
        lrc: 3,
        audio: [{
            name: '光るなら',
            artist: 'Goose house',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
            theme: '#ebd0c2'
        }, {
            name: 'トリカゴ',
            artist: 'XX:me',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.lrc',
            theme: '#46718b'
        }, {
            name: '前前前世',
            artist: 'RADWIMPS',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.lrc',
            theme: '#505d6b'
        }]
    });
}

function aplayer6 () {
    window.ap6 = new APlayer({
        container: document.getElementById('aplayer6'),
        mini: true,
        audio: [{
            name: '光るなら',
            artist: 'Goose house',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
            theme: '#ebd0c2'
        }]
    });
}

function aplayer7 () {
    window.ap7 = new APlayer({
        container: document.getElementById('aplayer7'),
        theme: '#e9e9e9',
        audio: [{
            name: '光るなら',
            artist: 'Goose house',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
        }, {
            name: 'トリカゴ',
            artist: 'XX:me',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.jpg',
        }, {
            name: '前前前世',
            artist: 'RADWIMPS',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.jpg',
        }]
    });

    const colorThief = new ColorThief();
    window.ap7.on('switchaudio', function (index) {
        if (!window.ap7.options.audio[index].theme) {
            colorThief.getColorAsync(window.ap7.options.audio[index].cover, function (color) {
                window.ap7.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
            });
        }
    });
}