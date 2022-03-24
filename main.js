let barcode = "";
let interval;
document.addEventListener("keydown", (evt) => {
  if (interval) clearInterval(interval);

  if (evt.code == "Enter") {
    if (barcode) handeleBarcode(barcode);

    barcode = "";
    return;
  }
  if (evt.code != "Shift") barcode += evt.key;
  interval = setInterval(() => (barcode = ""), 20);
  function handeleBarcode(scanned_barcode) {
    document.querySelector("#last-barcode").innerHTML = scanned_barcode;
  }
});
/*
to use phone as a usb barcode scanner https://www.youtube.com/watch?v=J2WPjZ-RhfE
to explain link barcode scanner with javascript https://www.youtube.com/watch?v=rIspSL5UIJc
*/
