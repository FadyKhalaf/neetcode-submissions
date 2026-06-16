class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        let five = 0, ten = 0;
        for (let b of bills) {
            if (b === 5) {
                five++;
            } else if (b === 10) {
                ten++;
                if (five > 0) {
                    five--;
                } else {
                    return false;
                }
            } else {
                if (five > 0 && ten > 0) {
                    five--;
                    ten--;
                } else if (five >= 3) {
                    five -= 3;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
}