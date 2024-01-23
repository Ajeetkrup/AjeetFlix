import { MdOutlineForum, MdOutlineMail, MdVoiceChat } from "react-icons/md";

const ContactCard = () => {
  return (
    <div className="grid grid-rows-1 md:grid-cols-3 sm:grid-cols-1 gap-4 border-b-2 text-center">
      <div className="my-4">
        <div className="flex justify-center text-indigo-600">
          <MdOutlineMail />
        </div>
        <div className="flex justify-center text-slate-400 mb-2 text-xs">
          Email
        </div>
        <div className="text-slate-400 text-xs">Monday to Friday expected</div>
        <div className="text-slate-400 text-xs mb-3">Response Time: 24 hrs</div>
        <div className="flex justify-center text-slate-400 text-xs cursor-pointer">
          Send Email {`>>`}{" "}
        </div>
      </div>
      <div className="my-4">
        <div className="flex justify-center text-indigo-600">
          <MdVoiceChat />
        </div>
        <div className="flex justify-center text-slate-400 text-xs mb-2">
          Live Chat
        </div>
        <div className="text-slate-400 text-xs">
          Weekdays: 10:00 AM - 6:00 PM
        </div>
        <div className="text-slate-400 text-xs mb-3">
          Weekend: 11:00 AM - 3:00 PM
        </div>
        <div className="flex justify-center text-slate-400 text-xs cursor-pointer">
          Live Chat {`>>`}{" "}
        </div>
      </div>
      <div className="my-4">
        <div className="flex justify-center text-indigo-600">
          <MdOutlineForum />{" "}
        </div>
        <div className="flex justify-center text-slate-400 text-xs mb-2">
          Community Forum
        </div>
        <div className="text-slate-400 text-xs">Monday to Friday expected</div>
        <div className="text-slate-400 text-xs mb-3">Response Time: 72 hrs</div>
        <div className="flex justify-center text-slate-400 text-xs cursor-pointer">
          Join the community {`>>`}{" "}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
