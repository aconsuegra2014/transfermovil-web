
const bpaCard = document.querySelector('input#bpa-new-card');
bpaCard.value = "";

bpaCard.addEventListener('input', setCard);
bpaCard.addEventListener('keyup', formatCard);

function setCard(e) {
    let addCard = document.querySelector("a#bpa-add-card")
    let cardNumber = bpaCard.value
    addCard.href=`tel:*444*49*01*${cardNumber}#`.replace(/ /g, "");

}

function formatCard(e){
    this.value = this.value.replace(/ /g, "").replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
}
