const plus1 = x => x + 1;   // 入力xに対して、x+1が出力される。
const square = x => x* x;   // 入力xに対して、x*xが出力される。

let y = 3;

plus1(y)    // => 4: 関数の呼び出し方法は同じ。
square(plus1(y))    // => 16
