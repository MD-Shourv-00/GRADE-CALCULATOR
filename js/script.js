let midTermMarks = document.getElementById('mid-term-marks');
let othersNumber = document.getElementById('others-number');
let showMarks = document.getElementById('show-marks');
let submiteBtn = document.querySelector('.submite-btn');
let input = document.getElementsByTagName('input');
let massageOutput = document.getElementById('massage-output');

// minimum numbers calculate
let minimunMidMarks = "";
let minimumOthersNumber = "";
// smart placeholder changing
midTermMarks.addEventListener('input', function(){

    minimumOthersNumber = Math.round((30 - midTermMarks.value*0.25)*100)/100;

    if(midTermMarks.value == ""){
        othersNumber.placeholder = "Input others marks";
    } else {
        othersNumber.placeholder = `minimum ${minimumOthersNumber} marks need`
    }
})

othersNumber.addEventListener('input', function(){

     minimunMidMarks = Math.round(((30 - othersNumber.value)*4)*100)/100;

    if(othersNumber.value == ""){
        midTermMarks.placeholder = "Input Mid term marks";
    } else {
        midTermMarks.placeholder = `minimum ${minimunMidMarks} marks need`
    }
})

// after submite operation
submiteBtn.addEventListener('click', function(){
    let inputMidMarks = Number(midTermMarks.value) || ""; // empty input, keep ""
    let inputOthersMarks = Number(othersNumber.value) || "" ;
    
    // empty input then red border show in input filed + Range check
        if (
            (inputMidMarks === '' || inputOthersMarks === '') ||
            (inputMidMarks < 0 || inputMidMarks > 100) ||
            (inputOthersMarks < 0 || inputOthersMarks > 25)
        ) {
            for (let c of input) {
                c.classList.add("input-required");
            }
            return;
        } else {
            for (let c of input) {
                c.classList.remove("input-required");
            }
        }

        // if not possible to get a+
        if(inputMidMarks < minimunMidMarks || inputOthersMarks < minimumOthersNumber){
            showMarks.innerText = 'SORRY';
            massageOutput.innerText = `you won't get A+ in this subject`
            return;
        }

    
    let finalMarks = 80 - ((inputMidMarks*0.25) + inputOthersMarks);

    console.log(finalMarks);

    showMarks.innerText = `${Math.round(((finalMarks*2)*100))/100} Marks`;

    massageOutput.innerText = `need in final exam to get 80 marks or A+ in this subject. Best of Luck!`;

})


