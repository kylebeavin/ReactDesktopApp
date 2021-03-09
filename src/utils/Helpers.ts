//#region Summary
//#endregion
export const formatDateString = (oldString: string): string => {
  let newString: string = '';
  let stringArr: string[] = oldString.split('-');

  newString = newString.concat(
    stringArr[1] + '/' + stringArr[2] + '/' + stringArr[0]
  );

  return newString;
};

//#region Summary //This is Broke
///Function: Converts JS Date object to usable date and time strings.
///Params: A JavaScript Date.
///Returns: An object with a date string and time string for use in forms.
//#endregion
export const getDateStringsFromDate = (
  date: Date
): { date: string; time: string } => {
  let dateObject = { date: '', time: '' };
  let stringArr: string[] = date.toString().split('T');
  let dateStringArr: string[] = stringArr[0].split('-');
  let dateTimeArr: string[] = stringArr[1].split('.')[0].split(':');

  // Set the date property
  dateObject.date =
    dateStringArr[1] + '/' + dateStringArr[2] + '/' + dateStringArr[0];

  // Set the time property
  dateObject.time = dateTimeArr[0] + ':' + dateTimeArr[1];

  return dateObject;
};

//#region Summary
///Function: Get the request headers interface object.
///Params: method - optional enum sets the method.
///Returns: A Headers object for fetch requests.
//#endregion
