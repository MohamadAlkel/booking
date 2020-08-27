export function dateWithoutDayTime(): Date {
    const currentDate = new Date();
    currentDate.setDate(1);
    currentDate.setHours(0, 0, 0, 0);
    return currentDate;
}