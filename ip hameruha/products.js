const products = JSON.parse(localStorage.getItem("products")) || [
  { 
    id: 1, 
    name: "Luxury Lipstick", 
    price: 15, 
    image: "images/dup.jpg", 
    description: "Smooth and vibrant lipstick.",
    stock: 10
  },
  { 
    id: 2, 
    name: "Hydrating Face Cream", 
    price: 25, 
    image: "images/hd.jpg", 
    description: "Moisturizes and refreshes skin.",
    stock: 6
  },
  { 
    id: 3, 
    name: "Elegant Perfume", 
    price: 40, 
    image: "images/choco.jpg", 
    description: "Long-lasting fragrance.",
    stock: 8
  },
  { 
    id: 4, 
    name: "foundation", 
    price: 10, 
    image: "images/mac.jpg", 
    description: "it powder.",
    stock: 15
  },
  {
    id:5,
    name:"mascara",
     price: 50, 
    image:"images/mascara.jpg",
    description:"mascara",
    stock:15
  },
   {
    id:6,
    name:"lotion",
    image:"images/lotione.jpg",
     price: 90, 
    description:"cocoa glow 48h moisturisation",
    stock:15
  },
   {
    id:7,
    name:" eyebrow gel",
    image:"images/gel.jpg",
     price: 10, 
    description:"gel mascara lash & brow",
    stock:15
  },
   {
    id:8,
    name:"eyelashcurlure",
    image:"images/eyelash.jpg",
     price: 10, 
    description:"eyelash curler",
    stock:15
  },
   {
    id:9,
    name:"eyeliner",
    image:"images/eyeliner.jpg",
     price: 10, 
    description:"whaterproof, cool black, permanence",
    stock:15
  },
   {
    id:10,
    name:"eybrow razor",
    image:"images/face.jpg",
     price: 10, 
    description:"stainless safety cover",
    stock:15
  },
   {
    id:11,
    name:"deoderant",
    image:"images/dearbody.jpg",
     price: 10, 
    description:"amarous caconnt, 250ml",
    stock:15
  },
   {
    id:12,
    name:"makeup pallet",
    image:"images/full.jpg",
     price: 10, 
    description:"makeup pallet",
    stock:15
  }

];
