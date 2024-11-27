func lengthOfLongestSubstring(s string) int {
    arr1 := strings.Split(s, "")
    result := make([]int, len(arr1))[:0]
    cur := ""
    for i, v := range arr1 {
        if !strings.Contains(cur, arr1[i]) {
            cur += v
        } else {
            result = append(result, i)
        }
    }

    result2 := make([]string, len(arr1))[:0]
    for i := result[0]; i < len(arr1); i++ {
        result2 = append(result2, arr1[i])
    }

    next := ""
    for i, v := range result2 {
        if !strings.Contains(next, result2[i]) {
            next += v
        }
    }

    return len(next)
}