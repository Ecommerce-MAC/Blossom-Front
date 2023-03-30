import { Link } from "react-router-dom";
export const Cards = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <Link to="/ProductList/Cosmetics"><img
                        src="https://i.pinimg.com/564x/39/84/28/398428a0cd3fdd3f553635a38d60c63f.jpg"
                        className="object-cover w-full h-64"
                        alt=""
                    /></Link>
                    <div className="p-5 border border-t-0">
                        <a
                            href="/"
                            aria-label="Category"
                            title="Visit the East"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Cosmetics
                        </a>
                        <p className="mb-2 text-gray-700">
                            Natural ingredients to enhance your beauty. Discover a new way to take care of yourself with our natural and eco-friendly beauty products.
                        </p>

                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <Link to="/ProductList/Soap"><img
                        src="https://i.pinimg.com/564x/53/57/07/5357074e61ec25ecefad3cd32ae34010.jpg"
                        className="object-cover w-full h-64"
                        alt=""
                    /></Link>
                    <div className="p-5 border border-t-0">
                        <a
                            href="/"
                            aria-label="Category"
                            title="Visit the East"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Soaps
                        </a>
                        <p className="mb-2 text-gray-700">
                            Natural soaps. Enjoy gentle and effective cleansing while nourishing your skin with the natural properties of essential oils and plant extracts.
                        </p>

                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                   <Link  to= "/ProductList/Aromatherapy"> <img
                        src="https://i.pinimg.com/564x/4d/0c/4c/4d0c4c67bbecc8675681378ba9bd0799.jpg"
                        className="object-cover w-full h-64"
                        alt=""
                    /></Link>
                    <div className="p-5 border border-t-0">
                    
                        <a
                            href="/"
                            aria-label="Category"
                            title="Simple is better"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Aromatherapy
                        </a>
                        <p className="mb-2 text-gray-700">
                            Aromatherapy natural. Discover the benefits of natural fragrances and experience a sense of relaxation and harmony in your body and mind.
                        </p>

                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                  <Link to= "/ProductList/Hair"> <img
                        src="https://i.pinimg.com/564x/d7/19/48/d71948292ee21d496b25c1d76556452e.jpg"
                        className="object-cover w-full h-64"
                        alt=""
                    /></Link> 
                    <div className="p-5 border border-t-0">
                        
                        <a
                            href="/"
                            aria-label="Category"
                            title="Film It!"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Hair
                        </a>
                        <p className="mb-2 text-gray-700">
                            The best organic hair care products, free of harsh chemicals and environmentally friendly, that won't harm the environment.
                        </p>

                    </div>

                </div>
            </div>
        </div>
    );
};