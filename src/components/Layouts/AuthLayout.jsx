import Logo from '../Elements/Logo';
import FormSignIn from '../Fragments/FormSignIn';

const AuthLayout = () => {
    return(
        <div className="flex justify-center min-h-screen items-center bg-special-mainBg">
          {/* container start */}
          <div className="w-full max-w-sm">
            {/* logo start */}
            <Logo/>
            {/* logo end */}
            {/* form start */}
            <div className="mt-16"></div>
    );
};
export default AuthLayout;