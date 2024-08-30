export default function ComponentCard({ title, onClick }) {

    return (
        <div className="flex items-center flex-col m-2">
          <div className="w-80 h-72 bg-[#180728] rounded-md cursor-pointer flex justify-center items-center" onClick={onClick}>
            <h2 className="text-white text-4xl p-2">{title}</h2>
          </div>
        </div>
    )
}