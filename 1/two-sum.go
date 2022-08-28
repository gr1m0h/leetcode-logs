func twoSum(nums []int, target int) []int {
    m := make(map[int]int, len(nums))
    for i, num := range nums {
        index, ok := m[target - num]
        if ok {
            return []int{index, i}
        }
        m[num] = i
    }
    return []int{}
}
