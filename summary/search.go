package main
import "fmt"
import "strings"// 文字検索用

func main() {
  searched := []string{}
  arr := []string{"hoge", "piyo", "huga"}

  for i, v := range arr {
    _ = i // 以下でiを使わない場合
    if(strings.Contains(v, "h")){
      // searched[空] = append(searched[空], arr配列のvalue)
      searched = append(searched, v)
    }
  }

  for i, v := range searched {
    fmt.Println(i, v)
  }
}

// go run func_arr.go
// hoge
// huga