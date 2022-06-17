import { v4 as uuid } from "uuid";

export const customers = [
  {
    id: uuid(),
    address: {
      country: "ES",
      state: "West Andalucía",
      city: "Sevilla",
      street: "Ceroone Office",
    },
    avatarUrl: "/static/images/avatars/avatar_6.png",
    createdAt: 1555016400000,
    email: "juangonzalez@ceroone.com",
    name: "Juan González",
    phone: "123456789",
  },
  {
    id: uuid(),
    address: {
      country: "ES",
      state: "West Andalucía",
      city: "Sevilla",
      street: "Ceroone Office",
    },
    avatarUrl: "/static/images/avatars/avatar_6.png",
    createdAt: 1555016400000,
    email: "pedrofernandez@ceroone.com",
    name: "Pedro Fernández",
    phone: "123456789",
  },
];
