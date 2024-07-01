import React, { useContext, useState } from 'react';
import { AuthContext } from './../../../../Providers/AuthProviders';
import { MdOutlineInsertPhoto } from 'react-icons/md';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const name = user?.displayName;
    const email = user?.email;
    const photo = user?.photoURL;
    const [updated, setUpdated] = useState(false);
    console.log(name);
    const updateUserProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(name, photo);
        updateProfile(user, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => {
                setUpdated(true);
                Swal.fire({
                    title: "Profile Update Successfully",
                    timer: 1000,
                    showConfirmButton: false,
                    position: 'top-end'
                })
            })
            .catch(err => console.log("Error during update profile:", err))


    }
    return (
        <div className='flex  justify-center mt-10'>
            <div>
                <div className='flex items-center gap-5'>
                    <div><img src={photo} className='w-36 h-36 rounded-full border-4' /></div>
                    <div>
                        <p className='border bg-gray-800 uppercase text-white font-bold px-4 py-2 text-center rounded-xl'>{name}</p>
                        <p className='mt-4 text-gray-400 bg-white border-gray-300 border-2  font-bold px-4 py-2 text-center rounded-xl'>{email}</p>
                    </div>
                </div >

                <h1 className='text-4xl mt-10 poppins font-bold text-gray-800 text-center'>Update Profile</h1>
                <div className='mt-4 bg-primary rounded-xl p-4'>
                    <form onSubmit={updateUserProfile} class="max-w-sm mx-auto my-4">
                        <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                        <div class="flex">
                            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                </svg>
                            </span>
                            <input defaultValue={name} name='name' type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name here" />
                        </div>
                        <label for="website-admin" class="block mb-2 mt-2 text-sm font-medium text-gray-900 ">PhotoURL</label>
                        <div class="flex">
                            <span class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <MdOutlineInsertPhoto className='text-2xl' />
                            </span>
                            <input defaultValue={photo} name='photo' type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo url here" />
                        </div>
                        <div className='flex items-center justify-center mt-3 w-full'>
                            <button type='submit' className="btn mx-auto w-full btn-sm">Update</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UserProfile;