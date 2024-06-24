import { useQuery } from '@tanstack/react-query';
import Review from '../Review/Review';
import useAxios from '../../../hooks/useAxios';
import SectionHeading from '../../../Components/SectionHeading';

const Reviews = () => {
    const axios = useAxios();
    const { data: reviews, refetch: refetchReview } = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            const res = await axios.get("/reviews");
            return res.data;
        },
    })
    console.log(reviews);
    // console.log("called");

    return (
        <>
            
            {
                reviews?.map(review => <Review review={review} />)
            }
        </>
    );
};

export default Reviews;