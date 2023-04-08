import { NextResponse } from "next/server";
import { prisma } from "../../../db";

export async function GET(request) {
    const res = await prisma.Note.findMany();
    return NextResponse.json(res)
}