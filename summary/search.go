package main
import "fmt"
import "strings"// 文字検索用

func main() {
  arr := []string{"hoge", "piyo", "huga"}

  for i, v := range search(arr) {
    _ = i
    fmt.Println(v)
  }
}

func search(arr [] string) []string {
  result := make([]string, len(arr))[:0]

  for i, v := range arr {
    _ = i
    if strings.Contains(v, "h") {
      result = append(result, v)
    }
  }

  return result
}

// go run func_arr.go
// hoge
// huga