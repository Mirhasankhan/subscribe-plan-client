export const addNewSubscription = async planData => {
    const response = await fetch('http://localhost:5000/plans', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(planData),
    })

    const data = await response.json()
    return data
}