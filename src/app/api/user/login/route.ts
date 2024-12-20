import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/user.models";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        }

        // Validate password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 });
        }

        // Generate token
        const tokenPayload = {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        };
        const token = jwt.sign(tokenPayload, process.env.TOKEN_SECRET!, { expiresIn: '1d' });

        // Send response with token cookie
        const response = NextResponse.json({
            message: "Login Successfully",
            success: true,
            role: user.role
        });

        response.cookies.set("token", token, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production", 
            // sameSite: "strict", 
            // maxAge: 24 * 60 * 60 
        });

        return response;
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
        }
    }
}
