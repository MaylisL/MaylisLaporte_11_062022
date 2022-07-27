import './tag.css'

export default function Tag (props) {
    return (
<div className='tag'>
    <p className='tagName'>{props.tagName}</p>
</div>)
}