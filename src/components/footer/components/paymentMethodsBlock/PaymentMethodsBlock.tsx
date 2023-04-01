import Visa from '../../../../assets/img/visa.png';
import MasterCard from '../../../../assets/img/master.png';


export default function PaymentMethodsBlock() {
	return (
		<div>
			<img src={Visa} alt='Visa card image' width='61' height='39'/>
			<img src={MasterCard} alt='MasterCard image' width='61' height='39' />
		</div>
	);
}