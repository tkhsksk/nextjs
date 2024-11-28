// You can edit this code!
// Click here and start typing.
package main

import (
    "fmt"
)

// 配列に含まれる文字列のカウント（難易度: 易しい）
func main() {
    arr := []string{"aaa", "bbbb", "c", "d"}
    fmt.Println(hoge(arr))
}

func hoge(list []string) int {
    var sum int
    for _, v := range list {
        sum += len(v)
    }
    return sum
}
