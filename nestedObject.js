function findTextValue(obj) {
    if (!obj || typeof obj !== 'object') {
        return undefined;
    }

    if ('textId' in obj) {
        const textId = obj['textId'];
        if (obj.texts && textId in obj.texts) {
            return obj.texts[textId];
        }
    }

    for (let key in obj) {
        const result = findTextValue(obj[key]);
        if (result !== undefined) {
            return result;
        }
    }

    return undefined;
}

const rawData = {
    info1: {
        infon: {
            textId: 'globantId',
        },
        texts: {
            globantId2: 'GLOBANT>>',
            globantId: 'GLOBANT>',
        },
    },
};
const result = findTextValue(rawData);
console.log(result);
