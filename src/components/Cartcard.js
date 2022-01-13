import '../styles/Cartcard.css'
const Cartcard = (props) => {
    return (

        <div className="card" >

            <img className='card_img' src={props.item.img} alt={props.item.name} />
            <button onClick={(e)=>{props.removeCard(props.item,e)}}>X</button>
            <span className='card_span' >{props.item.name}</span>
            <span className='card_span' >Qnty:{props.item.qnty}</span>
            <span className='card_span' >price:{props.item.qnty*props.item.price}</span>


        </div>
    )
}
export default Cartcard;