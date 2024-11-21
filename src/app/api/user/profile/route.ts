import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/user.models";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
connect()

export async function POST(request: NextRequest) {
    // get data from token
    const userId = await getDataFromToken(request)

    const user = await User.findOne({ _id: userId }).select("-password")

    // if userFind

    return NextResponse.json({
        message: "User found",
        data: user
    })
}