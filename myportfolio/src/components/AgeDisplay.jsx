import { useState, useEffect } from "react";

const AgeDisplay = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const birthDate = new Date("2001-03-03"); // 生年月日（例: 2001年3月3日）

    const calculateAge = () => {
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();

      // 生年月日がまだ来ていない場合は1歳減算
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        calculatedAge--;
      }

      setAge(calculatedAge);
    };

    // 初回レンダリング時に年齢計算
    calculateAge();

    // 1秒ごとに年齢を再計算してUIを更新
    const intervalId = setInterval(calculateAge, 1000);

    // コンポーネントがアンマウントされる際にintervalをクリア
    return () => clearInterval(intervalId);
  }, []); // 依存配列を空にして初回レンダリング時のみ実行

  return (
    <div className="flex items-start">
      <div>
        <p className="text-gray-600">{`age${age}`}</p>
      </div>
    </div>
  );
};

export default AgeDisplay;
