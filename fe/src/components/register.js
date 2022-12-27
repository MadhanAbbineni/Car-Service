import { useNavigate } from "react-router-dom";

import auth from "../auth";
import { useState } from "react";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    setLoading(true);
    console.log(
      username,
      password,
      fullname,
      email,
      address1,
      address2,
      pincode,
      state,
      city
    );
    // TODO: if (password !== confirmPassword) return;
    const isLoggedIn = await auth.login(
      {
        username,
        password,
        full_name: fullname,
        email,
        address1,
        address2,
        pincode,
        state,
        city,
      },
      true
    );
    setLoading(false);

    if (isLoggedIn) navigate("/");
  };

  return (
    <div>
      <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create an Account
          </h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div class="space-y-6">
              <div>
                <label
                  for="fullname"
                  class="block text-sm font-medium text-gray-700"
                >
                  Full name
                </label>
                <div class="mt-1">
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    autocomplete="fullname"
                    onChange={(e) => setFullname(e.target.value)}
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700"
                >
                  User name
                </label>
                <div class="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autocomplete="username"
                    onChange={(e) => setUsername(e.target.value)}
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div class="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="confirm-password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div class="mt-1">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    autocomplete="confirm-password"
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="address"
                  class="block text-sm font-medium text-gray-700"
                >
                  Address Line1
                </label>
                <div class="mt-1">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    autocomplete="address"
                    onChange={(e) => setAddress1(e.target.value)}
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="line-2"
                  class="block text-sm font-medium text-gray-700"
                >
                  Line2
                </label>
                <div class="mt-1">
                  <input
                    id="line-2"
                    name="line-2"
                    type="text"
                    autocomplete="line-2"
                    onChange={(e) => setAddress2(e.target.value)}
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="city"
                  class="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <div class="mt-1">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autocomplete="city"
                    onChange={(e) => setCity(e.target.value)}
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="pincode"
                  class="block text-sm font-medium text-gray-700"
                >
                  Pincode
                </label>
                <div class="mt-1">
                  <input
                    id="pincode"
                    name="pincode"
                    type="text"
                    autocomplete="pincode"
                    onChange={(e) => setPincode(e.target.value)}
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="state"
                  class="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <div class="mt-1">
                  <input
                    id="state"
                    name="state"
                    type="text"
                    autocomplete="state"
                    onChange={(e) => setState(e.target.value)}
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRegister();
                  }}
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
