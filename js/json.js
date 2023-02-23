const user = {id: 1, name: 'bappy mahmud', job: 'actor'} ;

const stringified =  JSON.stringify(user) ;
// console.log(user);
// console.log(stringified);


const shop = {
    owner:'bappy',
    adress:{
        street : 'taltola',
        city: 'dhaka',
        country: 'bangladesh'
    },
    products:['laptop', 'mic', 'monitor', 'keyboard'],
    revenue : 45000,
    isOpen: true ,
    isNew: false
}
console.log(shop);
const shopJSON = JSON.stringify(shop) ;
console.log(shopJSON);
const shopobj = JSON.parse(shopJSON) ;
console.log(shopobj);