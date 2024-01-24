import dbConn from "@/utils/db";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
  try {
    const data = await req.text();
    const body = JSON.parse(data);
    await dbConn();

    await Contact.create(body);

    return NextResponse.json(
      {
        message: "success!",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}
