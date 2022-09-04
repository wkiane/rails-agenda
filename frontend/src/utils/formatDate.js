import dayjs from "dayjs";

export default function formateDate(date) {
    return dayjs(date).format('DD/MM/YYYY')
}