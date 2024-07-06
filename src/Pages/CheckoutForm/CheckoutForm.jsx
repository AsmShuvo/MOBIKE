import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Providers/AuthProviders";

const CheckoutForm = () => {
    const { user } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [trx, setTrx] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const stripe = useStripe();
    const elements = useElements();
    const axios = useAxios();
    const { data: cart, refetch: cartRefetch } = useQuery({
        queryKey: ["cart_"],
        queryFn: async () => {
            const res = await axios.get("/cart");
            return res.data;
        }
    });
    console.log(cart);
    const price = cart?.reduce((total, item) => total + item.rent, 0)
    console.log(price);

    useEffect(() => {
        axios.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
            .catch(err => {
                console.log("Error while posting", err)
            })
    }, [axios, price])

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
            console.log("payment error");
            setError(error.message)
        }
        else {
            console.log("payment method", paymentMethod);
            setError("")
        }
        // confitm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymus",
                    name: user?.displayName || "anonymus"
                }
            }
        })

        if (confirmError) {
            console.log("confirm error", confirmError)
        }
        else {
            console.log("payment intent", paymentIntent);
            console.log("trx id", paymentIntent.id);
            setTrx(paymentIntent.id)
            const payment = {
                email: user?.email,
                price,
                date: new Date(),
                cartIds: cart?.map(item => item._id),
                status: 'pending',
                transactionID: paymentIntent.id
            }
            console.log("cart ids", payment.cartIds);
            const res = axios.post('/payments', payment)
            console.log("payment saved", res.data)
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
                    <button type="submit" disabled={!stripe || !clientSecret} className="mx-auto bg-blue-700 hover:bg-success text-white font-semibold btn btn-sm"  >Pay</button>
                    <p className="text-red-600">{error}</p>
                    {trx && <p className="text-blue-600"> TRX ID {trx}</p>}
                </div>

            </form>
        </div>
    );
};

export default CheckoutForm;