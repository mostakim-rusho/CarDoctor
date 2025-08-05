import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Signup = () => {
  const {createUser}=useContext(AuthContext)
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log("User Info:", { name, email, password });
    // You can now send this data to your backend or Firebase
    createUser(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user)
    })
    .then(error=>{
      console.log(error)
    })
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignUp}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" name="name" className="input mb-2" placeholder="Name" />

                <label className="label">Email</label>
                <input type="email" name="email" className="input mb-2" placeholder="Email" />

                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input mb-2"
                  placeholder="Password"
                />

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <input
                  className="btn btn-neutral mt-4"
                  type="submit"
                  value="SignUp"
                />
              </fieldset>
            </form>
            <p className="mt-4">
              Already have an account?{" "}
              <Link className="text-amber-700 font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
