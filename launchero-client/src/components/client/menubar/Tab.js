
export default function Tab({ day, onDayChange, active }) {
    return (
        <div onClick={() => { onDayChange(day) }} className={`flex cursor-pointer  duration-200 text-white font-bold justify-center shadow-sm self-center items-center w-1/5 hover:bg-green-700  rounded-t-2xl  h-full ${active === day ? `bg-green-700` : 'bg-green-400'}`}>{day}</div>
    )
}