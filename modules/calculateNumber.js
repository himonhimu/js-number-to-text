function OneToNinteen(number) {
    const numberMap = {
      1: 'One',
      2: 'Two',
      3: 'Three',
      4: 'Four',
      5: 'Five',
      6: 'Six',
      7: 'Seven',
      8: 'Eight',
      9: 'Nine',
      10: 'Ten',
      11: 'Eleven',
      12: 'Twelve',
      13: 'Thirteen',
      14: 'Fourteen',
      15: 'Fifteen',
      16: 'Sixteen',
      17: 'Seventeen',
      18: 'Eighteen',
      19: 'Nineteen'
    };
    return numberMap[number] || '';
  }
  function TwentyToHundred(number) {
    // console.log(number, 'TwentyToHundred');
    const tensMap = {
        20: 'Twenty',
        30: 'Thirty',
        40: 'Forty',
        50: 'Fifty',
        60: 'Sixty',
        70: 'Seventy',
        80: 'Eighty',
        90: 'Ninety'
      };
    
      if (number >= 20 && number < 100) {
        const ten = Math.floor(number / 10) * 10;
        const remainder = number % 10;
    
        return `${tensMap[ten]} ${OneToNinteen(remainder)}`;
      } else {
        return OneToNinteen(number);
      }
  }

  function HundredToThousand(number) {
    // console.log(number);
    const hundredMap = {
        100: 'One Hundred',
        200: 'Two Hundred',
        300: 'Three Hundred',
        400: 'Four Hundred',
        500: 'Five Hundred',
        600: 'Six Hundred',
        700: 'Seven Hundred',
        800: 'Eight Hundred',
        900: 'Nine Hundred'
      };
    
      if (number >= 100 && number < 1000) {
        const hundred = Math.floor(number / 100) * 100;
        
        const remainder = number % 100;
        return `${hundredMap[hundred]} ${TwentyToHundred(remainder)}`;
      } else {
        return TwentyToHundred(number);
      }
  }
  function ThousandTolac(number) {
      if (number >= 1000 && number < 100000) {
        const Thousand = Math.floor(number / 1000);
        const remainder = number % 1000;
        return `${TwentyToHundred(Thousand)} Thousand ${HundredToThousand(remainder)}`;
      } else {
        return HundredToThousand(number);
      }
  }
  function LacToCrore(number) {
      if (number<10000000) {
        if (number >= 100000 && number < 10000000) {
          const Lac = Math.floor(number / 100000);
          const remainder = number % 100000;
          return `${TwentyToHundred(Lac)} Lac ${ThousandTolac(remainder)}`;
        } else {
          return ThousandTolac(number);
        }
      }else{
        return 'Number is too high to convert';
      }
  }

function GetNumberText(number) {
    return LacToCrore(number)
}
module.exports = GetNumberText