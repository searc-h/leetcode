function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function addNode_atEnd(list , val) {
    let pointer1 = list ;
    while (true) {
        if(!pointer1.next)
            break
        else pointer1 = pointer1.next
    }
    pointer1.next = new ListNode(val)
}

let l1 = new ListNode(1, new ListNode(0 , new ListNode(0,new ListNode(0,new ListNode(0,new ListNode(0,new ListNode(1)))))))
let l2 = new ListNode(5, new ListNode(6 , new ListNode(4)))

var addTwoNumbers = function(l1, l2) {
    let arr1 = [] ;
    let arr2 = [] ;
    let pointer1 = l1;
    let pointer2 = l2;
    while (true) {
            arr1.push(pointer1.val)
            pointer1 = pointer1.next
            if(!pointer1){
                break
            }
    }
    while (true) {
        
        arr2.push(pointer2.val)
        pointer2 = pointer2.next
        
        if(!pointer2){
            break
        }
    }
    
    console.log(arr1 , arr2)

    let sumArr = addTwoNumbers_noUseListNode(arr1 , arr2)
    console.log(sumArr)

    let sumList  = new ListNode(sumArr[0]);
    sumArr.forEach((item , index)=>{
        if(index==0){
            
        }else{
            addNode_atEnd(sumList,item)
        }
    })

    return sumList
};

// console.log(JSON.stringify(addTwoNumbers(l1 , l2)))




/**
 * @description 两数相加
 * @param {Array<number>} l1 Array<number>
 * @param {Array<number>} l2 Array<number>
 * @returns Array<number>
 */
 function addTwoNumbers_noUseListNode(l1 , l2){
    result = []
    if(Array.isArray(l1) && Array.isArray(l2))
    {
        
        let num1 = BigInt(l1.reverse().join(""))
        let num2 = BigInt(l2.reverse().join("")) 
        let sum = (num1 + num2)
        console.log(num1 , num2 , sum)
        result = sum.toString().split("").map((item)=>{
            return BigInt(item)
        })
    }

    return result.reverse()

}
console.log(addTwoNumbers_noUseListNode([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] , [5,6,4]))



// 以下是较快的算法实现
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers_others = function(l1, l2) {
    let head = null,tail = null;
    let carry = 0;
    while(l1 || l2){
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1+n2+carry
        if(!head){
            head = tail = new ListNode(sum%10);
        }else{
            tail.next = new ListNode(sum%10);
            tail = tail.next;
        }
        carry = Math.floor(sum/10);
        if(l1){
            l1 = l1.next;
        }
        if(l2){
            l2 = l2.next;
        }
    }
    if(carry>0){
        tail.next = new ListNode(carry);
    }
    return head;
};