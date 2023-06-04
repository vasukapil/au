import {MapPin , Phone , EnvelopeSimple} from "phosphor-react"
const Contact = () => {
    let contactDetails = [
        {
            icon: <MapPin size={24} />,
            text: "Near Digital 360, Nehru Colony, Dehrdun",
          },
          {
            icon: <Phone size={24} />,
            text: "+91 6396894543",
          },
          {
            icon: <EnvelopeSimple size={24} />,
            text: "jsncja@gmail.com",
          },

    ]
  return (
    <div className="flex justify-center items-center w-full h-screen">
     <div className="h-[60%] w-[60%] max-w-[508px] max-h-[395px] rounded-2xl bg-custom-yellow flex justify-center items-center">
        <div>
            <h4>Contact Information</h4>
            {contactDetails.map(({icon,text})=>{
                return (
                 <div key={text} className="flex items-center">
                 <span>{icon}</span>
                 <span className="ml-5">{text}</span>
                 
             </div>
                )
})}
           
        </div>

     </div>
     <div>

     </div>
  </div>
  )
}

export default Contact