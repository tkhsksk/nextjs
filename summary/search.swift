//  : [String]は入れなくても宣言できる
let strings : [String] = ["hoge", "piyo", "huga"]
var searched : [String] = []

// 配列が終わるまで回す
strings.forEach { string in
    // "e"が含まれていたら、searched配列に追加
    if string.contains("h") {
        searched += [string]
    }
}

// searched配列を回す
searched.forEach { search in
    print(search)
}

// swift search.swift
// hoge
// huga