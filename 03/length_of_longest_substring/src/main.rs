use std::collections::HashMap;

fn main() {
    let s = String::from("abcba");
    let max = length_of_longest_substring(s);
    println!("{}" , max)
}
/**
 * 查找最长无重复子串;
 * 滑动窗口-HashMap
 */

pub fn length_of_longest_substring(s: String) -> i32 {

    let mut map:HashMap<&str, i32> = HashMap::new();

    let mut max_len = 0;

    let mut left =  0;

    for i in 0..=s.len() {
        match s.get(i..i+1) {
            Some(x)=>{
                if let Some(repet) = map.get(x){ //如果存在
                    if left <= *repet{
                        left = repet + 1
                    }
                }
                
                if max_len < i as i32-left + 1 { //更新max_len
                    max_len = i as i32-left+1
                }
                map.insert(x, i as i32);
            },
            None => {
                return max_len;
            }
        }
       
    }
    return max_len;
}
