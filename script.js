// 7
solution = sequence => {
    let errors = 0;
        for(i = 0; i<sequence.length;i++) {
            if((sequence[i]>=sequence[i+1])||((sequence[i-2]>=sequence[i]&&sequence[i-1]>=sequence[i+1]))) errors++
        } return(errors==0||errors==1)
    }

// 8
function solution(matrix) {
    let sum = 0;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++) {
            if(matrix[i][j] === 0 && i+1 < matrix.length) matrix[i+1][j] = 0
            sum += matrix[i][j]
        } 
    } return sum
}

//9
function solution(inputArray) {
    let sum = 0; 
    let max = 0;
    let newArr = [];
    for(i=0;i<inputArray.length;i++) {
        if(inputArray[i].length > max) {
            max = inputArray[i].length
        }
    }
    for(i=0;i<inputArray.length;i++) {
        if(inputArray[i].length == max) newArr.push(inputArray[i])
    } return newArr
}

//10
function solution(s1, s2) {
    let sum = 0;
    let arr1 = s1.split('');
    let arr2 = s2.split('');
    for (let i=0; i<arr1.length; i++) {
        let index = arr2.indexOf(arr1[i]);
        if (index >= 0) {
            arr2.splice(index, 1);
            sum += 1
        }
    } console.log(arr1, arr2)

    return sum
}

//11
function solution(n) {
    let arr = n.toString().split('')
    sum1 = 0,
    sum2 = 0;
    for(i = 0;i<(arr.length-1)/2;i++) {
        sum1+=+arr[i]
    }
    for(j = arr.length/2;j<arr.length;j++) {
        sum2+=+arr[j]
    } console.log(sum1, sum2)
    return (sum1==sum2)
}

//12
