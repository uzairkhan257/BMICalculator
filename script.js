// window.onload = () => {
//     const button = document.querySelector(`#btn`);
//     button.addEventListener('onclick,calculateBMI')
// }

function calculateBMI(){
    const heigth = document.querySelector('#heigth').value;
    const weigth = document.querySelector('#weigth').value;
    let result = document.querySelector('#result');
    if (!heigth || heigth <0){
        result.innerHTML = "Please provide a valid height..." ;
    }
    else if (!weigth|| weigth<0){
        result.innerHTML = "Please provide a valid weight..." ;
    }
    else{
    let bmi =(weigth/(heigth*heigth)).toFixed(2);
    console.log(bmi);
        result.innerHTML=`your BMI Result Is  ${bmi}`;
    }

}

// validation of height and weight inputs
// fix the formula
// empty text boxes validation
// boot strap layou