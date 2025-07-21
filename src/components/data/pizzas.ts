import { Pizza } from '../types';

export const pizzas: Pizza[] = [
  {
    id: 1,
    name: "Margherita",
    description: "Classic pizza with fresh tomatoes, mozzarella cheese, and basil",
    price: 445,
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Classic",
    ingredients: ["Tomato sauce", "Mozzarella", "Fresh basil", "Olive oil"],
    isPopular: true
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Delicious pepperoni with mozzarella cheese and tomato sauce",
    price: 545,
    image: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Meat",
    ingredients: ["Tomato sauce", "Mozzarella", "Pepperoni"],
    isPopular: true
  },
  {
    id: 3,
    name: "Quattro Stagioni",
    description: "Four seasons pizza with ham, mushrooms, artichokes, and olives",
    price: 645,
    image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Special",
    ingredients: ["Tomato sauce", "Mozzarella", "Ham", "Mushrooms", "Artichokes", "Olives"]
  },
  {
    id: 4,
    name: "Hawaiian",
    description: "Tropical pizza with ham and pineapple",
    price: 595,
    image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Special",
    ingredients: ["Tomato sauce", "Mozzarella", "Ham", "Pineapple"]
  },
  {
    id: 5,
    name: "Vegetarian",
    description: "Fresh vegetables with mozzarella and tomato sauce",
    price: 495,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Vegetarian",
    ingredients: ["Tomato sauce", "Mozzarella", "Bell peppers", "Mushrooms", "Onions", "Tomatoes"]
  },
  {
    id: 6,
    name: "Meat Lovers",
    description: "For meat enthusiasts with pepperoni, sausage, and ham",
    price: 745,
    image: "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Meat",
    ingredients: ["Tomato sauce", "Mozzarella", "Pepperoni", "Sausage", "Ham", "Bacon"],
    isPopular: true
  },
  {
    id: 7,
    name: "BBQ Chicken",
    description: "Grilled chicken with BBQ sauce and red onions",
    price: 695,
    image: "https://images.pexels.com/photos/5792329/pexels-photo-5792329.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Chicken",
    ingredients: ["BBQ sauce", "Mozzarella", "Grilled chicken", "Red onions", "Cilantro"]
  },
  {
    id: 8,
    name: "Mediterranean",
    description: "Mediterranean flavors with feta cheese and olives",
    price: 625,
    image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Special",
    ingredients: ["Tomato sauce", "Mozzarella", "Feta cheese", "Olives", "Sun-dried tomatoes", "Spinach"]
  }
];