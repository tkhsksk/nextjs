func add(x:Int, y:String) -> (sum:Int, msg:String) {
    return (x+11, y)
}

var test = add(x:1, y:"return!!")

print(test)
print(test.sum)
print(test.msg)let arr : [Int] = [10, 60, 11]
print(arr)

arr.forEach { v in
    print("Number is \(v)")
}

// swift foreach.swift
// [10, 60, 11]
// Number is 10
// Number is 60
// Number is 11

// swift func_multiple.swift 
// (sum: 12, msg: "return!!")
// 12
// return!!