import {MapPin , Phone , EnvelopeSimple} from "phosphor-react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const Contact = () => {
    let contactDetails = [
        {
            icon: <MapPin size={24} color="#000000" weight="fill" />,
            text: "Near Digital 360, Nehru Colony, Dehrdun",
          },
          {
            icon: <Phone size={24} color="#000000" weight="fill" />,
            text: "+91 6396894543",
          },
          {
            icon: <EnvelopeSimple size={24} />,
            text: "jsncja@gmail.com",
          },

    ]
  return (
    <div className="flex flex-col md:flex-row justify-around items-center w-full h-screen">
     <div className="h-[395px] w-[60%] max-w-[508px] max-h-[395px] rounded-2xl bg-custom-yellow flex justify-center items-center">
        <div className="w-[80%]">
            <h4 className=" font-medium font-roboto text-[24px] text-[#002D62]">Contact Information</h4>
            {contactDetails.map(({icon,text})=>{
                return (
                 <div key={text} className="flex items-center mb-9">
                 <span>{icon}</span>
                 <span className="ml-5 max-w-[281px] whitespace-normal font-roboto font-normal text-[#000000]">{text}</span>
                 
             </div>
                )
})}
           
        </div>

     </div>
     <div className="px-4 max-w-[50%]">
      <form className="max-w-md mx-auto">
        <div className="flex mb-16 ">
          <TextField
            id="name"
            label="Name"
            size="small"
            className="w-80 px-3 py-2 !mr-5"
          />
          <TextField
            id="email"
            label="Email"
            size="small"
            className="w-80 px-3 py-2"
          />
        </div>
        <div className="mb-16">
          <TextField
            id="option"
            select
            SelectProps={{
              native: true,
            }}
            size="small"
            defaultValue=""
            className="w-full "
          >
            <option className="!text-[#939598]"  value="" disabled>Select an Option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </TextField>
        </div>
        <div className="mb-4">
          <Button variant="contained" className=" !bg-custom-yellow !text-[#002D62]">Get in touch</Button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Contact