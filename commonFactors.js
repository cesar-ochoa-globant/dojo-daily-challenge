function commonFactors(num1, num2) {
    const minNum = Math.min(num1, num2);
    
    const commonFactorsArr = [];
    
    for (let i = 1; i <= minNum; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            commonFactorsArr.push(i);
        }
    }
    
    return commonFactorsArr;
}

console.log(commonFactors(10, 20));
console.log(commonFactors(7, 9)); 
