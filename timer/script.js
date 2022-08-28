let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let inter;

function intervals() {
    clearInterval(inter);
    inter = setInterval(timer, 1000);
}

function timer() {
    if (Number(sec.value) || Number(min.value) || Number(hour.value)) {
        if (hour.value == "hh" || hour.value == 0){
            hour.value = "00";
        }
        else{
            hour.value = hour.value;
        }
        if (min.value == "min" || min.value == 0){
            min.value = "00";
        }
        else{
            min.value = min.value;
        }
        if (sec.value == "sec" || sec.value == 0){
            sec.value = "00";
        }
        else{
            sec.value = sec.value;
        }
        sec.value--;
        if (sec.value <= 1){
            if (min.value >= 1) {
                min.value--;
                sec.value = 59;
            } else if (hour.value >= 1) {
                hour.value--;
                min.value = 59;
                sec.value = 59;
            }
        }
    }
    else { 
        setTimeout(function () {
            hoursvalue = "hh";
            hour.style.color = "rgba(0, 0, 0, 0.55)";
            min.value = "mm";
            min.style.color = "rgba(0, 0, 0, 0.55)";
            sec.value = "sec";
            sec.style.color = "rgba(0, 0, 0, 0.55)";
        }, 1000);
        clearInterval(inter);
    }
}

document.querySelector("#min").onblur = function blur() { 
   if (this.value > 0 && this.value < 100) {
        this.value = this.value, this.style.color = "rgba(0, 0, 0, 1)"
   }
   else{
    this.value = "mm", this.style.color = "rgba(0, 0, 0, 0.55)";
   }
}
document.querySelector("#sec").onblur = function blur() {
    if (this.value > 0 && this.value < 100) {
        this.value = this.value, this.style.color = "rgba(0, 0, 0, 1)"
   }
   else{
    this.value = "mm", this.style.color = "rgba(0, 0, 0, 0.55)";
   }
}
document.querySelector("#hour").onblur = function blur() {
    if (this.value > 0 && this.value < 100) {
        this.value = this.value, this.style.color = "rgba(0, 0, 0, 1)"
   }
   else{
    this.value = "mm", this.style.color = "rgba(0, 0, 0, 0.55)";
   }
}