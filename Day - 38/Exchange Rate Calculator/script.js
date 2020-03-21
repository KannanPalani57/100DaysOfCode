
const currency_one = document.getElementById('currency-one');
const amount_one = document.getElementById('amount-one');
const currency_two = document.getElementById('currency-two');
const amount_two = document.getElementById('amount-two');

const rate = document.getElementById('rate');
const swap = document.getElementById('swap');



//there, i describing that the paper is a currency.Okay..
function calculate(){
  const paper_one = currency_one.value;
  const paper_two = currency_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${paper_one}`)
  .then(res => res.json())
  .then(data => {
  //    console.log(data);

  const rates = data.rates[paper_two];

  rate.innerText = `1 ${paper_one} = ${rates} ${paper_two}`;

  amount_two.value = (amount_one.value * rates).toFixed(2); //getting 2 decimal point numbers with toFixed().
  })
   


}


//addEventListener
currency_one.addEventListener('change', calculate);
currency_two.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
amount_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calculate();
});

/*fetch("items.json")
.then(res => res.json())
.then(data => console.log(data))
*/