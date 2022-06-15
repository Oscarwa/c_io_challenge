import { format } from "date-fns"

export const formatDateTime = (value: number) => {
    return format(value, 'PPpp');
}