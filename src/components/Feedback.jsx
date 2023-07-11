export default function Feedback({feedback}) {
  return (
    <ul>
        {
            feedback.map(item => <li key={item.id} className="mb-3">
                <h6 style={{marginBottom:'0px', fontSize: '1.1rem'}}>{item.comment}</h6>
                <p style={{fontWeight: '600', fontSize: '0.9rem'}}>{item.author}</p>
            </li>)
        }
    </ul>
  )
}