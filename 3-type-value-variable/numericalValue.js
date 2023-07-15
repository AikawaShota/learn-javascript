// 10進数
0
3
10000000

// 16進数（先頭が0xまたは0X）
0xff // => 255
0xBADCAFE  // => 195939070

// 2進数（ES6以降）
0b10101 // => 21

// 8進数（ES6以降）
0o377 // => 255

// 浮動小数点リテラル
// [10進数値][.10進数値][(E|e)[(+|-)]10進数値]
3.14
2345.6789
.3333333333333
6.02e23 // 6.02 * 10^23
1.47382223E-32 // 1.4738223 * 10^-32

// 数値リテラルの区切り文字
// 数値リテラル中ではアンダースコアが使える
// 長い数値リテラルをアンダースコアで区切って読みやすくできる
let billion = 1_000_000_000; // アンダースコアで3桁ごとに区切る
let bytes = 0x89_AB_CD_EF; // バイト単位で区切る
let bits = 0b0001_1101_0111; // ニブル単位で区切る
let fraction = 0.123_456_789; // 小数部でも使用できる


/**
 * JSの基本的な算術演算子には、加算（+）,減算（-）,乗算（*）,除算（/）,剰余（%）,べき乗（**）ES6以降が使える
 * もっと複雑な数学演算を行うための関数や定数はMathという名前のオブジェクトのプロパティとして定義されている。
 */
Math.pow(2, 53) // => 9007199254740992: 2の53乗
Math.round(.6) // => 1.0: 最近傍の整数に変換
Math.ceil(.6) // => 1.0: 整数に切り上げ
Math.floor(.6) // => 0.0: 整数に切り捨て
Math.abs(-5) // => 5: 絶対値
Math.max(x, y, z) // 引数の中から最大値を返す
Math.min(x, y, z) // 引数の中から最小値を返す
Math.random() // 0以上1.0未満の疑似乱数を返す
Math.PI // π: 円周率
Math.E // e: 自然対数の底
Math.sqrt(3) // => 3**0.5: 3の平方根
Math.pow(3, 1/3) // => 3**(1/3): 3の立方根
Math.sin(0) // 三角関数。Math.cosやMath.atanなども
Math.log(10) // 10の自然対数
Math.log(100)/Math.LN10 // 底が10の100の対数（100の常用対数）
Math.log(512)/Math.LN2 // 底が2の512の対数
Math.exp(3) // Math.Eの3乗

// ES6以降
Math.cbrt(27) // => 3: 立方根
Math.hypot(3, 4) // => 5: 引数を自乗したものの総和の平方根
Math.log10(100) // => 2: 常用対数
Math.log2(1024) // => 10: そこが2の対数
Math.log1p(x) // (1+x)の自然対数。xが小さい値の場合、こちらが正確
Math.expm1(x) // Math.exp(x) -1; Math.log1p()の逆関数
Math.sign(x) // 引数が0より小さい、0、0より大きいで、-1、0、1を返す
Math.imul(2, 3) // => 6: 32ビット整数の高速乗算
Math.clz32(0xf) // => 28: 32ビットバイナリ表現での先頭の0の数
Math.trunc(3.9) // => 3: 小数部を削除して整数に変換する
Math.fround(x) // 最近傍の32ビット浮動小数点を返す
Math.sinh(x) // 双曲線正弦関数。Math.cosh()、Math.tanh()も
Math.asinh(x) // 逆双曲線正弦関数。Math.acosh()、Math.atanh()も

Infinity // 表現できないくらい大きな整数（無限大）
Number.POSITIVE_INFINITY // 同じく無限大
1/0 // => Infinity
Number.MAX_VALUE * 2 // => Infinity; オーバーフローが発生
-Infinity // 絶対値が表現できないくらい大きな負数
Number.NEGATIVE_INFINITY // 同じく負の無限大
-1/0 // -Infinity
-Number.MAX_VALUE * 2 // -Infinity

NaN // 不定値
Number.NaN // 同じ値の別の表記方法
0/0 // => NaN
Infinity/Infinity // => NaN

Number.MIN_VALUE/2 // => 0: アンダーフローが発生
-Number.MINVALUE/2 // => -0: 負の0
-1/Infinity // => -0: これも負の0

// ES6のNumberには、以下のようなプロパティも定義されている
Number.parseInt() // グローバルなparseInt()関数と同じ
Number.parseFloat() // グローバルなparseFloat()関数と同じ
Number.isNaN(x) // xがNaN値かどうかを返す
Number.isFinite(x) // xが有限な数値かどうかを返す
Number.isInteger(x) // xが整数かどうか返す
Number.isSafeIntegar // xが-(2**53)から2**53までの整数かどうかを返す
Number.MIN_SAFE_INTEGER // => -(2**53 -1)
Number.MAX_SAFE_INTEGER // => 2**53 - 1
Number.EPSILON // => 2**-52: 数値間の差異の中で、最小の差異

// NaN値はどの値としても等しいと判定されない特徴がある
let zero = 0; // 通常の0
let negz = -0; // 負の0
zero === negz // => true: 通常の0と負の0は等しい
1/zero === 1/negz // => false: 無限大と負の無限大は等しくない
zero*1 === negz*1 // => true: 0と-0は等しい

// 丸め誤差のため問題が生じるパターン
let x = .3 - .2; // 30セントから20セントを減算する
let y = .2 - .1; // 20セントから10セントを減算する
x === y // => false: 2つの値は同じではない
x === .1 // => false: .3-.2は.1と等しくない
y === .1 // => true: .2-.1は.1と等しい

// BigIntリテラルは数字文字列の最後にnを記述する
1234n // それほど大きくないBitIntリテラル
0b111111n // 2進数のBigIntリテラル
0x8000000000000000n // => 2n**63n: 64ビット整数

BigInt(Number.MAX_SAFE_INTEGER) // => 9007199254740991n
let string = "1" + "0".repeat(100); // 1の後に100個0が続く文字列
BigInt(string) // => 10n**100n: 1グーゴル

1000n + 2000n // => 3000n
3000n - 2000n // => 1000n
2000n * 3000n // => 6000000n
3000n / 997n // => 3n: 商は3
3000n % 997 // => 9n: 余りは9
(2n ** 131071n) -1n // 39457桁の素数

1 < 2n // => true
2 > 1n // => true
0 == 0n // => true
0 === 0n // => false: ===では、型が同じかどうかも調べるから

let timestamp = Date.now(); // 現在時刻のタイムスタンプ（数値）
let now = new Date(); // 現在時刻のDateオブジェクト
let ms = now.getTime(); // ミリ秒単位のタイムスタンプに変換
let iso = now.toISOString(); // 標準形式の文字列に変換
