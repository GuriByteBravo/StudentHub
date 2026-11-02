export const otpTemplate = async (name, otp) => {
    const result = `<body>
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #333;">Welcome to MyApp, ${name}!</h2>
        <p style="font-size: 16px; color: #555;">
          Thank you for signing up. To complete your registration, please verify your email address using the One-Time Password (OTP) below:
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <span style="font-size: 32px; font-weight: bold; color: #2c3e50;">${otp}</span>
        </div>
        <p style="font-size: 14px; color: #888;">
          This OTP is valid for 10 minutes. If you didn’t request this, please ignore this email.
        </p>
        <p style="font-size: 14px; color: #888;">
          Thanks,<br>
          The Car-Show Team
        </p>
      </div>
    </body>`;
    return result;  
}
  