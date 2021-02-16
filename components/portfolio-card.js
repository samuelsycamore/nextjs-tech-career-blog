import Image from 'next/image'




export default function PortfolioCard(props) {
  return (
    <div className="px-5 py-1 my-5 rounded-xl shadow-lg  border-b border-gray-300">
      <h3 className="py-3">{props.projectName}</h3>
      <div className="flex flex-col justify-center items-center mt-2 mb-4 rounded-xl border border-gray-200">
           <Image
              src={props.screenshot}
              className="rounded-xl"
              height={355}
              width={640}
              alt={props.projectName}
            />
        </div>
        <span className="block italic font-light text-gray-500 py-2">{props.builtWith}</span>
        <p className="border-b-2 border-gray-200">{props.description}</p>
        <ul className="list-disc list-inside mb-5 text-blue-500 p-5">
          <li><a href={props.caseStudy}>Read Case Study</a></li>
          <li><a href={props.liveLink} target="_blank">View Live Site</a></li>
          <li><a href={props.codeLink} target="_blank">View GitHub Repository</a></li>
        </ul>
          

    </div>
    )
  }