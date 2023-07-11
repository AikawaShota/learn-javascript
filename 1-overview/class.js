class Point {  // クラス名は大文字から記述するのが慣習。
    constructor(x, y) {  // 新しいインスタンスを初期化するコンストラクタ関数。
        this.x = x;  // thisキーワードで、初期化中のオブジェクトを参照できる。
        this.y = y;  // 関数の引数をオブジェクトのプロパティとして保存する。
    }  // return文は必要ない。

    distance() {  // 原点からの距離を計算するメソッド。
        return Math.sqrt(  // x^2 + y^2の平方根を返す。
            this.x * this.x +  // thisが参照しているのは
            this.y * this.y    // distanceメソッドが呼び出されているオブジェクト。
        );
    }
}

// 「new」キーワードとPoint()コンストラクタ関数を使って、Pointオブジェクトを生成する。
let p = new Point(1, 1);  // 座標(1,1)。

// Pointオブジェクトのpメソッドを使う
p.distance()  // => Math.SQRT2
