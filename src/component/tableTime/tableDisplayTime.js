const TableDisplayTime = ({times}) => {
    return (
        <div className="lap-main">
            <div className="lap-container">
                {times.map((item, idx) => {
                    return <div className="lap-content">
                        <div className="lap-idx">{`Lap${idx}`}</div>
                        <div>
                            <span>{item.getLapTime()}</span>
                        </div>
                    </div>
                }).reverse()}
            </div>
        </div>
    )
}
export default TableDisplayTime