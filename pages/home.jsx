import { h } from "https://deno.land/x/sift@0.1.6/mod.ts";
import dayjs from "https://cdn.skypack.dev/dayjs@1.10.4"
import Layout from "../components/layout.jsx";

export default async function homePage(request) {

  return (
  <Layout>
    <div className="container mx-auto max-w-screen-md p-4">
        {dayjs().format()}
    </div>
  </Layout>);
}