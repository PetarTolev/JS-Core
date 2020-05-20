function sortArray(array, order){
    const asc = (a, b) => a - b;
    const desc = (a, b) => b - a;
    
    return order == 'asc' ? array.sort(asc) : array.sort(desc);
}