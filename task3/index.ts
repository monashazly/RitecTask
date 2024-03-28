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
    let totalBeforeTax = 0;
    let totalDiscount = 0;
    let totalAfterDiscount = 0;
    items.forEach((item:Item)=>{
        totalBeforeTax = totalBeforeTax + item.price 
    })

    totalDiscount = (totalBeforeTax * discount)/100
    totalAfterDiscount = totalBeforeTax - totalDiscount

    return {
       totalBeforeTax,
       totalDiscount,
       totalAfterDiscount,
       SST:55,
       totalService:55
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