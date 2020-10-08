
import ChildComponent from '../components/child-component'
import react from 'react'
import _JSXStyle from 'styled-jsx/style'

export default function Home() {
  return (
    <>
	<div>
		<h1 className='home'>Home</h1>
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
