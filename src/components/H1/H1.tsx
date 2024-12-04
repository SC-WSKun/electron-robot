import './H1.less'
export const H1 = (props: any) => {
    return (
        <div className="flex-center">
            <p className="h1-label">{props.children}</p>
        </div>
    )
}