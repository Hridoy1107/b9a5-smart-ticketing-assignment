const allSelection = document.getElementsByClassName("seatSelect");

let count = 0;

for(const seat of allSelection){
    seat.addEventListener("click", function(e){
        count = count +1;
        console.log(count);
        document.getElementById("seat-number-left").innerText = 40 - count;
        document.getElementById("selected-sit-number").innerText = count;
    });
}

function disableButtonAfterTap(classList){
    const buttons = document.querySelectorAll("." + classList);
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        button.disabled = true;
      });
    });
}
disableButtonAfterTap("seatSelect");

function disableAfterFourTaps(buttonClass){
    let tappedButtons = new Set();
    let tapCount = 0;

    const buttons = document.querySelectorAll("." + buttonClass);
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        if (!tappedButtons.has(button)){
          tappedButtons.add(button);
          tapCount++;
  
          if (tapCount >= 4){
            buttons.forEach(b => b.disabled = true);
          } else {
            button.classList.add("clicked");
          }
        }
      });
    });
}
disableAfterFourTaps("seatSelect");

function changeButtonBackgroundAndText(selectedButton){
    selectedButton.style.backgroundColor = "";
  
    selectedButton.style.backgroundColor = "#1DD100";
  
    selectedButton.style.color = "white"; 
}
const buttons = document.querySelectorAll(".seatSelect");
buttons.forEach(button => button.addEventListener("click", () => changeButtonBackgroundAndText(button)));

function updateTotalPrice(){
    const selectedSeats = document.querySelectorAll(".seatSelect.active");
  
    const totalPrice = selectedSeats.length * 550;
  
    const totalPriceElement = document.getElementById("Total-price");
    totalPriceElement.innerText = totalPrice;
}
const seatButtons = document.querySelectorAll(".seatSelect");
  seatButtons.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
  
      updateTotalPrice();
    });
});
updateTotalPrice();

function apply(){
    const couponSection = document.getElementById('coupon');
    couponSection.classList.add('hidden');
}

function apply1(){
  const gtSection = document.getElementById('GT');
  gtSection.classList.remove('hidden');
}

function next(){
    const homeSection = document.getElementById('first-page');
    homeSection.classList.add('hidden');
}

function last(){
    const end1Section = document.getElementById('second-page');
    end1Section.classList.remove('hidden');
}

function back(){
    const home1Section = document.getElementById('first-page');
    home1Section.classList.remove('hidden');
}

function lastBack(){
    const endSection = document.getElementById('second-page');
    endSection.classList.add('hidden');
}