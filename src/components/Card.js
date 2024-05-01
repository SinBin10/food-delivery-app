import React from 'react'

const Card = () => {
    return (
        <div>
            <div
                className="card mt-3"
                style={{ width: "18rem", maxHeight: "360px" }}
            >
                <img src="https://media.istockphoto.com/id/629423010/photo/chilli-paneer-tikka-or-paneer-kabab.jpg?s=612x612&w=is&k=20&c=er0u8lB3sSkJsm1cVZMNB2AtaQtjcGGgCskEnsVKYFM=" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet.</p>
                    <div className="container w-100">
                        <select className="m-2 h-100 bg-success rounded">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                );
                            })}
                        </select>
                        <select className="m-2 h-100 bg-success rounded">
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total price</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card