export function getErrorMessages(errors) {
  let messages = [];

  Object.values(errors).map(function (message) {
    messages.push(message[0]);
  });

  return messages;
}

export function NoDataMessage(message = "Field Not Provided") {
  return message;
}

export const formatPosition = (sighting) => ({
  lat: parseFloat(sighting.latitude),
  lng: parseFloat(sighting.longitude),
});

export function updateDrawerDimensions(window) {
  let width = "30%";
  if (window.innerWidth > 1300) {
    width = "30%";
  } else if (window.innerWidth > 768 && window.innerWidth < 1300) {
    width = "50%";
  } else if (window.innerWidth < 768) {
    width = "80%";
  }

  return width;
}

export function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export function dummyRequest({ file, onSuccess }) {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
}


export function download(response, filename) {
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
};