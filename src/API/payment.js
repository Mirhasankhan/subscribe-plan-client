export const deleteSubscription = async id => {
    const response = await fetch(`https://subscribe-plan-server.vercel.app/payments/${id}`, {
        method: 'DELETE'
    })
    const data = await response.json()
    return data
}
export const deleteWithPlan = async id => {
    const response = await fetch(`https://subscribe-plan-server.vercel.app/payments/plans/${id}`, {
        method: 'DELETE'
    })
    const data = await response.json()
    return data
}

export const deletePlans = async id => {
    const response = await fetch(`https://subscribe-plan-server.vercel.app/plans/${id}`, {
        method: 'DELETE'
    })
    const data = await response.json()
    return data
}