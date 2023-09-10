import resultData from "./AllResults.json";
import EachResult from "./EachResult";
import "./ViewAllResult.css"
function ViewAllResult() {
    return (
        <div className="ViewAllResult">
            <div className="ViewAllBackground">
                <div className="ViewAllTitle">나와 어울리는<div></div>
                    <span className="GreenHighlight">이화여자대학교 건물</span>은?</div>
                {resultData.results
                    ? resultData.results.map((a => {
                        return <EachResult name={a.name} img_path={a.img_path} subname={a.subname}></EachResult>
                    }))
                    : <div></div>
                }
                <footer><button>내 결과로 돌아가기</button></footer>
            </div>
        </div>
    )
}
export default ViewAllResult;