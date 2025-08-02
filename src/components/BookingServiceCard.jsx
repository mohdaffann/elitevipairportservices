
const BookingServiceCard = ({ title, para = [], onBookNow }) => {
    return (
        <div className="bg-gray-300 shadow-lg rounded-2xl p-6 w-full max-w-sm flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
                {title}
            </h2>
            <div className="text-gray-800 text-sm flex-1 space-y-3 text-center">
                {para.map((line, i) => (
                    <p key={i}>{line}</p>
                ))}
            </div>
            <button
                onClick={onBookNow}
                className="mt-6 cursor-pointer bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-xl w-full transition-colors"
            >
                Book Now
            </button>
        </div>
    );
};

export default BookingServiceCard;
