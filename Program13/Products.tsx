const products = Array.from({ length: 500 }, (_, index) => ({
  id: index,
  name: `Sneaker ${index + 1}`,
  price: 100 + index,
  image: "https://picsum.photos/200"
}));

export default products;