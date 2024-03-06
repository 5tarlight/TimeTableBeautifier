export const days = ["", "월", "화", "수", "목", "금"];

export const getTimes = () => {
  const times = [];

  for (let i = 9; i <= 18; i++) {
    times.push(`${i}:00`);
    times.push(`${i}:30`);
  }

  return times;
};
