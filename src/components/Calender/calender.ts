export type Day = {day: number, date: Date};

export const returnWeek = (date: Date) => {
    const week: Day[] = [];
    const sunday = date.getDate() - date.getDay();
    for (let i = 0; i < 7; i++) {
        week.push({date: new Date(date.setDate(sunday + i)), day: date.getDay()});
    }
    return week;
}
export const returnMonth = (date: Date) => {
    const month: Day[][] = [];
    const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const firstWeek = firstDate.getDay();
    const lastWeek = lastDate.getDay();
    const lastDay = lastDate.getDate();
    let week: Day[] = [];
    for (let i = 0; i < firstWeek; i++) {
        week.push({date: new Date(firstDate.setDate(firstDate.getDate() - 1)), day: firstDate.getDay()});
    }
    for (let i = 1; i < lastDay; i++) {
        if (week.length === 7) {
            month.push(week);
            week = [];
        }
        week.push({date: new Date(date.getFullYear(), date.getMonth(), i), day: new Date(date.getFullYear(), date.getMonth(), i).getDay()});
    }
    for (let i = 0; i < 7 - lastWeek; i++) {
        if (week.length === 7) {
            month.push(week);
            week = [];
        }
        week.push({date: new Date(lastDate.setDate(lastDate.getDate() + 1)), day: lastDate.getDay()});
    }
    if (week.length > 0) {
        month.push(week);
    }
    return month;
}
export const returnYear = (date: Date) => {
    const year: Day[][] = [];
    const firstDate = new Date(date.getFullYear(), 0, 1);
    const lastDate = new Date(date.getFullYear(), 11, 31);
    const firstWeek = firstDate.getDay();
    const lastWeek = lastDate.getDay();
    const lastDay = lastDate.getDate();
    let week: Day[] = [];
    for (let i = 0; i < firstWeek; i++) {
        week.push({date: new Date(firstDate.setDate(firstDate.getDate() - 1)), day: firstDate.getDay()});
    }
    for (let i = 1; i <= lastDay; i++) {
        if (week.length === 7) {
            year.push(week);
            week = [];
        }
        week.push({date: new Date(date.getFullYear(), date.getMonth(), i), day: new Date(date.getFullYear(), date.getMonth(), i).getDay()});
    }
    for (let i = 0; i < 7 - lastWeek; i++) {
        if (week.length === 7) {
            year.push(week);
            week = [];
        }
        week.push({date: new Date(lastDate.setDate(lastDate.getDate() + 1)), day: lastDate.getDay()});
    }
    if (week.length > 0) {
        year.push(week);
    }
    return year;
}
