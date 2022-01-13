import Card from './Card';
import '../styles/Shop.css';

const Shop = (props) =>{
    

    return(
        <>
       
        <main className='main'>
            <div className='banner'>
            <h1>{props.name}</h1>
            </div>
            <div className='card_container'>
            {props.cards.map((card, index) => ( <Card key={index} src={card.image} name ={card.name} clickCard={props.clickCard} addtoCart={props.addtoCart} price={card.price}/> ))}
        
                
               
            
            </div>
        </main>
        </>
    )
}
export default Shop;