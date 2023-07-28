
import Hero from "@/components/presentational/hero";
import ContentSection from "@/components/presentational/content-section";
import TransitionAnimation from "@/components/common/transition-animation";

export default function Home() {

    return (
    <TransitionAnimation>
        <Hero/>
        <ContentSection/>
    </TransitionAnimation>
  )
}
