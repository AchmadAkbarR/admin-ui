import FormSignIn from "../Fragments/FormSignIn";
import Logo from "../Elements/Logo";
import LabeledInput from "../Elements/LabeledInput";
import { Link } from "react-router-dom";

const AuthLayout = () => {
    return (
      <div className="flex justify-center min-h-screen items-center bg-special-mainBg">
        {/* container start */}
        <div className="w-full max-w-sm">
          {/* logo start */}
          <Logo />
          {/* logo end */}
          {/* form start */}
          <div className="mt-16">
            <FormSignIn/>
            
          {/* form end */}
          {/* teks start */}
          <div className="my-9 px-7 flex justify-center text-xs text-gray-03 items-center flex-col static">
            <div className="border border-gray-05 w-full"></div>
            <div className="px-2 bg-special-mainBg absolute"> or sign in with</div>
          </div>
          {/* teks end */}
          {/* sign in with google start */}
          <div className="mb-8">
            <button
              className="h-12 flex items-center justify-center rounded-md text-sm w-full bg-gray-05 text-gray-01"
              type="button"
            >
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="800px"
                height="800px"
                viewBox="-0.5 0 48 48"
                version="1.1"
              >
                
                <title>Google-color</title> <desc>Created with Sketch.</desc>
                <defs> </defs>
                <g
                  id="Icons"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  
                  <g id="Color-" transform="translate(-401.000000, -860.000000)">
                    
                    <g id="Google" transform="translate(401.000000, 860.000000)">
                      
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"
                      >
                        
                      </path>
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"
                      >
                        
                      </path>
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"
                      >
                        
                      </path>
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4"
                        fill="#4285F4"
                      >
                        
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>
          {/* sign in with google end */}
          {/* link start */}
          <div className="flex justify-center">
            <a className="text-primary text-sm font-bold">Create an account</a>
          </div>
          {/* link end */}
          {/* forgot */}
          <div className="flex justify-center mt-4">
            {/* link ini adalah atribut komponen dari bawaan react router dom  */}
            <Link
              to="/lali"
              className="text-blue-800 text-sm font-bold"
              >
                Forgot Password
            </Link>
          </div>
        </div>
        {/* container end */}
      </div>
      </div>
      );
};
  
export default AuthLayout;