export const validateLogin = (email, password) => {
    if (!email.trim()) {
        return "Email is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return "Please enter a valid email address.";
    }

    if (!password) {
        return "Password is required.";
    }

    if (password.length < 6) {
        return "Password must be at least 6 characters.";
    }

    return null;
};

export const validateRegister = (
    email,
    password,
    confirmPassword
) => {
    if (!email.trim()) {
        return "Email is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return "Please enter a valid email address.";
    }

    if (!password) {
        return "Password is required.";
    }

    if (password.length < 6) {
        return "Password must be at least 6 characters.";
    }

    if (password !== confirmPassword) {
        return "Passwords do not match.";
    }

    return null;
};