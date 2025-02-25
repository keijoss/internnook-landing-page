import { Link } from "react-router";

export default function Register() {
  return (
    <div style={styles.container}>
      <div style={styles.registerBox}>
        {/* Left side - Image */}
        <div style={styles.imageSection}>
          <img
            src="public/images/Intern1.png" // Adjust this if needed
            alt="Intern at work"
            style={styles.image}
          />
        </div>

        {/* Right side - Form */}
        <div style={styles.formSection}>
          <h2 style={styles.logo}>Internnook</h2>
          <p style={styles.welcomeText}>
            Welcome! Please provide the following details to complete your account.
          </p>

          <form style={styles.registerForm}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input type="email" placeholder="Email" style={styles.inputField} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <input type="password" placeholder="Set password" style={styles.inputField} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Invite Code</label>
              <input type="text" placeholder="Invite Code" style={styles.inputField} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Role</label>
              <select style={styles.inputField}>
                <option value="">Select Role</option>
                <option value="intern">Intern</option>
                <option value="mentor">Mentor</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button style={styles.submitButton}>Create Account</button>
          </form>

          <div style={styles.divider}>Or sign up with</div>

          <button style={styles.googleButton}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              style={styles.googleIcon}
            />
            <span>Sign up with Google</span>
          </button>

          <p style={styles.loginText}>
            Already have an account?{" "}
            <Link to="/auth/login" style={styles.loginLink}>Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// Styles Object
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  registerBox: {
    display: "flex",
    width: "900px",
    height: "600px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  imageSection: {
    width: "40%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a237e",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  formSection: {
    width: "60%",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  registerForm: {
    width: "100%",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    fontWeight: "bold",
    display: "block",
    marginBottom: "5px",
  },
  inputField: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#1a237e",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  googleButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  googleIcon: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
  },
  loginText: {
    marginTop: "10px",
    textAlign: "center",
  },
};

