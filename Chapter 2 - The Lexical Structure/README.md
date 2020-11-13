# Chapter 2 - Lexical Structure

Lexical Structure ဆိုတာက prgramming language တစ်ခုအတွက် သတ်မှတ်ထားတဲ့ အခြေခံစည်းမျဉ်းတွေ ဖြစ်ပါတယ်။ lowest-level syntax ဖြစ်ပြီးတော့ program ကို ဘယ်လိုရေး
ရမယ်၊ variable နာမည်ကိုဘယ်လိုပေးရမယ်စသော ရေးထုံးတွေကို ပြောတာဖြစ်ပါတယ်

## 2.1 The Text of a JavaScript Program

JavaScript ဟာ case-sensitive language ဖြစ်ပါတယ်။ ဆိုလိုသည်မှာ language ရဲ့ keywords တွေ variable တွေကို ပေးထားတဲ့ အတိုင်းပဲရေး ရပါတယ်။
eg. while ကို While လို့ရေးလို့မရပါဘူး။

JavaScript ဟာ whitespace တွေကို ignore လုပ်ပါတယ်။ whitespace ဆိုတာက space, tab, line break တို့ကိုဆိုလိုတာပါ။ အဲ့ဒါကြောင့် program တွေကို လိုသလို indentလုပ်ပြီး readabilty နဲ့ understandabilty ကို ကောင်းမွန်အောင် လုပ်ဆောင်နိုင်ပါတယ်။

## 2.2 Comments

JavaScript မှာ comment တွေကို style နှစ်မျိုးနဲ့ရေးလို့ရပါတယ်။ single line အတွက် //, multiple line အတွက် /* */ ကိုအသုံးပြုရမှာပါ။

eg.
// This is a single-line comment.

/* This is multiple-line\
 comment */

/*\
 *This is also multiple-line comment\
 *This is called Docs Comment\
 */

## 2.3 Literals

Literal ဆိုတာကတော့ program မှာ တိုက်ရိုက်ရေးတဲ့ data value တွေကို ပြောတာဖြစ်ပါတယ်။\
eg. "Hello, World!", 1.2, true, null

## 2.4 Identifiers and Reserved Words

Identifiers ဆိုတာကတော့ variable, function, class စသည်တို့ကို ကြေညာတဲ့အခါမှာ ပေးတဲ့နာမည်တွေကို ဆိုလိုပါတယ်။
indentifier(name) ပေးတဲ့အခါမှာ သတ်မှတ်ထားတဲ့ rules တွေရှိပါတယ်။

- နာမည်တွေဟာ letter(a,b,c,...), underscore(_), dollar sign($) နဲ့ပဲ စရပါမယ်။
- နောက်က characters တွေကတော့ digits, letters, underscores, dollar signs တွေဖြစ်နိုင်ပါတယ်။
- ဂဏန်းနဲ့ စလို့မရပါဘူး\
  eg. i, number1, user_name, _id, $name

## 2.4.1 Reserved Words

Reserved words ဆိုတာသည် language ကနေ အသုံးပြုထားတဲ့ identifers တွေကိုပြောတာဖြစ်ပါတယ်။ အများအားဖြင့်
သူတို့ကို variable, function နာမည်တွေအဖြစ်ပေးလို့မရပါဘူး။ သို့သော် တချို့သော keywords တွေကို program ရဲ့ syntax ကိုလိုက်ပြီး identifier အဖြစ်အသုံးပြုလို့ရတဲ့နေရာတွေရှိပါတယ်။ eg. let ဆိုတဲ့ keyword ကို variable name အဖြစ် var keyword နဲ့ သုံးတာမျိုးပါ။ တစ်ချို့နာမည်တွေကို languageရဲ့ furture version အတွက် ကြိုပြီး reserve လုပ်ထားတာမျိုးလည်းရှိပါတယ်။ eg. enum, implements. အကောင်းဆုံးကတော့ langauage keyword တွေကို identifier တွေအဖြစ်သုံးတာမျိုးကို ရှောင်တာပါပဲ။ set, from, target တို့ကိုတော့ သုံးလို့ရပါတယ်။
keywords တွေကတော့ as, const, export, get, null, target, void, async, continue, extends, if, of, this, while, await, debugger, false, import, return, throw, with, break, default, finally, in, set, true, yield, case, delete, for, instanceof, static, try, catch, do, from, let, super, typeof, class, else, function, new, switch, var, enum, implements, interface, package, private, protected, public, arguments, eval စသည်တို့ဖြစ်ပါတယ်။

## 2.5 Unicode

JavaScript Program တွေသည် Unicode character set ကိုအသုံးပြုပါတယ်။ Any Unicode Character ကို program မှာရေးနိုင်တယ်။ ဒါပေမယ့် programming convention အရ portability နဲ့ ease of editing ဖြစ်အောင် ASCII Character တွေနဲ့ digits တွေကိုပဲ identifier တွေမှာသုံးပါတယ်။ language ကတော့ letters, digit, ideograph, non-english words, mathematical symbols တွေကို ခွင့်ပြုထားပါတယ်။ identifier တွေမှာတော့ emoji ကိုတော့ခွင့်မပြုထားပါဘူး။\
eg. const π = 3.14; const sí = true; const နာမည် = "ထွဋ်ဝေဖြိုး";\
***JavaScript file က code ကိုကြည့်ပါ။***

## 2.5.1 Unicode Escape Sequences

အချို့ hardware နဲ့ software တွေဟာ Unicode character တွေကို မှန်ကန်အောင် မဖော်ပြနိုင်သလို process လည်းမလုပ်နိုင်ပါဘူး။ အဲ့လို old technology တွေသုံးထားတဲ့ system တွေအတွက် JavaScript က unicode escape sequence ကိုပြုလုပ်ပေးထားပါတယ်။ escape sequence ဆိုတာက unicode character တွေကို direct မရေးဘဲ ASCII character တွေသုံးပြီးရေးတာပါ။ ရေးမယ်ဆိုရင် **\u** နဲ့ စပြီး နောက်က **hexadecimal value** တွေလိုက်ပါတယ်။ သူတို့ကို string literal, regualar expression, identifers တွေမှာ သုံးလို့ရပါတယ်။ eg. é = \u00E9.\
ရေးတဲ့အခါ သုံးမျိုးနဲ့ရေးနိုင်တယ်။
- é  //  Unicode character
- \u00e9 //  An escape sequence
- \u{E9} //  another form of the same escape sequence
old version မှာတော့ 4-digit escape sequence ကိုပဲရေးလို့ရပြီး curly brace syntax ကို ES6 မှသာ emoji လိုမျိုး 16 bit unicode codepoint ထက်ပိုတဲ့ character တွေအတွက် ထုတ်ခဲ့တာပါ။\
***JavaScript file က code ကိုကြည့်ပါ။***