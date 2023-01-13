
/**
 * 其中if else比较多 ，其实逻辑并不复杂 
 * 对于空数组单独处理，是为了简单逻辑实现
 */
fn main() {
    println!("{}" ,find_median_sorted_arrays(vec![] , vec![1]));
}

pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
    let mut sorted_arr :Vec<i32> = vec![];

    let len1 = nums1.len();
    let len2 = nums2.len();

    if len1 == 0 {
        if is_odd(len2) {
            let sum = get_vec_num_index(&nums2 , len2/2 -1 )  + get_vec_num_index(&nums2, len2/2 ) ;
            return  sum as f64 / 2.0;
        }
        else {
            let sum = get_vec_num_index(&nums2 , len2/2);
            return  sum as f64;
        }
    }
    
    if len2 == 0{
        if is_odd(len1) {
            let sum  = get_vec_num_index(&nums1 , len1/2 -1 ) + get_vec_num_index(&nums1, len1/2 );
            return  sum as f64 / 2.0;
        }
        else {
            let sum = get_vec_num_index(&nums1 , len1/2);
            return  sum as f64 ;
        }
    }
    let mid_tag = (((len1 + len2 )/2 ) as f64).floor();
    // println!("mid_tag = {}" ,mid_tag);

    let mut pointer1 = 0;
    let mut pointer2 = 0;

    // let add1= ||{
    //     sortedArr.push(get_vec_num_index(&nums1 ,  pointer1))
    //     pointer1+=1;
    // };

    // let add2= ||{
    //     sortedArr.push(get_vec_num_index(&nums2 ,  pointer2))
    //     pointer2+=1;
    // };   


    for _ in 0..= mid_tag as usize {
        if get_vec_num_index(&nums1 , pointer1) > get_vec_num_index(&nums2 ,  pointer2){
            if pointer2 <= len2 -1 {
                sorted_arr.push(get_vec_num_index(&nums2 ,  pointer2));
                pointer2+=1;
            }else {
                sorted_arr.push(get_vec_num_index(&nums1 ,  pointer1));
                pointer1+=1;
            }
        }else {
            if pointer1 <= len1 -1 {
                sorted_arr.push(get_vec_num_index(&nums1 ,  pointer1));
                pointer1+=1;
            }else {
                sorted_arr.push(get_vec_num_index(&nums2 ,  pointer2));
                pointer2+=1;
            }
        }

        // println!("{:?}" , sorted_arr);
    }

    if is_odd(len1 + len2) {

    ( (get_vec_num_index(&sorted_arr ,sorted_arr.len()-1 ) + get_vec_num_index(&sorted_arr, sorted_arr.len()-2)) )as f64 /2.0
    
    }else{
        (get_vec_num_index(&sorted_arr ,sorted_arr.len()-1 ))as f64
    }
}


pub fn get_vec_num_index(nums : &Vec<i32> , i : usize) -> i32{
    if nums.len() == 0 {
        return -100001;
    }
    match nums.get(i) {
        Some(x)=> *x,
        None=> {
            eprintln!("访问越界了");
            return nums[nums.len()-1];
        }
    }
} 
// 是否为偶数
pub fn is_odd(num : usize) -> bool{
    if num % 2 == 0 {
        true
    }else {
        false
    }
}
