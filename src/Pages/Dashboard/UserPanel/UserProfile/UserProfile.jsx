import React, { useContext } from 'react';
import { AuthContext } from './../../../../Providers/AuthProviders';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const name = user?.displayName;
    const email = user?.email;
    const photo = user?.photoURL;
    console.log(name)
    return (

        <div>
            <div className="min-h-screen bg-white gap-6 flex  items-center justify-center">
                <div
                    className="bg-gray-100 dark:bg-blue-600 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
                    <div className="flex items-center gap-4">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
                            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                        />
                        <div className="w-fit transition-all transform duration-500">
                            <h1 className="text-white font-bold">
                                {name}
                            </h1>
                            <p className="text-white">{email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default UserProfile;