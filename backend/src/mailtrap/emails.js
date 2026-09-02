import { client, sender } from "./mailtrap.config.js"
import {PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE} from "./emailTemplates.js"
import { MailtrapClient } from "mailtrap"

export const sendVerificationEmail = async (email, verificationToken) => {

    const recipient = [{email}]


    try {
        const response = await client.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })

        console.log("Email sent successfully")
        
    } catch (error) {
        
        console.log(`Error sending verification`, error)
        throw new Error(`Error sending verification email: ${error}`)
    }

}

export const sendWelcomeEmail = async(email, name) => {
    const recipient = [{email}]

    try {

        const response = await client.send({
            from: sender,
            to: recipient,
            template_uuid: "84355bf9-ec10-4b2e-af7e-f761df51721a",
            template_variables: {
            company_info_name: "AUTHENTICATION",
            name: name
            }
        })

        console.log("Welcome email sent successfully", response)
        
    } catch (error) {
        console.log(`Error sending email: `, error)

        throw new Error(`Error sending welcome email: ${error}`)
    }
}

export const sendPasswordResetEmail = async(email, reseturl) => {

    const recipient =[{email}]

    try {
        const response = await client.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", reseturl),
            category: "Password Reset"
        })

        console.log("Password reset email sent successfully")
    } catch (error) {
        throw new Error(`Error sending password reset email: ${error}`)
    }

}

export const sendResetSuccessEmail = async(email) => {
    const recipient = [{email}]

    try {
        const response = await client.send({
            from: sender,
            to: recipient,
            subject: "Password reset Successful",
            http: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password reset"

        })

        console.log("Password reset successful")
    } catch (error) {
        throw new Error(`Error sending password reset success email ${error}`)
    }
}