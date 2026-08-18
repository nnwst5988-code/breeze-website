// ظهور العناصر أثناء النزول

const sections = document.querySelectorAll(
"section"
);


const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});


},
{
threshold:.15
}
);



sections.forEach(section=>{

observer.observe(section);

});




// تغيير الهيدر عند النزول

window.addEventListener(
"scroll",
()=>{

const header =
document.querySelector("header");


if(window.scrollY > 50){

header.style.boxShadow =
"0 10px 30px rgba(0,0,0,.08)";

}

else{

header.style.boxShadow="none";

}


});



function openAudit(){

let name = prompt(
"ما اسم شركتك؟"
);


if(name){

alert(
"شكراً "+name+
"\nسنبدأ بتحليل نقاط قوة وضعف هويتك."
);

}

}




document
.getElementById("projectForm")
.addEventListener("submit", async function(e){


e.preventDefault();



let imageUrl="لا توجد صورة";

let imageFile =
document.getElementById("image").files[0];





// رفع الصورة إلى Cloudinary

if(imageFile){


let formData = new FormData();


formData.append(
"file",
imageFile
);


formData.append(
"upload_preset",
"breeze_upload"
);



let response =
await fetch(

"https://api.cloudinary.com/v1_1/jyc5dude/image/upload",

{

method:"POST",

body:formData

}

);



let data =
await response.json();



imageUrl =
data.secure_url;


}




let styles=[];


document
.querySelectorAll(
'.options input:checked'
)
.forEach(item=>{

styles.push(item.value);

});





let message = `

مرحباً بريز 👋

أريد بناء هوية بصرية جديدة.

👤 الاسم:
${name.value}


🏢 الشركة:
${company.value}


📌 المجال:
${field.value}


🎯 الهدف:
${goal.value}


✨ الأسلوب:
${styles.join(" - ")}


🎨 الألوان:
${colors.value}


💡 فكرة الشعار:
${idea.value}


💰 الميزانية:
${budget.value}


🖼 الصورة المرجعية:
${imageUrl}


`;





let phone =
"249124808770";



let whatsapp =

"https://wa.me/"
+
phone
+
"?text="
+
encodeURIComponent(message);



window.open(
whatsapp,
"_blank"
);



});





let score = 0;
let questionsAnswered = 0;


function answer(value){

score += value;

questionsAnswered++;

}



function showResult(){


if(questionsAnswered < 5){

alert("أكمل جميع الأسئلة أولاً");

return;

}



let text="";


if(score <= 2){

text =
"علامتك الحالية قد لا تعكس قيمة عملك بالشكل الكافي. هناك فجوة بين جودة ما تقدمه والصورة التي يراها العملاء. بريز تستطيع مساعدتك في بناء هوية أقوى ترفع القيمة المدركة.";

}


else if(score <=4){

text =
"علامتك لديها أساس جيد، لكنها تحتاج إلى نظام بصري أكثر وضوحاً وتميزاً لتنافس بقوة أكبر وتدعم أسعارك.";

}


else{

text =
"علامتك قوية، لكن يمكن تطوير حضورها لتصبح أكثر احترافية وقابلية للنمو.";

}



document.getElementById("resultText").innerHTML=text;



let message =
"مرحباً بريز، أريد تطوير هويتي البصرية بعد تحليل العلامة.";


let whatsapp =
"https://wa.me/249124808770?text="
+encodeURIComponent(message);



document.getElementById("whatsappBtn").href=whatsapp;



document.getElementById("result").style.display="block";


}