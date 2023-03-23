import data from '../../../fakeData/data.json';



export default function CartList() {
    return (
        <section>
            <h2>Корзина</h2>
            {data.map(elem => 
                <article>
                    <div>
                        <img src={elem.url} alt={elem.title } />
                    </div>
                    <div>
                        <p>{elem.title}</p>
                        <p>{elem.description}</p>
                    </div>
                    <div>
                    counter
                    </div>
                    <div>price</div>
                    <div>remove</div>
                </article>
            )}
        </section>
    
    );
}