function checkMagazine(magazine, note) {
    if(note.length > magazine.length)
    return console.log('No');
    
    let map = {};
    for(let i = 0; i<magazine.length; i++){
        if(map[magazine[i]]){
            map[magazine[i]]++
        } else{
            map[magazine[i]] = 1
        }
    }

    for(let i = 0; i<note.length; i++){
        if(!map.hasOwnProperty(note[i]) || map[note[i]] < 1){
            return console.log('No')
        }
        map[note[i]]--
    }
console.log('Yes');
}
