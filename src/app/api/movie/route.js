import { NextResponse } from "next/server";


export const GET = async () => {
    const response = await fetch(`${process.env.BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}`)
    const data = await response.json()

    if (data.results) {
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