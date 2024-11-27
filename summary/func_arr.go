package main
import "fmt"
import "strconv"

func main() {
  ints := []int{10, 60, 11}
  x, y := add(ints)
  fmt.Println(x, y)
  fmt.Println(x)
  fmt.Println(y)
}

func add(i []int) (int, string) {
  return i[0]+11, strconv.Itoa(i[2])
}

// go run func_arr.go
// 21 11
// 21
// 11