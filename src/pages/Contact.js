import FormRow from "../components/Formrow";

const contactInfo = [
  {
    title: "Email",
    details: "mostafaeln@hotmail.com",
  },
  {
    title: "Phone Number",
    details: "+201276916422",
  },
  {
    title: "Resume",
    details: "https://l1nk.dev/om0jipk",
  },
];

function Contact() {
  return (
    <div className="bg-[#002f7b] min-h-screen p-4 flex flex-col items-center">
      <h6 className="text-4xl md:text-6xl text-[#afeb8f] mb-6">
        Reach Out!
      </h6>

      <section className="w-full flex flex-col gap-4 md:w-2/3">
        {contactInfo.map((item, index) => (
          <FormRow
            key={item.title}
            title={item.title}
            details={item.details}
            delay={index + 1}
          />
        ))}
      </section>
    </div>
  );
}

export default Contact;