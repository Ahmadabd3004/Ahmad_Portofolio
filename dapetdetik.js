const today = new Date();
console.log(today.getTime());

const dayAfterTomorrow = new Date();
// add 2 day to today
dayAfterTomorrow.setDate(new Date().getDate() + 2);
console.log(dayAfterTomorrow.getTime());

const date = new Date(dayAfterTomorrow.getTime());
console.log(date);
