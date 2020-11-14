# Chapter 3 - Types, Values & Variables

Computer Program တွေသည် Values တွေကို manipulate လုပ်ပြီးး အလုပ်လုပ်ပါတယ်။ Values တွေကို Types တွေနဲ့ ဖော်ပြနိုင်ပြီး Values တွေကို furture use အတွက် Variables တွေထဲမှာ Store လုပ်ပါတယ်။

## 3.1 Overview and Definitions

JavaScript မှာ type နှစ်မျိုးရှိပါတယ်။\

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
   - class\

JavaScript Interpreter သည် memory management အတွက် automatic garbage collection ကိုလုပ်ပါတယ်။ memory deallocation နဲ့ပတ်သတ်လို့ programmer အနေနဲ့ သိပ်စိတ်ပူစရာမလိုပါဘူး။ value တစ်ခုဟာ program မှာ မသုံးတော့ဘူးဆိုရင် interpreter က အဲ့valueယူထားတဲ့ memory ကို ပြန်သိမ်းပါတယ်။

JavaScript ဟာ OOP style ကို support ပါတယ်။ Type တွေမှာ global defined functions တွေအစား သက်ဆိုင်ရာ Type အလိုက် method တွေရှိပါတယ်။ eg. a.sort().

Object တွေမှာ built-in methods တွေရှိသော်လည်း primitive တွေဖြစ်တဲ့ number, string, boolean တို့မှာတော့ method တွေသုံးနိုင်အောင်လုပ်ထားပြီး null, undefined တို့ကတော့ method မရှိတဲ့ value တွေဖြစ်ပါတယ်။
