import resources from "../resources.json";
import Resources from "./Resources";
import Category from "./Category";

export default function Nav() {
  return (
    <nav>
      <Category />
      {resources.map((resources) => {
        return (
          <button className="nav-btns" onClick="activate">
            <Resources cat={resources.category} />
          </button>
        );
      })}
    </nav>
  );
}
