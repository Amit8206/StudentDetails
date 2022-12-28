const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

// if (validate()) {
    nextBtns.forEach((btn) => {
        btn.addEventListener("click", () => {

            formStepsNum++;
            updateFormSteps();
            // updateProgressbar();
        });
    });
// }



prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressbar();
    });
});

function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
            formStep.classList.remove("form-step-active");
    });

    formSteps[formStepsNum].classList.add("form-step-active");
}

// function updateProgressbar() {
//     progressSteps.forEach((progressStep, idx) => {
//         if (idx < formStepsNum + 1) {
//             progressStep.classList.add("progress-step-active");
//         } else {
//             progressStep.classList.remove("progress-step-active");
//         }
//     });

//     const progressActive = document.querySelectorAll(".progress-step-active");

//     progress.style.width =
//         ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
// }


function validate() {

    var studentnamefirst = document.forms["regform"]["studentnamefirst"].value;
    var studentnamelast = document.forms.studentnamelast.value;
    var date = document.form.date.value;
    var email = document.form.email.value;
    var fathernamefirst = document.form.fathernamefirst.value;
    var fathernamelast = document.form.fathernamelast.value;
    var mothernamefirst = document.form.mothernamefirst.value;
    var mothernamelast = document.form.mothernamelast.value;
    var gender = document.form.gender.value;
    var nation = document.form.nation.value;
    var address = document.form.address.value;
    var city = document.form.city.value;
    var country = document.form.country.value;
    var phone = document.form.phone.value;
    var mobile = document.form.mobile.value;


    if (studentnamefirst == null || studentnamefirst == "") {
        alert("First Name can't be blank");
        return false;
    }
    // else if (studentnamelast == null || studentnamelast == "") {
    //     alert("Last Name can't be blank");
    //     return false;
    // }
    // else if (email == null || email == "") {
    //     alert("Email can't be blank");
    //     return false;
    // }
   

}