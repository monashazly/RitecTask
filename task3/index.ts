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
       totalBeforeTax : roundToNearest5Cents(totalBeforeTax),
       totalDiscount : roundToNearest5Cents(totalDiscount),
       totalAfterDiscount : roundToNearest5Cents(totalAfterDiscount),
       SST : roundToNearest5Cents(SST),
       totalService : roundToNearest5Cents(totalService)
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
        price : 10.55 ,
        taxable : false
    },
    {
        name : 'Item4',
        price : 20.46 ,
        taxable : true
    }
]

function roundToNearest5Cents(totalAmount:number):number {

    let totalInPiastres:number = totalAmount * 100;

    let roundedTotalInPiastres:number = Math.round(totalInPiastres / 5) * 5;

    let roundedTotalInEGP:number = roundedTotalInPiastres / 100;

    return roundedTotalInEGP;
}

console.log(calculateTotals(20,items))

