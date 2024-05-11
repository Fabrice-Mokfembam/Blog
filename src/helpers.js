

function countWords(string) {
    const requiredString =  string.split(' ').slice(0,14).join(' ');
    return requiredString;
}


export { countWords };