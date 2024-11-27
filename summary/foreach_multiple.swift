var arr:[[String]] = [["Hello","Go"],["Bye","Python"]]
print(arr)
print("================")
arr.forEach { v in
    print(v)
    print(arr.count)
}
print("================")
arr.forEach { v in
    print(v[0]+v[1])
}

// swift foreach.swift
//
// [["Hello", "Go"], ["Bye", "Python"]]
// ================
// ["Hello", "Go"]
// 2
// ["Bye", "Python"]
// 2
// ================
// HelloGo
// ByePython