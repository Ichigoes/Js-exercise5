function suppliesforSchool(input) {
    let amountPens = Number(input[0]);
    let amountMarkers = Number(input[1]);
    let litresBoardCleaner = Number(input[2])
    let discount = Number(input[3] / 100)

    let pens = amountPens * 5.80
    let markers = amountMarkers * 7.20
    let boardCleaner = litresBoardCleaner * 1.20
    let allIn = boardCleaner + pens + markers

    let discPrice = allIn - (allIn * discount);

    console.log(discPrice);
}

suppliesforSchool(["2", "3", "4", "25"])