
const names:string[] = [ 'Mona' , 'Shazly', 'Alice', 'Bob', 'mona', 'Charlie', 'David', 'Eve']
const iterations:number = names.length
const seenNames:string[] = []

for(let i:number = 0 ; i < iterations ; i++){
    const name = names[i] 

    if(name.length > 10) break ;

    if( name.toLocaleLowerCase().includes('a') && !seenNames.includes(name)){
        
        console.log(name)
    } 
    
    seenNames.push(name.toLocaleLowerCase())

}




