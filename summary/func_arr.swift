let strings : [String] = ["hoge", "piyo", "huga", "test"]

func add(array: [String]) -> (sum:String, msg:String) {
    let hoge = array[0]+" is num1"
    return (hoge, array[2]+" is num2")
}

var test = add(array:strings)

print(strings)
print(test.sum)
print(test.msg)

// swift func_arr.swift
// ["hoge", "piyo", "huga", "test"]
// hoge is num1
// huga is num2