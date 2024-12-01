package main
import "fmt"

func main() {
  strings := [][]interface{}{
    {"milk", 100},
    {"water", 50},
    {"juice", 300},
  }

  for i := 0; i < len(strings); i++ {
    fmt.Println(strings[i])
  }
}