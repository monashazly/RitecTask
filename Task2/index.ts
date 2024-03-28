
const names:string[] = [ 'Mona' , 'shazly', 'tarek', 'walid', 'mona', 'nour', 'noha', 'kareem' , 'amir']
const lowerCaseNames = names.map(name => name.toLowerCase());
const seenNames:string[] = []
const sortedNames:string[] = lowerCaseNames.sort()


for (const name of sortedNames){
    
    if(name.length > 255) break;

    if( name.includes('a') && !seenNames.includes(name) ) console.log(name)
    
    seenNames.push(name)

}




