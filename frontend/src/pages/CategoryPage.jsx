import Category from "../components/buttons/Category";
import category from "../data/category.json";
import "../scss/categorypage.scss";

function CategoryPage() {
  return (
    <div className="Main">
      <h1>Choisis ton thème</h1>
      <div className="CategoryCard">
        {category.map((catego) => (
          <div key={catego.id} className="Display">
            <div
              style={{ backgroundImage: `url(${catego.logo})` }}
              className="Icon"
            />
            {catego.name}
            <Category name="Jouer" id={catego.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
