fn main() {
    let mut l1 = Some(Box::new(ListNode::new(1)));
    l1.as_mut().unwrap().next = Some(Box::new(ListNode::new(2)));

    let mut l2  = Some(Box::new(ListNode::new(4)));
    l2.as_mut().unwrap().next = Some(Box::new(ListNode::new(5)));
    println!("{:?}",add_two_numbers(l1, l2))
}

#[derive(PartialEq, Eq, Clone, Debug)]
/**
 * 节点类型
 */
pub struct ListNode {
  pub val: i32,
  pub next: Option<Box<ListNode>>
}
impl ListNode {
  #[inline]
  fn new(val: i32) -> Self {
    ListNode {
      next: None,
      val
    }
  }
}
/**
 * 模式匹配实现
 */
pub fn add_two_numbers(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let mut result = None;
    let mut tail = &mut result;
    let mut t = (l1, l2, 0, 0); // (list1, list2, sum, carry)
    loop {
        t = match t {
            (None, None, _, 0) => break,
            (None, None, _, carry) => (None, None, carry, 0),
            (Some(list), None, _, carry) | (None, Some(list), _, carry) if list.val + carry >= 10 => {
                (list.next, None, list.val + carry - 10, 1)
            }
            (Some(list), None, _, carry) | (None, Some(list), _, carry) => {
                (list.next, None, list.val + carry, 0)
            }
            (Some(l1), Some(l2), _, carry) if l1.val + l2.val + carry >= 10 => {
                (l1.next, l2.next, l1.val + l2.val + carry - 10, 1)
            }
            (Some(l1), Some(l2), _, carry) => {
                (l1.next, l2.next, l1.val + l2.val + carry, 0)
            }
        };

        *tail = Some(Box::new(ListNode::new(t.2)));
        tail = &mut tail.as_mut().unwrap().next;
    }
    result
}



/**
 * 递归实现
 */
pub fn add_two_numbers_others(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    carried(l1, l2, 0)
}
pub fn carried(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>, mut carry: i32) -> Option<Box<ListNode>> {
    if l1.is_none() && l2.is_none() && carry == 0 {
        None
    } else {
        Some(Box::new(ListNode {
            next: carried(
                l1.and_then(|x| {carry += x.val; x.next}), 
                l2.and_then(|x| {carry += x.val; x.next}), 
                carry / 10
            ),
            val: carry % 10
        }))
    }
}


