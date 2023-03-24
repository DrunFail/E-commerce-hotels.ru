import Visa from '../../assets/img/visa.png';
import MasterCard from '../../assets/img/master.png';


export default function PaymentMethodsBlock() {
	return (
		<div>
			<img src={Visa} />
			<img src={MasterCard } />
		</div>
	);
}