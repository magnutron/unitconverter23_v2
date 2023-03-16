function convert(type, value) {
    switch (type) {
        case "inchToCm":
            return inchToCm(value);
        case "cmToInch":
            return cmToInch(value);
        case "milesToKm":
            return milesToKm(value);
        case "kmToMiles":
            return kmToMiles(value);
        case "fToC":
            return fToC(value);
        case "cToF":
            return cToF(value);
        case "feetToM":
            return feetToM(value);
        case "mToFeet":
            return mToFeet(value);
        case "lbsToKg":
            return lbsToKg(value);
        case "kgToLbs":
            return kgToLbs(value);
        case "gToL":
            return gToL(value);
        case "lToG":
            return lToG(value);
        default:
            return null;
    }
}

function feetToM(feet) {
  console.log("feetToM");
  const meters = feet / 3.2808;
  return meters;
}

function meToFeet(meters) {
  console.log("mToFeet");
  const feet = meters * 3.2808;
  return feet;
}

function milesToKm(miles) {
  return miles * 1.609344;
}
function kmToMiles(kilometers) {
  return kilometers * 0.621371192;


function inchToCm(inches) {
  return inches * 2.54;
}

function cmToInch(centimeters) {
  return centimeters * 0.3937;

function fToC(fahrenheit) {
  const fht = ((fahrenheit - 32) * 5) / 9;
  console.log(fht);
  return fht;
}

function cToF(celcius) {
  const cel = (celcius * 9 / 5)+32;
  console.log(cel);
  return cel;
  }

function lbsToKg(pounds) {
  const kilograms = lbs / 2.20462;
  return kilograms;
}

function kgToLbs(kilograms) {
  const pounds = kg * 2.20462;
  return pounds;


function gToL(gallons) {
  const liters = gallons * 3.78541;
  return liters;
}

function lToG(liters) {
  const gallons = liters / 3.78541;
  return gallons;

}
