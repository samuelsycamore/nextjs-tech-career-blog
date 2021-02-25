import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import PortfolioCard from '../components/portfolio-card'

export default function Portfolio({  }) {
  return (
    <Layout>
      <Head>
        <title>Portfolio - {siteTitle}</title>
      </Head>
      <section className="py-4">
      <h1 className="text-4xl tracking-tighter font-black my-4">Portfolio</h1>

      <PortfolioCard 
          projectName="Weather & Natural Event Tracker" 
          screenshot="/images/eonet-desktop.png"
          liveLink="https://sycamore-weather-tracker.netlify.app" 
          codeLink="https://www.github.com/samuelsycamore/nasa-weather-tracker" 
          caseStudy="/posts/eonet"
          builtWith="React, Google Maps API, NASA EONET API"
          description="Fetches data from NASA's Earth Observatory Natural Event Tracker (EONET) API and dynamically displays it on top of Google Maps."
        />

        <PortfolioCard 
          projectName="Joshu's Zen Koans" 
          screenshot="/images/jzk-desktop.png"
          liveLink="https://joshus-zen-koans.netlify.app" 
          codeLink="https://www.github.com/samuelsycamore/joshu-zen-koans-react" 
          caseStudy="/posts/joshu"
          builtWith="React, Tailwind"
          description="Single-page app introducing the user to a curated collection of Buddhist story-poems that feature the Zen master Joshu."
        />

        <PortfolioCard 
          projectName="SamuelSycamore.com" 
          screenshot="/images/ss-desktop.png"
          liveLink="https://www.samuelsycamore.com" 
          codeLink="https://github.com/samuelsycamore/nextjs-tech-career-blog"
          caseStudy="/posts/dev-blog" 
          builtWith="Next.js, React, Tailwind"
          description="It's what you're looking at right now! My tech blog and developer portfolio." 
        />

        <PortfolioCard 
          projectName="Sycamore Design" 
          screenshot="/images/sd-desktop.png"
          liveLink="https://www.sycamore.design" 
          codeLink="https://github.com/samuelsycamore/sycamore-design"
          caseStudy="/posts/design"
          builtWith="Tailwind"
          description="Marketing site for professional web development services targeted at local business owners." 
        />

        <PortfolioCard 
          projectName="Lyonscape" 
          screenshot="/images/ls-desktop.png"
          liveLink="https://www.lyonscape.com" 
          codeLink="https://www.github.com/samuelsycamore/lyonscape"
          caseStudy="/posts/lyonscape"
          builtWith="Bootstrap, jQuery"
          description="Online portfolio for landscaping company serving Santa Cruz, CA."  
        />
        

      </section>
    </Layout>
  )
}