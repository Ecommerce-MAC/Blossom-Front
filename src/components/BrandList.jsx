import ecoverde from "../assets/Img-brand/Ecoverde.png"
import juice from "../assets/Img-brand/juice.png"
import kiko from "../assets/Img-brand/kiko.png"
import fabiola from "../assets/Img-brand/fabiola.png"
import ziaja from "../assets/Img-brand/ziaja.png"

export default function Brand() {
    return (
      <div className=" bg-pink py-24 sm:py-10 mt-32 mb-20  pt-1 shadow-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900"></h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 transform scale-100 hover:scale-110 transition duration-200"
              src={ecoverde}
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 transform scale-100 hover:scale-110 transition duration-200"
              src={juice}
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 transform scale-100 hover:scale-110 transition duration-200"
              src={kiko}
              alt="Tuple"
              width={158}
              height={48}
            />
             <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 transform scale-100 hover:scale-110 transition duration-200"
              src={fabiola}
              alt="SavvyCal"
              width={158}
              height={48}
            />  
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 transform scale-100 hover:scale-110 transition duration-200"
              src={ziaja}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }
  