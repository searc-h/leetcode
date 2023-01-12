/**
 * 运行命令
 * cargo build
 * ./target/debug/world_hello
 *
 * ./target/debug/world_hello 中有一个明晃晃的 debug 字段，
 * 没错我们运行的是 debug 模式，在这种模式下，代码的编译速度会非常快，
 * 可是福兮祸所依，运行速度就慢了.
 * 原因是，在 debug 模式下，Rust 编译器不会做任何的优化，
 * 只为了尽快的编译完成，让你的开发流程更加顺畅。
 */

/** 发行版本命令启动（做优化）
 *
 * cargo run --release
 * cargo build --release
 */

/**cargo check
 * 当项目大了后，cargo run 和 cargo build 不可避免的会变慢，
 * 那么有没有更快的方式来验证代码的正确性呢？大杀器来了，接着！
 *
 *
 * cargo check 是我们在代码开发过程中最常用的命令，它的作用很简单：快速的检查一下代码能否编译通过。
 * 因此该命令速度会非常快，能节省大量的编译时间。
 */
fn _greet_world() {
    let southern_germany = "Grüß Gott!";
    let chinese = "世界，你好";
    let english = "World, hello";
    let regions = [southern_germany, chinese, english];
    for region in regions.iter() {
        println!("{}", &region);
    }
}

// fn main() {
//     let num = Some(4);

//     match num {
//         Some(x) => println!("less than five: {}", x),
//         Some(x) => println!("{}", x),
//         None => (),
//     }
// }

// fn main() {

//     enum Message {
//         Hello { id: i32 },
//     }

//     let msg = Message::Hello { id: 11 };

//     match msg {
//         Message::Hello { id  } if id >3 && id <7 => {
//             println!("Found an id in range: {}", id)
//         },
//         Message::Hello { id } if id >10 && id<12 => {
//             println!("Found an id in another range , {}" , id)
//         },
//         Message::Hello { id } => {
//             println!("Found some other id: {}", id)
//         },
//     }
// }

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




