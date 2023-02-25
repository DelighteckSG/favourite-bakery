import { useState } from "react";
import { hookAddSubscribersNew } from "@/hooks/subscriberHooks";
import { Analytics } from "@aws-amplify/analytics";

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

export function SubscriberHere() {
  const [message, setMessage] = useState("");
  const [buttonState, setButtonState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(
    "Thank you for subscribing to my newsletter, I will get back to you shortly.."
  );

  const handleSubmitContactForm = async (e) => {
    e.preventDefault();
    console.log("handleSubmitContactForm email", email);
    console.log("handleSubmitContactForm name", name);
    console.log("handleSubmitContactForm contact", contact);

    console.log("handleSubmitContactForm message", message);

    setButtonState("LOADING");
    setErrorMessage(null);

    try {
      console.log("Updating the endpoint ");

      const postData = await hookAddSubscribersNew({
        email: email,
        name: name,
        contactNo: contact,
        emailCopy: email,
      });

      if (postData) {
        // Update the endpoint

        console.log("Updating the Record, updated EndPoint name ", name);
        console.log("Updating the Record, updated EndPoint contact ", contact);

        const updatePoint = await Analytics.updateEndpoint({
          address: email,
          attributes: {
            name: [name],
            contact: [contact],
          },
          channelType: "EMAIL",
          optOut: "NONE",
        });
        console.log("Updating the Record, updated EndPoint ", updatePoint);

        // Send Subscribed event
        await Analytics.record({ name: "SubscribedToFavouriteBakery" });
      }
      console.log("Updating the Record ");

      setButtonState("SUCCESS");
    } catch (e) {
      console.log(e);
      setErrorMessage(e);
      setButtonState("Error");
    }
  };

  return (
    <>
      {buttonState !== "SUCCESS" && (
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
          <form
            onSubmit={handleSubmitContactForm}
            method="POST"
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
          >
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <MailIcon className="h-10 w-10 flex-none" />
              <span className="ml-3 text-2xl">Stay up to date</span>
            </h2>
            <strong
              className="mt-10 text-4xl font-semibold 
              bg-gradient-to-r bg-clip-text  text-transparent 
              from-indigo-500 via-green-500 to-indigo-500
              animate-text"
            >
              Subscribe here get upto 50% off
            </strong>

            <div className="mt-6 grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                aria-label="Email address"
                onChange={(e) => {
                  console.log("email : ", e.target.value);
                  console.log("email : ", email);
                  setEmail(e.target.value);
                }}
                required
                className="min-w-0 flex-auto text-2xl appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10 sm:text-sm"
              />
              <input
                type="name"
                name="name"
                placeholder="Your Name"
                aria-label="Customer Name"
                onChange={(e) => {
                  console.log("name : ", e.target.value);
                  console.log("name : ", name);

                  setName(e.target.value);
                }}
                required
                className="min-w-0 flex-auto text-2xl appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10 sm:text-sm"
              />
              <input
                type="contactNo"
                name="contactNo"
                placeholder="Your Contact"
                aria-label="Customer Contact No"
                onChange={(e) => {
                  console.log("contactNo : ", e.target.value);
                  console.log("contact : ", contact);
                  setContact(e.target.value);
                }}
                required
                className="min-w-0 flex-auto text-2xl  appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10 sm:text-sm"
              />

              <button
                type="submit"
                className="min-w-0 m-2 flex-auto appearance-none rounded-md border bg-blue-600 text-white dark:text-blue-800 border-zinc-900/10 dark:bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10 sm:text-sm"
              >
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      )}
      {buttonState === "ERROR" && (
        <p className="mt-2 w-1/2 text-red-600">{errorMessage}</p>
      )}
      {buttonState === "SUCCESS" && (
        <p className="mt-2 w-1/2 text-blue-600">{successMessage}</p>
      )}
    </>
  );
}
