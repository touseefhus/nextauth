import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/user.models";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { sendEmail } from "@/helpers/mailer";
import jwt from "jsonwebtoken"
connect()

export const getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || "";
        const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!)
        return decodedToken.id
    } catch (error: any) {
        throw new Error(error.message)
    }
}