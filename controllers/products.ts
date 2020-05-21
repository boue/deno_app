import { Product } from "../types.ts";

let products: Product[] = [
  {
    id: "1",
    name: "Nitrogen",
    description:
      "Nitrogen is considered as a mineral element that is most demanded by plants, thus representing largest input in crop production management. It is the most difficult input to manage due to its changes in form, chemistry and locations.",
    price: 30,
  },
  {
    id: "2",
    name: "Fertility Prescriptions",
    description: "Prescription tools",
    price: 299,
  },
  {
    id: "3",
    name: "Data Inbox",
    description: "Import files",
    price: 12,
  },
];

// GET all products
// http://localhost:5000/api/v1/products
const getProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: products,
  };
};

// GET single product
// http://localhost:5000/api/v1/products/:id
const getProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const product: Product | undefined = products.find((product) =>
    product.id === params.id
  );

  if (product) {
    response.status = 200;
    response.body = {
      success: true,
      data: product,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No product found",
    };
  }
};

export { getProducts, getProduct };
