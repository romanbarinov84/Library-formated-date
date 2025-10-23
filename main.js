import { formatDateToRu, formatDateToUs } from "./lib/formatDate/formatDate.js";

let country = "RU";
const currentDate = new Date();

const formatDateForCountry = (date, country) => {
  switch (country) {
    case "Ru":
      return formatDateToRu(date);

    case "US":
      return formatDateToUs(date);

    default:
      return formatDateToRu(date);
  }
};

const now = formatDateForCountry(currentDate, country);

const weekLater = new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 7);

const then = formatDateForCountry(weekLater, country);

document.getElementById("now").innerText = now;
document.getElementById("then").innerText = then;
