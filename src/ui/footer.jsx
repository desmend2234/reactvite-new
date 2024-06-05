function Footer() {
    return (
        <footer className=" min-h-full w-full bg-blue-200 ">
            <div className="mx-auto w-full  p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="#"
                        className="flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
                    >
                        <img
                            src="./public/logo2.svg"
                            className="h-8"
                            alt="Logo"
                        />
                        <span className="justify-center self-center whitespace-nowrap text-2xl font-semibold text-stone-800">
                            TRAVEL SKY
                        </span>
                    </a>
                    <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500  sm:mb-0">
                        <li>
                            <a
                                href="#"
                                className="me-4 hover:underline md:me-6"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="me-4 hover:underline md:me-6"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="me-4 hover:underline md:me-6"
                            >
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-stone-500  sm:mx-auto lg:my-8" />
                <span className="block text-sm text-stone-500  sm:text-center">
                    © 2024{' '}
                    <a href="https://flowbite.com/" className="hover:underline">
                        TRAVEL SKY™
                    </a>
                    . All Rights Reserved.以上內容純屬練習，勿挪作商業用途
                </span>
            </div>
        </footer>
    )
}

export default Footer
