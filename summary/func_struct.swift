struct Product {
	var Name, Note :String
    var Price      :Int
}

func add(product: Product) -> (sum:Int, msg:String) {
    return (product.Price+11, product.Name)
}

let product = Product(Name: "milk", Note: "yammy", Price: 600)
var test = add(product: product)

print(test)
print(test.sum)
print(test.msg)

// swift func_struct.swift
// (sum: 711, msg: "milk")
// 611
// milk