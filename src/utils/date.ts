import dayjs from "dayjs"

export const getFormattedDate = (date: string) => {
    const newDate = new Date(date);
    const formattedDate = dayjs(newDate).format("MMMM DD, YYYY");
    return formattedDate
}