const sastrawi = require('sastrawijs');

const kataKasar = [
    'anjing',
    'kontol',
    'memek',
    'jembut',
    'Anjing',
    'goblok',
    'Goblok',
    'Gvlk',
    'gvlk',
    'Ajg',
    'ajg',
    'Anjg',
    'anjng',
    'setang',
    'Setang',
    'anjay',
    'Anjay',
    'Anjayani',
    'anjayani',
    'anjir',
    'Anjir',
    'anjrit',
    'anjirt',
    'persetan',
    'badjingan',
    'bajingan',
    'jembud',
    'nigga',
    'miskin',
    'bego',
    'bodoh',
    'bodo',
    'tolol',
    'tai',
    'bangsat',
    'njir',
    'njing',
    'shit',
    'fuck',
    'fvck',
    'bitch',
    'stfu',
    'anying',
    'any',
    'ngentot',
    'ngentod',
    'kentot',
    'kentod',
    'mother fucker',
    'gesekya',
    'asu',
    'asw',
    'telaso',
    'bgsd',
    'Bgsd',
    'bgst',
    'satang',
    'Satang'
    //Tambahin Sendiri
];

const inArray = (needle, haystack) => {
    let length = haystack.length;
    for(let i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

module.exports = cariKasar = (kata) => new Promise((resolve) => {
    let sentence = kata;
    let stemmer = new sastrawi.Stemmer();
    let tokenizer = new sastrawi.Tokenizer();
    let words = tokenizer.tokenize(sentence);
    for (word of words) {
        if(inArray(stemmer.stem(word), kataKasar)){
            resolve(true)
        }
    }
    resolve(false)
})
