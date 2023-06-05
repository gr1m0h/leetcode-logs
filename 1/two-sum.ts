function twoSum(nums: number[], target: number): number[] {
    const indices = new Map();
    for (let index = 0; index < nums.length; index++) {
        const currentNum = nums[index];
        const complement = target - currentNum;
        if (indices.has(complement)) {
            return [indices.get(complement), index];
        }
        indices.set(currentNum, index);
    }
    return [];
};
