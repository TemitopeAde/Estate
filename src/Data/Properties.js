const properties = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
      state: 'Lagos',
      location: 'belmont garden',
      area: 'Mainland',
      floorplan: [
        {category: 'first floor', image: 'https://maelectrics.com/tf/html/quarter-preview/quarter/img/others/10.png'},
        {category: 'second floor', image: 'https://maelectrics.com/tf/html/quarter-preview/quarter/img/img-slide/35.jpg'},
        {category: 'third floor', image: 'https://maelectrics.com/tf/html/quarter-preview/quarter/img/img-slide/32.jpg'}
      ],
      description: 'faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet. Neque',
      propertyId: 'HZ21',
      bath: 4,
      yearBuilt: 1999,
      bed: 9,
      status: 'for sale',
      amenities: ['air conditioning', 'gym', 'Refrigerator','indoor game'],
      date: 'may 19, 2021',
      video: 'https://youtu.be/eWUxqVFBq74',
      features: [
        {type: 'living room', width: 200, length: 250},
        {type: 'dinning room', width: 500, length: 200}
      ],
      category: ['featured', 'for rent'],
      title: 'Diamond Manor Apartment',
      location: 'ife road',
      rooms: 3,
      price: 5600000,
      size: 452,
      agent: 'adesiyan temilade',
      bathrooms: 4
    },

    {
        id: 2,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        state: 'ogun',
        area: 'Victoria highland',
        floorplan: [
          {category: 'first floor', image: 'https://maelectrics.com/tf/html/quarter-preview/quarter/img/others/10.png'},
          {category: 'second floor', image: 'https://maelectrics.com/tf/html/quarter-preview/quarter/img/img-slide/35.jpg'},
          {category: 'third floor', image: 'https://maelectrics.com/tf/html/quarter-preview/quarter/img/img-slide/32.jpg'}
        ],
        description: 'faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet. Neque',
        property: 'HZ21',
        bath: 4,
        yearBuilt: 1999,
        bed: 9,
        status: 'for sale',
        amenities: ['air conditioning', 'gym', 'Refrigerator','indoor game'],
        date: 'may 19, 2021',
        video: 'https://youtu.be/eWUxqVFBq74',
        features: [
          {type: 'living room', width: 23, length: 34},
          {type: 'dinning room', width: 200,lenght:500}
        ],
        category: ['featured', 'for rent'],
        title: 'Diamond Manor Apartment',
        location: 'lagos ibadan express way',
        rooms: 10,
        price: 300000,
        reviews: [
          {fullName: 'Adesiyan Temitope', text: 'faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet. Neque'},
        ],
        size: 5600,
        agent: 'Adewale Badmus',
        bathrooms: 6
    },

    {
        id: 3,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        state: 'ogun',
        area: 'Victoria highland',
        floorplan: [
          {category: 'first floor', image: 'https://maelectrics.com/tf/html/quarter-preview/quarter/img/others/10.png'},
          {category: 'second floor', image: 'https://maelectrics.com/tf/html/quarter-preview/quarter/img/img-slide/35.jpg'},
          {category: 'third floor', image: 'https://maelectrics.com/tf/html/quarter-preview/quarter/img/img-slide/32.jpg'}
        ],
        description: 'faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet. Neque',
        property: 'HZ21',
        bath: 4,
        yearBuilt: 1999,
        bed: 9,
        status: 'for sale',
        amenities: ['air conditioning', 'gym', 'Refrigerator','indoor game'],
        date: 'may 19, 2021',
        video: 'https://youtu.be/eWUxqVFBq74',
        features: [
          {type: 'garden', width: 300, length: 200},
          {type: 'garage', width: 3000, length: 1000}
        ],
        category: ['featured', 'for rent'],
        title: 'Diamond Manor Apartment',
        location: 'lagos ibadan express way',
        rooms: 15,
        price: 3900000,
        size: 1000,
        agent: 'wasiu ishola',
        bathrooms: 10
    },
    
];
  
  export default properties;