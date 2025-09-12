import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData(); // ✅ must call as a function
  const { title, _id } = service || {}; // ✅ safe destructure

  return (
    <div>
      <h2>Checkout: {title}</h2>
      <p>Service ID: {_id}</p>

    
        <form className=" mx-auto ">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
          </fieldset>
          <input
            className="btn btn-active btn-primary"
            type="submit"
            value="order now"
          />
        </form>
      </div>
  
  );
};

export default CheckOut;
