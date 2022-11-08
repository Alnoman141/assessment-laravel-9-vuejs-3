/**
 * Validate an email address
 * @param {String} email
 * @return {Boolean}
 */
export function validEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function isEmpty(obj) {
  let empty;
  for (let key in obj) {
    empty = obj[key] === "" ? true : false;
  }
  return empty;
}
