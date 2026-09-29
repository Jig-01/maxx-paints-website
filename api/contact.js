import nodemailer from "nodemailer";

export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method not allowed"
        });
    }

    try {

        const {
            name,
            phone,
            email,
            enquiry,
            message
        } = req.body;

        if (!name || !phone || !email || !enquiry || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all required fields."
            });
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        await transporter.sendMail({

            from: `"Maxx Paints Website" <${process.env.SMTP_USER}>`,

            to: "info@maxxpaints.com",

            replyTo: email,

            subject: `New ${enquiry} - Maxx Paints Website`,

            text: `
New enquiry received from Maxx Paints website.

Name: ${name}
Phone: ${phone}
Email: ${email}
Enquiry Type: ${enquiry}

Message:
${message}
            `

        });

        return res.status(200).json({
            success: true,
            message: "Your enquiry has been sent successfully."
        });

    } catch (error) {

        console.error("Contact form error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again."
        });
    }
}