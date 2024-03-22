const motelCustomer = {
    firstName: 'John',
    lastName: 'Smith',
    birthDate: new Date('1990-06-19'),
    gender: "Male",
    roomPreference: ['Non-smoking', 'King size bed', 'High floor', 'View of the city', 'TV'],
    paymentMethod: 'Credit card',
    mailingAddress: {
      street: '90 Sweetenwater Crescent',
      city: 'CBS',
      province: 'NL',
      postalCode: 'A1W4T3',
    },
    phoneNumber: '709-770-7610',
    checkInDate: new Date('2024-04-05'),
    checkOutDate: new Date('2024-04-10'),
    getAge: function() {
      const today = new Date();
      return today.getFullYear() - this.birthDate.getFullYear();
   
    },
    
    getDurationOfStay: function() {
      const stay = this.checkOutDate - this.checkInDate;
      return Math.ceil(stay / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    },
  };
  
  const html = `
    <ul>
      <li>First Name: ${motelCustomer.firstName} </li>
      <li>Last Name: ${motelCustomer.lastName} </li>
      <li>Birth Date: ${motelCustomer.birthDate} </li>
      <li>Gender: ${motelCustomer.gender} </li>
      <li>Room Preferences: ${motelCustomer.roomPreference.join(', ')} </li>
      <li>Payment Method: ${motelCustomer.paymentMethod} </li>
      <li>Address: ${motelCustomer.mailingAddress.street}, ${motelCustomer.mailingAddress.city}, ${motelCustomer.mailingAddress.province}, ${motelCustomer.mailingAddress.postalCode} </li>
      <li>Phone Number: ${motelCustomer.phoneNumber} </li>
      <li>Check In Date: ${motelCustomer.checkInDate} </li>
      <li>Check Out Date: ${motelCustomer.checkOutDate} </li>
      <li>Age: ${motelCustomer.getAge()} </li>
      <li>Duration Of Stay: ${motelCustomer.getDurationOfStay()} </li>
    </ul>`;
  
  console.log(html);
  document.body.innerHTML = html;
