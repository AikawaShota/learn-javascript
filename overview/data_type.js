// スラッシュ文字が2つ並んだ後の文字はすべてコメントになる

// 変数は値に付けられる記号的な名前
// 変数を宣言するときには、letキーワードを使う
let x;  // xという名前の変数を宣言する

// 値を変数に代入するときには「=」記号を使う
x = 0;  // これで変数xの値は0になる
x   // => 0: 変数が評価され、代入された値になる

// JavaScriptは様々なデータ型をサポートしている
x = 1;  // 数値
x = 0.01;   // 整数も実数も同じ数値型になる
x = "hello";    // 文字列は引用符で囲む
x = 'JavaScript';   // 文字列は単一引用符でも囲める
x = true;   // 論理値
x = false;  // もう1つの論理値
x = null;   // nullは特殊な値で、「値がない」ことを意味する
x = undefined;  // undefinedは、nullと同じく特殊な値
