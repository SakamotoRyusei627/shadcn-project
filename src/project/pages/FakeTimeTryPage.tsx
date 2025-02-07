import { useState } from "react";

function FakeTimeTryPage() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsShow(!isShow)}>
        表示する
      </button>
      {isShow && <div>aaaa</div>}
    </>
  );
}

export default FakeTimeTryPage;
