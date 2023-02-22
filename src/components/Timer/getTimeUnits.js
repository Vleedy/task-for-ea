export const getTimeUnits = (finishTime) => {
  const diff = (finishTime - new Date()) / 1000;
  if (diff < 0) {
    return false;
  } else {
    return {
      days: Math.floor(diff / 86400),
      hours: Math.floor((diff / 3600) % 24),
      minutes: Math.floor((diff / 60) % 60),
      seconds: Math.floor(diff % 60),
    };
  }
};
