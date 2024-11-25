func add(answer: Int) -> Int {
    return answer + 1
}

func minMax(numbers: Int) -> (sum: Int, msg: String) {
    let currentMin = numbers + 11
    let msg = "return!"

    return (currentMin, msg)
}

let answer = add(answer: 1)

print(answer)

print(minMax(numbers: 1))
print(minMax(numbers: 1).msg)