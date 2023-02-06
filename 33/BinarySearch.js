function BinarySearch(A,  X){
    let mid, right, left;
    right = A.length - 1;
    left = 0;
    console.log(right , left)
    if(A[left] > X) return -1
    if(A[right] < X) return -1
    
    while(left <= right){           // 不断更新左右边界的索引（实质是每次循环将待查元素减半，实现了O(logN)时间复杂度），直到左索引大于右索引
        mid = Math.floor((right + left)/2);
        console.log(left , right ,mid)
        if(A[mid] > X)
            right = mid-1;
        else if(A[mid] < X)
            left = mid+1;
        else
            return mid;
    }
    return -1;
}

console.log(BinarySearch([0,1,2,4,5,6,7], 0))