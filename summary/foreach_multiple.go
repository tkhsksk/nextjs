package main
import "fmt"

func main() {
  arr := [][]string{
    {"Hello", "Go"},
    {"Bye", "Python"},
  }
  fmt.Println(arr)
  fmt.Println("================")
  for i, v := range arr {
    fmt.Println(i, v)
    if(len(arr)-1 == i){
      fmt.Println("================")
    }
  }
  for i, v := range arr {
    fmt.Println(i, v[0], v[1])
  }
}

// go run func_multiple.go
//
// [[Hello Go] [Bye Python]]
// ================
// 0 [Hello Go]
// 1 [Bye Python]
// ================
// 0 Hello Go
// 1 Bye Python