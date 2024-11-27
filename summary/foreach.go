package main
import "fmt"

func main() {
  arr := []int{10, 60, 11}
  fmt.Println(arr)
  for i, v := range arr {
    fmt.Println(i, v)
  }
}

// go run func_arr.go
// [10 60 11]
// 0 10
// 1 60
// 2 11