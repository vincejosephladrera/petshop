import React from "react";
import ItemImageOne from "./pedigree-meatjerky.jpg";
import ItemImageTwo from "./pedigree-dentastix.jpg";
import ItemImageThree from "./petcarrier.jpg";
import ItemImageFour from "./Dumbell-Dog-Toy.jpg";
import ItemImageFive from "./pedigree-adult-dogfood.jpg";
import ItemImageSix from "./pet-leash-with-vest.jpg";

const items = [
  {
    id: 1,
    name: "Pedigree Meat Jerky",
    img: ItemImageOne,
    price: "₱ 99.00",
  },
  {
    id: 2,
    name: "Pedigree Dentastix",
    img: ItemImageTwo,
    price: "₱ 79.00",
  },
  {
    id: 3,
    name: "Pet Carrier",
    img: ItemImageThree,
    price: "₱ 825.00",
  },
  {
    id: 4,
    name: "Dumbbell Dog Toy",
    img: ItemImageFour,
    price: "₱ 710.00",
  },
  {
    id: 5,
    name: "Pedigree Adult Dogfood 500g",
    img: ItemImageFive,
    price: "₱ 113.00",
  },
  {
    id: 5,
    name: "Pet leash with vest",
    img: ItemImageSix,
    price: "₱ 188.00",
  },
  {
    id: 5,
    name: "Pedigree Adult Dogfood 500g",
    img: ItemImageFive,
    price: "₱ 113.00",
  },
  {
    id: 5,
    name: "Pedigree Adult Dogfood 500g",
    img: ItemImageFive,
    price: "₱ 113.00",
  },
  {
    id: 5,
    name: "Pedigree Adult Dogfood 500g",
    img: ItemImageFive,
    price: "₱ 113.00",
  },
  {
    id: 5,
    name: "Pedigree Adult Dogfood 500g",
    img: ItemImageFive,
    price: "₱ 113.00",
  },
];

const itemsPage = () => {
  return (
    <div>
      <div className="flex justify-center landing-page">
        <div className="landing-page px-5 flex flex-col gap-y-5 max-w-[1440px] flex-grow">
          <h2 className="text-3xl font-extrabold uppercase">All items</h2>
          <ul className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 place-items-center">
            {items.map((item) => {
              return (
                <li
                  id={item.id}
                  className="h-[410px] w-[260px] bg-white flex flex-col p-2 items-justify rounded-2xl cursor-pointer"
                >
                  <div className="flex justify-center rounded-2xl h-[80%]">
                    <img src={item.img} alt="" className="object-contain w-[100%]" />
                  </div>
                  <div>
                    <h2 className="text-xl">{item.name}</h2>
                    <h2 className="text-xl">{item.price}</h2>
                  </div>
                  <button className="text-2xl bg-gradient-to-r from-gray-800 to to-black text-white py-2 hover:text-yellow-200 rounded-2xl">
                    Add to cart
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default itemsPage;
