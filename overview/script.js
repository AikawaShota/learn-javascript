// スラッシュ2つ並んだ後の文字はすべてコメントとして扱われる

// 変数を宣言する
let x;  // 変数xを宣言する

// 変数に値を代入する
x = 0;  // 変数xに0を代入する
x       // => 0: 変数xの値を評価する

// JavaScriptは様々なデータ型をサポートしている
x = 1;              // 数値
x = 0.01;           // 整数も実数も同じ数値型
x = "hello";        // 文字列
x = 'JavaScript';   // 一重引用符でもOK
x = true;           // 論理値
x = false;          // もうひとつの論理値
x = null;           // nullは値がないことを表す
x = undefined;      // undefinedはnullと似ているが、より汎用的


// JavaScriptの中で一番重要なデータ型はオブジェクト
// オブジェクトは名前と値のペアの集合で、値は任意のデータ型になる
let book = {                // オブジェクトは中括弧で囲む
    topic: "JavaScript",    // プロパティ"topic"の値は"JavaScript"
    edition: 7              // プロパティ"edition"の値は7
};                          // オブジェクトの定義の終わり

// オブジェクトのプロパティにアクセスするには、ドット(.)か角括弧([])を使う
book.topic                  // => "JavaScript"
book["edition"]             // => 7: プロパティ名は文字列で指定する
book.author = "Flanagan";   // 新しいプロパティを代入する
book.contents = {};         // {}は空のオブジェクトを表す

// 条件付きでプロパティにアクセスするときは?を使う(ES2020)
book.contents?.ch01?.sect1 // => undefined: book.contentsがnullまたはundefinedならundefinedを返す

// JavaScriptは配列（数値でインデックスされたリスト）もサポート
let primes = [2, 3, 5, 7];  // 4つの値を持つ配列「[」と「]」で囲む
primes[0]                   // => 2: 配列の最初の要素（インデックス0）
primes.length               // => 4: 配列の要素数
primes[primes.length-1]     // => 7: 配列の最後の要素
primes[4] = 9;              // 代入すると新たな要素が追加される
primes[4] = 11;             // 既存の要素の場合は代入で値が更新される
let empty = [];
empty.length                // => 0

// 配列やオブジェクトには、別の配列やオブジェクトを格納できる
let points = [              // 2つの要素を持つ配列
    {x: 0, y: 0},           // 各要素はオブジェクト
    {x: 1, y: 1}
];

let data = {                // 2つのプロパティを持つオブジェクト
    trial1: [[1,2], [3,4]], // 各プロパティの値は配列
    trial2: [[2,3], [4,5]]  // その配列の要素も配列
};
