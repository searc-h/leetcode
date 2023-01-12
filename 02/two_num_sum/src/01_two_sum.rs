fn main() {

    let result = two_sum(vec![2,6,7,11], 17);
    println!("{:?}" , result)
}

use std::collections::HashMap;

pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut my_map : HashMap<i32 , i32> = HashMap::new();

    for i in 0..=nums.len(){
        if let Some(x) = my_map.get(&(target - nums[i])){
            return vec![*x  , i as i32];
        }

        my_map.insert(nums[i], i as i32);
    }

    return vec![0,1];
}

// 别人的实现
pub fn two_sum_others(nums: Vec<i32>, target: i32) -> Vec<i32> {
    // use std:: collections::HashMap;
    let mut m :HashMap<i32,i32> = HashMap::new();
    for(i,v) in nums.iter().enumerate(){
        match m.get(&(target - *v)){
            Some(&i2) => return vec![i as i32,i2],
            None =>m.insert(*v, i as i32),
        };
    }
    vec![]

}