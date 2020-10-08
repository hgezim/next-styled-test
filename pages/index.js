
import ChildComponent from '../components/child-component'
import react from 'react'

export default function Home() {
  return (
    <>
	<div>
		<h1 class='home'>Home</h1>
		<ChildComponent />
		<p>This is the Home component.</p>
	</div>
	<style jsx>{`
	h1 {
		color: blue;
	}
	.home {
		color: yellow;
	}
	`}</style>
	</>
   )
}
