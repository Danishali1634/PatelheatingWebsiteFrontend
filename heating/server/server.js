/* global process */
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

// ---------------- CONTACT FORM API ----------------
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required',
        });
    }

    const recipientEmail = 'patelheating@gmail.com';
    const senderEmail = process.env.EMAIL_USER;

    // EXACT SAME HTML STRUCTURE AS ASP.NET
    const htmlBody = `
        <div>
            <table cellpadding="2" cellspacing="2" border="1"
                style="font-size:10pt;font-family:Verdana,Arial,Helvetica,sans-serif;
                width:70%;border-collapse:collapse;border:1px solid black;">
                <tbody>
                    <tr>
                        <th colspan="2">Apply for mail details</th>
                    </tr>
                    <tr>
                        <th>Name :</th>
                        <td>${name}</td>
                    </tr>
                    <tr>
                        <th>Email Address :</th>
                        <td>${email}</td>
                    </tr>
                    <tr>
                        <th>Mobile Phone :</th>
                        <td>${phone}</td>
                    </tr>
                    <tr>
                        <th>Message :</th>
                        <td>${message}</td>
                    </tr>
                </tbody>
            </table>
            <p>Thanks</p>
        </div>
    `;

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Patel Heating Website" <${senderEmail}>`,
            to: recipientEmail,
            subject: 'Inquiry From Website',
            html: htmlBody,
        });

        return res.status(200).json({
            success: true,
            message: 'Mail sent successfully',
        });

    } catch (error) {
        console.error('Mail Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Error sending mail',
        });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
