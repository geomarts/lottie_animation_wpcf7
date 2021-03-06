/*VARIABLES*/
const formWithLottieAnimations = document.querySelector(
    ".form-with-lottie-animations"
);
const player = formWithLottieAnimations.querySelector("lottie-player");
const submitBtn = formWithLottieAnimations.querySelector(".wpcf7-submit");
const submitBtnSpan = submitBtn.querySelector("span");
const responseOutput = formWithLottieAnimations.querySelector(
    ".wpcf7-response-output"
);
const showClass = "show";
const invisibleClass = "invisible";

/*CLICK EVENT*/
submitBtn.addEventListener("click", function () {
    submitBtnSpan.classList.add(invisibleClass);
    player.classList.remove(invisibleClass);

    const notValidEls = formWithLottieAnimations.querySelectorAll(
        ".wpcf7-not-valid-tip"
    );
    if (notValidEls.length > 0) {
        for (const notValidEl of notValidEls) {
            notValidEl.classList.remove(showClass);
        }
    }
    responseOutput.classList.remove(showClass);
});

/*CF7 AJAX EVENT*/
document.addEventListener("wpcf7invalid", function () {
    player.getLottie().playSegments([419, 819], true);
});

document.addEventListener("wpcf7mailsent", function () {
    player.getLottie().playSegments([0, 385], true);
});

/*LOTTIE PLAYER COMPLETE EVENT*/
player.addEventListener("complete", function () {
    this.classList.add(invisibleClass);
    submitBtnSpan.classList.remove(invisibleClass);

    const notValidEls = formWithLottieAnimations.querySelectorAll(
        ".wpcf7-not-valid-tip"
    );
    if (notValidEls.length > 0) {
        for (const notValidEl of notValidEls) {
            notValidEl.classList.add(showClass);
        }
    }
    responseOutput.classList.add(showClass);

    this.seek(841);
});
