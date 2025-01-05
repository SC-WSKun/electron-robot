import nofileIcon from '@/assets/svg/nofile.svg'
function NoResult(){
    return(
        <div className='no-result'>
            <img src={nofileIcon} />
            <div>暂无结果</div>
        </div>
    )
}

export default NoResult;