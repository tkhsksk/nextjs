package main
import "fmt"

func main() {
  test := add(1)
  fmt.Println(test)
}

func add(i int) int {
  return i + 1
}

// go run func_int.go
// 2