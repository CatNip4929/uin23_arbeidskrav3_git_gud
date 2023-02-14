import Category from "./Category";
import Sources from "./Sources";
import Text from "./Text";

export default function Resources({cat, text, src}) {
  return (
    <article>
  <Category cat={cat}/>
  <Text text={text}/>
  <Sources src={src} />
  </article>
  )
}
