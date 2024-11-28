import (
    "strconv"
    "strings"
)

func reverse(x int) int {
    // 数字を文字に
    s := strconv.Itoa(x)
    arr1 := strings.Split(s, "")
    cur := ""

    if arr1[0] != "-" {
        for i := 0; i < len(arr1)/2; i++ {
            arr1[i], arr1[len(arr1)-i-1] = arr1[len(arr1)-i-1], arr1[i]
        }
    } else {
        for i := 0; i < len(arr1)/2; i++ {
            arr1[i], arr1[len(arr1)-i-1] = arr1[len(arr1)-i-1], arr1[i]
        }
        for i := 0; i < len(arr1)-1; i++ {
            arr1[len(arr1)-i-1] = arr1[len(arr1)-i-2]
        }
        arr1[0] = "-"
    }

    for i, v := range arr1 {
        _ = i
        cur += v
    }

    var i int
    var ans string = cur
    i, _ = strconv.Atoi(ans)

    return i
}