import CardItem from "./CardItem"
import CardItemDetails from "./CardItemDetails"
CardItemDetails

function Card(props) {
    return(
        <div className="bg-cyan-700 w-max p-4 flex flex-col gap-4 rounded-lg">
            <CardItem items={props.items}/>
        </div>
    )
}

export default Card