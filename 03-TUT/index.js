const date = require("date-fns");
const { v4: uuid } = require("uuid");

const { format } = date;
console.log(format(new Date(), "yyyy-MM-dd\tHH:mm:ss"), uuid());
