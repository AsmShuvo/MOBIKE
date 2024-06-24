import { useQuery } from '@tanstack/react-query';
import Review from '../Review/Review';
import useAxios from '../../../hooks/useAxios';
import SectionHeading from '../../../Components/SectionHeading';
import { Link } from 'react-router-dom';

const HomeReviews = () => {
    const axios = useAxios();
    const { data: home_reviews } = useQuery({
        queryKey: ["home_reviews"],
        queryFn: async () => {
            const res = await axios.get("/reviews");
            return res.data;
        },
    })
    const reviews = home_reviews?.slice(0, 2);
    return (
        <div className=" px-28 mb-10 ">
            <div>
                <SectionHeading subHeading={"TESTimonials"} heading={"WHAT OUR CLIENTS SAID"} />
            </div>
            <div className='grid grid-cols-2 gap-1'>
                {
                    reviews?.map(review => <Review review={review} />)
                }
            </div>
            <Link to="/reviews" className='flex justify-center items-center mt-8'><button className='bg-primary mx-auto py-2 w-44 h-14 text-white font-bold heading rounded-none'>VIEW MORE REVIEWS</button></Link>

        </div>
    );
};

export default HomeReviews;