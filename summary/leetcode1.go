func twoSum(nums []int, target int) []int {
    result := make([]int, len(nums))[:0]
    for i, v := range nums {
        if(i+1 != len(nums) && v + nums[i+1] == target){
            result = append(result, i)
        }
        if(i != 0 && v + nums[i-1] == target){
            result = append(result, i)
        }
    }

    return result
}