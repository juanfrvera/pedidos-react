import Modal from "@/ui/components/modal/modal";

export default function Products() {
    const modalContent = <div className="modal-body-and-footer">
        <div className="form-body">
            {/* Name */}
            <div className="form-row">
                <label>Name</label>
                <input type="text" className="form-input" />
            </div>

            {/* Price */}
            <div className="form-row">
                <label>Price</label>
                <input type="number" className="form-input" />
            </div>
        </div>
        <div className="modal-footer">
            <button className="button button-primary">Save</button>
            <button className="button button-secondary">Cancel</button>
        </div>
    </div>

    return <div>
        Products
        <Modal content={modalContent} title="Add product"></Modal>
    </div>
}