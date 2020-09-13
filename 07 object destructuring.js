const address = {
  street: "",
  city: "",
  country: "",
};

//without object destruction
const street = address.street;
const city = address.city;
const country = address.country;

//with object destructure
const { street, city, country } = address;

//for different name => st const
const { street: st, city } = address;
