// export const fetchSingleTask = async (id: Task["id"]) => {
//   const { data } = await nextApi.get<Task>(`/tasks/${id}`);
//   return data;
// };

import { NextRequest, NextResponse } from "next/server";
import { api, ApiError } from "../../api";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const { data } = await api.get(`/tasks/${id}`);
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
