
// function Tree(value,left=null,right=null) {
//     this.value = value;
//     this.left = left
//     this.right = right
// }
// const t1 = new Tree(1)
// const t2 = new Tree(2)
// const t3 = new Tree(3)
// const t4 = new Tree(4)
// const t5 = new Tree(5)
// const t6 = new Tree(6)
// const t7 = new Tree(7)
// t1.left = t2;
// t1.right = t3;
// t2.left = t4;
// t2.right = t5;
// t3.left= t6;
// t3.right  = t7;
// function preOrder(root, path, res) {
//     if (root === null) {
//         return;
//     }
//     // 尝试
//     path.push(root);
//     if (root.value === 7) {
//         // 记录解
//         res.push([...path]);
//     }
//     debugger
//     preOrder(root.left, path, res);
//     preOrder(root.right, path, res);
//     // 回退
//     path.pop();
// }
// preOrder(t1,[],[])

function backtrack(arr,state,select,res) {
    if(state.length === arr.length) {
        res.push([...state]);
        return;
    }
    arr.forEach((item,index) => {
        if(!select[index]) {
            state.push(item)
            select[index] = true;
            backtrack(arr,state,select,res)
            select[index] = false;
            state.pop()
        }
    });

}
function permute(arr) {
    const res = [];
    backtrack(arr,[],Array(arr.length).fill(false),res)
    return res
}
console.log(permute([1,2,3]));