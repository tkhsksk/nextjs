package main
import "fmt"

func main() {
  strings := []string{"hoge", "piyo", "huga", "test"}
  fmt.Println(strings)
  fmt.Println(strings[0])
}

// go run arr.go
// [hoge piyo huga test]
// hoge