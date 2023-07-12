/*
 * JavaScriptプログラムは、文字列やコメント中にUnicode文字が使える。
 * ただし、一般的にはASCII文字と数字のみを使う。これはあくまで慣習的な話である。
 * JavaScriptでは、文字集合の文字や数字、表意文字を識別子に利用できる。（絵文字は利用できない。）
 */

const π = 3.14;
const sí = true;

/*
 * Unicodeエスケープシーケンス
 * JavaScriptでは、ASCII文字を使ってUnicode文字を記述できるようにサポートしている。
 * このようなASCII文字の並びをエスケープシーケンスと呼ぶ。
 * Unicodeエスケープシーケンスは、\uという文字から始め、その後に4文字の16進数を記述するか、
 * または、中括弧に囲んで1文字から6文字までの16進数を記述する。
 */

let café = 1;  // Unicode文字を使って変数を定義する
caf\u00e9  // => 1; エスケープシーケンスを使って変数をアクセス
caf\u{E9}  // => 1; 別の方法で記述する。

console.log("\u{1F600}");  // 笑顔の絵文字を表示する

/*
 * Unicode正規化
 * Unicodeでは、同じ文字を複数の方法で記述できることに注意する。
 * 例えばéという文字は、Unicode文字(\u00E9)として表記できる。
 * また、通常のASCII文字「e」の後ろの鋭アクセント結合マーク(\u0301)を続ける表記方法もあります。
 * どちらの方法で文字を記述したとしても、画面上に表示されるときにはまったく同じ文字として表示される。
 * しかし、データとしては全く異なるので、JavaScript上では異なる文字と見なされる。
 * このため、次のような非常にややこしいプログラムを記述できてしまう。
 */
const tést = 1;  // この定数の名前は、「c\u{e9}st」
const te\u{301}st = 2;  // この定数の名前は異なっていて、「c\u{301}st」
tést  // => 1: この定数の値は、1
te\u{301}st  // => 2: 見た目では区別できないこの変数は、異なる値を持つ