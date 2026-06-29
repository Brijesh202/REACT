import { useParams } from "react-router";

const Contact = () => {
  const params = useParams()
  console.log(params)
  return (
    <h1>Contact Us</h1>
  )
}

export default Contact;