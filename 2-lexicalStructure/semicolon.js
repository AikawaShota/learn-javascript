let a
let b

a = 3;  // aへ代入する文と、bへ代入する文は改行で区切られているため、aへ代入する文の行末のセミコロンは省略可能
b = 4;

a = 5; b = 6;  // 同じ行に2つの分を記述する場合は、セミコロンが必要


/**
 * 以下のコードは次のように解釈される。
 * let c; c = 3; console.log(c);
 */
let c
c
=
3
console.log(c)  // => 3


/**
 * 以下のコードは次のように解釈される。
 * let y = x + f(a+b).toString();
 * 変数yを宣言しx+fを代入する処理のつもりが、fを関数を呼び出していると解釈されていしまい意図しない動作になってしまう。
 */
let y = x + f
(a+b).toString()


let x = 0  // ここではセミコロンが省略されている
;[x, x+1, x+2].forEach(console.log)  // 念のために;を記述し、文が分割されるようにする


/**
 * 例外として、return, throw, yield, break, continue文は改行があった場合、
 * JavaScriptインタプリタは常に改行をセミコロンとして処理する。
 * 以下のコードは次のように解釈される
 * return; true;
 */
return
true;

// return true;としたいのなら、改行を入れてはならない
return true;
