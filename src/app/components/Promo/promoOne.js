export default function PromoOne({ imageSrc, title, description, buttonText, onButtonClick }) {
    return (
      <div className="flex flex-col md:flex-row items-center bg-[#FF7D61] text-white p-6 rounded-lg shadow-lg">
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Promo"
            className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-4"
          />
        )}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">{title}</h2>
          <p className="mb-4">{description}</p>
          <button
            className="bg-[#CC4426] hover:bg-[#FF7D61] text-white py-2 px-4 rounded-lg transition duration-300"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    );
  }