// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

// 示例 1：

// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
// 示例 2：

// 输入：prices = [7,6,4,3,1]
// 输出：0
// 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。

/**
 * 1. 找出最大的两个数的差
 * 2. 第二个数要大于第一个数
 * 3. 如果差值小于 0，返回 0
 * @param {*} prices 
 */
// 思路： 遍历数组
// var maxProfit  = function(prices){
//     let maxPrices = 0
//     for(let i = 0; i < prices.length; i++) {
//         for (let j = i+1; j < prices.length; j++) {
//             const curPrice = prices[j] - prices[i]
//             maxPrices = Math.max(maxPrices,curPrice)
//         }

//     }
//     return maxPrices;
// }
// console.log(maxProfit([7,1,5,3,6,4]));

// 思路二 贪心算法
// [7,1,5,3,6,4]
//   1.每一次循环都找到最小的数字，初始化第一个数字为最小，后续每一次遍历的当前数字都和上一次的数字对比，得出最小的
//  2. 然后再用当前的数字，减去最小的数字，就可以得到最大的差值
var maxProfit = function(prices) {
    let maxPrices = 0;
    if(prices.length === 0) return maxPrices;
    let minprice = prices[0];
    for (let i = 0; i < prices.length; i++) {
        minprice = Math.min(minprice,prices[i]);
        maxPrices = Math.max(maxPrices, prices[i] - minprice)
    }
    return maxPrices
}