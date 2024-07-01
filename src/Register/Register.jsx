import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { FaRegHandPointDown } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProviders";
import useAxios from "../hooks/useAxios";

const Register = () => {
    const { createUser, user, myTheme, logOut } = useContext(AuthContext);
    const [passData, setPassData] = useState("");
    const [showPass, setShowPass] = useState("");
    const nevigate = useNavigate();
    const axios = useAxios();

    const handleInput = (e) => {
        setPassData(e.target.value);
    };

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const name = form.name.value;
        const user = {
            email,
            name,
            photo
        }

        if (password != confirm) {
            Swal.fire({
                icon: "error",
                text: "Passwords Don't Match",
            });
            return;
        }

        if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
            Swal.fire({
                icon: "error",
                text: "Password should have at least an uppercase , a lowercase and 6 characters",
            });
            return;
        }
        // console.log(email, name, photo, password, confirm);

        createUser(email, password)
            .then((res) => {
                // console.log(res.user);
                const userCredential = res.user;
                updateProfile(userCredential, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        // console.log("Profile Updated");
                        // console.log("Creaetd user : ", userCredential);
                        Swal.fire("Registration Successful. Please Login to continue");
                        axios.post("/users", user)
                            .then(data => {
                                console.log("User send to database")
                            })
                            .catch(err => {
                                console.log("Error while sending user in db", err)
                            })
                        logOut();
                        form.reset();
                        nevigate("/login");

                    })
                    .catch((err) => {
                        // console.log("Error while updating profile: ", err);
                        Swal.fire("Profile is not updated");
                        return;
                    });

                form.reset();
            })
            .catch((err) => {
                // console.log("Err: ", err);
                Swal.fire("Registration Failed! Your email is already in use");
                return;
            });
    };
    return (
        <div className="mx-2 bg-primary">
            <div>
                <div className=" w-1/4 mx-auto pt-10 pb-20 bg-primary">

                    <div className="flex items-center justify-center">
                        <form
                            onSubmit={handleRegister}
                            className="card-body bg-gradient-to-tl from-[#0000ff2e] to-blue-400  w-full"
                        >
                            <div className="form-control">
                                <p className="plain tracking-wider text-center mb-2 text-white">REGISTER TO mobike.com</p>


                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="input border border-success "
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    className="input border border-success "
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    name="photo"
                                    type="text"
                                    placeholder="Photo URL"
                                    className="input border border-success "
                                    required
                                />
                            </div>
                            {/* passwords */}
                            <div className="form-control relative">
                                <input
                                    name="password"
                                    type={showPass ? "text" : "password"}
                                    placeholder="Password"
                                    className="input border border-success"
                                    defaultValue=""
                                    onChange={handleInput}
                                    required
                                />
                                <span className="text-grany-200 absolute right-4 bottom-4 text-xl text-gray-400">
                                    {showPass ? (
                                        <FaRegEyeSlash onClick={handleShowPass} />
                                    ) : (
                                        <FaRegEye onClick={handleShowPass} />
                                    )}
                                </span>
                            </div>
                            <div className="form-control">
                                <input
                                    name="confirm"
                                    placeholder="Confirm Password"
                                    type={showPass ? "text" : "password"}
                                    className="input border border-success "
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Register"
                                    className="btn bg-red text-white"
                                />
                            </div>
                            <p className="text-gray-100 ml-2">Already have an account? <Link to="/login" className="font-semibold">Login</Link></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;