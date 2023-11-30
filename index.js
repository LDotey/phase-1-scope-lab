var customerName = 'bob';
function upperCaseCustomerName(){
   

    customerName = customerName.toUpperCase();
}
     
function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
    return bestCustomer
}
const leastFavoriteCustomer = 'jim'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "troy"
    return leastFavoriteCustomer;

}