// You can edit this code!
// Click here and start typing.
package main

import (
    "fmt"
)

func main() {
    arr := []int{-1, 2, 1, -4}
    for comb := range combinations(arr, 3) {
        fmt.Println(comb)
    }
}

func combinations(list []int, choose int) (c chan []int) {
    c = make(chan []int)
    go func() {
        defer close(c)
        switch {
        case choose == 0:
            c <- []int{}
        case choose == len(list):
            c <- list
        case len(list) < choose:
            return
        default:
            for i := 0; i < len(list); i++ {
                for subComb := range combinations(list[i+1:], choose-1) {
                    c <- append([]int{list[i]}, subComb...)
                }
            }
        }
    }()

    for in,v := range c {
        result := make([]int)
        cur := ""

        for _,v_d := range v_c {
            cur += v_d
        }
        result[i_c] = v_c
    }

    return result
}