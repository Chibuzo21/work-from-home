import Container from "./Container"
function Footer(){

const loremQuote="Lorem ipsum, dolor sit amet consectetur adipisicing elit incididunt ut labore.";
    
return(
        <>
        <main className="bg-[orangered] text-white h-[60vh]">
        <div className="flex p-10 justify-between items-center ">
            <Container num={"1"} text={"IT'S FINE"} lorem={loremQuote}/>
            <Container num={"2"} text={"IT'S FUN"} lorem={loremQuote}/>
                <Container num={"3"} text={"IT'S FAST"} lorem={loremQuote}/>
        </div>
        <div className="h-[14vh]">
        <div className="border-b w-full"></div>
        </div>
        <div className="text-center">
            <p>SIMPLE WORK FROM HOME OPPORTUNITY</p>
        </div>
        </main>
        </>
    )
}
export default Footer