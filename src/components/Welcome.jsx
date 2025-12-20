import larissa_welcome from '../assets/images/larissa_welcome.png'

function Welcome() {
  return (
    <div id="inicio" className="w-full h-screen bg-[var(--primary-100)] px-[100px] flex justify-center">
        <div className="grid grid-cols-[60%_40%] items-center justify-items-center gap-16 w-fit">
            <h1 className="sm:text-5xl md:text-6xl font-[600] text-left text-[var(--primary-600)] px-0">
                hi, i’m <br></br> larissa brasil!
            </h1>
            <img src={larissa_welcome} alt="Larissa Brasil"
                className="h-auto mx-auto align-left"></img>
        </div>
    </div>
  );
}

export default Welcome;