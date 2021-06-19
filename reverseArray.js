function reverseArray(arr){
    let start = 0;
    let end = arr.length - 1;

    while (start <= end){
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

console.log(reverseArray([2,3,4]))