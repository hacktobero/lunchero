import Meal from "../meals-section/Meal";

export default function MenuBar () {
  return (
    <div className={'flex flex-col p-5 w-3/4 h-2/3 justify-center self-center shadow-xl'}>
      <div className={'flex w-full h-20 self-center justify-around'}>
        <button className={'flex justify-center self-center items-center w-1/5 focus:border border-b-0 focus:rounded-lg h-full'}>Mon</button>
        <button className={'flex justify-center self-center items-center w-1/5 focus:border border-b-0 focus:rounded-lg h-full'}>Tue</button>
        <button className={'flex justify-center self-center items-center w-1/5 focus:border border-b-0 focus:rounded-lg h-full'}>Wed</button>
        <button className={'flex justify-center self-center items-center w-1/5 focus:border border-b-0 focus:rounded-lg h-full'}>Thu</button>
        <button className={'flex justify-center self-center items-center w-1/5 focus:border border-b-0 focus:rounded-lg h-full'}>Fri</button>
      </div>
      <div className={'flex flex-col w-full h-full self-center overflow-y-scroll rounded-md'}>
            <Meal />
            <Meal />
      </div>
    </div>
  )
}
