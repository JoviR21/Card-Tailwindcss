import productDesktop from "./assets/images/image-product-desktop.jpg";
import productMobile from "./assets/images/image-product-mobile.jpg";
import cart from "./assets/images/icon-cart.svg"
function Card() {
  return (
    <main className="bg-cream min-h-screen min-w-screen flex justify-center items-center text-regular text-dark-grayish-blue font-montserrat py-8 px-6">
      <div className="grid sm:grid-cols-2 bg-white sm:auto-rows-max rounded-xl overflow-hidden w-fit max-w-xl">
        <div>
          <picture>
            <source media="(max-width: 640px)" srcSet={productMobile}/>
            <img src={productDesktop} alt="Perfume" className="h-full w-full"/>
          </picture>
        </div>
        <div className="p-7">
          <p className="uppercase tracking-[0.5em] mb-5">Perfume</p>
          <h1 className="font-fraunce text-4xl font-bold text-very-dark-blue mb-7">Gabrielle Essence Eau De Parfume</h1>
          <p className="mb-5">
            A floral, solar and volaptuous interpretation composed by Olivier Polge, Perfumer-Creator for the house of CHANEL
          </p>
          <div className="flex items-center gap-5 mb-5">
            <span className="font-fraunce text-dark-cyan text-3xl font-bold">$149.99</span>
            <span className="line-through">$169.99</span>
          </div>
          <button className="flex bg-dark-cyan text-white w-full p-3 rounded-lg justify-center gap-4 ">
            <img src={cart} alt="Cart Icon" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Card;  