const GetNumberText = require("./modules/calculateNumber")


function GetNumberToText(number) {
    if (number) {
       return GetNumberText(number)
    }else{
        return 'please pass a number to get text value'
    }
}

module.exports = GetNumberToText 