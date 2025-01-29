import { useFormStatus } from "react-dom";

const UseForm = () => {
  const { pending } = useFormStatus(); // Track form submission status
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setTimeout(() => {
      console.log("Form Submitting");
    }, 2000);
  };

  const CustomerForm = () => {
    return (
      <>
        <input type="text" />
        <br />
        <input type="text" />
        <br />
        <button type="submit" disabled={pending}>Submitting</button>
      </>
    );
  };

  return (
    <div>
      UseForm
      <form onSubmit={handleSubmit}>
        <CustomerForm />
        {pending && <p>Submitting...</p>} {/* Show loading message if pending */}
      </form>
    </div>
  );
};

export default UseForm;
