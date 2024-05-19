function Container({num,text,lorem}){
    return(

        <div className=" text-center flex-col h-[22vh]">

            <div className="h-[8vh]">
            <button className=" px-4 py-2 w-[3vw] 
            font-bold text-[orangered] rounded-full border-none
         bg-white">{num}</button>   
         </div>

         <div>
         <p className="h-[5vh] font-bold">{text}</p>
         <p className="w-[25vw]">{lorem}</p>
         </div>
        </div>
    )
}
export default Container