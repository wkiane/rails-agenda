import { formatBadReqErrorMessage } from "./formatErrorMessages"

export function handleApiErrors(error, callback) {
    if (error.code === "ERR_BAD_REQUEST") {
        const errorMessage = formatBadReqErrorMessage(error.request.responseText)
        callback(errorMessage)
    } else {
        callback('Erro inesperado!')
    }
}