// var heldValue = 'PHP  1,000,000';
// if (heldValue) {
//     const match = heldValue.match(/([A-Z]{3})\s+([\d,]+)/);
//     if (match) {
//         let heldCurrency = match[1];
//         let heldAmount = match[2].replace(/,/g, '');
//
//         console.log('held currecny: ' + heldCurrency + ' amount: ' + heldAmount)
//
//     }
// }

var heldValue = '465,537,847.48';
let formattedHeldAmount = Number(heldValue.replace(/,/g, ""));
console.log(formattedHeldAmount);