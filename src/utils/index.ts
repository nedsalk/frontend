import dayjs from "dayjs";
import * as timeago from "timeago.js";
import { ContainerClient } from "@azure/storage-blob";
import imageService from "../api/image/image.service";

export const addressFormat = (address: any) => {
  if (!address) {
    return "-";
  }
  const first6 = address.substring(0, 6);
  const last4 = address.substring(address.length - 4);

  return first6 + "..." + last4;
};

export const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) {
    newWindow.opener = null;
  }
};

export const numberFormat = (number: number) => {
  if (!number) {
    return 0;
  }

  return String(number).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const dateFormat = (date: any, format = "MM/DD/YYYY HH:mm", convertFrom: any = null) => {
  if (!date) {
    return "-";
  }
  if (convertFrom) {
    return dayjs(date, convertFrom).format(format);
  }

  return dayjs(date).format(format);
};

export const chunk = (arr: any = [], chunkSize = 4) => {
  const tmpArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    tmpArray.push(chunk);
  }

  return tmpArray;
};

export const getDateFromExpirationTime = (expireTime: number) => {
  const futureTime = new Date().getTime() + expireTime * 86400000;
  const date = new Date(futureTime);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hour >= 12 ? "PM" : "AM";

  const hours = (hour % 12 || 12).toString().padStart(2, "0");

  return `${month}/${day}/${year}, ${hours}:${minutes} ${ampm}`;
};

export function formatDisplayedNumber(num: number) {
  return num / 1000000000;
}

export function toGwei(num: any) {
  return num * 1000000000;
}

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const timeagoFormat = (time: number | string) => {
  return timeago.format(time);
};

export const uniqueArr = (array: any[]) => {
  return Array.from(new Set(array.map((item) => JSON.stringify(item)))).map((item) => JSON.parse(item));
};

export const clipboardCopy = (text: string) => {
  try {
    navigator.clipboard.writeText(text);
  } catch {
    window.navigator["clipboard"].writeText(text);
  }
};

export const formatPrice = (price: any) => {
  if (price === null || price === "-" || price === 0) {
    return price;
  }

  if (price < 0.0001) return "<0.0001";

  return parseFloat(price)
    .toFixed(4)
    .replace(/\.?0+$/, "");
};

export const isObjectEmpty = (object: any) => Object.keys(object).length === 0;

export const uploadImage = async (file: File) => {
  const clientUrl: any = await imageService.getToken();

  const containerClient = new ContainerClient(clientUrl);

  const blockBlobClient = containerClient.getBlockBlobClient(file.name);
  const result = await blockBlobClient.uploadData(file, {
    onProgress: (e) => {
      console.log(e.loadedBytes);
    },
  });
  console.log("uploaded", result);
};
