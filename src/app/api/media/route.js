import { NextResponse } from "next/server";

export const POST = async (req) => {
    const body = await req.json();
    const { id, media } = body
    const response = await fetch(`${process.env.BASE_URL}/movie/${id}/${media}?api_key=${process.env.API_KEY}`)
    const data = await response.json()

    if (data?.id) {
        return NextResponse.json({
            message: 'here you go',
            data,
            success: true
        }, { status: 201 })
    } else {
        return NextResponse.json({
            message: 'something went wrong',
            success: false
        }, { status: 500 })
    }
}