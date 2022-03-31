const NodeMailer = require('nodemailer')

class MailService {

    constructor() {
        this.transporter = NodeMailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    /**
     *
     * @param to - where to send
     * @param link - link for confirmation
     * @returns {Promise<void>}
     */
    async sendConfirmEmail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Account activation on the Shaniyazov',
            text: '',
            html:
                `
                    <div>
                        <h1>To activate, follow the link below</h1>
                        <a href="${link}">Click on the link</a>
                    <div>
                `
        })
    }
}

module.exports = new MailService();