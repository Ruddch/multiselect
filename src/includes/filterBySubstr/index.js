import ru from "convert-layout/ru";
import tr from "../transliteration";

const isEn = (text) => {
    let result = false;
    for (let l in text) {
        if (/[a-z-A-Z]/.test(text[l])) {
            result = true;
            break;
        } else if (/[а-я-А-Я]/.test(text[l])) break;
    }
    return result;
}

const switchLayout = (text, en) => en
                             ? ru.fromEn(text) : ru.toEn(text);

const filterUsersBySubstr = (substr, users) => {
    substr = substr.toLowerCase();
    const en = isEn(substr);
    const transSubstr = tr(substr, en);
    const lsSubstr = switchLayout(substr, en);
    const transLsSubstr = tr(lsSubstr, !en);

    return users.filter(u => {
        const fullName = (u.name + ' ' + u.surname).toLowerCase();
        return fullName.includes(substr) || fullName.includes(lsSubstr)
               || fullName.includes(transSubstr) || fullName.includes(transLsSubstr)
    })
}

export default filterUsersBySubstr;
