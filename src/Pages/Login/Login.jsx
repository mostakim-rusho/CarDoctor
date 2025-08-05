import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {signIn}=useContext(AuthContext)
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log("User Info:", { email, password });
    signIn(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user)
    })
    .catch(error=>{
      console.log(error)
    })
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <input
                  className="btn btn-neutral mt-4"
                  type="submit"
                  value="Login"
                />
              </fieldset>
            </form>
            <p>
              New to Car Doctors{" "}
              <Link className="text-amber-700 font-bold" to="/signup">
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
