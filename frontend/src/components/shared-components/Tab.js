
export default function Tab({ day, onDayChange, active, role }) {
    return (
        <button role={role} onClick={() => { onDayChange(day) }} className={`flex duration-200 text-white font-bold justify-center shadow-sm self-center items-center w-1/5 rounded-t-2xl rounded-b-sm h-full ${active === day ? `bg-green-700 hover:bg-green-700 border border-gray text-2xl` : 'bg-green-400 border text-xl'}`}>{day}</button>
    )
}
