
//目前这里写的 闭包运行出错
// 初步估计并不是闭包的问题， 而是字符串切片和字符串比较方面的问题
// 由于Rust中对String的下标访问 和 字符比较 比较麻烦，所以暂时没有完成Rust代码的实现，以后回头再写
fn main() {
    println!("{}",longest_palindrome(String::from("abcb")))
}

pub fn longest_palindrome(s: String) -> String {
    let mut max_substr = String::from("");

    // let mut fnOnce = |mut m:usize ,mut n :usize| {
    //     while m>=0 && n <s.len() && &s[m..m+1]==&s[n..n+1] {
    //         m = m - 1;
    //         n = n + 1;
    //     }
    //     if n - m +1 > max_substr.len(){
    //         max_substr = (&s[m..n]).to_string();
    //     }
    // }; 


    for i in 0..=s.len() {
        let mut m = i;
        let mut n = i;
        while m>=0 && m <s.len()   {

        }
        if n - m +1 > max_substr.len(){
            max_substr = (&s[m..n]).to_string();
        }

        // m = i;
        // n = i+1;
        // while m>=0 && n <s.len() && &s[m..m+1]==&s[n..n+1] {
        //     m = m - 1;
        //     n = n + 1;
        // }
        // if n - m +1 > max_substr.len(){
        //     max_substr = (&s[m..n]).to_string();
        // }

        println!("{}" , max_substr)
    }


    return max_substr;
}   

// pub fn center<F>(mut func : F , i :usize)
// where 
//     F : FnMut(usize , usize)->()
// {
//     func(i , i);
//     func(i , i+1);
// }
