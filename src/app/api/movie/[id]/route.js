import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { id } = params;

    const response = await fetch(`${process.env.BASE_URL}/movie/${id}?api_key=${process.env.API_KEY}`)
    const data = await response.json();

    if (data.id) {
        return NextResponse.json({
            message: 'here you go',
            data: data,
            success: true
        }, { status: 200 })
    } else {
        return NextResponse.json({
            message: 'invalid movie id',
            success: false
        }, { status: 404 })
    }
}