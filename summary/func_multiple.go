package main
import "fmt"

func main() {
  a, b := add(1, "return!!")
  fmt.Println(a, b)
  fmt.Println(a)
  fmt.Println(b)
}

func add(x int, y string) (int, string) {
  return x+11, y
}

// go run func_multiple.go
// 12 return!!
// 12
// return!!