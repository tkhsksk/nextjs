package main
import "fmt"

type Product struct {
  Name, Note string
  Price      int
}

func main() {
  p := Product{Name: "milk", Note: "yammy", Price: 600}
  name, price := add(p)
  fmt.Println(name, price)
  fmt.Println(name)
  fmt.Println(price)
}

func add(p Product) (int, string) {
  return p.Price+11, p.Name
}

// go run func_struct.go
// 611 milk
// 611
// milk