import getAccs from "@/fn/accs";
import get from "@/fn/get";
import toPrecision from "toprecision";
export const dynamic = "force-dynamic";

export default async function Home() {
  let n = toPrecision(1.2345, 3);
  let accs = getAccs();
  let [pmR] = await Promise.all([get("/papi/v1/account", {}, accs)]);
  console.log(pmR);

  return (
    <div>
      <div>
        NEXTJS: tt:{process.env.tt}, n:{n}, 11
      </div>
      <div>aa {pmR.s2.uniMMR} bb</div>
    </div>
  );
}
