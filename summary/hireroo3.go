// You can edit this code!
// Click here and start typing.
package main

import (
    "fmt"
    "sort"
    "strconv"
    "strings"
)

// 6桁の数値の最小の和（難易度: 易しい）
func main() {
    arr := 456123
    fmt.Println(hoge(arr))
}

func hoge(longnum int) int {
    num := strconv.Itoa(longnum)
    arr1 := strings.Split(num, "")

    result := make([]int, len(num))[:0]

    for i := 0; i < len(arr1)-1; i++ {
        cur, _ := strconv.Atoi(arr1[i])
        nex, _ := strconv.Atoi(arr1[i+1])
        result = append(result, cur+nex)
    }
    sort.Sort(sort.IntSlice(result))

    return result[0]
}
