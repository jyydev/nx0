import toPrecision from "toprecision";
export const dynamic = "force-dynamic";

export default function Home() {
  let n = toPrecision(1.2345, 3);
  return (
    <div>
      NEXTJS: tt:{process.env.tt}, n:{n}, 11
    </div>
  );
}
