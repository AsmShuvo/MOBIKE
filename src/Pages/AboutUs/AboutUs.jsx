import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <section className="pt-10 overflow-hidden bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2">

                        <div className=''>
                            <h2 className="text-3xl plain tracking-wider font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Hey 👋 I
                                am
                                <br className="block sm:hidden" /> <span className='text-primary'>ASM Shuvo</span>
                            </h2>
                            <p className="max-w-lg heading mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                                I am a dedicated MERN stack developer studying at Shahjalal University of Science and Technology, Sylhet (Batch '20). <br /> I have skills in ReactJS, JavaScript, ExpressJS, MongoDB, and MySQL. <br /> And also I enjoy competitive programming. I know several programming languages like C, C++, Java, Python, and JavaScript. I am passionate about web development and always eager to learn and explore new technologies.
                            </p>

                            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                                <span className="relative inline-block">
                                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                                    <span className="relative"> Have a question? </span>
                                </span>
                                <br className="block poppins" />Ask me on <a href="https://www.facebook.com/asm.shuvo.37/" title="" target='_blank '
                                    className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">Facebook</a>
                            </p>
                        </div>

                        <div className="relative">
                            <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                            <img className="relative w-[800px] h-[450px] xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://i.ibb.co/9Zd6wLF/me-removebg-preview.png" alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;