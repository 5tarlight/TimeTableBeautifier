export const days = ["월", "화", "수", "목", "금"];

// export const getTimes = () => {
//   const times = [];

//   for (let i = 9; i <= 18; i++) {
//     times.push(`${i}:00`);
//     times.push(`${i}:30`);
//   }

//   return times;
// };

export const getTimes = () => {
  return Array.from({ length: 21 }, (_, index) => index);
};

export interface Lecture {
  name: string;
  professor: string;
  location: string;
  start: number;
  end: number;
  color: string;
}

export type TimeTable = [Lecture[], Lecture[], Lecture[], Lecture[], Lecture[]];

export const toTime = (time: number) => {
  return `${Math.floor(time / 2) + 9}:${time % 2 === 0 ? "00" : "30"}`;
};

export const findLecture = (date: number, time: number, data: TimeTable) => {
  for (let i = 0; i < data[date].length; i++) {
    if (data[date][i].start <= time && data[date][i].end > time) {
      return data[date][i];
    }
  }

  return null;
};

// export const getCurrentColor = (
//   date: number,
//   time: number,
//   data: TimeTable
// ) => {
//   for (let i = 0; i < data[date].length; i++) {
//     if (data[date][i].start <= time && data[date][i].end > time) {
//       return data[date][i].color;
//     }
//   }

//   return "transparent";
// };

export interface TimeCellProps {
  color: string;
  isStart: boolean;
  isEnd: boolean;
  line: number;
  text: string;
}

export const getCellProps = (date: number, time: number, data: TimeTable) => {
  const lecture = findLecture(date, time, data);

  if (!lecture) {
    return {
      color: "transparent",
      isStart: false,
      isEnd: false,
      line: time,
      text: "",
    };
  }

  const color = lecture.color;
  const isStart = lecture.start === time;
  const isEnd = lecture.end === time;

  return {
    color,
    isStart,
    isEnd,
    line: time,
    text: `${time}-${date}`,
  };
};
