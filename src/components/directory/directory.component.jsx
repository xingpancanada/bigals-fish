import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const categories = [
  {
    id: 1,
    title: "Fish",
    image: "/assets/images/fishCategory.jpeg",
    route: "shop/fish",
  },
  {
    id: 2,
    title: "Food",
    image: "/assets/images/foodCategory.jpeg",
    route: "shop/hats",
  },
  {
    id: 3,
    title: "Equipment",
    image: "/assets/images/equipmentCategory.jpeg",
    route: "shop/jackets",
  },
  {
    id: 4,
    title: "Freshwater",
    image: "/assets/images/freshwaterCategory.jpeg",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "Saltwater",
    image: "/assets/images/saltwaterCategory.jpeg",
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
