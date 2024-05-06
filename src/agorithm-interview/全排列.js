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