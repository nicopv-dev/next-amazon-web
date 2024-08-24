import { faker } from "@faker-js/faker";

export const FAKE_PRODUCTS = (length?: number) =>
  Array.from({ length: length ? length : 5 }).map((_) => ({
    id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    brand: faker.company.name(),
    price: faker.commerce.price(),
    choice: faker.datatype.boolean(),
    raiting: faker.number.int({ min: 1, max: 5 }),
  }));
