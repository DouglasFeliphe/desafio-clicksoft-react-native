export type UsersTypes = {
  id: 1;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
};

type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};
