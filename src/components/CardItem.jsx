import PropTypes from 'prop-types';
import CardItemDetails from "./CardItemDetails";


function CardItem(props) {

  return (
    <>
        {/* <CardItemDetails itemDate={props.items[0].itemDate} itemName={props.items[0].itemName} />
        <CardItemDetails itemDate={props.items[1].itemDate} itemName={props.items[1].itemName} />
        <CardItemDetails itemDate={props.items[2].itemDate} itemName={props.items[2].itemName} /> */}
        {
          props.items.map((item) => {
            return <CardItemDetails itemDate={item.itemDate} itemName={item.itemName} key={item.key}></CardItemDetails>
          })
        }
    </>
  )
}

CardItem.propTypes = {
  items: PropTypes.object.isRequired,
};

export default CardItem;
