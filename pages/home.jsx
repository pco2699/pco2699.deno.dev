import { h } from "https://deno.land/x/sift@0.1.6/mod.ts";
import dayjs from "https://cdn.skypack.dev/dayjs@1.10.4";
import relativeTime from "https://cdn.skypack.dev/dayjs@1.10.4/plugin/relativeTime";
import objectSupport from "https://cdn.skypack.dev/dayjs@1.10.4/plugin/objectSupport";
import Layout from "../components/layout.jsx";

export default async function homePage(request) {
  dayjs.extend(relativeTime);
  dayjs.extend(objectSupport);

  return (
  <Layout>
    <div className="container mx-auto max-w-screen-md p-4">
        {dayjs({ hour:24, minute:59 }).fromNow().format()}
    </div>
  </Layout>);
}