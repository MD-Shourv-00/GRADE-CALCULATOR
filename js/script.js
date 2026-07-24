let midTermMarks = document.getElementById('mid-term-marks');
let othersNumber = document.getElementById('others-number');
let showMarks = document.getElementById('show-marks');
let submiteBtn = document.querySelector('.submite-btn');
let input = document.getElementsByTagName('input');
let massageOutput = document.getElementById('massage-output');

// smart placeholder changing
midTermMarks.addEventListener('input', function(){
    if(midTermMarks.value == ""){
        othersNumber.placeholder = "Input others marks";
    } else {
        othersNumber.placeholder = `minimum ${30 - midTermMarks.value*0.25} marks need`
    }
})

othersNumber.addEventListener('input', function(){
    if(othersNumber.value == ""){
        midTermMarks.placeholder = "Input Mid term marks";
    } else {
        midTermMarks.placeholder = `minimum ${(30 - othersNumber.value)*4} marks need`
    }
})

// after submite operation
submiteBtn.addEventListener('click', function(){
    let inputMidMarks = midTermMarks.value ;
    let inputOthersMarks = othersNumber.value ;
    console.log(inputMidMarks)
    console.log(inputOthersMarks)
    // empty input then red border show in input filed + Range check
        if (
            (inputMidMarks === '' || inputOthersMarks === '') ||
            (inputMidMarks < 0 || inputMidMarks > 100) ||
            (inputOthersMarks < 0 || inputOthersMarks > 25 || inputOthersMarks < )
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
        if(inputMidMarks < 20 || inputOthersMarks < 10){
            showMarks.innerText = 'SORRY';
            massageOutput.innerText = `you won't get A+ in this subject`
            return;
        }



    
    let finalMarks = 80 - ((inputMidMarks*0.25) + inputOthersMarks);

    massageOutput.innerText = `need in final exam to get 80 marks or A+ in this subject. Best of Luck!`;


    showMarks.innerText = `${finalMarks*2} Marks`;

})


