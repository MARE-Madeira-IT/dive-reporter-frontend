export function getErrorMessages(errors) {
  let messages = [];

  Object.values(errors).map(function (message) {
    messages.push(message[0]);
  });

  return messages;
}
