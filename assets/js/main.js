
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

const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register(
          '/transfermovil-web/sw.js',
          {
            scope: '/transfermovil-web/',
          }
        );
        if (registration.installing) {
          console.log('Service worker installing');
        } else if (registration.waiting) {
          console.log('Service worker installed');
        } else if (registration.active) {
          console.log('Service worker active');
        }
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  };

  registerServiceWorker();
