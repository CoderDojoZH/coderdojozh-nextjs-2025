import { redirect } from "next/navigation";

export default function Home() {
  // Redirect root to the German site root. This avoids rendering the Next.js starter page.
  redirect("/de");
}
