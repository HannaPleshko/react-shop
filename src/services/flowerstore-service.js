export default class FlowerstoreService {
  data = [
    {
      id: 1,
      name: 'Alstroemeria',
      price: 4,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu-570x471.jpg'
    },
    {
      id: 2,
      name: 'Asters',
      price: 2,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu1.jpg'
    },
    {
      id: 3,
      name: 'Begonia',
      price: 2,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu2-570x399.jpg'
    },
    {
      id: 4,
      name: 'Cornflowers',
      price: 1,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu3-570x414.jpg'
    },
    {
      id: 5,
      name: 'Clove',
      price: 2,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu4-570x429.jpg'
    },
    {
      id: 6,
      name: 'Hyacinths',
      price: 7,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu5-570x538.jpg'
    },
    {
      id: 7,
      name: 'Gerberas',
      price: 10,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu6-570x410.jpg'
    },
    {
      id: 8,
      name: 'Gladiolus',
      price: 5,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu7-570x520.jpg'
    },
    {
      id: 9,
      name: 'Hydrangea',
      price: 2,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/58335058_1272385610_39133380-570x427.jpg'
    },
    {
      id: 10,
      name: 'Delphinium',
      price: 1,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu8-570x566.jpg'
    },
    {
      id: 11,
      name: 'Jasmine',
      price: 6,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu9-570x381.jpg'
    },
    {
      id: 12,
      name: 'Poppies',
      price: 2,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu13.jpg'
    },
    {
      id: 13,
      name: 'Daffodils',
      price: 6,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu15.jpg'
    },
    {
      id: 14,
      name: 'Orchids',
      price: 15,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu16.jpg'
    },
    {
      id: 15,
      name: 'Peonies',
      price: 4,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/%D0%91%D0%B5%D0%B7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B95-570x431.jpg'
    },
    {
      id: 16,
      name: 'Roses',
      price: 10,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu19.jpg'
    },
    {
      id: 17,
      name: 'Daisies',
      price: 1,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu20.jpg'
    },
    {
      id: 18,
      name: 'Lilac',
      price: 3,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu21.jpg'
    },
    {
      id: 19,
      name: 'Tulips',
      price: 2,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu22.jpg'
    },
    {
      id: 20,
      name: 'Chrysanthemums',
      price: 2,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/jkiu25-570x414.jpg'
    },
    {
      id: 21,
      name: 'Chinia',
      price: 2,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/15-570x384.jpg'
    },
    {
      id: 22,
      name: 'Chernobrivtsi',
      price: 1,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/121.jpg'
    },
    {
      id: 23,
      name: 'Sage',
      price: 5,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/131.jpg'
    },
    {
      id: 24,
      name: 'Eustoma',
      price: 4,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/141.jpg'
    },
    {
      id: 25,
      name: 'Juno',
      price: 2,
      coverImage: 'http://multi-lady.ru/wp-content/uploads/2012/07/151.jpg'
    }
  ];

  getFlowers() {
    return new Promise((resolve) => {
      resolve(this.data);
    });
  };
};