export const deleteSubscription = async id => {
    const response = await fetch(`http://localhost:5000/payments/${id}`, {
        method: 'DELETE'
    })
    const data = await response.json()
    return data
}
export const deleteWithPlan = async id => {
    const response = await fetch(`http://localhost:5000/payments/plans/${id}`, {
        method: 'DELETE'
    })
    const data = await response.json()
    return data
}

export const deletePlans = async id => {
    const response = await fetch(`http://localhost:5000/plans/${id}`, {
        method: 'DELETE'
    })
    const data = await response.json()
    return data
}