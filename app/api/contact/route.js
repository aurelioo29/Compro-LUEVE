import { NextResponse } from "next/server";

const SCRIPT_URL = process.env.APPS_SCRIPT_URL;

export async function POST(request) {
  try {
    const { fullname, phone, email } = await request.json();

    if (!fullname || !phone) {
      return NextResponse.json(
        {
          status: false,
          message: "Field fullname & phone number is required",
        },
        { status: 400 }
      );
    }

    if (!email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        {
          status: false,
          message: "Invalid email",
        },
        { status: 400 }
      );
    }

    await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullname, phone, email, source: "website" }),
    });

    const msg = encodeURIComponent(
      `Hi LUEVE, I'm ${fullname}. Phone: ${phone}. Email: ${email || "-"}`
    );
    const wa = `https://wa.me/6282168039285?text=${msg}`;

    return NextResponse.json({ status: true, redirect: wa });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
