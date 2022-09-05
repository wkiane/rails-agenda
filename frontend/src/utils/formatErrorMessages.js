export function formatBadReqErrorMessage(unformattedMessage) {
    const json = JSON.parse(unformattedMessage)
    return json.message || 'Não foi possível efetuar a salvação/atualização!'
}