import {memo, useEffect, useRef, useState} from "react";
import WaveSurfer from "wavesurfer.js";

import {WaveformContianer, Wave, StartPoint, EndPoint} from "./Waveform.styled";
import {colors} from "../../const/uivar";

const WaveForm = memo(props => {
    const waveform = useRef(null);
    const [initialState, setInitialState] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0)
    const abortController = new AbortController();
    const { signal } = abortController;

    useEffect(() => {
        try {
            waveform.current = WaveSurfer.create({
                barWidth: 3,
                barRadius: 3,
                barGap: 2,
                barMinHeight: 1,
                cursorWidth: 1,
                container: `#waveform${props.audio.id}`,
                height: 70,
                progressColor: colors.red,
                responsive: true,
                waveColor: "#D9D9D9",
                cursorColor: "transparent",
                barAlign: 'bottom',
                partialRender: true
            });
            waveform.current.load(props.audio.audio, signal);

            waveform.current.on('ready', () => {
                if (waveform.current) {
                    setDuration(timeFormat(waveform.current.getDuration()));
                    setCurrentTime(timeFormat(waveform.current.getCurrentTime()));
                }
            })

            waveform.current.on('audioprocess', () => {
                if (waveform.current.isPlaying()) {
                    setCurrentTime(timeFormat(waveform.current.getCurrentTime()));
                }
            })
        } catch (e) {
            console.log(e);
        }

        return () => {
            try {
                // Destroy WaveSurfer instance
                waveform.current.destroy(signal);
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('WaveSurfer destruction aborted');
                } else {
                    console.error('Error destroying WaveSurfer:', error);
                }
            } finally {
                abortController.abort();
            }
        }
    }, [props.audio.audio])

    useEffect(() => {
        if (!initialState)
            waveform.current.playPause();
        else setInitialState(false);
    }, [props.playing])

    const timeFormat = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = (time % 60).toFixed(0);
        return `${minutes.toString().padStart(2, '0')}:${seconds.padStart(2, '0')}`;
    }

    return (
        <WaveformContianer key={props.audio.id}>
            <Wave id={`waveform${props.audio.id}`} />
            <StartPoint style={{color: props.playing ? colors.red : 'white'}}>
                {currentTime}
            </StartPoint>
            <EndPoint>
                {duration}
            </EndPoint>
        </WaveformContianer>
    );
})

export default WaveForm;
