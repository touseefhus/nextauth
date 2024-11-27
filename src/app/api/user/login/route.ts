import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/user.models";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { sendEmail } from "@/helpers/mailer";
import jwt from "jsonwebtoken"
connect()


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 });
        }

        const tokenGeneration = {
            id: user._id,
            name: user.name,
            email: user.email,
        };
        const token = jwt.sign(tokenGeneration, process.env.TOKEN_SECRET!, { expiresIn: '1d' });

        const response = NextResponse.json({ message: "Login Successfully", success: true });

        response.cookies.set("token", token, {
            httpOnly: true,
        });

        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
