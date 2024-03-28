type Item = {
    name: string;
    price: number;
    taxable: boolean;
};

function calculateTotals(discount:number , items:Item[] ):{
   amountBeforeTax:number ,
   discount:number,
   amountAfterDiscount:number,
   SST:number,
   totalService:number
}{
    

    return {
        amountBeforeTax: 55,
       discount:55,
       amountAfterDiscount:55,
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