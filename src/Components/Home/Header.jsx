// import Video from "../../assets/sample1.mp4";

const Header = () => {
  return (
    <div className="w-screen h-[548px] max-h-[548px]">
        <video className="w-full h-full object-fill" autoPlay muted>
        <source src="https://firebasestorage.googleapis.com/v0/b/test-1fc69.appspot.com/o/Masterclass_%20AI-driven%20Development%20for%20Programmers.mp4?alt=media&token=11b26178-26af-4b46-a00d-d05168925f33&_gl=1*yf9upn*_ga*MjE1MzUyNzQwLjE2ODA4NzgxMzU.*_ga_CW55HF8NVT*MTY4NTgzMzQ3Mi4yLjEuMTY4NTgzMzQ4NC4wLjAuMA.." type="video/mp4"/>
        </video>
    </div>

  )
}

export default Header