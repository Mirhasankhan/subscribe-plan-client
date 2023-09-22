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