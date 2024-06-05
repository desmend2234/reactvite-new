export function formatCurrency(value) {
    return new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'TWD',
    }).format(value)
}

export function currencyTwd(value) {
    return `NTD ${Math.round(value).toLocaleString()}`
}
export function formatDate(dateStr) {
    return new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
    }).format(new Date(dateStr))
}

export const selectedDate = (id) => {
    const startDateString = localStorage.getItem(`selectedStartDate_${id}`)
    const endDateString = localStorage.getItem(`selectedEndDate_${id}`)
    const startDate = new Date(startDateString)
    const endDate = new Date(endDateString)

    const startYear = startDate.getFullYear()
    const startMonth = String(startDate.getMonth() + 1).padStart(2, '0')
    const startDay = String(startDate.getDate()).padStart(2, '0')
    const formattedStartDate = `${startYear}/${startMonth}/${startDay}`

    const endYear = endDate.getFullYear()
    const endMonth = String(endDate.getMonth() + 1).padStart(2, '0')
    const endDay = String(endDate.getDate()).padStart(2, '0')
    const formattedEndDate = `${endYear}/${endMonth}/${endDay}`

    return `${formattedStartDate} - ${formattedEndDate}`
}
