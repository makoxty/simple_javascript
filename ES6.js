/**
 * let,const等の変数宣言について
 */

/**
 * let宣言について
 */
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1)

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

// letの場合
let let1 = "let変数";
console.log(let1);

// let変数は上書き可能
let1 = "let変数を上書き";
console.log(let1)

// let変数は再宣言不可能
// let let1 = "let変数を再宣言";
console.log(let1);

console.log("----------------");

/**
 * constについて
 */
const val = "constの値";
console.log(val);

// constの値は上書きできない
// val = "constの値を上書き";

// 同じ変数名でconstを再宣言することはできない
// const val = "constの値";

// constで定義したオブジェクトは書き換え可能
const val2 = {
    name: "name",
    age: 27
};
console.log(val2);
val2.name = "name2";
val2.address = "日本";
console.log(val2);

// constで定義した配列は書き換え、要素追加可能
const val3 = ['dog', 'cat'];
console.log(val3);
val3[0] = 'bird';
val3.push("monkey");
console.log(val3);

console.log("----------------");

/**
 * テンプレート文字列
 */

// 私は◯◯です。年齢は◯◯です。と表示させる場
// 従来のやり方は結合する
const name = "test";
const age = "27";
const message1 = "私は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列を使った場合
const message2 = `私は${name}です。年齢は${age}です。`;
console.log(message2);

console.log("----------------");

/**
 * アロー関数
 */

// 従来のやり方
function func1(str) {
    return str;
}
console.log(func1("func1"));

const func2 = function(str) {
    return str;
}
console.log(func2("func2"));

// アロー関数
const func3 = (str) => {
    return str;
}

console.log(func3("func3"));

//　引数が1つの場合、()を省略できる
const func4 = str => {
    return str;
}
console.log(func4("func4"));

// 処理が1行でかける場合、{}は不要
// returnを書かなくてもreturnされる
const func5 = (num1, num2) => num1 + num2;
console.log(func5(10, 10));

console.log("----------------");

/**
 * 分割代入
 */
// オブジェクト作成
const myProfile = {
    name2: "まこと",
    age2: 27,
};

// myProfileと毎回打つのはめんどくさいパターン
const message = `名前は${myProfile.name2}です。年齢は${myProfile.age2}です。`
console.log(message);

// 楽なパターン
const { name2, age2 } = myProfile;
const message4 = `名前は${name2}です。年齢は${age2}です。`;
console.log(message4);

// 配列のパターン
// めんどくさいパターン
const myProfile2 = ['まこと', 27];
const message5 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}`;
console.log(message5);

// 楽なパターン
const [name3, age3] = myProfile2;
console.log(`名前は${name3}です。年齢は${age3}です。`);

/**
 * スプレッド構文
 */

/**
 * 配列の展開
 */
const arr1 = [1, 2];
// 配列なのを確認
console.log(arr1);

// 展開する
console.log(...arr1);


const sumFunc = (num3, num4) => console.log(num3 + num4);

// 従来のやり方
sumFunc(arr1[0], arr1[1]);

// スプレッド構文
sumFunc(...arr1);

/**
 * 配列を纏めて受け取る
 */
const arr2 = [1, 2, 3, 4, 5];
const [num5, num6, ...num7] = arr2;
console.log(num5);
console.log(num6);
console.log(...num7);

/**
 * 配列のコピー、結合
 */
const arr3 = [10, 20];
const arr4 = [30, 40];

// arr3をコピー
const arr5 = [...arr3];
console.log(arr5);

// arr3とarr4を結合
const arr6 = [...arr3, ...arr4];
console.log(arr6);
// 上記の結合は参照は渡されない。
// 「=」で渡すと参照が渡され、値を書き換えると、元の配列も値が変わってしまう。

/**
 * mapやfilterを使った配列の処理
 */

// 配列をコピー
const nameArr = ["山田", "田中", "佐藤"];
console.log(nameArr);
const nameArr2 = nameArr.map((name4) => {
    return name4;
})
console.log(nameArr2);

// 名前を出力
// 従来のやり方
for (let i = 0; i < nameArr.length; i++) {
    console.log(nameArr[i]);
}

// mapのやり方
nameArr.map((name5) => console.log(name5));

// filter
const numArr = [1, 2, 3, 4, 5];
// 奇数だけ取り出す
const newNumArr = numArr.filter((num) => {
    return num % 2 === 1;
});
console.log(newNumArr);

// 論理演算子の別の使い方
const num = null;
// ||は左側がfalseなら右辺を返す
// numがfalseの場合、右辺の値が代入される
const fee = num || "金額が未設定です。";
console.log(fee);

const num2 = 2;
// 左辺がtrueなら右辺を返す
// 今回は2が設定されるので、左辺がtrueとなり、右辺の値が返される
const fee2 = num2 && "何か設定されました";
console.log(fee2);