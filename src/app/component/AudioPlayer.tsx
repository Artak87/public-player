import * as React from "react";

interface IAudioPlayerProps {
	src: string;
	onTimeUpdate(currentTime: number, normalizedCurrentTime: number): void;
	onInitDuration(duration: number): void;
	onEnded(): void;
}

interface IAudioPlayerState {

}

export class AudioPlayer extends React.Component<IAudioPlayerProps, IAudioPlayerState> {

	private currentTime: number = 0;
	private duration: number = 0;
	private audio: any;

	constructor(props: IAudioPlayerProps, context: any) {
		super(props, context);

		this.state = {
		};
	}

	play() {
		this.audio.play();
	}

	pause() {
		this.audio.pause();
	}

	setNormalizedCurrentTime(value: number) {
		this.audio.currentTime = this.duration * value;
	}

	private init(audio: any) {
		if (!audio) {
			return;
		}
		this.audio = audio;
		audio.ondurationchange = () => {
			this.duration = audio.duration;
			if (this.props.onInitDuration) {
				this.props.onInitDuration(this.duration);
			}
		};
		audio.onended = () => {
			if (this.props.onEnded) {
				this.props.onEnded();
			}
		};
		audio.ontimeupdate = () => this.setCurrentTime(audio.currentTime);
	}

	private setCurrentTime(time: number) {
		this.currentTime = time;
		
		if (this.duration && this.props.onTimeUpdate) {
			this.props.onTimeUpdate(this.currentTime, this.currentTime/this.duration);
		}
	}

	render() {
		return (
			<audio ref={audio => this.init(audio)}>
				<source src={this.props.src} type="audio/mpeg"/>
			</audio>
		);
	}
}
