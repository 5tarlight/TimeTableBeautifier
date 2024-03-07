import { CSSProperties } from "react";

export const days = ["월", "화", "수", "목", "금"];

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
      return {
        lecture: data[date][i],
        line: time - data[date][i].start,
      };
    }
  }

  return null;
};

export interface TimeCellProps {
  color: string;
  isStart: boolean;
  isEnd: boolean;
  line: number;
  text: string;
}

export const getCellProps = (date: number, time: number, data: TimeTable) => {
  const found = findLecture(date, time, data);

  if (!found) {
    return {
      color: "transparent",
      isStart: true,
      isEnd: true,
      line: time,
      text: "",
    };
  }

  const { lecture, line } = found;
  const color = lecture.color;
  const isStart = lecture.start === time;
  const isEnd = lecture.end - 1 === time;

  return {
    color,
    isStart,
    isEnd,
    line,
    text: `${time}-${line}`,
  };
};

// export const parseTheme = (theme: { [key: string]: string }): CSSProperties => {
//   const result: CSSProperties = {};

//   for (const key in theme) {
//     if (typeof theme[key] === "object") {
//       result[key] = parseTheme(theme[key]);
//     } else {
//       result[key] = theme[key];
//     }
//   }

//   return result; // Added return statement
// };
