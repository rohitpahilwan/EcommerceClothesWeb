export const color = [
  "white",
  "black",
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "gray",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "black", label: "Black", checked: false },
      { value: "red", label: "Red", checked: false },
      { value: "blue", label: "Blue", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "yellow", label: "Yellow", checked: false },
      { value: "pink", label: "Pink", checked: false },
      { value: "gray", label: "Gray", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S", checked: false },
      { value: "M", label: "M", checked: false },
      { value: "L", label: "L", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "t-shirts", label: "T-Shirts", checked: false },
      { value: "shirts", label: "Shirts", checked: false },
      { value: "pants", label: "Pants", checked: false },
      { value: "jackets", label: "Jackets", checked: false },
      { value: "dresses", label: "Dresses", checked: false },
      { value: "skirts", label: "Skirts", checked: false },
      { value: "jeans", label: "Jeans", checked: false },
    ],
  },
  {
    id: "price",
    name: "Price",
    options: [
      { value: "under-500", label: "Under ₹500", checked: false },
      { value: "500-1000", label: "₹500 - ₹1000", checked: false },
      { value: "1000-2000", label: "₹1000 - ₹2000", checked: false },
      { value: "2000-3000", label: "₹2000 - ₹3000", checked: false },
      { value: "3000-5000", label: "₹3000 - ₹5000", checked: false },
      { value: "above-5000", label: "Above ₹5000", checked: false },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10% and above", checked: false },
      { value: "20", label: "20% and above", checked: false },
      { value: "30", label: "30% and above", checked: false },
      { value: "50", label: "50% and above", checked: false },
    ],
  },
];

export const SingleFilter = [
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10% and above", checked: false },
      { value: "20", label: "20% and above", checked: false },
      { value: "30", label: "30% and above", checked: false },
      { value: "50", label: "50% and above", checked: false },
    ],
  },
  {
    id: "price",
    name: "Price",
    options: [
      { value: "under-500", label: "Under ₹500", checked: false },
      { value: "500-1000", label: "₹500 - ₹1000", checked: false },
      { value: "1000-2000", label: "₹1000 - ₹2000", checked: false },
      { value: "2000-3000", label: "₹2000 - ₹3000", checked: false },
      { value: "3000-5000", label: "₹3000 - ₹5000", checked: false },
      { value: "above-5000", label: "Above ₹5000", checked: false },
    ],
  },
];

// {
//   id: "stock",
//   name: "Availability",
//   options: [
//     { value: "in_stock", label: "In Stock" },
//     { value: "out_of_stock", label: "Out Of Stock" },
//   ],
// },
