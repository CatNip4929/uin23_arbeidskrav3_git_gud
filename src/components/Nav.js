import Title from "./Title";
import resources from "../resources.json";
import Resources from "./Resources";

export default function Nav({ cat }) {
  return (
    <nav>
      <Title />
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
