//העתקת התוצאה 


// משתנים
const leng = document.querySelector("#lang");
let lengVAL = document.querySelector("#lang").value;
const btn = document.querySelector(".btn"); // מתחיל את התוכנה 
const outputDiv = document.querySelector(".output");
const btnCopy = document.querySelector("#copy");
let inputVAL;


//שינוי שפה עברית -אנגלית 
leng.addEventListener("change" , event => {
    const result = document.querySelector("#lang").value;
    lengVAL = result;
    // console.log(lengVAL);
});

//אינפוט לוקח מידע ומפעיל את התוכנה
btn.addEventListener("click", () => {
    // משתנה שלוקח את הערך שבתוך האינפוט 
    inputVAL = document.querySelector("#input").value;
    // console.log(inputVAL);

    //פעולה שמשנה מאנגלית לעברית והפוך
    change(inputVAL);

});



//פעולות
const change = (inputValue) => {
    let outcome = [];
    //לקחת ערך ולחלק אותו לאותיות
    let x =inputValue.split('');
    //console.log(x)
    //לשנות ערך של אותיות לקוד
    x.forEach(word => {
        let a;
        if(lengVAL === "engTOheb") { //להפוך קוד לשפה 
            // a = letters[word].heb;
            // console.log(a.heb)

            lettres.forEach(z => {
                if(word === z.eng) {
                    a = z.heb;
                    // console.log(z.heb);
                }
            })
        }
        else if (lengVAL === "hebTOeng"){
            // a = letters[word].eng;
            // console.log(a.eng)

            lettres.forEach(z => {
                if(word === z.heb) {
                    a = z.eng;
                    // console.log(z.eng);
                }
            })
        }else {
            lettres.forEach(z => {
                if(word === z.ENG) {
                    a = z.heb;
                    // console.log(z.heb);
                }
            })
        }
        
        outcome.push(a);
    });

    // console.log(outcome);
    // console.log(outcome.join(''));


    outputDiv.innerHTML = outcome.join(''); //הצגת התוצאה 
    

}


const copyFun = () => {
    btnCopy.addEventListener("click", () =>{
        navigator.clipboard.writeText(outputDiv.innerHTML);
        alert("Copied the text: " + outputDiv.innerHTML);    
    
    })
    
}
copyFun()

const lettres = [
    {
        eng: 'q',
        ENG: 'Q',
        heb: '/'
    },
    {
        eng: 'w',
        ENG: 'W',
        heb: "'"
    },
    {
        eng: 'e',
        ENG: 'E',
        heb: 'ק'
    },
    {
        eng: 'r',
        ENG: 'R',
        heb: 'ר'
    },
    {
        eng: 't',
        ENG: 'T',
        heb: 'א'
    },
    {
        eng: 'y',
        ENG: 'Y',
        heb: 'ט'
    },
    {
        eng: 'u',
        ENG: 'U',
        heb: 'ו'
    },
    {
        eng: 'i',
        ENG: 'I',
        heb: 'ן'
    },
    {
        eng: 'o',
        ENG: 'O',
        heb: 'ם'
    },
    {
        eng: 'p',
        ENG: 'P',
        heb: 'פ'
    },
    {
        eng: 'a',
        ENG: 'A',
        heb: 'ש'
    },
    {
        eng: 's',
        ENG: 'S',
        heb: 'ד'
    },
    {
        eng: 'd',
        ENG: 'D',
        heb: 'ג'
    },
    {
        eng: 'f',
        ENG: 'F',
        heb: 'כ'
    },
    {
        eng: 'g',
        ENG: 'G',
        heb: 'ע'
    },
    {
        eng: 'h',
        ENG: 'H',
        heb: 'י'
    },
    {
        eng: 'j',
        ENG: 'J',
        heb: 'ח'
    },
    {
        eng: 'k',
        ENG: 'K',
        heb: 'ל'
    },
    {
        eng: 'l',
        ENG: 'L',
        heb: 'ך'
    },
    {
        eng: ';',
        ENG: ';',
        heb: 'ף'
    },
    {
        eng: "'",
        ENG: "'",
        heb: ','
    },
    {
        eng: "z",
        ENG: 'Z',
        heb: 'ז'
    },
    {
        eng: "x",
        ENG: 'X',
        heb: 'ס'
    },
    {
        eng: "c",
        ENG: 'C',
        heb: 'ב'
    },
    {
        eng: "v",
        ENG: 'V',
        heb: 'ה'
    },
    {
        eng: "b",
        ENG: 'B',
        heb: 'נ'
    },
    {
        eng: "n",
        ENG: 'N',
        heb: 'מ'
    },
    {
        eng: "m",
        ENG: 'M',
        heb: 'צ'
    },
    {
        eng: ",",
        ENG: ',',
        heb: 'ת'
    },
    {
        eng: ".",
        ENG: '.',
        heb: 'ץ'
    },
    {
        eng: "/",
        ENG: '/',
        heb: '.'
    },


    

];

