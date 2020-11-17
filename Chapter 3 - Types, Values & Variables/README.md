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