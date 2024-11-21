import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/user.models";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { sendEmail } from "@/helpers/mailer";
connect()


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { name, email, password } = reqBody
        console.log(reqBody);

        //if user already exist

        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "User Already Exist" }, { status: 400 })

        }


        // password hashing

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // create new user

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })

        // save the new user

        const savedUser = await newUser.save()
        console.log(savedUser);

        //send email verification

        await sendEmail({ email, emailType: "Verify Email", userId: savedUser._id })

        return NextResponse.json({
            message: "user registered successfully",
            success: true,
            savedUser
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}