import { AiOutlineClose } from 'react-icons/ai';


const BookModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed bg-black  bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] backdrop-blur-xl bg-white/50 rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-gray-700 cursor-pointer'
          onClick={onClose}
        />
        <div className='flex justify-start items-center gap-x-2'>
          <h2 className='my-1 font-bold'>{book.price}</h2>
        </div>
        <p className='mt-4'></p>
        <p className='my-2'>
        {book.priceplan}
        </p>
        <div>
        <ul className="text-base mb-2">
          {book.payement.map((payement, index) => (
            <li key={index}>
              <span className="text-blue-500">&#8226;</span> {payement}
            </li>
          ))}
        </ul>
      </div>
      <p className='text-center text-sm font-semibold'>For more queries and details you can contact our customer support. Available 24/7 for your service.</p>
      </div>
      
    </div> 
  );
};

export default BookModal;