type Item = {
    name: string;
    price: number;
    taxable: boolean;
};

function calculateTotals(discount:number , items:Item[] ):{
   totalBeforeTax:number ,
   totalDiscount:number,
   totalAfterDiscount:number,
   SST:number,
   totalService:number
}{
    let totalBeforeTax = 0
    let totalOfTaxable = 0 
    let totalOfNonTaxable = 0 
    let totalDiscount = 0
    let totalAfterDiscount = 0;
    let SST = 0
    let totalService = 0

    items.forEach((item:Item)=>{
        if(item.taxable) totalOfTaxable = totalOfTaxable + item.price 
        if(!item.taxable) totalOfNonTaxable = totalOfNonTaxable + item.price
    })
     
    totalBeforeTax = totalOfTaxable + totalOfNonTaxable
    totalDiscount = (totalBeforeTax * discount)/100
    totalAfterDiscount = totalBeforeTax - totalDiscount
    SST = totalOfTaxable * 0.06
    totalService = totalOfTaxable * 0.1

    return {
       totalBeforeTax : Math.round(totalBeforeTax),
       totalDiscount : Math.round(totalDiscount),
       totalAfterDiscount : Math.round(totalAfterDiscount),
       SST : Math.round(SST),
       totalService: Math.round(totalService)
    }
}

var items:Item[] = [
    {
        name : 'Item1',
        price : 20 ,
        taxable : true
    },
    {
        name : 'Item2',
        price : 50 ,
        taxable : true
    },
    {
        name : 'Item3',
        price : 10.5 ,
        taxable : false
    },
    {
        name : 'Item4',
        price : 20 ,
        taxable : true
    }
]

console.log(calculateTotals( 20 , items ))