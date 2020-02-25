import axios from "axios";

export const baseGeneralURL = "http://learn.hackatown.online/";
export const basePaymentURL = "http://learn.hackatown.online/payment/";

export const axiosGeneral = axios.create({
  baseURL: baseGeneralURL
});

export const axiosPayment = axios.create({
  baseURL: basePaymentURL
});
