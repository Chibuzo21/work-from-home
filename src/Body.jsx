import Pics from "./assets/lady.jpg";
import Header from "./Header";

function Body(){
    const popUp=()=>{
        alert("You have signed in today")

    }
    return (
        <main className="bg-cover bg-center text-white h-[100vh]" 
        style={{backgroundImage:`url(${Pics})`}} >
<Header/>
<div className="h-[30vh]"></div>
<div className=" h-[35vh] grid gap-2 px-36 w-screen">
    <h1 className="font-bold text-3xl">MAKE MONEY <br />FROM HOME</h1>
    <p className="text-sm w-[32vw]">The best way to start earning extra cash 
    from the comfort of your own home</p>
    <button className="bg-[orangered] rounded-sm h-[7vh] w-[12vw]" 
    onClick={popUp}>SIGN UP TODAY</button>
</div>
        

        </main>
    )
}
export default Body