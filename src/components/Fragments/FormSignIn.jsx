import Button from "../Elements/Button";
import CheckBox from "../Elements/CheckBox";
import LabeledInput from "../Elements/LabeledInput";

const FormSignIn = () => {
    return (
      <form action="">
        <div className="mb-6">
          <LabeledInput
                    type="email"
                    labelText="Email Address"
                    placeholder="akbar@example.com"
                    name="email"
                    id="email"
                  />
        </div>
        <div className="mb-6">
          <LabeledInput type="password"  labelText="Password" placeholder="*********" name="password" id="pass"/>
        </div>
        <div className="mb-3">
          <CheckBox />
        </div>
        <Button />
    </form>

      );
};

export default FormSignIn;