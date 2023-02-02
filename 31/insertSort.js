function insertSort(arr) {
    //假设第0元素是有序序列，第1元素之后是无序的序列。从第1元素开始依次将无序序列的元素插入到有序序列中
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            //取出无序序列中需要插入的第i个元素
            var temp = arr[i];
            //定义有序中的最后一个位置
            var j = i - 1;
            arr[i] = arr[j];
            //比较大小，找到插入的位置
            while (j >= 0 && temp < arr[j]) {
                arr[j + 1] = arr[j];
                j--;
            };
            //插入
            arr[j + 1] = temp;
        }
    }
}
let arr = [1,4,5,2,7,3,9]
sort(3)
console.log(arr)

function sort(index){
    for(var j=index ;j<arr.length;j++){
    //两两比较，如果前一个比后一个大，则交换位置。
       for(var i=j+1 ; i<arr.length;i++){
            if(arr[j]>arr[i]){
                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        } 
    }
}