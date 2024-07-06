import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) { return }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log("payment error")
        }
        else {
            console.log("payment method", paymentMethod)
        }


    }
    return (
        <div>
            <div>
                <h1 className="text-center text-4xl font-extrabold  text-gray-700">PAYMENT</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="flex justify-center items-center" >
                    <button type="submit" className="mx-auto bg-blue-700 hover:bg-success text-white font-semibold btn btn-sm" disabled={!stripe}>Pay</button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;