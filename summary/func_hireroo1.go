package main
import "fmt"

func main(){
  ints := []int{1,2,3}
  fmt.Println(solution(ints))
}

func solution(arr []int) []int {
    result := make([]int, len(arr))
    for i, v := range arr {
        result[i] = v * 2 
    }

    return result
}