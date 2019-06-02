const rus = 'щ ш ч ц ю я ё ж ъ ы э а б в г д е з и й к л м н о п р с т у ф х ь'.split(' ');
const eng = 'shh sh ch cz yu ya yo zh `` y` e` a b v g d e z i j k l m n o p r s t u f x `'.split(' ');

const transliterate = (text, en) => {
    rus.forEach((l, i) => {
        text = text.split(
            en ? eng[i] : rus[i]
        ).join(
            en ? rus[i] : eng[i]
        );
    });
    return text;
};

export default transliterate

