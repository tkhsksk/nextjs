import (
    "sort"
)

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    result := make([]int, len(nums1))[:0]
    result = append(nums1, nums2...)
    sort.Ints(result)

    if len(result)%2 == 0 {
        return (float64(result[len(result)/2-1]) + float64(result[len(result)/2])) / 2
    } else {
        return float64(result[len(result)/2])
    }
}