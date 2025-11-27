import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // Password validation rules
  const passwordRules = {
    minLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const allRulesMet = Object.values(passwordRules).every(rule => rule === true);
  const passwordsMatch = password === confirmPassword && confirmPassword !== "";

  const handleSignup = (e) => {
    e.preventDefault();
    
    if (!allRulesMet) {
      alert("Please meet all password requirements");
      return;
    }
    
    if (!passwordsMatch) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Signup Successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          
          <div className="password-input-wrapper">
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            
            {password && !allRulesMet && (
              <div className="password-requirements">
                <p className="requirements-title">Password must contain:</p>
                <ul className="requirements-list">
                  <li className={passwordRules.minLength ? "valid" : "invalid"}>
                    At least 8 characters
                  </li>
                  <li className={passwordRules.hasUpperCase ? "valid" : "invalid"}>
                    At least one uppercase letter
                  </li>
                  <li className={passwordRules.hasLowerCase ? "valid" : "invalid"}>
                    At least one lowercase letter
                  </li>
                  <li className={passwordRules.hasNumber ? "valid" : "invalid"}>
                    At least one number
                  </li>
                  <li className={passwordRules.hasSpecialChar ? "valid" : "invalid"}>
                    At least one special character
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="password-input-wrapper">
            <input 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
            {confirmPassword && !passwordsMatch && (
              <span className="password-error">Passwords do not match</span>
            )}
            {confirmPassword && passwordsMatch && (
              <span className="password-success">✓ Passwords match</span>
            )}
          </div>

          <button 
            type="submit"
            disabled={!allRulesMet || !passwordsMatch}
            className={allRulesMet && passwordsMatch ? "" : "disabled-btn"}
          >
            Create Account
          </button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}
