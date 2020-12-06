# Chapter 3 - Types, Values & Variables

Computer Program တွေသည် Values တွေကို manipulate လုပ်ပြီးး အလုပ်လုပ်ပါတယ်။ Values တွေကို Types တွေနဲ့ ဖော်ပြနိုင်ပြီး Values တွေကို furture use အတွက် Variables တွေထဲမှာ Store လုပ်ပါတယ်။

## 3.1 Overview and Definitions

JavaScript မှာ type နှစ်မျိုးရှိပါတယ်။

1. Primitive
   - number
   - strings
   - boolean
   - undefined
   - bigint
   - symbol
   - null
2. Object
   - object
   - array
   - set
   - map
   - function
   - class

JavaScript Interpreter သည် memory management အတွက် automatic garbage collection ကိုလုပ်ပါတယ်။ memory deallocation နဲ့ပတ်သတ်လို့ programmer အနေနဲ့ သိပ်စိတ်ပူစရာမလိုပါဘူး။ value တစ်ခုဟာ program မှာ မသုံးတော့ဘူးဆိုရင် interpreter က အဲ့valueယူထားတဲ့ memory ကို ပြန်သိမ်းပါတယ်။

JavaScript ဟာ OOP style ကို support ပါတယ်။ Type တွေမှာ global defined functions တွေအစား သက်ဆိုင်ရာ Type အလိုက် method တွေရှိပါတယ်။ eg. a.sort().

Object တွေမှာ built-in methods တွေရှိသော်လည်း primitive တွေဖြစ်တဲ့ number, string, boolean တို့မှာတော့ method တွေသုံးနိုင်အောင်လုပ်ထားပြီး null, undefined တို့ကတော့ method မရှိတဲ့ value တွေဖြစ်ပါတယ်။

Object type တွေသည် mutable ဖြစ်ပြီး Primitive type တွေသည် immutable ဖြစ်ပါတယ်။ mutable နဲ့ immutable သည် valueကို ပြောင်းလို့ရတာနဲ့ မရတာကို ဆိုလိုတာပါ။

JavaScrpt သည် dynamic typed language ဖြစ်ပါတယ်။ ဆိုလိုတာသည် value တွေကို type တစ်ခုကနေတစ်ခု‌ ပြောင်းနိုင်ပါတယ်။

value တွေကို Constant, variable အဖြစ် သိမ်းနိုင်ပါတယ်။ Constant ဆိုရင် const, variable ဆိုရင် let, var ကိုသုံးရမှာပါ။ Constant, variable တွေဟာ untyped ပါ။ ဆိုလိုတာက variable or Constant ကြေညာရင် value ကိုပဲ သတ်မှတ်ပြီး အဲ့ value က ဘာ type လဲဆိုတာကို မသတ်မှတ်ပါဘူး။

## 3.2 Numbers

Number type သည် primitive type ဖြစ်ပြီး numbers တွေကို ဖော်ပြဖို့သုံးတယ်။ JavaScript သည် numbers တွေကို ဖော်ပြတဲ့အခါ 64-bit floating point format IEEE 754 standard ကိုသုံးတယ်။ 2^-53 - 2^53 range ရှိတဲ့ integers တွေကို အတိအကျဖော်ပြနိုင်ပြီး အဲ့rangeထက်ကျော်ရင်တော့ trailing digit lost ကြောင့် အတိအကျမရတော့ပါဘူး။ large integers တွေအတွက် type သတ်သတ်ရှိပါတယ်။ Array indexing လို operation တွေမှာတော့ 32-bit integers ကိုသုံးပါတယ်။ number တွေကို program မှာ direct ရေးရင် numeric literal လို့ခေါ် ပြီး negative value ရေးချင်ရင် - sign သုံးရမှာပါ။

## 3.2.1 Integer Literals

Integer literals ကို JavaScript မှာ 4 မျိုးရေးနိုင်ပါတယ်။

- base 10 (decimal)
- base 16 (hexadecimal)
- base 2 (binary)
- base 8 (octal)\
   eg. 255 , 0xff , 0b11111111 , 0o377\
  **_JS file က နမူနာ code ကိုကြည့်ပါ_**

## 3.2.2 Floating-Point Literals

Floating Points Literals ဆိုတာက ဒဿမကိန်း ပါတဲ့ number တွေကို ပြောတာပါ။ သူ့ကိုရေးတဲ့အခါ ပုံစံနှစ်မျိုးရှိပါတယ်။

- traditional syntax
- exponential notation\
  eg. 3.14, 6.02e23

JavaScrpt မှာ number တွေရေးတဲ့အခါ separator သုံးချင်ရင် underscore (_) နဲ့ရေးနိုင်ပါတယ်။၏
eg. 1*000_000.000_000\
**_JS file က နမူနာ code ကိုကြည့်ပါ***

## 3.2.3 Arithmetic in JavaScript

JavaScript မှာ Number တွေကို Arithmetic Operator တွေနဲ့ တွဲပြီး အလုပ်လုပ်ပါတယ်။ +, -, *, /, %, ** ဆိုတဲ့ Operators တွေအပြင် Complex mathematical operation တွေလုပ်နိုင်ဖို့ **Math** ဆိုတဲ့ Global Object တစ်ခုထည့်ပေးထားပါတယ်။\
eg. Math.floor(12)

JavaScript မှာ arithematic operation တွေလုပ်တဲ့အခါ overflow, underflow, division by zero ဆိုတဲ့ error မျိုးတွေမပြပါဘူး။ overflow ဆိုတာသည် numeric operation တစ်ခုရဲ့ result က language က ဖော်ပြနိုင်တဲ့ အကြီးဆုံး value ထက်ကြီးတဲ့အခါဖြစ်ပါတယ်။ အဲ့လိုဆိုရင် Infinity ဆိုတဲ့ result ကိုပေးပါတယ်။ ထို့နည်းတူ result က negative value ဖြစ်ပြီး အငယ်ဆုံး negative value ထက်ငယ်နေရင် -Infinity ရမှာပါ။ သူတို့ကို arithematic လုပ်ရင် infinite value ပဲရပါလိမ့်မယ်။

underflow ဆိုတာသည် numeric operation ရဲ့ result ကlanguage ရဲ့ smallest number ထက်ပိုပြီး zero နားကို ကပ်နေတာကိုပြောတာပါ။ အဲ့ချိန်မှာ JS သည် 0 ကို return ပေးပါတယ်။ negative result ဆိုရင် -0 (negative zero) ကိုပေးပါတယ်။

Divison by zero ဆိုရင်တော့ Infinity သို့မဟုတ် -Infinity ပေးပါတယ်။ သို့ပေမယ့် zero divided by zero, infinity divided by infinity, square root of negative number, arithematic operation with non-numeric value ဆိုရင်တော့ NaN (Not a Number) ကိုရပါတယ်။

NaN ကို သူကိုယ်တိုင်နဲ့ရော အခြား value တွေနဲ့ရော compare လုပ်လို့မရဘူး။ value တစ်ခုကို NaN ဟုတ်မဟုတ် စစ်ချင်ရင် x === NaN လို့စစ်လို့မရဘူး။ x != x or Number.isNaN(x) ဆိုပြီးစစ်ရပါမယ်။ Number.isNaN() သည် value က NaN ဖြစ်မှ true ပေးတာပါ။ Global function isNaN() ကတော့ value သည် NaN or non-numeric value ဆိုရင် true ပေးပါတယ်။ အလားတူ Number.isFinite() သည် value က number ဖြစ်မှ true ပေးတာဖြစ်ပြီး Global function isFinite() ကတော့ value က number နဲ့ number အဖြစ် convert လို့ရရင် true ပေးပါတယ်။

0 နဲ့ -0 သည် တူညီလုနီးပါးရှိပါတယ်။ သူတို့ကို compare ရင် true ပါ။ divisor အနေနဲ့သုံးရင်တော့ မညီပါဘူး။\
**_JS file က နမူနာ code ကိုကြည့်ပါ_**

## 3.2.4 Binary Floating-Point and Rounding Errors

JavaScript သည် real number တွေကို ဖော်ပြတဲ့အခါ actual value အစား approximate value ကိုပဲ ဖော်ပြတာမျိုးရှိတယ်။ JavaScript သုံးတဲ့ IEEE-754 floating-point format သည် binary representation ဖြစ်တယ်။ binary ဖြစ်တဲ့အတွက် ဂဏန်းတွေကို 2 power တွေနဲ့အလုပ်လုပ်ပါတယ်။ eg. 1 = 2 ^ 0, 128 = 2^7
floating-pointတွေကို တော့ fraction တွေနဲ့ ဖော်ပြပါတယ်။ eg. 2^ -1 = 1/2, 2^ -3 = 1/8, 2^ -10 = 1/1024. binary fraction တွေရဲ့ အားနည်းချက်က ဒဿမကိန်းတွေကို ဖော်ပြတဲ့အခါ decimal fraction 1/10 တို့လို အတိအကျမ‌ဖော်ပြနိုင်ဘူး။ 0.5 ဆိုရင် 1/2 ဆိုတဲ့ fraction ရှိပေမယ့် 0.1 အတွက် တိကျတဲ့ fraction မရှိလို့ နီးစပ်ရာ fraction တွေကိုပေါင်းပြီး actual value နီးပါး precision ဖြစ်အောင်လုပ်ရပါတယ်။ eg. 0.1 = 1/16 + 1/32 + ... ။ အဲ့ဒါကြောင့် rounding error ဆိုတာပေါ်လာတယ်။ အဲ့လို problem တွေသည် binary floating-point သုံးတဲ့ language တွေမှာ ဖြစ်လေ့ရှိတယ်။ eg. 0.1 + 0.2 = 0.30000000000000004\
**_JS file က နမူနာ code ကိုကြည့်ပါ_**

## 3.2.5 Arbitrary Precision Integers with BigInt

ES6 မှာ BigInt ဆိုတဲ့ numeric type ထည့်သွင်းခဲ့တယ်။ သူကို့ 64-bit integers တွေကို ဖော်ပြဖို့သုံးပါတယ်။ large integer value, millions of digitsတွေ သုံးနိုင်တယ်။ ဒါပေမယ့် Cryptography အတွက်တော့ သုံးဖို့ မသင့်တော်ပါဘူး။ သူ့ကိုရေးမယ်ဆိုရင် sequence of digits နောက်မှာ n ထည့်ပေးရပါတယ်။
eg. 1234n

BigInt() function သုံးပြီး number တွေ numeric string တွေကို BigInt value အဖြစ်ပြောင်းလို့‌ရပါတယ်။ eg. BigInt(Number.MAX_SAFE_INTEGER)

BigInt တွေကို regular number တွေအတိုင်း arithematic operation တွေပြုလုပ်နိုင်ပါတယ်။ division မှာတော့ remainder ရခဲ့ရင် round down (toward zero) လုပ်ပါတယ်။ 

BigInt ကို regular number တွေနဲ့ တွဲပြီး arithematic operation တွေလုပ်လို့မရပါဘူး။ လုပ်ရင် Error ပါ။ ဘာလို့လဲဆိုတော့ type နှစ်ခု မတူတဲ့ value တွေ operation လုပ်ရင် ပိုပြီး general ကျတဲ့ type ကို result အဖြစ် return ပေးပါတယ်။ BigInt နဲ့ number က type မတူပါဘူး။ BigInt သည် large values တွေဖော်ပြနိုင်လို့ number ထက်ပိုပြီး General ကျတယ်လို့ ထင်ရပေမယ့် BigInt က integer only value ဖြစ်နေတဲ့အတွက် number က General ပိုဖြစ်နေပြန်ပါတယ်။ အဲ့ဒါကြောင့် ဒီtype နှစ်ခု မှာ ဘယ် typeက ပိုပြီးgeneral ဖြစ်တယ်ဆိုတာကို ခွဲခြားလို့ခက်ပါတယ်။ အဲ့အတွက် JS ဟာ BigInt ကို other type တွေနဲ့ ရောပြီး arithematic operation လုပ်မရလို့ သတ်မှတ်လိုက်တာပါ။

BigInt သည် regular number တွေနဲ့ arithematic operation လုပ်မရသော်လည်း Comparison operation တွေမှာတော့ ရောလို့ရပါတယ်။ eg. 1 < 2n => true,
0 === 0n => false

BigInt ကို bitwise operators တွေနဲ့ တွဲသုံးနိုင်ပြီး Math Object ရဲ့ operand အနေနဲ့တော့ သုံးလို့မရပါဘူး။\
**_JS file က နမူနာ code ကိုကြည့်ပါ_**

## 3.2.6 Dates and Times

JavaScript မှာ Date and Time တွေအတွက် Date class ကိုသတ်မှတ်ပေးထားတယ်။ Date ဟာ Object ဖြစ်ပေမယ့် timestamp ဆိုတဲ့ numeric representation ရှိပါတယ်။ အဲ့ဒီ timestamp သည် January 1, 1970 ကစပြီးရေတွက်တဲ့ number of milliseconds တွေဖြစ်ပါတယ်။ eg. Date.now()\
**_JS file က နမူနာ code ကိုကြည့်ပါ_**

## 3.3 Text

Text အတွက် JavaScript Type သည် string ပါ။ string ဆိုတာက immutable ordered sequence of 16-bit values (unicode characters) တွေဖြစ်ပါတယ်။ string ရဲ့ length ဆိုတာသည် number of 16-bit values ကိုပြောတာပါ။ string ကို array လို zero-based indexing သုံးပြီး 16-bit value တစ်ခုဆီကို ထုတ်ကြည့်လို့ရပါတယ်။ empty string ဆိုတာက length 0 ကိုပြောတာဖြစ်ပြီး single value ကိုပြချင်ရင်တော့ length 1 ရှိတဲ့ string ကိုသုံးရမှာပါ။  

JavaScript ရဲ့ Unicode Character set သည် UTF-16 encoding ကိုသုံးပါတယ်။ ဒါကြောင့် character ရဲ့ Codepoints ဟာ 16 bitsနဲ့ ကိုက်ညီရင် one element လို့ ယူဆပြီး fit မဖြစ်ရင်တော့ two elements (surrogate pair) လို့ ယူပါတယ်။ ဆိုလိုတာက တစ်ခါတစ်ရံ single character ကို length 2ရှိတယ်လို့ ပြနိုင်တာကို ပြောတာပါ။ 

string method တော်တော်များများကတော့ 16-bit values ပေါ်မှာ သတ်မှတ်ထားတဲ့အတွက် surrogate pair, normalization တွေမစဉ်းစားတော့ပါဘူး။ ES6 မှာ for/of, ... operator တွေသုံးပြီး string ရဲ့ character တစ်ခုဆီကို iterate လုပ်နိုင်ပါတယ်။\
***JS file က နမူနာ code ကိုကြည့်ပါ***

## 3.3.1 String Literals

JavaScript မှာ string ကိုရေးချင်ရင် single quotation(''), double quotation(""), backtick(``) ကြားမှာရေးရင်ရပါပြီ။ ES6 မှ backtick ကိုထည့်သွင်းခဲ့တာပါ။ ES5 မှာတော့ string literal ဟာ single-line string နဲ့ JavaScript Expression တွေကို + operator နဲ့ concatenation လုပ်ပါတယ်။ multiple line ‌ရေးချင်ရင် line အဆုံးမှာ \ ထည့်ပေးရပါမယ်။ newline ရေးချင်ရင်တော့ \n ကိုသုံးရမှာပါ။ backtick syntax မှာတော့ multiple line အတွက် ဘာမှရေးစရာမလိုပါဘူး။ 

single quotes ထဲမှာ single quotes ရေးချင်တာပဲဖြစ်ဖြစ် double quotes မှာ double quotes ရေးချင်တာဖြစ်ဖြစ် \ သုံးပြီး escaping လုပ်ပေးရပါတယ်။ 

HTML code တွေနဲ့ JavaScript Code တွေရောရေးရင် style တစ်ခုဆီသုံးတာပိုကောင်းပါတယ်။ eg. JavaScript အတွက် '', HTML အတွက် ""သုံးတာမျိုးပါ။ 
eg. onclick="alert('Thank you')"
***JS file က နမူနာ code ကိုကြည့်ပါ***

## 3.3.2 Escape Sequences in String Literals

backslash character \ ရဲ့ နောက်မှာ character တစ်ခုခုလိုက်ရင် string မှာ representable  မလုပ်နိုင်တဲ့ character အဖြစ်ပြောင်းနိုင်ပါတယ်။ ၎င်းကို **escape sequence** လို့ခေါ်ပါတယ်။  

**List of escape sequences**

- \0 The NUL character (\u0000)
- \b Backspace (\u0008)
- \t Horizontal tab (\u0009)
- \n Newline (\u000A)
- \v Vertical tab (\u000B)
- \f Form feed (\u000C)
- \r Carriage return (\u000D)
- \" Double quote (\u0022)
- \' Apostrophe or single quote (\u0027)
- \\\ Backslash Backslash (\u005C)
- \xnn The Unicode character specified by the two hexadecimal digits nn
- \unnnn The Unicode character specified by the four hexadecimal digits nnnn
- \u{n} The Unicode character specified by the codepoint n, where n is one to six hexadecimal digits between 0 and
   10FFFF (ES6)

list ထဲက character တွေမဟုတ်ဘဲ အခြား character တွေဆိုရင်တော့ \ ကို ignore လုပ်မှာပါ။ 

***JS file က နမူနာ code ကိုကြည့်ပါ***

## 3.3.3 Working with Strings

string တွေကို concatenate လုပ်မယ်ဆိုရင် **+** ကိုသုံးရပါတယ်။ **+** သည် first operand မှာ second operand ကို သွား join တာပါ။ eg. "Hello, " + "world!"

string တွေကို ===, !===,  <=, =>, >, < operators တွေနဲ့ comparison လုပ်နိုင်ပါတယ်။ string နှစ်ခုဟာ ထပ်တူကျမှသာ ညီမှာဖြစ်ပါတယ်။  

string ရဲ့ character အရေအတွက်ကိုလိုချင်ရင် length ဆိုတဲ့ property ကိုသုံးရမှာပါ။

JS မှာ string အတွက် API (method) များစွာသတ်မှတ်ပေးထားပါတယ်။ 

string ဟာ immutable ဖြစ်တဲ့အတွက် string modify function တွေဆိုရင် origin string ကို modify လုပ်တာမဟုတ်ဘဲ new string ကို return ပေးတာပါ။

string ကို read-only arrays တွေလို [] သုံးပြီး individual character တွေကို access လုပ်လို့ရပါတယ်။ 

***JS file က နမူနာ code ကိုကြည့်ပါ***

## 3.3.4 Template Literals

template literals ဆိုတာက ES6 မှာထည့်သွင်းခဲ့တဲ့ string literal ပုံစံတစ်မျိုးဖြစ်ပါတယ်။ quotation အစား backtick (``) ကြားမှာရေးရပါတယ်။ regualr string literal တွေနဲ့မတူတာက template literal ထဲမှာ JS expression တွေထည့်လို့ရပါတယ်။ 
eg. let greeting = `Hello ${ name }.`; // greeting == "Hello Bill.". အလုပ်လုပ်ပုံကတော့ ${} ကြားထဲက expression ရဲ့ value ကိုတွက်ထုတ်ပြီး string ကိုပြောင်း template ရဲ့ ${} နေရာမှာ value ကို အစားထိုးလိုက်တာပါ။ ${} အပြင်က normal string text တွေပါ။

template literals ထဲမှာ expression ကြိုက်သ‌လောက်ထည့်နိုင်တယ်။ escape character တွေသုံးနိုင်တယ်။ escaping လုပ်စရာမလိုဘူး။ line တွေကိုလည်း ကြိုက်သလောက် span နိုင်တယ်။ 

template literals မှာ tagged template literals ဆိုတဲ့ အသုံးနည်းတဲ့ feature တစ်ခုရှိတယ်။ သူက opening backtick ရဲ့အရှေ့က tag function ဖြစ်ခဲ့ရင် `` ထဲက value တွေကို function ရဲ့ argument အဖြစ် pass ပေးလိုက်တယ်။ () မလိုပါဘူး။ String.raw ဆိုတဲ့ build-in tag function တစ်ခုရှိတယ်။ သူက backtick ထဲက \ တွေကို ignore လုပ်ပါတယ်။ Own template tag function တွေ ဖန်တီးနိုင်ပါတယ်။  

***JS file က နမူနာ code ကိုကြည့်ပါ***


## 3.3.5 Pattern Matching

JS မှာ string တွေကို pattern matching လုပ်ဖို့ regular expression (RegExp) ဆိုတဲ့ data type ရှိတယ်။ regular expression literal ရေးချင်ရင် // နှစ်ခုကြားမှာရေးရတယ်။ eg. /^HTML/ RegExp မှာလည်း build-in method တွေရှိသလို string method တွေမှာလည်း RegExp ကိုလက်ခံတဲ့ method တွေရှိပါတယ်။

***JS file က နမူနာ code ကိုကြည့်ပါ***

## 3.4 Boolea Values

boolean မှာ value နှစ်မျိုးပဲရှိပါတယ်။ true နဲ့ false ပါ။ comparison လုပ်တဲ့အခါတွေမှာ true, false ရပါတယ်။ eg. a === 1. boolean ကို control structure (if/else) တွေမှာ သုံးလေ့ရှိပါတယ်။ JavaScript သည် dynamic type programming ဖြစ်တဲ့အတွက် other value တွေကို boolean value အဖြစ်ပြောင်းနိုင်ပါတယ်။ null, undefined, "", NaN, 0, -0 တွေသည် falsy value (false တန်ဖိုးပေးသော) ဖြစ်ပြီး အခြား value တွေကတော့ truthy (true တန်ဖိုးပေးသော) value  ဖြစ်ပါတယ်။ eg. if(a !== null) အစား if(a) လို့ရေးလို့ရတာကိုဆိုလိုတာပါ။ ဒါပေမယ့် မတူတာက ပထမ if သည်  a ဟာ null နဲ့ မညီမှ block ကို execute ပြီး ဒုတိယ if ကတော့ a ဟာ false or other falsy values မဟုတ်မှ block ကို execute လုပ်မှာဖြစ်ပါတယ်။ value ပေါ်မူတည်ပြီး စစ်ချင်တာဆိုရင်တော့ ပထမနည်း explicit comparison ကိုပဲသုံးရမှာပါ။ 

Boolean မှာ toString() method ရှိပါတယ်။ သူက string "true", "false" return ပြန်ပါတယ်။ 

&&, ||, ! ဆိုတဲ့ logical operators (boolean opeartors) နဲ့ တွဲသုံးလေ့ရှိပါတယ်။

***JS file က နမူနာ code ကိုကြည့်ပါ***