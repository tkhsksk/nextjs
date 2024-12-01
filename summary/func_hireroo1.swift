let strings : [Int] = [1, 2, 3]

func solution(array: [Int]) -> [Int] {
    var res:[Int] = []
    array.forEach{ val in
        res += [val*2]
    }
    return res
}

var test = solution(array:strings)

print(test)

// swift func_arr.swift
// [2, 4, 6]