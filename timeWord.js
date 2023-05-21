function timeWord(timeString) {
    //take given string input, separate into hour and min then convert string to ints
    const timeParts = timeString.split(':');
    const hour = parseInt(timeParts[0]);
    const minute = parseInt(timeParts[1]);

    //make sure the time given is a valid time from 0:00 to 23:59
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
        return 'Invalid time';
    }

    //used to match time int with string index (twelve for 0 index since 0 hour is twelve)
    const numbers = [
        'twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
        'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five',
        'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'thirty', 'thirty one', 'thirty two',
        'thirty three', 'thirty four', 'thirty five', 'thirty six', 'thirty seven', 'thirty eight',
        'thirty nine', 'forty', 'forty one', 'forty two', 'forty three', 'forty four', 'forty five',
        'forty six', 'forty seven', 'forty eight', 'forty nine', 'fifty', 'fifty one', 'fifty two',
        'fifty three', 'fifty four', 'fifty five', 'fifty six', 'fifty seven', 'fifty eight', 'fifty nine'
    ];
  
    let timeInWords = '';
  
    if (hour === 0 && minute === 0) {
        timeInWords = 'midnight';
    } else if (hour === 12 && minute === 0) {
        timeInWords = 'noon';
    } else {
        //check if hour less than or greater than 12 for am/pm, then match hour/min to array index for number in words
        if (hour >= 12) {
        timeInWords = numbers[hour - 12];
        //if minutes 0 then o'clock, min < 9 "oh", min > 9 regular string
        timeInWords += ' ' + (minute === 0 ? "o'clock" : (minute < 10 ? 'oh ' + numbers[minute] : numbers[minute]));
        timeInWords += ' pm';
      } else {
        timeInWords = numbers[hour];
        timeInWords += ' ' + (minute === 0 ? "o'clock" : (minute < 10 ? 'oh ' + numbers[minute] : numbers[minute]));
        timeInWords += ' am';
      }
    }
  
    return timeInWords;
  };
  
  module.exports = timeWord;