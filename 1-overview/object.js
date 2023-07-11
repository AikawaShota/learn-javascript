// JavaScriptの中で一番重要なデータ型はオブジェクト
// オブジェクトは名前と値のペア、つまり、値に文字列を対応付けたものの集合
let book = {    // オブジェクトは、中括弧で囲む
    topic: "JavaScript",    // topicプロパティは"JavaScript"という値を持つ
    edition: 7  // editionプロパティは7という値を持つ
};  // 中括弧でオブジェクトの最後を表す

// オブジェクトのプロパティにアクセスするときは、「.」または「[]」を使う
book.topic  // => "JavaScript"
book["edition"] // => 7: この方法でもプロパティの値にアクセスできる
book.author = "Flanagan";   // 代入すると、新たなプロパティが作られる
book.contents = {}; // {}は何もプロパティを持たない空のオブジェクトを意味する

// 条件付きでプロパティにアクセスするときは?を使う(ES2020)
book.contents?.ch01?.sect1 // => undefined: book.contentsにはch0プロパティが存在しない
