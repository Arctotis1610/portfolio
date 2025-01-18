import { useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null); // オーディオ要素を参照
  const [isPlaying, setIsPlaying] = useState(false); // 再生状態
  const [volume, setVolume] = useState(0.5); // 音量（初期値: 50%）

  // 再生/一時停止を切り替える
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // 音量調整
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div style={styles.container}>
      <h2>BGM Controller</h2>

      {/* オーディオ要素 */}
      <audio ref={audioRef} src="/music/music01.mp3" loop />

      {/* 再生/一時停止ボタン */}
      <button style={styles.button} onClick={togglePlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      {/* 音量調整スライダー */}
      <div style={styles.volumeControl}>
        <label htmlFor="volume">Volume: </label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <span>{Math.round(volume * 100)}%</span>
      </div>
    </div>
  );
};

// スタイル定義
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "300px",
    margin: "20px auto",
    backgroundColor: "#f9f9f9",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#FFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  volumeControl: {
    marginTop: "10px",
  },
};

export default MusicPlayer;
