import * as React from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import Slider from "material-ui/Slider";
import PlayArrow from "material-ui/svg-icons/av/play-arrow";
import Pause from "material-ui/svg-icons/av/pause";
import {AudioPlayer} from "../component/AudioPlayer";


const style = {
    left: {
        width: "10%",
        float: "left",
    },
    right: {
        width: "90%",
        float: "left",
    },
};

interface IPlayerPageProps {
}

interface IPlayerPageState {
    running?: boolean;
    time?: number;
    duration?: number;
    normalizedCurrentTime?: number;
}

export class PlayerPage extends React.Component<IPlayerPageProps, IPlayerPageState> {

    private player: any;
    private audioPlayer: AudioPlayer;

    constructor(props: IPlayerPageProps, context: any) {
        super(props, context);
        this.state = {
            running: false,
            time: 0,
            duration: 0,
        };
    }

    private handlePlayOrPause() {
        if (this.state.running) {
            this.pause();
        } else {
            this.play();
        }
    }

    private play() {
        if (this.state.time === this.state.duration) {
            this.setState({
                time: 0,
            });
        }
        this.setState({
            running: true,
        });
        this.audioPlayer.play();
    }

    private pause() {
        this.setState({
            running: false,
        });
        this.audioPlayer.pause();
    }

    private handleChangeTime(value: number) {
        this.setState({
            time: value * this.state.duration,
        });
        this.audioPlayer.setNormalizedCurrentTime(value);
    }

    private handleTimeUpdate(currentTime: number, normalizedCurrentTime: number) {
        this.setState({
            time: currentTime,
            normalizedCurrentTime: normalizedCurrentTime,
        });
    }

    private handleInitDuration(duration: number) {
        this.setState({
            duration: duration,
        });
    }

    private handleEnded() {
        this.setState({
            time: this.state.duration,
        });
        this.pause();
    }

    private toTime(value: number): string {
        const minute = Math.floor(value / 60);
        const second = Math.floor(value - minute * 60);
        return minute + ":" + (second < 10 ? "0" + second : second);
    }

    render() {
        const icon = this.state.running ? (<Pause />) : (<PlayArrow />);
        const src = "http://www.stephaniequinn.com/Music/Rondeau.mp3";
        const durationTime = this.toTime(this.state.duration);
        const currentTime = this.toTime(this.state.time);
        return (
            <div>

                <FloatingActionButton
                    style={style}
                    onTouchTap={() => this.handlePlayOrPause()}
                >
                    {icon}
                </FloatingActionButton>
                <span>{currentTime} / {durationTime}</span>

                <Slider
                    value={this.state.normalizedCurrentTime}
                    onChange={(event, value) => this.handleChangeTime(value)}
                />
                <AudioPlayer
                    ref={audioPlayer => this.audioPlayer = audioPlayer}
                    src={src}
                    onTimeUpdate={(currentTime, normalizedCurrentTime) => this.handleTimeUpdate(currentTime, normalizedCurrentTime)}
                    onInitDuration={duration => this.handleInitDuration(duration)}
                    onEnded={() => this.handleEnded()}
                />
            </div>
        );
    }


}
