import { NextResponse } from "next/server"
import Datas from "../../../data.json"

const GET = () => {
    return NextResponse.json(Datas)
}

export { GET }