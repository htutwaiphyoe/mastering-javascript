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