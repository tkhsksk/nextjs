package main
import "fmt"

type Product struct {
  Name, Note string
  Price      int
}

func main() {
  p := new(Product)
  p.Name = "milk"
  fmt.Println(p.Name)
}

// go run struct.go
// milk