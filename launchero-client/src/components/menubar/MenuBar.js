
export default function MenuBar () {
  return (
    <div className={'flex flex-col p-5 w-full h-1/3 justify-center self-center border'}>
      <div className={'flex w-full h-1/5 self-center justify-around'}>
        <button className={'flex justify-center self-center items-center w-1/5 focus:border border-b-0 focus:rounded-t-lg h-full'}>M</button>
        <button className={'flex justify-center self-center items-center w-1/5 focus:border border-b-0 focus:rounded-t-lg h-full'}>T</button>
        <button className={'flex justify-center self-center items-center w-1/5 focus:border border-b-0 focus:rounded-t-lg h-full'}>W</button>
        <button className={'flex justify-center self-center items-center w-1/5 focus:border border-b-0 focus:rounded-t-lg h-full'}>T</button>
        <button className={'flex justify-center self-center items-center w-1/5 focus:border border-b-0 focus:rounded-t-lg h-full'}>F</button>
      </div>
      <div className={'flex w-full h-full self-center border overflow-scroll'}>

      </div>
    </div>
  )
}
