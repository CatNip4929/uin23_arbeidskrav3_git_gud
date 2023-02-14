import resources from '../resources.json'
import Category from './Category'
import Resources from './Resources'
import Sources from './Sources'
import Text from './Text'

export default function Content({cat, text, src}) {
    return (
        <main>
            <Category cat={cat}/>
            <Text text={text}/>
            <Sources src={src}/>

        {resources.map((resources) =>{
            return(
                <Resources
                category={resources.category}
                text={resources.text}
                src={resources.src} />
            )
         }
        )}

            </main>
    )
        
}