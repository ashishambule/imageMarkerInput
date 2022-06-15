export const checkIfEmailInString = (text) => {
  var re =
    /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  return re.test(text);
};

export const extactEmail = (text) => {
  const reg =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  const extract = text.match(reg)[0];
  return extract;
};

export const placeholder =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0oOkcCVPOM7rEMITh-VGz8umpnmu0rsLjfw&usqp=CAU";
