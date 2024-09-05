export default function ComponentCard({ title, onClick }) {

    return (
        <div className="flex items-center flex-col m-2 hover:scale-110">
          <div className="w-80 h-72 bg-gradient-to-r from-[#180728] to-[#333044] rounded-md cursor-pointer flex justify-center items-center" onClick={onClick}>
            <h2 className="text-white text-4xl p-2">{title}</h2>
          </div>
        </div>
    )
}