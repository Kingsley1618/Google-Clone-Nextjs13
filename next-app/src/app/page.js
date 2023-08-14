import ButtonLayout from "@/components/ButtonLayout";
import Footer from "@/components/Footer";
import GoogleHeader from "@/components/GoogleHeader";
import SearchInput from "@/components/SearchInput";
import Image from "next/image";
export default function Home() {
  return (
<div className = "flex flex-col h-screen">
  <div className="w-full flex-none px-4">
<GoogleHeader />
</div>
<div className="w-full flex-[1] px-4">
<Image width="280" height="100" src = "/googlelogo.png" className = "block mx-auto mt-1">

</Image>

<SearchInput />

<ButtonLayout />
</div>

<div className="w-full flex-none">
<Footer />

</div>
</div>
  )
}
