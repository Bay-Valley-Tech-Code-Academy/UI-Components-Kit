export default function ComponentCard({ title, onClick }) {

    return (
        <div className="flex items-center flex-col m-2">
          <h2 className="text-white text-4xl p-2">{title}</h2>
          <div className="w-80 h-72 bg-black rounded-md cursor-pointer" onClick={onClick}></div>
        </div>
    )
}