import emailjs from '@emailjs/browser';
import {FC, memo, useCallback, useMemo, useState} from 'react';



interface FormData {
  from_name: string;
  from_email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      from_name: '',
      from_email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [isSending, setIsSending] = useState<boolean>(false);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      /**
       * This is a good starting point to wire up your form submission logic
       * */
      console.log('Data to send: ', data);
      const apiKey = process.env.EMAIL_VAILD_API_KEY;
      // console.log("apiKey: ", apiKey);
      const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey
      try {
        setIsSending(true);
        const vaildationResponse = await fetch(apiURL+'&email='+data.from_email);
        const vaildationData = await vaildationResponse.json();
        console.log(vaildationData);
        if (vaildationData.is_smtp_valid.value) {
          // setIsSending(true);
          const serviceID: string = process.env.EMAILJS_SERVICE_ID ? process.env.EMAILJS_SERVICE_ID : '';
          const templateID: string = process.env.EMAILJS_TEMPLATE_ID ? process.env.EMAILJS_TEMPLATE_ID : '';
          const publicKey: string = process.env.EMAILJS_PUBLIC_KEY ? process.env.EMAILJS_PUBLIC_KEY : '';
          emailjs.sendForm(serviceID, templateID, event.target as HTMLFormElement, publicKey)
            .then(result => {
              alert('Thanks for reaching out! We will get back to you shortly.');
              console.log(result.text);
            }) 
            .catch(error => {
              alert('Something went wrong. Please try again later.');
              console.error(error);
            });
        } else {
          alert('Please enter a valid email address');
        }
      } catch (error) {
        alert('Something went wrong. Please try again later.');
        console.error(error);
      } finally {
        setIsSending(false);
      }
    },
    [data],
  );

  const inputClasses =
    'bg-indigo-900/50 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-violet-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-300 text-sm';
  
  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="from_name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="from_email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />

      <button
        disabled={isSending}
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-violet-900 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-indigo-800 focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        {isSending &&
        (<svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
          </svg>
        )}
        {isSending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
