# Chapter 2 - Lexical Structure

Lexical Structure ဆိုတာက prgramming language တစ်ခုအတွက် သတ်မှတ်ထားတဲ့ အခြေခံစည်းမျဉ်းတွေ ဖြစ်ပါတယ်။ lowest-level syntax ဖြစ်ပြီးတော့ program ကို ဘယ်လိုရေး
ရမယ်၊ variable နာမည်ကိုဘယ်လိုပေးရမယ်စသော ရေးထုံးတွေကို ပြောတာဖြစ်ပါတယ်

## 2.1 The Text of a JavaScript Program

JavaScript ဟာ case-sensitive language ဖြစ်ပါတယ်။ ဆိုလိုသည်မှာ language ရဲ့ keywords တွေ variable တွေကို ပေးထားတဲ့ အတိုင်းပဲရေး ရပါတယ်။
eg. while ကို While လို့ရေးလို့မရပါဘူး။

JavaScript ဟာ whitespace တွေကို ignore လုပ်ပါတယ်။ whitespace ဆိုတာက space, tab, line break တို့ကိုဆိုလိုတာပါ။ အဲ့ဒါကြောင့် program တွေကို လိုသလို indent 
လုပ်ပြီး readabilty နဲ့ understandabilty ကို ကောင်းမွန်အောင် လုပ်ဆောင်နိုင်ပါတယ်။

## 2.2 Comments

JavaScript မှာ comment တွေကို style နှစ်မျိုးနဲ့ရေးလို့ရပါတယ်။ single line အတွက် //, multiple line အတွက်  /* */ ကိုအသုံးပြုရမှာပါ။

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
သူတို့ကို variable, function နာမည်တွေအဖြစ်ပေးလို့မရပါဘူး။ သို့သော် တချို့သော keywords တွေကို program ရဲ့ syntax ကိုလိုက်ပြီး identifier အဖြစ်အသုံးပြုလို့ရတဲ့နေရာတွေရှိပါတယ်။ eg. let ဆိုတဲ့ keyword ကို variable name အဖြစ် var keyword နဲ့ သုံးတာမျိုးပါ။ တစ်ချို့နာမည်တွေကို languageရဲ့ furture version အတွက် ကြိုပြီး reserve လုပ်ထားတာမျိုးလည်းရှိပါတယ်။ eg. enum, implements. အကောင်းဆုံးကတော့ langauage keyword တွေကို  identifier တွေအဖြစ်သုံးတာမျိုးကို ရှောင်တာပါပဲ။ set, from, target တို့ကိုတော့ သုံးလို့ရပါတယ်။
keywords တွေကတော့ as, const, export, get, null, target, void, async, continue, extends, if, of, this, while, await, debugger, false, import, return, throw, with, break, default, finally, in, set, true, yield, case, delete, for, instanceof, static, try, catch, do, from, let, super, typeof, class, else, function, new, switch, var, enum, implements, interface, package, private, protected, public, arguments, eval စသည်တို့ဖြစ်ပါတယ်။