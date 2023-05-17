import React from 'react'
import Typed from 'react-typed'

function LeftText() {
	return (
		<div className='leftText'>
			<div className='flex-fix'>
				<h2>Hi, </h2>
				<span className='preTitle'>I am </span>
				<h1 className='name_big'>KarthiK Saladi</h1>
				<p className='animated_text'>
					<Typed
						strings={[
							'I am a Software Engineer',
							'I am a Web Developer',
							'I am a Critical Thinker',
							'I am a DevOps Enthusiast',
						]}
						typeSpeed={40}
						backSpeed={50}
						loop
					></Typed>
				</p>
				<br></br>
				<h5>I am a skilled and motivated Operations Engineer with a strong software development background. 💼 My passion lies in collaboration and driving efficiency. 🤝 I have expertise in a range of tools and technologies, including Azure DevOps, Linux, Kubernetes, Docker, Jenkins, Ansible, Terraform, Git, GitHub, Elasticsearch, Prometheus, AWS, and Azure. 💻🚀 </h5>
			</div>
		</div>
	)
}

export default LeftText
