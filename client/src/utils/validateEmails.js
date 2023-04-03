/* eslint-disable import/no-anonymous-default-export */
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export default (emails) => {
  const invalidEmails = emails
    .split(",")
    .map((email) => email.trim())
    .filter((email) => re.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return;
};
