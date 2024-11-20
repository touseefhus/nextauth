import nodemailer from "nodemailer"

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: true, // true for port 465, false for other ports
            auth: {
                user: "maddison53@ethereal.email",
                pass: "jn7jnAPss4f63QBp6D",
            },
        });

        const mailOpttions = {
            from: 'hussaindev007@gmail.com',
            to: email,
            subject: emailType === "Verify" ? "Verify your email" : "Reset your password",
            html: "<b>Hello world?</b>",
        }

        const mailResponse = await transporter.sendMail(mailOpttions)
        return mailResponse
    } catch (error: any) {
        throw new Error(error.message)
    }
}