const Career = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
    <div className="w-[80%] h-[80%] mx-auto max-w-[1127px] max-h-[709px] bg-[url('src/Components/Home/JoinUs.png')] relative">
      <div className='max-w-[500px] max-h-[414px] flex justify-center items-center absolute left-0 bg-white bg-gradient-to-tr from-transparent via-transparent to-white border-2 border-solid border-custom-white border-b-0' style={{background : "linear-gradient(50.38deg, rgba(0, 0, 0, 0) 5.01%, #FFFFFF 5.01%) !important"}}>
        <div className="box-content p-10 ">
            <h2 className=" font-roboto font-bold text-4xl leading-14 flex items-center text-custom-yellow">Careers at AU</h2>
            <p className='font-roboto font-hairline text-base leading-6 flex items-center text-black'>{`Caring for our people's well-being. Providing flexibility`}
in how we work. Inspiring everybody to shape better
tomorrows. These are just a few of the reasons Crowe
has been named a great place to work.</p>
<button className='bg-[#FDB913] cursor-pointer shadow-sm pt-[10px] pr-[32px] pb-[10px] pl-[33px] font-roboto font-medium text-base leading-6 flex items-center justify-center text-center text-[#002D62]'>Join Us</button>
        </div>


      </div>
    </div>
  </div>
  )
}

export default Career