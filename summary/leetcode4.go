func longestPalindrome(s string) string {
    arr1 := strings.Split(s, "")
    cur := ""
    for i, v := range arr1 {
        if i != len(arr1)-1 {
            if v == arr1[i+1] {
                cur += v
            }
        }
        if i != 0 {
            if v == arr1[i-1] {
                cur += v
            }
        }
    }

    // 二文字に達してない場合
    if len(cur) != 2 {
        for i, v := range arr1 {
            // 最後から3番目より小さい
            if i < len(arr1)-3 {
                if v == arr1[i+2] {
                    cur += v
                    cur += arr1[i+1]
                    cur += arr1[i+2]
                }
            }
            if len(cur) == 3 {
                return cur
            }
        }
    } else {
        return cur
    }
    return cur
}