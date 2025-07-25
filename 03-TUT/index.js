import { format } from "date-fns";
import { v4 } from "uuid";

console.log(format(new Date(), "yyyy-MM-dd\tHH:mm:ss"), v4());
