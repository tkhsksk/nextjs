package main
import "fmt"

func main(){
  ints := []int{1,2,3}
  fmt.Println(add(ints))
}

func add(arr []int) []int {
  // arrに合わせて空の配列作成
  res := [...]int arr
  for i, v := range arr {
      res[i] = v * 2 
  }

  return res
}

// go run func_arr_to_arr.go
// [2, 4, 6]