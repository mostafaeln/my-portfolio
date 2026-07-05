import FormRow from "../components/Formrow";

function Contact() {
  return (
    <div className="bg-[#002f7b] min-h-screen p-4 flex flex-col items-center">
      <h6 className="text-4xl md:text-6xl text-[#afeb8f] mb-6">Reach Out!</h6>
      <section className="w-full flex flex-col gap-4 md:w-2/3">
        <FormRow title="Email" details="mostafaeln@hotmail.com" delay="1" />
        <FormRow title="Phone Number" details="+201276916422" delay="2" />
        <FormRow title="Resume" details="https://bit.ly/3CT46Ee" delay="3" />
      </section>
    </div>
  );
}

export default Contact;
