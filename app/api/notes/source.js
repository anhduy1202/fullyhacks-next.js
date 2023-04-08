import { NextResponse } from "next/server";
import { prisma } from "../../../db";

export async function GET() {
  const res = await prisma.Note.findMany();
  return NextResponse.json(res);
}

export async function POST(request) {
  const body = await request.json();
  const { title, author, description, color } = body;
  await prisma.Note.create({
    data: {
      title: title,
      author: author,
      description: description,
      color: color,
    },
  });
  return NextResponse.json(body);
}
