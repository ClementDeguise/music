import React, { Component } from 'react';

class AudioVisualiser extends Component {
 

	constructor(props) {
	    super(props);
	    this.canvasRef = React.createRef();
	}




	draw() {
	    const { audioData } = this.props;

	    // using the React ref to access html parameters
	    const canvas = this.canvasRef.current;
	    const height = canvas.height;
	    const width = canvas.width;
	    const context = canvas.getContext('2d');
	    


	    context.clearRect(0, 0, width, height);
	    


	    const gradient = context.createLinearGradient(0, 0, 0, height);
		gradient.addColorStop(1, '#401e54');
		gradient.addColorStop(0.8, '#950716');
		gradient.addColorStop(0.4, '#ef162d');
		gradient.addColorStop(0, '#ef6516');


		context.fillStyle = gradient;
	    //context.fillRect(0, 0, width, height);

	    // quantification of the drawing

    	/*
    	Now we set our barWidth to be equal to the canvas width divided by the number of bars (the buffer length). 
    	However, we are also multiplying that width by 2.5, because most of the frequencies will come back 
    	as having no audio in them, as most of the sounds we hear every day are in a certain lower frequency range. 

    	We don't want to display loads of empty bars, therefore we simply shift the ones that will display 
    	regularly at a noticeable height across so they fill the canvas display.
		*/

	    //const barWidth = width * 2.5 / audioData.length;
	    const barWidth = 5;


	    let x = 0;



	    // The limit in display of the bars is due to the saturation of the data, encoded on 1024 points

		// for (const item of audioData) {  
		for (let i = 0; i < audioData.length; i++) {      

			const barHeight = audioData[i]/8;
			context.fillRect(x, height, barWidth, barHeight * -2);

			x += barWidth+1;
    	}


	}



	componentDidUpdate() {
	this.draw();
	}

	render() {
		return (
			<canvas width="300" height={this.props.canvasHeight} ref={this.canvasRef} />
		)
	}

}

export default AudioVisualiser;