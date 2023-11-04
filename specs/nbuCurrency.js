import { getCurrency } from "../services/currencyNbu.js";

/**
 * Написати функцію, яка приймає суму в ГРН, яку потрібно обміняти, а також код валюти, на яку треба обміняти ГРН.
 * Повернути об'экт формата:
 * { code: 'USD', amount: 27.646839275099875 }
 */

async function curExchange(amount, currencyCode) {
  const cur = (await getCurrency()).data; //цей метод повертає список валют з курсом.
  console.table(cur);
}

const res = await curExchange(1000, "USD");
console.log(res);
