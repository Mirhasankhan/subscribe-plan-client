export const saveUser = user => {
    const currentUser = {
      email: user?.email,
      name: user?.name, 
      role: 'buyer'         
    }
  
    fetch(`http://localhost:5000/users/${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    })
      .then(res => res.json())
      .then(() => {})
  }

  export const becomeHost = email => {
    const currentUser = {
      role: 'host',
    }
  
    return fetch(`http://localhost:5000/users/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    }).then(res => res.json())
  }

  // become a buyer

  export const becomeBuyer = email => {
    const currentUser = {
      role: 'buyer',
    }
  
    return fetch(`http://localhost:5000/users/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    }).then(res => res.json())
  }

  export const getRole = async email => {
    const response = await fetch(`http://localhost:5000/users?email=${email}`)
    const user = await response.json()  
    return user[0]?.role
  }