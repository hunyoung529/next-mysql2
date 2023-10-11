import { queryExecute } from "../../db";

export async function GET() {
  const q = "select * from files";
  const data = await queryExecute(q);
  return Response.json(data);
}
export async function POST(req) {
  const { title, umgUrl } = await req.json();
  const q = "insert into files (title,umgUrl) values (?,?)";

  //   const imgUrl = req.nextUrl.searchParams.get("imgUrl");
  await queryExecute(q, [title, umgUrl]);

  return Response.json({ done: "스고이!" });
}
