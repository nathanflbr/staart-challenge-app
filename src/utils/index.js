export function changeDisplayLevel(level) {
  if (level === "beginner") {
    return "Iniciante";
  } else if (level === "intermediate") {
    return "Intermediário";
  }
  if (level === "avanced") {
    return "Avançado";
  }
}

export function changeDisplayIcon(journey) {
  if (journey === "eca8e48a-57b3-46a1-a6ae-923aca77fc11") {
    return `jornada-desenvolvimento-back-end.svg`;
  }
  if (journey === "e774057d-f0e8-4d5f-8076-33522fffb96d") {
    return `jornada-desenvolvimento-front-end.svg`;
  }
  if (journey === "ea9d3a03-bfb4-4160-b59a-6cc30e15b3af") {
    return `habilidades-digitais.svg`;
  }
  if (journey === "73a0e476-b7b1-464d-9d73-8faa71b44922") {
    return `jornada-de-dados.svg`;
  }
  return `backend-trail.svg`;
}
export function changeDisplayBgTrail(journey) {
  if (journey === "eca8e48a-57b3-46a1-a6ae-923aca77fc11") {
    return `jornada-desenvolvimento-back-end-bg-trail.svg`;
  }
  if (journey === "e774057d-f0e8-4d5f-8076-33522fffb96d") {
    return `jornada-desenvolvimento-back-end-bg-trail.svg`;
  }
  if (journey === "ea9d3a03-bfb4-4160-b59a-6cc30e15b3af") {
    return `jornada-desenvolvimento-back-end-bg-trail.svg`;
  }
  if (journey === "73a0e476-b7b1-464d-9d73-8faa71b44922") {
    return `jornada-desenvolvimento-back-end-bg-trail.svg`;
  }
  return `school.svg`;
}

export function displayTime(ms) {
  const minutes = Math.floor(ms / 60000);
  const hours = Math.floor(minutes / 60);
  const totalMinutes = minutes % 60;

  if (hours === 0) {
    return totalMinutes + " min";
  }

  return hours + "h " + totalMinutes + " min";
}

export function getDate(date) {
  const display = new Date(date).toLocaleDateString("pt-BR");
  return display;
}
