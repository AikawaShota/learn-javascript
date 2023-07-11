/*
 * 識別子というのは名前のことです。JavaScriptでは、識別子を使って定数や変数、プロパティ、関数、クラスを指定します。
 * また、特定のループのラベルとして識別子を使うこともできます。
 * 識別子の先頭の文字は、Unicode文字、アンダースコア(_)、ドル記号($)のいずれかでなければなりません。
 * その後は、Unicode文字、数字、アンダースコア、ドル記号のいずれかでなければなりません。
 * つまり、識別子の先頭に数字を記述することはできません。
 */

// 識別子の例
i
my_variable_name
v13
_dummy
$str

/*
 * ほかの言語と同じように、JavaScript自身が使うために、ある識別子群を予約しています。
 * これらの予約語は通常の識別子としては使えません。
 */

// JavaScriptの言語の一部として使われている予約語
// fromやset、targetについては、識別子として使っても問題ない。実際、よく使われている。
as
const
export
get
null
target
void
async
continue
extends
if
of
this
while
await
debugger
false
import
return
throw
with
break
default
finally
in
set
true
yield
case
delete
for
instanceof
static
try
catch
do
from
let
super
typeof
class
else
function
new
switch
var

// 以下のキーワードはJavaScriptでは現在使わていないが、将来に向けて予約されている
enum
implements
interface
package
private
protected
public

// 以下のキーワードは歴史的な理由で、ある特定の状況下では識別子として使うことができない。
arguments
eval
