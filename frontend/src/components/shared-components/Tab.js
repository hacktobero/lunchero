
export default function Tab({ day, onDayChange, active, role }) {
    return (
        <button role={role} onClick={() => { onDayChange(day) }}
                className={`md:w-1/5 md:h-full sm:w-2/3 sm:h-1/5 sm:my-1 md:rounded-t-2xl md:rounded-b-sm sm:rounded-2xl flex duration-200 text-white font-bold justify-center shadow-sm self-center items-center
                ${active === day ? `bg-green-700 hover:bg-green-700 border border-gray md:text-2xl sm:text-xl` : 'bg-green-400 border md:text-xl sm:text-lg'}`}>
          {day}
        </button>
    )
}
