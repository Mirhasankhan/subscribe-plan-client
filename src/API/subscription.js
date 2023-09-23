export const addNewSubscription = async planData => {
    const response = await fetch('https://subscribe-plan-server.vercel.app/plans', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(planData),
    })

    const data = await response.json()
    return data
}