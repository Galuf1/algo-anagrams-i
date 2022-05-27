exports.isCharacterMatch = function(string1, string2) {
    const list1 = string1.toLowerCase().split("")
    let list2 = string2.toLowerCase().split("")

    for (let i = 0; i < list1.length -1; i++) {
        // const search = list2.find(x => x === list1[i]);
        let splice = list2.indexOf(list1[i])
        if (splice >= -1){
            list2 = list2.splice(splice,splice)
        } else {
            return false;
        }
    }
    return true

};
