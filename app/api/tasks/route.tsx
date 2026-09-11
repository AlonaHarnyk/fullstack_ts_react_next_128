import { NextRequest, NextResponse } from "next/server";
import { api, ApiError } from "../api";

export async function GET(req: NextRequest) {
  try {
    const searchParam = req.nextUrl.searchParams.get("test");
    console.log("searchParam", searchParam);
    const { data } = await api.get("/tasks");
    return NextResponse.json(data);
  } catch (error) {
    const err = error as ApiError;
    return NextResponse.json(
      {
        err: err.response?.data.error ?? err.message,
      },
      { status: err.status },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const taskData = await req.json();
    const { data } = await api.post("/tasks", taskData);
    return NextResponse.json(data);
  } catch (error) {
    const err = error as ApiError;
    return NextResponse.json(
      {
        err: err.response?.data.error ?? err.message,
      },
      { status: err.status },
    );
  }
}
