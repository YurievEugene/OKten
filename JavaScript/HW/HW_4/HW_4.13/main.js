function exchange(sumUAH,currencyValues,exchangeCurrency){
    let result = 0;
    for (const item of currencyValues){
        if (item.currency === exchangeCurrency){
            result = sumUAH / item.value;
            break;
        }
    }
    return result;
}
const money = exchange(10000, [{currency:'USD', value:25}, {currency:'EUR', value:42}], 'USD');
console.log(money)