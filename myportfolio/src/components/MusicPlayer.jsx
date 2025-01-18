import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

// MP3ファイル名から曲名を生成する関数
const getTrackName = (filePath) => {
  const fileName = filePath.split("/").pop(); // パスからファイル名を取得
  return fileName.replace(/\.[^/.]+$/, ""); // 拡張子を除去
};

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.05);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 曲リスト
  const tracks = [
    "/music/music01.mp3",
    "/music/music02.mp3",
    "/music/music03.mp3",
  ].map((filePath) => ({
    title: getTrackName(filePath), // 曲名をファイル名から生成
    src: filePath,
  }));

  // 再生/一時停止を切り替える
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // 次の曲へスキップ
  const nextTrack = () => {
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentIndex(nextIndex);
    playTrack(nextIndex);
  };

  // 前の曲に戻る
  const prevTrack = () => {
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    setCurrentIndex(prevIndex);
    playTrack(prevIndex);
  };

  // 指定された曲を再生
  const playTrack = (index) => {
    audioRef.current.src = tracks[index].src;
    audioRef.current.load();
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  // 音量調整
  const handleVolumeChange = (e) => {
    const newVolume = Math.min(parseFloat(e.target.value), 0.3); // 最大音量を0.3に制限
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div style={styles.container}>
      <h2>BGM Controller</h2>

      {/* オーディオ要素 */}
      <audio ref={audioRef} src={tracks[currentIndex].src} loop />

      {/* コントロールボタン */}
      <div style={styles.controls}>
        <button style={styles.iconButton} onClick={prevTrack}>
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button style={styles.iconButton} onClick={togglePlay}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <button style={styles.iconButton} onClick={nextTrack}>
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>

      {/* 音量調整スライダー */}
      <div style={styles.volumeControl}>
        <label htmlFor="volume">Volume: </label>
        <input
          id="volume"
          type="range"
          min="0"
          max="0.1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        {/* <span>{Math.round(Math.min(volume * 100, 50))}%</span>{" "}
        表記を最大50%まで%表記してるところ */}
      </div>
    </div>
  );
};

// スタイル定義
const styles = {
  container: {
    width: "200px", // 全体の幅を200pxに拡大
    padding: "8px", // 内側の余白を控えめに設定
    border: "1px solid #ccc",
    borderRadius: "6px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontSize: "12px",
    position: "fixed", // 画面に固定
    bottom: "20px", // 下から20pxの位置
    right: "20px", // 右から20pxの位置
    zIndex: 1000, // 他の要素の上に表示
  },
  trackTitle: {
    margin: "5px 0", // 上下の余白を最小限に
    fontSize: "13px", // 視認性を保ちながら少し大きく
    fontWeight: "bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    gap: "8px", // ボタン間のスペースを削減
    marginTop: "5px",
  },
  iconButton: {
    background: "none",
    border: "none",
    fontSize: "18px", // アイコンサイズを18pxに拡大
    color: "#007BFF",
    cursor: "pointer",
  },
};

export default MusicPlayer;
