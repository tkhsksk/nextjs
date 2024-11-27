package main
import "fmt"

func main() {
  arr := []string{"hoge", "piyo", "huga", "test"}

  fmt.Println(arr)
  for i := 0; i < 5; i++{
      fmt.Println(arr[i])
  }
}

// go run for.go
// [hoge piyo huga test]
// hoge
// piyo
// huga
// test