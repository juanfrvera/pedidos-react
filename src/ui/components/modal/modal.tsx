export default function Modal({ content, title }: { content: React.ReactNode; title?: string }) {
    return <div className="modal">
        <div className="modal-backdrop"></div>
        <div className="modal-content">
            {title &&
                <div className="modal-header">
                    <div className="modal-title">{title}</div>
                </div>
            }
            <div className="modal-body">
                {content}
            </div>
        </div>
    </div>
}