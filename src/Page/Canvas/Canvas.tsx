import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { drawSomething } from './Draw'

const useStyles = makeStyles({
	container: {
		margin: 'auto',
		width: '480px',
	},
	canvas: {
	},
})


export const CanvasPlayground = () => {
	const canvasRef = React.createRef<HTMLCanvasElement>()
	const styles = useStyles()

 	React.useEffect(() => {
		const context2d = canvasRef.current?.getContext('2d')
		if (context2d != null) {
			drawSomething(context2d)
		}
 	}, [canvasRef])

 	return (<div className={styles.container}>
		<canvas width={480} height={320}
			ref={canvasRef} className={styles.canvas}
		/>
	</div>)
}