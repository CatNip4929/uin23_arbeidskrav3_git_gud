import Title from "./Title";
import resources from '../resources.json'
import Resources from "./Resources";

export default function Nav({cat}) {
  return (
    <nav>
      <button>
        <Title />
        {resources.map((resources) =>{
             return(
                <Resources cat={resources.category} />
                )
                } 
            )}
      </button>
    </nav>
  );
}
